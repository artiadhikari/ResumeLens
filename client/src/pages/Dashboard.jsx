import { FilePenLineIcon, PencilIcon, PlusIcon, TrashIcon, UploadCloud, UploadCloudIcon, XIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { dummyResumeData } from '../assets/assets'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import api from '../configs/api'
import toast from 'react-hot-toast'
import pdfToText from 'react-pdftotext'


const Dashboard = () => {

  const {user,token}=useSelector(state=>state.auth)


  const colors = ['#9333ea', '#d97706', '#dc2626', '#0284c7', '#16a34a']
  const [allResumes, setAllResumes] = useState([])
  const [showCreateResume, setShowCreateResume] = useState(false)
  const [showUploadResume, setShowUploadResume] = useState(false)
  const [title, setTitle] = useState('')
  const [resume, setResume] = useState(null)
  const [resumeID, setResumeId] = useState('')
  const [editResumeId, setEditResumeId] = useState('')

  const navigate = useNavigate()

  const [isLoading, setIsLoading]=useState(false)

  const loadAllResumes = async () => {
    setAllResumes(dummyResumeData)
  }

  const createResume= async (event) => {
   try {
    event.preventDefault()
    const {data}= await api.post('/api/resumes/create',{title},{headers:{
      Authorization:token
    }})

    setAllResumes([...allResumes, data.resume])
    setTitle('')
    setShowCreateResume(false)
    navigate(`/app/builder/${data.resume._id}`)
   } catch (error) {
    toast.error(error?.response?.data?.message||error.message)
   }
  }

 const uploadResume = async (event) => {
  event.preventDefault()
  setIsLoading(true)
  try {
    const resumeText = await pdfToText(resume)
    const { data } = await api.post('/api/ai/upload-resume', {title, resumeText}, {headers:
    { Authorization: token }})
    setTitle('')
    setResume(null)
    setShowUploadResume(false)
    navigate(`/app/builder/${data.resumeId}`)
  } catch (error) {
    toast.error(error?.response?.data?.message || error.message)
  }
  setIsLoading(false)
}


  const editTitle =async (event) => {
      event.preventDefault()
  }
  const deleteResume =async (resumeId) => {
    const confirm=window.confirm('Are you sure you want to delete this resume?')
    if(confirm){
      setAllResumes(prev=>prev.filter(resume=>resume._id!==resumeId))
    }
      event.preventDefault()
  }

  useEffect(() => {
    loadAllResumes()
  }, [])

  
  return (
    <div>
      <div className='max-w-7xl mx-auto px-4 py-8'>
        <p className='text-2xl font-medium mb-6 bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent sm:hidden'>Welcome, Joe Doe</p>

        <div className='flex flex-wrap gap-4 mb-6'>
          <button onClick={() => setShowCreateResume(true)} className='w-full sm:w-auto bg-white h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer px-6'>
            <PlusIcon className='size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-indigo-300 to-indigo-500 text-white rounded-full' />
            <p className='text-sm group-hover:text-indigo-600 transition-all duration-300'>Create Resume</p>
          </button>

          <button onClick={()=>setShowUploadResume(true)} className='w-full sm:w-auto bg-white h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-purple-500 hover:shadow-lg transition-all duration-300 cursor-pointer px-6'>
            <UploadCloudIcon className='size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-purple-300 to-purple-500 text-white rounded-full' />
            <p className='text-sm group-hover:text-purple-600 transition-all duration-300'>Upload Existing</p>
          </button>
        </div>

        <hr className='border-slate-300 my-6' />

        <div className='grid grid-cols-5 sm:grid-cols-4 gap-4'>
          {allResumes.map((resume, index) => {
            const baseColor = colors[index % colors.length]
            const cardBackground = `${baseColor}20`
            const cardBorder = `${baseColor}80`
            const dateColor = `${baseColor}90`

            return (
              <button onClick={()=>navigate(`/app/builder/${resume._id}`)}
                key={index}
                className='relative w-full h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer text-left px-4 py-4'
                style={{ background: cardBackground, borderColor: cardBorder }}
              >
                <FilePenLineIcon className='size-7 transition-all group-hover:scale-105' style={{ color: baseColor }} />
                <p className='text-sm font-semibold transition-all group-hover:text-slate-900' style={{ color: baseColor }}>
                  {resume.title}
                </p>

                <p className='absolute bottom-3 text-[11px] transition-all' style={{ color: dateColor }}>
                  Updated on {new Date(resume.updatedAt).toLocaleDateString()}
                </p>

                <div onClick={(e) => e.stopPropagation()} className='absolute top-3 right-3 hidden items-center gap-2 group-hover:flex'>
                  <TrashIcon  onClick={()=>deleteResume(resume._id)}className='size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors' />
                  <PencilIcon
                    onClick={(e) => {
                      e.stopPropagation()
                      setEditResumeId(resume._id)
                      setTitle(resume.title)
                    }}
                    className='size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors'
                  />
                </div>
              </button>
            )
          })}
        </div>

        {showCreateResume && (
          <div className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center'>
            <form onSubmit={createResume} onClick={(e) => e.stopPropagation()} className='relative bg-white border shadow-md rounded-lg w-full max-w-sm p-6'>
              <h2 className='text-xl font-bold mb-4'>Create a Resume</h2>
              <input
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Enter resume title'
                className='w-full px-4 py-2 mb-4 border border-slate-300 rounded focus:outline-none focus:border-green-600'
                required
              />

              <button type='submit' className='w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors'>Create Resume</button>

              <XIcon
                className='absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors'
                onClick={() => {
                  setShowCreateResume(false)
                  setTitle('')
                }}
              />
            </form>
          </div>
        )}
{showUploadResume && (
  <div
    onClick={() => setShowUploadResume(false)}
    className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
  >
    <form
      onSubmit={uploadResume}
      onClick={(e) => e.stopPropagation()}
      className="relative bg-white rounded-xl shadow-xl w-full max-w-sm p-6"
    >
      <h2 className="text-xl font-bold mb-4">Upload Resume</h2>

      <input
        type="text"
        placeholder="Enter resume title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full px-4 py-2 mb-4 border border-slate-300 rounded-md focus:outline-none focus:border-green-600"
        required
      />

      <label
        htmlFor="resume-input"
        className="block text-sm text-slate-700"
      >
        Select Resume File

        <div
          className="flex flex-col items-center justify-center gap-2
          border border-dashed border-slate-300 rounded-md
          p-4 py-10 my-4 cursor-pointer
          hover:border-green-500 hover:text-green-700
          transition-colors"
        >
          {resume ? (
            <p className="text-green-700">{resume.name}</p>
          ) : (
            <>
              <UploadCloud className="size-14 stroke-1" />
              <p>Upload Resume</p>
            </>
          )}
        </div>
      </label>

      <input
        id="resume-input"
        type="file"
        accept=".pdf,.doc,.docx"
        hidden
        onChange={(e) => setResume(e.target.files[0])}
      />

      <button
        type="submit"
        className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
      >
        Upload Resume
      </button>

      <XIcon
        className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer"
        onClick={() => {
          setShowUploadResume(false)
          setTitle('')
          setResume(null)
        }}
      />
    </form>
  </div>
)}

        {editResumeId && (
          <div className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center'>
            <form onSubmit={editTitle} onClick={(e) => e.stopPropagation()} className='relative bg-white border shadow-md rounded-lg w-full max-w-sm p-6'>
              <h2 className='text-xl font-bold mb-4'>Edit Resume Title</h2>
              <input
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Enter resume title'
                className='w-full px-4 py-2 mb-4 border border-slate-300 rounded focus:outline-none focus:border-green-600'
                required
              />

              <button type='submit' className='w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors'>Update</button>

              <XIcon
                className='absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors'
                onClick={() => {
                  setEditResumeId('')
                  setTitle('')
                }}
              />
            </form>
          </div>
        )}




      </div>
    </div>
  )
}

export default Dashboard
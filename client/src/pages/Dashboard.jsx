import { FilePenLineIcon, PencilIcon, PlusIcon, TrashIcon, UploadCloudIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { dummyResumeData } from '../assets/assets'

const Dashboard = () => {
  const colors = ['#9333ea', '#d97706', '#dc2626', '#0284c7', '#16a34a']
  const [allResumes, setAllResumes] = useState([])

  const loadAllResumes = async () => {
    setAllResumes(dummyResumeData)
  }

  useEffect(() => {
    loadAllResumes()
  }, [])

  return (
    <div>
      <div className='max-w-7xl mx-auto px-4 py-8'>
        <p className='text-2xl font-medium mb-6 bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent sm:hidden'>Welcome, Joe Doe</p>

        <div className='flex flex-wrap gap-4 mb-6'>
          <button className='w-full sm:w-auto bg-white h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer px-6'>
            <PlusIcon className='size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-indigo-300 to-indigo-500 text-white rounded-full' />
            <p className='text-sm group-hover:text-indigo-600 transition-all duration-300'>Create Resume</p>
          </button>

          <button className='w-full sm:w-auto bg-white h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-purple-500 hover:shadow-lg transition-all duration-300 cursor-pointer px-6'>
            <UploadCloudIcon className='size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-purple-300 to-purple-500 text-white rounded-full' />
            <p className='text-sm group-hover:text-purple-600 transition-all duration-300'>Upload Existing</p>
          </button>
        </div>

        <hr className='border-slate-300 my-6' />

        <div className='grid grid-cols-1 sm:grid-cols-4 gap-4'>
          {allResumes.map((resume, index) => {
            const baseColor = colors[index % colors.length]
            const cardBackground = `${baseColor}20`
            const cardBorder = `${baseColor}80`
            const dateColor = `${baseColor}90`

            return (
              <button
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

                <div className='absolute top-3 right-3 hidden items-center gap-2 group-hover:flex'>
                  <TrashIcon className='size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors' />
                  <PencilIcon className='size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors' />
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
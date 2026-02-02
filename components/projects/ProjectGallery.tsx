import Image from 'next/image'
import React from 'react'

interface Props {
  images: string[]
}

const ProjectGallery = ({ images }: Props) => (
  <section className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
    {images.map((src, idx) => (
      <Image
        key={idx}
        src={src}
        alt={`Gallery image ${idx + 1}`}
        width={400}
        height={300}
        className='rounded-lg w-full h-64 object-cover shadow'
      />
    ))}
  </section>
)

export default ProjectGallery

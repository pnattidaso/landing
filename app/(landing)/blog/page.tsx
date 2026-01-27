import { getPayload } from 'payload'
import configPromise from '@payload-config' // Payload จะสร้าง alias นี้ให้
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/landing/Navbar'   
import Footer from '@/components/landing/Footer'    

export default async function BlogIndex() {
  const payload = await getPayload({ config: configPromise })

  // ดึงข้อมูลบทความจาก Collection 'posts' (ที่คุณจะสร้างใน Payload)
  const posts = await payload.find({
    collection: 'posts',
    limit: 10,
  })

  return (
    <div className="container mx-auto pt-36 px-4">
        <Navbar />
      <h1 className="text-4xl font-bold mb-8 text-center">บทความของเรา</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.docs.map((post: any) => (
          <div key={post.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
             {/* ตัวอย่างการแสดงผล (ต้องปรับตาม Field ที่คุณสร้างจริง) */}
            {post.coverImage && (
               <div className="relative h-48 w-full">
                 <Image 
                   src={post.coverImage.url} 
                   alt={post.title} 
                   fill 
                   className="object-cover"
                 />
               </div>
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
                อ่านเพิ่มเติม &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Footer />        
    </div>
  )
}
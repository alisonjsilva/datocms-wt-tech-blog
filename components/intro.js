import Link from 'next/link'
export default function Intro({
  logo
}) {
  
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <Link href="/">
        <a><img src={logo.url}></img></a>
      </Link>
      
      
      <h1 className="text-center md:text-left text-lg mt-5 md:pl-8 text-black-400 md:text-6xl font-bold">
        WT Tech Blog<br/>
      </h1>
      {/* <h4 className="clear-left mt-5 md:pl-8 text-black-400 md:text-1xl font-bold">
        We Inspire Growth for Ambitious Brands</h4> */}
    </section>
  )
}

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  
  let name = 'kim';

  return (

    <div>
      <div className='navbar'>
        <Link href='/'>홈</Link>
        <Link href='/list'>상품목록</Link>
      </div>
      <h4 className='title'>apple fresh</h4>
      <p className='title-sub'>by dev {name}</p>

    </div>
  )
}

import logo from "../../assets/logo s2 1.png"
function Headeer() {
    return ( 
        <div className="h-20 md:px-20 px-3 flex items-center justify-between" >
          <button className="rounded-md bg-custum-pri text-white py-3 px-5 font-bold	">تسجيل الدخول</button>
          <div className="w-1/2 flex justify-between" >
            <ul className="md:w-1/2 w-1/3 flex items-center justify-between md:justify-evenly " >
              <li className="text-lg	lg:visible sm:invisible invisible">تواصل معنا</li>
              <li className='text-lg	lg:visible sm:invisible invisible'>عن المنصة</li>
            </ul>
            <div className='md:w-1/2 w-1/3 flex items-center justify-between md:justify-evenly '>
              <div className='lg:visible sm:invisible invisible text-custum-pri text-2xl	' >منصة الجار للجار</div>
              <div className="logo">
                <img src={logo} alt="" />
              </div>
            </div>
          </div>
        </div>
     );
}

export default Headeer;
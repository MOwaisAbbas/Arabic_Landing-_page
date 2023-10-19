
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo s2 1.png"
function Headeer() {
  return (
    <>

      <div className="h-20 md:px-20 px-3   flex items-center justify-between" >
        <button className="rounded-md bg-custum-pri text-white py-3 px-5 font-bold	">تسجيل الدخول</button>
        <div className="w-1/2 flex lg:justify-between justify-end" >
          <ul className="md:w-1/2 w-1/3 lg:flex items-center lg:visible hidden md:justify-evenly " >
            <li className="text-lg	lg:visible sm:invisible  invisible">
              <NavLink to={"/list"}>

                تواصل معنا
              </NavLink>

            </li>
            <li className='text-lg	lg:visible sm:invisible  invisible'>
              <NavLink to={"/"}>

                عن المنصة
              </NavLink>

            </li>
          </ul>
          <div className='md:w-1/2 w-1/3 lg:flex  items-center justify-evenly  '>
            <div className='lg:block hidden   text-custum-pri text-2xl	' >منصة الجار للجار</div>
            <div className="logo flex justify-end">
              <img className="w-fit my-auto" src={logo} alt="" />
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

export default Headeer;
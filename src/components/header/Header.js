
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo s2 1.png";
import { PiList } from "react-icons/pi"
function Headeer() {
  return (
    <>

      <div className="h-20 md:px-20 px-3    lg:flex hidden items-center justify-between" >
        <button className="rounded-md bg-custum-pri text-white py-3 px-5 font-bold	">
          <NavLink to={"/login"}>

          تسجيل الدخول
          </NavLink>
          </button>
        <div className="xl:w-1/2 w-3/4  flex lg:justify-between justify-end" >
          <ul className="md:w-1/2 w-1/3 flex items-center lg:visible md:justify-evenly " >
            <li className="text-lg	">
              <NavLink to={"/"}>

                تواصل معنا
              </NavLink>

            </li>
            <li className='text-lg	'>
              <NavLink to={"/list"}>

                عن المنصة
              </NavLink>

            </li>
          </ul>
          <div className='lg:w-1/2 w-2/3 flex  items-center justify-evenly  '>
            <div className='lg:block  text-custum-pri text-2xl	' >منصة الجار للجار</div>
            <div className="logo flex justify-end">
              <img className="w-fit my-auto" src={logo} alt="" />
            </div>
          </div>
        </div>
      </div >
      <div className="h-20 md:px-20 px-3 lg:hidden flex items-center justify-between" >
        <button className="rounded-md bg-custum-pri text-white p-3  font-bold	"><PiList /></button>
        <div className="logo flex justify-end">
          <img className="w-fit my-auto" src={logo} alt="" />
        </div>
      </div >
    </>
  );
}

export default Headeer;
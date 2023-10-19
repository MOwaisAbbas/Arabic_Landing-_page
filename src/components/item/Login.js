import img from "../../assets/Group 20379.png"
import logo from "../../assets/logo s2 1.png"
import { FaRegUser } from "react-icons/fa"
import { AiOutlineLock, AiOutlineEye } from "react-icons/ai"
function Login() {
    return (
        <>
            <div className="flex lg:flex-row items-center flex-col">
                <div className="grid place-items-center lg:w-1/2 w-full lg:order1 lg:p-0 p-5 order-2">
                    <div className="border border-white xl:w-2/3 w-5/6">
                        <div className="flex justify-center items-center gap-6">
                            <p className="text-custum-pri text-2xl font-bold">منصة الجار للجار</p>
                            <img src={logo} />
                        </div>
                        <div className="flex flex-col items-center justify-center gap-6 w-3/4  mx-auto">
                            <h2 className="text-custum-pri text-2xl font-extrabold">تسجيل الدخول</h2>
                            <p className="text-xl font-normal text-center">
                                يا! أدخل التفاصيل الخاصة بك للحصول على التوقيع في حسابك
                            </p>
                        </div>
                        <div>
                            <div className='flex flex-col items-end  gap-3'>
                                <label className="font-normal text-base" htmlFor="input_1">
                                    البريد الالكتروني
                                </label>
                                <div className="w-full relative">
                                    <div className="absolute right-0 top-4 h-full w-8 text-custum-pri">
                                        <FaRegUser />
                                    </div>

                                    <input type="email" id="input_1" className='border text-right border-custum-pri rounded-md px-10 py-3  w-full' name="input_1" placeholder='otfrtda@gmail.com' />
                                </div>

                            </div>
                            <div className='flex flex-col items-end  gap-3'>
                                <label className="font-normal text-base" htmlFor="input_2">
                                    كلمة المرور
                                </label>
                                <div className="w-full relative">
                                    <div className="absolute right-0 top-4 h-full w-8 text-custum-pri">
                                        <AiOutlineLock />
                                    </div>
                                    <button className="absolute left-0 top-0 h-full ps-3 text-custum-pri">
                                        <AiOutlineEye />
                                    </button>
                                    <input type="password" id="input_2" className='border text-right border-custum-pri rounded-md px-10 py-3  w-full' name="input_2" placeholder='أدخل نص الرسالة' />
                                </div>

                            </div>
                            <div className="flex justify-between p-2">
                                <p className="font-bold flex items-center justify-center">
                                    هل نسيت كلمة المرور
                                </p>
                                <div className='flex  items-center gap-3'>
                                    <label className="font-light text-base" htmlFor="input_3">
                                        تذكرنى!
                                    </label>


                                    <input type="checkbox" id="input_3" className='border text-right border-custum-pri rounded-md py-3 px-4 w-5' name="input_3" placeholder='أدخل نص الرسالة' />

                                </div>

                            </div>
                            <button className="bg-custum-pri text-white w-full p-4 rounded-md mt-4">
                                تسجيل الدخول
                            </button>
                        </div>
                        <p className="text-center text-lg p-4">
                            ليس لديك حساب؟ اضغط هنا
                            <span className="text-custum-pri"> للتسجيل الآن</span>

                        </p>

                    </div>
                </div>
                <div className="grid place-items-center lg:order-2 w-full order-1 lg:w-1/2 bg-custum-back border lg:p-20 sm:p-10">
                    <img src={img} />
                </div>
            </div>

        </>
    );
}

export default Login;
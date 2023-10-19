import img from "../../assets/Group 20391.png"
import logo from "../../assets/logo s2 1.png"
import vector from "../../assets/Vector.png"
import { FaRegUser } from "react-icons/fa"
import { GoMail } from "react-icons/go"
import { AiOutlineLock, AiOutlineEye } from "react-icons/ai"
function Signup() {
    return (
        <>
            <div className="flex lg:flex-row   flex-col">
                <div className="grid place-items-center lg:w-1/2 w-full lg:order1  p-5 py-10  order-2">
                    <div className="border border-white xl:w-3/4 w-5/6">
                        <div className="flex justify-center items-center gap-6">
                            <p className="text-custum-pri text-2xl font-bold">منصة الجار للجار</p>
                            <img src={logo} />
                        </div>
                        <div className="flex flex-col items-center justify-center gap-6 w-3/4  mx-auto">
                            <h2 className="text-custum-pri text-2xl font-extrabold">انشاء حساب </h2>

                        </div>
                        <div>
                            <div className="grid sm:grid-cols-2  gap-4 mt-4">
                                <div className='flex flex-col items-end  gap-3'>
                                    <label className="font-normal text-base" htmlFor="input_1">
                                        اسم العائلة
                                    </label>
                                    <div className="w-full relative">
                                        <div className="absolute right-0 top-4 h-full w-8 text-custum-pri">
                                            <FaRegUser />
                                        </div>

                                        <input type="email" id="input_1" className='border text-right border-custum-pri rounded-md px-10 py-3  w-full' name="input_1" placeholder='الاسم الثاني' />
                                    </div>

                                </div>
                                <div className='flex flex-col items-end  gap-3'>
                                    <label className="font-normal text-base" htmlFor="input_1">
                                        الاسم الأول
                                    </label>
                                    <div className="w-full relative">
                                        <div className="absolute right-0 top-4 h-full w-8 text-custum-pri">
                                            <FaRegUser />
                                        </div>

                                        <input type="email" id="input_1" className='border text-right border-custum-pri rounded-md px-10 py-3  w-full' name="input_1" placeholder='الاسم الاول' />
                                    </div>

                                </div>
                            </div>
                            <div className='flex flex-col items-end  gap-3'>
                                <label className="font-normal text-base" htmlFor="input_1">
                                    البريد الالكتروني                                </label>
                                <div className="w-full relative">
                                    <div className="absolute right-0 top-4 h-full w-8 text-custum-pri">
                                        <GoMail />
                                    </div>
                                    <button className="absolute top-1.5 left-3 bg-custum-pri text-white font-bold rounded-md text-sm px-4 py-2">
                                        أرسل رمز التحقق
                                    </button>

                                    <input type="email" id="input_1" className='border text-right border-custum-pri rounded-md px-10 py-3  w-full' name="input_1" placeholder='User@emial.com' />
                                </div>

                            </div>
                            <div className="grid sm:grid-cols-2  gap-4 mt-4">
                                <div className='flex flex-col items-end  gap-3'>
                                    <label className="font-normal text-base" htmlFor="input_1">
                                        رقم الجوال


                                    </label>
                                    <div className="w-full relative">
                                        <div className="absolute right-0 top-4 h-full w-8 text-custum-pri">
                                            <FaRegUser />
                                        </div>

                                        <input type="number" id="input_1" className='border text-right border-custum-pri rounded-md px-10 py-3  w-full' name="input_1" placeholder='+914566565464' />
                                    </div>

                                </div>
                                <div className='flex flex-col items-end  gap-3'>
                                    <label className="font-normal text-base" htmlFor="input_1">
                                        اسم المستخدم
                                    </label>
                                    <div className="w-full relative">
                                        <div className="absolute right-0 top-4 h-full w-8 text-custum-pri">
                                            <FaRegUser />
                                        </div>

                                        <input type="email" id="input_1" className='border text-right border-custum-pri rounded-md px-10 py-3  w-full' name="input_1" placeholder='اسم المستخدم' />
                                    </div>

                                </div>
                            </div>
                            <div className="grid sm:grid-cols-2 md:gap-0 gap-4 mt-4">
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
                                        <input type="password" id="input_2" className='border text-right border-custum-pri rounded-md px-10 py-3  w-full' name="input_2" placeholder='' />
                                    </div>

                                </div>
                                <div className="px-3 sm:mt-0 mt-4 flex gap-4 flex-col justify-between">
                                    <p className="text-right text-sm">رمز التفعيل المرسل عبر البريد الالكتروني</p>
                                    <div className="flex justify-between items-center">
                                        <input type="number" className=" rounded-md w-14 h-12 border text-center border-custum-pri" maxLength="1" minLength="1" placeholder="1" />
                                        <input type="number" className=" rounded-md w-14 h-12 border text-center border-custum-pri" maxLength="1" minLength="1" placeholder="1" />
                                        <input type="number" className=" rounded-md w-14 h-12 border text-center border-custum-pri" maxLength="1" minLength="1" placeholder="1" />
                                        <input type="number" className=" rounded-md w-14 h-12 border text-center border-custum-pri" maxLength="1" minLength="1" placeholder="1" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 ">
                                <p className="text-right font-bold p-2 pb-3">ارفق صورة</p>
                                <div  className="w-full h-36 rounded-md border border-custum-pri border-dashed grid place-items-center" >
                                    <div className="flex flex-col items-center w-1/3">
                                        <img src={vector} alt=""/>
                                        <p className="text-center">
                                        قم بالسحب والإفلات هنا
                                        يتصفح ملفًا لتحميله
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 ">
                                <p className="text-right font-bold p-2 pb-3">لموقع الجغرافي</p>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924237.7088400576!2d66.49600118540117!3d25.19298377106345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1697717697691!5m2!1sen!2s" className="w-full rounded-md" allowfullscreen="allowfullscreen" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>

                            <div>
                                <p className="text-right p-3">انقر على أيقونة خريطة الموقع وحدد عنوانك المفضل من الخريطة لتعيين موقعك.</p>
                            </div>

                            <div className='flex justify-end  items-center gap-2'>
                                <label className="font-light text-base" htmlFor="input_3">
                                    الموافقة على سياسة الاستخدام والخصوصية
                                </label>


                                <input type="checkbox" id="input_3" className='border text-right border-custum-pri rounded-md py-3 px-4 w-5' name="input_3" placeholder='أدخل نص الرسالة' />

                            </div>

                            <button className="bg-custum-pri text-white w-full p-4 rounded-md mt-4">
                                أرسل رمز التحقق
                            </button>
                        </div>

                    </div>
                </div>
                <div className="flex justify-center items-center lg:order-2 h-full w-full order-1 lg:w-1/2 bg-custum-back border p-20 ">
                    <img className="xl:p-20 md:my-20" src={img} />

                </div>
            </div>

        </>
    );
}

export default Signup;
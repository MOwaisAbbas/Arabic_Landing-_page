import playStore from "../../assets/image 81.png"
import huawei from "../../assets/image 80.png"
import apple from "../../assets/image 79.png"
import logoWhite from "../../assets/logo s2 3.png"


function Footer() {
    return (<>
        <div className=" bg-custum-pri   flex flex-col justify-end">
            <div className="flex sm:flex-row flex-col ites-center justify-between p-5 px-20">
                <div className="lg:w-3/12 sm:w-4/12 sm:order-1 order-2 text-white sm:text-right text-center">
                    <p className="md:text-sm text-sm p-6">
                        الأحكام والشروط
                    </p>
                    <p className="md:text-2xl text-md font-bold px-6">
                        تنزيل التطبيق
                    </p>
                    <div className="md:flex items-center justify-end  gap-3 md:p-6">
                        <button className="bg-white md:m-0 mt-5 mx-1 p-3 rounded-full"><img src={huawei} alt="" /></button>
                        <button className="bg-white md:m-0 mt-5 mx-1 p-3 rounded-full"><img src={apple} alt="" /></button>
                        <button className="bg-white md:m-0 mt-5 mx-1 p-3 rounded-full"><img src={playStore} alt="" /></button>
                    </div>
                </div>
                <div className="lg:w-3/12 sm:w-2/4 sm:order-2 order-1 sm:text-right text-center" >
                    <div className="text-white flex items-center sm:justify-end justify-center gap-5">
                        <p className="text-2xl font-bold">منصة الجار للجار</p>
                        <img src={logoWhite} alt="" />
                    </div>
                    <p className="text-white font-normal">
                        وقد شاسعة تكاليف ومحاولة. غير في شمال وقدّموا, يكن و تنفّس طوكيو التبرعات, يعادل العظمى الحيلولة أم بال. تحرّك ارتكبها والإتحاد و مدن, وقبل أهّل ارتكبها لها أي. هو فقد فرنسا الفرنسية.

                    </p>
                </div>
            </div>
            <div className="grid place-items-center	border-t-2 text-white font-normal py-5 " >Design & Developed By ZySoftec</div>

        </div>


    </>);
}

export default Footer;
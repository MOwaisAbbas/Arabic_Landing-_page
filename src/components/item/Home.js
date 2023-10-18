import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import bgImage from "../../assets/Rectangle 9777.png"





function Home() {
    return (
        <>
      
            <div className='relative'>
                <img className='w-full mx-auto' src={bgImage} alt='background Image' />
                <div className='  absolute  top-0 left-0  h-full w-full sm:flex hidden items-center justify-evenly'>

                    <div className="px-5"><button className='bg-custum-sec rounded-md p-2 text-white text-xl sm:text-2xl'><IoIosArrowBack /></button></div>
                    <div className="w-11/12 flex flex-col items-end justify-between " >
                        <h1 className='xl:text-5xl md:text-4xl  sm:text-2xl text-xl  xl:w-1/2 md:w-4/5 text-right xl:leading-normal md:leading-normal  font-bold text-white'>
                            <span className='text-custum-sec' >هذا إعادة المتّبعة, أي الطريق وسمّيت قام, كان بـ </span>
                            وترك التكاليف. ثانية وكسبت لإعادة أم مما, دول حكومة
                        </h1>
                        <p className='lg:w-2/5 w-full text-white md:text-base sm:text-sm text-right xl:p-10 p-4 border rounded-md leading-9 xl:text-lg  text-xs	 font-bold lg:mt-10 mt-5'> هذا إعادة المتّبعة, أي الطريق وسمّيت قام, كان بـ وترك التكاليف. ثانية وكسبت لإعادة أم مما, دول حكومة .أي الطريق وسمّيت قام, كان بـ وترك</p>
                        <div className='xl:text-2xl lg:text-xl md:text-base	text-sm text-custum-sec text-left lg:w-2/5 w-full lg:mt-6 mt-2' >سمّيت قام</div>
                    </div>
                    <div className='px-5'><button className='bg-custum-sec rounded-md p-2 text-white text-xl'><IoIosArrowForward /></button></div>

                </div>

            </div>
        </>
    );
}

export default Home;
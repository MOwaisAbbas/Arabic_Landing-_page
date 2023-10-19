import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import bgImage from "../../assets/Rectangle 9777.png"





function Home() {
    return (
        <>
      
            <div className='relative'>
                <img className='w-full mx-auto' src={bgImage} alt='background Image' />
                <div className='  absolute  top-0 left-0  h-full w-full flex items-center justify-evenly'>

                    <div className="sm:px-5 px-2"><button className='bg-custum-sec rounded-md sm:p-2 p-1 text-white sm:text-xl tex-xs '><IoIosArrowBack /></button></div>
                    <div className="w-11/12 flex flex-col items-end justify-between " >
                        <h1 className='xl:text-5xl md:text-4xl  sm:text-2xl text-xl text-xs xl:w-1/2 md:w-4/5 text-right xl:leading-normal md:leading-normal  font-bold text-white'>
                            <span className='text-custum-sec' >هذا إعادة المتّبعة, أي الطريق وسمّيت قام, كان بـ </span>
                            وترك التكاليف. ثانية وكسبت لإعادة أم مما, دول حكومة
                        </h1>
                        <p className='lg:w-2/5 sm:w-2/4 sm:block hidden w-full text-white md:text-base sm:text-sm text-right xl:p-10 p-1 border rounded-md sm:leading-9 xl:text-lg  text-xs	 font-bold lg:mt-10 sm:mt-5 mt-3 '> 
                        هذا إعادة المتّبعة, أي الطريق وسمّيت قام, كان بـ وترك التكاليف. ثانية وكسبت لإعادة أم مما, دول حكومة .أي الطريق وسمّيت قام, كان بـ وترك</p>
                        <p className='lg:w-2/5 w-2/5 sm:hidden block text-white md:text-base sm:text-sm text-right xl:p-10 p-1 border rounded-md sm:leading-9 xl:text-lg  text-xs	 font-bold lg:mt-10 sm:mt-5 mt-3 '> 
                        هذا إعادة المتّبعة, أي الطريق وسمّيت قام, كان بـ وترك التكاليف...
                        </p>
                        <div className='xl:text-2xl lg:text-xl md:text-base	text-xs text-custum-sec text-left sm:w-2/5 w-2/5 lg:mt-6 mt-2' >سمّيت قام</div>
                    </div>
                    <div className='sm:px-5 px-2'><button className='bg-custum-sec rounded-md sm:p-2 p-1 text-white sm:text-xl tex-xs'><IoIosArrowForward /></button></div>

                </div>

            </div>
        </>
    );
}

export default Home;
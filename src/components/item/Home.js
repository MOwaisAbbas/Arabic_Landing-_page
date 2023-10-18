import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import bgImage from "../../assets/Rectangle 9777.png"




function Home() {
    return (<div className='relative'>
        <img className='w-full mx-auto' src={bgImage} alt='background Image' />
        <div className='absolute top-0 left-0  h-full w-full flex items-center justify-evenly	'>

            <div className="px-5"><button className='bg-custum-sec rounded-md p-2 text-white text-xl '><IoIosArrowBack /></button></div>
            <div className="w-11/12 flex flex-col items-end justify-between " >
                <h1 className='text-5xl w-1/2 text-right leading-normal font-bold text-white'>
                    <span className='text-custum-sec' >هذا إعادة المتّبعة, أي الطريق وسمّيت قام, كان بـ </span>
                    وترك التكاليف. ثانية وكسبت لإعادة أم مما, دول حكومة
                </h1>
                <p className='w-2/5 text-white text-right p-10 border rounded-md leading-9 text-lg font-bold mt-10'> هذا إعادة المتّبعة, أي الطريق وسمّيت قام, كان بـ وترك التكاليف. ثانية وكسبت لإعادة أم مما, دول حكومة .أي الطريق وسمّيت قام, كان بـ وترك</p>
                <div className='text-2xl	 text-custum-sec text-left w-2/5 mt-6' >سمّيت قام</div>
            </div>
            <div className='px-5'><button className='bg-custum-sec rounded-md p-2 text-white text-xl' ><IoIosArrowForward /></button></div>

        </div>

    </div>);
}

export default Home;
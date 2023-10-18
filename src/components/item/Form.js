import { ErrorMessage, Field, Formik } from 'formik';

const initialValues = {
    input_1: '',
    input_2: '',
    input_3: '',
    input_4: '',
    input_5: ''
};
function FormSection() {
    const onSubmit = (values) => {
        console.log('Form values:', values);
    };
    return (
        <>
         
            <div className="bg-custum-back p-8  ">
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                    <form className="rounded-md lg:w-2/5   sm:w-4/5 lg:translate-y-40 mx-auto w-full border-2 bg-white">
                        <h2 className="text-custum-pri font-bold sm:text-2xl text-xl text-center p-8">تواصل معنا</h2>
                        <div className="grid lg:grid-cols-2 md:grid-cols-2  gap-3  p-3">
                            <div className='flex flex-col items-end lg:grid-cols-1 gap-3'>
                                <label className="font-normal  text-base" htmlFor="input_1">
                                    اسم العائلة                </label>
                                <Field type="text" id="input_1" className='border  text-right border-custum-pri rounded-md py-3 px-4 w-full' name="input_1" placeholder="الفاخوري" />
                                <ErrorMessage name="input_1" component="div" />
                            </div>
                            <div className='flex flex-col items-end lg:grid-cols-1 gap-3'>
                                <label className="font-normal  text-base" htmlFor="input_2">
                                    الاسم الاول
                                </label>
                                <Field type="text" id="input_2" className='border text-right border-custum-pri rounded-md py-3 px-4 w-full' name="input_2" placeholder="تحسين" />
                                <ErrorMessage name='input_2' component="div" />
                            </div>
                            <div className='flex flex-col items-end lg:grid-cols-1 gap-3'>
                                <label className="font-normal  text-base" htmlFor="input_4">
                                    رقم الجوال                </label>
                                <Field type="number" id="input_4" className='border text-right border-custum-pri rounded-md py-3 px-4 w-full' name="input_4" placeholder="+914566565464" />
                                <ErrorMessage name='input_4' component="div" />
                            </div>
                            <div className='flex flex-col items-end lg:grid-cols-1 gap-3'>
                                <label className="font-normal  text-base" htmlFor="input_3">
                                    البريد الإلكتروني                </label>
                                <Field type="email" className='border text-right border-custum-pri rounded-md py-3 px-4 w-full' name="input_3" placeholder="User78@email.com" />
                                <ErrorMessage name='input_3' component="div" />
                            </div>
                        </div>
                        <div className='p-3'>
                            <div className='flex flex-col items-end lg:grid-cols-1  gap-3'>
                                <label className="font-normal text-base" htmlFor="input_5">
                                    الرسالة
                                </label>
                                <Field component="textarea" id="input_5" className='border text-right border-custum-pri h-32 rounded-md py-3 px-4 w-full' name="input_5" placeholder='أدخل نص الرسالة' />
                                <ErrorMessage name='input_5' component="div" />
                            </div>
                            <button className='bg-custum-pri w-full rounded-md text-white font-bold p-3 mt-4'>أرسل</button>

                        </div>
                    </form>


                </Formik>
            </div >

        </>
    );
}

export default FormSection;
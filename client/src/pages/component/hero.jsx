import heroPerson from '../../assets/hero-persons.png';
import heroStarSmall from '../../assets/hero-star-small.png';
import heroStarBig from '../../assets/hero-star-big.png';
import heroBrands1 from '../../assets/hero-brands1.png';
import heroBrands2 from '../../assets/hero-brands2.png';
import heroBrands3 from '../../assets/hero-brands3.png';
import heroBrands4 from '../../assets/hero-brands4.png';
import heroBrands5 from '../../assets/hero-brands5.png';

function Hero(){

    return (
        <>
            <section className="bg-[#F2F0F1]">
                <div className="md:container mx-auto px-2 md:px-0 flex flex-col md:flex-row justify-around items-center">
                    <div className="flex-1 pt-6 md:pt-0">
                        <h3 className='font-bold text-black text-4xl  lg:text-7xl'>FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE</h3>
                        <p className='text-[#00000099] text-sm md:text-base pe-10 py-4'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                        <button className='bg-black text-white text-base py-4 md:py-2 px-9 w-full md:w-auto rounded-full mb-8'>Shop Now</button>
                        <div className='flex flex-col text-black md:flex-row gap-4 justify-center md:justify-normal items-center'>
                            <div className='flex gap-4'>
                                <div>
                                    <p className='text-[24px md:text-[40px] font-bold'>200+</p>
                                    <p className='text-[#00000099]'>International Brands</p>
                                </div>
                                <span className='bg-[#0000001A] block h-[54px] md:h-[74px] w-[2px]'></span>
                                <div>
                                    <p className='text-[24px md:text-[40px] font-bold'>2,000+</p>
                                    <p className='text-[#00000099]'>High-Quality Products</p>
                                </div>
                            </div>
                            <span className='bg-[#0000001A] hidden md:block h-[74px] w-[2px]'></span>
                            <div>
                                <p className='text-[24px md:text-[40px] font-bold'>30,000+</p>
                                <p className='text-[#00000099]'>Happy Customers</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 pt-8">
                        <div className='relative items-center'>
                            <img src={heroStarSmall} alt="" className='w-14 absolute top-48 lg:top-80' />
                            <img src={heroPerson} alt=""/>
                            <img src={heroStarBig} alt="" className='w-24 absolute right-0 top-16' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-black'>
                <div className="md:container mx-auto px-2 md:px-0 py-8 flex items-center justify-around flex-wrap gap-4">
                        <img src={heroBrands1} alt="" className='h-8 md:h-auto' />
                        <img src={heroBrands2} alt="" className='h-8 md:h-auto' />
                        <img src={heroBrands3} alt="" className='h-8 md:h-auto' />
                        <img src={heroBrands4} alt="" className='h-8 md:h-auto' />
                        <img src={heroBrands5} alt="" className='h-8 md:h-auto' />
                </div>
            </section>
        </>
    )
}

export default Hero;
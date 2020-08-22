import React, {useState} from 'react'
import './Home.css';
import Product from './Product';

function Home() {

    return (
        <div className='Home'>
            <img
                className='app_home'
                src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/16/3346e369-e2d9-4028-a6d6-4c701f33ebdd1597584540117-Tee-fest-mendk.jpg'
                alt='t-shirts-offer'
            />
            {/* Products */}

            <p>Our Products</p>
            <div className='product_display'>
            <Product
                id='11'
                image='https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1964370/2018/7/25/5438fbda-12f1-46e0-adc5-25c2baaab23d1532502712250-HERENOW-Men-Teal-Blue-Solid-Polo-T-shirt-4221532502711030-1.jpg'
                tittle = 'GUCCI'
                description='Polo Solid t-shirt'
                price={2500}
                exactPrice={3000}
            />
            <Product
                id='24'
                image='https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10376117/2019/8/16/6765a46a-7ecb-4e03-a288-f0749d0ddafc1565938093065-HM-Men-Blue-Slim-Jeans-5681565938091931-1.jpg'
                tittle = 'GUCCI'
                description='Slim jeans'
                price={3500}
                exactPrice={3700}
            />
            <Product
                id='34'
                image='https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11705862/2020/6/15/b7019e4f-9a39-4143-a612-75bafbe8f0781592199906871-Jack--Jones-Men-Jeans-981592199904843-4.jpg'
                tittle = 'GUCCI'
                description='Slim jeans'
                price={5690}
                exactPrice={6000}
            />
            <Product
                id='56'
                image='https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/4318138/2018/5/4/11525433792765-HERENOW-Men-Black-Printed-Round-Neck-T-shirt-2881525433792598-1.jpg'
                tittle = 'GUCCI'
                description='Round Neck t-shirt'
                price={1790}
                exactPrice={2000}
            />
            <Product
                id='98'
                image='https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2272201/2018/2/8/11518074454367-HERENOW-Men-Black-Tapered-Fit-Mid-Rise-Stretchable-Jeans-6121518074454181-1.jpg'
                tittle = 'GUCCI'
                description='Men cropped tapered Fit jeans'
                price={4500}
                exactPrice='5000'
            />
            <Product
                id='75469822'
                image='https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11758176/2020/7/9/1e115ee5-868b-4f98-aa25-96e5655cfcb61594294829938-HERENOW-Men-Shirts-6381594294828618-1.jpg'
                tittle = 'GUCCI'
                description='Slim fit casual shirt'
                price={2500}
                exactPrice={2700}
            />
            <Product
                id='76'
                image='https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10381447/2019/8/16/3aaf0f72-0cf4-40ef-a36c-c81e3186c3281565956541245-Campus-Sutra-Men-Sweatshirts-2091565956539708-1.jpg'
                tittle = 'GUCCI'
                description='Men Solid Sweat-shirt'
                price={1100}
                exactPrice={1500}
            />
            <Product
                id='76'
                image='https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11904106/2020/8/7/45b4414a-f46d-4965-aff2-2aca4d765abd1596790391624-Roadster-Men-Green-Regular-Fit-Solid-Casual-Shirt-1471596790-1.jpg'
                tittle = 'GUCCI'
                description='Slim fit casual shirt'
                price={2500}
                exactPrice={2700}
            />
            <Product
                id='76'
                image='https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/9965815/2019/8/13/b16752d0-404d-4419-b353-5bb9c0756bf31565688835359-HRX-by-Hrithik-Roshan-Men-Sweatshirts-761565688834259-1.jpg'
                tittle = 'GUCCI'
                description='Outdoor Men Solid Sweat-shirt'
                price={3500}
                exactPrice={4100}
            />
            <Product
                id='76'
                image='https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11871576/2020/6/8/3dab2aa7-b86b-422e-99d8-50e27cbf42ed1591600330086-Blackberrys-Men-Grey-Slim-Fit-Self-Design-Single-Breasted-Sm-1.jpg'
                tittle = 'GUCCI'
                description='Men Fit Formal blazer'
                price={3200}
                exactPrice={3400}
            />
            </div>
        </div>
    )
}

export default Home

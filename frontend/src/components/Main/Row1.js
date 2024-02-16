import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cards from './Cards'
import jsonData from '../../../src/api/row1.json'
import Timer from './Timer';
import '../CSS/Row.css'


const Row1 = () => {


	const productsJson = jsonData.map((product) => {
		return {
			id: product.id,
			name: product.title,
			description: product.description,
			image: product.image,
			price: product.price,
			discount: product.discount,
			rating: product.rating.rate,
		};
	})

	const sliderSettings = {
		slidesToShow: 5, // Adjust the number of items to display
		slidesToScroll: 2, // Number of slides to scroll at a time
		infinite: false,
		dots: false,
		arrows: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className='exteriorBox' style={{ marginTop: "50px", marginBottom: "50px" }}>
			<div className="timerbox d-flex  align-items-center" >
				<p className='timer' style={{ color: "#28a745", fontFamily: "Montserrat", fontSize: "40px", fontWeight: 700, width: '750px' }}>Today's Flash Sale Ends In</p>
				<Timer />
			</div>
			<div className="slider">
				<Slider {...sliderSettings}>
					{productsJson.map((card) => (
						<div key={card.id}>
							<Cards {...card} />
						</div>
					))}
				</Slider>
			</div>
		</div>
	)
}

export default Row1

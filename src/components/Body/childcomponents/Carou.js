import React from 'react'
import Image from "./Image"

const Carou = () => {
    return (

        <div class="container">
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <div class="carousel-inner">
                    <div className="d-flex p-4">
                        
                        <Image src="car1.png" />
                        <Image src="car2.png" />
                        <Image src="car3.png" />
                        <Image src="car4.png" />
                        <Image src="car1.png" />
                        <Image src="car2.png" />
                        <Image src="car3.png" />
                        <Image src="car4.png" />
                        <Image src="car1.png" />
                        <Image src="car2.png" />
                        <Image src="car3.png" />
                        <Image src="car4.png" />
                    </div>


                    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#myCarousel" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>


    )
};

export default Carou

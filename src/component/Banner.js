import React from "react";
const Banner = () => {
  return (<><div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
        <img style={{height:'80vh'}} src="https://i.pinimg.com/736x/ac/8a/68/ac8a68cc4afc27fda293e9a0ef1a01db.jpg" class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
        <img style={{height:'80vh'}}src="https://i.pinimg.com/736x/dc/ae/31/dcae315ac8dfa894d8bb4643a02cdae0.jpg" class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
        <img style={{height:'80vh'}} src="https://i.pinimg.com/736x/09/8a/a2/098aa26f0359eab25ea2b20b08ac59df.jpg" class="d-block w-100" alt="..."/>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div></>
    );
};
export default Banner;
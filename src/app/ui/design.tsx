import ImageCarousel from "@/app/ui/imagecarousel";

export default function Design() {
    const images = [
        '/img/slideshow/img1.jpeg',
        '/img/slideshow/img2.jpeg',
        '/img/slideshow/img3.jpeg',
        '/img/slideshow/img4.jpeg',
        '/img/slideshow/img5.jpeg',
        '/img/slideshow/img6.jpeg',
        '/img/slideshow/img7.jpeg',
        '/img/slideshow/img8.jpeg',
        '/img/slideshow/img9.jpeg',
        '/img/slideshow/img10.jpeg',
        '/img/slideshow/img12.jpeg',
        '/img/slideshow/img13.jpeg',
        '/img/slideshow/img14.jpeg',
        '/img/slideshow/img15.jpeg',
        '/img/slideshow/img16.jpeg',
        '/img/slideshow/img17.jpeg',
        '/img/slideshow/img18.jpeg',
        '/img/slideshow/img19.jpeg',
        '/img/slideshow/img20.jpeg',
        '/img/slideshow/img21.jpeg',
        '/img/slideshow/img23.jpeg',
        '/img/slideshow/img24.jpeg',
    ];

    return <div>
        <h3 className="text-5xl text-center my-4">The Design</h3>
        <ImageCarousel
            images={images}
        />
        <div className="py-3"/>
    </div>
}
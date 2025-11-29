import ImageTextRow from '@/app/ui/imagetextrow';
import Splitter from '@/app/ui/splitter';

export default function Outreach() {
    return <div className='p-12'>
        <h3 className="text-5xl text-center my-1">Our Outreach Events</h3>
        <ImageTextRow image='/img/a-s.jpg' imageLeft={true}>
            <p className='text-center'>Some text here</p>
        </ImageTextRow>
        <Splitter />
        <ImageTextRow image='/img/a-s.jpg' imageLeft={false}>
            <p className='text-center'>Some text here</p>
        </ImageTextRow>
        <Splitter />
        <ImageTextRow image='/img/a-s.jpg' imageLeft={true}>
            <p className='text-center'>Some text here</p>
        </ImageTextRow>
        <Splitter />
        <ImageTextRow image='/img/a-s.jpg' imageLeft={false}>
            <p className='text-center'>Some text here</p>
        </ImageTextRow>
    </div>;
}
import Info3 from '@/app/ui/Info3';

export default function CoreValues() {
    return <div>
        <h3 className="text-5xl text-center my-7">Our Core Values</h3>
        <Info3
            name1 = 'Community'
            desc1 = 'Some text here'
            icon1 = {[{d: ''}]}
            name2 = 'Safety'
            desc2 = 'Some text here'
            icon2 = {[{d: ''}]}
            name3 = 'Integrity'
            desc3 = 'Some text here'
            icon3 = {[{d: ''}]}
        />
    </div>;
}
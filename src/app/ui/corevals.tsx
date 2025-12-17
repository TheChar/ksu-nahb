import Info3 from '@/app/ui/Info3';

export default function CoreValues() {
    return <div>
        <h3 className="text-5xl text-center my-7">Our Core Values</h3>
        <Info3
            name1 = 'Community'
            desc1 = 'Our company is deeply rooted in the communities we serve across Alabama. We all believe our job is more than building residential structures. We focus on strengthening the places we live, work, and grow. Every home is approached with the utmost commitment to lasting value, supporting our local partners, and making positive contributions to the regions we reside in. By staying connected through outreach to our communities, we ensure our work reflects their needs and future visions.'
            icon1 = {[{d: ''}]}
            name2 = 'Safety'
            desc2 = 'Safety is the driving force behind every decision we make in the office and on our sites. We are dedicated to keeping our workers safe and upholding the highest building standards. By providing rigorous training, thoughtful planning, and a culture of individuals looking out for one another, we can create the safest jobsites in the industry.'
            icon2 = {[{d: ''}]}
            name3 = 'Integrity'
            desc3 = 'Integrity is at the core of who we are as professionals. We believe this value is created with trust, transparency, and respect. From accurate estimates and schedules to honest and dependable workmanship, we approach every job with a commitment to ethical practice. Our integrity ensures that the people of Alabama know they can rely on us to deliver quality results with accountability and professionalism.'
            icon3 = {[{d: ''}]}
        />
    </div>;
}
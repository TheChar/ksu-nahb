import ImageTextRow from '@/app/ui/imagetextrow';
import Splitter from '@/app/ui/splitter';

export default function Outreach() {
    return <div className='p-12'>
        <h3 className="text-5xl text-center my-1">Community Outreach</h3>
        <ImageTextRow image='/img/building.png' imageLeft={true}>
            <h3 className='text-center text-4xl mb-5'>Healthcare and Community Wellness</h3>
            <p className='text-center text-xl'>Wildcat Community Contracting takes pride in our long-standing partnerships with Martin Community Hospital (LMCH), Russell Medical Center (RMC), and UAB Medical Center
            (UABMC). Our involvement goes far beyond sponsorships; we are dedicated to actively participating in outreach programs, the senior living initiatives, cancer center events, and community wellness projects that strengthen the three districts we serve. By supporting healthcare providers who work tirelessly for Alabama families, we help create a healthier, more connected community.</p>
        </ImageTextRow>
        <Splitter />
        <ImageTextRow image='/img/fish.png' imageLeft={false}>
        <h3 className='text-center text-4xl mb-5'>Outdoor Sports, Local Business, and Social Culture</h3>
            <p className='text-center text-xl'>We are deeply connected to the lifestyle and culture that define Alabama, especially around its outdoor sports and local gathering spaces. From sponsoring fishing and hunting tournaments to showing up at golf events and partnering with local bars and country clubs, we stay involved in the social heartbeat of the region. Our recurring presence at the Alabama Bass Fishing Tournament, over seven sponsorships in the last decade, has allowed us to form genuine relationships with Lake Martin locals and outdoor enthusiasts from across the state. By investing
            in the places where people gather, celebrate, and unwind, we help sustain the culture that makes our community strong.</p>
        </ImageTextRow>
        <Splitter />
        <ImageTextRow image='/img/football.png' imageLeft={true}>
        <h3 className='text-center text-4xl mb-5'>Alabama Football</h3>
            <p className='text-center text-xl'>Few things bring Alabama together like college football, and Wildcat Community Contracting embraces that tradition with pride. Our engagement at Auburn and University of Alabama tailgates places us at some of the state&apos;s most iconic cultural scenes. These events bring thousands of passionate fans together, from lifelong locals to traveling families, and provide a natural space for forming professional and casual relationships. By integrating our brand into the traditions that define Alabama, we strengthen our connection to the community and celebrate the spirit that inspires both our work and the people we serve.</p>
        </ImageTextRow>
    </div>;
}
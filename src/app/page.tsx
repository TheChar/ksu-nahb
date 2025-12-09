import Header from '@/app/ui/header';
import About from '@/app/ui/about';
import CoreValues from '@/app/ui/corevals';
import Design from '@/app/ui/design';
import Outreach from '@/app/ui/outreach';

export default function Home() {
  return (
    <div>
      <div id='top' className='bg-(--bg)'>
        <Header bgImg="/img/a-s.jpg" text='Wildcat Community Construction' darkTxt={false}/>
      </div>
      <div id='about' className='bg-(--bg) py-4'>
        <About/>
      </div>
      <div id='corevalues' className='bg-(--bg2) py-4'>
        <CoreValues/>
      </div>
      <div id='design' className='bg-(--bg) py-4'>
        <Design />
      </div>
      <div id='outreach' className='bg-(--bg2) py-4'>
        <Outreach />
      </div>
    </div>
  );
}

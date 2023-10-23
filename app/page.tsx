
import Hero from "@/components/hero";
import About from "@/components/about";

import Work from '@/components/work';
import Contact from '@/components/contact';
import StarCanvas from '@/components/canvas/star-canvas';

import getServices from '@/actions/get-services';
import getProjects from '@/actions/get-projects';
import getContacts from '@/actions/get-contactcs';

const Home = async () => {

  const services = await getServices({ active: true });
  const projects = await getProjects({ active: true });
  const contacts = await getContacts({ active: true, urlType: false });
  const urlcontacts = await getContacts({ active: true, urlType: true });

  return (
    <div className="relative z-0 ">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>

      <About services={services} />

      <Work projects={projects} />

      <div className="relative z-0 mt-2 sm:mt-20">
        <Contact 
          contacts={contacts} 
          urlcontacts={urlcontacts} 
        />

        <StarCanvas />
      </div>
    </div>
  )
}

export default Home;
import React from "react"
import { BallCanvas } from './canvas';
import { SectionWrapper  } from '../hoc';
import { technologies  } from '../constants';
import { styles } from "../styles";



const Tech = () => {
  return (
    <>
   
    <div className=''>
    <div>
       <p className={styles.sectionSubText}>WHAT I HAVE LAERN SO FAR</p>
      <h2 className={styles.sectionHeadText}>Skills</h2>
    </div>
    <div className="flex flex-row flex-wrap gap-10 mt-10">
      {technologies.map((technology)=>(
        <div className='w-28 h-28 text-center' key={technology.name}>
          <BallCanvas icon={technology.icon}/>
          <h6>{technology.name}</h6>
        </div>
      ))}
      </div>

    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
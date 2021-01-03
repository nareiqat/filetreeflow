import React,{useState} from 'react';


function App() {

  const Folder = props => {
    const [isOpen,setIsOpen] = useState(true);
    const {name, children} = props;
    const direction = isOpen ? 'down': 'right';

    const handleClick = () => {
      setIsOpen(!isOpen);
    };

    return <div>
      <span onClick={handleClick}>
        <i className="blue folder icon"></i>
        <i className={`caret ${direction} icon`}></i>
      </span>
      {name}
      <div style={{marginLeft:'17px'}}>
        {isOpen ? children:null}
      </div>
    </div>
  };

  const File = props => {
    const {name} = props;
    const fileExtension = name.split('.')[1];
    const fileIcons = {
      mp4: 'headphones',
      jpeg:'file image',
      png:'file image outline',
    }
    return <div>
      <i className={`${fileIcons[fileExtension]} icon`}></i>
      {name}
    </div>
  };

  return (
    
  
    <div>
      <Folder name="Desktop" isOpen={true}>
        <File name="dogs.jpeg"/>
        <File name='cats.png'/>
        <Folder name='Music' isOpen={false}>
          <File name='all_star.mp4'/>
          <File name='rockstar.mp4'/>
        </Folder>
      </Folder>     
      <Folder name="Applications" isOpen={false} />
      
    </div>
  
  );

};

export default App;
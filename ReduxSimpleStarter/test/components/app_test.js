import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';  // 觀測目標 root

// use 'describe' to group togather similar tests //scene 
describe(' Test the App Component', ()=>{

  // Use 'it' to test a single attribute of a target  //TestCase 
  //to developers on what this block is goning to test right here 
  it('shows the correct test',() =>{

    //create an instance of app 
    const component = renderComponent(App);
    //Use 'expect' to make 'assertion' about a target (here: App)
    expect(component).to.contain('React simple starter');

  }); 

}); 




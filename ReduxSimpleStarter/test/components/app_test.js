import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';  // 觀測目標 root

// use 'describe' to group togather similar tests //scene 
describe(' Test the App Component', ()=>{
  let component;
  
  beforeEach(()=>{
      component = renderComponent(App);
    });

  it('shows a comment box',()=>{
    expect(component.find('.comment-box')).to.exist;
  });
  

}); 




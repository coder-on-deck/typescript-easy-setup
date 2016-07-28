import { SamplePage } from '../components/SamplePage'

describe('page',function(){
  it('have a clickable button', function(done){
    browser.ignoreSynchronization = true
    console.log('hello')
    var samplePage:SamplePage = new SamplePage()
    samplePage.clickButton()
    browser.sleep(0).then(done)
  })
})
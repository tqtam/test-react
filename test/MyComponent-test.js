var React = require('react');
var expect = require('chai').expect;
var enzyme = require('enzyme');
var MyComponent = require('../components/MyComponent');
var sinon = require('sinon');
var onClickTest = function(){
	alert(1);
}

describe("<MyCompent />", function(){
	it("should render like design'", function(){
		var wrapper = enzyme.shallow(<MyComponent onClick={onClickTest} />);
		expect(wrapper.contains(<div className="my-component" onClick={onClickTest}>Hello World</div>)).to.equal(true);
	});

	it("should render a div with class my-component", function(){
		var wrapper = enzyme.shallow(<MyComponent onClick={onClickTest} />);
		expect(wrapper.is('.my-component')).to.equal(true);
	});
	
	it("should render only a div", function () {
		var wrapper = enzyme.mount(<MyComponent onClick={onClickTest} />);
		expect(wrapper.find('div').length).to.equal(1);
		expect(wrapper.find('div').html()).to.equal(
			`<div class="my-component">Hello World</div>`
		);
	});

	it("simulates click event", function(){
		var onClick = sinon.spy();
		var wrapper = enzyme.mount(<MyComponent onClick={onClick} />);
		wrapper.find('div').simulate('click');
		expect(onClick.callCount).to.equal(1);
	});
});
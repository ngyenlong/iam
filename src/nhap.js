import {mang} from './mang';
export class nhap{
	constructor(){
	
		this.name='';
		this.email='';
	}
	add(){
		var a=this.name;
		var b=this.email;
		var mang= new mang(a,b);
		console.log(mang);
		console.log(a);
		console.log(b);
		localStorage.setItem('testObject', JSON.stringify(mang));
		console.log('test');
	}
}
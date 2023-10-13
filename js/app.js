"use strict";
var main;(function(){
var $rt_seed=2463534242;function $rt_nextId(){var x=$rt_seed;x^=x<<13;x^=x>>17;x^=x<<5;$rt_seed=x;return x;}function $rt_compare(a,b){return a>b?1:a<b? -1:a===b?0:1;}function $rt_isInstance(obj,cls){return obj!==null&&!!obj.constructor.$meta&&$rt_isAssignable(obj.constructor,cls);}function $rt_isAssignable(from,to){if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&$rt_isAssignable(from.$meta.item,to.$meta.item);}var supertypes=from.$meta.supertypes;for(var i=0;i<supertypes.length;i
=i+1|0){if($rt_isAssignable(supertypes[i],to)){return true;}}return false;}function $rt_createArray(cls,sz){var data=new Array(sz);var arr=new $rt_array(cls,data);if(sz>0){var i=0;do {data[i]=null;i=i+1|0;}while(i<sz);}return arr;}function $rt_wrapArray(cls,data){return new $rt_array(cls,data);}function $rt_createUnfilledArray(cls,sz){return new $rt_array(cls,new Array(sz));}function $rt_createLongArray(sz){var data=new Array(sz);var arr=new $rt_array($rt_longcls(),data);for(var i=0;i<sz;i=i+1|0){data[i]=Long_ZERO;}return arr;}function $rt_createNumericArray(cls,
nativeArray){return new $rt_array(cls,nativeArray);}function $rt_createCharArray(sz){return $rt_createNumericArray($rt_charcls(),new Uint16Array(sz));}function $rt_createByteArray(sz){return $rt_createNumericArray($rt_bytecls(),new Int8Array(sz));}function $rt_createShortArray(sz){return $rt_createNumericArray($rt_shortcls(),new Int16Array(sz));}function $rt_createIntArray(sz){return $rt_createNumericArray($rt_intcls(),new Int32Array(sz));}function $rt_createBooleanArray(sz){return $rt_createNumericArray($rt_booleancls(),
new Int8Array(sz));}function $rt_createFloatArray(sz){return $rt_createNumericArray($rt_floatcls(),new Float32Array(sz));}function $rt_createDoubleArray(sz){return $rt_createNumericArray($rt_doublecls(),new Float64Array(sz));}function $rt_arraycls(cls){var result=cls.$array;if(result===null){var arraycls={};var name="["+cls.$meta.binaryName;arraycls.$meta={item:cls,supertypes:[$rt_objcls()],primitive:false,superclass:$rt_objcls(),name:name,binaryName:name,enum:false};arraycls.classObject=null;arraycls.$array
=null;result=arraycls;cls.$array=arraycls;}return result;}function $rt_createcls(){return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};}function $rt_createPrimitiveCls(name,binaryName){var cls=$rt_createcls();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;return cls;}var $rt_booleanclsCache=null;function $rt_booleancls(){if($rt_booleanclsCache===null){$rt_booleanclsCache=$rt_createPrimitiveCls("boolean","Z");}return $rt_booleanclsCache;}var $rt_charclsCache
=null;function $rt_charcls(){if($rt_charclsCache===null){$rt_charclsCache=$rt_createPrimitiveCls("char","C");}return $rt_charclsCache;}var $rt_byteclsCache=null;function $rt_bytecls(){if($rt_byteclsCache===null){$rt_byteclsCache=$rt_createPrimitiveCls("byte","B");}return $rt_byteclsCache;}var $rt_shortclsCache=null;function $rt_shortcls(){if($rt_shortclsCache===null){$rt_shortclsCache=$rt_createPrimitiveCls("short","S");}return $rt_shortclsCache;}var $rt_intclsCache=null;function $rt_intcls(){if($rt_intclsCache
===null){$rt_intclsCache=$rt_createPrimitiveCls("int","I");}return $rt_intclsCache;}var $rt_longclsCache=null;function $rt_longcls(){if($rt_longclsCache===null){$rt_longclsCache=$rt_createPrimitiveCls("long","J");}return $rt_longclsCache;}var $rt_floatclsCache=null;function $rt_floatcls(){if($rt_floatclsCache===null){$rt_floatclsCache=$rt_createPrimitiveCls("float","F");}return $rt_floatclsCache;}var $rt_doubleclsCache=null;function $rt_doublecls(){if($rt_doubleclsCache===null){$rt_doubleclsCache=$rt_createPrimitiveCls("double",
"D");}return $rt_doubleclsCache;}var $rt_voidclsCache=null;function $rt_voidcls(){if($rt_voidclsCache===null){$rt_voidclsCache=$rt_createPrimitiveCls("void","V");}return $rt_voidclsCache;}function $rt_throw(ex){throw $rt_exception(ex);}function $rt_exception(ex){var err=ex.$jsException;if(!err){err=new Error("Java exception thrown");if(typeof Error.captureStackTrace==="function"){Error.captureStackTrace(err);}err.$javaException=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return err;}function $rt_fillStack(err,
ex){if(typeof $rt_decodeStack==="function"&&err.stack){var stack=$rt_decodeStack(err.stack);var javaStack=$rt_createArray($rt_objcls(),stack.length);var elem;var noStack=false;for(var i=0;i<stack.length;++i){var element=stack[i];elem=$rt_createStackElement($rt_str(element.className),$rt_str(element.methodName),$rt_str(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){$rt_setStack(ex,javaStack);}}}function $rt_createMultiArray(cls,dimensions){var first
=0;for(var i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(i=0;i<first;i=i+1|0){cls=$rt_arraycls(cls);}if(first===dimensions.length -1){return $rt_createArray(cls,dimensions[first]);}}var arrays=new Array($rt_primitiveArrayCount(dimensions,first));var firstDim=dimensions[first]|0;for(i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createArray(cls,firstDim);}return $rt_createMultiArrayImpl(cls,arrays,dimensions,first);}function $rt_createByteMultiArray(dimensions){var arrays
=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_bytecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createByteArray(firstDim);}return $rt_createMultiArrayImpl($rt_bytecls(),arrays,dimensions);}function $rt_createCharMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_charcls(),dimensions);}var firstDim=dimensions[0]|0;for
(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createCharArray(firstDim);}return $rt_createMultiArrayImpl($rt_charcls(),arrays,dimensions,0);}function $rt_createBooleanMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_booleancls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createBooleanArray(firstDim);}return $rt_createMultiArrayImpl($rt_booleancls(),arrays,dimensions,0);}function $rt_createShortMultiArray(dimensions)
{var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_shortcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createShortArray(firstDim);}return $rt_createMultiArrayImpl($rt_shortcls(),arrays,dimensions,0);}function $rt_createIntMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_intcls(),dimensions);}var firstDim=dimensions[0]
|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createIntArray(firstDim);}return $rt_createMultiArrayImpl($rt_intcls(),arrays,dimensions,0);}function $rt_createLongMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_longcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createLongArray(firstDim);}return $rt_createMultiArrayImpl($rt_longcls(),arrays,dimensions,0);}function $rt_createFloatMultiArray(dimensions)
{var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_floatcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createFloatArray(firstDim);}return $rt_createMultiArrayImpl($rt_floatcls(),arrays,dimensions,0);}function $rt_createDoubleMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_doublecls(),dimensions);}var firstDim
=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createDoubleArray(firstDim);}return $rt_createMultiArrayImpl($rt_doublecls(),arrays,dimensions,0);}function $rt_primitiveArrayCount(dimensions,start){var val=dimensions[start+1]|0;for(var i=start+2;i<dimensions.length;i=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;}function $rt_createMultiArrayImpl(cls,arrays,dimensions,start){var limit=arrays.length;for(var i=start+1|0;i<dimensions.length;i=i+1|0){cls=$rt_arraycls(cls);var dim
=dimensions[i];var index=0;var packedIndex=0;while(index<limit){var arr=$rt_createUnfilledArray(cls,dim);for(var j=0;j<dim;j=j+1|0){arr.data[j]=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];}function $rt_assertNotNaN(value){if(typeof value==='number'&&isNaN(value)){throw "NaN";}return value;}var $rt_stdoutBuffer="";var $rt_putStdout=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:function(ch){if(ch===0xA){if(console){console.info($rt_stdoutBuffer);}$rt_stdoutBuffer
="";}else {$rt_stdoutBuffer+=String.fromCharCode(ch);}};var $rt_stderrBuffer="";var $rt_putStderr=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:function(ch){if(ch===0xA){if(console){console.error($rt_stderrBuffer);}$rt_stderrBuffer="";}else {$rt_stderrBuffer+=String.fromCharCode(ch);}};var $rt_packageData=null;function $rt_packages(data){var i=0;var packages=new Array(data.length);for(var j=0;j<data.length;++j){var prefixIndex=data[i++];var prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]
=prefix+data[i++]+".";}$rt_packageData=packages;}function $rt_metadata(data){var packages=$rt_packageData;var i=0;while(i<data.length){var cls=data[i++];cls.$meta={};var m=cls.$meta;var className=data[i++];m.name=className!==0?className:null;if(m.name!==null){var packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";var superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype
=Object.create(m.superclass.prototype);}else {cls.prototype={};}var flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];var clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};var virtualMethods=data[i++];if(virtualMethods!==0){for(var j=0;j<virtualMethods.length;j+=2){var name=virtualMethods[j];var func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(var k=0;k<name.length;++k){cls.prototype[name[k]]
=func;}}}cls.$array=null;}}function $rt_threadStarter(f){return function(){var args=Array.prototype.slice.apply(arguments);$rt_startThread(function(){f.apply(this,args);});};}function $rt_mainStarter(f){return function(args,callback){if(!args){args=[];}var javaArgs=$rt_createArray($rt_objcls(),args.length);for(var i=0;i<args.length;++i){javaArgs.data[i]=$rt_str(args[i]);}$rt_startThread(function(){f.call(null,javaArgs);},callback);};}var $rt_stringPool_instance;function $rt_stringPool(strings){$rt_stringPool_instance
=new Array(strings.length);for(var i=0;i<strings.length;++i){$rt_stringPool_instance[i]=$rt_intern($rt_str(strings[i]));}}function $rt_s(index){return $rt_stringPool_instance[index];}function $rt_eraseClinit(target){return target.$clinit=function(){};}var $rt_numberConversionView=new DataView(new ArrayBuffer(8));function $rt_doubleToLongBits(n){$rt_numberConversionView.setFloat64(0,n,true);return new Long($rt_numberConversionView.getInt32(0,true),$rt_numberConversionView.getInt32(4,true));}function $rt_longBitsToDouble(n)
{$rt_numberConversionView.setInt32(0,n.lo,true);$rt_numberConversionView.setInt32(4,n.hi,true);return $rt_numberConversionView.getFloat64(0,true);}function $rt_floatToIntBits(n){$rt_numberConversionView.setFloat32(0,n);return $rt_numberConversionView.getInt32(0);}function $rt_intBitsToFloat(n){$rt_numberConversionView.setInt32(0,n);return $rt_numberConversionView.getFloat32(0);}function $rt_javaException(e){return e instanceof Error&&typeof e.$javaException==='object'?e.$javaException:null;}function $rt_jsException(e)
{return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=err.$javaException;if(!ex){ex=$rt_createException($rt_str("(JavaScript) "+err.toString()));err.$javaException=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return ex;}function $dbg_class(obj){var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}else if(cls===$rt_bytecls()){clsName="byte";}else if
(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls()){clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__=function(){return "long";};Long.prototype.toString
=function(){var result=[];var n=this;var positive=Long_isPositive(n);if(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push(String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};var Long_ZERO=new Long(0,0);var Long_MAX_NORMAL=1<<18;function Long_fromInt(val){return val>=0?new Long(val,0):new Long(val, -1);}function Long_fromNumber(val)
{if(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val|0, -val/0x100000000|0));}}function Long_toNumber(val){var lo=val.lo;var hi=val.hi;if(lo<0){lo+=0x100000000;}return 0x100000000*hi+lo;}var $rt_imul=Math.imul||function(a,b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv=function(a,b){if(a<0){a+=0x100000000;}if(b<0){b+=0x100000000;}return a/b|0;};var $rt_umod=function(a,b){if(a<0){a+=0x100000000;}if
(b<0){b+=0x100000000;}return a%b|0;};function $rt_setCloneMethod(target, f){target.oV=f;}
function $rt_cls(cls){return LW(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return AIa(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.bw.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return D; }
function $rt_nullCheck(val) {if (val === null) {$rt_throw(Bc2());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return ASH();}
function $rt_setThread(t){return Fr(t);}
function $rt_createException(message){return ZY(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
var A=Object.create(null);
var M=$rt_throw;var R=$rt_compare;var Bc3=$rt_nullCheck;var F=$rt_cls;var J=$rt_createArray;var Sf=$rt_isInstance;var C3=$rt_nativeThread;var C=$rt_suspending;var Fd=$rt_resuming;var E$=$rt_invalidPointer;var B=$rt_s;var Bt=$rt_eraseClinit;var Bj=$rt_imul;var Bi=$rt_wrapException;
function D(){this.ck=null;this.$id$=0;}
function Bc4(){var a=new D();WD(a);return a;}
function Ba2(b){var c;if(b.ck===null)Vr(b);if(b.ck.ec===null)b.ck.ec=Bc5;else if(b.ck.ec!==Bc5){c=new D1;Bl(c,B(0));M(c);}b=b.ck;b.ff=b.ff+1|0;}
function BcT(b){var c,d;if(!HF(b)&&b.ck.ec===Bc5){c=b.ck;d=c.ff-1|0;c.ff=d;if(!d)b.ck.ec=null;HF(b);return;}b=new Ki;O(b);M(b);}
function AD1(b){if(b.ck===null)Vr(b);if(b.ck.ec===null)b.ck.ec=Bc5;if(b.ck.ec!==Bc5)AXl(b,1);else{b=b.ck;b.ff=b.ff+1|0;}}
function Vr(b){b.ck=Baw();}
function AXl(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gk=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IS=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaG(callback);return thread.suspend(function(){try{Bcd(b,c,callback);}catch($e){callback.IS($rt_exception($e));}});}
function Bcd(b,c,d){var e,f,g;e=Bc5;if(b.ck===null){Vr(b);Fr(e);b=b.ck;b.ff=b.ff+c|0;CM(d,null);return;}if(b.ck.ec===null){b.ck.ec=e;Fr(e);b=b.ck;b.ff=b.ff+c|0;CM(d,null);return;}f=b.ck;if(f.he===null)f.he=AXn();f=f.he;g=new Q6;g.zx=e;g.zy=b;g.zv=c;g.zw=d;d=g;f.push(d);}
function NO(b){var c;if(!HF(b)&&b.ck.ec===Bc5){c=b.ck;c.ff=c.ff-1|0;if(c.ff<=0){c.ec=null;if(c.he!==null&&!JF(c.he)){c=new SK;c.Db=b;QU(c);}else HF(b);}return;}b=new Ki;O(b);M(b);}
function HF(a){var b;b=a.ck;if(b===null)return 1;a:{if(b.ec===null&&!(b.he!==null&&!JF(b.he))){if(b.re===null)break a;if(JF(b.re))break a;}return 0;}a.ck=null;return 1;}
function WD(a){return;}
function Dl(a){return LW(a.constructor);}
function A4Y(a){return MI(a);}
function QY(a,b){return a!==b?0:1;}
function AUk(a){var b,c,d,e,f,g,h,i;b=new U;X(b);b=I(I(b,IA(Dl(a))),B(1));c=MI(a);if(!c)d=B(2);else{e=(((32-Ts(c)|0)+4|0)-1|0)/4|0;f=$rt_createCharArray(e);g=f.data;e=(e-1|0)*4|0;h=0;while(e>=0){i=h+1|0;g[h]=IY(c>>>e&15,16);e=e-4|0;h=i;}d=AIa(f);}return V(I(b,d));}
function MI(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AXK(a){var b,c,d;if(!Sf(a,ET)&&a.constructor.$meta.item===null){b=new R9;O(b);M(b);}b=AS1(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function Xb(a){var b,c;if(!(a.ck!==null&&a.ck.ec===Bc5?1:0)){b=new Ki;O(b);M(b);}b=a.ck.re;if(b===null)return;while(!JF(b)){c=AOR(b);if(!c.a0i())QU(c);}a.ck.re=null;}
function Ju(){D.call(this);}
var Bc6=null;var Bc7=null;var Bc8=null;function Bc9(){var a=new Ju();AQY(a);return a;}
function AQY(a){return;}
function AQ3(b){var c,d,e,f,g,h,i,j,k,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:AKc();AGl();AQj();ZW();AP3();AIR();ACK();ASl();AC5();AKP();ARJ();Y3();AHD();Za();AHh();ALT();AFp();AFr();AOG();AQb();AH3();AOo();ABD();AFz();AEr();AHS();XD();ADB();Z8();AL2();AJ$();AOO();AG7();ASf();AOb();ALI();AAb();AKt();AO$();AEk();AMI();AK_();AMG();AIH();AF$();AHx();AK2();AAm();ZZ();AP9();AJT();AAP();AIk();ALX();ABi();AM$();AHN();AFu();c
=window.minecraftOpts;if(c===null)d=null;else{d=J(B4,c.length);b=d.data;e=0;f=b.length;while(e<f){b[e]=$rt_str(c[e]);e=e+1|0;}}a:{try{b=d.data;c=window.document;g=b[0];c=c.getElementById($rt_ustr(g));Bc6=c;g=b[1];$p=1;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){}else if($$je instanceof D7){c=$$je;break a;}else{throw $$e;}}return;}g=A8_();h=new Lt;Wa(h,g);h.x9=0;h.mu=g;Ox(c,h);return;case 1:b:{c:{d:{try{AAn(c,g);if(C()){break _;}break d;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){}else if($$je instanceof D7)
{c=$$je;break c;}else{throw $$e;}}return;}try{break b;}catch($$e){$$je=Bi($$e);if($$je instanceof D7){c=$$je;}else{throw $$e;}}}g=A8_();h=new Lt;Wa(h,g);h.x9=0;h.mu=g;Ox(c,h);return;}c=new Il;i=Lq();j=Mz();g=new UL;g.DP=0;g.cV=c;g.vR=(-1);g.vT=(-1);g.vS=(-1);g.hk=0.0;g.mH=0.0;g.oi=0.0;g.m$=0;k=new US;b=J(FN,4);d=b.data;d[0]=F(I3);d[1]=F(Ji);d[2]=F(JU);d[3]=F(Kk);RC(k,100,F(DO),b);k.Gs=g;g.A9=k;h=new I7;b=J(FN,2);d=b.data;d[0]=F(KE);d[1]=F(Iz);RC(h,20,F(Gw),b);g.Bt=h;c.cy=g;g=new Sw;g.CR=1.0;g.lE=0.0;g.nA=1.0;g.c6
=20.0;g.sK=B$();g.rO=Long_div(EF(),Long_fromInt(1000000));c.bf=g;c.kV=null;c.bs=0;c.D=null;g=new RX;g.q0=B(3);g.nX=B(3);g.od=B$();g.nv=0;g.f_=c;c.jf=g;c.eS=BbQ(c);c.bN=0;c.c8=0;c.Hb=null;c.FU=0;c.h6=0;c.Gp=Xp(0.0);c.cb=null;c.C5=Bap();c.Bz=BaY();c.hv=1;c.lv=B(3);c.gN=Long_fromInt(-1);c.bp=0;c.cj=0;c.cS=0;c.dy=B$();g=new VS;TL(g,B(4));g.yd=c;g.Ea=1;Te(g);c.cm=i;c.bF=j;Bc$=c;Bc7=c;c=Bc7;g=new Mi;Bbi();g.oh=B(5);g.FY=B(6);c.kV=g;Bc7.kV.Gu=B(7);Bc8=A_6(Bc7,B(8));Te(Bc8);return;default:E$();}}C3().s(b,c,d,e,f,g,
h,i,j,k,$p);}
function AKc(){Bc6=null;Bc7=null;Bc8=null;}
function MO(){}
function FN(){var a=this;D.call(a);a.uf=null;a.fX=null;a.md=null;}
var Bc_=0;function LW(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new FN;c.fX=b;d=c;b.classObject=d;}return c;}
function A35(a){return a.fX;}
function Us(a,b){var c;b=b;c=a.fX;return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&VR(b.constructor,c)?1:0;}
function P1(a,b){return VR(b.fX,a.fX);}
function IA(a){if(a.uf===null)a.uf=$rt_str(a.fX.$meta.name);return a.uf;}
function FV(a){return a.fX.$meta.primitive?1:0;}
function AGZ(a){return AR1(a.fX)===null?0:1;}
function Kv(a){return LW(AR1(a.fX));}
function A6Z(){I3.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GF],returnType:$rt_voidcls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];Ji.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GF],returnType:$rt_voidcls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel
:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"attackEntity",modifiers:0,accessLevel:2,parameterTypes:[C5,$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];JU.$meta.methods
=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GF],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"updatePlayerActionState",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"attackEntity",modifiers:0,accessLevel:2,parameterTypes:[C5,$rt_floatcls()],returnType
:$rt_voidcls(),callable:null},{name:"setCreeperFlashTime",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls()],returnType:$rt_floatcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];Kk.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GF],returnType:$rt_voidcls(),callable:null},{name:"findPlayerToAttack",modifiers:0,accessLevel:2,parameterTypes:[],returnType:C5,callable:null},{name:"attackEntity",modifiers
:0,accessLevel:2,parameterTypes:[C5,$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];KE.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GF],returnType
:$rt_voidcls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"getLivingSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getHurtSound",modifiers:0,accessLevel
:2,parameterTypes:[],returnType:B4,callable:null},{name:"getDeathSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null}];Iz.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GF],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"getLivingSound",modifiers
:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getHurtSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getDeathSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"interact",modifiers:0,accessLevel:3,parameterTypes:[Jq],returnType:$rt_booleancls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];Jc.$meta.methods=[{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeToNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null}];S$.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getSizeInventory",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getStackInSlot",modifiers
:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:Cd,callable:null},{name:"decrStackSize",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls()],returnType:Cd,callable:null},{name:"setInventorySlotContents",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),Cd],returnType:$rt_voidcls(),callable:null},{name:"getInvName",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B4,callable:null},{name:"readFromNBT",modifiers:4,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable
:null},{name:"writeToNBT",modifiers:4,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"getInventoryStackLimit",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null}];WS.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getSizeInventory",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getStackInSlot",modifiers:0,accessLevel:3,parameterTypes
:[$rt_intcls()],returnType:Cd,callable:null},{name:"decrStackSize",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls()],returnType:Cd,callable:null},{name:"setInventorySlotContents",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),Cd],returnType:$rt_voidcls(),callable:null},{name:"getInvName",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B4,callable:null},{name:"readFromNBT",modifiers:4,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"writeToNBT",modifiers
:4,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"getInventoryStackLimit",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getCookProgressScaled",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_intcls(),callable:null},{name:"getBurnTimeRemainingScaled",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_intcls(),callable:null},{name:"isBurning",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:$rt_booleancls(),callable:null},{name:"updateEntity",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"canSmelt",modifiers:0,accessLevel:1,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"smeltItem",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getSmeltingResult",modifiers:0,accessLevel:1,parameterTypes:[$rt_intcls()],returnType:$rt_intcls(),callable:null},{name:"getItemBurnTime",modifiers:0,accessLevel
:1,parameterTypes:[Cd],returnType:$rt_intcls(),callable:null},{name:"onInventoryChanged",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null}];Nt.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"anyPlayerInRange",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"updateEntity",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name
:"updateDelay",modifiers:0,accessLevel:1,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"readFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"writeToNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null}];DO.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GF],returnType:$rt_voidcls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable
:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"findPlayerToAttack",modifiers:0,accessLevel:2,parameterTypes:[],returnType:C5,callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"attackEntity",modifiers:0,accessLevel:2,parameterTypes:[C5,$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"getBlockPathWeight",modifiers:0,accessLevel:2,parameterTypes
:[$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_floatcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"getCanSpawnHere",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_booleancls(),callable:null}];EP.$meta.methods=[{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[GF],returnType:$rt_voidcls(),callable:null},{name:"getTexture",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B4,callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"canBePushed",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"getEyeHeight",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_floatcls(),callable:null},{name:"onEntityUpdate",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"spawnExplosionParticle",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"updateRidden",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"setSize",modifiers:0,accessLevel:2,parameterTypes:[$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable
:null},{name:"heal",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"getLivingSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getHurtSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getDeathSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable
:null},{name:"knockBack",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_voidcls(),callable:null},{name:"onDeath",modifiers:0,accessLevel:3,parameterTypes:[C5],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"fall",modifiers:0,accessLevel:2,parameterTypes:[$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"moveEntityWithHeading",modifiers
:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"isOnLadder",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"isEntityAlive",modifiers:0,accessLevel:3,parameterTypes:[],returnType:
$rt_booleancls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"jump",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"updatePlayerActionState",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"onEntityDeath",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getCanSpawnHere",modifiers:0,accessLevel:3,parameterTypes
:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_booleancls(),callable:null},{name:"kill",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null}];K9.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GF],returnType:$rt_voidcls(),callable:null},{name:"getBlockPathWeight",modifiers:0,accessLevel:2,parameterTypes:[$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_floatcls(),callable:null}];ID.$meta.methods=[{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[GF],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GF,$rt_intcls(),$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"setDirection",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"getArtSize",modifiers:0,accessLevel:1,parameterTypes:[$rt_intcls()],returnType:$rt_floatcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:$rt_voidcls(),callable:null},{name:"onValidSurface",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers
:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null}];Jo.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GF],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GF,EP],returnType:$rt_voidcls(),callable:null},{name:"setArrowHeading",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"onCollideWithPlayer",modifiers:0,accessLevel:3,parameterTypes:[Jq],returnType:$rt_voidcls(),callable:null}];E9.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GF,$rt_doublecls(),$rt_doublecls(),
$rt_doublecls(),Cd],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GF],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"handleWaterMovement",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"pushOutOfBlocks",modifiers:0,accessLevel:1,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_booleancls(),callable
:null},{name:"dealFireDamage",modifiers:0,accessLevel:2,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"onCollideWithPlayer",modifiers
:0,accessLevel:3,parameterTypes:[Jq],returnType:$rt_voidcls(),callable:null}];Mo.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GF],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GF,$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes
:[],returnType:$rt_voidcls(),callable:null},{name:"createExplosion",modifiers:0,accessLevel:1,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:2,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:2,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null}];JI.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GF],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers
:0,accessLevel:3,parameterTypes:[GF,$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:2,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:2,parameterTypes
:[APN],returnType:$rt_voidcls(),callable:null},{name:"getWorld",modifiers:0,accessLevel:3,parameterTypes:[],returnType:GF,callable:null}];Gc.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GF],returnType:$rt_voidcls(),callable:null},{name:"getCollisionBox",modifiers:0,accessLevel:3,parameterTypes:[C5],returnType:I5,callable:null},{name:"getBoundingBox",modifiers:0,accessLevel:3,parameterTypes:[],returnType:I5,callable:null},{name:"canBePushed",modifiers:0,accessLevel:3,parameterTypes
:[],returnType:$rt_booleancls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GF,$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_voidcls(),callable:null},{name:"getYOffset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_doublecls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable
:null},{name:"setEntityDead",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getPosOffset",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:Kh,callable:null},{name:"getPos",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:Kh,callable:null},{name:
"writeEntityToNBT",modifiers:0,accessLevel:2,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:2,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"applyEntityCollision",modifiers:0,accessLevel:3,parameterTypes:[C5],returnType:$rt_voidcls(),callable:null},{name:"getSizeInventory",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getStackInSlot",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType
:Cd,callable:null},{name:"decrStackSize",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls()],returnType:Cd,callable:null},{name:"setInventorySlotContents",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),Cd],returnType:$rt_voidcls(),callable:null},{name:"getInvName",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B4,callable:null},{name:"getInventoryStackLimit",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"onInventoryChanged",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"interact",modifiers:0,accessLevel:3,parameterTypes:[Jq],returnType:$rt_booleancls(),callable:null},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:$rt_voidcls(),callable:null}];}
function ASn(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!FV(a)&&!AGZ(a)){if(a.md===null){if(!Bc_){Bc_=1;A6Z();}b=a.fX.$meta.methods;a.md=J(Kp,b.length);c=0;d=0;while(d<b.length){e=b[d];if(DJ($rt_str(e.name),B(9))){f=e.parameterTypes;g=J(FN,f.length);h=g.data;i=0;j=h.length;while(i<j){h[i]=LW(f[i]);i=i+1|0;}h=a.md.data;j=c+1|0;k=new Kp;l=$rt_str(e.name);m=e.modifiers;i=e.accessLevel;f=Jy(e.callable,"call");k.zL=a;k.HV=l;k.u8=m;k.Dg=i;k.na=g;k.vD=f;h[c]=k;c=j;}d=d+1|0;}a.md=Nm(a.md,c);}return a.md.oV();}return J(Kp,0);}
function Wx(a,b){var c,d,e,f,g,h,i,j,k,l;c=ASn(a).data;d=c.length;e=0;while(true){if(e>=d){f=new UO;O(f);M(f);}g=c[e];if(!(AD_(g)&1)?0:1){a:{h=ABh(g);if(h===b)i=1;else{if(h!==null&&b!==null){j=h.data;h=b.data;k=j.length;if(k==h.length){i=0;while(i<k){f=j[i];l=h[i];if(!(f===l?1:f!==null?QY(f,l):l!==null?0:1)){i=0;break a;}i=i+1|0;}i=1;break a;}}i=0;}}if(i)break;}e=e+1|0;}return g;}
function JE(a){return LW(a.fX.$meta.superclass);}
function Zm(a){var b;b=a.fX;if(!Bda){AWX();Bda=1;}b=A2q(b);if(b!==null)return b;b=new LX;O(b);M(b);}
function AJ4(){D.call(this);}
function Bdb(){var a=new AJ4();A68(a);return a;}
function A68(a){return;}
function Cu(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Jy(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
function TZ(){D.call(this);}
var Bda=0;function Bdc(){var a=new TZ();A_r(a);return a;}
function A_r(a){return;}
function AS1(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function VR(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(VR(d[e],c))return 1;e=e+1|0;}return 0;}
function AWX(){var c='$$constructor$$';B4[c]=X3;D[c]=WD;AMa[c]=A1r;IZ[c]=AVv;Fg[c]=AUJ;D7[c]=O;AOQ[c]=AWM;IM[c]=AXH;ALC[c]=A3u;B6[c]=ATi;BE[c]=AZI;U[c]=A_g;HJ[c]=X;Ju[c]=AQY;ABe[c]=A2Z;AJ4[c]=A68;TZ[c]=A_r;Gj[c]=AHB;Bs[c]=VL;W3[c]=A2j;W9[c]=AZe;W$[c]=AXd;W7[c]=A47;W8[c]=A_O;W5[c]=A39;W6[c]=AXs;W4[c]=A23;Qt[c]=A1_;Qs[c]=A33;AED[c]=A2Q;B1[c]=A3S;Lf[c]=A6j;VX[c]=AZi;AFb[c]=AV6;ZC[c]=A25;Mw[c]=KD;AAQ[c]=A$4;AKA[c]=A1D;AQi[c]=A06;AB_[c]=AVr;NN[c]=AD7;UP[c]=AQs;ADq[c]=A$i;Dz[c]=A3c;L3[c]=AZB;AJd[c]=AV7;YR[c]=A0l;Cb[c]
=AT8;AI_[c]=A57;ED[c]=AUI;Nx[c]=AIm;AE4[c]=AS_;W_[c]=A3r;Su[c]=ZK;Ud[c]=A29;MP[c]=OK;AA6[c]=AY3;Jc[c]=AZY;D9[c]=ANt;AHG[c]=A1S;B8[c]=AQk;PZ[c]=A85;Of[c]=AZT;LZ[c]=ATj;N2[c]=A7x;AGi[c]=A0c;R9[c]=A6F;IU[c]=A0W;BO[c]=AUu;FD[c]=AW4;PJ[c]=A6L;AMl[c]=ATy;F9[c]=AHF;Hs[c]=A_p;AOn[c]=A2O;Xq[c]=A8N;Ki[c]=A7i;D1[c]=A9V;ZS[c]=A2C;WX[c]=A1h;GX[c]=AVa;E1[c]=A7S;AR$[c]=AXI;OO[c]=Y_;ANu[c]=A8H;CS[c]=D0;Gb[c]=M_;JP[c]=A5F;Bu[c]=AO2;ACz[c]=AUj;Er[c]=A44;UW[c]=A$a;G6[c]=AZN;Qf[c]=A$z;AKU[c]=A4u;ACh[c]=A3m;AHa[c]=A4p;Ry[c]=A0K;AJE[c]
=AWa;Qi[c]=ANK;AAB[c]=ASQ;AIG[c]=A5x;Jj[c]=AYd;FQ[c]=A6N;G9[c]=A5U;Go[c]=A1E;Mk[c]=A94;AAX[c]=AWb;AFS[c]=A8$;S$[c]=A17;WS[c]=AU_;KQ[c]=A2m;Rs[c]=A6P;Wy[c]=AFt;Lx[c]=AHr;OZ[c]=ALf;HT[c]=AC8;HV[c]=AGv;JX[c]=A7N;OH[c]=AH_;L9[c]=AVS;Ho[c]=AAh;Na[c]=AR0;Qu[c]=A_i;WE[c]=AVk;WC[c]=A5L;Hi[c]=AQH;Nb[c]=AKk;R3[c]=ASL;R5[c]=A98;R4[c]=A$b;R6[c]=A3H;AA0[c]=ATu;Nt[c]=A8c;ARY[c]=AXk;AQh[c]=A4q;PQ[c]=AYb;ACE[c]=A96;ARf[c]=AU9;AB6[c]=AZJ;AIn[c]=AWn;HN[c]=A8d;TE[c]=AZt;AAp[c]=AZz;Rr[c]=AST;AOT[c]=A7h;AQM[c]=AXq;ARy[c]=A$h;V3[c]
=AUa;ABz[c]=AUl;AH6[c]=AUL;AIA[c]=A4$;AEV[c]=A31;UO[c]=A6M;Gf[c]=A$f;U9[c]=AO4;AQF[c]=A4a;APN[c]=A8K;PY[c]=A$7;SC[c]=AYL;LX[c]=A6$;S5[c]=A$G;AMg[c]=AS5;NM[c]=AC$;QR[c]=ALy;ALt[c]=A7o;Z_[c]=A8v;NV[c]=AVL;Mt[c]=A4l;MT[c]=A51;Lh[c]=A1I;N7[c]=AZZ;Pc[c]=AZW;Mm[c]=AZA;MD[c]=A_I;OA[c]=A8n;QN[c]=AG5;ARR[c]=AXA;XU[c]=A$p;XN[c]=A2b;AEa[c]=A0C;ARQ[c]=A6U;AE$[c]=AU7;AR8[c]=A2S;HQ[c]=A$n;KZ[c]=AXV;CE[c]=A4z;ZJ[c]=A2u;H6[c]=AF8;TJ[c]=A_D;WU[c]=A4v;ABI[c]=AVg;AJo[c]=A0F;AQ5[c]=AW1;AGh[c]=A8j;Ey[c]=A3O;Ws[c]=A36;Wt[c]=AWI;NE[c]
=AWT;M8[c]=A0S;AEF[c]=AWq;AFj[c]=AXc;AFs[c]=ATR;NA[c]=AUZ;L$[c]=AWW;AHR[c]=A7T;Ow[c]=AZP;AMM[c]=A0J;ACH[c]=A9I;AAf[c]=A$2;AJ9[c]=AT5;AQa[c]=A3Y;AHZ[c]=AZ5;APm[c]=ATT;AEn[c]=AYp;AFY[c]=AUX;YV[c]=AUs;AIw[c]=AX7;APC[c]=AYC;AE8[c]=A6r;ALa[c]=ATm;ACT[c]=AUB;AG$[c]=AXP;APQ[c]=A79;ABs[c]=AUv;AAF[c]=A9q;AHX[c]=A6l;K_[c]=AVA;AQD[c]=A6v;AMS[c]=A1z;AAy[c]=A6V;AKO[c]=A12;AKs[c]=AS4;Zp[c]=A75;AL6[c]=A$N;KH[c]=AT2;SW[c]=AAg;AJX[c]=ATS;Nf[c]=ASk;AFZ[c]=A0h;NS[c]=ABk;Pt[c]=A_F;Q_[c]=A60;WO[c]=AXX;N9[c]=AVT;ARi[c]=A0T;AIp[c]
=AWP;Y2[c]=AZ$;}
function A2q(b){if($rt_resuming()){var $r = $rt_nativeThread().pop();b.$$constructor$$($r);if($rt_suspending()){return $rt_nativeThread().push($r);}return $r;}if(!b.hasOwnProperty('$$constructor$$')){return null;}var $r=new b();b.$$constructor$$($r);if($rt_suspending()){return $rt_nativeThread().push($r);}return $r;}
function AZK(b){return setTimeout(function(){$rt_threadStarter(A3Z)(b);},0);}
function A3Z(b){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:b.km();if(C()){break _;}return;default:E$();}}C3().s(b,$p);}
function QU(b){AFD(b,0);}
function AFD(b,c){return setTimeout(function(){A3Z(b);},c);}
function AP0(b){return String.fromCharCode(b);}
function AR1(b){return b.$meta.item;}
function AXn(){return [];}
function Db(){}
function DL(){}
function KW(){}
function B4(){var a=this;D.call(a);a.bw=null;a.qk=0;}
var Bdd=null;function Bde(){var a=new B4();X3(a);return a;}
function AIa(a){var b=new B4();Ti(b,a);return b;}
function Li(a,b,c){var d=new B4();ASA(d,a,b,c);return d;}
function A24(a,b){var c=new B4();Yr(c,a,b);return c;}
function A$A(a,b,c){var d=new B4();Xw(d,a,b,c);return d;}
function X3(a){a.bw=$rt_createCharArray(0);}
function Ti(a,b){var c,d;b=b.data;c=b.length;a.bw=$rt_createCharArray(c);d=0;while(d<c){a.bw.data[d]=b[d];d=d+1|0;}}
function ASA(a,b,c,d){var e,f;a.bw=$rt_createCharArray(d);e=0;while(e<d){f=b.data;a.bw.data[e]=f[e+c|0];e=e+1|0;}}
function Yr(a,b,c){c=AN0(c,AMA(b,0,b.data.length));if(AJA(c)&&!c.bk&&c.cv==c.my)a.bw=APh(c);else{a.bw=$rt_createCharArray(Ct(c));AEP(c,a.bw);}}
function Xw(a,b,c,d){var e,f,g,h,i,j;a.bw=$rt_createCharArray(d*2|0);e=0;f=0;while(f<d){g=b.data;h=c+1|0;i=g[c];if(i<65536){g=a.bw.data;j=e+1|0;g[e]=i&65535;}else{g=a.bw.data;c=e+1|0;g[e]=IB(i);g=a.bw.data;j=c+1|0;g[c]=H7(i);}f=f+1|0;c=h;e=j;}if(e<a.bw.data.length)a.bw=O1(a.bw,e);}
function Y(a,b){var c;if(b>=0&&b<a.bw.data.length)return a.bw.data[b];c=new IU;O(c);M(c);}
function Bh(a){return a.bw.data.length;}
function Iv(a){return a.bw.data.length?0:1;}
function ARo(a,b){var c,d,e;if(a===b)return 0;c=CB(Bh(a),Bh(b));d=0;while(true){if(d>=c)return Bh(a)-Bh(b)|0;e=Y(a,d)-Y(b,d)|0;if(e)break;d=d+1|0;}return e;}
function AJB(a,b){var c,d,e;if(a===b)return 0;c=CB(Bh(a),Bh(b));d=0;while(true){if(d>=c)return Bh(a)-Bh(b)|0;e=EU(Y(a,d))-EU(Y(b,d))|0;if(e)break;d=d+1|0;}return e;}
function V9(a,b,c){var d,e,f;if((c+Bh(b)|0)>Bh(a))return 0;d=0;while(d<Bh(b)){e=Y(b,d);f=c+1|0;if(e!=Y(a,c))return 0;d=d+1|0;c=f;}return 1;}
function Iw(a,b){if(a===b)return 1;return V9(a,b,0);}
function Hg(a,b,c){var d,e,f,g;d=DB(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.bw.data.length)return (-1);if(a.bw.data[d]==e)break;d=d+1|0;}return d;}f=IB(b);g=H7(b);while(true){if(d>=(a.bw.data.length-1|0))return (-1);if(a.bw.data[d]==f&&a.bw.data[d+1|0]==g)break;d=d+1|0;}return d;}
function Ux(a,b){return Hg(a,b,0);}
function If(a,b,c){var d,e,f,g,h;d=CB(c,Bh(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.bw.data[d]==e)break;d=d+(-1)|0;}return d;}f=IB(b);g=H7(b);while(true){if(d<1)return (-1);if(a.bw.data[d]==g){h=a.bw.data;b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function LF(a,b){return If(a,b,Bh(a)-1|0);}
function AKF(a,b,c){var d,e,f;d=DB(0,c);e=Bh(a)-Bh(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=Bh(b))break a;if(Y(a,d+f|0)!=Y(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function AAu(a,b,c){var d,e;d=CB(c,Bh(a)-Bh(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=Bh(b))break a;if(Y(a,d+e|0)!=Y(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function Eu(a,b,c){var d;if(b<=c)return Li(a.bw,b,c-b|0);d=new BO;O(d);M(d);}
function Jp(a,b){return Eu(a,b,Bh(a));}
function AVI(a,b,c){return Eu(a,b,c);}
function NZ(a,b,c){var d,e,f,g;d=new U;X(d);e=Bh(a)-Bh(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=Bh(b)){FK(d,c);f=f+(Bh(b)-1|0)|0;break a;}if(Y(a,f+g|0)!=Y(b,g))break;g=g+1|0;}Dx(d,Y(a,f));}f=f+1|0;}FK(d,Jp(a,f));return V(d);}
function AUg(a){return a;}
function Nq(a){var b,c,d,e;b=$rt_createCharArray(a.bw.data.length);c=b.data;d=0;e=c.length;while(d<e){c[d]=a.bw.data[d];d=d+1|0;}return b;}
function Ui(b){return b===null?B(10):b.gj();}
function VO(b){var c;c=new U;X(c);return V(Be(c,b));}
function DJ(a,b){var c,d;if(a===b)return 1;if(!(b instanceof B4))return 0;c=b;if(Bh(c)!=Bh(a))return 0;d=0;while(d<Bh(c)){if(Y(a,d)!=Y(c,d))return 0;d=d+1|0;}return 1;}
function A8l(a){var b,c,d,e;a:{if(!a.qk){b=a.bw.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.qk=(31*a.qk|0)+e|0;d=d+1|0;}}}return a.qk;}
function AKi(a){var b,c,d,e,f,g,h;if(Iv(a))return a;b=$rt_createIntArray(a.bw.data.length);c=b.data;d=0;e=0;while(e<a.bw.data.length){a:{if(e!=(a.bw.data.length-1|0)&&Dt(a.bw.data[e])){f=a.bw.data;g=e+1|0;if(DP(f[g])){h=d+1|0;c[d]=GN(EI(a.bw.data[e],a.bw.data[g]));e=g;break a;}}h=d+1|0;c[d]=EU(a.bw.data[e]);}e=e+1|0;d=h;}return A$A(b,0,d);}
function AOg(a){var b,c,d,e,f,g,h;if(Iv(a))return a;b=$rt_createIntArray(a.bw.data.length);c=b.data;d=0;e=0;while(e<a.bw.data.length){a:{if(e!=(a.bw.data.length-1|0)&&Dt(a.bw.data[e])){f=a.bw.data;g=e+1|0;if(DP(f[g])){h=d+1|0;c[d]=GM(EI(a.bw.data[e],a.bw.data[g]));e=g;break a;}}h=d+1|0;c[d]=FB(a.bw.data[e]);}e=e+1|0;d=h;}return A$A(b,0,d);}
function ANj(a,b){var c,d;if(b===null){b=new ED;Bl(b,B(11));M(b);}Bdf=1;c=Bbv();d=new HS;d.h3=1;d.eM=b;d.bE=$rt_createCharArray(Bh(b)+2|0);Di(Nq(b),0,d.bE,0,Bh(b));d.bE.data[d.bE.data.length-1|0]=0;d.bE.data[d.bE.data.length-2|0]=0;d.DQ=d.bE.data.length;d.l2=0;Gx(d);Gx(d);c.n=d;c.fN=0;c.uU=SQ(c,(-1),c.fN,null);if(!En(c.n))M(CN(B(3),c.n.eM,c.n.ie));if(c.y5)c.uU.iS();return AIO(c,a);}
function AVZ(a,b){return ARo(a,b);}
function AGl(){Bdd=new VX;}
function D7(){var a=this;D.call(a);a.vr=null;a.jy=null;a.on=0;a.rK=0;a.o_=null;a.qJ=null;}
function Bdg(){var a=new D7();O(a);return a;}
function Bdh(a){var b=new D7();Bl(b,a);return b;}
function Bdi(a){var b=new D7();WP(b,a);return b;}
function O(a){a.on=1;a.rK=1;}
function Bl(a,b){a.on=1;a.rK=1;a.vr=b;}
function WP(a,b){a.on=1;a.rK=1;a.jy=b;}
function A5G(a){return a;}
function A0i(a){return a.vr;}
function AWm(a){return a.lK();}
function Cc(a){SR(a,C1());}
function SR(a,b){var c,d,e,f,g;Kn(b,IA(Dl(a)));c=a.lK();if(c!==null){d=new U;X(d);Kn(b,V(I(I(d,B(12)),c)));}a:{APA(b);if(a.qJ!==null){e=a.qJ.data;f=e.length;g=0;while(true){if(g>=f)break a;d=e[g];Kn(b,B(13));ACg(b,d);g=g+1|0;}}}if(a.jy!==null&&a.jy!==a){Kn(b,B(14));SR(a.jy,b);}}
function Ox(a,b){var c,d,e,f,g;Hl(b,IA(Dl(a)));c=a.lK();if(c!==null){d=new U;X(d);Hl(b,V(I(I(d,B(12)),c)));}a:{SH(b);if(a.qJ!==null){e=a.qJ.data;f=e.length;g=0;while(true){if(g>=f)break a;d=e[g];Hl(b,B(15));AAA(b,d);g=g+1|0;}}}if(a.jy!==null&&a.jy!==a){Hl(b,B(14));Ox(a.jy,b);}}
function WH(a,b){if(!a.on)return;a.o_=Nm(a.o_,a.o_.data.length+1|0);a.o_.data[a.o_.data.length-1|0]=b;}
function Fg(){D7.call(this);}
function Bdj(){var a=new Fg();AUJ(a);return a;}
function AUJ(a){O(a);}
function IZ(){Fg.call(this);}
function Bdk(){var a=new IZ();AVv(a);return a;}
function AVv(a){O(a);}
function AMa(){IZ.call(this);}
function Bdl(){var a=new AMa();A1r(a);return a;}
function A1r(a){O(a);}
function HJ(){var a=this;D.call(a);a.O=null;a.bX=0;}
function Bdm(){var a=new HJ();X(a);return a;}
function BcR(a){var b=new HJ();Gy(b,a);return b;}
function X(a){Gy(a,16);}
function Gy(a,b){a.O=$rt_createCharArray(b);}
function Tp(a,b,c){return AMt(a,a.bX,b,c);}
function AMt(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c;}a:{if(c<d){if(e)C2(a,b,b+1|0);else{C2(a,b,b+2|0);f=a.O.data;g=b+1|0;f[b]=45;b=g;}a.O.data[b]=IY(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=Bj(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;C2(a,b,b+i|0);if(e)e=b;else{f=a.O.data;e=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.O.data;b=e+1|0;f[e]=IY(c/k|0,d);c=c%k|0;k=k/d|0;e=b;}}}return a;}
function ADa(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(Long_lt(c,Long_ZERO)){e=0;c=Long_neg(c);}a:{f=Long_fromInt(d);if(Long_lt(c,f)){if(e)C2(a,b,b+1|0);else{C2(a,b,b+2|0);g=a.O.data;h=b+1|0;g[b]=45;b=h;}a.O.data[b]=IY(c.lo,d);}else{i=1;j=Long_fromInt(1);while(true){k=Long_mul(j,f);if(Long_le(k,j))break;if(Long_gt(k,c))break;i=i+1|0;j=k;}if(!e)i=i+1|0;C2(a,b,b+i|0);if(e)i=b;else{g=a.O.data;i=b+1|0;g[b]=45;}while(true){if(Long_le(j,Long_ZERO))break a;g=a.O.data;b=i+1|0;g[i]=IY(Long_div(c,j).lo,d);c=Long_rem(c,j);j=Long_div(j,
f);i=b;}}}return a;}
function AOp(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=R(c,0.0);if(!d){C2(a,b,b+3|0);e=a.O.data;d=b+1|0;e[b]=48;e=a.O.data;b=d+1|0;e[d]=46;a.O.data[b]=48;return a;}if(!d){C2(a,b,b+4|0);e=a.O.data;d=b+1|0;e[b]=45;e=a.O.data;b=d+1|0;e[d]=48;e=a.O.data;d=b+1|0;e[b]=46;a.O.data[d]=48;return a;}if(isNaN(c)?1:0){C2(a,b,b+3|0);e=a.O.data;d=b+1|0;e[b]=78;e=a.O.data;b=d+1|0;e[d]=97;a.O.data[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){C2(a,b,b+8|0);d=b;}else{C2(a,b,b+9|0);e=a.O.data;d=b+1|0;e[b]=45;}e=a.O.data;b=d+1|0;e[d]
=73;e=a.O.data;d=b+1|0;e[b]=110;e=a.O.data;b=d+1|0;e[d]=102;e=a.O.data;d=b+1|0;e[b]=105;e=a.O.data;b=d+1|0;e[d]=110;e=a.O.data;d=b+1|0;e[b]=105;e=a.O.data;b=d+1|0;e[d]=116;a.O.data[b]=121;return a;}f=Bdn;AOc(c,f);d=f.ur;g=f.t_;h=f.za;i=1;j=1;if(h){h=1;j=2;}k=9;l=A0Q(d);if(l>0)k=k-l|0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=DB(k,i+1|0);g=0;}else if(g<0){d=d/Bdo.data[ -g]|0;k=k-g|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;C2(a,b,b+(j+k|0)|0);if(!h)h=b;else{e=a.O.data;h=b+
1|0;e[b]=45;}m=100000000;n=0;while(n<k){if(m<=0)o=0;else{o=d/m|0;d=d%m|0;}e=a.O.data;b=h+1|0;e[h]=(48+o|0)&65535;i=i+(-1)|0;if(i)h=b;else{e=a.O.data;h=b+1|0;e[b]=46;}m=m/10|0;n=n+1|0;}if(g){e=a.O.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g;e=a.O.data;d=b+1|0;e[b]=45;}if(g<10)l=d;else{e=a.O.data;l=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}a.O.data[l]=(48+(g%10|0)|0)&65535;}return a;}
function AKv(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=R(c,0.0);if(!d){C2(a,b,b+3|0);e=a.O.data;d=b+1|0;e[b]=48;e=a.O.data;b=d+1|0;e[d]=46;a.O.data[b]=48;return a;}if(!d){C2(a,b,b+4|0);e=a.O.data;d=b+1|0;e[b]=45;e=a.O.data;b=d+1|0;e[d]=48;e=a.O.data;d=b+1|0;e[b]=46;a.O.data[d]=48;return a;}if(isNaN(c)?1:0){C2(a,b,b+3|0);e=a.O.data;d=b+1|0;e[b]=78;e=a.O.data;b=d+1|0;e[d]=97;a.O.data[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){C2(a,b,b+8|0);d=b;}else{C2(a,b,b+9|0);e=a.O.data;d=b+1|0;e[b]=45;}e=a.O.data;b=d+1|0;e[d]
=73;e=a.O.data;d=b+1|0;e[b]=110;e=a.O.data;b=d+1|0;e[d]=102;e=a.O.data;d=b+1|0;e[b]=105;e=a.O.data;b=d+1|0;e[d]=110;e=a.O.data;d=b+1|0;e[b]=105;e=a.O.data;b=d+1|0;e[d]=116;a.O.data[b]=121;return a;}f=Bdp;ABU(c,f);g=f.uV;h=f.tZ;i=f.y3;j=1;k=1;if(i)k=2;l=18;d=AZx(g);if(d>0)l=l-d|0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=DB(l,j+1|0);h=0;}else if(h<0){g=Long_div(g,Bdq.data[ -h]);l=l-h|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;C2(a,b,b+(k+l|0)|
0);if(!i)i=b;else{e=a.O.data;i=b+1|0;e[b]=45;}m=new Long(1569325056, 23283064);n=0;while(n<l){if(Long_le(m,Long_ZERO))o=0;else{o=Long_div(g,m).lo;g=Long_rem(g,m);}e=a.O.data;b=i+1|0;e[i]=(48+o|0)&65535;j=j+(-1)|0;if(j)i=b;else{e=a.O.data;i=b+1|0;e[b]=46;}m=Long_div(m,Long_fromInt(10));n=n+1|0;}if(h){e=a.O.data;b=i+1|0;e[i]=69;if(h>=0)d=b;else{h= -h;e=a.O.data;d=b+1|0;e[b]=45;}if(h>=100){e=a.O.data;b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;e=a.O.data;j=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)j=d;else
{e=a.O.data;j=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}a.O.data[j]=(48+(h%10|0)|0)&65535;}return a;}
function A0Q(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AZx(b){var c,d,e,f;c=Long_fromInt(1);d=0;e=16;f=Bdr.data.length-1|0;while(f>=0){if(Long_eq(Long_rem(b,Long_mul(c,Bdr.data[f])),Long_ZERO)){d=d|e;c=Long_mul(c,Bdr.data[f]);}e=e>>>1;f=f+(-1)|0;}return d;}
function Dx(a,b){return a.ya(a.bX,b);}
function KY(a,b,c){C2(a,b,b+1|0);a.O.data[b]=c;return a;}
function MU(a,b){var c;if(a.O.data.length>=b)return;c=a.O.data.length>=1073741823?2147483647:DB(b,DB(a.O.data.length*2|0,5));a.O=O1(a.O,c);}
function V(a){return Li(a.O,0,a.bX);}
function IT(a,b,c,d){return a.xK(a.bX,b,c,d);}
function J4(a,b,c,d,e){var f,g,h,i;C2(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.O.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function Hh(a,b){return a.xc(b,0,b.data.length);}
function C2(a,b,c){var d,e;d=a.bX-b|0;a.nu((a.bX+c|0)-b|0);e=d-1|0;while(e>=0){a.O.data[c+e|0]=a.O.data[b+e|0];e=e+(-1)|0;}a.bX=a.bX+(c-b|0)|0;}
function Ir(){}
function U(){HJ.call(this);}
function BX(){var a=new U();A_g(a);return a;}
function A_g(a){X(a);}
function I(a,b){Nu(a,a.bX,b);return a;}
function Be(a,b){Tp(a,b,10);return a;}
function C6(a,b){UD(a,a.bX,b);return a;}
function AWz(a,b){WF(a,a.bX,b);return a;}
function AKo(a,b){Qk(a,a.bX,b);return a;}
function ASZ(a,b){Dx(a,b);return a;}
function AU6(a,b,c,d){IT(a,b,c,d);return a;}
function A9W(a,b){Hh(a,b);return a;}
function FK(a,b){Xj(a,a.bX,b);return a;}
function UD(a,b,c){ADa(a,b,c,10);return a;}
function WF(a,b,c){AOp(a,b,c);return a;}
function Qk(a,b,c){AKv(a,b,c);return a;}
function A9e(a,b,c,d,e){J4(a,b,c,d,e);return a;}
function Xj(a,b,c){Nu(a,b,c===null?B(10):c.gj());return a;}
function AYU(a,b,c){KY(a,b,c);return a;}
function AGH(a,b,c){var d,e,f,g,h,i,j;d=R(b,c);if(d<=0&&b<=a.bX){if(d){e=a.bX-c|0;a.bX=a.bX-(c-b|0)|0;d=0;while(d<e){f=a.O.data;g=b+1|0;h=a.O.data;i=c+1|0;f[b]=h[c];d=d+1|0;b=g;c=i;}}return a;}j=new IU;O(j);M(j);}
function Sd(a,b){var c,d,e,f;if(b>=0&&b<a.bX){a.bX=a.bX-1|0;while(b<a.bX){c=a.O.data;d=a.O.data;e=b+1|0;c[b]=d[e];b=e;}return a;}f=new IU;O(f);M(f);}
function Nu(a,b,c){var d,e,f;if(b>=0&&b<=a.bX){a:{if(c===null)c=B(10);else if(Iv(c))break a;MU(a,a.bX+Bh(c)|0);d=a.bX-1|0;while(d>=b){a.O.data[d+Bh(c)|0]=a.O.data[d];d=d+(-1)|0;}a.bX=a.bX+Bh(c)|0;d=0;while(d<Bh(c)){e=a.O.data;f=b+1|0;e[b]=Y(c,d);d=d+1|0;b=f;}}return a;}c=new IU;O(c);M(c);}
function ANe(a,b){a.bX=b;}
function AAw(a,b,c,d,e){var f,g,h,i,j;if(b>c){f=new BO;Bl(f,B(16));M(f);}while(b<c){g=d.data;h=e+1|0;i=a.O.data;j=b+1|0;g[e]=i[b];e=h;b=j;}}
function A6X(a,b,c,d,e){J4(a,b,c,d,e);return a;}
function AVm(a,b,c,d){IT(a,b,c,d);return a;}
function J9(a){return a.bX;}
function BL(a){return V(a);}
function AXJ(a,b){MU(a,b);}
function A7J(a,b,c){return Xj(a,b,c);}
function A7m(a,b,c){KY(a,b,c);return a;}
function A0y(a,b,c){return Qk(a,b,c);}
function A5$(a,b,c){return WF(a,b,c);}
function AUH(a,b,c){return UD(a,b,c);}
function A2E(a,b,c){return Nu(a,b,c);}
function Fa(){D.call(this);}
function Ge(){Fa.call(this);this.f5=0;}
var Bds=null;var Bdt=null;function AQP(a){var b=new Ge();Lp(b,a);return b;}
function Lp(a,b){a.f5=b;}
function Lc(b,c){var d,e,f,g,h,i,j;if(c>=2&&c<=36){if(b!==null&&!Iv(b)){a:{d=0;e=0;switch(Y(b,0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==Bh(b)){b=new Ey;O(b);M(b);}while(e<Bh(b)){g=e+1|0;h=T9(Y(b,e));if(h<0){i=new Ey;j=new U;X(j);Bl(i,V(I(I(j,B(17)),b)));M(i);}if(h>=c){i=new Ey;j=new U;X(j);Bl(i,V(I(I(Be(I(j,B(18)),c),B(12)),b)));M(i);}f=Bj(c,f)+h|0;if(f<0){if(g==Bh(b)&&f==(-2147483648)&&d)return (-2147483648);i=new Ey;j=new U;X(j);Bl(i,V(I(I(j,B(19)),b)));M(i);}e=g;}if(d)f= -f;return f;}b
=new Ey;Bl(b,B(20));M(b);}i=new Ey;b=new U;X(b);Bl(i,V(Be(I(b,B(21)),c)));M(i);}
function CX(b){var c;if(b>=(-128)&&b<=127){a:{if(Bdt===null){Bdt=J(Ge,256);c=0;while(true){if(c>=Bdt.data.length)break a;Bdt.data[c]=AQP(c-128|0);c=c+1|0;}}}return Bdt.data[b+128|0];}return AQP(b);}
function A3R(a){return a.f5;}
function Mu(a){var b;b=a.f5;return Tp(BcR(20),b,10).gj();}
function A26(a){return a.f5>>>4^a.f5<<28^a.f5<<8^a.f5>>>24;}
function A_o(a,b){if(a===b)return 1;return b instanceof Ge&&b.f5==a.f5?1:0;}
function AAx(a,b){return R(a.f5,b.f5);}
function Ts(b){var c,d;if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;b=d>>>8;if(!b)b=d;else c=c|8;d=b>>>4;if(!d)d=b;else c=c|4;b=d>>>2;if(!b)b=d;else c=c|2;if(b>>>1)c=c|1;return (32-c|0)-1|0;}
function Jz(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function Ni(b,c){var d;d=c&31;return b<<d|b>>>(32-d|0);}
function A61(a,b){return AAx(a,b);}
function AQj(){Bds=F($rt_intcls());}
function IM(){IZ.call(this);}
function Bdu(){var a=new IM();AXH(a);return a;}
function Bdv(a){var b=new IM();P8(b,a);return b;}
function AXH(a){O(a);}
function P8(a,b){Bl(a,b);}
function AOQ(){IM.call(this);}
function Bdw(){var a=new AOQ();AWM(a);return a;}
function Bdx(a){var b=new AOQ();AUp(b,a);return b;}
function AWM(a){O(a);}
function AUp(a,b){P8(a,b);}
function ALC(){IM.call(this);}
function Bdy(){var a=new ALC();A3u(a);return a;}
function Bdz(a){var b=new ALC();AUK(b,a);return b;}
function A3u(a){O(a);}
function AUK(a,b){P8(a,b);}
function BE(){D7.call(this);}
function BdA(){var a=new BE();AZI(a);return a;}
function AZI(a){O(a);}
function B6(){BE.call(this);}
function BdB(){var a=new B6();ATi(a);return a;}
function ZY(a){var b=new B6();A$V(b,a);return b;}
function ATi(a){O(a);}
function A$V(a,b){Bl(a,b);}
function C_(){}
function Hd(){}
function Uj(){}
function Ql(){}
function U8(){}
function Rd(){}
function Wf(){}
function Ps(){}
function Lk(){}
function YG(){D.call(this);}
function AX4(a,b,c){a.Xg($rt_str(b),Jy(c,"handleEvent"));}
function AYg(a,b,c){a.UF($rt_str(b),Jy(c,"handleEvent"));}
function ATE(a,b){return a.HC(b);}
function AY9(a,b,c,d){a.KI($rt_str(b),Jy(c,"handleEvent"),d?1:0);}
function A1C(a,b){return !!a.Xn(b);}
function AUC(a){return a.I6();}
function ASX(a,b,c,d){a.NB($rt_str(b),Jy(c,"handleEvent"),d?1:0);}
function Bs(){D.call(this);}
var BdC=0;var BdD=null;var BdE=null;var BdF=null;var BdG=null;var BdH=null;var BdI=null;var BdJ=null;var BdK=null;var BdL=null;var BdM=null;var BdN=null;var BdO=null;var BdP=null;var BdQ=null;var BdR=null;var BdS=null;var BdT=null;var BdU=null;var BdV=null;var BdW=0;var BdX=0;var BdY=0.0;var BdZ=0.0;var Bd0=0;var Bd1=0;var Bd2=0;var Bd3=0;var Bd4=0;var Bd5=null;var Bd6=null;var Bd7=null;var Bd8=null;var Bd9=null;var Bd$=0;var Bd_=null;var Bea=null;var Beb=null;var Bec=null;var Bed=null;var Bee=null;var Bef=
Long_ZERO;var Beg=0;var Beh=0;var Bei=0;var Bej=null;var Bek=null;var Bel=null;var Bem=0;var Ben=0;var Beo=0;var Bep=null;var Beq=null;var Ber=null;var Bes=0;var Bet=null;var Beu=null;var Bev=0.0;var Bew=null;var Bex=0;var Bey=null;var Bez=null;var BeA=0;var BeB=null;var BeC=0;function Bd(){Bd=Bt(Bs);ATI();}
function BeD(){var a=new Bs();VL(a);return a;}
function VL(a){Bd();}
function PB(){Bd();return B(22);}
function Kd(b){Bd();if(Iw(b,B(23)))b=Jp(b,1);return CP(BeE,b);}
function AB8(b){var c;Bd();c=Kd(b);if(c===null)return null;return A24(c,X2(B(24)));}
function ALj(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gk=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IS=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaG(callback);return thread.suspend(function(){try{A3n(b,callback);}catch($e){callback.IS($rt_exception($e));}});}
function A3n(b,c){var d,e;Bd();d=new XMLHttpRequest();e="arraybuffer";d.responseType=e;d.open("GET",$rt_ustr(b),!!1);b=new W2;b.vh=d;b.z5=c;b=Cu(b,"stateChanged");d.onreadystatechange=b;d.send();}
function AAn(b,c){var d,e,f,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bd();BdE=b;d=$rt_str(BdE.getAttribute("style"));e=BdE;f=new U;X(f);if(d===null)d=B(3);d=V(I(I(f,d),B(25)));e.setAttribute("style",$rt_ustr(d));BdJ=window;BdD=BdJ.document;BdF=BdD.createElement("canvas");Bd0=b.clientWidth;Bd1=b.clientHeight;f=BdF;e=Bd0;f.width=e;f=BdF;e=Bd1;f.height=e;BdG=BdF.getContext("2d");BdF.setAttribute("id","deevis589723589");f=BdF;b.appendChild(f);BdH
=BdD.createElement("canvas");b=BdH;f=Bd0;b.width=f;b=BdH;f=Bd1;b.height=f;b=BdH;e=AEL();BdI=b.getContext("webgl2",e);if(BdI===null){b=new B6;c=new U;X(c);Bl(b,V(I(I(I(c,B(26)),$rt_str(window.navigator.userAgent)),B(27))));M(b);}X4(BdI);BdI.getExtension("EXT_texture_filter_anisotropic");b=BdJ;e=new W3;BdL=e;b.addEventListener("contextmenu",Cu(e,"handleEvent"));b=BdF;e=new W9;BdM=e;b.addEventListener("mousedown",Cu(e,"handleEvent"));b=BdF;e=new W$;BdN=e;b.addEventListener("mouseup",Cu(e,"handleEvent"));b=BdF;e
=new W7;BdO=e;b.addEventListener("mousemove",Cu(e,"handleEvent"));b=BdJ;e=new W8;BdP=e;b.addEventListener("keydown",Cu(e,"handleEvent"));b=BdJ;e=new W5;BdQ=e;b.addEventListener("keyup",Cu(e,"handleEvent"));b=BdJ;e=new W6;BdR=e;b.addEventListener("keypress",Cu(e,"handleEvent"));b=BdF;e=new W4;BdS=e;b.addEventListener("wheel",Cu(e,"handleEvent"));b=BdJ;e=new Qt;b.addEventListener("blur",Cu(e,"handleEvent"));b=BdJ;e=new Qs;b.addEventListener("focus",Cu(e,"handleEvent"));ANT();$p=1;case 1:AJM();if(C()){break _;}$p
=2;case 2:ALj(c);if(C()){break _;}a:{try{AL9(BdK);break a;}catch($$e){$$je=Bi($$e);if($$je instanceof B1){f=$$je;}else{throw $$e;}}Cc(f);}Beu=AYo();Oq(BdU);Oq(BdV);return;default:E$();}}C3().s(b,c,d,e,f,$p);}
function K1(b){Bd();BdI.enable(b);}
function J0(b){Bd();BdI.disable(b);}
function AH2(){var b,c;Bd();b=new VW;b.iU=BdI.createProgram();c=Bd4+1|0;Bd4=c;b.xe=c;return b;}
function Oz(b){var c;Bd();c=new V0;c.jl=BdI.createShader(b);return c;}
function R7(b,c){var d;Bd();d=BdI;b=b.iU;c=c.jl;d.attachShader(b,c);}
function UE(b,c){var d;Bd();d=BdI;b=b.iU;c=c.jl;d.detachShader(b,c);}
function Wz(b){var c;Bd();c=BdI;b=b.jl;c.compileShader(b);}
function AAC(b){var c;Bd();c=BdI;b=b.iU;c.linkProgram(b);}
function OV(b,c){var d;Bd();d=BdI;b=b.jl;d.shaderSource(b,$rt_ustr(c));}
function T4(b){var c;Bd();c=BdI;b=b.jl;return $rt_str(c.getShaderInfoLog(b));}
function AHu(b){var c;Bd();c=BdI;b=b.iU;return $rt_str(c.getProgramInfoLog(b));}
function U_(b){var c;Bd();c=BdI;b=b.jl;return c.getShaderParameter(b,35713)!=1?0:1;}
function AGn(b){var c;Bd();c=BdI;b=b.iU;return c.getProgramParameter(b,35714)!=1?0:1;}
function S_(b){var c;Bd();c=BdI;b=b.jl;c.deleteShader(b);}
function L6(){var b;Bd();b=new V7;b.DT=BdI.createBuffer();return b;}
function Hc(b,c){var d;Bd();d=BdI;c=c!==null?c.DT:null;d.bindBuffer(b,c);}
function Pw(b,c,d){var e;Bd();e=BdI;c=c;e.bufferData(b,c,d);}
function N1(b){Bd();BdI.enableVertexAttribArray(b);}
function Dq(b,c){var d;Bd();d=BdI;b=b.iU;d=d.getUniformLocation(b,$rt_ustr(c));if(d===null)b=null;else{b=new Xc;b.kt=d;}return b;}
function LU(b,c,d){var e;Bd();e=BdI;b=b.iU;e.bindAttribLocation(b,c,$rt_ustr(d));}
function Ib(b,c){var d;Bd();if(b!==null){d=BdI;b=b.kt;d.uniform1f(b,c);}}
function Ln(b,c,d,e){var f;Bd();if(b!==null){f=BdI;b=b.kt;f.uniform3f(b,c,d,e);}}
function Uc(b,c,d,e,f){var g,h;Bd();if(b!==null){g=BdI;h=b.kt;g.uniform4f(h,c,d,e,f);}}
function Q5(b,c){var d;Bd();if(b!==null){d=BdI;b=b.kt;d.uniform1i(b,c);}}
function Mf(b,c){var d,e;Bd();Bd9.set(c.data);if(b!==null){d=BdI;e=b.kt;b=Bd9;d.uniformMatrix4fv(e,!!0,b);}}
function VU(b){var c;Bd();if(b!==null&&Bd$!=b.xe){Bd$=b.xe;c=BdI;b=b.iU;c.useProgram(b);}}
function N3(b,c,d,e,f,g){Bd();BdI.vertexAttribPointer(b,c,d,!!e,f,g);}
function O5(){var b;Bd();b=new St;b.AU=BdI.createVertexArray();b.vI=0;return b;}
function RL(b){var c;Bd();c=BdI;b=b!==null?b.AU:null;c.bindVertexArray(b);}
function AES(b){var c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bd();c=new ArrayBuffer(b.data.length);(new Uint8Array(c)).set(b.data);$p=1;case 1:$z=AIt(c);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(b,c,$p);}
function AIt(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gk=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IS=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaG(callback);return thread.suspend(function(){try{AWO(b,callback);}catch($e){callback.IS($rt_exception($e));}});}
function AWO(b,c){var d,e,f;Bd();d=BdD.createElement("img");e=new Qw;e.f1=d;e.x3=c;d.addEventListener("load",Cu(e,"handleEvent"));f=new Qv;f.Ef=d;f.EX=c;d.addEventListener("error",Cu(f,"handleEvent"));e=$rt_str(ANE(b,"image/png"));if(e===null)CM(c,null);else{b=$rt_ustr(e);d.src=b;}}
function Lq(){var b,c,d;Bd();b=BdE.clientWidth;if(b!=Bd0){c=BdF;d=b;c.width=d;c=BdH;d=b;c.width=d;Bd0=b;}return b;}
function Mz(){var b,c,d;Bd();b=BdE.clientHeight;if(b!=Bd1){c=BdF;d=b;c.height=d;c=BdH;d=b;c.height=d;Bd1=b;}return b;}
function Kt(){Bd();return Long_fromInt(1073741824);}
function JV(){Bd();return Long_fromInt(1073741824);}
function Ka(){Bd();return Long_ZERO;}
function UA(b){Bd();return b.byteLength;}
function TW(b){Bd();return b<=Bez.data.length&&b>=0?Bez.data[b]:(-1);}
function ACx(b,c){var d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bd();d=LF(b,47);if(d>0){e=Eu(b,0,d);$p=2;continue _;}f=new Uint8Array(c.data.length);f.set(c.data);e=BeF;d=0;f=f.buffer;$p=1;case 1:AXO(e,b,d,f);if(C()){break _;}return;case 2:AI$(e);if(C()){break _;}f=new Uint8Array(c.data.length);f.set(c.data);e=BeF;d=0;f=f.buffer;$p=1;continue _;default:E$();}}C3().s(b,c,d,e,f,$p);}
function ALD(b){var c,d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bd();c=BeF;$p=1;case 1:$z=A_K(c,b);if(C()){break _;}b=$z;if(b===null)d=null;else{d=$rt_createByteArray(b.byteLength);e=d.data;b=new Uint8Array(b);f=0;g=e.length;while(f<g){e[f]=b[f]<<24>>24;f=f+1|0;}}return d;default:E$();}}C3().s(b,c,d,e,f,g,$p);}
function ANk(b,c){var d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bd();d=BeF;$p=1;case 1:$z=A_K(d,b);if(C()){break _;}d=$z;e=LF(c,47);if(e<=0){f=BeF;e=0;$p=2;continue _;}f=Eu(c,0,e);$p=4;continue _;case 2:AXO(f,c,e,d);if(C()){break _;}c=BeF;$p=3;case 3:A5w(c,b);if(C()){break _;}return;case 4:AI$(f);if(C()){break _;}f=BeF;e=0;$p=2;continue _;default:E$();}}C3().s(b,c,d,e,f,$p);}
function AL0(b){var c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bd();c=BeF;$p=1;case 1:A5w(c,b);if(C()){break _;}return;default:E$();}}C3().s(b,c,$p);}
function V2(){Bd();return BdK;}
function RG(){Bd();return Bed;}
function MK(){Bd();return BdU;}
function Mp(){Bd();if(Long_gt(Long_sub(B$(),Bef),Long_fromInt(3000))&&Beh&&!(document.pointerLockElement!=null?1:0)){BdF.requestPointerLock();if(document.pointerLockElement!=null?1:0)Beh=0;}}
function PW(){Bd();return Bee;}
function Qx(b){Bd();return b.which;}
function SZ(b){Bd();return TW(b);}
function NH(){Bd();return BdV;}
function SN(b){Bd();Bd3=b;return b;}
function Hj(){Bd();return Bd_;}
function JN(){Bd();return Bea;}
function WB(b){Bd();URL.revokeObjectURL($rt_ustr(b));}
function VI(){Bd();return Beg;}
function MS(b){Bd();Beg=b;return b;}
function PS(){Bd();return Bef;}
function ATI(){var b,c;BdC=0;BdD=null;BdE=null;BdF=null;BdG=null;BdH=null;BdI=null;BdJ=null;BdK=null;BdL=null;BdM=null;BdN=null;BdO=null;BdP=null;BdQ=null;BdR=null;BdS=null;BdT=J(B4,0);BdU=QQ();BdV=QQ();BdW=0;BdX=0;BdY=0.0;BdZ=0.0;Bd0=0;Bd1=0;Bd2=0;Bd3=1;Bd4=0;Bd5=$rt_createIntArray(4);Bd6=new Uint8Array(new ArrayBuffer(4194304));Bd7=new Float32Array(4);Bd8=new Float32Array(9);Bd9=new Float32Array(16);Bd$=(-1);Bd_=null;Bea=null;Beb=null;Bec=null;Bed=$rt_createBooleanArray(8);Bee=$rt_createBooleanArray(256);Bef
=Long_ZERO;Beg=0;Beh=0;Bei=0;Bej=F6();Bek=F6();Bel=null;Bem=0;Ben=0;Beo=0;Bep=QQ();Beq=null;Ber=null;Bes=0;Bet=Dd();Beu=null;Bev=0.029999999329447746;Bew=Dd();Bex=0;b=J(B4,256);c=b.data;c[0]=B(28);c[1]=B(29);c[2]=B(30);c[3]=B(31);c[4]=B(32);c[5]=B(33);c[6]=B(34);c[7]=B(35);c[8]=B(36);c[9]=B(37);c[10]=B(38);c[11]=B(2);c[12]=B(39);c[13]=B(40);c[14]=B(41);c[15]=B(42);c[16]=B(43);c[17]=B(44);c[18]=B(45);c[19]=B(46);c[20]=B(47);c[21]=B(48);c[22]=B(49);c[23]=B(50);c[24]=B(51);c[25]=B(52);c[26]=B(53);c[27]=B(54);c[28]
=B(55);c[29]=B(56);c[30]=B(57);c[31]=B(58);c[32]=B(59);c[33]=B(60);c[34]=B(61);c[35]=B(62);c[36]=B(63);c[37]=B(64);c[38]=B(65);c[39]=B(66);c[40]=B(67);c[41]=B(68);c[42]=B(69);c[43]=B(70);c[44]=B(71);c[45]=B(72);c[46]=B(73);c[47]=B(74);c[48]=B(75);c[49]=B(76);c[50]=B(77);c[51]=B(78);c[52]=B(79);c[53]=B(80);c[54]=B(81);c[55]=B(82);c[56]=B(83);c[57]=B(84);c[58]=B(85);c[59]=B(86);c[60]=B(87);c[61]=B(88);c[62]=B(89);c[63]=B(90);c[64]=B(91);c[65]=B(92);c[66]=B(93);c[67]=B(94);c[68]=B(95);c[69]=B(96);c[70]=B(97);c[71]
=B(98);c[72]=B(99);c[73]=B(100);c[74]=B(101);c[75]=B(102);c[76]=B(103);c[77]=B(104);c[78]=B(105);c[79]=B(106);c[80]=B(107);c[81]=B(108);c[82]=B(109);c[83]=B(110);c[84]=B(10);c[85]=B(10);c[86]=B(10);c[87]=B(111);c[88]=B(112);c[89]=B(10);c[90]=B(10);c[91]=B(10);c[92]=B(10);c[93]=B(10);c[94]=B(10);c[95]=B(10);c[96]=B(10);c[97]=B(10);c[98]=B(10);c[99]=B(10);c[100]=B(113);c[101]=B(114);c[102]=B(115);c[103]=B(116);c[104]=B(117);c[105]=B(118);c[106]=B(10);c[107]=B(10);c[108]=B(10);c[109]=B(10);c[110]=B(10);c[111]=
B(10);c[112]=B(119);c[113]=B(120);c[114]=B(10);c[115]=B(10);c[116]=B(10);c[117]=B(10);c[118]=B(10);c[119]=B(10);c[120]=B(10);c[121]=B(121);c[122]=B(10);c[123]=B(122);c[124]=B(10);c[125]=B(123);c[126]=B(10);c[127]=B(10);c[128]=B(10);c[129]=B(10);c[130]=B(10);c[131]=B(10);c[132]=B(10);c[133]=B(10);c[134]=B(10);c[135]=B(10);c[136]=B(10);c[137]=B(10);c[138]=B(10);c[139]=B(10);c[140]=B(10);c[141]=B(124);c[142]=B(10);c[143]=B(10);c[144]=B(125);c[145]=B(126);c[146]=B(127);c[147]=B(128);c[148]=B(129);c[149]=B(130);c[150]
=B(131);c[151]=B(132);c[152]=B(10);c[153]=B(10);c[154]=B(10);c[155]=B(10);c[156]=B(133);c[157]=B(134);c[158]=B(10);c[159]=B(10);c[160]=B(10);c[161]=B(10);c[162]=B(10);c[163]=B(10);c[164]=B(10);c[165]=B(10);c[166]=B(10);c[167]=B(135);c[168]=B(10);c[169]=B(10);c[170]=B(10);c[171]=B(10);c[172]=B(10);c[173]=B(10);c[174]=B(10);c[175]=B(10);c[176]=B(10);c[177]=B(10);c[178]=B(10);c[179]=B(136);c[180]=B(10);c[181]=B(137);c[182]=B(10);c[183]=B(138);c[184]=B(139);c[185]=B(10);c[186]=B(10);c[187]=B(10);c[188]=B(10);c[189]
=B(10);c[190]=B(10);c[191]=B(10);c[192]=B(10);c[193]=B(10);c[194]=B(10);c[195]=B(10);c[196]=B(140);c[197]=B(141);c[198]=B(10);c[199]=B(142);c[200]=B(143);c[201]=B(144);c[202]=B(10);c[203]=B(145);c[204]=B(10);c[205]=B(146);c[206]=B(10);c[207]=B(147);c[208]=B(148);c[209]=B(149);c[210]=B(150);c[211]=B(151);c[212]=B(10);c[213]=B(10);c[214]=B(10);c[215]=B(10);c[216]=B(10);c[217]=B(10);c[218]=B(152);c[219]=B(153);c[220]=B(154);c[221]=B(155);c[222]=B(156);c[223]=B(157);c[224]=B(10);c[225]=B(10);c[226]=B(10);c[227]
=B(10);c[228]=B(10);c[229]=B(10);c[230]=B(10);c[231]=B(10);c[232]=B(10);c[233]=B(10);c[234]=B(10);c[235]=B(10);c[236]=B(10);c[237]=B(10);c[238]=B(10);c[239]=B(10);c[240]=B(10);c[241]=B(10);c[242]=B(10);c[243]=B(10);c[244]=B(10);c[245]=B(10);c[246]=B(10);c[247]=B(10);c[248]=B(10);c[249]=B(10);c[250]=B(10);c[251]=B(10);c[252]=B(10);c[253]=B(10);c[254]=B(10);c[255]=B(10);Bey=b;b=$rt_createIntArray(224);c=b.data;c[0]=(-1);c[1]=(-1);c[2]=(-1);c[3]=(-1);c[4]=(-1);c[5]=(-1);c[6]=(-1);c[7]=(-1);c[8]=14;c[9]=15;c[10]
=(-1);c[11]=(-1);c[12]=(-1);c[13]=28;c[14]=(-1);c[15]=(-1);c[16]=42;c[17]=29;c[18]=56;c[19]=(-1);c[20]=(-1);c[21]=(-1);c[22]=(-1);c[23]=(-1);c[24]=(-1);c[25]=(-1);c[26]=(-1);c[27]=1;c[28]=(-1);c[29]=(-1);c[30]=(-1);c[31]=(-1);c[32]=57;c[33]=210;c[34]=201;c[35]=207;c[36]=199;c[37]=203;c[38]=200;c[39]=205;c[40]=208;c[41]=205;c[42]=208;c[43]=(-1);c[44]=(-1);c[45]=210;c[46]=211;c[47]=211;c[48]=11;c[49]=2;c[50]=3;c[51]=4;c[52]=5;c[53]=6;c[54]=7;c[55]=8;c[56]=9;c[57]=10;c[58]=(-1);c[59]=(-1);c[60]=(-1);c[61]=(-1);c[62]
=(-1);c[63]=(-1);c[64]=(-1);c[65]=30;c[66]=48;c[67]=46;c[68]=32;c[69]=18;c[70]=33;c[71]=34;c[72]=35;c[73]=23;c[74]=36;c[75]=37;c[76]=38;c[77]=50;c[78]=49;c[79]=24;c[80]=25;c[81]=16;c[82]=19;c[83]=31;c[84]=20;c[85]=22;c[86]=47;c[87]=17;c[88]=45;c[89]=21;c[90]=44;c[91]=(-1);c[92]=(-1);c[93]=(-1);c[94]=(-1);c[95]=(-1);c[96]=(-1);c[97]=(-1);c[98]=(-1);c[99]=(-1);c[100]=(-1);c[101]=(-1);c[102]=(-1);c[103]=(-1);c[104]=(-1);c[105]=(-1);c[106]=(-1);c[107]=(-1);c[108]=(-1);c[109]=12;c[110]=52;c[111]=53;c[112]=(-1);c[113]
=(-1);c[114]=(-1);c[115]=(-1);c[116]=(-1);c[117]=(-1);c[118]=(-1);c[119]=(-1);c[120]=(-1);c[121]=(-1);c[122]=(-1);c[123]=(-1);c[124]=(-1);c[125]=(-1);c[126]=(-1);c[127]=(-1);c[128]=(-1);c[129]=(-1);c[130]=(-1);c[131]=(-1);c[132]=(-1);c[133]=(-1);c[134]=(-1);c[135]=(-1);c[136]=(-1);c[137]=(-1);c[138]=(-1);c[139]=(-1);c[140]=(-1);c[141]=(-1);c[142]=(-1);c[143]=(-1);c[144]=(-1);c[145]=(-1);c[146]=(-1);c[147]=(-1);c[148]=(-1);c[149]=(-1);c[150]=(-1);c[151]=(-1);c[152]=(-1);c[153]=(-1);c[154]=(-1);c[155]=(-1);c[156]
=(-1);c[157]=(-1);c[158]=(-1);c[159]=(-1);c[160]=(-1);c[161]=(-1);c[162]=(-1);c[163]=(-1);c[164]=(-1);c[165]=(-1);c[166]=(-1);c[167]=(-1);c[168]=(-1);c[169]=(-1);c[170]=(-1);c[171]=(-1);c[172]=(-1);c[173]=(-1);c[174]=(-1);c[175]=(-1);c[176]=(-1);c[177]=(-1);c[178]=(-1);c[179]=(-1);c[180]=(-1);c[181]=(-1);c[182]=(-1);c[183]=(-1);c[184]=(-1);c[185]=(-1);c[186]=39;c[187]=13;c[188]=51;c[189]=12;c[190]=52;c[191]=53;c[192]=(-1);c[193]=(-1);c[194]=(-1);c[195]=(-1);c[196]=(-1);c[197]=(-1);c[198]=(-1);c[199]=(-1);c[200]
=(-1);c[201]=(-1);c[202]=(-1);c[203]=(-1);c[204]=(-1);c[205]=(-1);c[206]=(-1);c[207]=(-1);c[208]=(-1);c[209]=(-1);c[210]=(-1);c[211]=(-1);c[212]=(-1);c[213]=(-1);c[214]=(-1);c[215]=(-1);c[216]=(-1);c[217]=(-1);c[218]=(-1);c[219]=(-1);c[220]=26;c[221]=43;c[222]=27;c[223]=40;Bez=b;BeA=0;BeB=new Int32Array(new ArrayBuffer(2100000));BeC=0;}
function X4(b){window.currentContext=b;}
function ANT(){if (!ANT.$native){
ANT.$native=function(){return (function(){window.eagsFileChooser = {
inputElement: null,
openFileChooser: function(ext, mime){
var el = window.eagsFileChooser.inputElement = document.createElement("input");
el.type = "file";
el.multiple = false;
el.addEventListener("change", function(evt){
var f = window.eagsFileChooser.inputElement.files;
if(f.length == 0){
window.eagsFileChooser.getFileChooserResult = null;
}else{
(async function(){
window.eagsFileChooser.getFileChooserResult = await f[0].arrayBuffer();
window.eagsFileChooser.getFileChooserResultName = f[0].name;
})();
}
});
window.eagsFileChooser.getFileChooserResult = null;
window.eagsFileChooser.getFileChooserResultName = null;
el.accept = mime;
el.click();
},
getFileChooserResult: null,
getFileChooserResultName: null
};})();};ANT=ANT.$native;}return ANT();}
function AEL(){return {antialias:false,depth:true,powerPreference:"high-performance",desynchronized:false,preserveDrawingBuffer:false,premultipliedAlpha:false,alpha:false};}
function ANE(b,c){return URL.createObjectURL(new Blob([b],{type:c}));}
function ANy(b){if(b.commit)b.commit();}
function SO(){}
function Jx(){}
function NR(){}
function Hy(){D.call(this);this.v6=null;}
function BeG(a){var b=new Hy();Wa(b,a);return b;}
function Wa(a,b){if(b!==null){a.v6=b;return;}b=new ED;O(b);M(b);}
function ABe(){Hy.call(this);this.xR=null;}
function A8_(){var a=new ABe();A2Z(a);return a;}
function A2Z(a){var b;a.v6=a;b=new Lf;Gy(b,16);a.xR=b;a.v6=a.xR;}
function AK4(a){return;}
function AEw(a,b,c,d){var e,f;if(c>=0){e=b.data.length;if(c<=e&&d>=0&&d<=(e-c|0)){if(!d)return;IT(a.xR,b,c,d);return;}}f=new BO;O(f);M(f);}
function Lt(){var a=this;Hy.call(a);a.mu=null;a.FK=0;a.x9=0;}
function AFw(a){var $$je;a:{if(a.mu===null)Kc(a);else{try{AK4(a.mu);break a;}catch($$e){$$je=Bi($$e);if($$je instanceof B1){}else{throw $$e;}}Kc(a);}}}
function Hl(a,b){if(b===null)b=Ui(null);Yo(a,b);}
function SH(a){Hl(a,B(158));if(a.x9)AFw(a);}
function AAA(a,b){ABM(a,Ui(b));}
function ABM(a,b){Hl(a,b);SH(a);}
function Kc(a){a.FK=1;}
function ARX(a,b){AAj(a,b,0,b.data.length);}
function AAj(a,b,c,d){var $$je;a:{if(a.mu===null)Kc(a);else{try{AEw(a.mu,b,c,d);break a;}catch($$e){$$je=Bi($$e);if($$je instanceof B1){}else{throw $$e;}}Kc(a);}}}
function Yo(a,b){ARX(a,Nq(b));}
function AFb(){D.call(this);}
function BeH(){var a=new AFb();AV6(a);return a;}
function AV6(a){return;}
function AFQ(){D.call(this);}
function LY(){}
function Il(){var a=this;D.call(a);a.cy=null;a.cm=0;a.bF=0;a.bf=null;a.z=null;a.d5=null;a.f=null;a.c4=null;a.kV=null;a.bs=0;a.bo=null;a.e7=null;a.D=null;a.jf=null;a.eS=null;a.bN=0;a.c8=0;a.Hb=null;a.FU=0;a.nU=null;a.h6=0;a.Gp=null;a.cb=null;a.u=null;a.yb=null;a.C5=null;a.Bz=null;a.hv=0;a.lv=null;a.gN=Long_ZERO;a.bp=0;a.cj=0;a.cS=0;a.dy=Long_ZERO;}
var BeI=null;var BeJ=0;var Bc$=null;function AIo(a){var b,c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.u=A_$(a);b=new KG;c=a.u;BeK=Dd();b.zb=Dd();b.ku=Ra(1);b.g$=WK(1048576);b.lS=WK(1048576);b.B$=Ci();b.sN=0;b.DS=0;b.wA=c;a.bo=b;c=new Wc;d=a.u;b=B(159);e=a.bo;$p=1;case 1:AOF(c,d,b,e);if(C()){break _;}a.e7=c;$p=2;case 2:Yl(a);if(C()){break _;}a.yb=new Qf;Eh(a,B(160));Ba(3553);Bd();BdI.clearDepth((-1.0));Ba(2929);HG(515);Ba(3008);So(516,
0.10000000149011612);BdI.cullFace(1029);C$(5889);C9();C$(5888);Eh(a,B(161));G4(a.bo,a.Bz);G4(a.bo,a.C5);G4(a.bo,Bau());G4(a.bo,BcC());G4(a.bo,AVE(0));G4(a.bo,AVE(1));a.d5=BaT(a,a.bo);Hf(0,0,a.cm,a.bF);e=Bc$;b=LL();c=B(162);d=B(163);$p=3;case 3:ARW(e,b,c,d);if(C()){break _;}b=new OU;c=a.z;d=a.bo;b.cA=J(J1,3);b.sn=new Dz;if(c!==null)b.mO=c;b.i_=d;f=0;while(f<3){b.cA.data[f]=Ci();f=f+1|0;}a.c4=b;Eh(a,B(164));b=new Nn;M_(b);b.g3=Ci();b.vl=new Dz;b.FP=null;b.rP=0;b.IC=1.0;b.b0=a;a.nU=b;return;default:E$();}}C3().s(a,
b,c,d,e,f,$p);}
function Yl(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=FG(a.cm,a.bF);c=b.fK;d=b.fG;D3(16640);C$(5889);C9();Im(0.0,c,d,0.0,1000.0,3000.0);C$(5888);C9();Bw(0.0,0.0,(-2000.0));Hf(0,0,a.cm,a.bF);Hx(0.0,0.0,0.0,0.0);Bc(2896);Bc(2912);Ba(3553);BA();e=BeL;f=3553;b=a.bo;g=B(165);$p=1;case 1:$z=AHt(b,g);if(C()){break _;}d=$z;Cp(f,d);BU(1.0,1.0,1.0,1.0);Bz(e);ER(e,4210752);G(e,0.0,a.bF,0.0,0.0,a.bF/32.0
+0.0);G(e,a.cm,a.bF,0.0,a.cm/32.0,a.bF/32.0+0.0);G(e,a.cm,0.0,0.0,a.cm/32.0,0.0);G(e,0.0,0.0,0.0,0.0,0.0);Br(e);Ba(3008);So(516,0.10000000149011612);Cy(a.e7,B(166),8,(a.bF/2|0)-16|0,(-1));return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ADT(a,b){var c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.D instanceof Rs)return;if(a.D!==null){c=a.D;$p=1;continue _;}if(b===null&&a.z===null)b=LL();else if(b===null&&a.f.bS<=0){b=new Mk;D0(b);}a.D=b;if(b===null){$p=2;continue _;}WY(a);c=FG(a.cm,a.bF);d=c.fK;e=c.fG;$p=3;continue _;case 1:c.pq();if(C()){break _;}if(b===null&&a.z===null)b=LL();else if(b===null&&a.f.bS<=0){b=new Mk;D0(b);}a.D=b;if(b===null){$p=2;continue _;}WY(a);c
=FG(a.cm,a.bF);d=c.fK;e=c.fG;$p=3;continue _;case 2:AFi(a);if(C()){break _;}return;case 3:AP7(b,a,d,e);if(C()){break _;}a.h6=0;return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function ARW(a,b,c,d){var e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=new UB;D0(e);e.qq=Ci();e.En=b;e.Aq=c;e.Ap=d;$p=1;case 1:ADT(a,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function Eh(a,b){var c,d,e,f;BV();Bd();c=BdI.getError();if(c==(-144))c=(-144);if(c){a:{switch(c){case -144:break;case 1280:d=B(167);break a;case 1281:d=B(168);break a;case 1282:d=B(169);break a;case 1285:d=B(170);break a;default:d=B(171);break a;}d=B(172);}Cg(DR(),B(173));e=DR();f=new U;X(f);Cg(e,V(I(I(f,B(174)),b)));b=DR();e=new U;X(e);Cg(b,V(I(I(Be(e,c),B(12)),d)));}}
function Yf(a){var b,c,d,e,f,g,h,i,j,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hv=1;$p=1;case 1:AIo(a);if(C()){break _;}b=B$();c=0;if(!a.hv)return;BeM=0;BeN=0;if(!a.bs)FM(a.bf);else{d=a.bf.cW;FM(a.bf);a.bf.cW=d;}e=0;if(e<a.bf.i1){a.bN=a.bN+1|0;$p=2;continue _;}Eh(a,B(175));if(a.bs)a.bf.cW=1.0;Ba(3553);if(a.z!==null){f=a.z;$p=3;continue _;}if(!a.h6){GP(a.cy,a.bf.cW);f=a.eS;d=a.bf.cW;$p
=4;continue _;}if(BN(33)&&BN(7))FU(a);else a.gN=EF();$p=5;continue _;case 2:AFA(a);if(C()){break _;}e=e+1|0;if(e<a.bf.i1){a.bN=a.bN+1|0;continue _;}Eh(a,B(175));if(a.bs)a.bf.cW=1.0;Ba(3553);if(a.z!==null){f=a.z;$p=3;continue _;}if(!a.h6){GP(a.cy,a.bf.cW);f=a.eS;d=a.bf.cW;$p=4;continue _;}if(BN(33)&&BN(7))FU(a);else a.gN=EF();$p=5;continue _;case 3:$z=AIl(f);if(C()){break _;}g=$z;if(g){f=a.z;continue _;}if(!a.h6){GP(a.cy,a.bf.cW);f=a.eS;d=a.bf.cW;$p=4;continue _;}if(BN(33)&&BN(7))FU(a);else a.gN=EF();$p=5;continue _;case 4:AFM(f,
d);if(C()){break _;}if(BN(33)&&BN(7))FU(a);else a.gN=EF();$p=5;case 5:Xy();if(C()){break _;}$p=6;case 6:AUT();if(C()){break _;}if(!(Lq()==a.cm&&Mz()==a.bF)){a.cm=BdF.width;a.bF=BdF.height;if(a.cm<=0)a.cm=1;if(a.bF<=0)a.bF=1;g=a.cm;h=a.bF;if(g<=0)g=1;if(h<=0)h=1;a.cm=g;a.bF=h;if(a.D!==null){f=FG(g,h);h=f.fK;g=f.fG;f=a.D;$p=8;continue _;}}if(a.u.ml){try{i=Long_fromInt(5);$p=7;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof E1){f=$$je;}else{throw $$e;}}f.ty();}Eh(a,B(176));c=c+1|0;a.bs=a.D!==null&&a.D.n8()
?1:0;while(true){j=B$();i=Long_add(b,Long_fromInt(1000));if(Long_lt(j,i))break;f=new U;X(f);f=I(Be(f,c),B(177));Tj();a.lv=V(I(Be(f,BeO),B(178)));BeO=0;c=0;b=i;}if(!a.hv)return;BeM=0;BeN=0;if(!a.bs)FM(a.bf);else{d=a.bf.cW;FM(a.bf);a.bf.cW=d;}e=0;if(e<a.bf.i1){a.bN=a.bN+1|0;$p=2;continue _;}Eh(a,B(175));if(a.bs)a.bf.cW=1.0;Ba(3553);if(a.z!==null){f=a.z;$p=3;continue _;}if(!a.h6){GP(a.cy,a.bf.cW);f=a.eS;d=a.bf.cW;$p=4;continue _;}if(BN(33)&&BN(7))FU(a);else a.gN=EF();$p=5;continue _;case 7:a:{try{AKC(i);if(C())
{break _;}break a;}catch($$e){$$je=Bi($$e);if($$je instanceof E1){f=$$je;}else{throw $$e;}}f.ty();}Eh(a,B(176));c=c+1|0;a.bs=a.D!==null&&a.D.n8()?1:0;while(true){j=B$();i=Long_add(b,Long_fromInt(1000));if(Long_lt(j,i))break;f=new U;X(f);f=I(Be(f,c),B(177));Tj();a.lv=V(I(Be(f,BeO),B(178)));BeO=0;c=0;b=i;}if(!a.hv)return;BeM=0;BeN=0;if(!a.bs)FM(a.bf);else{d=a.bf.cW;FM(a.bf);a.bf.cW=d;}e=0;if(e<a.bf.i1){a.bN=a.bN+1|0;$p=2;continue _;}Eh(a,B(175));if(a.bs)a.bf.cW=1.0;Ba(3553);if(a.z!==null){f=a.z;$p=3;continue _;}if
(!a.h6){GP(a.cy,a.bf.cW);f=a.eS;d=a.bf.cW;$p=4;continue _;}if(BN(33)&&BN(7))FU(a);else a.gN=EF();$p=5;continue _;case 8:AP7(f,a,h,g);if(C()){break _;}if(a.u.ml){try{i=Long_fromInt(5);$p=7;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof E1){f=$$je;}else{throw $$e;}}f.ty();}Eh(a,B(176));c=c+1|0;a.bs=a.D!==null&&a.D.n8()?1:0;while(true){j=B$();i=Long_add(b,Long_fromInt(1000));if(Long_lt(j,i))break;f=new U;X(f);f=I(Be(f,c),B(177));Tj();a.lv=V(I(Be(f,BeO),B(178)));BeO=0;c=0;b=i;}if(!a.hv)return;BeM=0;BeN=
0;if(!a.bs)FM(a.bf);else{d=a.bf.cW;FM(a.bf);a.bf.cW=d;}e=0;if(e<a.bf.i1){a.bN=a.bN+1|0;$p=2;continue _;}Eh(a,B(175));if(a.bs)a.bf.cW=1.0;Ba(3553);if(a.z!==null){f=a.z;$p=3;continue _;}if(!a.h6){GP(a.cy,a.bf.cW);f=a.eS;d=a.bf.cW;$p=4;continue _;}if(BN(33)&&BN(7))FU(a);else a.gN=EF();$p=5;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function FU(a){var b,c,d,e,f,g,h,i,j,k,l;if(Long_eq(a.gN,Long_fromInt(-1)))a.gN=EF();b=EF();c=BeI.data;d=BeJ;BeJ=d+1|0;c[d&(BeI.data.length-1|0)]=Long_sub(b,a.gN);a.gN=b;D3(256);C$(5889);C9();Im(0.0,a.cm,a.bF,0.0,1000.0,3000.0);C$(5888);C9();Bw(0.0,0.0,(-2000.0));Bc(3553);BA();e=BeL;Gg(e,7);ER(e,538968064);Bf(e,0.0,a.bF-100|0,0.0);Bf(e,0.0,a.bF,0.0);Bf(e,BeI.data.length,a.bF,0.0);Bf(e,BeI.data.length,a.bF-100|0,0.0);Br(e);f=Long_ZERO;d=0;while(d<BeI.data.length){f=Long_add(f,BeI.data[d]);d=d+1|0;}d=Long_div(Long_div(f,
Long_fromInt(200000)),Long_fromInt(BeI.data.length)).lo;Gg(e,7);ER(e,541065216);Bf(e,0.0,a.bF-d|0,0.0);Bf(e,0.0,a.bF,0.0);Bf(e,BeI.data.length,a.bF,0.0);Bf(e,BeI.data.length,a.bF-d|0,0.0);Br(e);Gg(e,1);g=0;while(g<BeI.data.length){h=(((g-BeJ|0)&(BeI.data.length-1|0))*255|0)/BeI.data.length|0;i=Bj(h,h)/255|0;d=Bj(i,i)/255|0;j=Bj(d,d)/255|0;ER(e,(((-16777216)+(Bj(j,j)/255|0)|0)+(d*256|0)|0)+(h*4096|0)|0);k=Long_div(BeI.data[g],Long_fromInt(200000));l=g+0.5;Bf(e,l,Long_toNumber(Long_sub(Long_fromInt(a.bF),k))+
0.5,0.0);Bf(e,l,a.bF+0.5,0.0);g=g+1|0;}Br(e);Ba(3553);}
function AFi(a){var b,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(Oc()&&!a.bp){a.bp=1;Yw(a.yb);b=null;$p=1;continue _;}return;case 1:ADT(a,b);if(C()){break _;}a.cj=a.bN+10000|0;return;default:E$();}}C3().s(a,b,$p);}
function WY(a){if(a.bp){if(a.f!==null)ARG(a.f);a.bp=0;AFy(a.yb);}}
function AK9(a){var b,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.D!==null)return;b=Bcq();$p=1;case 1:ADT(a,b);if(C()){break _;}return;default:E$();}}C3().s(a,b,$p);}
function AAD(a,b,c){var d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.cy.DP&&!(!b&&a.c8>0)){if(c&&a.cb!==null&&!a.cb.k3&&!b){d=a.cb.h8;e=a.cb.h9;f=a.cb.h$;g=a.cy;b=a.cb.hG;$p=1;continue _;}ALN(a.cy);}return;case 1:YJ(g,d,e,f,b);if(C()){break _;}g=a.c4;b=a.cb.hG;$p=2;case 2:YY(g,d,e,f,b);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ABY(a,b){var c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(!b&&a.c8>0)){if(!b)Pf(a.eS.iE);a:{if(a.cb!==null){if(a.cb.k3!=1){if(a.cb.k3)break a;c=a.cb.h8;d=a.cb.h9;e=a.cb.h$;f=a.cb.hG;L();g=BeP.data;h=a.z;$p=1;continue _;}if(!b){h=a.f;i=a.cb.nw;$p=2;continue _;}if(b==1)Vj(a.f,a.cb.nw);}else if(!b&&!(a.cy instanceof Du))a.c8=10;}if
(b==1){h=D8(a.f.J);if(h!==null){d=h.p;i=a.z;j=a.f;$p=5;continue _;}}}return;case 1:$z=ACt(h,c,d,e);if(C()){break _;}k=$z;j=g[k];if(!b){h=a.z;k=a.cb.hG;$p=4;continue _;}l=D8(a.f.J);h=a.z;$p=3;continue _;case 2:ADt(h,i);if(C()){break _;}if(b==1)Vj(a.f,a.cb.nw);if(b==1){h=D8(a.f.J);if(h!==null){d=h.p;i=a.z;j=a.f;$p=5;continue _;}}return;case 3:$z=ACt(h,c,d,e);if(C()){break _;}k=$z;if(k>0){h=BeP.data[k];i=a.z;j=a.f;$p=6;continue _;}if(l===null)return;m=l.p;h=a.f;i=a.z;$p=8;continue _;case 4:ABG(h,c,d,e,k);if(C())
{break _;}if(j===BeQ&&a.f.AC<100){if(b==1){h=D8(a.f.J);if(h!==null){d=h.p;i=a.z;j=a.f;$p=5;continue _;}}return;}h=a.cy;$p=7;continue _;case 5:b:{$z=ABc(h,i,j);if(C()){break _;}i=$z;if(i===h){if(i===null)break b;if(i.p==d)break b;}a.f.J.bg.data[a.f.J.bL]=i;AM6(a.eS.iE);if(!i.p)a.f.J.bg.data[a.f.J.bL]=null;}return;case 6:$z=h.lz(i,c,d,e,j);if(C()){break _;}k=$z;if(k)return;if(l===null)return;m=l.p;h=a.f;i=a.z;$p=8;continue _;case 7:AE3(h,c,d,e);if(C()){break _;}if(b==1){h=D8(a.f.J);if(h!==null){d=h.p;i=a.z;j=
a.f;$p=5;continue _;}}return;case 8:$z=AJe(l,h,i,c,d,e,f);if(C()){break _;}c=$z;if(c)Pf(a.eS.iE);if(!l.p)a.f.J.bg.data[a.f.J.bL]=null;else if(l.p!=m)AGK(a.eS.iE);if(b==1){h=D8(a.f.J);if(h!==null){d=h.p;i=a.z;j=a.f;$p=5;continue _;}}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AHL(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.cb===null)return;b=a.z;c=a.cb.h8;d=a.cb.h9;e=a.cb.h$;$p=1;case 1:$z=ACt(b,c,d,e);if(C()){break _;}c=$z;L();if(c==BeR.b)c=BeS.b;if(c==BeT.b)c=BeU.b;if(c==BeQ.b)c=BeV.b;ARh(a.f.J,c,a.cy instanceof Du);return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AFA(a){var b,c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AKw(a.nU);if(!a.bs&&a.z!==null){b=a.cy;$p=2;continue _;}c=3553;d=a.bo;b=B(179);$p=1;case 1:$z=AHt(d,b);if(C()){break _;}e=$z;Cp(c,e);if(a.D===null&&a.f!==null&&a.f.bS<=0){b=null;$p=3;continue _;}if(a.D!==null&&!a.D.pN){if(a.D!==null)a.cj=a.bN+10000|0;if(a.D!==null){b=a.D;$p=4;continue _;}if(a.z!==null){a.z.iX=a.u.jR;if(!a.bs){b=a.eS;$p=7;continue _;}if
(!a.bs)HR(a.d5);if(!a.bs){b=a.z;$p=13;continue _;}if(!a.bs&&!GD(a)){b=a.z;$p=19;continue _;}if(!a.bs){b=a.z;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;}if(!a.bs){b=a.c4;$p=21;continue _;}}a.dy=B$();return;}a:while(true){if(!Fw()){if(a.c8>0)a.c8=a.c8-1|0;while(true){if(!DS()){if(a.D===null){if(B9(0)&&(a.bN-a.cj|0)>=a.bf.c6/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bN-a.cj|0)>=a.bf.c6/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=10;continue _;}Es(a.f,Bg(),CU());if(!CU())continue;if
(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cy instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6)){a.u.cz=a.u.cz?0:1;a.cS=a.cS?0:1;}if(Bg()==a.u.fr.bI){b=E6(a.f.J);$p=17;continue _;}if(Bg()==a.u.gi.bI){b=a.f;d=El(a.f.J,a.f.J.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.J.bL=e;e=e+1|0;}if(Bg()!=a.u.f9.bI)continue;D_(a.u,4,!BN(42)&&!BN(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B$(),a.dy),Long_fromInt(200)))continue;c=G0();if(c)F1(a.f.J,c);b:{if(a.D!==null){if(a.D===null)break b;else
{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx()){$p=8;continue _;}if(!CV()&&Cx()){c=0;$p=11;continue _;}if(CV()==1&&Cx()){c=1;$p=14;continue _;}if(CV()==2&&Cx())break a;}}$p=16;continue _;case 2:AI0(b);if(C()){break _;}c=3553;d=a.bo;b=B(179);$p=1;continue _;case 3:ADT(a,b);if(C()){break _;}if(a.D!==null&&!a.D.pN){if(a.D!==null)a.cj=a.bN+10000|0;if(a.D!==null){b=a.D;$p=4;continue _;}if(a.z!==null){a.z.iX=a.u.jR;if(!a.bs){b=a.eS;$p=7;continue _;}if(!a.bs)HR(a.d5);if(!a.bs){b=a.z;$p=13;continue _;}if(!a.bs&&!GD(a)){b=
a.z;$p=19;continue _;}if(!a.bs){b=a.z;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;}if(!a.bs){b=a.c4;$p=21;continue _;}}a.dy=B$();return;}c:while(true){if(!Fw()){if(a.c8>0)a.c8=a.c8-1|0;while(true){if(!DS()){if(a.D===null){if(B9(0)&&(a.bN-a.cj|0)>=a.bf.c6/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bN-a.cj|0)>=a.bf.c6/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=10;continue _;}Es(a.f,Bg(),CU());if(!CU())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cy instanceof Du)
{Bg();Bg();}if(Bg()==33&&BN(6)){a.u.cz=a.u.cz?0:1;a.cS=a.cS?0:1;}if(Bg()==a.u.fr.bI){b=E6(a.f.J);$p=17;continue _;}if(Bg()==a.u.gi.bI){b=a.f;d=El(a.f.J,a.f.J.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.J.bL=e;e=e+1|0;}if(Bg()!=a.u.f9.bI)continue;D_(a.u,4,!BN(42)&&!BN(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B$(),a.dy),Long_fromInt(200)))continue;c=G0();if(c)F1(a.f.J,c);d:{if(a.D!==null){if(a.D===null)break d;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx()){$p=8;continue _;}if(!CV()&&
Cx()){c=0;$p=11;continue _;}if(CV()==1&&Cx()){c=1;$p=14;continue _;}if(CV()==2&&Cx())break c;}}$p=16;continue _;case 4:AG6(b);if(C()){break _;}if(a.D!==null)a.D.rv();if(a.z!==null){a.z.iX=a.u.jR;if(!a.bs){b=a.eS;$p=7;continue _;}if(!a.bs)HR(a.d5);if(!a.bs){b=a.z;$p=13;continue _;}if(!a.bs&&!GD(a)){b=a.z;$p=19;continue _;}if(!a.bs){b=a.z;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;}if(!a.bs){b=a.c4;$p=21;continue _;}}a.dy=B$();return;case 5:Zw(b);if(C()){break _;}while(true){while(true){if(!Fw()){if(a.c8
>0)a.c8=a.c8-1|0;while(true){if(!DS()){if(a.D===null){if(B9(0)&&(a.bN-a.cj|0)>=a.bf.c6/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bN-a.cj|0)>=a.bf.c6/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=10;continue _;}Es(a.f,Bg(),CU());if(!CU())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cy instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6)){a.u.cz=a.u.cz?0:1;a.cS=a.cS?0:1;}if(Bg()==a.u.fr.bI){b=E6(a.f.J);$p=17;continue _;}if(Bg()==a.u.gi.bI){b=a.f;d=El(a.f.J,a.f.J.bL,
1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.J.bL=e;e=e+1|0;}if(Bg()!=a.u.f9.bI)continue;D_(a.u,4,!BN(42)&&!BN(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B$(),a.dy),Long_fromInt(200)))continue;else break;}c=G0();if(c)F1(a.f.J,c);if(a.D!==null){if(a.D===null)continue;else{b=a.D;continue _;}}if(!a.bp&&Cx()){$p=8;continue _;}if(!CV()&&Cx()){c=0;$p=11;continue _;}if(CV()==1&&Cx()){c=1;$p=14;continue _;}if(CV()!=2)continue;if(!Cx())continue;else break;}$p=16;continue _;case 6:ASx(b);if(C())
{break _;}while(true){e=0;while(e<9){if(Bg()==(2+e|0))a.f.J.bL=e;e=e+1|0;}if(Bg()==a.u.f9.bI)D_(a.u,4,!BN(42)&&!BN(54)?1:(-1));while(true){if(!DS()){if(a.D===null){if(B9(0)&&(a.bN-a.cj|0)>=a.bf.c6/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bN-a.cj|0)>=a.bf.c6/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=10;continue _;}Es(a.f,Bg(),CU());if(!CU())continue;else break;}if(a.D!==null){b=a.D;continue _;}if(Bg()==1)break;if(a.cy instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6)){a.u.cz=a.u.cz
?0:1;a.cS=a.cS?0:1;}if(Bg()==a.u.fr.bI){b=E6(a.f.J);$p=17;continue _;}if(Bg()!=a.u.gi.bI)continue;else{b=a.f;d=El(a.f.J,a.f.J.bL,1);c=0;$p=20;continue _;}}$p=9;continue _;case 7:AIM(b);if(C()){break _;}if(!a.bs)HR(a.d5);if(!a.bs){b=a.z;$p=13;continue _;}if(!a.bs&&!GD(a)){b=a.z;$p=19;continue _;}if(a.bs){if(a.bs){a.dy=B$();return;}b=a.c4;$p=21;continue _;}b=a.z;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;case 8:AFi(a);if(C()){break _;}while(true){while(true){if(!Fw()){if(a.c8>0)a.c8=a.c8-1|0;while(true)
{if(!DS()){if(a.D===null){if(B9(0)&&(a.bN-a.cj|0)>=a.bf.c6/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bN-a.cj|0)>=a.bf.c6/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=10;continue _;}Es(a.f,Bg(),CU());if(!CU())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cy instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6)){a.u.cz=a.u.cz?0:1;a.cS=a.cS?0:1;}if(Bg()==a.u.fr.bI){b=E6(a.f.J);$p=17;continue _;}if(Bg()==a.u.gi.bI){b=a.f;d=El(a.f.J,a.f.J.bL,1);c=0;$p=20;continue _;}e=
0;while(e<9){if(Bg()==(2+e|0))a.f.J.bL=e;e=e+1|0;}if(Bg()!=a.u.f9.bI)continue;D_(a.u,4,!BN(42)&&!BN(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B$(),a.dy),Long_fromInt(200)))continue;else break;}c=G0();if(c)F1(a.f.J,c);if(a.D!==null){if(a.D===null)continue;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx()){continue _;}if(!CV()&&Cx()){c=0;$p=11;continue _;}if(CV()==1&&Cx()){c=1;$p=14;continue _;}if(CV()!=2)continue;if(!Cx())continue;else break;}$p=16;continue _;case 9:AK9(a);if(C()){break _;}while(true){if(a.cy instanceof Du)
{Bg();Bg();}if(Bg()==33&&BN(6)){a.u.cz=a.u.cz?0:1;a.cS=a.cS?0:1;}if(Bg()==a.u.fr.bI){b=E6(a.f.J);$p=17;continue _;}if(Bg()==a.u.gi.bI){b=a.f;d=El(a.f.J,a.f.J.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.J.bL=e;e=e+1|0;}if(Bg()==a.u.f9.bI)D_(a.u,4,!BN(42)&&!BN(54)?1:(-1));while(true){if(!DS()){if(a.D===null){if(B9(0)&&(a.bN-a.cj|0)>=a.bf.c6/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bN-a.cj|0)>=a.bf.c6/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=10;continue _;}Es(a.f,
Bg(),CU());if(!CU())continue;else break;}if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()!=1)continue;else break;}continue _;case 10:AAD(a,c,e);if(C()){break _;}if(a.D!==null)a.cj=a.bN+10000|0;if(a.D!==null){b=a.D;$p=4;continue _;}if(a.z!==null){a.z.iX=a.u.jR;if(!a.bs){b=a.eS;$p=7;continue _;}if(!a.bs)HR(a.d5);if(!a.bs){b=a.z;$p=13;continue _;}if(!a.bs&&!GD(a)){b=a.z;$p=19;continue _;}if(!a.bs){b=a.z;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;}if(!a.bs){b=a.c4;$p=21;continue _;}}a.dy=B$();return;case 11:ABY(a,
c);if(C()){break _;}a.cj=a.bN;while(true){if(CV()==1&&Cx()){c=1;$p=14;continue _;}if(CV()==2&&Cx()){$p=16;continue _;}while(true){while(true){if(!Fw()){if(a.c8>0)a.c8=a.c8-1|0;while(true){if(!DS()){if(a.D===null){if(B9(0)&&(a.bN-a.cj|0)>=a.bf.c6/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bN-a.cj|0)>=a.bf.c6/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=10;continue _;}Es(a.f,Bg(),CU());if(!CU())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cy instanceof Du){Bg();Bg();}if
(Bg()==33&&BN(6)){a.u.cz=a.u.cz?0:1;a.cS=a.cS?0:1;}if(Bg()==a.u.fr.bI){b=E6(a.f.J);$p=17;continue _;}if(Bg()==a.u.gi.bI){b=a.f;d=El(a.f.J,a.f.J.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.J.bL=e;e=e+1|0;}if(Bg()!=a.u.f9.bI)continue;D_(a.u,4,!BN(42)&&!BN(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B$(),a.dy),Long_fromInt(200)))continue;else break;}c=G0();if(c)F1(a.f.J,c);if(a.D===null)break;if(a.D===null)continue;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx())break;if(CV())continue;if(!Cx())continue;else
{c=0;continue _;}}$p=8;continue _;case 12:ABY(a,c);if(C()){break _;}a.cj=a.bN;if(B9(1)&&(a.bN-a.cj|0)>=a.bf.c6/4.0&&a.bp){c=1;$p=15;continue _;}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=10;continue _;case 13:APc(b);if(C()){break _;}if(!a.bs&&!GD(a)){b=a.z;$p=19;continue _;}if(a.bs){if(a.bs){a.dy=B$();return;}b=a.c4;$p=21;continue _;}b=a.z;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;case 14:ABY(a,c);if(C()){break _;}a.cj=a.bN;while(true){if(CV()==2&&Cx()){$p=16;continue _;}while(true){while(true){if(!Fw()){if
(a.c8>0)a.c8=a.c8-1|0;while(true){if(!DS()){if(a.D===null){if(B9(0)&&(a.bN-a.cj|0)>=a.bf.c6/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bN-a.cj|0)>=a.bf.c6/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=10;continue _;}Es(a.f,Bg(),CU());if(!CU())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cy instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6)){a.u.cz=a.u.cz?0:1;a.cS=a.cS?0:1;}if(Bg()==a.u.fr.bI){b=E6(a.f.J);$p=17;continue _;}if(Bg()==a.u.gi.bI){b=a.f;d=El(a.f.J,a.f.J.bL,
1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.J.bL=e;e=e+1|0;}if(Bg()!=a.u.f9.bI)continue;D_(a.u,4,!BN(42)&&!BN(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B$(),a.dy),Long_fromInt(200)))continue;else break;}c=G0();if(c)F1(a.f.J,c);if(a.D===null)break;if(a.D===null)continue;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx())break;if(!CV()&&Cx()){c=0;$p=11;continue _;}if(CV()!=1)continue;if(!Cx())continue;else{c=1;continue _;}}$p=8;continue _;case 15:ABY(a,c);if(C()){break _;}a.cj=a.bN;c=0;e=a.D
===null&&B9(0)&&a.bp?1:0;$p=10;continue _;case 16:AHL(a);if(C()){break _;}while(true){while(true){if(!Fw()){if(a.c8>0)a.c8=a.c8-1|0;while(true){if(!DS()){if(a.D===null){if(B9(0)&&(a.bN-a.cj|0)>=a.bf.c6/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bN-a.cj|0)>=a.bf.c6/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=10;continue _;}Es(a.f,Bg(),CU());if(!CU())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cy instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6)){a.u.cz=a.u.cz
?0:1;a.cS=a.cS?0:1;}if(Bg()==a.u.fr.bI){b=E6(a.f.J);$p=17;continue _;}if(Bg()==a.u.gi.bI){b=a.f;d=El(a.f.J,a.f.J.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.J.bL=e;e=e+1|0;}if(Bg()!=a.u.f9.bI)continue;D_(a.u,4,!BN(42)&&!BN(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B$(),a.dy),Long_fromInt(200)))continue;else break;}c=G0();if(c)F1(a.f.J,c);if(a.D!==null){if(a.D===null)continue;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx()){$p=8;continue _;}if(!CV()&&Cx()){c=0;$p=11;continue _;}if(CV()
==1&&Cx()){c=1;$p=14;continue _;}if(CV()!=2)continue;if(!Cx())continue;else break;}continue _;case 17:ADT(a,b);if(C()){break _;}while(true){if(Bg()==a.u.gi.bI){b=a.f;d=El(a.f.J,a.f.J.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.J.bL=e;e=e+1|0;}if(Bg()==a.u.f9.bI)D_(a.u,4,!BN(42)&&!BN(54)?1:(-1));while(true){if(!DS()){if(a.D===null){if(B9(0)&&(a.bN-a.cj|0)>=a.bf.c6/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bN-a.cj|0)>=a.bf.c6/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp
?1:0;$p=10;continue _;}Es(a.f,Bg(),CU());if(!CU())continue;else break;}if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cy instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6)){a.u.cz=a.u.cz?0:1;a.cS=a.cS?0:1;}if(Bg()!=a.u.fr.bI)continue;else{b=E6(a.f.J);continue _;}}$p=9;continue _;case 18:AE9(b,c,e,f);if(C()){break _;}if(a.bs){a.dy=B$();return;}b=a.c4;$p=21;continue _;case 19:X1(b);if(C()){break _;}if(a.bs){if(a.bs){a.dy=B$();return;}b=a.c4;$p=21;continue _;}b=a.z;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;case 20:AQt(b,
d,c);if(C()){break _;}while(true){e=0;while(e<9){if(Bg()==(2+e|0))a.f.J.bL=e;e=e+1|0;}if(Bg()==a.u.f9.bI)D_(a.u,4,!BN(42)&&!BN(54)?1:(-1));while(true){if(!DS()){if(a.D===null){if(B9(0)&&(a.bN-a.cj|0)>=a.bf.c6/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bN-a.cj|0)>=a.bf.c6/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=10;continue _;}Es(a.f,Bg(),CU());if(!CU())continue;else break;}if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cy instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6))
{a.u.cz=a.u.cz?0:1;a.cS=a.cS?0:1;}if(Bg()==a.u.fr.bI){b=E6(a.f.J);$p=17;continue _;}if(Bg()!=a.u.gi.bI)continue;else{b=a.f;d=El(a.f.J,a.f.J.bL,1);c=0;continue _;}}$p=9;continue _;case 21:AAU(b);if(C()){break _;}a.dy=B$();return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function GD(a){return 0;}
function AHW(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=null;$p=1;case 1:ABH(a,c);if(C()){break _;}c=new GF;d=Gv(new Dz);$p=2;case 2:QT(c,b,d);if(C()){break _;}if(!c.tz){b=B(180);$p=3;continue _;}b=B(181);$p=4;continue _;case 3:AF3(a,c,b);if(C()){break _;}return;case 4:AF3(a,c,b);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function ABH(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=B(3);$p=1;case 1:AF3(a,b,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,$p);}
function AF3(a,b,c){var d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.z!==null){d=a.z;e=a.jf;$p=1;continue _;}a.z=b;if(b===null){a.dy=Long_ZERO;return;}b.C2=a.e7;a.f=null;b.bi=a.f;$p=2;continue _;case 1:AJf(d,e);if(C()){break _;}a.z=b;if(b===null){a.dy=Long_ZERO;return;}b.C2=a.e7;a.f=null;b.bi=a.f;$p=2;case 2:ANY(a,c);if(C()){break _;}if(a.f===null){a.f=A6I(a,b,a.kV);c=a.f;$p=3;continue _;}a.f.hU=VY(a.u);if(a.d5!==null)QW(a.d5,
b);if(a.c4!==null)OW(a.c4,b);b.bi=a.f;$p=4;continue _;case 3:AK5(c);if(C()){break _;}Q$(a.cy,a.f);a.f.hU=VY(a.u);if(a.d5!==null)QW(a.d5,b);if(a.c4!==null)OW(a.c4,b);b.bi=a.f;$p=4;case 4:AGp(b);if(C()){break _;}if(!b.tz){a.dy=Long_ZERO;return;}c=a.jf;$p=5;case 5:AJf(b,c);if(C()){break _;}a.dy=Long_ZERO;return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function ANY(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AOY(a.jf,b);b=a.jf;c=B(182);$p=1;case 1:AR3(b,c);if(C()){break _;}d=128;e=289;f=(-128);g=f;while(g<=d){h=a.z.fh;i=a.z.fg;if(a.z.bi!==null){h=a.z.bi.d|0;i=a.z.bi.e|0;}j=f;if(j<=d){b=a.jf;k=0+1|0;l=(0*100|0)/e|0;$p=4;continue _;}g=g+16|0;}b=a.jf;c=B(183);$p=2;case 2:AR3(b,
c);if(C()){break _;}l=2000;BeW=1;d=0;if(d>=l){V_(a.z);BeW=0;return;}b=a.z;m=1;$p=3;case 3:ABn(b,m);if(C()){break _;}d=d+1|0;if(d>=l){V_(a.z);BeW=0;return;}b=a.z;m=1;continue _;case 4:XE(b,l);if(C()){break _;}b=a.z;l=h+g|0;m=64;n=i+j|0;$p=5;case 5:ACt(b,l,m,n);if(C()){break _;}b=a.z;$p=6;case 6:$z=AIl(b);if(C()){break _;}l=$z;if(l){b=a.z;continue _;}j=j+16|0;m=k;while(true){if(j<=d){b=a.jf;k=m+1|0;l=(m*100|0)/e|0;$p=4;continue _;}g=g+16|0;if(g>d)break;h=a.z.fh;i=a.z.fg;if(a.z.bi!==null){h=a.z.bi.d|0;i=a.z.bi.e
|0;}j=f;}b=a.jf;c=B(183);$p=2;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Mg(a){return ALi(a.d5);}
function Oh(a){return XZ(a.d5);}
function MH(a){var b;b=new U;X(b);return V(I(I(I(I(b,B(184)),Xu(a.c4)),B(185)),AN7(a.z)));}
function ASu(a){var b,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.f!==null&&a.z!==null){b=a.f;$p=5;continue _;}b=a.z;$p=1;case 1:AP4(b);if(C()){break _;}a.f=A6I(a,a.z,a.kV);b=a.f;$p=2;case 2:AK5(b);if(C()){break _;}Q$(a.cy,a.f);if(a.z!==null){a.z.bi=a.f;b=a.z;$p=4;continue _;}a.f.hU=VY(a.u);b=B(186);$p=3;case 3:ANY(a,b);if(C()){break _;}return;case 4:AGp(b);if(C()){break _;}a.f.hU=VY(a.u);b=B(186);$p=3;continue _;case 5:Ca(b);if(C()){break _;}b=a.z;$p=1;continue _;default:
E$();}}C3().s(a,b,$p);}
function ZW(){BeI=$rt_createLongArray(512);BeJ=0;}
function ZC(){D.call(this);}
function BeX(){var a=new ZC();A25(a);return a;}
function A25(a){return;}
function Oc(){var b,c;Bd();b=document.pointerLockElement!=null?1:0;c=Bei;Bei=b;if(!c&&b){BdY=0.0;BdZ=0.0;}a:{b:{if(Bd3){if(!c)break b;if(b)break b;}c=0;break a;}c=1;}return c;}
function AUT(){var b,c,d,e,f,g,h,i,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bd();ANy(BdI);b=BdG;c=BdH;d=BdF.width;e=BdF.height;b.drawImage(c,0.0,0.0,d,e);f=BdF.clientWidth;g=BdF.clientHeight;if(!(f==Bd0&&g==Bd1)){Bd0=f;Bd1=g;c=BdH;h=f;c.width=h;c=BdH;h=g;c.height=h;}try{i=Long_fromInt(1);$p=1;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof E1){}else{throw $$e;}}return;case 1:a:{try{AKC(i);if
(C()){break _;}break a;}catch($$e){$$je=Bi($$e);if($$je instanceof E1){}else{throw $$e;}}}return;default:E$();}}C3().s(b,c,d,e,f,g,h,i,$p);}
function Mi(){var a=this;D.call(a);a.oh=null;a.FY=null;a.Gu=null;}
var BeY=null;function Bbi(){Bbi=Bt(Mi);A_C();}
function A_C(){var b;BeY=Ci();b=BeY;L();S(b,BeV);S(BeY,BeZ);S(BeY,Be0);S(BeY,BeS);S(BeY,Be1);S(BeY,Be2);S(BeY,Be3);S(BeY,Be4);S(BeY,BeU);S(BeY,Be5);S(BeY,Be6);S(BeY,Be7);S(BeY,Be8);S(BeY,Be9);S(BeY,Be$);S(BeY,Be_);S(BeY,Bfa);S(BeY,Bfb);S(BeY,Bfc);S(BeY,Bfd);S(BeY,Bfe);S(BeY,Bff);S(BeY,Bfg);S(BeY,Bfh);S(BeY,Bfi);S(BeY,Bfj);S(BeY,Bfk);S(BeY,Bfl);ABJ(DR(),BeY.o);}
function Gj(){var a=this;D.call(a);a.JB=Long_ZERO;a.Ea=0;a.DI=Long_ZERO;a.wS=0;a.mK=null;a.CN=null;a.FJ=null;a.wt=0;a.yt=null;}
var Bfm=null;var Bc5=null;var Bfn=Long_ZERO;var Bfo=0;function Bfp(){var a=new Gj();AHB(a);return a;}
function Bcf(a){var b=new Gj();TL(b,a);return b;}
function A_6(a,b){var c=new Gj();NY(c,a,b);return c;}
function AHB(a){NY(a,null,null);}
function TL(a,b){NY(a,null,b);}
function NY(a,b,c){var d;a.mK=new D;a.wt=1;a.FJ=c;a.yt=b;d=Bfn;Bfn=Long_add(d,Long_fromInt(1));a.JB=d;}
function Te(a){var b;b=new Wu;b.zJ=a;AZK(b);}
function Fr(b){if(Bc5!==b)Bc5=b;Bc5.DI=B$();}
function ARl(a){var b,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.yt===null)return;b=a.yt;$p=1;case 1:Yf(b);if(C()){break _;}return;default:E$();}}C3().s(a,b,$p);}
function ASH(){return Bc5;}
function A1j(a,b){a.Ea=b;}
function Xy(){var b,c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:b=Bc5;c=b.wS+1|0;b.wS=c;if(c<30)return;Bc5.wS=0;if(Long_ge(Long_add(b.DI,Long_fromInt(100)),B$()))return;$p=1;case 1:ALL(b);if(C()){break _;}return;default:E$();}}C3().s(b,c,$p);}
function ALL(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gk=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IS=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaG(callback);return thread.suspend(function(){try{A3V(b,callback);}catch($e){callback.IS($rt_exception($e));}});}
function A3V(b,c){var d;d=new SS;d.B4=b;d.B3=c;QU(d);}
function AKC(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gk=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IS=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaG(callback);return thread.suspend(function(){try{AVo(b,callback);}catch($e){callback.IS($rt_exception($e));}});}
function AVo(b,c){var d,e;d=Bc5;e=new Pb;e.wg=d;e.A0=c;e.Jl=AFD(e,Long_ge(b,Long_fromInt(2147483647))?2147483647:b.lo);d.CN=e;}
function Y3(){Bfm=Bcf(B(187));Bc5=Bfm;Bfn=Long_fromInt(1);Bfo=1;}
function DN(){}
function W3(){D.call(this);}
function Bfq(){var a=new W3();A2j(a);return a;}
function A2j(a){return;}
function ASy(a,b){b.preventDefault();b.stopPropagation();}
function ACf(a,b){ASy(a,b);}
function A$W(a,b){ACf(a,b);}
function W9(){D.call(this);}
function Bfr(){var a=new W9();AZe(a);return a;}
function AZe(a){return;}
function ARC(a,b){var c,d;c=b.button;d=RG();if(c==1)c=2;else if(c==2)c=1;d.data[c]=1;Ft(MK(),b);b.preventDefault();b.stopPropagation();Mp();}
function AIT(a,b){ARC(a,b);}
function AXE(a,b){AIT(a,b);}
function W$(){D.call(this);}
function Bfs(){var a=new W$();AXd(a);return a;}
function AXd(a){return;}
function AQp(a,b){var c,d;c=b.button;d=RG();if(c==1)c=2;else if(c==2)c=1;d.data[c]=0;Ft(MK(),b);b.preventDefault();b.stopPropagation();}
function ZN(a,b){AQp(a,b);}
function A3A(a,b){ZN(a,b);}
function W7(){D.call(this);}
function Bft(){var a=new W7();A47(a);return a;}
function A47(a){return;}
function AOC(a,b){var c;Bd();BdW=b.offsetX;BdX=BdF.clientHeight-b.offsetY|0;c=b.movementX;BdY=BdY+c;c= -b.movementY;BdZ=BdZ+c;b.preventDefault();b.stopPropagation();}
function ADj(a,b){AOC(a,b);}
function ASJ(a,b){ADj(a,b);}
function W8(){D.call(this);}
function Bfu(){var a=new W8();A_O(a);return a;}
function A_O(a){return;}
function AEH(a,b){PW().data[SZ(Qx(b))]=1;Ft(NH(),b);b.preventDefault();b.stopPropagation();Mp();}
function AQz(a,b){AEH(a,b);}
function A3L(a,b){AQz(a,b);}
function W5(){D.call(this);}
function Bfv(){var a=new W5();A39(a);return a;}
function A39(a){return;}
function Zy(a,b){PW().data[SZ(Qx(b))]=0;Ft(NH(),b);b.preventDefault();b.stopPropagation();}
function XT(a,b){Zy(a,b);}
function A2h(a,b){XT(a,b);}
function W6(){D.call(this);}
function Bfw(){var a=new W6();AXs(a);return a;}
function AXs(a){return;}
function AR7(a,b){Bd();if(Bd2&&(b.repeat?1:0))Ft(NH(),b);b.preventDefault();b.stopPropagation();}
function AKZ(a,b){AR7(a,b);}
function A6x(a,b){AKZ(a,b);}
function W4(){D.call(this);}
function Bfx(){var a=new W4();A23(a);return a;}
function A23(a){return;}
function AFk(a,b){Ft(MK(),b);b.preventDefault();b.stopPropagation();}
function ACu(a,b){AFk(a,b);}
function AUe(a,b){ACu(a,b);}
function Qt(){D.call(this);}
function Bfy(){var a=new Qt();A1_(a);return a;}
function A1_(a){return;}
function AFm(a,b){SN(0);}
function AMo(a,b){AFm(a,b);}
function A69(a,b){AMo(a,b);}
function Qs(){D.call(this);}
function Bfz(){var a=new Qs();A33(a);return a;}
function A33(a){return;}
function AGN(a,b){SN(1);Mp();}
function AMn(a,b){AGN(a,b);}
function AYH(a,b){AMn(a,b);}
function NN(){D.call(this);}
var BfA=null;var BeF=null;function BfB(){var a=new NN();AD7(a);return a;}
function AD7(a){return;}
function AJM(){var b,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:b=B(188);$p=1;case 1:$z=A3G(b);if(C()){break _;}b=$z;if(b===null){BfA=B(171);return BfC;}if(b.EY)return BfD;if(!b.E_&&b.xL!==null){BeF=b.xL;return BfE;}BfA=b.uu!==null?b.uu:B(189);return BfC;default:E$();}}C3().s(b,$p);}
function AP1(b){var c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:c=BeF;$p=1;case 1:$z=AUq(c,b);if(C()){break _;}b=$z;return b!==BfF?0:1;default:E$();}}C3().s(b,c,$p);}
function AI$(b){var c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AP1(b);if(C()){break _;}c=$z;if(c)return;c=LF(b,47);if(c>0){d=Eu(b,0,c);$p=3;continue _;}d=BeF;c=1;e=new ArrayBuffer(0);$p=2;case 2:AXO(d,b,c,e);if(C()){break _;}return;case 3:AI$(d);if(C()){break _;}d=BeF;c=1;e=new ArrayBuffer(0);$p=2;continue _;default:E$();}}C3().s(b,c,d,e,$p);}
function AHD(){BfA=B(3);BeF=null;}
function AAS(){D.call(this);}
function AYo(){var Context=window.AudioContext||window.webkitAudioContext;return new Context();}
function UP(){D.call(this);}
var BeE=null;function BfG(){var a=new UP();AQs(a);return a;}
function AQs(a){return;}
function AL9(b){var c,d,e,f,g,h,i,j,k,l,m;c=Uf(b);d=OT(c);e=$rt_createByteArray(8);NK(d,e);if(!DJ(B(190),A24(e,X2(B(24))))){c=new B1;Bl(c,B(191));M(c);}GT(d);f=new PV;d=new WL;g=new Ud;OK(g);g.rN=0;h=RZ(g,15,0);if(h){c=new PZ;f=new U;X(f);Bl(c,V(I(I(Be(f,h),B(12)),g.b6)));M(c);}R0(d,c);d.qd=0;d.oG=0;d.Ew=1;d.D_=0;d.wx=$rt_createByteArray(1);d.GT=$rt_createByteArray(512);d.gZ=g;d.og=$rt_createByteArray(512);d.Ew=1;d.D_=1;AIu(f,d);g=BaX();while(true){d=GT(f);if(!DJ(B(192),d)){if(AKz(f)<=0&&DJ(B(193),d))return;c
=new B1;Bl(c,B(191));M(c);}i=GT(f);j=$rt_createByteArray(20);k=$rt_createByteArray(20);NK(f,j);l=H3(f);m=$rt_createByteArray(l);NK(f,m);if(DX(BeE,i))continue;a:{ADR(g,m,0,l);AL7(g,k,0);if(j===k)h=1;else{if(j!==null&&k!==null){b=j.data;e=k.data;h=b.length;if(h==e.length){l=0;while(l<h){if(b[l]!=e[l]){h=0;break a;}l=l+1|0;}h=1;break a;}}h=0;}}if(!h){c=new B1;f=new U;X(f);Bl(c,V(I(I(f,B(194)),i)));M(c);}BR(BeE,i,m);if(!DJ(B(195),GT(f)))break;}c=new B1;Bl(c,B(191));M(c);}
function Za(){BeE=Dd();}
function B1(){BE.call(this);}
function BfH(){var a=new B1();A3S(a);return a;}
function A3S(a){O(a);}
function Lf(){HJ.call(this);}
function BfI(){var a=new Lf();A6j(a);return a;}
function A6j(a){X(a);}
function A0M(a,b){Dx(a,b);return a;}
function A19(a,b,c,d){IT(a,b,c,d);return a;}
function AVB(a,b){Hh(a,b);return a;}
function A7D(a,b,c,d,e){J4(a,b,c,d,e);return a;}
function A$S(a,b,c){KY(a,b,c);return a;}
function AVW(a,b,c,d,e){J4(a,b,c,d,e);return a;}
function A4c(a,b,c,d){IT(a,b,c,d);return a;}
function AId(a,b){var c;if(b>=0&&b<a.bX)return a.O.data[b];c=new BO;O(c);M(c);}
function Os(a){return a.bX;}
function A4j(a){return V(a);}
function A4t(a,b){MU(a,b);}
function A99(a,b,c){KY(a,b,c);return a;}
function Fx(){}
function VX(){D.call(this);}
function BfJ(){var a=new VX();AZi(a);return a;}
function AZi(a){return;}
function Fi(){D.call(this);this.lW=0;}
var BfK=null;var BfL=null;var BfM=null;var BfN=null;var BfO=null;var BfP=null;function A2g(a){var b=new Fi();AAN(b,a);return b;}
function AAN(a,b){a.lW=b;}
function BI(b){var c;if(b>=BfN.data.length)return A2g(b);c=BfN.data[b];if(c===null){c=A2g(b);BfN.data[b]=c;}return c;}
function A$0(a,b){if(a===b)return 1;return b instanceof Fi&&b.lW==a.lW?1:0;}
function A$I(a){return a.lW;}
function Sx(b){var c,d;c=new B4;d=$rt_createCharArray(1);d.data[0]=b;Ti(c,d);return c;}
function Ms(b){return b>=65536&&b<=1114111?1:0;}
function Dt(b){return (b&64512)!=55296?0:1;}
function DP(b){return (b&64512)!=56320?0:1;}
function Om(b){return !Dt(b)&&!DP(b)?0:1;}
function J3(b,c){return Dt(b)&&DP(c)?1:0;}
function EI(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function IB(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function H7(b){return (56320|b&1023)&65535;}
function EU(b){return GN(b)&65535;}
function GN(b){return AP0(b).toLowerCase().charCodeAt(0);}
function FB(b){return GM(b)&65535;}
function GM(b){return AP0(b).toUpperCase().charCodeAt(0);}
function We(b,c){if(c>=2&&c<=36){b=T9(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function T9(b){var c,d,e,f,g,h,i,j,k;if(BfL===null){if(BfO===null)BfO=AMc();c=(BfO.value!==null?$rt_str(BfO.value):null);d=new RQ;d.Cx=Nq(c);e=Yi(d);f=$rt_createIntArray(e);g=f.data;h=0;while(h<e){g[h]=Yi(d);h=h+1|0;}BfL=f;}f=BfL.data;h=0;i=(f.length/2|0)-1|0;while(i>=h){j=(h+i|0)/2|0;e=j*2|0;k=R(b,f[e]);if(k>0)h=j+1|0;else{if(k>=0)return f[e+1|0];i=j-1|0;}}return (-1);}
function IY(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Iu(b){var c,d;if(b<65536){c=$rt_createCharArray(1);c.data[0]=b&65535;return c;}c=$rt_createCharArray(2);d=c.data;d[0]=IB(b);d[1]=H7(b);return c;}
function Do(b){var c,d,e,f,g;c=b>0&&b<=65535?1:0;if(c&&Om(b&65535))return 19;if(BfM===null){if(BfP===null)BfP=AHK();BfM=A2J((BfP.value!==null?$rt_str(BfP.value):null));}d=BfM.data;e=0;c=d.length-1|0;while(e<=c){f=(e+c|0)/2|0;g=d[f];if(b>=g.Ag)e=f+1|0;else{if(b>=g.w7)return g.CY.data[b-g.w7|0];c=f-1|0;}}return 0;}
function Lb(b){a:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Is(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Do(b)!=16?0:1;}
function Up(b){switch(Do(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Qa(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Up(b);}return 1;}
function ADb(a,b){return a.lW-b.lW|0;}
function A2$(a,b){return ADb(a,b);}
function AIR(){BfK=F($rt_charcls());BfN=J(Fi,128);}
function AMc(){return {"value":"oD#*% .%%2%)6%-:%1>%5B%9F%=J%AN%Eo%Is%Mw%Q{%U!\'Y&\'^*\'b.\'f2\'j6\'n:\'r>\'vB\'zF\'!#J\'&#N\'*#R\'.#V\'2#Z\'6#_\':#c\'>#g\'B#k\'F#o\'J#s\'N#w\'R#6)I:)M>)QB)UF)YJ)^N)bR)fV)jZ)n_)rc)vg)zk)!#o)&#s)*#w).#{)2#!+6#&+:#*+>#.+B#2+F#6+J#:+N#>+R#{R# !T#%&T#)*T#-.T#12T#56T#9:T#=>T#ABT#E6a# :a#%>a#)Ba#-Fa#1Ja#5Na#9Ra#=Va#AZa#E:s# >s#%Bs#)Fs#-Js#1Ns#5Rs#9Vs#=Zs#A_s#EZ:% _:%%c:%)g:%-k:%1o:%5s:%9w:%={:%A!<%E2F% 6F%%:F%)>F%-BF%1FF%5JF%9NF%=RF%AVF%EgP% kP%%oP%)sP%-wP%1{P%5!R%9&R%=*R%A.R%E>]% B]%%F]%)J]%-N]%1R]%5V]%9Z]%=_]%Ac]%Esg% wg%%{g%)!i%-&"
+"i%1*i%5.i%92i%=6i%A:i%EJs% Ns%%Rs%)Vs%-Zs%1_s%5cs%9gs%=ks%Aos%E!!\' &!\'%*!\').!\'-2!\'16!\'5:!\'9>!\'=B!\'AF!\'EV,\' Z,\'%_,\')c,\'-g,\'1k,\'5o,\'9s,\'=w,\'A{,\'E.8\' 28\'%68\'):8\'->8\'1B8\'5F8\'9J8\'=N8\'AR8\'EcB\' gB\'%kB\')oB\'-sB\'1wB\'5{B\'9!D\'=&D\'A*D\'E>L\' BL\'%FL\')JL\'-NL\'1RL\'5VL\'9ZL\'=_L\'AcL\'EsV\' wV\'%{V\')!X\'-&X\'1*X\'5.X\'92X\'=6X\'A:X\'EB_\' F_\'%J_\')N_\'-R_\'1V_\'5Z_\'9__\'=c_\'Ag_\'Esw\' ww\'%{w\')!y\'-&y\'1*y\'5.y\'92y\'=6y\'A:y\'EB!) F!)%J!))N!)-R!)1V!)5Z!)9_!)=c!)Ag!)Egi+ ki+%oi+)si+-wi+1{i+5!k+9&k+=*k+A.k+Eom+ sm+%wm+){m+-!o+1&o+5*o+9.o+=2o+A6o+E>,- B,-%F"
+",-)J,--N,-1R,-5V,-9Z,-=_,-Ac,-E>8- B8-%F8-)J8--N8-1R8-5V8-9Z8-=_8-Ac8-E{F- !H-%&H-)*H--.H-12H-56H-9:H-=>H-ABH-E_H- cH-%gH-)kH--oH-1sH-5wH-9{H-=!J-A&J-E!Z- &Z-%*Z-).Z--2Z-16Z-5:Z-9>Z-=BZ-AFZ-E2c- 6c-%:c-)>c--Bc-1Fc-5Jc-9Nc-=Rc-AVc-EJo- No-%Ro-)Vo--Zo-1_o-5co-9go-=ko-Aoo-E.q- 2q-%6q-):q-->q-1Bq-5Fq-9Jq-=Nq-ARq-E&4r *4r%.4r)24r-64r1:4r5>4r9B4r=F4rAJ4rE{or !qr%&qr)*qr-.qr12qr56qr9:qr=>qrABqrE&ur *ur%.ur)2ur-6ur1:ur5>ur9Bur=FurAJurE**t .*t%2*t)6*t-:*t1>*t5B*t9F*t=J*tAN*tEN,t R,t%V,t)Z,t-_,t1c,t5g,t9k,t=o,tAs,tE_"
+"4t c4t%g4t)k4t-o4t1s4t5w4t9{4t=!6tA&6tEgXt kXt%oXt)sXt-wXt1{Xt5!Zt9&Zt=*ZtA.ZtE{c@# !e@#%&e@#)*e@#-.e@#12e@#56e@#9:e@#=>e@#ABe@#Ece@#Ige@#Mke@#Qoe@#Use@#Ywe@#^{e@#b!g@#f&g@#j*g@#n.g@#r2g@#v6g@#z:g@#!#>g@#&#Bg@#*#Fg@#.#Jg@#2#Ng@#6#Rg@#:#Vg@#>#Zg@#B#_g@#F#cg@#J#gg@#N#kg@#R#*i@#I.i@#M2i@#Q6i@#U:i@#Y>i@#^Bi@#bFi@#fJi@#jNi@#nRi@#rVi@#vZi@#z_i@#!#ci@#&#gi@#*#ki@#.#oi@#2#si@#6#wi@#:#{i@#>#!k@#B#&k@#F#*k@#J#.k@#N#2k@#R#s&D# w&D#%{&D#)!(D#-&(D#1*(D#5.(D#92(D#=6(D#A:(D#E2.H# 6.H#%:.H#)>.H#-B.H#1F.H#5J.H#9N.H#=R.H#AV."
+"H#EwuH# {uH#%!wH#)&wH#-*wH#1.wH#52wH#96wH#=:wH#A>wH#Ew$J# {$J#%!&J#)&&J#-*&J#1.&J#52&J#96&J#=:&J#A>&J#E{*J# !,J#%&,J#)*,J#-.,J#12,J#56,J#9:,J#=>,J#AB,J#E_8J# c8J#%g8J#)k8J#-o8J#1s8J#5w8J#9{8J#=!:J#A&:J#E2RJ# 6RJ#%:RJ#)>RJ#-BRJ#1FRJ#5JRJ#9NRJ#=RRJ#AVRJ#ENqJ# RqJ#%VqJ#)ZqJ#-_qJ#1cqJ#5gqJ#9kqJ#=oqJ#AsqJ#E&}J# *}J#%.}J#)2}J#-6}J#1:}J#5>}J#9B}J#=F}J#AJ}J#Eg@L# k@L#%o@L#)s@L#-w@L#1{@L#5!BL#9&BL#=*BL#A.BL#EZJL# _JL#%cJL#)gJL#-kJL#1oJL#5sJL#9wJL#={JL#A!LL#ENTL# RTL#%VTL#)ZTL#-_TL#1cTL#5gTL#9kTL#=oTL#AsTL#E:{L# >{L#"
+"%B{L#)F{L#-J{L#1N{L#5R{L#9V{L#=Z{L#A_{L#ERkN# VkN#%ZkN#)_kN#-ckN#1gkN#5kkN#9okN#=skN#AwkN#E_$P# c$P#%g$P#)k$P#-o$P#1s$P#5w$P#9{$P#=!&P#A&&P#E.,P# 2,P#%6,P#):,P#->,P#1B,P#5F,P#9J,P#=N,P#AR,P#EFau# Jau#%Nau#)Rau#-Vau#1Zau#5_au#9cau#=gau#Akau#Eouu# suu#%wuu#){uu#-!wu#1&wu#5*wu#9.wu#=2wu#A6wu#EF0N% J0N%%N0N%)R0N%-V0N%1Z0N%5_0N%9c0N%=g0N%Ak0N%Eo0N% s0N%%w0N%){0N%-!2N%1&2N%5*2N%9.2N%=22N%A62N%E:2N% >2N%%B2N%)F2N%-J2N%1N2N%5R2N%9V2N%=Z2N%A_2N%Ec2N% g2N%%k2N%)o2N%-s2N%1w2N%5{2N%9!4N%=&4N%A*4N%E.4N% 24N%%64N%):4N%->"
+"4N%1B4N%5F4N%9J4N%=N4N%AR4N%ERJR% VJR%%ZJR%)_JR%-cJR%1gJR%5kJR%9oJR%=sJR%AwJR%E>qR% BqR%%FqR%)JqR%-NqR%1RqR%5VqR%9ZqR%=_qR%AcqR%E:FV% >FV%%BFV%)FFV%-JFV%1NFV%5RFV%9VFV%=ZFV%A_FV%E"};}
function AHK(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
+"!#!#!#!#!#!#!#!#!#!#!#!#!#=G&H#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!# BGA#%Y\'CJ95A#^#; GN5\'9G#9G#9\'A)F<A%F%Y#A,Q\'Z$Y#;Y#^#G,91 Y#FA%F+G6J+Y%F#\'b&D! 9&G(1=G\'E#G#=G%F#J+F$^#&Y/ 1&\'F?G<A#b&:! G,&A/J+FBG*E#=Y$%A#\'[#F7G%%G*%G$%G&A#Y0 F:G$A#9 F,AVF6 F)A6G01GA)FW\')\'&I$G)I%\'I#&G(F+G#Y#J+9%F0\'I# F)A#F#A#F7 F( &A$F%A#\'&I$G%A#I#A#I#\'&A))A%F# F$G#A#J+F#[#L\'=;&9\'A#G#) F\'A%F#A#F7 F( F# F# F#A#\' "
+"I$G#A%G#A#G$A$\'A(F% &A(J+G#F$\'9A+G#) F* F$ F7 F( F# F&A#\'&I$G& G#) I#\'A#&A0F#G#A#J+9;A(&G\' \'I# F)A#F#A#F7 F( F# F&A#\'&)\')G%A#I#A#I#\'A)\')A%F# F$G#A#J+=&L\'A+\'& F\'A$F$ F%A$F# & F#A$F#A$F$A$F-A%I#\'I#A$I$ I$\'A#&A\')A/J+L$^\';=A&\'I$\'F) F$ F8 F1A$&G$I% G$ G%A(G# F$A&F#G#A#J+A(9L(=&\'I#9F) F$ F8 F+ F&A#\'&)\'I& \'I# I#G#A(I#A(& F#G#A#J+ F#A.G#I# F) F$ FJG#&I$G% I$ I$\'&=A%F$)L(F$G#A#J+L*=F\'A#I# F3A$F9 F* &A#F(A$\'A%I$G$ \' I)A\'J+A#I#9A-FQ\'F#G(A%;F\'%G)9J+Y#AFF# & F& F9 & F+\'F#G*&A#F& % G\'A#J+A#F%AA&^$Y0=9^$G#^\'J+L+=\'=\'=\'6767"
+"I#F) FEA%G/)G&9G#F&G, GE ^)\'^\' ^#Y&^%Y#AFFLI#G%)G\')G#I#G#&J+Y\'F\'I#G#F%G$&I$F#I(F$G%F.\'I#G#I\'\'&)J+I$\'^#BG !A&!A#CL9%C$b&*&  F%A#F( & F%A#FJ F%A#FB F%A#F( & F%A#F0 FZ F%A#FeA#G$Y*L5A$F1^+A\'b!7! A#C\'A#5b&M* =9F2-F;67A$FmY$K$F)A(F. F%G$A,F3G$Y#A*F3G#A-F. F$ G#A-FUG#)G(I)\'I#G,Y$%Y$;&\'A#J+A\'L+A\'Y\'5Y%G$1 J+A\'FD%FVA(F&G#FC\'&A&FhA+F@ G$I%G#I$A%I#\'I\'G$A%=A$Y#J+F?A#F&A,FMA%F;A\'J+,A$^CF8G#I#\'A#Y#FV)\')G( \')\'I#G)I\'G+A#\'J+A\'J+A\'Y(%Y\'A#G/(AcG%)FP\')G&)\'I&\'I#F(A%J+Y(^+G*^*A$G#)F?)G%I#G#)G$F#J+FM\')G#I$\')G$I#A)Y%FEI)G)I#G#A$Y&"
+"J+A$F$J+F?E\'Y#C*A(BLA#B$Y)A)G$9G.)G(F%\'F\'\'F#)G#&A&CMEaC.%CCEFG[ G&!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*B)C\'A#B\'A#C)B)C)B)C\'A#B\'A#C) ! ! ! !C)B)C/A#C)D)C)D)C)D)C& C#B%$<#]$C$ C#B%$]$C%A#C#B% ]$C)B&]$A#C$ C#B%$]# M,Q&U\'Y#>?6_#?6>Y)./Q&-Y*>?Y%X#Y$:67Y,:98Y+-Q& Q+,%A#L\'Z$67%L+Z$67 E.A$[AA1G.H%\'H$G-A0^#"
+"!^%!^##B$C#B$#=!^#:B&^\'!=!=!=B%=#B%#F%#^#C#B#Z&!C%=:^##=L1KD!#K%,^#A%Z&^&Z#^%:^#:^#:^(:^@Z#^#:=:^@b:-% ^)6767^5Z#^(67b=2! :^?Z:^IZ\'^gA:^,A6L^^pL7b=X# :^*:^WZ)b=P! :b=Y$ 67676767676767L?^MZ&67Z@6767676767Z1b= % b:$# 6767676767676767676767Za6767ZA67b:#% ^QZ6^#Z\'^HA#^AA#b=I! BP CP !#B$C#!#!#!#B%#!C#!C\'E#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#^\'!#!#G$!#A&Y%,Y#CG #A&#A#FYA(%9A/\'F8A*F( F( F( F( F( F( F( F( GAY#>?>?Y$>?9>?Y*5Y#59>?Y#>?67676767Y&%Y+U#Y%"
+"596Y.AQ^; b=:! A-b=7$ A;^-A%-Y$=%&+6767676767^#6767676756W#=K*G%I#5E&^#K$%&9^# b&7! A#G#]#E#&5b&;! 9E$&A&FL b&?!  ^#L%^+F<A&^EA-F1^@ L+^?L)=L0^AL+^HL0b= & &b UG!&A+^b&b   %b O(!&A1F6%b&X2 A$^XA*FIE\'Y#b&-% %Y$F1J+F#A5!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#&\'H$9G+9%!#!#!#!#!#!#!#!#!#!#!#!#!#!#E#G#FhK+G#Y\'A)]8E*]#!#!#!#!#!#!#!C$!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#%C)!#!#B##!#!#!#!#%]#!#!#&!#!C$!#!#!#!#!#!#!#!#!#!#B&#B&#!#!#!#!#!#A#!#B$AQ&E##F(\'F$\'F%\'F8I#G#)^%A%L\'^#;=A\'FUY%A)I#F"
+"SI1G#A)Y#J+A\'G3F\'Y$&9F#\'J+F=G)Y#F8G,I#A,9F>A$G$)FP\'I#G%I#G#I$Y. %J+A%Y#F&\'%F*J+F& FJG\'I#G#I#G#A*F$\'F)\')A#J+A#Y%F1%F\'^$&)\')FS\'&G$F#G#F&G#&\'&A9F#%Y#F,)G#I#Y#&E#)\'A+F\'A#F\'A#F\'A*F( F( CL<E%C)A)b#1! FDI#\'I#\'I#9)\'A#J+A\'&b CO#&A-F8A%FRA%4b `. T#b `! T#b `0 43b `D!3b&O& A#b&K! AGC(A-C&A&&\'F+:F. F& & F# F# b&M! ]1A2b&L& 76A1FbA#FWAIF-;=A#G1Y(679A\'G19U#X#6767676767676767Y#67Y%X$Y$ Y%5676767Y$:5Z$ 9;Y#A%F& b&(# A#1 Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:67967Y#F+%FNE#F@A$F\'A#F\'A#F\'A#F$A$[#:<=[# =Z%^#A+Q$^#A#F- F; F4 F# F0"
+"A#F/ACb&]! A&Y$A%LNA$^*KVL%^2L#^$ ^-A%=AP^N\'b ## F>A$FRA0\'L<A%FAL%A*F5+F)+A&FGG&A&F? 9FEA%F)9K&AKBICIFpA#J+A\'BEA%CEA%FIA)FUA,9b 1# b&X% A*F7A+F)b 9# F\'A#& FM F#A$&A#F8 9L)F8^#L(F@A)L*AQF4 F#A&L&F7L\'A$9F;A&9AbFYA%L#F#L1A#LO&G$ G#A&G%F% F$ F>A#G$A%\'L*A(Y*A(F>L#9F>L$AAF)=F=G#A%L&Y(A*FWA$Y(F7A#L)F4A&L)F3A(Y%A-L(b 1! FkAXBTA.CTA(L\'FEG%A)J+b G% L@b !# F>L+&A)F7G,L%Y&b \'# F8A*)\')FVG0Y(A%L5J+A0G$)FNI$G%I#G#Y#1Y%A,1A#F:A(J+A\'G$FEG&)G) J+Y%&I#A*FD\'Y#&A*G#)FQI$G*I#F%Y%G%9A#J+&9&Y$ L5A,F3 F:I$G$I#\')G#Y\'\'AcF( & F% F0 F+"
+"9A\'FP\'I$G)A&J+A\'G#I# F)A#F#A#F7 F( F# F& G#&I#\'I%A#I#A#I$A#&A\')A&F&I#A#G(A$G&b ,# FVI$G)I#G$)\'F%Y&J+ 9 9\'&AAFQI$G\')\'I%G#)G#F#9&A)J+b G# FPI$G%A#I%G#)G#Y8F%G#ACFQI$G)I#\')G#Y$&A,J+A\'Y.A4FL\')\'I#G\')\'&A(J+AWF<A#G$I#G%)G&A%J+L#Y$=b  $ FMI$G*)G#9b E! BACAJ+L*A-&b A# F)A#FHI$G%A#G#I%\'&9&)A<&G+FIG\')&G%Y)\'A)&G\'I#G$FOG.)G#Y$&Y&A>FZb (% F* FF)G( G\')\'&Y&A+J+L4A$Y#F?A#G7 )G()G#)G#AkF( F# FGG\'A$\' G# G(&\'A)J+A\'F\' F# FAI& G# I#\')\'&A(J+b W% F4G#I#Y#b ($ L6^)[%^2A.9b&;/ b G! b+P!  Y&A,b&%$ b ^K b&P1  Q*b (a b&(* b Z\'#b&Z) A(F"
+"@ J+A%Y#b A! F?A#G&9A+FQG(Y&^%E%9=A+J+ L( F6A&F4b Q+ BACAL8Y%b F! FmA%\'&IXA(G%E.AbE#9%A=&b W@!&A)b&T, b .5#b&@% ARF$A2F%A)b&-\' b %E b&L! A&F.A$F*A(F+A#=G#9Q%b =.!b=W$ A+^HA#^^I#G$^$I\'Q)G)^#G(^?G%^]A8^dG$=b ;# L5A-b=8! A*L:b (# B;C;B;C( C3B;C;! B#A#!A#B#A#B% B)C% # C( C,B;C;B# B%A#B) B( C;B# B% B& !A$B( C;B;C;B;C;B;C;B;C;B;C;B;C=A#B::C::C\'B::C::C\'B::C::C\'B::C::C\'B::C::C\'!#A#JSb= ) GX^%GS^)\'^/\'^#Y&A0G& G0b 16 G( G2A#G( G# G&b 6$ FNA$G(E(A#J+A%&=b Q& FMG%J+A&;b  5 b&&$ A#L*G(AJBCCCG(%A%J+A%Y#b 2- L]=L$;L%AnLN="
+"L0b #$ F% F< F# &A#& F+ F% & &A\'&A%& & & F$ F# &A#& & & & & F# &A#F% F( F% F% & F+ F2A&F$ F& F2AUZ#b /% ^MA%b=E! A-^0A#^0 ^0 ^FA+L.A$b=>! A$^_AZ^>A.^MA%^*A(^#A/^\'b ;# b=]$ ]&b=7, A+^.A$^,A&b=U! A-b=:! A(^-A5^-A%^YA)^+A\'^IA)^?b 3! ^- b=F!  ^%A$^JA#^\'A$^>A#b=(# A-^/A#^%A%^$A&^$A.^\'b K6 &b   %b   %b 6<#&AJ&b T !&A,&b =$ &A#&b  ;!&A/&b PU!&b @Q b&?) b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   "
+"%b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b D8 1A?b1A! b  # b\'Q$ b   %b   %b   %b 1Y$3b   %b   %b   %b ^a$3A#3b   %b   %b   %b ^a$3"};}
function IV(){var a=this;D.call(a);a.cV=null;a.DP=0;}
function AJ2(a){return 1;}
function A87(a,b){return;}
function UL(){var a=this;IV.call(a);a.vR=0;a.vT=0;a.vS=0;a.hk=0.0;a.mH=0.0;a.oi=0.0;a.m$=0;a.A9=null;a.Bt=null;}
function Q$(a,b){b.t=(-180.0);}
function A$o(a){return;}
function AFx(a,b,c,d){var e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.cV.z;$p=1;case 1:$z=ACt(e,b,c,d);if(C()){break _;}f=$z;e=a.cV.z;$p=2;case 2:$z=AEI(e,b,c,d);if(C()){break _;}g=$z;e=a.cV.c4;$p=3;case 3:AEC(e,b,c,d);if(C()){break _;}e=a.cV.z;L();h=BeP.data;$p=4;case 4:$z=ACt(e,b,c,d);if(C()){break _;}i=$z;j=h[i];$p=5;case 5:$z=AEI(e,b,c,d);if(C()){break _;}i=
$z;k=0;$p=6;case 6:$z=APu(e,b,c,d,k);if(C()){break _;}k=$z;if(j!==null&&k){$p=7;continue _;}e=Ko(a.cV.f);if(e!==null){QB(e,f,b,c,d);if(!e.p)Jv(a.cV.f);}if(k&&M4(a.cV.f,BeP.data[f])){e=BeP.data[f];j=a.cV.z;$p=8;continue _;}return k;case 7:j.nl(e,b,c,d,i);if(C()){break _;}e=Ko(a.cV.f);if(e!==null){QB(e,f,b,c,d);if(!e.p)Jv(a.cV.f);}if(k&&M4(a.cV.f,BeP.data[f])){e=BeP.data[f];j=a.cV.z;$p=8;continue _;}return k;case 8:e.IJ(j,b,c,d,g);if(C()){break _;}return k;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AE3(a,b,c,d){var e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.cV.z;$p=1;case 1:$z=ACt(e,b,c,d);if(C()){break _;}f=$z;if(f>0&&a.hk===0.0){L();e=BeP.data[f];g=a.cV.z;h=a.cV.f;$p=3;continue _;}if(f<=0)return;L();e=BeP.data[f];g=a.cV.f;$p=2;case 2:$z=ABb(e,g);if(C()){break _;}i=$z;if(i<1.0)return;$p=4;continue _;case 3:e.q4(g,b,c,d,h);if(C()){break _;}if(f<=0)return;L();e=BeP.data[f];g
=a.cV.f;$p=2;continue _;case 4:AFx(a,b,c,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ALN(a){a.hk=0.0;a.m$=0;}
function YJ(a,b,c,d,e){var f,g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.m$>0)a.m$=a.m$-1|0;else{if(b==a.vR&&c==a.vT&&d==a.vS){f=a.cV.z;$p=1;continue _;}a.hk=0.0;a.mH=0.0;a.oi=0.0;a.vR=b;a.vT=c;a.vS=d;}return;case 1:$z=ACt(f,b,c,d);if(C()){break _;}g=$z;if(!g)return;L();f=BeP.data[g];h=a.hk;i=a.cV.f;$p=2;case 2:$z=ABb(f,i);if(C()){break _;}j=$z;a.hk=h+j;a.oi=a.oi+1.0;if(a.hk<
1.0)return;$p=3;case 3:AFx(a,b,c,d);if(C()){break _;}a.hk=0.0;a.mH=0.0;a.oi=0.0;a.m$=5;return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function GP(a,b){var c;if(a.hk<=0.0){a.cV.nU.Eh=0.0;a.cV.d5.tD=0.0;}else{c=a.mH+(a.hk-a.mH)*b;a.cV.nU.Eh=c;a.cV.d5.tD=c;}}
function A1i(a){return 4.0;}
function A5a(a,b){return;}
function AI0(a){var b,c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.mH=a.hk;b=a.A9;c=a.cV.z;$p=1;case 1:ABx(b,c);if(C()){break _;}b=a.Bt;c=a.cV.z;$p=2;case 2:ABx(b,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,$p);}
function Sw(){var a=this;D.call(a);a.c6=0.0;a.CG=0.0;a.i1=0;a.cW=0.0;a.CR=0.0;a.lE=0.0;a.sK=Long_ZERO;a.rO=Long_ZERO;a.nA=0.0;}
function FM(a){var b,c,d,e,f;b=B$();c=Long_sub(b,a.sK);d=Long_div(EF(),Long_fromInt(1000000));if(Long_gt(c,Long_fromInt(1000))){e=Long_toNumber(c)/Long_toNumber(Long_sub(d,a.rO));a.nA=a.nA+(e-a.nA)*0.20000000298023224;a.sK=b;a.rO=d;}if(Long_lt(c,Long_ZERO)){a.sK=b;a.rO=d;}f=Long_toNumber(d)/1000.0;e=(f-a.CG)*a.nA;a.CG=f;if(e<0.0)e=0.0;if(e>1.0)e=1.0;a.lE=a.lE+e*a.CR*a.c6;a.i1=a.lE|0;a.lE=a.lE-a.i1;if(a.i1>10)a.i1=10;a.cW=a.lE;}
function VB(){}
function RX(){var a=this;D.call(a);a.q0=null;a.f_=null;a.nX=null;a.od=Long_ZERO;a.nv=0;}
function AOY(a,b){a.nv=0;RM(a,b);}
function YF(a,b){a.nv=1;RM(a,a.nX);}
function RM(a,b){var c,d,e;a:{if(!a.f_.hv){if(a.nv)break a;b=new KH;O(b);M(b);}a.nX=b;c=FG(a.f_.cm,a.f_.bF);d=c.fK;e=c.fG;D3(256);C$(5889);C9();Im(0.0,d,e,0.0,100.0,300.0);C$(5888);C9();Bw(0.0,0.0,(-200.0));}}
function AR3(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.f_.hv){if(a.nv)return;b=new KH;O(b);M(b);}a.od=Long_ZERO;a.q0=b;c=(-1);$p=1;case 1:XE(a,c);if(C()){break _;}a.od=Long_ZERO;return;default:E$();}}C3().s(a,b,c,$p);}
function XE(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!a.f_.hv){if(a.nv)break a;c=new KH;O(c);M(c);}d=B$();if(Long_ge(Long_sub(d,a.od),Long_fromInt(20))){a.od=d;c=FG(a.f_.cm,a.f_.bF);e=c.fK;f=c.fG;D3(256);C$(5889);C9();g=e;h=f;Im(0.0,g,h,0.0,100.0,300.0);C$(5888);C9();Bw(0.0,
0.0,(-200.0));D3(16640);BA();i=BeL;c=a.f_.bo;j=B(165);$p=1;continue _;}}return;case 1:$z=AHt(c,j);if(C()){break _;}k=$z;Cp(3553,k);Bz(i);ER(i,4210752);l=f/32.0;G(i,0.0,h,0.0,0.0,l);m=e/32.0;G(i,g,h,0.0,m,l);G(i,g,0.0,0.0,m,0.0);G(i,0.0,0.0,0.0,0.0,0.0);Br(i);if(b>=0){n=(e/2|0)-50|0;o=(f/2|0)+16|0;Bc(3553);Bz(i);ER(i,8421504);g=n;p=o;Bf(i,g,p,0.0);m=o+2|0;Bf(i,g,m,0.0);q=n+100|0;Bf(i,q,m,0.0);Bf(i,q,p,0.0);ER(i,8454016);Bf(i,g,p,0.0);Bf(i,g,m,0.0);q=n+b|0;Bf(i,q,m,0.0);Bf(i,q,p,0.0);Br(i);Ba(3553);}c=a.f_.e7;i
=a.nX;b=(e-Dw(a.f_.e7,a.nX)|0)/2|0;r=(f/2|0)-4|0;Cy(c,i,b,r-16|0,16777215);Cy(a.f_.e7,a.q0,(e-Dw(a.f_.e7,a.q0)|0)/2|0,r+8|0,16777215);$p=2;case 2:AUT();if(C()){break _;}try{$p=3;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){}else{throw $$e;}}return;case 3:b:{try{Xy();if(C()){break _;}break b;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){}else{throw $$e;}}}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function AFO(){var a=this;D.call(a);a.B=null;a.qr=0;a.lO=0.0;a.iE=null;a.tF=0;a.p2=null;a.lh=null;a.H6=0;a.H5=0;a.pV=null;a.dE=0.0;a.d2=0.0;a.dR=0.0;a.n_=0.0;a.l4=0.0;}
function BbQ(a){var b=new AFO();AT6(b,a);return b;}
function AT6(a,b){var c;a.qr=0;a.lO=0.0;a.p2=null;a.lh=new Dz;a.H6=0;a.H5=0;a.pV=HY(16);a.B=b;c=new O7;c.eQ=null;c.i7=0.0;c.q6=0.0;c.iv=0;c.jJ=0;c.z6=Kg();c.cN=b;a.iE=c;}
function AIM(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.n_=a.l4;b=a.B.z;c=K(a.B.f.d);d=K(a.B.f.j);e=K(a.B.f.e);$p=1;case 1:$z=ANf(b,c,d,e);if(C()){break _;}f=$z;g=(3-a.B.u.hX|0)/3.0;h=f*(1.0-g)+g;a.l4=a.l4+(h-a.l4)*0.10000000149011612;a.tF=a.tF+1|0;AI9(a.iE);if(a.B.cS)
{b=a.B.f;i=a.B.z;d=K(b.d);j=K(b.j);k=K(b.e);l=4;m=0;n=63;e=R(64,j+4|0);j=R(64,j-4|0);o=64.0999984741211;if(m<50){p=(d+E(a.lh,9)|0)-l|0;q=(k+E(a.lh,9)|0)-l|0;$p=2;continue _;}}return;case 2:$z=ACt(i,p,n,q);if(C()){break _;}c=$z;if(e<=0&&j>=0){f=N(a.lh);g=N(a.lh);if(c>0){b=a.B.c4;r=new JK;s=p+f;L();TH(r,i,s,o-BeP.data[c].cJ,q+g);Ek(b,r);}}m=m+1|0;if(m>=50)return;p=(d+E(a.lh,9)|0)-l|0;q=(k+E(a.lh,9)|0)-l|0;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function NB(a,b){var c,d,e,f;c=a.B.f;d=c.bR;e=c.d-c.bR;f=b;return BY(d+e*f,c.cQ+(c.j-c.cQ)*f,c.bQ+(c.e-c.bQ)*f);}
function ALR(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.B.f;d=c.T+(c.I-c.T)*b;e=c.P+(c.t-c.P)*b;f=NB(a,b);g= -e*0.01745329238474369-3.1415927410125732;h=BC(g);i=Bq(g);g= -d*0.01745329238474369;j= -BC(g);g=Bq(g);k=i*j;l
=h*j;m=4.0;n=k;o=n*m;p=g;q=p*m;r=l;s=Dk(f,o,q,r*m);t=a.B;u=a.B.z;$p=1;case 1:$z=AJj(u,f,s);if(C()){break _;}u=$z;t.cb=u;f=NB(a,b);if(a.B.cb!==null)m=DG(a.B.cb.gw,f);if(a.B.cy instanceof Du)m=32.0;else if(m>3.0)m=3.0;n=n*m;p=p*m;r=r*m;s=Dk(f,n,p,r);a.p2=null;t=a.B.z;u=I_(c.L,n,p,r);$p=2;case 2:$z=ADJ(t,c,u);if(C()){break _;}t=$z;n=0.0;v=0;while(v<t.o){u=Z(t,v);if(u.lo()){w=QM(Dv(u.L,0.10000000149011612,0.10000000149011612,0.10000000149011612),f,s);if(w!==null){p=DG(f,w.gw);if(!(p>=n&&n!==0.0)){a.p2=u;n=p;}}}v
=v+1|0;}if(a.p2!==null&&!(a.B.cy instanceof Du))a.B.cb=A1a(a.p2);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p);}
function ADI(a,b){var c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.B.f;d=70.0;e=BfQ;$p=1;case 1:$z=AGG(c,e);if(C()){break _;}f=$z;if(f)d=60.0;if(c.bS<=0)d=d/((1.0-500.0/(c.c0+b+500.0))*2.0+1.0);return d;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function L4(a,b){var c,d,e;c=a.B.f;d=c.dB-b;if(c.bS<=0)Bv(40.0-8000.0/(c.c0+b+200.0),0.0,0.0,1.0);if(d>=0.0){b=d/c.EI;b=Bq(b*b*b*b*3.1415927410125732);e=c.kC;Bv( -e,0.0,1.0,0.0);Bv( -b*14.0,0.0,0.0,1.0);Bv(e,0.0,1.0,0.0);}}
function IH(a,b){var c,d,e,f,g;if(!a.B.u.cz){c=a.B.f;d=c.g9-c.tS;e=c.g9+d*b;f=c.qu+(c.kQ-c.qu)*b;g=c.kT+(c.ji-c.kT)*b;d=e*3.1415927410125732;Bw(Bq(d)*f*0.5, -HU(BC(d)*f),0.0);Bv(Bq(d)*f*3.0,0.0,0.0,1.0);Bv(HU(BC(d+0.20000000298023224)*f)*5.0,1.0,0.0,0.0);Bv(g,1.0,0.0,0.0);}}
function AH9(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.B.f;d=c.bR;e=c.d-c.bR;f=b;g=d+e*f;h=c.cQ+(c.j-c.cQ)*f;i=c.bQ+(c.e-c.bQ)*f;if(!a.B.u.cz)Bw(0.0,0.0,(-0.10000000149011612));else{j=4.0;d= -Bq(c.t/180.0*3.1415927410125732)*BC(c.I
/180.0*3.1415927410125732)*j;e=BC(c.t/180.0*3.1415927410125732)*BC(c.I/180.0*3.1415927410125732)*j;f= -Bq(c.I/180.0*3.1415927410125732)*j;k=0;l=g-d;d=h-f;f=i-e;if(k<8){m=((k&1)*2|0)-1|0;n=((k>>1&1)*2|0)-1|0;o=((k>>2&1)*2|0)-1|0;m=m*0.10000000149011612;n=n*0.10000000149011612;o=o*0.10000000149011612;p=a.B.z;e=m;q=g+e;r=n;s=h+r;t=o;u=BY(q,s,i+t);v=BY(l+e+t,d+r,f+t);$p=1;continue _;}Bw(0.0,0.0, -j);}Bv(c.T+(c.I-c.T)*b,1.0,0.0,0.0);Bv(c.P+(c.t-c.P)*b+180.0,0.0,1.0,0.0);return;case 1:$z=AJj(p,u,v);if(C()){break _;}u
=$z;if(u!==null){q=DG(u.gw,BY(g,h,i));if(q<j)j=q;}k=k+1|0;if(k>=8){Bw(0.0,0.0, -j);Bv(c.T+(c.I-c.T)*b,1.0,0.0,0.0);Bv(c.P+(c.t-c.P)*b+180.0,0.0,1.0,0.0);return;}m=((k&1)*2|0)-1|0;n=((k>>1&1)*2|0)-1|0;o=((k>>2&1)*2|0)-1|0;m=m*0.10000000149011612;n=n*0.10000000149011612;o=o*0.10000000149011612;p=a.B.z;e=m;q=g+e;r=n;s=h+r;t=o;u=BY(q,s,i+t);v=BY(l+e+t,d+r,f+t);continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function AFG(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:C9();if(a.B.u.ez)Bw(((c*2|0)-1|0)*0.10000000149011612,0.0,0.0);B3();L4(a,b);if(a.B.u.jh)IH(a,b);if(!a.B.u.cz){d=a.iE;$p=1;continue _;}BD();if(a.B.u.cz){if(a.B.u.jh)IH(a,b);return;}d=a.iE;$p=2;continue _;case 1:ACU(d,b);if(C()){break _;}BD();if(a.B.u.cz){if(a.B.u.jh)IH(a,b);return;}d=a.iE;$p=2;case 2:AB7(d,b);if(C()){break _;}L4(a,b);if(a.B.u.jh)IH(a,b);return;default:E$();}}C3().s(a,
b,c,d,$p);}
function AFM(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.qr&&!Oc()){c=a.B;$p=1;continue _;}a.qr=Oc();Bd();d=BdY;BdY=0.0;e=d|0;d=BdZ;BdZ=0.0;f=d|0;g=1;if(a.B.u.m0)g=(-1);if(a.B.bp&&a.B.z!==null)Xh(a.B.f,e,Bj(f,g));if(!a.B.h6){c=FG(a.B.cm,a.B.bF);f=c.fK;e=c.fG;h=Bj(BdW,f)/a.B.cm|0;i=(e-(Bj(BdX,e)/a.B.bF|0)|0)-1|0;if(a.B.z!==null){$p=2;continue _;}Hf(0,0,a.B.cm,a.B.bF);Hx(0.0,
0.0,0.0,0.0);D3(16640);C$(5889);C9();C$(5888);C9();LB(a);if(a.B.D!==null){D3(256);c=a.B.D;$p=3;continue _;}}return;case 1:AK9(c);if(C()){break _;}a.qr=Oc();Bd();d=BdY;BdY=0.0;e=d|0;d=BdZ;BdZ=0.0;f=d|0;g=1;if(a.B.u.m0)g=(-1);if(a.B.bp&&a.B.z!==null)Xh(a.B.f,e,Bj(f,g));if(!a.B.h6){c=FG(a.B.cm,a.B.bF);f=c.fK;e=c.fG;h=Bj(BdW,f)/a.B.cm|0;i=(e-(Bj(BdX,e)/a.B.bF|0)|0)-1|0;if(a.B.z!==null){$p=2;continue _;}Hf(0,0,a.B.cm,a.B.bF);Hx(0.0,0.0,0.0,0.0);D3(16640);C$(5889);C9();C$(5888);C9();LB(a);if(a.B.D!==null){D3(256);c
=a.B.D;$p=3;continue _;}}return;case 2:AAc(a,b);if(C()){break _;}c=a.B.nU;g=a.B.D===null?0:1;$p=4;continue _;case 3:c.hL(h,i,b);if(C()){break _;}return;case 4:API(c,b,g,h,i);if(C()){break _;}if(a.B.D===null)return;D3(256);c=a.B.D;$p=3;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AAc(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ALR(a,b);if(C()){break _;}c=a.B.f;d=a.B.d5;e=a.B.c4;f=c.co;g=c.d-c.co;h=b;i=f+g*h;f=c.b5+(c.j-c.b5)*h;g=c.cp+(c.e-c.cp)*h;j=0;if(j>=2){FC(1,1,1,0);return;}if(a.B.u.ez){if(j)FC(1,0,0,0);else FC(0,1,1,0);}Hf(0,0,a.B.cm,a.B.bF);$p=2;case 2:AD0(a,
b);if(C()){break _;}D3(16640);Ba(2884);a.lO=256>>a.B.u.hX;C$(5889);C9();if(a.B.u.ez)Bw( -((j*2|0)-1|0)*0.07000000029802322,0.0,0.0);$p=3;case 3:$z=ADI(a,b);if(C()){break _;}k=$z;APv(k,a.B.cm/a.B.bF,0.05000000074505806,a.lO);C$(5888);C9();if(a.B.u.ez)Bw(((j*2|0)-1|0)*0.10000000149011612,0.0,0.0);L4(a,b);if(a.B.u.jh)IH(a,b);$p=4;case 4:AH9(a,b);if(C()){break _;}RO();if(a.B.u.hX<2){l=(-1);$p=13;continue _;}Ba(2912);l=1;$p=5;case 5:ASe(a,l);if(C()){break _;}m=Bby();AOi(m,i,f,g);ARI(a.B.d5,m,b);n=a.B.d5;l=0;$p=6;case 6:AIj(n,
c,l);if(C()){break _;}l=0;$p=7;case 7:ASe(a,l);if(C()){break _;}Ba(2912);l=3553;n=a.B.bo;o=B(179);$p=8;case 8:$z=AHt(n,o);if(C()){break _;}p=$z;Cp(l,p);DQ();Vk(d,c,0,h);Hu();n=NB(a,b);$p=9;case 9:ACy(d,n,m,b);if(C()){break _;}$p=10;case 10:ABS(e,c,b);if(C()){break _;}DQ();l=0;$p=11;case 11:ASe(a,l);if(C()){break _;}$p=12;case 12:AA_(e,c,b);if(C()){break _;}if(a.B.cb!==null){m=BfQ;$p=17;continue _;}Df(770,771);l=0;$p=15;continue _;case 13:ASe(a,l);if(C()){break _;}$p=14;case 14:AC_(d,b);if(C()){break _;}Ba(2912);l
=1;$p=5;continue _;case 15:ASe(a,l);if(C()){break _;}Ba(3042);Bc(2884);l=3553;m=a.B.bo;n=B(179);$p=16;case 16:$z=AHt(m,n);if(C()){break _;}p=$z;Cp(l,p);Vk(d,c,1,h);Gq(1);Ba(2884);Bc(3042);if(a.B.cb!==null){m=BfQ;$p=18;continue _;}Bc(2912);if(a.B.cS){$p=21;continue _;}l=0;$p=24;continue _;case 17:$z=AGG(c,m);if(C()){break _;}l=$z;if(!l){Df(770,771);l=0;$p=15;continue _;}Bc(3008);m=a.B.cb;l=0;n=D8(c.J);$p=19;continue _;case 18:$z=AGG(c,m);if(C()){break _;}l=$z;if(!l){Bc(3008);m=a.B.cb;l=0;n=D8(c.J);$p=22;continue _;}Bc(2912);if
(a.B.cS){$p=21;continue _;}l=0;$p=24;continue _;case 19:AFF(d,c,m,l,n,b);if(C()){break _;}m=a.B.cb;l=0;n=D8(c.J);$p=20;case 20:AGf(d,c,m,l,n,b);if(C()){break _;}Ba(3008);Df(770,771);l=0;$p=15;continue _;case 21:XP(a,b);if(C()){break _;}l=0;$p=24;continue _;case 22:AFF(d,c,m,l,n,b);if(C()){break _;}n=a.B.cb;l=0;m=D8(c.J);$p=23;case 23:AGf(d,c,n,l,m,b);if(C()){break _;}Ba(3008);Bc(2912);if(a.B.cS){$p=21;continue _;}l=0;$p=24;case 24:ASe(a,l);if(C()){break _;}Ba(2912);$p=25;case 25:YI(d,b);if(C()){break _;}Bc(2912);l
=1;$p=26;case 26:ASe(a,l);if(C()){break _;}D3(256);$p=27;case 27:AFG(a,b,j);if(C()){break _;}if(!a.B.u.ez)return;j=j+1|0;if(j>=2){FC(1,1,1,0);return;}if(a.B.u.ez){if(j)FC(1,0,0,0);else FC(0,1,1,0);}Hf(0,0,a.B.cm,a.B.bF);$p=2;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function XP(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.B.f;d=K(c.d);e=K(c.j);f=K(c.e);BA();g=BeL;Bc(2884);Cj(0.0,1.0,0.0);Ba(3042);Df(770,
771);h=3553;i=a.B.bo;j=B(196);$p=1;case 1:$z=AHt(i,j);if(C()){break _;}k=$z;Cp(h,k);k=d-5|0;d=d+5|0;h=f-5|0;l=f+5|0;m=e-5|0;n=e+5|0;e=R(m,64);o=R(n,64);while(k<=d){p=h;while(p<=l){q=e<0?64:m;r=o<0?64:n;if(q!=r){s=((((a.tF+(k*3121|0)|0)+Bj(p,418711)|0)%32|0)+b)/32.0;t=k+0.5-c.d;u=p+0.5-c.e;v=Ce(t*t+u*u)/5.0;BU(1.0,1.0,1.0,(1.0-v*v)*0.699999988079071);Bz(g);u=k+0|0;w=q;x=p+0|0;v=q*2.0/8.0;y=s*2.0;z=v+y;G(g,u,w,x,0.0,z);ba=k+1|0;bb=p+1|0;G(g,ba,w,bb,2.0,z);bc=r;bd=r*2.0/8.0+y;G(g,ba,bc,bb,2.0,bd);G(g,u,bc,x,0.0,
bd);G(g,u,w,bb,0.0,z);G(g,ba,w,x,2.0,z);G(g,ba,bc,x,2.0,bd);G(g,u,bc,bb,0.0,bd);Br(g);}p=p+1|0;}k=k+1|0;}Ba(2884);Bc(3042);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function LB(a){var b,c,d;b=FG(a.B.cm,a.B.bF);c=b.fK;d=b.fG;D3(256);C$(5889);C9();Im(0.0,c,d,0.0,1000.0,3000.0);C$(5888);C9();Bw(0.0,0.0,(-2000.0));}
function AD0(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.B.z;d=a.B.f;e=1.0-A2N(1.0/(4-a.B.u.hX|0),0.25);f=OM(c,b);g=f.w;h=f.y;i=f.v;j=ADp(c,b);a.dE=j.w;a.d2=j.y;a.dR=j.v;a.dE=a.dE+(g-a.dE)*e;a.d2=a.d2+(h-a.d2)*e;a.dR=a.dR+(i-a.dR)*e;c=BfQ;$p=1;case 1:$z=AGG(d,c);if(C()){break _;}k=$z;if(k){a.dE=0.019999999552965164;a.d2
=0.019999999552965164;a.dR=0.20000000298023224;e=a.n_+(a.l4-a.n_)*b;a.dE=a.dE*e;a.d2=a.d2*e;a.dR=a.dR*e;if(a.B.u.ez){l=(a.dE*30.0+a.d2*59.0+a.dR*11.0)/100.0;m=(a.dE*30.0+a.d2*70.0)/100.0;n=(a.dE*30.0+a.dR*70.0)/100.0;a.dE=l;a.d2=m;a.dR=n;}Hx(a.dE,a.d2,a.dR,0.0);return;}c=BfR;$p=2;case 2:$z=AGG(d,c);if(C()){break _;}k=$z;if(k){a.dE=0.6000000238418579;a.d2=0.10000000149011612;a.dR=0.0;}e=a.n_+(a.l4-a.n_)*b;a.dE=a.dE*e;a.d2=a.d2*e;a.dR=a.dR*e;if(a.B.u.ez){l=(a.dE*30.0+a.d2*59.0+a.dR*11.0)/100.0;m=(a.dE*30.0+a.d2
*70.0)/100.0;n=(a.dE*30.0+a.dR*70.0)/100.0;a.dE=l;a.d2=m;a.dR=n;}Hx(a.dE,a.d2,a.dR,0.0);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ASe(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.B.f;d=a.dE;e=a.d2;f=a.dR;Ez(a.pV);CJ(CJ(CJ(CJ(a.pV,d),e),f),1.0);Gr(a.pV);g=a.pV;BV();BfS=Jn(g);BfT=Jn(g);BfU=Jn(g);BfV=Jn(g);Cj(0.0,(-1.0),0.0);BU(1.0,1.0,1.0,1.0);g=BfQ;$p=1;case 1:$z=AGG(c,g);if(C()){break _;}h=$z;if(h){L_(2917,2048);GK(2914,0.10000000149011612);Ba(2903);return;}g=BfR;$p=2;case 2:$z=AGG(c,g);if(C()){break _;}h
=$z;if(h){L_(2917,2048);GK(2914,2.0);}else{L_(2917,9729);GK(2915,a.lO*0.25);GK(2916,a.lO);if(b<0){GK(2915,0.0);GK(2916,a.lO*0.800000011920929);}}Ba(2903);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function Eg(){D.call(this);this.xO=0.0;}
function Mw(){var a=this;Eg.call(a);a.iT=null;a.k6=null;a.pd=null;a.dX=null;a.dK=null;a.i5=null;a.hb=null;}
function A$Y(){var a=new Mw();KD(a);return a;}
function Xp(a){var b=new Mw();AIK(b,a);return b;}
function BfW(a,b){var c=new Mw();ARt(c,a,b);return c;}
function KD(a){AIK(a,0.0);}
function AIK(a,b){ARt(a,b,0.0);}
function ARt(a,b,c){var d,e;a.iT=BK(0,0);BG(a.iT,(-4.0),(-8.0),(-4.0),8,8,8,b);d=a.iT;e=0.0+c;BJ(d,0.0,e,0.0);a.k6=BK(32,0);BG(a.k6,(-4.0),(-8.0),(-4.0),8,8,8,b+0.5);BJ(a.k6,0.0,e,0.0);a.pd=BK(16,16);BG(a.pd,(-4.0),0.0,(-2.0),8,12,4,b);BJ(a.pd,0.0,e,0.0);a.dX=BK(40,16);BG(a.dX,(-3.0),(-2.0),(-2.0),4,12,4,b);d=a.dX;e=2.0+c;BJ(d,(-5.0),e,0.0);a.dK=BK(40,16);a.dK.lx=1;BG(a.dK,(-1.0),(-2.0),(-2.0),4,12,4,b);BJ(a.dK,5.0,e,0.0);a.i5=BK(0,16);BG(a.i5,(-2.0),0.0,(-2.0),4,12,4,b);d=a.i5;c=12.0+c;BJ(d,(-2.0),c,0.0);a.hb
=BK(0,16);a.hb.lx=1;BG(a.hb,(-2.0),0.0,(-2.0),4,12,4,b);BJ(a.hb,2.0,c,0.0);}
function A$k(a,b,c,d,e,f,g){a.of(b,c,d,e,f,g);B_(a.iT,g);B_(a.pd,g);B_(a.dX,g);B_(a.dK,g);B_(a.i5,g);B_(a.hb,g);B_(a.k6,g);}
function AIQ(a,b,c,d,e,f,g){var h;a.iT.bW=e/57.2957763671875;a.iT.bZ=f/57.2957763671875;a.k6.bW=a.iT.bW;a.k6.bZ=a.iT.bZ;h=a.dX;e=b*0.6661999821662903;f=e+3.1415927410125732;h.bZ=BC(f)*2.0*c;a.dX.bT=(BC(b*0.23119999468326569)+1.0)*1.0*c;a.dK.bZ=BC(e)*2.0*c;a.dK.bT=(BC(b*0.28119999170303345)-1.0)*1.0*c;a.i5.bZ=BC(e)*1.399999976158142*c;a.hb.bZ=BC(f)*1.399999976158142*c;h=a.dX;c=h.bT;b=d*0.09000000357627869;h.bT=c+BC(b)*0.05000000074505806+0.05000000074505806;h=a.dK;h.bT=h.bT-(BC(b)*0.05000000074505806+0.05000000074505806);h
=a.dX;b=h.bZ;c=d*0.06700000166893005;h.bZ=b+Bq(c)*0.05000000074505806;h=a.dK;h.bZ=h.bZ-Bq(c)*0.05000000074505806;}
function Et(){var a=this;D.call(a);a.dA=null;a.IR=0;a.mx=0;a.HO=0;a.wQ=0;}
function BfX(a){var b=new Et();Hz(b,a);return b;}
function Hz(a,b){a.dA=$rt_createByteArray(1024);a.mx=0;a.HO=0;a.wQ=1;a.IR=b;}
function AAQ(){var a=this;Et.call(a);a.pt=null;a.tl=null;a.nT=null;a.rI=null;a.xr=0;}
function Bap(){var a=new AAQ();A$4(a);return a;}
function A$4(a){L();Hz(a,BfY.bb);a.pt=$rt_createFloatArray(256);a.tl=$rt_createFloatArray(256);a.nT=$rt_createFloatArray(256);a.rI=$rt_createFloatArray(256);a.xr=0;}
function AYA(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;a.xr=a.xr+1|0;b=0;while(b<16){c=0;while(c<16){d=0.0;e=b-1|0;while(e<=(b+1|0)){f=e&15;g=c&15;d=d+a.pt.data[f+(g*16|0)|0];e=e+1|0;}h=a.tl.data;i=b+(c*16|0)|0;h[i]=d/3.299999952316284+a.nT.data[i]*0.800000011920929;c=c+1|0;}b=b+1|0;}c=0;while(c<16){j=0;while(j<16){k=a.nT.data;b=c+(j*16|0)|0;k[b]=k[b]+a.rI.data[b]*0.05000000074505806;if(a.nT.data[b]<0.0)a.nT.data[b]=0.0;k=a.rI.data;k[b]=k[b]-0.10000000149011612;if(BP()<0.05)a.rI.data[b]=0.5;j=j+1|0;}c=c+1|0;}k=a.tl;a.tl
=a.pt;a.pt=k;c=0;while(c<256){d=a.pt.data[c];if(d>1.0)d=1.0;if(d<0.0)d=0.0;l=d*d;i=32.0+l*32.0|0;m=50.0+l*64.0|0;n=255;o=146.0+l*50.0|0;if(a.mx){b=i*30|0;i=((b+(m*59|0)|0)+2805|0)/100|0;m=(b+(m*70|0)|0)/100|0;n=(b+17850|0)/100|0;}k=a.dA.data;j=c*4|0;k[j+0|0]=i<<24>>24;a.dA.data[j+1|0]=m<<24>>24;a.dA.data[j+2|0]=n<<24>>24;a.dA.data[j+3|0]=o<<24>>24;c=c+1|0;}}
function AKA(){var a=this;Et.call(a);a.pO=null;a.qM=null;a.jr=null;a.ss=null;}
function BaY(){var a=new AKA();A1D(a);return a;}
function A1D(a){L();Hz(a,BfZ.bb);a.pO=$rt_createFloatArray(256);a.qM=$rt_createFloatArray(256);a.jr=$rt_createFloatArray(256);a.ss=$rt_createFloatArray(256);}
function AYQ(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=0;while(b<16){c=0;while(c<16){d=0.0;e=Bq(c*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;f=Bq(b*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;g=b-1|0;while(true){h=b+1|0;if(g>h)break;i=c-1|0;while(i<=(c+1|0)){h=(g+e|0)&15;j=(i+f|0)&15;d=d+a.pO.data[h+(j*16|0)|0];i=i+1|0;}g=g+1|0;}k=a.qM.data;l=b+(c*16|0)|0;d=d/10.0;m=a.jr.data;e=(b+0|0)&15;n=((c+0|0)&15)*16|0;o=m[e+n|0];m=a.jr.data;h=h&15;o=o+m[h+n|0];m=a.jr.data;c=c+1|0;n=(c&15)*16|0;k[l]=d+(o+m[h+n
|0]+a.jr.data[e+n|0])/4.0*0.800000011920929;m=a.jr.data;m[l]=m[l]+a.ss.data[l]*0.009999999776482582;if(a.jr.data[l]<0.0)a.jr.data[l]=0.0;m=a.ss.data;m[l]=m[l]-0.05999999865889549;if(BP()<0.005)a.ss.data[l]=1.5;}b=b+1|0;}m=a.qM;a.qM=a.pO;a.pO=m;n=0;while(n<256){d=a.pO.data[n]*2.0;if(d>1.0)d=1.0;if(d<0.0)d=0.0;h=d*100.0+155.0|0;o=d*d;j=o*255.0|0;l=o*d*d*128.0|0;if(a.mx){e=h*30|0;h=((e+(j*59|0)|0)+(l*11|0)|0)/100|0;j=(e+(j*70|0)|0)/100|0;l=(e+(l*70|0)|0)/100|0;}m=a.dA.data;b=n*4|0;m[b+0|0]=h<<24>>24;a.dA.data[b
+1|0]=j<<24>>24;a.dA.data[b+2|0]=l<<24>>24;a.dA.data[b+3|0]=(-1);n=n+1|0;}}
function L3(){D.call(this);}
var Bf0=null;var Bf1=null;function Bf2(){var a=new L3();AZB(a);return a;}
function AZB(a){return;}
function DR(){if(Bf0===null)Bf0=AYI(new W_,0);return Bf0;}
function C1(){if(Bf1===null)Bf1=AYI(new PJ,0);return Bf1;}
function Di(b,c,d,e,f){var g,h,i,j,k,l,m;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=APe(b)&&(e+f|0)<=APe(d)){a:{b:{if(b!==d){g=Kv(Dl(b));h=Kv(Dl(d));if(g!==null&&h!==null){if(g===h)break b;if(!FV(g)&&!FV(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;if(!Us(h,l[k])){Ve(b,c,d,e,j);b=new JP;O(b);M(b);}j=j+1|0;k=m;}Ve(b,c,d,e,f);return;}if(!FV(g))break a;if(FV(h))break b;else break a;}b=new JP;O(b);M(b);}}Ve(b,c,d,e,f);return;}b=new JP;O(b);M(b);}b=new BO;O(b);M(b);}d=new ED;Bl(d,B(197));M(d);}
function Ve(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function B$(){return Long_fromNumber(new Date().getTime());}
function EF(){return Long_fromNumber(performance.now()*1000000.0);}
function VS(){Gj.call(this);this.yd=null;}
function AJY(a){var b,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:while(a.yd.hv){try{b=Long_fromInt(2147483647);$p=1;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof E1){}else{throw $$e;}}}return;case 1:a:{try{AKC(b);if(C()){break _;}break a;}catch($$e){$$je=Bi($$e);if($$je instanceof E1){}else{throw $$e;}}}while(a.yd.hv){try{b=Long_fromInt(2147483647);continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof E1){}else{throw $$e;}}}return;default:E$();}}C3().s(a,
b,$p);}
function Sg(){}
function Ih(){}
function Gi(){D.call(this);}
function PR(a){return a.hu?0:1;}
function Q1(a,b){var c,d;c=a.kR();a:{while(c.qf()){b:{d=c.mL();if(d!==null){if(!d.ek(b))break b;else break a;}if(b===null)break a;}}return 0;}return 1;}
function AA4(a){var b,c,d,e,f;b=J(D,IJ(a));c=b.data;d=0;e=Or(a);while(F7(e)){f=d+1|0;c[d]=Ll(e);d=f;}return b;}
function Uy(a,b){var c,d,e,f,g;c=b.data;d=a.o;e=c.length;if(e<d)b=AEG(Kv(Dl(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=Jf(a);while(KA(f)){c=b.data;g=e+1|0;c[e]=KR(f);e=g;}return b;}
function DC(a,b){var c,d;c=0;d=b.kR();while(d.qf()){if(!a.sL(d.mL()))continue;c=1;}return c;}
function F_(a,b){var c,d;c=0;d=Jf(a);while(KA(d)){if(b.rt(KR(d))){AL$(d);c=1;}}return c;}
function J1(){}
function Ga(){Gi.call(this);this.d3=0;}
function Ft(a,b){AEO(a,a.hu,b);return 1;}
function Jf(a){var b;b=new Tq;b.k7=a;b.ye=b.k7.d3;b.sl=b.k7.o;b.nd=(-1);return b;}
function AA9(a,b){var c,d,e;c=a.o;d=0;a:{while(d<c){b:{e=Z(a,d);if(b!==null){if(!b.ek(e))break b;else break a;}if(e===null)break a;}d=d+1|0;}return (-1);}return d;}
function Mq(){Ga.call(this);}
function AEO(a,b,c){if(b>=0){ABp(Wh(a,b),c);return;}c=new BO;O(c);M(c);}
function Td(a,b){var c,d;if(b>=0){c=Wh(a,b);d=GB(c);AHf(c);return d;}c=new BO;O(c);M(c);}
function AUr(a){return JA(a);}
function Oy(){}
function Xf(){}
function AED(){var a=this;Mq.call(a);a.pz=null;a.qg=null;a.hu=0;}
function QQ(){var a=new AED();A2Q(a);return a;}
function A2Q(a){return;}
function A9f(a){return a.hu;}
function Oq(a){a.pz=null;a.qg=null;a.hu=0;a.d3=a.d3+1|0;}
function JA(a){return AJx(a,a.pz,null,0);}
function Wh(a,b){var c,d,e;if(b<0){c=new BO;O(c);M(c);}if(b<=(a.hu/2|0)){d=a.pz;e=0;while(e<b){d=d.ho;e=e+1|0;}return AJx(a,d,d===null?null:d.iu,b);}if(b>a.hu){c=new BO;O(c);M(c);}c=a.qg;e=b;while(e<a.hu){c=c.iu;e=e+1|0;}return AJx(a,c===null?null:c.ho,c,b);}
function AN9(){D.call(this);}
function F4(){D.call(this);}
function ABC(){F4.call(this);}
function AKE(){F4.call(this);}
function I9(){}
function Fb(){Gi.call(this);}
function Fq(a,b){var c,d;c=0;if(IJ(a)>=b.lP()){d=b.kR();while(d.qf()){if(!KU(a,d.mL()))continue;c=1;}}else{d=Or(a);while(F7(d)){if(b.rt(Ll(d))){c=1;ADP(d);}}}return c;}
function A5X(a,b){var c,d;if(a===b)return 1;if(!Sf(b,I9))return 0;c=b;if(IJ(a)!=IJ(c))return 0;d=Or(c);while(F7(d)){if(Ww(a,Ll(d)))continue;else return 0;}return 1;}
function AS0(a){var b,c,d,e,f,g;b=AA4(a);if(b===null)c=0;else{c=(-1515898884);d=0;while(true){e=b.data;if(d>=e.length)break;f=e[d];g=(f!==null?f.fi():0)^528111840;c=Ni(g,4)^(g>>>7|g<<25)^Ni(c,13);d=d+1|0;}}return c;}
function ET(){}
function AQi(){Fb.call(this);this.l1=null;}
function F6(){var a=new AQi();A06(a);return a;}
function A06(a){a.l1=Dd();}
function Xd(a,b){return BR(a.l1,b,a)!==null?0:1;}
function Ww(a,b){return DX(a.l1,b);}
function Or(a){return ACP(AKa(a.l1));}
function KU(a,b){return Q2(a.l1,b)===null?0:1;}
function IJ(a){return a.l1.f7;}
function LS(){}
function FT(){var a=this;D.call(a);a.wP=null;a.wZ=null;}
function AB_(){var a=this;FT.call(a);a.f7=0;a.cM=null;a.g5=0;a.E6=0.0;a.uA=0;}
function Dd(){var a=new AB_();AVr(a);return a;}
function A56(a,b){return J(IC,b);}
function AVr(a){var b;b=AGY(16);a.f7=0;a.cM=J(IC,b);a.E6=0.75;RH(a);}
function AGY(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function U4(a){var b;if(a.f7>0){a.f7=0;b=a.cM;ZB(b,0,b.data.length,null);a.g5=a.g5+1|0;}}
function RH(a){a.uA=a.cM.data.length*a.E6|0;}
function DX(a,b){return VF(a,b)===null?0:1;}
function AEb(a,b){var c,d,e;a:{if(b===null){c=0;b:while(true){if(c>=a.cM.data.length)break a;d=a.cM.data[c];while(d!==null){if(d.e3===null)break b;d=d.eB;}c=c+1|0;}return 1;}c=0;c:while(true){if(c>=a.cM.data.length)break a;d=a.cM.data[c];while(d!==null){e=d.e3;if(b!==e&&!b.ek(e)?0:1)break c;d=d.eB;}c=c+1|0;}return 1;}return 0;}
function CP(a,b){var c;c=VF(a,b);if(c===null)return null;return c.e3;}
function VF(a,b){var c,d;if(b===null)c=QL(a);else{d=b.fi();c=P0(a,b,d&(a.cM.data.length-1|0),d);}return c;}
function P0(a,b,c,d){var e;e=a.cM.data[c];while(e!==null&&!(e.pQ==d&&AI3(b,e.gd))){e=e.eB;}return e;}
function QL(a){var b;b=a.cM.data[0];while(b!==null&&b.gd!==null){b=b.eB;}return b;}
function AKa(a){var b;if(a.wP===null){b=new PF;b.Cp=a;a.wP=b;}return a.wP;}
function Q9(a,b,c){return BR(a,b,c);}
function BR(a,b,c){var d,e,f,g;if(b===null){d=QL(a);if(d===null){a.g5=a.g5+1|0;d=RE(a,null,0,0);e=a.f7+1|0;a.f7=e;if(e>a.uA)Wm(a);}}else{e=b.fi();f=e&(a.cM.data.length-1|0);d=P0(a,b,f,e);if(d===null){a.g5=a.g5+1|0;d=RE(a,b,f,e);e=a.f7+1|0;a.f7=e;if(e>a.uA)Wm(a);}}g=d.e3;d.e3=c;return g;}
function RE(a,b,c,d){var e,f;e=new IC;f=null;e.gd=b;e.e3=f;e.pQ=d;e.eB=a.cM.data[c];a.cM.data[c]=e;return e;}
function ALB(a,b){var c,d,e,f,g,h,i;c=AGY(!b?1:b<<1);d=J(IC,c);e=d.data;f=0;c=c-1|0;while(f<a.cM.data.length){g=a.cM.data[f];a.cM.data[f]=null;while(g!==null){h=g.pQ&c;i=g.eB;g.eB=e[h];e[h]=g;g=i;}f=f+1|0;}a.cM=d;RH(a);}
function Wm(a){ALB(a,a.cM.data.length);}
function Q2(a,b){var c;c=AEj(a,b);if(c===null)return null;return c.e3;}
function AEj(a,b){var c,d,e,f,g;a:{c=0;d=null;if(b===null){e=a.cM.data[0];while(e!==null){if(e.gd===null)break a;f=e.eB;d=e;e=f;}}else{g=b.fi();c=g&(a.cM.data.length-1|0);e=a.cM.data[c];while(e!==null&&!(e.pQ==g&&AI3(b,e.gd))){f=e.eB;d=e;e=f;}}}if(e===null)return null;if(d!==null)d.eB=e.eB;else a.cM.data[c]=e.eB;a.g5=a.g5+1|0;a.f7=a.f7-1|0;return e;}
function A4J(a){return a.f7;}
function Ip(a){var b;if(a.wZ===null){b=new PG;b.v8=a;a.wZ=b;}return a.wZ;}
function AI3(b,c){return b!==c&&!b.ek(c)?0:1;}
function AKb(){F4.call(this);}
function YR(){D.call(this);}
function Bf3(){var a=new YR();A0l(a);return a;}
function A0l(a){return;}
function A3G(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gk=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IS=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaG(callback);return thread.suspend(function(){try{Bcs(b,callback);}catch($e){callback.IS($rt_exception($e));}});}
function Bcs(b,c){var d,e;d=typeof indexedDB!=='undefined'?indexedDB:null;if(d===null){CM(c,SL(0,0,B(198),null));return;}e=d.open($rt_ustr(b),1);b=new TC;b.AG=c;b=Cu(b,"handleEvent");e.onBlocked=b;b=new TB;b.Em=c;b.EG=e;b=Cu(b,"handleEvent");e.onsuccess=b;b=new TA;b.Ds=c;b=Cu(b,"handleEvent");e.onerror=b;b=new Tz;b.Bi=e;b=Cu(b,"handleEvent");e.onupgradeneeded=b;}
function A5w(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gk=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IS=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaG(callback);return thread.suspend(function(){try{A_0(b,c,callback);}catch($e){callback.IS($rt_exception($e));}});}
function A_0(b,c,d){var e;b=b.transaction("filesystem","readwrite").objectStore("filesystem");c=PO($rt_ustr(c));e=b.delete(c);b=new Ty;b.CE=d;b=Cu(b,"handleEvent");e.onsuccess=b;b=new Tv;b.C_=d;b=Cu(b,"handleEvent");e.onerror=b;}
function A_K(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gk=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IS=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaG(callback);return thread.suspend(function(){try{Ba9(b,c,callback);}catch($e){callback.IS($rt_exception($e));}});}
function Ba9(b,c,d){var e;b=b.transaction("filesystem","readonly").objectStore("filesystem");c=PO($rt_ustr(c));e=b.get(c);b=new Tu;b.Al=d;b.w6=e;b=Cu(b,"handleEvent");e.onsuccess=b;b=new Tt;b.Ec=d;b=Cu(b,"handleEvent");e.onerror=b;}
function A5r(b,c,d,e,f){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gk=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IS=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaG(callback);return thread.suspend(function(){try{Bb3(b,c,d,e,f,callback);}
catch($e){callback.IS($rt_exception($e));}});}
function Bb3(b,c,d,e,f,g){var h,i;h=(b.transaction("filesystem","readonly").objectStore("filesystem")).openCursor();i=$rt_createIntArray(1);b=new Rh;b.EJ=h;b.Ej=g;b.yT=i;b.vz=c;b.Be=e;b.C3=d;b.xa=f;b=Cu(b,"handleEvent");h.onsuccess=b;b=new Ri;b.DJ=g;b.wE=i;b=Cu(b,"handleEvent");h.onerror=b;}
function AUq(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gk=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IS=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaG(callback);return thread.suspend(function(){try{BcZ(b,c,callback);}catch($e){callback.IS($rt_exception($e));}});}
function BcZ(b,c,d){var e;b=b.transaction("filesystem","readonly").objectStore("filesystem");c=PO($rt_ustr(c));e=b.get(c);b=new Re;b.CM=d;b.u3=e;b=Cu(b,"handleEvent");e.onsuccess=b;b=new Rf;b.Eb=d;b=Cu(b,"handleEvent");e.onerror=b;}
function AXO(b,c,d,e){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gk=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IS=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaG(callback);return thread.suspend(function(){try{Bbe(b,c,d,e,callback);}catch($e)
{callback.IS($rt_exception($e));}});}
function Bbe(b,c,d,e,f){var g,h;b=b.transaction("filesystem","readwrite").objectStore("filesystem");g=Long_sub(B$(),new Long(596067632, 383)).lo;c=A5O($rt_ustr(c),!!d,g,e);h=b.put(c);c=new Rg;c.Bq=f;b=Cu(c,"handleEvent");h.onsuccess=b;b=new Rj;b.BJ=f;b=Cu(b,"handleEvent");h.onerror=b;}
function A8x(b){return typeof b==='undefined'?null:typeof b.data==='undefined'?null:b.data;}
function Ur(b){return typeof b==='undefined'?false:typeof b.directory==='undefined'?false:b.directory;}
function A0H(b){return typeof b==='undefined'? -1:typeof b.lastModified==='undefined'? -1:b.lastModified;}
function PO(b){return [b];}
function AZR(b){return typeof b==="string"?b:typeof b==="undefined"?null:typeof b[0]==="string"?b[0]:null;}
function A5O(b,c,d,e){return {path:b,directory:c,lastModified:d,data:e};}
function AE1(){var a=this;D.call(a);a.E_=0;a.EY=0;a.uu=null;a.xL=null;}
function SL(a,b,c,d){var e=new AE1();AXm(e,a,b,c,d);return e;}
function AXm(a,b,c,d,e){a.E_=b;a.EY=c;a.uu=d;a.xL=e;}
function EX(){var a=this;D.call(a);a.Hv=null;a.s8=0;}
function Bf4(a,b){var c=new EX();FO(c,a,b);return c;}
function FO(a,b,c){a.Hv=b;a.s8=c;}
function A0I(a){return a.s8;}
function ATr(a,b){return a!==b?0:1;}
function AX1(a){return MI(a);}
function JQ(a){var b;b=Dl(a);if(!QY(JE(b),F(EX)))b=JE(b);return b;}
function XH(a,b){var c,d;if(JQ(b)===JQ(a))return R(a.s8,b.s8);c=new Cb;d=new U;X(d);Bl(c,V(I(I(I(I(d,B(199)),IA(JQ(a))),B(200)),IA(JQ(b)))));M(c);}
function AXy(a,b){return XH(a,b);}
function E8(){EX.call(this);}
var BfE=null;var BfD=null;var BfC=null;var Bf5=null;function AHh(){var b,c,d;b=new E8;FO(b,B(201),0);BfE=b;b=new E8;FO(b,B(202),1);BfD=b;b=new E8;FO(b,B(203),2);BfC=b;c=J(E8,3);d=c.data;d[0]=BfE;d[1]=BfD;d[2]=BfC;Bf5=c;}
function Qm(){}
function U3(){D.call(this);this.yu=null;}
function BaG(b){var c;c=new U3;c.yu=b;return c;}
function CM(a,b){a.yu.Gk(b);}
function A16(a,b){a.yu.IS(b);}
function AQE(){D.call(this);}
function Xl(){}
function W2(){var a=this;D.call(a);a.vh=null;a.z5=null;}
function ARe(a){var b,c,d;if(a.vh.readyState==4){b=new Uint8Array(a.vh.response);c=$rt_createByteArray(b.byteLength);Bd();BdK=c;d=0;while(d<V2().data.length){V2().data[d]=b[d]<<24>>24;d=d+1|0;}CM(a.z5,B(204));}}
function A1Y(a){ARe(a);}
function HX(){D.call(this);}
function AQd(){var a=this;HX.call(a);a.wX=null;a.kg=0;a.F3=0;a.qH=0;}
function Uf(a){var b=new AQd();AT0(b,a);return b;}
function AT0(a,b){var c;c=b.data.length;a.wX=b;a.kg=0;a.F3=0;a.qH=0+c|0;}
function A4G(a){var b,c,d;if(a.kg>=a.qH)b=(-1);else{c=a.wX.data;d=a.kg;a.kg=d+1|0;b=c[d]&255;}return b;}
function A_k(a,b,c,d){var e,f,g,h,i;e=CB(d,a.qH-a.kg|0);f=0;while(f<e){g=b.data;d=c+1|0;h=a.wX.data;i=a.kg;a.kg=i+1|0;g[c]=h[i];f=f+1|0;c=d;}if(e<=0)e=(-1);return e;}
function A5s(a){return a.qH-a.kg|0;}
function IP(){HX.call(this);this.kk=null;}
function Bf6(a){var b=new IP();R0(b,a);return b;}
function R0(a,b){a.kk=b;}
function AKz(a){return a.kk.wO();}
function Pg(){}
function PV(){IP.call(this);this.d8=null;}
function OT(a){var b=new PV();AIu(b,a);return b;}
function AIu(a,b){R0(a,b);a.d8=$rt_createByteArray(8);}
function NK(a,b){var c;c=b.data;return a.kk.n9(b,0,c.length);}
function NU(a){var b,c;b=a.kk.Co();if(b>=0)return b<<24>>24;c=new FD;O(c);M(c);}
function J6(a,b){var c,d;c=0;while(c<b){d=a.kk.n9(a.d8,c,b-c|0);if(d==(-1))return d;c=c+d|0;}return c;}
function APi(a){return $rt_longBitsToDouble(Tc(a));}
function AAY(a){return $rt_intBitsToFloat(H3(a));}
function AMR(a,b){QK(a,b,0,b.data.length);}
function QK(a,b,c,d){var e,f;if(d<0){e=new BO;O(e);M(e);}if(!d)return;if(a.kk===null){e=new ED;O(e);M(e);}if(b===null){e=new ED;O(e);M(e);}if(c>=0&&c<=(b.data.length-d|0)){while(d>0){f=a.kk.n9(b,c,d);if(f<0){e=new FD;O(e);M(e);}c=c+f|0;d=d-f|0;}return;}e=new BO;O(e);M(e);}
function H3(a){var b;if(J6(a,4)<0){b=new FD;O(b);M(b);}return (a.d8.data[0]&255)<<24|(a.d8.data[1]&255)<<16|(a.d8.data[2]&255)<<8|a.d8.data[3]&255;}
function Tc(a){var b;if(J6(a,8)<0){b=new FD;O(b);M(b);}return Long_or(Long_shl(Long_and(Long_fromInt((a.d8.data[0]&255)<<24|(a.d8.data[1]&255)<<16|(a.d8.data[2]&255)<<8|a.d8.data[3]&255),new Long(4294967295, 0)),32),Long_and(Long_fromInt((a.d8.data[4]&255)<<24|(a.d8.data[5]&255)<<16|(a.d8.data[6]&255)<<8|a.d8.data[7]&255),new Long(4294967295, 0)));}
function XG(a){var b;if(J6(a,2)<0){b=new FD;O(b);M(b);}return ((a.d8.data[0]&255)<<24>>16|a.d8.data[1]&255)<<16>>16;}
function APD(a){var b;if(J6(a,2)<0){b=new FD;O(b);M(b);}return ((a.d8.data[0]&255)<<8|a.d8.data[1]&255)&65535;}
function GT(a){return ALx(a,APD(a));}
function ALx(a,b){var c,d;c=$rt_createByteArray(b);d=$rt_createCharArray(b);QK(a,c,0,b);return AWZ(c,d,0,b);}
function AWZ(b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=0;g=0;a:{while(f<e){h=b.data;i=c.data;j=f+1|0;k=h[d+f|0]&65535;i[g]=k;l=i[g];if(k<128)g=g+1|0;else if((l&224)==192){if(j>=e){m=new Hs;Bl(m,B(205));M(m);}k=j+1|0;j=h[d+j|0];if((j&192)!=128){m=new Hs;Bl(m,B(206));M(m);}n=g+1|0;i[g]=((l&31)<<6|j&63)&65535;g=n;j=k;}else{if((l&240)!=224){m=new Hs;Bl(m,B(206));M(m);}f=j+1|0;if(f>=e){m=new Hs;Bl(m,B(206));M(m);}n=h[d+j|0];j=f+1|0;o=h[d+f|0];if((n&192)!=128)break a;if((o&192)!=128)break a;f=g+1|0;i[g]=((l&15)<<12|(n&63)
<<6|o&63)&65535;g=f;}f=j;}return Li(c,0,g);}m=new Hs;Bl(m,B(206));M(m);}
function MQ(){var a=this;D.call(a);a.wl=null;a.HZ=null;}
function RU(b){var c,d;if(Iv(b))M(ALn(b));if(!APP(Y(b,0)))M(ALn(b));c=1;while(c<Bh(b)){a:{d=Y(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(APP(d))break a;else M(ALn(b));}}c=c+1|0;}}
function APP(b){return !(b>=48&&b<=57)&&!(b>=97&&b<=122)&&b<65&&b>90?0:1;}
function X2(b){var c;if(b===null){b=new Cb;Bl(b,B(207));M(b);}RU(b);c=CP(Bf7,AOg(b));if(c!==null)return c;c=new U$;O(c);c.Ip=b;M(c);}
function AN0(a,b){var c,d,$$je;a:{try{b=AJJ(ADG(AQ1(AFv(a),Bf8),Bf8),b);}catch($$e){$$je=Bi($$e);if($$je instanceof GX){c=$$je;break a;}else{throw $$e;}}return b;}d=new WX;d.on=1;d.rK=1;d.vr=B(208);d.jy=c;M(d);}
function ABt(a,b){return AJB(a.wl,b.wl);}
function A6w(a,b){return ABt(a,b);}
function WL(){var a=this;IP.call(a);a.gZ=null;a.og=null;a.qd=0;a.oG=0;a.Ew=0;a.D_=0;a.wx=null;a.GT=null;}
function ASY(a){var b;if(a.qd){b=new B1;Bl(b,B(209));M(b);}return ALV(a,a.wx,0,1)==(-1)?(-1):a.wx.data[0]&255;}
function ALV(a,b,c,d){var e,f,g;if(a.qd){e=new B1;Bl(e,B(209));M(e);}if(b===null){e=new ED;O(e);M(e);}if(c>=0&&d>=0&&d<=(b.data.length-c|0)){if(!d)return 0;if(a.oG)return (-1);f=0;AAE(a.gZ,b,c,d);a:{while(!a.oG){if(!a.gZ.N)ABf(a);b:{g=AF4(a.gZ,0);f=f+(a.gZ.pK-c|0)|0;c=a.gZ.pK;switch(g){case -3:e=new B1;Bl(e,a.gZ.b6);M(e);case 1:case 2:break;default:break b;}a.oG=1;if(g==2)return (-1);}if(!a.gZ.ia)break a;}}return f;}e=new BO;O(e);M(e);}
function A0k(a){var b;if(!a.qd){if(!a.oG)return 1;return 0;}b=new B1;Bl(b,B(209));M(b);}
function ABf(a){var b,c;if(a.qd){b=new B1;Bl(b,B(209));M(b);}a:{c=a.kk.n9(a.og,0,a.og.data.length);if(c==(-1)){if(a.gZ.js.dW)break a;if(Ye(a.gZ))break a;a.og.data[0]=0;c=1;}AJ7(a.gZ,a.og,0,c,1);return;}if(Long_ne(a.gZ.js.rM,Long_fromInt(-1))){b=new B1;Bl(b,B(210));M(b);}b=new FD;Bl(b,B(211));M(b);}
function M5(){var a=this;D.call(a);a.h7=null;a.jp=0;a.nh=Long_ZERO;}
function I8(a,b){var c,d;c=a.h7.data;d=a.jp;a.jp=d+1|0;c[d]=b;if(a.jp==a.h7.data.length){S0(a,a.h7,0);a.jp=0;}a.nh=Long_add(a.nh,Long_fromInt(1));}
function ADR(a,b,c,d){a:{while(a.jp){if(d<=0)break a;I8(a,b.data[c]);c=c+1|0;d=d+(-1)|0;}}while(d>a.h7.data.length){S0(a,b,c);c=c+a.h7.data.length|0;d=d-a.h7.data.length|0;a.nh=Long_add(a.nh,Long_fromInt(a.h7.data.length));}while(d>0){I8(a,b.data[c]);c=c+1|0;d=d+(-1)|0;}}
function APg(a){var b;b=Long_shl(a.nh,3);I8(a,(-128));while(a.jp){I8(a,0);}AKY(a,b);MA(a);}
function ADq(){var a=this;M5.call(a);a.pu=0;a.pv=0;a.pw=0;a.px=0;a.py=0;a.eg=null;a.mN=0;}
function BaX(){var a=new ADq();A$i(a);return a;}
function A$i(a){a.h7=$rt_createByteArray(4);a.jp=0;a.eg=$rt_createIntArray(80);OE(a);}
function S0(a,b,c){var d,e;d=b.data;b=a.eg.data;e=a.mN;a.mN=e+1|0;b[e]=(d[c]&255)<<24|(d[c+1|0]&255)<<16|(d[c+2|0]&255)<<8|d[c+3|0]&255;if(a.mN==16)MA(a);}
function HI(a,b,c,d){c=c.data;c[d]=b>>>24<<24>>24;c[d+1|0]=b>>>16<<24>>24;c[d+2|0]=b>>>8<<24>>24;c[d+3|0]=b<<24>>24;}
function AKY(a,b){if(a.mN>14)MA(a);a.eg.data[14]=b.hi;a.eg.data[15]=Long_and(b,Long_fromInt(-1)).lo;}
function AL7(a,b,c){APg(a);HI(a,a.pu,b,c);HI(a,a.pv,b,c+4|0);HI(a,a.pw,b,c+8|0);HI(a,a.px,b,c+12|0);HI(a,a.py,b,c+16|0);OE(a);return 20;}
function OE(a){var b;a.nh=Long_ZERO;a.jp=0;b=0;while(b<a.h7.data.length){a.h7.data[b]=0;b=b+1|0;}a.pu=1732584193;a.pv=(-271733879);a.pw=(-1732584194);a.px=271733878;a.py=(-1009589776);a.mN=0;b=0;while(b!=a.eg.data.length){a.eg.data[b]=0;b=b+1|0;}}
function Va(a,b,c,d){return b^c^d;}
function Ff(a,b,c){return b<<c|b>>>(32-c|0);}
function MA(a){var b,c,d,e,f,g,h,i,j;b=16;while(b<=79){a.eg.data[b]=Ff(a,a.eg.data[b-3|0]^a.eg.data[b-8|0]^a.eg.data[b-14|0]^a.eg.data[b-16|0],1);b=b+1|0;}c=a.pu;d=a.pv;e=a.pw;f=a.px;g=a.py;h=0;while(h<=19){i=(((Ff(a,c,5)+(d&e|(d^(-1))&f)|0)+g|0)+a.eg.data[h]|0)+1518500249|0;b=Ff(a,d,30);h=h+1|0;g=f;f=e;e=b;d=c;c=i;}j=20;while(j<=39){i=(((Ff(a,c,5)+Va(a,d,e,f)|0)+g|0)+a.eg.data[j]|0)+1859775393|0;b=Ff(a,d,30);j=j+1|0;g=f;f=e;e=b;d=c;c=i;}h=40;while(h<=59){i=(((Ff(a,c,5)+(d&e|d&f|e&f)|0)+g|0)+a.eg.data[h]|0)
+(-1894007588)|0;b=Ff(a,d,30);h=h+1|0;g=f;f=e;e=b;d=c;c=i;}j=60;while(j<=79){i=(((Ff(a,c,5)+Va(a,d,e,f)|0)+g|0)+a.eg.data[j]|0)+(-899497514)|0;b=Ff(a,d,30);j=j+1|0;g=f;f=e;e=b;d=c;c=i;}a.pu=a.pu+c|0;a.pv=a.pv+d|0;a.pw=a.pw+e|0;a.px=a.px+f|0;a.py=a.py+g|0;a.mN=0;b=0;while(b!=a.eg.data.length){a.eg.data[b]=0;b=b+1|0;}}
function AI_(){D.call(this);}
function Bf9(){var a=new AI_();A57(a);return a;}
function A57(a){return;}
function O1(b,c){var d,e,f,g;b=b.data;d=$rt_createCharArray(c);e=d.data;f=CB(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Ob(b,c){var d,e,f,g;b=b.data;d=$rt_createByteArray(c);e=d.data;f=CB(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Nm(b,c){var d,e,f,g;d=b.data;e=AEG(Kv(Dl(b)),c);f=CB(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function MW(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new Cb;O(f);M(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function ZB(b,c,d,e){var f,g;if(c>d){e=new Cb;O(e);M(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function PT(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;e=J(D,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=CB(j,h+f|0);l=h+(2*f|0)|0;m=CB(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.qa(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f=f*2|0;i=g;g=e;e
=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AOq(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length;if(d>e){f=new Cb;O(f);M(f);}g=e-1|0;a:{while(true){e=(d+g|0)/2|0;h=b[e];if(h==c)break;if(c>=h){d=e+1|0;if(d>g){e= -e-2|0;break a;}}else{g=e-1|0;if(g<d){e= -e-1|0;break a;}}}}return e;}
function I7(){var a=this;D.call(a);a.C8=0;a.B0=null;a.w_=null;}
function Bf$(a,b,c){var d=new I7();RC(d,a,b,c);return d;}
function RC(a,b,c,d){a.C8=b;a.B0=c;a.w_=d;}
function ABx(a,b){var c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(Yp(b,a.B0)<a.C8){c=0;d=null;if(c<10){e=1;f=b.bi;$p=1;continue _;}}return;case 1:AOv(a,b,e,f,d);if(C()){break _;}c=c+1|0;if(c>=10)return;e=1;f=b.bi;continue _;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function A5c(a,b,c,d){return CO((c+E(b.q,256)|0)-128|0,E(b.q,128),(d+E(b.q,256)|0)-128|0);}
function AOv(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=K(d.d);h=K(d.e);i=E(b.q,a.w_.data.length);j=a.Ah(b,g,h);k=j.eC;l=j.eX;m=j.eD;$p=1;case 1:$z
=AAz(b,k,l,m);if(C()){break _;}c=$z;if(c)return 0;$p=2;case 2:$z=ABX(b,k,l,m);if(C()){break _;}e=$z;if(e!==Bf_)return 0;n=0;while(n<3){o=6;p=0;h=k;q=l;r=m;if(p<3){h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;}return f;case 3:$z=AAz(b,h,c,r);if(C()){break _;}c=$z;if(c){$p=4;continue _;}p=p+1|0;while(true){if(p<3){h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;continue _;}n=n+1|0;if(n>=3)break;o
=6;p=0;h=k;q=l;r=m;}return f;case 4:$z=AAz(b,h,q,r);if(C()){break _;}c=$z;if(!c){$p=5;continue _;}p=p+1|0;while(true){if(p<3){h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 5:$z=ABX(b,h,q,r);if(C()){break _;}e=$z;if(!e.nz()){c=q+1|0;$p=6;continue _;}p=p+1|0;while(true){if(p<3){h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|
0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 6:a:{$z=AAz(b,h,c,r);if(C()){break _;}c=$z;if(!c){b:{s=h+0.5;t=q+1.0;u=r+0.5;if(d===null){v=s-b.fh;w=t-b.pU;x=u-b.fg;if(v*v+w*w+x*x>=1024.0)break b;break a;}y=s-d.d;z=t-d.j;ba=u-d.e;if(y*y+z*z+ba*ba<1024.0)break a;}c:{try{e=a.w_.data[i];bb=J(FN,1);bb.data[0]=F(GF);e=Wx(e,bb);bb=J(D,1);bb.data[0]=b;bc=WA(e,bb);break c;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){}else{throw $$e;}}return f;}y=s;z=t;ba=u;Kr(bc,y,z,ba,N(b.q)*360.0,0.0);$p=7;continue _;}}p=p+
1|0;while(true){if(p<3){h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 7:$z=bc.uK(y,z,ba);if(C()){break _;}c=$z;if(c){f=f+1|0;$p=8;continue _;}p=p+1|0;while(true){if(p<3){h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 8:AOf(b,bc);if(C()){break _;}p=p+1|0;while(true){if(p<3)
{h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,$p);}
function US(){I7.call(this);this.Gs=null;}
function A1W(a,b,c,d){return CO((c+E(b.q,256)|0)-128|0,E(b.q,E(b.q,E(b.q,112)+8|0)+8|0),(d+E(b.q,256)|0)-128|0);}
function C5(){var a=this;D.call(a);a.mw=0;a.bH=null;a.bB=null;a.l=null;a.bR=0.0;a.cQ=0.0;a.bQ=0.0;a.d=0.0;a.j=0.0;a.e=0.0;a.g=0.0;a.i=0.0;a.h=0.0;a.t=0.0;a.I=0.0;a.P=0.0;a.T=0.0;a.L=null;a.cu=0;a.jS=0;a.xY=0;a.ld=0;a.cP=0;a.c2=0.0;a.cZ=0.0;a.eL=0.0;a.tS=0.0;a.g9=0.0;a.i4=0;a.fF=0.0;a.ra=0;a.co=0.0;a.b5=0.0;a.cp=0.0;a.eh=0.0;a.rl=0.0;a.o2=0;a.n2=0.0;a.IZ=0;a.m=null;a.oO=0;a.nE=0;a.cT=0;a.n3=0;a.ti=0;a.dv=0;a.ga=0;a.ox=0;a.tE=null;a.g2=0.0;a.gT=0.0;}
function Bga(a){var b=new C5();Fy(b,a);return b;}
function Fy(a,b){a.mw=0;a.L=No(0.0,0.0,0.0,0.0,0.0,0.0);a.cu=0;a.jS=0;a.xY=0;a.ld=1;a.cP=0;a.c2=0.0;a.cZ=0.6000000238418579;a.eL=1.7999999523162842;a.tS=0.0;a.g9=0.0;a.i4=1;a.fF=0.0;a.ra=1;a.eh=0.0;a.rl=0.0;a.o2=0;a.n2=0.0;a.IZ=0;a.m=new Dz;a.oO=0;a.nE=1;a.cT=0;a.n3=300;a.ti=0;a.dv=0;a.ga=300;a.ox=1;a.l=b;CT(a,0.0,0.0,0.0);}
function Ca(a){a.cP=1;}
function DZ(a,b,c){a.cZ=b;a.eL=c;}
function WN(a,b,c){a.t=b;a.I=c;}
function CT(a,b,c,d){var e,f,g,h,i,j;a.d=b;a.j=c;a.e=d;e=a.cZ/2.0;f=a.eL/2.0;g=a.L;h=e;i=b-h;j=f;M1(g,i,c-j,d-h,b+h,c+j,d+h);}
function AI7(a){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.I$();if(C()){break _;}return;default:E$();}}C3().s(a,$p);}
function AET(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bB!==null&&a.bB.cP)a.bB=null;a.oO=a.oO+1|0;a.tS=a.g9;a.bR=a.d;a.cQ=a.j;a.bQ=a.e;a.T=a.I;a.P=a.t;$p=1;case 1:$z=a.HE();if(C()){break _;}b=$z;if(!b)a.ti=0;else{a:{if(!a.ti&&!a.ox){c=Ce(a.g*a.g*0.20000000298023224+a.i*a.i+a.h*a.h*0.20000000298023224)*0.20000000298023224;if(c>1.0)c=1.0;Dh(a.l,a,B(212),c,1.0+(N(a.m)-N(a.m))*0.4000000059604645);d
=K(a.L.M);b=0;e=d+1.0;while(b<1.0+a.cZ*20.0){f=(N(a.m)*2.0-1.0)*a.cZ;g=(N(a.m)*2.0-1.0)*a.cZ;BW(a.l,B(213),a.d+f,e,a.e+g,a.g,a.i-N(a.m)*0.20000000298023224,a.h);b=b+1|0;}b=0;while(true){if(b>=1.0+a.cZ*20.0)break a;f=(N(a.m)*2.0-1.0)*a.cZ;g=(N(a.m)*2.0-1.0)*a.cZ;BW(a.l,B(214),a.d+f,e,a.e+g,a.g,a.i,a.h);b=b+1|0;}}}a.fF=0.0;a.ti=1;a.cT=0;}if(a.cT>0){if(!(a.cT%20|0)){h=null;b=1;$p=4;continue _;}a.cT=a.cT-1|0;}$p=2;case 2:$z=ACk(a);if(C()){break _;}b=$z;if(b){h=null;b=10;$p=3;continue _;}if(a.j>=(-64.0)){a.ox=0;return;}$p
=5;continue _;case 3:a.fp(h,b);if(C()){break _;}a.cT=600;if(a.j>=(-64.0)){a.ox=0;return;}$p=5;continue _;case 4:a.fp(h,b);if(C()){break _;}a.cT=a.cT-1|0;$p=2;continue _;case 5:a.DL();if(C()){break _;}a.ox=0;return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function XX(a){Ca(a);}
function AHe(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=T7(a.L,b,c,d);f=a.l;$p=1;case 1:$z=XQ(f,a,e);if(C()){break _;}f=$z;if(f.o>0)return 0;f=a.l;$p=2;case 2:$z=AJh(f,e);if(C()){break _;}g=$z;return g?0:1;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ARD(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.o2){FW(a.L,b,c,d);a.d=(a.L.R+a.L.V)/2.0;a.j=a.L.M+a.c2-a.eh;a.e=(a.L.S+a.L.W)/2.0;return;}e=a.d;f=a.e;g=P$(a.L);h=a.l;i=I_(a.L,b,c,d);$p=1;case 1:$z
=XQ(h,a,i);if(C()){break _;}j=$z;k=0;l=c;while(k<De(j)){l=V6(Z(j,k),a.L,l);k=k+1|0;}FW(a.L,0.0,l,0.0);if(a.ld){m=d;n=b;}else if(c===l){m=d;n=b;}else{n=0.0;m=n;l=n;}a:{b:{if(!a.cu){if(c===l)break b;if(c>=0.0)break b;}o=1;break a;}o=0;}p=0;while(p<De(j)){n=Qp(Z(j,p),a.L,n);p=p+1|0;}FW(a.L,n,0.0,0.0);if(!a.ld&&b!==n){n=0.0;m=n;l=n;}k=0;while(k<De(j)){m=T$(Z(j,k),a.L,m);k=k+1|0;}FW(a.L,0.0,0.0,m);if(!a.ld&&d!==m){n=0.0;m=n;l=n;}c:{if(a.rl<=0.0){q=n;r=l;s=m;}else if(!o){q=n;r=l;s=m;}else if(a.eh>=0.05000000074505806)
{q=n;r=l;s=m;}else{if(b!==n)break c;if(d!==m)break c;q=n;r=l;s=m;}a.d=(a.L.R+a.L.V)/2.0;a.j=a.L.M+a.c2-a.eh;a.e=(a.L.S+a.L.W)/2.0;t=R(b,q);a.jS=!t&&d===s?0:1;k=R(c,r);a.cu=k&&c<0.0?1:0;a.xY=!a.jS&&!k?0:1;if(!a.cu){if(r<0.0)a.fF=a.fF-r;}else if(a.fF>0.0){u=a.fF;$p=3;continue _;}if(t)a.g=0.0;if(k)a.i=0.0;if(d!==s)a.h=0.0;l=a.d-e;m=a.e-f;a.g9=a.g9+Ce(l*l+m*m)*0.6;if(!a.i4){a.eh=a.eh*0.4000000059604645;$p=4;continue _;}v=K(a.d);w=K(a.j-0.20000000298023224-a.c2);x=K(a.e);i=a.l;$p=6;continue _;}r=a.rl;i=P$(a.L);Xa(a.L,
g);h=a.l;g=I_(a.L,b,r,d);$p=2;case 2:$z=XQ(h,a,g);if(C()){break _;}h=$z;y=0;while(y<De(h)){r=V6(Z(h,y),a.L,r);y=y+1|0;}FW(a.L,0.0,r,0.0);if(a.ld){s=d;q=b;}else if(c===r){s=d;q=b;}else{q=0.0;s=q;r=q;}k=0;while(k<De(h)){q=Qp(Z(h,k),a.L,q);k=k+1|0;}FW(a.L,q,0.0,0.0);if(!a.ld&&b!==q){q=0.0;s=q;r=q;}t=0;while(t<De(h)){s=T$(Z(h,t),a.L,s);t=t+1|0;}FW(a.L,0.0,0.0,s);if(!a.ld&&d!==s){q=0.0;s=q;r=q;}if(n*n+m*m>=q*q+s*s){Xa(a.L,i);q=n;r=l;s=m;}else a.eh=a.eh+0.5;a.d=(a.L.R+a.L.V)/2.0;a.j=a.L.M+a.c2-a.eh;a.e=(a.L.S+a.L.W)
/2.0;t=R(b,q);a.jS=!t&&d===s?0:1;k=R(c,r);a.cu=k&&c<0.0?1:0;a.xY=!a.jS&&!k?0:1;if(!a.cu){if(r<0.0)a.fF=a.fF-r;}else if(a.fF>0.0){u=a.fF;$p=3;continue _;}if(t)a.g=0.0;if(k)a.i=0.0;if(d!==s)a.h=0.0;l=a.d-e;m=a.e-f;a.g9=a.g9+Ce(l*l+m*m)*0.6;if(!a.i4){a.eh=a.eh*0.4000000059604645;$p=4;continue _;}v=K(a.d);w=K(a.j-0.20000000298023224-a.c2);x=K(a.e);i=a.l;$p=6;continue _;case 3:a.Dz(u);if(C()){break _;}a.fF=0.0;if(t)a.g=0.0;if(k)a.i=0.0;if(d!==s)a.h=0.0;l=a.d-e;m=a.e-f;a.g9=a.g9+Ce(l*l+m*m)*0.6;if(!a.i4){a.eh=a.eh
*0.4000000059604645;$p=4;continue _;}v=K(a.d);w=K(a.j-0.20000000298023224-a.c2);x=K(a.e);i=a.l;$p=6;continue _;case 4:$z=a.HE();if(C()){break _;}t=$z;i=a.l;h=a.L;$p=5;case 5:$z=AQ$(i,h);if(C()){break _;}k=$z;if(!k){if(a.cT<=0)a.cT= -a.nE;if(t&&a.cT>0){Dh(a.l,a,B(215),0.699999988079071,1.600000023841858+(N(a.m)-N(a.m))*0.4000000059604645);a.cT= -a.nE;}return;}k=1;$p=7;continue _;case 6:$z=ACt(i,v,w,x);if(C()){break _;}y=$z;if(a.g9>a.ra&&y>0){a.ra=a.ra+1|0;L();h=BeP.data[y].gG;if(!BeP.data[y].b8.nz())Dh(a.l,a,
Ke(h),AMK(h)*0.15000000596046448,Yc(h));i=BeP.data[y];h=a.l;$p=8;continue _;}a.eh=a.eh*0.4000000059604645;$p=4;continue _;case 7:a.FQ(k);if(C()){break _;}if(!t){a.cT=a.cT+1|0;if(!a.cT)a.cT=300;}if(t&&a.cT>0){Dh(a.l,a,B(215),0.699999988079071,1.600000023841858+(N(a.m)-N(a.m))*0.4000000059604645);a.cT= -a.nE;}return;case 8:i.oF(h,v,w,x,a);if(C()){break _;}a.eh=a.eh*0.4000000059604645;$p=4;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$p);}
function A1K(a){return null;}
function AJ3(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=null;$p=1;case 1:a.fp(c,b);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,$p);}
function Zg(a,b){return;}
function AE6(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.l;c=Dv(a.L,0.0,(-0.4000000059604645),0.0);d=BfQ;$p=1;case 1:$z=AAq(b,c,d,a);if(C()){break _;}e=$z;return e;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AGG(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.j+a.rD();d=K(a.d);e=K2(K(c));f=K(a.e);g=a.l;$p=1;case 1:$z=ACt(g,d,e,f);if(C()){break _;}h=$z;if(h){L();if(BeP.data[h].b8===b){b=a.l;$p=2;continue _;}}return 0;case 2:$z=AEI(b,d,e,f);if(C()){break _;}d=$z;return c>=(e+1|0)-(Jr(d)-0.1111111119389534)?0:1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ACk(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.l;c=Dv(a.L,0.0,(-0.4000000059604645),0.0);d=BfR;$p=1;case 1:$z=AOr(b,c,d);if(C()){break _;}e=$z;return e;default:E$();}}C3().s(a,b,c,d,e,$p);}
function L2(a,b,c,d){var e,f,g;e=D$(b*b+c*c);if(e>=0.009999999776482582){if(e<1.0)e=1.0;d=d/e;b=b*d;c=c*d;f=Bq(a.t*3.1415927410125732/180.0);g=BC(a.t*3.1415927410125732/180.0);a.g=a.g+b*g-c*f;a.h=a.h+c*g+b*f;}}
function ADF(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(a.d);d=(a.L.U-a.L.M)*0.66;e=K(a.j-a.c2+d);f=K(a.e);g=a.l;$p=1;case 1:$z=ANf(g,c,e,f);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AUz(a,b){a.l=b;}
function Kr(a,b,c,d,e,f){a.d=b;a.bR=b;b=c+a.c2;a.j=b;a.cQ=b;a.e=d;a.bQ=d;a.t=e;a.I=f;CT(a,a.d,a.j,a.e);}
function AR2(a,b){var c,d,e;c=a.d-b.d;d=a.j-b.j;e=a.e-b.e;return D$(c*c+d*d+e*e);}
function AGL(a,b,c,d){var e,f,g;e=a.d-b;f=a.j-c;g=a.e-d;return e*e+f*f+g*g;}
function Se(a,b,c,d){var e,f,g;e=a.d-b;f=a.j-c;g=a.e-d;return Ce(e*e+f*f+g*g);}
function LC(a,b){var c,d,e;c=a.d-b.d;d=a.j-b.j;e=a.e-b.e;return c*c+d*d+e*e;}
function A6T(a,b){return;}
function A5D(a,b){var c,d,e,f,g;c=b.d-a.d;d=b.e-a.e;e=c<0.0? -c:c;f=d<0.0? -d:d;if(e>f)f=e;if(f>=0.009999999776482582){e=Ce(f);c=c/e;f=d/e;g=1.0/e;if(g>1.0)g=1.0;c=c*g;e=f*g;c=c*0.05000000074505806;e=e*0.05000000074505806;c=c*(1.0-a.n2);e=e*(1.0-a.n2);Hn(a, -c,0.0, -e);Hn(b,c,0.0,e);}}
function Hn(a,b,c,d){a.g=a.g+b;a.i=a.i+c;a.h=a.h+d;}
function AJF(a,b,c){return 0;}
function A9L(a){return 0;}
function A7W(a){return 0;}
function A_j(a,b,c){return;}
function R$(a,b){var c,d,e;c=a.d-b.w;d=a.j-b.y;e=a.e-b.v;return AHd(a,c*c+d*d+e*e);}
function AHd(a,b){var c;c=APU(a.L)*64.0;return b>=c*c?0:1;}
function ALs(a,b){var c,d;c=$rt_createDoubleArray(3);d=c.data;d[0]=a.d;d[1]=a.j;d[2]=a.e;HC(b,B(216),V4(a,c));c=$rt_createDoubleArray(3);d=c.data;d[0]=a.g;d[1]=a.i;d[2]=a.h;HC(b,B(217),V4(a,c));c=$rt_createFloatArray(2);d=c.data;d[0]=a.t;d[1]=a.I;HC(b,B(218),AMx(a,c));AR5(b,B(219),a.fF);Fp(b,B(220),a.cT<<16>>16);Fp(b,B(221),a.ga<<16>>16);ST(b,B(222),a.cu);ABL(a,b);}
function YP(a,b){var c,d,e,f,g;c=Kf(b,B(216));d=Kf(b,B(217));e=Kf(b,B(218));CT(a,0.0,0.0,0.0);a.g=Fc(d,0).iF;a.i=Fc(d,1).iF;a.h=Fc(d,2).iF;f=Fc(c,0).iF;a.d=f;a.co=f;a.bR=f;f=Fc(c,1).iF;a.j=f;a.b5=f;a.cQ=f;f=Fc(c,2).iF;a.e=f;a.cp=f;a.bQ=f;g=Fc(e,0).ng;a.t=g;a.P=g;g=Fc(e,1).ng;a.I=g;a.T=g;a.fF=AMD(b,B(219));a.cT=FH(b,B(220));a.ga=FH(b,B(221));a.cu=Ul(b,B(222));CT(a,a.d,a.j,a.e);AOU(a,b);}
function V4(a,b){var c,d,e,f,g;b=b.data;c=L8();d=b.length;e=0;while(e<d){f=b[e];g=new Mm;Cw(g);g.iF=f;Jm(c,g);e=e+1|0;}return c;}
function AMx(a,b){var c,d,e;b=b.data;c=L8();d=b.length;e=0;while(e<d){Jm(c,A6R(b[e]));e=e+1|0;}return c;}
function ABQ(a,b,c){var d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0.0;$p=1;case 1:$z=AGF(a,b,c,d);if(C()){break _;}e=$z;return e;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AGF(a,b,c,d){var e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=Ha(a.l,a.d,a.j+d,a.e,Kx(b,c));e.g8=10;f=a.l;$p=1;case 1:AOf(f,e);if(C()){break _;}return e;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AHy(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=K(a.d);c=K(a.j+a.rD());d=K(a.e);e=a.l;$p=1;case 1:$z=AAz(e,b,c,d);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AWH(a,b){return 0;}
function AWY(a,b){return null;}
function AFc(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bB.cP){a.bB=null;return;}a.g=0.0;a.i=0.0;a.h=0.0;$p=1;case 1:a.el();if(C()){break _;}CT(a,a.bB.d,a.bB.j+a.c2+a.bB.z8(),a.bB.e);a.gT=a.gT+a.bB.t-a.bB.P;a.g2=a.g2+a.bB.I-a.bB.T;while(a.gT>=180.0){a.gT=a.gT-360.0;}while(a.gT<(-180.0)){a.gT=a.gT+360.0;}while(a.g2>=180.0){a.g2=a.g2-360.0;}while(a.g2<(-180.0)){a.g2=a.g2+360.0;}b=a.gT*0.5;c=a.g2*0.5;d=10.0;if(b>d)b
=d;e=(-10.0);if(b<e)b=e;if(c<=d)d=c;if(d>=e)e=d;a.gT=a.gT-b;a.g2=a.g2-e;a.t=a.t+b;a.I=a.I+e;return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function A9P(a){return a.eL*0.75;}
function Pd(a,b){a.g2=0.0;a.gT=0.0;if(a.bB===b){a.bB.bH=null;a.bB=null;}else{if(a.bB!==null)a.bB.bH=null;if(b.bH!==null)b.bH.bB=null;a.bB=b;b.bH=a;}}
function Xh(a,b,c){var d,e;d=a.I;e=a.t;a.t=a.t+b*0.15;a.I=a.I-c*0.15;if(a.I<(-90.0))a.I=(-90.0);if(a.I>90.0)a.I=90.0;a.T=a.T+a.I-d;a.P=a.P+a.t-e;}
function EP(){var a=this;C5.call(a);a.oX=0;a.JD=0.0;a.GZ=0.0;a.Ik=0.0;a.dD=0.0;a.e6=0.0;a.zT=0.0;a.nc=0.0;a.jX=0.0;a.l9=0.0;a.G1=0;a.yj=null;a.G0=0;a.DZ=0.0;a.EW=null;a.Jq=0.0;a.uS=0;a.Jr=0.0;a.bS=0;a.tA=0;a.uQ=0;a.dB=0;a.EI=0;a.kC=0.0;a.c0=0;a.dw=0;a.kT=0.0;a.ji=0.0;a.Cg=0;a.Fb=0;a.Jw=0.0;a.jO=0.0;a.cd=0.0;a.gm=0.0;a.hg=0;a.iH=0.0;a.gA=0.0;a.kD=0.0;a.hD=0;a.zK=0.0;a.sU=0.0;}
function PH(a){return a.yj;}
function AXr(a){return a.cP?0:1;}
function A1O(a){return a.cP?0:1;}
function AQo(a){return a.eL*0.8500000238418579;}
function ANn(a){var b,c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AET(a);if(C()){break _;}b=E(a.m,1000);c=a.uQ;a.uQ=c+1|0;if(b<c){a.uQ=(-80);d=a.wr();if(d!==null)Dh(a.l,a,d,1.0,(N(a.m)-N(a.m))*0.20000000298023224+1.0);}if(H2(a)){$p=2;continue _;}if(H2(a)){d=BfQ;$p=3;continue _;}a.ga=a.n3;a.kT=a.ji;if(a.dw>0)a.dw=a.dw-1|0;if(a.dB>0)a.dB=a.dB-1|0;if(a.dv
>0)a.dv=a.dv-1|0;if(a.bS<=0){a.c0=a.c0+1|0;if(a.c0>20){$p=6;continue _;}}a.l9=a.jX;a.e6=a.dD;a.P=a.t;a.T=a.I;return;case 2:$z=AHy(a);if(C()){break _;}e=$z;if(e){d=null;e=1;$p=4;continue _;}if(H2(a)){d=BfQ;$p=3;continue _;}a.ga=a.n3;a.kT=a.ji;if(a.dw>0)a.dw=a.dw-1|0;if(a.dB>0)a.dB=a.dB-1|0;if(a.dv>0)a.dv=a.dv-1|0;if(a.bS<=0){a.c0=a.c0+1|0;if(a.c0>20){$p=6;continue _;}}a.l9=a.jX;a.e6=a.dD;a.P=a.t;a.T=a.I;return;case 3:$z=AGG(a,d);if(C()){break _;}e=$z;if(!e)a.ga=a.n3;else{a.ga=a.ga-1|0;if(a.ga==(-20)){a.ga=0;e
=0;while(e<8){f=N(a.m)-N(a.m);g=N(a.m)-N(a.m);h=N(a.m)-N(a.m);BW(a.l,B(213),a.d+f,a.j+g,a.e+h,a.g,a.i,a.h);e=e+1|0;}d=null;e=2;$p=5;continue _;}a.cT=0;}a.kT=a.ji;if(a.dw>0)a.dw=a.dw-1|0;if(a.dB>0)a.dB=a.dB-1|0;if(a.dv>0)a.dv=a.dv-1|0;if(a.bS<=0){a.c0=a.c0+1|0;if(a.c0>20){$p=6;continue _;}}a.l9=a.jX;a.e6=a.dD;a.P=a.t;a.T=a.I;return;case 4:a.fp(d,e);if(C()){break _;}if(H2(a)){d=BfQ;$p=3;continue _;}a.ga=a.n3;a.kT=a.ji;if(a.dw>0)a.dw=a.dw-1|0;if(a.dB>0)a.dB=a.dB-1|0;if(a.dv>0)a.dv=a.dv-1|0;if(a.bS<=0){a.c0=a.c0
+1|0;if(a.c0>20){$p=6;continue _;}}a.l9=a.jX;a.e6=a.dD;a.P=a.t;a.T=a.I;return;case 5:a.fp(d,e);if(C()){break _;}a.cT=0;a.kT=a.ji;if(a.dw>0)a.dw=a.dw-1|0;if(a.dB>0)a.dB=a.dB-1|0;if(a.dv>0)a.dv=a.dv-1|0;if(a.bS<=0){a.c0=a.c0+1|0;if(a.c0>20){$p=6;continue _;}}a.l9=a.jX;a.e6=a.dD;a.P=a.t;a.T=a.I;return;case 6:Ca(a);if(C()){break _;}e=0;while(e<20){i=CY(a.m)*0.02;j=CY(a.m)*0.02;k=CY(a.m)*0.02;BW(a.l,B(223),a.d+N(a.m)*a.cZ*2.0-a.cZ,a.j+N(a.m)*a.eL,a.e+N(a.m)*a.cZ*2.0-a.cZ,i,j,k);e=e+1|0;}a.l9=a.jX;a.e6=a.dD;a.P=a.t;a.T
=a.I;return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AEQ(a){var b,c,d,e;b=0;while(b<20){c=CY(a.m)*0.02;d=CY(a.m)*0.02;e=CY(a.m)*0.02;BW(a.l,B(223),a.d+N(a.m)*a.cZ*2.0-a.cZ-c*10.0,a.j+N(a.m)*a.eL-d*10.0,a.e+N(a.m)*a.cZ*2.0-a.cZ-e*10.0,c,d,e);b=b+1|0;}}
function AKR(a){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AFc(a);if(C()){break _;}a.zT=a.nc;a.nc=0.0;return;default:E$();}}C3().s(a,$p);}
function AMq(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.I$();if(C()){break _;}$p=2;case 2:a.oo();if(C()){break _;}b=a.d-a.bR;c=a.e-a.bQ;d=Ce(b*b+c*c);e=a.dD;f=0.0;a.zT=a.nc;g=0.0;if(d>0.05000000074505806){g=1.0;f=d*3.0;e=CR(c,b)*180.0/3.1415927410125732-90.0;}if(!a.cu)g=0.0;a.nc=a.nc+(g-a.nc)*0.30000001192092896;h=e-a.dD;while(h<(-180.0)){h=h+360.0;}while
(h>=180.0){h=h-360.0;}a.dD=a.dD+h*0.10000000149011612;i=a.t-a.dD;while(i<(-180.0)){i=i+360.0;}while(i>=180.0){i=i-360.0;}j=i>=(-90.0)&&i<90.0?0:1;if(i<(-75.0))i=(-75.0);if(i>=75.0)i=75.0;a.dD=a.t-i;a.dD=a.dD+i*0.10000000149011612;if(j)f=f*(-1.0);while(a.t-a.P<(-180.0)){a.P=a.P-360.0;}while(a.t-a.P>=180.0){a.P=a.P+360.0;}while(a.dD-a.e6<(-180.0)){a.e6=a.e6-360.0;}while(a.dD-a.e6>=180.0){a.e6=a.e6+360.0;}while(a.I-a.T<(-180.0)){a.T=a.T-360.0;}while(a.I-a.T>=180.0){a.T=a.T+360.0;}a.jX=a.jX+f;return;default:E$();}}C3().s(a,
b,c,d,e,f,g,h,i,j,$p);}
function A1e(a,b,c){DZ(a,b,c);}
function UJ(a,b){if(a.bS>0){a.bS=a.bS+b|0;if(a.bS>20)a.bS=20;a.dv=a.oX/2|0;}}
function ABZ(a,b,c){var d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hg=0;if(a.bS<=0)return 0;a.cd=1.5;if(a.dv<=a.oX/2.0){a.tA=a.bS;a.dv=a.oX;a.bS=a.bS-c|0;a.EI=10;a.dB=10;}else{if((a.tA-c|0)>=a.bS)return 0;a.bS=a.tA-c|0;}a.kC=0.0;if(b===null)a.kC=(BP()*2.0|0)*180|0;else{d=b.d-a.d;e=b.e-a.e;while(d*d+e*e<1.0E-4){d=(BP()-BP())*0.01;e=(BP()-BP())*0.01;}a.kC=CR(e,d)*180.0/3.1415927410125732-a.t;ABv(a,b,c,d,e);}if(a.bS>0){Dh(a.l,a,
a.u5(),1.0,(N(a.m)-N(a.m))*0.20000000298023224+1.0);return 1;}Dh(a.l,a,a.uE(),1.0,(N(a.m)-N(a.m))*0.20000000298023224+1.0);$p=1;case 1:a.Ft(b);if(C()){break _;}return 1;default:E$();}}C3().s(a,b,c,d,e,$p);}
function A8s(a){return null;}
function AUx(a){return B(224);}
function AVs(a){return B(224);}
function ABv(a,b,c,d,e){var f,g,h;f=Ce(d*d+e*e);a.g=a.g/2.0;a.i=a.i/2.0;a.h=a.h/2.0;g=a.g;h=f;a.g=g-d/h*0.4000000059604645;a.i=a.i+0.4000000059604645;a.h=a.h-e/h*0.4000000059604645;if(a.i>0.4000000059604645)a.i=0.4000000059604645;}
function AN2(a,b){var c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.uS>0&&b!==null)b.Bu(a,a.uS);a.Cg=1;c=a.mc();if(c>0){d=E(a.m,3);e=0;if(e<d){f=1;$p=1;continue _;}}return;case 1:ABQ(a,c,f);if(C()){break _;}e=e+1|0;if(e>=d)return;f=1;continue _;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ATB(a){return 0;}
function AP6(a,b){var c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=Un(b-3.0)|0;if(c<=0)return;d=null;$p=1;case 1:a.fp(d,c);if(C()){break _;}d=a.l;c=K(a.d);e=K(a.j-0.20000000298023224-a.c2);f=K(a.e);$p=2;case 2:$z=ACt(d,c,e,f);if(C()){break _;}e=$z;if(e>0){L();d=BeP.data[e].gG;Dh(a.l,a,Ke(d),d.oN*0.5,d.pJ*0.75);}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ADs(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AE6(a);if(C()){break _;}d=$z;if(!d){$p=2;continue _;}e=a.j;L2(a,b,c,0.019999999552965164);f=a.g;g=a.i;h=a.h;$p=3;continue _;case 2:$z=ACk(a);if(C()){break _;}d=$z;if(d){e=a.j;L2(a,b,c,0.019999999552965164);f=a.g;g=a.i;h=a.h;$p=4;continue _;}L2(a,b,c,!a.cu?0.019999999552965164:0.10000000149011612);$p=7;continue _;case 3:ARD(a,
f,g,h);if(C()){break _;}a.g=a.g*0.800000011920929;a.i=a.i*0.800000011920929;a.h=a.h*0.800000011920929;a.i=a.i-0.02;if(!a.jS){a.jO=a.cd;e=a.d-a.bR;f=a.e-a.bQ;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.cd=a.cd+(i-a.cd)*0.4000000059604645;a.gm=a.gm+a.cd;return;}f=a.g;e=a.i+0.6000000238418579-a.j+e;g=a.h;$p=5;continue _;case 4:ARD(a,f,g,h);if(C()){break _;}a.g=a.g*0.5;a.i=a.i*0.5;a.h=a.h*0.5;a.i=a.i-0.02;if(!a.jS){a.jO=a.cd;e=a.d-a.bR;f=a.e-a.bQ;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.cd=a.cd+(i-a.cd)*0.4000000059604645;a.gm
=a.gm+a.cd;return;}f=a.g;e=a.i+0.6000000238418579-a.j+e;g=a.h;$p=6;continue _;case 5:$z=AHe(a,f,e,g);if(C()){break _;}d=$z;if(d)a.i=0.30000001192092896;a.jO=a.cd;e=a.d-a.bR;f=a.e-a.bQ;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.cd=a.cd+(i-a.cd)*0.4000000059604645;a.gm=a.gm+a.cd;return;case 6:$z=AHe(a,f,e,g);if(C()){break _;}d=$z;if(d)a.i=0.30000001192092896;a.jO=a.cd;e=a.d-a.bR;f=a.e-a.bQ;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.cd=a.cd+(i-a.cd)*0.4000000059604645;a.gm=a.gm+a.cd;return;case 7:$z=AIg(a);if(C()){break _;}d=
$z;if(d){a.fF=0.0;if(a.i<(-0.15))a.i=(-0.15);}e=a.g;f=a.i;g=a.h;$p=8;case 8:ARD(a,e,f,g);if(C()){break _;}if(!a.jS){a.g=a.g*0.9100000262260437;a.i=a.i*0.9800000190734863;a.h=a.h*0.9100000262260437;a.i=a.i-0.08;if(a.cu){a.g=a.g*0.6000000238418579;a.h=a.h*0.6000000238418579;}a.jO=a.cd;e=a.d-a.bR;f=a.e-a.bQ;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.cd=a.cd+(i-a.cd)*0.4000000059604645;a.gm=a.gm+a.cd;return;}$p=9;case 9:$z=AIg(a);if(C()){break _;}d=$z;if(d)a.i=0.2;a.g=a.g*0.9100000262260437;a.i=a.i*0.9800000190734863;a.h
=a.h*0.9100000262260437;a.i=a.i-0.08;if(a.cu){a.g=a.g*0.6000000238418579;a.h=a.h*0.6000000238418579;}a.jO=a.cd;e=a.d-a.bR;f=a.e-a.bQ;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.cd=a.cd+(i-a.cd)*0.4000000059604645;a.gm=a.gm+a.cd;return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AIg(a){var b,c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=K(a.d);c=K(a.L.M);d=K(a.e);e=a.l;$p=1;case 1:$z=ACt(e,b,c,d);if(C()){break _;}f=$z;L();if(f==Bgb.b)return 1;e=a.l;c=c+1|0;$p=2;case 2:$z=ACt(e,b,c,d);if(C()){break _;}b=$z;return b==Bgb.b?1:0;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function H2(a){return !a.cP&&a.bS>0?1:0;}
function ACm(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hg=a.hg+1|0;b=a.l.bi;if(b!==null){c=b.d-a.d;d=b.j-a.j;e=b.e-a.e;f=c*c+d*d+e*e;if(f>16384.0){$p=2;continue _;}if(a.hg>600&&!E(a.m,800)){if(f>=1024.0){$p=7;continue _;}a.hg=0;}}if(a.bS>0){$p=1;continue _;}a.hD=0;a.iH=0.0;a.gA=0.0;a.kD=0.0;$p=3;continue _;case 1:a.wC();if(C())
{break _;}$p=3;continue _;case 2:Ca(a);if(C()){break _;}if(a.hg>600&&!E(a.m,800)){if(f>=1024.0){$p=7;continue _;}a.hg=0;}if(a.bS>0){$p=1;continue _;}a.hD=0;a.iH=0.0;a.gA=0.0;a.kD=0.0;$p=3;case 3:$z=AE6(a);if(C()){break _;}g=$z;$p=4;case 4:$z=ACk(a);if(C()){break _;}h=$z;if(a.hD){if(g)a.i=a.i+0.03999999910593033;else if(h)a.i=a.i+0.03999999910593033;else if(a.cu)AF7(a);}a.iH=a.iH*0.9800000190734863;a.gA=a.gA*0.9800000190734863;a.kD=a.kD*0.8999999761581421;i=a.iH;j=a.gA;$p=5;case 5:ADs(a,i,j);if(C()){break _;}k
=a.l;l=Dv(a.L,0.20000000298023224,0.0,0.20000000298023224);$p=6;case 6:a:{$z=ADJ(k,a,l);if(C()){break _;}k=$z;if(k!==null&&k.o>0){m=0;while(true){if(m>=k.o)break a;l=Z(k,m);if(l.rL())l.uR(a);m=m+1|0;}}}return;case 7:Ca(a);if(C()){break _;}if(a.bS>0){$p=1;continue _;}a.hD=0;a.iH=0.0;a.gA=0.0;a.kD=0.0;$p=3;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AF7(a){a.i=0.41999998688697815;}
function AQN(a){var b,c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(N(a.m)<0.07000000029802322){a.iH=(N(a.m)-0.5)*a.sU;a.gA=N(a.m)*a.sU;}a.hD=N(a.m)>=0.009999999776482582?0:1;if(N(a.m)<0.03999999910593033)a.kD=(N(a.m)-0.5)*60.0;a.t=a.t+a.kD;a.I=a.zK;$p=1;case 1:$z=AE6(a);if(C()){break _;}b=$z;$p=2;case 2:$z=ACk(a);if(C()){break _;}c=$z;if(!(!b&&!c))a.hD=N(a.m)>=0.800000011920929?0:1;return;default:E$();}}C3().s(a,b,c,$p);}
function A4L(a){return;}
function Zq(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:CT(a,b,c+a.eL/2.0,d);e=a.l;f=a.L;$p=1;case 1:$z=AM4(e,f);if(C()){break _;}g=$z;if(!g)return 0;e=a.l;f=a.L;$p=2;case 2:$z=XQ(e,a,f);if(C()){break _;}e=$z;if(e.o)return 0;e=a.l;f=a.L;$p=3;case 3:$z=AJh(e,f);if(C()){break _;}g=$z;return g?0:1;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ABF(a){var b,c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=null;c=4;$p=1;case 1:a.fp(b,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,$p);}
function IR(){var a=this;EP.call(a);a.dO=null;a.dc=null;a.hi=0;}
function AKe(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.l;d=BY(a.d,a.j+AQo(a),a.e);b=BY(b.d,b.j+b.rD(),b.e);$p=1;case 1:$z=AJj(c,d,b);if(C()){break _;}b=$z;return b!==null?0:1;default:E$();}}C3().s(a,b,c,d,$p);}
function APL(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hi=0;b=16.0;if(a.dc===null){$p=1;continue _;}if(H2(a.dc)){c=AR2(a.dc,a);d=a.dc;$p=2;continue _;}a.dc=null;a:{if(!a.hi&&a.dc!==null){if(a.dO===null)break a;if
(!E(a.m,20))break a;}if(!(a.dO!==null&&E(a.m,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=K(a.d+E(a.m,11)-5.0);k=K(a.j+E(a.m,7)-3.0);l=K(a.e+E(a.m,11)-5.0);$p=8;continue _;}if(e>0){d=a.l;$p=10;continue _;}}e=K(a.L.M);$p=5;continue _;}d=a.l;m=a.dc;$p=7;continue _;case 1:$z=a.xT();if(C()){break _;}d=$z;a.dc=d;if(a.dc!==null){d=a.l;m=a.dc;$p=3;continue _;}b:{if(!a.hi&&a.dc!==null){if(a.dO===null)break b;if(!E(a.m,20))break b;}if(!(a.dO!==null&&E(a.m,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<
50){j=K(a.d+E(a.m,11)-5.0);k=K(a.j+E(a.m,7)-3.0);l=K(a.e+E(a.m,11)-5.0);$p=8;continue _;}if(e>0){d=a.l;$p=10;continue _;}}e=K(a.L.M);$p=5;continue _;}d=a.l;m=a.dc;$p=7;continue _;case 2:$z=AKe(a,d);if(C()){break _;}e=$z;if(e){d=a.dc;$p=4;continue _;}b:{if(!a.hi&&a.dc!==null){if(a.dO===null)break b;if(!E(a.m,20))break b;}if(!(a.dO!==null&&E(a.m,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=K(a.d+E(a.m,11)-5.0);k=K(a.j+E(a.m,7)-3.0);l=K(a.e+E(a.m,11)-5.0);$p=8;continue _;}if(e>0){d=a.l;$p=10;continue _;}}e
=K(a.L.M);$p=5;continue _;}d=a.l;m=a.dc;$p=7;continue _;case 3:$z=ARU(d,a,m,b);if(C()){break _;}d=$z;a.dO=d;c:{if(!a.hi&&a.dc!==null){if(a.dO===null)break c;if(!E(a.m,20))break c;}if(!(a.dO!==null&&E(a.m,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=K(a.d+E(a.m,11)-5.0);k=K(a.j+E(a.m,7)-3.0);l=K(a.e+E(a.m,11)-5.0);$p=8;continue _;}if(e>0){d=a.l;$p=10;continue _;}}e=K(a.L.M);$p=5;continue _;}d=a.l;m=a.dc;$p=7;continue _;case 4:a.nL(d,c);if(C()){break _;}c:{if(!a.hi&&a.dc!==null){if(a.dO===null)break c;if
(!E(a.m,20))break c;}if(!(a.dO!==null&&E(a.m,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=K(a.d+E(a.m,11)-5.0);k=K(a.j+E(a.m,7)-3.0);l=K(a.e+E(a.m,11)-5.0);$p=8;continue _;}if(e>0){d=a.l;$p=10;continue _;}}e=K(a.L.M);$p=5;continue _;}d=a.l;m=a.dc;$p=7;continue _;case 5:$z=AE6(a);if(C()){break _;}n=$z;$p=6;case 6:$z=ACk(a);if(C()){break _;}o=$z;if(a.dO!==null&&E(a.m,100)){d=Sm(a.dO,a);p=a.cZ*2.0;q=p*p;r=e;while(d!==null&&ABT(d,a.d,a.j,a.e)<q&&d.y<=r){AP2(a.dO);if(!ANl(a.dO)){d=Sm(a.dO,a);continue;}d
=null;a.dO=null;}a.hD=0;if(d!==null){q=d.w-a.d;s=d.v-a.e;t=d.y-r;a.t=CR(s,q)*180.0/3.1415927410125732-90.0;a.gA=a.sU;if(a.hi&&a.dc!==null){u=a.dc.d-a.d;r=a.dc.e-a.e;v=a.t;a.t=CR(r,u)*180.0/3.1415927410125732-90.0;w=(v-a.t+90.0)*3.1415927410125732/180.0;a.iH= -Bq(w)*a.gA*1.0;a.gA=BC(w)*a.gA*1.0;}if(t!==0.0)a.hD=1;}if(N(a.m)<0.800000011920929&&!(!n&&!o))a.hD=1;return;}$p=9;continue _;case 7:$z=ARU(d,a,m,b);if(C()){break _;}d=$z;a.dO=d;e=K(a.L.M);$p=5;continue _;case 8:$z=a.sw(j,k,l);if(C()){break _;}x=$z;if(x
>h){h=x;e=j;f=k;g=l;}i=i+1|0;if(i>=50){if(e>0){d=a.l;$p=10;continue _;}e=K(a.L.M);$p=5;continue _;}j=K(a.d+E(a.m,11)-5.0);k=K(a.j+E(a.m,7)-3.0);l=K(a.e+E(a.m,11)-5.0);continue _;case 9:AQN(a);if(C()){break _;}a.dO=null;return;case 10:$z=AJt(d,a,e,f,g,b);if(C()){break _;}d=$z;a.dO=d;e=K(a.L.M);$p=5;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function AMz(a,b,c){return;}
function AKX(a){return null;}
function ACM(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Zq(a,b,c,d);if(C()){break _;}e=$z;if(!e)return 0;e=b|0;f=c|0;g=d|0;$p=2;case 2:$z=a.sw(e,f,g);if(C()){break _;}h=$z;return h<0.0?0:1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function DO(){IR.call(this);this.Fk=0;}
function AC7(a){var b,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=1.0;$p=1;case 1:$z=ADF(a,b);if(C()){break _;}b=$z;if(b>0.5)a.hg=a.hg+2|0;$p=2;case 2:ACm(a);if(C()){break _;}return;default:E$();}}C3().s(a,b,$p);}
function AK6(a){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AMq(a);if(C()){break _;}if(a.l.iX)return;$p=2;case 2:Ca(a);if(C()){break _;}return;default:E$();}}C3().s(a,$p);}
function AKn(a){var b,c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(LC(a.l.bi,a)>=256.0)return null;b=a.l.bi;$p=1;case 1:$z=AKe(a,b);if(C()){break _;}c=$z;return !c?null:a.l.bi;default:E$();}}C3().s(a,b,c,$p);}
function AAG(a,b,c){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ABZ(a,b,c);if(C()){break _;}c=$z;if(!c)return 0;if(b!==a)a.dc=b;return 1;default:E$();}}C3().s(a,b,c,$p);}
function AQV(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c<2.5&&b.L.U>a.L.M&&b.L.M<a.L.U){a.dw=20;d=a.Fk;$p=1;continue _;}return;case 1:b.fp(a,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function ABu(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=0.5;f=a.l;$p=1;case 1:$z=ANf(f,b,c,d);if(C()){break _;}g=$z;return e-g;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function Yv(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.l;f=K(b);g=K(c);h=K(d);$p=1;case 1:$z=Xv(e,f,g,h);if(C()){break _;}f=$z;if(f>E(a.m,8))return 0;$p=2;case 2:$z=ACM(a,b,c,d);if(C()){break _;}f=$z;return !f?0:1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function I3(){DO.call(this);}
function AH1(a){var b,c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!Rt(a.l)){$p=1;continue _;}b=1.0;$p=2;continue _;case 1:AC7(a);if(C()){break _;}return;case 2:$z=ADF(a,b);if(C()){break _;}b=$z;if(b<=0.5){$p=1;continue _;}c=a.l;d=K(a.d);e=K(a.j);f=K(a.e);$p=3;case 3:$z=AGe(c,d,e,f);if(C()){break _;}d=$z;if(d&&N(a.m)*30.0<(b-0.4000000059604645)*2.0)a.cT=300;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AWJ(a){BB();return Bgc.cU;}
function Ji(){DO.call(this);}
function AIC(a){var b,c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!Rt(a.l)){$p=1;continue _;}b=1.0;$p=2;continue _;case 1:AC7(a);if(C()){break _;}return;case 2:$z=ADF(a,b);if(C()){break _;}b=$z;if(b<=0.5){$p=1;continue _;}c=a.l;d=K(a.d);e=K(a.j);f=K(a.e);$p=3;case 3:$z=AGe(c,d,e,f);if(C()){break _;}d=$z;if(d&&N(a.m)*30.0<(b-0.4000000059604645)*2.0)a.cT=300;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AHU(a,b,c){var d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c<10.0){d=b.d-a.d;e=b.e-a.e;if(!a.dw){f=AS9(a.l,a);f.j=f.j+1.399999976158142;g=b.j-0.20000000298023224-f.j;h=Ce(d*d+e*e)*0.20000000298023224;Dh(a.l,a,B(225),1.0,1.0/(N(a.m)*0.4000000059604645+0.800000011920929));b=a.l;$p=1;continue _;}a.t=CR(e,d)*180.0/3.1415927410125732-90.0;a.hi=1;}return;case 1:AOf(b,f);if(C()){break _;}Qy(f,
d,g+h,e,0.6000000238418579,12.0);a.dw=30;a.t=CR(e,d)*180.0/3.1415927410125732-90.0;a.hi=1;return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AYM(a){BB();return Bgd.cU;}
function JU(){var a=this;DO.call(a);a.i$=0;a.um=0;a.Ba=0;a.jP=0;}
function ZM(a){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.um=a.i$;if(a.i$>0&&a.jP<0)a.i$=a.i$-1|0;if(a.jP>=0)a.jP=2;$p=1;case 1:APL(a);if(C()){break _;}if(a.jP!=1)a.jP=(-1);return;default:E$();}}C3().s(a,$p);}
function AAI(a,b,c){var d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!(a.jP<=0&&c<3.0)){if(a.jP<=0)break a;if(c>=7.0)break a;}if(!a.i$)Dh(a.l,a,B(226),1.0,0.5);a.jP=1;a.i$=a.i$+1|0;if(a.i$==a.Ba){b=a.l;d=a.d;e=a.j;f=a.e;c=3.0;$p=1;continue _;}a.hi=1;}return;case 1:X7(b,a,d,e,f,c);if(C()){break _;}$p=2;case 2:Ca(a);if(C()){break _;}a.hi=1;return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function Qh(a,b){return (a.um+(a.i$-a.um|0)*b)/(a.Ba-2|0);}
function ASS(a){BB();return Bge.cU;}
function Kk(){DO.call(this);}
function ARp(a){var b,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=1.0;$p=1;case 1:$z=ADF(a,b);if(C()){break _;}b=$z;if(b<0.5&&LC(a.l.bi,a)<256.0)return a.l.bi;return null;default:E$();}}C3().s(a,b,$p);}
function Zj(a,b,c){var d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=1.0;$p=1;case 1:a:{$z=ADF(a,d);if(C()){break _;}d=$z;if(d>0.5&&!E(a.m,100))a.dc=null;else{if(c<=2.0)break a;if(c>=6.0)break a;if(E(a.m,10))break a;if(a.cu){e=b.d-a.d;f=b.e-a.e;g=Ce(e*e+f*f);a.g=e/g*0.5*0.800000011920929+a.g*0.20000000298023224;a.h=f/g*0.5*0.800000011920929+a.h*0.20000000298023224;a.i=0.4000000059604645;}}return;}$p=2;case 2:AQV(a,
b,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AZL(a){BB();return Bgf.cU;}
function Gw(){IR.call(this);}
function AOx(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.l;f=c-1|0;$p=1;case 1:$z=ACt(e,b,f,d);if(C()){break _;}g=$z;L();if(g==BeR.b)return 10.0;e=a.l;$p=2;case 2:$z=ANf(e,b,c,d);if(C()){break _;}h=$z;return h-0.5;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AK3(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.l;f=K(b);g=K(c);h=K(d);$p=1;case 1:$z=Xv(e,f,g,h);if(C()){break _;}g=$z;if(g<=8)return 0;$p=2;case 2:$z=ACM(a,b,c,d);if(C()){break _;}g=$z;return !g?0:1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function KE(){Gw.call(this);this.xX=0;}
function AGU(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.xX&&b instanceof EP){a.xX=1;d=1+E(a.m,3)|0;e=0;if(e<d){L();f=Bfd.b;g=1;h=1.0;$p=2;continue _;}}$p=1;case 1:$z=ABZ(a,b,c);if(C()){break _;}c=$z;return c;case 2:$z=AGF(a,f,g,h);if(C()){break _;}i=$z;i.i=i.i+N(a.m)*0.05000000074505806;i.g=i.g+(N(a.m)-N(a.m))*0.10000000149011612;i.h=i.h+(N(a.m)-N(a.m))*0.10000000149011612;e
=e+1|0;if(e>=d){$p=1;continue _;}L();f=Bfd.b;g=1;h=1.0;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function A63(a){return B(227);}
function A4g(a){return B(227);}
function AYk(a){return B(227);}
function Iz(){Gw.call(this);this.qt=0;}
function ATx(a){return B(228);}
function A9u(a){return B(228);}
function AV4(a){return B(229);}
function AXR(a,b){if(!a.qt)return 0;Pd(b,a);return 1;}
function AWc(a){BB();return Bgg.cU;}
function Dz(){var a=this;D.call(a);a.Aw=0.0;a.wV=0;}
function Bbl(){var a=new Dz();A3c(a);return a;}
function BbA(a){var b=new Dz();AVH(b,a);return b;}
function A3c(a){return;}
function AVH(a,b){return;}
function NF(a,b){return;}
function AF9(a,b){if(b==32)return Cl(a)*4.294967295E9+(-2.147483648E9)|0;return Cl(a)*Long_toNumber(Long_shl(Long_fromInt(1),CB(32,b)))|0;}
function Lo(a){return AF9(a,32);}
function E(a,b){return Cl(a)*b|0;}
function Gv(a){return Long_or(Long_shl(Long_fromInt(Lo(a)),32),Long_fromInt(Lo(a)));}
function N(a){return Cl(a);}
function Cl(a){return Math.random();}
function CY(a){var b,c,d,e;if(a.wV){a.wV=0;return a.Aw;}while(true){while(true){b=2.0*Cl(a)-1.0;c=2.0*Cl(a)-1.0;d=b*b+c*c;if(d>=1.0)continue;else break;}if(d===0.0)continue;else break;}e=Ec((-2.0)*A3T(d)/d);a.Aw=c*e;a.wV=1;return b*e;}
function Nx(){D.call(this);}
var Bgh=null;var Bgi=null;function Bgj(){var a=new Nx();AIm(a);return a;}
function AIm(a){return;}
function IW(b){var c,d,e,f,g,h;Ba2(F(Nx));try{BV();c=Bgk+1|0;d=0;while(d<b){e=Bgk+1|0;Bgk=e;f=Bgl;g=CX(e);h=new Rm;h.Bp=e;h.rd=null;h.oY=null;h.lH=(-1);h.jF=0;BR(f,g,h);d=d+1|0;}S(Bgh,CX(c));S(Bgh,CX(b));return c;}finally{BcT(F(Nx));}}
function WQ(b){var c,d,e,f,g;Ba2(F(Nx));try{c=b.bk;while(c<b.cv){BV();d=Bgm;Bd();e=new O8;f=BdI.createTexture();e.Ig=(-1);e.Id=(-1);e.Gf=1;e.G9=0;e.BH=f;g=SX(d,e);AQ0(b,c,g);S(Bgi,CX(g));c=c+1|0;}}finally{BcT(F(Nx));}}
function WK(b){var c;c=AAo($rt_createByteArray(b));c.kH=Bgn;return c;}
function Ra(b){return ALO($rt_createIntArray(b));}
function HY(b){var c,d,e,f;c=$rt_createFloatArray(b);d=c.data.length;e=new WJ;f=0+d|0;KM(e,d);e.bk=0;e.cv=f;e.yf=0;e.xo=0;e.xh=c;return e;}
function ALT(){Bgh=Ci();Bgi=Ci();}
function O7(){var a=this;D.call(a);a.cN=null;a.eQ=null;a.i7=0.0;a.q6=0.0;a.iv=0;a.jJ=0;a.z6=null;}
function ACU(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.q6+(a.i7-a.q6)*b;d=a.cN.f;B3();Bv(d.T+(d.I-d.T)*b,1.0,0.0,0.0);Bv(d.P+(d.t-d.P)*b,0.0,1.0,0.0);Hu();BD();e=a.cN.z;f=
K(d.d);g=K(d.j);h=K(d.e);$p=1;case 1:$z=ANf(e,f,g,h);if(C()){break _;}i=$z;BU(i,i,i,1.0);if(a.eQ===null){B3();if(a.jJ){j=(a.iv+b)/8.0;k=Bq(j*3.1415927410125732);Bw( -Bq(D$(j)*3.1415927410125732)*0.30000001192092896,Bq(D$(j)*3.1415927410125732*2.0)*0.4000000059604645, -k*0.4000000059604645);}Bw(0.64000004529953,(-0.6000000238418579)-(1.0-c)*0.6000000238418579,(-0.7199999690055847));Bv(45.0,0.0,1.0,0.0);Ba(32826);if(a.jJ){j=(a.iv+b)/8.0;k=Bq(j*j*3.1415927410125732);Bv(Bq(D$(j)*3.1415927410125732)*70.0,0.0,1.0,
0.0);Bv( -k*20.0,0.0,0.0,1.0);}f=3553;d=a.cN.bo;e=a.cN.f.tE;l=PH(a.cN.f);$p=2;continue _;}B3();if(a.jJ){j=(a.iv+b)/8.0;k=Bq(j*3.1415927410125732);Bw( -Bq(D$(j)*3.1415927410125732)*0.4000000059604645,Bq(D$(j)*3.1415927410125732*2.0)*0.20000000298023224, -k*0.20000000298023224);}Bw(0.5600000023841858,(-0.5199999809265137)-(1.0-c)*0.6000000238418579,(-0.7199999690055847));Bv(45.0,0.0,1.0,0.0);Ba(32826);if(a.jJ){j=(a.iv+b)/8.0;k=Bq(j*j*3.1415927410125732);m=Bq(D$(j)*3.1415927410125732);Bv( -k*20.0,0.0,1.0,0.0);b
= -m;Bv(b*20.0,0.0,0.0,1.0);Bv(b*80.0,1.0,0.0,0.0);}CC(0.4000000059604645,0.4000000059604645,0.4000000059604645);if(a.eQ.bA<256){L();if(!BeP.data[a.eQ.bA].ei()){f=3553;d=a.cN.bo;e=B(179);$p=5;continue _;}}if(a.eQ.bA>=256){f=3553;d=a.cN.bo;e=B(230);$p=3;continue _;}f=3553;d=a.cN.bo;e=B(179);$p=4;continue _;case 2:$z=AD2(d,e,l);if(C()){break _;}g=$z;Cp(f,g);Bw((-1.0),3.5999999046325684,3.5);Bv(120.0,0.0,0.0,1.0);Bv(200.0,1.0,0.0,0.0);Bv((-135.0),0.0,1.0,0.0);CC(1.0,1.0,1.0);Bw(5.599999904632568,0.0,0.0);n=R8(Bgo,
a.cN.f);CC(1.0,1.0,1.0);ALw(n);BD();Bc(32826);DQ();return;case 3:$z=AHt(d,e);if(C()){break _;}g=$z;Cp(f,g);BA();e=BeL;m=(((DI(a.eQ)%16|0)*16|0)+0|0)/256.0;o=(((DI(a.eQ)%16|0)*16|0)+16|0)/256.0;p=(((DI(a.eQ)/16|0)*16|0)+0|0)/256.0;q=(((DI(a.eQ)/16|0)*16|0)+16|0)/256.0;Ba(32826);Bw(-0.0,(-0.30000001192092896),0.0);CC(1.5,1.5,1.5);Bv(50.0,0.0,1.0,0.0);Bv(335.0,0.0,0.0,1.0);Bw((-0.9375),(-0.0625),0.0);Bz(e);Dc(e,0.0,0.0,1.0);r=o;s=q;G(e,0.0,0.0,0.0,r,s);t=m;G(e,1.0,0.0,0.0,t,s);u=p;G(e,1.0,1.0,0.0,t,u);G(e,0.0,
1.0,0.0,r,u);Br(e);Bz(e);Dc(e,0.0,0.0,(-1.0));G(e,0.0,1.0,(-0.0625),r,u);G(e,1.0,1.0,(-0.0625),t,u);G(e,1.0,0.0,(-0.0625),t,s);G(e,0.0,0.0,(-0.0625),r,s);Br(e);Bz(e);Dc(e,(-1.0),0.0,0.0);f=0;j=m-o;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v;y=w;G(e,x,0.0,(-0.0625),y,s);G(e,x,0.0,0.0,y,s);G(e,x,1.0,0.0,y,u);G(e,x,1.0,(-0.0625),y,u);f=f+1|0;}Br(e);Bz(e);Dc(e,1.0,0.0,0.0);f=0;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v+0.0625;y=w;G(e,x,1.0,(-0.0625),y,u);G(e,x,1.0,0.0,y,u);G(e,x,0.0,0.0,y,s);G(e,x,0.0,
(-0.0625),y,s);f=f+1|0;}Br(e);Bz(e);Dc(e,0.0,1.0,0.0);g=0;j=p-q;while(g<16){v=g/16.0;w=q+j*v-0.001953125;z=1.0*v+0.0625;ba=w;G(e,0.0,z,0.0,r,ba);G(e,1.0,z,0.0,t,ba);G(e,1.0,z,(-0.0625),t,ba);G(e,0.0,z,(-0.0625),r,ba);g=g+1|0;}Br(e);Bz(e);Dc(e,0.0,(-1.0),0.0);f=0;while(f<16){v=f/16.0;w=q+j*v-0.001953125;x=1.0*v;y=w;G(e,1.0,x,0.0,t,y);G(e,0.0,x,0.0,r,y);G(e,0.0,x,(-0.0625),r,y);G(e,1.0,x,(-0.0625),t,y);f=f+1|0;}Br(e);Bc(32826);BD();Bc(32826);DQ();return;case 4:$z=AHt(d,e);if(C()){break _;}g=$z;Cp(f,g);BA();e=
BeL;m=(((DI(a.eQ)%16|0)*16|0)+0|0)/256.0;o=(((DI(a.eQ)%16|0)*16|0)+16|0)/256.0;p=(((DI(a.eQ)/16|0)*16|0)+0|0)/256.0;q=(((DI(a.eQ)/16|0)*16|0)+16|0)/256.0;Ba(32826);Bw(-0.0,(-0.30000001192092896),0.0);CC(1.5,1.5,1.5);Bv(50.0,0.0,1.0,0.0);Bv(335.0,0.0,0.0,1.0);Bw((-0.9375),(-0.0625),0.0);Bz(e);Dc(e,0.0,0.0,1.0);r=o;s=q;G(e,0.0,0.0,0.0,r,s);t=m;G(e,1.0,0.0,0.0,t,s);u=p;G(e,1.0,1.0,0.0,t,u);G(e,0.0,1.0,0.0,r,u);Br(e);Bz(e);Dc(e,0.0,0.0,(-1.0));G(e,0.0,1.0,(-0.0625),r,u);G(e,1.0,1.0,(-0.0625),t,u);G(e,1.0,0.0,(-0.0625),
t,s);G(e,0.0,0.0,(-0.0625),r,s);Br(e);Bz(e);Dc(e,(-1.0),0.0,0.0);f=0;j=m-o;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v;y=w;G(e,x,0.0,(-0.0625),y,s);G(e,x,0.0,0.0,y,s);G(e,x,1.0,0.0,y,u);G(e,x,1.0,(-0.0625),y,u);f=f+1|0;}Br(e);Bz(e);Dc(e,1.0,0.0,0.0);f=0;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v+0.0625;y=w;G(e,x,1.0,(-0.0625),y,u);G(e,x,1.0,0.0,y,u);G(e,x,0.0,0.0,y,s);G(e,x,0.0,(-0.0625),y,s);f=f+1|0;}Br(e);Bz(e);Dc(e,0.0,1.0,0.0);g=0;j=p-q;while(g<16){v=g/16.0;w=q+j*v-0.001953125;z=1.0*v+0.0625;ba
=w;G(e,0.0,z,0.0,r,ba);G(e,1.0,z,0.0,t,ba);G(e,1.0,z,(-0.0625),t,ba);G(e,0.0,z,(-0.0625),r,ba);g=g+1|0;}Br(e);Bz(e);Dc(e,0.0,(-1.0),0.0);f=0;while(f<16){v=f/16.0;w=q+j*v-0.001953125;x=1.0*v;y=w;G(e,1.0,x,0.0,t,y);G(e,0.0,x,0.0,r,y);G(e,0.0,x,(-0.0625),r,y);G(e,1.0,x,(-0.0625),t,y);f=f+1|0;}Br(e);Bc(32826);BD();Bc(32826);DQ();return;case 5:$z=AHt(d,e);if(C()){break _;}g=$z;Cp(f,g);GV(a.z6,BeP.data[a.eQ.bA]);BD();Bc(32826);DQ();return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,
$p);}
function AB7(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bc(3008);if(a.cN.f.cT<=0){c=a.cN.z.bi;$p=1;continue _;}c=a.cN.bo;d=B(179);$p=2;continue _;case 1:$z=AHy(c);if(C()){break _;}e=$z;if(!e){d=a.cN.f;c=BfQ;$p=3;continue _;}e=K(a.cN.f.d);f=K(a.cN.f.j);g=K(a.cN.f.e);c
=a.cN.bo;d=B(179);$p=4;continue _;case 2:$z=AHt(c,d);if(C()){break _;}e=$z;Cp(3553,e);BA();c=BeL;BU(1.0,1.0,1.0,0.8999999761581421);Ba(3042);Df(770,771);e=0;while(e<2){B3();L();f=Bgp.bb+(e*16|0)|0;g=(f&15)<<4;f=f&240;h=g;i=h/256.0;h=(h+15.989999771118164)/256.0;j=f;k=j/256.0;j=(j+15.989999771118164)/256.0;f=(e*2|0)-1|0;Bw( -f*0.23999999463558197,(-0.30000001192092896),0.0);Bv(f*10.0,0.0,1.0,0.0);Bz(c);l=h;m=j;G(c,(-0.5),(-0.5),(-0.5),l,m);n=i;G(c,0.5,(-0.5),(-0.5),n,m);m=k;G(c,0.5,0.5,(-0.5),n,m);G(c,(-0.5),
0.5,(-0.5),l,m);Br(c);BD();e=e+1|0;}BU(1.0,1.0,1.0,1.0);Bc(3042);c=a.cN.z.bi;$p=1;continue _;case 3:$z=AGG(d,c);if(C()){break _;}e=$z;if(!e){Ba(3008);return;}c=a.cN.bo;d=B(231);$p=6;continue _;case 4:$z=AHt(c,d);if(C()){break _;}o=$z;Cp(3553,o);c=a.cN.z;$p=5;case 5:$z=ACt(c,e,f,g);if(C()){break _;}p=$z;L();if(BeP.data[p]===null){d=a.cN.f;c=BfQ;$p=3;continue _;}e=BeP.data[p].cf(2);BA();c=BeL;d=a.cN.f;$p=8;continue _;case 6:$z=AHt(c,d);if(C()){break _;}e=$z;Cp(3553,e);BA();c=BeL;d=a.cN.f;$p=7;case 7:$z=ADF(d,
b);if(C()){break _;}h=$z;BU(h,h,h,0.5);Ba(3042);Df(770,771);B3();h= -a.cN.f.t/64.0;i=a.cN.f.I/64.0;Bz(c);q=4.0+h;l=4.0+i;G(c,(-1.0),(-1.0),(-0.5),q,l);r=0.0+h;G(c,1.0,(-1.0),(-0.5),r,l);l=0.0+i;G(c,1.0,1.0,(-0.5),r,l);G(c,(-1.0),1.0,(-0.5),q,l);Br(c);BD();BU(1.0,1.0,1.0,1.0);Bc(3042);Ba(3008);return;case 8:ADF(d,b);if(C()){break _;}BU(0.10000000149011612,0.10000000149011612,0.10000000149011612,0.5);B3();i=e%16|0;j=i/256.0-0.0078125;i=(i+15.989999771118164)/256.0+0.0078125;k=e/16|0;s=k/256.0-0.0078125;h=(k+15.989999771118164)
/256.0+0.0078125;Bz(c);q=i;l=h;G(c,(-1.0),(-1.0),(-0.5),q,l);r=j;G(c,1.0,(-1.0),(-0.5),r,l);l=s;G(c,1.0,1.0,(-0.5),r,l);G(c,(-1.0),1.0,(-0.5),q,l);Br(c);BD();BU(1.0,1.0,1.0,1.0);d=a.cN.f;c=BfQ;$p=3;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function AI9(a){var b,c,d,e;a.q6=a.i7;if(a.jJ){a.iv=a.iv+1|0;if(a.iv==8){a.iv=0;a.jJ=0;}}b=D8(a.cN.f.J);c=0.4000000059604645;d=(b!==a.eQ?0.0:1.0)-a.i7;e=(-0.4000000059604645);if(d>=e)e=d;if(e<=c)c=e;a.i7=a.i7+c;if(a.i7<0.10000000149011612)a.eQ=b;}
function AGK(a){a.i7=0.0;}
function Pf(a){a.iv=(-1);a.jJ=1;}
function AM6(a){a.i7=0.0;}
function P(){var a=this;D.call(a);a.bb=0;a.b=0;a.p_=0.0;a.nM=0.0;a.c$=0.0;a.cJ=0.0;a.c9=0.0;a.da=0.0;a.cB=0.0;a.db=0.0;a.gG=null;a.Es=0.0;a.b8=null;}
var Bgq=null;var Bgr=null;var Bgs=null;var Bgt=null;var Bgu=null;var Bgv=null;var Bgw=null;var Bgx=null;var Bgy=null;var BeP=null;var Bgz=null;var BgA=null;var BgB=null;var BgC=null;var BgD=null;var BeV=null;var BeR=null;var BeS=null;var BeZ=null;var Be1=null;var Be7=null;var BeQ=null;var BfY=null;var BgE=null;var BfZ=null;var BgF=null;var Bfa=null;var Bfb=null;var Bfg=null;var Bff=null;var Bfe=null;var Be2=null;var Be3=null;var Bfc=null;var Be5=null;var BgG=null;var BgH=null;var BgI=null;var BgJ=null;var BgK
=null;var BgL=null;var BgM=null;var BgN=null;var BgO=null;var BgP=null;var BgQ=null;var BgR=null;var BgS=null;var BgT=null;var Bfd=null;var BgU=null;var Be8=null;var Be9=null;var Be$=null;var Be_=null;var Bfi=null;var Bfh=null;var BeT=null;var BeU=null;var Be0=null;var Bfk=null;var Bfj=null;var Be6=null;var Bfl=null;var Be4=null;var Bgp=null;var BgV=null;var BgW=null;var BgX=null;var BgY=null;var BgZ=null;var Bg0=null;var Bg1=null;var Bg2=null;var Bg3=null;var Bg4=null;var Bg5=null;var Bg6=null;var Bg7=null;var Bgb
=null;var Bg8=null;var Bg9=null;function L(){L=Bt(P);AVe();}
function Bg$(a,b){var c=new P();DY(c,a,b);return c;}
function Kw(a,b,c){var d=new P();C8(d,a,b,c);return d;}
function DY(a,b,c){var d,e,f;L();a.gG=Bgq;a.Es=1.0;if(BeP.data[b]!==null){c=new Cb;d=new U;X(d);Bl(c,V(FK(I(FK(I(Be(I(d,B(232)),b),B(233)),BeP.data[b]),B(234)),a)));M(c);}a.b8=c;BeP.data[b]=a;a.b=b;Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);BgA.data[b]=a.d1();e=BgB;f=!a.d1()?0:255;e.data[b]=f;BgC.data[b]=0;}
function C8(a,b,c,d){L();DY(a,b,d);a.bb=c;}
function BM(a,b){a.gG=b;return a;}
function Gs(a,b){BgB.data[a.b]=b;return a;}
function GH(a,b){BgD.data[a.b]=15.0*b|0;return a;}
function Dn(a,b){a.nM=b*3.0;return a;}
function A82(a){return 1;}
function AWC(a){return 0;}
function BH(a,b){var c;a.p_=b;c=a.nM;b=b*5.0;if(c<b)a.nM=b;return a;}
function Fe(a,b){Bgz.data[a.b]=b;}
function Bo(a,b,c,d,e,f,g){a.c$=b;a.cJ=c;a.c9=d;a.da=e;a.cB=f;a.db=g;}
function AE_(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.sH(c,d,e);if(C()){break _;}f=$z;return f;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AGu(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!f&&a.cJ>0.0)c=1;else if(f==1&&a.cB<1.0)c=1;else if(f==2&&a.c9>0.0)c=1;else if(f==3&&a.db<1.0)c=1;else if(f==4&&a.c$>0.0)c=1;else{if(f!=5)break a;if(a.da>=1.0)break a;c=1;}return c;}$p=1;case 1:$z=b.k_(c,d,e);if(C()){break _;}c=$z;return c?0:1;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ABW(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.eF(c,d,e);if(C()){break _;}c=$z;return a.eV(f,c);default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function A7g(a,b,c){return a.cf(b);}
function AVC(a,b){return a.bb;}
function K5(a,b,c,d,e){var f,g,h,i,j;f=c;g=f+a.c$;h=d;i=h+a.cJ;j=e;return D2(g,i,j+a.c9,f+a.da,h+a.cB,j+a.db);}
function ALv(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=a.hq(b,c,d,e);if(C()){break _;}h=$z;if(h!==null&&L5(f,h))S(g,h);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function Nh(a,b,c,d,e){var f,g,h,i,j;f=c;g=f+a.c$;h=d;i=h+a.cJ;j=e;return D2(g,i,j+a.c9,f+a.da,h+a.cB,j+a.db);}
function A5k(a){return 1;}
function A6t(a,b,c){return a.pc();}
function A3N(a){return 1;}
function AHQ(a,b,c,d,e,f){return;}
function APa(a,b,c,d,e,f){return;}
function Z5(a,b,c,d,e,f){return;}
function YL(a,b,c,d,e,f){return;}
function A3X(a){return 10;}
function AA5(a,b,c,d,e){return;}
function Z0(a,b,c,d,e){return;}
function AYn(a,b){return 1;}
function ATO(a,b,c){return a.b;}
function ABb(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.p_<0.0)c=0.0;else{if(M4(b,a)){$p=1;continue _;}c=1.0/a.p_/100.0;}return c;case 1:$z=AKQ(b,a);if(C()){break _;}c=$z;return c/a.p_/30.0;default:E$();}}C3().s(a,b,c,$p);}
function Yd(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=1.0;$p=1;case 1:a.HM(b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AEY(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.eE(b.q);i=0;j=0.15000000596046448;k=c;l=d;m=e;while(i<h){if(N(b.q)<=g){n=a.dS(f,b.q);if(n>0){o=Ha(b,k+N(b.q)*0.699999988079071+j,l+N(b.q)*0.699999988079071+j,m+N(b.q)*0.699999988079071+j,Kx(n,1));o.g8=10;$p=1;continue _;}}i=i+1|0;}return;case 1:AOf(b,
o);if(C()){break _;}while(true){i=i+1|0;if(i>=h)break;if(N(b.q)>g)continue;n=a.dS(f,b.q);if(n<=0)continue;else{o=Ha(b,k+N(b.q)*0.699999988079071+j,l+N(b.q)*0.699999988079071+j,m+N(b.q)*0.699999988079071+j,Kx(n,1));o.g8=10;continue _;}}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AZ0(a,b){return a.nM/5.0;}
function J_(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r;h= -c;i= -d;j= -e;b=Dk(f,h,i,j);f=Dk(g,h,i,j);k=KK(b,f,a.c$);l=KK(b,f,a.da);m=JR(b,f,a.cJ);n=JR(b,f,a.cB);o=Ku(b,f,a.c9);p=Ku(b,f,a.db);if(!Rq(a,k))k=null;if(!Rq(a,l))l=null;if(!Xo(a,m))m=null;if(!Xo(a,n))n=null;if(!RI(a,o))o=null;if(!RI(a,p))p=null;q=null;if(k!==null)q=k;if(l!==null&&!(q!==null&&DG(b,l)>=DG(b,q)))q=l;if(m!==null&&!(q!==null&&DG(b,m)>=DG(b,q)))q=m;if(n!==null&&!(q!==null&&DG(b,n)>=DG(b,q)))q=n;if(o!==null&&!(q!==null&&DG(b,o)>=DG(b,q)))q=
o;if(p!==null&&!(q!==null&&DG(b,p)>=DG(b,q)))q=p;if(q===null)return null;r=(-1);if(q===k)r=4;if(q===l)r=5;if(q===m)r=0;if(q===n)r=1;if(q===o)r=2;if(q===p)r=3;return A0A(c,d,e,r,Dk(q,c,d,e));}
function Rq(a,b){return b===null?0:b.y>=a.cJ&&b.y<=a.cB&&b.v>=a.c9&&b.v<=a.db?1:0;}
function Xo(a,b){return b===null?0:b.w>=a.c$&&b.w<=a.da&&b.v>=a.c9&&b.v<=a.db?1:0;}
function RI(a,b){return b===null?0:b.w>=a.c$&&b.w<=a.da&&b.y>=a.cJ&&b.y<=a.cB?1:0;}
function AQZ(a,b,c,d,e){return;}
function AVi(a){return 0;}
function AEE(a,b,c,d,e){return 1;}
function AGI(a,b,c,d,e,f){return 0;}
function AJI(a,b,c,d,e,f){return;}
function YD(a,b,c,d,e,f){return;}
function AAa(a,b,c,d,e,f){return;}
function AF6(a,b,c,d,e,f,g){return;}
function APV(a,b,c,d,e){return;}
function A9k(a,b,c,d,e){return 16777215;}
function AVe(){var b,c;Bgq=Ie(B(235),1.0,1.0);Bgr=Ie(B(236),1.0,1.0);Bgs=Ie(B(237),1.0,1.0);Bgt=Ie(B(238),1.0,1.0);Bgu=Ie(B(235),1.0,1.0);Bgv=Ie(B(235),1.0,1.5);Bgw=A_2(B(235),1.0,1.0);Bgx=Ie(B(239),1.0,1.0);Bgy=Bca(B(240),1.0,1.0);BeP=J(P,256);Bgz=$rt_createBooleanArray(256);BgA=$rt_createBooleanArray(256);BgB=$rt_createIntArray(256);BgC=$rt_createBooleanArray(256);BgD=$rt_createIntArray(256);BeV=BM(Dn(BH(Bbf(1,1),1.5),10.0),Bgu);BeR=BM(BH(BbI(2),0.6000000238418579),Bgt);BeS=BM(BH(A_7(3,2),0.5),Bgs);BeZ=BM(Dn(BH(Kw(4,
16,Bg_),2.0),10.0),Bgu);Be1=BM(Dn(BH(Kw(5,4,Bha),2.0),5.0),Bgr);Be7=BM(BH(Bcu(6,15),0.0),Bgt);BeQ=BM(Dn(BH(Kw(7,17,Bg_),(-1.0)),6000000.0),Bgu);BfY=Gs(BH(AUh(8,BfQ),100.0),3);BgE=Gs(BH(AXF(9,BfQ),100.0),3);BfZ=Gs(GH(BH(AUh(10,BfR),0.0),1.0),255);BgF=Gs(GH(BH(AXF(11,BfR),100.0),1.0),255);Bfa=BM(BH(BbD(12,18),0.5),Bgy);Bfb=BM(BH(BbM(13,19),0.6000000238418579),Bgs);Bfg=BM(Dn(BH(SF(14,32),3.0),5.0),Bgu);Bff=BM(Dn(BH(SF(15,33),3.0),5.0),Bgu);Bfe=BM(Dn(BH(SF(16,34),3.0),5.0),Bgu);Be2=BM(BH(BcO(17),2.0),Bgr);Be3=BM(Gs(BH(BaI(18,
52),0.20000000298023224),1),Bgt);Bfc=BM(BH(Ba$(19),0.6000000238418579),Bgt);Be5=BM(BH(Ba6(20,49,Bhb,0),0.30000001192092896),Bgw);BgG=null;BgH=null;BgI=null;BgJ=null;BgK=null;BgL=null;BgM=null;BgN=null;BgO=null;BgP=null;BgQ=null;BgR=null;BgS=null;BgT=null;Bfd=BM(BH(Kw(35,64,Bhc),0.800000011920929),Bgx);BgU=null;Be8=BM(BH(A3j(37,13),0.0),Bgt);Be9=BM(BH(A3j(38,12),0.0),Bgt);Be$=GH(BM(BH(ATM(39,29),0.0),Bgt),0.125);Be_=BM(BH(ATM(40,28),0.0),Bgt);Bfi=BM(Dn(BH(AEA(41,39),3.0),10.0),Bgv);Bfh=BM(Dn(BH(AEA(42,38),5.0),
10.0),Bgv);BeT=BM(Dn(BH(A9n(43,1),2.0),10.0),Bgu);BeU=BM(Dn(BH(A9n(44,0),2.0),10.0),Bgu);Be0=BM(Dn(BH(Kw(45,7,Bg_),2.0),10.0),Bgu);Bfk=BM(BH(BaJ(46,8),0.0),Bgt);Bfj=BM(BH(Bak(47,35),1.5),Bgr);Be6=BM(Dn(BH(Kw(48,36,Bg_),2.0),10.0),Bgu);Bfl=BM(Dn(BH(Bbp(49,37),10.0),20.0),Bgu);Be4=BM(GH(BH(Bbb(50,80),0.0),0.9375),Bgr);Bgp=BM(GH(BH(BcU(51,31),0.0),1.0),Bgr);BgV=BM(BH(BcK(52,65),5.0),Bgv);BgW=A$O(53,Be1);BgX=BM(BH(A_9(54),2.5),Bgr);BgY=BM(BH(BbO(55,62),0.5),Bgv);BgZ=BM(Dn(BH(SF(56,50),3.0),5.0),Bgu);Bg0=BM(Dn(BH(AEA(57,
40),5.0),10.0),Bgv);Bg1=BM(BH(Bbs(58),2.5),Bgr);Bg2=BM(BH(Bcx(59,88),0.0),Bgt);Bg3=BM(BH(Bb0(60),0.6000000238418579),Bgs);Bg4=BM(BH(A4M(61,0),3.5),Bgu);Bg5=GH(BM(BH(A4M(62,1),3.5),Bgu),0.875);b=new Vn;BB();AHs(b,63,F(Jc),Bhd.cU);Bg6=BM(BH(b,1.0),Bgr);Bg7=BM(BH(Bae(64),3.0),Bgr);Bgb=BM(BH(Bcm(65,83),0.4000000059604645),Bgr);Bg8=BM(BH(Ba0(66,128),1.0),Bgv);Bg9=A$O(67,BeZ);c=0;while(c<256){if(BeP.data[c]!==null)Bhe.data[c]=A_8(c-256|0);c=c+1|0;}}
function Rw(){}
function AJd(){var a=this;Ga.call(a);a.d7=null;a.o=0;}
function Ci(){var a=new AJd();AV7(a);return a;}
function AV7(a){a.d7=J(D,10);}
function Tn(a,b){var c;if(a.d7.data.length<b){c=a.d7.data.length>=1073741823?2147483647:DB(b,DB(a.d7.data.length*2|0,5));a.d7=Nm(a.d7,c);}}
function Z(a,b){K7(a,b);return a.d7.data[b];}
function De(a){return a.o;}
function Q7(a,b,c){var d;K7(a,b);d=a.d7.data[b];a.d7.data[b]=c;return d;}
function S(a,b){var c,d;Tn(a,a.o+1|0);c=a.d7.data;d=a.o;a.o=d+1|0;c[d]=b;a.d3=a.d3+1|0;return 1;}
function AMH(a,b,c){var d;if(b>=0&&b<=a.o){Tn(a,a.o+1|0);d=a.o;while(d>b){a.d7.data[d]=a.d7.data[d-1|0];d=d+(-1)|0;}a.d7.data[b]=c;a.o=a.o+1|0;a.d3=a.d3+1|0;return;}c=new BO;O(c);M(c);}
function Em(a,b){var c,d,e,f;K7(a,b);c=a.d7.data[b];a.o=a.o-1|0;while(b<a.o){d=a.d7.data;e=a.d7.data;f=b+1|0;d[b]=e[f];b=f;}a.d7.data[a.o]=null;a.d3=a.d3+1|0;return c;}
function H5(a,b){var c;c=AA9(a,b);if(c<0)return 0;Em(a,c);return 1;}
function DF(a){ZB(a.d7,0,a.o,null);a.o=0;}
function K7(a,b){var c;if(b>=0&&b<a.o)return;c=new BO;O(c);M(c);}
function DE(){}
function TC(){D.call(this);this.AG=null;}
function AQB(a){CM(a.AG,SL(0,1,null,null));}
function AWl(a){AQB(a);}
function TB(){var a=this;D.call(a);a.Em=null;a.EG=null;}
function AQy(a){CM(a.Em,SL(0,0,null,a.EG.result));}
function AS3(a){AQy(a);}
function TA(){D.call(this);this.Ds=null;}
function ASc(a){CM(a.Ds,SL(1,0,B(241),null));}
function AZk(a){ASc(a);}
function Tz(){D.call(this);this.Bi=null;}
function AJ8(a,b){var c,d,e,f,g,h,i;c=a.Bi.result;d=A9Z();e=J(B4,1).data;e[0]=B(242);f=e.length;g=new Array(f);h=0;while(h<f){i=$rt_ustr(e[h]);g[h]=i;h=h+1|0;}d.keyPath=g;c.createObjectStore("filesystem",d);}
function ANH(a,b){AJ8(a,b);}
function A6J(a,b){ANH(a,b);}
function Su(){D.call(this);}
var Bf7=null;function Bhf(){var a=new Su();ZK(a);return a;}
function ZK(a){return;}
function AFp(){Bf7=Dd();BR(Bf7,B(24),A1F());}
function Cb(){B6.call(this);}
function Bhg(){var a=new Cb();AT8(a);return a;}
function AT8(a){O(a);}
function U$(){Cb.call(this);this.Ip=null;}
function ED(){B6.call(this);}
function Bc2(){var a=new ED();AUI(a);return a;}
function AUI(a){O(a);}
function AA6(){D.call(this);}
function Bhh(){var a=new AA6();AY3(a);return a;}
function AY3(a){return;}
function Fj(){var a=this;D.call(a);a.my=0;a.bk=0;a.cv=0;a.ln=0;}
function Bhi(a){var b=new Fj();KM(b,a);return b;}
function KM(a,b){a.ln=(-1);a.my=b;a.cv=b;}
function AVy(a){return a.my;}
function A8r(a){return a.bk;}
function EN(a,b){var c,d;if(b>=0&&b<=a.cv){a.bk=b;if(b<a.ln)a.ln=0;return a;}c=new Cb;d=new U;X(d);Bl(c,V(I(Be(I(Be(I(d,B(243)),b),B(244)),a.cv),B(245))));M(c);}
function A05(a){return a.cv;}
function Nj(a,b){var c,d;if(b>=0&&b<=a.my){if(a.ln>b)a.ln=(-1);a.cv=b;if(a.bk>a.cv)a.bk=a.cv;return a;}c=new Cb;d=new U;X(d);Bl(c,V(I(Be(I(Be(I(d,B(246)),b),B(244)),a.my),B(245))));M(c);}
function Ez(a){a.bk=0;a.cv=a.my;a.ln=(-1);return a;}
function Gr(a){a.cv=a.bk;a.bk=0;a.ln=(-1);return a;}
function Ct(a){return a.cv-a.bk|0;}
function Fk(a){return a.bk>=a.cv?0:1;}
function L7(){Fj.call(this);}
function ADo(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BO;i=new U;X(i);Bl(h,V(Be(I(Be(I(i,B(247)),g),B(248)),f)));M(h);}if(Ct(a)<d){h=new Go;O(h);M(h);}if(d<0){h=new BO;i=new U;X(i);Bl(h,V(I(Be(I(i,B(249)),d),B(250))));M(h);}g=a.bk;j=0;while(j<d){k=c+1|0;f=g+1|0;e[c]=RA(a,g);j=j+1|0;c=k;g=f;}a.bk=a.bk+d|0;return a;}}b=b.data;i=new BO;h=new U;X(h);Bl(i,V(I(Be(I(Be(I(h,B(251)),c),B(244)),b.length),B(27))));M(i);}
function VE(a,b){return ADo(a,b,0,b.data.length);}
function LR(a){Ez(a);return a;}
function TG(a){Gr(a);return a;}
function P7(a,b){Nj(a,b);return a;}
function AE4(){var a=this;D.call(a);a.F=null;a.cw=0;a.fo=0;a.dM=0;}
function A8k(a){var b=new AE4();ATC(b,a);return b;}
function Kg(){var a=new AE4();AS_(a);return a;}
function ATC(a,b){a.cw=(-1);a.fo=0;a.dM=0;a.F=b;}
function AS_(a){a.cw=(-1);a.fo=0;a.dM=0;}
function AMv(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.cw=f;$p=1;case 1:ANZ(a,b,c,d,e);if(C()){break _;}a.cw=(-1);return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ANZ(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=b.ei();g=a.F;$p=1;case 1:b.xD(g,c,d,e);if(C()){break _;}if(!f){$p=2;continue _;}if(f==4){$p=3;continue _;}if(f==1){$p=4;continue _;}if(f==6){$p=5;continue _;}if(f==2){$p=6;continue _;}if(f==3){$p=7;continue _;}if(f==5){$p=8;continue _;}if(f==8){$p=9;continue _;}if(f==7){$p=10;continue _;}if(f==9){$p=11;continue _;}if(f==10){$p=12;continue _;}if
(f!=11)return 0;$p=13;continue _;case 2:$z=ABR(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 3:$z=AB1(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 4:$z=AA7(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 5:$z=ALH(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 6:$z=AN1(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 7:$z=ZP(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 8:$z=ADr(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 9:$z=AJw(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 10:$z=AKB(a,b,c,d,e);if(C())
{break _;}c=$z;return c;case 11:$z=AM7(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 12:$z=AIv(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 13:$z=AFH(a,b,c,d,e);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AN1(a,b,c,d,e){var f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.F;$p=1;case 1:$z=f.eF(c,d,e);if(C()){break _;}g=$z;BA();f=BeL;h=a.F;$p=2;case 2:$z=b.Cs(h,c,d,e);if(C()){break _;}i=$z;if(BgD.data[b.b]>0)i=1.0;Cq(f,i,i,i);if(g==1)GE(a,b,c-0.09999999403953552,d+0.20000000298023224,e,(-0.4000000059604645),0.0);else if(g==2)GE(a,b,c+0.09999999403953552,d+0.20000000298023224,e,0.4000000059604645,
0.0);else if(g==3)GE(a,b,c,d+0.20000000298023224,e-0.09999999403953552,0.0,(-0.4000000059604645));else if(g!=4)GE(a,b,c,d,e,0.0,0.0);else GE(a,b,c,d+0.20000000298023224,e+0.09999999403953552,0.0,0.4000000059604645);return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ZP(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p)
{case 0:BA();f=BeL;g=b.cf(0);if(a.cw>=0)g=a.cw;h=a.F;$p=1;case 1:$z=b.Cs(h,c,d,e);if(C()){break _;}i=$z;Cq(f,i,i,i);j=(g&15)<<4;k=g&240;i=j;l=i/256.0;m=(i+15.989999771118164)/256.0;i=k;n=i/256.0;o=i+15.989999771118164;p=o/256.0;q=1.399999976158142;b=a.F;g=d-1|0;$p=2;case 2:$z=b.k_(c,g,e);if(C()){break _;}j=$z;if(j){r=c+0.5;s=r+0.2;t=r-0.2;u=e+0.5;v=u+0.2;w=u-0.2;x=r-0.3;y=r+0.3;z=u-0.3;ba=u+0.3;bb=d+q;bc=e+1|0;G(f,x,bb,bc,m,n);bd=d+0|0;G(f,s,bd,bc,m,p);be=e+0|0;G(f,s,bd,be,l,p);G(f,x,bb,be,l,n);G(f,y,bb,be,
m,n);G(f,t,bd,be,m,p);G(f,t,bd,bc,l,p);G(f,y,bb,bc,l,n);y=(k+16|0)/256.0;s=(o+16.0)/256.0;t=c+1|0;G(f,t,bb,ba,m,y);G(f,t,bd,w,m,s);x=c+0|0;G(f,x,bd,w,l,s);G(f,x,bb,ba,l,y);G(f,x,bb,z,m,y);G(f,x,bd,v,m,s);G(f,t,bd,v,l,s);G(f,t,bb,z,l,y);v=r-0.5;z=r+0.5;ba=u-0.5;bf=u+0.5;bg=r-0.4;bh=r+0.4;r=u-0.4;w=u+0.4;G(f,bg,bb,be,l,y);G(f,v,bd,be,l,s);G(f,v,bd,bc,m,s);G(f,bg,bb,bc,m,y);G(f,bh,bb,bc,l,y);G(f,z,bd,bc,l,s);G(f,z,bd,be,m,s);G(f,bh,bb,be,m,y);G(f,x,bb,w,l,n);G(f,x,bd,bf,l,p);G(f,t,bd,bf,m,p);G(f,t,bb,w,m,n);G(f,
t,bb,r,l,n);G(f,t,bd,ba,l,p);G(f,x,bd,ba,m,p);G(f,x,bb,r,m,n);return 1;}b=Bgp;h=a.F;$p=3;case 3:$z=AF0(b,h,c,g,e);if(C()){break _;}g=$z;if(g){r=c+0.5;s=r+0.2;t=r-0.2;u=e+0.5;v=u+0.2;w=u-0.2;x=r-0.3;y=r+0.3;z=u-0.3;ba=u+0.3;bb=d+q;bc=e+1|0;G(f,x,bb,bc,m,n);bd=d+0|0;G(f,s,bd,bc,m,p);be=e+0|0;G(f,s,bd,be,l,p);G(f,x,bb,be,l,n);G(f,y,bb,be,m,n);G(f,t,bd,be,m,p);G(f,t,bd,bc,l,p);G(f,y,bb,bc,l,n);y=(k+16|0)/256.0;s=(o+16.0)/256.0;t=c+1|0;G(f,t,bb,ba,m,y);G(f,t,bd,w,m,s);x=c+0|0;G(f,x,bd,w,l,s);G(f,x,bb,ba,l,y);G(f,
x,bb,z,m,y);G(f,x,bd,v,m,s);G(f,t,bd,v,l,s);G(f,t,bb,z,l,y);v=r-0.5;z=r+0.5;ba=u-0.5;bf=u+0.5;bg=r-0.4;bh=r+0.4;r=u-0.4;w=u+0.4;G(f,bg,bb,be,l,y);G(f,v,bd,be,l,s);G(f,v,bd,bc,m,s);G(f,bg,bb,bc,m,y);G(f,bh,bb,bc,l,y);G(f,z,bd,bc,l,s);G(f,z,bd,be,m,s);G(f,bh,bb,be,m,y);G(f,x,bb,w,l,n);G(f,x,bd,bf,l,p);G(f,t,bd,bf,m,p);G(f,t,bb,w,m,n);G(f,t,bb,r,l,n);G(f,t,bd,ba,l,p);G(f,x,bd,ba,m,p);G(f,x,bb,r,m,n);return 1;}bi=0.20000000298023224;bj=0.0625;if((((c+d|0)+e|0)&1)!=1){ba=l;bb=m;x=n;z=p;}else{x=(k+16|0)/256.0;z=(o
+16.0)/256.0;ba=l;bb=m;}if(((((c/2|0)+(d/2|0)|0)+(e/2|0)|0)&1)!=1){r=ba;ba=bb;bb=r;}b=Bgp;h=a.F;g=c-1|0;$p=4;case 4:$z=AF0(b,h,g,d,e);if(C()){break _;}g=$z;if(g){w=c+bi;s=d+q+bj;t=e+1|0;G(f,w,s,t,ba,x);u=c+0|0;v=(d+0|0)+bj;G(f,u,v,t,ba,z);r=e+0|0;G(f,u,v,r,bb,z);G(f,w,s,r,bb,x);G(f,w,s,r,bb,x);G(f,u,v,r,bb,z);G(f,u,v,t,ba,z);G(f,w,s,t,ba,x);}b=Bgp;h=a.F;j=c+1|0;$p=5;case 5:$z=AF0(b,h,j,d,e);if(C()){break _;}g=$z;if(g){r=j-bi;w=d+q+bj;s=e+0|0;G(f,r,w,s,bb,x);t=j-0|0;u=(d+0|0)+bj;G(f,t,u,s,bb,z);v=e+1|0;G(f,t,
u,v,ba,z);G(f,r,w,v,ba,x);G(f,r,w,v,ba,x);G(f,t,u,v,ba,z);G(f,t,u,s,bb,z);G(f,r,w,s,bb,x);}b=Bgp;h=a.F;g=e-1|0;$p=6;case 6:$z=AF0(b,h,c,d,g);if(C()){break _;}g=$z;if(g){r=c+0|0;w=d+q+bj;s=e+bi;G(f,r,w,s,ba,x);t=(d+0|0)+bj;u=e+0|0;G(f,r,t,u,ba,z);v=j;G(f,v,t,u,bb,z);G(f,v,w,s,bb,x);G(f,v,w,s,bb,x);G(f,v,t,u,bb,z);G(f,r,t,u,ba,z);G(f,r,w,s,ba,x);}b=Bgp;h=a.F;bk=e+1|0;$p=7;case 7:$z=AF0(b,h,c,d,bk);if(C()){break _;}g=$z;if(g){t=j;u=d+q+bj;v=bk-bi;G(f,t,u,v,bb,x);r=(d+0|0)+bj;w=bk-0|0;G(f,t,r,w,bb,z);s=c+0|0;G(f,
s,r,w,ba,z);G(f,s,u,v,ba,x);G(f,s,u,v,ba,x);G(f,s,r,w,ba,z);G(f,t,r,w,bb,z);G(f,t,u,v,bb,x);}b=Bgp;h=a.F;d=d+1|0;$p=8;case 8:$z=AF0(b,h,c,d,e);if(C()){break _;}g=$z;if(g){r=c+0.5;t=r+0.5;u=r-0.5;r=e+0.5;w=r+0.5;r=r-0.5;if(((c+d|0)+e|0)&1){s=c+0|0;t=d+(-0.20000000298023224);G(f,s,t,w,m,n);u=d+0|0;G(f,s,u,r,m,p);v=j;G(f,v,u,r,l,p);G(f,v,t,w,l,n);x=(k+16|0)/256.0;z=(o+16.0)/256.0;G(f,v,t,r,m,x);G(f,v,u,w,m,z);G(f,s,u,w,l,z);G(f,s,t,r,l,x);}else{v=d+(-0.20000000298023224);x=e+0|0;G(f,u,v,x,m,n);z=d+0|0;G(f,t,z,
x,m,p);r=bk;G(f,t,z,r,l,p);G(f,u,v,r,l,n);w=(k+16|0)/256.0;s=(o+16.0)/256.0;G(f,t,v,r,m,w);G(f,u,z,r,m,s);G(f,u,z,x,l,s);G(f,t,v,x,l,w);}}return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p);}
function ADr(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeL;g=b.cf(0);if(a.cw>=0)g=a.cw;h=a.F;$p=1;case 1:$z=b.Cs(h,c,d,e);if(C()){break _;}i=$z;Cq(f,i,i,i);j=(g&15)<<4;k=j+16|0;l=g&240;if((((c+d|0)+e|0)&
1)!=1){g=j;j=k;k=g;}i=j;m=i/256.0;n=(i+15.989999771118164)/256.0;i=l;o=i/256.0;p=(i+15.989999771118164)/256.0;q=k;r=q/256.0;s=(q+15.989999771118164)/256.0;t=0.125;q=0.05000000074505806;b=a.F;k=c-1|0;$p=2;case 2:$z=b.k_(k,d,e);if(C()){break _;}k=$z;if(k){u=c+q;v=(d+1|0)+t;w=(e+1|0)+t;G(f,u,v,w,m,o);x=(d+0|0)-t;G(f,u,x,w,m,p);w=(e+0|0)-t;G(f,u,x,w,n,p);G(f,u,v,w,n,o);}b=a.F;l=c+1|0;$p=3;case 3:$z=b.k_(l,d,e);if(C()){break _;}k=$z;if(k){u=l-q;x=(d+0|0)-t;w=(e+1|0)+t;G(f,u,x,w,n,p);v=(d+1|0)+t;G(f,u,v,w,n,o);w=
(e+0|0)-t;G(f,u,v,w,m,o);G(f,u,x,w,m,p);}b=a.F;k=e-1|0;$p=4;case 4:$z=b.k_(c,d,k);if(C()){break _;}k=$z;if(k){u=l+t;m=(d+0|0)-t;x=e+q;G(f,u,m,x,s,p);w=(d+1|0)+t;G(f,u,w,x,s,o);u=(c+0|0)-t;G(f,u,w,x,r,o);G(f,u,m,x,r,p);}b=a.F;e=e+1|0;$p=5;case 5:$z=b.k_(c,d,e);if(C()){break _;}k=$z;if(k){u=l+t;m=(d+1|0)+t;x=e-q;G(f,u,m,x,r,o);w=(d+0|0)-t;G(f,u,w,x,r,p);u=(c+0|0)-t;G(f,u,w,x,s,p);G(f,u,m,x,s,o);}return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function AM7(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=
$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeL;g=a.F;$p=1;case 1:$z=g.eF(c,d,e);if(C()){break _;}h=$z;i=b.eV(0,h);if(a.cw>=0)i=a.cw;g=a.F;$p=2;case 2:$z=b.Cs(g,c,d,e);if(C()){break _;}j=$z;Cq(f,j,j,j);k=(i&15)<<4;l=i&240;m=k;n=m/256.0;o=(m+15.989999771118164)/256.0;m=l;p=m/256.0;q=(m+15.989999771118164)/256.0;r=c+1|0;s=c+0|0;t=e+0|0;u=e+1|0;v=d+0.0625;if(h!=1&&h!=2&&h!=3&&h!=7){if(h==8){w=s;x=r;y=r;z=u;m=t;j=t;ba=s;r=x;s=y;bb=u;t=m;u=j;}else if(h!=9){w=r;j=s;z=t;m=u;ba=r;r=j;bb=t;t=m;}else{w=r;ba
=s;j=r;z=u;bb=t;m=t;r=s;s=j;t=u;u=m;}}else{w=s;ba=r;z=t;bb=u;}if(h!=2&&h!=4){if(h!=3&&h!=5){x=v;j=v;y=v;m=v;v=j;}else{j=v+1.0;x=j;y=v;m=v;v=j;}}else{m=v+1.0;x=v;y=m;}bc=ba;bd=y;be=bb;G(f,bc,bd,be,o,p);bf=w;bg=x;bh=u;G(f,bf,bg,bh,o,q);bi=s;bj=v;bk=t;G(f,bi,bj,bk,n,q);bl=r;bm=m;bn=z;G(f,bl,bm,bn,n,p);G(f,bl,bm,bn,n,p);G(f,bi,bj,bk,n,q);G(f,bf,bg,bh,o,q);G(f,bc,bd,be,o,p);return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,$p);}
function AJw(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeL;g=b.cf(0);if(a.cw>=0)g=a.cw;h=a.F;$p=1;case 1:$z=b.Cs(h,c,d,e);if(C()){break _;}i=$z;Cq(f,i,i,i);j=(g&15)<<4;k=g&240;i=j;l=i/256.0;m=(i+15.989999771118164)/256.0;i=k;n=i/256.0;o=(i+15.989999771118164)
/256.0;b=a.F;$p=2;case 2:$z=b.eF(c,d,e);if(C()){break _;}p=$z;if(p==5){q=c+0.05000000074505806;r=(d+1|0)+0.0;s=(e+1|0)+0.0;G(f,q,r,s,l,n);t=(d+0|0)-0.0;G(f,q,t,s,l,o);s=(e+0|0)-0.0;G(f,q,t,s,m,o);G(f,q,r,s,m,n);}if(p==4){t=(c+1|0)-0.05000000074505806;q=(d+0|0)-0.0;s=(e+1|0)+0.0;G(f,t,q,s,m,o);r=(d+1|0)+0.0;G(f,t,r,s,m,n);s=(e+0|0)-0.0;G(f,t,r,s,l,n);G(f,t,q,s,l,o);}if(p==3){q=(c+1|0)+0.0;r=(d+0|0)-0.0;s=e+0.05000000074505806;G(f,q,r,s,m,o);t=(d+1|0)+0.0;G(f,q,t,s,m,n);q=(c+0|0)-0.0;G(f,q,t,s,l,n);G(f,q,r,s,
l,o);}if(p==2){r=(c+1|0)+0.0;s=(d+1|0)+0.0;t=(e+1|0)-0.05000000074505806;G(f,r,s,t,l,n);q=(d+0|0)-0.0;G(f,r,q,t,l,o);r=(c+0|0)-0.0;G(f,r,q,t,m,o);G(f,r,s,t,m,n);}return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p);}
function AA7(a,b,c,d,e){var f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeL;g=a.F;$p=1;case 1:$z=b.Cs(g,c,d,e);if(C()){break _;}h=$z;Cq(f,h,h,h);f=a.F;$p=2;case 2:$z=f.eF(c,d,e);if(C()){break _;}i=$z;Uh(a,b,i,c,d,e);return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ALH(a,b,c,d,e){var f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeL;g=a.F;$p=1;case 1:$z=b.Cs(g,c,d,e);if(C()){break _;}h=$z;Cq(f,h,h,h);f=a.F;$p=2;case 2:$z=f.eF(c,d,e);if(C()){break _;}i=$z;OI(a,b,i,c,d-0.0625,e);return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function GE(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd;BA();h=BeL;i=b.cf(0);if(a.cw>=0)i=a.cw;j=(i&15)<<4;k=i&240;l=j;m=l/256.0;l=(l+15.989999771118164)/256.0;n=k;o=n/256.0;n=(n+15.989999771118164)/256.0;p=m;q=p+0.02734375;r=o;s=r+0.0234375;t=p+0.03515625;u=r+0.03125;c=c+0.5;e=e+0.5;v=c-0.5;w=c+0.5;x=e-0.5;y=e+0.5;z=c+f*0.375;ba=z-0.0625;bb=d+0.625;bc=e+g*0.375;bd=bc-0.0625;G(h,ba,bb,bd,q,s);bc=bc+0.0625;G(h,ba,bb,bc,q,u);q=z+0.0625;G(h,q,bb,bc,t,u);G(h,q,bb,bd,t,s);u=c-0.0625;bc=d
+1.0;G(h,u,bc,x,p,r);q=u+f;d=d+0.0;t=x+g;bd=n;G(h,q,d,t,p,bd);s=y+g;z=l;G(h,q,d,s,z,bd);G(h,u,bc,y,z,r);u=c+0.0625;G(h,u,bc,y,p,r);c=c+f+0.0625;G(h,c,d,s,p,bd);G(h,c,d,t,z,bd);G(h,u,bc,x,z,r);c=e+0.0625;G(h,v,bc,c,p,r);u=v+f;q=c+g;G(h,u,d,q,p,bd);f=w+f;G(h,f,d,q,z,bd);G(h,w,bc,c,z,r);c=e-0.0625;G(h,w,bc,c,p,r);e=c+g;G(h,f,d,e,p,bd);G(h,u,d,e,z,bd);G(h,v,bc,c,z,r);}
function Uh(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s;BA();g=BeL;h=b.eV(0,c);if(a.cw>=0)h=a.cw;i=(h&15)<<4;j=h&240;k=i;l=k/256.0;m=(k+15.989999771118164)/256.0;k=j;n=k/256.0;o=(k+15.989999771118164)/256.0;d=d+0.5;p=d-0.44999998807907104;q=d+0.44999998807907104;d=f+0.5;r=d-0.44999998807907104;s=d+0.44999998807907104;d=e+1.0;G(g,p,d,r,l,n);e=e+0.0;G(g,p,e,r,l,o);G(g,q,e,s,m,o);G(g,q,d,s,m,n);G(g,q,d,s,l,n);G(g,q,e,s,l,o);G(g,p,e,r,m,o);G(g,p,d,r,m,n);G(g,p,d,s,l,n);G(g,p,e,s,l,o);G(g,q,e,r,m,o);G(g,q,d,r,m,n);G(g,
q,d,r,l,n);G(g,q,e,r,l,o);G(g,p,e,s,m,o);G(g,p,d,s,m,n);}
function OI(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeL;h=b.eV(0,c);if(a.cw>=0)h=a.cw;i=(h&15)<<4;j=h&240;k=i;l=k/256.0;m=(k+15.989999771118164)/256.0;k=j;n=k/256.0;o=(k+15.989999771118164)/256.0;d=d+0.5;p=d-0.25;q=d+0.25;f=f+0.5;r=f-0.5;s=f+0.5;t=e+1.0;G(g,p,t,r,l,n);e=e+0.0;G(g,p,e,r,l,o);G(g,p,e,s,m,o);G(g,p,t,s,m,n);G(g,p,t,s,l,n);G(g,p,e,s,l,o);G(g,p,e,r,m,o);G(g,p,t,r,m,n);G(g,q,t,s,l,n);G(g,q,e,s,l,o);G(g,q,e,r,m,o);G(g,q,t,r,m,n);G(g,q,t,r,l,n);G(g,q,e,r,l,o);G(g,q,e,s,m,o);G(g,q,t,s,m,n);p
=d-0.5;d=d+0.5;q=f-0.25;f=f+0.25;G(g,p,t,q,l,n);G(g,p,e,q,l,o);G(g,d,e,q,m,o);G(g,d,t,q,m,n);G(g,d,t,q,l,n);G(g,d,e,q,l,o);G(g,p,e,q,m,o);G(g,p,t,q,m,n);G(g,d,t,f,l,n);G(g,d,e,f,l,o);G(g,p,e,f,m,o);G(g,p,t,f,m,n);G(g,p,t,f,l,n);G(g,p,e,f,l,o);G(g,d,e,f,m,o);G(g,d,t,f,m,n);}
function AB1(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();bC=$T.l();bB=$T.l();bA=$T.l();bz=$T.l();by=$T.l();bx=$T.l();bw=$T.l();bv=$T.l();bu=$T.l();bt=$T.l();bs=$T.l();br=$T.l();bq=$T.l();bp=$T.l();bo=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w
=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeL;g=a.F;h=d+1|0;i=1;$p=1;case 1:$z=b.pD(g,c,h,e,i);if(C()){break _;}h=$z;g=a.F;i=d-1|0;j=0;$p=2;case 2:$z=b.pD(g,c,i,e,j);if(C()){break _;}j=$z;k=$rt_createBooleanArray(4).data;l=0;g=a.F;m=e-1|0;n=2;$p=3;case 3:$z=b.pD(g,c,d,m,n);if(C()){break _;}n=$z;k[l]=n;n=1;g
=a.F;o=e+1|0;l=3;$p=4;case 4:$z=b.pD(g,c,d,o,l);if(C()){break _;}l=$z;k[n]=l;n=2;g=a.F;p=c-1|0;l=4;$p=5;case 5:$z=b.pD(g,p,d,e,l);if(C()){break _;}l=$z;k[n]=l;n=3;g=a.F;q=c+1|0;l=5;$p=6;case 6:$z=b.pD(g,q,d,e,l);if(C()){break _;}l=$z;k[n]=l;if(!h&&!j&&!k[0]&&!k[1]&&!k[2]&&!k[3])return 0;r=0;s=0.5;t=1.0;u=0.800000011920929;v=0.6000000238418579;w=0.0;x=1.0;y=b.b8;g=a.F;$p=7;case 7:$z=g.eF(c,d,e);if(C()){break _;}z=$z;$p=8;case 8:$z=APx(a,c,d,e,y);if(C()){break _;}ba=$z;$p=9;case 9:$z=APx(a,c,d,o,y);if(C()){break _;}bb
=$z;$p=10;case 10:$z=APx(a,q,d,o,y);if(C()){break _;}bc=$z;$p=11;case 11:$z=APx(a,q,d,e,y);if(C()){break _;}bd=$z;if(!a.dM&&!h){if(!a.dM&&!j){i=0;be=d;bf=d+0|0;bg=c;bh=q;bi=e;bj=o;a:{while(i<4){h=!i?m:e;n=R(i,1);if(!n)h=h+1|0;l=R(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.eV(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.dM)break a;if(k[i])break a;i=i+1|0;}b.cJ=w;b.cB=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp=bh;s=bi;bq=bj;}else{bm=bb;bn
=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.F;$p=15;continue _;}g=a.F;$p=13;continue _;}r=1;bx=b.eV(1,z);g=a.F;$p=12;case 12:$z=A6g(g,c,d,e,y);if(C()){break _;}by=$z;bm=by;h=R(bm,(-999.0));if(h>0)bx=b.eV(2,z);n=(bx&15)<<4;l=bx&240;by=(n+8.0)/256.0;bz=(l+8.0)/256.0;if(h<0)bm=0.0;else{by=(n+16|0)/256.0;bz=(l+16|0)/256.0;}bn=Bq(bm)*8.0/256.0;bo=BC(bm)*8.0/256.0;g=a.F;$p=14;continue _;case 13:$z
=b.Cs(g,c,i,e);if(C()){break _;}bp=$z;bm=s*bp;Cq(f,bm,bm,bm);HD(a,b,c,d,e,b.cf(0));r=1;i=0;be=d;bf=d+0|0;bg=c;bh=q;bi=e;bj=o;b:{while(i<4){h=!i?m:e;n=R(i,1);if(!n)h=h+1|0;l=R(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.eV(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.dM)break b;if(k[i])break b;i=i+1|0;}b.cJ=w;b.cB=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp=bh;s=bi;bq=bj;}else{bm=bb;bn=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=
((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.F;$p=15;continue _;case 14:$z=b.Cs(g,c,d,e);if(C()){break _;}bi=$z;bm=t*bi;Cq(f,bm,bm,bm);bA=c+0|0;bm=d;br=bm+ba;bu=e+0|0;bB=bo;bf=by-bB;bw=bn;bC=bf-bw;bs=bz-bB;G(f,bA,br,bu,bC,bs+bw);bC=bm+bb;bv=o;bf=bf+bw;br=bz+bB;G(f,bA,bC,bv,bf,br+bw);bA=q;bf=bm+bc;by=by+bB;G(f,bA,bf,bv,by+bw,br-bw);G(f,bA,bm+bd,bu,by-bw,bs-bw);if(!a.dM&&!j){i=0;be=d;bf=d+0|0;bg=c;bh=q;bi=e;bj=o;c:{while(i<4){h=!i?m:e;n=R(i,
1);if(!n)h=h+1|0;l=R(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.eV(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.dM)break c;if(k[i])break c;i=i+1|0;}b.cJ=w;b.cB=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp=bh;s=bi;bq=bj;}else{bm=bb;bn=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.F;$p=15;continue _;}g=a.F;$p=13;continue _;case 15:$z
=b.Cs(g,o,d,h);if(C()){break _;}bt=$z;bt=t*(l>=0?bt*v:bt*u);Cq(f,bt,bt,bt);bC=bo;by=be+bm;bA=s;G(f,bC,by,bA,br,bu);by=bp;bu=be+bn;bB=bq;G(f,by,bu,bB,bs,bv);G(f,by,bf,bB,bs,bw);G(f,bC,bf,bA,br,bw);c:{while(true){i=i+1|0;if(i>=4)break;h=!i?m:e;n=R(i,1);if(!n)h=h+1|0;l=R(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.eV(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.dM)break c;if(k[i])break c;}b.cJ=w;b.cB=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp
=bh;s=bi;bq=bj;}else{bm=bb;bn=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.F;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,$p);}
function APx(a,b,c,d,e){var f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=0.0;h=0;i=c+1|0;if(h>=4)return 1.0-g/f;j=b-(h&1)|0;k=d-(h>>1&1)|0;l=a.F;$p=1;case 1:$z=l.oI(j,i,k);if(C()){break _;}l=$z;if(l===e)return 1.0;l=a.F;$p=2;case 2:$z=l.oI(j,c,k);if(C()){break _;}l=$z;if(l===e){l=a.F;$p=3;continue _;}if(!l.dt()){g=g+1.0;f=f+1|0;}h=h+1|0;if(h
>=4)return 1.0-g/f;j=b-(h&1)|0;k=d-(h>>1&1)|0;l=a.F;$p=1;continue _;case 3:$z=l.eF(j,c,k);if(C()){break _;}m=$z;if(!(m<8&&m)){g=g+Jr(m)*10.0;f=f+10|0;}g=g+Jr(m);f=f+1|0;h=h+1|0;if(h>=4)return 1.0-g/f;j=b-(h&1)|0;k=d-(h>>1&1)|0;l=a.F;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AIY(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=0.5;h=1.0;i=0.800000011920929;j=0.6000000238418579;BA();k=BeL;Bz(k);$p=1;case 1:$z=b.Cs(c,d,e,f);if(C()){break _;}l=$z;m=e-1|0;$p=2;case 2:$z=b.Cs(c,d,m,f);if(C()){break _;}n=$z;if(n<l)n=l;n=g*n;Cq(k,n,n,n);HD(a,b,(-0.5),(-0.5),(-0.5),b.cf(0));m=e+1|0;$p=3;case 3:$z
=b.Cs(c,d,m,f);if(C()){break _;}n=$z;if(n<l)n=l;h=h*n;Cq(k,h,h,h);JC(a,b,(-0.5),(-0.5),(-0.5),b.cf(1));m=f-1|0;$p=4;case 4:$z=b.Cs(c,d,e,m);if(C()){break _;}h=$z;if(h<l)h=l;h=i*h;Cq(k,h,h,h);JS(a,b,(-0.5),(-0.5),(-0.5),b.cf(2));m=f+1|0;$p=5;case 5:$z=b.Cs(c,d,e,m);if(C()){break _;}h=$z;if(h<l)h=l;h=i*h;Cq(k,h,h,h);J8(a,b,(-0.5),(-0.5),(-0.5),b.cf(3));m=d-1|0;$p=6;case 6:$z=b.Cs(c,m,e,f);if(C()){break _;}h=$z;if(h<l)h=l;h=j*h;Cq(k,h,h,h);JM(a,b,(-0.5),(-0.5),(-0.5),b.cf(4));d=d+1|0;$p=7;case 7:$z=b.Cs(c,d,e,
f);if(C()){break _;}h=$z;if(h>=l)l=h;h=j*l;Cq(k,h,h,h);KP(a,b,(-0.5),(-0.5),(-0.5),b.cf(5));Br(k);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ABR(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=1.0;$p=1;case 1:$z=ALr(a,b,c,d,e,f,f,f);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ALr(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();i=BeL;j=0;k=0.5*f;l=1.0*f;m=0.800000011920929*f;n=0.6000000238418579*f;o=0.5
*g;p=1.0*g;q=0.800000011920929*g;r=0.6000000238418579*g;s=0.5*h;t=1.0*h;u=0.800000011920929*h;v=0.6000000238418579*h;w=a.F;$p=1;case 1:$z=b.Cs(w,c,d,e);if(C()){break _;}x=$z;if(a.dM){w=a.F;y=d-1|0;$p=2;continue _;}w=a.F;z=d-1|0;y=0;$p=3;continue _;case 2:$z=b.Cs(w,c,y,e);if(C()){break _;}ba=$z;if(BgD.data[b.b]>0)ba=1.0;Cq(i,k*ba,o*ba,s*ba);bb=c;bc=d;bd=e;w=a.F;y=0;$p=4;continue _;case 3:$z=b.pD(w,c,z,e,y);if(C()){break _;}y=$z;if(y){w=a.F;y=d-1|0;$p=2;continue _;}if(a.dM){w=a.F;y=d+1|0;$p=5;continue _;}w=a.F;y
=d+1|0;z=1;$p=6;continue _;case 4:$z=b.ud(w,c,d,e,y);if(C()){break _;}y=$z;HD(a,b,bb,bc,bd,y);j=1;if(a.dM){w=a.F;y=d+1|0;$p=5;continue _;}w=a.F;y=d+1|0;z=1;$p=6;continue _;case 5:$z=b.Cs(w,c,y,e);if(C()){break _;}ba=$z;if(b.cB!==1.0&&!b.b8.nz())ba=x;if(BgD.data[b.b]>0)ba=1.0;Cq(i,l*ba,p*ba,t*ba);bb=c;bc=d;bd=e;w=a.F;y=1;$p=9;continue _;case 6:$z=b.pD(w,c,y,e,z);if(C()){break _;}y=$z;if(y){w=a.F;y=d+1|0;$p=5;continue _;}if(a.dM){w=a.F;y=e-1|0;$p=7;continue _;}w=a.F;y=e-1|0;z=2;$p=8;continue _;case 7:$z=b.Cs(w,
c,d,y);if(C()){break _;}ba=$z;if(b.c9>0.0)ba=x;if(BgD.data[b.b]>0)ba=1.0;Cq(i,m*ba,q*ba,u*ba);bb=c;bc=d;bd=e;w=a.F;y=2;$p=12;continue _;case 8:$z=b.pD(w,c,d,y,z);if(C()){break _;}y=$z;if(y){w=a.F;y=e-1|0;$p=7;continue _;}if(a.dM){w=a.F;y=e+1|0;$p=10;continue _;}w=a.F;y=e+1|0;z=3;$p=11;continue _;case 9:$z=b.ud(w,c,d,e,y);if(C()){break _;}y=$z;JC(a,b,bb,bc,bd,y);j=1;if(a.dM){w=a.F;y=e-1|0;$p=7;continue _;}w=a.F;y=e-1|0;z=2;$p=8;continue _;case 10:$z=b.Cs(w,c,d,y);if(C()){break _;}ba=$z;if(b.db<1.0)ba=x;if(BgD.data[b.b]
>0)ba=1.0;Cq(i,m*ba,q*ba,u*ba);bb=c;bc=d;bd=e;w=a.F;y=3;$p=15;continue _;case 11:$z=b.pD(w,c,d,y,z);if(C()){break _;}y=$z;if(y){w=a.F;y=e+1|0;$p=10;continue _;}if(a.dM){w=a.F;y=c-1|0;$p=13;continue _;}w=a.F;y=c-1|0;z=4;$p=14;continue _;case 12:$z=b.ud(w,c,d,e,y);if(C()){break _;}y=$z;JS(a,b,bb,bc,bd,y);j=1;if(a.dM){w=a.F;y=e+1|0;$p=10;continue _;}w=a.F;y=e+1|0;z=3;$p=11;continue _;case 13:$z=b.Cs(w,y,d,e);if(C()){break _;}ba=$z;if(b.c$>0.0)ba=x;if(BgD.data[b.b]>0)ba=1.0;Cq(i,n*ba,r*ba,v*ba);bb=c;bc=d;bd=e;w
=a.F;y=4;$p=18;continue _;case 14:$z=b.pD(w,y,d,e,z);if(C()){break _;}y=$z;if(y){w=a.F;y=c-1|0;$p=13;continue _;}if(a.dM){w=a.F;y=c+1|0;$p=16;continue _;}w=a.F;y=c+1|0;z=5;$p=17;continue _;case 15:$z=b.ud(w,c,d,e,y);if(C()){break _;}y=$z;J8(a,b,bb,bc,bd,y);j=1;if(a.dM){w=a.F;y=c-1|0;$p=13;continue _;}w=a.F;y=c-1|0;z=4;$p=14;continue _;case 16:$z=b.Cs(w,y,d,e);if(C()){break _;}ba=$z;if(b.da>=1.0)x=ba;if(BgD.data[b.b]>0)x=1.0;Cq(i,n*x,r*x,v*x);bb=c;bc=d;bd=e;i=a.F;y=5;$p=19;continue _;case 17:$z=b.pD(w,y,d,e,
z);if(C()){break _;}y=$z;if(!y)return j;w=a.F;y=c+1|0;$p=16;continue _;case 18:$z=b.ud(w,c,d,e,y);if(C()){break _;}y=$z;JM(a,b,bb,bc,bd,y);j=1;if(a.dM){w=a.F;y=c+1|0;$p=16;continue _;}w=a.F;y=c+1|0;z=5;$p=17;continue _;case 19:$z=b.ud(i,c,d,e,y);if(C()){break _;}c=$z;KP(a,b,bb,bc,bd,c);j=1;return j;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function AFH(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;Bo(b,0.375,0.0,0.375,0.625,1.0,0.625);$p=1;case 1:ABR(a,b,c,d,e);if(C()){break _;}g=0;h=0;i=a.F;j=c-1|0;$p=2;case 2:$z=i.ef(j,d,e);if(C()){break _;}j=$z;if(j!=b.b){i=a.F;j=c+1|0;$p=3;continue _;}g=1;i=a.F;j=e-1|0;$p=4;continue _;case 3:$z=i.ef(j,d,e);if(C()){break _;}j
=$z;if(j==b.b)g=1;i=a.F;j=e-1|0;$p=4;case 4:$z=i.ef(c,d,j);if(C()){break _;}j=$z;if(j!=b.b){i=a.F;j=e+1|0;$p=5;continue _;}h=1;if(!g&&!h)g=1;k=0.4375;l=0.5625;m=0.75;n=0.9375;if(g){Bo(b,0.0,m,k,1.0,n,l);$p=6;continue _;}if(h){Bo(b,k,m,0.0,l,n,1.0);$p=7;continue _;}m=0.375;n=0.5625;if(g){Bo(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bo(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 5:$z=i.ef(c,d,j);if(C()){break _;}j=$z;if(j==b.b)h=1;if(!g&&!h)g=1;k=0.4375;l=0.5625;m=0.75;n=0.9375;if
(g){Bo(b,0.0,m,k,1.0,n,l);$p=6;continue _;}if(h){Bo(b,k,m,0.0,l,n,1.0);$p=7;continue _;}m=0.375;n=0.5625;if(g){Bo(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bo(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 6:ABR(a,b,c,d,e);if(C()){break _;}if(h){Bo(b,k,m,0.0,l,n,1.0);$p=7;continue _;}m=0.375;n=0.5625;if(g){Bo(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bo(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 7:ABR(a,b,c,d,e);if(C()){break _;}m=0.375;n
=0.5625;if(g){Bo(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bo(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 8:ABR(a,b,c,d,e);if(C()){break _;}if(!h){Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bo(b,k,m,0.0,l,n,1.0);$p=9;case 9:ABR(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function AIv(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=a.F;$p=1;case 1:$z=g.eF(c,d,e);if(C()){break _;}h=$z;if(!h){Bo(b,0.0,0.0,0.0,0.5,0.5,1.0);$p=2;continue _;}if(h==1){Bo(b,0.0,0.0,0.0,0.5,1.0,1.0);$p=4;continue _;}if(h==2){Bo(b,0.0,0.0,0.0,1.0,0.5,0.5);$p=6;continue _;}if(h!=3){Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bo(b,0.0,0.0,0.0,1.0,1.0,0.5);$p=8;continue _;case 2:ABR(a,
b,c,d,e);if(C()){break _;}Bo(b,0.5,0.0,0.0,1.0,1.0,1.0);$p=3;case 3:ABR(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;case 4:ABR(a,b,c,d,e);if(C()){break _;}Bo(b,0.5,0.0,0.0,1.0,0.5,1.0);$p=5;case 5:ABR(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;case 6:ABR(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.5,1.0,1.0,1.0);$p=7;case 7:ABR(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;case 8:ABR(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.5,1.0,0.5,1.0);$p
=9;case 9:ABR(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AKB(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeL;g=b;h=0.5;i=1.0;j=0.800000011920929;k=0.6000000238418579;l=a.F;$p=1;case 1:$z=b.Cs(l,c,d,e);if(C()){break _;}m=$z;l=a.F;n=d-1|0;$p=2;case 2:$z=b.Cs(l,c,n,e);if(C()){break _;}o=$z;if(g.cJ>0.0)o=m;if(BgD.data[b.b]
>0)o=1.0;h=h*o;Cq(f,h,h,h);p=c;q=d;r=e;l=a.F;n=0;$p=3;case 3:$z=b.ud(l,c,d,e,n);if(C()){break _;}n=$z;HD(a,b,p,q,r,n);l=a.F;n=d+1|0;$p=4;case 4:$z=b.Cs(l,c,n,e);if(C()){break _;}h=$z;if(g.cB<1.0)h=m;if(BgD.data[b.b]>0)h=1.0;i=i*h;Cq(f,i,i,i);l=a.F;n=1;$p=5;case 5:$z=b.ud(l,c,d,e,n);if(C()){break _;}n=$z;JC(a,b,p,q,r,n);l=a.F;n=e-1|0;$p=6;case 6:$z=b.Cs(l,c,d,n);if(C()){break _;}i=$z;if(g.c9>0.0)i=m;if(BgD.data[b.b]>0)i=1.0;i=j*i;Cq(f,i,i,i);l=a.F;n=2;$p=7;case 7:$z=b.ud(l,c,d,e,n);if(C()){break _;}s=$z;if(s
<0){a.fo=1;s= -s;}JS(a,b,p,q,r,s);a.fo=0;l=a.F;n=e+1|0;$p=8;case 8:$z=b.Cs(l,c,d,n);if(C()){break _;}i=$z;if(g.db<1.0)i=m;if(BgD.data[b.b]>0)i=1.0;i=j*i;Cq(f,i,i,i);l=a.F;n=3;$p=9;case 9:$z=b.ud(l,c,d,e,n);if(C()){break _;}s=$z;if(s<0){a.fo=1;s= -s;}J8(a,b,p,q,r,s);a.fo=0;l=a.F;n=c-1|0;$p=10;case 10:$z=b.Cs(l,n,d,e);if(C()){break _;}i=$z;if(g.c$>0.0)i=m;if(BgD.data[b.b]>0)i=1.0;i=k*i;Cq(f,i,i,i);l=a.F;n=4;$p=11;case 11:$z=b.ud(l,c,d,e,n);if(C()){break _;}s=$z;if(s<0){a.fo=1;s= -s;}JM(a,b,p,q,r,s);a.fo=0;l=a.F;n
=c+1|0;$p=12;case 12:$z=b.Cs(l,n,d,e);if(C()){break _;}i=$z;if(g.da>=1.0)m=i;if(BgD.data[b.b]>0)m=1.0;i=k*m;Cq(f,i,i,i);l=a.F;n=5;$p=13;case 13:$z=b.ud(l,c,d,e,n);if(C()){break _;}c=$z;if(c<0){a.fo=1;c= -c;}KP(a,b,p,q,r,c);a.fo=0;return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function HD(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeL;if(a.cw>=0)f=a.cw;h=(f&15)<<4;i=f&240;j=h;k=(j+b.c$*16.0)/256.0;l=(j+b.da*16.0-0.01)/256.0;j=i;m=(j+b.c9*16.0)/256.0;n=(j+b.db*16.0-0.01)/256.0;if(!(b.c$>=0.0&&b.da<=1.0)){o=h;k=(o+0.0)/256.0;l=(o+15.989999771118164)/256.0;}if(!(b.c9>=0.0&&b.db<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.c$;q=c+b.da;r=d+b.cJ;s=e+b.c9;t=e+b.db;G(g,j,r,t,k,n);G(g,j,r,s,k,m);G(g,q,r,s,l,m);G(g,q,r,t,l,n);}
function JC(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeL;if(a.cw>=0)f=a.cw;h=(f&15)<<4;i=f&240;j=h;k=(j+b.c$*16.0)/256.0;l=(j+b.da*16.0-0.01)/256.0;j=i;m=(j+b.c9*16.0)/256.0;n=(j+b.db*16.0-0.01)/256.0;if(!(b.c$>=0.0&&b.da<=1.0)){o=h;k=(o+0.0)/256.0;l=(o+15.989999771118164)/256.0;}if(!(b.c9>=0.0&&b.db<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.c$;q=c+b.da;r=d+b.cB;s=e+b.c9;t=e+b.db;G(g,q,r,t,l,n);G(g,q,r,s,l,m);G(g,j,r,s,k,m);G(g,j,r,t,k,n);}
function JS(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeL;if(a.cw>=0)f=a.cw;h=(f&15)<<4;i=f&240;j=h;k=(j+b.c$*16.0)/256.0;j=(j+b.da*16.0-0.01)/256.0;l=i;m=(l+b.cJ*16.0)/256.0;n=(l+b.cB*16.0-0.01)/256.0;if(!a.fo){l=j;j=k;k=l;}if(!(b.c$>=0.0&&b.da<=1.0)){o=h;j=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cJ>=0.0&&b.cB<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}l=c+b.c$;q=c+b.da;r=d+b.cJ;s=d+b.cB;t=e+b.c9;G(g,l,s,t,k,m);G(g,q,s,t,j,m);G(g,q,r,t,j,n);G(g,l,r,t,k,n);}
function J8(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeL;if(a.cw>=0)f=a.cw;h=(f&15)<<4;i=f&240;j=h;k=(j+b.c$*16.0)/256.0;j=(j+b.da*16.0-0.01)/256.0;l=i;m=(l+b.cJ*16.0)/256.0;n=(l+b.cB*16.0-0.01)/256.0;if(!a.fo){l=j;j=k;k=l;}if(!(b.c$>=0.0&&b.da<=1.0)){o=h;j=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cJ>=0.0&&b.cB<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}l=c+b.c$;q=c+b.da;r=d+b.cJ;s=d+b.cB;t=e+b.db;G(g,l,s,t,j,m);G(g,l,r,t,j,n);G(g,q,r,t,k,n);G(g,q,s,t,k,m);}
function JM(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeL;if(a.cw>=0)f=a.cw;h=(f&15)<<4;i=f&240;j=h;k=(j+b.c9*16.0)/256.0;l=(j+b.db*16.0-0.01)/256.0;j=i;m=(j+b.cJ*16.0)/256.0;n=(j+b.cB*16.0-0.01)/256.0;if(!a.fo){j=l;l=k;k=j;}if(!(b.c9>=0.0&&b.db<=1.0)){o=h;l=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cJ>=0.0&&b.cB<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.c$;q=d+b.cJ;r=d+b.cB;s=e+b.c9;t=e+b.db;G(g,j,r,t,k,m);G(g,j,r,s,l,m);G(g,j,q,s,l,n);G(g,j,q,t,k,n);}
function KP(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeL;if(a.cw>=0)f=a.cw;h=(f&15)<<4;i=f&240;j=h;k=(j+b.c9*16.0)/256.0;l=(j+b.db*16.0-0.01)/256.0;j=i;m=(j+b.cJ*16.0)/256.0;n=(j+b.cB*16.0-0.01)/256.0;if(!a.fo){j=l;l=k;k=j;}if(!(b.c9>=0.0&&b.db<=1.0)){o=h;l=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cJ>=0.0&&b.cB<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.da;q=d+b.cJ;r=d+b.cB;s=e+b.c9;t=e+b.db;G(g,j,q,t,l,n);G(g,j,q,s,k,n);G(g,j,r,s,k,m);G(g,j,r,t,l,m);}
function GV(a,b){var c,d;a:{BA();c=BeL;d=b.ei();if(d){if(d==1){Bz(c);Cj(0.0,(-1.0),0.0);Uh(a,b,(-1),(-0.5),(-0.5),(-0.5));Br(c);}else if(d==6){Bz(c);Cj(0.0,(-1.0),0.0);OI(a,b,(-1),(-0.5),(-0.5),(-0.5));Br(c);}else{if(d!=2){if(d==3)break a;if(d!=5)break a;else break a;}Bz(c);Cj(0.0,(-1.0),0.0);GE(a,b,(-0.5),(-0.5),(-0.5),0.0,0.0);Br(c);}}else{Bw((-0.5),(-0.5),(-0.5));Bz(c);Cj(0.0,(-1.0),0.0);HD(a,b,0.0,0.0,0.0,b.cf(0));Br(c);Bz(c);Cj(0.0,1.0,0.0);JC(a,b,0.0,0.0,0.0,b.cf(1));Br(c);Bz(c);Cj(0.0,0.0,(-1.0));JS(a,
b,0.0,0.0,0.0,b.cf(2));Br(c);Bz(c);Cj(0.0,0.0,1.0);J8(a,b,0.0,0.0,0.0,b.cf(3));Br(c);Bz(c);Cj((-1.0),0.0,0.0);JM(a,b,0.0,0.0,0.0,b.cf(4));Br(c);Bz(c);Cj(1.0,0.0,0.0);KP(a,b,0.0,0.0,0.0,b.cf(5));Br(c);Bw(0.5,0.5,0.5);}}}
function QC(){var a=this;D.call(a);a.jd=null;a.hj=null;a.f0=0;a.fZ=0;a.pB=0.0;a.mY=0.0;a.pA=0.0;a.bZ=0.0;a.bW=0.0;a.bT=0.0;a.wi=0;a.lN=0;a.lx=0;a.iM=0;a.BR=0;}
function BK(a,b){var c=new QC();A9i(c,a,b);return c;}
function A9i(a,b,c){a.wi=0;a.lN=0;a.lx=0;a.iM=1;a.BR=0;a.f0=b;a.fZ=c;}
function BG(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba;a.jd=J(EQ,8);a.hj=J(Fu,6);i=b+e;j=c+f;k=d+g;l=b-h;m=c-h;n=d-h;d=i+h;j=j+h;h=k+h;if(!a.lx){b=l;l=d;d=b;}a:{o=G1(d,m,n,0.0,0.0);p=G1(l,m,n,0.0,8.0);q=G1(l,j,n,8.0,8.0);r=G1(d,j,n,8.0,0.0);s=G1(d,m,h,0.0,0.0);t=G1(l,m,h,0.0,8.0);u=G1(l,j,h,8.0,8.0);v=G1(d,j,h,8.0,0.0);a.jd.data[0]=o;a.jd.data[1]=p;a.jd.data[2]=q;a.jd.data[3]=r;a.jd.data[4]=s;a.jd.data[5]=t;a.jd.data[6]=u;a.jd.data[7]=v;w=a.hj.data;x=new Fu;y=J(EQ,4);z=y.data;z[0]=t;z[1]=p;z[2]
=q;z[3]=u;He(x,y,(a.f0+g|0)+e|0,a.fZ+g|0,((a.f0+g|0)+e|0)+g|0,(a.fZ+g|0)+f|0);w[0]=x;z=a.hj.data;x=new Fu;w=J(EQ,4);y=w.data;y[0]=o;y[1]=s;y[2]=v;y[3]=r;He(x,w,a.f0+0|0,a.fZ+g|0,a.f0+g|0,(a.fZ+g|0)+f|0);z[1]=x;z=a.hj.data;x=new Fu;w=J(EQ,4);y=w.data;y[0]=t;y[1]=s;y[2]=o;y[3]=p;He(x,w,a.f0+g|0,a.fZ+0|0,(a.f0+g|0)+e|0,a.fZ+g|0);z[2]=x;z=a.hj.data;x=new Fu;w=J(EQ,4);y=w.data;y[0]=q;y[1]=r;y[2]=v;y[3]=u;He(x,w,(a.f0+g|0)+e|0,a.fZ+0|0,((a.f0+g|0)+e|0)+e|0,a.fZ+g|0);z[3]=x;w=a.hj.data;x=new Fu;y=J(EQ,4);z=y.data;z[0]
=p;z[1]=o;z[2]=r;z[3]=q;He(x,y,a.f0+g|0,a.fZ+g|0,(a.f0+g|0)+e|0,(a.fZ+g|0)+f|0);w[4]=x;z=a.hj.data;r=new Fu;w=J(EQ,4);y=w.data;y[0]=s;y[1]=t;y[2]=u;y[3]=v;He(r,w,((a.f0+g|0)+e|0)+g|0,a.fZ+g|0,(((a.f0+g|0)+e|0)+g|0)+e|0,(a.fZ+g|0)+f|0);z[5]=r;if(a.lx){ba=0;while(true){if(ba>=a.hj.data.length)break a;ACS(a.hj.data[ba]);ba=ba+1|0;}}}}
function BJ(a,b,c,d){a.pB=b;a.mY=c;a.pA=d;}
function B_(a,b){var c,d;if(!a.BR&&a.iM){if(!a.wi){a.lN=IW(1);FF(a.lN,4864);BA();c=BeL;d=0;while(d<a.hj.data.length){APB(a.hj.data[d],c,b);d=d+1|0;}Ed();a.wi=1;}if(a.bZ===0.0&&a.bW===0.0&&a.bT===0.0){if(a.pB===0.0&&a.mY===0.0&&a.pA===0.0)FP(a.lN);else{Bw(a.pB*b,a.mY*b,a.pA*b);FP(a.lN);Bw( -a.pB*b, -a.mY*b, -a.pA*b);}}else{B3();Bw(a.pB*b,a.mY*b,a.pA*b);if(a.bT!==0.0)Bv(a.bT*57.2957763671875,0.0,0.0,1.0);if(a.bW!==0.0)Bv(a.bW*57.2957763671875,0.0,1.0,0.0);if(a.bZ!==0.0)Bv(a.bZ*57.2957763671875,1.0,0.0,0.0);FP(a.lN);BD();}}}
function E3(){D.call(this);}
function AOy(a,b){Q3(a,b,0,b.data.length);}
function ATe(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;a.nI(f[c]);e=e+1|0;c=g;}}
function A8W(a){return;}
function A9K(a){return;}
function F$(){E3.call(this);this.fl=null;}
function Bhj(a){var b=new F$();K8(b,a);return b;}
function K8(a,b){a.fl=b;}
function KN(a){var $$je;a:{try{a.fl.lq();break a;}catch($$e){$$je=Bi($$e);if($$je instanceof B1){}else{throw $$e;}}}a.fl.tK();}
function AA2(){var a=this;F$.call(a);a.GD=0;a.uD=0;a.hC=null;a.nO=null;a.AN=null;}
function AYI(a,b){var c=new AA2();A$B(c,a,b);return c;}
function A$B(a,b,c){K8(a,b);b=new U;X(b);a.hC=b;a.nO=$rt_createCharArray(32);a.GD=c;a.AN=A1F();}
function VM(a,b,c,d){var $$je;if(a.fl===null)a.uD=1;if(!(a.uD?0:1))return;a:{try{a.fl.gt(b,c,d);break a;}catch($$e){$$je=Bi($$e);if($$je instanceof B1){}else{throw $$e;}}a.uD=1;}}
function TF(a,b,c,d){var e,f,g,h,i;e=b.data;f=AM2(b,c,d-c|0);e=$rt_createByteArray(DB(16,CB(e.length,1024)));g=AAo(e);h=AGV(ACO(AG3(a.AN),Bf8),Bf8);while(true){i=IO(AJb(h,f,g,1));VM(a,e,0,g.bk);Ez(g);if(!i)break;}while(true){i=IO(XW(h,g));VM(a,e,0,g.bk);Ez(g);if(!i)break;}}
function AKD(a,b){a.nO.data[0]=b;TF(a,a.nO,0,1);}
function Kn(a,b){I(a.hC,b);J7(a);}
function ABJ(a,b){Dx(Be(a.hC,b),10);J7(a);}
function Cg(a,b){Dx(I(a.hC,b),10);J7(a);}
function ACg(a,b){Dx(FK(a.hC,b),10);J7(a);}
function APA(a){AKD(a,10);}
function J7(a){var b;b=a.hC.bX<=a.nO.data.length?a.nO:$rt_createCharArray(a.hC.bX);AAw(a.hC,0,a.hC.bX,b,0);TF(a,b,0,a.hC.bX);ANe(a.hC,0);}
function W_(){E3.call(this);}
function Bhk(){var a=new W_();A3r(a);return a;}
function A3r(a){return;}
function AYf(a,b){$rt_putStdout(b);}
function AFa(){Cb.call(this);this.Fo=null;}
function ALn(a){var b=new AFa();A03(b,a);return b;}
function A03(a,b){O(a);a.Fo=b;}
function MP(){var a=this;D.call(a);a.cc=null;a.A=0;a.N=0;a.G=Long_ZERO;a.uP=null;a.pK=0;a.ia=0;a.nm=Long_ZERO;a.b6=null;a.js=null;a.f8=null;}
function Bhl(){var a=new MP();OK(a);return a;}
function OK(a){a.f8=A9T();}
function AAE(a,b,c,d){a.uP=b;a.pK=c;a.ia=d;}
function AJ7(a,b,c,d,e){var f;if(d<=0&&e&&a.cc!==null)return;if(a.N>0&&e){f=$rt_createByteArray(a.N+d|0);Di(a.cc,a.A,f,0,a.N);Di(b,c,f,a.N,d);a.cc=f;a.A=0;a.N=a.N+d|0;}else{a.cc=b;a.A=c;a.N=d;}}
function Ud(){MP.call(this);this.rN=0;}
function Bhm(){var a=new Ud();A29(a);return a;}
function A29(a){OK(a);a.rN=0;AAR(a);}
function AAR(a){return ACF(a,15);}
function ACF(a,b){return RZ(a,b,0);}
function RZ(a,b,c){var d;a.rN=0;d=new LH;d.rM=Long_fromInt(-1);d.iD=(-1);d.xB=$rt_createByteArray(4);d.cG=null;d.fW=null;d.E=a;a.js=d;d=a.js;if(c)b= -b;return Xx(d,b);}
function AF4(a,b){var c;if(a.js===null)return (-2);c=AGC(a.js,b);if(c==1)a.rN=1;return c;}
function Ye(a){return a.js.bO!=12?0:1;}
function In(){var a=this;D.call(a);a.Cj=null;a.oN=0.0;a.pJ=0.0;}
function Ie(a,b,c){var d=new In();O0(d,a,b,c);return d;}
function O0(a,b,c,d){a.Cj=b;a.oN=c;a.pJ=d;}
function AMK(a){return a.oN;}
function Yc(a){return a.pJ;}
function Ke(a){var b;b=new U;X(b);return V(I(I(b,B(252)),a.Cj));}
function AHn(){In.call(this);}
function A_2(a,b,c){var d=new AHn();AZq(d,a,b,c);return d;}
function AZq(a,b,c,d){O0(a,b,c,d);}
function ACo(){In.call(this);}
function Bca(a,b,c){var d=new ACo();A7M(d,a,b,c);return d;}
function A7M(a,b,c,d){O0(a,b,c,d);}
function LO(){P.call(this);}
function Bbf(a,b){var c=new LO();AI5(c,a,b);return c;}
function AI5(a,b,c){C8(a,b,c,Bg_);}
function A8I(a,b,c){L();return BeZ.b;}
function Z2(){P.call(this);}
function BbI(a){var b=new Z2();AY1(b,a);return b;}
function AY1(a,b){DY(a,b,Bhn);a.bb=3;Fe(a,1);}
function A7r(a,b){return b==1?0:b?3:2;}
function ADn(a,b,c,d,e,f){var g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d+1|0;$p=1;case 1:$z=Xv(b,c,g,e);if(C()){break _;}h=$z;if(h>=4){$p=2;continue _;}$p=3;continue _;case 2:$z=Xv(b,c,g,e);if(C()){break _;}g=$z;if(g<9)return;h=(c+E(f,3)|0)-1|0;g=(d+E(f,5)|0)-3|0;i=(e+E(f,3)|0)-1|0;$p=4;continue _;case 3:$z=ABX(b,c,g,e);if(C()){break _;}j=$z;if(!j.sd()){$p=2;continue _;}if(E(f,
4))return;L();h=BeS.b;$p=6;continue _;case 4:$z=ACt(b,h,g,i);if(C()){break _;}c=$z;L();if(c!=BeS.b)return;c=g+1|0;$p=5;case 5:$z=Xv(b,h,c,i);if(C()){break _;}d=$z;if(d<4)return;$p=7;continue _;case 6:APu(b,c,d,e,h);if(C()){break _;}return;case 7:$z=ABX(b,h,c,i);if(C()){break _;}f=$z;if(f.sd())return;c=BeR.b;$p=8;case 8:APu(b,h,g,i,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AZ7(a,b,c){L();return BeS.dS(0,c);}
function AHT(){P.call(this);}
function A_7(a,b){var c=new AHT();AXx(c,a,b);return c;}
function AXx(a,b,c){C8(a,b,c,Bhn);}
function B8(){D.call(this);}
var Bf_=null;var Bhn=null;var Bha=null;var Bg_=null;var Bho=null;var BfQ=null;var BfR=null;var Bhp=null;var Bhq=null;var Bhr=null;var Bhc=null;var Bhs=null;var Bht=null;var Bhu=null;var Bhb=null;var Bhv=null;var Bhw=null;function Bhx(){var a=new B8();AQk(a);return a;}
function AQk(a){return;}
function A8m(a){return 0;}
function A0X(a){return 1;}
function A7R(a){return 1;}
function A5t(a){return 1;}
function AP3(){Bf_=new Of;Bhn=new B8;Bha=new B8;Bg_=new B8;Bho=new B8;BfQ=new LZ;BfR=new LZ;Bhp=new B8;Bhq=new N2;Bhr=new B8;Bhc=new B8;Bhs=new Of;Bht=new B8;Bhu=new N2;Bhb=new B8;Bhv=new B8;Bhw=new B8;}
function FY(){P.call(this);}
function A3j(a,b){var c=new FY();Lv(c,a,b);return c;}
function Lv(a,b,c){DY(a,b,Bhq);a.bb=c;Fe(a,1);Bo(a,0.30000001192092896,0.0,0.30000001192092896,0.699999988079071,0.6000000238418579,0.699999988079071);}
function ALS(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=d-1|0;$p=1;case 1:$z=ACt(b,c,d,e);if(C()){break _;}c=$z;return a.rj(c);default:E$();}}C3().s(a,b,c,d,e,$p);}
function AYj(a,b){L();return b!=BeR.b&&b!=BeS.b&&b!=Bg3.b?0:1;}
function AIF(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJn(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AD9(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJn(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AJn(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=a.G6(b,c,d,e);if(C()){break _;}f=$z;if(f)return;$p=2;case 2:$z=AEI(b,c,d,e);if(C()){break _;}f=$z;$p=3;case 3:Yd(a,b,c,d,e,f);if(C()){break _;}f=0;$p=4;case 4:APu(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AN5(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Xv(b,c,d,e);if(C()){break _;}f=$z;if(f<8){$p=3;continue _;}d=d-1|0;$p=2;case 2:$z=ACt(b,c,d,e);if(C()){break _;}c=$z;return !a.rj(c)?0:1;case 3:$z=AGe(b,c,d,e);if(C()){break _;}g=$z;if(!g)return 0;d=d-1|0;$p=2;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AGk(a,b,c,d,e){return null;}
function A6m(a){return 0;}
function ATY(a){return 0;}
function A7w(a){return 1;}
function AMV(){FY.call(this);}
function Bcu(a,b){var c=new AMV();A9E(c,a,b);return c;}
function A9E(a,b,c){Lv(a,b,c);Bo(a,0.09999999403953552,0.0,0.09999999403953552,0.8999999761581421,0.800000011920929,0.8999999761581421);}
function AEg(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJn(a,b,c,d,e);if(C()){break _;}g=d+1|0;$p=2;case 2:$z=Xv(b,c,g,e);if(C()){break _;}g=$z;if(g>=9&&!E(f,5)){$p=3;continue _;}return;case 3:$z=AEI(b,c,d,e);if(C()){break _;}g=$z;if(g>=15){g=0;$p=4;continue _;}g=g+1|0;$p=6;continue _;case 4:ALq(b,c,d,e,g);if(C()){break _;}h=new Q_;$p=5;case 5:$z=AEK(h,b,f,c,d,e);if(C()){break _;}g
=$z;if(g)return;g=a.b;$p=7;continue _;case 6:AKu(b,c,d,e,g);if(C()){break _;}return;case 7:ALq(b,c,d,e,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function HO(){P.call(this);this.qK=0;}
function Bhy(a,b){var c=new HO();PX(c,a,b);return c;}
function PX(a,b,c){C8(a,b,((c!==BfR?12:14)*16|0)+13|0,c);a.qK=1;if(c===BfR)a.qK=2;Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);Fe(a,1);}
function Jr(b){if(b>=8)b=0;return (b+1|0)/9.0;}
function AS$(a,b){return b&&b!=1?a.bb+1|0:a.bb;}
function AFf(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ABX(b,c,d,e);if(C()){break _;}f=$z;if(f!==a.b8)return (-1);$p=2;case 2:$z=AEI(b,c,d,e);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AEc(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.oI(c,d,e);if(C()){break _;}f=$z;if(f!==a.b8)return (-1);$p=2;case 2:$z=b.eF(c,d,e);if(C()){break _;}g=$z;if(g>=8)g=0;return g;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function A$_(a){return 0;}
function A$t(a){return 0;}
function A8F(a,b,c){return c&&!b?1:0;}
function ARv(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.oI(c,d,e);if(C()){break _;}g=$z;if(g===a.b8)c=0;else{if(f!=1){$p=2;continue _;}c=1;}return c;case 2:$z=AGu(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function Yb(a,b,c,d,e){return null;}
function A7Z(a){return 4;}
function A3d(a,b,c){return 0;}
function A6a(a,b){return 0;}
function AIL(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=BY(0.0,0.0,0.0);$p=1;case 1:$z=AEc(a,b,c,d,e);if(C()){break _;}g=$z;h=0;i=c-1|0;j=e-1|0;k=d-1|0;l=g-8|0;m=d-d|0;if(h>=4){$p=2;continue _;}n=!h?i:c;o=h==1?j:e;if(h==2)n=n+1|0;if(h==3)o=o+1|0;$p=7;continue _;case 2:$z=b.eF(c,d,e);if
(C()){break _;}n=$z;if(n<8)return CD(f);k=0;n=2;$p=3;case 3:$z=ARv(a,b,c,d,j,n);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=e+1|0;p=3;$p=4;continue _;}k=1;if(!k){n=4;$p=5;continue _;}k=1;if(!k){n=c+1|0;p=5;$p=6;continue _;}k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 4:$z=ARv(a,b,c,d,n,p);if(C()){break _;}n=$z;if(n)k=1;if(!k){n
=4;$p=5;continue _;}k=1;if(!k){n=c+1|0;p=5;$p=6;continue _;}k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 5:$z=ARv(a,b,i,d,e,n);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=c+1|0;p=5;$p=6;continue _;}k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k
=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 6:$z=ARv(a,b,n,d,e,p);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 7:$z=AEc(a,b,n,d,o);if(C()){break _;}p=$z;if(p<0){$p=8;continue _;}if(p>=0){q=p-g|0;f=Dk(f,Bj(n-c|0,q),Bj(m,q),Bj(o-e|0,q));}h=h+1
|0;if(h>=4){$p=2;continue _;}n=!h?i:c;o=h==1?j:e;if(h==2)n=n+1|0;if(h==3)o=o+1|0;continue _;case 8:$z=AEc(a,b,n,k,o);if(C()){break _;}p=$z;if(p>=0){q=p-l|0;f=Dk(f,Bj(n-c|0,q),Bj(m,q),Bj(o-e|0,q));}h=h+1|0;if(h>=4){$p=2;continue _;}n=!h?i:c;o=h==1?j:e;if(h==2)n=n+1|0;if(h==3)o=o+1|0;$p=7;continue _;case 9:$z=ARv(a,b,c,n,j,p);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d
=d+1|0;n=5;$p=12;continue _;case 10:$z=ARv(a,b,c,n,p,q);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 11:$z=ARv(a,b,i,n,e,p);if(C()){break _;}n=$z;if(n)k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;case 12:$z=ARv(a,b,c,d,e,n);if(C()){break _;}c=$z;if(c)k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,
m,n,o,p,q,$p);}
function ANa(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AIL(a,b,c,d,e);if(C()){break _;}h=$z;g.w=g.w+h.w;g.y=g.y+h.y;g.v=g.v+h.v;return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AU2(a){return a.b8===BfQ?5:a.b8!==BfR?0:30;}
function AEu(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.sH(c,d,e);if(C()){break _;}f=$z;d=d+1|0;$p=2;case 2:$z=b.sH(c,d,e);if(C()){break _;}g=$z;if(f>g)g=f;return g;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AQ9(a,b,c,d,e,f){return;}
function A$q(a){return 0;}
function YB(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.b8===BfQ&&!E(f,64)){$p=2;continue _;}if(a.b8!==BfR)return;g=d+1|0;$p=1;case 1:$z=ABX(b,c,g,e);if(C()){break _;}h=$z;if(h!==Bf_)return;$p=3;continue _;case 2:$z=AEI(b,c,d,e);if(C()){break _;}g=$z;if(g>0&&g<8)Ew(b,c+0.5,d+0.5,e+0.5,B(253),N(f)*0.25+0.75,N(f)*1.0+0.5);if(a.b8!==BfR)return;g=d+1|0;$p=1;continue _;case 3:$z=AAz(b,
c,g,e);if(C()){break _;}g=$z;if(!g&&!E(f,100))BW(b,B(254),c+N(f),d+a.cB,e+N(f),0.0,0.0,0.0);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function A6g(b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:g=null;if(f===BfQ){L();g=BfY;$p=1;continue _;}if(f!==BfR)return g.w===0.0&&g.v===0.0?(-1000.0):CR(g.v,g.w)-1.5707963267948966;L();f=BfZ;$p=2;continue _;case 1:$z=AIL(g,b,c,d,e);if(C()){break _;}g=$z;if(f!==BfR)return g.w===0.0&&g.v===0.0?(-1000.0):CR(g.v,g.w)-1.5707963267948966;L();f=BfZ;$p=2;case 2:$z=AIL(f,b,c,d,e);if(C()){break _;}g=$z;return g.w===
0.0&&g.v===0.0?(-1000.0):CR(g.v,g.w)-1.5707963267948966;default:E$();}}C3().s(b,c,d,e,f,g,$p);}
function ARP(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AO8(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function ALd(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AO8(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AO8(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACt(b,c,d,e);if(C()){break _;}f=$z;if(f==a.b&&a.b8===BfR){f=0;g=e-1|0;$p=2;continue _;}return;case 2:$z=ABX(b,c,d,g);if(C()){break _;}h=$z;if(h===BfQ)f=1;if(!f){g=e+1|0;$p=3;continue _;}f=1;if(!f){g=c-1|0;$p=4;continue _;}f=1;if(!f){g=c+1|0;$p=5;continue _;}f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 3:$z
=ABX(b,c,d,g);if(C()){break _;}h=$z;if(h===BfQ)f=1;if(!f){g=c-1|0;$p=4;continue _;}f=1;if(!f){g=c+1|0;$p=5;continue _;}f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 4:$z=ABX(b,g,d,e);if(C()){break _;}h=$z;if(h===BfQ)f=1;if(!f){g=c+1|0;$p=5;continue _;}f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 5:$z=ABX(b,g,d,e);if(C()){break _;}h=$z;if(h===BfQ)f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 6:$z=ABX(b,c,g,e);if(C()){break _;}h
=$z;if(h===BfQ)f=1;if(!f)return;$p=7;case 7:$z=AEI(b,c,d,e);if(C()){break _;}g=$z;if(!g){L();f=Bfl.b;$p=8;continue _;}if(g>4){JO(a,b,c,d,e);return;}L();f=BeZ.b;$p=9;continue _;case 8:APu(b,c,d,e,f);if(C()){break _;}JO(a,b,c,d,e);return;case 9:APu(b,c,d,e,f);if(C()){break _;}JO(a,b,c,d,e);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function JO(a,b,c,d,e){var f,g,h,i;Ew(b,c+0.5,d+0.5,e+0.5,B(215),0.5,2.5999999046325684+(N(b.q)-N(b.q))*0.800000011920929);f=0;g=c;h=d+1.2;i=e;while(f<8){BW(b,B(255),g+BP(),h,i+BP(),0.0,0.0,0.0);f=f+1|0;}}
function AEf(){var a=this;HO.call(a);a.me=0;a.hc=null;a.cR=null;}
function AUh(a,b){var c=new AEf();AY8(c,a,b);return c;}
function AY8(a,b,c){PX(a,b,c);a.me=0;a.hc=$rt_createBooleanArray(4);a.cR=$rt_createIntArray(4);}
function AG_(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEI(b,c,d,e);if(C()){break _;}f=$z;g=a.b+1|0;$p=2;case 2:AJk(b,c,d,e,g,f);if(C()){break _;}Jg(b,c,d,e,c,d,e);return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AON(a,b,c,d,e,f){var g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AFf(a,b,c,d,e);if(C()){break _;}g=$z;h=1;if(g<=0){$p=2;continue _;}i=(-100);a.me=0;j=c-1|0;$p=3;continue _;case 2:AG_(a,b,c,d,e);if(C()){break _;}j=d-1|0;$p=7;continue _;case 3:$z=AOK(a,b,j,d,e,i);if(C()){break _;}j=$z;k=c+1|0;$p=4;case 4:$z=AOK(a,b,k,d,e,j);if
(C()){break _;}j=$z;k=e-1|0;$p=5;case 5:$z=AOK(a,b,c,d,k,j);if(C()){break _;}j=$z;k=e+1|0;$p=6;case 6:$z=AOK(a,b,c,d,k,j);if(C()){break _;}j=$z;k=j+a.qK|0;if(!(k<8&&j>=0))k=(-1);j=d+1|0;$p=8;continue _;case 7:$z=ALU(a,b,c,j,e);if(C()){break _;}k=$z;if(!k){if(g<0)return;if(!g){$p=12;continue _;}$p=13;continue _;}if(g>=8){d=a.b;$p=10;continue _;}d=a.b;k=g+8|0;$p=9;continue _;case 8:$z=AFf(a,b,c,j,e);if(C()){break _;}l=$z;if(l>=0){$p=11;continue _;}if(a.me>=2&&a.b8===BfQ)k=0;if(a.b8===BfR&&g<8&&k<8&&k>g&&E(f,4))
{h=0;k=g;}if(k!=g){if(k>=0){$p=18;continue _;}j=0;$p=20;continue _;}if(h){$p=17;continue _;}k=g;g=k;j=d-1|0;$p=7;continue _;case 9:AIW(b,c,j,e,d,k);if(C()){break _;}return;case 10:AIW(b,c,j,e,d,g);if(C()){break _;}return;case 11:$z=AFf(a,b,c,j,e);if(C()){break _;}k=$z;if(k<8)k=k+8|0;if(a.me>=2&&a.b8===BfQ)k=0;if(a.b8===BfR&&g<8&&k<8&&k>g&&E(f,4)){h=0;k=g;}if(k!=g){if(k>=0){$p=18;continue _;}j=0;$p=20;continue _;}if(h){$p=17;continue _;}k=g;g=k;j=d-1|0;$p=7;continue _;case 12:$z=AK1(a,b,c,d,e);if(C()){break _;}m
=$z;l=g+a.qK|0;if(g>=8)l=1;if(l>=8)return;m=m.data;if(m[0]){j=c-1|0;$p=14;continue _;}if(m[1]){j=c+1|0;$p=15;continue _;}if(m[2]){j=e-1|0;$p=16;continue _;}if(!m[3])return;e=e+1|0;$p=21;continue _;case 13:$z=ACl(a,b,c,j,e);if(C()){break _;}j=$z;if(!j)return;$p=12;continue _;case 14:AO9(a,b,j,d,e,l);if(C()){break _;}if(m[1]){j=c+1|0;$p=15;continue _;}if(m[2]){j=e-1|0;$p=16;continue _;}if(!m[3])return;e=e+1|0;$p=21;continue _;case 15:AO9(a,b,j,d,e,l);if(C()){break _;}if(m[2]){j=e-1|0;$p=16;continue _;}if(!m[3])return;e
=e+1|0;$p=21;continue _;case 16:AO9(a,b,c,d,j,l);if(C()){break _;}if(!m[3])return;e=e+1|0;$p=21;continue _;case 17:AG_(a,b,c,d,e);if(C()){break _;}k=g;g=k;j=d-1|0;$p=7;continue _;case 18:AKu(b,c,d,e,k);if(C()){break _;}Fl(b,c,d,e,a.b);j=a.b;$p=19;case 19:AHM(b,c,d,e,j);if(C()){break _;}g=k;j=d-1|0;$p=7;continue _;case 20:APu(b,c,d,e,j);if(C()){break _;}g=k;j=d-1|0;$p=7;continue _;case 21:AO9(a,b,c,d,e,l);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AO9(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ALU(a,b,c,d,e);if(C()){break _;}g=$z;if(!g)return;$p=2;case 2:$z=ACt(b,c,d,e);if(C()){break _;}g=$z;if(g>0){if(a.b8!==BfR){L();h=BeP.data[g];$p=4;continue _;}JO(a,b,c,d,e);}g=a.b;$p=3;case 3:AIW(b,c,d,e,g,f);if(C()){break _;}return;case 4:$z=AEI(b,c,d,e);if(C()){break _;}g=$z;$p=5;case 5:h.IJ(b,c,d,e,g);if(C()){break _;}g
=a.b;$p=3;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ANQ(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=1000;i=0;j=R(g,1);k=R(g,3);l=R(g,2);m=c-1|0;n=e-1|0;o=d-1|0;p=R(f,4);q=f+1|0;a:{while(i<4){if(!(!i&&!j)){r=R(i,1);if(!(!r&&!g)){s=R(i,2);if(!(!s&&!k)){t=R(i,3);if(t)break a;if
(l)break a;}}}i=i+1|0;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;$p=1;case 1:$z=ACl(a,b,u,d,r);if(C()){break _;}t=$z;if(!t){$p=2;continue _;}b:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=R(i,1);if(!r&&!g)continue;s=R(i,2);if(!s&&!k)continue;t=R(i,3);if(t)break b;if(l)break b;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;continue _;case 2:$z=ABX(b,u,d,r);if(C()){break _;}v=$z;if(v!==a.b8){$p=3;continue _;}$p=4;continue _;case 3:$z=ACl(a,b,u,o,r);if(C()){break _;}t=$z;if(!t)return f;if
(p<0){$p=5;continue _;}c:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=R(i,1);if(!r&&!g)continue;s=R(i,2);if(!s&&!k)continue;t=R(i,3);if(t)break c;if(l)break c;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;$p=1;continue _;case 4:$z=AEI(b,u,d,r);if(C()){break _;}t=$z;if(t){$p=3;continue _;}b:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=R(i,1);if(!r&&!g)continue;s=R(i,2);if(!s&&!k)continue;t=R(i,3);if(t)break b;if(l)break b;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1
|0;$p=1;continue _;case 5:$z=ANQ(a,b,u,d,r,q,i);if(C()){break _;}t=$z;if(t<h)h=t;c:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=R(i,1);if(!r&&!g)continue;s=R(i,2);if(!s&&!k)continue;t=R(i,3);if(t)break c;if(l)break c;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function AK1(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=c-1|0;h=e-1|0;i=d-1|0;if(f>=4){c=a.cR.data[0];j=1;while(j<4){if(a.cR.data[j]<c)c=a.cR.data[j];j=j+1|0;}d=0;while(d<4){k=a.hc;k.data[d]=a.cR.data[d]!=c?0:1;d=d+1|0;}return a.hc;}a.cR.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;$p=1;case 1:$z
=ACl(a,b,l,d,m);if(C()){break _;}j=$z;if(!j){$p=2;continue _;}f=f+1|0;if(f>=4){c=a.cR.data[0];j=1;while(j<4){if(a.cR.data[j]<c)c=a.cR.data[j];j=j+1|0;}d=0;while(d<4){k=a.hc;k.data[d]=a.cR.data[d]!=c?0:1;d=d+1|0;}return a.hc;}a.cR.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;continue _;case 2:$z=ABX(b,l,d,m);if(C()){break _;}n=$z;if(n!==a.b8){$p=3;continue _;}$p=4;continue _;case 3:$z=ACl(a,b,l,i,m);if(C()){break _;}j=$z;if(j){k=a.cR.data;j=1;$p=5;continue _;}a.cR.data[f]=0;f=f+1|0;if(f>=
4){c=a.cR.data[0];j=1;while(j<4){if(a.cR.data[j]<c)c=a.cR.data[j];j=j+1|0;}d=0;while(d<4){k=a.hc;k.data[d]=a.cR.data[d]!=c?0:1;d=d+1|0;}return a.hc;}a.cR.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;$p=1;continue _;case 4:$z=AEI(b,l,d,m);if(C()){break _;}j=$z;if(j){$p=3;continue _;}f=f+1|0;if(f>=4){c=a.cR.data[0];j=1;while(j<4){if(a.cR.data[j]<c)c=a.cR.data[j];j=j+1|0;}d=0;while(d<4){k=a.hc;k.data[d]=a.cR.data[d]!=c?0:1;d=d+1|0;}return a.hc;}a.cR.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f
==2?h:e;if(f==3)m=m+1|0;$p=1;continue _;case 5:$z=ANQ(a,b,l,d,m,j,f);if(C()){break _;}j=$z;k[f]=j;f=f+1|0;if(f>=4){c=a.cR.data[0];j=1;while(j<4){if(a.cR.data[j]<c)c=a.cR.data[j];j=j+1|0;}d=0;while(d<4){k=a.hc;k.data[d]=a.cR.data[d]!=c?0:1;d=d+1|0;}return a.hc;}a.cR.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ACl(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACt(b,c,d,e);if(C()){break _;}f=$z;L();if(f!=Bg7.b&&f!=Bg6.b&&f!=Bgb.b){if(!f)return 0;return BeP.data[f].b8.dt();}return 1;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AOK(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AFf(a,b,c,d,e);if(C()){break _;}g=$z;if(g<0)return f;if(!g)a.me=a.me+1|0;if(g>=8)g=0;if(f>=0&&g>=f)g=f;return g;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ALU(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ABX(b,c,d,e);if(C()){break _;}f=$z;if(f===a.b8)c=0;else{if(f!==BfR){$p=2;continue _;}c=0;}return c;case 2:$z=ACl(a,b,c,d,e);if(C()){break _;}c=$z;return c?0:1;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AB0(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AO8(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=ACt(b,c,d,e);if(C()){break _;}f=$z;if(f==a.b)Fl(b,c,d,e,a.b);return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AIJ(){HO.call(this);}
function AXF(a,b){var c=new AIJ();A2r(c,a,b);return c;}
function A2r(a,b,c){PX(a,b,c);Fe(a,0);}
function AGx(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AO8(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=ACt(b,c,d,e);if(C()){break _;}f=$z;if(f!=a.b)return;$p=3;case 3:$z=AEI(b,c,d,e);if(C()){break _;}g=$z;b.sh=1;f=a.b-1|0;$p=4;case 4:AJk(b,c,d,e,f,g);if(C()){break _;}Jg(b,c,d,e,c,d,e);Fl(b,c,d,e,a.b-1|0);b.sh=0;return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function I4(){P.call(this);}
var BeW=0;function BbD(a,b){var c=new I4();Rx(c,a,b);return c;}
function Rx(a,b,c){C8(a,b,c,Bht);}
function ARN(a,b,c,d,e){Fl(b,c,d,e,a.b);}
function ASb(a,b,c,d,e,f){Fl(b,c,d,e,a.b);}
function APy(a,b,c,d,e,f){var g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d-1|0;$p=1;case 1:$z=ACt(b,c,g,e);if(C()){break _;}g=$z;if(!g)g=1;else{L();if(g==Bgp.b)g=1;else{f=BeP.data[g].b8;g=f===BfQ?1:f!==BfR?0:1;}}if(g&&d>=0){f=new JI;h=c+0.5;i=d+0.5;j=e+0.5;c=a.b;Fy(f,b);f.oM=0;f.hQ=c;f.mw=1;DZ(f,0.9800000190734863,0.9800000190734863);f.c2=f.eL/2.0;k
=h;l=i;m=j;CT(f,k,l,m);f.g=0.0;f.i=0.0;f.h=0.0;f.i4=0;f.bR=k;f.cQ=l;f.bQ=m;if(!BeW){$p=2;continue _;}if(!f.cP){$p=3;continue _;}}return;case 2:AOf(b,f);if(C()){break _;}return;case 3:AML(f);if(C()){break _;}if(f.cP)return;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function A3W(a){return 3;}
function ACK(){BeW=0;}
function AG4(){I4.call(this);}
function BbM(a,b){var c=new AG4();AVX(c,a,b);return c;}
function AVX(a,b,c){Rx(a,b,c);}
function A_m(a,b,c){if(E(c,10))b=a.b;else{BB();b=Bhz.cU;}return b;}
function YT(){P.call(this);}
function SF(a,b){var c=new YT();AZw(c,a,b);return c;}
function AZw(a,b,c){C8(a,b,c,Bg_);}
function A4n(a,b,c){b=a.b;L();if(b==Bfe.b){BB();b=BhA.cU;}else if(a.b!=BgZ.b)b=a.b;else{BB();b=BhB.cU;}return b;}
function AZ6(a,b){return 1;}
function AFg(){P.call(this);}
function BcO(a){var b=new AFg();A_d(b,a);return b;}
function A_d(a,b){DY(a,b,Bha);a.bb=20;}
function A8X(a,b){return 1;}
function ATc(a,b,c){L();return Be2.b;}
function AVw(a,b){return b==1?21:b?20:21;}
function LV(){P.call(this);this.rX=0;}
function AQu(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.ef(c,d,e);if(C()){break _;}g=$z;if(!a.rX&&g==a.b)return 0;$p=2;case 2:$z=AGu(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ACC(){LV.call(this);this.Cl=0;}
function BaI(a,b){var c=new ACC();A0Z(c,a,b);return c;}
function A0Z(a,b,c){C8(a,b,c,Bhp);a.rX=0;a.Cl=c;Fe(a,1);}
function AIy(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d-1|0;$p=1;case 1:$z=ABX(b,c,g,e);if(C()){break _;}f=$z;if(f.dt())return;h=c-2|0;i=c+2|0;j=d+1|0;k=e-2|0;l=e+2|0;while(h<=i){m=g;while(m<=j){n=k;if(n<=l){$p=5;continue _;}m=m+1|0;}h=h+1|0;}$p=2;case 2:$z=AEI(b,c,d,e);if(C()){break _;}i=$z;$p=3;case 3:Yd(a,
b,c,d,e,i);if(C()){break _;}i=0;$p=4;case 4:APu(b,c,d,e,i);if(C()){break _;}return;case 5:$z=ACt(b,h,m,n);if(C()){break _;}o=$z;L();if(o==Be2.b)return;n=n+1|0;while(n>l){m=m+1|0;while(m>j){h=h+1|0;if(h>i){$p=2;continue _;}m=g;}n=k;}continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AW3(a,b){return E(b,10)?0:1;}
function A5d(a,b,c){L();return Be7.b;}
function A2P(a){return a.rX?0:1;}
function AKl(a,b){a.rX=b;a.bb=a.Cl+(!b?1:0)|0;}
function ASp(a,b,c,d,e,f){return;}
function ALc(){P.call(this);}
function Ba$(a){var b=new ALc();A8U(b,a);return b;}
function A8U(a,b){DY(a,b,Bhr);a.bb=48;}
function AKI(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-2|0;g=c+2|0;h=d-2|0;d=d+2|0;i=e-2|0;e=e+2|0;while(f<=g){j=h;while(j<=d){k=i;if(k<=e){$p=1;continue _;}j=j+1|0;}f=f+1|0;}return;case 1:$z=ABX(b,f,j,k);if(C()){break _;}l=$z;k=k+1|0;a:while(true){if(k<=e){continue _;}j=j+1|0;while(j>d){f=f+1|0;if(f>g)break a;j=h;}k=i;}return;default:E$();}}C3().s(a,
b,c,d,e,f,g,h,i,j,k,l,$p);}
function ANs(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-2|0;g=c+2|0;h=d-2|0;i=d+2|0;j=e-2|0;c=e+2|0;while(f<=g){k=h;while(k<=i){l=j;if(l<=c){$p=1;continue _;}k=k+1|0;}f=f+1|0;}return;case 1:$z=ACt(b,f,k,l);if(C()){break _;}d=$z;$p=2;case 2:AHM(b,f,k,l,d);if(C()){break _;}l=l+1|0;a:while(true){if(l<=c){$p=1;continue _;}k=k+1|0;while(k>i){f
=f+1|0;if(f>g)break a;k=h;}l=j;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function M9(){P.call(this);this.Cw=0;}
function A$c(a){return 0;}
function Yt(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.ef(c,d,e);if(C()){break _;}g=$z;if(!a.Cw&&g==a.b)return 0;$p=2;case 2:$z=AGu(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AQl(){M9.call(this);}
function Ba6(a,b,c,d){var e=new AQl();A5g(e,a,b,c,d);return e;}
function A5g(a,b,c,d,e){C8(a,b,c,d);a.Cw=e;}
function AV5(a,b){return 0;}
function AHc(){FY.call(this);}
function ATM(a,b){var c=new AHc();A$8(c,a,b);return c;}
function A$8(a,b,c){Lv(a,b,c);Bo(a,0.30000001192092896,0.0,0.30000001192092896,0.699999988079071,0.4000000059604645,0.699999988079071);}
function AI4(a,b){L();return BgA.data[b];}
function ADh(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Xv(b,c,d,e);if(C()){break _;}f=$z;if(f>13)return 0;d=d-1|0;$p=2;case 2:$z=ACt(b,c,d,e);if(C()){break _;}c=$z;return !AI4(a,c)?0:1;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ABr(){P.call(this);}
function AEA(a,b){var c=new ABr();AXU(c,a,b);return c;}
function AXU(a,b,c){DY(a,b,Bho);a.bb=c;}
function A4A(a,b){return b==1?a.bb-16|0:b?a.bb:a.bb+16|0;}
function Zd(){P.call(this);this.ws=0;}
function A9n(a,b){var c=new Zd();A6c(c,a,b);return c;}
function A6c(a,b,c){C8(a,b,6,Bg_);a.ws=c;if(!c)Bo(a,0.0,0.0,0.0,1.0,0.5,1.0);Gs(a,255);}
function A$L(a,b){return b>1?5:6;}
function A5S(a){return a.ws;}
function ABA(a,b,c,d,e,f){L();}
function ABg(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:L();f=d-1|0;$p=1;case 1:$z=ACt(b,c,f,e);if(C()){break _;}g=$z;if(g!=BeU.b)return;g=0;$p=2;case 2:APu(b,c,d,e,g);if(C()){break _;}d=BeT.b;$p=3;case 3:APu(b,c,f,e,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AZl(a,b,c){L();return BeU.b;}
function AW5(a){return a.ws;}
function ASB(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:L();if(a!==BeU){$p=1;continue _;}if(f==1)return 1;$p=2;continue _;case 1:AGu(a,b,c,d,e,f);if(C()){break _;}if(f==1)return 1;$p=2;case 2:$z=AGu(a,b,c,d,e,f);if(C()){break _;}g=$z;if(!g)c=0;else{if(f){$p=3;continue _;}c=1;}return c;case 3:$z=b.ef(c,d,e);if(C()){break _;}c=$z;return c==a.b?0:1;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AOe(){P.call(this);}
function BaJ(a,b){var c=new AOe();A0q(c,a,b);return c;}
function A0q(a,b,c){C8(a,b,c,Bhv);}
function A43(a,b){return !b?a.bb+2|0:b!=1?a.bb:a.bb+1|0;}
function AU$(a,b){return 0;}
function AGD(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=AWN(b,c+0.5,d+0.5,e+0.5);f.hm=E(b.q,f.hm/4|0)+(f.hm/8|0)|0;$p=1;case 1:AOf(b,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ASj(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=AWN(b,c+0.5,d+0.5,e+0.5);$p=1;case 1:AOf(b,g);if(C()){break _;}Dh(b,g,B(226),1.0,1.0);return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AC9(){P.call(this);}
function Bak(a,b){var c=new AC9();AUb(c,a,b);return c;}
function AUb(a,b,c){C8(a,b,c,Bha);}
function A_a(a,b){return b>1?a.bb:4;}
function A4C(a,b){return 0;}
function XJ(){LO.call(this);}
function Bbp(a,b){var c=new XJ();AZr(c,a,b);return c;}
function AZr(a,b,c){AI5(a,b,c);}
function A28(a,b){return 1;}
function AUU(a,b,c){L();return Bfl.b;}
function AOA(){P.call(this);}
function Bbb(a,b){var c=new AOA();A$Z(c,a,b);return c;}
function A$Z(a,b,c){C8(a,b,c,Bhu);Fe(a,1);}
function ANi(a,b,c,d,e){return null;}
function A2a(a){return 0;}
function AV$(a){return 0;}
function A0V(a){return 2;}
function AL5(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-1|0;$p=1;case 1:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=c+1|0;$p=2;case 2:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=e-1|0;$p=3;case 3:$z=AAz(b,c,d,f);if(C()){break _;}f=$z;if(f)return 1;f=e+1|0;$p=4;case 4:$z=AAz(b,c,d,f);if(C()){break _;}f=$z;if(f)return 1;d=d-1|0;$p=5;case 5:$z=AAz(b,c,d,e);if(C()){break _;}c=$z;return c;default:
E$();}}C3().s(a,b,c,d,e,f,$p);}
function ANM(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEI(b,c,d,e);if(C()){break _;}g=$z;if(f==1){h=d-1|0;$p=2;continue _;}if(f==2){h=e+1|0;$p=3;continue _;}if(f==3){h=e-1|0;$p=4;continue _;}if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 2:$z=AAz(b,c,h,e);if(C()){break _;}h=$z;if(h)g=5;if(f==2){h=e+1|0;$p=3;continue _;}if(f==3)
{h=e-1|0;$p=4;continue _;}if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 3:$z=AAz(b,c,d,h);if(C()){break _;}h=$z;if(h)g=4;if(f==3){h=e-1|0;$p=4;continue _;}if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 4:$z=AAz(b,c,d,h);if(C()){break _;}h=$z;if(h)g=3;if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 5:$z=AAz(b,h,d,e);if(C()){break _;}h=$z;if(h)g=2;if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 6:$z
=AAz(b,f,d,e);if(C()){break _;}f=$z;if(f)g=1;$p=7;case 7:AKu(b,c,d,e,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AR_(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEI(b,c,d,e);if(C()){break _;}g=$z;if(g)return;$p=2;case 2:ABq(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ABq(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-1|0;$p=1;case 1:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if(!f){f=c+1|0;$p=2;continue _;}f=1;$p=3;continue _;case 2:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if(!f){f=e-1|0;$p=4;continue _;}f=2;$p=5;continue _;case 3:AKu(b,c,d,e,f);if(C()){break _;}$p=6;continue _;case 4:$z=AAz(b,c,d,f);if(C()){break _;}f=$z;if(!f){f=e+1|0;$p=7;continue _;}f=3;$p=8;continue _;case 5:AKu(b,
c,d,e,f);if(C()){break _;}$p=6;case 6:AE7(a,b,c,d,e);if(C()){break _;}return;case 7:$z=AAz(b,c,d,f);if(C()){break _;}f=$z;if(!f){f=d-1|0;$p=9;continue _;}f=4;$p=10;continue _;case 8:AKu(b,c,d,e,f);if(C()){break _;}$p=6;continue _;case 9:$z=AAz(b,c,f,e);if(C()){break _;}f=$z;if(!f){$p=6;continue _;}f=5;$p=11;continue _;case 10:AKu(b,c,d,e,f);if(C()){break _;}$p=6;continue _;case 11:AKu(b,c,d,e,f);if(C()){break _;}$p=6;continue _;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AJ_(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AE7(a,b,c,d,e);if(C()){break _;}f=$z;if(!f)return;$p=2;case 2:$z=AEI(b,c,d,e);if(C()){break _;}g=$z;h=0;f=c-1|0;$p=3;case 3:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if(!f&&g==1)h=1;f=c+1|0;$p=4;case 4:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if(!f&&g==2)h=1;f=e-1|0;$p=5;case 5:$z=AAz(b,c,d,f);if(C()){break _;}f=$z;if(!f&&
g==3)h=1;f=e+1|0;$p=6;case 6:$z=AAz(b,c,d,f);if(C()){break _;}f=$z;if(!f&&g==4)h=1;f=d-1|0;$p=7;case 7:$z=AAz(b,c,f,e);if(C()){break _;}f=$z;if(!f&&g==5)h=1;if(!h)return;$p=8;case 8:$z=AEI(b,c,d,e);if(C()){break _;}f=$z;$p=9;case 9:Yd(a,b,c,d,e,f);if(C()){break _;}f=0;$p=10;case 10:APu(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AE7(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AL5(a,b,c,d,e);if(C()){break _;}f=$z;if(f)return 1;$p=2;case 2:$z=AEI(b,c,d,e);if(C()){break _;}f=$z;$p=3;case 3:Yd(a,b,c,d,e,f);if(C()){break _;}f=0;$p=4;case 4:APu(b,c,d,e,f);if(C()){break _;}return 0;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AKg(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEI(b,c,d,e);if(C()){break _;}h=$z;if(h==1)Bo(a,0.0,0.20000000298023224,0.3499999940395355,0.30000001192092896,0.800000011920929,0.6499999761581421);else if(h==2)Bo(a,0.699999988079071,0.20000000298023224,0.3499999940395355,1.0,0.800000011920929,0.6499999761581421);else if(h==3)Bo(a,0.3499999940395355,0.20000000298023224,
0.0,0.6499999761581421,0.800000011920929,0.30000001192092896);else if(h!=4)Bo(a,0.4000000059604645,0.0,0.4000000059604645,0.6000000238418579,0.6000000238418579,0.6000000238418579);else Bo(a,0.3499999940395355,0.20000000298023224,0.699999988079071,0.6499999761581421,0.800000011920929,1.0);$p=2;case 2:$z=J_(a,b,c,d,e,f,g);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AQn(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEI(b,c,d,e);if(C()){break _;}g=$z;h=c+0.5;i=d+0.699999988079071;j=e+0.5;if(g==1){k=h-0.27000001072883606;l=i+0.2199999988079071;m=j;BW(b,B(256),k,l,m,0.0,0.0,0.0);BW(b,B(257),k,l,m,0.0,0.0,0.0);}else if(g==2){k=h+0.27000001072883606;l
=i+0.2199999988079071;m=j;BW(b,B(256),k,l,m,0.0,0.0,0.0);BW(b,B(257),k,l,m,0.0,0.0,0.0);}else if(g==3){k=h;l=i+0.2199999988079071;m=j-0.27000001072883606;BW(b,B(256),k,l,m,0.0,0.0,0.0);BW(b,B(257),k,l,m,0.0,0.0,0.0);}else if(g!=4){n=h;o=i;p=j;BW(b,B(256),n,o,p,0.0,0.0,0.0);BW(b,B(257),n,o,p,0.0,0.0,0.0);}else{k=h;l=i+0.2199999988079071;m=j+0.27000001072883606;BW(b,B(256),k,l,m,0.0,0.0,0.0);BW(b,B(257),k,l,m,0.0,0.0,0.0);}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AOZ(){var a=this;P.call(a);a.su=null;a.t2=null;}
function BcU(a,b){var c=new AOZ();A3K(c,a,b);return c;}
function A3K(a,b,c){C8(a,b,c,Bhs);a.su=$rt_createIntArray(256);a.t2=$rt_createIntArray(256);Hr(a,Be1.b,5,20);Hr(a,Be2.b,5,5);Hr(a,Be3.b,30,60);Hr(a,Bfj.b,30,20);Hr(a,Bfk.b,15,100);Hr(a,Bfd.b,30,60);Fe(a,1);}
function Hr(a,b,c,d){a.su.data[b]=c;a.t2.data[b]=d;}
function ARB(a,b,c,d,e){return null;}
function A5Z(a){return 0;}
function A8w(a){return 0;}
function AXu(a){return 3;}
function AWD(a,b){return 0;}
function AZ2(a){return 20;}
function XI(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEI(b,c,d,e);if(C()){break _;}g=$z;h=R(g,15);if(h>=0){$p=2;continue _;}i=g+1|0;$p=3;continue _;case 2:$z=AMT(a,b,c,d,e);if(C()){break _;}i=$z;if(i){j=d-1|0;$p=4;continue _;}h=d-1|0;$p=5;continue _;case 3:AKu(b,
c,d,e,i);if(C()){break _;}Fl(b,c,d,e,a.b);$p=2;continue _;case 4:$z=AF0(a,b,c,j,e);if(C()){break _;}i=$z;if(!i&&!h&&!E(f,4)){h=0;$p=13;continue _;}if(!(g%5|0)&&g>5){h=c+1|0;i=300;$p=7;continue _;}return;case 5:$z=AAz(b,c,h,e);if(C()){break _;}h=$z;if(h&&g<=3)return;h=0;$p=6;case 6:APu(b,c,d,e,h);if(C()){break _;}return;case 7:YA(a,b,h,d,e,i,f);if(C()){break _;}i=c-1|0;g=300;$p=8;case 8:YA(a,b,i,d,e,g,f);if(C()){break _;}g=100;$p=9;case 9:YA(a,b,c,j,e,g,f);if(C()){break _;}k=d+1|0;g=200;$p=10;case 10:YA(a,b,
c,k,e,g,f);if(C()){break _;}l=e-1|0;g=300;$p=11;case 11:YA(a,b,c,d,l,g,f);if(C()){break _;}m=e+1|0;g=300;$p=12;case 12:YA(a,b,c,d,m,g,f);if(C()){break _;}n=d+4|0;a:{while(i<=h){o=l;while(o<=m){p=j;while(p<=n){if(i!=c)break a;if(p!=d)break a;if(o!=e)break a;p=p+1|0;}o=o+1|0;}i=i+1|0;}return;}q=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;$p=14;continue _;case 13:APu(b,c,d,e,h);if(C()){break _;}return;case 14:$z=ACt(b,i,p,o);if(C()){break _;}r=$z;if(!r){r=i+1|0;$p=15;continue _;}if(0>0&&E(f,q)<=0){g=a.b;$p=21;continue _;}b:
{c:while(true){p=p+1|0;while(p>n){o=o+1|0;while(o>m){i=i+1|0;if(i>h)break c;o=l;}p=j;}if(i!=c)break b;if(p!=d)break b;if(o==e)continue;else break b;}return;}q=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;continue _;case 15:$z=AGz(a,b,r,p,o,g);if(C()){break _;}g=$z;r=i-1|0;$p=16;case 16:$z=AGz(a,b,r,p,o,g);if(C()){break _;}g=$z;r=p-1|0;$p=17;case 17:$z=AGz(a,b,i,r,o,g);if(C()){break _;}g=$z;r=p+1|0;$p=18;case 18:$z=AGz(a,b,i,r,o,g);if(C()){break _;}g=$z;r=o-1|0;$p=19;case 19:$z=AGz(a,b,i,p,r,g);if(C()){break _;}r=$z;g
=o+1|0;$p=20;case 20:$z=AGz(a,b,i,p,g,r);if(C()){break _;}r=$z;if(r>0&&E(f,q)<=r){g=a.b;$p=21;continue _;}d:{b:while(true){p=p+1|0;while(p>n){o=o+1|0;while(o>m){i=i+1|0;if(i>h)break b;o=l;}p=j;}if(i!=c)break d;if(p!=d)break d;if(o==e)continue;else break d;}return;}q=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;$p=14;continue _;case 21:APu(b,i,p,o,g);if(C()){break _;}a:{d:while(true){p=p+1|0;while(p>n){o=o+1|0;while(o>m){i=i+1|0;if(i>h)break d;o=l;}p=j;}if(i!=c)break a;if(p!=d)break a;if(o==e)continue;else break a;}return;}q
=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;$p=14;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function YA(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.t2.data;$p=1;case 1:$z=ACt(b,c,d,e);if(C()){break _;}i=$z;j=h[i];if(E(g,f)>=j)return;$p=2;case 2:$z=ACt(b,c,d,e);if(C()){break _;}f=$z;L();i=f!=Bfk.b?0:1;if(E(g,2)){f=0;$p=3;continue _;}f=a.b;$p=4;continue _;case 3:APu(b,c,d,e,f);if(C()){break _;}if(!i)return;g=Bfk;f=0;$p=5;continue _;case 4:APu(b,c,d,e,f);if
(C()){break _;}if(!i)return;g=Bfk;f=0;$p=5;case 5:g.nl(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AMT(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c+1|0;$p=1;case 1:$z=AF0(a,b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=c-1|0;$p=2;case 2:$z=AF0(a,b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=d-1|0;$p=3;case 3:$z=AF0(a,b,c,f,e);if(C()){break _;}f=$z;if(f)return 1;f=d+1|0;$p=4;case 4:$z=AF0(a,b,c,f,e);if(C()){break _;}f=$z;if(f)return 1;f=e-1|0;$p=5;case 5:$z=AF0(a,b,c,d,f);if(C()){break _;}f=
$z;if(f)return 1;e=e+1|0;$p=6;case 6:$z=AF0(a,b,c,d,e);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function A3k(a){return 0;}
function AF0(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.su.data;$p=1;case 1:$z=b.ef(c,d,e);if(C()){break _;}c=$z;return f[c]<=0?0:1;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AGz(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.su.data;$p=1;case 1:$z=ACt(b,c,d,e);if(C()){break _;}c=$z;h=g[c];if(h>f)f=h;return f;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ANp(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=AAz(b,c,f,e);if(C()){break _;}f=$z;if(f)return 1;$p=2;case 2:$z=AMT(a,b,c,d,e);if(C()){break _;}c=$z;return c?1:0;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ABw(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=AAz(b,c,f,e);if(C()){break _;}f=$z;if(f)return;$p=2;case 2:$z=AMT(a,b,c,d,e);if(C()){break _;}f=$z;if(f)return;f=0;$p=3;case 3:APu(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ACp(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=AAz(b,c,f,e);if(C()){break _;}f=$z;if(f){Fl(b,c,d,e,a.b);return;}$p=2;case 2:$z=AMT(a,b,c,d,e);if(C()){break _;}f=$z;if(f){Fl(b,c,d,e,a.b);return;}f=0;$p=3;case 3:APu(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ASq(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!E(f,24))Ew(b,c+0.5,d+0.5,e+0.5,B(258),1.0+N(f),N(f)*0.699999988079071+0.30000001192092896);g=d-1|0;$p=1;case 1:$z=AAz(b,c,g,e);if(C()){break _;}h=$z;if(h){g=0;i=c;j=d;k=e;while(g<3){BW(b,B(255),i+N(f),j+N(f)*0.5+0.5,k+N(f),0.0,0.0,
0.0);g=g+1|0;}return;}L();l=Bgp;$p=2;case 2:$z=AF0(l,b,c,g,e);if(C()){break _;}g=$z;if(g){g=0;i=c;j=d;k=e;while(g<3){BW(b,B(255),i+N(f),j+N(f)*0.5+0.5,k+N(f),0.0,0.0,0.0);g=g+1|0;}return;}l=Bgp;g=c-1|0;$p=3;case 3:a:{$z=AF0(l,b,g,d,e);if(C()){break _;}g=$z;if(g){g=0;i=c;m=d;n=e;while(true){if(g>=2)break a;j=i+N(f)*0.10000000149011612;k=m+N(f);o=n+N(f);BW(b,B(255),j,k,o,0.0,0.0,0.0);g=g+1|0;}}}l=Bgp;h=c+1|0;$p=4;case 4:a:{$z=AF0(l,b,h,d,e);if(C()){break _;}g=$z;if(g){g=0;i=h;m=d;n=e;while(true){if(g>=2)break a;j
=i-N(f)*0.10000000149011612;k=m+N(f);o=n+N(f);BW(b,B(255),j,k,o,0.0,0.0,0.0);g=g+1|0;}}}l=Bgp;g=e-1|0;$p=5;case 5:a:{$z=AF0(l,b,c,d,g);if(C()){break _;}g=$z;if(g){g=0;i=c;k=d;n=e;while(true){if(g>=2)break a;j=i+N(f);m=k+N(f);o=n+N(f)*0.10000000149011612;BW(b,B(255),j,m,o,0.0,0.0,0.0);g=g+1|0;}}}l=Bgp;g=e+1|0;$p=6;case 6:a:{$z=AF0(l,b,c,d,g);if(C()){break _;}h=$z;if(h){h=0;o=c;p=d;j=g;while(true){if(h>=2)break a;q=o+N(f);i=p+N(f);n=j-N(f)*0.10000000149011612;BW(b,B(255),q,i,n,0.0,0.0,0.0);h=h+1|0;}}}l=Bgp;d=
d+1|0;$p=7;case 7:a:{$z=AF0(l,b,c,d,e);if(C()){break _;}g=$z;if(g){g=0;i=c;j=d;n=e;while(true){if(g>=2)break a;q=i+N(f);k=j-N(f)*0.10000000149011612;o=n+N(f);BW(b,B(255),q,k,o,0.0,0.0,0.0);g=g+1|0;}}}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function Ef(){P.call(this);}
function AOD(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.s7();$p=1;case 1:AFT(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ALW(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AFK(b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function Z$(){Ef.call(this);}
function BcK(a,b){var c=new Z$();AUP(c,a,b);return c;}
function AUP(a,b,c){C8(a,b,c,Bg_);}
function AXg(a){return Bct();}
function A54(a){return 0;}
function Zv(){P.call(this);this.cD=null;}
function A$O(a,b){var c=new Zv();A6_(c,a,b);return c;}
function A6_(a,b,c){C8(a,b,c.bb,c.b8);a.cD=c;BH(a,c.p_);Dn(a,c.nM/3.0);a.gG=c.gG;}
function A5H(a){return 0;}
function AV3(a){return 0;}
function AYV(a){return 10;}
function APz(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AGu(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AJy(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEI(b,c,d,e);if(C()){break _;}h=$z;if(!h){Bo(a,0.0,0.0,0.0,0.5,0.5,1.0);$p=2;continue _;}if(h==1){Bo(a,0.0,0.0,0.0,0.5,1.0,1.0);$p=4;continue _;}if(h==2){Bo(a,0.0,0.0,0.0,1.0,0.5,0.5);$p=6;continue _;}if(h!=3){Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);return;}Bo(a,0.0,0.0,0.0,1.0,1.0,0.5);$p=8;continue _;case 2:ALv(a,b,c,d,e,f,
g);if(C()){break _;}Bo(a,0.5,0.0,0.0,1.0,1.0,1.0);$p=3;case 3:ALv(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);return;case 4:ALv(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.5,0.0,0.0,1.0,0.5,1.0);$p=5;case 5:ALv(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);return;case 6:ALv(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.0,0.0,0.5,1.0,1.0,1.0);$p=7;case 7:ALv(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);return;case 8:ALv(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.0,0.0,0.5,1.0,
0.5,1.0);$p=9;case 9:ALv(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AHC(a,b,c,d,e,f){var g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d+1|0;$p=1;case 1:$z=ABX(b,c,g,e);if(C()){break _;}h=$z;if(!h.dt()){$p=2;continue _;}i=a.cD.b;$p=11;continue _;case 2:AIr(a,b,c,d,e);if(C()){break _;}i=c+1|0;j=d-1|0;$p=3;case 3:AIr(a,b,i,j,e);if(C()){break _;}k=c-1|0;$p=4;case 4:AIr(a,b,k,j,e);if(C()){break _;}l=e-1|0;$p=5;case 5:AIr(a,
b,c,j,l);if(C()){break _;}m=e+1|0;$p=6;case 6:AIr(a,b,c,j,m);if(C()){break _;}$p=7;case 7:AIr(a,b,i,g,e);if(C()){break _;}$p=8;case 8:AIr(a,b,k,g,e);if(C()){break _;}$p=9;case 9:AIr(a,b,c,g,l);if(C()){break _;}$p=10;case 10:AIr(a,b,c,g,m);if(C()){break _;}h=a.cD;$p=12;continue _;case 11:APu(b,c,d,e,i);if(C()){break _;}h=a.cD;$p=12;case 12:h.eY(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AIr(a,b,c,d,e){var f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=APK(a,b,c,d,e);if(C()){break _;}f=$z;if(!f)return;g=(-1);f=c+1|0;h=d+1|0;$p=2;case 2:$z=APK(a,b,f,h,e);if(C()){break _;}i=$z;if(i)g=0;i=c-1|0;$p=3;case 3:$z=APK(a,b,i,h,e);if(C()){break _;}j=$z;if(j)g=1;j=e+1|0;$p=4;case 4:$z=APK(a,b,c,h,j);if(C()){break _;}k=$z;if(k)g=2;k=e-1|0;$p=
5;case 5:$z=APK(a,b,c,h,k);if(C()){break _;}h=$z;if(h)g=3;if(g<0){$p=6;continue _;}if(g<0){h=d-1|0;$p=8;continue _;}if(g<0)return;$p=11;continue _;case 6:$z=ADx(a,b,f,d,e);if(C()){break _;}h=$z;if(h){$p=7;continue _;}$p=9;continue _;case 7:$z=ADx(a,b,i,d,e);if(C()){break _;}h=$z;if(!h)g=0;$p=9;continue _;case 8:$z=APK(a,b,i,h,e);if(C()){break _;}i=$z;if(i)g=0;$p=12;continue _;case 9:$z=ADx(a,b,i,d,e);if(C()){break _;}h=$z;if(h){$p=10;continue _;}$p=13;continue _;case 10:$z=ADx(a,b,f,d,e);if(C()){break _;}h=
$z;if(!h)g=1;$p=13;continue _;case 11:AKu(b,c,d,e,g);if(C()){break _;}return;case 12:$z=APK(a,b,f,h,e);if(C()){break _;}f=$z;if(f)g=1;$p=15;continue _;case 13:$z=ADx(a,b,c,d,j);if(C()){break _;}h=$z;if(h){$p=14;continue _;}$p=16;continue _;case 14:$z=ADx(a,b,c,d,k);if(C()){break _;}h=$z;if(!h)g=2;$p=16;continue _;case 15:$z=APK(a,b,c,h,k);if(C()){break _;}f=$z;if(f)g=2;$p=18;continue _;case 16:$z=ADx(a,b,c,d,k);if(C()){break _;}h=$z;if(h){$p=17;continue _;}if(g<0){h=d-1|0;$p=8;continue _;}if(g<0)return;$p=11;continue _;case 17:$z
=ADx(a,b,c,d,j);if(C()){break _;}h=$z;if(!h)g=3;if(g<0){h=d-1|0;$p=8;continue _;}if(g<0)return;$p=11;continue _;case 18:$z=APK(a,b,c,h,j);if(C()){break _;}f=$z;if(f)g=3;if(g<0)return;$p=11;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function ADx(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ABX(b,c,d,e);if(C()){break _;}b=$z;return b.dt();default:E$();}}C3().s(a,b,c,d,e,$p);}
function APK(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACt(b,c,d,e);if(C()){break _;}f=$z;if(!f)c=0;else{L();c=BeP.data[f].ei()!=10?0:1;}return c;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function APb(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cD;$p=1;case 1:g.kL(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ABa(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cD;$p=1;case 1:g.q4(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ADm(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cD;$p=1;case 1:g.nl(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AMU(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cD;$p=1;case 1:$z=f.Cs(b,c,d,e);if(C()){break _;}g=$z;return g;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function A8Y(a,b){return a.cD.yg(b);}
function A8a(a){return a.cD.pM();}
function A4e(a,b,c){return a.cD.dS(b,c);}
function A0u(a,b){return a.cD.eE(b);}
function AXv(a,b,c){return a.cD.eV(b,c);}
function A76(a,b){return a.cD.cf(b);}
function AM5(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cD;$p=1;case 1:$z=g.ud(b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AVG(a){return a.cD.mo();}
function AMe(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cD;$p=1;case 1:$z=f.oQ(b,c,d,e);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ACG(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.cD;$p=1;case 1:h.qz(b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AYB(a){return a.cD.pc();}
function AYO(a,b,c){return a.cD.o4(b,c);}
function AMm(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cD;$p=1;case 1:$z=f.fS(b,c,d,e);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ACB(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;$p=1;case 1:AHC(a,b,c,d,e,f);if(C()){break _;}g=a.cD;$p=2;case 2:g.fB(b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function Yx(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cD;$p=1;case 1:f.lt(b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AHP(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.cD;$p=1;case 1:h.HM(b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AMX(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cD;$p=1;case 1:g.IJ(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AQR(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cD;$p=1;case 1:g.oF(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AQW(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cD;$p=1;case 1:g.e5(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AGJ(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cD;$p=1;case 1:$z=g.lz(b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function Y8(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cD;$p=1;case 1:f.sF(b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AFR(){Ef.call(this);this.fk=null;}
function A_9(a){var b=new AFR();A65(b,a);return b;}
function A65(a,b){DY(a,b,Bha);a.fk=new Dz;a.bb=26;}
function AEx(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(f==1)return a.bb-1|0;if(!f)return a.bb-1|0;g=e-1|0;$p=1;case 1:$z=b.ef(c,d,g);if(C()){break _;}h=$z;i=e+1|0;$p=2;case 2:$z=b.ef(c,d,i);if(C()){break _;}j=$z;k=c-1|0;$p=3;case 3:$z=b.ef(k,d,e);if(C()){break _;}l=$z;m=c+1|0;$p=4;case 4:$z=b.ef(m,
d,e);if(C()){break _;}n=$z;if(h!=a.b&&j!=a.b){if(l!=a.b&&n!=a.b){k=3;L();if(BgA.data[h]&&!BgA.data[j])k=3;if(BgA.data[j]&&!BgA.data[h])k=2;if(BgA.data[l]&&!BgA.data[n])k=5;if(BgA.data[n]&&!BgA.data[l])k=4;return f!=k?a.bb:a.bb+1|0;}if(f!=4&&f!=5){o=0;if(l==a.b)o=(-1);c=l!=a.b?m:k;$p=7;continue _;}return a.bb;}if(f!=2&&f!=3){o=0;if(h==a.b)o=(-1);c=h!=a.b?i:g;$p=5;continue _;}return a.bb;case 5:$z=b.ef(k,d,c);if(C()){break _;}p=$z;if(h==a.b)i=g;$p=6;case 6:$z=b.ef(m,d,i);if(C()){break _;}m=$z;if(f==4)o=(-1)-o
|0;i=5;L();if(!(!BgA.data[l]&&!BgA.data[p])&&!BgA.data[n]&&!BgA.data[m])i=5;if(!(!BgA.data[n]&&!BgA.data[m])&&!BgA.data[l]&&!BgA.data[p])i=4;return (f!=i?a.bb+32|0:a.bb+16|0)+o|0;case 7:$z=b.ef(c,d,g);if(C()){break _;}g=$z;if(l==a.b)m=k;$p=8;case 8:$z=b.ef(m,d,i);if(C()){break _;}m=$z;if(f==3)o=(-1)-o|0;i=3;L();if(!(!BgA.data[h]&&!BgA.data[g])&&!BgA.data[j]&&!BgA.data[m])i=3;if(!(!BgA.data[j]&&!BgA.data[m])&&!BgA.data[h]&&!BgA.data[g])i=2;return (f!=i?a.bb+32|0:a.bb+16|0)+o|0;default:E$();}}C3().s(a,b,c,d,e,
f,g,h,i,j,k,l,m,n,o,p,$p);}
function A89(a,b){return b==1?a.bb-1|0:!b?a.bb-1|0:b!=3?a.bb:a.bb+1|0;}
function AJ1(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=c-1|0;$p=1;case 1:$z=ACt(b,g,d,e);if(C()){break _;}h=$z;if(h==a.b)f=1;h=c+1|0;$p=2;case 2:$z=ACt(b,h,d,e);if(C()){break _;}i=$z;if(i==a.b)f=f+1|0;i=e-1|0;$p=3;case 3:$z=ACt(b,c,d,i);if(C()){break _;}j=$z;if(j==a.b)f=f+1|0;k=e+1|0;$p=4;case 4:$z=ACt(b,c,d,k);if(C()){break _;}l=$z;if
(l==a.b)f=f+1|0;if(f>1)return 0;$p=5;case 5:$z=AIV(a,b,g,d,e);if(C()){break _;}j=$z;if(j)return 0;$p=6;case 6:$z=AIV(a,b,h,d,e);if(C()){break _;}e=$z;if(e)return 0;$p=7;case 7:$z=AIV(a,b,c,d,i);if(C()){break _;}e=$z;if(e)return 0;$p=8;case 8:$z=AIV(a,b,c,d,k);if(C()){break _;}c=$z;return c?0:1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function AIV(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACt(b,c,d,e);if(C()){break _;}f=$z;if(f!=a.b)return 0;f=c-1|0;$p=2;case 2:$z=ACt(b,f,d,e);if(C()){break _;}f=$z;if(f==a.b)return 1;f=c+1|0;$p=3;case 3:$z=ACt(b,f,d,e);if(C()){break _;}f=$z;if(f==a.b)return 1;f=e-1|0;$p=4;case 4:$z=ACt(b,c,d,f);if(C()){break _;}f=$z;if(f==a.b)return 1;e=e+1|0;$p=5;case 5:$z=ACt(b,c,d,e);if(C()){break _;}c
=$z;return c!=a.b?0:1;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ASD(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ANv(b,c,d,e);if(C()){break _;}f=$z;g=f;h=0;i=27;j=c;k=d;l=e;while(h<i){f=Q8(g,h);if(f!==null){m=N(a.fk)*0.800000011920929+0.10000000149011612;n=N(a.fk)*0.800000011920929+0.10000000149011612;o
=N(a.fk)*0.800000011920929+0.10000000149011612;p=j+m;q=k+n;r=l+o;if(f.p>0){s=E(a.fk,21)+10|0;if(s>f.p)s=f.p;f.p=f.p-s|0;t=Ha(b,p,q,r,Ok(f.bA,s,f.ej));t.g=CY(a.fk)*0.05000000074505806;t.i=CY(a.fk)*0.05000000074505806+0.20000000298023224;t.h=CY(a.fk)*0.05000000074505806;$p=3;continue _;}}h=h+1|0;}$p=2;case 2:ALW(a,b,c,d,e);if(C()){break _;}return;case 3:AOf(b,t);if(C()){break _;}a:while(true){if(f.p>0){s=E(a.fk,21)+10|0;if(s>f.p)s=f.p;f.p=f.p-s|0;t=Ha(b,p,q,r,Ok(f.bA,s,f.ej));t.g=CY(a.fk)*0.05000000074505806;t.i
=CY(a.fk)*0.05000000074505806+0.20000000298023224;t.h=CY(a.fk)*0.05000000074505806;continue _;}while(true){h=h+1|0;if(h>=i)break a;f=Q8(g,h);if(f===null)continue;else break;}m=N(a.fk)*0.800000011920929+0.10000000149011612;n=N(a.fk)*0.800000011920929+0.10000000149011612;o=N(a.fk)*0.800000011920929+0.10000000149011612;p=j+m;q=k+n;r=l+o;}$p=2;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p);}
function AFX(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ANv(b,c,d,e);if(C()){break _;}g=$z;h=g;i=d+1|0;$p=2;case 2:$z=AAz(b,c,i,e);if(C()){break _;}j=$z;if(j)return 1;k=c-1|0;$p=3;case 3:$z=ACt(b,k,d,e);if(C()){break _;}j=$z;if(j==a.b){$p=5;continue _;}l=c+1|0;$p=4;case 4:$z=ACt(b,l,
d,e);if(C()){break _;}j=$z;if(j==a.b){$p=7;continue _;}m=e-1|0;$p=6;continue _;case 5:$z=AAz(b,k,i,e);if(C()){break _;}j=$z;if(j)return 1;l=c+1|0;$p=4;continue _;case 6:$z=ACt(b,c,d,m);if(C()){break _;}j=$z;if(j==a.b){$p=9;continue _;}n=e+1|0;$p=8;continue _;case 7:$z=AAz(b,l,i,e);if(C()){break _;}j=$z;if(j)return 1;m=e-1|0;$p=6;continue _;case 8:$z=ACt(b,c,d,n);if(C()){break _;}j=$z;if(j!=a.b){$p=10;continue _;}$p=11;continue _;case 9:$z=AAz(b,c,i,m);if(C()){break _;}j=$z;if(j)return 1;n=e+1|0;$p=8;continue _;case 10:$z
=ACt(b,k,d,e);if(C()){break _;}j=$z;if(j==a.b){g=new Id;o=B(259);$p=12;continue _;}g=h;$p=13;continue _;case 11:$z=AAz(b,c,i,n);if(C()){break _;}j=$z;if(j)return 1;$p=10;continue _;case 12:$z=ANv(b,k,d,e);if(C()){break _;}p=$z;K4(g,o,p,h);$p=13;case 13:$z=ACt(b,l,d,e);if(C()){break _;}j=$z;if(j!=a.b){o=g;$p=15;continue _;}o=new Id;p=B(259);g=g;$p=14;case 14:$z=ANv(b,l,d,e);if(C()){break _;}h=$z;K4(o,p,g,h);$p=15;case 15:$z=ACt(b,c,d,m);if(C()){break _;}e=$z;if(e==a.b){g=new Id;p=B(259);$p=16;continue _;}g=o;$p
=17;continue _;case 16:$z=ANv(b,c,d,m);if(C()){break _;}h=$z;K4(g,p,h,o);$p=17;case 17:$z=ACt(b,c,d,n);if(C()){break _;}e=$z;if(e==a.b){o=new Id;p=B(259);g=g;$p=18;continue _;}o=g;b=o;$p=19;continue _;case 18:$z=ANv(b,c,d,n);if(C()){break _;}b=$z;K4(o,p,g,b);b=o;$p=19;case 19:YX(f,b);if(C()){break _;}return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AZC(a){return Bbg();}
function AKH(){P.call(this);}
function BbO(a,b){var c=new AKH();AUS(c,a,b);return c;}
function AUS(a,b,c){C8(a,b,c,Bhu);}
function AEU(a,b,c,d,e){return null;}
function ATV(a){return 0;}
function A5f(a){return 0;}
function A7u(a){return 5;}
function A9R(a,b){return 1;}
function AUA(a){return 0;}
function AHv(){P.call(this);}
function Bbs(a){var b=new AHv();AZh(b,a);return b;}
function AZh(a,b){DY(a,b,Bha);a.bb=59;}
function AWt(a,b){if(b==1)b=a.bb-16|0;else if(!b){L();b=Be1.cf(0);}else b=b!=2&&b!=4?a.bb:a.bb+1|0;return b;}
function AGQ(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ANo(f);if(C()){break _;}return 1;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AKG(){FY.call(this);}
function Bcx(a,b){var c=new AKG();AZO(c,a,b);return c;}
function AZO(a,b,c){Lv(a,b,c);a.bb=c;Fe(a,1);Bo(a,0.0,0.0,0.0,1.0,0.25,1.0);}
function AYF(a,b){L();return b!=Bg3.b?0:1;}
function AJl(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJn(a,b,c,d,e);if(C()){break _;}g=d+1|0;$p=2;case 2:$z=Xv(b,c,g,e);if(C()){break _;}h=$z;if(h<9)return;$p=3;case 3:$z=AEI(b,c,d,e);if(C()){break _;}h=$z;if(h>=7)return;$p=4;case 4:$z=Y$(a,b,c,d,e);if(C()){break _;}i=$z;if(E(f,100.0/i|0))return;g=h+1|0;$p=5;case 5:AKu(b,c,d,e,g);if(C()){break _;}return;default:
E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function Y$(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=1.0;g=e-1|0;$p=1;case 1:$z=ACt(b,c,d,g);if(C()){break _;}h=$z;i=e+1|0;$p=2;case 2:$z=ACt(b,c,d,i);if(C()){break _;}j=$z;k=c-1|0;$p=3;case 3:$z=ACt(b,k,d,e);if
(C()){break _;}l=$z;m=c+1|0;$p=4;case 4:$z=ACt(b,m,d,e);if(C()){break _;}n=$z;$p=5;case 5:$z=ACt(b,k,d,g);if(C()){break _;}o=$z;$p=6;case 6:$z=ACt(b,m,d,g);if(C()){break _;}p=$z;$p=7;case 7:$z=ACt(b,m,d,i);if(C()){break _;}q=$z;$p=8;case 8:$z=ACt(b,k,d,i);if(C()){break _;}r=$z;s=l!=a.b&&n!=a.b?0:1;t=h!=a.b&&j!=a.b?0:1;u=o!=a.b&&p!=a.b&&q!=a.b&&r!=a.b?0:1;o=d-1|0;while(k<=m){v=g;if(v<=i){$p=9;continue _;}k=k+1|0;}a:{if(!u){if(!s)break a;if(!t)break a;}f=f/2.0;}return f;case 9:$z=ACt(b,k,o,v);if(C()){break _;}w
=$z;x=0.0;L();if(w==Bg3.b){x=1.0;$p=10;continue _;}if(!(k==c&&v==e))x=x/4.0;f=f+x;v=v+1|0;while(true){if(v<=i){continue _;}k=k+1|0;if(k>m)break;v=g;}b:{if(!u){if(!s)break b;if(!t)break b;}f=f/2.0;}return f;case 10:$z=AEI(b,k,o,v);if(C()){break _;}d=$z;if(d>0)x=3.0;if(!(k==c&&v==e))x=x/4.0;f=f+x;v=v+1|0;while(true){if(v<=i){$p=9;continue _;}k=k+1|0;if(k>m)break;v=g;}c:{if(!u){if(!s)break c;if(!t)break c;}f=f/2.0;}return f;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function A8u(a,b,c){if(c<0)c=7;return a.bb+c|0;}
function A4F(a){return 6;}
function ANx(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=0;h=c;i=d;j=e;while(g<3){if(E(b.q,15)<=f){k=N(b.q)*0.699999988079071+0.15000000596046448;l=N(b.q)*0.699999988079071+0.15000000596046448;m=N(b.q)*0.699999988079071+0.15000000596046448;n=new E9;o=h+k;p=i+l;q=j+m;r=new Cd;BB();DA(r,
BhC);G_(n,b,o,p,q,r);n.g8=10;$p=1;continue _;}g=g+1|0;}return;case 1:AOf(b,n);if(C()){break _;}while(true){g=g+1|0;if(g>=3)break;if(E(b.q,15)>f)continue;else{k=N(b.q)*0.699999988079071+0.15000000596046448;l=N(b.q)*0.699999988079071+0.15000000596046448;m=N(b.q)*0.699999988079071+0.15000000596046448;n=new E9;o=h+k;p=i+l;q=j+m;r=new Cd;BB();DA(r,BhC);G_(n,b,o,p,q,r);n.g8=10;continue _;}}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function A0Y(a,b,c){var d;c=DR();d=new U;X(d);Cg(c,V(Be(I(d,B(260)),b)));if(b!=7)b=(-1);else{BB();b=BhD.cU;}return b;}
function A4W(a,b){return 1;}
function AQO(){P.call(this);}
function Bb0(a){var b=new AQO();A2K(b,a);return b;}
function A2K(a,b){DY(a,b,Bhn);a.bb=87;Fe(a,1);Bo(a,0.0,0.0,0.0,1.0,0.9375,1.0);Gs(a,255);}
function AA1(a,b,c,d,e){return D2(c+0|0,d+0|0,e+0|0,c+1|0,d+1|0,e+1|0);}
function AU1(a){return 0;}
function A1A(a){return 0;}
function A_l(a,b,c){b=R(b,1);return !b&&c>0?a.bb-1|0:b?2:a.bb;}
function ANb(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(E(f,5))return;g=c-4|0;h=c+4|0;i=d+1|0;j=e-4|0;k=e+4|0;a:while(true){if(g>h){if(!0){$p=1;continue _;}g=7;$p=2;continue _;}l=d;while(l<=i){m=j;if(m<=k)break a;l=l+1|0;}g=g+1|0;}$p=4;continue _;case 1:$z=AEI(b,c,d,e);if(C()){break _;}h=$z;if(h>0){g=h-1|0;$p=3;continue _;}g
=c-0|0;h=c+0|0;m=e-0|0;j=e+0|0;while(true){if(g>h){if(0)return;L();g=BeS.b;$p=5;continue _;}l=m;if(l<=j)break;g=g+1|0;}$p=6;continue _;case 2:AKu(b,c,d,e,g);if(C()){break _;}return;case 3:AKu(b,c,d,e,g);if(C()){break _;}return;case 4:$z=ABX(b,g,l,m);if(C()){break _;}f=$z;if(f===BfQ)g=1;else{m=m+1|0;b:while(true){if(m<=k){continue _;}l=l+1|0;while(l>i){g=g+1|0;if(g>h)break b;l=d;}m=j;}g=0;}if(!g){$p=1;continue _;}g=7;$p=2;continue _;case 5:APu(b,c,d,e,g);if(C()){break _;}return;case 6:$z=ACt(b,g,i,l);if(C())
{break _;}n=$z;L();if(n==Bg2.b)g=1;else{l=l+1|0;while(true){if(l<=j){continue _;}g=g+1|0;if(g>h)break;l=m;}g=0;}if(g)return;L();g=BeS.b;$p=5;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function AKN(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(E(b.q,4))return;L();g=BeS.b;$p=1;case 1:APu(b,c,d,e,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function X6(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d+1|0;$p=1;case 1:$z=ABX(b,c,f,e);if(C()){break _;}g=$z;if(!g.dt())return;L();f=BeS.b;$p=2;case 2:APu(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AW0(a,b,c){L();return BeS.dS(0,c);}
function AF2(){Ef.call(this);this.wq=0;}
function A4M(a,b){var c=new AF2();ATP(c,a,b);return c;}
function ATP(a,b,c){DY(a,b,Bg_);a.wq=c;a.bb=45;}
function ACr(a,b,c,d,e){var f,g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AOD(a,b,c,d,e);if(C()){break _;}f=e-1|0;$p=2;case 2:$z=ACt(b,c,d,f);if(C()){break _;}g=$z;f=e+1|0;$p=3;case 3:$z=ACt(b,c,d,f);if(C()){break _;}f=$z;h=c-1|0;$p=4;case 4:$z=ACt(b,h,d,e);if(C()){break _;}h=$z;i=c+1|0;$p=5;case 5:$z=ACt(b,i,d,e);if(C()){break _;}i=$z;j=3;L();if(BgA.data[g]&&!BgA.data[f])j
=3;if(BgA.data[f]&&!BgA.data[g])j=2;if(BgA.data[h]&&!BgA.data[i])j=5;if(BgA.data[i]&&!BgA.data[h])j=4;$p=6;case 6:AKu(b,c,d,e,j);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AKd(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(f==1){L();return BeV.bb;}if(!f){L();return BeV.bb;}$p=1;case 1:$z=b.eF(c,d,e);if(C()){break _;}g=$z;return f!=g?a.bb:!a.wq?a.bb-1|0:a.bb+16|0;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AEl(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.wq)return;$p=1;case 1:$z=AEI(b,c,d,e);if(C()){break _;}g=$z;h=c+0.5;i=d+0.0+N(f)*6.0/16.0;j=e+0.5;k=N(f)*0.6000000238418579-0.30000001192092896;if(g==4){l=h-0.5199999809265137;m=i;n=j+k;BW(b,B(256),l,m,n,0.0,0.0,0.0);BW(b,B(257),
l,m,n,0.0,0.0,0.0);}else if(g==5){l=h+0.5199999809265137;m=i;n=j+k;BW(b,B(256),l,m,n,0.0,0.0,0.0);BW(b,B(257),l,m,n,0.0,0.0,0.0);}else if(g==2){l=h+k;m=i;n=j-0.5199999809265137;BW(b,B(256),l,m,n,0.0,0.0,0.0);BW(b,B(257),l,m,n,0.0,0.0,0.0);}else if(g==3){o=h+k;p=i;q=j+0.5199999809265137;BW(b,B(256),o,p,q,0.0,0.0,0.0);BW(b,B(257),o,p,q,0.0,0.0,0.0);}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function AUW(a,b){if(b==1){L();b=BeV.b;}else if(!b){L();b=BeV.b;}else b=b!=3?a.bb:a.bb-1|0;return b;}
function AGT(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ANv(b,c,d,e);if(C()){break _;}b=$z;g=b;$p=2;case 2:AO1(f,g);if(C()){break _;}return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function A77(a){return BaC();}
function Vn(){var a=this;Ef.call(a);a.C6=null;a.Dn=0;}
function BhE(a,b,c){var d=new Vn();AHs(d,a,b,c);return d;}
function AHs(a,b,c,d){DY(a,b,Bha);a.bb=4;a.C6=c;Bo(a,0.25,0.0,0.25,0.75,1.625,0.75);a.Dn=d;}
function AYK(a){return (-1);}
function A5_(a){return 0;}
function A55(a){return 0;}
function A1L(a){var b,c,$$je;a:{try{b=Zm(a.C6);}catch($$e){$$je=Bi($$e);if($$je instanceof BE){b=$$je;break a;}else{throw $$e;}}return b;}c=new B6;WP(c,b);M(c);}
function AGM(a,b,c,d,e){return 1;}
function A8D(a,b,c){return a.Dn;}
function ZQ(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=AAz(b,c,f,e);if(C()){break _;}f=$z;if(f)return;$p=2;case 2:$z=AEI(b,c,d,e);if(C()){break _;}f=$z;$p=3;case 3:Yd(a,b,c,d,e,f);if(C()){break _;}f=0;$p=4;case 4:APu(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function D9(){var a=this;D.call(a);a.ce=null;a.dH=0;a.dF=0;a.dN=0;}
var BhF=null;var BhG=null;function BhH(){var a=new D9();ANt(a);return a;}
function ANt(a){return;}
function JW(b,c){var d;if(!DX(BhG,c)){BR(BhF,c,b);BR(BhG,b,c);return;}b=new Cb;d=new U;X(d);Bl(b,V(I(I(d,B(261)),c)));M(b);}
function AFJ(a){return;}
function AMd(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.ce;c=a.dH;d=a.dF;e=a.dN;$p=1;case 1:$z=AEI(b,c,d,e);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,$p);}
function ACc(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.ce;c=a.dH;d=a.dF;e=a.dN;$p=1;case 1:AGt(b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AK0(a,b,c,d){var e,f,g;e=a.dH+0.5-b;f=a.dF+0.5-c;g=a.dN+0.5-d;return e*e+f*f+g*g;}
function AFr(){BhF=Dd();BhG=Dd();JW(F(WS),B(262));JW(F(S$),B(263));JW(F(Jc),B(264));JW(F(Nt),B(265));}
function Jc(){var a=this;D9.call(a);a.gq=null;a.rw=0;}
function BhI(){var a=new Jc();AZY(a);return a;}
function AZY(a){var b,c;b=J(B4,4);c=b.data;c[0]=B(3);c[1]=B(3);c[2]=B(3);c[3]=B(3);a.gq=b;a.rw=(-1);}
function Bb(){var a=this;D.call(a);a.cU=0;a.eW=0;a.fd=0;a.s9=0;}
var BhJ=null;var Bhe=null;var BhK=null;var BhL=null;var BhM=null;var BhN=null;var BhO=null;var BhP=null;var Bgd=null;var BhA=null;var BhB=null;var BhQ=null;var BhR=null;var BhS=null;var BhT=null;var BhU=null;var BhV=null;var BhW=null;var BhX=null;var BhY=null;var BhZ=null;var Bh0=null;var Bh1=null;var Bh2=null;var Bh3=null;var Bh4=null;var Bh5=null;var Bh6=null;var Bh7=null;var Bh8=null;var Bh9=null;var Bh$=null;var Bh_=null;var Bgf=null;var Bgc=null;var Bge=null;var Bia=null;var Bib=null;var Bic=null;var Bid
=null;var Bie=null;var BhC=null;var BhD=null;var Bif=null;var Big=null;var Bih=null;var Bii=null;var Bij=null;var Bik=null;var Bil=null;var Bim=null;var Bin=null;var Bio=null;var Bip=null;var Biq=null;var Bir=null;var Bis=null;var Bit=null;var Biu=null;var Biv=null;var Biw=null;var Bix=null;var Biy=null;var Biz=null;var Bhz=null;var Bgg=null;var BiA=null;var BiB=null;var BiC=null;var Bhd=null;var BiD=null;var BiE=null;var BiF=null;var BiG=null;var BiH=null;var BiI=null;function BB(){BB=Bt(Bb);A7K();}
function EV(a){var b=new Bb();Ds(b,a);return b;}
function Ds(a,b){var c,d,e;BB();a.eW=64;a.fd=32;c=256+b|0;a.cU=c;if(Bhe.data[c]!==null){d=DR();e=new U;X(e);Cg(d,V(Be(I(e,B(266)),b)));}Bhe.data[c]=a;}
function Bp(a,b){a.s9=b;return a;}
function A5A(a,b){return a.s9;}
function AGs(a,b,c,d,e,f,g,h){return 0;}
function A$M(a,b,c){return 1.0;}
function ASh(a,b,c,d){return b;}
function A2x(a){return a.eW;}
function A7Q(a){return a.fd;}
function AV9(a,b,c){return;}
function A49(a,b,c,d,e,f){return;}
function A_s(a,b){return 1;}
function AV0(a,b){return 0;}
function A3I(a,b,c){return;}
function A7K(){var b;BhJ=Bbl();Bhe=J(Bb,1024);BhK=Bp(LI(0,2),82);BhL=Bp(N$(1,2),98);BhM=Bp(ND(2,2),114);BhN=Bp(Bbc(3),5);BhO=Bp(Ou(4,4),10);BhP=Bp(Baj(5),21);Bgd=Bp(EV(6),37);BhA=Bp(EV(7),7);BhB=Bp(EV(8),55);BhQ=Bp(EV(9),23);BhR=Bp(EV(10),39);BhS=Bp(Ns(11,2),66);BhT=Bp(Ns(12,0),64);BhU=Bp(LI(13,0),80);BhV=Bp(N$(14,0),96);BhW=Bp(ND(15,0),112);BhX=Bp(Ns(16,1),65);BhY=Bp(LI(17,1),81);BhZ=Bp(N$(18,1),97);Bh0=Bp(ND(19,1),113);Bh1=Bp(Ns(20,3),67);Bh2=Bp(LI(21,3),83);Bh3=Bp(N$(22,3),99);Bh4=Bp(ND(23,3),115);Bh5=Bp(EV(24),
53);Bh6=Bp(EV(25),71);Bh7=Bp(BcE(26,10),72);Bh8=Bp(Ns(27,0),68);Bh9=Bp(LI(28,0),84);Bh$=Bp(N$(29,0),100);Bh_=Bp(ND(30,0),116);Bgf=Bp(EV(31),8);Bgc=Bp(EV(32),24);Bge=Bp(EV(33),40);Bia=Bp(Np(34,0),128);Bib=Bp(Np(35,1),129);Bic=Bp(Np(36,2),130);Bid=Bp(Np(37,3),131);Bie=Bp(Np(38,4),132);b=new VQ;L();AHI(b,39,Bg2.b);BhC=Bp(b,9);BhD=Bp(EV(40),25);Bif=Bp(Ou(41,5),41);Big=Bp(Da(42,0,0,0),0);Bih=Bp(Da(43,0,0,1),16);Bii=Bp(Da(44,0,0,2),32);Bij=Bp(Da(45,0,0,3),48);Bik=Bp(Da(46,1,1,0),1);Bil=Bp(Da(47,1,1,1),17);Bim=Bp(Da(48,
1,1,2),33);Bin=Bp(Da(49,1,1,3),49);Bio=Bp(Da(50,2,2,0),2);Bip=Bp(Da(51,2,2,1),18);Biq=Bp(Da(52,2,2,2),34);Bir=Bp(Da(53,2,2,3),50);Bis=Bp(Da(54,3,3,0),3);Bit=Bp(Da(55,3,3,1),19);Biu=Bp(Da(56,3,3,2),35);Biv=Bp(Da(57,3,3,3),51);Biw=Bp(Da(58,1,4,0),4);Bix=Bp(Da(59,1,4,1),20);Biy=Bp(Da(60,1,4,2),36);Biz=Bp(Da(61,1,4,3),52);Bhz=Bp(EV(62),6);Bgg=Bp(Ou(63,3),87);BiA=Bp(Ou(64,8),88);BiB=Bp(Bah(65),26);BiC=Bp(Ou(66,42),11);Bhd=Bp(Bcj(67),42);BiD=Bp(A_T(68),43);BiE=Bp(APX(69,0),74);BiF=Bp(APX(70,BfY.b),75);BiG=Bp(APX(71,
BfZ.b),76);BiH=Bp(BbN(72),135);BiI=Bp(BcY(73),104);}
function AIx(){P.call(this);}
function Bae(a){var b=new AIx();A2c(b,a);return b;}
function A2c(a,b){DY(a,b,Bha);a.bb=97;Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);}
function A$s(a,b,c){var d,e;if(b&&b!=1){d=Pi(a,c);if((d&&d!=2?0:1)^(b>3?0:1))return a.bb;b=((d/2|0)+(b&1^d)|0)+((c&4)/4|0)|0;e=a.bb-((c&8)*2|0)|0;if(b&1)e= -e;return e;}return a.bb;}
function A0R(a){return 0;}
function AXp(a){return 0;}
function ATL(a){return 7;}
function AGq(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AHE(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=K5(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,$p);}
function Zx(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AHE(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=Nh(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AHE(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.eF(c,d,e);if(C()){break _;}c=$z;AO0(a,Pi(a,c));return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AO0(a,b){Bo(a,0.0,0.0,0.0,1.0,2.0,1.0);if(!b)Bo(a,0.0,0.0,0.0,1.0,1.0,0.1875);if(b==1)Bo(a,0.8125,0.0,0.0,1.0,1.0,1.0);if(b==2)Bo(a,0.0,0.0,0.8125,1.0,1.0,1.0);if(b==3)Bo(a,0.0,0.0,0.0,0.1875,1.0,1.0);}
function AJV(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ADS(a,b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ADS(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEI(b,c,d,e);if(C()){break _;}g=$z;if(!(g&8)){h=d+1|0;$p=2;continue _;}d=d-1|0;$p=3;continue _;case 2:$z=ACt(b,c,h,e);if(C()){break _;}i=$z;if(i!=a.b){h=g^4;$p=4;continue _;}i=(g^4)+8|0;$p=5;continue _;case 3:$z=ACt(b,c,d,e);if(C()){break _;}h=$z;if(h!=a.b)return 1;$p=6;continue _;case 4:AKu(b,c,d,e,h);if
(C()){break _;}Jg(b,c,d-1|0,e,c,d,e);if(BP()>=0.5)Ew(b,c+0.5,d+0.5,e+0.5,B(267),1.0,N(b.q)*0.10000000149011612+0.8999999761581421);else Ew(b,c+0.5,d+0.5,e+0.5,B(268),1.0,N(b.q)*0.10000000149011612+0.8999999761581421);return 1;case 5:AKu(b,c,h,e,i);if(C()){break _;}h=g^4;$p=4;continue _;case 6:ADS(a,b,c,d,e,f);if(C()){break _;}return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ACv(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEI(b,c,d,e);if(C()){break _;}g=$z;if(g&8){f=d-1|0;$p=3;continue _;}h=0;f=d+1|0;$p=2;case 2:$z=ACt(b,c,f,e);if(C()){break _;}i=$z;if(i!=a.b){i=0;$p=4;continue _;}i=d-1|0;$p=6;continue _;case 3:$z=ACt(b,c,f,e);if(C()){break _;}f=$z;if(f==a.b)return;f=0;$p=5;continue _;case 4:APu(b,c,d,e,i);if(C()){break _;}h
=1;i=d-1|0;$p=6;continue _;case 5:APu(b,c,d,e,f);if(C()){break _;}return;case 6:$z=AAz(b,c,i,e);if(C()){break _;}i=$z;if(!i){i=0;$p=7;continue _;}if(!h)return;$p=10;continue _;case 7:APu(b,c,d,e,i);if(C()){break _;}h=1;$p=8;case 8:$z=ACt(b,c,f,e);if(C()){break _;}i=$z;if(i==a.b){i=0;$p=9;continue _;}if(!h)return;$p=10;continue _;case 9:APu(b,c,f,e,i);if(C()){break _;}if(!h)return;$p=10;case 10:Yd(a,b,c,d,e,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function A8C(a,b,c){if(b&8)b=0;else{BB();b=BiD.cU;}return b;}
function XB(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AHE(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=J_(a,b,c,d,e,f,g);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function Pi(a,b){return b&4?b&3:(b-1|0)&3;}
function AJ0(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(d>=127)return 0;d=d-1|0;$p=1;case 1:$z=AAz(b,c,d,e);if(C()){break _;}c=$z;return !c?0:1;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AC0(){P.call(this);}
function Bcm(a,b){var c=new AC0();AUM(c,a,b);return c;}
function AUM(a,b,c){C8(a,b,c,Bhu);}
function ADd(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEI(b,c,d,e);if(C()){break _;}f=$z;if(f==2)Bo(a,0.0,0.0,0.875,1.0,1.0,1.0);if(f==3)Bo(a,0.0,0.0,0.0,1.0,1.0,0.125);if(f==4)Bo(a,0.875,0.0,0.0,1.0,1.0,1.0);if(f==5)Bo(a,0.0,0.0,0.0,0.125,1.0,1.0);$p=2;case 2:$z=Nh(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AD5(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEI(b,c,d,e);if(C()){break _;}f=$z;if(f==2)Bo(a,0.0,0.0,0.875,1.0,1.0,1.0);if(f==3)Bo(a,0.0,0.0,0.0,1.0,1.0,0.125);if(f==4)Bo(a,0.875,0.0,0.0,1.0,1.0,1.0);if(f==5)Bo(a,0.0,0.0,0.0,0.125,1.0,1.0);$p=2;case 2:$z=K5(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AWU(a){return 0;}
function A5W(a){return 0;}
function A9A(a){return 8;}
function ANS(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-1|0;$p=1;case 1:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=c+1|0;$p=2;case 2:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=e-1|0;$p=3;case 3:$z=AAz(b,c,d,f);if(C()){break _;}f=$z;if(f)return 1;e=e+1|0;$p=4;case 4:$z=AAz(b,c,d,e);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function Yk(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEI(b,c,d,e);if(C()){break _;}g=$z;if(g&&f!=2){if(g&&f!=3){if(g&&f!=4){if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;continue _;}h=c+1|0;$p=4;continue _;}h=e-1|0;$p=3;continue _;}h=e+1|0;$p=2;case 2:$z=AAz(b,c,d,h);if(C()){break _;}h=$z;if(h)g=2;if(g&&f!=3){if(g&&f!=4){if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;continue _;}h
=c+1|0;$p=4;continue _;}h=e-1|0;$p=3;case 3:$z=AAz(b,c,d,h);if(C()){break _;}h=$z;if(h)g=3;if(g&&f!=4){if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;continue _;}h=c+1|0;$p=4;case 4:$z=AAz(b,h,d,e);if(C()){break _;}h=$z;if(h)g=4;if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;case 5:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if(f)g=5;$p=6;case 6:AKu(b,c,d,e,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AKK(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEI(b,c,d,e);if(C()){break _;}g=$z;h=0;if(g==2){f=e+1|0;$p=2;continue _;}if(g==3){f=e-1|0;$p=3;continue _;}if(g==4){f=c+1|0;$p=4;continue _;}if(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 2:$z=AAz(b,c,d,f);if(C()){break _;}f=$z;if(f)h=1;if(g==3){f=e-1|0;$p=3;continue _;}if(g==4){f=c+1|0;$p=4;continue _;}if
(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 3:$z=AAz(b,c,d,f);if(C()){break _;}f=$z;if(f)h=1;if(g==4){f=c+1|0;$p=4;continue _;}if(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 4:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if(f)h=1;if(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 5:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if(f)h=1;if(h)return;$p=6;case 6:Yd(a,b,c,d,e,g);if(C()){break _;}f=0;$p=7;case 7:APu(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,
b,c,d,e,f,g,h,$p);}
function A5u(a,b){return 1;}
function ANV(){P.call(this);}
function Ba0(a,b){var c=new ANV();A$9(c,a,b);return c;}
function A$9(a,b,c){C8(a,b,c,Bhu);Bo(a,0.0,0.0,0.0,1.0,0.125,1.0);}
function ACA(a,b,c,d,e){return null;}
function AWv(a){return 0;}
function ALA(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AMj(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=J_(a,b,c,d,e,f,g);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AMj(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.eF(c,d,e);if(C()){break _;}f=$z;if(f>=2&&f<=5)Bo(a,0.0,0.0,0.0,1.0,0.625,1.0);else Bo(a,0.0,0.0,0.0,1.0,0.125,1.0);return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function A2A(a,b,c){return c<6?a.bb:a.bb-16|0;}
function A3B(a){return 0;}
function A0w(a){return 9;}
function A2H(a,b){return 1;}
function ANU(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=d-1|0;$p=1;case 1:$z=AAz(b,c,d,e);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AND(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=15;$p=1;case 1:AKu(b,c,d,e,f);if(C()){break _;}g=new H4;$p=2;case 2:YN(g,a,b,c,d,e);if(C()){break _;}$p=3;case 3:YM(g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AJN(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEI(b,c,d,e);if(C()){break _;}g=$z;h=0;f=d-1|0;$p=2;case 2:$z=AAz(b,c,f,e);if(C()){break _;}f=$z;if(!f)h=1;if(g==2){f=c+1|0;$p=3;continue _;}if(g==3){f=c-1|0;$p=4;continue _;}if(g==4){f=e-1|0;$p=5;continue _;}if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 3:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if
(!f)h=1;if(g==3){f=c-1|0;$p=4;continue _;}if(g==4){f=e-1|0;$p=5;continue _;}if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 4:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if(!f)h=1;if(g==4){f=e-1|0;$p=5;continue _;}if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 5:$z=AAz(b,c,d,f);if(C()){break _;}f=$z;if(!f)h=1;if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 6:$z=AAz(b,c,d,f);if(C()){break _;}f=$z;if(!f)h=1;if(!h)return;$p=7;case 7:$z=AEI(b,c,d,e);if(C())
{break _;}f=$z;$p=8;case 8:Yd(a,b,c,d,e,f);if(C()){break _;}f=0;$p=9;case 9:APu(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ASz(){Bb.call(this);this.nP=0;}
function A_8(a){var b=new ASz();A2M(b,a);return b;}
function A2M(a,b){Ds(a,b);b=b+256|0;a.nP=b;L();a.s9=BeP.data[b].cf(2);}
function AQm(a,b,c,d,e,f,g,h){var i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!h)f=f+(-1)|0;if(h==1)f=f+1|0;if(h==2)g=g+(-1)|0;if(h==3)g=g+1|0;if(h==4)e=e+(-1)|0;if(h==5)e=e+1|0;if(!b.p)return 0;i=a.nP;j=0;$p=1;case 1:$z=AH$(d,i,e,f,g,j);if(C()){break _;}j=$z;if(!j)return 1;L();k=BeP.data[a.nP];j=a.nP;$p=2;case 2:$z=APu(d,e,f,g,j);if(C()){break _;}j=$z;if(!j)return 1;c=BeP.data[a.nP];$p
=3;case 3:c.u6(d,e,f,g,h);if(C()){break _;}Ew(d,e+0.5,f+0.5,g+0.5,Ke(k.gG),(k.gG.oN+1.0)/2.0,k.gG.pJ*0.800000011920929);b.p=b.p-1|0;return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AHG(){MQ.call(this);}
function A1F(){var a=new AHG();A1S(a);return a;}
function A1S(a){var b,c,d,e;b=J(B4,0);c=b.data;RU(B(24));d=c.length;e=0;while(e<d){RU(c[e]);e=e+1|0;}a.wl=B(24);a.HZ=b.oV();}
function AFv(a){var b;b=new Rb;b.la=B(269);b.mP=BiJ;b.ru=BiJ;b.HS=a;b.BN=0.3333333432674408;b.F2=0.5;return b;}
function AG3(a){var b,c,d,e,f;b=new PL;c=$rt_createByteArray(1);d=c.data;d[0]=63;b.vn=BiJ;b.uH=BiJ;e=d.length;if(e&&e>=b.BG){b.Hs=a;b.uv=c.oV();b.Gv=2.0;b.BG=4.0;return b;}f=new Cb;Bl(f,B(270));M(f);}
function M2(){var a=this;Fj.call(a);a.d6=0;a.cl=null;a.kH=null;}
function AMA(b,c,d){return A5B(0,b.data.length,b,c,c+d|0,0,0);}
function AAo(b){return AMA(b,0,b.data.length);}
function AKf(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BO;i=new U;X(i);Bl(h,V(Be(I(Be(I(i,B(271)),g),B(248)),f)));M(h);}if(Ct(a)<d){i=new Go;O(i);M(i);}if(d<0){i=new BO;h=new U;X(h);Bl(i,V(I(Be(I(h,B(249)),d),B(250))));M(i);}g=a.bk+a.d6|0;j=0;while(j<d){k=c+1|0;b=a.cl.data;f=g+1|0;e[c]=b[g];j=j+1|0;c=k;g=f;}a.bk=a.bk+d|0;return a;}}b=b.data;h=new BO;i=new U;X(i);Bl(h,V(I(Be(I(Be(I(i,B(251)),c),B(244)),b.length),B(27))));M(h);}
function WT(a,b,c,d){var e,f,g,h,i,j,k;if(!d)return a;if(a.mI){e=new FQ;O(e);M(e);}if(Ct(a)<d){e=new G9;O(e);M(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){e=new BO;i=new U;X(i);Bl(e,V(Be(I(Be(I(i,B(272)),h),B(248)),g)));M(e);}if(d<0){e=new BO;i=new U;X(i);Bl(e,V(I(Be(I(i,B(249)),d),B(250))));M(e);}h=a.bk+a.d6|0;j=0;while(j<d){b=a.cl.data;k=h+1|0;g=c+1|0;b[h]=f[c];j=j+1|0;h=k;c=g;}a.bk=a.bk+d|0;return a;}}b=b.data;i=new BO;e=new U;X(e);Bl(i,V(I(Be(I(Be(I(e,B(251)),c),B(244)),b.length),B(27))));M(i);}
function UG(a,b){return WT(a,b,0,b.data.length);}
function A9w(a,b){a.kH=b;return a;}
function ATU(a){Ez(a);return a;}
function A5p(a,b){Nj(a,b);return a;}
function A0N(a,b){EN(a,b);return a;}
function Nd(){L7.call(this);}
function Jn(a){var b,c;if(a.bk<a.cv){b=a.bk;a.bk=b+1|0;return RA(a,b);}c=new Go;O(c);M(c);}
function CJ(a,b){var c,d;if(AKp(a)){c=new FQ;O(c);M(c);}if(a.bk<a.cv){d=a.bk;a.bk=d+1|0;ADQ(a,d,b);return a;}c=new G9;O(c);M(c);}
function AKp(a){return a.xo;}
function WJ(){var a=this;Nd.call(a);a.xo=0;a.yf=0;a.xh=null;}
function RA(a,b){return a.xh.data[b+a.yf|0];}
function ADQ(a,b,c){a.xh.data[b+a.yf|0]=c;}
function A8z(a){return a.xo;}
function ARk(){var a=this;M2.call(a);a.Gg=0;a.mI=0;}
function A5B(a,b,c,d,e,f,g){var h=new ARk();ATf(h,a,b,c,d,e,f,g);return h;}
function ATf(a,b,c,d,e,f,g,h){KM(a,c);a.kH=Bgn;a.d6=b;a.cl=d;a.bk=e;a.cv=f;a.Gg=g;a.mI=h;}
function ALK(a){var b,c,d,e;if(a.bk>=a.cv){b=new Go;O(b);M(b);}c=a.cl.data;d=a.d6;e=a.bk;a.bk=e+1|0;return c[d+e|0];}
function A1o(a){return a.mI;}
function KO(a,b){var c,d,e,f,g,h;if(b>=0&&(b+3|0)<a.cv){c=a.cl.data[a.d6+b|0]&255;d=a.cl.data[(a.d6+b|0)+1|0]&255;e=a.cl.data[(a.d6+b|0)+2|0]&255;f=a.cl.data[(a.d6+b|0)+3|0]&255;if(a.kH!==Bgn)return f<<24|e<<16|d<<8|c;return c<<24|d<<16|e<<8|f;}g=new BO;h=new U;X(h);Bl(g,V(I(Be(I(Be(I(h,B(273)),b),B(244)),a.cv-3|0),B(27))));M(g);}
function AA3(a,b,c){var d,e;if(a.mI){d=new FQ;O(d);M(d);}if(b>=0&&(b+3|0)<a.cv){if(a.kH!==Bgn){a.cl.data[a.d6+b|0]=c<<24>>24;a.cl.data[(a.d6+b|0)+1|0]=c>>8<<24>>24;a.cl.data[(a.d6+b|0)+2|0]=c>>16<<24>>24;a.cl.data[(a.d6+b|0)+3|0]=c>>24<<24>>24;}else{a.cl.data[a.d6+b|0]=c>>24<<24>>24;a.cl.data[(a.d6+b|0)+1|0]=c>>16<<24>>24;a.cl.data[(a.d6+b|0)+2|0]=c>>8<<24>>24;a.cl.data[(a.d6+b|0)+3|0]=c<<24>>24;}return a;}e=new BO;d=new U;X(d);Bl(e,V(I(Be(I(Be(I(d,B(273)),b),B(244)),a.cv-3|0),B(27))));M(e);}
function AHJ(a){var b,c;b=Ct(a)/4|0;if(a.kH!==Bgn){c=new O$;OG(c,a.d6+a.bk|0,b,a,0,b,a.mI);return c;}c=new VG;OG(c,a.d6+a.bk|0,b,a,0,b,a.mI);return c;}
function Vm(){}
function LT(){Fj.call(this);}
function AHl(b){var c,d;if(b>=0)return AZF(0,b,$rt_createCharArray(b),0,b,0);c=new Cb;d=new U;X(d);Bl(c,V(Be(I(d,B(274)),b)));M(c);}
function AM2(b,c,d){return AZF(0,b.data.length,b,c,c+d|0,0);}
function OX(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BO;i=new U;X(i);Bl(h,V(Be(I(Be(I(i,B(275)),g),B(248)),f)));M(h);}if(Ct(a)<d){h=new Go;O(h);M(h);}if(d<0){h=new BO;i=new U;X(i);Bl(h,V(I(Be(I(i,B(249)),d),B(250))));M(h);}g=a.bk;j=0;while(j<d){k=c+1|0;f=g+1|0;e[c]=AOM(a,g);j=j+1|0;c=k;g=f;}a.bk=a.bk+d|0;return a;}}b=b.data;i=new BO;h=new U;X(h);Bl(i,V(I(Be(I(Be(I(h,B(251)),c),B(244)),b.length),B(27))));M(i);}
function AEP(a,b){return OX(a,b,0,b.data.length);}
function ASo(a,b,c,d){var e,f,g,h,i,j,k;if(Xk(a)){e=new FQ;O(e);M(e);}if(Ct(a)<d){e=new G9;O(e);M(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){e=new BO;i=new U;X(i);Bl(e,V(Be(I(Be(I(i,B(276)),h),B(248)),g)));M(e);}if(d<0){e=new BO;i=new U;X(i);Bl(e,V(I(Be(I(i,B(249)),d),B(250))));M(e);}h=a.bk;j=0;while(j<d){k=h+1|0;g=c+1|0;Vp(a,h,f[c]);j=j+1|0;h=k;c=g;}a.bk=a.bk+d|0;return a;}}b=b.data;i=new BO;e=new U;X(e);Bl(i,V(I(Be(I(Be(I(e,B(251)),c),B(244)),b.length),B(27))));M(i);}
function AJc(a,b,c,d){var e,f,g,h,i,j;if(Xk(a)){b=new FQ;O(b);M(b);}e=d-c|0;if(Ct(a)<e){b=new G9;O(b);M(b);}if(c>=0&&c<Bh(b)){if(d>Bh(b)){f=new BO;g=new U;X(g);Bl(f,V(Be(I(Be(I(g,B(276)),d),B(277)),Bh(b))));M(f);}if(c>d){b=new BO;f=new U;X(f);Bl(b,V(Be(I(Be(I(f,B(278)),c),B(279)),d)));M(b);}h=a.bk;while(c<d){i=h+1|0;j=c+1|0;Vp(a,h,Y(b,c));h=i;c=j;}a.bk=a.bk+e|0;return a;}g=new BO;f=new U;X(f);Bl(g,V(I(Be(I(Be(I(f,B(278)),c),B(244)),Bh(b)),B(27))));M(g);}
function Ng(a,b){return AJc(a,b,0,Bh(b));}
function AJA(a){return 1;}
function APh(a){return a.ma;}
function AYx(a){Gr(a);return a;}
function AX2(a,b){EN(a,b);return a;}
function PZ(){B1.call(this);}
function BiK(){var a=new PZ();A85(a);return a;}
function A85(a){O(a);}
function Of(){B8.call(this);}
function BiL(){var a=new Of();AZT(a);return a;}
function AZT(a){return;}
function A4U(a){return 0;}
function A5z(a){return 0;}
function ATk(a){return 0;}
function LZ(){B8.call(this);}
function BiM(){var a=new LZ();ATj(a);return a;}
function ATj(a){return;}
function A_G(a){return 1;}
function AY7(a){return 0;}
function N2(){B8.call(this);}
function BiN(){var a=new N2();A7x(a);return a;}
function A7x(a){return;}
function A6Y(a){return 0;}
function A97(a){return 0;}
function AU3(a){return 0;}
function F8(){var a=this;Bb.call(a);a.uN=null;a.yv=0.0;a.AB=0;a.Jt=0;}
function BiO(a,b,c,d){var e=new F8();Mh(e,a,b,c,d);return e;}
function Mh(a,b,c,d,e){Ds(a,b);a.yv=4.0;a.Jt=d;a.uN=e;a.eW=1;a.fd=32<<d;if(d==3)a.fd=a.fd*2|0;a.yv=(d+1|0)*2|0;a.AB=c+d|0;}
function A8V(a,b,c){var d;d=0;while(d<a.uN.data.length){if(a.uN.data[d]===c)return a.yv;d=d+1|0;}return 1.0;}
function A67(a,b,c){FI(b,2);}
function AWo(a,b,c,d,e,f){FI(b,1);}
function AW8(a,b){return a.AB;}
function OR(){F8.call(this);}
var BiP=null;function Bb6(){Bb6=Bt(OR);A9c();}
function LI(a,b){var c=new OR();AFN(c,a,b);return c;}
function AFN(a,b,c){Bb6();Mh(a,b,1,c,BiP);}
function A9c(){var b,c;b=J(P,4);c=b.data;L();c[0]=BeR;c[1]=BeS;c[2]=Bfa;c[3]=Bfb;BiP=b;}
function Vq(){F8.call(this);this.nB=0;}
var BiQ=null;function Bb9(){Bb9=Bt(Vq);A1M();}
function N$(a,b){var c=new Vq();ANO(c,a,b);return c;}
function ANO(a,b,c){Bb9();Mh(a,b,2,c,BiQ);a.nB=c;}
function A5m(a,b){L();return b===Bfl?(a.nB!=3?0:1):b!==Bg0&&b!==BgZ?(b!==Bfi&&b!==Bfg?(b!==Bfh&&b!==Bff?(b.b8===Bg_?1:b.b8!==Bho?0:1):a.nB<1?0:1):a.nB<2?0:1):a.nB<2?0:1;}
function A1M(){var b,c;b=J(P,12);c=b.data;L();c[0]=BeZ;c[1]=BeT;c[2]=BeU;c[3]=BeV;c[4]=Be6;c[5]=Bff;c[6]=Bfh;c[7]=Bfe;c[8]=Bfi;c[9]=Bfg;c[10]=BgZ;c[11]=Bg0;BiQ=b;}
function Wn(){F8.call(this);}
var BiR=null;function BbJ(){BbJ=Bt(Wn);AT7();}
function ND(a,b){var c=new Wn();ANC(c,a,b);return c;}
function ANC(a,b,c){BbJ();Mh(a,b,3,c,BiR);}
function AT7(){var b,c;b=J(P,4);c=b.data;L();c[0]=Be1;c[1]=Bfj;c[2]=Be2;c[3]=BgX;BiR=b;}
function AE0(){Bb.call(this);}
function Bbc(a){var b=new AE0();AYq(b,a);return b;}
function AYq(a,b){Ds(a,b);a.eW=1;a.fd=64;}
function AJH(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!h)f=f+(-1)|0;if(h==1)f=f+1|0;if(h==2)g=g+(-1)|0;if(h==3)g=g+1|0;if(h==4)e=e+(-1)|0;if(h==5)e=e+1|0;$p=1;case 1:$z=ACt(d,e,f,g);if(C()){break _;}i=$z;if(i){FI(b,1);return 1;}j=e+0.5;k=f+0.5;l=g+0.5;BB();Ew(d,j,k,l,B(280),1.0,N(BhJ)*0.4000000059604645+0.800000011920929);L();h=Bgp.b;$p
=2;case 2:APu(d,e,f,g,h);if(C()){break _;}FI(b,1);return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function LM(){Bb.call(this);this.zP=0;}
function Ou(a,b){var c=new LM();ZU(c,a,b);return c;}
function ZU(a,b,c){Ds(a,b);a.zP=c;a.eW=1;}
function P3(a,b,c,d){b.p=b.p-1|0;UJ(d,a.zP);return b;}
function AOS(){Bb.call(this);}
function Baj(a){var b=new AOS();A2o(b,a);return b;}
function A2o(a,b){Ds(a,b);a.eW=1;}
function AGA(a,b,c,d){var e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=d.J;BB();if(!AGO(e,Bgd.cU))return b;Dh(c,d,B(225),1.0,1.0/(N(BhJ)*0.4000000059604645+0.800000011920929));e=AS9(c,d);$p=1;case 1:AOf(c,e);if(C()){break _;}return b;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AK$(){Bb.call(this);this.zV=0;}
function Ns(a,b){var c=new AK$();A$Q(c,a,b);return c;}
function A$Q(a,b,c){Ds(a,b);a.eW=1;a.fd=32<<c;a.zV=4+(c*2|0)|0;}
function A0v(a,b,c){return 1.5;}
function A7U(a,b,c){FI(b,1);}
function AX3(a,b,c,d,e,f){FI(b,2);}
function A2z(a,b){return a.zV;}
function AOa(){LM.call(this);}
function BcE(a,b){var c=new AOa();A21(c,a,b);return c;}
function A21(a,b,c){ZU(a,b,c);}
function APt(a,b,c,d){P3(a,b,c,d);b=new Cd;BB();DA(b,Bh6);return b;}
function ANw(){Bb.call(this);}
function Np(a,b){var c=new ANw();ATK(c,a,b);return c;}
function ATK(a,b,c){Ds(a,b);a.eW=1;a.fd=32<<c;}
function AQS(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACt(d,e,f,g);if(C()){break _;}i=$z;h=f+1|0;$p=2;case 2:a:{$z=ABX(d,e,h,g);if(C()){break _;}j=$z;if(!j.dt()){L();if(i==BeR.b)break a;}L();if(i!=BeS.b)return 0;}L();k=Bg3;l=e;m
=l+0.5;n=f;o=n+0.5;p=g;Ew(d,m,o,p+0.5,Ke(k.gG),(k.gG.oN+1.0)/2.0,k.gG.pJ*0.800000011920929);h=k.b;$p=3;case 3:APu(d,e,f,g,h);if(C()){break _;}FI(b,1);if(!E(d.q,8)&&i==BeR.b){q=1;r=0;m=n+1.2000000476837158;if(r<q){s=N(d.q)*0.699999988079071+0.15000000596046448;n=N(d.q)*0.699999988079071+0.15000000596046448;t=new E9;o=l+s;u=p+n;c=new Cd;BB();DA(c,BhC);G_(t,d,o,m,u,c);t.g8=10;$p=4;continue _;}}return 1;case 4:AOf(d,t);if(C()){break _;}r=r+1|0;if(r>=q)return 1;s=N(d.q)*0.699999988079071+0.15000000596046448;n=N(d.q)
*0.699999988079071+0.15000000596046448;t=new E9;o=l+s;u=p+n;c=new Cd;BB();DA(c,BhC);G_(t,d,o,m,u,c);t.g8=10;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function VQ(){Bb.call(this);this.zD=0;}
function BiS(a,b){var c=new VQ();AHI(c,a,b);return c;}
function AHI(a,b,c){Ds(a,b);a.zD=c;}
function AFl(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(h!=1)return 0;$p=1;case 1:$z=ACt(d,e,f,g);if(C()){break _;}i=$z;L();if(i!=Bg3.b)return 0;f=f+1|0;h=a.zD;$p=2;case 2:APu(d,e,f,g,h);if(C()){break _;}b.p=b.p-1|0;return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function FZ(){var a=this;Bb.call(a);a.H2=0;a.zO=0;a.y4=0;a.Bw=0;}
var BiT=null;var BiU=null;function Da(a,b,c,d){var e=new FZ();ABm(e,a,b,c,d);return e;}
function ABm(a,b,c,d,e){Ds(a,b);a.H2=c;a.zO=e;a.Bw=d;a.y4=BiT.data[e];a.fd=(BiU.data[e]*3|0)<<c;a.eW=1;}
function ARJ(){var b,c;b=$rt_createIntArray(4);c=b.data;c[0]=3;c[1]=8;c[2]=6;c[3]=3;BiT=b;b=$rt_createIntArray(4);c=b.data;c[0]=11;c[1]=16;c[2]=15;c[3]=13;BiU=b;}
function XR(){Bb.call(this);}
function Bah(a){var b=new XR();AY$(b,a);return b;}
function AY$(a,b){Ds(a,b);a.fd=64;}
function ACa(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!h)return 0;if(h==1)return 0;i=0;if(h==4)i=1;if(h==3)i=2;if(h==5)i=3;j=new ID;Fy(j,d);j.rq=0;j.dG=0;j.c2=0.0;DZ(j,0.5,0.5);j.nk=e;j.Ev=f;j.nr=g;c=Ci();k=BiV.oV().data;e=k.length;f=0;if(f<e){l=k[f];j.dP=l;JL(j,i);$p=1;continue _;}if(c.o>0)j.dP=Z(c,E(j.m,c.o));JL(j,i);$p=2;continue _;case 1:$z
=ZG(j);if(C()){break _;}g=$z;if(g)S(c,l);f=f+1|0;if(f<e){l=k[f];j.dP=l;JL(j,i);continue _;}if(c.o>0)j.dP=Z(c,E(j.m,c.o));JL(j,i);$p=2;case 2:$z=ZG(j);if(C()){break _;}e=$z;if(!e)return 1;$p=3;case 3:AOf(d,j);if(C()){break _;}b.p=b.p-1|0;return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function AHq(){Bb.call(this);}
function Bcj(a){var b=new AHq();A7H(b,a);return b;}
function A7H(a,b){Ds(a,b);a.fd=64;a.eW=1;}
function Ya(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(h!=1)return 0;f=f+1|0;L();i=Bg6;$p=1;case 1:$z=i.fS(d,e,f,g);if(C()){break _;}h=$z;if(!h)return 0;h=Bg6.b;$p=2;case 2:APu(d,e,f,g,h);if(C()){break _;}h=K((c.t+180.0)*16.0/360.0-0.5)&15;$p=3;case 3:AKu(d,e,f,g,h);if(C()){break _;}b.p=b.p-1|0;$p=4;case 4:$z=ANv(d,e,f,g);if(C()){break _;}b=$z;b=b;$p=5;case 5:AI8(c,b);if
(C()){break _;}return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AJa(){Bb.call(this);}
function A_T(a){var b=new AJa();A27(b,a);return b;}
function A27(a,b){Ds(a,b);a.fd=64;a.eW=1;}
function AD$(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(h!=1)return 0;f=f+1|0;L();i=Bg7;$p=1;case 1:$z=i.fS(d,e,f,g);if(C()){break _;}h=$z;if(!h)return 0;j=K((c.t+180.0)*4.0/360.0-0.5)&3;k=0;l=0;if(!j)l=1;if(j==1)k=(-1);if(j==2)l=(-1);if(j==3)k=1;m=e-k|0;n=g-l|0;$p=2;case 2:$z
=AAz(d,m,f,n);if(C()){break _;}h=$z;h=!h?0:1;o=f+1|0;$p=3;case 3:$z=AAz(d,m,o,n);if(C()){break _;}p=$z;p=h+(!p?0:1)|0;h=e+k|0;k=g+l|0;$p=4;case 4:$z=AAz(d,h,f,k);if(C()){break _;}l=$z;l=!l?0:1;$p=5;case 5:$z=AAz(d,h,o,k);if(C()){break _;}q=$z;q=l+(!q?0:1)|0;$p=6;case 6:$z=ACt(d,m,f,n);if(C()){break _;}l=$z;if(l!=Bg7.b){$p=7;continue _;}n=1;$p=8;continue _;case 7:$z=ACt(d,m,o,n);if(C()){break _;}m=$z;n=m==Bg7.b?1:0;$p=8;case 8:$z=ACt(d,h,f,k);if(C()){break _;}l=$z;if(l!=Bg7.b){$p=9;continue _;}r=0;if(n&&!1)r
=1;else if(q>p)r=1;if(r)j=((j-1|0)&3)+4|0;h=Bg7.b;$p=10;continue _;case 9:$z=ACt(d,h,o,k);if(C()){break _;}h=$z;m=h==Bg7.b?1:0;r=0;if(n&&!m)r=1;else if(q>p)r=1;if(r)j=((j-1|0)&3)+4|0;h=Bg7.b;$p=10;case 10:APu(d,e,f,g,h);if(C()){break _;}$p=11;case 11:AKu(d,e,f,g,j);if(C()){break _;}f=Bg7.b;$p=12;case 12:APu(d,e,o,g,f);if(C()){break _;}f=j+8|0;$p=13;case 13:AKu(d,e,o,g,f);if(C()){break _;}b.p=b.p-1|0;return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function ARL(){Bb.call(this);this.pm=0;}
function APX(a,b){var c=new ARL();A0e(c,a,b);return c;}
function A0e(a,b,c){Ds(a,b);a.eW=1;a.fd=64;a.pm=c;}
function AHY(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=d.T+(d.I-d.T)*1.0;f=d.P+(d.t-d.P)*1.0;g=BY(d.bR+(d.d-d.bR)*1.0,d.cQ+(d.j-d.cQ)*1.0,d.bQ+(d.e-d.bQ)*1.0);h= -f*0.01745329238474369-3.1415927410125732;i=BC(h);h=Bq(h);j= -e*0.01745329238474369;k= -BC(j);l=Dk(g,h*k*5.0,Bq(j)
*5.0,i*k*5.0);m=a.pm?0:1;$p=1;case 1:$z=AE2(c,g,l,m);if(C()){break _;}n=$z;if(n===null)return b;if(n.k3)return b;m=n.h8;o=n.h9;p=n.h$;if(!a.pm){$p=2;continue _;}if(!n.hG)o=o+(-1)|0;if(n.hG==1)o=o+1|0;if(n.hG==2)p=p+(-1)|0;if(n.hG==3)p=p+1|0;if(n.hG==4)m=m+(-1)|0;if(n.hG==5)m=m+1|0;$p=8;continue _;case 2:$z=ABX(c,m,o,p);if(C()){break _;}g=$z;if(g!==BfQ){$p=3;continue _;}$p=4;continue _;case 3:$z=ABX(c,m,o,p);if(C()){break _;}d=$z;if(d!==BfR)return b;$p=5;continue _;case 4:$z=AEI(c,m,o,p);if(C()){break _;}q=$z;if
(q){$p=3;continue _;}q=0;$p=6;continue _;case 5:$z=AEI(c,m,o,p);if(C()){break _;}q=$z;if(q)return b;q=0;$p=7;continue _;case 6:APu(c,m,o,p,q);if(C()){break _;}b=new Cd;BB();DA(b,BiF);return b;case 7:APu(c,m,o,p,q);if(C()){break _;}b=new Cd;BB();DA(b,BiG);return b;case 8:$z=ACt(c,m,o,p);if(C()){break _;}q=$z;if(q){$p=10;continue _;}q=a.pm;r=0;$p=9;case 9:AIW(c,m,o,p,q,r);if(C()){break _;}b=new Cd;BB();DA(b,BiE);return b;case 10:$z=ABX(c,m,o,p);if(C()){break _;}d=$z;if(d.dt())return b;q=a.pm;r=0;$p=9;continue _;default:
E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function AO7(){Bb.call(this);}
function BbN(a){var b=new AO7();AW9(b,a);return b;}
function AW9(a,b){Ds(a,b);a.eW=1;}
function AC6(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACt(d,e,f,g);if(C()){break _;}i=$z;L();if(i!=Bg8.b)return 0;c=new Gc;j=e+0.5;k=f+0.5;l=g+0.5;Fy(c,d);c.Bj=J(Cd,36);c.iN=0;c.kw=0;c.oL=1;c.kI=0;c.mw=1;DZ(c,0.9800000190734863,0.699999988079071);c.c2=c.eL/2.0;c.i4=0;CT(c,j,k+c.c2,l);c.g=0.0;c.i=0.0;c.h=0.0;c.bR=j;c.cQ=k;c.bQ
=l;$p=2;case 2:AOf(d,c);if(C()){break _;}b.p=b.p-1|0;return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ARd(){Bb.call(this);}
function BcY(a){var b=new ARd();AWy(b,a);return b;}
function AWy(a,b){Ds(a,b);a.eW=1;a.fd=64;}
function AGy(a,b,c){var d;if(c instanceof Iz){d=c;if(!d.qt){d.qt=1;b.p=b.p-1|0;}}}
function AWk(a,b,c){AGy(a,b,c);}
function NW(){}
function AGi(){var a=this;D.call(a);a.dZ=Long_ZERO;a.eR=Long_ZERO;}
function A9T(){var a=new AGi();A0c(a);return a;}
function A0c(a){a.dZ=Long_fromInt(1);a.eR=Long_ZERO;}
function ASV(a,b){a.dZ=Long_and(b,Long_fromInt(65535));a.eR=Long_and(Long_shr(b,16),Long_fromInt(65535));}
function AZu(a){a.dZ=Long_fromInt(1);a.eR=Long_ZERO;}
function AT1(a){return Long_or(Long_shl(a.eR,16),a.dZ);}
function A8h(a,b,c,d){var e,f,g,h,i,j;if(d==1){b=b.data;a.dZ=Long_add(a.dZ,Long_fromInt(b[c]&255));a.eR=Long_add(a.eR,a.dZ);a.dZ=Long_rem(a.dZ,Long_fromInt(65521));a.eR=Long_rem(a.eR,Long_fromInt(65521));return;}e=d/5552|0;f=d%5552|0;while(true){g=e+(-1)|0;if(e<=0)break;h=5552;while(true){e=h+(-1)|0;if(h<=0)break;i=b.data;j=a.dZ;d=c+1|0;a.dZ=Long_add(j,Long_fromInt(i[c]&255));a.eR=Long_add(a.eR,a.dZ);h=e;c=d;}a.dZ=Long_rem(a.dZ,Long_fromInt(65521));a.eR=Long_rem(a.eR,Long_fromInt(65521));e=g;}while(true){d=
f+(-1)|0;if(f<=0)break;i=b.data;j=a.dZ;e=c+1|0;a.dZ=Long_add(j,Long_fromInt(i[c]&255));a.eR=Long_add(a.eR,a.dZ);f=d;c=e;}a.dZ=Long_rem(a.dZ,Long_fromInt(65521));a.eR=Long_rem(a.eR,Long_fromInt(65521));}
function R9(){BE.call(this);}
function BiW(){var a=new R9();A6F(a);return a;}
function A6F(a){O(a);}
function Nl(){D.call(this);this.Gz=null;}
var Bgn=null;var BiX=null;function AVz(a){var b=new Nl();AH5(b,a);return b;}
function AH5(a,b){a.Gz=b;}
function ASl(){Bgn=AVz(B(281));BiX=AVz(B(282));}
function JZ(){}
function LJ(){var a=this;D.call(a);a.gd=null;a.e3=null;}
function A41(a,b){var c,d;if(a===b)return 1;if(!Sf(b,JZ))return 0;a:{b:{c:{c=b;if(a.gd===null){if(c.gd!==null)break c;}else if(!a.gd.ek(c.gd))break c;if(a.e3===null){if(c.e3!==null)break c;break b;}if(a.e3.ek(c.e3))break b;}d=0;break a;}d=1;}return d;}
function AWR(a){return a.gd;}
function A2f(a){return a.e3;}
function A1V(a){return (a.gd===null?0:a.gd.fi())^(a.e3===null?0:a.e3.fi());}
function IC(){var a=this;LJ.call(a);a.pQ=0;a.eB=null;}
function BO(){B6.call(this);}
function BiY(){var a=new BO();AUu(a);return a;}
function AUu(a){O(a);}
function IU(){BO.call(this);}
function BiZ(){var a=new IU();A0W(a);return a;}
function A0W(a){O(a);}
function GC(){}
function Wu(){D.call(this);this.zJ=null;}
function AI1(a){var b,c,d,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.zJ;try{Bfo=Bfo+1|0;Fr(b);$p=1;continue _;}catch($$e){$$je=Bi($$e);c=$$je;}d=b.mK;$p=2;continue _;case 1:a:{try{b.km();if(C()){break _;}}catch($$e){$$je=Bi($$e);c=$$je;break a;}c=b.mK;$p=3;continue _;}d=b.mK;$p=2;case 2:AD1(d);if(C()){break _;}a:{try{Xb(b.mK);NO(d);break a;}catch($$e){$$je=Bi($$e);b=$$je;}NO(d);M(b);}b.wt=0;Bfo=Bfo-1|0;Fr(Bfm);M(c);case 3:AD1(c);if
(C()){break _;}a:{try{Xb(b.mK);NO(c);break a;}catch($$e){$$je=Bi($$e);b=$$je;}NO(c);M(b);}b.wt=0;Bfo=Bfo-1|0;Fr(Bfm);return;default:E$();}}C3().s(a,b,c,d,$p);}
function FD(){B1.call(this);}
function Bi0(){var a=new FD();AW4(a);return a;}
function AW4(a){O(a);}
function EQ(){var a=this;D.call(a);a.hO=null;a.vo=0.0;a.vp=0.0;}
function G1(a,b,c,d,e){var f=new EQ();ASI(f,a,b,c,d,e);return f;}
function ASI(a,b,c,d,e,f){a.hO=Wo(b,c,d);a.vo=e;a.vp=f;}
function I6(a,b,c){var d;d=new EQ;d.hO=a.hO;d.vo=b;d.vp=c;return d;}
function Fu(){var a=this;D.call(a);a.hw=null;a.EU=0;}
function Bi1(a,b,c,d,e){var f=new Fu();He(f,a,b,c,d,e);return f;}
function He(a,b,c,d,e,f){var g,h,i,j,k,l;g=b.data;a.EU=0;a.hw=b;a.EU=g.length;h=g[0];i=e/64.0-0.0015625000232830644;j=d/32.0+0.0031250000465661287;g[0]=I6(h,i,j);h=g[1];k=c/64.0+0.0015625000232830644;g[1]=I6(h,k,j);h=g[2];l=f/32.0-0.0031250000465661287;g[2]=I6(h,k,l);g[3]=I6(g[3],i,l);}
function ACS(a){var b,c,d;b=J(EQ,a.hw.data.length);c=b.data;d=0;while(d<a.hw.data.length){c[d]=a.hw.data[(a.hw.data.length-d|0)-1|0];d=d+1|0;}a.hw=b;}
function APB(a,b,c){var d,e,f,g;d=P6(a.hw.data[1].hO,a.hw.data[0].hO);e=CD(ABP(P6(a.hw.data[1].hO,a.hw.data[2].hO),d));Bz(b);Cj(e.w,e.y,e.v);f=0;while(f<4){g=a.hw.data[f];G(b,g.hO.w*c,g.hO.y*c,g.hO.v*c,g.vo,g.vp);f=f+1|0;}Br(b);}
function LH(){var a=this;D.call(a);a.bO=0;a.or=0;a.rM=Long_ZERO;a.bv=Long_ZERO;a.oC=0;a.dW=0;a.xP=0;a.ix=null;a.E=null;a.eI=0;a.iD=0;a.xB=null;a.cG=null;a.fW=null;}
var Bi2=null;function AFI(a){var b;if(a.E===null)return (-2);b=a.E;a.E.nm=Long_ZERO;b.G=Long_ZERO;a.E.b6=null;a.bO=14;a.iD=(-1);JB(a.ix);return 0;}
function AFP(a){if(a.ix!==null)SP(a.ix);return 0;}
function Xx(a,b){var c,d,e,f;a.E.b6=null;a.ix=null;a.dW=0;if(b<0)b= -b;else if(b&1073741824){a.dW=4;b=b&(-1073741825);if(b<48)b=b&15;}else if(b&(-32)){a.dW=4;b=b&15;}else{a.dW=(b>>4)+1|0;if(b<48)b=b&15;}if(b>=8&&b<=15){if(a.ix!==null&&a.xP!=b){SP(a.ix);a.ix=null;}a.xP=b;c=new KB;d=a.E;b=1<<b;c.r9=$rt_createIntArray(1);c.oB=$rt_createIntArray(1);c.mU=$rt_createIntArray(1);c.mR=$rt_createIntArray(1);c.vE=J($rt_arraycls($rt_intcls()),1);c.vF=J($rt_arraycls($rt_intcls()),1);c.u4=$rt_createIntArray(1);c.u_=$rt_createIntArray(1);c.wY
=Baz();c.x=d;e=new Lz;f=c.x;e.kY=0;e.bd=f;e.C=c;c.pC=e;c.kf=$rt_createIntArray(4320);c.cY=$rt_createByteArray(b);c.cO=b;c.rf=d.js.dW?1:0;c.dI=0;JB(c);a.ix=c;AFI(a);return 0;}AFP(a);return (-2);}
function AGC(a,b){var c,d,e,f,g,h,i,$$je;if(a.E!==null&&a.E.cc!==null){c=b!=4?0:(-5);d=(-5);a:{b:{c:{d:{e:{f:{g:{h:{i:while(true){j:{k:{l:{m:{n:{o:{p:{q:{r:{s:{t:{u:{v:{w:{switch(a.bO){case 6:a.bO=13;a.E.b6=B(283);a.oC=0;return (-2);case 7:d=Zl(a.ix,d);if(d==(-3)){a.bO=13;a.oC=0;continue i;}if(!d)d=c;if(d!=1)break i;a.rM=a.E.f8.ys();JB(a.ix);if(!a.dW){a.bO=12;d=c;continue i;}a.bO=8;d=c;break w;case 12:break e;case 13:return (-3);case 14:break r;case 23:try{d=F3(a,2,d,c);}catch($$e){$$je=Bi($$e);if($$je instanceof DW)
{e=$$je;return e.hE;}else{throw $$e;}}a.eI=a.bv.lo&65535;if((a.eI&255)!=8){a.E.b6=B(284);a.bO=13;continue i;}if(a.eI&57344){a.E.b6=B(285);a.bO=13;continue i;}if(a.eI&512)Ii(a,2,a.bv);a.bO=16;break p;case 2:break d;case 3:break c;case 4:break b;case 5:c=d;break a;case 8:break w;case 9:break v;case 10:break u;case 11:break t;case 15:break s;case 16:break p;case 17:break o;case 18:break n;case 19:break q;case 20:break l;case 21:break k;case 22:break;default:return (-2);}break j;}if(!a.E.N)return d;e=a.E;e.N=e.N
-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));f=a.E.cc.data;e=a.E;b=e.A;e.A=b+1|0;a.bv=Long_and(Long_fromInt((f[b]&255)<<24),new Long(4278190080, 0));a.bO=9;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cc.data;e=a.E;b=e.A;e.A=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt((f[b]&255)<<16),Long_fromInt(16711680)));a.bO=10;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cc.data;e=a.E;b=e.A;e.A=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt((f[b]
&255)<<8),Long_fromInt(65280)));a.bO=11;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cc.data;e=a.E;b=e.A;e.A=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt(f[b]),Long_fromInt(255)));if(a.eI)a.bv=Long_and(Long_or(Long_or(Long_or(Long_shr(Long_and(a.bv,Long_fromInt(-16777216)),24),Long_shr(Long_and(a.bv,Long_fromInt(16711680)),8)),Long_shl(Long_and(a.bv,Long_fromInt(65280)),8)),Long_shl(Long_and(a.bv,Long_fromInt(65535)),24)),new Long(4294967295, 0));if(a.rM.lo!=
a.bv.lo)a.E.b6=B(286);else if(a.eI&&a.cG!==null)a.cG.Ht=a.bv;a.bO=15;d=c;}if(!(a.dW&&a.eI)){if(a.E.b6===null)break f;if(!DJ(a.E.b6,B(286)))break f;a.bO=13;a.oC=5;continue i;}try{d=F3(a,4,d,c);}catch($$e){$$je=Bi($$e);if($$je instanceof DW){e=$$je;return e.hE;}else{throw $$e;}}if(a.E.b6!==null&&DJ(a.E.b6,B(286))){a.bO=13;a.oC=5;continue i;}if(Long_eq(a.bv,Long_and(a.E.nm,new Long(4294967295, 0)))){a.E.b6=null;break f;}a.E.b6=B(287);a.bO=13;continue i;}if(!a.dW){a.bO=7;continue i;}try{d=F3(a,2,d,c);}catch($$e)
{$$je=Bi($$e);if($$je instanceof DW){e=$$je;return e.hE;}else{throw $$e;}}if(!(a.dW!=4&&!(a.dW&2))&&Long_eq(a.bv,Long_fromInt(35615))){if(a.dW==4)a.dW=2;a.E.f8=AWh();Ii(a,2,a.bv);if(a.cG===null)a.cG=Bcp();a.bO=23;continue i;}if(a.dW&2){a.bO=13;a.E.b6=B(288);continue i;}a.eI=0;a.or=a.bv.lo&255;h=Long_shr(a.bv,8).lo&255;if(!(a.dW&1&&!(((a.or<<8)+h|0)%31|0))&&(a.or&15)!=8){if(a.dW!=4){a.bO=13;a.E.b6=B(288);continue i;}e=a.E;e.A=e.A-2|0;e=a.E;e.N=e.N+2|0;e=a.E;e.G=Long_sub(e.G,Long_fromInt(2));a.dW=0;a.bO=7;continue i;}if
((a.or&15)!=8){a.bO=13;a.E.b6=B(284);continue i;}if(a.dW==4)a.dW=1;if(((a.or>>4)+8|0)>a.xP){a.bO=13;a.E.b6=B(289);continue i;}a.E.f8=A9T();if(h&32){a.bO=2;break d;}a.bO=7;continue i;}break m;}try{d=F3(a,4,d,c);}catch($$e){$$je=Bi($$e);if($$je instanceof DW){e=$$je;return e.hE;}else{throw $$e;}}if(a.cG!==null)a.cG.HN=a.bv;if(a.eI&512)Ii(a,4,a.bv);a.bO=17;}try{d=F3(a,2,d,c);}catch($$e){$$je=Bi($$e);if($$je instanceof DW){e=$$je;return e.hE;}else{throw $$e;}}if(a.cG!==null){a.cG.I0=a.bv.lo&255;a.cG.A2=a.bv.lo>>
8&255;}if(a.eI&512)Ii(a,2,a.bv);a.bO=18;}if(a.eI&1024){try{d=F3(a,2,d,c);}catch($$e){$$je=Bi($$e);if($$je instanceof DW){e=$$je;return e.hE;}else{throw $$e;}}if(a.cG!==null)a.cG.pn=$rt_createByteArray(a.bv.lo&65535);if(a.eI&512)Ii(a,2,a.bv);}else if(a.cG!==null)a.cG.pn=null;a.bO=19;}if(a.eI&1024)x:{try{d=ANN(a,d,c);if(a.cG===null)break x;f=Ia(a.fW);i=f.data;a.fW=null;b=i.length;if(b!=a.cG.pn.data.length){a.E.b6=B(290);a.bO=13;continue i;}Di(f,0,a.cG.pn,0,b);break x;}catch($$e){$$je=Bi($$e);if($$je instanceof DW)
{e=$$je;return e.hE;}else{throw $$e;}}}else if(a.cG!==null)a.cG.pn=null;a.bO=20;}y:{if(a.eI&2048){z:{try{d=PE(a,d,c);if(a.cG===null)break z;a.cG.yG=Ia(a.fW);break z;}catch($$e){$$je=Bi($$e);if($$je instanceof DW){e=$$je;break h;}else{throw $$e;}}}try{a.fW=null;break y;}catch($$e){$$je=Bi($$e);if($$je instanceof DW){e=$$je;break h;}else{throw $$e;}}}else if(a.cG!==null)a.cG.yG=null;}a.bO=21;}ba:{if(a.eI&4096){bb:{try{d=PE(a,d,c);if(a.cG===null)break bb;a.cG.As=Ia(a.fW);break bb;}catch($$e){$$je=Bi($$e);if($$je instanceof DW)
{e=$$je;break g;}else{throw $$e;}}}try{a.fW=null;break ba;}catch($$e){$$je=Bi($$e);if($$je instanceof DW){e=$$je;break g;}else{throw $$e;}}}else if(a.cG!==null)a.cG.As=null;}a.bO=22;}if(a.eI&512){try{d=F3(a,2,d,c);}catch($$e){$$je=Bi($$e);if($$je instanceof DW){e=$$je;return e.hE;}else{throw $$e;}}if(a.cG!==null)a.cG.JN=Long_and(a.bv,Long_fromInt(65535)).lo;if(Long_ne(a.bv,Long_and(a.E.f8.ys(),Long_fromInt(65535)))){a.bO=13;a.E.b6=B(291);a.oC=5;continue;}}a.E.f8=AWh();a.bO=7;}return d;}return e.hE;}return e.hE;}a.bO
=12;}return 1;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));f=a.E.cc.data;e=a.E;d=e.A;e.A=d+1|0;a.bv=Long_and(Long_fromInt((f[d]&255)<<24),new Long(4278190080, 0));a.bO=3;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cc.data;e=a.E;d=e.A;e.A=d+1|0;a.bv=Long_add(g,Long_and(Long_fromInt((f[d]&255)<<16),Long_fromInt(16711680)));a.bO=4;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cc.data;e
=a.E;b=e.A;e.A=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt((f[b]&255)<<8),Long_fromInt(65280)));a.bO=5;}if(!a.E.N)return c;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cc.data;e=a.E;b=e.A;e.A=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt(f[b]),Long_fromInt(255)));a.E.f8.EV(a.bv);a.bO=6;return 2;}if(b==4&&a.bO==14)return 0;return (-2);}
function F3(a,b,c,d){var e,f,g,h;if(a.iD==(-1)){a.iD=b;a.bv=Long_ZERO;}while(true){if(a.iD<=0){if(b==2)a.bv=Long_and(a.bv,Long_fromInt(65535));else if(b==4)a.bv=Long_and(a.bv,new Long(4294967295, 0));a.iD=(-1);return c;}if(!a.E.N)break;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));f=a.bv;g=a.E.cc.data;e=a.E;h=e.A;e.A=h+1|0;a.bv=Long_or(f,Long_fromInt((g[h]&255)<<((b-a.iD|0)*8|0)));a.iD=a.iD-1|0;c=d;}M(AG8(a,c));}
function PE(a,b,c){var d,e;if(a.fW===null)a.fW=A7B();while(true){if(!a.E.N)M(AG8(a,b));d=a.E;d.N=d.N-1|0;d=a.E;d.G=Long_add(d.G,Long_fromInt(1));e=a.E.cc.data[a.E.A];if(e)Rn(a.fW,a.E.cc,a.E.A,1);a.E.f8.kF(a.E.cc,a.E.A,1);d=a.E;d.A=d.A+1|0;if(!e)break;b=c;}return c;}
function ANN(a,b,c){var d;if(a.fW===null)a.fW=A7B();while(Long_gt(a.bv,Long_ZERO)){if(!a.E.N)M(AG8(a,b));d=a.E;d.N=d.N-1|0;d=a.E;d.G=Long_add(d.G,Long_fromInt(1));Rn(a.fW,a.E.cc,a.E.A,1);a.E.f8.kF(a.E.cc,a.E.A,1);d=a.E;d.A=d.A+1|0;a.bv=Long_sub(a.bv,Long_fromInt(1));b=c;}return b;}
function Ii(a,b,c){var d;d=0;while(d<b){a.xB.data[d]=Long_and(c,Long_fromInt(255)).lo<<24>>24;c=Long_shr(c,8);d=d+1|0;}a.E.f8.kF(a.xB,0,b);}
function AOG(){var b,c;b=$rt_createByteArray(4);c=b.data;c[0]=0;c[1]=0;c[2]=(-1);c[3]=(-1);Bi2=b;}
function PJ(){E3.call(this);}
function Bi3(){var a=new PJ();A6L(a);return a;}
function A6L(a){return;}
function A59(a,b){$rt_putStderr(b);}
function Kh(){var a=this;D.call(a);a.w=0.0;a.y=0.0;a.v=0.0;}
var Bi4=null;var BeN=0;function Wo(b,c,d){var e;e=new Kh;if(b===-0.0)b=0.0;if(c===-0.0)c=0.0;if(d===-0.0)d=0.0;e.w=b;e.y=c;e.v=d;return e;}
function BY(b,c,d){var e,f;if(BeN>=Bi4.o)S(Bi4,Wo(0.0,0.0,0.0));e=Bi4;f=BeN;BeN=f+1|0;e=Z(e,f);e.w=b;e.y=c;e.v=d;return e;}
function P6(a,b){return BY(b.w-a.w,b.y-a.y,b.v-a.v);}
function CD(a){var b;b=Ce(a.w*a.w+a.y*a.y+a.v*a.v);return b<1.0E-4?BY(0.0,0.0,0.0):BY(a.w/b,a.y/b,a.v/b);}
function ABP(a,b){return BY(a.y*b.v-a.v*b.y,a.v*b.w-a.w*b.v,a.w*b.y-a.y*b.w);}
function Dk(a,b,c,d){return BY(a.w+b,a.y+c,a.v+d);}
function DG(a,b){var c,d,e;c=b.w-a.w;d=b.y-a.y;e=b.v-a.v;return Ce(c*c+d*d+e*e);}
function Ex(a,b){var c,d,e;c=b.w-a.w;d=b.y-a.y;e=b.v-a.v;return c*c+d*d+e*e;}
function ABT(a,b,c,d){var e,f,g;e=b-a.w;f=c-a.y;g=d-a.v;return e*e+f*f+g*g;}
function HM(a){return Ce(a.w*a.w+a.y*a.y+a.v*a.v);}
function KK(a,b,c){var d,e,f,g;d=b.w-a.w;e=b.y-a.y;f=b.v-a.v;if(d*d<1.0000000116860974E-7)return null;g=(c-a.w)/d;return g>=0.0&&g<=1.0?BY(a.w+d*g,a.y+e*g,a.v+f*g):null;}
function JR(a,b,c){var d,e,f,g;d=b.w-a.w;e=b.y-a.y;f=b.v-a.v;if(e*e<1.0000000116860974E-7)return null;g=(c-a.y)/e;return g>=0.0&&g<=1.0?BY(a.w+d*g,a.y+e*g,a.v+f*g):null;}
function Ku(a,b,c){var d,e,f,g;d=b.w-a.w;e=b.y-a.y;f=b.v-a.v;if(f*f<1.0000000116860974E-7)return null;g=(c-a.v)/f;return g>=0.0&&g<=1.0?BY(a.w+d*g,a.y+e*g,a.v+f*g):null;}
function AQb(){Bi4=Ci();BeN=0;}
function AMl(){D.call(this);}
function Bi5(){var a=new AMl();ATy(a);return a;}
function ATy(a){return;}
function Gn(b){return Math.sin(b);}
function GA(b){return Math.cos(b);}
function Io(b){return Math.atan(b);}
function A3T(b){return Math.log(b);}
function Ec(b){return Math.sqrt(b);}
function Un(b){return Math.ceil(b);}
function A2N(b,c){return Math.pow(b,c);}
function CR(b,c){return Math.atan2(b,c);}
function BP(){return A2p();}
function A2p(){return Math.random();}
function CB(b,c){if(b<c)c=b;return c;}
function DB(b,c){if(b>c)c=b;return c;}
function H_(b){if(b<=0)b= -b;return b;}
function HU(b){if(b<=0.0)b= -b;return b;}
function Ja(){D.call(this);this.GR=null;}
var Bi6=null;var Bf8=null;var BiJ=null;function AGP(a){var b=new Ja();APF(b,a);return b;}
function APF(a,b){a.GR=b;}
function AC5(){Bi6=AGP(B(292));Bf8=AGP(B(293));BiJ=AGP(B(294));}
function Lr(){LT.call(this);}
function Xk(a){return a.yq;}
function ABK(){var a=this;Lr.call(a);a.yq=0;a.x7=0;a.ma=null;}
function AZF(a,b,c,d,e,f){var g=new ABK();A2D(g,a,b,c,d,e,f);return g;}
function A2D(a,b,c,d,e,f,g){KM(a,c);a.bk=e;a.cv=f;a.x7=b;a.yq=g;a.ma=d;}
function AOM(a,b){return a.ma.data[b+a.x7|0];}
function Vp(a,b,c){a.ma.data[b+a.x7|0]=c;}
function AYY(a){return 1;}
function AWe(a){return a.ma;}
function A14(a){return a.yq;}
function LP(){var a=this;D.call(a);a.Hs=null;a.uv=null;a.Gv=0.0;a.BG=0.0;a.vn=null;a.uH=null;a.mX=0;}
function ACO(a,b){var c;if(b!==null){a.vn=b;return a;}c=new Cb;Bl(c,B(295));M(c);}
function A18(a,b){return;}
function AGV(a,b){var c;if(b!==null){a.uH=b;return a;}c=new Cb;Bl(c,B(295));M(c);}
function A6B(a,b){return;}
function AJb(a,b,c,d){var e,f,g,h,$$je;a:{if(a.mX!=3){if(d)break a;if(a.mX!=2)break a;}b=new D1;O(b);M(b);}a.mX=!d?1:2;while(true){try{e=Y0(a,b,c);}catch($$e){$$je=Bi($$e);if($$je instanceof B6){f=$$je;M(A42(f));}else{throw $$e;}}if(Jw(e)){if(!d)return e;g=Ct(b);if(g<=0)return e;e=Fh(g);}else if(IO(e))break;h=!Mr(e)?a.vn:a.uH;b:{if(h!==Bf8){if(h===Bi6)break b;else return e;}if(Ct(c)<a.uv.data.length)return Bi7;UG(c,a.uv);}EN(b,b.bk+Lw(e)|0);}return e;}
function XW(a,b){var c;if(a.mX!=2&&a.mX!=4){b=new D1;O(b);M(b);}c=Bi8;if(c===Bi8)a.mX=3;return c;}
function A7t(a,b){return Bi8;}
function N5(){var a=this;D.call(a);a.np=0;a.qC=0;}
var Bi8=null;var Bi7=null;function Ze(a,b){var c=new N5();AKh(c,a,b);return c;}
function AKh(a,b,c){a.np=b;a.qC=c;}
function Jw(a){return a.np?0:1;}
function IO(a){return a.np!=1?0:1;}
function Nv(a){return !P9(a)&&!Mr(a)?0:1;}
function P9(a){return a.np!=2?0:1;}
function Mr(a){return a.np!=3?0:1;}
function Lw(a){var b;if(Nv(a))return a.qC;b=new Jj;O(b);M(b);}
function Fh(b){return Ze(2,b);}
function R1(a){var b,c;switch(a.np){case 0:b=new PY;O(b);M(b);case 1:b=new SC;O(b);M(b);case 2:b=new RS;c=a.qC;O(b);b.Bo=c;M(b);case 3:b=new PU;c=a.qC;O(b);b.EH=c;M(b);default:}}
function AKP(){Bi8=Ze(0,0);Bi7=Ze(1,0);}
function Z6(){D.call(this);}
function A9Z(){return {};}
function PK(){}
function Yz(){D.call(this);}
function KB(){var a=this;D.call(a);a.dI=0;a.pH=0;a.p5=0;a.f2=0;a.fz=null;a.r9=null;a.oB=null;a.mU=null;a.mR=null;a.vE=null;a.vF=null;a.u4=null;a.u_=null;a.pC=null;a.tk=0;a.bK=0;a.bJ=0;a.kf=null;a.cY=null;a.cO=0;a.bU=0;a.bl=0;a.rf=0;a.wY=null;a.x=null;}
var Bi9=null;var Bi$=null;function JB(a){a.dI=0;a.bK=0;a.bJ=0;a.bl=0;a.bU=0;if(a.rf)a.x.f8.lT();}
function Zl(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;c=a.x.A;d=a.x.N;e=a.bJ;f=a.bK;g=a.bl;h=g>=a.bU?a.cO-g|0:(a.bU-g|0)-1|0;a:{b:{c:{d:{e:while(true){f:{g:{h:{i:{j:{switch(a.dI){case 2:break f;case 9:a.bJ=e;a.bK=f;a.x.N=d;i=a.x;i.G=Long_add(i.G,Long_fromInt(c-a.x.A|0));a.x.A=c;a.bl=g;return B5(a,(-3));case 0:break j;case 1:break;case 3:while(f<14){if(!d){a.bJ=e;a.bK=f;a.x.N=d;i=a.x;i.G=Long_add(i.G,Long_fromInt(c-a.x.A|0));a.x.A=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.x.cc.data;k=c+1|0;e=e|(j[c]&255)<<f;f
=f+8|0;c=k;}k=e&16383;a.p5=k;l=k&31;if(l>29)break d;k=k>>5&31;if(k>29)break d;k:{k=(258+l|0)+k|0;if(!(a.fz!==null&&a.fz.data.length>=k))a.fz=$rt_createIntArray(k);else{l=0;while(true){if(l>=k)break k;a.fz.data[l]=0;l=l+1|0;}}}e=e>>>14;f=f+(-14)|0;a.f2=0;a.dI=4;break i;case 4:break i;case 5:break h;case 6:break g;case 7:break b;case 8:break a;default:a.bJ=e;a.bK=f;a.x.N=d;i=a.x;i.G=Long_add(i.G,Long_fromInt(c-a.x.A|0));a.x.A=c;a.bl=g;return B5(a,(-2));}while(f<32){if(!d){a.bJ=e;a.bK=f;a.x.N=d;i=a.x;i.G=Long_add(i.G,
Long_fromInt(c-a.x.A|0));a.x.A=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.x.cc.data;k=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=k;}k=(e^(-1))>>>16&65535;l=e&65535;if(k!=l){a.dI=9;a.x.b6=B(296);a.bJ=e;a.bK=f;a.x.N=d;i=a.x;i.G=Long_add(i.G,Long_fromInt(c-a.x.A|0));a.x.A=c;a.bl=g;return B5(a,(-3));}a.pH=l;f=0;a.dI=a.pH?2:!a.tk?0:7;e=f;continue e;}while(f<3){if(!d){a.bJ=e;a.bK=f;a.x.N=d;i=a.x;i.G=Long_add(i.G,Long_fromInt(c-a.x.A|0));a.x.A=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.x.cc.data;k=c+1|0;e=e|(j[c]&255)<<f;f
=f+8|0;c=k;}l:{m=e&7;a.tk=m&1;switch(m>>>1){case 0:k=e>>>3;l=f+(-3)|0;n=l&7;e=k>>>n;f=l-n|0;a.dI=1;break l;case 1:AEi(a.mU,a.mR,a.vE,a.vF,a.x);W1(a.pC,a.mU.data[0],a.mR.data[0],a.vE.data[0],0,a.vF.data[0],0);e=e>>>3;f=f+(-3)|0;a.dI=6;break l;case 2:e=e>>>3;f=f+(-3)|0;a.dI=3;break l;case 3:b=e>>>3;k=f+(-3)|0;a.dI=9;a.x.b6=B(297);a.bJ=b;a.bK=k;a.x.N=d;i=a.x;i.G=Long_add(i.G,Long_fromInt(c-a.x.A|0));a.x.A=c;a.bl=g;return B5(a,(-3));default:}}continue e;}while(a.f2<(4+(a.p5>>>10)|0)){while(f<3){if(!d){a.bJ=e;a.bK
=f;a.x.N=d;i=a.x;i.G=Long_add(i.G,Long_fromInt(c-a.x.A|0));a.x.A=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.x.cc.data;k=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=k;}o=a.fz.data;j=Bi$.data;k=a.f2;a.f2=k+1|0;o[j[k]]=e&7;e=e>>>3;f=f+(-3)|0;}while(a.f2<19){o=a.fz.data;j=Bi$.data;k=a.f2;a.f2=k+1|0;o[j[k]]=0;}a.r9.data[0]=7;k=APZ(a.wY,a.fz,a.r9,a.oB,a.kf,a.x);if(k){if(k==(-3)){a.fz=null;a.dI=9;}a.bJ=e;a.bK=f;a.x.N=d;i=a.x;i.G=Long_add(i.G,Long_fromInt(c-a.x.A|0));a.x.A=c;a.bl=g;return B5(a,k);}a.f2=0;a.dI=5;}while(true)
{k=a.p5;if(a.f2>=((258+(k&31)|0)+(k>>5&31)|0))break;k=a.r9.data[0];while(f<k){if(!d){a.bJ=e;a.bK=f;a.x.N=d;i=a.x;i.G=Long_add(i.G,Long_fromInt(c-a.x.A|0));a.x.A=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.x.cc.data;l=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=l;}k=a.kf.data[((a.oB.data[0]+(e&Bi9.data[k])|0)*3|0)+1|0];n=a.kf.data[((a.oB.data[0]+(e&Bi9.data[k])|0)*3|0)+2|0];l=R(n,16);if(l<0){e=e>>>k;f=f-k|0;j=a.fz.data;k=a.f2;a.f2=k+1|0;j[k]=n;}else{p=R(n,18);q=!p?7:n-14|0;p=p?3:11;while(f<(k+q|0)){if(!d){a.bJ=e;a.bK=
f;a.x.N=d;i=a.x;i.G=Long_add(i.G,Long_fromInt(c-a.x.A|0));a.x.A=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.x.cc.data;n=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=n;}n=e>>>k;k=f-k|0;p=p+(n&Bi9.data[q])|0;e=n>>>q;f=k-q|0;h=a.f2;q=a.p5;if((h+p|0)>((258+(q&31)|0)+(q>>5&31)|0))break c;if(!l&&h<1)break c;k=l?0:a.fz.data[h-1|0];while(true){j=a.fz.data;l=h+1|0;j[h]=k;p=p+(-1)|0;if(!p)break;h=l;}a.f2=l;}}a.oB.data[0]=(-1);a.mU.data[0]=9;a.mR.data[0]=6;k=a.p5;k=YC(a.wY,257+(k&31)|0,1+(k>>5&31)|0,a.fz,a.mU,a.mR,a.u4,a.u_,a.kf,
a.x);if(k){if(k==(-3)){a.fz=null;a.dI=9;}a.bJ=e;a.bK=f;a.x.N=d;i=a.x;i.G=Long_add(i.G,Long_fromInt(c-a.x.A|0));a.x.A=c;a.bl=g;return B5(a,k);}W1(a.pC,a.mU.data[0],a.mR.data[0],a.kf,a.u4.data[0],a.kf,a.u_.data[0]);a.dI=6;}a.bJ=e;a.bK=f;a.x.N=d;i=a.x;i.G=Long_add(i.G,Long_fromInt(c-a.x.A|0));a.x.A=c;a.bl=g;b=ABy(a.pC,b);if(b!=1)break e;b=0;AAK(a.pC,a.x);c=a.x.A;d=a.x.N;e=a.bJ;f=a.bK;g=a.bl;h=g>=a.bU?a.cO-g|0:(a.bU-g|0)-1|0;if(a.tk){a.dI=7;break b;}a.dI=0;continue e;}if(!d){a.bJ=e;a.bK=f;a.x.N=d;i=a.x;i.G=Long_add(i.G,
Long_fromInt(c-a.x.A|0));a.x.A=c;a.bl=g;return B5(a,b);}if(!h){if(g==a.cO&&a.bU){g=0;h=g>=a.bU?a.cO-g|0:(a.bU-g|0)-1|0;}if(!h){a.bl=g;b=B5(a,b);g=a.bl;h=g>=a.bU?a.cO-g|0:(a.bU-g|0)-1|0;if(g==a.cO&&a.bU){g=0;h=g>=a.bU?a.cO-g|0:(a.bU-g|0)-1|0;}if(!h){a.bJ=e;a.bK=f;a.x.N=d;i=a.x;i.G=Long_add(i.G,Long_fromInt(c-a.x.A|0));a.x.A=c;a.bl=g;return B5(a,b);}}}b=0;k=a.pH;if(k>d)k=d;if(k>h)k=h;Di(a.x.cc,c,a.cY,g,k);c=c+k|0;d=d-k|0;g=g+k|0;h=h-k|0;k=a.pH-k|0;a.pH=k;if(k)continue;a.dI=!a.tk?0:7;}return B5(a,b);}a.dI=9;a.x.b6
=B(298);a.bJ=e;a.bK=f;a.x.N=d;i=a.x;i.G=Long_add(i.G,Long_fromInt(c-a.x.A|0));a.x.A=c;a.bl=g;return B5(a,(-3));}a.fz=null;a.dI=9;a.x.b6=B(299);a.bJ=e;a.bK=f;a.x.N=d;i=a.x;i.G=Long_add(i.G,Long_fromInt(c-a.x.A|0));a.x.A=c;a.bl=g;return B5(a,(-3));}a.bl=g;b=B5(a,b);g=a.bl;if(a.bU!=a.bl){a.bJ=e;a.bK=f;a.x.N=d;i=a.x;i.G=Long_add(i.G,Long_fromInt(c-a.x.A|0));a.x.A=c;a.bl=g;return B5(a,b);}a.dI=8;}a.bJ=e;a.bK=f;a.x.N=d;i=a.x;i.G=Long_add(i.G,Long_fromInt(c-a.x.A|0));a.x.A=c;a.bl=g;return B5(a,1);}
function SP(a){JB(a);a.cY=null;a.kf=null;}
function B5(a,b){var c,d,e,f,g;c=a.x.pK;d=a.bU;e=(d>a.bl?a.cO:a.bl)-d|0;if(e>a.x.ia)e=a.x.ia;if(e&&b==(-5))b=0;f=a.x;f.ia=f.ia-e|0;f=a.x;f.nm=Long_add(f.nm,Long_fromInt(e));if(a.rf&&e>0)a.x.f8.kF(a.cY,d,e);Di(a.cY,d,a.x.uP,c,e);c=c+e|0;g=d+e|0;if(g==a.cO){if(a.bl==a.cO)a.bl=0;d=a.bl-0|0;if(d>a.x.ia)d=a.x.ia;if(d&&b==(-5))b=0;f=a.x;f.ia=f.ia-d|0;f=a.x;f.nm=Long_add(f.nm,Long_fromInt(d));if(a.rf&&d>0)a.x.f8.kF(a.cY,0,d);Di(a.cY,0,a.x.uP,c,d);c=c+d|0;g=0+d|0;}a.x.pK=c;a.bU=g;return b;}
function AH3(){var b,c;b=$rt_createIntArray(17);c=b.data;c[0]=0;c[1]=1;c[2]=3;c[3]=7;c[4]=15;c[5]=31;c[6]=63;c[7]=127;c[8]=255;c[9]=511;c[10]=1023;c[11]=2047;c[12]=4095;c[13]=8191;c[14]=16383;c[15]=32767;c[16]=65535;Bi9=b;b=$rt_createIntArray(19);c=b.data;c[0]=16;c[1]=17;c[2]=18;c[3]=0;c[4]=8;c[5]=7;c[6]=9;c[7]=6;c[8]=10;c[9]=5;c[10]=11;c[11]=4;c[12]=12;c[13]=3;c[14]=13;c[15]=2;c[16]=14;c[17]=1;c[18]=15;Bi$=b;}
function Nz(){LP.call(this);}
function Y0(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createCharArray(CB(Ct(b),512));e=d.data;f=0;g=0;h=$rt_createByteArray(CB(Ct(c),512));i=h.data;a:{while(true){if((f+32|0)>g&&Fk(b)){j=f;while(j<g){e[j-f|0]=e[j];j=j+1|0;}k=g-f|0;g=CB(Ct(b)+k|0,e.length);OX(b,d,k,g-k|0);f=0;}if(!Fk(c)){l=!Fk(b)&&f>=g?Bi8:Bi7;break a;}k=CB(Ct(c),i.length);m=new Tr;m.yL=b;m.Dc=c;l=ACw(a,d,f,g,h,0,k,m);f=m.vB;if(l===null&&0==m.rG)l=Bi8;WT(c,h,0,m.rG);if(l!==null)break;}}EN(b,b.bk-(g-f|0)|0);return l;}
function PL(){Nz.call(this);}
function ACw(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(N4(h,2))break a;i=Bi7;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Om(l)){if((f+3|0)>g){j=j+(-1)|0;if(N4(h,3))break a;i=Bi7;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!Dt(l)){i=Fh(1);break a;}if
(j>=d){if(AAv(h))break a;i=Bi8;break a;}c=j+1|0;j=k[j];if(!DP(j)){j=c+(-2)|0;i=Fh(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(N4(h,4))break a;i=Bi7;break a;}k=e.data;n=EI(l,j);j=f+1|0;k[f]=(240|n>>18)<<24>>24;f=j+1|0;k[j]=(128|n>>12&63)<<24>>24;j=f+1|0;k[f]=(128|n>>6&63)<<24>>24;m=j+1|0;k[j]=(128|n&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.vB=j;h.rG=f;return i;}
function AOn(){D.call(this);}
function Bi_(){var a=new AOn();A2O(a);return a;}
function A2O(a){return;}
function APe(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(Bhg());}return b.data.length;}
function AEG(b,c){if(b===null){b=new ED;O(b);M(b);}if(b===F($rt_voidcls())){b=new Cb;O(b);M(b);}if(c>=0)return A1Q(b.fX,c);b=new Xq;O(b);M(b);}
function A1Q(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
function F9(){var a=this;D.call(a);a.jU=null;a.j2=null;a.eO=null;a.fH=null;a.le=null;a.il=null;}
var Bja=null;var Bjb=null;var Bjc=null;var Bjd=null;var Bje=null;var Bjf=null;function Baz(){var a=new F9();AHF(a);return a;}
function AHF(a){a.jU=null;a.j2=null;a.eO=null;a.fH=null;a.le=null;a.il=null;}
function NC(a,b,c,d,e,f,g,h,i,j,k,l){var m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;m=0;n=d;while(true){o=b.data;p=a.eO.data;q=o[c+m|0];p[q]=p[q]+1|0;m=m+1|0;n=n+(-1)|0;if(!n)break;}if(a.eO.data[0]==d){b=h.data;f=i.data;b[0]=(-1);f[0]=0;return 0;}i=i.data;r=i[0];s=1;a:{while(true){if(s>15)break a;if(a.eO.data[s])break;s=s+1|0;}}if(r<s)r=s;t=15;b:{while(true){if(!t)break b;if(a.eO.data[t])break;t=t+(-1)|0;}}if(r>t)r=t;i[0]=r;u=1<<s;m=s;while(true){if(m>=t){v=u-a.eO.data[t]|0;if(v<0)return (-3);b=a.eO.data;b[t]
=b[t]+v|0;b=a.il.data;u=0;b[1]=u;m=1;w=2;x=t;while(true){x=x+(-1)|0;if(!x)break;i=a.il.data;u=u+a.eO.data[m]|0;i[w]=u;w=w+1|0;m=m+1|0;}m=0;w=0;while(true){x=o[c+w|0];if(x){i=l.data;b=a.il.data;q=b[x];b[x]=q+1|0;i[q]=m;}w=w+1|0;m=m+1|0;if(m>=d)break;}u=a.il.data[t];b=a.il.data;m=0;b[0]=m;w=0;y=(-1);z= -r;a.le.data[0]=0;ba=0;bb=0;c:while(true){if(s>t)return v&&t!=1?(-5):0;bc=a.eO.data[s];while(true){bd=bc+(-1)|0;if(!bc)break;n=bd+1|0;while(true){be=z+r|0;if(s<=be)break;y=y+1|0;x=t-be|0;if(x>r)x=r;d:{bc=s-be|0;c
=1<<bc;if(c>n){q=c-n|0;if(bc<x){c=s;while(true){bc=bc+1|0;if(bc>=x)break;d=q<<1;b=a.eO.data;c=c+1|0;if(d<=b[c])break d;q=d-a.eO.data[c]|0;}}}}b=k.data;bb=1<<bc;if((b[0]+bb|0)>1440)break c;i=a.le.data;ba=b[0];i[y]=ba;b[0]=b[0]+bb|0;if(!y){h.data[0]=ba;z=be;continue;}a.il.data[y]=m;a.fH.data[0]=bc<<24>>24;a.fH.data[1]=r<<24>>24;c=m>>>(be-r|0);i=a.fH.data;b=a.le.data;q=y-1|0;i[2]=(ba-b[q]|0)-c|0;Di(a.fH,0,j,(a.le.data[q]+c|0)*3|0,3);z=be;}b=a.fH.data;x=s-z|0;b[1]=x<<24>>24;if(w>=u)a.fH.data[0]=192;else{p=l.data;if
(p[w]>=e){i=g.data;o=f.data;a.fH.data[0]=((i[p[w]-e|0]+16|0)+64|0)<<24>>24;b=a.fH.data;d=w+1|0;b[2]=o[p[w]-e|0];w=d;}else{b=a.fH;b.data[0]=(p[w]>=256?96:0)<<24>>24;b=a.fH.data;d=w+1|0;b[2]=p[w];w=d;}}q=1<<x;c=m>>>z;while(c<bb){Di(a.fH,0,j,(ba+c|0)*3|0,3);c=c+q|0;}c=1<<(s-1|0);while(m&c){m=m^c;c=c>>>1;}m=m^c;x=(1<<z)-1|0;while((m&x)!=a.il.data[y]){y=y+(-1)|0;z=z-r|0;x=(1<<z)-1|0;}bc=bd;}s=s+1|0;}return (-3);}q=u-a.eO.data[m]|0;if(q<0)break;m=m+1|0;u=q<<1;}return (-3);}
function APZ(a,b,c,d,e,f){var g;MX(a,19);a.jU.data[0]=0;g=NC(a,b,0,19,19,null,null,d,c,e,a.jU,a.j2);if(g==(-3))f.b6=B(300);else if(!(g!=(-5)&&c.data[0])){f.b6=B(301);g=(-3);}return g;}
function YC(a,b,c,d,e,f,g,h,i,j){var k;MX(a,288);a.jU.data[0]=0;k=NC(a,d,0,b,257,Bjc,Bjd,g,e,i,a.jU,a.j2);if(!k&&e.data[0]){MX(a,288);c=NC(a,d,b,c,0,Bje,Bjf,h,f,i,a.jU,a.j2);if(!c&&!(!f.data[0]&&b>257))return 0;if(c==(-3))j.b6=B(302);else if(c==(-5)){j.b6=B(303);c=(-3);}else if(c!=(-4)){j.b6=B(304);c=(-3);}return c;}if(k==(-3))j.b6=B(305);else if(k!=(-4)){j.b6=B(306);k=(-3);}return k;}
function AEi(b,c,d,e,f){e=e.data;d=d.data;c=c.data;b.data[0]=9;c[0]=5;d[0]=Bja;e[0]=Bjb;return 0;}
function MX(a,b){var c;if(a.jU===null){a.jU=$rt_createIntArray(1);a.j2=$rt_createIntArray(b);a.eO=$rt_createIntArray(16);a.fH=$rt_createIntArray(3);a.le=$rt_createIntArray(15);a.il=$rt_createIntArray(16);}if(a.j2.data.length<b)a.j2=$rt_createIntArray(b);c=0;while(c<b){a.j2.data[c]=0;c=c+1|0;}c=0;while(c<16){a.eO.data[c]=0;c=c+1|0;}c=0;while(c<3){a.fH.data[c]=0;c=c+1|0;}Di(a.eO,0,a.le,0,15);Di(a.eO,0,a.il,0,16);}
function AOo(){var b,c;b=$rt_createIntArray(1536);c=b.data;c[0]=96;c[1]=7;c[2]=256;c[3]=0;c[4]=8;c[5]=80;c[6]=0;c[7]=8;c[8]=16;c[9]=84;c[10]=8;c[11]=115;c[12]=82;c[13]=7;c[14]=31;c[15]=0;c[16]=8;c[17]=112;c[18]=0;c[19]=8;c[20]=48;c[21]=0;c[22]=9;c[23]=192;c[24]=80;c[25]=7;c[26]=10;c[27]=0;c[28]=8;c[29]=96;c[30]=0;c[31]=8;c[32]=32;c[33]=0;c[34]=9;c[35]=160;c[36]=0;c[37]=8;c[38]=0;c[39]=0;c[40]=8;c[41]=128;c[42]=0;c[43]=8;c[44]=64;c[45]=0;c[46]=9;c[47]=224;c[48]=80;c[49]=7;c[50]=6;c[51]=0;c[52]=8;c[53]=88;c[54]
=0;c[55]=8;c[56]=24;c[57]=0;c[58]=9;c[59]=144;c[60]=83;c[61]=7;c[62]=59;c[63]=0;c[64]=8;c[65]=120;c[66]=0;c[67]=8;c[68]=56;c[69]=0;c[70]=9;c[71]=208;c[72]=81;c[73]=7;c[74]=17;c[75]=0;c[76]=8;c[77]=104;c[78]=0;c[79]=8;c[80]=40;c[81]=0;c[82]=9;c[83]=176;c[84]=0;c[85]=8;c[86]=8;c[87]=0;c[88]=8;c[89]=136;c[90]=0;c[91]=8;c[92]=72;c[93]=0;c[94]=9;c[95]=240;c[96]=80;c[97]=7;c[98]=4;c[99]=0;c[100]=8;c[101]=84;c[102]=0;c[103]=8;c[104]=20;c[105]=85;c[106]=8;c[107]=227;c[108]=83;c[109]=7;c[110]=43;c[111]=0;c[112]=8;c[113]
=116;c[114]=0;c[115]=8;c[116]=52;c[117]=0;c[118]=9;c[119]=200;c[120]=81;c[121]=7;c[122]=13;c[123]=0;c[124]=8;c[125]=100;c[126]=0;c[127]=8;c[128]=36;c[129]=0;c[130]=9;c[131]=168;c[132]=0;c[133]=8;c[134]=4;c[135]=0;c[136]=8;c[137]=132;c[138]=0;c[139]=8;c[140]=68;c[141]=0;c[142]=9;c[143]=232;c[144]=80;c[145]=7;c[146]=8;c[147]=0;c[148]=8;c[149]=92;c[150]=0;c[151]=8;c[152]=28;c[153]=0;c[154]=9;c[155]=152;c[156]=84;c[157]=7;c[158]=83;c[159]=0;c[160]=8;c[161]=124;c[162]=0;c[163]=8;c[164]=60;c[165]=0;c[166]=9;c[167]
=216;c[168]=82;c[169]=7;c[170]=23;c[171]=0;c[172]=8;c[173]=108;c[174]=0;c[175]=8;c[176]=44;c[177]=0;c[178]=9;c[179]=184;c[180]=0;c[181]=8;c[182]=12;c[183]=0;c[184]=8;c[185]=140;c[186]=0;c[187]=8;c[188]=76;c[189]=0;c[190]=9;c[191]=248;c[192]=80;c[193]=7;c[194]=3;c[195]=0;c[196]=8;c[197]=82;c[198]=0;c[199]=8;c[200]=18;c[201]=85;c[202]=8;c[203]=163;c[204]=83;c[205]=7;c[206]=35;c[207]=0;c[208]=8;c[209]=114;c[210]=0;c[211]=8;c[212]=50;c[213]=0;c[214]=9;c[215]=196;c[216]=81;c[217]=7;c[218]=11;c[219]=0;c[220]=8;c[221]
=98;c[222]=0;c[223]=8;c[224]=34;c[225]=0;c[226]=9;c[227]=164;c[228]=0;c[229]=8;c[230]=2;c[231]=0;c[232]=8;c[233]=130;c[234]=0;c[235]=8;c[236]=66;c[237]=0;c[238]=9;c[239]=228;c[240]=80;c[241]=7;c[242]=7;c[243]=0;c[244]=8;c[245]=90;c[246]=0;c[247]=8;c[248]=26;c[249]=0;c[250]=9;c[251]=148;c[252]=84;c[253]=7;c[254]=67;c[255]=0;c[256]=8;c[257]=122;c[258]=0;c[259]=8;c[260]=58;c[261]=0;c[262]=9;c[263]=212;c[264]=82;c[265]=7;c[266]=19;c[267]=0;c[268]=8;c[269]=106;c[270]=0;c[271]=8;c[272]=42;c[273]=0;c[274]=9;c[275]
=180;c[276]=0;c[277]=8;c[278]=10;c[279]=0;c[280]=8;c[281]=138;c[282]=0;c[283]=8;c[284]=74;c[285]=0;c[286]=9;c[287]=244;c[288]=80;c[289]=7;c[290]=5;c[291]=0;c[292]=8;c[293]=86;c[294]=0;c[295]=8;c[296]=22;c[297]=192;c[298]=8;c[299]=0;c[300]=83;c[301]=7;c[302]=51;c[303]=0;c[304]=8;c[305]=118;c[306]=0;c[307]=8;c[308]=54;c[309]=0;c[310]=9;c[311]=204;c[312]=81;c[313]=7;c[314]=15;c[315]=0;c[316]=8;c[317]=102;c[318]=0;c[319]=8;c[320]=38;c[321]=0;c[322]=9;c[323]=172;c[324]=0;c[325]=8;c[326]=6;c[327]=0;c[328]=8;c[329]
=134;c[330]=0;c[331]=8;c[332]=70;c[333]=0;c[334]=9;c[335]=236;c[336]=80;c[337]=7;c[338]=9;c[339]=0;c[340]=8;c[341]=94;c[342]=0;c[343]=8;c[344]=30;c[345]=0;c[346]=9;c[347]=156;c[348]=84;c[349]=7;c[350]=99;c[351]=0;c[352]=8;c[353]=126;c[354]=0;c[355]=8;c[356]=62;c[357]=0;c[358]=9;c[359]=220;c[360]=82;c[361]=7;c[362]=27;c[363]=0;c[364]=8;c[365]=110;c[366]=0;c[367]=8;c[368]=46;c[369]=0;c[370]=9;c[371]=188;c[372]=0;c[373]=8;c[374]=14;c[375]=0;c[376]=8;c[377]=142;c[378]=0;c[379]=8;c[380]=78;c[381]=0;c[382]=9;c[383]
=252;c[384]=96;c[385]=7;c[386]=256;c[387]=0;c[388]=8;c[389]=81;c[390]=0;c[391]=8;c[392]=17;c[393]=85;c[394]=8;c[395]=131;c[396]=82;c[397]=7;c[398]=31;c[399]=0;c[400]=8;c[401]=113;c[402]=0;c[403]=8;c[404]=49;c[405]=0;c[406]=9;c[407]=194;c[408]=80;c[409]=7;c[410]=10;c[411]=0;c[412]=8;c[413]=97;c[414]=0;c[415]=8;c[416]=33;c[417]=0;c[418]=9;c[419]=162;c[420]=0;c[421]=8;c[422]=1;c[423]=0;c[424]=8;c[425]=129;c[426]=0;c[427]=8;c[428]=65;c[429]=0;c[430]=9;c[431]=226;c[432]=80;c[433]=7;c[434]=6;c[435]=0;c[436]=8;c[437]
=89;c[438]=0;c[439]=8;c[440]=25;c[441]=0;c[442]=9;c[443]=146;c[444]=83;c[445]=7;c[446]=59;c[447]=0;c[448]=8;c[449]=121;c[450]=0;c[451]=8;c[452]=57;c[453]=0;c[454]=9;c[455]=210;c[456]=81;c[457]=7;c[458]=17;c[459]=0;c[460]=8;c[461]=105;c[462]=0;c[463]=8;c[464]=41;c[465]=0;c[466]=9;c[467]=178;c[468]=0;c[469]=8;c[470]=9;c[471]=0;c[472]=8;c[473]=137;c[474]=0;c[475]=8;c[476]=73;c[477]=0;c[478]=9;c[479]=242;c[480]=80;c[481]=7;c[482]=4;c[483]=0;c[484]=8;c[485]=85;c[486]=0;c[487]=8;c[488]=21;c[489]=80;c[490]=8;c[491]
=258;c[492]=83;c[493]=7;c[494]=43;c[495]=0;c[496]=8;c[497]=117;c[498]=0;c[499]=8;c[500]=53;c[501]=0;c[502]=9;c[503]=202;c[504]=81;c[505]=7;c[506]=13;c[507]=0;c[508]=8;c[509]=101;c[510]=0;c[511]=8;c[512]=37;c[513]=0;c[514]=9;c[515]=170;c[516]=0;c[517]=8;c[518]=5;c[519]=0;c[520]=8;c[521]=133;c[522]=0;c[523]=8;c[524]=69;c[525]=0;c[526]=9;c[527]=234;c[528]=80;c[529]=7;c[530]=8;c[531]=0;c[532]=8;c[533]=93;c[534]=0;c[535]=8;c[536]=29;c[537]=0;c[538]=9;c[539]=154;c[540]=84;c[541]=7;c[542]=83;c[543]=0;c[544]=8;c[545]
=125;c[546]=0;c[547]=8;c[548]=61;c[549]=0;c[550]=9;c[551]=218;c[552]=82;c[553]=7;c[554]=23;c[555]=0;c[556]=8;c[557]=109;c[558]=0;c[559]=8;c[560]=45;c[561]=0;c[562]=9;c[563]=186;c[564]=0;c[565]=8;c[566]=13;c[567]=0;c[568]=8;c[569]=141;c[570]=0;c[571]=8;c[572]=77;c[573]=0;c[574]=9;c[575]=250;c[576]=80;c[577]=7;c[578]=3;c[579]=0;c[580]=8;c[581]=83;c[582]=0;c[583]=8;c[584]=19;c[585]=85;c[586]=8;c[587]=195;c[588]=83;c[589]=7;c[590]=35;c[591]=0;c[592]=8;c[593]=115;c[594]=0;c[595]=8;c[596]=51;c[597]=0;c[598]=9;c[599]
=198;c[600]=81;c[601]=7;c[602]=11;c[603]=0;c[604]=8;c[605]=99;c[606]=0;c[607]=8;c[608]=35;c[609]=0;c[610]=9;c[611]=166;c[612]=0;c[613]=8;c[614]=3;c[615]=0;c[616]=8;c[617]=131;c[618]=0;c[619]=8;c[620]=67;c[621]=0;c[622]=9;c[623]=230;c[624]=80;c[625]=7;c[626]=7;c[627]=0;c[628]=8;c[629]=91;c[630]=0;c[631]=8;c[632]=27;c[633]=0;c[634]=9;c[635]=150;c[636]=84;c[637]=7;c[638]=67;c[639]=0;c[640]=8;c[641]=123;c[642]=0;c[643]=8;c[644]=59;c[645]=0;c[646]=9;c[647]=214;c[648]=82;c[649]=7;c[650]=19;c[651]=0;c[652]=8;c[653]
=107;c[654]=0;c[655]=8;c[656]=43;c[657]=0;c[658]=9;c[659]=182;c[660]=0;c[661]=8;c[662]=11;c[663]=0;c[664]=8;c[665]=139;c[666]=0;c[667]=8;c[668]=75;c[669]=0;c[670]=9;c[671]=246;c[672]=80;c[673]=7;c[674]=5;c[675]=0;c[676]=8;c[677]=87;c[678]=0;c[679]=8;c[680]=23;c[681]=192;c[682]=8;c[683]=0;c[684]=83;c[685]=7;c[686]=51;c[687]=0;c[688]=8;c[689]=119;c[690]=0;c[691]=8;c[692]=55;c[693]=0;c[694]=9;c[695]=206;c[696]=81;c[697]=7;c[698]=15;c[699]=0;c[700]=8;c[701]=103;c[702]=0;c[703]=8;c[704]=39;c[705]=0;c[706]=9;c[707]
=174;c[708]=0;c[709]=8;c[710]=7;c[711]=0;c[712]=8;c[713]=135;c[714]=0;c[715]=8;c[716]=71;c[717]=0;c[718]=9;c[719]=238;c[720]=80;c[721]=7;c[722]=9;c[723]=0;c[724]=8;c[725]=95;c[726]=0;c[727]=8;c[728]=31;c[729]=0;c[730]=9;c[731]=158;c[732]=84;c[733]=7;c[734]=99;c[735]=0;c[736]=8;c[737]=127;c[738]=0;c[739]=8;c[740]=63;c[741]=0;c[742]=9;c[743]=222;c[744]=82;c[745]=7;c[746]=27;c[747]=0;c[748]=8;c[749]=111;c[750]=0;c[751]=8;c[752]=47;c[753]=0;c[754]=9;c[755]=190;c[756]=0;c[757]=8;c[758]=15;c[759]=0;c[760]=8;c[761]
=143;c[762]=0;c[763]=8;c[764]=79;c[765]=0;c[766]=9;c[767]=254;c[768]=96;c[769]=7;c[770]=256;c[771]=0;c[772]=8;c[773]=80;c[774]=0;c[775]=8;c[776]=16;c[777]=84;c[778]=8;c[779]=115;c[780]=82;c[781]=7;c[782]=31;c[783]=0;c[784]=8;c[785]=112;c[786]=0;c[787]=8;c[788]=48;c[789]=0;c[790]=9;c[791]=193;c[792]=80;c[793]=7;c[794]=10;c[795]=0;c[796]=8;c[797]=96;c[798]=0;c[799]=8;c[800]=32;c[801]=0;c[802]=9;c[803]=161;c[804]=0;c[805]=8;c[806]=0;c[807]=0;c[808]=8;c[809]=128;c[810]=0;c[811]=8;c[812]=64;c[813]=0;c[814]=9;c[815]
=225;c[816]=80;c[817]=7;c[818]=6;c[819]=0;c[820]=8;c[821]=88;c[822]=0;c[823]=8;c[824]=24;c[825]=0;c[826]=9;c[827]=145;c[828]=83;c[829]=7;c[830]=59;c[831]=0;c[832]=8;c[833]=120;c[834]=0;c[835]=8;c[836]=56;c[837]=0;c[838]=9;c[839]=209;c[840]=81;c[841]=7;c[842]=17;c[843]=0;c[844]=8;c[845]=104;c[846]=0;c[847]=8;c[848]=40;c[849]=0;c[850]=9;c[851]=177;c[852]=0;c[853]=8;c[854]=8;c[855]=0;c[856]=8;c[857]=136;c[858]=0;c[859]=8;c[860]=72;c[861]=0;c[862]=9;c[863]=241;c[864]=80;c[865]=7;c[866]=4;c[867]=0;c[868]=8;c[869]
=84;c[870]=0;c[871]=8;c[872]=20;c[873]=85;c[874]=8;c[875]=227;c[876]=83;c[877]=7;c[878]=43;c[879]=0;c[880]=8;c[881]=116;c[882]=0;c[883]=8;c[884]=52;c[885]=0;c[886]=9;c[887]=201;c[888]=81;c[889]=7;c[890]=13;c[891]=0;c[892]=8;c[893]=100;c[894]=0;c[895]=8;c[896]=36;c[897]=0;c[898]=9;c[899]=169;c[900]=0;c[901]=8;c[902]=4;c[903]=0;c[904]=8;c[905]=132;c[906]=0;c[907]=8;c[908]=68;c[909]=0;c[910]=9;c[911]=233;c[912]=80;c[913]=7;c[914]=8;c[915]=0;c[916]=8;c[917]=92;c[918]=0;c[919]=8;c[920]=28;c[921]=0;c[922]=9;c[923]
=153;c[924]=84;c[925]=7;c[926]=83;c[927]=0;c[928]=8;c[929]=124;c[930]=0;c[931]=8;c[932]=60;c[933]=0;c[934]=9;c[935]=217;c[936]=82;c[937]=7;c[938]=23;c[939]=0;c[940]=8;c[941]=108;c[942]=0;c[943]=8;c[944]=44;c[945]=0;c[946]=9;c[947]=185;c[948]=0;c[949]=8;c[950]=12;c[951]=0;c[952]=8;c[953]=140;c[954]=0;c[955]=8;c[956]=76;c[957]=0;c[958]=9;c[959]=249;c[960]=80;c[961]=7;c[962]=3;c[963]=0;c[964]=8;c[965]=82;c[966]=0;c[967]=8;c[968]=18;c[969]=85;c[970]=8;c[971]=163;c[972]=83;c[973]=7;c[974]=35;c[975]=0;c[976]=8;c[977]
=114;c[978]=0;c[979]=8;c[980]=50;c[981]=0;c[982]=9;c[983]=197;c[984]=81;c[985]=7;c[986]=11;c[987]=0;c[988]=8;c[989]=98;c[990]=0;c[991]=8;c[992]=34;c[993]=0;c[994]=9;c[995]=165;c[996]=0;c[997]=8;c[998]=2;c[999]=0;c[1000]=8;c[1001]=130;c[1002]=0;c[1003]=8;c[1004]=66;c[1005]=0;c[1006]=9;c[1007]=229;c[1008]=80;c[1009]=7;c[1010]=7;c[1011]=0;c[1012]=8;c[1013]=90;c[1014]=0;c[1015]=8;c[1016]=26;c[1017]=0;c[1018]=9;c[1019]=149;c[1020]=84;c[1021]=7;c[1022]=67;c[1023]=0;c[1024]=8;c[1025]=122;c[1026]=0;c[1027]=8;c[1028]
=58;c[1029]=0;c[1030]=9;c[1031]=213;c[1032]=82;c[1033]=7;c[1034]=19;c[1035]=0;c[1036]=8;c[1037]=106;c[1038]=0;c[1039]=8;c[1040]=42;c[1041]=0;c[1042]=9;c[1043]=181;c[1044]=0;c[1045]=8;c[1046]=10;c[1047]=0;c[1048]=8;c[1049]=138;c[1050]=0;c[1051]=8;c[1052]=74;c[1053]=0;c[1054]=9;c[1055]=245;c[1056]=80;c[1057]=7;c[1058]=5;c[1059]=0;c[1060]=8;c[1061]=86;c[1062]=0;c[1063]=8;c[1064]=22;c[1065]=192;c[1066]=8;c[1067]=0;c[1068]=83;c[1069]=7;c[1070]=51;c[1071]=0;c[1072]=8;c[1073]=118;c[1074]=0;c[1075]=8;c[1076]=54;c[1077]
=0;c[1078]=9;c[1079]=205;c[1080]=81;c[1081]=7;c[1082]=15;c[1083]=0;c[1084]=8;c[1085]=102;c[1086]=0;c[1087]=8;c[1088]=38;c[1089]=0;c[1090]=9;c[1091]=173;c[1092]=0;c[1093]=8;c[1094]=6;c[1095]=0;c[1096]=8;c[1097]=134;c[1098]=0;c[1099]=8;c[1100]=70;c[1101]=0;c[1102]=9;c[1103]=237;c[1104]=80;c[1105]=7;c[1106]=9;c[1107]=0;c[1108]=8;c[1109]=94;c[1110]=0;c[1111]=8;c[1112]=30;c[1113]=0;c[1114]=9;c[1115]=157;c[1116]=84;c[1117]=7;c[1118]=99;c[1119]=0;c[1120]=8;c[1121]=126;c[1122]=0;c[1123]=8;c[1124]=62;c[1125]=0;c[1126]
=9;c[1127]=221;c[1128]=82;c[1129]=7;c[1130]=27;c[1131]=0;c[1132]=8;c[1133]=110;c[1134]=0;c[1135]=8;c[1136]=46;c[1137]=0;c[1138]=9;c[1139]=189;c[1140]=0;c[1141]=8;c[1142]=14;c[1143]=0;c[1144]=8;c[1145]=142;c[1146]=0;c[1147]=8;c[1148]=78;c[1149]=0;c[1150]=9;c[1151]=253;c[1152]=96;c[1153]=7;c[1154]=256;c[1155]=0;c[1156]=8;c[1157]=81;c[1158]=0;c[1159]=8;c[1160]=17;c[1161]=85;c[1162]=8;c[1163]=131;c[1164]=82;c[1165]=7;c[1166]=31;c[1167]=0;c[1168]=8;c[1169]=113;c[1170]=0;c[1171]=8;c[1172]=49;c[1173]=0;c[1174]=9;c[1175]
=195;c[1176]=80;c[1177]=7;c[1178]=10;c[1179]=0;c[1180]=8;c[1181]=97;c[1182]=0;c[1183]=8;c[1184]=33;c[1185]=0;c[1186]=9;c[1187]=163;c[1188]=0;c[1189]=8;c[1190]=1;c[1191]=0;c[1192]=8;c[1193]=129;c[1194]=0;c[1195]=8;c[1196]=65;c[1197]=0;c[1198]=9;c[1199]=227;c[1200]=80;c[1201]=7;c[1202]=6;c[1203]=0;c[1204]=8;c[1205]=89;c[1206]=0;c[1207]=8;c[1208]=25;c[1209]=0;c[1210]=9;c[1211]=147;c[1212]=83;c[1213]=7;c[1214]=59;c[1215]=0;c[1216]=8;c[1217]=121;c[1218]=0;c[1219]=8;c[1220]=57;c[1221]=0;c[1222]=9;c[1223]=211;c[1224]
=81;c[1225]=7;c[1226]=17;c[1227]=0;c[1228]=8;c[1229]=105;c[1230]=0;c[1231]=8;c[1232]=41;c[1233]=0;c[1234]=9;c[1235]=179;c[1236]=0;c[1237]=8;c[1238]=9;c[1239]=0;c[1240]=8;c[1241]=137;c[1242]=0;c[1243]=8;c[1244]=73;c[1245]=0;c[1246]=9;c[1247]=243;c[1248]=80;c[1249]=7;c[1250]=4;c[1251]=0;c[1252]=8;c[1253]=85;c[1254]=0;c[1255]=8;c[1256]=21;c[1257]=80;c[1258]=8;c[1259]=258;c[1260]=83;c[1261]=7;c[1262]=43;c[1263]=0;c[1264]=8;c[1265]=117;c[1266]=0;c[1267]=8;c[1268]=53;c[1269]=0;c[1270]=9;c[1271]=203;c[1272]=81;c[1273]
=7;c[1274]=13;c[1275]=0;c[1276]=8;c[1277]=101;c[1278]=0;c[1279]=8;c[1280]=37;c[1281]=0;c[1282]=9;c[1283]=171;c[1284]=0;c[1285]=8;c[1286]=5;c[1287]=0;c[1288]=8;c[1289]=133;c[1290]=0;c[1291]=8;c[1292]=69;c[1293]=0;c[1294]=9;c[1295]=235;c[1296]=80;c[1297]=7;c[1298]=8;c[1299]=0;c[1300]=8;c[1301]=93;c[1302]=0;c[1303]=8;c[1304]=29;c[1305]=0;c[1306]=9;c[1307]=155;c[1308]=84;c[1309]=7;c[1310]=83;c[1311]=0;c[1312]=8;c[1313]=125;c[1314]=0;c[1315]=8;c[1316]=61;c[1317]=0;c[1318]=9;c[1319]=219;c[1320]=82;c[1321]=7;c[1322]
=23;c[1323]=0;c[1324]=8;c[1325]=109;c[1326]=0;c[1327]=8;c[1328]=45;c[1329]=0;c[1330]=9;c[1331]=187;c[1332]=0;c[1333]=8;c[1334]=13;c[1335]=0;c[1336]=8;c[1337]=141;c[1338]=0;c[1339]=8;c[1340]=77;c[1341]=0;c[1342]=9;c[1343]=251;c[1344]=80;c[1345]=7;c[1346]=3;c[1347]=0;c[1348]=8;c[1349]=83;c[1350]=0;c[1351]=8;c[1352]=19;c[1353]=85;c[1354]=8;c[1355]=195;c[1356]=83;c[1357]=7;c[1358]=35;c[1359]=0;c[1360]=8;c[1361]=115;c[1362]=0;c[1363]=8;c[1364]=51;c[1365]=0;c[1366]=9;c[1367]=199;c[1368]=81;c[1369]=7;c[1370]=11;c[1371]
=0;c[1372]=8;c[1373]=99;c[1374]=0;c[1375]=8;c[1376]=35;c[1377]=0;c[1378]=9;c[1379]=167;c[1380]=0;c[1381]=8;c[1382]=3;c[1383]=0;c[1384]=8;c[1385]=131;c[1386]=0;c[1387]=8;c[1388]=67;c[1389]=0;c[1390]=9;c[1391]=231;c[1392]=80;c[1393]=7;c[1394]=7;c[1395]=0;c[1396]=8;c[1397]=91;c[1398]=0;c[1399]=8;c[1400]=27;c[1401]=0;c[1402]=9;c[1403]=151;c[1404]=84;c[1405]=7;c[1406]=67;c[1407]=0;c[1408]=8;c[1409]=123;c[1410]=0;c[1411]=8;c[1412]=59;c[1413]=0;c[1414]=9;c[1415]=215;c[1416]=82;c[1417]=7;c[1418]=19;c[1419]=0;c[1420]
=8;c[1421]=107;c[1422]=0;c[1423]=8;c[1424]=43;c[1425]=0;c[1426]=9;c[1427]=183;c[1428]=0;c[1429]=8;c[1430]=11;c[1431]=0;c[1432]=8;c[1433]=139;c[1434]=0;c[1435]=8;c[1436]=75;c[1437]=0;c[1438]=9;c[1439]=247;c[1440]=80;c[1441]=7;c[1442]=5;c[1443]=0;c[1444]=8;c[1445]=87;c[1446]=0;c[1447]=8;c[1448]=23;c[1449]=192;c[1450]=8;c[1451]=0;c[1452]=83;c[1453]=7;c[1454]=51;c[1455]=0;c[1456]=8;c[1457]=119;c[1458]=0;c[1459]=8;c[1460]=55;c[1461]=0;c[1462]=9;c[1463]=207;c[1464]=81;c[1465]=7;c[1466]=15;c[1467]=0;c[1468]=8;c[1469]
=103;c[1470]=0;c[1471]=8;c[1472]=39;c[1473]=0;c[1474]=9;c[1475]=175;c[1476]=0;c[1477]=8;c[1478]=7;c[1479]=0;c[1480]=8;c[1481]=135;c[1482]=0;c[1483]=8;c[1484]=71;c[1485]=0;c[1486]=9;c[1487]=239;c[1488]=80;c[1489]=7;c[1490]=9;c[1491]=0;c[1492]=8;c[1493]=95;c[1494]=0;c[1495]=8;c[1496]=31;c[1497]=0;c[1498]=9;c[1499]=159;c[1500]=84;c[1501]=7;c[1502]=99;c[1503]=0;c[1504]=8;c[1505]=127;c[1506]=0;c[1507]=8;c[1508]=63;c[1509]=0;c[1510]=9;c[1511]=223;c[1512]=82;c[1513]=7;c[1514]=27;c[1515]=0;c[1516]=8;c[1517]=111;c[1518]
=0;c[1519]=8;c[1520]=47;c[1521]=0;c[1522]=9;c[1523]=191;c[1524]=0;c[1525]=8;c[1526]=15;c[1527]=0;c[1528]=8;c[1529]=143;c[1530]=0;c[1531]=8;c[1532]=79;c[1533]=0;c[1534]=9;c[1535]=255;Bja=b;b=$rt_createIntArray(96);c=b.data;c[0]=80;c[1]=5;c[2]=1;c[3]=87;c[4]=5;c[5]=257;c[6]=83;c[7]=5;c[8]=17;c[9]=91;c[10]=5;c[11]=4097;c[12]=81;c[13]=5;c[14]=5;c[15]=89;c[16]=5;c[17]=1025;c[18]=85;c[19]=5;c[20]=65;c[21]=93;c[22]=5;c[23]=16385;c[24]=80;c[25]=5;c[26]=3;c[27]=88;c[28]=5;c[29]=513;c[30]=84;c[31]=5;c[32]=33;c[33]=92;c[34]
=5;c[35]=8193;c[36]=82;c[37]=5;c[38]=9;c[39]=90;c[40]=5;c[41]=2049;c[42]=86;c[43]=5;c[44]=129;c[45]=192;c[46]=5;c[47]=24577;c[48]=80;c[49]=5;c[50]=2;c[51]=87;c[52]=5;c[53]=385;c[54]=83;c[55]=5;c[56]=25;c[57]=91;c[58]=5;c[59]=6145;c[60]=81;c[61]=5;c[62]=7;c[63]=89;c[64]=5;c[65]=1537;c[66]=85;c[67]=5;c[68]=97;c[69]=93;c[70]=5;c[71]=24577;c[72]=80;c[73]=5;c[74]=4;c[75]=88;c[76]=5;c[77]=769;c[78]=84;c[79]=5;c[80]=49;c[81]=92;c[82]=5;c[83]=12289;c[84]=82;c[85]=5;c[86]=13;c[87]=90;c[88]=5;c[89]=3073;c[90]=86;c[91]
=5;c[92]=193;c[93]=192;c[94]=5;c[95]=24577;Bjb=b;b=$rt_createIntArray(31);c=b.data;c[0]=3;c[1]=4;c[2]=5;c[3]=6;c[4]=7;c[5]=8;c[6]=9;c[7]=10;c[8]=11;c[9]=13;c[10]=15;c[11]=17;c[12]=19;c[13]=23;c[14]=27;c[15]=31;c[16]=35;c[17]=43;c[18]=51;c[19]=59;c[20]=67;c[21]=83;c[22]=99;c[23]=115;c[24]=131;c[25]=163;c[26]=195;c[27]=227;c[28]=258;c[29]=0;c[30]=0;Bjc=b;b=$rt_createIntArray(31);c=b.data;c[0]=0;c[1]=0;c[2]=0;c[3]=0;c[4]=0;c[5]=0;c[6]=0;c[7]=0;c[8]=1;c[9]=1;c[10]=1;c[11]=1;c[12]=2;c[13]=2;c[14]=2;c[15]=2;c[16]
=3;c[17]=3;c[18]=3;c[19]=3;c[20]=4;c[21]=4;c[22]=4;c[23]=4;c[24]=5;c[25]=5;c[26]=5;c[27]=5;c[28]=0;c[29]=112;c[30]=112;Bjd=b;b=$rt_createIntArray(30);c=b.data;c[0]=1;c[1]=2;c[2]=3;c[3]=4;c[4]=5;c[5]=7;c[6]=9;c[7]=13;c[8]=17;c[9]=25;c[10]=33;c[11]=49;c[12]=65;c[13]=97;c[14]=129;c[15]=193;c[16]=257;c[17]=385;c[18]=513;c[19]=769;c[20]=1025;c[21]=1537;c[22]=2049;c[23]=3073;c[24]=4097;c[25]=6145;c[26]=8193;c[27]=12289;c[28]=16385;c[29]=24577;Bje=b;b=$rt_createIntArray(30);c=b.data;c[0]=0;c[1]=0;c[2]=0;c[3]=0;c[4]
=1;c[5]=1;c[6]=2;c[7]=2;c[8]=3;c[9]=3;c[10]=4;c[11]=4;c[12]=5;c[13]=5;c[14]=6;c[15]=6;c[16]=7;c[17]=7;c[18]=8;c[19]=8;c[20]=9;c[21]=9;c[22]=10;c[23]=10;c[24]=11;c[25]=11;c[26]=12;c[27]=12;c[28]=13;c[29]=13;Bjf=b;}
function Lz(){var a=this;D.call(a);a.fc=0;a.lM=0;a.fD=null;a.kY=0;a.l7=0;a.y2=0;a.sx=0;a.qW=0;a.uI=0;a.us=0;a.yx=null;a.vU=0;a.x$=null;a.v1=0;a.bd=null;a.C=null;}
var Bjg=null;function W1(a,b,c,d,e,f,g){a.fc=0;a.uI=b<<24>>24;a.us=c<<24>>24;a.yx=d;a.vU=e;a.x$=f;a.v1=g;a.fD=null;}
function ABy(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.bd.A;d=a.bd.N;e=a.C.bJ;f=a.C.bK;g=a.C.bl;h=g>=a.C.bU?a.C.cO-g|0:(a.C.bU-g|0)-1|0;a:{b:while(true){c:{d:{e:{f:{g:{switch(a.fc){case 0:break f;case 2:i=a.sx;while(f<i){if(!d){a.C.bJ=e;a.C.bK=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.A|0));a.bd.A=c;a.C.bl=g;return B5(a.C,b);}b=0;d=d+(-1)|0;k=a.bd.cc.data;l=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=l;}a.lM=a.lM+(e&Bjg.data[i])|0;e=e>>i;f=f-i|0;a.l7=a.us;a.fD=a.x$;a.kY=a.v1;a.fc=3;break g;case 4:i=a.sx;while
(f<i){if(!d){a.C.bJ=e;a.C.bK=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.A|0));a.bd.A=c;a.C.bl=g;return B5(a.C,b);}b=0;d=d+(-1)|0;k=a.bd.cc.data;l=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=l;}a.qW=a.qW+(e&Bjg.data[i])|0;e=e>>i;f=f-i|0;a.fc=5;break c;case 6:break d;case 7:if(f>7){f=f+(-8)|0;d=d+1|0;c=c+(-1)|0;}a.C.bl=g;b=B5(a.C,b);g=a.C.bl;if(a.C.bU!=a.C.bl){a.C.bJ=e;a.C.bK=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.A|0));a.bd.A=c;a.C.bl=g;return B5(a.C,b);}a.fc=8;break a;case 9:a.C.bJ=e;a.C.bK
=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.A|0));a.bd.A=c;a.C.bl=g;return B5(a.C,(-3));case 1:break e;case 3:break;case 5:break c;case 8:break a;default:a.C.bJ=e;a.C.bK=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.A|0));a.bd.A=c;a.C.bl=g;return B5(a.C,(-2));}}l=a.l7;while(f<l){if(!d){a.C.bJ=e;a.C.bK=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.A|0));a.bd.A=c;a.C.bl=g;return B5(a.C,b);}b=0;d=d+(-1)|0;k=a.bd.cc.data;i=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=i;}m=(a.kY+(e&Bjg.data[l])
|0)*3|0;k=a.fD.data;i=m+1|0;e=e>>k[i];f=f-a.fD.data[i]|0;l=a.fD.data[m];if(l&16){a.sx=l&15;a.qW=a.fD.data[m+2|0];a.fc=4;continue b;}if(l&64){a.fc=9;a.bd.b6=B(307);a.C.bJ=e;a.C.bK=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.A|0));a.bd.A=c;a.C.bl=g;return B5(a.C,(-3));}a.l7=l;a.kY=(m/3|0)+a.fD.data[m+2|0]|0;continue b;}if(h>=258&&d>=10){a.C.bJ=e;a.C.bK=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.A|0));a.bd.A=c;a.C.bl=g;b=AM0(a,a.uI,a.us,a.yx,a.vU,a.x$,a.v1,a.C,a.bd);c=a.bd.A;d=a.bd.N;e=a.C.bJ;f
=a.C.bK;g=a.C.bl;h=g>=a.C.bU?a.C.cO-g|0:(a.C.bU-g|0)-1|0;if(b){a.fc=b!=1?9:7;continue b;}}a.l7=a.uI;a.fD=a.yx;a.kY=a.vU;a.fc=1;}l=a.l7;while(f<l){if(!d)break b;b=0;d=d+(-1)|0;k=a.bd.cc.data;i=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=i;}m=(a.kY+(e&Bjg.data[l])|0)*3|0;k=a.fD.data;i=m+1|0;e=e>>>k[i];f=f-a.fD.data[i]|0;n=a.fD.data[m];if(!n){a.y2=a.fD.data[m+2|0];a.fc=6;continue b;}if(n&16){a.sx=n&15;a.lM=a.fD.data[m+2|0];a.fc=2;continue b;}if(!(n&64)){a.l7=n;a.kY=(m/3|0)+a.fD.data[m+2|0]|0;continue b;}if(!(n&32)){a.fc
=9;a.bd.b6=B(308);a.C.bJ=e;a.C.bK=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.A|0));a.bd.A=c;a.C.bl=g;return B5(a.C,(-3));}a.fc=7;continue b;}if(h)i=g;else{if(g!=a.C.cO)i=g;else if(!a.C.bU)i=g;else{i=0;h=i>=a.C.bU?a.C.cO-i|0:(a.C.bU-i|0)-1|0;}if(!h){a.C.bl=i;b=B5(a.C,b);i=a.C.bl;h=i>=a.C.bU?a.C.cO-i|0:(a.C.bU-i|0)-1|0;if(i==a.C.cO&&a.C.bU){i=0;h=i>=a.C.bU?a.C.cO-i|0:(a.C.bU-i|0)-1|0;}if(!h){a.C.bJ=e;a.C.bK=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.A|0));a.bd.A=c;a.C.bl=i;return B5(a.C,
b);}}}b=0;k=a.C.cY.data;g=i+1|0;k[i]=a.y2<<24>>24;h=h+(-1)|0;a.fc=0;continue b;}i=g-a.qW|0;while(i<0){i=i+a.C.cO|0;}while(a.lM){if(h)l=g;else{if(g!=a.C.cO)l=g;else if(!a.C.bU)l=g;else{l=0;h=l>=a.C.bU?a.C.cO-l|0:(a.C.bU-l|0)-1|0;}if(!h){a.C.bl=l;b=B5(a.C,b);l=a.C.bl;h=l>=a.C.bU?a.C.cO-l|0:(a.C.bU-l|0)-1|0;if(l==a.C.cO&&a.C.bU){l=0;h=l>=a.C.bU?a.C.cO-l|0:(a.C.bU-l|0)-1|0;}if(!h){a.C.bJ=e;a.C.bK=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.A|0));a.bd.A=c;a.C.bl=l;return B5(a.C,b);}}}o=a.C.cY.data;g=l
+1|0;k=a.C.cY.data;m=i+1|0;o[l]=k[i];h=h+(-1)|0;i=m==a.C.cO?0:m;a.lM=a.lM-1|0;}a.fc=0;}a.C.bJ=e;a.C.bK=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.A|0));a.bd.A=c;a.C.bl=g;return B5(a.C,b);}a.C.bJ=e;a.C.bK=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.A|0));a.bd.A=c;a.C.bl=g;return B5(a.C,1);}
function AAK(a,b){return;}
function AM0(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;j=i.A;k=i.N;l=h.bJ;m=h.bK;n=h.bl;o=n>=h.bU?h.cO-n|0:(h.bU-n|0)-1|0;p=Bjg.data[b];q=Bjg.data[c];while(true){if(m<20){k=k+(-1)|0;r=i.cc.data;b=j+1|0;l=l|(r[j]&255)<<m;m=m+8|0;j=b;continue;}a:{s=d.data;t=l&p;u=(e+t|0)*3|0;c=s[u];if(!c){b=u+1|0;l=l>>s[b];m=m-s[b]|0;r=h.cY.data;c=n+1|0;r[n]=s[u+2|0]<<24>>24;o=o+(-1)|0;}else{while(true){b=u+1|0;l=l>>s[b];m=m-s[b]|0;if(c&16){b=c&15;v=s[u+2|0]+(l&Bjg.data[b])|0;w=l>>b;m=m-b|0;while(m<15){k=k+(-1)|0;r
=i.cc.data;b=j+1|0;w=w|(r[j]&255)<<m;m=m+8|0;j=b;}r=f.data;b=w&q;x=(g+b|0)*3|0;c=r[x];while(true){l=x+1|0;w=w>>r[l];m=m-r[l]|0;if(c&16)break;if(c&64){i.b6=B(307);b=i.N-k|0;c=m>>3;if(c<b)b=c;c=k+b|0;e=j-b|0;b=m-(b<<3)|0;h.bJ=w;h.bK=b;i.N=c;i.G=Long_add(i.G,Long_fromInt(e-i.A|0));i.A=e;h.bl=n;return (-3);}b=(b+r[x+2|0]|0)+(w&Bjg.data[c])|0;x=(g+b|0)*3|0;c=r[x];}b=c&15;while(m<b){k=k+(-1)|0;s=i.cc.data;c=j+1|0;w=w|(s[j]&255)<<m;m=m+8|0;j=c;}x=r[x+2|0]+(w&Bjg.data[b])|0;l=w>>b;m=m-b|0;o=o-v|0;if(n>=x){w=n-x|0;b
=n-w|0;if(b>0&&2>b){s=h.cY.data;b=n+1|0;r=h.cY.data;c=w+1|0;s[n]=r[w];s=h.cY.data;n=b+1|0;r=h.cY.data;w=c+1|0;s[b]=r[c];v=v+(-2)|0;}else{Di(h.cY,w,h.cY,n,2);n=n+2|0;w=w+2|0;v=v+(-2)|0;}}else{w=n-x|0;while(true){w=w+h.cO|0;if(w>=0)break;}b=h.cO-w|0;if(v>b){v=v-b|0;c=n-w|0;if(c>0&&b>c){c=n;while(true){s=h.cY.data;n=c+1|0;r=h.cY.data;x=w+1|0;s[c]=r[w];b=b+(-1)|0;if(!b)break;c=n;w=x;}}else{Di(h.cY,w,h.cY,n,b);n=n+b|0;}w=0;}}b=n-w|0;if(b>0&&v>b){while(true){s=h.cY.data;c=n+1|0;r=h.cY.data;b=w+1|0;s[n]=r[w];v=v+(-1)
|0;if(!v)break;n=c;w=b;}break a;}Di(h.cY,w,h.cY,n,v);c=n+v|0;break a;}if(c&64){if(c&32){v=i.N-k|0;b=m>>3;if(b<v)v=b;b=k+v|0;c=j-v|0;e=m-(v<<3)|0;h.bJ=l;h.bK=e;i.N=b;i.G=Long_add(i.G,Long_fromInt(c-i.A|0));i.A=c;h.bl=n;return 1;}i.b6=B(308);v=i.N-k|0;b=m>>3;if(b<v)v=b;e=k+v|0;b=j-v|0;c=m-(v<<3)|0;h.bJ=l;h.bK=c;i.N=e;i.G=Long_add(i.G,Long_fromInt(b-i.A|0));i.A=b;h.bl=n;return (-3);}t=(t+s[u+2|0]|0)+(l&Bjg.data[c])|0;u=(e+t|0)*3|0;c=s[u];if(!c)break;}b=u+1|0;l=l>>s[b];m=m-s[b]|0;r=h.cY.data;c=n+1|0;r[n]=s[u+2|
0]<<24>>24;o=o+(-1)|0;}}if(o<258)break;if(k<10)break;n=c;}v=i.N-k|0;b=m>>3;if(b<v)v=b;b=k+v|0;e=j-v|0;g=m-(v<<3)|0;h.bJ=l;h.bK=g;i.N=b;i.G=Long_add(i.G,Long_fromInt(e-i.A|0));i.A=e;h.bl=c;return 0;}
function ABD(){var b,c;b=$rt_createIntArray(17);c=b.data;c[0]=0;c[1]=1;c[2]=3;c[3]=7;c[4]=15;c[5]=31;c[6]=63;c[7]=127;c[8]=255;c[9]=511;c[10]=1023;c[11]=2047;c[12]=4095;c[13]=8191;c[14]=16383;c[15]=32767;c[16]=65535;Bjg=b;}
function Hs(){B1.call(this);}
function Bjh(){var a=new Hs();A_p(a);return a;}
function A_p(a){O(a);}
function Xq(){B6.call(this);}
function Bji(){var a=new Xq();A8N(a);return a;}
function A8N(a){O(a);}
function AAV(){D.call(this);}
function A_A(a,b){return a.HC(b);}
function AUy(a){return a.I6();}
function Ki(){B6.call(this);}
function Bjj(){var a=new Ki();A7i(a);return a;}
function A7i(a){O(a);}
function ZS(){var a=this;D.call(a);a.he=null;a.re=null;a.ec=null;a.ff=0;}
function Baw(){var a=new ZS();A2C(a);return a;}
function A2C(a){a.ec=Bc5;}
function D1(){BE.call(this);}
function Bjk(){var a=new D1();A9V(a);return a;}
function A9V(a){O(a);}
function AIz(){D.call(this);}
function JF(b){return b.length?0:1;}
function AOR(b){return b.shift();}
function SK(){D.call(this);this.Db=null;}
function AQ7(a){var b,c,d;b=a.Db;if(!HF(b)&&b.ck.ec===null){c=b.ck;if(c.he!==null&&!JF(c.he)){b=c.he;d=AOR(b);if(b===null)c.he=null;Qj(d);}}}
function Q6(){var a=this;D.call(a);a.zx=null;a.zy=null;a.zv=0;a.zw=null;}
function Qj(a){var b,c,d,e;b=a.zx;c=a.zy;d=a.zv;e=a.zw;Fr(b);c.ck.ec=b;b=c.ck;b.ff=b.ff+d|0;CM(e,null);}
function GX(){B1.call(this);}
function Bjl(){var a=new GX();AVa(a);return a;}
function AVa(a){O(a);}
function WX(){Fg.call(this);}
function Bjm(){var a=new WX();A1h(a);return a;}
function A1h(a){O(a);}
function E1(){BE.call(this);}
function Bjn(){var a=new E1();A7S(a);return a;}
function A7S(a){O(a);}
function Od(){var a=this;D.call(a);a.HS=null;a.BN=0.0;a.F2=0.0;a.la=null;a.mP=null;a.ru=null;a.h1=0;}
function AQ1(a,b){var c;if(b!==null){a.mP=b;return a;}c=new Cb;Bl(c,B(309));M(c);}
function A$F(a,b){return;}
function ADG(a,b){var c;if(b!==null){a.ru=b;return a;}c=new Cb;Bl(c,B(309));M(c);}
function A6e(a,b){return;}
function UC(a,b,c,d){var e,f,$$je;if(!(a.h1==2&&!d)&&a.h1!=3){a.h1=d?2:1;while(true){try{e=AGj(a,b,c);}catch($$e){$$je=Bi($$e);if($$je instanceof B6){f=$$je;M(A42(f));}else{throw $$e;}}if(IO(e))return e;if(Jw(e)){if(d&&Fk(b)){if(a.mP===BiJ)return Fh(Ct(b));if(Ct(c)<=Bh(a.la))return Bi7;EN(b,b.bk+Ct(b)|0);if(a.mP===Bf8)Ng(c,a.la);}return e;}if(P9(e)){if(a.mP===BiJ)return e;if(a.mP===Bf8){if(Ct(c)<Bh(a.la))return Bi7;Ng(c,a.la);}EN(b,b.bk+Lw(e)|0);}else if(Mr(e)){if(a.ru===BiJ)break;if(a.ru===Bf8){if(Ct(c)<Bh(a.la))return Bi7;Ng(c,
a.la);}EN(b,b.bk+Lw(e)|0);}}return e;}b=new D1;O(b);M(b);}
function ACb(a,b){if(a.h1!=3&&a.h1!=2){b=new D1;O(b);M(b);}a.h1=3;return Bi8;}
function ARs(a){a.h1=0;return a;}
function AJJ(a,b){var c,d;if(a.h1&&a.h1!=3){b=new D1;O(b);M(b);}if(!Ct(b))return AHl(0);if(a.h1)ARs(a);c=AHl(DB(8,Ct(b)*a.BN|0));while(true){d=UC(a,b,c,0);if(Jw(d))break;if(IO(d))c=Vv(a,c);if(!Nv(d))continue;R1(d);}b=UC(a,b,c,1);if(Nv(b))R1(b);while(!Jw(ACb(a,c))){c=Vv(a,c);}Gr(c);return c;}
function Vv(a,b){var c,d,e;c=b.ma;d=O1(c,DB(8,c.data.length*2|0));e=AM2(d,0,d.data.length);EN(e,b.bk);return e;}
function AYD(a,b){return Bi8;}
function A5l(a){return;}
function Sa(){}
function Sk(){}
function Pb(){var a=this;D.call(a);a.wg=null;a.A0=null;a.In=0;a.Jl=0;}
function APj(a){if(!a.In){a.wg.CN=null;Fr(a.wg);CM(a.A0,null);}}
function LE(){Od.call(this);}
function AGj(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createByteArray(CB(Ct(b),512));e=d.data;f=0;g=0;h=$rt_createCharArray(CB(Ct(c),512));i=h.data;a:{while(true){if((f+32|0)>g&&Fk(b)){j=f;while(j<g){e[j-f|0]=e[j];j=j+1|0;}k=g-f|0;g=CB(Ct(b)+k|0,e.length);AKf(b,d,k,g-k|0);f=0;}if(!Fk(c)){l=!Fk(b)&&f>=g?Bi8:Bi7;break a;}k=CB(Ct(c),i.length);m=new Wp;m.Af=b;m.Er=c;l=ARO(a,d,f,g,h,0,k,m);f=m.v5;if(l===null&&0==m.qD)l=Bi8;ASo(c,h,0,m.qD);if(l!==null)break;}}EN(b,b.bk-(g-f|0)|0);return l;}
function Rb(){LE.call(this);}
function ARO(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(NJ(h))break a;i=Bi8;break a;}n=k+1|0;k=j[k];if(!Hm(a,k)){c=n+(-2)|0;i=Fh(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|k&63)&65535;k=n;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(NJ(h))break a;i=Bi8;break a;}c=k+1|0;m=j[k];k=c+1|0;o=j[c];if(!Hm(a,m))break b;if(!Hm(a,o))break b;p=((l&15)<<12|(m
&63)<<6|o&63)&65535;if(Om(p)){c=k+(-3)|0;i=Fh(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=Fh(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(NJ(h))break a;i=Bi8;break a;}if((f+2|0)>g){c=k+(-1)|0;if(AJm(h,2))break a;i=Bi7;break a;}c=k+1|0;m=j[k];n=c+1|0;o=j[c];k=n+1|0;n=j[n];if(!Hm(a,m))break c;if(!Hm(a,o))break c;if(!Hm(a,n))break c;j=e.data;q=(l&7)<<18|(m&63)<<12|(o&63)<<6|n&63;c=f+1|0;j[f]=IB(q);m=c+1|0;j[c]=H7(q);}c=k;f=m;}break a;}c=k+(-3)|0;i=Fh(1);break a;}c=k+(-3)|0;i=Fh(1);}h.v5=
c;h.qD=f;return i;}
function Hm(a,b){return (b&192)!=128?0:1;}
function DW(){var a=this;BE.call(a);a.hE=0;a.IK=null;}
function AG8(a,b){var c=new DW();AVb(c,a,b);return c;}
function AVb(a,b,c){a.IK=b;O(a);a.hE=c;}
function ANu(){var a=this;D.call(a);a.Jp=0;a.GI=0;a.HN=Long_ZERO;a.I0=0;a.A2=0;a.pn=null;a.yG=null;a.As=null;a.JN=0;a.Ht=Long_ZERO;a.GK=0;a.H8=Long_ZERO;}
function Bcp(){var a=new ANu();A8H(a);return a;}
function A8H(a){a.Jp=0;a.GI=0;a.A2=255;a.GK=0;a.H8=Long_ZERO;}
function OO(){D.call(this);this.mb=0;}
var Bjo=null;function AWh(){var a=new OO();Y_(a);return a;}
function Y_(a){a.mb=0;}
function A2y(a,b,c,d){var e,f,g,h;e=a.mb^(-1);while(true){d=d+(-1)|0;if(d<0)break;f=b.data;g=Bjo.data;h=c+1|0;e=g[(e^f[c])&255]^e>>>8;c=h;}a.mb=e^(-1);}
function A6s(a){a.mb=0;}
function A9U(a,b){a.mb=Long_and(b,new Long(4294967295, 0)).lo;}
function A7y(a){return Long_and(Long_fromInt(a.mb),new Long(4294967295, 0));}
function AFz(){var b,c,d;Bjo=null;Bjo=$rt_createIntArray(256);b=0;while(b<256){c=8;d=b;while(true){c=c+(-1)|0;if(c<0)break;if(!(d&1)){d=d>>>1;continue;}d=(-306674912)^d>>>1;}Bjo.data[b]=d;b=b+1|0;}}
function I5(){var a=this;D.call(a);a.R=0.0;a.M=0.0;a.S=0.0;a.V=0.0;a.U=0.0;a.W=0.0;}
var Bjp=null;var BeM=0;function No(b,c,d,e,f,g){var h;h=new I5;h.R=b;h.M=c;h.S=d;h.V=e;h.U=f;h.W=g;return h;}
function D2(b,c,d,e,f,g){var h,i;if(BeM>=Bjp.o)S(Bjp,No(0.0,0.0,0.0,0.0,0.0,0.0));h=Bjp;i=BeM;BeM=i+1|0;return M1(Z(h,i),b,c,d,e,f,g);}
function M1(a,b,c,d,e,f,g){a.R=b;a.M=c;a.S=d;a.V=e;a.U=f;a.W=g;return a;}
function I_(a,b,c,d){var e,f,g,h,i,j,k;e=a.R;f=a.M;g=a.S;h=a.V;i=a.U;j=a.W;k=R(b,0.0);if(k<0)e=e+b;if(k>0)h=h+b;k=R(c,0.0);if(k<0)f=f+c;if(k>0)i=i+c;k=R(d,0.0);if(k<0)g=g+d;if(k>0)j=j+d;return D2(e,f,g,h,i,j);}
function Dv(a,b,c,d){return D2(a.R-b,a.M-c,a.S-d,a.V+b,a.U+c,a.W+d);}
function T7(a,b,c,d){return D2(a.R+b,a.M+c,a.S+d,a.V+b,a.U+c,a.W+d);}
function Qp(a,b,c){var d,e;if(b.U>a.M&&b.M<a.U){if(b.W>a.S&&b.S<a.W){if(c<=0.0)d=c;else if(b.V>a.R)d=c;else{d=a.R-b.V;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.R<a.V)e=d;else{e=a.V-b.R;if(e<=d)e=d;}return e;}return c;}return c;}
function V6(a,b,c){var d,e;if(b.V>a.R&&b.R<a.V){if(b.W>a.S&&b.S<a.W){if(c<=0.0)d=c;else if(b.U>a.M)d=c;else{d=a.M-b.U;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.M<a.U)e=d;else{e=a.U-b.M;if(e<=d)e=d;}return e;}return c;}return c;}
function T$(a,b,c){var d,e;if(b.V>a.R&&b.R<a.V){if(b.U>a.M&&b.M<a.U){if(c<=0.0)d=c;else if(b.W>a.S)d=c;else{d=a.S-b.W;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.S<a.W)e=d;else{e=a.W-b.S;if(e<=d)e=d;}return e;}return c;}return c;}
function L5(a,b){return b.V>a.R&&b.R<a.V?(b.U>a.M&&b.M<a.U?(b.W>a.S&&b.S<a.W?1:0):0):0;}
function FW(a,b,c,d){a.R=a.R+b;a.M=a.M+c;a.S=a.S+d;a.V=a.V+b;a.U=a.U+c;a.W=a.W+d;return a;}
function APU(a){return (a.V-a.R+a.U-a.M+a.W-a.S)/3.0;}
function P$(a){return D2(a.R,a.M,a.S,a.V,a.U,a.W);}
function QM(a,b,c){var d,e,f,g,h,i,j,k;d=KK(b,c,a.R);e=KK(b,c,a.V);f=JR(b,c,a.M);g=JR(b,c,a.U);h=Ku(b,c,a.S);i=Ku(b,c,a.W);if(!Rz(a,d))d=null;if(!Rz(a,e))e=null;if(!Ua(a,f))f=null;if(!Ua(a,g))g=null;if(!UU(a,h))h=null;if(!UU(a,i))i=null;j=null;if(d!==null)j=d;if(e!==null&&!(j!==null&&Ex(b,e)>=Ex(b,j)))j=e;if(f!==null&&!(j!==null&&Ex(b,f)>=Ex(b,j)))j=f;if(g!==null&&!(j!==null&&Ex(b,g)>=Ex(b,j)))j=g;if(h!==null&&!(j!==null&&Ex(b,h)>=Ex(b,j)))j=h;if(i!==null&&!(j!==null&&Ex(b,i)>=Ex(b,j)))j=i;if(j===null)return null;k
=(-1);if(j===d)k=4;if(j===e)k=5;if(j===f)k=0;if(j===g)k=1;if(j===h)k=2;if(j===i)k=3;return A0A(0,0,0,k,j);}
function Rz(a,b){return b===null?0:b.y>=a.M&&b.y<=a.U&&b.v>=a.S&&b.v<=a.W?1:0;}
function Ua(a,b){return b===null?0:b.w>=a.R&&b.w<=a.V&&b.v>=a.S&&b.v<=a.W?1:0;}
function UU(a,b){return b===null?0:b.w>=a.R&&b.w<=a.V&&b.y>=a.M&&b.y<=a.U?1:0;}
function Xa(a,b){a.R=b.R;a.M=b.M;a.S=b.S;a.V=b.V;a.U=b.U;a.W=b.W;}
function AEr(){Bjp=Ci();BeM=0;}
function Qc(){}
function Bu(){Bs.call(this);}
var Bjq=0;var Bgm=null;var Bjr=0;var Bjs=0;var Bjt=0;var Bju=0.0;var Bjv=0;var Bjw=null;var Bjx=0;var Bjy=0;var Bjz=0.0;var BjA=0.0;var BjB=0.0;var BjC=0.0;var BjD=0.0;var BjE=0.0;var BjF=0.0;var BjG=0.0;var BjH=0.0;var BjI=0;var BfS=0.0;var BfT=0.0;var BfU=0.0;var BfV=0.0;var BjJ=0;var BjK=0;var BjL=0;var BjM=0.0;var BjN=0.0;var BjO=0.0;var BjP=0;var BjQ=0;var BjR=0;var BjS=0;var BjT=null;var BjU=0;var BjV=null;var BjW=0;var BjX=null;var BjY=0;var BjZ=null;var Bj0=null;var Bgl=null;var Bj1=null;var Bj2=null;var Bj3
=null;var Bj4=null;var Bj5=null;var Bj6=null;var Bgk=0;var Bj7=null;var Bj8=null;var Bj9=null;var Bj$=null;var Bj_=null;var Bka=null;var Bkb=null;var Bkc=null;var Bkd=null;var Bke=null;var Bkf=null;var Bkg=null;var Bkh=null;var Bki=null;var Bkj=Long_ZERO;var Bkk=0;function BV(){BV=Bt(Bu);A1x();}
function Bkl(){var a=new Bu();AO2(a);return a;}
function AO2(a){BV();VL(a);}
function Ba(b){BV();a:{switch(b){case 2884:K1(2884);break a;case 2896:Bjs=1;break a;case 2903:BjI=1;break a;case 2912:BjK=1;break a;case 2929:K1(2929);break a;case 3008:Bjt=1;break a;case 3042:K1(3042);break a;case 3553:Bjr=1;break a;case 32823:K1(32823);break a;case 32826:break;default:break a;}}}
function HG(b){var c;BV();a:{c=518;switch(b){case 514:c=514;break a;case 515:c=518;break a;case 516:c=513;break a;default:}}Bd();BdI.depthFunc(c);}
function So(b,c){BV();Bju=c;}
function C$(b){BV();BjS=b;}
function GL(){BV();switch(BjS){case 5888:break;case 5889:return BjV.data[BjW];case 5890:return BjX.data[BjY];default:}return BjT.data[BjU];}
function C9(){BV();Fn(GL());}
function Hf(b,c,d,e){BV();Bd();Bd5.data[0]=b;Bd5.data[1]=c;Bd5.data[2]=d;Bd5.data[3]=e;BdI.viewport(b,c,d,e);}
function D3(b){BV();Bd();BdI.clear(b);}
function Im(b,c,d,e,f,g){var h,i,j,k;BV();h=GL();i=c-b;h.eq=2.0/i;h.eo=0.0;h.ep=0.0;h.en=0.0;h.et=0.0;j=e-d;h.eu=2.0/j;h.er=0.0;h.es=0.0;h.ey=0.0;h.ew=0.0;k=g-f;h.ex=2.0/k;h.ev=0.0;h.gQ= -(c+b)/i;h.gR= -(e+d)/j;h.gO=(g+f)/k;h.gP=1.0;}
function Bw(b,c,d){var e;BV();L1(Bj2,b,c,d);e=GL();U2(e,Bj2,e);if(!Bjv)return;e=new Cb;Bl(e,B(310));M(e);}
function Hx(b,c,d,e){BV();Bd();BdI.clearColor(b,c,d,e);}
function Bc(b){BV();a:{switch(b){case 2884:J0(2884);break a;case 2896:Bjs=0;break a;case 2903:BjI=0;break a;case 2912:BjK=0;break a;case 2929:J0(2929);break a;case 3008:Bjt=0;break a;case 3042:J0(3042);break a;case 3553:Bjr=0;break a;case 32823:J0(32823);break a;case 32826:break;default:break a;}}}
function BU(b,c,d,e){BV();Bjz=b;BjA=c;BjB=d;BjC=e;}
function Ss(b,c,d,e,f,g,h,i,j){var k,l,m,n;BV();Bd();if(j===null){k=BdI;l=null;k.texImage2D(3553,c,32856,e,f,g,6408,5121,l);}else{m=Ct(j);k=Bd6;n=0;while(n<m){h=(ALK(j)&255)<<16>>16;k[n]=h;n=n+1|0;}j=new Uint8Array(Bd6.buffer,0,m);BdI.texImage2D(3553,c,32856,e,f,g,6408,5121,j);}}
function B3(){BV();a:{switch(BjS){case 5888:break;case 5889:if(BjW>=(BjV.data.length-1|0)){Cg(C1(),B(311));break a;}BjW=BjW+1|0;GO(BjV.data[BjW],BjV.data[BjW-1|0]);break a;case 5890:if(BjY>=(BjX.data.length-1|0)){Cg(C1(),B(312));break a;}BjY=BjY+1|0;GO(BjX.data[BjY],BjX.data[BjY-1|0]);break a;default:}if(BjU>=(BjT.data.length-1|0))Cg(C1(),B(313));else{BjU=BjU+1|0;GO(BjT.data[BjU],BjT.data[BjU-1|0]);}}}
function Bv(b,c,d,e){var f;BV();L1(Bj2,c,d,e);f=GL();WV(f,b*0.01745329238474369,Bj2,f);if(!Bjv)return;f=new Cb;Bl(f,B(310));M(f);}
function BD(){BV();a:{switch(BjS){case 5888:break;case 5889:if(BjW<=0){Cg(C1(),B(314));break a;}BjW=BjW-1|0;break a;case 5890:if(BjY<=0){Cg(C1(),B(315));break a;}BjY=BjY-1|0;break a;default:}if(BjU<=0)Cg(C1(),B(316));else BjU=BjU-1|0;}}
function TK(b,c){BV();a:{switch(b){case 2982:break;case 2983:TM(BjV.data[BjW],c);break a;default:}TM(BjT.data[BjU],c);}}
function CC(b,c,d){var e;BV();L1(Bj2,b,c,d);ZA(GL(),Bj2);if(!Bjv)return;e=new Cb;Bl(e,B(310));M(e);}
function Df(b,c){BV();BjL=b==1&&c==771?1:0;Bd();BdI.blendFunc(b,c);}
function Gq(b){BV();Bd();BdI.depthMask(!!b);}
function FC(b,c,d,e){BV();Bd();BdI.colorMask(!!b,!!c,!!d,!!e);}
function Cp(b,c){var d,e;BV();d=ANI(Bgm,c);Bd();e=BdI;d=d!==null?d.BH:null;e.bindTexture(3553,d);}
function Ei(b,c,d){BV();if(!(d!=33071&&d!=10496))d=33071;Bd();BdI.texParameteri(b,c,d);}
function Cj(b,c,d){var e;BV();e=Ec(b*b+c*c+d*d);BjD=b/e;BjE=c/e;BjF=d/e;}
function Oa(b){BV();Bj0=b;RL(b);}
function FP(b){var c;BV();if(!Bjv){c=CP(Bj1,CX(b));if(c!==null&&c.jF>0){Rl(c.lH|0|(BjI&&Bjs?8:0)|(!BjK?0:16)|(!Bjt?0:32)|(!Bjr?0:64));Oa(c.rd);Pu(0,c.jF);BjQ=BjQ+((c.jF*6|0)/4|0)|0;BjR=BjR+(c.jF/2|0)|0;}}}
function FF(b,c){BV();if(!Bjv){Bjw=CP(Bgl,CX(b));if(Bjw!==null){Bjw.lH=(-1);Bjw.jF=0;Bjv=1;}}}
function Ed(){var b,c,d,e;BV();if(Bjv){Bjv=0;Bd();b=BeB.buffer;c=BeA;d=new Int32Array(b,0,c);BeA=0;e=UA(d);if(e>0){if(Bjw.oY===null){BR(Bj1,CX(Bjw.Bp),Bjw);Bjw.rd=O5();Bjw.oY=L6();b=O6(Bjw.lH);Oa(Bjw.rd);Hc(34962,Bjw.oY);Ru(b);}Hc(34962,Bjw.oY);Pw(34962,d,35044);BjP=BjP+e|0;}}}
function F2(b,c,d){BV();Bjz=b;BjA=c;BjB=d;BjC=1.0;}
function OC(b,c){BV();Bd();BdI.polygonOffset(b,c);}
function WR(b){BV();a:{switch(b){case 32886:break;case 32888:Bjy=1;break a;default:break a;}Bjx=1;}}
function Th(b){BV();a:{switch(b){case 32886:break;case 32888:Bjy=0;break a;default:break a;}Bjx=0;}}
function P4(){BV();return 0|(!Bjx?0:1)|(!Bjy?0:4);}
function Rl(b){var c;BV();c=O6(b);Bj7=c;AQX(c);if(Bjt)AIS(c,Bju);ALJ(c,Bjz,BjA,BjB,BjC);if(BjK){ALm(c,(!BjL?0:2)+BjJ|0);AP$(c,BfS,BfT,BfU,BfV);AKJ(c,BjO);APJ(c,BjM,BjN);}AMp(c,BjT.data[BjU]);AMZ(c,BjV.data[BjW]);ZT(c,BjX.data[BjY]);if(BjI&&Bjs){AB4(c,BjD,BjE,BjF);AM_(c,Bj5,Bj6);}AOH(c,BjG,BjH);}
function ALp(b,c,d,e){var f;BV();if(Bjv){if(b!=7)Cg(C1(),B(317));else{if(Bjw.lH==(-1))Bjw.lH=P4();else if(Bjw.lH!=P4())Cg(C1(),B(318));f=Bjw;f.jF=f.jF+d|0;Bd();e=e;if((BeA+e.length|0)<BeB.length){f=BeB;b=BeA;f.set(e,b);BeA=BeA+e.length|0;}}}else{BjP=BjP+UA(e)|0;BjQ=BjQ+d|0;Rl(0|(!Bjx?0:1)|(!Bjy?0:4)|(BjI&&Bjs?8:0)|(!BjK?0:16)|(!Bjt?0:32)|(!Bjr?0:64));Oa(Bj7.t7);Hc(34962,Bj7.uG);if(!Bj7.w8){Bj7.w8=1;Pw(34962,Bj8,35048);}f=BdI;e=e;f.bufferSubData(34962,0,e);if(b==7){Pu(c,d);BjR=BjR+(d/2|0)|0;}else{a:{b:{switch
(b){case 1:break;case 2:case 4:break b;case 3:b=3;BjR=BjR+(d-1|0)|0;break a;case 5:b=5;BjR=BjR+(d-2|0)|0;break a;case 6:b=6;BjR=BjR+(d-2|0)|0;break a;default:break b;}b=1;BjR=BjR+(d/2|0)|0;break a;}b=4;BjR=BjR+(d/3|0)|0;}BdI.drawArrays(b,c,d);}}}
function Pu(b,c){var d,e,f,g,h,i,j;BV();if(BjZ===null){if(Bjq)d=ALO($rt_createIntArray(49200));else{e=A5B(0,196800,$rt_createByteArray(196800),0,196800,1,0);e.kH=Bgn;d=AHJ(e);}f=0;while(f<16384){g=f*4|0;h=g+1|0;i=g+2|0;j=g+3|0;h=h<<16;NI(d,g|h);NI(d,j|h);NI(d,i|j<<16);f=f+1|0;}Gr(d);BjZ=L6();Hc(34963,BjZ);g=Ct(d);e=new Int32Array(Bd6.buffer);h=0;while(h<g){i=AGa(d);e[h]=i;h=h+1|0;}d=Bd6.buffer;g=g*4|0;e=new Uint8Array(d,0,g);BdI.bufferData(34963,e,35044);}if(!Bj0.vI){Bj0.vI=1;Hc(34963,BjZ);}g=(c*6|0)/4|0;b=
(b*6|0)/4|0;Bd();BdI.drawElements(4,g,5123,b);}
function L_(b,c){BV();a:{if(b==2917){b:{switch(c){case 2048:break;case 9729:break b;default:break b;}BjJ=2;break a;}BjJ=1;}}}
function GK(b,c){BV();a:{switch(b){case 2914:break;case 2915:BjM=c;break a;case 2916:BjN=c;break a;default:break a;}BjO=c;}}
function APv(b,c,d,e){var f,g,h;BV();f=GL();g=b*0.01745329238474369*0.5;h=GA(g)/Gn(g);f.eq=h/c;f.eo=0.0;f.ep=0.0;f.en=0.0;f.et=0.0;f.eu=h;f.er=0.0;f.es=0.0;f.ey=0.0;f.ew=0.0;b=e+d;c=e-d;f.ex=b/c;f.ev=(-1.0);f.gQ=0.0;f.gR=0.0;f.gO=2.0*e*d/c;f.gP=0.0;}
function A1x(){var b,c,d;Bd();Bjq=1;Bgm=A_y(256);Bjr=0;Bjs=0;Bjt=0;Bju=0.10000000149011612;Bjv=0;Bjw=null;Bjx=0;Bjy=0;Bjz=1.0;BjA=1.0;BjB=1.0;BjC=1.0;BjD=1.0;BjE=0.0;BjF=0.0;BjG=0.0;BjH=0.0;BjI=0;BfS=1.0;BfT=1.0;BfU=1.0;BfV=1.0;BjJ=1;BjK=0;BjL=0;BjM=1.0;BjN=1.0;BjO=1.0;BjP=0;BjQ=0;BjR=0;BjS=5888;BjT=J(Er,32);BjU=0;BjV=J(Er,6);BjW=0;BjX=J(Er,16);BjY=0;b=0;while(b<BjT.data.length){c=BjT.data;d=new Er;Fn(d);c[b]=d;b=b+1|0;}b=0;while(b<BjV.data.length){c=BjV.data;d=new Er;Fn(d);c[b]=d;b=b+1|0;}b=0;while(b<BjX.data.length)
{c=BjX.data;d=new Er;Fn(d);c[b]=d;b=b+1|0;}BjZ=null;Bj0=null;Bgl=Dd();Bj1=Dd();Bj2=new UW;Bj3=new G6;Bj4=new G6;Bj5=new G6;Bj6=new G6;Bgk=0;Bj7=null;Bj8=new Int32Array(525000);Bj9=null;Bj$=null;Bj_=null;Bka=null;Bkb=null;Bkc=A_y(256);d=new Er;Fn(d);Bkd=Ks(d);Bke=$rt_createFloatArray(16);Bkf=$rt_createFloatArray(16);d=new Er;Fn(d);Bkg=d;d=new Er;Fn(d);Bkh=d;Bki=new G6;Bkj=Long_ZERO;Bkk=0;}
function ACz(){D.call(this);}
function Bkm(){var a=new ACz();AUj(a);return a;}
function AUj(a){return;}
function DS(){var b,c;Bd();if(!BeC)a:{Bec=null;if(!PR(BdV)){b=Td(BdV,0);Bec=b;if(b!==null){c=1;break a;}}c=0;}else{Oq(BdV);Bec=null;Bee.data[29]=0;Bee.data[157]=0;Bee.data[28]=0;Bee.data[219]=0;Bee.data[220]=0;BeC=0;c=0;}return c;}
function CU(){Bd();return Bec===null?0:DJ($rt_str(Bec.type),B(319))?0:1;}
function Bg(){Bd();return Bec===null?(-1):TW(Bec.which);}
function APT(b){Bd();Bd2=b;}
function BN(b){Bd();if(BeC){Bee.data[28]=0;Bee.data[29]=0;Bee.data[157]=0;Bee.data[219]=0;Bee.data[220]=0;}return Bee.data[b];}
function Ny(){var a=this;D.call(a);a.ro=0;a.tf=0;a.m0=0;a.ll=0;a.hX=0;a.jh=0;a.ez=0;a.ml=0;a.mS=0;a.tX=null;a.tP=null;a.xd=null;a.up=null;a.yw=null;a.fr=null;a.gi=null;a.BF=null;a.f9=null;a.B5=null;a.Da=null;a.m_=null;a.BQ=null;a.zH=0;a.jR=0;a.cz=0;}
var Bkn=null;var Bko=null;function A_$(a){var b=new Ny();AO_(b,a);return b;}
function AO_(a,b){var c,d;a.ro=1;a.tf=1;a.m0=0;a.ll=0;a.hX=0;a.jh=1;a.ez=0;a.ml=0;a.mS=1;a.tX=E7(B(320),17);a.tP=E7(B(321),30);a.xd=E7(B(322),31);a.up=E7(B(323),32);a.yw=E7(B(324),57);a.fr=E7(B(325),23);a.gi=E7(B(326),16);a.BF=E7(B(327),20);a.f9=E7(B(328),33);a.B5=E7(B(329),28);a.Da=E7(B(330),19);c=J(Vi,11);d=c.data;d[0]=a.tX;d[1]=a.tP;d[2]=a.xd;d[3]=a.up;d[4]=a.yw;d[5]=a.gi;d[6]=a.fr;d[7]=a.BF;d[8]=a.f9;d[9]=a.B5;d[10]=a.Da;a.m_=c;a.zH=10;a.jR=2;a.cz=0;a.BQ=b;}
function K3(a,b){var c;c=new U;X(c);c=I(I(c,a.m_.data[b].Et),B(12));b=a.m_.data[b].bI;Bd();return V(I(c,b>=0&&b<256?Bey.data[b]:B(10)));}
function X0(a,b,c){a.m_.data[b].bI=c;}
function D_(a,b,c){if(!b)a.ro=a.ro?0:1;if(b==1)a.tf=a.tf?0:1;if(b==2)a.m0=a.m0?0:1;if(b==3)a.ll=a.ll?0:1;if(b==4)a.hX=(a.hX+c|0)&3;if(b==5)a.jh=a.jh?0:1;if(b==6)a.ez=a.ez?0:1;if(b==7)a.ml=a.ml?0:1;if(b==8)a.jR=(a.jR+c|0)&3;if(b==9){a.mS=a.mS?0:1;Lj(a.BQ.d5);}}
function QS(a,b){var c;a:{if(!b){c=new U;X(c);c=V(I(I(c,B(331)),!a.ro?B(332):B(333)));break a;}if(b==1){c=new U;X(c);c=V(I(I(c,B(334)),!a.tf?B(332):B(333)));break a;}if(b==2){c=new U;X(c);c=V(I(I(c,B(335)),!a.m0?B(332):B(333)));break a;}if(b==3){c=new U;X(c);c=V(I(I(c,B(336)),!a.ll?B(332):B(333)));break a;}if(b==4){c=new U;X(c);c=V(I(I(c,B(337)),Bkn.data[a.hX]));break a;}if(b==5){c=new U;X(c);c=V(I(I(c,B(338)),!a.jh?B(332):B(333)));break a;}if(b==6){c=new U;X(c);c=V(I(I(c,B(339)),!a.ez?B(332):B(333)));break a;}if
(b==7){c=new U;X(c);c=V(I(I(c,B(340)),!a.ml?B(332):B(333)));break a;}if(b==8){c=new U;X(c);c=V(I(I(c,B(341)),Bko.data[a.jR]));break a;}if(b!=9){c=B(3);break a;}c=new U;X(c);c=V(I(I(c,B(342)),!a.mS?B(343):B(344)));}return c;}
function A2s(a){return;}
function A00(a){return;}
function AHS(){var b,c;b=J(B4,4);c=b.data;c[0]=B(345);c[1]=B(346);c[2]=B(347);c[3]=B(348);Bkn=b;b=J(B4,4);c=b.data;c[0]=B(349);c[1]=B(350);c[2]=B(351);c[3]=B(352);Bko=b;}
function Ik(){var a=this;D.call(a);a.tY=null;a.pT=0;a.mt=0;a.oJ=0;a.oK=0;a.kS=0;a.k1=0;a.lc=0;a.Bs=0;a.Ei=0;a.Dj=0;a.nR=0;a.o1=0;a.p1=0;a.ft=0;a.gW=null;a.EQ=0;a.AT=0;a.DE=0;a.Hn=0.0;a.iY=0;a.E0=null;a.Ih=0;a.xA=0;a.JI=0;a.ok=0;a.kE=0;a.gk=null;a.jc=null;}
var Bkp=null;var BeO=0;function Tj(){Tj=Bt(Ik);A_n();}
function Bbw(a,b,c,d,e,f,g){var h=new Ik();AI6(h,a,b,c,d,e,f,g);return h;}
function AI6(a,b,c,d,e,f,g,h){Tj();a.pT=(-1);a.ft=0;a.gW=$rt_createBooleanArray(2);a.xA=1;a.kE=0;a.gk=Ci();a.tY=b;a.jc=c;a.lc=g;a.k1=g;a.kS=g;a.Hn=D$((Bj(a.kS,a.kS)+Bj(a.k1,a.k1)|0)+Bj(a.lc,a.lc)|0)/2.0;a.pT=h;a.mt=(-999);Sc(a,d,e,f);a.iY=0;}
function Sc(a,b,c,d){var e,f;if(!(b==a.mt&&c==a.oJ&&d==a.oK)){PN(a);a.mt=b;a.oJ=c;a.oK=d;a.EQ=b+(a.kS/2|0)|0;a.AT=c+(a.k1/2|0)|0;a.DE=d+(a.lc/2|0)|0;a.nR=b&1023;a.o1=c;a.p1=d&1023;a.Bs=b-a.nR|0;a.Ei=c-a.o1|0;a.Dj=d-a.p1|0;a.E0=No(b-2.0,c-2.0,d-2.0,(b+a.kS|0)+2.0,(c+a.k1|0)+2.0,(d+a.lc|0)+2.0);FF(a.pT+2|0,4864);e=D2(a.nR-2.0,a.o1-2.0,a.p1-2.0,(a.nR+a.kS|0)+2.0,(a.o1+a.k1|0)+2.0,(a.p1+a.lc|0)+2.0);BA();f=BeL;Bz(f);Bf(f,e.R,e.U,e.S);Bf(f,e.V,e.U,e.S);Bf(f,e.V,e.M,e.S);Bf(f,e.R,e.M,e.S);Bf(f,e.R,e.M,e.W);Bf(f,e.V,
e.M,e.W);Bf(f,e.V,e.U,e.W);Bf(f,e.R,e.U,e.W);Bf(f,e.R,e.M,e.S);Bf(f,e.V,e.M,e.S);Bf(f,e.V,e.M,e.W);Bf(f,e.R,e.M,e.W);Bf(f,e.R,e.U,e.W);Bf(f,e.V,e.U,e.W);Bf(f,e.V,e.U,e.S);Bf(f,e.R,e.U,e.S);Bf(f,e.R,e.M,e.W);Bf(f,e.R,e.U,e.W);Bf(f,e.R,e.U,e.S);Bf(f,e.R,e.M,e.S);Bf(f,e.V,e.M,e.S);Bf(f,e.V,e.U,e.S);Bf(f,e.V,e.U,e.W);Bf(f,e.V,e.M,e.W);Br(f);Ed();KT(a);}}
function ADf(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.iY)return;BeO=BeO+1|0;b=a.mt;c=a.oJ;d=a.oK;e=a.mt+a.kS|0;f=a.oJ+a.k1|0;g=a.oK+a.lc|0;h=0;while(h<2){a.gW.data[h]=1;h=h+1|0;}Bkq=0;i=F6();DC(i,a.gk);DF(a.gk);j=new Iq;k
=a.tY;l=b-1|0;m=c-1|0;n=d-1|0;o=e+1|0;h=f+1|0;p=g+1|0;$p=1;case 1:AEt(j,k,l,m,n,o,h,p);if(C()){break _;}k=A8k(j);l=0;a:{while(true){if(l>=2)break a;q=0;r=0;s=0;t=c;while(t<f){m=d;while(m<g){n=b;if(n<e){$p=2;continue _;}m=m+1|0;}t=t+1|0;}if(!s)r=0;else{Br(Bkp);Ed();E_(Bkp,0.0,0.0,0.0);}if(r)a.gW.data[l]=0;if(!q)break;l=l+1|0;}}u=F6();DC(u,a.gk);Fq(u,i);DC(a.jc,u);Fq(i,a.gk);F_(a.jc,i);a.ok=Bkq;a.kE=1;return;case 2:$z=Hw(j,n,t,m);if(C()){break _;}p=$z;if(p>0){if(!s){s=1;FF(a.pT+l|0,4864);Bz(Bkp);E_(Bkp,a.nR-a.mt
|0,a.o1-a.oJ|0,a.p1-a.oK|0);}if(!l){L();if(BeP.data[p] instanceof Ef){$p=3;continue _;}}L();v=BeP.data[p];o=R(v.pM(),l);if(o)q=1;else if(!o){$p=4;continue _;}}n=n+1|0;b:{c:while(true){if(n<e){continue _;}m=m+1|0;while(m>=g){t=t+1|0;while(t>=f){if(!s)r=0;else{Br(Bkp);Ed();E_(Bkp,0.0,0.0,0.0);}if(r)a.gW.data[l]=0;if(!q)break c;l=l+1|0;if(l>=2)break b;q=0;r=0;s=0;t=c;}m=d;}n=b;}}u=F6();DC(u,a.gk);Fq(u,i);DC(a.jc,u);Fq(i,a.gk);F_(a.jc,i);a.ok=Bkq;a.kE=1;return;case 3:$z=AFU(j,n,t,m);if(C()){break _;}w=$z;if(AIh(Bkr,
w))S(a.gk,w);L();v=BeP.data[p];o=R(v.pM(),l);if(o)q=1;else if(!o){$p=4;continue _;}n=n+1|0;d:{e:while(true){if(n<e){$p=2;continue _;}m=m+1|0;while(m>=g){t=t+1|0;while(t>=f){if(!s)r=0;else{Br(Bkp);Ed();E_(Bkp,0.0,0.0,0.0);}if(r)a.gW.data[l]=0;if(!q)break e;l=l+1|0;if(l>=2)break d;q=0;r=0;s=0;t=c;}m=d;}n=b;}}u=F6();DC(u,a.gk);Fq(u,i);DC(a.jc,u);Fq(i,a.gk);F_(a.jc,i);a.ok=Bkq;a.kE=1;return;case 4:$z=ANZ(k,v,n,t,m);if(C()){break _;}o=$z;r=r|o;n=n+1|0;a:{f:while(true){if(n<e){$p=2;continue _;}m=m+1|0;while(m>=g)
{t=t+1|0;while(t>=f){if(!s)r=0;else{Br(Bkp);Ed();E_(Bkp,0.0,0.0,0.0);}if(r)a.gW.data[l]=0;if(!q)break f;l=l+1|0;if(l>=2)break a;q=0;r=0;s=0;t=c;}m=d;}n=b;}}u=F6();DC(u,a.gk);Fq(u,i);DC(a.jc,u);Fq(i,a.gk);F_(a.jc,i);a.ok=Bkq;a.kE=1;return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p);}
function G2(a,b){var c,d,e;c=b.d-a.EQ;d=b.j-a.AT;e=b.e-a.DE;return c*c+d*d+e*e;}
function PN(a){var b;b=0;while(b<2){a.gW.data[b]=1;b=b+1|0;}a.ft=0;a.kE=0;}
function ARE(a){PN(a);a.tY=null;}
function PD(a,b){return !a.ft?(-1):a.gW.data[b]?(-1):a.pT+b|0;}
function AR9(a,b){a.ft=ME(b,a.E0);}
function AHw(a){return !a.kE?0:a.gW.data[0]&&a.gW.data[1]?1:0;}
function KT(a){a.iY=1;}
function A_n(){BA();Bkp=BeL;BeO=0;}
function AR$(){var a=this;E3.call(a);a.jn=null;a.lF=0;}
function A7B(){var a=new AR$();AXI(a);return a;}
function A$g(a){var b=new AR$();YZ(b,a);return b;}
function AXI(a){YZ(a,32);}
function YZ(a,b){a.jn=$rt_createByteArray(b);}
function A7P(a,b){var c,d;Rp(a,a.lF+1|0);c=a.jn.data;d=a.lF;a.lF=d+1|0;c[d]=b<<24>>24;}
function Rn(a,b,c,d){var e,f,g,h,i;Rp(a,a.lF+d|0);e=0;while(e<d){f=b.data;g=a.jn.data;h=a.lF;a.lF=h+1|0;i=c+1|0;g[h]=f[c];e=e+1|0;c=i;}}
function Rp(a,b){if(a.jn.data.length<b){b=DB(b,(a.jn.data.length*3|0)/2|0);a.jn=Ob(a.jn,b);}}
function Ia(a){return Ob(a.jn,a.lF);}
function JP(){B6.call(this);}
function Bks(){var a=new JP();A5F(a);return a;}
function A5F(a){O(a);}
function N_(){}
function GF(){var a=this;D.call(a);a.fC=null;a.dV=null;a.lZ=null;a.gH=null;a.kN=null;a.fA=null;a.ea=Long_ZERO;a.si=Long_ZERO;a.sM=Long_ZERO;a.rm=Long_ZERO;a.gg=0;a.hS=0;a.r8=0;a.sh=0;a.bi=null;a.iX=0;a.C2=null;a.q=null;a.fh=0;a.pU=0;a.fg=0;a.tz=0;a.cs=null;a.iJ=null;a.lr=Long_ZERO;a.td=null;a.wD=Long_ZERO;a.IT=null;a.m9=null;a.qe=null;}
var Bkt=null;var Bku=null;function Bkv(a,b){var c=new GF();QT(c,a,b);return c;}
function ASa(b){var c,d,e,f,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:c=new U;X(c);c=V(I(I(c,b),B(353)));$p=1;case 1:$z=ALD(c);if(C()){break _;}d=$z;c=DR();e=new U;X(e);Cg(c,V(I(I(e,b),B(353))));if(d===null)return null;a:{try{e=Mv(MR(OT(Uf(d))),B(354));}catch($$e){$$je=Bi($$e);if($$je instanceof B1){f=$$je;break a;}else{throw $$e;}}return e;}Cc(f);return null;default:E$();}}C3().s(b,c,d,e,f,$p);}
function QT(a,b,c){var d,e,f,g,h,i,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.fC=Ci();a.dV=Ci();a.lZ=Ci();a.gH=Bb1();a.kN=F6();a.fA=Ci();a.ea=Long_ZERO;a.si=Long_fromInt(8961023);a.sM=Long_fromInt(12638463);a.rm=Long_fromInt(16777215);a.gg=0;a.hS=Lo(new Dz);a.r8=1013904223;a.sh=0;a.q=new Dz;a.tz=0;a.cs=Ci();a.lr=Long_ZERO;a.wD=Long_ZERO;a.m9=Ci();a.qe=Ci();a.IT=b;Bku=b;b=new U;X(b);b=V(I(I(b,
Bku),B(353)));$p=1;case 1:$z=ALD(b);if(C()){break _;}d=$z;b=DR();e=new U;X(e);Cg(b,V(I(I(e,Bku),B(353))));f=d!==null?1:0;a:{a.tz=f;if(d!==null){try{g=Mv(MR(OT(Uf(d))),B(354));a.lr=Mb(g,B(355));a.fh=FR(g,B(356));a.pU=FR(g,B(357));a.fg=FR(g,B(358));a.ea=Mb(g,B(359));a.wD=Mb(g,B(360));a.td=Mv(g,B(5));break a;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){h=$$je;}else{throw $$e;}}Cc(h);}}f=0;if(Long_eq(a.lr,Long_ZERO)){a.lr=c;f=1;}a.iJ=ABj(a,Bku);if(!f){Q4(a);return;}a.fh=0;a.pU=64;a.fg=0;f=a.fh;i=a.fg;$p=2;case 2:$z
=AJO(a,f,i);if(C()){break _;}f=$z;L();if(f!=Bfa.b?0:1){Q4(a);return;}a.fh=a.fh+(E(a.q,64)-E(a.q,64)|0)|0;a.fg=a.fg+(E(a.q,64)-E(a.q,64)|0)|0;f=a.fh;i=a.fg;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ABj(a,b){var c,d,e;c=new VT;d=new Xi;d.rY=b;e=new Sn;e.F_=$rt_createIntMultiArray([32,32]);e.s=a;e.a=new Dz;e.yN=G8(e.a,16);e.yO=G8(e.a,16);e.yM=G8(e.a,8);e.tJ=G8(e.a,4);e.yQ=G8(e.a,4);e.yR=G8(e.a,10);e.yP=G8(e.a,16);e.iP=G8(e.a,8);c.X=J(I1,1024);c.fq=(-999999999);c.fQ=(-999999999);c.lk=A9s(a,$rt_createByteArray(32768),0,0);c.lk.Eg=1;c.lk.p8=1;c.lw=a;c.g1=d;c.iO=e;return c;}
function AP4(a){var b,c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.fh;c=a.fg;$p=1;case 1:$z=AJO(a,b,c);if(C()){break _;}b=$z;if(b)return;a.fh=a.fh+(E(a.q,8)-E(a.q,8)|0)|0;a.fg=a.fg+(E(a.q,8)-E(a.q,8)|0)|0;b=a.fh;c=a.fg;continue _;default:E$();}}C3().s(a,b,c,$p);}
function AJO(a,b,c){var d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=63;e=d+1|0;$p=1;case 1:$z=ACt(a,b,e,c);if(C()){break _;}f=$z;if(!f){$p=2;continue _;}d=e;e=d+1|0;continue _;case 2:$z=ACt(a,b,d,c);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AGp(a){var b,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:try{if(a.td!==null){YP(a.bi,a.td);a.td=null;}b=a.bi;$p=1;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){b=$$je;}else{throw $$e;}}Cc(b);return;case 1:a:{try{AOf(a,b);if(C()){break _;}break a;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){b=$$je;}else{throw $$e;}}Cc(b);}return;default:E$();}}C3().s(a,b,$p);}
function ABB(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!==null)YF(c,B(361));$p=1;case 1:AMJ(a);if(C()){break _;}if(c===null){d=a.iJ;$p=2;continue _;}d=B(362);$p=3;continue _;case 2:ANX(d,b,c);if(C()){break _;}return;case 3:AR3(c,d);if(C()){break _;}d=a.iJ;$p=2;continue _;default:E$();}}C3().s(a,b,c,d,$p);}
function AMJ(a){var b,c,d,e,f,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=G7();H9(b,B(355),a.lr);Gu(b,B(356),a.fh);Gu(b,B(357),a.pU);Gu(b,B(358),a.fg);H9(b,B(359),a.ea);H9(b,B(360),a.wD);H9(b,B(363),B$());if(a.bi!==null){c=G7();ALs(a.bi,c);ANR(b,B(5),c);}c=G7();HC(c,B(354),b);try{b=BL(I(I(BX(),Bku),B(364)));$p=1;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 1:try
{ALD(b);if(C()){break _;}b=BL(I(I(BX(),Bku),B(365)));$p=2;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 2:try{ALD(b);if(C()){break _;}b=BL(I(I(BX(),Bku),B(353)));$p=3;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 3:try{ALD(b);if(C()){break _;}e=A$g(131072);RT(c,AWg(e));b=BL(I(I(BX(),Bku),B(364)));f=Ia(e);$p=4;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 4:try
{ACx(b,f);if(C()){break _;}b=BL(I(I(BX(),Bku),B(365)));$p=5;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 5:try{$z=ALD(b);if(C()){break _;}f=$z;if(f!==null){b=BL(I(I(BX(),Bku),B(365)));$p=8;continue _;}b=BL(I(I(BX(),Bku),B(353)));c=BL(I(I(BX(),Bku),B(365)));$p=6;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 6:try{ANk(b,c);if(C()){break _;}b=BL(I(I(BX(),Bku),B(353)));$p=7;continue _;}catch($$e){$$je
=Bi($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 7:try{$z=ALD(b);if(C()){break _;}f=$z;if(f!==null){b=BL(I(I(BX(),Bku),B(353)));$p=11;continue _;}b=BL(I(I(BX(),Bku),B(364)));c=BL(I(I(BX(),Bku),B(353)));$p=9;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 8:try{AL0(b);if(C()){break _;}b=BL(I(I(BX(),Bku),B(353)));c=BL(I(I(BX(),Bku),B(365)));$p=6;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 9:try
{ANk(b,c);if(C()){break _;}b=BL(I(I(BX(),Bku),B(364)));$p=10;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 10:a:{try{$z=ALD(b);if(C()){break _;}f=$z;if(f===null)break a;b=BL(I(I(BX(),Bku),B(364)));$p=12;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);}return;case 11:try{AL0(b);if(C()){break _;}b=BL(I(I(BX(),Bku),B(364)));c=BL(I(I(BX(),Bku),B(353)));$p=9;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE)
{d=$$je;}else{throw $$e;}}Cc(d);return;case 12:a:{try{AL0(b);if(C()){break _;}break a;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AAJ(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b){$p=2;continue _;}c=a.iJ;b=0;d=null;$p=1;case 1:$z=ANX(c,b,d);if(C()){break _;}b=$z;return b;case 2:AMJ(a);if(C()){break _;}c=a.iJ;b=0;d=null;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,$p);}
function ACt(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)b=0;else{if(c<128){e=b>>4;f=d>>4;$p=1;continue _;}b=0;}}else b=0;return b;case 1:$z=ZR(a,e,f);if(C()){break _;}g=$z;return ES(g,b&15,c,d&15);default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function EH(a,b,c,d){return c>=0&&c<128?C4(a,b>>4,d>>4):0;}
function Ic(a,b,c,d,e,f,g){var h,i;if(f>=0&&c<128){h=b>>4;b=d>>4;c=e>>4;d=g>>4;while(h<=c){i=b;while(i<=d){if(!C4(a,h,i))return 0;i=i+1|0;}h=h+1|0;}return 1;}return 0;}
function C4(a,b,c){return BQ(a.iJ,b,c);}
function XS(a,b,c){var d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=b>>4;b=c>>4;$p=1;case 1:$z=ZR(a,d,b);if(C()){break _;}e=$z;return e;default:E$();}}C3().s(a,b,c,d,e,$p);}
function ZR(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=a.iJ;$p=1;case 1:$z=AOd(d,b,c);if(C()){break _;}d=$z;return d;default:E$();}}C3().s(a,b,c,d,$p);}
function AJk(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;g=b>>4;h=d>>4;$p=1;continue _;}return 0;case 1:$z=ZR(a,g,h);if(C()){break _;}i=$z;b=b&15;d=d&15;$p=2;case 2:$z=ADC(i,b,c,d,e,f);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ALq(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;f=b>>4;g=d>>4;$p=1;continue _;}return 0;case 1:$z=ZR(a,f,g);if(C()){break _;}h=$z;g=b&15;b=d&15;$p=2;case 2:$z=ADz(h,g,c,b,e);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ABX(a,b,c,d){var e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACt(a,b,c,d);if(C()){break _;}e=$z;if(!e)f=Bf_;else{L();f=BeP.data[e].b8;}return f;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AEI(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;e=b>>4;f=d>>4;$p=1;continue _;}return 0;case 1:$z=ZR(a,e,f);if(C()){break _;}g=$z;return RN(g,b&15,c,d&15);default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ACd(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AKu(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AKu(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;f=b>>4;g=d>>4;$p=1;continue _;}return 0;case 1:$z=ZR(a,f,g);if(C()){break _;}h=$z;AAs(h,b&15,c,d&15,e);return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function APu(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ALq(a,b,c,d,e);if(C()){break _;}f=$z;if(!f)return 0;$p=2;case 2:AEM(a,b,c,d,e);if(C()){break _;}return 1;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AIW(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AJk(a,b,c,d,e,f);if(C()){break _;}f=$z;if(!f)return 0;$p=2;case 2:AEM(a,b,c,d,e);if(C()){break _;}return 1;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AEM(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;while(f<a.cs.o){Rk(Z(a.cs,f),b,c,d);f=f+1|0;}$p=1;case 1:AHM(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function APH(a,b,c,d,e){var f;if(d<=e){f=d;d=e;e=f;}Jg(a,b,e,c,b,d,c);}
function Jg(a,b,c,d,e,f,g){var h;h=0;while(h<a.cs.o){AOE(Z(a.cs,h),b,c,d,e,f,g);h=h+1|0;}}
function AHM(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=b-1|0;$p=1;case 1:AO3(a,f,c,d,e);if(C()){break _;}f=b+1|0;$p=2;case 2:AO3(a,f,c,d,e);if(C()){break _;}f=c-1|0;$p=3;case 3:AO3(a,b,f,d,e);if(C()){break _;}f=c+1|0;$p=4;case 4:AO3(a,b,f,d,e);if(C()){break _;}f=d-1|0;$p=5;case 5:AO3(a,b,c,f,e);if(C()){break _;}d=d+1|0;$p=6;case 6:AO3(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,
$p);}
function AO3(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.sh)return;L();f=BeP.data;$p=1;case 1:$z=ACt(a,b,c,d);if(C()){break _;}g=$z;h=f[g];if(h===null)return;$p=2;case 2:h.eY(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AGe(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=b>>4;f=d>>4;$p=1;case 1:$z=ZR(a,e,f);if(C()){break _;}g=$z;return Ph(g,b&15,c,d&15);default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function Xv(a,b,c,d){var e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=1;$p=1;case 1:$z=AQK(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AQK(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(e){$p=1;continue _;}if(c<0)return 0;if(c>=128){f=15-a.gg|0;if(f<0)f=0;return f;}g=b>>4;e=d>>4;$p=7;continue _;}return 15;case 1:$z=ACt(a,b,c,d);if(C()){break _;}f=$z;L();if(f!=BeU.b&&f!=Bg3.b){if(c<0)return 0;if(c>=128){f=15
-a.gg|0;if(f<0)f=0;return f;}g=b>>4;e=d>>4;$p=7;continue _;}e=c+1|0;g=0;$p=2;case 2:$z=AQK(a,b,e,d,g);if(C()){break _;}h=$z;e=b+1|0;g=0;$p=3;case 3:$z=AQK(a,e,c,d,g);if(C()){break _;}g=$z;e=b-1|0;i=0;$p=4;case 4:$z=AQK(a,e,c,d,i);if(C()){break _;}i=$z;e=d+1|0;j=0;$p=5;case 5:$z=AQK(a,b,c,e,j);if(C()){break _;}j=$z;d=d-1|0;e=0;$p=6;case 6:$z=AQK(a,b,c,d,e);if(C()){break _;}k=$z;if(g<=h)g=h;if(i<=g)i=g;if(j<=i)j=i;if(k<=j)k=j;return k;case 7:$z=ZR(a,g,e);if(C()){break _;}l=$z;return VK(l,b&15,c,d&15,a.gg);default:
E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Zu(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 1;e=b>>4;f=d>>4;if(!C4(a,e,f))return 0;$p=1;continue _;}return 0;case 1:$z=ZR(a,e,f);if(C()){break _;}g=$z;return Ph(g,b&15,c,d&15);default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ALE(a,b,c){var d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&c>=(-32000000)&&b<32000000&&c<=32000000){d=b>>4;e=c>>4;if(!C4(a,d,e))return 0;$p=1;continue _;}return 0;case 1:$z=ZR(a,d,e);if(C()){break _;}f=$z;return UF(f,b&15,c&15);default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AP8(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!EH(a,c,d,e))return;if(b===Bkw){$p=1;continue _;}if(b===Bkx){$p=2;continue _;}$p=3;continue _;case 1:$z=Zu(a,c,d,e);if(C()){break _;}g=$z;if(g)f=15;$p=3;continue _;case 2:$z=ACt(a,c,d,e);if(C()){break _;}g=$z;L();if(BgD.data[g]>f)f=BgD.data[g];$p=3;case 3:$z=ALh(a,b,c,d,e);if(C()){break _;}g=$z;if(g==f)return;$p=4;case 4:Y5(a,b,c,d,e,c,d,
e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ALh(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(d>=0&&d<128&&c>=(-32000000)&&e>=(-32000000)&&c<32000000&&e<=32000000){f=c>>4;g=e>>4;if(!C4(a,f,g))return 0;$p=1;continue _;}return b.z4;case 1:$z=ZR(a,f,g);if(C()){break _;}h=$z;return ACi(h,b,c&15,d,e&15);default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AMr(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c>=(-32000000)&&e>=(-32000000)&&c<32000000&&e<=32000000&&d>=0&&d<128){g=c>>4;h=e>>4;if(C4(a,g,h)){$p=1;continue _;}}return;case 1:$z=ZR(a,g,h);if(C()){break _;}i=$z;AQL(i,b,c&15,d,e&15,f);g=0;while(g<a.cs.o){Rk(Z(a.cs,g),c,d,e);g=g+1|0;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ANf(a,b,c,d){var e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=Bkt.data;$p=1;case 1:$z=Xv(a,b,c,d);if(C()){break _;}b=$z;return e[b];default:E$();}}C3().s(a,b,c,d,e,$p);}
function Rt(a){return a.gg>=4?0:1;}
function AJj(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0;$p=1;case 1:$z=AE2(a,b,c,d);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,$p);}
function AE2(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(isNaN(b.w)?1:0)&&!(isNaN(b.y)?1:0)&&!(isNaN(b.v)?1:0)){if(!(isNaN(c.w)?1:0)&&!(isNaN(c.y)?1:0)&&!(isNaN(c.v)?1:0)){e
=K(c.w);f=K(c.y);g=K(c.v);h=K(b.w);i=K(b.y);j=K(b.v);k=20+(-1)|0;if(20<0)return null;if(!(isNaN(b.w)?1:0)&&!(isNaN(b.y)?1:0)&&!(isNaN(b.v)?1:0)){if(h==e&&i==f&&j==g)return null;l=999.0;m=999.0;n=999.0;o=R(e,h);if(o>0)l=h+1.0;if(o<0)l=h+0.0;p=R(f,i);if(p>0)m=i+1.0;if(p<0)m=i+0.0;i=R(g,j);if(i>0)n=j+1.0;if(i<0)n=j+0.0;q=999.0;r=999.0;s=999.0;t=c.w-b.w;u=c.y-b.y;v=c.v-b.v;if(l!==999.0)q=(l-b.w)/t;if(m!==999.0)r=(m-b.y)/u;if(n!==999.0)s=(n-b.v)/v;if(q<r&&q<s){o=o<=0?5:4;b.w=l;b.y=b.y+u*q;b.v=b.v+v*q;}else if(r>=
s){o=i<=0?3:2;b.w=b.w+t*s;b.y=b.y+u*s;b.v=n;}else{o=p<=0?1:0;b.w=b.w+t*r;b.y=m;b.v=b.v+v*r;}w=BY(b.w,b.y,b.v);v=K(b.w);w.w=v;h=v|0;if(o==5){h=h+(-1)|0;w.w=w.w+1.0;}v=K(b.y);w.y=v;i=v|0;if(o==1){i=i+(-1)|0;w.y=w.y+1.0;}v=K(b.v);w.v=v;j=v|0;if(o==3){j=j+(-1)|0;w.v=w.v+1.0;}$p=1;continue _;}return null;}return null;}return null;case 1:$z=ACt(a,h,i,j);if(C()){break _;}x=$z;$p=2;case 2:$z=AEI(a,h,i,j);if(C()){break _;}y=$z;L();z=BeP.data[x];if(x>0&&z.o4(y,d)){$p=5;continue _;}o=i-1|0;$p=3;case 3:$z=ACt(a,h,o,j);if
(C()){break _;}p=$z;$p=4;case 4:$z=AEI(a,h,o,j);if(C()){break _;}x=$z;w=BeP.data[p];if(p>0&&w.o4(x,d)){$p=6;continue _;}p=k;k=p+(-1)|0;if(p<0)return null;if(!(isNaN(b.w)?1:0)&&!(isNaN(b.y)?1:0)&&!(isNaN(b.v)?1:0)){if(h==e&&i==f&&j==g)return null;l=999.0;m=999.0;n=999.0;o=R(e,h);if(o>0)l=h+1.0;if(o<0)l=h+0.0;p=R(f,i);if(p>0)m=i+1.0;if(p<0)m=i+0.0;i=R(g,j);if(i>0)n=j+1.0;if(i<0)n=j+0.0;q=999.0;r=999.0;s=999.0;t=c.w-b.w;u=c.y-b.y;v=c.v-b.v;if(l!==999.0)q=(l-b.w)/t;if(m!==999.0)r=(m-b.y)/u;if(n!==999.0)s=(n-b.v)
/v;if(q<r&&q<s){o=o<=0?5:4;b.w=l;b.y=b.y+u*q;b.v=b.v+v*q;}else if(r>=s){o=i<=0?3:2;b.w=b.w+t*s;b.y=b.y+u*s;b.v=n;}else{o=p<=0?1:0;b.w=b.w+t*r;b.y=m;b.v=b.v+v*r;}w=BY(b.w,b.y,b.v);v=K(b.w);w.w=v;h=v|0;if(o==5){h=h+(-1)|0;w.w=w.w+1.0;}v=K(b.y);w.y=v;i=v|0;if(o==1){i=i+(-1)|0;w.y=w.y+1.0;}v=K(b.v);w.v=v;j=v|0;if(o==3){j=j+(-1)|0;w.v=w.v+1.0;}$p=1;continue _;}return null;case 5:$z=z.nD(a,h,i,j,b,c);if(C()){break _;}ba=$z;if(ba!==null)return ba;o=i-1|0;$p=3;continue _;case 6:$z=w.nD(a,h,o,j,b,c);if(C()){break _;}ba
=$z;if(ba!==null)return ba;p=k;k=p+(-1)|0;if(p<0)return null;if(!(isNaN(b.w)?1:0)&&!(isNaN(b.y)?1:0)&&!(isNaN(b.v)?1:0)){if(h==e&&i==f&&j==g)return null;l=999.0;m=999.0;n=999.0;o=R(e,h);if(o>0)l=h+1.0;if(o<0)l=h+0.0;p=R(f,i);if(p>0)m=i+1.0;if(p<0)m=i+0.0;i=R(g,j);if(i>0)n=j+1.0;if(i<0)n=j+0.0;q=999.0;r=999.0;s=999.0;t=c.w-b.w;u=c.y-b.y;v=c.v-b.v;if(l!==999.0)q=(l-b.w)/t;if(m!==999.0)r=(m-b.y)/u;if(n!==999.0)s=(n-b.v)/v;if(q<r&&q<s){o=o<=0?5:4;b.w=l;b.y=b.y+u*q;b.v=b.v+v*q;}else if(r>=s){o=i<=0?3:2;b.w=b.w+t
*s;b.y=b.y+u*s;b.v=n;}else{o=p<=0?1:0;b.w=b.w+t*r;b.y=m;b.v=b.v+v*r;}w=BY(b.w,b.y,b.v);v=K(b.w);w.w=v;h=v|0;if(o==5){h=h+(-1)|0;w.w=w.w+1.0;}v=K(b.y);w.y=v;i=v|0;if(o==1){i=i+(-1)|0;w.y=w.y+1.0;}v=K(b.v);w.v=v;j=v|0;if(o==3){j=j+(-1)|0;w.v=w.v+1.0;}$p=1;continue _;}return null;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p);}
function Dh(a,b,c,d,e){var f,g,h;f=0;g=R(d,1.0);e=16.0*d;while(f<a.cs.o){h=16.0;if(g>0)h=e;if(LC(a.bi,b)<h*h)Z(a.cs,f);f=f+1|0;}}
function Ew(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,$$je;a:{b:{try{h=0;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){i=$$je;break b;}else{throw $$e;}}j=R(f,1.0);k=16.0*f;while(true){try{if(h>=De(a.cs))break;l=16.0;if(j>0)l=k;m=b-a.bi.d;n=c-a.bi.j;o=d-a.bi.e;if(m*m+n*n+o*o<l*l)ACZ(Z(a.cs,h),e,b,c,d,f,g);h=h+1|0;continue;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){i=$$je;break b;}else{throw $$e;}}}break a;}Cc(i);}}
function ATa(a,b,c,d,e,f){return;}
function BW(a,b,c,d,e,f,g,h){var i;i=0;while(i<a.cs.o){AH4(Z(a.cs,i),b,c,d,e,f,g,h);i=i+1|0;}}
function AOf(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(b.d/16.0);d=K(b.e/16.0);if(!C4(a,c,d)){e=DR();f=new U;X(f);Cg(e,V(FK(I(f,B(366)),b)));return;}$p=1;case 1:$z=ZR(a,c,d);if(C()){break _;}e=$z;VN(e,b);S(a.dV,b);g=0;while(g<a.cs.o){Z(a.cs,g);g=g+1|0;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AU4(a,b){Ca(b);}
function ANB(a,b){S(a.cs,b);}
function AKS(a,b){H5(a.cs,b);}
function XQ(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:DF(a.m9);d=K(c.R);e=K(c.V+1.0);f=K(c.M);g=K(c.U+1.0);h=K(c.S);i=K(c.W+1.0);f=f-1|0;while(d<e){j=f;while(j<g){k=h;if(k<i){L();l=BeP.data;$p=2;continue _;}j=j+1|0;}d=d+1|0;}c=Dv(c,0.25,0.25,0.25);$p=1;case 1:$z=ADJ(a,b,c);if(C()){break _;}m=$z;n=
0;while(n<m.o){o=Z(m,n).Bn();if(o!==null)S(a.m9,o);c=b.AQ(Z(m,n));if(c!==null)S(a.m9,c);n=n+1|0;}return a.m9;case 2:$z=ACt(a,d,j,k);if(C()){break _;}n=$z;p=l[n];if(p!==null){m=a.m9;$p=3;continue _;}k=k+1|0;while(k>=i){j=j+1|0;while(j>=g){d=d+1|0;if(d>=e){c=Dv(c,0.25,0.25,0.25);$p=1;continue _;}j=f;}k=h;}L();l=BeP.data;continue _;case 3:p.Fw(a,d,j,k,c,m);if(C()){break _;}k=k+1|0;while(k>=i){j=j+1|0;while(j>=g){d=d+1|0;if(d>=e){c=Dv(c,0.25,0.25,0.25);$p=1;continue _;}j=f;}k=h;}L();l=BeP.data;$p=2;continue _;default:
E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function Oj(a,b){var c;c=1.0-(BC(Hv(a,b)*3.1415927410125732*2.0)*2.0+0.5);if(c<0.0)c=0.0;if(c>1.0)c=1.0;return c*11.0|0;}
function OM(a,b){var c,d,e,f;c=BC(Hv(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(c<0.0)c=0.0;if(c>1.0)c=1.0;d=Long_toNumber(Long_and(Long_shr(a.si,16),Long_fromInt(255)))/255.0;e=Long_toNumber(Long_and(Long_shr(a.si,8),Long_fromInt(255)))/255.0;f=Long_toNumber(Long_and(a.si,Long_fromInt(255)))/255.0;return BY(d*c,e*c,f*c);}
function Hv(a,b){var c;c=(Long_rem(a.ea,Long_fromInt(24000)).lo+b)/24000.0-0.25;if(c<0.0)c=c+1.0;if(c>1.0)c=c-1.0;return c+(1.0-(GA(c*3.141592653589793)+1.0)/2.0-c)/3.0;}
function SV(a,b){var c,d,e,f;c=BC(Hv(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(c<0.0)c=0.0;if(c>1.0)c=1.0;d=Long_toNumber(Long_and(Long_shr(a.rm,16),Long_fromInt(255)))/255.0;e=Long_toNumber(Long_and(Long_shr(a.rm,8),Long_fromInt(255)))/255.0;f=Long_toNumber(Long_and(a.rm,Long_fromInt(255)))/255.0;b=c*0.8999999761581421+0.10000000149011612;return BY(d*b,e*b,f*(c*0.8500000238418579+0.15000000596046448));}
function ADp(a,b){var c,d,e,f;c=BC(Hv(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(c<0.0)c=0.0;if(c>1.0)c=1.0;d=Long_toNumber(Long_and(Long_shr(a.sM,16),Long_fromInt(255)))/255.0;e=Long_toNumber(Long_and(Long_shr(a.sM,8),Long_fromInt(255)))/255.0;f=Long_toNumber(Long_and(a.sM,Long_fromInt(255)))/255.0;b=c*0.9399999976158142+0.05999999865889549;return BY(d*b,e*b,f*(c*0.9100000262260437+0.09000000357627869));}
function A8p(a,b,c){return 64;}
function AJp(a,b){var c;c=1.0-(BC(Hv(a,b)*3.1415927410125732*2.0)*2.0+0.75);if(c<0.0)c=0.0;if(c>1.0)c=1.0;return c*c*0.5;}
function Fl(a,b,c,d,e){var f,g;f=new JT;g=Bky;Bky=Long_add(g,Long_fromInt(1));f.oR=g;f.fE=b;f.fn=c;f.fI=d;f.p6=e;if(Ic(a,b-8|0,c-8|0,d-8|0,b+8|0,c+8|0,d+8|0)){if(e>0){L();f.je=Long_add(Long_fromInt(BeP.data[e].mo()),a.ea);}if(!Ww(a.kN,f)){Xd(a.kN,f);Zf(a.gH,f);}}}
function APc(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:F_(a.dV,a.lZ);b=0;while(b<a.cs.o){Z(a.cs,b);c=0;while(c<a.lZ.o){Z(a.lZ,c);c=c+1|0;}b=b+1|0;}DF(a.lZ);b=0;a:while(true){if(b>=a.dV.o){b=0;if(b>=a.fA.o)return;d=Z(a.fA,b);$p=1;continue _;}b:{e=Z(a.dV,b);if(e.bB!==null){if(!e.bB.cP&&e.bB.bH===e)break b;e.bB.bH=null;e.bB=null;}if(!e.cP){$p=2;continue _;}if(e.cP){c=K(e.d/16.0);f=K(e.e/16.0);if(C4(a,
c,f))break a;d=a.dV;c=b+(-1)|0;Em(d,b);g=0;while(g<a.cs.o){Z(a.cs,g);g=g+1|0;}b=c;}}b=b+1|0;}$p=3;continue _;case 1:d.tH();if(C()){break _;}b=b+1|0;if(b>=a.fA.o)return;d=Z(a.fA,b);continue _;case 2:Xs(a,e);if(C()){break _;}while(true){if(e.cP){c=K(e.d/16.0);f=K(e.e/16.0);if(C4(a,c,f)){$p=3;continue _;}d=a.dV;c=b+(-1)|0;Em(d,b);g=0;while(g<a.cs.o){Z(a.cs,g);g=g+1|0;}b=c;}b:{while(true){b=b+1|0;if(b>=a.dV.o){b=0;if(b>=a.fA.o)return;d=Z(a.fA,b);$p=1;continue _;}e=Z(a.dV,b);if(e.bB===null)break b;if(e.bB.cP)break;if
(e.bB.bH!==e)break;}e.bB.bH=null;e.bB=null;}if(e.cP)continue;else break;}continue _;case 3:$z=ZR(a,c,f);if(C()){break _;}d=$z;AMY(d,e);while(true){d=a.dV;c=b+(-1)|0;Em(d,b);g=0;while(g<a.cs.o){Z(a.cs,g);g=g+1|0;}b=c;while(true){b=b+1|0;if(b>=a.dV.o){b=0;if(b>=a.fA.o)return;d=Z(a.fA,b);$p=1;continue _;}e=Z(a.dV,b);if(e.bB!==null){if(!e.bB.cP&&e.bB.bH===e)continue;e.bB.bH=null;e.bB=null;}if(!e.cP){$p=2;continue _;}if(e.cP)break;}c=K(e.d/16.0);f=K(e.e/16.0);if(!C4(a,c,f))continue;else break;}continue _;default:
E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function Xs(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(b.d);K(b.j);d=K(b.e);if(!Ic(a,c-16|0,0,d-16|0,c+16|0,128,d+16|0))return;b.co=b.d;b.b5=b.j;b.cp=b.e;b.P=b.t;b.T=b.I;e=K(b.d/16.0);f=K(b.j/16.0);g=K(b.e/16.0);if(b.bB===null){$p=1;continue _;}$p=2;continue _;case 1:b.el();if(C()){break _;}h=K(b.d/16.0);i=K(b.j/16.0);j=K(b.e/16.0);if(e==h&&f==i&&g
==j){if(b.bH!==null){if(!b.bH.cP&&b.bH.bB===b){k=b.bH;$p=6;continue _;}b.bH.bB=null;b.bH=null;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.co;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.b5;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.cp;if(!(!(isNaN(b.I)?1:0)&&!(!isFinite(b.I)?1:0)))b.I=b.T;if(!(!(isNaN(b.t)?1:0)&&!(!isFinite(b.t)?1:0)))b.t=b.P;return;}if(C4(a,e,g)){$p=3;continue _;}if(!C4(a,h,j)){$p=4;continue _;}$p=5;continue _;case 2:b.BD();if(C()){break _;}h=K(b.d/16.0);i=K(b.j
/16.0);j=K(b.e/16.0);if(e==h&&f==i&&g==j){if(b.bH!==null){if(!b.bH.cP&&b.bH.bB===b){k=b.bH;$p=6;continue _;}b.bH.bB=null;b.bH=null;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.co;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.b5;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.cp;if(!(!(isNaN(b.I)?1:0)&&!(!isFinite(b.I)?1:0)))b.I=b.T;if(!(!(isNaN(b.t)?1:0)&&!(!isFinite(b.t)?1:0)))b.t=b.P;return;}if(C4(a,e,g)){$p=3;continue _;}if(!C4(a,h,j)){$p=4;continue _;}$p=5;continue _;case 3:$z=ZR(a,
e,g);if(C()){break _;}k=$z;RW(k,b,f);if(!C4(a,h,j)){$p=4;continue _;}$p=5;continue _;case 4:b.C0();if(C()){break _;}if(b.bH!==null){if(!b.bH.cP&&b.bH.bB===b){k=b.bH;$p=6;continue _;}b.bH.bB=null;b.bH=null;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.co;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.b5;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.cp;if(!(!(isNaN(b.I)?1:0)&&!(!isFinite(b.I)?1:0)))b.I=b.T;if(!(!(isNaN(b.t)?1:0)&&!(!isFinite(b.t)?1:0)))b.t=b.P;return;case 5:$z=ZR(a,h,j);if
(C()){break _;}k=$z;VN(k,b);if(b.bH!==null){if(!b.bH.cP&&b.bH.bB===b){k=b.bH;$p=6;continue _;}b.bH.bB=null;b.bH=null;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.co;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.b5;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.cp;if(!(!(isNaN(b.I)?1:0)&&!(!isFinite(b.I)?1:0)))b.I=b.T;if(!(!(isNaN(b.t)?1:0)&&!(!isFinite(b.t)?1:0)))b.t=b.P;return;case 6:Xs(a,k);if(C()){break _;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.co;if(!(!(isNaN(b.j)?1:0)
&&!(!isFinite(b.j)?1:0)))b.j=b.b5;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.cp;if(!(!(isNaN(b.I)?1:0)&&!(!isFinite(b.I)?1:0)))b.I=b.T;if(!(!(isNaN(b.t)?1:0)&&!(!isFinite(b.t)?1:0)))b.t=b.P;return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AM4(a,b){var c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=null;$p=1;case 1:$z=ADJ(a,c,b);if(C()){break _;}c=$z;d=0;while(d<c.o){e=Z(c,d);if(!e.cP&&e.mw)return 0;d=d+1|0;}return 1;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AJh(a,b){var c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(b.R);d=K(b.V+1.0);e=K(b.M);f=K(b.U+1.0);g=K(b.S);h=K(b.W+1.0);if(b.R<0.0)c=c+(-1)|0;if(b.M<0.0)e=e+(-1)|0;if(b.S<0.0)g=g+(-1)|0;while(c<d){i=e;while(i<f){j=g;if(j<h){L();k=BeP.data;$p=1;continue _;}i=i+1|0;}c=c+1|0;}return 0;case 1:$z=ACt(a,c,i,j);if(C()){break _;}l=$z;m=
k[l];if(m!==null&&m.b8.nz())return 1;j=j+1|0;a:while(true){if(j<h){L();k=BeP.data;continue _;}i=i+1|0;while(i>=f){c=c+1|0;if(c>=d)break a;i=e;}j=g;}return 0;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AQ$(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(b.R);d=K(b.V+1.0);e=K(b.M);f=K(b.U+1.0);g=K(b.S);h=K(b.W+1.0);while(c<d){i=e;while(i<f){j=g;if(j<h){$p=1;continue _;}i=i+1|0;}c=c+1|0;}return 0;case 1:$z=ACt(a,c,i,j);if(C()){break _;}k=$z;L();if(k!=Bgp.b&&k!=BfZ.b&&k!=BgF.b){j=j+1|0;a:while(true){if(j<h){continue _;}i=i+1|0;while(i>=f){c=c+1|
0;if(c>=d)break a;i=e;}j=g;}return 0;}return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AAq(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=K(b.R);f=K(b.V+1.0);g=K(b.M);h=K(b.U+1.0);i=K(b.S);j=K(b.W+1.0);k=0;l=BY(0.0,0.0,0.0);m=h;while(e<f){n=g;while(n<h){o=i;if(o<j){L();p=BeP.data;$p=1;continue _;}n=n+1|0;}e=e+1|0;}if(HM(l)>0.0){b=CD(l);d.g=d.g+
b.w*0.004;d.i=d.i+b.y*0.004;d.h=d.h+b.v*0.004;}return k;case 1:$z=ACt(a,e,n,o);if(C()){break _;}q=$z;r=p[q];if(r!==null&&r.b8===c){s=n+1|0;$p=2;continue _;}o=o+1|0;a:while(true){if(o<j){L();p=BeP.data;continue _;}n=n+1|0;while(n>=h){e=e+1|0;if(e>=f)break a;n=g;}o=i;}if(HM(l)>0.0){b=CD(l);d.g=d.g+b.w*0.004;d.i=d.i+b.y*0.004;d.h=d.h+b.v*0.004;}return k;case 2:$z=AEI(a,e,n,o);if(C()){break _;}q=$z;if(m>=s-Jr(q)){k=1;$p=3;continue _;}o=o+1|0;b:while(true){if(o<j){L();p=BeP.data;$p=1;continue _;}n=n+1|0;while(n>=
h){e=e+1|0;if(e>=f)break b;n=g;}o=i;}if(HM(l)>0.0){b=CD(l);d.g=d.g+b.w*0.004;d.i=d.i+b.y*0.004;d.h=d.h+b.v*0.004;}return k;case 3:r.qz(a,e,n,o,d,l);if(C()){break _;}o=o+1|0;c:while(true){if(o<j){L();p=BeP.data;$p=1;continue _;}n=n+1|0;while(n>=h){e=e+1|0;if(e>=f)break c;n=g;}o=i;}if(HM(l)>0.0){b=CD(l);d.g=d.g+b.w*0.004;d.i=d.i+b.y*0.004;d.h=d.h+b.v*0.004;}return k;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function AOr(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=K(b.R);e=K(b.V+1.0);f=K(b.M);g=K(b.U+1.0);h=K(b.S);i=K(b.W+1.0);while(d<e){j=f;while(j<g){k=h;if(k<i){L();l=BeP.data;$p=1;continue _;}j=j+1|0;}d=d+1|0;}return 0;case 1:$z=ACt(a,d,j,k);if(C()){break _;}m=$z;n=l[m];if(n!==null&&n.b8===c)return 1;k=k+1|0;a:while(true)
{if(k<i){L();l=BeP.data;continue _;}j=j+1|0;while(j>=g){d=d+1|0;if(d>=e)break a;j=f;}k=h;}return 0;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function X7(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=new WO;$p=1;case 1:AI2(g,a,b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ADy(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=1.0/((c.V-c.R)*2.0+1.0);e=1.0/((c.U-c.M)*2.0+1.0);f=1.0/((c.W-c.S)*2.0+1.0);g=0;h=0;i=0.0;while(i<=1.0){j=0.0;while(j<=1.0){if(0.0<=1.0){k=c.R+(c.V-c.R)*i;l=c.M+(c.U-c.M)*j;m=c.S;n=c.W-c.S;o=0.0;p=BY(k,l,m+n*o);$p=1;continue _;}j=
j+e;}i=i+d;}return g/h;case 1:$z=AJj(a,p,b);if(C()){break _;}p=$z;if(p===null)g=g+1|0;h=h+1|0;q=o+f;a:while(true){if(q<=1.0){k=c.R+(c.V-c.R)*i;l=c.M+(c.U-c.M)*j;m=c.S;n=c.W-c.S;o=q;p=BY(k,l,m+n*o);continue _;}j=j+e;while(j>1.0){i=i+d;if(i>1.0)break a;j=0.0;}q=0.0;}return g/h;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function ABG(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!e)c=c+(-1)|0;if(e==1)c=c+1|0;if(e==2)d=d+(-1)|0;if(e==3)d=d+1|0;if(e==4)b=b+(-1)|0;if(e==5)b=b+1|0;$p=1;case 1:$z=ACt(a,b,c,d);if(C()){break _;}e=$z;L();if(e!=Bgp.b)return;Ew(a,b+0.5,c+0.5,d+0.5,B(215),0.5,2.5999999046325684+(N(a.q)-N(a.q))*0.800000011920929);e=0;$p=2;case 2:APu(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AXM(a,b){return null;}
function AN7(a){var b;b=new U;X(b);return V(Be(I(b,B(367)),a.dV.o));}
function AXW(a){return a.bi;}
function ANv(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=b>>4;f=d>>4;$p=1;case 1:$z=ZR(a,e,f);if(C()){break _;}g=$z;if(g===null)return null;b=b&15;d=d&15;$p=2;case 2:$z=ANm(g,b,c,d);if(C()){break _;}g=$z;return g;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AFT(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=b>>4;g=d>>4;$p=1;case 1:$z=ZR(a,f,g);if(C()){break _;}h=$z;if(h!==null)AJi(h,b&15,c,d&15,e);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AFK(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=b>>4;f=d>>4;$p=1;case 1:$z=ZR(a,e,f);if(C()){break _;}g=$z;if(g!==null)ADY(g,b&15,c,d&15);return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AAz(a,b,c,d){var e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:L();e=BeP.data;$p=1;case 1:$z=ACt(a,b,c,d);if(C()){break _;}b=$z;f=e[b];return f!==null?f.d1():0;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AJf(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=1;$p=1;case 1:ABB(a,c,b);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,$p);}
function AIl(a){var b,c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=100000;if(a.fC.o<=0)return 0;b=b+(-1)|0;if(b<=0)return 1;c=Em(a.fC,a.fC.o-1|0);$p=1;case 1:AOl(c,a);if(C()){break _;}if(a.fC.o<=0)return 0;b=b+(-1)|0;if(b<=0)return 1;c=Em(a.fC,a.fC.o-1|0);continue _;default:E$();}}C3().s(a,b,c,$p);}
function Y5(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=a.fC.o;if(4<=i)i=4;j=0;while(true){if(j>=i){k=a.fC;l=new VH;l.cq=b;l.lX=c;l.fU=d;l.fV=e;l.fv=f;l.fa=g;l.eJ=h;S(k,l);if(a.fC.o>100000&&a.fC.o>50000){$p=1;continue _;}return;}k=Z(a.fC,(a.fC.o-j|0)-1|0);if(k.cq===b&&ALz(k,c,d,e,f,g,h))break;j=j+1|0;}return;case 1:AIl(a);if(C()){break _;}if
(a.fC.o<=50000)return;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Q4(a){var b;b=Oj(a,1.0);if(b!=a.gg)a.gg=b;}
function X1(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:To(a.iJ);if(!Q1(a.dV,a.bi)&&a.bi!==null){Cg(DR(),B(368));b=a.bi;$p=1;continue _;}a:{c=Oj(a,1.0);if(c!=a.gg){a.gg=c;d=0;while(true){if(d>=a.cs.o)break a;Vx(Z(a.cs,d));d=d+1|0;}}}a.ea=Long_add(a.ea,Long_fromInt(1));if(Long_ne(Long_rem(a.ea,Long_fromInt(20)),Long_ZERO)){c=0;$p=2;continue _;}c
=0;b=null;$p=4;continue _;case 1:AOf(a,b);if(C()){break _;}b:{c=Oj(a,1.0);if(c!=a.gg){a.gg=c;d=0;while(true){if(d>=a.cs.o)break b;Vx(Z(a.cs,d));d=d+1|0;}}}a.ea=Long_add(a.ea,Long_fromInt(1));if(Long_ne(Long_rem(a.ea,Long_fromInt(20)),Long_ZERO)){c=0;$p=2;continue _;}c=0;b=null;$p=4;continue _;case 2:ABn(a,c);if(C()){break _;}d=K(a.bi.d);e=K(a.bi.e);b=new Iq;f=d-64|0;g=0;h=e-64|0;i=d+64|0;j=128;c=e+64|0;$p=3;case 3:AEt(b,a,f,g,h,i,j,c);if(C()){break _;}f=0;if(f>=8000)return;a.hS=(a.hS*3|0)+a.r8|0;g=a.hS>>2;h
=((g&127)-64|0)+d|0;i=((g>>8&127)-64|0)+e|0;j=g>>16&127;$p=5;continue _;case 4:ABB(a,c,b);if(C()){break _;}c=0;$p=2;continue _;case 5:$z=Hw(b,h,j,i);if(C()){break _;}k=$z;L();if(Bgz.data[k]){l=BeP.data[k];m=a.q;$p=6;continue _;}f=f+1|0;if(f>=8000)return;a.hS=(a.hS*3|0)+a.r8|0;g=a.hS>>2;h=((g&127)-64|0)+d|0;i=((g>>8&127)-64|0)+e|0;j=g>>16&127;continue _;case 6:l.e5(a,h,j,i,m);if(C()){break _;}f=f+1|0;if(f>=8000)return;a.hS=(a.hS*3|0)+a.r8|0;g=a.hS>>2;h=((g&127)-64|0)+d|0;i=((g>>8&127)-64|0)+e|0;j=g>>16&127;$p
=5;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ABn(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=Jt(a.gH);if(c!=IJ(a.kN)){d=new D1;Bl(d,B(369));M(d);}if(c>500)c=500;e=0;a:{while(true){if(e>=c)break a;f=MY(a.gH);if(!b&&Long_gt(f.je,a.ea))break;MB(a.gH,f);KU(a.kN,f);if(Ic(a,f.fE-8|0,f.fn-8|0,f.fI-8|0,f.fE+8|0,f.fn+8|0,f.fI+8|0)){g=f.fE;h=f.fn;i=f.fI;$p=1;continue _;}e=e+1|0;}}return !Jt(a.gH)?0:1;case 1:$z=ACt(a,g,
h,i);if(C()){break _;}g=$z;if(g==f.p6&&g>0){L();d=BeP.data[g];g=f.fE;h=f.fn;i=f.fI;f=a.q;$p=2;continue _;}b:{while(true){e=e+1|0;if(e>=c)break b;f=MY(a.gH);if(!b&&Long_gt(f.je,a.ea))break;MB(a.gH,f);KU(a.kN,f);if(!Ic(a,f.fE-8|0,f.fn-8|0,f.fI-8|0,f.fE+8|0,f.fn+8|0,f.fI+8|0))continue;else{g=f.fE;h=f.fn;i=f.fI;continue _;}}}return !Jt(a.gH)?0:1;case 2:d.e5(a,g,h,i,f);if(C()){break _;}c:{while(true){e=e+1|0;if(e>=c)break c;f=MY(a.gH);if(!b&&Long_gt(f.je,a.ea))break;MB(a.gH,f);KU(a.kN,f);if(!Ic(a,f.fE-8|0,f.fn-8
|0,f.fI-8|0,f.fE+8|0,f.fn+8|0,f.fI+8|0))continue;else{g=f.fE;h=f.fn;i=f.fI;$p=1;continue _;}}}return !Jt(a.gH)?0:1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AE9(a,b,c,d){var e,f,g,h,i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=16;f=new Dz;g=0;if(g>=1000)return;h=(b+E(a.q,e)|0)-E(a.q,e)|0;i=(c+E(a.q,e)|0)-E(a.q,e)|0;j=(d+E(a.q,e)|0)-E(a.q,e)|0;$p=1;case 1:$z=ACt(a,h,i,j);if(C()){break _;}k=$z;if(k>0){L();l=BeP.data[k];$p=2;continue _;}g=g+1|0;if(g>=1000)return;h=(b+E(a.q,e)|0)-E(a.q,e)|0;i=(c+E(a.q,e)|0)-E(a.q,
e)|0;j=(d+E(a.q,e)|0)-E(a.q,e)|0;continue _;case 2:l.kL(a,h,i,j,f);if(C()){break _;}g=g+1|0;if(g>=1000)return;h=(b+E(a.q,e)|0)-E(a.q,e)|0;i=(c+E(a.q,e)|0)-E(a.q,e)|0;j=(d+E(a.q,e)|0)-E(a.q,e)|0;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ADJ(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:DF(a.qe);d=K((c.R-2.0)/16.0);e=K((c.V+2.0)/16.0);f=K((c.S-2.0)/16.0);g=K((c.W+2.0)/16.0);while(d<=e){h=f;while(h<=g){if(C4(a,d,h)){$p=1;continue _;}h=h+1|0;}d=d+1|0;}return a.qe;case 1:$z=ZR(a,d,h);if(C()){break _;}i=$z;AJZ(i,b,c,a.qe);a:while(true){h=h+1|0;while(h>g){d=d+1|0;if(d>e)break a;h=f;}if(!C4(a,d,h))continue;else
{continue _;}}return a.qe;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ANc(a,b,c){var d,e,f,g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=K((c.R-2.0)/16.0);e=K((c.V+2.0)/16.0);f=K((c.S-2.0)/16.0);g=K((c.W+2.0)/16.0);h=Ci();while(d<=e){i=f;while(i<=g){if(C4(a,d,i)){$p=1;continue _;}i=i+1|0;}d=d+1|0;}return h;case 1:$z=ZR(a,d,i);if(C()){break _;}j=$z;AMh(j,b,c,h);a:while(true){i=i+1|0;while(i>g){d=d+1|0;if(d>e)break a;i=f;}if(!C4(a,d,i))continue;else
{continue _;}}return h;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AWG(a){return a.dV;}
function AGt(a,b,c,d){var e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!EH(a,b,c,d))return;$p=1;case 1:$z=XS(a,b,d);if(C()){break _;}e=$z;SE(e);return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function Yp(a,b){var c,d;c=0;d=0;while(d<a.dV.o){if(P1(b,Dl(Z(a.dV,d))))c=c+1|0;d=d+1|0;}return c;}
function AQc(a,b){var c,d;DC(a.dV,b);c=0;while(c<a.cs.o){Z(a.cs,c);d=0;while(d<b.o){Z(b,d);d=d+1|0;}c=c+1|0;}}
function AQ2(a,b){DC(a.lZ,b);}
function V_(a){while(To(a.iJ)){}}
function AH$(a,b,c,d,e,f){var g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACt(a,c,d,e);if(C()){break _;}g=$z;L();h=BeP.data[g];i=BeP.data[b];$p=2;case 2:$z=i.hq(a,c,d,e);if(C()){break _;}j=$z;if(f)j=null;if(!(b>0&&h===null)&&h!==BfY&&h!==BgE&&h!==BfZ&&h!==BgF&&h!==Bgp)return 0;if(j===null){$p=3;continue _;}$p=4;continue _;case 3:$z=i.fS(a,c,d,e);if(C()){break _;}b=$z;return !b
?0:1;case 4:$z=AM4(a,j);if(C()){break _;}b=$z;if(!b)return 0;$p=3;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function ARU(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=K(b.d);f=K(b.j);g=K(b.e);h=d+32.0|0;i=e-h|0;j=f-h|0;k=g-h|0;l=e+h|0;m=f+h|0;n=g+h|0;o=new Iq;$p=1;case 1:AEt(o,a,i,j,k,l,m,n);if(C()){break _;}return APo(A2F(o),b,c,d);default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AJt(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=K(b.d);h=K(b.j);i=K(b.e);j=f+32.0|0;k=g-j|0;l=h-j|0;m=i-j|0;n=g+j|0;o=h+j|0;p=i+j|0;q=new Iq;$p=1;case 1:AEt(q,a,k,l,m,n,o,p);if(C()){break _;}return AF_(A2F(q),b,c,d,e,f);default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function XD(){var b,c;Bkt=$rt_createFloatArray(16);b=0;while(b<=15){c=1.0-b/15.0;Bkt.data[b]=(1.0-c)/(c*3.0+1.0)*0.949999988079071+0.05000000074505806;b=b+1|0;}}
function L0(){var a=this;D.call(a);a.uh=null;a.zf=null;a.lj=0;a.Ep=0.0;a.Eo=0.0;a.EP=0;a.l3=0;a.mq=0;a.no=0;a.p$=0;a.rJ=0;a.zE=0;a.Ab=0.0;a.zG=0.0;a.zc=0.0;a.ot=0;}
var BeL=null;function BA(){BA=Bt(L0);A2n();}
function Br(a){var b,c,d,e,f;if(!a.ot)return 0;a.ot=0;if(a.lj>0){if(a.mq)WR(32888);if(a.l3)WR(32886);b=a.zE;c=a.lj;d=a.uh.buffer;e=a.lj*7|0;ALp(b,0,c,new Int32Array(d,0,e));if(a.mq)Th(32888);if(a.l3)Th(32886);}f=a.no*4|0;Wv(a);return f;}
function Wv(a){a.lj=0;a.no=0;a.p$=0;}
function Bz(a){Gg(a,7);}
function Gg(a,b){if(a.ot)Br(a);a.ot=1;Wv(a);a.zE=b;a.l3=0;a.mq=0;a.rJ=0;}
function AJv(a,b,c){a.mq=1;a.Ep=b;a.Eo=c;}
function Cq(a,b,c,d){O9(a,b*255.0|0,c*255.0|0,d*255.0|0);}
function Gt(a,b,c,d,e){Qg(a,b*255.0|0,c*255.0|0,d*255.0|0,e*255.0|0);}
function O9(a,b,c,d){Qg(a,b,c,d,255);}
function Qg(a,b,c,d,e){if(!a.rJ){if(b>255)b=255;if(c>255)c=255;if(d>255)d=255;if(e>255)e=255;if(b<0)b=0;if(c<0)c=0;if(d<0)d=0;if(e<0)e=0;a.l3=1;a.EP=e<<24|d<<16|c<<8|b;}}
function G(a,b,c,d,e,f){AJv(a,e,f);Bf(a,b,c,d);}
function Bf(a,b,c,d){var e,f,g,h,i;if(a.p$>65534)return;a.p$=a.p$+1|0;a.lj=a.lj+1|0;e=a.no;f=a.uh;g=a.zf;h=e+0|0;i=b+a.Ab;g[h]=i;h=e+1|0;i=c+a.zG;g[h]=i;h=e+2|0;i=d+a.zc;g[h]=i;if(a.mq){h=e+3|0;i=a.Ep;g[h]=i;h=e+4|0;i=a.Eo;g[h]=i;}if(a.l3){h=e+5|0;e=a.EP;f[h]=e;}a.no=a.no+7|0;}
function ER(a,b){O9(a,b>>16&255,b>>8&255,b&255);}
function ADl(a){a.rJ=1;}
function Dc(a,b,c,d){Cj(b,c,d);}
function E_(a,b,c,d){a.Ab=b;a.zG=c;a.zc=d;}
function A2n(){var b,c;b=new L0;BA();b.lj=0;b.l3=0;b.mq=0;b.no=0;b.p$=0;b.rJ=0;b.ot=0;c=new ArrayBuffer(2097152);b.uh=new Int32Array(c);b.zf=new Float32Array(c);BeL=b;}
function ANd(){var a=this;D.call(a);a.fK=0;a.fG=0;}
function FG(a,b){var c=new ANd();A0a(c,a,b);return c;}
function A0a(a,b,c){var d,e;a.fK=b;a.fG=c;d=1;while(true){c=a.fK;e=d+1|0;if((c/e|0)<320)break;if((a.fG/e|0)<240)break;d=e;}a.fK=a.fK/d|0;a.fG=a.fG/d|0;}
function AEo(a){return a.fK;}
function Zb(a){return a.fG;}
function Gb(){D.call(this);this.mM=0.0;}
function Bkz(){var a=new Gb();M_(a);return a;}
function M_(a){a.mM=0.0;}
function KJ(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s;h=(f>>24&255)/255.0;i=(f>>16&255)/255.0;j=(f>>8&255)/255.0;k=(f&255)/255.0;l=(g>>24&255)/255.0;m=(g>>16&255)/255.0;n=(g>>8&255)/255.0;o=(g&255)/255.0;Bc(3553);Ba(3042);Bc(3008);Df(770,771);BA();p=BeL;Bz(p);Gt(p,i,j,k,h);q=d;r=c;Bf(p,q,r,0.0);s=b;Bf(p,s,r,0.0);Gt(p,m,n,o,l);r=e;Bf(p,s,r,0.0);Bf(p,q,r,0.0);Br(p);Bc(3042);Ba(3008);Ba(3553);}
function DD(a,b,c,d,e,f){Cy(b,c,d-(Dw(b,c)/2|0)|0,e,f);}
function Hq(a,b,c,d,e,f){Cy(b,c,d,e,f);}
function CH(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o;BA();h=BeL;Bz(h);i=b+0|0;j=c+g|0;k=a.mM;l=(d+0|0)*0.00390625;m=(e+g|0)*0.00390625;G(h,i,j,k,l,m);n=b+f|0;o=a.mM;k=(d+f|0)*0.00390625;G(h,n,j,o,k,m);m=c+0|0;o=a.mM;j=(e+0|0)*0.00390625;G(h,n,m,o,k,j);G(h,i,m,a.mM,l,j);Br(h);}
function CS(){var a=this;Gb.call(a);a.K=null;a.bm=0;a.bC=0;a.bG=null;a.pN=0;a.bY=null;}
function BkA(){var a=new CS();D0(a);return a;}
function D0(a){M_(a);a.bG=Ci();a.pN=0;}
function AFC(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=0;if(e>=a.bG.o)return;f=Z(a.bG,e);g=a.K;$p=1;case 1:ACQ(f,g,b,c);if(C()){break _;}e=e+1|0;if(e>=a.bG.o)return;f=Z(a.bG,e);g=a.K;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function YK(a,b,c){var d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!=1)return;d=a.K;e=null;$p=1;case 1:ADT(d,e);if(C()){break _;}d=a.K;$p=2;case 2:AFi(d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function Zk(a,b,c,d){var e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!d){e=0;while(true){if(e>=a.bG.o)break a;f=Z(a.bG,e);if(RY(f,b,c)){$p=1;continue _;}e=e+1|0;}}}return;case 1:a.iz(f);if(C()){break _;}while(true){e=e+1|0;if(e>=a.bG.o)break;f=Z(a.bG,e);if(!RY(f,b,c))continue;else{continue _;}}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function A2w(a,b,c,d){return;}
function AMQ(a,b){return;}
function AP7(a,b,c,d){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.K=b;a.bY=b.e7;a.bm=c;a.bC=d;$p=1;case 1:a.hR();if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function AP5(a){return;}
function AG6(a){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(Fw()){$p=1;continue _;}if(!DS())return;$p=2;continue _;case 1:Zw(a);if(C()){break _;}if(Fw()){continue _;}if(!DS())return;$p=2;case 2:ASx(a);if(C()){break _;}if(!DS())return;continue _;default:E$();}}C3().s(a,$p);}
function Zw(a){var b,c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!Cx()){a.B_(Bj(ARV(),a.bm)/a.K.cm|0,(a.bC-(Bj(XO(),a.bC)/a.K.bF|0)|0)-1|0,CV());return;}b=Bj(ARV(),a.bm)/a.K.cm|0;c=(a.bC-(Bj(XO(),a.bC)/a.K.bF|0)|0)-1|0;d=CV();$p=1;case 1:a.IY(b,c,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function ASx(a){var b,c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!CU())return;Bd();if(Bec===null)b=0;else{c=$rt_str(Bec.key);b=Bec===null?32:Bh(c)>1?0:Y(c,0);}d=Bg();$p=1;case 1:a.o8(b,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function A3f(a){return;}
function AH8(a){return;}
function ABd(a){var b,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;$p=1;case 1:AIE(a,b);if(C()){break _;}return;default:E$();}}C3().s(a,b,$p);}
function AIE(a,b){var c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.K.z!==null){KJ(a,0,0,a.bm,a.bC,1610941696,(-1607454656));return;}Bc(2896);Bc(2912);BA();c=BeL;d=3553;e=a.K.bo;f=B(165);$p=1;case 1:$z=AHt(e,f);if(C()){break _;}g=$z;Cp(d,g);BU(1.0,1.0,1.0,1.0);Bz(c);ER(c,4210752);h=a.bC;i=a.bC/32.0;j=b;G(c,0.0,h,0.0,0.0,i+j);G(c,a.bm,a.bC,
0.0,a.bm/32.0,a.bC/32.0+j);k=a.bm;l=a.bm/32.0;m=0+b|0;G(c,k,0.0,0.0,l,m);G(c,0.0,0.0,0.0,0.0,m);Br(c);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AVp(a){return 1;}
function AFd(){var a=this;D.call(a);a.k5=null;a.jt=0;a.id=0;a.vy=0;}
function A_y(a){var b=new AFd();A4Q(b,a);return b;}
function A4Q(a,b){a.k5=J(D,b);a.jt=b;a.id=0;a.vy=0;}
function SX(a,b){var c,d;c=a.id;while(true){a.id=a.id+1|0;if(a.id>=a.jt)a.id=0;if(a.id==c){c=a.jt;a.jt=a.jt+(a.jt/2|0)|0;d=a.k5;a.k5=J(D,a.jt);Di(d,0,a.k5,0,c);return SX(a,b);}if(a.k5.data[a.id]!==null)continue;else break;}a.k5.data[a.id]=b;a.vy=a.vy+1|0;return a.id;}
function ANI(a,b){if(b<a.jt&&b>=0)return a.k5.data[b];return null;}
function Mj(){D.call(this);}
function Er(){var a=this;Mj.call(a);a.eq=0.0;a.eo=0.0;a.ep=0.0;a.en=0.0;a.et=0.0;a.eu=0.0;a.er=0.0;a.es=0.0;a.ey=0.0;a.ew=0.0;a.ex=0.0;a.ev=0.0;a.gQ=0.0;a.gR=0.0;a.gO=0.0;a.gP=0.0;}
function M3(){var a=new Er();A44(a);return a;}
function A44(a){Fn(a);}
function Fn(a){a.eq=1.0;a.eo=0.0;a.ep=0.0;a.en=0.0;a.et=0.0;a.eu=1.0;a.er=0.0;a.es=0.0;a.ey=0.0;a.ew=0.0;a.ex=1.0;a.ev=0.0;a.gQ=0.0;a.gR=0.0;a.gO=0.0;a.gP=1.0;return a;}
function Ks(a){a.eq=0.0;a.eo=0.0;a.ep=0.0;a.en=0.0;a.et=0.0;a.eu=0.0;a.er=0.0;a.es=0.0;a.ey=0.0;a.ew=0.0;a.ex=0.0;a.ev=0.0;a.gQ=0.0;a.gR=0.0;a.gO=0.0;a.gP=0.0;return a;}
function GO(a,b){a.eq=b.eq;a.eo=b.eo;a.ep=b.ep;a.en=b.en;a.et=b.et;a.eu=b.eu;a.er=b.er;a.es=b.es;a.ey=b.ey;a.ew=b.ew;a.ex=b.ex;a.ev=b.ev;a.gQ=b.gQ;a.gR=b.gR;a.gO=b.gO;a.gP=b.gP;return a;}
function TM(a,b){CJ(b,a.eq);CJ(b,a.eo);CJ(b,a.ep);CJ(b,a.en);CJ(b,a.et);CJ(b,a.eu);CJ(b,a.er);CJ(b,a.es);CJ(b,a.ey);CJ(b,a.ew);CJ(b,a.ex);CJ(b,a.ev);CJ(b,a.gQ);CJ(b,a.gR);CJ(b,a.gO);CJ(b,a.gP);return a;}
function NP(a,b){b=b.data;b[0]=a.eq;b[1]=a.eo;b[2]=a.ep;b[3]=a.en;b[4]=a.et;b[5]=a.eu;b[6]=a.er;b[7]=a.es;b[8]=a.ey;b[9]=a.ew;b[10]=a.ex;b[11]=a.ev;b[12]=a.gQ;b[13]=a.gR;b[14]=a.gO;b[15]=a.gP;return a;}
function A$u(a,b){return U2(a,b,a);}
function ZA(a,b){a.eq=a.eq*b.fw;a.eo=a.eo*b.fw;a.ep=a.ep*b.fw;a.en=a.en*b.fw;a.et=a.et*b.fy;a.eu=a.eu*b.fy;a.er=a.er*b.fy;a.es=a.es*b.fy;a.ey=a.ey*b.fx;a.ew=a.ew*b.fx;a.ex=a.ex*b.fx;a.ev=a.ev*b.fx;return a;}
function ATN(a,b,c){return WV(a,b,c,a);}
function WV(a,b,c,d){return A6A(b,c,a,d);}
function A6A(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;if(e===null)e=M3();f=b;g=GA(f);h=Gn(f);i=1.0-g;j=c.fw*c.fy;k=c.fy*c.fx;l=c.fw*c.fx;m=c.fw*h;n=c.fy*h;o=c.fx*h;p=c.fw*c.fw*i+g;b=j*i;q=b+o;r=l*i;s=r-n;t=b-o;u=c.fy*c.fy*i+g;b=k*i;v=b+m;w=r+n;x=b-m;y=c.fx*c.fx*i+g;z=d.eq*p+d.et*q+d.ey*s;ba=d.eo*p+d.eu*q+d.ew*s;bb=d.ep*p+d.er*q+d.ex*s;bc=d.en*p+d.es*q+d.ev*s;bd=d.eq*t+d.et*u+d.ey*v;be=d.eo*t+d.eu*u+d.ew*v;bf=d.ep*t+d.er*u+d.ex*v;r=d.en*t+d.es*u+d.ev*v;e.ey=d.eq*w+d.et*x+d.ey*
y;e.ew=d.eo*w+d.eu*x+d.ew*y;e.ex=d.ep*w+d.er*x+d.ex*y;e.ev=d.en*w+d.es*x+d.ev*y;e.eq=z;e.eo=ba;e.ep=bb;e.en=bc;e.et=bd;e.eu=be;e.er=bf;e.es=r;return e;}
function U2(a,b,c){if(c===null)c=M3();c.gQ=c.gQ+a.eq*b.fw+a.et*b.fy+a.ey*b.fx;c.gR=c.gR+a.eo*b.fw+a.eu*b.fy+a.ew*b.fx;c.gO=c.gO+a.ep*b.fw+a.er*b.fy+a.ex*b.fx;c.gP=c.gP+a.en*b.fw+a.es*b.fy+a.ev*b.fx;return c;}
function Ls(a,b){var c;a:{if(b instanceof Er){b:{c:{b=b;if(a.eq!==b.eq)break c;if(a.eo!==b.eo)break c;if(a.ep!==b.ep)break c;if(a.en!==b.en)break c;if(a.et!==b.et)break c;if(a.eu!==b.eu)break c;if(a.er!==b.er)break c;if(a.es!==b.es)break c;if(a.ey!==b.ey)break c;if(a.ew!==b.ew)break c;if(a.ex!==b.ex)break c;if(a.ev!==b.ev)break c;if(a.gQ!==b.gQ)break c;if(a.gR!==b.gR)break c;if(a.gO!==b.gO)break c;if(a.gP===b.gP){c=1;break b;}}c=0;}if(c){c=1;break a;}}c=0;}return c;}
function N6(){}
function I0(){D.call(this);}
function Wd(){}
function NT(){}
function RV(){}
function Mc(){}
function UW(){var a=this;I0.call(a);a.fw=0.0;a.fy=0.0;a.fx=0.0;}
function BkB(){var a=new UW();A$a(a);return a;}
function A$a(a){return;}
function L1(a,b,c,d){a.fw=b;a.fy=c;a.fx=d;}
function Wb(){}
function RP(){}
function G6(){var a=this;I0.call(a);a.k9=0.0;a.k$=0.0;a.k8=0.0;a.pa=0.0;}
function A2X(){var a=new G6();AZN(a);return a;}
function AZN(a){return;}
function Vz(a,b){a.k9=b.k9;a.k$=b.k$;a.k8=b.k8;a.pa=b.pa;return a;}
function A_v(a){return a.k9;}
function ATh(a){return a.k$;}
function AZX(a){return a.k8;}
function A5y(a){return a.pa;}
function S3(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(Dl(a)!==Dl(b))return 0;c=b;if(a.k9===c.k9&&a.k$===c.k$&&a.k8===c.k8&&a.pa===c.pa)return 1;return 0;}
function SS(){var a=this;D.call(a);a.B4=null;a.B3=null;}
function AIB(a){var b,c;b=a.B4;c=a.B3;Fr(b);CM(c,null);}
function AOW(){Fg.call(this);}
function A42(a){var b=new AOW();AYw(b,a);return b;}
function AYw(a,b){WP(a,b);}
function H1(){}
function Um(){}
function ACW(){var a=this;D.call(a);a.fM=null;a.iw=null;a.kx=null;a.p0=0;a.q_=0;a.ih=null;}
function AJx(a,b,c,d){var e=new ACW();AUi(e,a,b,c,d);return e;}
function AUi(a,b,c,d,e){a.ih=b;a.q_=a.ih.d3;a.fM=c;a.iw=d;a.p0=e;}
function GJ(a){return a.fM===null?0:1;}
function GB(a){var b;Ro(a);if(a.fM===null){b=new JX;O(b);M(b);}b=a.fM.ze;a.kx=a.fM;a.iw=a.fM;a.fM=a.fM.ho;a.p0=a.p0+1|0;return b;}
function AHf(a){var b,c;if(a.kx===null){b=new D1;O(b);M(b);}b=a.ih;c=a.kx;if(c.iu===null)b.pz=c.ho;else c.iu.ho=c.ho;if(c.ho===null)b.qg=c.iu;else c.ho.iu=c.iu;b.hu=b.hu-1|0;b.d3=b.d3+1|0;if(a.kx===a.iw){a.iw=!GJ(a)?null:a.fM.iu;a.p0=a.p0-1|0;}else if(a.kx===a.fM)a.fM=!ZO(a)?null:a.iw.ho;a.q_=a.ih.d3;a.kx=null;}
function ZO(a){return a.iw===null?0:1;}
function ABp(a,b){var c;Ro(a);c=new Ry;c.ze=b;c.iu=a.iw;c.ho=a.fM;if(a.iw!==null)a.iw.ho=c;else a.ih.pz=c;if(a.fM!==null)a.fM.iu=c;else a.ih.qg=c;a.iw=c;b=a.ih;b.hu=b.hu+1|0;b=a.ih;b.d3=b.d3+1|0;a.q_=a.ih.d3;a.kx=null;}
function Ro(a){var b;if(a.q_>=a.ih.d3)return;b=new KQ;O(b);M(b);}
function Ry(){var a=this;D.call(a);a.ze=null;a.ho=null;a.iu=null;}
function BkC(){var a=new Ry();A0K(a);return a;}
function A0K(a){return;}
function KG(){var a=this;D.call(a);a.zb=null;a.ku=null;a.g$=null;a.lS=null;a.B$=null;a.wA=null;a.sN=0;a.DS=0;}
var BkD=0;var BeK=null;function AHt(a,b){var c,d,e,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=CP(BeK,b);if(c!==null)return c.f5;try{AFe(a.ku);WQ(a.ku);d=QV(a.ku,0);if(!Iw(b,B(370))){e=Kd(b);$p=1;continue _;}a.sN=1;e=Kd(Jp(b,7));$p=2;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof B1){}else{throw $$e;}}b=new B6;Bl(b,B(371));M(b);case 1:a:{try{$z=Y9(a,e);if(C()){break _;}c=$z;LK(a,c,d);BkD=0;Q9(BeK,b,CX(d));}catch($$e){$$je
=Bi($$e);if($$je instanceof B1){break a;}else{throw $$e;}}return d;}b=new B6;Bl(b,B(371));M(b);case 2:a:{try{$z=Y9(a,e);if(C()){break _;}c=$z;LK(a,c,d);a.sN=0;Q9(BeK,b,CX(d));}catch($$e){$$je=Bi($$e);if($$je instanceof B1){break a;}else{throw $$e;}}return d;}b=new B6;Bl(b,B(371));M(b);default:E$();}}C3().s(a,b,c,d,e,$p);}
function AHA(a,b){var c;Ez(a.ku);WQ(a.ku);c=QV(a.ku,0);LK(a,b,c);BR(a.zb,CX(c),b);return c;}
function LK(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;Ea(a,c);if(!BkD){Ei(3553,10241,9728);Ei(3553,10240,9728);}else{Ei(3553,10241,9986);Ei(3553,10240,9728);Ei(3553,33085,4);}if(a.DS){Ei(3553,10241,9729);Ei(3553,10240,9729);}if(!a.sN){Ei(3553,10242,10497);Ei(3553,10243,10497);}else{Ei(3553,10242,10496);Ei(3553,10243,10496);}d=b.xk;e=b.Dl;f=b.tV;g=$rt_createByteArray(Bj(d,e)*4|0);h=g.data;i=0;while(true){j=f.data;if(i>=j.length)break;k=j[i]>>24&255;l=j[i]>>16&255;m=j[i]>>8&255;n=j[i]>>0&255;if
(a.wA!==null&&a.wA.ez){o=l*30|0;l=((o+(m*59|0)|0)+(n*11|0)|0)/100|0;m=(o+(m*70|0)|0)/100|0;n=(o+(n*70|0)|0)/100|0;}c=i*4|0;h[c+0|0]=l<<24>>24;h[c+1|0]=m<<24>>24;h[c+2|0]=n<<24>>24;h[c+3|0]=k<<24>>24;i=i+1|0;}a:{Ez(a.g$);UG(a.g$,g);b=a.g$;EN(b,0);Nj(b,h.length);Ss(3553,0,6408,d,e,0,6408,5121,a.g$);if(BkD){p=1;while(true){if(p>4)break a;o=d>>(p-1|0);q=d>>p;r=e>>p;Ez(a.lS);s=0;while(s<q){t=0;while(t<r){b=a.g$;c=s*2|0;i=c+0|0;k=t*2|0;n=Bj(k+0|0,o);u=KO(b,(i+n|0)*4|0);b=a.g$;c=c+1|0;v=KO(b,(c+n|0)*4|0);b=a.g$;k=
Bj(k+1|0,o);w=KO(b,(c+k|0)*4|0);x=KO(a.g$,(i+k|0)*4|0);y=Le(a,Le(a,u,v),Le(a,w,x));AA3(a.lS,(s+Bj(t,q)|0)*4|0,y);t=t+1|0;}s=s+1|0;}Ss(3553,p,6408,q,r,0,6408,5121,a.lS);z=a.g$;a.g$=a.lS;a.lS=z;p=p+1|0;}}}}
function AD2(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=B(372);$p=1;case 1:$z=AHt(a,b);if(C()){break _;}d=$z;return d;default:E$();}}C3().s(a,b,c,d,$p);}
function G4(a,b){S(a.B$,b);b.o7();}
function Le(a,b,c){return ((((b&(-16777216))>>24&255)+((c&(-16777216))>>24&255)|0)>>1<<24)+(((b&16711422)+(c&16711422)|0)>>1)|0;}
function Y9(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AES(b);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,$p);}
function Ea(a,b){if(b<0)return;Cp(3553,b);}
function ADB(){BkD=0;}
function Wc(){var a=this;D.call(a);a.r6=null;a.xj=0;a.te=0;}
function BkE(a,b,c){var d=new Wc();AOF(d,a,b,c);return d;}
function AOF(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.r6=$rt_createIntArray(256);a.xj=0;e=Kd(c);$p=1;case 1:$z=AES(e);if(C()){break _;}f
=$z;g=f.xk;e=f.tV;h=0;while(h<256){i=h%16|0;j=h/16|0;k=7;i=i*8|0;l=j*8|0;a:{while(k>=0){m=i+k|0;n=1;o=0;while(o<8&&n){if((e.data[m+Bj(l+o|0,g)|0]&255)>0)n=0;o=o+1|0;}if(!n)break a;k=k+(-1)|0;}}if(h==32)k=2;a.r6.data[h]=k+2|0;h=h+1|0;}a.xj=AHA(d,f);a.te=IW(288);BA();p=BeL;q=0;while(q<256){FF(a.te+q|0,4864);Bz(p);r=(q%16|0)*8|0;s=(q/16|0)*8|0;t=r;u=t/128.0+0.0;v=s;w=(v+7.989999771118164)/128.0+0.0;G(p,0.0,7.989999771118164,0.0,u,w);x=(t+7.989999771118164)/128.0+0.0;G(p,7.989999771118164,7.989999771118164,0.0,
x,w);y=v/128.0+0.0;G(p,7.989999771118164,0.0,0.0,x,y);G(p,0.0,0.0,0.0,u,y);Br(p);Ed();q=q+1|0;}l=0;while(l<32){z=(l>>3&1)*85|0;ba=((l>>2&1)*170|0)+z|0;bb=((l>>1&1)*170|0)+z|0;bc=((l>>0&1)*170|0)+z|0;if(l==6)ba=ba+85|0;bd=l<16?0:1;if(b.ez){g=ba*30|0;ba=((g+(bb*59|0)|0)+(bc*11|0)|0)/100|0;bb=(g+(bb*70|0)|0)/100|0;bc=(g+(bc*70|0)|0)/100|0;}if(bd){ba=ba/4|0;bb=bb/4|0;bc=bc/4|0;}FF((a.te+256|0)+l|0,4864);F2(ba/255.0,bb/255.0,bc/255.0);Ed();l=l+1|0;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,
s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function Cy(a,b,c,d,e){SB(a,b,c+1|0,d+1|0,e,1);EC(a,b,c,d,e);}
function EC(a,b,c,d,e){SB(a,b,c,d,e,0);}
function SB(a,b,c,d,e,f){var g,h,i,j,k,l,m;if(b===null)return;if(f)e=((e&16579836)>>2)+(e&(-16777216))|0;Cp(3553,a.xj);g=(e>>16&255)/255.0;h=(e>>8&255)/255.0;i=(e&255)/255.0;j=(e>>24&255)/255.0;if(j===0.0)j=1.0;BU(g,h,i,j);B3();Bw(c,d,0.0);k=0;while(k<Bh(b)){c=k;while(true){d=Bh(b);k=c+1|0;if(d<=k)break;if(Y(b,c)!=167)break;l=Ux(B(373),Y(AKi(b),k));c=c+2|0;}if(c<Bh(b)){m=Vd(Y(b,c));if(m>=0){FP((a.te+m|0)+32|0);Bw(a.r6.data[m+32|0],0.0,0.0);}}}BD();}
function Dw(a,b){var c,d,e;if(b===null)return 0;c=0;d=0;while(d<Bh(b)){if(Y(b,d)==167)d=d+1|0;else{e=Vd(Y(b,d));if(e>=0)c=c+a.r6.data[e+32|0]|0;}d=d+1|0;}return c;}
function AQA(a,b){var c,d,e,f;c=Ci();d=ANj(b,B(158)).data;e=d.length;f=0;while(f<e){S(c,d[f]);f=f+1|0;}return c;}
function Qf(){var a=this;D.call(a);a.FO=0;a.FN=0;}
function BkF(){var a=new Qf();A$z(a);return a;}
function A$z(a){return;}
function Yw(a){AME(1);a.FO=0;a.FN=0;}
function AFy(a){Lq();Mz();AME(0);}
function AKU(){var a=this;Et.call(a);a.o3=null;a.rc=null;a.oy=null;a.sT=null;a.s$=0;}
function Bau(){var a=new AKU();A4u(a);return a;}
function A4u(a){L();Hz(a,BfY.bb+1|0);a.o3=$rt_createFloatArray(256);a.rc=$rt_createFloatArray(256);a.oy=$rt_createFloatArray(256);a.sT=$rt_createFloatArray(256);a.s$=0;a.wQ=2;}
function AZ9(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;a.s$=a.s$+1|0;b=0;while(b<16){c=0;while(c<16){d=0.0;e=c-2|0;while(e<=c){f=b&15;g=e&15;d=d+a.o3.data[f+(g*16|0)|0];e=e+1|0;}h=a.rc.data;i=b+(c*16|0)|0;h[i]=d/3.200000047683716+a.oy.data[i]*0.800000011920929;c=c+1|0;}b=b+1|0;}b=0;while(b<16){c=0;while(c<16){j=a.oy.data;i=b+(c*16|0)|0;j[i]=j[i]+a.sT.data[i]*0.05000000074505806;if(a.oy.data[i]<0.0)a.oy.data[i]=0.0;j=a.sT.data;j[i]=j[i]-0.30000001192092896;if(BP()<0.2)a.sT.data[i]=0.5;c=c+1|0;}b=b+1|0;}j=a.rc;a.rc=a.o3;a.o3
=j;c=0;while(c<256){d=a.o3.data[(c-(a.s$*16|0)|0)&255];if(d>1.0)d=1.0;if(d<0.0)d=0.0;k=d*d;i=32.0+k*32.0|0;l=50.0+k*64.0|0;m=255;n=146.0+k*50.0|0;if(a.mx){b=i*30|0;i=((b+(l*59|0)|0)+2805|0)/100|0;l=(b+(l*70|0)|0)/100|0;m=(b+17850|0)/100|0;}j=a.dA.data;b=c*4|0;j[b+0|0]=i<<24>>24;a.dA.data[b+1|0]=l<<24>>24;a.dA.data[b+2|0]=m<<24>>24;a.dA.data[b+3|0]=n<<24>>24;c=c+1|0;}}
function ACh(){var a=this;Et.call(a);a.ou=null;a.rn=null;a.jM=null;a.sJ=null;a.to=0;}
function BcC(){var a=new ACh();A3m(a);return a;}
function A3m(a){L();Hz(a,BfZ.bb+1|0);a.ou=$rt_createFloatArray(256);a.rn=$rt_createFloatArray(256);a.jM=$rt_createFloatArray(256);a.sJ=$rt_createFloatArray(256);a.to=0;a.wQ=2;}
function A8S(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;a.to=a.to+1|0;b=0;while(b<16){c=0;while(c<16){d=0.0;e=Bq(c*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;f=Bq(b*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;g=b-1|0;while(true){h=b+1|0;if(g>h)break;i=c-1|0;while(i<=(c+1|0)){j=(g+e|0)&15;h=(i+f|0)&15;d=d+a.ou.data[j+(h*16|0)|0];i=i+1|0;}g=g+1|0;}k=a.rn.data;l=b+(c*16|0)|0;d=d/10.0;m=a.jM.data;e=(b+0|0)&15;j=((c+0|0)&15)*16|0;n=m[e+j|0];m=a.jM.data;h=h&15;n=n+m[h+j|0];m=a.jM.data;c=c+1|0;j=(c&15)*16|0;k[l]
=d+(n+m[h+j|0]+a.jM.data[e+j|0])/4.0*0.800000011920929;m=a.jM.data;m[l]=m[l]+a.sJ.data[l]*0.009999999776482582;if(a.jM.data[l]<0.0)a.jM.data[l]=0.0;m=a.sJ.data;m[l]=m[l]-0.05999999865889549;if(BP()<0.005)a.sJ.data[l]=1.5;}b=b+1|0;}m=a.rn;a.rn=a.ou;a.ou=m;c=0;while(c<256){d=a.ou.data[(c-((a.to/3|0)*16|0)|0)&255]*2.0;if(d>1.0)d=1.0;if(d<0.0)d=0.0;j=d*100.0+155.0|0;n=d*d;h=n*255.0|0;l=n*d*d*128.0|0;if(a.mx){b=j*30|0;j=((b+(h*59|0)|0)+(l*11|0)|0)/100|0;h=(b+(h*70|0)|0)/100|0;l=(b+(l*70|0)|0)/100|0;}m=a.dA.data;b
=c*4|0;m[b+0|0]=j<<24>>24;a.dA.data[b+1|0]=h<<24>>24;a.dA.data[b+2|0]=l<<24>>24;a.dA.data[b+3|0]=(-1);c=c+1|0;}}
function AR4(){var a=this;Et.call(a);a.mk=null;a.oH=null;}
function AVE(a){var b=new AR4();AZo(b,a);return b;}
function AZo(a,b){L();Hz(a,Bgp.bb+(b*16|0)|0);a.mk=$rt_createFloatArray(320);a.oH=$rt_createFloatArray(320);}
function A3t(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=0;while(b<16){c=0;while(c<20){d=18;e=a.mk.data;f=c+1|0;g=e[b+((f%20|0)*16|0)|0]*18.0;h=b-1|0;while(h<=(b+1|0)){i=c;while(i<=f){if(h>=0&&i>=0&&h<16&&i<20)g=g+a.mk.data[h+(i*16|0)|0];d=d+1|0;i=i+1|0;}h=h+1|0;}e=a.oH.data;j=b+(c*16|0)|0;e[j]=g/(d*1.059999942779541);if(c>=19)a.oH.data[j]=BP()*BP()*BP()*4.0+BP()*0.10000000149011612+0.20000000298023224;c=f;}b=b+1|0;}e=a.oH;a.oH=a.mk;a.mk=e;f=0;while(f<256){k=a.mk.data[f]*1.7999999523162842;if(k>1.0)k=1.0;if(k<0.0)k=
0.0;l=k*155.0+100.0|0;g=k*k;m=g*255.0|0;j=g*k*k*k*k*k*k*k*k*255.0|0;n=255;if(k<0.5)n=0;if(a.mx){c=l*30|0;l=((c+(m*59|0)|0)+(j*11|0)|0)/100|0;m=(c+(m*70|0)|0)/100|0;j=(c+(j*70|0)|0)/100|0;}e=a.dA.data;b=f*4|0;e[b+0|0]=l<<24>>24;a.dA.data[b+1|0]=m<<24>>24;a.dA.data[b+2|0]=j<<24>>24;a.dA.data[b+3|0]=n<<24>>24;f=f+1|0;}}
function Xn(){}
function AAr(){var a=this;D.call(a);a.iC=null;a.bM=null;a.iB=null;a.eH=null;a.gK=null;a.c7=null;a.dq=0;a.dC=0;a.j4=0;a.yS=0;a.cL=null;a.D3=null;a.ps=0;a.om=0;a.xC=0;a.xb=0;a.ql=0;a.qm=0;a.qn=0;a.s5=0;a.s4=0;a.s6=0;a.r3=0;a.s2=0;a.lb=0;a.xi=0;a.Hf=null;a.HP=null;a.r7=0;a.rR=0;a.DM=0;a.so=0;a.qv=0;a.oW=null;a.G_=0;a.GH=0;a.rA=0.0;a.rz=0.0;a.ry=0.0;a.tD=0.0;a.q3=0;}
function BaT(a,b){var c=new AAr();A2i(c,a,b);return c;}
function A2i(a,b,c){var d,e,f,g,h,i,j;a.iC=Ci();a.eH=Ci();a.ps=0;a.r3=(-1);a.Hf=$rt_createIntArray(50000);a.HP=Ra(64);a.oW=Ci();a.G_=0;a.GH=IW(1);a.rA=(-9999.0);a.rz=(-9999.0);a.ry=(-9999.0);a.q3=0;a.cL=b;a.iB=c;a.yS=IW(786432);a.om=IW(3);B3();FF(a.om,4864);Zc(a);Ed();BD();BA();d=BeL;a.xC=a.om+1|0;FF(a.xC,4864);e=(-384);while(e<=384){f=(-384);while(f<=384){Bz(d);g=e+0|0;h=f+0|0;Bf(d,g,16.0,h);i=e+64|0;Bf(d,i,16.0,h);f=f+64|0;h=f;Bf(d,i,16.0,h);Bf(d,g,16.0,h);Br(d);}e=e+64|0;}Ed();a.xb=a.om+2|0;FF(a.xb,4864);Bz(d);f
=(-384);while(f<=384){j=(-384);while(j<=384){g=f+64|0;h=j+0|0;Bf(d,g,(-16.0),h);i=f+0|0;Bf(d,i,(-16.0),h);j=j+64|0;h=j;Bf(d,i,(-16.0),h);Bf(d,g,(-16.0),h);}f=f+64|0;}Br(d);Ed();}
function Zc(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;b=new Dz;BA();c=BeL;Bz(c);d=0;while(d<1500){a:{e=N(b)*2.0-1.0;f=N(b)*2.0-1.0;g=N(b)*2.0-1.0;h=0.25+N(b)*0.25;i=e*e+f*f+g*g;if(i<1.0&&i>0.01){j=1.0/Ec(i);e=e*j;f=f*j;g=g*j;k=e*100.0;l=f*100.0;m=g*100.0;n=CR(e,g);o=Gn(n);p=GA(n);q=CR(Ec(e*e+g*g),f);r=Gn(q);s=GA(q);t=Cl(b)*3.141592653589793*2.0;u=Gn(t);v=GA(t);w=0;g=0.0*s;x=0.0*r;while(true){if(w>=4)break a;y=((w&2)-1|0)*h;w=w+1|0;z=((w&2)-1|0)*h;j=y*v-z*u;ba=z*v+y*u;bb=j*r+g;bc
=x-j*s;bd=bc*o-ba*p;be=ba*o+bc*p;Bf(c,k+bd,l+bb,m+be);}}}d=d+1|0;}Br(c);}
function QW(a,b){if(a.bM!==null)AKS(a.bM,a);a.rA=(-9999.0);a.rz=(-9999.0);a.ry=(-9999.0);Bgo.nZ=b;a.bM=b;a.D3=A8k(b);if(b!==null){ANB(b,a);Lj(a);}}
function Lj(a){var b,c,d,e,f,g,h,i;a:{L();AKl(Be3,a.cL.u.mS);a.r3=a.cL.u.hX;if(a.c7!==null){b=0;while(true){if(b>=a.c7.data.length)break a;ARE(a.c7.data[b]);b=b+1|0;}}}b=64<<(3-a.r3|0);if(b>400)b=400;b=(b/16|0)+1|0;a.dq=b;a.dC=8;a.j4=b;a.c7=J(Ik,Bj(Bj(a.dq,a.dC),a.j4));a.gK=J(Ik,Bj(Bj(a.dq,a.dC),a.j4));c=0;d=0;a.ql=0;a.qm=0;a.qn=0;a.s5=a.dq;a.s4=a.dC;a.s6=a.j4;e=0;while(e<a.eH.o){Z(a.eH,e).iY=0;e=e+1|0;}DF(a.eH);f=0;while(f<a.dq){g=0;while(g<a.dC){h=0;while(h<a.j4){if(a.c7.data[Bj(Bj(h,a.dC)+g|0,a.dq)+f|0]!==
null)F_(a.iC,a.c7.data[Bj(Bj(h,a.dC)+g|0,a.dq)+f|0].gk);a.c7.data[Bj(Bj(h,a.dC)+g|0,a.dq)+f|0]=Bbw(a.bM,a.iC,f*16|0,g*16|0,h*16|0,16,a.yS+c|0);a.c7.data[Bj(Bj(h,a.dC)+g|0,a.dq)+f|0].JI=0;a.c7.data[Bj(Bj(h,a.dC)+g|0,a.dq)+f|0].xA=1;a.c7.data[Bj(Bj(h,a.dC)+g|0,a.dq)+f|0].ft=1;i=a.c7.data[Bj(Bj(h,a.dC)+g|0,a.dq)+f|0];b=d+1|0;i.Ih=d;KT(a.c7.data[Bj(Bj(h,a.dC)+g|0,a.dq)+f|0]);a.gK.data[Bj(Bj(h,a.dC)+g|0,a.dq)+f|0]=a.c7.data[Bj(Bj(h,a.dC)+g|0,a.dq)+f|0];S(a.eH,a.c7.data[Bj(Bj(h,a.dC)+g|0,a.dq)+f|0]);c=c+3|0;h=h+1
|0;d=b;}g=g+1|0;}f=f+1|0;}if(a.bM!==null){i=a.bM.bi;Tf(a,K(i.d),K(i.j),K(i.e));PT(a.gK,AYG(i));}}
function ACy(a,b,c,d){var e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:ARg(Bkr,a.bM,a.iB,a.cL.e7,a.cL.f,d);AHb(Bgo,a.bM,a.iB,a.cL.e7,a.cL.f,a.cL.u,d);a.s2=0;a.lb=0;a.xi=0;e=a.bM.bi;f=e.co;g=e.d-e.co;h=d;BkG=f+g*h;BkH=e.b5+(e.j-e.b5)*h;BkI=e.cp+(e.e-e.cp)*h;BkJ=e.co+(e.d-e.co)*h;BkK=e.b5+(e.j-e.b5)*h;BkL=e.cp+(e.e-e.cp)*h;i=a.bM.dV;a.s2=i.o;j=0;while(true){if(j>=i.o){j
=0;if(j>=a.iC.o)return;b=Bkr;c=Z(a.iC,j);$p=1;continue _;}k=Z(i,j);if(R$(k,b)&&ME(c,k.L)){if(k!==a.bM.bi)break;if(a.cL.u.cz)break;}j=j+1|0;}a.lb=a.lb+1|0;e=Bgo;$p=2;continue _;case 1:YU(b,c,d);if(C()){break _;}j=j+1|0;if(j>=a.iC.o)return;b=Bkr;c=Z(a.iC,j);continue _;case 2:AM8(e,k,d);if(C()){break _;}while(true){j=j+1|0;if(j>=i.o){j=0;if(j>=a.iC.o)return;b=Bkr;c=Z(a.iC,j);$p=1;continue _;}k=Z(i,j);if(!R$(k,b))continue;if(!ME(c,k.L))continue;if(k!==a.bM.bi)break;if(!a.cL.u.cz)continue;else break;}a.lb=a.lb+1
|0;e=Bgo;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function ALi(a){var b;b=new U;X(b);return V(Be(I(Be(I(Be(I(Be(I(Be(I(b,B(374)),a.so),B(23)),a.r7),B(375)),a.rR),B(376)),a.DM),B(377)),a.qv));}
function XZ(a){var b;b=new U;X(b);return V(Be(I(Be(I(Be(I(Be(I(b,B(378)),a.lb),B(23)),a.s2),B(379)),a.xi),B(380)),(a.s2-a.xi|0)-a.lb|0));}
function Tf(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q;c=b+(-8)|0;d=d+(-8)|0;a.ql=2147483647;a.qm=2147483647;a.qn=2147483647;a.s5=(-2147483648);a.s4=(-2147483648);a.s6=(-2147483648);e=a.dq*16|0;f=e/2|0;g=0;h=e-1|0;while(g<a.dq){i=g*16|0;j=(i+f|0)-c|0;if(j<0)j=j-h|0;i=i-Bj(j/e|0,e)|0;if(i<a.ql)a.ql=i;if(i>a.s5)a.s5=i;k=0;while(k<a.j4){l=k*16|0;m=(l+f|0)-d|0;if(m<0)m=m-h|0;j=l-Bj(m/e|0,e)|0;if(j<a.qn)a.qn=j;if(j>a.s6)a.s6=j;n=0;while(n<a.dC){o=n*16|0;if(o<a.qm)a.qm=o;if(o>a.s4)a.s4=o;p=a.c7.data[Bj(Bj(k,a.dC)+n|0,
a.dq)+g|0];q=p.iY;Sc(p,i,o,j);if(!q&&p.iY)S(a.eH,p);n=n+1|0;}k=k+1|0;}g=g+1|0;}}
function Vk(a,b,c,d){var e,f,g;if(a.cL.u.hX!=a.r3)Lj(a);if(!c){a.r7=0;a.rR=0;a.DM=0;a.so=0;a.qv=0;}e=b.d-a.rA;f=b.j-a.rz;g=b.e-a.ry;if(e*e+f*f+g*g>16.0){a.rA=b.d;a.rz=b.j;a.ry=b.e;Tf(a,K(b.d),K(b.j),K(b.e));PT(a.gK,AYG(b));}return 0+Yy(a,0,a.gK.data.length,c,d)|0;}
function Yy(a,b,c,d,e){var f,g,h,i,j,k,l;DF(a.oW);f=0;while(b<c){if(!d){a.r7=a.r7+1|0;if(a.gK.data[b].gW.data[d])a.qv=a.qv+1|0;else if(a.gK.data[b].ft)a.so=a.so+1|0;else a.rR=a.rR+1|0;}if(!a.gK.data[b].gW.data[d]&&a.gK.data[b].ft&&a.gK.data[b].xA&&PD(a.gK.data[b],d)>=0){S(a.oW,a.gK.data[b]);f=f+1|0;}b=b+1|0;}g=a.cL.f;h=g.co+(g.d-g.co)*e;i=g.b5+(g.j-g.b5)*e;j=g.cp+(g.e-g.cp)*e;k=0;while(k<a.oW.o){l=Z(a.oW,k);B3();Bw(l.Bs-h,l.Ei-i,l.Dj-j);FP(PD(l,d));BD();k=k+1|0;}return f;}
function HR(a){a.ps=a.ps+1|0;}
function AC_(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bc(3553);c=OM(a.bM,b);d=c.w;e=c.y;f=c.v;if(a.cL.u.ez){g=d*30.0;d=(g+e*59.0+f*11.0)/100.0;e=(g+e*70.0)/100.0;f=(g+f*70.0)/100.0;}F2(d,e,f);BA();h=BeL;Gq(0);Ba(2912);F2(d,e,f);FP(a.xC);Ba(3553);Bc(2912);Bc(3008);Ba(3042);Df(1,1);B3();BU(1.0,1.0,1.0,1.0);Bw(0.0,0.0,0.0);Bv(0.0,0.0,0.0,1.0);Bv(Hv(a.bM,
b)*360.0,1.0,0.0,0.0);i=3553;c=a.iB;j=B(381);$p=1;case 1:$z=AHt(c,j);if(C()){break _;}k=$z;Cp(i,k);Bz(h);G(h,(-30.0),100.0,(-30.0),0.0,0.0);G(h,30.0,100.0,(-30.0),1.0,0.0);G(h,30.0,100.0,30.0,1.0,1.0);G(h,(-30.0),100.0,30.0,0.0,1.0);Br(h);i=3553;c=a.iB;j=B(382);$p=2;case 2:$z=AHt(c,j);if(C()){break _;}k=$z;Cp(i,k);Bz(h);G(h,(-20.0),(-100.0),20.0,1.0,1.0);G(h,20.0,(-100.0),20.0,0.0,1.0);G(h,20.0,(-100.0),(-20.0),0.0,0.0);G(h,(-20.0),(-100.0),(-20.0),1.0,0.0);Br(h);Bc(3553);g=AJp(a.bM,b);if(g>0.0){BU(g,g,g,g);FP(a.om);}BU(1.0,
1.0,1.0,1.0);Bc(3042);Ba(3008);Ba(2912);BD();F2(d*0.20000000298023224+0.03999999910593033,e*0.20000000298023224+0.03999999910593033,f*0.6000000238418579+0.10000000149011612);Bc(3553);FP(a.xb);Ba(3553);Gq(1);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function YI(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.cL.u.mS){$p=2;continue _;}Bc(2884);c=a.cL.f.b5;d=a.cL.f.j-a.cL.f.b5;e=b;f=c+d*e;g=32;BA();h=BeL;i=3553;j=a.iB;k=B(383);$p=1;case 1:$z
=AHt(j,k);if(C()){break _;}l=$z;Cp(i,l);Ba(3042);Df(770,771);j=SV(a.bM,b);m=j.w;n=j.y;o=j.v;if(a.cL.u.ez){p=m*30.0;m=(p+n*59.0+o*11.0)/100.0;n=(p+n*70.0)/100.0;o=(p+o*70.0)/100.0;}q=a.bM.bi.bR+(a.bM.bi.d-a.bM.bi.bR)*e+(a.ps+b)*0.029999999329447746;c=a.bM.bi.bQ+(a.bM.bi.e-a.bM.bi.bQ)*e;i=K(q/2048.0);l=K(c/2048.0);d=q-(i*2048|0);c=c-(l*2048|0);p=120.0-f+0.33000001311302185;r=d*4.8828125E-4;s=c*4.8828125E-4;Bz(h);Gt(h,m,n,o,0.800000011920929);d=p;t=(-256);while(t<256){u=(-256);while(u<256){v=t+0|0;c=v;w=u+g|0;e
=w;q=v*4.8828125E-4+r;x=w*4.8828125E-4+s;G(h,c,d,e,q,x);v=t+g|0;y=v;z=v*4.8828125E-4+r;G(h,y,d,e,z,x);u=u+0|0;e=u;x=u*4.8828125E-4+s;G(h,y,d,e,z,x);G(h,c,d,e,q,x);u=w;}t=t+g|0;}Br(h);BU(1.0,1.0,1.0,1.0);Bc(3042);Ba(2884);return;case 2:AA$(a,b);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function AA$(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bc(2884);c=a.cL.f.b5;d
=a.cL.f.j-a.cL.f.b5;e=b;f=c+d*e;BA();g=BeL;h=12.0;c=(a.bM.bi.bR+(a.bM.bi.d-a.bM.bi.bR)*e+(a.ps+b)*0.029999999329447746)/12.0;d=(a.bM.bi.bQ+(a.bM.bi.e-a.bM.bi.bQ)*e)/12.0+0.33000001311302185;i=108.0-f+0.33000001311302185;j=K(c/2048.0);k=K(d/2048.0);e=c-(j*2048|0);d=d-(k*2048|0);l=3553;m=a.iB;n=B(383);$p=1;case 1:$z=AHt(m,n);if(C()){break _;}j=$z;Cp(l,j);Ba(3042);Df(770,771);m=SV(a.bM,b);o=m.w;p=m.y;q=m.v;if(a.cL.u.ez){b=o*30.0;o=(b+p*59.0+q*11.0)/100.0;p=(b+p*70.0)/100.0;q=(b+q*70.0)/100.0;}r=K(e)*0.00390625;b
=K(d)*0.00390625;s=e-K(e);t=d-K(d);CC(h,1.0,h);u=0;k=R(i,(-5.0));v=i+0.0;w=R(i,5.0);f=i+4.0;x=f-9.765625E-4;y=f;while(u<2){if(u)FC(1,1,1,1);else FC(0,0,0,0);z=(-2);while(z<=3){ba=(-2);while(ba<=3){Bz(g);bb=z*8|0;bc=ba*8|0;bd=bb-s;be=bc-t;if(k>0){Gt(g,o*0.699999988079071,p*0.699999988079071,q*0.699999988079071,0.800000011920929);Dc(g,0.0,(-1.0),0.0);bf=bd+0.0;c=be+8.0;d=(bb+0.0)*0.00390625+r;e=(bc+8.0)*0.00390625+b;G(g,bf,v,c,d,e);bg=bd+8.0;bh=(bb+8.0)*0.00390625+r;G(g,bg,v,c,bh,e);c=be+0.0;e=(bc+0.0)*0.00390625
+b;G(g,bg,v,c,bh,e);G(g,bf,v,c,d,e);}if(w<=0){Gt(g,o,p,q,0.800000011920929);Dc(g,0.0,1.0,0.0);c=bd+0.0;d=be+8.0;e=(bb+0.0)*0.00390625+r;bg=(bc+8.0)*0.00390625+b;G(g,c,x,d,e,bg);bh=bd+8.0;bf=(bb+8.0)*0.00390625+r;G(g,bh,x,d,bf,bg);d=be+0.0;bg=(bc+0.0)*0.00390625+b;G(g,bh,x,d,bf,bg);G(g,c,x,d,e,bg);}a:{Gt(g,o*0.8999999761581421,p*0.8999999761581421,q*0.8999999761581421,0.800000011920929);if(z>(-1)){Dc(g,(-1.0),0.0,0.0);bi=0;d=be+8.0;bg=(bc+8.0)*0.00390625+b;bh=be+0.0;bf=(bc+0.0)*0.00390625+b;while(true){if(bi
>=8)break a;f=bi;c=bd+f+0.0;e=(bb+f+0.5)*0.00390625+r;G(g,c,v,d,e,bg);G(g,c,y,d,e,bg);G(g,c,y,bh,e,bf);G(g,c,v,bh,e,bf);bi=bi+1|0;}}}b:{if(z<=1){Dc(g,1.0,0.0,0.0);bi=0;e=be+8.0;bh=(bc+8.0)*0.00390625+b;bf=be+0.0;c=(bc+0.0)*0.00390625+b;while(true){if(bi>=8)break b;f=bi;d=bd+f+1.0-9.765625E-4;bg=(bb+f+0.5)*0.00390625+r;G(g,d,v,e,bg,bh);G(g,d,y,e,bg,bh);G(g,d,y,bf,bg,c);G(g,d,v,bf,bg,c);bi=bi+1|0;}}}c:{Gt(g,o*0.800000011920929,p*0.800000011920929,q*0.800000011920929,0.800000011920929);if(ba>(-1)){Dc(g,0.0,0.0,
(-1.0));l=0;c=bd+0.0;e=(bb+0.0)*0.00390625+r;bh=bd+8.0;bf=(bb+8.0)*0.00390625+r;while(true){if(l>=8)break c;f=l;d=be+f+0.0;bg=(bc+f+0.5)*0.00390625+b;G(g,c,y,d,e,bg);G(g,bh,y,d,bf,bg);G(g,bh,v,d,bf,bg);G(g,c,v,d,e,bg);l=l+1|0;}}}d:{if(ba<=1){Dc(g,0.0,0.0,1.0);l=0;c=bd+0.0;e=(bb+0.0)*0.00390625+r;bh=bd+8.0;bf=(bb+8.0)*0.00390625+r;while(true){if(l>=8)break d;f=l;d=be+f+1.0-9.765625E-4;bg=(bc+f+0.5)*0.00390625+b;G(g,c,y,d,e,bg);G(g,bh,y,d,bf,bg);G(g,bh,v,d,bf,bg);G(g,c,v,d,e,bg);l=l+1|0;}}}Br(g);ba=ba+1|0;}z=
z+1|0;}u=u+1|0;}BU(1.0,1.0,1.0,1.0);Bc(3042);Ba(2884);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$p);}
function AIj(a,b,c){var d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=a.eH;e=new V5;e.x8=b;Rv(d,e);f=a.eH.o-1|0;g=a.eH.o;h=0;a:{while(h<g){d=Z(a.eH,f-h|0);if(!c){if(G2(d,b)<=1024.0)break a;if(!d.ft){if(h<1)break a;return 0;}if(h<3)break a;return 0;}if(d.ft)break a;h=h+1|0;}return a.eH.o?0:1;}$p=1;case 1:ADf(d);if(C()){break _;}H5(a.eH,d);d.iY=0;a:{while(true){h=h+1|0;if(h>=g)break;d=Z(a.eH,f-h|0);if
(!c){if(G2(d,b)<=1024.0)break a;if(!d.ft){if(h<1)break a;return 0;}if(h<3)break a;return 0;}if(d.ft)break a;}return a.eH.o?0:1;}continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AFF(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{BA();g=BeL;Ba(3042);Ba(3008);Df(770,1);BU(1.0,1.0,1.0,(Bq(Long_toNumber(B$())/100.0)*0.20000000298023224+0.4000000059604645)*0.5);if(!d){if(a.tD<=0.0)break a;Df(774,768);e=a.iB;h=B(179);$p=2;continue _;}if(e!==null){Df(770,771);i=Bq(Long_toNumber(B$())
/100.0)*0.20000000298023224+0.800000011920929;BU(i,i,i,Bq(Long_toNumber(B$())/200.0)*0.20000000298023224+0.5);b=a.iB;e=B(179);$p=1;continue _;}}Bc(3042);Bc(3008);return;case 1:$z=AHt(b,e);if(C()){break _;}j=$z;Cp(3553,j);Bc(3042);Bc(3008);return;case 2:$z=AHt(e,h);if(C()){break _;}k=$z;Cp(3553,k);BU(1.0,1.0,1.0,0.5);B3();e=a.bM;d=c.h8;k=c.h9;j=c.h$;$p=3;case 3:$z=ACt(e,d,k,j);if(C()){break _;}j=$z;if(j<=0)h=null;else{L();h=BeP.data[j];}Bc(3008);OC((-3.0),(-3.0));Ba(32823);Bz(g);l=b.co;m=b.d-b.co;n=f;E_(g, -(l
+m*n), -(b.b5+(b.j-b.b5)*n), -(b.cp+(b.e-b.cp)*n));ADl(g);if(h===null){L();h=BeV;}b=a.D3;d=c.h8;k=c.h9;j=c.h$;o=240+(a.tD*10.0|0)|0;$p=4;case 4:AMv(b,h,d,k,j,o);if(C()){break _;}Br(g);E_(g,0.0,0.0,0.0);OC(0.0,0.0);Bc(32823);Ba(3008);Gq(1);BD();Bc(3042);Bc(3008);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AGf(a,b,c,d,e,f){var g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!d&&!c.k3){Ba(3042);Df(770,771);BU(0.0,0.0,0.0,0.4000000059604645);Bc(3553);Gq(0);e=a.bM;d=c.h8;g=c.h9;h=c.h$;$p=1;continue _;}return;case 1:$z=ACt(e,d,g,h);if(C()){break _;}g=$z;if(g<=0){Gq(1);Ba(3553);Bc(3042);return;}i=b.co;j=b.d-b.co;k=f;i=i+j*k;j=b.b5+(b.j-b.b5)*k;k=b.cp+(b.e-b.cp)*k;L();b
=BeP.data[g];e=a.bM;d=c.h8;g=c.h9;h=c.h$;$p=2;case 2:$z=b.oQ(e,d,g,h);if(C()){break _;}b=$z;b=T7(Dv(b,0.0020000000949949026,0.0020000000949949026,0.0020000000949949026), -i, -j, -k);BA();c=BeL;Gg(c,3);Bf(c,b.R,b.M,b.S);Bf(c,b.V,b.M,b.S);Bf(c,b.V,b.M,b.W);Bf(c,b.R,b.M,b.W);Bf(c,b.R,b.M,b.S);Br(c);Gg(c,3);Bf(c,b.R,b.U,b.S);Bf(c,b.V,b.U,b.S);Bf(c,b.V,b.U,b.W);Bf(c,b.R,b.U,b.W);Bf(c,b.R,b.U,b.S);Br(c);Gg(c,1);Bf(c,b.R,b.M,b.S);Bf(c,b.R,b.U,b.S);Bf(c,b.V,b.M,b.S);Bf(c,b.V,b.U,b.S);Bf(c,b.V,b.M,b.W);Bf(c,b.V,b.U,
b.W);Bf(c,b.R,b.M,b.W);Bf(c,b.R,b.U,b.W);Br(c);Gq(1);Ba(3553);Bc(3042);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function Tk(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;h=GI(b,16);i=GI(c,16);j=GI(d,16);k=GI(e,16);l=GI(f,16);m=GI(g,16);while(h<=k){n=h%a.dq|0;if(n<0)n=n+a.dq|0;o=i;while(o<=l){p=o%a.dC|0;if(p<0)p=p+a.dC|0;q=j;while(q<=m){r=q%a.j4|0;if(r<0)r=r+a.j4|0;s=Bj(Bj(r,a.dC)+p|0,a.dq)+n|0;t=a.c7.data[s];if(!t.iY)S(a.eH,t);KT(t);q=q+1|0;}o=o+1|0;}h=h+1|0;}}
function Rk(a,b,c,d){Tk(a,b-1|0,c-1|0,d-1|0,b+1|0,c+1|0,d+1|0);}
function AOE(a,b,c,d,e,f,g){Tk(a,b-1|0,c-1|0,d-1|0,e+1|0,f+1|0,g+1|0);}
function ARI(a,b,c){var d;d=0;while(d<a.c7.data.length){if(!AHw(a.c7.data[d])&&!(a.c7.data[d].ft&&(d+a.q3|0)&15))AR9(a.c7.data[d],b);d=d+1|0;}a.q3=a.q3+1|0;}
function ACZ(a,b,c,d,e,f,g){return;}
function AH4(a,b,c,d,e,f,g,h){var i,j,k,l,m;i=a.bM.bi.d-c;j=a.bM.bi.j-d;k=a.bM.bi.e-e;if(i*i+j*j+k*k<=256.0){if(b===B(213)){b=a.cL.c4;l=new Sv;Fz(l,a.bM,c,d,e,f,g,h);l.hW=1.0;l.ib=1.0;l.im=1.0;l.e4=32;DZ(l,0.019999999552965164,0.019999999552965164);l.dp=l.dp*(N(l.m)*0.6000000238418579+0.20000000298023224);l.g=f*0.20000000298023224+(BP()*2.0-1.0)*0.019999999552965164;l.i=g*0.20000000298023224+(BP()*2.0-1.0)*0.019999999552965164;l.h=h*0.20000000298023224+(BP()*2.0-1.0)*0.019999999552965164;l.ct=8.0/(BP()*0.8+
0.2)|0;Ek(b,l);}else if(b===B(256))Ek(a.cL.c4,A7$(a.bM,c,d,e,1.0));else if(b===B(223)){b=a.cL.c4;l=new QX;Fz(l,a.bM,c,d,e,f,g,h);l.g=f+(BP()*2.0-1.0)*0.05000000074505806;l.i=g+(BP()*2.0-1.0)*0.05000000074505806;l.h=h+(BP()*2.0-1.0)*0.05000000074505806;m=N(l.m)*0.30000001192092896+0.699999988079071;l.im=m;l.ib=m;l.hW=m;l.dp=N(l.m)*N(l.m)*6.0+1.0;l.ct=(16.0/(N(l.m)*0.8+0.2)|0)+2|0;Ek(b,l);}else if(b!==B(257)){if(b===B(254))Ek(a.cL.c4,BcI(a.bM,c,d,e));else if(b===B(214))Ek(a.cL.c4,Bcv(a.bM,c,d,e,f,g,h));else if
(b===B(255))Ek(a.cL.c4,A7$(a.bM,c,d,e,2.5));}else{b=a.cL.c4;l=new OY;Fz(l,a.bM,c,d,e,f,g,h);l.g=l.g*0.009999999776482582+f;l.i=l.i*0.009999999776482582+g;l.h=l.h*0.009999999776482582+h;N(l.m);N(l.m);N(l.m);N(l.m);N(l.m);N(l.m);l.DK=l.dp;l.im=1.0;l.ib=1.0;l.hW=1.0;l.ct=(8.0/(BP()*0.8+0.2)|0)+4|0;l.o2=1;l.e4=48;Ek(b,l);}}}
function A$r(a,b){return;}
function ATp(a,b){return;}
function Vx(a){var b;b=0;while(b<a.c7.data.length){if(a.c7.data[b].ok){if(!a.c7.data[b].iY)S(a.eH,a.c7.data[b]);KT(a.c7.data[b]);}b=b+1|0;}}
function AHa(){var a=this;CS.call(a);a.u7=0.0;a.yl=null;a.t0=null;}
function LL(){var a=new AHa();A4p(a);return a;}
function A4p(a){var b,c;D0(a);a.u7=0.0;b=J(B4,106);c=b.data;c[0]=B(384);c[1]=B(385);c[2]=B(386);c[3]=B(387);c[4]=B(388);c[5]=B(389);c[6]=B(390);c[7]=B(391);c[8]=B(392);c[9]=B(393);c[10]=B(394);c[11]=B(395);c[12]=B(396);c[13]=B(397);c[14]=B(398);c[15]=B(399);c[16]=B(400);c[17]=B(401);c[18]=B(402);c[19]=B(403);c[20]=B(404);c[21]=B(405);c[22]=B(406);c[23]=B(407);c[24]=B(408);c[25]=B(409);c[26]=B(410);c[27]=B(411);c[28]=B(412);c[29]=B(413);c[30]=B(414);c[31]=B(415);c[32]=B(416);c[33]=B(417);c[34]=B(418);c[35]=B(419);c[36]
=B(420);c[37]=B(421);c[38]=B(422);c[39]=B(423);c[40]=B(424);c[41]=B(425);c[42]=B(426);c[43]=B(427);c[44]=B(428);c[45]=B(429);c[46]=B(430);c[47]=B(431);c[48]=B(432);c[49]=B(433);c[50]=B(405);c[51]=B(434);c[52]=B(435);c[53]=B(436);c[54]=B(437);c[55]=B(438);c[56]=B(439);c[57]=B(440);c[58]=B(441);c[59]=B(442);c[60]=B(443);c[61]=B(444);c[62]=B(445);c[63]=B(446);c[64]=B(447);c[65]=B(448);c[66]=B(449);c[67]=B(450);c[68]=B(451);c[69]=B(452);c[70]=B(453);c[71]=B(454);c[72]=B(455);c[73]=B(456);c[74]=B(457);c[75]=B(458);c[76]
=B(459);c[77]=B(460);c[78]=B(461);c[79]=B(462);c[80]=B(463);c[81]=B(464);c[82]=B(465);c[83]=B(466);c[84]=B(467);c[85]=B(468);c[86]=B(469);c[87]=B(470);c[88]=B(471);c[89]=B(472);c[90]=B(473);c[91]=B(474);c[92]=B(475);c[93]=B(476);c[94]=B(477);c[95]=B(478);c[96]=B(479);c[97]=B(480);c[98]=B(481);c[99]=B(482);c[100]=B(483);c[101]=B(484);c[102]=B(485);c[103]=B(486);c[104]=B(487);c[105]=B(488);a.yl=b;a.t0=a.yl.data[BP()*a.yl.data.length|0];}
function A5q(a){a.u7=a.u7+0.009999999776482582;}
function ANJ(a,b,c){return;}
function AIs(a){DF(a.bG);S(a.bG,Dj(1,(a.bm/2|0)-100|0,(a.bC/4|0)+48|0,B(489)));S(a.bG,Dj(2,(a.bm/2|0)-100|0,(a.bC/4|0)+72|0,B(490)));S(a.bG,Dj(3,(a.bm/2|0)-100|0,(a.bC/4|0)+96|0,B(491)));S(a.bG,Dj(0,(a.bm/2|0)-100|0,((a.bC/4|0)+120|0)+12|0,B(492)));Z(a.bG,1).hh=0;Z(a.bG,2).hh=0;if(a.K.kV===null)Z(a.bG,1).hh=0;}
function ACn(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b.cC){c=a.K;d=A3z(a,a.K.u);$p=1;continue _;}if(b.cC!=1)return;b=a.K;c=A$X(a);$p=2;continue _;case 1:ADT(c,d);if(C()){break _;}if(b.cC!=1)return;b=a.K;c=A$X(a);$p=2;case 2:ADT(b,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function Zz(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABd(a);if(C()){break _;}BA();e=BeL;f=3553;g=a.K.bo;h=B(493);$p=2;case 2:$z=AHt(g,h);if(C()){break _;}i=$z;Cp(f,i);BU(1.0,1.0,1.0,1.0);ER(e,16777215);CH(a,(a.bm-256|0)/2|0,30,0,0,256,49);B3();Bw((a.bm/2|0)+90|0,70.0,0.0);Bv((-20.0),0.0,0.0,1.0);j=Bq(Long_toNumber(Long_rem(B$(),
Long_fromInt(1000)))/1000.0*3.1415927410125732*2.0)*0.10000000149011612;if(j<0.0)j= -j;k=(1.7999999523162842-j)*100.0/(Dw(a.bY,a.t0)+32|0);CC(k,k,k);DD(a,a.bY,a.t0,0,(-8),16776960);BD();Cy(a.bY,B(494),(a.bm-Dw(a.bY,B(494))|0)-2|0,a.bC-10|0,16777215);l=Kt();m=JV();n=Long_sub(l,Ka());g=new U;X(g);e=V(I(C6(I(C6(I(g,B(495)),Long_div(Long_mul(n,Long_fromInt(100)),l)),B(496)),Long_div(Long_div(l,Long_fromInt(1024)),Long_fromInt(1024))),B(497)));Cy(a.bY,e,(a.bm-Dw(a.bY,e)|0)-2|0,2,8421504);g=new U;X(g);e=V(I(C6(I(C6(I(g,
B(498)),Long_div(Long_mul(m,Long_fromInt(100)),l)),B(499)),Long_div(Long_div(m,Long_fromInt(1024)),Long_fromInt(1024))),B(500)));Cy(a.bY,e,(a.bm-Dw(a.bY,e)|0)-2|0,12,8421504);$p=3;case 3:AFC(a,b,c,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function OU(){var a=this;D.call(a);a.mO=null;a.cA=null;a.i_=null;a.sn=null;}
function Ek(a,b){var c;c=b.xp();S(a.cA.data[c],b);}
function AAU(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;while(b<3){c=0;if(c<a.cA.data[b].o){d=Z(a.cA.data[b],c);$p=1;continue _;}b=b+1|0;}return;case 1:d.el();if(C()){break _;}if(!d.cP)e=c;else{d=a.cA.data[b];e=c+(-1)|0;Em(d,c);}c=e+1|0;while(true){if(c<a.cA.data[b].o){d=Z(a.cA.data[b],c);continue _;}b=b+1|0;if(b>=3)break;c=0;}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AA_(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=BC(b.t*3.1415927410125732/180.0);e=Bq(b.t*3.1415927410125732/180.0);f= -e*Bq(b.I*3.1415927410125732/180.0);g=d*Bq(b.I*3.1415927410125732/180.0);h=BC(b.I*3.1415927410125732/180.0);i=b.co;j=b.d-b.co;k=c;BkM=i+j*k;BkN=b.b5+(b.j-b.b5)*k;BkO=b.cp
+(b.e-b.cp)*k;l=0;while(l<2){if(a.cA.data[l].o){if(!l){b=a.i_;m=B(501);$p=1;continue _;}if(l==1){b=a.i_;m=B(179);$p=2;continue _;}Cp(3553,0);BA();m=BeL;Bz(m);n=0;if(n<a.cA.data[l].o){o=Z(a.cA.data[l],n);$p=3;continue _;}Br(m);}l=l+1|0;}return;case 1:$z=AHt(b,m);if(C()){break _;}p=$z;a:while(true){if(l==1){b=a.i_;m=B(179);$p=2;continue _;}Cp(3553,p);BA();m=BeL;Bz(m);n=0;if(n<a.cA.data[l].o){o=Z(a.cA.data[l],n);$p=3;continue _;}Br(m);while(true){l=l+1|0;if(l>=2)break a;if(!a.cA.data[l].o)continue;else break;}p
=0;if(!l){b=a.i_;m=B(501);continue _;}}return;case 2:$z=AHt(b,m);if(C()){break _;}p=$z;a:while(true){Cp(3553,p);BA();m=BeL;Bz(m);n=0;if(n<a.cA.data[l].o){o=Z(a.cA.data[l],n);$p=3;continue _;}Br(m);while(true){l=l+1|0;if(l>=2)break a;if(!a.cA.data[l].o)continue;else break;}p=0;if(!l){b=a.i_;m=B(501);$p=1;continue _;}if(l==1){b=a.i_;m=B(179);continue _;}}return;case 3:o.kM(m,c,d,h,e,f,g);if(C()){break _;}n=n+1|0;a:while(true){if(n<a.cA.data[l].o){o=Z(a.cA.data[l],n);continue _;}Br(m);while(true){l=l+1|0;if(l>=
2)break a;if(!a.cA.data[l].o)continue;else break;}if(!l){b=a.i_;m=B(501);$p=1;continue _;}if(l==1){b=a.i_;m=B(179);$p=2;continue _;}Cp(3553,0);BA();m=BeL;Bz(m);n=0;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function ABS(a,b,c){var d,e,f,g,h,i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=2;if(a.cA.data[d].o){BA();e=BeL;f=0;if(f<a.cA.data[d].o){g=Z(a.cA.data[d],f);h=0.0;i=0.0;j=0.0;k=0.0;l=0.0;$p=1;continue _;}}return;case 1:g.kM(e,c,h,i,j,k,l);if(C()){break _;}f=f+1|0;if(f>=a.cA.data[d].o)return;g=Z(a.cA.data[d],f);h=0.0;i=0.0;j=0.0;k=0.0;l=0.0;continue _;default:E$();}}C3().s(a,
b,c,d,e,f,g,h,i,j,k,l,$p);}
function OW(a,b){var c;a.mO=b;c=0;while(c<3){DF(a.cA.data[c]);c=c+1|0;}}
function AEC(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.mO;$p=1;case 1:a:{$z=ACt(e,b,c,d);if(C()){break _;}f=$z;if(f){L();e=BeP.data[f];g=0;h=b;i=c;j=d;while(true){if(g>=4)break a;k=0;while(k<4){l=0;while(l<4){m=h+(g+0.5)/4.0;n=i+(k+0.5)/4.0;o=j+(l+0.5)/4.0;Ek(a,AY2(a.mO,m,n,o,m-h-0.5,n-i-0.5,o-j-0.5,e));l
=l+1|0;}k=k+1|0;}g=g+1|0;}}}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function YY(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.mO;$p=1;case 1:$z=ACt(f,b,c,d);if(C()){break _;}g=$z;if(g){L();h=BeP.data[g];i=b;j=i+Cl(a.sn)*(h.da-h.c$-0.20000000298023224)+0.10000000149011612+h.c$;k=c;l=k+Cl(a.sn)*(h.cB-h.cJ-0.20000000298023224)+0.10000000149011612+h.cJ;m=d;n=m+Cl(a.sn)*(h.db-h.c9-0.20000000298023224)
+0.10000000149011612+h.c9;if(!e)l=k+h.cJ-0.10000000149011612;if(e==1)l=k+h.cB+0.10000000149011612;if(e==2)n=m+h.c9-0.10000000149011612;if(e==3)n=m+h.db+0.10000000149011612;if(e==4)j=i+h.c$-0.10000000149011612;if(e==5)j=i+h.da+0.10000000149011612;Ek(a,X8(APp(AY2(a.mO,j,l,n,0.0,0.0,0.0,h),0.20000000298023224),0.6000000238418579));}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Xu(a){var b;b=new U;X(b);return V(Be(I(b,B(3)),(a.cA.data[0].o+a.cA.data[1].o|0)+a.cA.data[2].o|0));}
function Nn(){var a=this;Gb.call(a);a.g3=null;a.vl=null;a.b0=null;a.FP=null;a.rP=0;a.Eh=0.0;a.IC=0.0;}
var BkP=null;function API(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=FG(a.b0.cm,a.b0.bF);g=AEo(f);h=Zb(f);i=a.b0.e7;LB(a.b0.eS);Ba(3042);BU(1.0,1.0,1.0,1.0);c=3553;f=a.b0.bo;j
=B(502);$p=1;case 1:$z=AHt(f,j);if(C()){break _;}d=$z;Cp(c,d);k=a.b0.f.J;a.mM=(-90.0);l=g/2|0;m=l-91|0;n=h-22|0;CH(a,m,n,0,0,182,22);CH(a,(m-1|0)+(k.bL*20|0)|0,n-1|0,0,22,24,22);c=3553;f=a.b0.bo;j=B(503);$p=2;case 2:$z=AHt(f,j);if(C()){break _;}d=$z;Cp(c,d);Ba(3042);Df(775,769);CH(a,l-7|0,(h/2|0)-7|0,0,0,16,16);Bc(3042);o=((a.b0.f.dv/3|0)%2|0)!=1?0:1;if(a.b0.f.dv<10)o=0;p=a.b0.f.bS;q=a.b0.f.tA;NF(a.vl,Long_fromInt(Bj(a.rP,312871)));if(!AJ2(a.b0.cy)){Bc(3042);Ba(32826);B3();Bv(180.0,1.0,0.0,0.0);Hu();BD();r=
0;c=l-90|0;m=(h-16|0)-3|0;if(r>=9){DQ();Bc(32826);if(!a.b0.u.ll)Cy(i,B(504),2,2,16777215);else{Cy(i,BL(I(I(I(BX(),B(505)),a.b0.lv),B(27))),2,2,16777215);Cy(i,Mg(a.b0),2,12,16777215);Cy(i,Oh(a.b0),2,22,16777215);Cy(i,MH(a.b0),2,32,16777215);s=Kt();t=JV();u=Long_sub(t,Ka());j=BL(I(C6(I(C6(I(C6(I(BX(),B(506)),Long_div(Long_mul(u,Long_fromInt(100)),s)),B(499)),Long_div(Long_div(u,Long_fromInt(1024)),Long_fromInt(1024))),B(507)),Long_div(Long_div(s,Long_fromInt(1024)),Long_fromInt(1024))),B(497)));Hq(a,i,j,(g-Dw(i,
j)|0)-2|0,2,14737632);f=BL(I(C6(I(C6(I(BX(),B(498)),Long_div(Long_mul(t,Long_fromInt(100)),s)),B(499)),Long_div(Long_div(t,Long_fromInt(1024)),Long_fromInt(1024))),B(500)));Hq(a,i,f,(g-Dw(i,f)|0)-2|0,12,14737632);}m=0;e=h-8|0;while(m<De(a.g3)&&m<10){if(Z(a.g3,m).oz<200)Cy(i,Z(a.g3,m).yr,2,(e-(m*9|0)|0)-20|0,16777215);m=m+1|0;}return;}n=(c+(r*20|0)|0)+2|0;$p=3;continue _;}r=ACY(a.b0.f);n=0;v=h-32|0;w=l+91|0;d=R(p,4);while(n<10){if(r>0){x=(w-(n*8|0)|0)-9|0;c=R((n*2|0)+1|0,r);if(c<0)CH(a,x,v,34,9,9,9);if(!c)CH(a,
x,v,25,9,9,9);if(c>0)CH(a,x,v,16,9,9,9);}y=0;if(o)y=1;z=m+(n*8|0)|0;c=d>0?v:v+E(a.vl,2)|0;CH(a,z,c,16+(y*9|0)|0,0,9,9);if(o){e=R((n*2|0)+1|0,q);if(e<0)CH(a,z,c,70,0,9,9);if(!e)CH(a,z,c,79,0,9,9);}e=R((n*2|0)+1|0,p);if(e<0)CH(a,z,c,52,0,9,9);if(!e)CH(a,z,c,61,0,9,9);n=n+1|0;}f=a.b0.f;j=BfQ;$p=4;continue _;case 3:AEv(a,r,n,m,b);if(C()){break _;}r=r+1|0;if(r>=9){DQ();Bc(32826);if(!a.b0.u.ll)Cy(i,B(504),2,2,16777215);else{Cy(i,BL(I(I(I(BX(),B(505)),a.b0.lv),B(27))),2,2,16777215);Cy(i,Mg(a.b0),2,12,16777215);Cy(i,
Oh(a.b0),2,22,16777215);Cy(i,MH(a.b0),2,32,16777215);s=Kt();t=JV();u=Long_sub(t,Ka());j=BL(I(C6(I(C6(I(C6(I(BX(),B(506)),Long_div(Long_mul(u,Long_fromInt(100)),s)),B(499)),Long_div(Long_div(u,Long_fromInt(1024)),Long_fromInt(1024))),B(507)),Long_div(Long_div(s,Long_fromInt(1024)),Long_fromInt(1024))),B(497)));Hq(a,i,j,(g-Dw(i,j)|0)-2|0,2,14737632);f=BL(I(C6(I(C6(I(BX(),B(498)),Long_div(Long_mul(t,Long_fromInt(100)),s)),B(499)),Long_div(Long_div(t,Long_fromInt(1024)),Long_fromInt(1024))),B(500)));Hq(a,i,f,(g
-Dw(i,f)|0)-2|0,12,14737632);}m=0;e=h-8|0;while(m<De(a.g3)&&m<10){if(Z(a.g3,m).oz<200)Cy(i,Z(a.g3,m).yr,2,(e-(m*9|0)|0)-20|0,16777215);m=m+1|0;}return;}n=(c+(r*20|0)|0)+2|0;continue _;case 4:a:{$z=AGG(f,j);if(C()){break _;}c=$z;if(c){c=Un((a.b0.f.ga-2|0)*10.0/300.0)|0;ba=(Un(a.b0.f.ga*10.0/300.0)|0)-c|0;x=0;d=c+ba|0;p=v-9|0;while(true){if(x>=d)break a;if(x>=c)CH(a,m+(x*8|0)|0,p,25,18,9,9);else CH(a,m+(x*8|0)|0,p,16,18,9,9);x=x+1|0;}}}Bc(3042);Ba(32826);B3();Bv(180.0,1.0,0.0,0.0);Hu();BD();r=0;c=l-90|0;m=(h-
16|0)-3|0;if(r>=9){DQ();Bc(32826);if(!a.b0.u.ll)Cy(i,B(504),2,2,16777215);else{Cy(i,BL(I(I(I(BX(),B(505)),a.b0.lv),B(27))),2,2,16777215);Cy(i,Mg(a.b0),2,12,16777215);Cy(i,Oh(a.b0),2,22,16777215);Cy(i,MH(a.b0),2,32,16777215);s=Kt();t=JV();u=Long_sub(t,Ka());j=BL(I(C6(I(C6(I(C6(I(BX(),B(506)),Long_div(Long_mul(u,Long_fromInt(100)),s)),B(499)),Long_div(Long_div(u,Long_fromInt(1024)),Long_fromInt(1024))),B(507)),Long_div(Long_div(s,Long_fromInt(1024)),Long_fromInt(1024))),B(497)));Hq(a,i,j,(g-Dw(i,j)|0)-2|0,2,14737632);f
=BL(I(C6(I(C6(I(BX(),B(498)),Long_div(Long_mul(t,Long_fromInt(100)),s)),B(499)),Long_div(Long_div(t,Long_fromInt(1024)),Long_fromInt(1024))),B(500)));Hq(a,i,f,(g-Dw(i,f)|0)-2|0,12,14737632);}m=0;e=h-8|0;while(m<De(a.g3)&&m<10){if(Z(a.g3,m).oz<200)Cy(i,Z(a.g3,m).yr,2,(e-(m*9|0)|0)-20|0,16777215);m=m+1|0;}return;}n=(c+(r*20|0)|0)+2|0;$p=3;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p);}
function AEv(a,b,c,d,e){var f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.b0.f.J.bg.data[b];if(f===null)return;g=f.mD-e;b=R(g,0.0);if(b>0){B3();h=1.0+g/5.0;i=c+8|0;g=i;j=d+12|0;Bw(g,j,0.0);CC(1.0/h,(h+1.0)/2.0,1.0);Bw( -i, -j,0.0);}k=BkP;l=a.b0.e7;m=a.b0.bo;$p=1;case 1:AGg(k,l,m,f,c,d);if(C()){break _;}if(b>0)BD();Lm(BkP,a.b0.e7,a.b0.bo,f,c,d);return;default:
E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AKw(a){var b,c;a.rP=a.rP+1|0;b=0;while(b<a.g3.o){c=Z(a.g3,b);c.oz=c.oz+1|0;b=b+1|0;}}
function Z8(){BkP=XY();}
function Jq(){var a=this;EP.call(a);a.J=null;a.AC=0;a.kZ=0;a.qu=0.0;a.kQ=0.0;a.CH=null;a.x1=0;}
function AFW(a){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AKR(a);if(C()){break _;}a.qu=a.kQ;a.kQ=0.0;return;default:E$();}}C3().s(a,$p);}
function AK5(a){var b,c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.c2=1.6200000047683716;DZ(a,0.6000000238418579,1.7999999523162842);if(a.l!==null){if(a.j>0.0){CT(a,a.d,a.j,a.e);b=a.l;c=a.L;$p=1;continue _;}a.h=0.0;a.i=0.0;a.g=0.0;a.I=0.0;}if(a.l!==null)a.l.bi=a;a.bS=20;a.c0=0;return;case 1:$z=XQ(b,a,c);if(C()){break _;}b=$z;if(b.o){a.j=a.j+1.0;if(a.j>0.0){CT(a,a.d,a.j,a.e);b=a.l;c=a.L;continue _;}}a.h=0.0;a.i=0.0;a.g=0.0;a.I=0.0;if(a.l!==null)a.l.bi
=a;a.bS=20;a.c0=0;return;default:E$();}}C3().s(a,b,c,$p);}
function Y1(a){var b,c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.l.iX&&a.bS<20&&!((a.oO%20|0)*4|0))UJ(a,1);AEh(a.J);a.qu=a.kQ;$p=1;case 1:ACm(a);if(C()){break _;}b=Ce(a.g*a.g+a.h*a.h);c=Io( -a.i*0.20000000298023224)*15.0;if(b>0.10000000149011612)b=0.10000000149011612;if(!(a.cu&&a.bS>0))b=0.0;if(!(!a.cu&&a.bS>0))c=0.0;a.kQ=a.kQ+(b-a.kQ)*0.4000000059604645;a.ji=a.ji+(c-a.ji)*0.800000011920929;if(a.bS<=0)return;d
=a.l;e=Dv(a.L,1.0,0.0,1.0);$p=2;case 2:a:{$z=ADJ(d,a,e);if(C()){break _;}d=$z;if(d!==null){f=0;while(true){if(f>=d.o)break a;Z(d,f).xy(a);f=f+1|0;}}}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function A4x(a){return a.kZ;}
function ALb(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:DZ(a,0.20000000298023224,0.20000000298023224);CT(a,a.d,a.j,a.e);a.i=0.10000000149011612;if(!DJ(a.CH,B(508))){c=a.J;$p=1;continue _;}c=new Cd;BB();Gl(c,BhO,1);d=1;$p=2;continue _;case 1:AIX(c);if(C()){break _;}if(b===null){a.h=0.0;a.g=0.0;}else{a.g= -BC((a.kC+a.t)*3.1415927410125732/180.0)*0.10000000149011612;a.h= -Bq((a.kC+a.t)*3.1415927410125732/180.0)*0.10000000149011612;}a.c2
=0.10000000149011612;return;case 2:AQt(a,c,d);if(C()){break _;}c=a.J;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,$p);}
function AZs(a,b,c){a.kZ=a.kZ+c|0;}
function ALP(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=0;$p=1;case 1:AQt(a,b,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,$p);}
function AQt(a,b,c){var d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b===null)return;d=Ha(a.l,a.d,a.j-0.30000001192092896,a.e,b);d.g8=40;if(c){e=N(a.m)*0.5;f=N(a.m)*3.1415927410125732*2.0;d.g= -Bq(f)*e;d.h=BC(f)*e;d.i=0.20000000298023224;}else{d.g= -Bq(a.t/180.0*3.1415927410125732)*BC(a.I/180.0*3.1415927410125732)*0.30000001192092896;d.h=BC(a.t/180.0*3.1415927410125732)
*BC(a.I/180.0*3.1415927410125732)*0.30000001192092896;d.i= -Bq(a.I/180.0*3.1415927410125732)*0.30000001192092896+0.10000000149011612;e=N(a.m)*3.1415927410125732*2.0;g=0.019999999552965164*N(a.m);h=d.g;i=e;j=GA(i);k=g;d.g=h+j*k;d.i=d.i+(N(a.m)-N(a.m))*0.10000000149011612;d.h=d.h+Gn(i)*k;}b=a.l;$p=1;case 1:AOf(b,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AKQ(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=ADu(a.J,b);b=BfQ;$p=1;case 1:$z=AGG(a,b);if(C()){break _;}d=$z;if(d)c=c/5.0;if(!a.cu)c=c/5.0;return c;default:E$();}}C3().s(a,b,c,d,$p);}
function M4(a,b){return ADU(a.J,b);}
function A5h(a){return 0.11999999731779099;}
function Ym(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hg=0;if(a.bS<=0)return 0;if(a.dv>a.oX/2.0)return 0;if(!(!(b instanceof DO)&&!(b instanceof Jo))){if(!a.l.iX)c=0;if(a.l.iX==1)c=(c/3|0)+1|0;if(a.l.iX==3)c=(c*3|0)/2|0;}d=Bj(c,25-Tw(a.J)|0)+a.x1|0;ADZ(a.J,c);c=d/25|0;a.x1=d%25|0;if(!c)return 0;$p=1;case 1:$z=ABZ(a,b,c);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,$p);}
function AGB(){var a=this;Jq.call(a);a.hU=null;a.k0=null;}
function A6I(a,b,c){var d=new AGB();AYW(d,a,b,c);return d;}
function AYW(a,b,c,d){var e;Fy(a,c);a.oX=20;a.dD=0.0;a.e6=0.0;a.G1=1;a.yj=B(372);a.G0=1;a.DZ=0.0;a.EW=null;a.Jq=1.0;a.uS=0;a.Jr=0.0;a.bS=10;a.kC=0.0;a.c0=0;a.dw=0;a.Cg=0;a.Fb=(-1);a.Jw=BP()*0.8999999761581421+0.10000000149011612;a.hg=0;a.hD=0;a.zK=0.0;a.sU=0.699999988079071;a.mw=1;a.Ik=(BP()+1.0)*0.009999999776482582;CT(a,a.d,a.j,a.e);a.JD=BP()*12398.0;a.t=BP()*3.1415927410125732*2.0;a.GZ=1.0;a.rl=0.5;e=new Vw;e.bg=J(Cd,36);e.ca=J(Cd,4);e.bL=0;e.nx=a;a.J=e;a.AC=0;a.kZ=0;a.x1=0;Kr(a,c.fh+0.5,c.pU,c.fg+0.5,0.0,
0.0);a.c2=1.6200000047683716;a.bS=20;a.EW=B(509);a.DZ=180.0;a.nE=20;a.yj=B(372);a.k0=b;if(c.bi!==null)Ca(c.bi);c.bi=a;if(d!==null&&d.oh!==null&&Bh(d.oh)>0){b=new U;X(b);a.tE=V(I(I(I(b,B(510)),d.oh),B(511)));}a.CH=d.oh;}
function AAM(a){a.iH=a.hU.ky;a.gA=a.hU.kn;a.hD=a.hU.ug;}
function ALk(a){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AOz(a.hU,a);$p=1;case 1:Y1(a);if(C()){break _;}return;default:E$();}}C3().s(a,$p);}
function ARG(a){AOX(a.hU);}
function Es(a,b,c){APq(a.hU,b,c);}
function ABL(a,b){Fp(b,B(512),a.bS<<16>>16);Fp(b,B(513),a.dB<<16>>16);Fp(b,B(514),a.c0<<16>>16);Fp(b,B(515),a.dw<<16>>16);Gu(b,B(516),a.kZ);HC(b,B(325),AL3(a.J,L8()));}
function AOU(a,b){var c;a.bS=FH(b,B(512));if(!YW(b,B(512)))a.bS=10;a.dB=FH(b,B(513));a.c0=FH(b,B(514));a.dw=FH(b,B(515));a.kZ=FR(b,B(516));c=Kf(b,B(325));ARm(a.J,c);}
function YX(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.k0;d=Bb2(a.J,b);$p=1;case 1:ADT(c,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function AI8(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.k0;d=new SG;D0(d);d.z7=B(517);d.f3=0;d.fR=b;$p=1;case 1:ADT(c,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function ANo(a){var b,c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.k0;c=new Xg;d=a.J;H$(c);c.mj=A0B(c,3,3);c.uj=A5i();S(c.c5,A3q(c,c.mj,c.uj,0,124,35));e=0;while(e<3){f=0;while(f<3){S(c.c5,D5(c,c.mj,f+(e*3|0)|0,30+(f*18|0)|0,17+(e*18|0)|0));f=f+1|0;}e=e+1|0;}e=0;while(e<3){f=0;while(f<9){S(c.c5,D5(c,d,f+((e+1|0)*9|0)|0,8+(f*18|0)|0,84+(e*18|0)|0));f=f+1|0;}e=e+1|0;}e=0;while(e<9){S(c.c5,D5(c,d,e,8+(e*18|0)|0,142));e
=e+1|0;}$p=1;case 1:ADT(b,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AO1(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.k0;d=new Wg;e=a.J;H$(d);d.sD=b;S(d.c5,D5(d,b,0,56,17));S(d.c5,D5(d,b,1,56,53));S(d.c5,D5(d,b,2,116,35));f=0;while(f<3){g=0;while(g<9){S(d.c5,D5(d,e,g+((f+1|0)*9|0)|0,8+(g*18|0)|0,84+(f*18|0)|0));g=g+1|0;}f=f+1|0;}h=0;while(h<9){S(d.c5,D5(d,e,h,8+(h*18|0)|0,142));h=h+1|0;}$p=1;case 1:ADT(c,d);if(C()){break _;}return;default:E$();}}C3().s(a,
b,c,d,e,f,g,h,$p);}
function Ko(a){return D8(a.J);}
function Jv(a){AFB(a.J,a.J.bL,null);}
function ADt(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=ARS(a.J,b);if(c<=0)return;$p=1;case 1:b.fp(a,c);if(C()){break _;}d=Ko(a);if(d!==null&&b instanceof EP){AEZ(d,b);if(d.p<=0)Jv(a);}return;default:E$();}}C3().s(a,b,c,d,$p);}
function RR(a,b){var c,d;c=a.k0.c4;d=new UX;Fz(d,a.k0.z,b.d,b.j,b.e,b.g,b.i,b.h);d.p4=0;d.q9=0;d.ms=b;d.hN=a;d.q9=3;d.AM=(-0.5);Ek(c,d);}
function ACY(a){return Tw(a.J);}
function Vj(a,b){var c;if(!b.uB(a)){c=Ko(a);if(c!==null&&b instanceof EP){AEz(c,b);if(c.p<=0)Jv(a);}}}
function AJE(){D.call(this);}
function BkQ(){var a=new AJE();AWa(a);return a;}
function AWa(a){return;}
function AME(b){Bd();Beh=b;if(b){BdY=0.0;BdZ=0.0;setTimeout(Cu(new Qu,"onTimer"),200);}else{Bef=B$();if(Beg)clearTimeout(Beg);Beg=0;BdD.exitPointerLock();}}
function Fw(){var b,c;a:{Bd();Beb=null;if(!PR(BdU)){b=Td(BdU,0);Beb=b;if(b!==null){c=1;break a;}}c=0;}return c;}
function Cx(){Bd();return Beb===null?0:DJ($rt_str(Beb.type),B(518));}
function ARV(){Bd();return Beb===null?(-1):Beb.clientX;}
function XO(){Bd();return Beb===null?(-1):BdF.clientHeight-Beb.clientY|0;}
function CV(){var b;Bd();if(Beb===null)b=(-1);else{b=Beb.button;if(b==1)b=2;else if(b==2)b=1;}return b;}
function B9(b){Bd();return Bed.data[b];}
function G0(){Bd();return !DJ(B(519),$rt_str(Beb.type))?0:Beb.deltaY===0.0?0:Beb.deltaY<=0.0?1:(-1);}
function Qi(){D.call(this);}
var BkR=null;function BkS(){var a=new Qi();ANK(a);return a;}
function ANK(a){return;}
function Bq(b){return BkR.data[(b*651.8986206054688|0)&4095];}
function BC(b){return BkR.data[((b+1.5707963705062866)*651.8986206054688|0)&4095];}
function D$(b){return Ec(b);}
function Ce(b){return Ec(b);}
function K2(b){var c;c=b|0;if(b<c)c=c-1|0;return c;}
function K(b){var c;c=b|0;if(b<c)c=c-1|0;return c;}
function GI(b,c){return b>=0?b/c|0: -(( -b-1|0)/c|0)-1|0;}
function AL2(){var b,c,d,e;BkR=$rt_createFloatArray(4096);b=0;while(b<4096){BkR.data[b]=Gn((b+0.5)/4096.0*6.2831854820251465);b=b+1|0;}c=0;while(c<360){d=BkR.data;e=c;d[(e*11.377778053283691|0)&4095]=Gn(e*0.01745329238474369);c=c+90|0;}}
function Vi(){var a=this;D.call(a);a.Et=null;a.bI=0;}
function E7(a,b){var c=new Vi();A1T(c,a,b);return c;}
function A1T(a,b,c){a.Et=b;a.bI=c;}
function FA(){}
function Vw(){var a=this;D.call(a);a.bg=null;a.ca=null;a.bL=0;a.nx=null;}
function D8(a){return a.bg.data[a.bL];}
function SU(a,b){var c;c=0;while(true){if(c>=a.bg.data.length)return (-1);if(a.bg.data[c]!==null&&a.bg.data[c].bA==b)break;c=c+1|0;}return c;}
function RB(a){var b;b=0;while(true){if(b>=a.bg.data.length)return (-1);if(a.bg.data[b]===null)break;b=b+1|0;}return b;}
function ARh(a,b,c){var d;d=SU(a,b);if(d>=0&&d<9)a.bL=d;}
function F1(a,b){if(b>0)b=1;if(b<0)b=(-1);a.bL=a.bL-b|0;while(a.bL<0){a.bL=a.bL+9|0;}while(a.bL>=9){a.bL=a.bL-9|0;}}
function AEh(a){var b,c;b=0;while(b<a.bg.data.length){if(a.bg.data[b]!==null&&a.bg.data[b].mD>0){c=a.bg.data[b];c.mD=c.mD-1|0;}b=b+1|0;}}
function AGO(a,b){var c,d;c=SU(a,b);if(c<0)return 0;d=a.bg.data[c];b=d.p-1|0;d.p=b;if(b<=0)a.bg.data[c]=null;return 1;}
function U5(a,b){var c,d,e,f;if(!b.ej){c=b.bA;d=b.p;e=0;a:{while(true){if(e>=a.bg.data.length){e=(-1);break a;}if(a.bg.data[e]!==null&&a.bg.data[e].bA==c&&a.bg.data[e].p<EA(a.bg.data[e])&&a.bg.data[e].p<64)break;e=e+1|0;}}if(e<0)e=RB(a);if(e>=0){if(a.bg.data[e]===null)a.bg.data[e]=Kx(c,0);c=d<=(EA(a.bg.data[e])-a.bg.data[e].p|0)?d:EA(a.bg.data[e])-a.bg.data[e].p|0;if(c>(64-a.bg.data[e].p|0))c=64-a.bg.data[e].p|0;if(c){d=d-c|0;f=a.bg.data[e];f.p=f.p+c|0;a.bg.data[e].mD=5;}}b.p=d;if(!b.p)return 1;}c=RB(a);if(c
<0)return 0;a.bg.data[c]=b;a.bg.data[c].mD=5;return 1;}
function El(a,b,c){var d,e,f;d=a.bg;if(b>=a.bg.data.length){d=a.ca;b=b-a.bg.data.length|0;}d=d.data;if(d[b]===null)return null;if(d[b].p<=c){e=d[b];d[b]=null;return e;}f=EE(d[b],c);if(!d[b].p)d[b]=null;return f;}
function AFB(a,b,c){var d;d=a.bg;if(b>=a.bg.data.length){d=a.ca;b=b-a.bg.data.length|0;}d.data[b]=c;}
function ADu(a,b){var c;c=1.0;if(a.bg.data[a.bL]!==null)c=c*AFh(a.bg.data[a.bL],b);return c;}
function AL3(a,b){var c,d,e;c=0;while(c<a.bg.data.length){if(a.bg.data[c]!==null){d=G7();JG(d,B(520),c<<24>>24);QI(a.bg.data[c],d);Jm(b,d);}c=c+1|0;}e=0;while(e<a.ca.data.length){if(a.ca.data[e]!==null){d=G7();JG(d,B(520),(e+100|0)<<24>>24);QI(a.ca.data[e],d);Jm(b,d);}e=e+1|0;}return b;}
function ARm(a,b){var c,d,e;a.bg=J(Cd,36);a.ca=J(Cd,4);c=0;while(c<AOs(b)){d=Fc(b,c);e=LA(d,B(520))&255;if(e>=0&&e<a.bg.data.length)a.bg.data[e]=A$$(d);if(e>=100&&e<(a.ca.data.length+100|0))a.ca.data[e-100|0]=A$$(d);c=c+1|0;}}
function Yn(a){return a.bg.data.length+4|0;}
function RJ(a,b){var c;c=a.bg;if(b>=a.bg.data.length){c=a.ca;b=b-a.bg.data.length|0;}return c.data[b];}
function ATq(a){return B(325);}
function AZp(a){return 64;}
function ARS(a,b){var c;c=RJ(a,a.bL);return c===null?1:AAi(c,b);}
function ADU(a,b){var c;if(b.b8!==Bg_&&b.b8!==Bho)return 1;c=RJ(a,a.bL);return c===null?0:AN8(c,b);}
function AIi(a,b){return a.ca.data[b];}
function Tw(a){var b,c,d,e,f;b=0;c=0;d=0;e=0;while(e<a.ca.data.length){if(a.ca.data[e]!==null&&DK(a.ca.data[e]) instanceof FZ){f=Kj(a.ca.data[e]);c=c+(f-a.ca.data[e].ej|0)|0;d=d+f|0;b=b+DK(a.ca.data[e]).y4|0;}e=e+1|0;}if(!d)return 0;return (Bj(b-1|0,c)/d|0)+1|0;}
function ADZ(a,b){var c;c=0;while(c<a.ca.data.length){if(a.ca.data[c]!==null&&DK(a.ca.data[c]) instanceof FZ){FI(a.ca.data[c],b);if(!a.ca.data[c].p)a.ca.data[c]=null;}c=c+1|0;}}
function AIX(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;while(true){if(b>=a.bg.data.length){b=0;while(b<a.ca.data.length){if(a.ca.data[b]!==null){c=a.nx;d=a.ca.data[b];e=1;$p=2;continue _;}b=b+1|0;}return;}if(a.bg.data[b]!==null)break;b=b+1|0;}c=a.nx;d=a.bg.data[b];e=1;$p=1;case 1:AQt(c,d,e);if(C()){break _;}a.bg.data[b]=null;while(true){b=b+1|0;if(b>=a.bg.data.length){b=0;while(b<a.ca.data.length){if(a.ca.data[b]
!==null){c=a.nx;d=a.ca.data[b];e=1;$p=2;continue _;}b=b+1|0;}return;}if(a.bg.data[b]===null)continue;else break;}c=a.nx;d=a.bg.data[b];e=1;continue _;case 2:AQt(c,d,e);if(C()){break _;}a.ca.data[b]=null;while(true){b=b+1|0;if(b>=a.ca.data.length)break;if(a.ca.data[b]===null)continue;else{c=a.nx;d=a.ca.data[b];e=1;continue _;}}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AAl(a){return;}
function Du(){IV.call(this);}
function Ev(){var a=this;CS.call(a);a.br=null;a.e8=0;a.fj=0;a.c5=null;}
var BkT=null;function BkU(){var a=new Ev();H$(a);return a;}
function H$(a){D0(a);a.br=null;a.e8=176;a.fj=166;a.c5=Ci();}
function ACe(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABd(a);if(C()){break _;}e=(a.bm-a.e8|0)/2|0;f=(a.bC-a.fj|0)/2|0;$p=2;case 2:a.sX(d);if(C()){break _;}B3();Bv(180.0,1.0,0.0,0.0);Hu();BD();B3();Bw(e,f,0.0);BU(1.0,1.0,1.0,1.0);Ba(32826);g=0;if(g>=a.c5.o){if(a.br===null){Bc(32826);DQ();Bc(2896);Bc(2929);a.lm();Ba(2896);Ba(2929);BD();return;}Bw(0.0,
0.0,32.0);h=BkT;i=a.bY;j=a.K.bo;k=a.br;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;}h=Z(a.c5,g);i=h.e0;l=h.lI;m=h.jI;n=h.jK;i=i.gv(l);if(i===null){l=h.rQ();if(l>=0){Bc(2896);i=a.K.bo;j=a.K.bo;k=B(230);$p=5;continue _;}}j=BkT;k=a.bY;o=a.K.bo;$p=4;continue _;case 3:AGg(h,i,j,k,b,c);if(C()){break _;}Lm(BkT,a.bY,a.K.bo,a.br,b,c);Bc(32826);DQ();Bc(2896);Bc(2929);a.lm();Ba(2896);Ba(2929);BD();return;case 4:AGg(j,k,o,i,m,n);if(C()){break _;}Lm(BkT,a.bY,a.K.bo,i,m,n);if(M6(h,b,c)){Bc(2896);Bc(2929);l=h.jI;p=h.jK;KJ(a,
l,p,l+16|0,p+16|0,(-2130706433),(-2130706433));Ba(2896);Ba(2929);}g=g+1|0;if(g>=a.c5.o){if(a.br===null){Bc(32826);DQ();Bc(2896);Bc(2929);a.lm();Ba(2896);Ba(2929);BD();return;}Bw(0.0,0.0,32.0);h=BkT;i=a.bY;j=a.K.bo;k=a.br;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;}h=Z(a.c5,g);i=h.e0;l=h.lI;m=h.jI;n=h.jK;i=i.gv(l);if(i===null){l=h.rQ();if(l>=0){Bc(2896);i=a.K.bo;j=a.K.bo;k=B(230);$p=5;continue _;}}j=BkT;k=a.bY;o=a.K.bo;continue _;case 5:$z=AHt(j,k);if(C()){break _;}p=$z;Ea(i,p);CH(a,m,n,(l%16|0)*16|0,(l/16|
0)*16|0,16,16);Ba(2896);if(M6(h,b,c)){Bc(2896);Bc(2929);l=h.jI;p=h.jK;KJ(a,l,p,l+16|0,p+16|0,(-2130706433),(-2130706433));Ba(2896);Ba(2929);}g=g+1|0;if(g>=a.c5.o){if(a.br===null){Bc(32826);DQ();Bc(2896);Bc(2929);a.lm();Ba(2896);Ba(2929);BD();return;}Bw(0.0,0.0,32.0);h=BkT;i=a.bY;j=a.K.bo;k=a.br;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;}h=Z(a.c5,g);i=h.e0;l=h.lI;m=h.jI;n=h.jK;i=i.gv(l);if(i===null){l=h.rQ();if(l>=0){Bc(2896);i=a.K.bo;j=a.K.bo;k=B(230);continue _;}}j=BkT;k=a.bY;o=a.K.bo;$p=4;continue _;default:
E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AQw(a,b,c){var d,e;d=0;while(true){if(d>=a.c5.o)return null;e=Z(a.c5,d);if(M6(e,b,c))break;d=d+1|0;}return e;}
function AN3(a,b,c,d){var e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(d&&d!=1)){e=AQw(a,b,c);if(e!==null){$p=1;continue _;}if(a.br!==null){f=(a.bm-a.e8|0)/2|0;g=(a.bC-a.fj|0)/2|0;if(!(b>=f&&c>=g&&b<(f+a.e8|0)&&c<(g+a.e8|0))){h=a.K.f;if(!d){e=a.br;$p=2;continue _;}if(d==1){e=EE(a.br,1);$p=3;continue _;}}}}return;case 1:a:{AKy(e);if(C()){break _;}i=ARu(e);if(!(i===null&&a.br===null)){if
(i!==null&&a.br===null){g=!d?i.p:(i.p+1|0)/2|0;a.br=e.e0.j0(e.lI,g);if(i.p){$p=4;continue _;}h=null;$p=5;continue _;}if(i===null&&a.br!==null&&e.s1(a.br)){g=d?1:a.br.p;if(g>e.e0.f4())g=e.e0.f4();h=EE(a.br,g);$p=7;continue _;}if(i!==null&&a.br!==null){if(!e.s1(a.br)){if(i.bA!=a.br.bA)break a;if(EA(a.br)<=1)break a;g=i.p;if(g<=0)break a;if((g+a.br.p|0)>EA(a.br))break a;h=a.br;h.p=h.p+g|0;EE(i,g);if(i.p){$p=8;continue _;}h=null;$p=9;continue _;}if(i.bA==a.br.bA){if(i.bA==a.br.bA){if(!d){g=a.br.p;if(g>(e.e0.f4()
-i.p|0))g=e.e0.f4()-i.p|0;if(g>(EA(a.br)-i.p|0))g=EA(a.br)-i.p|0;EE(a.br,g);if(!a.br.p)a.br=null;i.p=i.p+g|0;}else if(d==1){g=1;if(g>(e.e0.f4()-i.p|0))g=e.e0.f4()-i.p|0;if(g>(EA(a.br)-i.p|0))g=EA(a.br)-i.p|0;EE(a.br,g);if(!a.br.p)a.br=null;i.p=i.p+g|0;}}}else if(a.br.p<=e.e0.f4()){h=a.br;$p=6;continue _;}}}}return;case 2:ALP(h,e);if(C()){break _;}a.br=null;if(d!=1)return;e=EE(a.br,1);$p=3;case 3:ALP(h,e);if(C()){break _;}if(!a.br.p)a.br=null;return;case 4:e.Jh();if(C()){break _;}return;case 5:ALu(e,h);if(C())
{break _;}$p=4;continue _;case 6:ALu(e,h);if(C()){break _;}a.br=i;return;case 7:ALu(e,h);if(C()){break _;}if(!a.br.p)a.br=null;return;case 8:e.Jh();if(C()){break _;}return;case 9:ALu(e,h);if(C()){break _;}$p=8;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function A9J(a,b,c,d){return;}
function AAt(a,b,c){var d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!=1&&c!=a.K.u.fr.bI)return;d=a.K;e=null;$p=1;case 1:ADT(d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AAW(a){var b,c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.br===null)return;b=a.K.f;c=a.br;$p=1;case 1:ALP(b,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,$p);}
function A$3(a){return 0;}
function AJ$(){BkT=XY();}
function APM(){var a=this;Ev.call(a);a.jW=null;a.xu=null;a.Av=0.0;a.El=0.0;}
function E6(a){var b=new APM();AZM(b,a);return b;}
function AZM(a,b){var c,d,e,f,g;H$(a);a.jW=A0B(a,2,2);a.xu=A5i();a.pN=1;S(a.c5,A3q(a,a.jW,a.xu,0,144,36));c=0;while(c<2){d=0;while(d<2){S(a.c5,D5(a,a.jW,d+(c*2|0)|0,88+(d*18|0)|0,26+(c*18|0)|0));d=d+1|0;}c=c+1|0;}d=0;while(d<4){e=a.c5;f=new QD;Uv(f,a,b,(Yn(b)-1|0)-d|0,8,8+(d*18|0)|0);f.HQ=a;f.wd=d;S(e,f);d=d+1|0;}d=0;while(d<3){g=0;while(g<9){S(a.c5,D5(a,b,g+((d+1|0)*9|0)|0,8+(g*18|0)|0,84+(d*18|0)|0));g=g+1|0;}d=d+1|0;}c=0;while(c<9){S(a.c5,D5(a,b,c,8+(c*18|0)|0,142));c=c+1|0;}}
function ALG(a){var b,c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AAW(a);if(C()){break _;}b=0;while(b<a.jW.lQ){c=Gd(a.jW,b);if(c!==null){d=a.K.f;$p=2;continue _;}b=b+1|0;}return;case 2:ALP(d,c);if(C()){break _;}while(true){b=b+1|0;if(b>=a.jW.lQ)break;c=Gd(a.jW,b);if(c===null)continue;else{d=a.K.f;continue _;}}return;default:E$();}}C3().s(a,b,c,d,$p);}
function ATQ(a,b){var c,d,e,f,g,h;c=$rt_createIntArray(9);d=c.data;e=0;while(e<3){f=0;while(f<3){g=(-1);if(e<2&&f<2){h=Gd(a.jW,e+(f*2|0)|0);if(h!==null)g=h.bA;}d[e+(f*3|0)|0]=g;f=f+1|0;}e=e+1|0;}Pe(a.xu,0,RF(Wl(),c));}
function AZ4(a){EC(a.bY,B(521),86,16,4210752);}
function ADX(a,b,c,d){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ACe(a,b,c,d);if(C()){break _;}a.Av=b;a.El=c;return;default:E$();}}C3().s(a,b,c,d,$p);}
function X5(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.K.bo;d=B(522);$p=1;case 1:$z=AHt(c,d);if(C()){break _;}e=$z;BU(1.0,1.0,1.0,1.0);Ea(a.K.bo,e);f=(a.bm-a.e8|0)/2|0;g=(a.bC-a.fj|0)/2|0;CH(a,f,g,0,0,a.e8,a.fj);Ba(32826);Ba(2903);B3();b=f+51|0;e=g+75|0;Bw(b,e,50.0);CC((-30.0),30.0,30.0);Bv(180.0,
0.0,0.0,1.0);h=a.K.f.dD;i=a.K.f.t;j=a.K.f.I;k=b-a.Av;l=(e-50|0)-a.El;Bv(135.0,0.0,1.0,0.0);Hu();Bv((-135.0),0.0,1.0,0.0);m=l/40.0;Bv( -Io(m)*20.0,1.0,0.0,0.0);d=a.K.f;n=k/40.0;d.dD=Io(n)*20.0;a.K.f.t=Io(n)*40.0;a.K.f.I= -Io(m)*20.0;Bw(0.0,a.K.f.c2,0.0);d=Bgo;c=a.K.f;m=0.0;n=0.0;o=0.0;b=0.0;p=1.0;$p=2;case 2:AQC(d,c,m,n,o,b,p);if(C()){break _;}a.K.f.dD=h;a.K.f.t=i;a.K.f.I=j;BD();DQ();Bc(32826);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function I2(){var a=this;D.call(a);a.qR=0;a.st=0;a.vv=0;a.vA=0;a.xt=0;a.DF=0;a.cF=null;a.wa=null;a.wb=null;a.wc=null;a.t4=null;a.ub=null;a.u$=null;a.w2=null;a.vw=null;a.uJ=null;a.tO=null;a.uo=null;a.uw=null;a.wk=null;a.t1=null;a.x6=null;a.q5=0;a.pS=0;a.oA=0;a.Gn=0;a.G2=0;a.t7=null;a.uG=null;a.w8=0;a.wR=null;a.vt=null;a.v3=null;a.yc=null;a.yi=null;a.xV=null;a.mi=null;a.mA=null;a.vq=0;a.rW=0.0;a.rV=0.0;a.rU=0.0;a.rT=0.0;a.sy=0.0;a.tm=0.0;a.rE=0.0;a.sk=0.0;a.qP=0.0;a.qQ=0.0;a.tc=0.0;a.tb=0.0;a.ta=0.0;a.s_=0.0;a.sS
=0.0;a.sQ=0.0;a.sR=0.0;}
var BkV=null;var BkW=null;function Baf(a,b,c,d,e,f,g){var h=new I2();AIe(h,a,b,c,d,e,f,g);return h;}
function O6(b){var c,d,e,f,g,h,i;c=BkV.data[b];if(c===null){d=0;e=0;f=0;g=0;h=0;i=0;if((b&1)==1)d=1;if((b&4)==4)e=1;if((b&8)==8)f=1;if((b&16)==16)g=1;if((b&32)==32)h=1;if((b&64)==64)i=1;c=Baf(b,d,e,f,g,h,i);BkV.data[b]=c;}return c;}
function AIe(a,b,c,d,e,f,g,h){var i,j,k;WD(a);a.wa=null;a.wb=null;a.wc=null;a.t4=null;a.ub=null;a.u$=null;a.w2=null;a.vw=null;a.uJ=null;a.tO=null;a.uo=null;a.uw=null;a.wk=null;a.t1=null;a.x6=null;a.w8=0;a.wR=$rt_createFloatArray(16);a.vt=$rt_createFloatArray(16);a.v3=$rt_createFloatArray(16);a.yc=Ks(M3());a.yi=Ks(M3());a.xV=Ks(M3());a.mi=A2X();a.mA=A2X();a.vq=0;a.rW=0.0;a.rV=0.0;a.rU=0.0;a.rT=0.0;a.sy=0.0;a.tm=0.0;a.rE=0.0;a.sk=0.0;a.qP=0.0;a.qQ=0.0;a.tc=0.0;a.tb=0.0;a.ta=0.0;a.s_=0.0;a.sS=0.0;a.sQ=0.0;a.sR
=0.0;a.qR=c;a.st=d;a.vv=e;a.vA=f;a.xt=g;a.DF=h;if(BkW===null)BkW=AB8(B(523));i=B(3);if(a.qR)i=BL(I(I(BX(),i),B(524)));if(a.st)i=BL(I(I(BX(),i),B(525)));if(a.vv)i=BL(I(I(BX(),i),B(526)));if(a.vA)i=BL(I(I(BX(),i),B(527)));if(a.xt)i=BL(I(I(BX(),i),B(528)));if(a.DF)i=BL(I(I(BX(),i),B(529)));i=BL(I(I(BX(),i),BkW));j=Oz(35633);OV(j,BL(I(I(I(BX(),PB()),B(530)),i)));Wz(j);if(!U_(j)){Cg(C1(),NZ(BL(I(I(BX(),B(531)),T4(j))),B(158),B(532)));M(ZY(B(533)));}k=Oz(35632);OV(k,BL(I(I(I(BX(),PB()),B(534)),i)));Wz(k);if(!U_(k))
{Cg(C1(),NZ(BL(I(I(BX(),B(531)),T4(k))),B(158),B(535)));M(ZY(B(533)));}a.cF=AH2();R7(a.cF,j);R7(a.cF,k);b=1;a.q5=0;LU(a.cF,a.q5,B(536));if(!a.st)a.pS=(-1);else{a.pS=b;LU(a.cF,a.pS,B(537));b=2;}if(!a.qR)a.oA=(-1);else{c=b+1|0;a.oA=b;LU(a.cF,a.oA,B(538));b=c;}a.Gn=(-1);a.G2=b;AAC(a.cF);UE(a.cF,j);UE(a.cF,k);S_(j);S_(k);if(!AGn(a.cF)){Cg(C1(),NZ(BL(I(I(BX(),B(531)),AHu(a.cF))),B(158),B(539)));M(ZY(B(533)));}VU(a.cF);a.wa=Dq(a.cF,B(540));a.wb=Dq(a.cF,B(541));a.wc=Dq(a.cF,B(542));a.tO=Dq(a.cF,B(543));if(a.vv){a.uo
=Dq(a.cF,B(544));a.t1=Dq(a.cF,B(545));a.x6=Dq(a.cF,B(546));}if(a.vA){a.t4=Dq(a.cF,B(547));a.ub=Dq(a.cF,B(548));a.u$=Dq(a.cF,B(549));a.w2=Dq(a.cF,B(550));a.vw=Dq(a.cF,B(551));a.uJ=Dq(a.cF,B(552));}if(a.xt)a.uw=Dq(a.cF,B(553));Q5(Dq(a.cF,B(554)),0);a.wk=Dq(a.cF,B(555));a.t7=O5();a.uG=L6();RL(a.t7);Hc(34962,a.uG);Ru(a);}
function Ru(a){N1(a.q5);N3(a.q5,3,5126,0,28,0);if(a.st){N1(a.pS);N3(a.pS,2,5126,0,28,12);}if(a.qR){N1(a.oA);N3(a.oA,4,5121,1,28,20);}}
function AQX(a){VU(a.cF);}
function AT_(a){return;}
function AMp(a,b){if(!Ls(b,a.yc)){NP(GO(a.yc,b),a.wR);Mf(a.wa,a.wR);}}
function AMZ(a,b){if(!Ls(b,a.yi)){NP(GO(a.yi,b),a.vt);Mf(a.wb,a.vt);}}
function ZT(a,b){if(!Ls(b,a.xV)){NP(GO(a.xV,b),a.v3);Mf(a.wc,a.v3);}}
function AM_(a,b,c){if(!(S3(b,a.mi)&&S3(c,a.mA))){Vz(a.mi,b);Vz(a.mA,c);Ln(a.t1,a.mi.k9,a.mi.k$,a.mi.k8);Ln(a.x6,a.mA.k9,a.mA.k$,a.mA.k8);}}
function ALm(a,b){if(a.vq!=b){a.vq=b;Q5(a.ub,b%2|0);Ib(a.uJ,b/2|0);}}
function AP$(a,b,c,d,e){if(!(a.rW===b&&a.rV===c&&a.rU===d&&a.rT===e)){a.rW=b;a.rV=c;a.rU=d;a.rT=e;Uc(a.t4,a.rW,a.rV,a.rU,a.rT);}}
function APJ(a,b,c){if(!(a.sy===b&&a.tm===c)){a.sy=b;a.tm=c;Ib(a.u$,a.sy);Ib(a.w2,a.tm);}}
function AKJ(a,b){if(a.rE!==b){a.rE=b;Ib(a.vw,a.rE);}}
function AIS(a,b){if(a.sk!==b){a.sk=b;Ib(a.uw,a.sk);}}
function AOH(a,b,c){var d,e;if(!(a.qP===b&&a.qQ===c)){a.qP=b;a.qQ=c;d=a.wk;b=a.qP;c=a.qQ;Bd();if(d!==null){e=BdI;d=d.kt;e.uniform2f(d,b,c);}}}
function ALJ(a,b,c,d,e){if(!(a.tc===b&&a.tb===c&&a.ta===d&&a.s_===e)){a.tc=b;a.tb=c;a.ta=d;a.s_=e;Uc(a.tO,a.tc,a.tb,a.ta,a.s_);}}
function AB4(a,b,c,d){if(!(a.sS===b&&a.sQ===c&&a.sR===d)){a.sS=b;a.sQ=c;a.sR=d;Ln(a.uo,a.sS,a.sQ,a.sR);}}
function AOO(){BkV=J(I2,128);BkW=null;}
function Rm(){var a=this;D.call(a);a.Bp=0;a.rd=null;a.oY=null;a.lH=0;a.jF=0;}
function Ta(){var a=this;D.call(a);a.tV=null;a.xk=0;a.Dl=0;a.Fa=0;}
function AHo(){var a=this;D.call(a);a.k3=0;a.h8=0;a.h9=0;a.h$=0;a.hG=0;a.gw=null;a.nw=null;}
function A0A(a,b,c,d,e){var f=new AHo();A58(f,a,b,c,d,e);return f;}
function A1a(a){var b=new AHo();A9B(b,a);return b;}
function A58(a,b,c,d,e,f){a.k3=0;a.h8=b;a.h9=c;a.h$=d;a.hG=e;a.gw=BY(f.w,f.y,f.v);}
function A9B(a,b){a.k3=1;a.nw=b;a.gw=BY(b.d,b.j,b.e);}
function Cd(){var a=this;D.call(a);a.p=0;a.mD=0;a.bA=0;a.ej=0;}
function ALZ(a){var b=new Cd();AH0(b,a);return b;}
function GZ(a,b){var c=new Cd();U1(c,a,b);return c;}
function Qe(a){var b=new Cd();DA(b,a);return b;}
function EK(a,b){var c=new Cd();Gl(c,a,b);return c;}
function Kx(a,b){var c=new Cd();MJ(c,a,b);return c;}
function Ok(a,b,c){var d=new Cd();A0E(d,a,b,c);return d;}
function A$$(a){var b=new Cd();A1t(b,a);return b;}
function AH0(a,b){U1(a,b,1);}
function U1(a,b,c){MJ(a,b.b,c);}
function DA(a,b){Gl(a,b,1);}
function Gl(a,b,c){MJ(a,b.cU,c);}
function MJ(a,b,c){a.p=0;a.bA=b;a.p=c;}
function A0E(a,b,c,d){a.p=0;a.bA=b;a.p=c;a.ej=d;}
function A1t(a,b){a.p=0;AD8(a,b);}
function EE(a,b){a.p=a.p-b|0;return Ok(a.bA,b,a.ej);}
function DK(a){BB();return Bhe.data[a.bA];}
function DI(a){return DK(a).s9;}
function AJe(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=DK(a);$p=1;case 1:$z=h.iI(a,b,c,d,e,f,g);if(C()){break _;}d=$z;return d;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AFh(a,b){return DK(a).xW(a,b);}
function ABc(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=DK(a);$p=1;case 1:$z=d.n5(a,b,c);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,$p);}
function QI(a,b){Fp(b,B(556),a.bA<<16>>16);JG(b,B(557),a.p<<24>>24);Fp(b,B(558),a.ej<<16>>16);return b;}
function AD8(a,b){a.bA=FH(b,B(556));a.p=LA(b,B(557));a.ej=FH(b,B(558));}
function EA(a){return DK(a).eW;}
function Kj(a){BB();return Bhe.data[a.bA].fd;}
function FI(a,b){a.ej=a.ej+b|0;if(a.ej>Kj(a)){a.p=a.p-1|0;if(a.p<0)a.p=0;a.ej=0;}}
function AEZ(a,b){BB();Bhe.data[a.bA].r_(a,b);}
function QB(a,b,c,d,e){BB();Bhe.data[a.bA].xQ(a,b,c,d,e);}
function AAi(a,b){BB();return Bhe.data[a.bA].nW(b);}
function AN8(a,b){BB();return Bhe.data[a.bA].o5(b);}
function A09(a,b){return;}
function AEz(a,b){BB();Bhe.data[a.bA].yy(a,b);}
function ZH(){var a=this;D.call(a);a.h2=null;a.lQ=0;a.se=null;}
function A0B(a,b,c){var d=new ZH();AWs(d,a,b,c);return d;}
function AWs(a,b,c,d){a.lQ=Bj(c,d);a.h2=J(Cd,a.lQ);a.se=b;}
function A3o(a){return a.lQ;}
function Gd(a,b){return a.h2.data[b];}
function AEW(a,b,c){var d,e;if(a.h2.data[b]===null)return null;if(a.h2.data[b].p<=c){d=a.h2.data[b];a.h2.data[b]=null;a.se.tj(a);return d;}e=EE(a.h2.data[b],c);if(!a.h2.data[b].p)a.h2.data[b]=null;a.se.tj(a);return e;}
function A3C(a,b,c){a.h2.data[b]=c;a.se.tj(a);}
function A80(a){return 64;}
function ADO(a){return;}
function AAB(){D.call(this);this.m3=null;}
function A5i(){var a=new AAB();ASQ(a);return a;}
function ASQ(a){a.m3=J(Cd,1);}
function A46(a,b){return a.m3.data[b];}
function AWA(a,b,c){var d;if(a.m3.data[b]===null)return null;d=a.m3.data[b];a.m3.data[b]=null;return d;}
function Pe(a,b,c){a.m3.data[b]=c;}
function AYT(a){return 64;}
function ANg(a){return;}
function HH(){var a=this;D.call(a);a.lI=0;a.jI=0;a.jK=0;a.e0=null;a.pX=null;}
function D5(a,b,c,d,e){var f=new HH();Uv(f,a,b,c,d,e);return f;}
function Uv(a,b,c,d,e,f){a.pX=b;a.e0=c;a.lI=d;a.jI=e;a.jK=f;}
function M6(a,b,c){var d,e;d=(a.pX.bm-a.pX.e8|0)/2|0;e=(a.pX.bC-a.pX.fj|0)/2|0;d=b-d|0;c=c-e|0;return d>=(a.jI-1|0)&&d<((a.jI+16|0)+1|0)&&c>=(a.jK-1|0)&&c<((a.jK+16|0)+1|0)?1:0;}
function AK8(a){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AKy(a);if(C()){break _;}return;default:E$();}}C3().s(a,$p);}
function AXe(a,b){return 1;}
function ARu(a){return a.e0.gv(a.lI);}
function ALu(a,b){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.e0.jw(a.lI,b);$p=1;case 1:AKy(a);if(C()){break _;}return;default:E$();}}C3().s(a,b,$p);}
function A9S(a){return (-1);}
function AKy(a){var b,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.e0;$p=1;case 1:b.kd();if(C()){break _;}return;default:E$();}}C3().s(a,b,$p);}
function ADc(){HH.call(this);this.qI=null;}
function A3q(a,b,c,d,e,f){var g=new ADc();A4T(g,a,b,c,d,e,f);return g;}
function A4T(a,b,c,d,e,f,g){Uv(a,b,d,e,f,g);a.qI=c;}
function A0j(a,b){return 0;}
function AN6(a){var b;b=0;while(b<a.qI.lQ){if(Gd(a.qI,b)!==null)AEW(a.qI,b,1);b=b+1|0;}}
function QD(){var a=this;HH.call(a);a.wd=0;a.HQ=null;}
function A2R(a,b){return !(DK(b) instanceof FZ)?0:DK(b).zO!=a.wd?0:1;}
function AWu(a){return 15+(a.wd*16|0)|0;}
function V7(){D.call(this);this.DT=null;}
function St(){var a=this;D.call(a);a.AU=null;a.vI=0;}
function M0(){Fj.call(this);}
function ALO(b){var c,d;c=b.data.length;d=new UN;T8(d,c,0,0+c|0);d.xN=0;d.Bm=0;d.wI=b;return d;}
function AFe(a){Ez(a);return a;}
function A2B(a){Gr(a);return a;}
function Dg(){var a=this;D.call(a);a.iy=null;a.Hu=null;a.HY=null;a.l5=0.0;a.BT=0.0;}
function BkX(){var a=new Dg();EG(a);return a;}
function EG(a){a.Hu=A$Y();a.HY=Kg();a.l5=0.0;a.BT=1.0;}
function AKq(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.iy.tU;$p=1;case 1:$z=AHt(c,b);if(C()){break _;}d=$z;Ea(c,d);return;default:E$();}}C3().s(a,b,c,d,$p);}
function APn(a,b,c){var d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=a.iy.tU;$p=1;case 1:$z=AD2(d,b,c);if(C()){break _;}e=$z;Ea(d,e);return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AG0(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bc(2896);L();g=Bgp.bb;h=(g&15)<<4;i=g&240;f=h;j=f/256.0;k=(f+15.989999771118164)/256.0;f=i;l=f/256.0;m=(f+15.989999771118164)/256.0;B3();Bw(c,d,e);n=b.cZ*1.399999976158142;CC(n,n,n);o=B(179);$p
=1;case 1:AKq(a,o);if(C()){break _;}BA();o=BeL;p=1.0;q=0.0;r=b.eL/b.cZ;Bv( -a.iy.rk,0.0,1.0,0.0);Bw(0.0,0.0,0.4000000059604645+(r|0)*0.019999999552965164);BU(1.0,1.0,1.0,1.0);Bz(o);e=k;s=m;t=j;u=l;while(r>0.0){c=p-0.5;d=0.0-q;G(o,c,d,0.0,e,s);G(o,(-0.5),d,0.0,t,s);d=1.399999976158142-q;G(o,(-0.5),d,0.0,t,u);G(o,c,d,0.0,e,u);r=r-1.0;q=q-1.0;p=p*0.8999999761581421;Bw(0.0,0.0,(-0.03999999910593033));}Br(o);BD();Ba(2896);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function A8q(b,c,d,e){var f;Bc(3553);BA();f=BeL;BU(1.0,1.0,1.0,1.0);Bz(f);E_(f,c,d,e);Cj(0.0,0.0,(-1.0));Bf(f,b.R,b.U,b.S);Bf(f,b.V,b.U,b.S);Bf(f,b.V,b.M,b.S);Bf(f,b.R,b.M,b.S);Cj(0.0,0.0,1.0);Bf(f,b.R,b.M,b.W);Bf(f,b.V,b.M,b.W);Bf(f,b.V,b.U,b.W);Bf(f,b.R,b.U,b.W);Cj(0.0,(-1.0),0.0);Bf(f,b.R,b.M,b.S);Bf(f,b.V,b.M,b.S);Bf(f,b.V,b.M,b.W);Bf(f,b.R,b.M,b.W);Cj(0.0,1.0,0.0);Bf(f,b.R,b.U,b.W);Bf(f,b.V,b.U,b.W);Bf(f,b.V,b.U,b.S);Bf(f,b.R,b.U,b.S);Cj((-1.0),0.0,0.0);Bf(f,b.R,b.M,b.W);Bf(f,b.R,b.U,b.W);Bf(f,b.R,b.U,
b.S);Bf(f,b.R,b.M,b.S);Cj(1.0,0.0,0.0);Bf(f,b.V,b.M,b.S);Bf(f,b.V,b.U,b.S);Bf(f,b.V,b.U,b.W);Bf(f,b.V,b.M,b.W);E_(f,0.0,0.0,0.0);Br(f);Ba(3553);}
function AUE(a,b){a.iy=b;}
function ANh(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AJS(a.iy,b.d,b.j,b.e);if(b.cT<=0)return;$p=1;case 1:AG0(a,b,c,d,e,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AIG(){var a=this;Dg.call(a);a.wz=null;a.ic=null;}
function XY(){var a=new AIG();A5x(a);return a;}
function A5x(a){EG(a);a.wz=Kg();a.ic=new Dz;a.l5=0.15000000596046448;a.BT=0.75;}
function APE(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=b.nb;B3();i=Bq((b.mE+g)/10.0+b.ym)*0.10000000149011612+0.10000000149011612;j=((b.mE+g)/20.0+b.ym)*57.2957763671875;k=1;if(b.nb.p>1)k=2;if(b.nb.p>5)k=3;if(b.nb.p>20)k=4;Bw(c,d+
i,e);Ba(32826);if(h.bA<256){L();if(!BeP.data[h.bA].ei()){Bv(j,0.0,1.0,0.0);b=B(179);$p=3;continue _;}}CC(0.5,0.5,0.5);l=DI(h);if(h.bA>=256){b=B(230);$p=1;continue _;}b=B(179);$p=2;continue _;case 1:AKq(a,b);if(C()){break _;}BA();m=BeL;n=(l%16|0)*16|0;o=(n+0|0)/256.0;p=(n+16|0)/256.0;l=(l/16|0)*16|0;q=(l+0|0)/256.0;r=(l+16|0)/256.0;s=0;d=o;e=r;t=p;u=q;while(s<k){B3();if(s>0)Bw((N(a.ic)*2.0-1.0)*0.30000001192092896,(N(a.ic)*2.0-1.0)*0.30000001192092896,(N(a.ic)*2.0-1.0)*0.30000001192092896);Bv(180.0-a.iy.rk,0.0,
1.0,0.0);Bz(m);Cj(0.0,1.0,0.0);G(m,(-0.5),(-0.25),0.0,d,e);G(m,0.5,(-0.25),0.0,t,e);G(m,0.5,0.75,0.0,t,u);G(m,(-0.5),0.75,0.0,d,u);Br(m);BD();s=s+1|0;}Bc(32826);BD();return;case 2:AKq(a,b);if(C()){break _;}BA();m=BeL;n=(l%16|0)*16|0;o=(n+0|0)/256.0;p=(n+16|0)/256.0;l=(l/16|0)*16|0;q=(l+0|0)/256.0;r=(l+16|0)/256.0;s=0;d=o;e=r;t=p;u=q;while(s<k){B3();if(s>0)Bw((N(a.ic)*2.0-1.0)*0.30000001192092896,(N(a.ic)*2.0-1.0)*0.30000001192092896,(N(a.ic)*2.0-1.0)*0.30000001192092896);Bv(180.0-a.iy.rk,0.0,1.0,0.0);Bz(m);Cj(0.0,
1.0,0.0);G(m,(-0.5),(-0.25),0.0,d,e);G(m,0.5,(-0.25),0.0,t,e);G(m,0.5,0.75,0.0,t,u);G(m,(-0.5),0.75,0.0,d,u);Br(m);BD();s=s+1|0;}Bc(32826);BD();return;case 3:AKq(a,b);if(C()){break _;}v=0.25;if(!BeP.data[h.bA].gh()&&h.bA!=BeU.b)v=0.5;CC(v,v,v);n=0;while(n<k){B3();if(n>0)Bw((N(a.ic)*2.0-1.0)*0.20000000298023224/v,(N(a.ic)*2.0-1.0)*0.20000000298023224/v,(N(a.ic)*2.0-1.0)*0.20000000298023224/v);GV(a.wz,BeP.data[h.bA]);BD();n=n+1|0;}Bc(32826);BD();return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,
s,t,u,v,$p);}
function AGg(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(d!==null){if(d.bA<256){L();if(!BeP.data[d.bA].ei()){g=d.bA;b=B(179);$p=1;continue _;}}if(DI(d)>=0){Bc(2896);if(d.bA>=256){b=B(230);$p=2;continue _;}b=B(179);$p=3;continue _;}}return;case 1:$z=AHt(c,b);if(C()){break _;}h=$z;Ea(c,h);i=BeP.data[g];B3();Bw(e-2|0,f+3|0,0.0);CC(10.0,10.0,10.0);Bw(1.0,0.5,8.0);Bv(210.0,1.0,
0.0,0.0);Bv(45.0,0.0,1.0,0.0);BU(1.0,1.0,1.0,1.0);GV(a.wz,i);BD();return;case 2:$z=AHt(c,b);if(C()){break _;}g=$z;Ea(c,g);WW(a,e,f,(DI(d)%16|0)*16|0,(DI(d)/16|0)*16|0,16,16);Ba(2896);return;case 3:$z=AHt(c,b);if(C()){break _;}g=$z;Ea(c,g);WW(a,e,f,(DI(d)%16|0)*16|0,(DI(d)/16|0)*16|0,16,16);Ba(2896);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function Lm(a,b,c,d,e,f){var g,h,i,j,k,l;if(d!==null){if(d.p>1){c=new U;X(c);g=V(Be(I(c,B(3)),d.p));Bc(2896);Bc(2929);Cy(b,g,((e+19|0)-2|0)-Dw(b,g)|0,(f+6|0)+3|0,16777215);Ba(2896);Ba(2929);}if(d.ej>0){h=13-((d.ej*13|0)/Kj(d)|0)|0;i=255-((d.ej*255|0)/Kj(d)|0)|0;Bc(2896);Bc(2929);Bc(3553);BA();j=BeL;k=255-i|0;l=k<<16|i<<8;k=(k/4|0)<<16|16128;e=e+2|0;f=f+13|0;NX(a,j,e,f,13,2,0);NX(a,j,e,f,12,1,k);NX(a,j,e,f,h,1,l);Ba(3553);Ba(2896);Ba(2929);BU(1.0,1.0,1.0,1.0);}}}
function NX(a,b,c,d,e,f,g){var h,i,j;Bz(b);ER(b,g);h=c+0|0;i=d+0|0;Bf(b,h,i,0.0);j=d+f|0;Bf(b,h,j,0.0);h=c+e|0;Bf(b,h,j,0.0);Bf(b,h,i,0.0);Br(b);}
function WW(a,b,c,d,e,f,g){var h,i,j,k,l,m,n;BA();h=BeL;Bz(h);i=b+0|0;j=c+g|0;k=(d+0|0)*0.00390625;l=(e+g|0)*0.00390625;G(h,i,j,0.0,k,l);m=b+f|0;n=(d+f|0)*0.00390625;G(h,m,j,0.0,n,l);l=c+0|0;j=(e+0|0)*0.00390625;G(h,m,l,0.0,n,j);G(h,i,l,0.0,k,j);Br(h);}
function AC4(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:APE(a,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function O8(){var a=this;D.call(a);a.BH=null;a.Ig=0;a.Id=0;a.Gf=0;a.G9=0;}
function Qw(){var a=this;D.call(a);a.f1=null;a.x3=null;}
function Zn(a,b){var c,d,e,f,g,h,i,j,k,l;if(Hj()===null)Bd_=BdD.createElement("canvas");if(Hj().width<a.f1.width){b=Hj();c=a.f1.width;b.width=c;}if(Hj().height<a.f1.height){b=Hj();c=a.f1.height;b.height=c;}if(JN()===null)Bea=Hj().getContext("2d");b=JN();d=a.f1.width;e=a.f1.height;b.clearRect(0.0,0.0,d,e);b=JN();c=a.f1;d=a.f1.width;e=a.f1.height;b.drawImage(c,0.0,0.0,d,e);b=JN();d=a.f1.width;e=a.f1.height;f=b.getImageData(0.0,0.0,d,e);c=f.data;g=Bj(f.width,f.height);WB($rt_str(a.f1.src));if(c.byteLength<(g*4
|0)){CM(a.x3,null);return;}h=$rt_createIntArray(g);i=h.data;j=0;g=i.length;while(j<g){k=j*4|0;i[j]=c[k]<<16|c[k+1|0]<<8|c[k+2|0]|c[k+3|0]<<24;j=j+1|0;}b=a.x3;c=new Ta;k=f.width;l=f.height;if(g==Bj(k,l)){c.xk=k;c.Dl=l;c.Fa=1;c.tV=h;CM(b,c);return;}b=new Cb;Bl(b,B(559));M(b);}
function A7s(a,b){Zn(a,b);}
function Qv(){var a=this;D.call(a);a.Ef=null;a.EX=null;}
function AJD(a,b){WB($rt_str(a.Ef.src));CM(a.EX,null);}
function A7E(a,b){AJD(a,b);}
function It(){M0.call(this);}
function BkY(a,b,c){var d=new It();T8(d,a,b,c);return d;}
function T8(a,b,c,d){KM(a,b);a.bk=c;a.cv=d;}
function AGa(a){var b,c;if(a.bk<a.cv){b=a.bk;a.bk=b+1|0;return a.yk(b);}c=new Go;O(c);M(c);}
function NI(a,b){var c,d;if(a.mV()){c=new FQ;O(c);M(c);}if(a.bk<a.cv){d=a.bk;a.bk=d+1|0;a.u0(d,b);return a;}c=new G9;O(c);M(c);}
function QV(a,b){var c,d;if(b>=0&&b<a.cv)return AOI(a,b);c=new BO;d=new U;X(d);Bl(c,V(I(Be(I(Be(I(d,B(273)),b),B(244)),a.cv),B(27))));M(c);}
function AQ0(a,b,c){var d,e;if(a.mV()){d=new FQ;O(d);M(d);}if(b>=0&&b<a.cv){ANG(a,b,c);return a;}e=new BO;d=new U;X(d);Bl(e,V(I(Be(I(Be(I(d,B(273)),b),B(244)),a.cv),B(27))));M(e);}
function AXS(a){return a.mV();}
function UN(){var a=this;It.call(a);a.Bm=0;a.xN=0;a.wI=null;}
function AOI(a,b){return a.wI.data[b+a.xN|0];}
function ANG(a,b,c){a.wI.data[b+a.xN|0]=c;}
function ASO(a){return a.Bm;}
function V0(){D.call(this);this.jl=null;}
function VW(){var a=this;D.call(a);a.iU=null;a.xe=0;}
function Xc(){D.call(this);this.kt=null;}
function Jj(){B6.call(this);}
function BkZ(){var a=new Jj();AYd(a);return a;}
function AYd(a){O(a);}
function UB(){var a=this;CS.call(a);a.Aq=null;a.Ap=null;a.qq=null;a.En=null;}
function ADe(a){DF(a.bG);S(a.bG,Dj(0,(a.bm/2|0)-100|0,(a.bC/4|0)+72|0,B(560)));DF(a.qq);DC(a.qq,AQA(a.bY,a.Ap));}
function AOB(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.cC)return;b=a.K;c=a.En;$p=1;case 1:ADT(b,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,$p);}
function AMy(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABd(a);if(C()){break _;}DD(a,a.bY,a.Aq,(a.bm/2|0)-5|0,70,16777215);e=90;f=Jf(a.qq);while(KA(f)){g=KR(f);DD(a,a.bY,g,(a.bm/2|0)-5|0,e,16777215);e=e+9|0;}$p=2;case 2:AFC(a,b,c,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function FQ(){Jj.call(this);}
function Bk0(){var a=new FQ();A6N(a);return a;}
function A6N(a){O(a);}
function G9(){B6.call(this);}
function Bk1(){var a=new G9();A5U(a);return a;}
function A5U(a){O(a);}
function Go(){B6.call(this);}
function Bk2(){var a=new Go();A1E(a);return a;}
function A1E(a){O(a);}
function Tr(){var a=this;D.call(a);a.yL=null;a.Dc=null;a.vB=0;a.rG=0;}
function AAv(a){return Fk(a.yL);}
function N4(a,b){return Ct(a.Dc)<b?0:1;}
function A5P(a,b){a.vB=b;}
function A_Q(a,b){a.rG=b;}
function ACj(){var a=this;D.call(a);a.yr=null;a.oz=0;}
function Rs(){CS.call(this);}
function Bk3(){var a=new Rs();A6P(a);return a;}
function A6P(a){D0(a);}
function Mk(){CS.call(this);}
function Bk4(){var a=new Mk();A94(a);return a;}
function A94(a){D0(a);}
function AOk(a){DF(a.bG);S(a.bG,Dj(1,(a.bm/2|0)-100|0,(a.bC/4|0)+72|0,B(561)));S(a.bG,Dj(2,(a.bm/2|0)-100|0,(a.bC/4|0)+96|0,B(562)));if(a.K.kV===null)Z(a.bG,1).hh=0;}
function AMi(a,b,c){return;}
function AOu(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.cC==1){c=a.K;$p=1;continue _;}if(b.cC!=2)return;b=a.K;c=null;$p=3;continue _;case 1:ASu(c);if(C()){break _;}c=a.K;d=null;$p=2;case 2:ADT(c,d);if(C()){break _;}if(b.cC!=2)return;b=a.K;c=null;$p=3;case 3:ABH(b,c);if(C()){break _;}b=a.K;c=LL();$p=4;case 4:ADT(b,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function APl(a,b,c,d){var e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:KJ(a,0,0,a.bm,a.bC,1615855616,(-1602211792));B3();CC(2.0,2.0,2.0);DD(a,a.bY,B(563),(a.bm/2|0)/2|0,30,16777215);BD();e=a.bY;f=new U;X(f);DD(a,e,V(Be(I(f,B(564)),a.K.f.kZ)),a.bm/2|0,100,16777215);$p=1;case 1:AFC(a,b,c,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function A6Q(a){return 0;}
function C0(){var a=this;C5.call(a);a.e4=0;a.Bf=0.0;a.Bg=0.0;a.dn=0;a.ct=0;a.dp=0.0;a.m2=0.0;a.hW=0.0;a.ib=0.0;a.im=0.0;}
var BkM=0.0;var BkN=0.0;var BkO=0.0;function Bk5(a,b,c,d,e,f,g){var h=new C0();Fz(h,a,b,c,d,e,f,g);return h;}
function Fz(a,b,c,d,e,f,g,h){var i,j;Fy(a,b);a.dn=0;a.ct=0;DZ(a,0.20000000298023224,0.20000000298023224);a.c2=a.eL/2.0;CT(a,c,d,e);a.im=1.0;a.ib=1.0;a.hW=1.0;a.g=f+(BP()*2.0-1.0)*0.4000000059604645;a.i=g+(BP()*2.0-1.0)*0.4000000059604645;a.h=h+(BP()*2.0-1.0)*0.4000000059604645;i=(BP()+BP()+1.0)*0.15000000596046448;j=Ce(a.g*a.g+a.i*a.i+a.h*a.h);c=a.g;d=j;c=c/d;e=i;a.g=c*e*0.4000000059604645;a.i=a.i/d*e*0.4000000059604645+0.10000000149011612;a.h=a.h/d*e*0.4000000059604645;a.Bf=N(a.m)*3.0;a.Bg=N(a.m)*3.0;a.dp=
(N(a.m)*0.5+0.5)*2.0;a.ct=4.0/(N(a.m)*0.8999999761581421+0.10000000149011612)|0;a.dn=0;a.i4=0;}
function APp(a,b){var c,d;c=a.g;d=b;a.g=c*d;a.i=(a.i-0.10000000149011612)*d+0.10000000149011612;a.h=a.h*d;return a;}
function X8(a,b){var c;c=0.20000000298023224*b;DZ(a,c,c);a.dp=a.dp*b;return a;}
function ALl(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bR=a.d;a.cQ=a.j;a.bQ=a.e;b=a.dn;a.dn=b+1|0;if(b>=a.ct){$p=2;continue _;}a.i=a.i-0.04*a.m2;c=a.g;d=a.i;e=a.h;$p=1;case 1:ARD(a,c,d,e);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;if(a.cu){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;case 2:Ca(a);if(C()){break _;}a.i=a.i-0.04*a.m2;c=a.g;d=a.i;e=
a.h;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,$p);}
function ANr(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.e4%16|0)/16.0;j=i+0.062437500804662704;k=(a.e4/16|0)/16.0;l=k+0.062437500804662704;m=0.10000000149011612*a.dp;n=a.bR;o=a.d-a.bR;p
=c;q=n+o*p-BkM;r=a.cQ+(a.j-a.cQ)*p-BkN;s=a.bQ+(a.e-a.bQ)*p-BkO;$p=1;case 1:$z=a.va(c);if(C()){break _;}t=$z;Cq(b,a.hW*t,a.ib*t,a.im*t);u=d*m;t=q-u;v=g*m;n=t-v;c=e*m;o=r-c;d=f*m;e=s-d;f=h*m;w=e-f;p=i;x=l;G(b,n,o,w,p,x);n=t+v;w=r+c;y=e+f;z=k;G(b,n,w,y,p,z);c=q+u;n=c+v;d=s+d;p=d+f;y=j;G(b,n,w,p,y,z);G(b,c-v,o,d-f,y,x);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function A71(a){return 0;}
function AAX(){var a=this;CS.call(a);a.tr=0;a.oc=0;}
function Bcq(){var a=new AAX();AWb(a);return a;}
function AWb(a){D0(a);a.tr=0;a.oc=0;}
function ARb(a){a.tr=0;DF(a.bG);S(a.bG,Dj(1,(a.bm/2|0)-100|0,(a.bC/4|0)+48|0,B(565)));S(a.bG,Dj(4,(a.bm/2|0)-100|0,(a.bC/4|0)+24|0,B(566)));S(a.bG,Dj(0,(a.bm/2|0)-100|0,(a.bC/4|0)+96|0,B(492)));}
function ADk(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b.cC){c=a.K;d=A3z(a,a.K.u);$p=1;continue _;}if(b.cC==1){c=a.K;d=null;$p=2;continue _;}if(b.cC!=4)return;b=a.K;c=null;$p=4;continue _;case 1:ADT(c,d);if(C()){break _;}if(b.cC==1){c=a.K;d=null;$p=2;continue _;}if(b.cC!=4)return;b=a.K;c=null;$p=4;continue _;case 2:ABH(c,d);if(C()){break _;}c=a.K;d=LL();$p=3;case 3:ADT(c,d);if(C()){break _;}if(b.cC!=4)return;b=a.K;c=null;$p
=4;case 4:ADT(b,c);if(C()){break _;}b=a.K;$p=5;case 5:AFi(b);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function A2e(a){a.oc=a.oc+1|0;}
function ADK(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABd(a);if(C()){break _;}e=a.K.z;f=a.tr;a.tr=f+1|0;$p=2;case 2:$z=AAJ(e,f);if(C()){break _;}f=$z;f=f?0:1;if(!(!f&&a.oc>=20)){g=255.0*(Bq(((a.oc%10|0)+d)/10.0*3.1415927410125732*2.0)*0.20000000298023224+0.800000011920929)|0;Cy(a.bY,B(567),8,a.bC-16|0,g<<16|g<<8|g);}DD(a,a.bY,B(568),a.bm/2|0,40,16777215);$p=3;case 3:AFC(a,b,c,d);if
(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function Lx(){var a=this;D.call(a);a.be=null;a.ba=null;a.Z=null;a.bc=null;}
function Bk6(){var a=new Lx();AHr(a);return a;}
function AHr(a){a.be=$rt_createFloatMultiArray([16,16]);a.ba=$rt_createFloatArray(16);a.Z=$rt_createFloatArray(16);a.bc=$rt_createFloatArray(16);}
function ARM(a,b,c,d,e,f,g){var h;h=0;while(h<6){if(a.be.data[h].data[0]*b+a.be.data[h].data[1]*c+a.be.data[h].data[2]*d+a.be.data[h].data[3]<=0.0&&a.be.data[h].data[0]*e+a.be.data[h].data[1]*c+a.be.data[h].data[2]*d+a.be.data[h].data[3]<=0.0&&a.be.data[h].data[0]*b+a.be.data[h].data[1]*f+a.be.data[h].data[2]*d+a.be.data[h].data[3]<=0.0&&a.be.data[h].data[0]*e+a.be.data[h].data[1]*f+a.be.data[h].data[2]*d+a.be.data[h].data[3]<=0.0&&a.be.data[h].data[0]*b+a.be.data[h].data[1]*c+a.be.data[h].data[2]*g+a.be.data[h].data[3]
<=0.0&&a.be.data[h].data[0]*e+a.be.data[h].data[1]*c+a.be.data[h].data[2]*g+a.be.data[h].data[3]<=0.0&&a.be.data[h].data[0]*b+a.be.data[h].data[1]*f+a.be.data[h].data[2]*g+a.be.data[h].data[3]<=0.0&&a.be.data[h].data[0]*e+a.be.data[h].data[1]*f+a.be.data[h].data[2]*g+a.be.data[h].data[3]<=0.0)return 0;h=h+1|0;}return 1;}
function Wy(){var a=this;Lx.call(a);a.oS=null;a.n0=null;a.zp=null;}
var Bk7=null;function BaR(){var a=new Wy();AFt(a);return a;}
function AFt(a){AHr(a);a.oS=HY(16);a.n0=HY(16);a.zp=HY(16);}
function RO(){AJP(Bk7);return Bk7;}
function GU(a,b,c){var d,e;b=b.data;d=D$(b[c].data[0]*b[c].data[0]+b[c].data[1]*b[c].data[1]+b[c].data[2]*b[c].data[2]);e=b[c].data;e[0]=e[0]/d;e=b[c].data;e[1]=e[1]/d;e=b[c].data;e[2]=e[2]/d;b=b[c].data;b[3]=b[3]/d;}
function AJP(a){LR(a.oS);LR(a.n0);LR(a.zp);TK(2983,a.oS);TK(2982,a.n0);P7(TG(a.oS),16);VE(a.oS,a.ba);P7(TG(a.n0),16);VE(a.n0,a.Z);a.bc.data[0]=a.Z.data[0]*a.ba.data[0]+a.Z.data[1]*a.ba.data[4]+a.Z.data[2]*a.ba.data[8]+a.Z.data[3]*a.ba.data[12];a.bc.data[1]=a.Z.data[0]*a.ba.data[1]+a.Z.data[1]*a.ba.data[5]+a.Z.data[2]*a.ba.data[9]+a.Z.data[3]*a.ba.data[13];a.bc.data[2]=a.Z.data[0]*a.ba.data[2]+a.Z.data[1]*a.ba.data[6]+a.Z.data[2]*a.ba.data[10]+a.Z.data[3]*a.ba.data[14];a.bc.data[3]=a.Z.data[0]*a.ba.data[3]+a.Z.data[1]
*a.ba.data[7]+a.Z.data[2]*a.ba.data[11]+a.Z.data[3]*a.ba.data[15];a.bc.data[4]=a.Z.data[4]*a.ba.data[0]+a.Z.data[5]*a.ba.data[4]+a.Z.data[6]*a.ba.data[8]+a.Z.data[7]*a.ba.data[12];a.bc.data[5]=a.Z.data[4]*a.ba.data[1]+a.Z.data[5]*a.ba.data[5]+a.Z.data[6]*a.ba.data[9]+a.Z.data[7]*a.ba.data[13];a.bc.data[6]=a.Z.data[4]*a.ba.data[2]+a.Z.data[5]*a.ba.data[6]+a.Z.data[6]*a.ba.data[10]+a.Z.data[7]*a.ba.data[14];a.bc.data[7]=a.Z.data[4]*a.ba.data[3]+a.Z.data[5]*a.ba.data[7]+a.Z.data[6]*a.ba.data[11]+a.Z.data[7]*a.ba.data[15];a.bc.data[8]
=a.Z.data[8]*a.ba.data[0]+a.Z.data[9]*a.ba.data[4]+a.Z.data[10]*a.ba.data[8]+a.Z.data[11]*a.ba.data[12];a.bc.data[9]=a.Z.data[8]*a.ba.data[1]+a.Z.data[9]*a.ba.data[5]+a.Z.data[10]*a.ba.data[9]+a.Z.data[11]*a.ba.data[13];a.bc.data[10]=a.Z.data[8]*a.ba.data[2]+a.Z.data[9]*a.ba.data[6]+a.Z.data[10]*a.ba.data[10]+a.Z.data[11]*a.ba.data[14];a.bc.data[11]=a.Z.data[8]*a.ba.data[3]+a.Z.data[9]*a.ba.data[7]+a.Z.data[10]*a.ba.data[11]+a.Z.data[11]*a.ba.data[15];a.bc.data[12]=a.Z.data[12]*a.ba.data[0]+a.Z.data[13]*a.ba.data[4]
+a.Z.data[14]*a.ba.data[8]+a.Z.data[15]*a.ba.data[12];a.bc.data[13]=a.Z.data[12]*a.ba.data[1]+a.Z.data[13]*a.ba.data[5]+a.Z.data[14]*a.ba.data[9]+a.Z.data[15]*a.ba.data[13];a.bc.data[14]=a.Z.data[12]*a.ba.data[2]+a.Z.data[13]*a.ba.data[6]+a.Z.data[14]*a.ba.data[10]+a.Z.data[15]*a.ba.data[14];a.bc.data[15]=a.Z.data[12]*a.ba.data[3]+a.Z.data[13]*a.ba.data[7]+a.Z.data[14]*a.ba.data[11]+a.Z.data[15]*a.ba.data[15];a.be.data[0].data[0]=a.bc.data[3]-a.bc.data[0];a.be.data[0].data[1]=a.bc.data[7]-a.bc.data[4];a.be.data[0].data[2]
=a.bc.data[11]-a.bc.data[8];a.be.data[0].data[3]=a.bc.data[15]-a.bc.data[12];GU(a,a.be,0);a.be.data[1].data[0]=a.bc.data[3]+a.bc.data[0];a.be.data[1].data[1]=a.bc.data[7]+a.bc.data[4];a.be.data[1].data[2]=a.bc.data[11]+a.bc.data[8];a.be.data[1].data[3]=a.bc.data[15]+a.bc.data[12];GU(a,a.be,1);a.be.data[2].data[0]=a.bc.data[3]+a.bc.data[1];a.be.data[2].data[1]=a.bc.data[7]+a.bc.data[5];a.be.data[2].data[2]=a.bc.data[11]+a.bc.data[9];a.be.data[2].data[3]=a.bc.data[15]+a.bc.data[13];GU(a,a.be,2);a.be.data[3].data[0]
=a.bc.data[3]-a.bc.data[1];a.be.data[3].data[1]=a.bc.data[7]-a.bc.data[5];a.be.data[3].data[2]=a.bc.data[11]-a.bc.data[9];a.be.data[3].data[3]=a.bc.data[15]-a.bc.data[13];GU(a,a.be,3);a.be.data[4].data[0]=a.bc.data[3]-a.bc.data[2];a.be.data[4].data[1]=a.bc.data[7]-a.bc.data[6];a.be.data[4].data[2]=a.bc.data[11]-a.bc.data[10];a.be.data[4].data[3]=a.bc.data[15]-a.bc.data[14];GU(a,a.be,4);a.be.data[5].data[0]=a.bc.data[3]+a.bc.data[2];a.be.data[5].data[1]=a.bc.data[7]+a.bc.data[6];a.be.data[5].data[2]=a.bc.data[11]
+a.bc.data[10];a.be.data[5].data[3]=a.bc.data[15]+a.bc.data[14];GU(a,a.be,5);}
function AG7(){Bk7=BaR();}
function QZ(){}
function AFS(){var a=this;D.call(a);a.C1=null;a.vs=0.0;a.vV=0.0;a.v_=0.0;}
function Bby(){var a=new AFS();A8$(a);return a;}
function A8$(a){a.C1=RO();}
function AOi(a,b,c,d){a.vs=b;a.vV=c;a.v_=d;}
function AAe(a,b,c,d,e,f,g){var h,i;h=b-a.vs;i=c-a.vV;b=d-a.v_;d=e-a.vs;e=f-a.vV;c=g-a.v_;return ARM(a.C1,h,i,b,d,e,c);}
function ME(a,b){return AAe(a,b.R,b.M,b.S,b.V,b.U,b.W);}
function OZ(){D.call(this);}
var Bk8=null;function Bk9(){var a=new OZ();ALf(a);return a;}
function ALf(a){return;}
function DQ(){Bc(2896);Bc(16384);Bc(16385);Bc(2903);}
function Hu(){var b;Ba(2896);Ba(16384);Ba(16385);Ba(2903);b=CD(BY(0.699999988079071,1.0,(-0.20000000298023224)));RD(b.w,b.y,b.v,0.0);Fo(0.6000000238418579,0.6000000238418579,0.6000000238418579,1.0);Fo(0.0,0.0,0.0,1.0);Fo(0.0,0.0,0.0,1.0);b=CD(BY((-0.699999988079071),1.0,0.20000000298023224));RD(b.w,b.y,b.v,0.0);Fo(0.6000000238418579,0.6000000238418579,0.6000000238418579,1.0);Fo(0.0,0.0,0.0,1.0);Fo(0.0,0.0,0.0,1.0);Fo(0.4000000059604645,0.4000000059604645,0.4000000059604645,1.0);}
function RD(b,c,d,e){return Fo(b,c,d,e);}
function Fo(b,c,d,e){Ez(Bk8);CJ(CJ(CJ(CJ(Bk8,b),c),d),e);Gr(Bk8);return Bk8;}
function ASf(){Bk8=HY(16);}
function Id(){var a=this;D.call(a);a.zX=null;a.gn=null;a.nt=null;}
function Bk$(a,b,c){var d=new Id();K4(d,a,b,c);return d;}
function K4(a,b,c,d){a.zX=b;a.gn=c;a.nt=d;}
function A6u(a){return a.gn.gl()+a.nt.gl()|0;}
function A6h(a){return a.zX;}
function AS7(a,b){return b<a.gn.gl()?a.gn.gv(b):a.nt.gv(b-a.gn.gl()|0);}
function A3g(a,b,c){return b<a.gn.gl()?a.gn.j0(b,c):a.nt.j0(b-a.gn.gl()|0,c);}
function AWQ(a,b,c){if(b<a.gn.gl())a.gn.jw(b,c);else a.nt.jw(b-a.gn.gl()|0,c);}
function A9$(a){return a.gn.f4();}
function Yu(a){var b,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.gn;$p=1;case 1:b.kd();if(C()){break _;}b=a.nt;$p=2;case 2:b.kd();if(C()){break _;}return;default:E$();}}C3().s(a,b,$p);}
function ZD(){C0.call(this);}
function AY2(a,b,c,d,e,f,g,h){var i=new ZD();A1b(i,a,b,c,d,e,f,g,h);return i;}
function A1b(a,b,c,d,e,f,g,h,i){Fz(a,b,c,d,e,f,g,h);a.e4=i.bb;a.m2=i.Es;a.im=0.6000000238418579;a.ib=0.6000000238418579;a.hW=0.6000000238418579;a.dp=a.dp/2.0;}
function ATD(a){return 1;}
function YH(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=((a.e4%16|0)+a.Bf/4.0)/16.0;j=i+0.015609375201165676;k=((a.e4/16|0)+a.Bg/4.0)/16.0;l=k+0.015609375201165676;m=0.10000000149011612*a.dp;n
=a.bR;o=a.d-a.bR;p=c;q=n+o*p-BkM;r=a.cQ+(a.j-a.cQ)*p-BkN;s=a.bQ+(a.e-a.bQ)*p-BkO;$p=1;case 1:$z=ADF(a,c);if(C()){break _;}t=$z;Cq(b,t*a.hW,t*a.ib,t*a.im);t=d*m;u=q-t;g=g*m;v=u-g;w=e*m;o=r-w;c=f*m;d=s-c;e=h*m;n=d-e;x=i;p=l;G(b,v,o,n,x,p);n=u+g;v=r+w;y=d+e;z=k;G(b,n,v,y,x,z);d=q+t;n=d+g;c=s+c;x=c+e;y=j;G(b,n,v,x,y,z);G(b,d-g,o,c-e,y,p);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function KQ(){B6.call(this);}
function Bk_(){var a=new KQ();A2m(a);return a;}
function A2m(a){O(a);}
function JK(){C0.call(this);}
function Bla(a,b,c,d){var e=new JK();TH(e,a,b,c,d);return e;}
function TH(a,b,c,d,e){Fz(a,b,c,d,e,0.0,0.0,0.0);a.g=a.g*0.30000001192092896;a.i=BP()*0.20000000298023224+0.10000000149011612;a.h=a.h*0.30000001192092896;a.hW=1.0;a.ib=1.0;a.im=1.0;a.e4=16;DZ(a,0.009999999776482582,0.009999999776482582);a.m2=0.05999999865889549;a.ct=8.0/(BP()*0.8+0.2)|0;}
function AKL(a,b,c,d,e,f,g,h){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ANr(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AOw(a){var b,c,d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bR=a.d;a.cQ=a.j;a.bQ=a.e;a.i=a.i-a.m2;b=a.g;c=a.i;d=a.h;$p=1;case 1:ARD(a,b,c,d);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;e=a.ct;a.ct=e-1|0;if(e<=0){$p=2;continue _;}if(a.cu){if(BP()<0.5){$p=5;continue _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}f=a.l;e
=K(a.d);g=K(a.j);h=K(a.e);$p=3;continue _;case 2:Ca(a);if(C()){break _;}if(a.cu){if(BP()<0.5){$p=5;continue _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}f=a.l;e=K(a.d);g=K(a.j);h=K(a.e);$p=3;case 3:$z=ABX(f,e,g,h);if(C()){break _;}f=$z;if(!f.nz()&&!f.dt())return;i=K(a.j)+1|0;f=a.l;e=K(a.d);g=K(a.j);h=K(a.e);$p=4;case 4:$z=AEI(f,e,g,h);if(C()){break _;}e=$z;b=i-Jr(e);if(a.j>=b)return;$p=6;continue _;case 5:Ca(a);if(C()){break _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;f=a.l;e=K(a.d);g=
K(a.j);h=K(a.e);$p=3;continue _;case 6:Ca(a);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function IK(){var a=this;It.call(a);a.em=null;a.Aa=0;a.eb=0;}
function Blb(a,b,c,d,e,f){var g=new IK();OG(g,a,b,c,d,e,f);return g;}
function OG(a,b,c,d,e,f,g){T8(a,c,e,f);a.eb=b;a.em=d;a.Aa=g;}
function AXL(a){return a.Aa;}
function O$(){IK.call(this);}
function AV_(a,b){var c,d;c=a.em.cl.data;d=a.eb;b=b*4|0;return c[d+b|0]&255|(a.em.cl.data[(a.eb+b|0)+1|0]&255)<<8|(a.em.cl.data[(a.eb+b|0)+2|0]&255)<<16|(a.em.cl.data[(a.eb+b|0)+3|0]&255)<<24;}
function ASN(a,b,c){var d,e;d=a.em.cl.data;e=a.eb;b=b*4|0;d[e+b|0]=c<<24>>24;a.em.cl.data[(a.eb+b|0)+1|0]=c>>8<<24>>24;a.em.cl.data[(a.eb+b|0)+2|0]=c>>16<<24>>24;a.em.cl.data[(a.eb+b|0)+3|0]=c>>24<<24>>24;}
function VG(){IK.call(this);}
function A0P(a,b){var c,d;c=a.em.cl.data;d=a.eb;b=b*4|0;return (c[d+b|0]&255)<<24|(a.em.cl.data[(a.eb+b|0)+1|0]&255)<<16|(a.em.cl.data[(a.eb+b|0)+2|0]&255)<<8|a.em.cl.data[(a.eb+b|0)+3|0]&255;}
function ATG(a,b,c){var d,e;d=a.em.cl.data;e=a.eb;b=b*4|0;d[e+b|0]=c>>24<<24>>24;a.em.cl.data[(a.eb+b|0)+1|0]=c>>16<<24>>24;a.em.cl.data[(a.eb+b|0)+2|0]=c>>8<<24>>24;a.em.cl.data[(a.eb+b|0)+3|0]=c<<24>>24;}
function AKT(){D.call(this);this.v4=null;}
function AYG(a){var b=new AKT();A7Y(b,a);return b;}
function A7Y(a,b){a.v4=b;}
function ZI(a,b,c){return G2(b,a.v4)>=G2(c,a.v4)?1:(-1);}
function A08(a,b,c){return ZI(a,b,c);}
function V5(){D.call(this);this.x8=null;}
function APG(a,b,c){var d,e;d=b.ft;e=c.ft;return d&&!e?1:e&&!d?(-1):G2(b,a.x8)>=G2(c,a.x8)?(-1):1;}
function A9G(a,b,c){return APG(a,b,c);}
function Ho(){D.call(this);}
var Blc=null;var Bld=null;var Ble=null;var Blf=null;var Blg=null;function Blh(){var a=new Ho();AAh(a);return a;}
function AAh(a){return;}
function Rv(b,c){var d,e,f;if(c===null)c=Blf;d=J(D,b.o);Uy(b,d);PT(d,c);e=0;while(true){f=d.data;if(e>=f.length)break;Q7(b,e,f[e]);e=e+1|0;}}
function AOb(){Blc=new R5;Bld=new R4;Ble=new R6;Blf=new WE;Blg=new WC;}
function HT(){var a=this;D.call(a);a.mG=null;a.x_=null;a.Dd=null;a.Cr=null;a.HG=null;a.Gr=0.0;a.FL=0.0;a.E5=0.0;a.E4=0.0;a.E3=0.0;}
var Bkr=null;var BkJ=0.0;var BkK=0.0;var BkL=0.0;function BbZ(){var a=new HT();AC8(a);return a;}
function AC8(a){var b;a.mG=Dd();BR(a.mG,F(Jc),Bcl());BR(a.mG,F(Nt),Bbz());b=Nc(Ip(a.mG));while(F7(b)){Md(b).q8=a;}}
function Vo(a,b){var c;c=CP(a.mG,b);if(c===null&&b!==F(D9)){c=Vo(a,JE(b));BR(a.mG,b,c);}return c;}
function AIh(a,b){return Wk(a,b)===null?0:1;}
function Wk(a,b){return Vo(a,Dl(b));}
function ARg(a,b,c,d,e,f){var g,h,i;a.Cr=b;a.Dd=c;a.HG=e;a.x_=d;a.Gr=e.P+(e.t-e.P)*f;a.FL=e.T+(e.I-e.T)*f;g=e.co;h=e.d-e.co;i=f;a.E5=g+h*i;a.E4=e.b5+(e.j-e.b5)*i;a.E3=e.cp+(e.e-e.cp)*i;}
function YU(a,b,c){var d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(AK0(b,a.E5,a.E4,a.E3)>=4096.0)return;d=a.Cr;e=b.dH;f=b.dF;g=b.dN;$p=1;case 1:$z=ANf(d,e,f,g);if(C()){break _;}h=$z;F2(h,h,h);i=b.dH-BkJ;j=b.dF-BkK;k=b.dN-BkL;$p=2;case 2:AFn(a,b,i,j,k,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AFn(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=Wk(a,b);if(g===null)return;$p=1;case 1:g.CO(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function A_R(a){return a.x_;}
function ALI(){Bkr=BbZ();}
function HV(){var a=this;D.call(a);a.dQ=null;a.Fy=null;a.tU=null;a.nZ=null;a.HT=null;a.rk=0.0;a.GG=0.0;a.FH=null;a.D2=0.0;a.D1=0.0;a.D0=0.0;}
var Bgo=null;var BkG=0.0;var BkH=0.0;var BkI=0.0;function Bai(){var a=new HV();AGv(a);return a;}
function AGv(a){var b,c,d,e,f;a.dQ=Dd();BR(a.dQ,F(Kk),A_Y());b=a.dQ;c=new T1;d=BcN();e=new PQ;KV(e,6,0.5);Gm(c,d,0.699999988079071);c.kc=e;BR(b,F(Iz),c);d=a.dQ;f=new Tx;c=Bck();e=BbV();Gm(f,c,0.699999988079071);f.kc=e;BR(d,F(KE),f);BR(a.dQ,F(JU),Bb_());BR(a.dQ,F(Ji),AYe(Bcy(),0.5));d=a.dQ;f=new DH;c=new HN;KD(c);Gm(f,c,0.5);BR(d,F(I3),f);BR(a.dQ,F(Jq),Bbk());d=a.dQ;f=new T5;c=new HN;KD(c);Gm(f,c,3.0);f.tq=6.0;BR(d,F(K9),f);BR(a.dQ,F(EP),AYe(A$Y(),0.5));d=a.dQ;f=new TE;EG(f);BR(d,F(C5),f);BR(a.dQ,F(ID),BbT());d
=a.dQ;f=new Rr;EG(f);BR(d,F(Jo),f);BR(a.dQ,F(E9),XY());BR(a.dQ,F(Mo),Bao());BR(a.dQ,F(JI),Bag());BR(a.dQ,F(Gc),Bb7());d=Nc(Ip(a.dQ));while(F7(d)){Md(d).iy=a;}}
function WZ(a,b){var c;c=CP(a.dQ,b);if(c===null&&b!==F(C5)){c=WZ(a,JE(b));BR(a.dQ,b,c);}return c;}
function R8(a,b){return WZ(a,Dl(b));}
function AHb(a,b,c,d,e,f,g){var h,i,j;a.nZ=b;a.tU=c;a.FH=f;a.HT=e;a.Fy=d;a.rk=e.P+(e.t-e.P)*g;a.GG=e.T+(e.I-e.T)*g;h=e.co;i=e.d-e.co;j=g;a.D2=h+i*j;a.D1=e.b5+(e.j-e.b5)*j;a.D0=e.cp+(e.e-e.cp)*j;}
function AM8(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=b.co;e=b.d-b.co;f=c;e=d+e*f;d=b.b5+(b.j-b.b5)*f;g=b.cp+(b.e-b.cp)*f;h=b.P+(b.t-b.P)*c;$p=1;case 1:$z=b.va(c);if(C()){break _;}i=$z;F2(i,i,i);e=e-BkG;d=d-BkH;f=g-BkI;$p=2;case 2:AQC(a,b,e,d,f,h,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AQC(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=R8(a,b);if(h===null)return;$p=1;case 1:h.iK(b,c,d,e,f,g);if(C()){break _;}$p=2;case 2:ANh(h,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function A73(a,b){a.nZ=b;}
function AJS(a,b,c,d){var e,f,g;e=b-a.D2;f=c-a.D1;g=d-a.D0;return e*e+f*f+g*g;}
function AKt(){Bgo=Bai();}
function Na(){D.call(this);}
var Bli=null;var Blj=null;function Blk(){var a=new Na();AR0(a);return a;}
function AR0(a){return;}
function Vd(b){var c;c=0;while(true){if(c>=Bli.data.length)return (-1);if(b==Bli.data[c])break;c=c+1|0;}return c;}
function AO$(){var b,c;b=$rt_createIntArray(144);c=b.data;c[0]=32;c[1]=33;c[2]=34;c[3]=35;c[4]=36;c[5]=37;c[6]=38;c[7]=39;c[8]=40;c[9]=41;c[10]=42;c[11]=43;c[12]=44;c[13]=45;c[14]=46;c[15]=47;c[16]=48;c[17]=49;c[18]=50;c[19]=51;c[20]=52;c[21]=53;c[22]=54;c[23]=55;c[24]=56;c[25]=57;c[26]=58;c[27]=59;c[28]=60;c[29]=61;c[30]=62;c[31]=63;c[32]=64;c[33]=65;c[34]=66;c[35]=67;c[36]=68;c[37]=69;c[38]=70;c[39]=71;c[40]=72;c[41]=73;c[42]=74;c[43]=75;c[44]=76;c[45]=77;c[46]=78;c[47]=79;c[48]=80;c[49]=81;c[50]=82;c[51]
=83;c[52]=84;c[53]=85;c[54]=86;c[55]=87;c[56]=88;c[57]=89;c[58]=90;c[59]=91;c[60]=92;c[61]=93;c[62]=94;c[63]=95;c[64]=39;c[65]=97;c[66]=98;c[67]=99;c[68]=100;c[69]=101;c[70]=102;c[71]=103;c[72]=104;c[73]=105;c[74]=106;c[75]=107;c[76]=108;c[77]=109;c[78]=110;c[79]=111;c[80]=112;c[81]=113;c[82]=114;c[83]=115;c[84]=116;c[85]=117;c[86]=118;c[87]=119;c[88]=120;c[89]=121;c[90]=122;c[91]=123;c[92]=124;c[93]=125;c[94]=126;c[95]=8962;c[96]=199;c[97]=252;c[98]=233;c[99]=226;c[100]=228;c[101]=224;c[102]=229;c[103]=231;c[104]
=234;c[105]=235;c[106]=232;c[107]=239;c[108]=238;c[109]=236;c[110]=196;c[111]=197;c[112]=201;c[113]=230;c[114]=198;c[115]=244;c[116]=246;c[117]=242;c[118]=251;c[119]=249;c[120]=255;c[121]=214;c[122]=220;c[123]=248;c[124]=163;c[125]=216;c[126]=215;c[127]=402;c[128]=225;c[129]=237;c[130]=243;c[131]=250;c[132]=241;c[133]=209;c[134]=170;c[135]=186;c[136]=191;c[137]=174;c[138]=172;c[139]=189;c[140]=188;c[141]=161;c[142]=171;c[143]=187;Bli=b;b=$rt_createCharArray(15);c=b.data;c[0]=47;c[1]=10;c[2]=13;c[3]=9;c[4]=0;c[5]
=12;c[6]=96;c[7]=63;c[8]=42;c[9]=92;c[10]=60;c[11]=62;c[12]=124;c[13]=34;c[14]=58;Blj=b;}
function JX(){B6.call(this);}
function Bll(){var a=new JX();A7N(a);return a;}
function A7N(a){O(a);}
function VP(){var a=this;D.call(a);a.eC=0;a.eX=0;a.eD=0;}
function CO(a,b,c){var d=new VP();AWE(d,a,b,c);return d;}
function AWE(a,b,c,d){a.eC=b;a.eX=c;a.eD=d;}
function A6p(a,b){var c;if(!(b instanceof VP))return 0;c=b;return c.eC==a.eC&&c.eX==a.eX&&c.eD==a.eD?1:0;}
function A1q(a){return (Bj(a.eC,8976890)+Bj(a.eX,981131)|0)+a.eD|0;}
function Oo(){Fa.call(this);}
var Blm=0.0;var Bln=null;function AEk(){Blm=NaN;Bln=F($rt_floatcls());}
function Hi(){D.call(this);}
var Bdo=null;var Bdq=null;var Bdr=null;var Bdp=null;var Bdn=null;function Blo(){var a=new Hi();AQH(a);return a;}
function AQH(a){return;}
function AMI(){var b,c;b=$rt_createIntArray(10);c=b.data;c[0]=1;c[1]=10;c[2]=100;c[3]=1000;c[4]=10000;c[5]=100000;c[6]=1000000;c[7]=10000000;c[8]=100000000;c[9]=1000000000;Bdo=b;b=$rt_createLongArray(19);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(1000);c[4]=Long_fromInt(10000);c[5]=Long_fromInt(100000);c[6]=Long_fromInt(1000000);c[7]=Long_fromInt(10000000);c[8]=Long_fromInt(100000000);c[9]=Long_fromInt(1000000000);c[10]=new Long(1410065408, 2);c[11]=new Long(1215752192, 23);c[12]
=new Long(3567587328, 232);c[13]=new Long(1316134912, 2328);c[14]=new Long(276447232, 23283);c[15]=new Long(2764472320, 232830);c[16]=new Long(1874919424, 2328306);c[17]=new Long(1569325056, 23283064);c[18]=new Long(2808348672, 232830643);Bdq=b;b=$rt_createLongArray(6);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(10000);c[4]=Long_fromInt(100000000);c[5]=new Long(1874919424, 2328306);Bdr=b;Bdp=new V3;Bdn=new R3;}
function Nb(){D.call(this);}
var Blp=null;var Blq=null;function Blr(){var a=new Nb();AKk(a);return a;}
function AKk(a){return;}
function AOc(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=$rt_floatToIntBits(b);c.za=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.ur=0;c.t_=0;return;}g=0;if(f)e=e|8388608;else{e=e<<1;while(Long_eq(Long_and(Long_fromInt(e),Long_fromInt(8388608)),Long_ZERO)){e=e<<1;f=f+(-1)|0;g=g+1|0;}}h=AOq(Blq,f);if(h<0)h= -h-2|0;i=9+(f-Blq.data[h]|0)|0;j=Long_fromInt(e);k=Long_shru(Long_mul(j,Long_fromInt(Blp.data[h])),32-i|0).lo;if(k>=1000000000){h=h+1|0;i=9+(f-Blq.data[h]|0)|0;k=Long_shru(Long_mul(j,Long_fromInt(Blp.data[h])),
32-i|0).lo;}g=(31-i|0)-g|0;l=g>=0?Blp.data[h]>>>g:Blp.data[h]<< -g;m=(l+1|0)>>1;n=l>>1;if(e==4194304)n=n>>2;o=10;while(o<=n){o=o*10|0;}if((k%o|0)>=(n/2|0))o=o/10|0;p=10;while(p<=m){p=p*10|0;}if((p-(k%p|0)|0)>(m/2|0))p=p/10|0;e=R(o,p);e=e>0?Bj(k/o|0,o):e<0?Bj(k/p|0,p)+p|0:Bj((k+(p/2|0)|0)/p|0,p);if(e>=1000000000){h=h+1|0;e=e/10|0;}else if(e<100000000){h=h+(-1)|0;e=e*10|0;}c.ur=e;c.t_=h-50|0;}
function AK_(){var b,c,d,e,f,g,h,i;Blp=$rt_createIntArray(100);Blq=$rt_createIntArray(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=Blp.data;g=d+50|0;f[g]=$rt_udiv(e,20);Blq.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}c=127;d=0;while(d<50){i=0;h=b;while(h>214748364){h=h>>1;i=i+1|0;c=c+(-1)|0;}h=h*10|0;b=i<=0?h:Long_add(Long_fromInt(h),Long_shr(Long_mul(Long_fromInt(b&((1<<i)-1|0)),Long_fromInt(10)),i)).lo;f=Blp.data;i=(50-d|0)-1|
0;f[i]=$rt_udiv(b,20);Blq.data[i]=c;d=d+1|0;}}
function R3(){var a=this;D.call(a);a.ur=0;a.t_=0;a.za=0;}
function Bls(){var a=new R3();ASL(a);return a;}
function ASL(a){return;}
function DH(){var a=this;Dg.call(a);a.mz=null;a.kc=null;}
function AYe(a,b){var c=new DH();Gm(c,a,b);return c;}
function Gm(a,b,c){EG(a);a.mz=b;a.l5=c;}
function A$v(a,b){a.kc=b;}
function Z9(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bc(2884);try{h=b.e6+(b.dD-b.e6)*g;i=b.P+(b.t-b.P)*g;j=b.T+(b.I-b.T)*g;Bw(c,d,e);k=b.oO+g;Bv(180.0-h,0.0,1.0,0.0);if(b.c0>0){f=D$((b.c0+
g-1.0)/20.0*1.600000023841858);if(f>1.0)f=1.0;Bv(f*a.CA(b),0.0,0.0,1.0);}l=0.0625;Ba(32826);CC((-1.0),(-1.0),1.0);a.w$(b,g);Bw(0.0,(-1.5078125),0.0);m=b.jO+(b.cd-b.jO)*g;n=b.gm-b.cd*(1.0-g);if(m>1.0)m=1.0;o=b.tE;p=PH(b);$p=1;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){o=$$je;}else{throw $$e;}}Cc(o);Ba(2884);BD();return;case 1:try{APn(a,o,p);if(C()){break _;}Ba(3008);o=a.mz;f=i-h;o.hF(n,m,k,f,j,l);q=0;if(q>=4){$p=2;continue _;}$p=3;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){o=$$je;}
else{throw $$e;}}Cc(o);Ba(2884);BD();return;case 2:a:{try{$z=ADF(b,g);if(C()){break _;}r=$z;s=a.CD(b,r,g);q=s>>24&255;if(!(q<=0&&b.dB<=0&&b.c0<=0)){Bc(3553);Bc(3008);Ba(3042);Df(770,771);HG(514);if(!(b.dB<=0&&b.c0<=0)){BU(r,0.0,0.0,0.4000000059604645);a.mz.hF(n,m,k,f,j,l);t=0;if(t<4){$p=4;continue _;}}if(q>0){u=(s>>16&255)/255.0;v=(s>>8&255)/255.0;w=(s&255)/255.0;x=q/255.0;BU(u,v,w,x);a.mz.hF(n,m,k,f,j,l);y=0;if(y<4){$p=5;continue _;}}HG(515);Bc(3042);Ba(3008);Ba(3553);}Bc(32826);break a;}catch($$e){$$je=Bi($$e);if
($$je instanceof BE){o=$$je;}else{throw $$e;}}Cc(o);}Ba(2884);BD();return;case 3:try{$z=a.k2(b,q);if(C()){break _;}s=$z;if(s){a.kc.hF(n,m,k,f,j,l);Bc(3042);Ba(3008);}q=q+1|0;if(q>=4){$p=2;continue _;}continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){o=$$je;}else{throw $$e;}}Cc(o);Ba(2884);BD();return;case 4:a:{try{$z=a.k2(b,t);if(C()){break _;}y=$z;if(y){BU(r,0.0,0.0,0.4000000059604645);a.kc.hF(n,m,k,f,j,l);}t=t+1|0;if(t<4){continue _;}if(q>0){u=(s>>16&255)/255.0;v=(s>>8&255)/255.0;w=(s&255)/255.0;x
=q/255.0;BU(u,v,w,x);a.mz.hF(n,m,k,f,j,l);y=0;if(y<4){$p=5;continue _;}}HG(515);Bc(3042);Ba(3008);Ba(3553);Bc(32826);break a;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){o=$$je;}else{throw $$e;}}Cc(o);}Ba(2884);BD();return;case 5:a:{try{$z=a.k2(b,y);if(C()){break _;}s=$z;if(s){BU(u,v,w,x);a.kc.hF(n,m,k,f,j,l);}y=y+1|0;if(y>=4){HG(515);Bc(3042);Ba(3008);Ba(3553);Bc(32826);break a;}continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){o=$$je;}else{throw $$e;}}Cc(o);}Ba(2884);BD();return;default:E$();}}C3().s(a,
b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$p);}
function APR(a,b,c){return 0;}
function A5j(a,b){return 90.0;}
function A6y(a,b,c,d){return 0;}
function A9b(a,b,c){return;}
function AOV(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:a.H0(b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function OH(){var a=this;DH.call(a);a.AS=null;a.z3=null;a.Cn=null;}
var Blt=null;function Bbk(){var a=new OH();AH_(a);return a;}
function AH_(a){Gm(a,Xp(0.0),0.5);a.AS=a.mz;a.z3=Xp(1.0);a.Cn=Xp(0.5);}
function ARw(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=AIi(b.J,3-c|0);if(d!==null){e=DK(d);if(e instanceof FZ){f=e;b=new U;X(b);b=I(I(I(b,B(569)),Blt.data[f.Bw]),B(570));g=R(c,2);b=V(I(Be(b,g?1:2),B(511)));$p=1;continue _;}}return 0;case 1:AKq(a,b);if(C()){break _;}h=g?a.z3:a.Cn;h.iT.iM=c?0:1;h.k6.iM=c?0:1;b=h.pd;i=R(c,1);b.iM=i&&g?0:1;h.dX.iM=i?0:1;h.dK.iM=i?0:1;h.i5.iM
=g&&c!=3?0:1;h.hb.iM=g&&c!=3?0:1;a.kc=h;return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ADL(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=d-b.c2;$p=1;case 1:Z9(a,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ALw(a){B_(a.AS.dX,0.0625);}
function Y6(a,b,c){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=ARw(a,b,c);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,$p);}
function AL1(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:ADL(a,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ACI(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:ADL(a,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AAb(){var b,c;b=J(B4,5);c=b.data;c[0]=B(239);c[1]=B(571);c[2]=B(572);c[3]=B(573);c[4]=B(574);Blt=b;}
function Ly(){var a=this;Gb.call(a);a.hy=0;a.i0=0;a.hP=0;a.h5=0;a.kh=null;a.cC=0;a.hh=0;a.yK=0;}
function Dj(a,b,c,d){var e=new Ly();A3h(e,a,b,c,d);return e;}
function Blu(a,b,c,d,e,f){var g=new Ly();Sz(g,a,b,c,d,e,f);return g;}
function A3h(a,b,c,d,e){Sz(a,b,c,d,200,20,e);}
function Sz(a,b,c,d,e,f,g){M_(a);a.hy=200;a.i0=20;a.hh=1;a.yK=1;a.cC=b;a.hP=c;a.h5=d;a.hy=e;a.i0=f;a.kh=g;}
function ACQ(a,b,c,d){var e,f,g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.yK)return;e=b.e7;f=3553;g=b.bo;b=B(502);$p=1;case 1:$z=AHt(g,b);if(C()){break _;}h=$z;Cp(f,h);BU(1.0,1.0,1.0,1.0);h=1;f=c>=a.hP&&d>=a.h5&&c<(a.hP+a.hy|0)&&d<(a.h5+a.i0|0)?1:0;if(!a.hh)h=0;else if(f)h=2;i=a.hP;j=a.h5;h=46+(h*20|0)|0;CH(a,i,j,0,h,a.hy/2|0,a.i0);CH(a,a.hP+(a.hy/2|0)|0,a.h5,200-(a.hy/2|0)|
0,h,a.hy/2|0,a.i0);if(!a.hh)DD(a,e,a.kh,a.hP+(a.hy/2|0)|0,a.h5+((a.i0-8|0)/2|0)|0,(-6250336));else if(!f)DD(a,e,a.kh,a.hP+(a.hy/2|0)|0,a.h5+((a.i0-8|0)/2|0)|0,14737632);else DD(a,e,a.kh,a.hP+(a.hy/2|0)|0,a.h5+((a.i0-8|0)/2|0)|0,16777120);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function RY(a,b,c){return a.hh&&b>=a.hP&&c>=a.h5&&b<(a.hP+a.hy|0)&&c<(a.h5+a.i0|0)?1:0;}
function L9(){D.call(this);}
function Blv(){var a=new L9();AVS(a);return a;}
function AVS(a){return;}
function Qn(){}
function Kp(){var a=this;L9.call(a);a.zL=null;a.HV=null;a.u8=0;a.Dg=0;a.na=null;a.vD=null;}
function AD_(a){var b,c,d;a:{b=a.u8;c=a.Dg;d=0;switch(c){case 1:d=2;break a;case 2:d=4;break a;case 3:d=1;break a;default:}}c=b>>>6;return d|c&8|b<<2&16|c&32|b>>>8&64|b>>>5&128|b&256|b<<8&512|b<<10&1024|b<<1&2048;}
function ABh(a){return a.na.oV();}
function WA(a,b){var c,d,e,f,g;if(a.u8&1){c=new LX;O(c);M(c);}if(a.vD===null){c=new S5;O(c);M(c);}d=b.data;e=d.length;if(e!=a.na.data.length){c=new Cb;O(c);M(c);}f=0;while(true){if(f>=e){c=b.data;g=new a.zL.fX();a.vD.call(g,c);return g;}if(!FV(a.na.data[f])&&d[f]!==null&&!Us(a.na.data[f],d[f])){c=new Cb;O(c);M(c);}if(FV(a.na.data[f])&&d[f]===null)break;f=f+1|0;}c=new Cb;O(c);M(c);}
function On(){}
function Qu(){D.call(this);}
function Blw(){var a=new Qu();A_i(a);return a;}
function A_i(a){return;}
function AJs(a){var b,c,d;Bd();BdF.requestPointerLock();b=B$();if(VI())clearTimeout(VI());MS(0);if(Long_lt(Long_sub(b,PS()),Long_fromInt(3000))){c=new Tm;c.Jf=a;d=3000-Long_sub(b,PS()).lo|0;MS(setTimeout(Cu(c,"onTimer"),d));}}
function A1B(a){AJs(a);}
function WE(){D.call(this);}
function Blx(){var a=new WE();AVk(a);return a;}
function AVk(a){return;}
function A4R(a,b,c){return b!==null?b.lJ(c): -c.lJ(b);}
function WC(){D.call(this);}
function Bly(){var a=new WC();A5L(a);return a;}
function A5L(a){return;}
function R5(){Fb.call(this);}
function Blz(){var a=new R5();A98(a);return a;}
function A98(a){return;}
function R4(){FT.call(this);}
function BlA(){var a=new R4();A$b(a);return a;}
function A$b(a){return;}
function R6(){Ga.call(this);}
function BlB(){var a=new R6();A3H(a);return a;}
function A3H(a){return;}
function Iy(){D.call(this);this.q8=null;}
function AKx(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.q8.Dd;$p=1;case 1:$z=AHt(c,b);if(C()){break _;}d=$z;Ea(c,d);return;default:E$();}}C3().s(a,b,c,d,$p);}
function A0O(a,b){a.q8=b;}
function ANz(a){return a.q8.x_;}
function AA0(){Iy.call(this);this.Ez=null;}
function Bcl(){var a=new AA0();ATu(a);return a;}
function ATu(a){a.Ez=BbR();}
function ARn(a,b,c,d,e,f){var g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bw(c+0.5,d+0.75,e+0.5);$p=1;case 1:$z=AMd(b);if(C()){break _;}g=$z;Bv( -((g*360|0)/16.0),0.0,1.0,0.0);h=B(575);$p=2;case 2:AKx(a,h);if(C()){break _;}B3();CC(1.0,(-1.0),(-1.0));AM9(a.Ez);BD();Bw(0.0,0.5,0.09000000357627869);CC(0.01666666753590107,(-0.01666666753590107),0.01666666753590107);Cj(0.0,
0.0,(-0.01666666753590107));h=ANz(a);i=0;while(i<b.gq.data.length){j=b.gq.data[i];if(i!=b.rw)EC(h,j, -Dw(h,j)/2|0,(i*10|0)-(b.gq.data.length*5|0)|0,0);else{k=new U;X(k);j=V(I(I(I(k,B(576)),j),B(577)));EC(h,j, -Dw(h,j)/2|0,(i*10|0)-(b.gq.data.length*5|0)|0,0);}i=i+1|0;}BU(1.0,1.0,1.0,1.0);BD();return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function Xz(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:ARn(a,b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function Nt(){var a=this;D9.call(a);a.jT=0;a.jH=null;a.lG=0.0;a.mn=0.0;}
function Bct(){var a=new Nt();A8c(a);return a;}
function A8c(a){a.jT=(-1);a.jH=B(578);a.mn=0.0;a.jT=20;}
function ZE(a){return AGL(a.ce.bi,a.dH,a.dF,a.dN)>256.0?0:1;}
function AC1(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.mn=a.lG;if(ZE(a)){b=a.dH+N(a.ce.q);c=a.dF+N(a.ce.q);d=a.dN+N(a.ce.q);BW(a.ce,B(256),b,c,d,0.0,0.0,0.0);BW(a.ce,B(257),b,c,d,0.0,0.0,0.0);a.lG=a.lG+1000.0/(a.jT+200.0);while(a.lG>360.0){a.lG=a.lG-360.0;a.mn=a.mn-360.0;}if(a.jT==(-1))NQ(a);if(a.jT>0)a.jT
=a.jT-1|0;else{e=4;f=0;if(f<e){g=Jh(a.jH,a.ce);if(g===null)return;h=a.ce;i=Dl(g);j=Dv(D2(a.dH,a.dF,a.dN,a.dH+1|0,a.dF+1|0,a.dN+1|0),8.0,4.0,8.0);$p=1;continue _;}}}return;case 1:$z=ANc(h,i,j);if(C()){break _;}h=$z;if(h.o>=6){NQ(a);return;}k=a.dH+(Cl(a.ce.q)-Cl(a.ce.q))*4.0;l=(a.dF+E(a.ce.q,3)|0)-1|0;m=a.dN+(Cl(a.ce.q)-Cl(a.ce.q))*4.0;Kr(g,k,l,m,N(a.ce.q)*360.0,0.0);$p=2;case 2:$z=g.uK(k,l,m);if(C()){break _;}n=$z;if(n){h=a.ce;$p=3;continue _;}f=f+1|0;if(f>=e)return;g=Jh(a.jH,a.ce);if(g===null)return;h=a.ce;i
=Dl(g);j=Dv(D2(a.dH,a.dF,a.dN,a.dH+1|0,a.dF+1|0,a.dN+1|0),8.0,4.0,8.0);$p=1;continue _;case 3:AOf(h,g);if(C()){break _;}o=0;while(o<20){c=a.dH+0.5+(N(a.ce.q)-0.5)*2.0;d=a.dF+0.5+(N(a.ce.q)-0.5)*2.0;k=a.dN+0.5+(N(a.ce.q)-0.5)*2.0;BW(a.ce,B(256),c,d,k,0.0,0.0,0.0);BW(a.ce,B(257),c,d,k,0.0,0.0,0.0);o=o+1|0;}AEQ(g);NQ(a);f=f+1|0;if(f>=e)return;g=Jh(a.jH,a.ce);if(g===null)return;h=a.ce;i=Dl(g);j=Dv(D2(a.dH,a.dF,a.dN,a.dH+1|0,a.dF+1|0,a.dN+1|0),8.0,4.0,8.0);$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,
j,k,l,m,n,o,$p);}
function NQ(a){a.jT=200+E(a.ce.q,600)|0;}
function ARY(){Iy.call(this);this.wB=null;}
function Bbz(){var a=new ARY();AXk(a);return a;}
function AXk(a){a.wB=Dd();}
function ZX(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bw(c+0.5,d,e+0.5);g=CP(a.wB,b.jH);if(g===null){g=Jh(b.jH,null);BR(a.wB,b.jH,g);}if(g===null){BD();return;}g.l=b.ce;Bw(0.0,0.4000000059604645,0.0);Bv((b.mn+(b.lG-b.mn)*f)*10.0,0.0,1.0,0.0);Bv((-30.0),1.0,0.0,0.0);Bw(0.0,(-0.4000000059604645),0.0);CC(0.4375,0.4375,0.4375);b=Bgo;c=0.0;d=0.0;e=0.0;h=0.0;$p=1;case 1:AQC(b,g,c,d,e,
h,f);if(C()){break _;}BD();return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ARc(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:ZX(a,b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AQh(){DH.call(this);}
function A_Y(){var a=new AQh();A4q(a);return a;}
function A4q(a){Gm(a,A5n(),1.0);a.kc=A5n();}
function A6o(a,b){return 180.0;}
function XV(a,b,c){var d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c)return 0;if(c)return 0;d=B(579);$p=1;case 1:AKq(a,d);if(C()){break _;}e=1.0;f=1.0;$p=2;case 2:$z=ADF(b,f);if(C()){break _;}f=$z;f=(e-f)*0.5;Ba(3042);Bc(3008);Df(770,771);BU(1.0,1.0,1.0,f);return 1;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function A6k(a,b){return 180.0;}
function X$(a,b,c){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=XV(a,b,c);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,$p);}
function T1(){DH.call(this);}
function AGd(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=B(580);$p=1;case 1:AKq(a,d);if(C()){break _;}return !c&&b.qt?1:0;default:E$();}}C3().s(a,b,c,d,$p);}
function AL_(a,b,c){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=AGd(a,b,c);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,$p);}
function FX(){var a=this;Eg.call(a);a.ha=null;a.hz=null;a.jD=null;a.jC=null;a.jB=null;a.jE=null;}
function BlC(a,b){var c=new FX();KV(c,a,b);return c;}
function KV(a,b,c){var d,e;a.ha=BK(0,0);BG(a.ha,(-4.0),(-4.0),(-8.0),8,8,8,c);BJ(a.ha,0.0,18-b|0,(-6.0));a.hz=BK(28,8);BG(a.hz,(-5.0),(-10.0),(-7.0),10,16,8,c);BJ(a.hz,0.0,17-b|0,2.0);a.jD=BK(0,16);BG(a.jD,(-2.0),0.0,(-2.0),4,b,4,c);d=a.jD;e=24-b|0;BJ(d,(-3.0),e,7.0);a.jC=BK(0,16);BG(a.jC,(-2.0),0.0,(-2.0),4,b,4,c);BJ(a.jC,3.0,e,7.0);a.jB=BK(0,16);BG(a.jB,(-2.0),0.0,(-2.0),4,b,4,c);BJ(a.jB,(-3.0),e,(-5.0));a.jE=BK(0,16);BG(a.jE,(-2.0),0.0,(-2.0),4,b,4,c);BJ(a.jE,3.0,e,(-5.0));}
function A90(a,b,c,d,e,f,g){AJR(a,b,c,d,e,f,g);B_(a.ha,g);B_(a.hz,g);B_(a.jD,g);B_(a.jC,g);B_(a.jB,g);B_(a.jE,g);}
function AJR(a,b,c,d,e,f,g){var h;a.ha.bW=e/57.2957763671875;a.hz.bZ=1.5707963705062866;h=a.jD;b=b*0.6661999821662903;h.bZ=BC(b)*1.399999976158142*c;h=a.jC;d=b+3.1415927410125732;h.bZ=BC(d)*1.399999976158142*c;a.jB.bZ=BC(d)*1.399999976158142*c;a.jE.bZ=BC(b)*1.399999976158142*c;}
function PQ(){FX.call(this);}
function BcN(){var a=new PQ();AYb(a);return a;}
function AYb(a){KV(a,6,0.0);}
function Tx(){DH.call(this);}
function AM1(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=B(581);$p=1;case 1:AKq(a,d);if(C()){break _;}return !c&&!b.xX?1:0;default:E$();}}C3().s(a,b,c,d,$p);}
function ARq(a,b,c){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=AM1(a,b,c);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,$p);}
function ACE(){FX.call(this);}
function Bck(){var a=new ACE();A96(a);return a;}
function A96(a){KV(a,12,0.0);a.ha=BK(0,0);BG(a.ha,(-3.0),(-4.0),(-6.0),6,6,8,0.0);BJ(a.ha,0.0,6.0,(-8.0));a.hz=BK(28,8);BG(a.hz,(-4.0),(-10.0),(-7.0),8,16,6,0.0);BJ(a.hz,0.0,5.0,2.0);}
function ARf(){FX.call(this);}
function BbV(){var a=new ARf();AU9(a);return a;}
function AU9(a){KV(a,12,0.0);a.ha=BK(0,0);BG(a.ha,(-3.0),(-4.0),(-4.0),6,6,6,0.6000000238418579);BJ(a.ha,0.0,6.0,(-8.0));a.hz=BK(28,8);BG(a.hz,(-4.0),(-10.0),(-7.0),8,16,6,1.75);BJ(a.hz,0.0,5.0,2.0);a.jD=BK(0,16);BG(a.jD,(-2.0),0.0,(-2.0),4,6,4,0.5);BJ(a.jD,(-3.0),12.0,7.0);a.jC=BK(0,16);BG(a.jC,(-2.0),0.0,(-2.0),4,6,4,0.5);BJ(a.jC,3.0,12.0,7.0);a.jB=BK(0,16);BG(a.jB,(-2.0),0.0,(-2.0),4,6,4,0.5);BJ(a.jB,(-3.0),12.0,(-5.0));a.jE=BK(0,16);BG(a.jE,(-2.0),0.0,(-2.0),4,6,4,0.5);BJ(a.jE,3.0,12.0,(-5.0));}
function AB6(){DH.call(this);}
function Bb_(){var a=new AB6();AZJ(a);return a;}
function AZJ(a){Gm(a,BaV(),0.5);}
function ADA(a,b,c){var d,e,f;d=Qh(b,c);e=1.0+Bq(d*100.0)*d*0.009999999776482582;if(d<0.0)d=0.0;if(d>1.0)d=1.0;c=d*d;c=c*c;f=(1.0+c*0.4000000059604645)*e;CC(f,(1.0+c*0.10000000149011612)/e,f);}
function X9(a,b,c,d){var e,f;e=Qh(b,d);if(!((e*10.0|0)%2|0))return 0;f=e*0.20000000298023224*255.0|0;if(f<0)f=0;if(f>255)f=255;return f<<24|16711680|65280|255;}
function A7X(a,b,c){ADA(a,b,c);}
function AZV(a,b,c,d){return X9(a,b,c,d);}
function HN(){Mw.call(this);}
function BlD(){var a=new HN();A8d(a);return a;}
function A8d(a){KD(a);}
function A2I(a,b,c,d,e,f,g){var h,i,j;AIQ(a,b,c,d,e,f,g);h=Bq(a.xO*3.1415927410125732);i=Bq((1.0-(1.0-a.xO)*(1.0-a.xO))*3.1415927410125732);a.dX.bT=0.0;a.dK.bT=0.0;j=a.dX;b=0.10000000149011612-h*0.6000000238418579;j.bW= -b;a.dK.bW=b;a.dX.bZ=(-1.5707963705062866);a.dK.bZ=(-1.5707963705062866);j=a.dX;b=j.bZ;c=h*1.2000000476837158-i*0.4000000059604645;j.bZ=b-c;j=a.dK;j.bZ=j.bZ-c;j=a.dX;b=j.bT;c=d*0.09000000357627869;j.bT=b+BC(c)*0.05000000074505806+0.05000000074505806;j=a.dK;j.bT=j.bT-(BC(c)*0.05000000074505806
+0.05000000074505806);j=a.dX;b=j.bZ;c=d*0.06700000166893005;j.bZ=b+Bq(c)*0.05000000074505806;j=a.dK;j.bZ=j.bZ-Bq(c)*0.05000000074505806;}
function AIn(){HN.call(this);}
function Bcy(){var a=new AIn();AWn(a);return a;}
function AWn(a){KD(a);a.dX=BK(40,16);BG(a.dX,(-1.0),(-2.0),(-1.0),2,12,2,0.0);BJ(a.dX,(-5.0),2.0,0.0);a.dK=BK(40,16);a.dK.lx=1;BG(a.dK,(-1.0),(-2.0),(-1.0),2,12,2,0.0);BJ(a.dK,5.0,2.0,0.0);a.i5=BK(0,16);BG(a.i5,(-1.0),0.0,(-1.0),2,12,2,0.0);BJ(a.i5,(-2.0),12.0,0.0);a.hb=BK(0,16);a.hb.lx=1;BG(a.hb,(-1.0),0.0,(-1.0),2,12,2,0.0);BJ(a.hb,2.0,12.0,0.0);}
function K9(){DO.call(this);}
function AO6(a,b,c,d){var e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.l;$p=1;case 1:$z=ANf(e,b,c,d);if(C()){break _;}f=$z;return f-0.5;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function T5(){DH.call(this);this.tq=0.0;}
function Zr(a,b,c){CC(a.tq,a.tq,a.tq);}
function A$1(a,b,c){Zr(a,b,c);}
function TE(){Dg.call(this);}
function BlE(){var a=new TE();AZt(a);return a;}
function AZt(a){EG(a);}
function AJq(a,b,c,d,e,f,g){B3();A8q(b.L,c-b.co,d-b.b5,e-b.cp);BD();}
function ID(){var a=this;C5.call(a);a.rq=0;a.dG=0;a.nk=0;a.Ev=0;a.nr=0;a.dP=null;}
function JL(a,b){var c,d,e,f,g,h,i,j,k,l;a.dG=b;c=b*90|0;a.t=c;a.P=c;c=a.dP.gf;d=a.dP.m1;e=a.dP.gf;if(b&&b!=2)c=0.5;else e=0.5;c=c/32.0;d=d/32.0;f=e/32.0;g=a.nk+0.5;h=a.Ev+0.5;i=a.nr+0.5;if(!b)i=i-0.5625;j=R(b,1);if(!j)g=g-0.5625;k=R(b,2);if(!k)i=i+0.5625;l=R(b,3);if(!l)g=g+0.5625;if(!b)g=g-HK(a,a.dP.gf);if(!j)i=i+HK(a,a.dP.gf);if(!k)g=g+HK(a,a.dP.gf);if(!l)i=i-HK(a,a.dP.gf);e=h+HK(a,a.dP.m1);CT(a,g,e,i);M1(a.L,g-c+0.0062500000931322575,e-d+0.0062500000931322575,i-f+0.0062500000931322575,g+c+(-0.0062500000931322575),
e+d+(-0.0062500000931322575),i+f+(-0.0062500000931322575));}
function HK(a,b){return b==32?0.5:b!=64?0.0:0.5;}
function ADi(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.rq;a.rq=b+1|0;if(b!=100)return;$p=1;case 1:$z=ZG(a);if(C()){break _;}c=$z;if(c)return;a.rq=0;$p=2;case 2:Ca(a);if(C()){break _;}d=a.l;e=new E9;f=a.l;g=a.d;h=a.j;i=a.e;j=new Cd;BB();DA(j,BiB);G_(e,f,g,h,i,j);$p=3;case 3:AOf(d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function ZG(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.l;c=a.L;$p=1;case 1:$z=XQ(b,a,c);if(C()){break _;}b=$z;if(b.o>0)return 0;d=a.dP.gf/16|0;e=a.dP.m1/16|0;f=a.nk;g=a.nr;if(!a.dG)f=K(a.d-a.dP.gf/32.0);if(a.dG==1)g=K(a.e-a.dP.gf/32.0);if(a.dG==2)f=K(a.d-a.dP.gf/32.0);if(a.dG==3)g=K(a.e-a.dP.gf/32.0);h=K(a.j-a.dP.m1/32.0);i=0;while
(i<d){j=0;if(j<e){if(a.dG&&a.dG!=2){b=a.l;k=a.nk;l=h+j|0;m=g+i|0;$p=4;continue _;}b=a.l;k=f+i|0;l=h+j|0;m=a.nr;$p=3;continue _;}i=i+1|0;}b=a.l;c=a.L;$p=2;case 2:$z=ADJ(b,a,c);if(C()){break _;}c=$z;k=0;while(k<c.o){if(Z(c,k) instanceof ID)return 0;k=k+1|0;}return 1;case 3:$z=ABX(b,k,l,m);if(C()){break _;}b=$z;if(!b.dt())return 0;j=j+1|0;while(true){if(j<e){if(a.dG&&a.dG!=2){b=a.l;k=a.nk;l=h+j|0;m=g+i|0;$p=4;continue _;}b=a.l;k=f+i|0;l=h+j|0;m=a.nr;continue _;}i=i+1|0;if(i>=d)break;j=0;}b=a.l;c=a.L;$p=2;continue _;case 4:$z
=ABX(b,k,l,m);if(C()){break _;}b=$z;if(!b.dt())return 0;j=j+1|0;while(true){if(j<e){if(a.dG&&a.dG!=2){b=a.l;k=a.nk;l=h+j|0;m=g+i|0;continue _;}b=a.l;k=f+i|0;l=h+j|0;m=a.nr;$p=3;continue _;}i=i+1|0;if(i>=d)break;j=0;}b=a.l;c=a.L;$p=2;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AXN(a){return 1;}
function AEp(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:Ca(a);if(C()){break _;}d=a.l;b=new E9;e=a.l;f=a.d;g=a.j;h=a.e;i=new Cd;BB();DA(i,BiB);G_(b,e,f,g,h,i);$p=2;case 2:AOf(d,b);if(C()){break _;}return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AAp(){Dg.call(this);this.H7=null;}
function BbT(){var a=new AAp();AZz(a);return a;}
function AZz(a){EG(a);a.H7=new Dz;}
function AP_(a,b,c,d,e,f,g){var h,i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bw(c,d,e);Bv(f,0.0,1.0,0.0);Ba(32826);h=B(582);$p=1;case 1:AKq(a,h);if(C()){break _;}h=b.dP;CC(0.0625,0.0625,0.0625);i=h.gf;j=h.m1;k=h.zB;l=h.zA;$p=2;case 2:ACR(a,b,i,j,k,l);if(C()){break _;}Bc(32826);BD();return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ACR(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g= -c/2.0;h= -d/
2.0;i=0;j=c/16|0;k=d/16|0;l=e+c|0;m=f+d|0;while(i<j){if(0<k){c=(i+1|0)*16|0;n=g+c;o=i*16|0;p=g+o;q=0+1|0;f=q*16|0;r=h+f;s=0*16|0;t=h+s;u=(n+p)/2.0;v=(r+t)/2.0;w=K(b.d);x=K(b.j+v/16.0);y=K(b.e);if(!b.dG)w=K(b.d+u/16.0);if(b.dG==1)y=K(b.e-u/16.0);if(b.dG==2)w=K(b.d-u/16.0);if(b.dG==3)y=K(b.e+u/16.0);z=a.iy.nZ;$p=1;continue _;}i=i+1|0;}return;case 1:$z=ANf(z,w,x,y);if(C()){break _;}ba=$z;F2(ba,ba,ba);ba=(l-o|0)/256.0;u=(l-c|0)/256.0;v=(m-s|0)/256.0;bb=(m-f|0)/256.0;BA();z=BeL;Bz(z);Cj(0.0,0.0,(-1.0));bc=n;bd=t;be
=u;bf=v;G(z,bc,bd,(-0.5),be,bf);bg=p;bh=ba;G(z,bg,bd,(-0.5),bh,bf);bf=r;bi=bb;G(z,bg,bf,(-0.5),bh,bi);G(z,bc,bf,(-0.5),be,bi);Cj(0.0,0.0,1.0);G(z,bc,bf,0.5,0.75,0.0);G(z,bg,bf,0.5,0.8125,0.0);G(z,bg,bd,0.5,0.8125,0.0625);G(z,bc,bd,0.5,0.75,0.0625);Cj(0.0,(-1.0),0.0);G(z,bc,bf,(-0.5),0.75,0.001953125);G(z,bg,bf,(-0.5),0.8125,0.001953125);G(z,bg,bf,0.5,0.8125,0.001953125);G(z,bc,bf,0.5,0.75,0.001953125);Cj(0.0,1.0,0.0);G(z,bc,bd,0.5,0.75,0.001953125);G(z,bg,bd,0.5,0.8125,0.001953125);G(z,bg,bd,(-0.5),0.8125,0.001953125);G(z,
bc,bd,(-0.5),0.75,0.001953125);Cj((-1.0),0.0,0.0);G(z,bc,bf,0.5,0.751953125,0.0);G(z,bc,bd,0.5,0.751953125,0.0625);G(z,bc,bd,(-0.5),0.751953125,0.0625);G(z,bc,bf,(-0.5),0.751953125,0.0);Cj(1.0,0.0,0.0);G(z,bg,bf,(-0.5),0.751953125,0.0);G(z,bg,bd,(-0.5),0.751953125,0.0625);G(z,bg,bd,0.5,0.751953125,0.0625);G(z,bg,bf,0.5,0.751953125,0.0);Br(z);s=q;while(true){if(s<k){c=(i+1|0)*16|0;n=g+c;o=i*16|0;p=g+o;q=s+1|0;f=q*16|0;r=h+f;s=s*16|0;t=h+s;u=(n+p)/2.0;v=(r+t)/2.0;w=K(b.d);x=K(b.j+v/16.0);y=K(b.e);if(!b.dG)w=K(b.d
+u/16.0);if(b.dG==1)y=K(b.e-u/16.0);if(b.dG==2)w=K(b.d-u/16.0);if(b.dG==3)y=K(b.e+u/16.0);z=a.iy.nZ;continue _;}i=i+1|0;if(i>=j)break;s=0;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$p);}
function AOP(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AP_(a,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function Jo(){var a=this;C5.call(a);a.sr=0;a.sY=0;a.rB=0;a.vK=0;a.pf=0;a.li=0;a.sg=null;a.pW=0;a.m4=0;}
function AS9(a,b){var c=new Jo();AY_(c,a,b);return c;}
function AY_(a,b,c){Fy(a,b);a.sr=(-1);a.sY=(-1);a.rB=(-1);a.vK=0;a.pf=0;a.li=0;a.m4=0;a.sg=c;DZ(a,0.5,0.5);Kr(a,c.d,c.j,c.e,c.t,c.I);a.d=a.d-BC(a.t/180.0*3.1415927410125732)*0.1599999964237213;a.j=a.j-0.10000000149011612;a.e=a.e-Bq(a.t/180.0*3.1415927410125732)*0.1599999964237213;CT(a,a.d,a.j,a.e);a.c2=0.0;a.g= -Bq(a.t/180.0*3.1415927410125732)*BC(a.I/180.0*3.1415927410125732);a.h=BC(a.t/180.0*3.1415927410125732)*BC(a.I/180.0*3.1415927410125732);a.i= -Bq(a.I/180.0*3.1415927410125732);Qy(a,a.g,a.i,a.h,1.5,1.0);}
function Qy(a,b,c,d,e,f){var g,h,i;g=Ce(b*b+c*c+d*d);b=b/g;c=c/g;d=d/g;g=CY(a.m)*0.007499999832361937;h=f;b=b+g*h;c=c+CY(a.m)*0.007499999832361937*h;d=d+CY(a.m)*0.007499999832361937*h;g=e;b=b*g;c=c*g;d=d*g;a.g=b;a.i=c;a.h=d;i=Ce(b*b+d*d);e=CR(b,d)*180.0/3.1415927410125732;a.t=e;a.P=e;e=CR(c,i)*180.0/3.1415927410125732;a.I=e;a.T=e;a.pW=0;}
function APr(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AI7(a);if(C()){break _;}if(a.li>0)a.li=a.li-1|0;if(a.pf){b=a.l;c=a.sr;d=a.sY;e=a.rB;$p=2;continue _;}a.m4=a.m4+1|0;b=BY(a.d,a.j,a.e);f=BY(a.d+a.g,a.j+a.i,a.e+a.h);g=a.l;$p=3;continue _;case 2:$z=ACt(b,c,d,e);if(C()){break _;}c=$z;if
(c==a.vK){a.pW=a.pW+1|0;if(a.pW!=1200)return;$p=4;continue _;}a.pf=0;a.g=a.g*N(a.m)*0.20000000298023224;a.i=a.i*N(a.m)*0.20000000298023224;a.h=a.h*N(a.m)*0.20000000298023224;a.pW=0;a.m4=0;b=BY(a.d,a.j,a.e);f=BY(a.d+a.g,a.j+a.i,a.e+a.h);g=a.l;$p=3;case 3:$z=AJj(g,b,f);if(C()){break _;}g=$z;b=BY(a.d,a.j,a.e);f=BY(a.d+a.g,a.j+a.i,a.e+a.h);if(g!==null)f=BY(g.gw.w,g.gw.y,g.gw.v);h=null;i=a.l;j=Dv(I_(a.L,a.g,a.i,a.h),1.0,1.0,1.0);$p=5;continue _;case 4:Ca(a);if(C()){break _;}return;case 5:$z=ADJ(i,a,j);if(C()){break _;}i
=$z;k=0.0;d=0;while(d<De(i)){j=Z(i,d);if(j.lo()&&!(j===a.sg&&a.m4<5)){l=QM(Dv(j.L,0.30000001192092896,0.30000001192092896,0.30000001192092896),b,f);if(l!==null){m=DG(b,l.gw);if(!(m>=k&&k!==0.0)){h=j;k=m;}}}d=d+1|0;}if(h!==null)g=A1a(h);if(g!==null){if(g.nw!==null){b=g.nw;f=a.sg;c=4;$p=7;continue _;}a.sr=g.h8;a.sY=g.h9;a.rB=g.h$;b=a.l;c=a.sr;d=a.sY;e=a.rB;$p=6;continue _;}a.d=a.d+a.g;a.j=a.j+a.i;a.e=a.e+a.h;n=Ce(a.g*a.g+a.h*a.h);a.t=CR(a.g,a.h)*180.0/3.1415927410125732;a.I=CR(a.i,n)*180.0/3.1415927410125732;while
(a.I-a.T<(-180.0)){a.T=a.T-360.0;}while(a.I-a.T>=180.0){a.T=a.T+360.0;}while(a.t-a.P<(-180.0)){a.P=a.P-360.0;}while(a.t-a.P>=180.0){a.P=a.P+360.0;}a.I=a.T+(a.I-a.T)*0.20000000298023224;a.t=a.P+(a.t-a.P)*0.20000000298023224;o=0.9900000095367432;$p=9;continue _;case 6:$z=ACt(b,c,d,e);if(C()){break _;}c=$z;a.vK=c;a.g=g.gw.w-a.d;a.i=g.gw.y-a.j;a.h=g.gw.v-a.e;n=Ce(a.g*a.g+a.i*a.i+a.h*a.h);k=a.d;m=a.g;p=n;a.d=k-m/p*0.05000000074505806;a.j=a.j-a.i/p*0.05000000074505806;a.e=a.e-a.h/p*0.05000000074505806;Dh(a.l,a,B(583),
1.0,1.2000000476837158/(N(a.m)*0.20000000298023224+0.8999999761581421));a.pf=1;a.li=7;a.d=a.d+a.g;a.j=a.j+a.i;a.e=a.e+a.h;n=Ce(a.g*a.g+a.h*a.h);a.t=CR(a.g,a.h)*180.0/3.1415927410125732;a.I=CR(a.i,n)*180.0/3.1415927410125732;while(a.I-a.T<(-180.0)){a.T=a.T-360.0;}while(a.I-a.T>=180.0){a.T=a.T+360.0;}while(a.t-a.P<(-180.0)){a.P=a.P-360.0;}while(a.t-a.P>=180.0){a.P=a.P+360.0;}a.I=a.T+(a.I-a.T)*0.20000000298023224;a.t=a.P+(a.t-a.P)*0.20000000298023224;o=0.9900000095367432;$p=9;continue _;case 7:$z=b.fp(f,c);if(C())
{break _;}c=$z;if(c){Dh(a.l,a,B(583),1.0,1.2000000476837158/(N(a.m)*0.20000000298023224+0.8999999761581421));$p=8;continue _;}a.g=a.g*(-0.10000000149011612);a.i=a.i*(-0.10000000149011612);a.h=a.h*(-0.10000000149011612);a.t=a.t+180.0;a.P=a.P+180.0;a.m4=0;a.d=a.d+a.g;a.j=a.j+a.i;a.e=a.e+a.h;n=Ce(a.g*a.g+a.h*a.h);a.t=CR(a.g,a.h)*180.0/3.1415927410125732;a.I=CR(a.i,n)*180.0/3.1415927410125732;while(a.I-a.T<(-180.0)){a.T=a.T-360.0;}while(a.I-a.T>=180.0){a.T=a.T+360.0;}while(a.t-a.P<(-180.0)){a.P=a.P-360.0;}while
(a.t-a.P>=180.0){a.P=a.P+360.0;}a.I=a.T+(a.I-a.T)*0.20000000298023224;a.t=a.P+(a.t-a.P)*0.20000000298023224;o=0.9900000095367432;$p=9;continue _;case 8:Ca(a);if(C()){break _;}a.d=a.d+a.g;a.j=a.j+a.i;a.e=a.e+a.h;n=Ce(a.g*a.g+a.h*a.h);a.t=CR(a.g,a.h)*180.0/3.1415927410125732;a.I=CR(a.i,n)*180.0/3.1415927410125732;while(a.I-a.T<(-180.0)){a.T=a.T-360.0;}while(a.I-a.T>=180.0){a.T=a.T+360.0;}while(a.t-a.P<(-180.0)){a.P=a.P-360.0;}while(a.t-a.P>=180.0){a.P=a.P+360.0;}a.I=a.T+(a.I-a.T)*0.20000000298023224;a.t=a.P+(a.t
-a.P)*0.20000000298023224;o=0.9900000095367432;$p=9;case 9:$z=AE6(a);if(C()){break _;}c=$z;if(c){e=0;while(e<4){BW(a.l,B(213),a.d-a.g*0.25,a.j-a.i*0.25,a.e-a.h*0.25,a.g,a.i,a.h);e=e+1|0;}o=0.800000011920929;}k=a.g;m=o;a.g=k*m;a.i=a.i*m;a.h=a.h*m;a.i=a.i-0.029999999329447746;CT(a,a.d,a.j,a.e);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function A7C(a,b){var c,d;if(a.pf&&a.sg===b&&a.li<=0){c=b.J;d=new Cd;BB();MJ(d,Bgd.cU,1);if(U5(c,d)){Dh(a.l,a,B(584),0.20000000298023224,((N(a.m)-N(a.m))*0.699999988079071+1.0)*2.0);RR(b,a);Ca(a);}}}
function Rr(){Dg.call(this);}
function BlF(){var a=new Rr();AST(a);return a;}
function AST(a){EG(a);}
function AJU(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=B(585);$p=1;case 1:AKq(a,h);if(C()){break _;}B3();Bw(c,d,e);Bv(b.P+(b.t-b.P)*g-90.0,0.0,1.0,0.0);Bv(b.T+(b.I-b.T)*g,0.0,0.0,1.0);BA();h=BeL;Ba(32826);i=b.li-g;if(i>0.0)Bv( -Bq(i*3.0)*i,0.0,0.0,1.0);Bv(45.0,1.0,0.0,0.0);CC(0.05624999850988388,0.05624999850988388,0.05624999850988388);Bw((-4.0),0.0,0.0);Cj(0.05624999850988388,
0.0,0.0);Bz(h);G(h,(-7.0),(-2.0),(-2.0),0.0,0.15625);G(h,(-7.0),(-2.0),2.0,0.15625,0.15625);G(h,(-7.0),2.0,2.0,0.15625,0.3125);G(h,(-7.0),2.0,(-2.0),0.0,0.3125);Br(h);Cj((-0.05624999850988388),0.0,0.0);Bz(h);G(h,(-7.0),2.0,(-2.0),0.0,0.15625);G(h,(-7.0),2.0,2.0,0.15625,0.15625);G(h,(-7.0),(-2.0),2.0,0.15625,0.3125);G(h,(-7.0),(-2.0),(-2.0),0.0,0.3125);Br(h);j=0;while(j<4){Bv(90.0,1.0,0.0,0.0);Cj(0.0,0.0,0.05624999850988388);Bz(h);G(h,(-8.0),(-2.0),0.0,0.0,0.0);G(h,8.0,(-2.0),0.0,0.5,0.0);G(h,8.0,2.0,0.0,0.5,
0.15625);G(h,(-8.0),2.0,0.0,0.0,0.15625);Br(h);j=j+1|0;}Bc(32826);BD();return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function ADg(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AJU(a,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function E9(){var a=this;C5.call(a);a.nb=null;a.zg=0;a.mE=0;a.g8=0;a.qX=0;a.ym=0.0;}
function Ha(a,b,c,d,e){var f=new E9();G_(f,a,b,c,d,e);return f;}
function G_(a,b,c,d,e,f){Fy(a,b);a.mE=0;a.qX=5;a.ym=BP()*3.141592653589793*2.0;DZ(a,0.25,0.25);a.c2=a.eL/2.0;CT(a,c,d,e);a.nb=f;a.t=BP()*360.0;a.g=BP()*0.20000000298023224-0.10000000149011612;a.i=0.20000000298023224;a.h=BP()*0.20000000298023224-0.10000000149011612;a.i4=0;}
function AJC(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.I$();if(C()){break _;}if(a.g8>0)a.g8=a.g8-1|0;a.bR=a.d;a.cQ=a.j;a.bQ=a.e;a.i=a.i-0.03999999910593033;b=a.l;c=K(a.d);d=K(a.j);e=K(a.e);$p=2;case 2:$z=ABX(b,c,d,e);if(C()){break _;}b=$z;if(b===BfR){a.i=0.20000000298023224;a.g=(N(a.m)-N(a.m))*0.20000000298023224;a.h=(N(a.m)-N(a.m))*0.20000000298023224;Dh(a.l,a,B(215),0.4000000059604645,
2.0+N(a.m)*0.4000000059604645);}f=a.d;g=a.j;h=a.e;$p=3;case 3:ACD(a,f,g,h);if(C()){break _;}$p=4;case 4:AEd(a);if(C()){break _;}f=a.g;g=a.i;h=a.h;$p=5;case 5:ARD(a,f,g,h);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;if(a.cu){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;a.i=a.i*(-0.5);}a.zg=a.zg+1|0;a.mE=a.mE+1|0;if(a.mE<6000)return;$p=6;case 6:Ca(a);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AEd(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.l;c=a.L;d=BfQ;$p=1;case 1:$z=AAq(b,c,d,a);if(C()){break _;}e=$z;return e;default:E$();}}C3().s(a,b,c,d,e,$p);}
function ACD(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=K(b);f=K(c);g=K(d);h=b-e;i=c-f;j=d-g;L();k=BgA.data;l=a.l;$p=1;case 1:$z=ACt(l,e,f,g);if(C()){break _;}m=$z;if(!k[m])return 0;k=BgA.data;l=a.l;m=e-1|0;$p=2;case 2:$z=ACt(l,m,f,g);if(C())
{break _;}m=$z;n=k[m]?0:1;k=BgA.data;l=a.l;m=e+1|0;$p=3;case 3:$z=ACt(l,m,f,g);if(C()){break _;}m=$z;o=k[m]?0:1;k=BgA.data;l=a.l;m=f-1|0;$p=4;case 4:$z=ACt(l,e,m,g);if(C()){break _;}m=$z;p=k[m]?0:1;k=BgA.data;l=a.l;m=f+1|0;$p=5;case 5:$z=ACt(l,e,m,g);if(C()){break _;}m=$z;q=k[m]?0:1;k=BgA.data;l=a.l;m=g-1|0;$p=6;case 6:$z=ACt(l,e,f,m);if(C()){break _;}m=$z;m=k[m]?0:1;k=BgA.data;l=a.l;r=g+1|0;$p=7;case 7:$z=ACt(l,e,f,r);if(C()){break _;}e=$z;r=k[e]?0:1;s=(-1);t=9999.0;if(n&&h<t){s=0;t=h;}if(!o)b=t;else{b=1.0
-h;if(b<t)s=1;else b=t;}if(p&&i<b){s=2;b=i;}if(!q)c=b;else{c=1.0-i;if(c<b)s=3;else c=b;}if(m&&j<c){s=4;c=j;}if(r&&1.0-j<c)s=5;u=N(a.m)*0.20000000298023224+0.10000000149011612;if(!s)a.g= -u;if(s==1)a.g=u;if(s==2)a.i= -u;if(s==3)a.i=u;if(s==4)a.h= -u;if(s==5)a.h=u;return 0;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function AMs(a,b){Vb(a,null,b);}
function Vb(a,b,c){a.qX=a.qX-c|0;if(a.qX<=0)Ca(a);return 0;}
function A_e(a,b){if(!a.g8&&U5(b.J,a.nb)){Dh(a.l,a,B(584),0.20000000298023224,((N(a.m)-N(a.m))*0.699999988079071+1.0)*2.0);RR(b,a);Ca(a);}}
function Mo(){C5.call(this);this.hm=0;}
function AWN(a,b,c,d){var e=new Mo();A6z(e,a,b,c,d);return e;}
function A6z(a,b,c,d,e){var f,g,h;Fy(a,b);a.hm=0;a.mw=1;DZ(a,0.9800000190734863,0.9800000190734863);a.c2=a.eL/2.0;f=c;g=d;h=e;CT(a,f,g,h);e=BP()*3.1415927410125732*2.0*3.1415927410125732/180.0;a.g= -Bq(e)*0.019999999552965164;a.i=0.20000000298023224;a.h= -BC(e)*0.019999999552965164;a.i4=0;a.hm=80;a.bR=f;a.cQ=g;a.bQ=h;}
function A$e(a){return a.cP?0:1;}
function XF(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bR=a.d;a.cQ=a.j;a.bQ=a.e;a.i=a.i-0.03999999910593033;b=a.g;c=a.i;d=a.h;$p=1;case 1:ARD(a,b,c,d);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;if(a.cu){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;a.i=a.i*(-0.5);}e=a.hm;a.hm=e-1|0;if(e>0){BW(a.l,B(256),a.d,a.j+0.5,a.e,0.0,
0.0,0.0);return;}$p=2;case 2:Ca(a);if(C()){break _;}f=4.0;g=a.l;h=null;b=a.d;c=a.j;d=a.e;$p=3;case 3:X7(g,h,b,c,d,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AOT(){Dg.call(this);this.v9=null;}
function Bao(){var a=new AOT();A7h(a);return a;}
function A7h(a){EG(a);a.v9=Kg();a.l5=0.5;}
function APw(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bw(c,d,e);if(b.hm-g+1.0<10.0){h=1.0-(b.hm-g+1.0)/10.0;if(h<0.0)h=0.0;if(h>1.0)h=1.0;f=h*h;i=1.0+f*f*0.30000001192092896;CC(i,i,i);}h=(1.0-(b.hm-g+1.0)/100.0)*0.800000011920929;j=B(179);$p=1;case 1:AKq(a,j);if(C()){break _;}j=a.v9;L();GV(j,Bfk);if(!((b.hm/5|0)%2|0)){Bc(3553);Bc(2896);Ba(3042);Df(770,772);BU(1.0,
1.0,1.0,h);GV(a.v9,Bfk);BU(1.0,1.0,1.0,1.0);Bc(3042);Ba(2896);Ba(3553);}BD();return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AL4(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:APw(a,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function JI(){var a=this;C5.call(a);a.hQ=0;a.oM=0;}
function AYh(a){return a.cP?0:1;}
function AML(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.hQ){$p=3;continue _;}a.bR=a.d;a.cQ=a.j;a.bQ=a.e;a.oM=a.oM+1|0;a.i=a.i-0.03999999910593033;b=a.g;c=a.i;d=a.h;$p=1;case 1:ARD(a,b,c,d);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;e=K(a.d);f=K(a.j);g=K(a.e);h=a.l;$p=2;case 2:$z=ACt(h,e,f,g);if(C()){break _;}i
=$z;if(i==a.hQ){h=a.l;i=0;$p=4;continue _;}if(!a.cu){if(a.oM<=100)return;e=a.hQ;f=1;$p=7;continue _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;a.i=a.i*(-0.5);$p=5;continue _;case 3:Ca(a);if(C()){break _;}return;case 4:APu(h,e,f,g,i);if(C()){break _;}if(!a.cu){if(a.oM<=100)return;e=a.hQ;f=1;$p=7;continue _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;a.i=a.i*(-0.5);$p=5;case 5:Ca(a);if(C()){break _;}h=a.l;i=a.hQ;j=1;$p=6;case 6:$z=AH$(h,i,e,f,g,j);if(C()){break _;}i=$z;if(!i){e=a.hQ;f=1;$p=
9;continue _;}h=a.l;i=a.hQ;$p=10;continue _;case 7:ABQ(a,e,f);if(C()){break _;}$p=8;case 8:Ca(a);if(C()){break _;}return;case 9:ABQ(a,e,f);if(C()){break _;}return;case 10:$z=APu(h,e,f,g,i);if(C()){break _;}e=$z;if(e)return;e=a.hQ;f=1;$p=9;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AXY(a){return a.l;}
function AQM(){Dg.call(this);this.Du=null;}
function Bag(){var a=new AQM();AXq(a);return a;}
function AXq(a){EG(a);a.Du=Kg();a.l5=0.5;}
function AQg(a,b,c,d,e,f,g){var h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bw(c,d,e);h=B(179);$p=1;case 1:AKq(a,h);if(C()){break _;}L();h=BeP.data[b.hQ];i=b.l;Bc(2896);j=a.Du;k=K(b.d);l=K(b.j);m=K(b.e);$p=2;case 2:AIY(j,h,i,k,l,m);if(C()){break _;}Ba(2896);BD();return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ARj(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AQg(a,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function Gc(){var a=this;C5.call(a);a.Bj=null;a.iN=0;a.kw=0;a.oL=0;a.kI=0;}
var BlG=null;function ASP(a,b){return b.L;}
function AZ1(a){return a.L;}
function A7F(a){return 1;}
function AVM(a){return a.eL*0.2;}
function ALe(a,b,c){var d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.oL= -a.oL;a.kw=10;a.iN=a.iN+(c*10|0)|0;if(a.iN<=40)return 1;BB();c=BiH.cU;d=1;e=0.0;$p=1;case 1:AGF(a,c,d,e);if(C()){break _;}$p=2;case 2:APd(a);if(C()){break _;}return 1;default:E$();}}C3().s(a,b,c,d,e,$p);}
function A9M(a){return a.cP?0:1;}
function APd(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;c=27;while(b<c){d=TN(a,b);if(d!==null){e=N(a.m)*0.800000011920929+0.10000000149011612;f=N(a.m)*0.800000011920929+0.10000000149011612;g=N(a.m)*0.800000011920929+0.10000000149011612;h=e;i=f;j=g;if(d.p>0){k=E(a.m,21)+10|0;if(k>d.p)k=d.p;d.p=d.p-k|0;l=Ha(a.l,a.d+h,a.j+i,a.e+j,
Ok(d.bA,k,d.ej));l.g=CY(a.m)*0.05000000074505806;l.i=CY(a.m)*0.05000000074505806+0.20000000298023224;l.h=CY(a.m)*0.05000000074505806;m=a.l;$p=2;continue _;}}b=b+1|0;}$p=1;case 1:Ca(a);if(C()){break _;}return;case 2:AOf(m,l);if(C()){break _;}a:while(true){if(d.p>0){k=E(a.m,21)+10|0;if(k>d.p)k=d.p;d.p=d.p-k|0;l=Ha(a.l,a.d+h,a.j+i,a.e+j,Ok(d.bA,k,d.ej));l.g=CY(a.m)*0.05000000074505806;l.i=CY(a.m)*0.05000000074505806+0.20000000298023224;l.h=CY(a.m)*0.05000000074505806;m=a.l;continue _;}while(true){b=b+1|0;if(b>=
c)break a;d=TN(a,b);if(d===null)continue;else break;}e=N(a.m)*0.800000011920929+0.10000000149011612;f=N(a.m)*0.800000011920929+0.10000000149011612;g=N(a.m)*0.800000011920929+0.10000000149011612;h=e;i=f;j=g;}$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ASE(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.kw>0)a.kw=a.kw-1|0;if(a.iN>0)a.iN=a.iN-1|0;a.bR=a.d;a.cQ=a.j;a.bQ=a.e;a.i=a.i
-0.03999999910593033;b=K(a.d);c=K(a.j);d=K(a.e);e=a.l;f=c-1|0;$p=1;case 1:$z=ACt(e,b,f,d);if(C()){break _;}f=$z;L();if(f==Bg8.b)c=c+(-1)|0;g=0.4;h=0.0078125;e=a.l;$p=2;case 2:$z=ACt(e,b,c,d);if(C()){break _;}f=$z;if(f==Bg8.b){i=a.d;j=a.j;k=a.e;$p=3;continue _;}if(a.g<(-0.4))a.g=(-0.4);if(a.g>g)a.g=g;if(a.h<(-0.4))a.h=(-0.4);if(a.h>g)a.h=g;if(a.cu){a.g=a.g*0.5;a.i=a.i*0.5;a.h=a.h*0.5;}i=a.g;j=a.i;k=a.h;$p=5;continue _;case 3:$z=ASi(a,i,j,k);if(C()){break _;}l=$z;e=a.l;$p=4;case 4:$z=AEI(e,b,c,d);if(C()){break _;}m
=$z;a.j=c;n=R(m,2);if(n>=0&&m<=5)a.j=c+1|0;if(!n)a.g=a.g-h;if(m==3)a.g=a.g+h;if(m==4)a.h=a.h+h;if(m==5)a.h=a.h-h;o=BlG.data[m].data;p=o[1].data[0]-o[0].data[0]|0;q=o[1].data[2]-o[0].data[2]|0;r=Ec(p*p+q*q);if(a.g*p+a.h*q<0.0){p= -p;q= -q;}s=Ec(a.g*a.g+a.h*a.h);a.g=s*p/r;a.h=s*q/r;t=b;u=t+0.5;v=u+o[0].data[0]*0.5;w=d;p=w+0.5;i=p+o[0].data[2]*0.5;j=u+o[1].data[0]*0.5;k=p+o[1].data[2]*0.5;j=j-v;k=k-i;if(j===0.0){a.d=u;u=a.e-w;}else if(k===0.0){a.e=p;u=a.d-t;}else u=((a.d-v)*j+(a.e-i)*k)*2.0;a.d=v+j*u;a.e=i+k*u;CT(a,
a.d,a.j+a.c2,a.e);x=a.g;t=a.h;if(a.bH!==null){x=x*0.75;t=t*0.75;}i=(-0.4);if(x<i)x=i;if(x>g)x=g;if(t>=i)i=t;if(i<=g)g=i;i=0.0;$p=7;continue _;case 5:ARD(a,i,j,k);if(C()){break _;}if(!a.cu){a.g=a.g*0.949999988079071;a.i=a.i*0.949999988079071;a.h=a.h*0.949999988079071;}a.I=0.0;y=a.bR-a.d;z=a.bQ-a.e;if(y*y+z*z>0.001){a.t=CR(z,y)*180.0/3.141592653589793;if(a.kI)a.t=a.t+180.0;}ba=a.t-a.P;while(ba>=180.0){ba=ba-360.0;}while(ba<(-180.0)){ba=ba+360.0;}if(!(ba>=(-170.0)&&ba<170.0)){a.t=a.t+180.0;a.kI=a.kI?0:1;}WN(a,
a.t,a.I);e=a.l;l=Dv(a.L,0.20000000298023224,0.0,0.20000000298023224);$p=6;case 6:a:{$z=ADJ(e,a,l);if(C()){break _;}bb=$z;if(bb!==null&&De(bb)>0){bc=0;while(true){if(bc>=De(bb))break a;bd=Z(bb,bc);if(bd!==a.bH&&bd.rL()&&bd instanceof Gc)bd.uR(a);bc=bc+1|0;}}}if(a.bH!==null&&a.bH.cP)a.bH=null;return;case 7:ARD(a,x,i,g);if(C()){break _;}if(o[0].data[1]&&(K(a.d)-b|0)==o[0].data[0]&&(K(a.e)-d|0)==o[0].data[2])CT(a,a.d,a.j+o[0].data[1],a.e);else if(o[1].data[1]&&(K(a.d)-b|0)==o[1].data[0]&&(K(a.e)-d|0)==o[1].data[2])CT(a,
a.d,a.j+o[1].data[1],a.e);if(a.bH===null){a.g=a.g*0.9599999785423279;a.i=a.i*0.0;a.h=a.h*0.9599999785423279;}else{a.g=a.g*0.996999979019165;a.i=a.i*0.0;a.h=a.h*0.996999979019165;}i=a.d;j=a.j;k=a.e;$p=8;case 8:$z=ASi(a,i,j,k);if(C()){break _;}e=$z;if(e!==null&&l!==null){w=(l.y-e.y)*0.05;i=Ec(a.g*a.g+a.h*a.h);if(i>0.0){j=a.g/i;k=i+w;a.g=j*k;a.h=a.h/i*k;}CT(a,a.d,e.y,a.e);}f=K(a.d);n=K(a.e);if(!(f==b&&n==d)){i=Ec(a.g*a.g+a.h*a.h);a.g=i*(f-b|0);a.h=i*(n-d|0);}a.I=0.0;y=a.bR-a.d;z=a.bQ-a.e;if(y*y+z*z>0.001){a.t=
CR(z,y)*180.0/3.141592653589793;if(a.kI)a.t=a.t+180.0;}ba=a.t-a.P;while(ba>=180.0){ba=ba-360.0;}while(ba<(-180.0)){ba=ba+360.0;}if(!(ba>=(-170.0)&&ba<170.0)){a.t=a.t+180.0;a.kI=a.kI?0:1;}WN(a,a.t,a.I);e=a.l;l=Dv(a.L,0.20000000298023224,0.0,0.20000000298023224);$p=6;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function AJW(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=K(b);g=K(c);h=K(d);i=a.l;j=g-1|0;$p=1;case 1:$z=ACt(i,f,j,h);if(C()){break _;}j=$z;L();if(j==Bg8.b)g=g+(-1)|0;i=a.l;$p=2;case 2:$z=ACt(i,f,g,h);if(C()){break _;}j=$z;if(j!=Bg8.b)return null;i=a.l;$p=3;case 3:$z=AEI(i,f,g,h);if(C()){break _;}j=$z;c=g;if(j>=2&&j<=5)c
=g+1|0;k=BlG.data[j].data;l=k[1].data[0]-k[0].data[0]|0;m=k[1].data[2]-k[0].data[2]|0;n=Ec(l*l+m*m);l=l/n;m=m/n;l=b+l*e;d=d+m*e;if(k[0].data[1]&&(K(l)-f|0)==k[0].data[0]&&(K(d)-h|0)==k[0].data[2])c=c+k[0].data[1];else if(k[1].data[1]&&(K(l)-f|0)==k[1].data[0]&&(K(d)-h|0)==k[1].data[2])c=c+k[1].data[1];$p=4;case 4:$z=ASi(a,l,c,d);if(C()){break _;}i=$z;return i;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ASi(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=K(b);f=K(c);g=K(d);h=a.l;i=f-1|0;$p=1;case 1:$z=ACt(h,e,i,g);if(C()){break _;}i=$z;L();if(i==Bg8.b)f=f+(-1)|0;h=a.l;$p=2;case 2:$z=ACt(h,e,f,g);if(C()){break _;}i=$z;if(i!=Bg8.b)return null;h
=a.l;$p=3;case 3:$z=AEI(h,e,f,g);if(C()){break _;}j=$z;c=f;k=BlG.data[j].data;l=e;m=l+0.5;n=m+k[0].data[0]*0.5;o=c+0.5;p=o+k[0].data[1]*0.5;q=g;r=q+0.5;s=r+k[0].data[2]*0.5;m=m+k[1].data[0]*0.5;t=o+k[1].data[1]*0.5;o=r+k[1].data[2]*0.5;r=m-n;u=(t-p)*2.0;v=o-s;l=r===0.0?d-q:v===0.0?b-l:((b-n)*r+(d-s)*v)*2.0;b=n+r*l;c=p+u*l;d=s+v*l;i=R(u,0.0);if(i<0)c=c+1.0;if(i>0)c=c+0.5;return BY(b,c,d);default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function A3P(a,b){var c,d,e,f,g,h;if(b!==a.bH){c=b.d-a.d;d=b.e-a.e;e=c*c+d*d;if(e>=9.999999747378752E-5){e=Ce(e);c=c/e;f=d/e;g=1.0/e;if(g>1.0)g=1.0;c=c*g;d=f*g;c=c*0.10000000149011612;d=d*0.10000000149011612;c=c*(1.0-a.n2);d=d*(1.0-a.n2);c=c*0.5;d=d*0.5;if(!(b instanceof Gc)){Hn(a, -c,0.0, -d);Hn(b,c/4.0,0.0,d/4.0);}else{f=(b.g+a.g)/2.0;h=(b.h+a.h)/2.0;a.h=0.0;a.g=0.0;Hn(a,f-c,0.0,h-d);b.h=0.0;b.g=0.0;Hn(b,f+c,0.0,h+d);}}}}
function A07(a){return 27;}
function TN(a,b){return a.Bj.data[b];}
function A8P(a,b){Pd(b,a);return 1;}
function AMG(){var b,c,d,e,f,g;b=J($rt_arraycls($rt_arraycls($rt_intcls())),10);c=b.data;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=1;e[1]=f;c[0]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=0;g[2]=0;e[1]=f;c[1]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]
=(-1);g[1]=(-1);g[2]=0;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=0;g[2]=0;e[1]=f;c[2]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=(-1);g[2]=0;e[1]=f;c[3]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=(-1);g[2]=1;e[1]=f;c[4]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g
=f.data;g[0]=0;g[1]=(-1);g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=1;e[1]=f;c[5]=d;g=J($rt_arraycls($rt_intcls()),2);e=g.data;d=$rt_createIntArray(3);f=d.data;f[0]=0;f[1]=0;f[2]=1;e[0]=d;d=$rt_createIntArray(3);f=d.data;f[0]=1;f[1]=0;f[2]=0;e[1]=d;c[6]=g;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=1;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[1]=f;c[7]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g
=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[1]=f;c[8]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=0;g[2]=0;e[1]=f;c[9]=d;BlG=b;}
function ARy(){Dg.call(this);this.CW=null;}
function Bb7(){var a=new ARy();A$h(a);return a;}
function A$h(a){EG(a);a.l5=0.5;a.CW=Bc1();}
function AQf(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();h=b.co;i=b.d-b.co;j=g;k=h+i*j;l=b.b5+(b.j-b.b5)*j;i=b.cp+(b.e-b.cp)*j;h=0.30000001192092896;$p=1;case 1:$z=ASi(b,k,l,i);if(C()){break _;}m=$z;n=b.T+(b.I-b.T)*g;if(m!==null){$p=2;continue _;}Bw(c,d,e);Bv(180.0
-f,0.0,1.0,0.0);Bv( -n,0.0,0.0,1.0);o=b.kw-g;p=b.iN-g;if(p<0.0)p=0.0;if(o>0.0)Bv(Bq(o)*o*p/10.0*b.oL,1.0,0.0,0.0);b=B(179);$p=4;continue _;case 2:$z=AJW(b,k,l,i,h);if(C()){break _;}q=$z;h=(-0.30000001192092896);$p=3;case 3:$z=AJW(b,k,l,i,h);if(C()){break _;}r=$z;if(q===null)q=m;if(r===null)r=m;c=c+m.w-k;d=d+(q.y+r.y)/2.0-l;e=e+m.v-i;s=Dk(r, -q.w, -q.y, -q.v);if(HM(s)!==0.0){s=CD(s);f=CR(s.v,s.w)*180.0/3.141592653589793;n=Io(s.y)*73.0;}Bw(c,d,e);Bv(180.0-f,0.0,1.0,0.0);Bv( -n,0.0,0.0,1.0);o=b.kw-g;p=b.iN-g;if
(p<0.0)p=0.0;if(o>0.0)Bv(Bq(o)*o*p/10.0*b.oL,1.0,0.0,0.0);b=B(179);$p=4;case 4:AKq(a,b);if(C()){break _;}CC(0.75,0.75,0.75);b=Kg();L();GV(b,BgX);CC(1.3333333730697632,1.3333333730697632,1.3333333730697632);b=B(586);$p=5;case 5:AKq(a,b);if(C()){break _;}CC((-1.0),(-1.0),1.0);AKr(a.CW,0.0,0.0,(-0.10000000149011612),0.0,0.0,0.0625);BD();return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function AQe(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AQf(a,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function V3(){var a=this;D.call(a);a.uV=Long_ZERO;a.tZ=0;a.y3=0;}
function BlH(){var a=new V3();AUa(a);return a;}
function AUa(a){return;}
function ABz(){var a=this;D.call(a);a.we=null;a.ww=null;}
function BbR(){var a=new ABz();AUl(a);return a;}
function AUl(a){a.we=BK(0,0);BG(a.we,(-12.0),(-14.0),(-1.0),24,12,2,0.0);a.ww=BK(0,14);BG(a.ww,(-1.0),(-2.0),(-1.0),2,14,2,0.0);}
function AM9(a){B_(a.we,0.0625);B_(a.ww,0.0625);}
function AH6(){var a=this;Eg.call(a);a.lR=null;a.qN=null;a.rx=null;a.j6=null;a.j5=null;a.j8=null;a.j7=null;a.j$=null;a.j9=null;a.ka=null;a.j_=null;}
function A5n(){var a=new AH6();AUL(a);return a;}
function AUL(a){a.lR=BK(32,4);BG(a.lR,(-4.0),(-4.0),(-8.0),8,8,8,0.0);BJ(a.lR,0.0,15.0,(-3.0));a.qN=BK(0,0);BG(a.qN,(-3.0),(-3.0),(-3.0),6,6,6,0.0);BJ(a.qN,0.0,15.0,0.0);a.rx=BK(0,12);BG(a.rx,(-5.0),(-4.0),(-6.0),10,8,12,0.0);BJ(a.rx,0.0,15.0,9.0);a.j6=BK(18,0);BG(a.j6,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.j6,(-4.0),15.0,2.0);a.j5=BK(18,0);BG(a.j5,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.j5,4.0,15.0,2.0);a.j8=BK(18,0);BG(a.j8,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.j8,(-4.0),15.0,1.0);a.j7=BK(18,0);BG(a.j7,(-1.0),
(-1.0),(-1.0),16,2,2,0.0);BJ(a.j7,4.0,15.0,1.0);a.j$=BK(18,0);BG(a.j$,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.j$,(-4.0),15.0,0.0);a.j9=BK(18,0);BG(a.j9,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.j9,4.0,15.0,0.0);a.ka=BK(18,0);BG(a.ka,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.ka,(-4.0),15.0,(-1.0));a.j_=BK(18,0);BG(a.j_,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.j_,4.0,15.0,(-1.0));}
function AX$(a,b,c,d,e,f,g){Yq(a,b,c,d,e,f,g);B_(a.lR,g);B_(a.qN,g);B_(a.rx,g);B_(a.j6,g);B_(a.j5,g);B_(a.j8,g);B_(a.j7,g);B_(a.j$,g);B_(a.j9,g);B_(a.ka,g);B_(a.j_,g);}
function Yq(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;a.lR.bW=e/57.2957763671875;a.lR.bZ=f/57.2957763671875;a.j6.bT=(-0.7853981852531433);a.j5.bT=0.7853981852531433;a.j8.bT=(-0.5811946392059326);a.j7.bT=0.5811946392059326;a.j$.bT=(-0.5811946392059326);a.j9.bT=0.5811946392059326;a.ka.bT=(-0.7853981852531433);a.j_.bT=0.7853981852531433;a.j6.bW=0.7853981852531433;a.j5.bW=(-0.7853981852531433);a.j8.bW=0.39269909262657166;a.j7.bW=(-0.39269909262657166);a.j$.bW=(-0.39269909262657166);a.j9.bW=0.39269909262657166;a.ka.bW
=(-0.7853981852531433);a.j_.bW=0.7853981852531433;b=b*0.6661999821662903;f=b*2.0;h= -(BC(f+0.0)*0.4000000059604645)*c;i= -(BC(f+3.1415927410125732)*0.4000000059604645)*c;j= -(BC(f+1.5707963705062866)*0.4000000059604645)*c;k= -(BC(f+4.71238899230957)*0.4000000059604645)*c;l=HU(Bq(b+0.0)*0.4000000059604645)*c;m=HU(Bq(b+3.1415927410125732)*0.4000000059604645)*c;n=HU(Bq(b+1.5707963705062866)*0.4000000059604645)*c;o=HU(Bq(b+4.71238899230957)*0.4000000059604645)*c;p=a.j6;p.bW=p.bW+h;p=a.j5;p.bW=p.bW+ -h;p=a.j8;p.bW
=p.bW+i;p=a.j7;p.bW=p.bW+ -i;p=a.j$;p.bW=p.bW+j;p=a.j9;p.bW=p.bW+ -j;p=a.ka;p.bW=p.bW+k;p=a.j_;p.bW=p.bW+ -k;p=a.j6;p.bT=p.bT+l;p=a.j5;p.bT=p.bT+ -l;p=a.j8;p.bT=p.bT+m;p=a.j7;p.bT=p.bT+ -m;p=a.j$;p.bT=p.bT+n;p=a.j9;p.bT=p.bT+ -n;p=a.ka;p.bT=p.bT+o;p=a.j_;p.bT=p.bT+ -o;}
function AIA(){var a=this;Eg.call(a);a.lY=null;a.vm=null;a.sO=null;a.pl=null;a.pk=null;a.pj=null;a.pi=null;}
function BaV(){var a=new AIA();A4$(a);return a;}
function A4$(a){a.lY=BK(0,0);BG(a.lY,(-4.0),(-8.0),(-4.0),8,8,8,0.0);BJ(a.lY,0.0,4.0,0.0);a.vm=BK(32,0);BG(a.vm,(-4.0),(-8.0),(-4.0),8,8,8,0.5);BJ(a.vm,0.0,4.0,0.0);a.sO=BK(16,16);BG(a.sO,(-4.0),0.0,(-2.0),8,12,4,0.0);BJ(a.sO,0.0,4.0,0.0);a.pl=BK(0,16);BG(a.pl,(-2.0),0.0,(-2.0),4,6,4,0.0);BJ(a.pl,(-2.0),16.0,4.0);a.pk=BK(0,16);BG(a.pk,(-2.0),0.0,(-2.0),4,6,4,0.0);BJ(a.pk,2.0,16.0,4.0);a.pj=BK(0,16);BG(a.pj,(-2.0),0.0,(-2.0),4,6,4,0.0);BJ(a.pj,(-2.0),16.0,(-4.0));a.pi=BK(0,16);BG(a.pi,(-2.0),0.0,(-2.0),4,6,4,
0.0);BJ(a.pi,2.0,16.0,(-4.0));}
function A22(a,b,c,d,e,f,g){Zo(a,b,c,d,e,f,g);B_(a.lY,g);B_(a.sO,g);B_(a.pl,g);B_(a.pk,g);B_(a.pj,g);B_(a.pi,g);}
function Zo(a,b,c,d,e,f,g){var h;a.lY.bW=e/57.2957763671875;a.lY.bZ=f/57.2957763671875;h=a.pl;b=b*0.6661999821662903;h.bZ=BC(b)*1.399999976158142*c;h=a.pk;d=b+3.1415927410125732;h.bZ=BC(d)*1.399999976158142*c;a.pj.bZ=BC(d)*1.399999976158142*c;a.pi.bZ=BC(b)*1.399999976158142*c;}
function AEV(){Eg.call(this);this.cX=null;}
function Bc1(){var a=new AEV();A31(a);return a;}
function A31(a){a.cX=J(QC,7);a.cX.data[0]=BK(0,10);a.cX.data[1]=BK(0,0);a.cX.data[2]=BK(0,0);a.cX.data[3]=BK(0,0);a.cX.data[4]=BK(0,0);a.cX.data[5]=BK(44,10);BG(a.cX.data[0],(-10.0),(-8.0),(-1.0),20,16,2,0.0);BJ(a.cX.data[0],0.0,4.0,0.0);BG(a.cX.data[5],(-9.0),(-7.0),(-1.0),18,14,1,0.0);BJ(a.cX.data[5],0.0,4.0,0.0);BG(a.cX.data[1],(-8.0),(-9.0),(-1.0),16,8,2,0.0);BJ(a.cX.data[1],(-9.0),4.0,0.0);BG(a.cX.data[2],(-8.0),(-9.0),(-1.0),16,8,2,0.0);BJ(a.cX.data[2],9.0,4.0,0.0);BG(a.cX.data[3],(-8.0),(-9.0),(-1.0),
16,8,2,0.0);BJ(a.cX.data[3],0.0,4.0,(-7.0));BG(a.cX.data[4],(-8.0),(-9.0),(-1.0),16,8,2,0.0);BJ(a.cX.data[4],0.0,4.0,7.0);a.cX.data[0].bZ=1.5707963705062866;a.cX.data[1].bW=4.71238899230957;a.cX.data[2].bW=1.5707963705062866;a.cX.data[3].bW=3.1415927410125732;a.cX.data[5].bZ=(-1.5707963705062866);}
function AKr(a,b,c,d,e,f,g){var h;a.cX.data[5].mY=4.0-d;h=0;while(h<6){B_(a.cX.data[h],g);h=h+1|0;}}
function Tq(){var a=this;D.call(a);a.lD=0;a.ye=0;a.sl=0;a.nd=0;a.k7=null;}
function KA(a){return a.lD>=a.sl?0:1;}
function KR(a){var b,c;PC(a);a.nd=a.lD;b=a.k7;c=a.lD;a.lD=c+1|0;return Z(b,c);}
function AL$(a){var b;if(a.nd<0){b=new D1;O(b);M(b);}PC(a);Em(a.k7,a.nd);a.ye=a.k7.d3;if(a.nd<a.lD)a.lD=a.lD-1|0;a.sl=a.sl-1|0;a.nd=(-1);}
function PC(a){var b;if(a.ye>=a.k7.d3)return;b=new KQ;O(b);M(b);}
function I1(){var a=this;D.call(a);a.gY=null;a.tp=0;a.ch=null;a.hJ=null;a.gU=null;a.hY=null;a.ee=null;a.nY=0;a.fY=0;a.fT=0;a.iR=null;a.dJ=null;a.gx=0;a.dT=0;a.p8=0;a.Eg=0;a.r5=0;a.s0=Long_ZERO;}
var Bkq=0;function BaL(a,b,c){var d=new I1();AQ_(d,a,b,c);return d;}
function A9s(a,b,c,d){var e=new I1();A1w(e,a,b,c,d);return e;}
function AQ_(a,b,c,d){var e;a.iR=Dd();a.dJ=J(J1,8);a.gx=0;a.dT=0;a.Eg=0;a.r5=0;a.s0=Long_ZERO;a.ch=b;a.fY=c;a.fT=d;a.ee=$rt_createByteArray(256);e=0;while(e<a.dJ.data.length){a.dJ.data[e]=Ci();e=e+1|0;}}
function A1w(a,b,c,d,e){var f;f=c.data;AQ_(a,b,d,e);a.gY=c;b=new T3;d=f.length;AJz(b,d);a.hJ=b;a.gU=Je(d);a.hY=Je(d);}
function ARF(a,b,c){return b==a.fY&&c==a.fT?1:0;}
function UF(a,b,c){return a.ee.data[c<<4|b]&255;}
function A5I(a){return;}
function AFL(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=127;c=0;while(true){if(c>=16){a.nY=b;b=0;while(b<16){d=0;if(d<16){$p=2;continue _;}b=b+1|0;}a.dT=1;return;}e=0;if(e<16)break;c=c+1|0;}f=a.ee.data;d=e<<4|c;f[d]=(-128);g=127;$p=1;case 1:ACX(a,c,g,e);if(C()){break _;}if((a.ee.data[d]&255)<b)b=a.ee.data[d]&255;e=e+1|0;while(e>=16){c=c+1|0;if(c>=16){a.nY=b;b=0;while(b<16){d=0;if(d<16){$p=2;continue _;}b
=b+1|0;}a.dT=1;return;}e=0;}f=a.ee.data;d=e<<4|c;f[d]=(-128);g=127;continue _;case 2:AEX(a,b,d);if(C()){break _;}d=d+1|0;while(true){if(d<16){continue _;}b=b+1|0;if(b>=16)break;d=0;}a.dT=1;return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AEX(a,b,c){var d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=UF(a,b,c);e=(a.fY*16|0)+b|0;f=(a.fT*16|0)+c|0;b=e-1|0;$p=1;case 1:AJG(a,b,f,d);if(C()){break _;}b=e+1|0;$p=2;case 2:AJG(a,b,f,d);if(C()){break _;}b=f-1|0;$p=3;case 3:AJG(a,e,b,d);if(C()){break _;}b=f+1|0;$p=4;case 4:AJG(a,e,b,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AJG(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.ch;$p=1;case 1:$z=ALE(e,b,c);if(C()){break _;}f=$z;g=R(f,d);if(g>0){e=a.ch;h=Bkw;$p=2;continue _;}if(g>=0){a.dT=1;return;}e=a.ch;h=Bkw;$p=3;continue _;case 2:Y5(e,h,b,d,c,b,f,c);if(C()){break _;}a.dT=1;return;case 3:Y5(e,h,b,f,c,b,d,c);if(C()){break _;}a.dT=1;return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ACX(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.ee.data;f=d<<4|b;g=e[f]&255;if(c<=g)c=g;while(c>0){L();if(BgB.data[ES(a,b,c-1|0,d)])break;c=c+(-1)|0;}h=R(c,g);if(h){APH(a.ch,b,d,c,g);a.ee.data[f]=c<<24>>24;if(c<a.nY)a.nY=c;else{f=127;i=0;while(i<16){j=0;while(j<16){e=a.ee.data;k=j<<4|i;if((e[k]&255)<f)f=a.ee.data[k]
&255;j=j+1|0;}i=i+1|0;}a.nY=f;}f=(a.fY*16|0)+b|0;i=(a.fT*16|0)+d|0;if(h>=0){l=a.ch;m=Bkw;$p=1;continue _;}j=c;while(j<g){Ej(a.gU,b,j,d,15);j=j+1|0;}j=15;k=c;a:{while(k>0){if(j<=0)break a;k=k+(-1)|0;L();n=BgB.data[ES(a,b,k,d)];if(!n)n=1;j=j-n|0;if(j<0)j=0;Ej(a.gU,b,k,d,j);}}while(k>0){L();if(BgB.data[ES(a,b,k-1|0,d)])break;k=k+(-1)|0;}if(k!=c){l=a.ch;m=Bkw;d=f-1|0;j=i-1|0;f=f+1|0;b=i+1|0;$p=2;continue _;}a.dT=1;}return;case 1:Y5(l,m,f,g,i,f,c,i);if(C()){break _;}while(g<c){Ej(a.gU,b,g,d,0);g=g+1|0;}j=15;k=c;b:
{while(k>0){if(j<=0)break b;k=k+(-1)|0;L();n=BgB.data[ES(a,b,k,d)];if(!n)n=1;j=j-n|0;if(j<0)j=0;Ej(a.gU,b,k,d,j);}}while(k>0){L();if(BgB.data[ES(a,b,k-1|0,d)])break;k=k+(-1)|0;}if(k==c){a.dT=1;return;}l=a.ch;m=Bkw;d=f-1|0;j=i-1|0;f=f+1|0;b=i+1|0;$p=2;case 2:Y5(l,m,d,k,j,f,c,b);if(C()){break _;}a.dT=1;return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ES(a,b,c,d){return a.gY.data[b<<11|d<<7|c];}
function ADC(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=e<<24>>24;h=a.ee.data[d<<4|b]&255;i=a.gY.data;j=b<<11|d<<7|c;k=i[j]&255;if(k==e)return 0;l=(a.fY*16|0)+b|0;m=(a.fT*16|0)+d|0;a.gY.data[j]=g;if(k){L();n=BeP.data[k];o=a.ch;$p=1;continue _;}a:{Ej(a.hJ,b,c,d,f);L();if(!BgB.data[g]){if(c!=(h-1|0))break a;$p
=5;continue _;}if(c>=h){f=c+1|0;$p=6;continue _;}}n=a.ch;o=Bkw;$p=2;continue _;case 1:n.lt(o,l,c,m);if(C()){break _;}b:{Ej(a.hJ,b,c,d,f);L();if(!BgB.data[g]){if(c!=(h-1|0))break b;$p=5;continue _;}if(c>=h){f=c+1|0;$p=6;continue _;}}n=a.ch;o=Bkw;$p=2;case 2:Y5(n,o,l,c,m,l,c,m);if(C()){break _;}n=a.ch;o=Bkx;$p=3;case 3:Y5(n,o,l,c,m,l,c,m);if(C()){break _;}$p=4;case 4:AEX(a,b,d);if(C()){break _;}if(!e){a.dT=1;return 1;}n=BeP.data[e];o=a.ch;$p=7;continue _;case 5:ACX(a,b,c,d);if(C()){break _;}n=a.ch;o=Bkw;$p=2;continue _;case 6:ACX(a,
b,f,d);if(C()){break _;}n=a.ch;o=Bkw;$p=2;continue _;case 7:n.fB(o,l,c,m);if(C()){break _;}a.dT=1;return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function ADz(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=e<<24>>24;g=a.ee.data[d<<4|b]&255;h=a.gY.data;i=b<<11|d<<7|c;j=h[i]&255;if(j==e)return 0;k=(a.fY*16|0)+b|0;l=(a.fT*16|0)+d|0;a.gY.data[i]=f;if(j){L();m=BeP.data[j];n=a.ch;$p=1;continue _;}a:{Ej(a.hJ,b,c,d,0);L();if(!BgB.data[f]){if(c!=(g-1|0))break a;$p=5;continue _;}if
(c>=g){i=c+1|0;$p=6;continue _;}}m=a.ch;n=Bkw;$p=2;continue _;case 1:m.lt(n,k,c,l);if(C()){break _;}b:{Ej(a.hJ,b,c,d,0);L();if(!BgB.data[f]){if(c!=(g-1|0))break b;$p=5;continue _;}if(c>=g){i=c+1|0;$p=6;continue _;}}m=a.ch;n=Bkw;$p=2;case 2:Y5(m,n,k,c,l,k,c,l);if(C()){break _;}m=a.ch;n=Bkx;$p=3;case 3:Y5(m,n,k,c,l,k,c,l);if(C()){break _;}$p=4;case 4:AEX(a,b,d);if(C()){break _;}if(!e){a.dT=1;return 1;}m=BeP.data[e];n=a.ch;$p=7;continue _;case 5:ACX(a,b,c,d);if(C()){break _;}m=a.ch;n=Bkw;$p=2;continue _;case 6:ACX(a,
b,i,d);if(C()){break _;}m=a.ch;n=Bkw;$p=2;continue _;case 7:m.fB(n,k,c,l);if(C()){break _;}a.dT=1;return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function RN(a,b,c,d){return Ij(a.hJ,b,c,d);}
function AAs(a,b,c,d,e){a.dT=1;Ej(a.hJ,b,c,d,e);}
function ACi(a,b,c,d,e){return b===Bkw?Ij(a.gU,c,d,e):b!==Bkx?0:Ij(a.hY,c,d,e);}
function AQL(a,b,c,d,e,f){a.dT=1;if(b===Bkw)Ej(a.gU,c,d,e,f);else{if(b!==Bkx)return;Ej(a.hY,c,d,e,f);}}
function VK(a,b,c,d,e){var f,g;f=Ij(a.gU,b,c,d);if(f>0)Bkq=1;e=f-e|0;g=Ij(a.hY,b,c,d);if(g<=e)g=e;return g;}
function VN(a,b){var c,d,e,f,g;a.r5=1;c=K(b.d/16.0);d=K(b.e/16.0);if(!(c==a.fY&&d==a.fT)){e=DR();f=new U;X(f);Cg(e,V(FK(I(f,B(587)),b)));}g=K(b.j/16.0);if(g<0)g=0;if(g>=a.dJ.data.length)g=a.dJ.data.length-1|0;S(a.dJ.data[g],b);}
function AMY(a,b){RW(a,b,K(b.j/16.0));}
function RW(a,b,c){var d,e;if(c<0)c=0;if(c>=a.dJ.data.length)c=a.dJ.data.length-1|0;if(!Q1(a.dJ.data[c],b)){d=DR();e=new U;X(e);Cg(d,V(FK(I(e,B(588)),b)));}H5(a.dJ.data[c],b);}
function Ph(a,b,c,d){return c<(a.ee.data[d<<4|b]&255)?0:1;}
function ANm(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=(b+(c*1024|0)|0)+((d*1024|0)*1024|0)|0;f=CP(a.iR,CX(e));if(f!==null)return f;g=ES(a,b,c,d);L();h=BeP.data[g];f=a.ch;b=(a.fY*16|0)+b|0;d=(a.fT*16|0)+d|0;$p=1;case 1:h.fB(f,b,c,d);if(C()){break _;}return CP(a.iR,CX(e));default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AJi(a,b,c,d,e){var f;a:{f=(b+(c*1024|0)|0)+((d*1024|0)*1024|0)|0;e.ce=a.ch;e.dH=(a.fY*16|0)+b|0;e.dF=c;e.dN=(a.fT*16|0)+d|0;if(ES(a,b,c,d)){L();if(BeP.data[ES(a,b,c,d)] instanceof Ef){if(a.tp){if(CP(a.iR,CX(f))!==null)H5(a.ch.fA,CP(a.iR,CX(f)));S(a.ch.fA,e);}BR(a.iR,CX(f),e);break a;}}Cg(DR(),B(589));}}
function ADY(a,b,c,d){var e;e=(b+(c*1024|0)|0)+((d*1024|0)*1024|0)|0;if(a.tp)H5(a.ch.fA,Q2(a.iR,CX(e)));}
function JY(a){var b;a.tp=1;DC(a.ch.fA,Ip(a.iR));b=0;while(b<a.dJ.data.length){AQc(a.ch,a.dJ.data[b]);b=b+1|0;}}
function AOL(a){var b;a.tp=0;F_(a.ch.fA,Ip(a.iR));b=0;while(b<a.dJ.data.length){AQ2(a.ch,a.dJ.data[b]);b=b+1|0;}}
function SE(a){a.dT=1;}
function AJZ(a,b,c,d){var e,f,g,h,i;e=K((c.M-2.0)/16.0);f=K((c.U+2.0)/16.0);if(e<0)e=0;if(f>=a.dJ.data.length)f=a.dJ.data.length-1|0;while(e<=f){g=a.dJ.data[e];h=0;while(h<g.o){i=Z(g,h);if(i!==b&&L5(i.L,c))S(d,i);h=h+1|0;}e=e+1|0;}}
function AMh(a,b,c,d){var e,f,g,h,i;e=K((c.M-2.0)/16.0);f=K((c.U+2.0)/16.0);if(e<0)e=0;if(f>=a.dJ.data.length)f=a.dJ.data.length-1|0;while(e<=f){g=a.dJ.data[e];h=0;while(h<g.o){i=Z(g,h);if(P1(b,Dl(i))&&L5(i.L,c))S(d,i);h=h+1|0;}e=e+1|0;}}
function Kl(a,b){return a.p8?0:a.r5&&Long_ne(a.ch.ea,a.s0)?1:a.dT;}
function Iq(){var a=this;D.call(a);a.jj=0;a.is=0;a.ks=null;a.xS=null;}
function BlI(a,b,c,d,e,f,g){var h=new Iq();AEt(h,a,b,c,d,e,f,g);return h;}
function AEt(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.xS=b;a.jj=c>>4;a.is=e>>4;i=f>>4;j=h>>4;a.ks=$rt_createMultiArray($rt_arraycls($rt_arraycls(I1)),[(j-a.is|0)+1|0,(i-a.jj|0)+1|0]);k=a.jj;while(k<=i){l=a.is;if(l<=j){m=a.ks.data[k-a.jj|0].data;c=l-a.is|0;$p=1;continue _;}k=k+1|0;}return;case 1:$z=ZR(b,k,l);if(C()){break _;}n
=$z;m[c]=n;l=l+1|0;while(true){if(l<=j){m=a.ks.data[k-a.jj|0].data;c=l-a.is|0;continue _;}k=k+1|0;if(k>i)break;l=a.is;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Hw(a,b,c,d){var e,f;if(c<0)return 0;if(c>=128)return 0;e=(b>>4)-a.jj|0;f=(d>>4)-a.is|0;return ES(a.ks.data[e].data[f],b&15,c,d&15);}
function AFU(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=(b>>4)-a.jj|0;f=(d>>4)-a.is|0;g=a.ks.data[e].data[f];e=b&15;b=d&15;$p=1;case 1:$z=ANm(g,e,c,b);if(C()){break _;}g=$z;return g;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AAL(a,b,c,d){return Bkt.data[Z3(a,b,c,d)];}
function Z3(a,b,c,d){return GR(a,b,c,d,1);}
function GR(a,b,c,d,e){var f,g,h,i,j,k;if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){a:{if(e){f=Hw(a,b,c,d);L();if(f==BeU.b)break a;if(f==Bg3.b)break a;}if(c<0)return 0;if(c>=128){f=15-a.xS.gg|0;if(f<0)f=0;return f;}f=(b>>4)-a.jj|0;g=(d>>4)-a.is|0;return VK(a.ks.data[f].data[g],b&15,c,d&15,a.xS.gg);}g=GR(a,b,c+1|0,d,0);h=GR(a,b+1|0,c,d,0);i=GR(a,b-1|0,c,d,0);j=GR(a,b,c,d+1|0,0);k=GR(a,b,c,d-1|0,0);if(h<=g)h=g;if(i<=h)i=h;if(j<=i)j=i;if(k<=j)k=j;return k;}return 15;}
function AC3(a,b,c,d){var e,f;if(c<0)return 0;if(c>=128)return 0;e=(b>>4)-a.jj|0;f=(d>>4)-a.is|0;return RN(a.ks.data[e].data[f],b&15,c,d&15);}
function N0(a,b,c,d){var e,f;e=Hw(a,b,c,d);if(!e)f=Bf_;else{L();f=BeP.data[e].b8;}return f;}
function AB3(a,b,c,d){var e;L();e=BeP.data[Hw(a,b,c,d)];return e!==null?e.d1():0;}
function Gf(){BE.call(this);}
function BlJ(){var a=new Gf();A$f(a);return a;}
function A$f(a){O(a);}
function UO(){Gf.call(this);}
function BlK(){var a=new UO();A6M(a);return a;}
function A6M(a){O(a);}
function U9(){D.call(this);}
var BlL=null;function BlM(){var a=new U9();AO4(a);return a;}
function AO4(a){return;}
function AIH(){var b,c;b=$rt_createIntArray(12);c=b.data;c[0]=1;c[1]=4;c[2]=2;c[3]=1024;c[4]=8;c[5]=16;c[6]=128;c[7]=64;c[8]=32;c[9]=256;c[10]=2048;c[11]=512;BlL=b;}
function PG(){Gi.call(this);this.v8=null;}
function A0o(a,b){return AEb(a.v8,b);}
function Nc(a){var b;b=new U6;Vu(b,a.v8);return b;}
function Tm(){D.call(this);this.Jf=null;}
function AOt(a){Bd();BdF.requestPointerLock();MS(0);}
function A_x(a){AOt(a);}
function AQF(){D.call(this);}
function BlN(){var a=new AQF();A4a(a);return a;}
function A4a(a){return;}
function WS(){var a=this;D9.call(a);a.cr=null;a.gS=0;a.pP=0;a.kP=0;}
function BaC(){var a=new WS();AU_(a);return a;}
function AU_(a){a.cr=J(Cd,3);a.gS=0;a.pP=0;a.kP=0;}
function A9p(a,b){return a.cr.data[b];}
function A8i(a,b,c){var d;if(a.cr.data[b]===null)return null;if(a.cr.data[b].p<=c){d=a.cr.data[b];a.cr.data[b]=null;return d;}d=EE(a.cr.data[b],c);if(!a.cr.data[b].p)a.cr.data[b]=null;return d;}
function AVq(a,b,c){a.cr.data[b]=c;if(c!==null&&c.p>64)c.p=64;}
function AT4(a){return 64;}
function AOJ(a,b){return Bj(a.kP,b)/200|0;}
function ADH(a,b){if(!a.pP)a.pP=200;return Bj(a.gS,b)/a.pP|0;}
function WI(a){return a.gS<=0?0:1;}
function AGE(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.gS<=0?0:1;c=0;if(a.gS>0){a.gS=a.gS-1|0;c=1;}if(!a.gS&&Oe(a)){d=a.cr.data[1];if(d===null)e=0;else a:{f=DK(d).cU;if(f<256){L();if(BeP.data[f].b8===Bha){e=300;break a;}}BB();e=f==Bh5.cU?100:f!=BhA.cU?0:1600;}a.gS=e;a.pP=e;if(a.gS>0){c=1;if(a.cr.data[1]!==null){d=a.cr.data[1];d.p=d.p-1|0;if(!a.cr.data[1].p)a.cr.data[1]
=null;}}}if(WI(a)&&Oe(a)){a.kP=a.kP+1|0;if(a.kP==200){a.kP=0;ADv(a);c=1;}}else a.kP=0;if(b==(a.gS<=0?0:1)){if(!c)return;d=a.ce;e=a.dH;b=a.dF;c=a.dN;$p=1;continue _;}c=1;b=a.gS<=0?0:1;g=a.ce;f=a.dH;h=a.dF;i=a.dN;$p=2;continue _;case 1:AGt(d,e,b,c);if(C()){break _;}return;case 2:$z=AEI(g,f,h,i);if(C()){break _;}e=$z;$p=3;case 3:$z=ANv(g,f,h,i);if(C()){break _;}j=$z;if(!b){L();b=Bg4.b;$p=4;continue _;}L();b=Bg5.b;$p=5;continue _;case 4:APu(g,f,h,i,b);if(C()){break _;}$p=6;continue _;case 5:APu(g,f,h,i,b);if(C())
{break _;}$p=6;case 6:AKu(g,f,h,i,e);if(C()){break _;}$p=7;case 7:AFT(g,f,h,i,j);if(C()){break _;}if(!c)return;d=a.ce;e=a.dH;b=a.dF;c=a.dN;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function Oe(a){var b,c;if(a.cr.data[0]===null)return 0;b=UR(a,DK(a.cr.data[0]).cU);if(b<0)b=0;else if(a.cr.data[2]===null)b=1;else if(a.cr.data[2].bA!=b)b=0;else if(a.cr.data[2].p<64&&a.cr.data[2].p<EA(a.cr.data[2]))b=1;else{c=a.cr.data[2].p;BB();b=c>=Bhe.data[b].eW?0:1;}return b;}
function ADv(a){var b,c;if(Oe(a)){b=UR(a,DK(a.cr.data[0]).cU);if(a.cr.data[2]===null)a.cr.data[2]=Kx(b,1);else if(a.cr.data[2].bA==b){c=a.cr.data[2];c.p=c.p+1|0;}c=a.cr.data[0];c.p=c.p-1|0;if(a.cr.data[0].p<=0)a.cr.data[0]=null;}}
function UR(a,b){L();if(b==Bff.b){BB();b=BhQ.cU;}else if(b==Bfg.b){BB();b=BhR.cU;}else if(b==BgZ.b){BB();b=BhB.cU;}else if(b==Bfa.b)b=Be5.b;else{BB();b=b==Bgg.cU?BiA.cU:b!=BeZ.b?(-1):BeV.b;}return b;}
function Z1(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.ce;c=a.dH;d=a.dF;e=a.dN;$p=1;case 1:AGt(b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function S$(){D9.call(this);this.hV=null;}
function Bbg(){var a=new S$();A17(a);return a;}
function A17(a){a.hV=J(Cd,36);}
function AVK(a){return 27;}
function Q8(a,b){return a.hV.data[b];}
function A1R(a,b,c){var d;if(a.hV.data[b]===null)return null;if(a.hV.data[b].p<=c){d=a.hV.data[b];a.hV.data[b]=null;return d;}d=EE(a.hV.data[b],c);if(!a.hV.data[b].p)a.hV.data[b]=null;return d;}
function AHz(a,b,c){a.hV.data[b]=c;if(c!==null&&c.p>64)c.p=64;}
function A8B(a){return B(263);}
function A7l(a){return 64;}
function CQ(){D.call(this);this.go=null;}
function BlO(){var a=new CQ();Cw(a);return a;}
function Cw(a){a.go=null;}
function VD(a){return a.go!==null?a.go:B(3);}
function AXC(a,b){a.go=b;return a;}
function MR(b){var c,d;c=NU(b);if(!c){b=new NV;Cw(b);return b;}d=AE5(c);d.go=GT(b);d.gC(b);return d;}
function RT(b,c){KI(c,b.e_());if(b.e_()){Xm(c,VD(b));b.gJ(c);}}
function AE5(b){var c;switch(b){case 0:c=new NV;Cw(c);return c;case 1:c=new Mt;Cw(c);return c;case 2:c=new MT;Cw(c);return c;case 3:c=new Lh;Cw(c);return c;case 4:c=new N7;Cw(c);return c;case 5:c=new Pc;Cw(c);return c;case 6:c=new Mm;Cw(c);return c;case 7:c=new MD;Cw(c);return c;case 8:c=new OA;Cw(c);return c;case 9:return L8();case 10:return G7();default:}return null;}
function APN(){CQ.call(this);this.cI=null;}
function G7(){var a=new APN();A8K(a);return a;}
function A8K(a){Cw(a);a.cI=Dd();}
function A7c(a,b){var c;c=Nc(Ip(a.cI));while(F7(c)){RT(Md(c),b);}KI(b,0);}
function A9j(a,b){var c;U4(a.cI);while(true){c=MR(b);if(!c.e_())break;BR(a.cI,VD(c),c);}}
function A7a(a){return 10;}
function HC(a,b,c){var d;d=a.cI;c.go=b;BR(d,b,c);}
function JG(a,b,c){var d,e;d=a.cI;e=new Mt;Cw(e);e.tn=c;e.go=b;BR(d,b,e);}
function Fp(a,b,c){var d,e;d=a.cI;e=new MT;Cw(e);e.th=c;e.go=b;BR(d,b,e);}
function Gu(a,b,c){var d,e;d=a.cI;e=new Lh;Cw(e);e.r0=c;e.go=b;BR(d,b,e);}
function H9(a,b,c){var d,e;d=a.cI;e=new N7;Cw(e);e.sV=c;e.go=b;BR(d,b,e);}
function AR5(a,b,c){var d,e;d=a.cI;e=A6R(c);e.go=b;BR(d,b,e);}
function IL(a,b,c){var d,e;d=a.cI;e=new MD;Cw(e);e.mg=c;e.go=b;BR(d,b,e);}
function ANR(a,b,c){var d;d=a.cI;c.go=b;BR(d,b,c);}
function ST(a,b,c){JG(a,b,(!c?0:1)<<24>>24);}
function YW(a,b){return DX(a.cI,b);}
function LA(a,b){return !DX(a.cI,b)?0:CP(a.cI,b).tn;}
function FH(a,b){return !DX(a.cI,b)?0:CP(a.cI,b).th;}
function FR(a,b){return !DX(a.cI,b)?0:CP(a.cI,b).r0;}
function Mb(a,b){return !DX(a.cI,b)?Long_ZERO:CP(a.cI,b).sV;}
function AMD(a,b){return !DX(a.cI,b)?0.0:CP(a.cI,b).ng;}
function IE(a,b){return !DX(a.cI,b)?$rt_createByteArray(0):CP(a.cI,b).mg;}
function Mv(a,b){return !DX(a.cI,b)?G7():CP(a.cI,b);}
function Kf(a,b){return !DX(a.cI,b)?L8():CP(a.cI,b);}
function Ul(a,b){return !LA(a,b)?0:1;}
function PY(){B6.call(this);}
function BlP(){var a=new PY();A$7(a);return a;}
function A$7(a){O(a);}
function SC(){B6.call(this);}
function BlQ(){var a=new SC();AYL(a);return a;}
function AYL(a){O(a);}
function RS(){GX.call(this);this.Bo=0;}
function AVO(a){var b;b=new U;X(b);return V(Be(I(b,B(590)),a.Bo));}
function PU(){GX.call(this);this.EH=0;}
function AVh(a){var b;b=new U;X(b);return V(Be(I(b,B(591)),a.EH));}
function II(){var a=this;D.call(a);a.l0=0;a.rg=0;a.ly=null;a.hf=null;a.sj=null;a.ir=null;}
function BlR(a){var b=new II();Vu(b,a);return b;}
function Vu(a,b){a.ir=b;a.rg=b.g5;a.ly=null;}
function F7(a){if(a.ly!==null)return 1;while(a.l0<a.ir.cM.data.length){if(a.ir.cM.data[a.l0]!==null)return 1;a.l0=a.l0+1|0;}return 0;}
function Uq(a){var b;if(a.rg==a.ir.g5)return;b=new KQ;O(b);M(b);}
function V8(a){var b,c,d;Uq(a);if(!F7(a)){b=new JX;O(b);M(b);}if(a.ly===null){c=a.ir.cM.data;d=a.l0;a.l0=d+1|0;a.hf=c[d];a.ly=a.hf.eB;a.sj=null;}else{if(a.hf!==null)a.sj=a.hf;a.hf=a.ly;a.ly=a.ly.eB;}}
function ADP(a){var b,c;Uq(a);if(a.hf===null){b=new D1;O(b);M(b);}if(a.sj!==null)a.sj.eB=a.hf.eB;else{c=a.hf.pQ&(a.ir.cM.data.length-1|0);a.ir.cM.data[c]=a.ir.cM.data[c].eB;}a.hf=null;a.rg=a.rg+1|0;b=a.ir;b.g5=b.g5+1|0;b=a.ir;b.f7=b.f7-1|0;}
function U6(){II.call(this);}
function Md(a){V8(a);return a.hf.e3;}
function Wp(){var a=this;D.call(a);a.Af=null;a.Er=null;a.v5=0;a.qD=0;}
function NJ(a){return Fk(a.Af);}
function AJm(a,b){return Ct(a.Er)<b?0:1;}
function A$C(a,b){a.v5=b;}
function A9h(a,b){a.qD=b;}
function AEy(){var a=this;CS.call(a);a.wv=null;a.yz=null;a.ny=null;}
function A3z(a,b){var c=new AEy();A1y(c,a,b);return c;}
function A1y(a,b,c){D0(a);a.yz=B(592);a.wv=b;a.ny=c;}
function ARZ(a){var b;b=0;while(b<a.ny.zH){S(a.bG,Sb(b,((a.bm/2|0)-155|0)+((b%2|0)*160|0)|0,(a.bC/6|0)+(24*(b>>1)|0)|0,QS(a.ny,b)));b=b+1|0;}S(a.bG,Dj(100,(a.bm/2|0)-100|0,((a.bC/6|0)+120|0)+12|0,B(593)));S(a.bG,Dj(200,(a.bm/2|0)-100|0,(a.bC/6|0)+168|0,B(594)));}
function ADV(a,b){var c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.hh){if(b.cC<100){D_(a.ny,b.cC,1);b.kh=QS(a.ny,b.cC);}if(b.cC==100){c=a.K;d=new VJ;e=a.ny;D0(d);d.zs=B(595);d.kz=(-1);d.zU=a;d.jz=e;$p=1;continue _;}if(b.cC==200){b=a.K;c=a.wv;$p=2;continue _;}}return;case 1:ADT(c,d);if(C()){break _;}if(b.cC!=200)return;b=a.K;c=a.wv;$p=2;case 2:ADT(b,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AGb(a,b,c,d){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABd(a);if(C()){break _;}DD(a,a.bY,a.yz,a.bm/2|0,20,16777215);$p=2;case 2:AFC(a,b,c,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function Ot(){var a=this;CS.call(a);a.ow=null;a.yn=null;a.xw=0;}
function A$X(a){var b=new Ot();AEe(b,a);return b;}
function AEe(a,b){D0(a);a.yn=B(596);a.xw=0;a.ow=b;}
function APs(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;if(b>=5){a.s3();return;}c=new U;X(c);c=I(c,B(597));d=b+1|0;c=V(Be(c,d));$p=1;case 1:$z=ASa(c);if(C()){break _;}c=$z;if(c!==null){c=new U;X(c);e=V(Be(I(c,B(598)),d));c=new U;X(c);f=V(I(Be(I(c,B(597)),d),B(353)));Bd();c=BeF;$p=2;continue _;}S(a.bG,Dj(b,(a.bm/2|0)-100|0,(a.bC/6|0)+(24*b|0)|0,B(599)));b=d;if(b>=5){a.s3();return;}c=new U;X(c);c
=I(c,B(597));d=b+1|0;c=V(Be(c,d));continue _;case 2:$z=A_K(c,f);if(C()){break _;}c=$z;g=c===null?(-1):c.byteLength;c=new U;X(c);f=V(I(AKo(I(I(c,e),B(600)),g/100.0),B(601)));S(a.bG,Dj(b,(a.bm/2|0)-100|0,(a.bC/6|0)+(24*b|0)|0,f));b=d;if(b>=5){a.s3();return;}c=new U;X(c);c=I(c,B(597));d=b+1|0;c=V(Be(c,d));$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ANq(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=new U;X(c);c=V(Be(I(c,B(597)),b));$p=1;case 1:$z=ASa(c);if(C()){break _;}c=$z;if(c===null)c=null;else{c=new U;X(c);c=V(Be(I(c,B(597)),b));}return c;default:E$();}}C3().s(a,b,c,$p);}
function AXz(a){S(a.bG,Dj(5,(a.bm/2|0)-100|0,((a.bC/6|0)+120|0)+12|0,B(602)));S(a.bG,Dj(6,(a.bm/2|0)-100|0,(a.bC/6|0)+168|0,B(603)));}
function ASv(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.hh){if(b.cC<5){c=b.cC+1|0;$p=1;continue _;}if(b.cC==5){b=a.K;d=new UT;AEe(d,a);d.yn=B(604);$p=2;continue _;}if(b.cC==6){b=a.K;d=a.ow;$p=3;continue _;}}return;case 1:a.IM(c);if(C()){break _;}return;case 2:ADT(b,d);if(C()){break _;}return;case 3:ADT(b,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function AKM(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.K;d=null;$p=1;case 1:ADT(c,d);if(C()){break _;}if(a.xw)return;a.xw=1;d=a.K;c=new U;X(c);c=V(Be(I(c,B(597)),b));$p=2;case 2:AHW(d,c);if(C()){break _;}d=a.K;c=null;$p=3;case 3:ADT(d,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function AEB(a,b,c,d){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABd(a);if(C()){break _;}DD(a,a.bY,a.yn,a.bm/2|0,20,16777215);$p=2;case 2:AFC(a,b,c,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function LX(){Gf.call(this);}
function BlS(){var a=new LX();A6$(a);return a;}
function A6$(a){O(a);}
function S5(){Gf.call(this);}
function BlT(){var a=new S5();A$G(a);return a;}
function A$G(a){O(a);}
function ALt(){D.call(this);}
function BlU(){var a=new ALt();A7o(a);return a;}
function A7o(a){return;}
function Z_(){D.call(this);}
function BlV(){var a=new Z_();A8v(a);return a;}
function A8v(a){return;}
function AMg(){var a=this;D.call(a);a.n=null;a.fN=0;a.t6=null;a.y5=0;a.iq=0;a.ke=0;a.dm=0;a.uU=null;}
function Bbv(){var a=new AMg();AS5(a);return a;}
function ALF(a,b){var c,d,e,f,g,h,i,j;c=new Vs;c.qO=(-1);c.sc=(-1);c.Fv=a;c.Ey=a.uU;c.pF=b;c.qO=0;c.sc=Bh(c.pF);d=new Wq;e=c.qO;f=c.sc;g=a.iq;h=AQU(a);i=AD4(a);d.kW=(-1);j=g+1|0;d.zr=j;d.gD=$rt_createIntArray(j*2|0);d.oP=$rt_createIntArray(i);MW(d.oP,(-1));if(h>0)d.xm=$rt_createIntArray(h);MW(d.gD,(-1));Xe(d,b,e,f);c.dz=d;return c;}
function AIP(a,b,c){var d,e,f,g,h,i;d=Ci();e=ALF(a,b);f=0;g=0;if(!Bh(b)){h=J(B4,1);h.data[0]=B(3);return h;}while(AA8(e)){i=f+1|0;if(i>=c&&c>0)break;S(d,Eu(b,g,AG9(e)));g=AKV(e);f=i;}a:{S(d,Eu(b,g,Bh(b)));f=f+1|0;if(!c)while(true){f=f+(-1)|0;if(f<0)break;if(Bh(Z(d,f)))break a;Em(d,f);}}if(f<0)f=0;return Uy(d,J(B4,f));}
function AIO(a,b){return AIP(a,b,0);}
function M7(a){return a.n.eM;}
function SQ(a,b,c,d){var e,f,g,h,i;e=Ci();f=a.fN;g=0;if(c!=a.fN)a.fN=c;a:{switch(b){case -1073741784:h=new QA;c=a.dm+1|0;a.dm=c;G$(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new PP;c=a.dm+1|0;a.dm=c;G$(h,c);break a;case -33554392:h=new Q0;c=a.dm+1|0;a.dm=c;G$(h,c);break a;default:a.iq=a.iq+1|0;if(d!==null)h=Bcz(a.iq);else{h=Bb5();g=1;}if(a.iq<=(-1))break a;if(a.iq>=10)break a;a.t6.data[a.iq]=h;break a;}h=Bbu();}while(true){if(F5(a.n)&&a.n.H==(-536870788)){d=A$H(CZ(a,
2),CZ(a,64));while(!En(a.n)&&F5(a.n)&&!(a.n.H&&a.n.H!=(-536870788)&&a.n.H!=(-536870871))){Dp(d,BF(a.n));if(a.n.cE!=(-536870788))continue;BF(a.n);}i=LN(a,d);i.b$(h);}else if(a.n.cE==(-536870788)){i=IF(h);BF(a.n);}else{i=Ub(a,h);if(a.n.cE==(-536870788))BF(a.n);}if(i!==null)S(e,i);if(En(a.n))break;if(a.n.cE==(-536870871))break;}if(a.n.qS==(-536870788))S(e,IF(h));if(a.fN!=f&&!g){a.fN=f;AJu(a.n,a.fN);}switch(b){case -1073741784:break;case -536870872:d=new S7;GQ(d,e,h);return d;case -268435416:d=new WG;GQ(d,e,h);return d;case -134217688:d
=new U7;GQ(d,e,h);return d;case -67108824:d=new Rc;GQ(d,e,h);return d;case -33554392:d=new EW;GQ(d,e,h);return d;default:switch(e.o){case 0:break;case 1:return Bcr(Z(e,0),h);default:return BaF(e,h);}return IF(h);}d=new KZ;GQ(d,e,h);return d;}
function APY(a){var b,c,d,e,f,g;b=$rt_createIntArray(4);c=(-1);d=(-1);if(!En(a.n)&&F5(a.n)){e=b.data;c=BF(a.n);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=$rt_createCharArray(3);b=e.data;b[0]=c&65535;f=a.n.cE;c=f-4449|0;if(c>=0&&c<21){b[1]=f&65535;BF(a.n);f=a.n.cE;d=f-4519|0;if(d>=0&&d<28){b[2]=f&65535;BF(a.n);return A$w(e,3);}return A$w(e,2);}if(!CZ(a,2))return AAd(b[0]);if(CZ(a,64))return A9a(b[0]);return A4y(b[0]);}e=b.data;c=1;while(c<4&&!En(a.n)&&F5(a.n)){f=c+1|0;e[c]=BF(a.n);c=f;}if(c==1){f=e[0];if(!(BlW.AZ(f)
==BlX?0:1))return SJ(a,e[0]);}if(!CZ(a,2))return Bc0(b,c);if(CZ(a,64)){g=new SD;O_(g,b,c);return g;}g=new VZ;O_(g,b,c);return g;}
function Ub(a,b){var c,d,e,f;if(F5(a.n)&&!Lg(a.n)&&Nk(a.n.H)){if(CZ(a,128)){c=APY(a);if(!En(a.n)&&!(a.n.cE==(-536870871)&&!(b instanceof HQ))&&a.n.cE!=(-536870788)&&!F5(a.n))c=Mx(a,b,c);}else if(!TI(a.n)&&!Wr(a.n)){d=new Lf;X(d);while(!En(a.n)&&F5(a.n)&&!TI(a.n)&&!Wr(a.n)&&!(!(!Lg(a.n)&&!a.n.H)&&!(!Lg(a.n)&&Nk(a.n.H))&&a.n.H!=(-536870871)&&(a.n.H&(-2147418113))!=(-2147483608)&&a.n.H!=(-536870788)&&a.n.H!=(-536870876))){e=BF(a.n);if(!Ms(e))Dx(d,e&65535);else Hh(d,Iu(e));}if(!CZ(a,2))c=Bav(d);else if(CZ(a,64))c
=BcX(d);else{c=new OS;EM(c);c.pG=V(d);c.dj=Os(d);}}else c=Mx(a,b,W0(a,b));}else if(a.n.cE!=(-536870871))c=Mx(a,b,W0(a,b));else{if(b instanceof HQ)M(CN(B(3),a.n.eM,a.n.ie));c=IF(b);}if(!En(a.n)&&!(a.n.cE==(-536870871)&&!(b instanceof HQ))&&a.n.cE!=(-536870788)){f=Ub(a,b);if(c instanceof D6&&!(c instanceof Gz)&&!(c instanceof DU)&&!(c instanceof FS)){b=c;if(!f.d0(b.bP)){c=new Sl;F0(c,b.bP,b.r,b.pY);c.bP.b$(c);}}if((f.oD()&65535)!=43)c.b$(f);else c.b$(f.bP);}else{if(c===null)return null;c.b$(b);}if((c.oD()&65535)
!=43)return c;return c.bP;}
function Mx(a,b,c){var d,e,f,g;d=a.n.cE;if(c!==null&&!(c instanceof CI)){switch(d){case -2147483606:BF(a.n);e=new SY;Ee(e,c,b,d);c.b$(BlY);return e;case -2147483605:BF(a.n);e=new Ut;Ee(e,c,b,(-2147483606));c.b$(BlY);return e;case -2147483585:BF(a.n);e=new PI;Ee(e,c,b,(-536870849));c.b$(BlY);return e;case -2147483525:e=new OP;f=G3(a.n);d=a.ke+1|0;a.ke=d;ML(e,f,c,b,(-536870849),d);c.b$(BlY);return e;case -1073741782:case -1073741781:BF(a.n);f=new Qq;Ee(f,c,b,d);c.b$(f);return f;case -1073741761:BF(a.n);f=new UM;Ee(f,
c,b,(-536870849));c.b$(b);return f;case -1073741701:f=new RK;e=G3(a.n);g=a.ke+1|0;a.ke=g;ML(f,e,c,b,(-536870849),g);c.b$(f);return f;case -536870870:case -536870869:BF(a.n);if(c.oD()!=(-2147483602)){f=new DU;Ee(f,c,b,d);}else if(CZ(a,32)){f=new Qr;Ee(f,c,b,d);}else{f=new TO;e=Ug(a.fN);Ee(f,c,b,d);f.un=e;}c.b$(f);return f;case -536870849:BF(a.n);f=new Ht;Ee(f,c,b,(-536870849));c.b$(b);return f;case -536870789:f=new G5;e=G3(a.n);g=a.ke+1|0;a.ke=g;ML(f,e,c,b,(-536870849),g);c.b$(f);return f;default:}return c;}e
=null;if(c!==null)e=c;switch(d){case -2147483606:case -2147483605:BF(a.n);f=new Xr;F0(f,e,b,d);e.r=f;return f;case -2147483585:BF(a.n);c=new Sh;F0(c,e,b,(-2147483585));return c;case -2147483525:c=new T_;QJ(c,G3(a.n),e,b,(-2147483525));return c;case -1073741782:case -1073741781:BF(a.n);f=new UK;F0(f,e,b,d);e.r=f;return f;case -1073741761:BF(a.n);c=new V1;F0(c,e,b,(-1073741761));return c;case -1073741701:c=new Qb;QJ(c,G3(a.n),e,b,(-1073741701));return c;case -536870870:case -536870869:BF(a.n);f=BaW(e,b,d);e.r
=f;return f;case -536870849:BF(a.n);c=new FS;F0(c,e,b,(-536870849));return c;case -536870789:return BbX(G3(a.n),e,b,(-536870789));default:}return c;}
function W0(a,b){var c,d,e,f,g,h,i;c=null;d=b instanceof HQ;while(true){a:{e=Kq(a.n);if((e&(-2147418113))==(-2147483608)){BF(a.n);f=(e&16711680)>>16;e=e&(-16711681);if(e==(-16777176))a.fN=f;else{if(e!=(-1073741784))f=a.fN;c=SQ(a,e,f,b);if(Kq(a.n)!=(-536870871))M(CN(B(3),EB(a.n),HA(a.n)));BF(a.n);}}else{b:{c:{switch(e){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:g=(e&2147483647)-48|0;if(a.iq<g)M(CN(B(3),
EB(a.n),HA(a.n)));BF(a.n);a.dm=a.dm+1|0;c=!CZ(a,2)?BbC(g,a.dm):CZ(a,64)?Bas(g,a.dm):BcW(g,a.dm);a.t6.data[g].wK=1;a.y5=1;break a;case -2147483583:break;case -2147483582:BF(a.n);c=A$j(0);break a;case -2147483577:BF(a.n);c=Bal();break a;case -2147483558:BF(a.n);c=new SA;g=a.dm+1|0;a.dm=g;AQx(c,g);break a;case -2147483550:BF(a.n);c=A$j(1);break a;case -2147483526:BF(a.n);c=Bbd();break a;case -536870876:break c;case -536870866:BF(a.n);if(CZ(a,32)){c=Bbn();break a;}c=BaZ(Ug(a.fN));break a;case -536870821:BF(a.n);h
=0;if(Kq(a.n)==(-536870818)){h=1;BF(a.n);}c=ADE(a,h,b);if(Kq(a.n)!=(-536870819))M(CN(B(3),EB(a.n),HA(a.n)));T2(a.n,1);BF(a.n);break a;case -536870818:BF(a.n);a.dm=a.dm+1|0;if(!CZ(a,8)){c=A1d();break a;}c=BcJ(Ug(a.fN));break a;case 0:i=PM(a.n);if(i!==null)c=LN(a,i);else{if(En(a.n)){c=IF(b);break a;}c=AAd(e&65535);}BF(a.n);break a;default:break b;}BF(a.n);c=A1d();break a;}BF(a.n);a.dm=a.dm+1|0;if(CZ(a,8)){if(CZ(a,1)){c=Bat(a.dm);break a;}c=A_1(a.dm);break a;}if(CZ(a,1)){c=BaK(a.dm);break a;}c=Ba7(a.dm);break a;}if
(e>=0&&!HZ(a.n)){c=SJ(a,e);BF(a.n);}else if(e==(-536870788))c=IF(b);else{if(e!=(-536870871))M(CN(!HZ(a.n)?Sx(e&65535):PM(a.n).gj(),EB(a.n),HA(a.n)));if(d)M(CN(B(3),EB(a.n),HA(a.n)));c=IF(b);}}}if(e!=(-16777176))break;}return c;}
function ADE(a,b,c){var d;d=LN(a,Ig(a,b));d.b$(c);return d;}
function Ig(a,b){var c,d,e,f,g,h,i,j,$$je;c=A$H(CZ(a,2),CZ(a,64));Fv(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(En(a.n))break a;f=a.n.cE==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(a.n.cE){case -536870874:if(d>=0)Dp(c,d);d=BF(a.n);if(a.n.cE!=(-536870874)){d=38;break d;}if(a.n.H==(-536870821)){BF(a.n);e=1;d=(-1);break d;}BF(a.n);if(g){c=Ig(a,0);break d;}if(a.n.cE==(-536870819))break d;Sq(c,Ig(a,0));break d;case -536870867:if(!g&&a.n.H!=(-536870819)&&a.n.H!=(-536870821)&&d>=0){BF(a.n);h=a.n.cE;if(HZ(a.n))break c;if
(h<0&&a.n.H!=(-536870819)&&a.n.H!=(-536870821)&&d>=0)break c;e:{try{if(Nk(h))break e;h=h&65535;break e;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){break b;}else{throw $$e;}}}try{CG(c,d,h);}catch($$e){$$je=Bi($$e);if($$je instanceof BE){break b;}else{throw $$e;}}BF(a.n);d=(-1);break d;}if(d>=0)Dp(c,d);d=45;BF(a.n);break d;case -536870821:if(d>=0){Dp(c,d);d=(-1);}BF(a.n);i=0;if(a.n.cE==(-536870818)){BF(a.n);i=1;}if(!e)AIc(c,Ig(a,i));else Sq(c,Ig(a,i));e=0;BF(a.n);break d;case -536870819:if(d>=0)Dp(c,d);d=
93;BF(a.n);break d;case -536870818:if(d>=0)Dp(c,d);d=94;BF(a.n);break d;case 0:if(d>=0)Dp(c,d);j=a.n.kX;if(j===null)d=0;else{ASs(c,j);d=(-1);}BF(a.n);break d;default:}if(d>=0)Dp(c,d);d=BF(a.n);}g=0;}M(CN(B(3),M7(a),a.n.ie));}M(CN(B(3),M7(a),a.n.ie));}if(!f){if(d>=0)Dp(c,d);return c;}M(CN(B(3),M7(a),a.n.ie-1|0));}
function SJ(a,b){var c,d,e;c=Ms(b);if(CZ(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return A4y(b&65535);}if(CZ(a,64)&&b>128){if(c){d=new S4;EM(d);d.dj=2;d.z2=GN(GM(b));return d;}if(Py(b))return AYS(b&65535);if(!QP(b))return A9a(b&65535);return A6D(b&65535);}}if(!c){if(Py(b))return AYS(b&65535);if(!QP(b))return AAd(b&65535);return A6D(b&65535);}d=new EY;EM(d);d.dj=2;d.kv=b;e=Iu(b).data;d.tv=e[0];d.r$=e[1];return d;}
function LN(a,b){var c,d,e;if(!ANW(b)){if(!b.b9){if(b.nN())return AWF(b);return A0$(b);}if(!b.nN())return A6S(b);c=new MM;V$(c,b);return c;}c=YS(b);d=new OD;Cz(d);d.zI=c;d.Hj=c.cg;if(!b.b9){if(b.nN())return AEm(AWF(J$(b)),d);return AEm(A0$(J$(b)),d);}if(!b.nN())return AEm(A6S(J$(b)),d);c=new P2;e=new MM;V$(e,J$(b));AHi(c,e,d);return c;}
function A3v(a){return a.iq;}
function AQU(a){return a.ke+1|0;}
function AD4(a){return a.dm+1|0;}
function Kb(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function CZ(a,b){return (a.fN&b)!=b?0:1;}
function AS5(a){a.t6=J(DT,10);a.iq=(-1);a.ke=(-1);a.dm=(-1);}
function ABV(){Ly.call(this);}
function Sb(a,b,c,d){var e=new ABV();A6G(e,a,b,c,d);return e;}
function A6G(a,b,c,d,e){Sz(a,b,c,d,150,20,e);}
function VJ(){var a=this;CS.call(a);a.zU=null;a.zs=null;a.jz=null;a.kz=0;}
function AJr(a){var b;b=0;while(b<a.jz.m_.data.length){S(a.bG,Sb(b,((a.bm/2|0)-155|0)+((b%2|0)*160|0)|0,(a.bC/6|0)+(24*(b>>1)|0)|0,K3(a.jz,b)));b=b+1|0;}S(a.bG,Dj(200,(a.bm/2|0)-100|0,(a.bC/6|0)+168|0,B(594)));}
function AIf(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=0;while(c<a.jz.m_.data.length){Z(a.bG,c).kh=K3(a.jz,c);c=c+1|0;}if(b.cC!=200){a.kz=b.cC;d=new U;X(d);b.kh=V(I(I(I(d,B(576)),K3(a.jz,b.cC)),B(577)));return;}b=a.K;d=a.zU;$p=1;case 1:ADT(b,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function ALM(a,b,c){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.kz>=0){X0(a.jz,a.kz,c);Z(a.bG,a.kz).kh=K3(a.jz,a.kz);a.kz=(-1);return;}$p=1;case 1:YK(a,b,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,$p);}
function AGw(a,b,c,d){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABd(a);if(C()){break _;}DD(a,a.bY,a.zs,a.bm/2|0,20,16777215);$p=2;case 2:AFC(a,b,c,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function UT(){Ot.call(this);}
function A1P(a){S(a.bG,Dj(6,(a.bm/2|0)-100|0,(a.bC/6|0)+168|0,B(603)));}
function AL8(a,b){var c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ANq(a,b);if(C()){break _;}c=$z;if(c===null)return;d=a.K;e=new UZ;f=new U;X(f);f=V(I(I(I(f,B(605)),c),B(606)));D0(e);e.BZ=a;e.BM=B(607);e.BO=f;e.yH=b;$p=2;case 2:ADT(d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AQ4(a,b,c){var d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b){$p=2;continue _;}d=a.K;e=a.ow;$p=1;case 1:ADT(d,e);if(C()){break _;}return;case 2:$z=ANq(a,c);if(C()){break _;}d=$z;e=new U;X(e);f=V(I(I(e,B(608)),d));Bd();$p=3;case 3:$z=AP1(f);if(C()){break _;}b=$z;if(!b){d=a.K;e=a.ow;$p=1;continue _;}b=1;c=1;g=QQ();d=BeF;$p=4;case 4:A5r(d,f,b,c,g);if(C()){break _;}e=JA(g);while(true){if(!GJ(e)){e=JA(g);while
(GJ(e)){d=GB(e);if(d.mZ){d=d.l$;$p=7;continue _;}}$p=6;continue _;}d=GB(e);if(!d.mZ)break;}d=d.l$;$p=5;case 5:AL0(d);if(C()){break _;}while(true){if(!GJ(e)){e=JA(g);while(GJ(e)){d=GB(e);if(d.mZ){d=d.l$;$p=7;continue _;}}$p=6;continue _;}d=GB(e);if(d.mZ)continue;else break;}d=d.l$;continue _;case 6:AL0(f);if(C()){break _;}d=a.K;e=a.ow;$p=1;continue _;case 7:AL0(d);if(C()){break _;}while(GJ(e)){d=GB(e);if(!d.mZ)continue;else{d=d.l$;continue _;}}$p=6;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function NM(){var a=this;D.call(a);a.ky=0.0;a.kn=0.0;a.HI=0;a.ug=0;}
function BlZ(){var a=new NM();AC$(a);return a;}
function AC$(a){a.ky=0.0;a.kn=0.0;a.HI=0;a.ug=0;}
function Yj(){var a=this;NM.call(a);a.jZ=null;a.nj=null;}
function VY(a){var b=new Yj();AZU(b,a);return b;}
function AZU(a,b){AC$(a);a.jZ=$rt_createBooleanArray(10);a.nj=b;}
function APq(a,b,c){var d;d=(-1);if(b==a.nj.tX.bI)d=0;if(b==a.nj.xd.bI)d=1;if(b==a.nj.tP.bI)d=2;if(b==a.nj.up.bI)d=3;if(b==a.nj.yw.bI)d=4;if(d>=0)a.jZ.data[d]=c;}
function AOX(a){var b;b=0;while(b<10){a.jZ.data[b]=0;b=b+1|0;}}
function AOz(a,b){a.ky=0.0;a.kn=0.0;if(a.jZ.data[0])a.kn=a.kn+1.0;if(a.jZ.data[1])a.kn=a.kn-1.0;if(a.jZ.data[2])a.ky=a.ky+1.0;if(a.jZ.data[3])a.ky=a.ky-1.0;a.ug=a.jZ.data[4];}
function QR(){D.call(this);this.m5=null;}
var Bl0=null;function AYX(){AYX=Bt(QR);A38();}
function A_3(){var a=new QR();ALy(a);return a;}
function Wl(){AYX();return Bl0;}
function ALy(a){var b,c,d,e;AYX();WD(a);a.m5=Ci();AHk(Bbx(),a);Xt(Baa(),a);ADW(Bbt(),a);AJQ(Ba_(),a);X_(Baq(),a);ASC(Ba1(),a);b=new Cd;L();U1(b,Bfd,1);c=J(D,5);d=c.data;d[0]=B(609);d[1]=B(609);d[2]=B(609);d[3]=BI(35);BB();d[4]=Bgf;Ck(a,b,c);e=GZ(Bfk,1);c=J(D,7);d=c.data;d[0]=B(610);d[1]=B(611);d[2]=B(610);d[3]=BI(88);d[4]=Bge;d[5]=BI(35);d[6]=Bfa;Ck(a,e,c);e=GZ(BeU,3);c=J(D,3);d=c.data;d[0]=B(609);d[1]=BI(35);d[2]=BeZ;Ck(a,e,c);e=GZ(Bgb,1);c=J(D,5);d=c.data;d[0]=B(612);d[1]=B(609);d[2]=B(612);d[3]=BI(35);d[4]
=Bh5;Ck(a,e,c);e=EK(BiD,1);c=J(D,5);d=c.data;d[0]=B(613);d[1]=B(613);d[2]=B(613);d[3]=BI(35);d[4]=Be1;Ck(a,e,c);e=EK(Bhd,1);c=J(D,7);d=c.data;d[0]=B(609);d[1]=B(609);d[2]=B(614);d[3]=BI(35);d[4]=Be1;d[5]=BI(88);d[6]=Bh5;Ck(a,e,c);e=GZ(Be1,4);c=J(D,3);d=c.data;d[0]=B(615);d[1]=BI(35);d[2]=Be2;Ck(a,e,c);e=EK(Bh5,4);c=J(D,4);d=c.data;d[0]=B(615);d[1]=B(615);d[2]=BI(35);d[3]=Be1;Ck(a,e,c);e=GZ(Be4,4);c=J(D,6);d=c.data;d[0]=B(72);d[1]=B(615);d[2]=BI(88);d[3]=BhA;d[4]=BI(35);d[5]=Bh5;Ck(a,e,c);e=EK(Bh6,4);c=J(D,4);d
=c.data;d[0]=B(612);d[1]=B(616);d[2]=BI(35);d[3]=Be1;Ck(a,e,c);e=GZ(Bg8,16);c=J(D,7);d=c.data;d[0]=B(617);d[1]=B(610);d[2]=B(617);d[3]=BI(88);d[4]=BhQ;d[5]=BI(35);d[6]=Bh5;Ck(a,e,c);e=EK(BiH,1);c=J(D,4);d=c.data;d[0]=B(612);d[1]=B(609);d[2]=BI(35);d[3]=BhQ;Ck(a,e,c);e=EK(BiE,1);c=J(D,4);d=c.data;d[0]=B(612);d[1]=B(616);d[2]=BI(35);d[3]=BhQ;Ck(a,e,c);e=EK(BhN,1);c=J(D,6);d=c.data;d[0]=B(618);d[1]=B(619);d[2]=BI(65);d[3]=BhQ;d[4]=BI(66);d[5]=Bhz;Ck(a,e,c);e=EK(Bif,1);c=J(D,3);d=c.data;d[0]=B(609);d[1]=BI(35);d[2]
=BhD;Ck(a,e,c);e=GZ(BgW,4);c=J(D,5);d=c.data;d[0]=B(620);d[1]=B(621);d[2]=B(609);d[3]=BI(35);d[4]=Be1;Ck(a,e,c);e=GZ(Bg9,4);c=J(D,5);d=c.data;d[0]=B(620);d[1]=B(621);d[2]=B(609);d[3]=BI(35);d[4]=BeZ;Ck(a,e,c);e=EK(BiB,1);c=J(D,7);d=c.data;d[0]=B(609);d[1]=B(611);d[2]=B(609);d[3]=BI(35);d[4]=Bh5;d[5]=BI(88);d[6]=Bfd;Ck(a,e,c);e=EK(BiC,1);c=J(D,7);d=c.data;d[0]=B(609);d[1]=B(611);d[2]=B(609);d[3]=BI(35);d[4]=Bfi;d[5]=BI(88);d[6]=BhO;Ck(a,e,c);Rv(a.m5,BaE(a));Cg(DR(),BL(I(Be(BX(),De(a.m5)),B(622))));}
function Ck(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=c.data;e=B(3);f=0;g=0;h=0;if(!Sf(d[f],$rt_arraycls(B4))){while(d[f] instanceof B4){i=f+1|0;j=d[f];h=h+1|0;g=Bh(j);k=new U;X(k);e=V(I(I(k,e),j));f=i;}i=f;}else{i=1;l=d[f];m=0;while(true){c=l.data;if(m>=c.length)break;k=c[m];h=h+1|0;g=Bh(k);j=new U;X(j);e=V(I(I(j,e),k));m=m+1|0;}}n=Dd();while(i<d.length){o=d[i];p=0;m=i+1|0;if(d[m] instanceof Bb)p=d[m].cU;else if(d[m] instanceof P)p=d[m].b;BR(n,o,CX(p));i=i+2|0;}i=Bj(g,h);d=$rt_createIntArray(i);c=d.data;p=0;while
(p<i){q=Y(e,p);if(!DX(n,BI(q)))c[p]=(-1);else c[p]=CP(n,BI(q)).f5;p=p+1|0;}e=a.m5;j=new UH;j.HU=b.bA;j.kK=g;j.qV=h;j.xG=d;j.xM=b;S(e,j);}
function RF(a,b){var c,d;c=0;while(c<a.m5.o){d=Z(a.m5,c);if(ALo(d,b))return AHj(d,b);c=c+1|0;}return null;}
function A38(){Bl0=A_3();}
function Co(){var a=this;D.call(a);a.r=null;a.eN=0;a.CK=null;a.pY=0;}
var Bdf=0;function Bl1(){var a=new Co();Cz(a);return a;}
function Bl2(a){var b=new Co();Nw(b,a);return b;}
function Cz(a){var b,c;b=new Ge;c=Bdf;Bdf=c+1|0;Lp(b,c);a.CK=Mu(b);}
function Nw(a,b){var c,d;c=new Ge;d=Bdf;Bdf=d+1|0;Lp(c,d);a.CK=Mu(c);a.r=b;}
function I$(a,b,c,d){var e;e=d.by;while(true){if(b>e)return (-1);if(a.k(b,c,d)>=0)break;b=b+1|0;}return b;}
function Jk(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.k(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function A4O(a,b){a.pY=b;}
function A4o(a){return a.pY;}
function A0z(a){return a.r;}
function A1k(a,b){a.r=b;}
function A$x(a,b){return 1;}
function A_f(a){return null;}
function K6(a){var b;a.eN=1;if(a.r!==null){if(!a.r.eN){b=a.r.ls();if(b!==null){a.r.eN=1;a.r=b;}a.r.iS();}else if(a.r instanceof Ix&&a.r.f6.wK)a.r=a.r.r;}}
function AHx(){Bdf=1;}
function NV(){CQ.call(this);}
function Bl3(){var a=new NV();AVL(a);return a;}
function AVL(a){Cw(a);}
function A9g(a,b){return;}
function A0m(a,b){return;}
function AUF(a){return 0;}
function DT(){var a=this;Co.call(a);a.wK=0;a.ig=0;}
var BlY=null;function Bcz(a){var b=new DT();G$(b,a);return b;}
function G$(a,b){Cz(a);a.ig=b;}
function ATH(a,b,c,d){var e,f;e=JD(d,a.ig);MV(d,a.ig,b);f=a.r.k(b,c,d);if(f<0)MV(d,a.ig,e);return f;}
function A7z(a){return a.ig;}
function AT3(a,b){return 0;}
function AK2(){var b;b=new TJ;Cz(b);BlY=b;}
function HS(){var a=this;D.call(a);a.bE=null;a.l2=0;a.h3=0;a.A_=0;a.qS=0;a.cE=0;a.H=0;a.DQ=0;a.kX=null;a.jx=null;a.bh=0;a.qb=0;a.ie=0;a.pE=0;a.eM=null;}
var Bl4=null;var BlW=null;var BlX=0;function Kq(a){return a.cE;}
function T2(a,b){if(b>0&&b<3)a.h3=b;if(b==1){a.H=a.cE;a.jx=a.kX;a.bh=a.pE;a.pE=a.ie;Gx(a);}}
function AJu(a,b){a.l2=b;a.H=a.cE;a.jx=a.kX;a.bh=a.ie+1|0;a.pE=a.ie;Gx(a);}
function PM(a){return a.kX;}
function HZ(a){return a.kX===null?0:1;}
function Lg(a){return a.jx===null?0:1;}
function BF(a){Gx(a);return a.qS;}
function G3(a){var b;b=a.kX;Gx(a);return b;}
function A3U(a){return a.H;}
function AVQ(a){return a.qS;}
function Gx(a){var b,c,d,e,f,$$je;a.qS=a.cE;a.cE=a.H;a.kX=a.jx;a.ie=a.pE;a.pE=a.bh;while(true){b=0;a.H=a.bh>=a.bE.data.length?0:Me(a);a.jx=null;if(a.h3==4){if(a.H!=92)return;a.H=a.bh>=a.bE.data.length?0:a.bE.data[CF(a)];switch(a.H){case 69:break;default:a.H=92;a.bh=a.qb;return;}a.h3=a.A_;a.H=a.bh>(a.bE.data.length-2|0)?0:Me(a);}a:{if(a.H!=92){if(a.h3==1)switch(a.H){case 36:a.H=(-536870876);break a;case 40:if(a.bE.data[a.bh]!=63){a.H=(-2147483608);break a;}CF(a);c=a.bE.data[a.bh];d=0;while(true){b:{if(d){d=0;switch
(c){case 33:break;case 61:a.H=(-134217688);CF(a);break b;default:M(CN(B(3),EB(a),a.bh));}a.H=(-67108824);CF(a);}else{switch(c){case 33:break;case 60:CF(a);c=a.bE.data[a.bh];d=1;break b;case 61:a.H=(-536870872);CF(a);break b;case 62:a.H=(-33554392);CF(a);break b;default:a.H=ASg(a);if(a.H<256){a.l2=a.H;a.H=a.H<<16;a.H=(-1073741784)|a.H;break b;}a.H=a.H&255;a.l2=a.H;a.H=a.H<<16;a.H=(-16777176)|a.H;break b;}a.H=(-268435416);CF(a);}}if(!d)break;}break a;case 41:a.H=(-536870871);break a;case 42:case 43:case 63:switch
(a.bh>=a.bE.data.length?42:a.bE.data[a.bh]){case 43:a.H=a.H|(-2147483648);CF(a);break a;case 63:a.H=a.H|(-1073741824);CF(a);break a;default:}a.H=a.H|(-536870912);break a;case 46:a.H=(-536870866);break a;case 91:a.H=(-536870821);T2(a,2);break a;case 93:if(a.h3!=2)break a;a.H=(-536870819);break a;case 94:a.H=(-536870818);break a;case 123:a.jx=AGr(a,a.H);break a;case 124:a.H=(-536870788);break a;default:}else if(a.h3==2)switch(a.H){case 38:a.H=(-536870874);break a;case 45:a.H=(-536870867);break a;case 91:a.H=(-536870821);break a;case 93:a.H
=(-536870819);break a;case 94:a.H=(-536870818);break a;default:}}else{c=a.bh>=(a.bE.data.length-2|0)?(-1):Me(a);c:{a.H=c;switch(a.H){case -1:M(CN(B(3),EB(a),a.bh));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.H
=ADM(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.h3!=1)break a;a.H=(-2147483648)|a.H;break a;case 65:a.H=(-2147483583);break a;case 66:a.H=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:M(CN(B(3),EB(a),a.bh));case 68:case 83:case 87:case 100:case 115:case 119:a.jx=QH(Li(a.bE,
a.qb,1),0);a.H=0;break a;case 71:a.H=(-2147483577);break a;case 80:case 112:break c;case 81:a.A_=a.h3;a.h3=4;b=1;break a;case 90:a.H=(-2147483558);break a;case 97:a.H=7;break a;case 98:a.H=(-2147483550);break a;case 99:if(a.bh>=(a.bE.data.length-2|0))M(CN(B(3),EB(a),a.bh));a.H=a.bE.data[CF(a)]&31;break a;case 101:a.H=27;break a;case 102:a.H=12;break a;case 110:a.H=10;break a;case 114:a.H=13;break a;case 116:a.H=9;break a;case 117:a.H=Uu(a,4);break a;case 120:a.H=Uu(a,2);break a;case 122:a.H=(-2147483526);break a;default:}break a;}e
=AOm(a);f=0;if(a.H==80)f=1;try{a.jx=QH(e,f);}catch($$e){$$je=Bi($$e);if($$je instanceof MN){M(CN(B(3),EB(a),a.bh));}else{throw $$e;}}a.H=0;}}if(b)continue;else break;}}
function AOm(a){var b,c,d;b=new U;Gy(b,10);if(a.bh<(a.bE.data.length-2|0)){if(a.bE.data[a.bh]!=123){b=new U;X(b);return V(I(I(b,B(623)),Li(a.bE,CF(a),1)));}CF(a);c=0;a:{while(a.bh<(a.bE.data.length-2|0)){c=a.bE.data[CF(a)];if(c==125)break a;Dx(b,c);}}if(c!=125)M(CN(B(3),a.eM,a.bh));}if(!J9(b))M(CN(B(3),a.eM,a.bh));d=V(b);if(Bh(d)==1){b=new U;X(b);return V(I(I(b,B(623)),d));}b:{c:{if(Bh(d)>3){if(Iw(d,B(623)))break c;if(Iw(d,B(624)))break c;}break b;}d=Jp(d,2);}return d;}
function AGr(a,b){var c,d,e,f,$$je;c=new U;Gy(c,4);d=(-1);e=2147483647;a:{while(true){if(a.bh>=a.bE.data.length)break a;b=a.bE.data[CF(a)];if(b==125)break a;if(b==44&&d<0)try{d=Lc(BL(c),10);AGH(c,0,J9(c));continue;}catch($$e){$$je=Bi($$e);if($$je instanceof Ey){break;}else{throw $$e;}}Dx(c,b&65535);}M(CN(B(3),a.eM,a.bh));}if(b!=125)M(CN(B(3),a.eM,a.bh));if(J9(c)>0)b:{try{e=Lc(BL(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Bi($$e);if($$je instanceof Ey){}else{throw $$e;}}M(CN(B(3),a.eM,a.bh));}else if
(d<0)M(CN(B(3),a.eM,a.bh));if((d|e|(e-d|0))<0)M(CN(B(3),a.eM,a.bh));f=a.bh>=a.bE.data.length?42:a.bE.data[a.bh];c:{switch(f){case 43:a.H=(-2147483525);CF(a);break c;case 63:a.H=(-1073741701);CF(a);break c;default:}a.H=(-536870789);}c=new Tg;c.ja=d;c.io=e;return c;}
function EB(a){return a.eM;}
function En(a){return !a.cE&&!a.H&&a.bh==a.DQ&&!HZ(a)?1:0;}
function Nk(b){return b<0?0:1;}
function F5(a){return !En(a)&&!HZ(a)&&Nk(a.cE)?1:0;}
function TI(a){return a.cE<=56319&&a.cE>=55296?1:0;}
function Wr(a){return a.cE<=57343&&a.cE>=56320?1:0;}
function QP(b){return b<=56319&&b>=55296?1:0;}
function Py(b){return b<=57343&&b>=56320?1:0;}
function Uu(a,b){var c,d,e,f,$$je;c=new U;Gy(c,b);d=a.bE.data.length-2|0;e=0;while(true){f=R(e,b);if(f>=0)break;if(a.bh>=d)break;Dx(c,a.bE.data[CF(a)]);e=e+1|0;}if(!f)a:{try{b=Lc(BL(c),16);}catch($$e){$$je=Bi($$e);if($$je instanceof Ey){break a;}else{throw $$e;}}return b;}M(CN(B(3),a.eM,a.bh));}
function ADM(a){var b,c,d,e,f;b=3;c=1;d=a.bE.data.length-2|0;e=We(a.bE.data[a.bh],8);switch(e){case -1:break;default:if(e>3)b=2;CF(a);a:{while(true){if(c>=b)break a;if(a.bh>=d)break a;f=We(a.bE.data[a.bh],8);if(f<0)break;e=(e*8|0)+f|0;CF(a);c=c+1|0;}}return e;}M(CN(B(3),a.eM,a.bh));}
function ASg(a){var b,c;b=1;c=a.l2;a:while(true){if(a.bh>=a.bE.data.length)M(CN(B(3),a.eM,a.bh));b:{c:{switch(a.bE.data[a.bh]){case 41:CF(a);return c|256;case 45:if(!b)M(CN(B(3),a.eM,a.bh));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}CF(a);}CF(a);return c;}
function CF(a){var b,c;a.qb=a.bh;if(!(a.l2&4))a.bh=a.bh+1|0;else{b=a.bE.data.length-2|0;a.bh=a.bh+1|0;a:while(true){if(a.bh<b&&Qa(a.bE.data[a.bh])){a.bh=a.bh+1|0;continue;}if(a.bh>=b)break;if(a.bE.data[a.bh]!=35)break;a.bh=a.bh+1|0;while(true){if(a.bh>=b)continue a;c=a.bE.data[a.bh];if(c!=10&&c!=13&&c!=133&&(c|1)!=8233?0:1)continue a;a.bh=a.bh+1|0;}}}return a.qb;}
function AQQ(b){return Bl4.Nd(b);}
function Me(a){var b,c,d;b=a.bE.data[CF(a)];if(Dt(b)){c=a.qb+1|0;if(c<a.bE.data.length){d=a.bE.data[c];if(DP(d)){CF(a);return EI(b,d);}}}return b;}
function HA(a){return a.ie;}
function ARa(){var a=this;Cb.call(a);a.AH=null;a.q$=null;a.n4=0;}
function CN(a,b,c){var d=new ARa();A3F(d,a,b,c);return d;}
function A3F(a,b,c,d){O(a);a.n4=(-1);a.AH=b;a.q$=c;a.n4=d;}
function A_b(a){var b,c,d,e,f,g,h,i;b=B(3);if(a.n4>=1){c=$rt_createCharArray(a.n4);d=c.data;e=0;f=d.length;if(e>f){b=new Cb;O(b);M(b);}while(e<f){g=e+1|0;d[e]=32;e=g;}b=AIa(c);}h=new U;X(h);h=I(h,a.AH);if(a.q$!==null&&Bh(a.q$)){i=new U;X(i);b=V(I(I(I(I(Be(i,a.n4),B(625)),a.q$),B(625)),b));}else b=B(3);return V(I(h,b));}
function Mt(){CQ.call(this);this.tn=0;}
function Bl5(){var a=new Mt();A4l(a);return a;}
function A4l(a){Cw(a);}
function A8E(a,b){KI(b,a.tn);}
function A78(a,b){a.tn=NU(b);}
function A6K(a){return 1;}
function MT(){CQ.call(this);this.th=0;}
function Bl6(){var a=new MT();A51(a);return a;}
function A51(a){Cw(a);}
function AWi(a,b){Z7(b,a.th);}
function AZy(a,b){a.th=XG(b);}
function A5M(a){return 2;}
function Lh(){CQ.call(this);this.r0=0;}
function Bl7(){var a=new Lh();A1I(a);return a;}
function A1I(a){Cw(a);}
function A15(a,b){JJ(b,a.r0);}
function AY5(a,b){a.r0=H3(b);}
function AVl(a){return 3;}
function N7(){CQ.call(this);this.sV=Long_ZERO;}
function Bl8(){var a=new N7();AZZ(a);return a;}
function AZZ(a){Cw(a);}
function ATd(a,b){Uz(b,a.sV);}
function A_q(a,b){a.sV=Tc(b);}
function A2G(a){return 4;}
function Pc(){CQ.call(this);this.ng=0.0;}
function Bl9(){var a=new Pc();AZW(a);return a;}
function A6R(a){var b=new Pc();AVR(b,a);return b;}
function AZW(a){Cw(a);}
function AVR(a,b){Cw(a);a.ng=b;}
function AS6(a,b){APf(b,a.ng);}
function A70(a,b){a.ng=AAY(b);}
function ASK(a){return 5;}
function Mm(){CQ.call(this);this.iF=0.0;}
function Bl$(){var a=new Mm();AZA(a);return a;}
function AZA(a){Cw(a);}
function A62(a,b){APk(b,a.iF);}
function AU5(a,b){a.iF=APi(b);}
function A0U(a){return 6;}
function MD(){CQ.call(this);this.mg=null;}
function Bl_(){var a=new MD();A_I(a);return a;}
function A_I(a){Cw(a);}
function A4_(a,b){JJ(b,a.mg.data.length);AOy(b,a.mg);}
function A7j(a,b){a.mg=$rt_createByteArray(H3(b));AMR(b,a.mg);}
function A9D(a){return 7;}
function OA(){CQ.call(this);this.Ao=null;}
function Bma(){var a=new OA();A8n(a);return a;}
function A8n(a){Cw(a);}
function A$U(a,b){Xm(b,a.Ao);}
function AY6(a,b){a.Ao=GT(b);}
function ATo(a){return 8;}
function QN(){var a=this;CQ.call(a);a.g_=null;a.mQ=0;}
function L8(){var a=new QN();AG5(a);return a;}
function AG5(a){Cw(a);a.g_=Ci();}
function A9y(a,b){var c;if(a.g_.o<=0)a.mQ=1;else a.mQ=Z(a.g_,0).e_();KI(b,a.mQ);JJ(b,a.g_.o);c=0;while(c<a.g_.o){Z(a.g_,c).gJ(b);c=c+1|0;}}
function AYZ(a,b){var c,d,e;a.mQ=NU(b);c=H3(b);a.g_=Ci();d=0;while(d<c){e=AE5(a.mQ);e.gC(b);S(a.g_,e);d=d+1|0;}}
function AYz(a){return 9;}
function Jm(a,b){a.mQ=b.e_();S(a.g_,b);}
function Fc(a,b){return Z(a.g_,b);}
function AOs(a){return a.g_.o;}
function Tu(){var a=this;D.call(a);a.Al=null;a.w6=null;}
function ARH(a){CM(a.Al,(Ur(a.w6.result)?1:0)?null:A8x(a.w6.result));}
function AUo(a){ARH(a);}
function Tt(){D.call(this);this.Ec=null;}
function XA(a){CM(a.Ec,null);}
function AXo(a){XA(a);}
function ARR(){var a=this;D.call(a);a.EO=null;a.qc=null;}
function Bbx(){var a=new ARR();AXA(a);return a;}
function AXA(a){var b,c,d,e;b=J($rt_arraycls(B4),4);c=b.data;d=J(B4,3);e=d.data;e[0]=B(626);e[1]=B(616);e[2]=B(616);c[0]=d;d=J(B4,3);e=d.data;e[0]=B(72);e[1]=B(615);e[2]=B(615);c[1]=d;d=J(B4,3);e=d.data;e[0]=B(627);e[1]=B(628);e[2]=B(629);c[2]=d;d=J(B4,3);e=d.data;e[0]=B(627);e[1]=B(629);e[2]=B(629);c[3]=d;a.EO=b;b=J($rt_arraycls(D),5);c=b.data;d=J(D,5);e=d.data;L();e[0]=Be1;e[1]=BeZ;BB();e[2]=BhQ;e[3]=BhB;e[4]=BhR;c[0]=d;d=J(D,5);e=d.data;e[0]=BhV;e[1]=BhZ;e[2]=BhL;e[3]=Bh3;e[4]=Bh$;c[1]=d;d=J(D,5);e=d.data;e[0]
=BhU;e[1]=BhY;e[2]=BhK;e[3]=Bh2;e[4]=Bh9;c[2]=d;d=J(D,5);e=d.data;e[0]=BhW;e[1]=Bh0;e[2]=BhM;e[3]=Bh4;e[4]=Bh_;c[3]=d;d=J(D,5);e=d.data;e[0]=Bia;e[1]=Bib;e[2]=Bic;e[3]=Bid;e[4]=Bie;c[4]=d;a.qc=b;}
function AHk(a,b){var c,d,e,f,g,h,i,j;c=0;while(c<a.qc.data[0].data.length){d=a.qc.data[0].data[c];e=0;while(e<(a.qc.data.length-1|0)){f=a.qc.data;g=e+1|0;h=f[g].data[c];i=Qe(h);f=J(D,5);j=f.data;j[0]=a.EO.data[e];j[1]=BI(35);BB();j[2]=Bh5;j[3]=BI(88);j[4]=d;Ck(b,i,f);e=g;}c=c+1|0;}}
function XU(){var a=this;D.call(a);a.Bb=null;a.pr=null;}
function Baa(){var a=new XU();A$p(a);return a;}
function A$p(a){var b,c,d,e;b=J($rt_arraycls(B4),1);c=b.data;d=J(B4,3);e=d.data;e[0]=B(72);e[1]=B(72);e[2]=B(615);c[0]=d;a.Bb=b;b=J($rt_arraycls(D),2);c=b.data;d=J(D,5);e=d.data;L();e[0]=Be1;e[1]=BeZ;BB();e[2]=BhQ;e[3]=BhB;e[4]=BhR;c[0]=d;d=J(D,5);e=d.data;e[0]=BhT;e[1]=BhX;e[2]=BhS;e[3]=Bh1;e[4]=Bh8;c[1]=d;a.pr=b;}
function Xt(a,b){var c,d,e,f,g,h,i,j,k;c=0;while(c<a.pr.data[0].data.length){d=a.pr.data[0].data[c];e=0;while(e<(a.pr.data.length-1|0)){f=a.pr.data;g=e+1|0;h=f[g].data[c];i=Qe(h);j=J(D,5);k=j.data;k[0]=a.Bb.data[e];k[1]=BI(35);BB();k[2]=Bh5;k[3]=BI(88);k[4]=d;Ck(b,i,j);e=g;}c=c+1|0;}h=new Cd;BB();Gl(h,BhP,1);f=J(D,7);k=f.data;k[0]=B(630);k[1]=B(631);k[2]=B(630);k[3]=BI(88);k[4]=Bgf;k[5]=BI(35);k[6]=Bh5;Ck(b,h,f);d=EK(Bgd,4);f=J(D,9);k=f.data;k[0]=B(72);k[1]=B(615);k[2]=B(48);k[3]=BI(89);k[4]=Bgc;k[5]=BI(88);k[6]
=BhQ;k[7]=BI(35);k[8]=Bh5;Ck(b,d,f);}
function XN(){D.call(this);this.sm=null;}
function Bbt(){var a=new XN();A2b(a);return a;}
function A2b(a){var b,c,d,e;b=J($rt_arraycls(D),3);c=b.data;d=J(D,2);e=d.data;L();e[0]=Bfi;BB();e[1]=BhR;c[0]=d;d=J(D,2);e=d.data;e[0]=Bfh;e[1]=BhQ;c[1]=d;d=J(D,2);e=d.data;e[0]=Bg0;e[1]=BhB;c[2]=d;a.sm=b;}
function ADW(a,b){var c,d,e,f,g,h;c=0;while(c<a.sm.data.length){d=a.sm.data[c].data[0];e=a.sm.data[c].data[1];f=ALZ(d);g=J(D,5);h=g.data;h[0]=B(609);h[1]=B(609);h[2]=B(609);h[3]=BI(35);h[4]=e;Ck(b,f,g);f=EK(e,9);g=J(D,3);h=g.data;h[0]=B(615);h[1]=BI(35);h[2]=d;Ck(b,f,g);c=c+1|0;}}
function AEa(){D.call(this);}
function Ba_(){var a=new AEa();A0C(a);return a;}
function A0C(a){return;}
function AJQ(a,b){var c,d,e;c=new Cd;BB();DA(c,Bh7);d=J(D,9);e=d.data;e[0]=B(48);e[1]=B(72);e[2]=B(615);e[3]=BI(88);L();e[4]=Be$;e[5]=BI(89);e[6]=Be_;e[7]=BI(35);e[8]=Bh6;Ck(b,c,d);c=Qe(Bh7);d=J(D,9);e=d.data;e[0]=B(48);e[1]=B(72);e[2]=B(615);e[3]=BI(88);e[4]=Be_;e[5]=BI(89);e[6]=Be$;e[7]=BI(35);e[8]=Bh6;Ck(b,c,d);}
function ARQ(){D.call(this);}
function Baq(){var a=new ARQ();A6U(a);return a;}
function A6U(a){return;}
function X_(a,b){var c,d,e;c=new Cd;L();AH0(c,BgX);d=J(D,5);e=d.data;e[0]=B(609);e[1]=B(612);e[2]=B(609);e[3]=BI(35);e[4]=Be1;Ck(b,c,d);c=ALZ(Bg4);d=J(D,5);e=d.data;e[0]=B(609);e[1]=B(612);e[2]=B(609);e[3]=BI(35);e[4]=BeZ;Ck(b,c,d);c=ALZ(Bg1);d=J(D,4);e=d.data;e[0]=B(613);e[1]=B(613);e[2]=BI(35);e[3]=Be1;Ck(b,c,d);}
function AE$(){var a=this;D.call(a);a.zz=null;a.n1=null;}
function Ba1(){var a=new AE$();AU7(a);return a;}
function AU7(a){var b,c,d,e;b=J($rt_arraycls(B4),4);c=b.data;d=J(B4,2);e=d.data;e[0]=B(626);e[1]=B(617);c[0]=d;d=J(B4,3);e=d.data;e[0]=B(617);e[1]=B(626);e[2]=B(626);c[1]=d;d=J(B4,3);e=d.data;e[0]=B(626);e[1]=B(617);e[2]=B(617);c[2]=d;d=J(B4,2);e=d.data;e[0]=B(617);e[1]=B(617);c[3]=d;a.zz=b;b=J($rt_arraycls(D),5);c=b.data;d=J(D,5);e=d.data;L();e[0]=Bfd;e[1]=Bgp;BB();e[2]=BhQ;e[3]=BhB;e[4]=BhR;c[0]=d;d=J(D,5);e=d.data;e[0]=Big;e[1]=Bik;e[2]=Bio;e[3]=Bis;e[4]=Biw;c[1]=d;d=J(D,5);e=d.data;e[0]=Bih;e[1]=Bil;e[2]
=Bip;e[3]=Bit;e[4]=Bix;c[2]=d;d=J(D,5);e=d.data;e[0]=Bii;e[1]=Bim;e[2]=Biq;e[3]=Biu;e[4]=Biy;c[3]=d;d=J(D,5);e=d.data;e[0]=Bij;e[1]=Bin;e[2]=Bir;e[3]=Biv;e[4]=Biz;c[4]=d;a.n1=b;}
function ASC(a,b){var c,d,e,f,g,h,i,j;c=0;while(c<a.n1.data[0].data.length){d=a.n1.data[0].data[c];e=0;while(e<(a.n1.data.length-1|0)){f=a.n1.data;g=e+1|0;h=f[g].data[c];i=Qe(h);f=J(D,3);j=f.data;j[0]=a.zz.data[e];j[1]=BI(88);j[2]=d;Ck(b,i,f);e=g;}c=c+1|0;}}
function Yg(){D.call(this);this.IO=null;}
function BaE(a){var b=new Yg();AYu(b,a);return b;}
function AYu(a,b){a.IO=b;}
function AMC(a,b,c){return Km(c)<Km(b)?(-1):Km(c)<=Km(b)?0:1;}
function AZv(a,b,c){return AMC(a,b,c);}
function QA(){DT.call(this);}
function A3w(a,b,c,d){var e;e=a.ig;Cv(d,e,b-Eo(d,e)|0);return a.r.k(b,c,d);}
function A9z(a,b){return 0;}
function AR8(){DT.call(this);}
function Bbu(){var a=new AR8();A2S(a);return a;}
function A2S(a){G$(a,(-1));}
function A4N(a,b,c,d){return b;}
function PP(){DT.call(this);}
function AT9(a,b,c,d){if(Eo(d,a.ig)!=b)b=(-1);return b;}
function Q0(){DT.call(this);this.wy=0;}
function A3y(a,b,c,d){var e;e=a.ig;Cv(d,e,b-Eo(d,e)|0);a.wy=b;return b;}
function AUc(a){return a.wy;}
function A8O(a,b){return 0;}
function HQ(){DT.call(this);}
function Bb5(){var a=new HQ();A$n(a);return a;}
function A$n(a){G$(a,0);}
function A1v(a,b,c,d){if(d.nn!=1&&b!=d.by)return (-1);ARx(d);MV(d,0,b);return b;}
function CI(){Co.call(this);this.dj=0;}
function Bmb(){var a=new CI();EM(a);return a;}
function EM(a){Cz(a);a.dj=1;}
function A_z(a,b,c,d){var e;if((b+a.d9()|0)>d.by){d.hl=1;return (-1);}e=a.dl(b,c);if(e<0)return (-1);return a.r.k(b+e|0,c,d);}
function A9_(a){return a.dj;}
function AW6(a,b){return 1;}
function AFV(){CI.call(this);}
function IF(a){var b=new AFV();A7G(b,a);return b;}
function A7G(a,b){Nw(a,b);a.dj=1;a.pY=1;a.dj=0;}
function A9N(a,b,c){return 0;}
function A5C(a,b,c,d){var e,f,g;e=d.by;f=d.fe;while(true){g=R(b,e);if(g>0)return (-1);if(g<0&&DP(Y(c,b))&&b>f&&Dt(Y(c,b-1|0))){b=b+1|0;continue;}if(a.r.k(b,c,d)>=0)break;b=b+1|0;}return b;}
function A4D(a,b,c,d,e){var f,g;f=e.by;g=e.fe;while(true){if(c<b)return (-1);if(c<f&&DP(Y(d,c))&&c>g&&Dt(Y(d,c-1|0))){c=c+(-1)|0;continue;}if(a.r.k(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function A3x(a,b){return 0;}
function CE(){var a=this;Co.call(a);a.dk=null;a.f6=null;a.cH=0;}
function Bmc(){var a=new CE();A4z(a);return a;}
function BaF(a,b){var c=new CE();GQ(c,a,b);return c;}
function A4z(a){Cz(a);}
function GQ(a,b,c){Cz(a);a.dk=b;a.f6=c;a.cH=c.ig;}
function AWp(a,b,c,d){var e,f,g,h;if(a.dk===null)return (-1);e=Hk(d,a.cH);EL(d,a.cH,b);f=a.dk.o;g=0;while(true){if(g>=f){EL(d,a.cH,e);return (-1);}h=Z(a.dk,g).k(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AZj(a,b){a.f6.r=b;}
function A7f(a,b){var c;a:{if(a.dk!==null){c=Jf(a.dk);while(true){if(!KA(c))break a;if(!KR(c).d0(b))continue;else return 1;}}}return 0;}
function AZQ(a,b){return JD(b,a.cH)>=0&&Hk(b,a.cH)==JD(b,a.cH)?0:1;}
function AUG(a){var b,c,d,e;a.eN=1;if(a.f6!==null&&!a.f6.eN)K6(a.f6);a:{if(a.dk!==null){b=a.dk.o;c=0;while(true){if(c>=b)break a;d=Z(a.dk,c);e=d.ls();if(e===null)e=d;else{d.eN=1;Em(a.dk,c);AMH(a.dk,c,e);}if(!e.eN)e.iS();c=c+1|0;}}}if(a.r!==null)K6(a);}
function KZ(){CE.call(this);}
function Bmd(){var a=new KZ();AXV(a);return a;}
function AXV(a){Cz(a);}
function AZb(a,b,c,d){var e,f,g,h;e=Eo(d,a.cH);Cv(d,a.cH,b);f=a.dk.o;g=0;while(true){if(g>=f){Cv(d,a.cH,e);return (-1);}h=Z(a.dk,g).k(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function A9l(a,b){return !Eo(b,a.cH)?0:1;}
function EW(){KZ.call(this);}
function A45(a,b,c,d){var e,f,g;e=Eo(d,a.cH);Cv(d,a.cH,b);f=a.dk.o;g=0;while(g<f){if(Z(a.dk,g).k(b,c,d)>=0)return a.r.k(a.f6.wy,c,d);g=g+1|0;}Cv(d,a.cH,e);return (-1);}
function A86(a,b){a.r=b;}
function S7(){EW.call(this);}
function AZf(a,b,c,d){var e,f;e=a.dk.o;f=0;while(f<e){if(Z(a.dk,f).k(b,c,d)>=0)return a.r.k(b,c,d);f=f+1|0;}return (-1);}
function A1m(a,b){return 0;}
function WG(){EW.call(this);}
function ATW(a,b,c,d){var e,f;e=a.dk.o;f=0;while(true){if(f>=e)return a.r.k(b,c,d);if(Z(a.dk,f).k(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A$d(a,b){return 0;}
function U7(){EW.call(this);}
function AUD(a,b,c,d){var e,f,g,h;e=a.dk.o;f=d.ob?0:d.fe;a:{g=a.r.k(b,c,d);if(g>=0){Cv(d,a.cH,b);h=0;while(true){if(h>=e)break a;if(Z(a.dk,h).eT(f,b,c,d)>=0){Cv(d,a.cH,(-1));return g;}h=h+1|0;}}}return (-1);}
function A_N(a,b){return 0;}
function Rc(){EW.call(this);}
function A2_(a,b,c,d){var e,f;e=a.dk.o;Cv(d,a.cH,b);f=0;while(true){if(f>=e)return a.r.k(b,c,d);if(Z(a.dk,f).eT(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A9r(a,b){return 0;}
function Ix(){CE.call(this);this.fm=null;}
function Bcr(a,b){var c=new Ix();ZV(c,a,b);return c;}
function ZV(a,b,c){Cz(a);a.fm=b;a.f6=c;a.cH=c.ig;}
function ATb(a,b,c,d){var e,f;e=Hk(d,a.cH);EL(d,a.cH,b);f=a.fm.k(b,c,d);if(f>=0)return f;EL(d,a.cH,e);return (-1);}
function AX8(a,b,c,d){var e;e=a.fm.eG(b,c,d);if(e>=0)EL(d,a.cH,e);return e;}
function A9C(a,b,c,d,e){var f;f=a.fm.eT(b,c,d,e);if(f>=0)EL(e,a.cH,f);return f;}
function A7b(a,b){return a.fm.d0(b);}
function A8M(a){var b;b=new OL;ZV(b,a.fm,a.f6);a.r=b;return b;}
function A11(a){var b;a.eN=1;if(a.f6!==null&&!a.f6.eN)K6(a.f6);if(a.fm!==null&&!a.fm.eN){b=a.fm.ls();if(b!==null){a.fm.eN=1;a.fm=b;}a.fm.iS();}}
function HW(){D.call(this);}
function Bm(){var a=this;HW.call(a);a.cg=0;a.dL=0;a.b7=null;a.p7=null;a.qA=null;a.b9=0;}
var Bme=null;function Bmf(){var a=new Bm();B0(a);return a;}
function B0(a){var b;b=new WU;b.bx=$rt_createIntArray(64);a.b7=b;}
function A4b(a){return null;}
function A3J(a){return a.b7;}
function ANW(a){return !a.dL?(IX(a.b7,0)>=2048?0:1):AEq(a.b7,0)>=2048?0:1;}
function A6b(a){return a.b9;}
function A95(a){return a;}
function YS(a){var b,c;if(a.qA===null){b=a.ki();c=new Sj;c.Jj=a;c.Ck=b;B0(c);a.qA=c;Fv(a.qA,a.dL);}return a.qA;}
function J$(a){var b,c;if(a.p7===null){b=a.ki();c=new Si;c.GE=a;c.Eq=b;c.Bc=a;B0(c);a.p7=c;Fv(a.p7,a.cg);a.p7.b9=a.b9;}return a.p7;}
function A_c(a){return 0;}
function Fv(a,b){if(a.cg^b){a.cg=a.cg?0:1;a.dL=a.dL?0:1;}if(!a.b9)a.b9=1;return a;}
function AVU(a){return a.cg;}
function KC(b,c){if(b.hA()!==null&&c.hA()!==null)return AD6(b.hA(),c.hA());return 1;}
function QH(b,c){return APO(ARr(Bme,b),c);}
function ZZ(){Bme=new H6;}
function ZJ(){var a=this;Bm.call(a);a.xz=0;a.yY=0;a.ni=0;a.uF=0;a.it=0;a.lf=0;a.b4=null;a.c3=null;}
function Ep(){var a=new ZJ();A2u(a);return a;}
function A$H(a,b){var c=new ZJ();AUV(c,a,b);return c;}
function A2u(a){B0(a);a.b4=A_P();}
function AUV(a,b,c){B0(a);a.b4=A_P();a.xz=b;a.yY=c;}
function Dp(a,b){a:{if(a.xz){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.it){Ov(a.b4,Kb(b&65535));break a;}Ma(a.b4,Kb(b&65535));break a;}if(a.yY&&b>128){a.ni=1;b=GN(GM(b));}}}if(!(!QP(b)&&!Py(b))){if(a.uF)Ov(a.b7,b-55296|0);else Ma(a.b7,b-55296|0);}if(a.it)Ov(a.b4,b);else Ma(a.b4,b);if(!a.b9&&Ms(b))a.b9=1;return a;}
function ASs(a,b){var c,d,e;if(!a.b9&&b.b9)a.b9=1;if(a.uF){if(!b.dL)GY(a.b7,b.ki());else Eb(a.b7,b.ki());}else if(!b.dL)Hp(a.b7,b.ki());else{Hb(a.b7,b.ki());Eb(a.b7,b.ki());a.dL=a.dL?0:1;a.uF=1;}if(!a.lf&&b.hA()!==null){if(a.it){if(!b.cg)GY(a.b4,b.hA());else Eb(a.b4,b.hA());}else if(!b.cg)Hp(a.b4,b.hA());else{Hb(a.b4,b.hA());Eb(a.b4,b.hA());a.cg=a.cg?0:1;a.it=1;}}else{c=a.cg;if(a.c3!==null){d=a.c3;if(!c){e=new TU;e.HA=a;e.ES=c;e.A8=d;e.A1=b;B0(e);a.c3=e;}else{e=new TV;e.JH=a;e.z_=c;e.Dr=d;e.C$=b;B0(e);a.c3=
e;}}else{if(c&&!a.it&&Ol(a.b4)){d=new TR;d.Iu=a;d.Dw=b;B0(d);a.c3=d;}else if(!c){d=new TP;d.w9=a;d.wm=c;d.CF=b;B0(d);a.c3=d;}else{d=new TQ;d.vb=a;d.tM=c;d.A4=b;B0(d);a.c3=d;}a.lf=1;}}return a;}
function CG(a,b,c){var d;if(b>c){d=new Cb;O(d);M(d);}a:{b:{if(!a.xz){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Dp(a,b);b=b+1|0;}}if(a.it)AID(a.b4,b,c+1|0);else Jl(a.b4,b,c+1|0);}return a;}
function AIc(a,b){var c,d,e;if(!a.b9&&b.b9)a.b9=1;if(b.ni)a.ni=1;if(!(a.dL^b.dL)){if(!a.dL)Hp(a.b7,b.b7);else Eb(a.b7,b.b7);}else if(a.dL)GY(a.b7,b.b7);else{Hb(a.b7,b.b7);Eb(a.b7,b.b7);a.dL=1;}if(!a.lf&&DV(b)!==null){if(!(a.cg^b.cg)){if(!a.cg)Hp(a.b4,DV(b));else Eb(a.b4,DV(b));}else if(a.cg)GY(a.b4,DV(b));else{Hb(a.b4,DV(b));Eb(a.b4,DV(b));a.cg=1;}}else{c=a.cg;if(a.c3!==null){d=a.c3;if(!c){e=new Pm;e.Fl=a;e.AK=c;e.Ex=d;e.Bk=b;B0(e);a.c3=e;}else{e=new PA;e.FA=a;e.EL=c;e.yU=d;e.y0=b;B0(e);a.c3=e;}}else{if(!a.it
&&Ol(a.b4)){if(!c){d=new TS;d.JJ=a;d.zM=b;B0(d);a.c3=d;}else{d=new TT;d.HL=a;d.EC=b;B0(d);a.c3=d;}}else if(!c){d=new TX;d.AO=a;d.Ac=b;d.Dt=c;B0(d);a.c3=d;}else{d=new TY;d.An=a;d.Au=b;d.DW=c;B0(d);a.c3=d;}a.lf=1;}}}
function Sq(a,b){var c,d,e;if(!a.b9&&b.b9)a.b9=1;if(b.ni)a.ni=1;if(!(a.dL^b.dL)){if(!a.dL)Eb(a.b7,b.b7);else Hp(a.b7,b.b7);}else if(!a.dL)GY(a.b7,b.b7);else{Hb(a.b7,b.b7);Eb(a.b7,b.b7);a.dL=0;}if(!a.lf&&DV(b)!==null){if(!(a.cg^b.cg)){if(!a.cg)Eb(a.b4,DV(b));else Hp(a.b4,DV(b));}else if(!a.cg)GY(a.b4,DV(b));else{Hb(a.b4,DV(b));Eb(a.b4,DV(b));a.cg=0;}}else{c=a.cg;if(a.c3!==null){d=a.c3;if(!c){e=new Po;e.Hz=a;e.Ee=c;e.Ci=d;e.z$=b;B0(e);a.c3=e;}else{e=new Pp;e.HR=a;e.D5=c;e.BW=d;e.Ed=b;B0(e);a.c3=e;}}else{if(!a.it
&&Ol(a.b4)){if(!c){d=new Pk;d.FD=a;d.CT=b;B0(d);a.c3=d;}else{d=new Pl;d.JE=a;d.zF=b;B0(d);a.c3=d;}}else if(!c){d=new Pq;d.E$=a;d.ER=b;d.At=c;B0(d);a.c3=d;}else{d=new Pj;d.Ar=a;d.D9=b;d.DA=c;B0(d);a.c3=d;}a.lf=1;}}}
function D4(a,b){if(a.c3!==null)return a.cg^a.c3.Y(b);return a.cg^EJ(a.b4,b);}
function DV(a){if(!a.lf)return a.b4;return null;}
function A5v(a){return a.b7;}
function A1c(a){var b,c;if(a.c3!==null)return a;b=DV(a);c=new Pn;c.Hk=a;c.sa=b;B0(c);return Fv(c,a.cg);}
function A72(a){var b,c;b=new U;X(b);c=IX(a.b4,0);while(c>=0){Hh(b,Iu(c));Dx(b,124);c=IX(a.b4,c+1|0);}if(b.bX>0)Sd(b,b.bX-1|0);return V(b);}
function AVV(a){return a.ni;}
function MN(){var a=this;B6.call(a);a.G4=null;a.Jn=null;}
function E4(){Co.call(this);this.bP=null;}
function Bmg(a,b,c){var d=new E4();Ee(d,a,b,c);return d;}
function Ee(a,b,c,d){Nw(a,c);a.bP=b;a.pY=d;}
function A_E(a){return a.bP;}
function A0p(a,b){return !a.bP.d0(b)&&!a.r.d0(b)?0:1;}
function A$J(a,b){return 1;}
function AYt(a){var b;a.eN=1;if(a.r!==null&&!a.r.eN){b=a.r.ls();if(b!==null){a.r.eN=1;a.r=b;}a.r.iS();}if(a.bP!==null){if(!a.bP.eN){b=a.bP.ls();if(b!==null){a.bP.eN=1;a.bP=b;}a.bP.iS();}else if(a.bP instanceof Ix&&a.bP.f6.wK)a.bP=a.bP.r;}}
function D6(){E4.call(this);this.cK=null;}
function BaW(a,b,c){var d=new D6();F0(d,a,b,c);return d;}
function F0(a,b,c,d){Ee(a,b,c,d);a.cK=b;}
function A3a(a,b,c,d){var e,f;e=0;a:{while((b+a.cK.d9()|0)<=d.by){f=a.cK.dl(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.r.k(b,c,d);if(f>=0)break;b=b-a.cK.d9()|0;e=e+(-1)|0;}return f;}
function Gz(){D6.call(this);this.kU=null;}
function BbX(a,b,c,d){var e=new Gz();QJ(e,a,b,c,d);return e;}
function QJ(a,b,c,d,e){F0(a,c,d,e);a.kU=b;}
function A30(a,b,c,d){var e,f,g,h;e=a.kU.ja;f=a.kU.io;g=0;while(true){if(g>=e){a:{while(g<f){if((b+a.cK.d9()|0)>d.by)break a;h=a.cK.dl(b,c);if(h<1)break a;b=b+h|0;g=g+1|0;}}while(true){if(g<e)return (-1);h=a.r.k(b,c,d);if(h>=0)break;b=b-a.cK.d9()|0;g=g+(-1)|0;}return h;}if((b+a.cK.d9()|0)>d.by){d.hl=1;return (-1);}h=a.cK.dl(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function DU(){E4.call(this);}
function A3p(a,b,c,d){var e;if(!a.bP.b2(d))return a.r.k(b,c,d);e=a.bP.k(b,c,d);if(e>=0)return e;return a.r.k(b,c,d);}
function FS(){D6.call(this);}
function A7p(a,b,c,d){var e;e=a.bP.k(b,c,d);if(e<0)e=a.r.k(b,c,d);return e;}
function A2L(a,b){a.r=b;a.bP.b$(b);}
function Sl(){D6.call(this);}
function A_u(a,b,c,d){while((b+a.cK.d9()|0)<=d.by&&a.cK.dl(b,c)>0){b=b+a.cK.d9()|0;}return a.r.k(b,c,d);}
function AYJ(a,b,c,d){var e,f,g;e=a.r.eG(b,c,d);if(e<0)return (-1);f=e-a.cK.d9()|0;while(f>=b&&a.cK.dl(f,c)>0){g=f-a.cK.d9()|0;e=f;f=g;}return e;}
function Ey(){Cb.call(this);}
function Bmh(){var a=new Ey();A3O(a);return a;}
function A3O(a){O(a);}
function Tg(){var a=this;HW.call(a);a.ja=0;a.io=0;}
function A52(a){return a.ja;}
function A$D(a){return a.io;}
function A7_(a){var b;b=new U;X(b);return V(I(I(I(Be(I(b,B(632)),a.ja),B(633)),a.io==2147483647?B(3):Mu(AQP(a.io))),B(634)));}
function TJ(){Co.call(this);}
function Bmi(){var a=new TJ();A_D(a);return a;}
function A_D(a){Cz(a);}
function AXt(a,b,c,d){return b;}
function A8L(a,b){return 0;}
function WU(){var a=this;D.call(a);a.bx=null;a.ci=0;}
function A_P(){var a=new WU();A4v(a);return a;}
function A4v(a){a.bx=$rt_createIntArray(0);}
function Ma(a,b){var c,d;c=b/32|0;if(b>=a.ci){KF(a,c+1|0);a.ci=b+1|0;}d=a.bx.data;d[c]=d[c]|1<<(b%32|0);}
function Jl(a,b,c){var d,e,f,g,h;if(b>c){d=new BO;O(d);M(d);}e=b/32|0;f=c/32|0;if(c>a.ci){KF(a,f+1|0);a.ci=c;}if(e==f){g=a.bx.data;g[e]=g[e]|Jd(a,b)&Kz(a,c);}else{g=a.bx.data;g[e]=g[e]|Jd(a,b);h=e+1|0;while(h<f){a.bx.data[h]=(-1);h=h+1|0;}g=a.bx.data;g[f]=g[f]|Kz(a,c);}}
function Jd(a,b){return (-1)<<(b%32|0);}
function Kz(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0);}
function Ov(a,b){var c,d;c=b/32|0;if(c<a.bx.data.length){d=a.bx.data;d[c]=d[c]&Ni((-2),b%32|0);if(b==(a.ci-1|0))H8(a);}}
function AID(a,b,c){var d,e,f,g,h;if(b>c){d=new BO;O(d);M(d);}if(b>=a.ci)return;c=CB(a.ci,c);e=b/32|0;f=c/32|0;if(e==f){g=a.bx.data;g[e]=g[e]&(Kz(a,b)|Jd(a,c));}else{g=a.bx.data;g[e]=g[e]&Kz(a,b);h=e+1|0;while(h<f){a.bx.data[h]=0;h=h+1|0;}g=a.bx.data;g[f]=g[f]&Jd(a,c);}H8(a);}
function EJ(a,b){var c;c=b/32|0;return c<a.bx.data.length&&a.bx.data[c]&1<<(b%32|0)?1:0;}
function IX(a,b){var c,d,e;if(b>=a.ci)return (-1);c=b/32|0;d=a.bx.data[c]>>>(b%32|0);if(d)return Jz(d)+b|0;d=(a.ci+31|0)/32|0;e=c+1|0;while(e<d){if(a.bx.data[e])return (e*32|0)+Jz(a.bx.data[e])|0;e=e+1|0;}return (-1);}
function AEq(a,b){var c,d,e;if(b>=a.ci)return b;c=b/32|0;d=(a.bx.data[c]^(-1))>>>(b%32|0);if(d)return Jz(d)+b|0;d=(a.ci+31|0)/32|0;e=c+1|0;while(e<d){if(a.bx.data[e]!=(-1))return (e*32|0)+Jz(a.bx.data[e]^(-1))|0;e=e+1|0;}return a.ci;}
function KF(a,b){var c,d,e,f;if(a.bx.data.length>=b)return;c=DB((b*3|0)/2|0,(a.bx.data.length*2|0)+1|0);d=a.bx.data;e=$rt_createIntArray(c);f=e.data;b=CB(c,d.length);c=0;while(c<b){f[c]=d[c];c=c+1|0;}a.bx=e;}
function H8(a){var b,c,d;b=(a.ci+31|0)/32|0;a.ci=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=Ts(a.bx.data[c]);if(d<32)break;c=c+(-1)|0;a.ci=a.ci-32|0;}a.ci=a.ci-d|0;}}
function AD6(a,b){var c,d;c=CB(a.bx.data.length,b.bx.data.length);d=0;while(d<c){if(a.bx.data[d]&b.bx.data[d])return 1;d=d+1|0;}return 0;}
function Eb(a,b){var c,d,e;c=CB(a.bx.data.length,b.bx.data.length);d=0;while(d<c){e=a.bx.data;e[d]=e[d]&b.bx.data[d];d=d+1|0;}while(c<a.bx.data.length){a.bx.data[c]=0;c=c+1|0;}a.ci=CB(a.ci,b.ci);H8(a);}
function GY(a,b){var c,d,e;c=CB(a.bx.data.length,b.bx.data.length);d=0;while(d<c){e=a.bx.data;e[d]=e[d]&(b.bx.data[d]^(-1));d=d+1|0;}H8(a);}
function Hp(a,b){var c,d,e;a.ci=DB(a.ci,b.ci);KF(a,(a.ci+31|0)/32|0);c=CB(a.bx.data.length,b.ci);d=0;while(d<c){e=a.bx.data;e[d]=e[d]|b.bx.data[d];d=d+1|0;}}
function Hb(a,b){var c,d,e;a.ci=DB(a.ci,b.ci);KF(a,(a.ci+31|0)/32|0);c=CB(a.bx.data.length,b.ci);d=0;while(d<c){e=a.bx.data;e[d]=e[d]^b.bx.data[d];d=d+1|0;}H8(a);}
function Ol(a){return a.ci?0:1;}
function OD(){var a=this;CE.call(a);a.zI=null;a.Hj=0;}
function A5E(a,b){a.r=b;}
function ABE(a,b,c,d){var e,f,g,h,i;e=d.fe;f=d.by;g=b+1|0;h=R(g,f);if(h>0){d.hl=1;return (-1);}i=Y(c,b);if(!a.zI.Y(i))return (-1);if(Dt(i)){if(h<0&&DP(Y(c,g)))return (-1);}else if(DP(i)&&b>e&&Dt(Y(c,b-1|0)))return (-1);return a.r.k(g,c,d);}
function P2(){var a=this;CE.call(a);a.vG=null;a.xJ=null;}
function AEm(a,b){var c=new P2();AHi(c,a,b);return c;}
function AHi(a,b,c){Cz(a);a.vG=b;a.xJ=c;}
function ATF(a,b,c,d){var e;e=a.vG.k(b,c,d);if(e<0)e=ABE(a.xJ,b,c,d);if(e>=0)return e;return (-1);}
function A8y(a,b){a.r=b;a.xJ.r=b;a.vG.b$(b);}
function AUd(a,b){return 1;}
function ATZ(a,b){return 1;}
function EO(){var a=this;CE.call(a);a.hZ=null;a.F9=0;}
function A6S(a){var b=new EO();V$(b,a);return b;}
function V$(a,b){Cz(a);a.hZ=b.sI();a.F9=b.cg;}
function A5o(a,b,c,d){var e,f,g;e=d.by;if(b<e){f=b+1|0;g=Y(c,b);if(a.Y(g)){b=a.r.k(f,c,d);if(b>0)return b;}if(f<e){b=f+1|0;f=Y(c,f);if(J3(g,f)&&a.Y(EI(g,f)))return a.r.k(b,c,d);}}return (-1);}
function AV8(a,b){return a.hZ.Y(b);}
function ATA(a,b){if(b instanceof EY)return a.hZ.Y(b.kv);if(b instanceof Fs)return a.hZ.Y(b.gs);if(b instanceof EO)return KC(a.hZ,b.hZ);if(!(b instanceof Fm))return 1;return KC(a.hZ,b.jY);}
function AXh(a){return a.hZ;}
function A91(a,b){a.r=b;}
function AVP(a,b){return 1;}
function MM(){EO.call(this);}
function AW7(a,b){return a.hZ.Y(GN(GM(b)));}
function Zt(){var a=this;CI.call(a);a.De=null;a.FV=0;}
function AWF(a){var b=new Zt();AYP(b,a);return b;}
function AYP(a,b){EM(a);a.De=b.sI();a.FV=b.cg;}
function A6W(a,b,c){return !a.De.Y(EU(FB(Y(c,b))))?(-1):1;}
function Fm(){var a=this;CI.call(a);a.jY=null;a.Gq=0;}
function A0$(a){var b=new Fm();AZE(b,a);return b;}
function AZE(a,b){EM(a);a.jY=b.sI();a.Gq=b.cg;}
function S1(a,b,c){return !a.jY.Y(Y(c,b))?(-1):1;}
function AZm(a,b){if(b instanceof Fs)return a.jY.Y(b.gs);if(b instanceof Fm)return KC(a.jY,b.jY);if(!(b instanceof EO)){if(!(b instanceof EY))return 1;return 0;}return KC(a.jY,b.hZ);}
function A8A(a){return a.jY;}
function T0(){var a=this;CE.call(a);a.jQ=null;a.x0=null;a.ov=0;}
function A$w(a,b){var c=new T0();A3s(c,a,b);return c;}
function A3s(a,b,c){Cz(a);a.jQ=b;a.ov=c;}
function AYa(a,b){a.r=b;}
function P5(a){if(a.x0===null)a.x0=AIa(a.jQ);return a.x0;}
function ASR(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=d.by;f=$rt_createIntArray(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=Y(c,b);k=j-44032|0;if(k>=0&&k<11172){b=4352+(k/588|0)|0;l=4449+((k%588|0)/28|0)|0;k=k%28|0;if(!k){m=$rt_createIntArray(2);n=m.data;n[0]=b;n[1]=l;}else{o=4519+k|0;m=$rt_createIntArray(3);n=m.data;n[0]=b;n[1]=l;n[2]=o;}}else m=null;if(m!==null){m=m.data;l=0;if(m.length!=a.ov)return (-1);while(true){if(l>=a.ov)return a.r.k(i,c,d);if(m[l]!=a.jQ.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]
=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=Y(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=Y(c,k);h=j-4519|0;}if(h>=0&&h<28){b=k+1|0;f[2]=j;return a.ov==3&&f[0]==a.jQ.data[0]&&f[1]==a.jQ.data[1]&&f[2]==a.jQ.data[2]?a.r.k(b,c,d):(-1);}return a.ov==2&&f[0]==a.jQ.data[0]&&f[1]==a.jQ.data[1]?a.r.k(k,c,d):(-1);}return (-1);}return (-1);}
function A4h(a,b){return b instanceof T0&&!DJ(P5(b),P5(a))?0:1;}
function A1f(a,b){return 1;}
function Fs(){CI.call(this);this.gs=0;}
function AAd(a){var b=new Fs();AZG(b,a);return b;}
function AZG(a,b){EM(a);a.gs=b;}
function A6O(a){return 1;}
function AWB(a,b,c){return a.gs!=Y(c,b)?(-1):1;}
function AVD(a,b,c,d){var e,f,g,h;if(!(c instanceof B4))return I$(a,b,c,d);e=c;f=d.by;while(true){if(b>=f)return (-1);g=Hg(e,a.gs,b);if(g<0)return (-1);h=a.r;b=g+1|0;if(h.k(b,c,d)>=0)break;}return g;}
function AXi(a,b,c,d,e){var f,g;if(!(d instanceof B4))return Jk(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=If(f,a.gs,c);if(g<0)break a;if(g<b)break a;if(a.r.k(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ATX(a){return a.gs;}
function A0_(a,b){if(b instanceof Fs)return b.gs!=a.gs?0:1;if(!(b instanceof Fm)){if(b instanceof EO)return b.Y(a.gs);if(!(b instanceof EY))return 1;return 0;}return S1(b,0,Sx(a.gs))<=0?0:1;}
function AGR(){CI.call(this);this.BL=0;}
function A9a(a){var b=new AGR();A7V(b,a);return b;}
function A7V(a,b){EM(a);a.BL=EU(FB(b));}
function A2U(a,b,c){return a.BL!=EU(FB(Y(c,b)))?(-1):1;}
function XL(){var a=this;CI.call(a);a.Bl=0;a.Ca=0;}
function A4y(a){var b=new XL();A0d(b,a);return b;}
function A0d(a,b){EM(a);a.Bl=b;a.Ca=Kb(b);}
function AS8(a,b,c){return a.Bl!=Y(c,b)&&a.Ca!=Y(c,b)?(-1):1;}
function GG(){var a=this;CE.call(a);a.pR=0;a.ue=null;a.tI=null;a.tG=0;}
function Bc0(a,b){var c=new GG();O_(c,a,b);return c;}
function O_(a,b,c){Cz(a);a.pR=1;a.tI=b;a.tG=c;}
function A_h(a,b){a.r=b;}
function AZa(a,b,c,d){var e,f,g,h,i,j,k,l;e=$rt_createIntArray(4);f=d.by;if(b>=f)return (-1);g=LG(a,b,c,f);h=b+a.pR|0;i=AQQ(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;Di(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=LG(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=AQQ(g).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.pR|0;if(h>=f){b=k;break a;}g=LG(a,h,c,f);b=k;}}}if(b!=a.tG)return (-1);i=e.data;g=0;while
(true){if(g>=b)return a.r.k(h,c,d);if(i[g]!=a.tI.data[g])break;g=g+1|0;}return (-1);}
function Sp(a){var b,c;if(a.ue===null){b=new U;X(b);c=0;while(c<a.tG){Hh(b,Iu(a.tI.data[c]));c=c+1|0;}a.ue=V(b);}return a.ue;}
function LG(a,b,c,d){var e,f,g;a.pR=1;if(b>=(d-1|0))e=Y(c,b);else{d=b+1|0;e=Y(c,b);f=Y(c,d);if(J3(e,f)){g=$rt_createCharArray(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&Dt(g[0])&&DP(g[1])?EI(g[0],g[1]):g[0];a.pR=2;}}return e;}
function AXw(a,b){return b instanceof GG&&!DJ(Sp(b),Sp(a))?0:1;}
function A88(a,b){return 1;}
function SD(){GG.call(this);}
function VZ(){GG.call(this);}
function SY(){DU.call(this);}
function A4P(a,b,c,d){var e;while(true){e=a.bP.k(b,c,d);if(e<=0)break;b=e;}return a.r.k(b,c,d);}
function Ut(){DU.call(this);}
function A7O(a,b,c,d){var e;e=a.bP.k(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.bP.k(e,c,d);if(b<=e)break;e=b;}b=e;}return a.r.k(b,c,d);}
function Ht(){DU.call(this);}
function A9Y(a,b,c,d){var e;if(!a.bP.b2(d))return a.r.k(b,c,d);e=a.bP.k(b,c,d);if(e>=0)return e;return a.r.k(b,c,d);}
function A$R(a,b){a.r=b;a.bP.b$(b);}
function PI(){Ht.call(this);}
function AXf(a,b,c,d){var e;e=a.bP.k(b,c,d);if(e<=0)e=b;return a.r.k(e,c,d);}
function A8b(a,b){a.r=b;}
function G5(){var a=this;DU.call(a);a.kA=null;a.hr=0;}
function Bmj(a,b,c,d,e){var f=new G5();ML(f,a,b,c,d,e);return f;}
function ML(a,b,c,d,e,f){Ee(a,c,d,e);a.kA=b;a.hr=f;}
function A_J(a,b,c,d){var e,f;e=Tb(d,a.hr);if(!a.bP.b2(d))return a.r.k(b,c,d);if(e>=a.kA.io)return a.r.k(b,c,d);f=a.hr;e=e+1|0;FE(d,f,e);f=a.bP.k(b,c,d);if(f>=0){FE(d,a.hr,0);return f;}f=a.hr;e=e+(-1)|0;FE(d,f,e);if(e>=a.kA.ja)return a.r.k(b,c,d);FE(d,a.hr,0);return (-1);}
function OP(){G5.call(this);}
function AWS(a,b,c,d){var e,f,g;e=0;f=a.kA.io;a:{while(true){g=a.bP.k(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.kA.ja)return (-1);return a.r.k(b,c,d);}
function Qq(){DU.call(this);}
function A1$(a,b,c,d){var e;if(!a.bP.b2(d))return a.r.k(b,c,d);e=a.r.k(b,c,d);if(e>=0)return e;return a.bP.k(b,c,d);}
function UM(){Ht.call(this);}
function AUf(a,b,c,d){var e;if(!a.bP.b2(d))return a.r.k(b,c,d);e=a.r.k(b,c,d);if(e<0)e=a.bP.k(b,c,d);return e;}
function RK(){G5.call(this);}
function A3D(a,b,c,d){var e,f;e=Tb(d,a.hr);if(!a.bP.b2(d))return a.r.k(b,c,d);if(e>=a.kA.io){FE(d,a.hr,0);return a.r.k(b,c,d);}if(e<a.kA.ja){FE(d,a.hr,e+1|0);f=a.bP.k(b,c,d);}else{f=a.r.k(b,c,d);if(f>=0){FE(d,a.hr,0);return f;}FE(d,a.hr,e+1|0);f=a.bP.k(b,c,d);}return f;}
function Qr(){E4.call(this);}
function A_B(a,b,c,d){var e;e=d.by;if(e>b)return a.r.eT(b,e,c,d);return a.r.k(b,c,d);}
function A0L(a,b,c,d){var e;e=d.by;if(a.r.eT(b,e,c,d)>=0)return b;return (-1);}
function TO(){E4.call(this);this.un=null;}
function AZn(a,b,c,d){var e,f;e=d.by;f=Wj(a,b,e,c);if(f>=0)e=f;if(e>b)return a.r.eT(b,e,c,d);return a.r.k(b,c,d);}
function ASU(a,b,c,d){var e,f,g,h;e=d.by;f=a.r.eG(b,c,d);if(f<0)return (-1);g=Wj(a,f,e,c);if(g>=0)e=g;g=a.r.eT(f,e,c,d);if(f<g)f=g;if(f<=0)h=f?(-1):0;else{h=f-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.un.os(Y(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=f?h:h+1|0;return b;}
function Wj(a,b,c,d){while(true){if(b>=c)return (-1);if(a.un.os(Y(d,b)))break;b=b+1|0;}return b;}
function Gh(){D.call(this);}
var Bmk=null;var Bml=null;function Ug(b){if(!(b&1)){if(Bml!==null)return Bml;Bml=new Wt;return Bml;}if(Bmk!==null)return Bmk;Bmk=new Ws;return Bmk;}
function Xr(){D6.call(this);}
function ATs(a,b,c,d){var e;a:{while(true){if((b+a.cK.d9()|0)>d.by)break a;e=a.cK.dl(b,c);if(e<1)break;b=b+e|0;}}return a.r.k(b,c,d);}
function Sh(){FS.call(this);}
function AYy(a,b,c,d){var e;if((b+a.cK.d9()|0)<=d.by){e=a.cK.dl(b,c);if(e>=1)b=b+e|0;}return a.r.k(b,c,d);}
function T_(){Gz.call(this);}
function A9F(a,b,c,d){var e,f,g,h,i;e=a.kU.ja;f=a.kU.io;g=0;while(true){if(g>=e){a:{while(true){if(g>=f)break a;if((b+a.cK.d9()|0)>d.by)break a;h=a.cK.dl(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}}return a.r.k(b,c,d);}if((b+a.cK.d9()|0)>d.by){d.hl=1;return (-1);}i=a.cK.dl(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function UK(){D6.call(this);}
function AZg(a,b,c,d){var e;while(true){e=a.r.k(b,c,d);if(e>=0)break;if((b+a.cK.d9()|0)<=d.by){e=a.cK.dl(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
function V1(){FS.call(this);}
function ATw(a,b,c,d){var e;e=a.r.k(b,c,d);if(e>=0)return e;return a.bP.k(b,c,d);}
function Qb(){Gz.call(this);}
function A9O(a,b,c,d){var e,f,g,h,i;e=a.kU.ja;f=a.kU.io;g=0;while(true){if(g>=e){a:{while(true){h=a.r.k(b,c,d);if(h>=0)break;if((b+a.cK.d9()|0)<=d.by){h=a.cK.dl(b,c);b=b+h|0;g=g+1|0;}if(h<1)break a;if(g>f)break a;}return h;}return (-1);}if((b+a.cK.d9()|0)>d.by){d.hl=1;return (-1);}i=a.cK.dl(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function ABI(){Co.call(this);}
function A1d(){var a=new ABI();AVg(a);return a;}
function AVg(a){Cz(a);}
function A7e(a,b,c,d){if(b&&!(d.lg&&b==d.fe))return (-1);return a.r.k(b,c,d);}
function A6H(a,b){return 0;}
function AAk(){Co.call(this);this.A$=0;}
function A$j(a){var b=new AAk();AXa(b,a);return b;}
function AXa(a,b){Cz(a);a.A$=b;}
function A3_(a,b,c,d){var e,f,g;e=b<d.by?Y(c,b):32;f=!b?32:Y(c,b-1|0);g=d.ob?0:d.fe;return (e!=32&&!UQ(a,e,b,g,c)?0:1)^(f!=32&&!UQ(a,f,b-1|0,g,c)?0:1)^a.A$?(-1):a.r.k(b,c,d);}
function A4f(a,b){return 0;}
function UQ(a,b,c,d,e){var f;if(!Lb(b)&&b!=95){a:{if(Do(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=Y(e,c);if(Lb(f))return 0;if(Do(f)!=6)return 1;}}return 1;}return 0;}
function AJo(){Co.call(this);}
function Bal(){var a=new AJo();A0F(a);return a;}
function A0F(a){Cz(a);}
function AW_(a,b,c,d){if(b!=d.kW)return (-1);return a.r.k(b,c,d);}
function A2v(a,b){return 0;}
function SA(){Co.call(this);this.l6=0;}
function Ba7(a){var b=new SA();AQx(b,a);return b;}
function AQx(a,b){Cz(a);a.l6=b;}
function A8Z(a,b,c,d){var e,f,g;e=!d.lg?Bh(c):d.by;if(b>=e){Cv(d,a.l6,0);return a.r.k(b,c,d);}f=e-b|0;if(f==2&&Y(c,b)==13&&Y(c,b+1|0)==10){Cv(d,a.l6,0);return a.r.k(b,c,d);}a:{if(f==1){g=Y(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}Cv(d,a.l6,0);return a.r.k(b,c,d);}
function A4H(a,b){var c;c=!Eo(b,a.l6)?0:1;Cv(b,a.l6,(-1));return c;}
function AQ5(){Co.call(this);}
function Bbd(){var a=new AQ5();AW1(a);return a;}
function AW1(a){Cz(a);}
function A8t(a,b,c,d){if(b<(d.ob?Bh(c):d.by))return (-1);d.hl=1;d.Jd=1;return a.r.k(b,c,d);}
function A2T(a,b){return 0;}
function AIN(){Co.call(this);this.DG=null;}
function BcJ(a){var b=new AIN();A81(b,a);return b;}
function A81(a,b){Cz(a);a.DG=b;}
function A4B(a,b,c,d){a:{if(b!=d.by){if(!b)break a;if(d.lg&&b==d.fe)break a;if(a.DG.D7(Y(c,b-1|0),Y(c,b)))break a;}return (-1);}return a.r.k(b,c,d);}
function AWj(a,b){return 0;}
function AGh(){CE.call(this);}
function Bbn(){var a=new AGh();A8j(a);return a;}
function A8j(a){Cz(a);}
function A2d(a,b,c,d){var e,f,g,h;e=d.by;f=b+1|0;if(f>e){d.hl=1;return (-1);}g=Y(c,b);if(Dt(g)){h=b+2|0;if(h<=e&&J3(g,Y(c,f)))return a.r.k(h,c,d);}return a.r.k(f,c,d);}
function A4k(a,b){a.r=b;}
function A8g(a){return (-2147483602);}
function A4i(a,b){return 1;}
function ZF(){CE.call(this);this.uL=null;}
function BaZ(a){var b=new ZF();AUN(b,a);return b;}
function AUN(a,b){Cz(a);a.uL=b;}
function A8o(a,b,c,d){var e,f,g,h;e=d.by;f=b+1|0;if(f>e){d.hl=1;return (-1);}g=Y(c,b);if(Dt(g)){b=b+2|0;if(b<=e){h=Y(c,f);if(J3(g,h))return a.uL.os(EI(g,h))?(-1):a.r.k(b,c,d);}}return a.uL.os(g)?(-1):a.r.k(f,c,d);}
function A9v(a,b){a.r=b;}
function ASF(a){return (-2147483602);}
function A2k(a,b){return 1;}
function AQI(){Co.call(this);this.pI=0;}
function BaK(a){var b=new AQI();A5V(b,a);return b;}
function A5V(a,b){Cz(a);a.pI=b;}
function AXD(a,b,c,d){var e;e=!d.lg?Bh(c):d.by;if(b>=e){Cv(d,a.pI,0);return a.r.k(b,c,d);}if((e-b|0)==1&&Y(c,b)==10){Cv(d,a.pI,1);return a.r.k(b+1|0,c,d);}return (-1);}
function A5R(a,b){var c;c=!Eo(b,a.pI)?0:1;Cv(b,a.pI,(-1));return c;}
function AN4(){Co.call(this);this.oj=0;}
function Bat(a){var b=new AN4();A6d(b,a);return b;}
function A6d(a,b){Cz(a);a.oj=b;}
function AY4(a,b,c,d){if((!d.lg?Bh(c)-b|0:d.by-b|0)<=0){Cv(d,a.oj,0);return a.r.k(b,c,d);}if(Y(c,b)!=10)return (-1);Cv(d,a.oj,1);return a.r.k(b+1|0,c,d);}
function A5N(a,b){var c;c=!Eo(b,a.oj)?0:1;Cv(b,a.oj,(-1));return c;}
function AIb(){Co.call(this);this.lB=0;}
function A_1(a){var b=new AIb();A_L(b,a);return b;}
function A_L(a,b){Cz(a);a.lB=b;}
function A6C(a,b,c,d){var e,f,g;e=!d.lg?Bh(c)-b|0:d.fe-b|0;if(!e){Cv(d,a.lB,0);return a.r.k(b,c,d);}if(e<2){f=Y(c,b);g=97;}else{f=Y(c,b);g=Y(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:Cv(d,a.lB,0);return a.r.k(b,c,d);case 13:if(g!=10){Cv(d,a.lB,0);return a.r.k(b,c,d);}Cv(d,a.lB,0);return a.r.k(b,c,d);default:}return (-1);}
function AUR(a,b){var c;c=!Eo(b,a.lB)?0:1;Cv(b,a.lB,(-1));return c;}
function IN(){var a=this;CE.call(a);a.yW=0;a.mB=0;}
function BcW(a,b){var c=new IN();Px(c,a,b);return c;}
function Px(a,b,c){Cz(a);a.yW=b;a.mB=c;}
function ATt(a,b,c,d){var e,f,g,h;e=HE(a,d);if(e!==null&&(b+Bh(e)|0)<=d.by){f=0;while(true){if(f>=Bh(e)){Cv(d,a.mB,Bh(e));return a.r.k(b+Bh(e)|0,c,d);}g=Y(e,f);h=b+f|0;if(g!=Y(c,h)&&Kb(Y(e,f))!=Y(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function A84(a,b){a.r=b;}
function HE(a,b){return AM3(b,a.yW);}
function AZ_(a,b){var c;c=!Eo(b,a.mB)?0:1;Cv(b,a.mB,(-1));return c;}
function AQT(){IN.call(this);}
function BbC(a,b){var c=new AQT();A$K(c,a,b);return c;}
function A$K(a,b,c){Px(a,b,c);}
function AUY(a,b,c,d){var e,f;e=HE(a,d);if(e!==null&&(b+Bh(e)|0)<=d.by){f=!V9(c,e,b)?(-1):Bh(e);if(f<0)return (-1);Cv(d,a.mB,f);return a.r.k(b+f|0,c,d);}return (-1);}
function A1l(a,b,c,d){var e,f,g;e=HE(a,d);f=d.fe;if(e!==null&&(b+Bh(e)|0)<=f){g=c;while(true){if(b>f)return (-1);b=AKF(g,e,b);if(b<0)return (-1);if(a.r.k(b+Bh(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function ATl(a,b,c,d,e){var f,g,h;f=HE(a,e);if(f===null)return (-1);g=d;a:{while(true){if(c<b)return (-1);h=AAu(g,f,c);if(h<0)break a;if(h<b)break a;if(a.r.k(h+Bh(f)|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function A7I(a,b){return 1;}
function AMb(){IN.call(this);}
function Bas(a,b){var c=new AMb();AWd(c,a,b);return c;}
function AWd(a,b,c){Px(a,b,c);}
function AX6(a,b,c,d){var e,f;e=HE(a,d);if(e!==null&&(b+Bh(e)|0)<=d.by){f=0;while(true){if(f>=Bh(e)){Cv(d,a.mB,Bh(e));return a.r.k(b+Bh(e)|0,c,d);}if(EU(FB(Y(e,f)))!=EU(FB(Y(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
function AMP(){var a=this;CI.call(a);a.e1=null;a.wW=null;a.uX=null;}
function Bav(a){var b=new AMP();A40(b,a);return b;}
function A40(a,b){var c;EM(a);a.e1=V(b);a.dj=Os(b);a.wW=A8f(a.dj);a.uX=A8f(a.dj);c=0;while(c<(a.dj-1|0)){Qd(a.wW,Y(a.e1,c),(a.dj-c|0)-1|0);Qd(a.uX,Y(a.e1,(a.dj-c|0)-1|0),(a.dj-c|0)-1|0);c=c+1|0;}}
function AVc(a,b,c){return !LD(a,c,b)?(-1):a.dj;}
function A3$(a,b,c,d){var e,f;e=d.by;while(true){if(b>e)return (-1);f=AQ8(a,c,b,e);if(f<0)return (-1);if(a.r.k(f+a.dj|0,c,d)>=0)break;b=f+1|0;}return f;}
function A5Y(a,b,c,d,e){while(true){if(c<b)return (-1);c=AQv(a,d,b,c);if(c<0)return (-1);if(a.r.k(c+a.dj|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AWL(a,b){var c;if(b instanceof Fs)return b.gs!=Y(a.e1,0)?0:1;if(b instanceof Fm)return S1(b,0,Eu(a.e1,0,1))<=0?0:1;if(!(b instanceof EO)){if(!(b instanceof EY))return 1;return Bh(a.e1)>1&&b.kv==EI(Y(a.e1,0),Y(a.e1,1))?1:0;}a:{b:{b=b;if(!b.Y(Y(a.e1,0))){if(Bh(a.e1)<=1)break b;if(!b.Y(EI(Y(a.e1,0),Y(a.e1,1))))break b;}c=1;break a;}c=0;}return c;}
function AQ8(a,b,c,d){var e,f;e=Y(a.e1,a.dj-1|0);while(true){if(c>(d-a.dj|0))return (-1);f=Y(b,(c+a.dj|0)-1|0);if(f==e&&LD(a,b,c))break;c=c+Vy(a.wW,f)|0;}return c;}
function AQv(a,b,c,d){var e,f,g;e=Y(a.e1,0);f=(Bh(b)-d|0)-a.dj|0;if(f<=0)d=d+f|0;while(true){if(d<c)return (-1);g=Y(b,d);if(g==e&&LD(a,b,d))break;d=d-Vy(a.uX,g)|0;}return d;}
function LD(a,b,c){var d;d=0;while(d<a.dj){if(Y(b,d+c|0)!=Y(a.e1,d))return 0;d=d+1|0;}return 1;}
function XC(){CI.call(this);this.sE=null;}
function BcX(a){var b=new XC();A$m(b,a);return b;}
function A$m(a,b){var c,d;EM(a);c=new U;X(c);d=0;while(d<Os(b)){Dx(c,EU(FB(AId(b,d))));d=d+1|0;}a.sE=V(c);a.dj=J9(c);}
function AX9(a,b,c){var d;d=0;while(true){if(d>=Bh(a.sE))return Bh(a.sE);if(Y(a.sE,d)!=EU(FB(Y(c,b+d|0))))break;d=d+1|0;}return (-1);}
function OS(){CI.call(this);this.pG=null;}
function A9H(a,b,c){var d,e,f;d=0;while(true){if(d>=Bh(a.pG))return Bh(a.pG);e=Y(a.pG,d);f=b+d|0;if(e!=Y(c,f)&&Kb(Y(a.pG,d))!=Y(c,f))break;d=d+1|0;}return (-1);}
function H6(){D.call(this);}
var Bmm=null;var Bmn=null;var Bmo=null;function Bmp(){var a=new H6();AF8(a);return a;}
function AF8(a){return;}
function ARr(a,b){var c,d,e;c=0;while(true){if(c>=Bmo.data.length){d=new MN;Bl(d,B(3));d.G4=B(3);d.Jn=b;M(d);}e=Bmo.data[c].data;if(DJ(b,e[0]))break;c=c+1|0;}return e[1];}
function AAm(){var b,c,d,e;Bmm=Bba();Bmn=Bcc();b=J($rt_arraycls(D),194);c=b.data;d=J(D,2);e=d.data;e[0]=B(635);e[1]=Bbq();c[0]=d;d=J(D,2);e=d.data;e[0]=B(636);e[1]=A_X();c[1]=d;d=J(D,2);e=d.data;e[0]=B(637);e[1]=BcH();c[2]=d;d=J(D,2);e=d.data;e[0]=B(638);e[1]=BcP();c[3]=d;d=J(D,2);e=d.data;e[0]=B(639);e[1]=Bmn;c[4]=d;d=J(D,2);e=d.data;e[0]=B(640);e[1]=Bci();c[5]=d;d=J(D,2);e=d.data;e[0]=B(641);e[1]=Bay();c[6]=d;d=J(D,2);e=d.data;e[0]=B(642);e[1]=BbE();c[7]=d;d=J(D,2);e=d.data;e[0]=B(643);e[1]=BbB();c[8]=d;d
=J(D,2);e=d.data;e[0]=B(644);e[1]=A__();c[9]=d;d=J(D,2);e=d.data;e[0]=B(645);e[1]=Ban();c[10]=d;d=J(D,2);e=d.data;e[0]=B(646);e[1]=BbG();c[11]=d;d=J(D,2);e=d.data;e[0]=B(647);e[1]=BaU();c[12]=d;d=J(D,2);e=d.data;e[0]=B(648);e[1]=A_V();c[13]=d;d=J(D,2);e=d.data;e[0]=B(649);e[1]=BcL();c[14]=d;d=J(D,2);e=d.data;e[0]=B(650);e[1]=Bam();c[15]=d;d=J(D,2);e=d.data;e[0]=B(651);e[1]=Bcg();c[16]=d;d=J(D,2);e=d.data;e[0]=B(652);e[1]=BbW();c[17]=d;d=J(D,2);e=d.data;e[0]=B(653);e[1]=Bch();c[18]=d;d=J(D,2);e=d.data;e[0]=B(654);e[1]
=Bac();c[19]=d;d=J(D,2);e=d.data;e[0]=B(655);e[1]=BcQ();c[20]=d;d=J(D,2);e=d.data;e[0]=B(656);e[1]=BbS();c[21]=d;d=J(D,2);e=d.data;e[0]=B(657);e[1]=BaM();c[22]=d;d=J(D,2);e=d.data;e[0]=B(658);e[1]=BcG();c[23]=d;d=J(D,2);e=d.data;e[0]=B(659);e[1]=BcD();c[24]=d;d=J(D,2);e=d.data;e[0]=B(660);e[1]=Bbm();c[25]=d;d=J(D,2);e=d.data;e[0]=B(661);e[1]=Bab();c[26]=d;d=J(D,2);e=d.data;e[0]=B(662);e[1]=Bcw();c[27]=d;d=J(D,2);e=d.data;e[0]=B(663);e[1]=Bmm;c[28]=d;d=J(D,2);e=d.data;e[0]=B(664);e[1]=BaO();c[29]=d;d=J(D,2);e
=d.data;e[0]=B(44);e[1]=BbF();c[30]=d;d=J(D,2);e=d.data;e[0]=B(665);e[1]=Bmm;c[31]=d;d=J(D,2);e=d.data;e[0]=B(58);e[1]=A_U();c[32]=d;d=J(D,2);e=d.data;e[0]=B(666);e[1]=Bmn;c[33]=d;d=J(D,2);e=d.data;e[0]=B(59);e[1]=Bar();c[34]=d;d=J(D,2);e=d.data;e[0]=B(667);e[1]=T(0,127);c[35]=d;d=J(D,2);e=d.data;e[0]=B(668);e[1]=T(128,255);c[36]=d;d=J(D,2);e=d.data;e[0]=B(669);e[1]=T(256,383);c[37]=d;d=J(D,2);e=d.data;e[0]=B(670);e[1]=T(384,591);c[38]=d;d=J(D,2);e=d.data;e[0]=B(671);e[1]=T(592,687);c[39]=d;d=J(D,2);e=d.data;e[0]
=B(672);e[1]=T(688,767);c[40]=d;d=J(D,2);e=d.data;e[0]=B(673);e[1]=T(768,879);c[41]=d;d=J(D,2);e=d.data;e[0]=B(674);e[1]=T(880,1023);c[42]=d;d=J(D,2);e=d.data;e[0]=B(675);e[1]=T(1024,1279);c[43]=d;d=J(D,2);e=d.data;e[0]=B(676);e[1]=T(1280,1327);c[44]=d;d=J(D,2);e=d.data;e[0]=B(677);e[1]=T(1328,1423);c[45]=d;d=J(D,2);e=d.data;e[0]=B(678);e[1]=T(1424,1535);c[46]=d;d=J(D,2);e=d.data;e[0]=B(679);e[1]=T(1536,1791);c[47]=d;d=J(D,2);e=d.data;e[0]=B(680);e[1]=T(1792,1871);c[48]=d;d=J(D,2);e=d.data;e[0]=B(681);e[1]=
T(1872,1919);c[49]=d;d=J(D,2);e=d.data;e[0]=B(682);e[1]=T(1920,1983);c[50]=d;d=J(D,2);e=d.data;e[0]=B(683);e[1]=T(2304,2431);c[51]=d;d=J(D,2);e=d.data;e[0]=B(684);e[1]=T(2432,2559);c[52]=d;d=J(D,2);e=d.data;e[0]=B(685);e[1]=T(2560,2687);c[53]=d;d=J(D,2);e=d.data;e[0]=B(686);e[1]=T(2688,2815);c[54]=d;d=J(D,2);e=d.data;e[0]=B(687);e[1]=T(2816,2943);c[55]=d;d=J(D,2);e=d.data;e[0]=B(688);e[1]=T(2944,3071);c[56]=d;d=J(D,2);e=d.data;e[0]=B(689);e[1]=T(3072,3199);c[57]=d;d=J(D,2);e=d.data;e[0]=B(690);e[1]=T(3200,3327);c[58]
=d;d=J(D,2);e=d.data;e[0]=B(691);e[1]=T(3328,3455);c[59]=d;d=J(D,2);e=d.data;e[0]=B(692);e[1]=T(3456,3583);c[60]=d;d=J(D,2);e=d.data;e[0]=B(693);e[1]=T(3584,3711);c[61]=d;d=J(D,2);e=d.data;e[0]=B(694);e[1]=T(3712,3839);c[62]=d;d=J(D,2);e=d.data;e[0]=B(695);e[1]=T(3840,4095);c[63]=d;d=J(D,2);e=d.data;e[0]=B(696);e[1]=T(4096,4255);c[64]=d;d=J(D,2);e=d.data;e[0]=B(697);e[1]=T(4256,4351);c[65]=d;d=J(D,2);e=d.data;e[0]=B(698);e[1]=T(4352,4607);c[66]=d;d=J(D,2);e=d.data;e[0]=B(699);e[1]=T(4608,4991);c[67]=d;d=J(D,
2);e=d.data;e[0]=B(700);e[1]=T(4992,5023);c[68]=d;d=J(D,2);e=d.data;e[0]=B(701);e[1]=T(5024,5119);c[69]=d;d=J(D,2);e=d.data;e[0]=B(702);e[1]=T(5120,5759);c[70]=d;d=J(D,2);e=d.data;e[0]=B(703);e[1]=T(5760,5791);c[71]=d;d=J(D,2);e=d.data;e[0]=B(704);e[1]=T(5792,5887);c[72]=d;d=J(D,2);e=d.data;e[0]=B(705);e[1]=T(5888,5919);c[73]=d;d=J(D,2);e=d.data;e[0]=B(706);e[1]=T(5920,5951);c[74]=d;d=J(D,2);e=d.data;e[0]=B(707);e[1]=T(5952,5983);c[75]=d;d=J(D,2);e=d.data;e[0]=B(708);e[1]=T(5984,6015);c[76]=d;d=J(D,2);e=d.data;e[0]
=B(709);e[1]=T(6016,6143);c[77]=d;d=J(D,2);e=d.data;e[0]=B(710);e[1]=T(6144,6319);c[78]=d;d=J(D,2);e=d.data;e[0]=B(711);e[1]=T(6400,6479);c[79]=d;d=J(D,2);e=d.data;e[0]=B(712);e[1]=T(6480,6527);c[80]=d;d=J(D,2);e=d.data;e[0]=B(713);e[1]=T(6528,6623);c[81]=d;d=J(D,2);e=d.data;e[0]=B(714);e[1]=T(6624,6655);c[82]=d;d=J(D,2);e=d.data;e[0]=B(715);e[1]=T(6656,6687);c[83]=d;d=J(D,2);e=d.data;e[0]=B(716);e[1]=T(7424,7551);c[84]=d;d=J(D,2);e=d.data;e[0]=B(717);e[1]=T(7552,7615);c[85]=d;d=J(D,2);e=d.data;e[0]=B(718);e[1]
=T(7616,7679);c[86]=d;d=J(D,2);e=d.data;e[0]=B(719);e[1]=T(7680,7935);c[87]=d;d=J(D,2);e=d.data;e[0]=B(720);e[1]=T(7936,8191);c[88]=d;d=J(D,2);e=d.data;e[0]=B(721);e[1]=T(8192,8303);c[89]=d;d=J(D,2);e=d.data;e[0]=B(722);e[1]=T(8304,8351);c[90]=d;d=J(D,2);e=d.data;e[0]=B(723);e[1]=T(8352,8399);c[91]=d;d=J(D,2);e=d.data;e[0]=B(724);e[1]=T(8400,8447);c[92]=d;d=J(D,2);e=d.data;e[0]=B(725);e[1]=T(8448,8527);c[93]=d;d=J(D,2);e=d.data;e[0]=B(726);e[1]=T(8528,8591);c[94]=d;d=J(D,2);e=d.data;e[0]=B(727);e[1]=T(8592,
8703);c[95]=d;d=J(D,2);e=d.data;e[0]=B(728);e[1]=T(8704,8959);c[96]=d;d=J(D,2);e=d.data;e[0]=B(729);e[1]=T(8960,9215);c[97]=d;d=J(D,2);e=d.data;e[0]=B(730);e[1]=T(9216,9279);c[98]=d;d=J(D,2);e=d.data;e[0]=B(731);e[1]=T(9280,9311);c[99]=d;d=J(D,2);e=d.data;e[0]=B(732);e[1]=T(9312,9471);c[100]=d;d=J(D,2);e=d.data;e[0]=B(733);e[1]=T(9472,9599);c[101]=d;d=J(D,2);e=d.data;e[0]=B(734);e[1]=T(9600,9631);c[102]=d;d=J(D,2);e=d.data;e[0]=B(735);e[1]=T(9632,9727);c[103]=d;d=J(D,2);e=d.data;e[0]=B(736);e[1]=T(9728,9983);c[104]
=d;d=J(D,2);e=d.data;e[0]=B(737);e[1]=T(9984,10175);c[105]=d;d=J(D,2);e=d.data;e[0]=B(738);e[1]=T(10176,10223);c[106]=d;d=J(D,2);e=d.data;e[0]=B(739);e[1]=T(10224,10239);c[107]=d;d=J(D,2);e=d.data;e[0]=B(740);e[1]=T(10240,10495);c[108]=d;d=J(D,2);e=d.data;e[0]=B(741);e[1]=T(10496,10623);c[109]=d;d=J(D,2);e=d.data;e[0]=B(742);e[1]=T(10624,10751);c[110]=d;d=J(D,2);e=d.data;e[0]=B(743);e[1]=T(10752,11007);c[111]=d;d=J(D,2);e=d.data;e[0]=B(744);e[1]=T(11008,11263);c[112]=d;d=J(D,2);e=d.data;e[0]=B(745);e[1]=T(11264,
11359);c[113]=d;d=J(D,2);e=d.data;e[0]=B(746);e[1]=T(11392,11519);c[114]=d;d=J(D,2);e=d.data;e[0]=B(747);e[1]=T(11520,11567);c[115]=d;d=J(D,2);e=d.data;e[0]=B(748);e[1]=T(11568,11647);c[116]=d;d=J(D,2);e=d.data;e[0]=B(749);e[1]=T(11648,11743);c[117]=d;d=J(D,2);e=d.data;e[0]=B(750);e[1]=T(11776,11903);c[118]=d;d=J(D,2);e=d.data;e[0]=B(751);e[1]=T(11904,12031);c[119]=d;d=J(D,2);e=d.data;e[0]=B(752);e[1]=T(12032,12255);c[120]=d;d=J(D,2);e=d.data;e[0]=B(753);e[1]=T(12272,12287);c[121]=d;d=J(D,2);e=d.data;e[0]=B(754);e[1]
=T(12288,12351);c[122]=d;d=J(D,2);e=d.data;e[0]=B(755);e[1]=T(12352,12447);c[123]=d;d=J(D,2);e=d.data;e[0]=B(756);e[1]=T(12448,12543);c[124]=d;d=J(D,2);e=d.data;e[0]=B(757);e[1]=T(12544,12591);c[125]=d;d=J(D,2);e=d.data;e[0]=B(758);e[1]=T(12592,12687);c[126]=d;d=J(D,2);e=d.data;e[0]=B(759);e[1]=T(12688,12703);c[127]=d;d=J(D,2);e=d.data;e[0]=B(760);e[1]=T(12704,12735);c[128]=d;d=J(D,2);e=d.data;e[0]=B(761);e[1]=T(12736,12783);c[129]=d;d=J(D,2);e=d.data;e[0]=B(762);e[1]=T(12784,12799);c[130]=d;d=J(D,2);e=d.data;e[0]
=B(763);e[1]=T(12800,13055);c[131]=d;d=J(D,2);e=d.data;e[0]=B(764);e[1]=T(13056,13311);c[132]=d;d=J(D,2);e=d.data;e[0]=B(765);e[1]=T(13312,19893);c[133]=d;d=J(D,2);e=d.data;e[0]=B(766);e[1]=T(19904,19967);c[134]=d;d=J(D,2);e=d.data;e[0]=B(767);e[1]=T(19968,40959);c[135]=d;d=J(D,2);e=d.data;e[0]=B(768);e[1]=T(40960,42127);c[136]=d;d=J(D,2);e=d.data;e[0]=B(769);e[1]=T(42128,42191);c[137]=d;d=J(D,2);e=d.data;e[0]=B(770);e[1]=T(42752,42783);c[138]=d;d=J(D,2);e=d.data;e[0]=B(771);e[1]=T(43008,43055);c[139]=d;d=J(D,
2);e=d.data;e[0]=B(772);e[1]=T(44032,55203);c[140]=d;d=J(D,2);e=d.data;e[0]=B(773);e[1]=T(55296,56191);c[141]=d;d=J(D,2);e=d.data;e[0]=B(774);e[1]=T(56192,56319);c[142]=d;d=J(D,2);e=d.data;e[0]=B(775);e[1]=T(56320,57343);c[143]=d;d=J(D,2);e=d.data;e[0]=B(776);e[1]=T(57344,63743);c[144]=d;d=J(D,2);e=d.data;e[0]=B(777);e[1]=T(63744,64255);c[145]=d;d=J(D,2);e=d.data;e[0]=B(778);e[1]=T(64256,64335);c[146]=d;d=J(D,2);e=d.data;e[0]=B(779);e[1]=T(64336,65023);c[147]=d;d=J(D,2);e=d.data;e[0]=B(780);e[1]=T(65024,65039);c[148]
=d;d=J(D,2);e=d.data;e[0]=B(781);e[1]=T(65040,65055);c[149]=d;d=J(D,2);e=d.data;e[0]=B(782);e[1]=T(65056,65071);c[150]=d;d=J(D,2);e=d.data;e[0]=B(783);e[1]=T(65072,65103);c[151]=d;d=J(D,2);e=d.data;e[0]=B(784);e[1]=T(65104,65135);c[152]=d;d=J(D,2);e=d.data;e[0]=B(785);e[1]=T(65136,65279);c[153]=d;d=J(D,2);e=d.data;e[0]=B(786);e[1]=T(65280,65519);c[154]=d;d=J(D,2);e=d.data;e[0]=B(787);e[1]=T(0,1114111);c[155]=d;d=J(D,2);e=d.data;e[0]=B(788);e[1]=BbH();c[156]=d;d=J(D,2);e=d.data;e[0]=B(789);e[1]=CA(0,1);c[157]
=d;d=J(D,2);e=d.data;e[0]=B(790);e[1]=KS(62,1);c[158]=d;d=J(D,2);e=d.data;e[0]=B(791);e[1]=CA(1,1);c[159]=d;d=J(D,2);e=d.data;e[0]=B(792);e[1]=CA(2,1);c[160]=d;d=J(D,2);e=d.data;e[0]=B(793);e[1]=CA(3,0);c[161]=d;d=J(D,2);e=d.data;e[0]=B(794);e[1]=CA(4,0);c[162]=d;d=J(D,2);e=d.data;e[0]=B(795);e[1]=CA(5,1);c[163]=d;d=J(D,2);e=d.data;e[0]=B(796);e[1]=KS(448,1);c[164]=d;d=J(D,2);e=d.data;e[0]=B(797);e[1]=CA(6,1);c[165]=d;d=J(D,2);e=d.data;e[0]=B(798);e[1]=CA(7,0);c[166]=d;d=J(D,2);e=d.data;e[0]=B(799);e[1]=CA(8,
1);c[167]=d;d=J(D,2);e=d.data;e[0]=B(76);e[1]=KS(3584,1);c[168]=d;d=J(D,2);e=d.data;e[0]=B(800);e[1]=CA(9,1);c[169]=d;d=J(D,2);e=d.data;e[0]=B(801);e[1]=CA(10,1);c[170]=d;d=J(D,2);e=d.data;e[0]=B(802);e[1]=CA(11,1);c[171]=d;d=J(D,2);e=d.data;e[0]=B(803);e[1]=KS(28672,0);c[172]=d;d=J(D,2);e=d.data;e[0]=B(804);e[1]=CA(12,0);c[173]=d;d=J(D,2);e=d.data;e[0]=B(805);e[1]=CA(13,0);c[174]=d;d=J(D,2);e=d.data;e[0]=B(806);e[1]=CA(14,0);c[175]=d;d=J(D,2);e=d.data;e[0]=B(807);e[1]=Bb8(983040,1,1);c[176]=d;d=J(D,2);e=d.data;e[0]
=B(808);e[1]=CA(15,0);c[177]=d;d=J(D,2);e=d.data;e[0]=B(809);e[1]=CA(16,1);c[178]=d;d=J(D,2);e=d.data;e[0]=B(810);e[1]=CA(18,1);c[179]=d;d=J(D,2);e=d.data;e[0]=B(811);e[1]=BaH(19,0,1);c[180]=d;d=J(D,2);e=d.data;e[0]=B(812);e[1]=KS(1643118592,1);c[181]=d;d=J(D,2);e=d.data;e[0]=B(813);e[1]=CA(20,0);c[182]=d;d=J(D,2);e=d.data;e[0]=B(814);e[1]=CA(21,0);c[183]=d;d=J(D,2);e=d.data;e[0]=B(815);e[1]=CA(22,0);c[184]=d;d=J(D,2);e=d.data;e[0]=B(816);e[1]=CA(23,0);c[185]=d;d=J(D,2);e=d.data;e[0]=B(817);e[1]=CA(24,1);c[186]
=d;d=J(D,2);e=d.data;e[0]=B(818);e[1]=KS(2113929216,1);c[187]=d;d=J(D,2);e=d.data;e[0]=B(819);e[1]=CA(25,1);c[188]=d;d=J(D,2);e=d.data;e[0]=B(820);e[1]=CA(26,0);c[189]=d;d=J(D,2);e=d.data;e[0]=B(821);e[1]=CA(27,0);c[190]=d;d=J(D,2);e=d.data;e[0]=B(822);e[1]=CA(28,1);c[191]=d;d=J(D,2);e=d.data;e[0]=B(823);e[1]=CA(29,0);c[192]=d;d=J(D,2);e=d.data;e[0]=B(824);e[1]=CA(30,0);c[193]=d;Bmo=b;}
function By(){var a=this;D.call(a);a.vi=null;a.uq=null;}
function APO(a,b){if(!b&&a.vi===null)a.vi=a.bV();else if(b&&a.uq===null)a.uq=Fv(a.bV(),1);if(b)return a.uq;return a.vi;}
function S4(){CI.call(this);this.z2=0;}
function A0t(a,b,c){var d,e;d=b+1|0;e=Y(c,b);d=Y(c,d);return a.z2!=GN(GM(EI(e,d)))?(-1):2;}
function NG(){CE.call(this);this.mm=0;}
function AYS(a){var b=new NG();AUm(b,a);return b;}
function AUm(a,b){Cz(a);a.mm=b;}
function A8G(a,b){a.r=b;}
function A4I(a,b,c,d){var e,f;e=b+1|0;if(e>d.by){d.hl=1;return (-1);}f=Y(c,b);if(b>d.fe&&Dt(Y(c,b-1|0)))return (-1);if(a.mm!=f)return (-1);return a.r.k(e,c,d);}
function AWK(a,b,c,d){var e,f,g,h,i;if(!(c instanceof B4))return I$(a,b,c,d);e=c;f=d.fe;g=d.by;while(true){if(b>=g)return (-1);h=Hg(e,a.mm,b);if(h<0)return (-1);if(h>f&&Dt(Y(e,h-1|0))){b=h+1|0;continue;}i=a.r;b=h+1|0;if(i.k(b,c,d)>=0)break;}return h;}
function A48(a,b,c,d,e){var f,g;if(!(d instanceof B4))return Jk(a,b,c,d,e);f=e.fe;g=d;a:{while(true){if(c<b)return (-1);c=If(g,a.mm,c);if(c<0)break a;if(c<b)break a;if(c>f&&Dt(Y(g,c-1|0))){c=c+(-2)|0;continue;}if(a.r.k(c+1|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function ATg(a,b){if(b instanceof Fs)return 0;if(b instanceof Fm)return 0;if(b instanceof EO)return 0;if(b instanceof EY)return 0;if(b instanceof NL)return 0;if(!(b instanceof NG))return 1;return b.mm!=a.mm?0:1;}
function A02(a,b){return 1;}
function NL(){CE.call(this);this.lV=0;}
function A6D(a){var b=new NL();AY0(b,a);return b;}
function AY0(a,b){Cz(a);a.lV=b;}
function A4s(a,b){a.r=b;}
function ASW(a,b,c,d){var e,f,g,h;e=d.by;f=b+1|0;g=R(f,e);if(g>0){d.hl=1;return (-1);}h=Y(c,b);if(g<0&&DP(Y(c,f)))return (-1);if(a.lV!=h)return (-1);return a.r.k(f,c,d);}
function A8R(a,b,c,d){var e,f,g;if(!(c instanceof B4))return I$(a,b,c,d);e=c;f=d.by;while(true){if(b>=f)return (-1);g=Hg(e,a.lV,b);if(g<0)return (-1);b=g+1|0;if(b<f&&DP(Y(e,b))){b=g+2|0;continue;}if(a.r.k(b,c,d)>=0)break;}return g;}
function A0r(a,b,c,d,e){var f,g,h;if(!(d instanceof B4))return Jk(a,b,c,d,e);f=d;g=e.by;a:{while(true){if(c<b)return (-1);c=If(f,a.lV,c);if(c<0)break a;if(c<b)break a;h=c+1|0;if(h<g&&DP(Y(f,h))){c=c+(-1)|0;continue;}if(a.r.k(h,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function AVd(a,b){if(b instanceof Fs)return 0;if(b instanceof Fm)return 0;if(b instanceof EO)return 0;if(b instanceof EY)return 0;if(b instanceof NG)return 0;if(!(b instanceof NL))return 1;return b.lV!=a.lV?0:1;}
function A8T(a,b){return 1;}
function EY(){var a=this;CI.call(a);a.tv=0;a.r$=0;a.kv=0;}
function A9m(a,b,c){var d,e;d=b+1|0;e=Y(c,b);d=Y(c,d);return a.tv==e&&a.r$==d?2:(-1);}
function A74(a,b,c,d){var e,f,g;if(!(c instanceof B4))return I$(a,b,c,d);e=c;f=d.by;while(b<f){b=Hg(e,a.tv,b);if(b<0)return (-1);b=b+1|0;if(b>=f)continue;g=Y(e,b);if(a.r$==g&&a.r.k(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AUn(a,b,c,d,e){var f;if(!(d instanceof B4))return Jk(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);c=If(f,a.r$,c)+(-1)|0;if(c<0)break a;if(c<b)break a;if(a.tv==Y(f,c)&&a.r.k(c+2|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function A3b(a){return a.kv;}
function A9d(a,b){if(b instanceof EY)return b.kv!=a.kv?0:1;if(b instanceof EO)return b.Y(a.kv);if(b instanceof Fs)return 0;if(!(b instanceof Fm))return 1;return 0;}
function Ws(){Gh.call(this);}
function Bmq(){var a=new Ws();A36(a);return a;}
function A36(a){return;}
function AUw(a,b){return b!=10?0:1;}
function AZ8(a,b,c){return b!=10?0:1;}
function Wt(){Gh.call(this);}
function Bmr(){var a=new Wt();AWI(a);return a;}
function AWI(a){return;}
function A9Q(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function A1Z(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AEN(){var a=this;D.call(a);a.oU=null;a.tL=null;a.f$=0;a.Bv=0;}
function A8f(a){var b=new AEN();AW$(b,a);return b;}
function AW$(a,b){while(b>=a.f$){a.f$=a.f$<<1|1;}a.f$=a.f$<<1|1;a.oU=$rt_createIntArray(a.f$+1|0);a.tL=$rt_createIntArray(a.f$+1|0);a.Bv=b;}
function Qd(a,b,c){var d,e;d=0;e=b&a.f$;while(a.oU.data[e]&&a.oU.data[e]!=b){d=(d+1|0)&a.f$;e=(e+d|0)&a.f$;}a.oU.data[e]=b;a.tL.data[e]=c;}
function Vy(a,b){var c,d,e;c=b&a.f$;d=0;while(true){e=a.oU.data[c];if(!e)break;if(e==b)return a.tL.data[c];d=(d+1|0)&a.f$;c=(c+d|0)&a.f$;}return a.Bv;}
function Ys(){D.call(this);}
function NE(){By.call(this);}
function Bba(){var a=new NE();AWT(a);return a;}
function AWT(a){return;}
function AMk(a){return Dp(CG(Ep(),9,13),32);}
function M8(){By.call(this);}
function Bcc(){var a=new M8();A0S(a);return a;}
function A0S(a){return;}
function ANL(a){return CG(Ep(),48,57);}
function AEF(){By.call(this);}
function Bbq(){var a=new AEF();AWq(a);return a;}
function AWq(a){return;}
function A9x(a){return CG(Ep(),97,122);}
function AFj(){By.call(this);}
function A_X(){var a=new AFj();AXc(a);return a;}
function AXc(a){return;}
function A04(a){return CG(Ep(),65,90);}
function AFs(){By.call(this);}
function BcH(){var a=new AFs();ATR(a);return a;}
function ATR(a){return;}
function AVF(a){return CG(Ep(),0,127);}
function NA(){By.call(this);}
function BcP(){var a=new NA();AUZ(a);return a;}
function AUZ(a){return;}
function ZL(a){return CG(CG(Ep(),97,122),65,90);}
function L$(){NA.call(this);}
function Bci(){var a=new L$();AWW(a);return a;}
function AWW(a){return;}
function AAT(a){return CG(ZL(a),48,57);}
function AHR(){By.call(this);}
function Bay(){var a=new AHR();A7T(a);return a;}
function A7T(a){return;}
function A6f(a){return CG(CG(CG(Ep(),33,64),91,96),123,126);}
function Ow(){L$.call(this);}
function BbE(){var a=new Ow();AZP(a);return a;}
function AZP(a){return;}
function AH7(a){return CG(CG(CG(AAT(a),33,64),91,96),123,126);}
function AMM(){Ow.call(this);}
function BbB(){var a=new AMM();A0J(a);return a;}
function A0J(a){return;}
function AYv(a){return Dp(AH7(a),32);}
function ACH(){By.call(this);}
function A__(){var a=new ACH();A9I(a);return a;}
function A9I(a){return;}
function A4Z(a){return Dp(Dp(Ep(),32),9);}
function AAf(){By.call(this);}
function Ban(){var a=new AAf();A$2(a);return a;}
function A$2(a){return;}
function AYm(a){return Dp(CG(Ep(),0,31),127);}
function AJ9(){By.call(this);}
function BbG(){var a=new AJ9();AT5(a);return a;}
function AT5(a){return;}
function A10(a){return CG(CG(CG(Ep(),48,57),97,102),65,70);}
function AQa(){By.call(this);}
function BaU(){var a=new AQa();A3Y(a);return a;}
function A3Y(a){return;}
function A8e(a){var b;b=new VC;b.Io=a;B0(b);b.b9=1;return b;}
function AHZ(){By.call(this);}
function A_V(){var a=new AHZ();AZ5(a);return a;}
function AZ5(a){return;}
function A20(a){var b;b=new S9;b.Ix=a;B0(b);b.b9=1;return b;}
function APm(){By.call(this);}
function BcL(){var a=new APm();ATT(a);return a;}
function ATT(a){return;}
function AWV(a){var b;b=new QF;b.H1=a;B0(b);return b;}
function AEn(){By.call(this);}
function Bam(){var a=new AEn();AYp(a);return a;}
function AYp(a){return;}
function A0b(a){var b;b=new QE;b.FF=a;B0(b);return b;}
function AFY(){By.call(this);}
function Bcg(){var a=new AFY();AUX(a);return a;}
function AUX(a){return;}
function A4X(a){var b;b=new Sr;b.GQ=a;B0(b);Jl(b.b7,0,2048);b.b9=1;return b;}
function YV(){By.call(this);}
function BbW(){var a=new YV();AUs(a);return a;}
function AUs(a){return;}
function AVn(a){var b;b=new T6;b.IN=a;B0(b);b.b9=1;return b;}
function AIw(){By.call(this);}
function Bch(){var a=new AIw();AX7(a);return a;}
function AX7(a){return;}
function A$6(a){var b;b=new Pa;b.G7=a;B0(b);b.b9=1;return b;}
function APC(){By.call(this);}
function Bac(){var a=new APC();AYC(a);return a;}
function AYC(a){return;}
function A2V(a){var b;b=new UY;b.F$=a;B0(b);return b;}
function AE8(){By.call(this);}
function BcQ(){var a=new AE8();A6r(a);return a;}
function A6r(a){return;}
function AXG(a){var b;b=new S6;b.Fc=a;B0(b);b.b9=1;return b;}
function ALa(){By.call(this);}
function BbS(){var a=new ALa();ATm(a);return a;}
function ATm(a){return;}
function AVt(a){var b;b=new S8;b.Gw=a;B0(b);b.b9=1;return b;}
function ACT(){By.call(this);}
function BaM(){var a=new ACT();AUB(a);return a;}
function AUB(a){return;}
function A50(a){var b;b=new O3;b.GO=a;B0(b);b.b9=1;return b;}
function AG$(){By.call(this);}
function BcG(){var a=new AG$();AXP(a);return a;}
function AXP(a){return;}
function A64(a){var b;b=new Uk;b.Js=a;B0(b);b.b9=1;return b;}
function APQ(){By.call(this);}
function BcD(){var a=new APQ();A79(a);return a;}
function A79(a){return;}
function A1g(a){var b;b=new Uo;b.FT=a;B0(b);return b;}
function ABs(){By.call(this);}
function Bbm(){var a=new ABs();AUv(a);return a;}
function AUv(a){return;}
function AZH(a){var b;b=new VV;b.IX=a;B0(b);return b;}
function AAF(){By.call(this);}
function Bab(){var a=new AAF();A9q(a);return a;}
function A9q(a){return;}
function AYN(a){var b;b=new Vt;b.Fg=a;B0(b);b.b9=1;return b;}
function AHX(){By.call(this);}
function Bcw(){var a=new AHX();A6l(a);return a;}
function A6l(a){return;}
function A9t(a){var b;b=new OF;b.JK=a;B0(b);b.b9=1;return b;}
function K_(){By.call(this);}
function BaO(){var a=new K_();AVA(a);return a;}
function AVA(a){return;}
function ACJ(a){return Dp(CG(CG(CG(Ep(),97,122),65,90),48,57),95);}
function AQD(){K_.call(this);}
function BbF(){var a=new AQD();A6v(a);return a;}
function A6v(a){return;}
function AYE(a){var b;b=Fv(ACJ(a),1);b.b9=1;return b;}
function AMS(){NE.call(this);}
function A_U(){var a=new AMS();A1z(a);return a;}
function A1z(a){return;}
function A34(a){var b;b=Fv(AMk(a),1);b.b9=1;return b;}
function AAy(){M8.call(this);}
function Bar(){var a=new AAy();A6V(a);return a;}
function A6V(a){return;}
function AWx(a){var b;b=Fv(ANL(a),1);b.b9=1;return b;}
function AKj(){var a=this;By.call(a);a.z0=0;a.DC=0;}
function T(a,b){var c=new AKj();A$5(c,a,b);return c;}
function A$5(a,b,c){a.z0=b;a.DC=c;}
function AXT(a){return CG(Ep(),a.z0,a.DC);}
function AKO(){By.call(this);}
function BbH(){var a=new AKO();A12(a);return a;}
function A12(a){return;}
function A1N(a){return CG(CG(Ep(),65279,65279),65520,65533);}
function AMw(){var a=this;By.call(a);a.x4=0;a.wj=0;a.CL=0;}
function CA(a,b){var c=new AMw();AUQ(c,a,b);return c;}
function BaH(a,b,c){var d=new AMw();A1U(d,a,b,c);return d;}
function AUQ(a,b,c){a.wj=c;a.x4=b;}
function A1U(a,b,c,d){a.CL=d;a.wj=c;a.x4=b;}
function A5K(a){var b;b=Bbo(a.x4);if(a.CL)Jl(b.b7,0,2048);b.b9=a.wj;return b;}
function AMN(){var a=this;By.call(a);a.vx=0;a.tN=0;a.yZ=0;}
function KS(a,b){var c=new AMN();AVu(c,a,b);return c;}
function Bb8(a,b,c){var d=new AMN();A2W(d,a,b,c);return d;}
function AVu(a,b,c){a.tN=c;a.vx=b;}
function A2W(a,b,c,d){a.yZ=d;a.tN=c;a.vx=b;}
function ASM(a){var b;b=new Vg;ADN(b,a.vx);if(a.yZ)Jl(b.b7,0,2048);b.b9=a.tN;return b;}
function AKs(){D.call(this);}
function Bms(){var a=new AKs();AS4(a);return a;}
function AS4(a){return;}
function Zp(){D.call(this);}
function Bmt(){var a=new Zp();A75(a);return a;}
function A75(a){return;}
function Nr(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function A2J(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=J(Tl,16384);d=c.data;e=$rt_createByteArray(16384);f=e.data;g=0;h=0;i=0;j=0;while(j<Bh(b)){k=Nr(Y(b,j));if(k==64){j=j+1|0;k=Nr(Y(b,j));l=0;m=1;n=0;while(n<3){j=j+1|0;l=l|Bj(m,Nr(Y(b,j)));m=m*64|0;n=n+1|0;}}else if(k<32)l=1;else{k=(k-32|0)<<24>>24;j=j+1|0;l=Nr(Y(b,j));}if(!k&&l>=128){if(g>0){m=h+1|0;d[h]=AVY(i,i+g|0,Ob(e,g));h=m;}i=i+(g+l|0)|0;g=0;}else{o=g+l|0;if(o<f.length)n=h;else{n=h+1|0;d[h]=AVY(i,i+g|0,Ob(e,g));i=i+o|0;g=0;}while(true){m=l+(-1)|0;if(l<=0)break;o
=g+1|0;f[g]=k;g=o;l=m;}h=n;}j=j+1|0;}return Nm(c,h);}
function Tl(){var a=this;D.call(a);a.w7=0;a.Ag=0;a.CY=null;}
function AVY(a,b,c){var d=new Tl();A0G(d,a,b,c);return d;}
function A0G(a,b,c,d){a.w7=b;a.Ag=c;a.CY=d;}
function RQ(){var a=this;D.call(a);a.Cx=null;a.Dm=0;}
function AL6(){D.call(this);}
function Bmu(){var a=new AL6();A$N(a);return a;}
function A$N(a){return;}
function Yi(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.Cx.data;f=b.Dm;b.Dm=f+1|0;f=e[f];g=f<34?f-32|0:f>=92?(f-32|0)-2|0:(f-32|0)-1|0;h=(g%2|0)!=1?0:1;c=c+Bj(d,g/2|0)|0;d=d*46|0;if(!h)break;}h=c/2|0;if(c%2|0)h= -h;return h;}
function Wg(){Ev.call(this);this.sD=null;}
function A3E(a){EC(a.bY,B(262),60,6,4210752);EC(a.bY,B(325),8,(a.fj-96|0)+2|0,4210752);}
function AOh(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.K.bo;d=B(825);$p=1;case 1:$z=AHt(c,d);if(C()){break _;}e=$z;BU(1.0,1.0,1.0,1.0);Ea(a.K.bo,e);f=(a.bm-a.e8|0)/2|0;g=(a.bC-a.fj|0)/2|0;CH(a,f,g,0,0,a.e8,a.fj);if(WI(a.sD)){h=ADH(a.sD,12);CH(a,f+56|0,((g+36|0)+12|0)-h|0,176,12-h|0,14,h+2|0);}i=AOJ(a.sD,24);CH(a,f+79|0,g+34|0,176,14,i+1|0,16);return;default:E$();}}C3().s(a,
b,c,d,e,f,g,h,i,$p);}
function Xg(){var a=this;Ev.call(a);a.mj=null;a.uj=null;}
function Y4(a){var b,c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AAW(a);if(C()){break _;}b=0;while(b<9){c=Gd(a.mj,b);if(c!==null){d=a.K.f;$p=2;continue _;}b=b+1|0;}return;case 2:ALP(d,c);if(C()){break _;}while(true){b=b+1|0;if(b>=9)break;c=Gd(a.mj,b);if(c===null)continue;else{d=a.K.f;continue _;}}return;default:E$();}}C3().s(a,b,c,d,$p);}
function A6E(a,b){var c,d,e,f,g,h;c=$rt_createIntArray(9);d=c.data;e=0;while(e<3){f=0;while(f<3){g=e+(f*3|0)|0;h=Gd(a.mj,g);if(h!==null)d[g]=h.bA;else d[g]=(-1);f=f+1|0;}e=e+1|0;}Pe(a.uj,0,RF(Wl(),c));}
function A1X(a){EC(a.bY,B(521),28,6,4210752);EC(a.bY,B(325),8,(a.fj-96|0)+2|0,4210752);}
function AKm(a,b){var c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.K.bo;d=B(826);$p=1;case 1:$z=AHt(c,d);if(C()){break _;}e=$z;BU(1.0,1.0,1.0,1.0);Ea(a.K.bo,e);CH(a,(a.bm-a.e8|0)/2|0,(a.bC-a.fj|0)/2|0,0,0,a.e8,a.fj);return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AMB(){var a=this;Ev.call(a);a.Fi=null;a.AA=null;a.kr=0;}
function Bb2(a,b){var c=new AMB();A2l(c,a,b);return c;}
function A2l(a,b,c){var d,e,f,g;H$(a);a.kr=0;a.Fi=b;a.AA=c;a.pN=0;a.kr=c.gl()/9|0;a.fj=114+(a.kr*18|0)|0;d=(a.kr-4|0)*18|0;e=0;while(e<a.kr){f=0;while(f<9){S(a.c5,D5(a,c,f+(e*9|0)|0,8+(f*18|0)|0,18+(e*18|0)|0));f=f+1|0;}e=e+1|0;}f=0;while(f<3){g=0;while(g<9){S(a.c5,D5(a,b,g+((f+1|0)*9|0)|0,8+(g*18|0)|0,(103+(f*18|0)|0)+d|0));g=g+1|0;}f=f+1|0;}e=0;f=161+d|0;while(e<9){S(a.c5,D5(a,b,e,8+(e*18|0)|0,f));e=e+1|0;}}
function A92(a){EC(a.bY,a.AA.w0(),8,6,4210752);EC(a.bY,B(325),8,(a.fj-96|0)+2|0,4210752);}
function ANP(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.K.bo;d=B(827);$p=1;case 1:$z=AHt(c,d);if(C()){break _;}e=$z;BU(1.0,1.0,1.0,1.0);Ea(a.K.bo,e);f=(a.bm-a.e8|0)/2|0;g=(a.bC-a.fj|0)/2|0;CH(a,f,g,0,0,a.e8,(a.kr*18|0)+17|0);CH(a,f,(g+(a.kr*18|0)|0)+17|0,0,126,a.e8,96);return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function CW(){var a=this;EX.call(a);a.Im=null;a.gf=0;a.m1=0;a.zB=0;a.zA=0;}
var Bmv=null;var Bmw=null;var Bmx=null;var Bmy=null;var Bmz=null;var BmA=null;var BmB=null;var BmC=null;var BmD=null;var BmE=null;var BmF=null;var BmG=null;var BmH=null;var BmI=null;var BmJ=null;var BmK=null;var BmL=null;var BmM=null;var BmN=null;var BiV=null;function Dm(a,b,c,d,e,f,g){var h=new CW();AEs(h,a,b,c,d,e,f,g);return h;}
function AEs(a,b,c,d,e,f,g,h){FO(a,b,c);a.Im=d;a.gf=e;a.m1=f;a.zB=g;a.zA=h;}
function AP9(){var b,c;Bmv=Dm(B(828),0,B(828),16,16,0,0);Bmw=Dm(B(829),1,B(829),16,16,16,0);Bmx=Dm(B(830),2,B(830),16,16,32,0);Bmy=Dm(B(831),3,B(831),16,16,48,0);Bmz=Dm(B(832),4,B(832),16,16,64,0);BmA=Dm(B(833),5,B(833),16,16,80,0);BmB=Dm(B(834),6,B(834),16,16,96,0);BmC=Dm(B(835),7,B(835),32,16,0,32);BmD=Dm(B(836),8,B(836),32,16,32,32);BmE=Dm(B(837),9,B(837),32,16,64,32);BmF=Dm(B(838),10,B(838),32,16,96,32);BmG=Dm(B(839),11,B(839),16,32,0,64);BmH=Dm(B(840),12,B(840),32,32,0,128);BmI=Dm(B(841),13,B(841),32,32,
32,128);BmJ=Dm(B(842),14,B(842),32,32,64,128);BmK=Dm(B(843),15,B(843),32,32,96,128);BmL=Dm(B(844),16,B(844),32,32,128,128);BmM=Dm(B(845),17,B(845),64,32,0,96);BmN=Dm(B(846),18,B(846),64,64,0,192);b=J(CW,19);c=b.data;c[0]=Bmv;c[1]=Bmw;c[2]=Bmx;c[3]=Bmy;c[4]=Bmz;c[5]=BmA;c[6]=BmB;c[7]=BmC;c[8]=BmD;c[9]=BmE;c[10]=BmF;c[11]=BmG;c[12]=BmH;c[13]=BmI;c[14]=BmJ;c[15]=BmK;c[16]=BmL;c[17]=BmM;c[18]=BmN;BiV=b;}
function PF(){Fb.call(this);this.Cp=null;}
function ACP(a){var b;b=new VA;Vu(b,a.Cp);return b;}
function UZ(){var a=this;CS.call(a);a.BZ=null;a.BM=null;a.BO=null;a.yH=0;}
function AGm(a){S(a.bG,Sb(0,((a.bm/2|0)-155|0)+0|0,(a.bC/6|0)+96|0,B(847)));S(a.bG,Sb(1,((a.bm/2|0)-155|0)+160|0,(a.bC/6|0)+96|0,B(802)));}
function AQq(a,b){var c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.BZ;d=b.cC?0:1;e=a.yH;$p=1;case 1:AQ4(c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function YO(a,b,c,d){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABd(a);if(C()){break _;}DD(a,a.bY,a.BM,a.bm/2|0,70,16777215);DD(a,a.bY,a.BO,a.bm/2|0,90,16777215);$p=2;case 2:AFC(a,b,c,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function KH(){Fg.call(this);}
function BmO(){var a=new KH();AT2(a);return a;}
function AT2(a){O(a);}
function UH(){var a=this;D.call(a);a.kK=0;a.qV=0;a.xG=null;a.xM=null;a.HU=0;}
function ALo(a,b){var c,d;c=0;while(c<=(3-a.kK|0)){d=0;while(d<=(3-a.qV|0)){if(Vh(a,b,c,d,1))return 1;if(Vh(a,b,c,d,0))return 1;d=d+1|0;}c=c+1|0;}return 0;}
function Vh(a,b,c,d,e){var f,g,h,i,j;f=0;while(f<3){g=0;while(g<3){h=f-c|0;i=g-d|0;j=(-1);if(h>=0&&i>=0&&h<a.kK&&i<a.qV)j=!e?a.xG.data[h+Bj(i,a.kK)|0]:a.xG.data[((a.kK-h|0)-1|0)+Bj(i,a.kK)|0];if(b.data[f+(g*3|0)|0]!=j)return 0;g=g+1|0;}f=f+1|0;}return 1;}
function AHj(a,b){return Kx(a.xM.bA,a.xM.p);}
function Km(a){return Bj(a.kK,a.qV);}
function Sj(){var a=this;Bm.call(a);a.Ck=null;a.Jj=null;}
function AVJ(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.dL^EJ(a.Ck,c):0;}
function Si(){var a=this;Bm.call(a);a.Eq=null;a.Bc=null;a.GE=null;}
function A3l(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.dL^EJ(a.Eq,c):0;return a.Bc.Y(b)&&!d?1:0;}
function Pn(){var a=this;Bm.call(a);a.sa=null;a.Hk=null;}
function AXQ(a,b){return a.cg^EJ(a.sa,b);}
function A53(a){var b,c;b=new U;X(b);c=IX(a.sa,0);while(c>=0){Hh(b,Iu(c));Dx(b,124);c=IX(a.sa,c+1|0);}if(b.bX>0)Sd(b,b.bX-1|0);return V(b);}
function TR(){var a=this;Bm.call(a);a.Dw=null;a.Iu=null;}
function A9o(a,b){return a.Dw.Y(b);}
function TP(){var a=this;Bm.call(a);a.wm=0;a.CF=null;a.w9=null;}
function A0s(a,b){return !(a.wm^EJ(a.w9.b4,b))&&!(a.wm^a.w9.it^a.CF.Y(b))?0:1;}
function TQ(){var a=this;Bm.call(a);a.tM=0;a.A4=null;a.vb=null;}
function A7n(a,b){return !(a.tM^EJ(a.vb.b4,b))&&!(a.tM^a.vb.it^a.A4.Y(b))?1:0;}
function TU(){var a=this;Bm.call(a);a.ES=0;a.A8=null;a.A1=null;a.HA=null;}
function A5b(a,b){return a.ES^(!a.A8.Y(b)&&!a.A1.Y(b)?0:1);}
function TV(){var a=this;Bm.call(a);a.z_=0;a.Dr=null;a.C$=null;a.JH=null;}
function ASG(a,b){return a.z_^(!a.Dr.Y(b)&&!a.C$.Y(b)?0:1)?0:1;}
function TS(){var a=this;Bm.call(a);a.zM=null;a.JJ=null;}
function AWr(a,b){return D4(a.zM,b);}
function TT(){var a=this;Bm.call(a);a.EC=null;a.HL=null;}
function AX_(a,b){return D4(a.EC,b)?0:1;}
function TX(){var a=this;Bm.call(a);a.Ac=null;a.Dt=0;a.AO=null;}
function A1n(a,b){return !D4(a.Ac,b)&&!(a.Dt^EJ(a.AO.b4,b))?0:1;}
function TY(){var a=this;Bm.call(a);a.Au=null;a.DW=0;a.An=null;}
function A4S(a,b){return !D4(a.Au,b)&&!(a.DW^EJ(a.An.b4,b))?1:0;}
function Pm(){var a=this;Bm.call(a);a.AK=0;a.Ex=null;a.Bk=null;a.Fl=null;}
function A_S(a,b){return !(a.AK^a.Ex.Y(b))&&!D4(a.Bk,b)?0:1;}
function PA(){var a=this;Bm.call(a);a.EL=0;a.yU=null;a.y0=null;a.FA=null;}
function AWw(a,b){return !(a.EL^a.yU.Y(b))&&!D4(a.y0,b)?1:0;}
function Pk(){var a=this;Bm.call(a);a.CT=null;a.FD=null;}
function AU0(a,b){return D4(a.CT,b);}
function Pl(){var a=this;Bm.call(a);a.zF=null;a.JE=null;}
function A5Q(a,b){return D4(a.zF,b)?0:1;}
function Pq(){var a=this;Bm.call(a);a.ER=null;a.At=0;a.E$=null;}
function AXb(a,b){return D4(a.ER,b)&&a.At^EJ(a.E$.b4,b)?1:0;}
function Pj(){var a=this;Bm.call(a);a.D9=null;a.DA=0;a.Ar=null;}
function A$l(a,b){return D4(a.D9,b)&&a.DA^EJ(a.Ar.b4,b)?0:1;}
function Po(){var a=this;Bm.call(a);a.Ee=0;a.Ci=null;a.z$=null;a.Hz=null;}
function A4d(a,b){return a.Ee^a.Ci.Y(b)&&D4(a.z$,b)?1:0;}
function Pp(){var a=this;Bm.call(a);a.D5=0;a.BW=null;a.Ed=null;a.HR=null;}
function AZD(a,b){return a.D5^a.BW.Y(b)&&D4(a.Ed,b)?0:1;}
function OL(){Ix.call(this);}
function AV2(a,b,c,d){var e,f,g;e=0;f=d.by;a:{while(true){if(b>f){b=e;break a;}g=Hk(d,a.cH);EL(d,a.cH,b);e=a.fm.k(b,c,d);if(e>=0)break;EL(d,a.cH,g);b=b+1|0;}}return b;}
function A_H(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Hk(e,a.cH);EL(e,a.cH,c);f=a.fm.k(c,d,e);if(f>=0)break;EL(e,a.cH,g);c=c+(-1)|0;}}return c;}
function AUO(a){return null;}
function VA(){II.call(this);}
function Ll(a){V8(a);return a.hf.gd;}
function M$(){Fa.call(this);}
var BmP=0.0;var BmQ=null;function AJT(){BmP=NaN;BmQ=F($rt_doublecls());}
function Mn(){}
function Vs(){var a=this;D.call(a);a.Fv=null;a.Ey=null;a.pF=null;a.dz=null;a.qO=0;a.sc=0;}
function OB(a,b){var c,d;c=Bh(a.pF);if(b>=0&&b<=c){Z4(a.dz);a.dz.nn=1;APW(a.dz,b);b=a.Ey.eG(b,a.pF,a.dz);if(b==(-1))a.dz.hl=1;if(b>=0&&a.dz.n$){AC2(a.dz);return 1;}a.dz.hs=(-1);return 0;}d=new BO;Bl(d,VO(b));M(d);}
function AA8(a){var b,c;b=Bh(a.pF);if(!YE(a))b=a.sc;if(a.dz.hs>=0&&a.dz.nn==1){a.dz.hs=MF(a.dz);if(MF(a.dz)==AEJ(a.dz)){c=a.dz;c.hs=c.hs+1|0;}return a.dz.hs<=b&&OB(a,a.dz.hs)?1:0;}return OB(a,a.qO);}
function AHO(a,b){return Pz(a.dz,b);}
function Yh(a,b){return QG(a.dz,b);}
function AG9(a){return AHO(a,0);}
function AKV(a){return Yh(a,0);}
function YE(a){return a.dz.ob;}
function Ue(){}
function R_(){}
function SW(){Fb.call(this);this.n7=null;}
var BmR=null;function Bb1(){var a=new SW();AAg(a);return a;}
function AAg(a){a.n7=BcA();}
function Jt(a){return AIq(a.n7);}
function Zf(a,b){return ASw(a.n7,b,b)===BmR?0:1;}
function MB(a,b){return AGo(a.n7,b)!==BmR?0:1;}
function MY(a){return ADw(a.n7);}
function AAP(){BmR=new D;}
function SI(){}
function ON(){}
function AJX(){var a=this;FT.call(a);a.kl=null;a.tu=null;a.GP=null;a.tB=0;}
function BcA(){var a=new AJX();ATS(a);return a;}
function ATS(a){var b;b=null;a.GP=b;if(b===null){b=new QO;b.I7=a;}a.tu=b;}
function ASw(a,b,c){var d,e;a.kl=Og(a,a.kl,b);d=Wi(a,b);e=S2(d,c);S2(d,c);a.tB=a.tB+1|0;return e;}
function AGo(a,b){var c;c=Wi(a,b);if(c===null)return null;a.kl=Lu(a,a.kl,b);a.tB=a.tB+1|0;return c.nS;}
function Wi(a,b){var c,d;c=a.kl;while(true){if(c===null)return null;d=Oi(a.tu,b,c.ne);if(!d)break;c=d>=0?c.di:c.c_;}return c;}
function Og(a,b,c){var d,e;if(b===null){b=new La;d=null;b.ne=c;b.nS=d;b.lA=1;b.jk=1;return b;}e=Oi(a.tu,c,b.ne);if(!e)return b;if(e>=0)b.di=Og(a,b.di,c);else b.c_=Og(a,b.c_,c);FL(b);return MZ(b);}
function Lu(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=Oi(a.tu,c,b.ne);if(d<0)b.c_=Lu(a,b.c_,c);else if(d>0)b.di=Lu(a,b.di,c);else{if(b.di===null)return b.c_;e=b.c_;b=b.di;f=J(La,b.lA);g=0;while(b.c_!==null){h=f.data;i=g+1|0;h[g]=b;b=b.c_;g=i;}c=b.di;while(g>0){h=f.data;g=g+(-1)|0;j=h[g];j.c_=c;FL(j);c=MZ(j);}b.di=c;b.c_=e;FL(b);}FL(b);return MZ(b);}
function ADw(a){var b,c,d;b=a.kl;c=null;while(b!==null){d=AOj(b,0);c=b;b=d;}if(c!==null)return c.ne;b=new JX;O(b);M(b);}
function AIq(a){return a.kl===null?0:a.kl.jk;}
function QO(){D.call(this);this.I7=null;}
function Oi(a,b,c){return b===null?TD(c,b):TD(b,c);}
function VC(){Bm.call(this);this.Io=null;}
function A1u(a,b){return Do(b)!=2?0:1;}
function S9(){Bm.call(this);this.Ix=null;}
function A32(a,b){return Do(b)!=1?0:1;}
function QF(){Bm.call(this);this.H1=null;}
function ATv(a,b){return Qa(b);}
function QE(){Bm.call(this);this.FF=null;}
function A5J(a,b){return 0;}
function Sr(){Bm.call(this);this.GQ=null;}
function AW2(a,b){return !Do(b)?0:1;}
function T6(){Bm.call(this);this.IN=null;}
function A$P(a,b){return Do(b)!=9?0:1;}
function Pa(){Bm.call(this);this.G7=null;}
function AZc(a,b){return Is(b);}
function UY(){Bm.call(this);this.F$=null;}
function A0g(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function S6(){Bm.call(this);this.Fc=null;}
function A_w(a,b){a:{b:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Is(b);}return b;}
function S8(){Bm.call(this);this.Gw=null;}
function AVf(a,b){a:{b:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Is(b);}return b;}
function O3(){Bm.call(this);this.GO=null;}
function A1H(a,b){a:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Uk(){Bm.call(this);this.Js=null;}
function A7A(a,b){return Lb(b);}
function Uo(){Bm.call(this);this.FT=null;}
function A83(a,b){return Up(b);}
function VV(){Bm.call(this);this.IX=null;}
function A$E(a,b){return Do(b)!=3?0:1;}
function Vt(){Bm.call(this);this.Fg=null;}
function A13(a,b){a:{b:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=Is(b);}return b;}
function OF(){Bm.call(this);this.JK=null;}
function AU8(a,b){a:{b:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=Is(b);}return b;}
function My(){Bm.call(this);this.u1=0;}
function Bbo(a){var b=new My();ADN(b,a);return b;}
function ADN(a,b){B0(a);a.u1=b;}
function AZd(a,b){return a.cg^(a.u1!=Do(b&65535)?0:1);}
function Vg(){My.call(this);}
function A93(a,b){return a.cg^(!(a.u1>>Do(b&65535)&1)?0:1);}
function Nf(){D.call(this);}
var BmS=null;var BmT=null;function BmU(){var a=new Nf();ASk(a);return a;}
function ASk(a){return;}
function Dy(b,c){BR(BmS,c,b);BR(BmT,b,c);}
function Jh(b,c){var d,e,f,g,h,$$je;d=null;a:{try{e=d;f=CP(BmS,b);if(f!==null){e=d;g=J(FN,1);g.data[0]=F(GF);b=Wx(f,g);g=J(D,1);g.data[0]=c;d=WA(b,g);e=d;}break a;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){h=$$je;}else{throw $$e;}}Cc(h);d=e;}return d;}
function AIk(){BmS=Dd();BmT=Dd();Dy(F(Jo),B(848));Dy(F(E9),B(849));Dy(F(ID),B(850));Dy(F(EP),B(851));Dy(F(DO),B(852));Dy(F(JU),B(853));Dy(F(Ji),B(854));Dy(F(Kk),B(855));Dy(F(K9),B(856));Dy(F(I3),B(857));Dy(F(Iz),B(578));Dy(F(KE),B(858));Dy(F(Mo),B(859));Dy(F(JI),B(860));Dy(F(Gc),B(861));}
function JT(){var a=this;D.call(a);a.fE=0;a.fn=0;a.fI=0;a.p6=0;a.je=Long_ZERO;a.oR=Long_ZERO;}
var Bky=Long_ZERO;function A$y(a,b){var c;if(!(b instanceof JT))return 0;c=b;return a.fE==c.fE&&a.fn==c.fn&&a.fI==c.fI&&a.p6==c.p6?1:0;}
function A7L(a){return (((((a.fE*128|0)*1024|0)+(a.fI*128|0)|0)+a.fn|0)*256|0)+a.p6|0;}
function A0n(a,b){a.je=b;return a;}
function ANA(a,b){return Long_lt(a.je,b.je)?(-1):Long_gt(a.je,b.je)?1:Long_lt(a.oR,b.oR)?(-1):Long_le(a.oR,b.oR)?0:1;}
function TD(a,b){return ANA(a,b);}
function AF$(){Bky=Long_ZERO;}
function K$(){}
function VT(){var a=this;D.call(a);a.lk=null;a.iO=null;a.g1=null;a.X=null;a.lw=null;a.fq=0;a.fQ=0;a.fJ=null;}
function BQ(a,b,c){var d;if(b==a.fq&&c==a.fQ&&a.fJ!==null)return 1;a:{b:{d=(b&31)+((c&31)*32|0)|0;if(a.X.data[d]!==null){if(a.X.data[d]===a.lk)break b;if(ARF(a.X.data[d],b,c))break b;}b=0;break a;}b=1;}return b;}
function AOd(a,b,c){var d,e,f,g,h,i,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b==a.fq&&c==a.fQ&&a.fJ!==null)return a.fJ;d=(b&31)+((c&31)*32|0)|0;if(!BQ(a,b,c)){BeW=1;if(a.X.data[d]!==null){AOL(a.X.data[d]);e=a.X.data[d];$p=1;continue _;}if(a.g1===null)f=null;else{try{e=a.g1;f=a.lw;$p=2;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){e=$$je;}else{throw $$e;}}Cc(e);f=null;}if(f===
null){if(a.iO!==null){e=a.iO;$p=3;continue _;}f=a.lk;}a.X.data[d]=f;if(a.X.data[d]!==null)JY(a.X.data[d]);if(!a.X.data[d].gx){g=b+1|0;h=c+1|0;if(BQ(a,g,h)&&BQ(a,b,h)&&BQ(a,g,c)){$p=7;continue _;}}g=b-1|0;if(BQ(a,g,c)){$p=4;continue _;}h=c-1|0;if(BQ(a,b,h)){$p=5;continue _;}if(BQ(a,g,h)){$p=6;continue _;}BeW=0;}a.fq=b;a.fQ=c;a.fJ=a.X.data[d];return a.X.data[d];case 1:AB2(a,e);if(C()){break _;}J5(a,a.X.data[d]);if(a.g1===null)f=null;else{try{e=a.g1;f=a.lw;$p=2;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE)
{e=$$je;}else{throw $$e;}}Cc(e);f=null;}if(f===null){if(a.iO!==null){e=a.iO;$p=3;continue _;}f=a.lk;}a.X.data[d]=f;if(a.X.data[d]!==null)JY(a.X.data[d]);if(!a.X.data[d].gx){g=b+1|0;h=c+1|0;if(BQ(a,g,h)&&BQ(a,b,h)&&BQ(a,g,c)){$p=7;continue _;}}g=b-1|0;if(BQ(a,g,c)){$p=4;continue _;}h=c-1|0;if(BQ(a,b,h)){$p=5;continue _;}if(!BQ(a,g,h)){BeW=0;a.fq=b;a.fQ=c;a.fJ=a.X.data[d];return a.X.data[d];}$p=6;continue _;case 2:a:{try{$z=AGW(e,f,b,c);if(C()){break _;}f=$z;if(f!==null)f.s0=a.lw.ea;break a;}catch($$e){$$je=Bi($$e);if
($$je instanceof BE){e=$$je;}else{throw $$e;}}Cc(e);f=null;}if(f===null){if(a.iO!==null){e=a.iO;$p=3;continue _;}f=a.lk;}a.X.data[d]=f;if(a.X.data[d]!==null)JY(a.X.data[d]);if(!a.X.data[d].gx){g=b+1|0;h=c+1|0;if(BQ(a,g,h)&&BQ(a,b,h)&&BQ(a,g,c)){$p=7;continue _;}}g=b-1|0;if(BQ(a,g,c)){$p=4;continue _;}h=c-1|0;if(BQ(a,b,h)){$p=5;continue _;}if(!BQ(a,g,h)){BeW=0;a.fq=b;a.fQ=c;a.fJ=a.X.data[d];return a.X.data[d];}$p=6;continue _;case 3:$z=AJK(e,b,c);if(C()){break _;}f=$z;a.X.data[d]=f;if(a.X.data[d]!==null)JY(a.X.data[d]);if
(!a.X.data[d].gx){g=b+1|0;h=c+1|0;if(BQ(a,g,h)&&BQ(a,b,h)&&BQ(a,g,c)){$p=7;continue _;}}g=b-1|0;if(BQ(a,g,c)){$p=4;continue _;}h=c-1|0;if(BQ(a,b,h)){$p=5;continue _;}if(!BQ(a,g,h)){BeW=0;a.fq=b;a.fQ=c;a.fJ=a.X.data[d];return a.X.data[d];}$p=6;continue _;case 4:$z=AOd(a,g,c);if(C()){break _;}e=$z;if(!e.gx){h=c+1|0;if(BQ(a,g,h)&&BQ(a,b,h)&&BQ(a,g,c)){$p=8;continue _;}}h=c-1|0;if(BQ(a,b,h)){$p=5;continue _;}if(!BQ(a,g,h)){BeW=0;a.fq=b;a.fQ=c;a.fJ=a.X.data[d];return a.X.data[d];}$p=6;continue _;case 5:$z=AOd(a,
b,h);if(C()){break _;}e=$z;if(!e.gx){i=b+1|0;if(BQ(a,i,h)&&BQ(a,b,h)&&BQ(a,i,c)){$p=9;continue _;}}if(!BQ(a,g,h)){BeW=0;a.fq=b;a.fQ=c;a.fJ=a.X.data[d];return a.X.data[d];}$p=6;case 6:$z=AOd(a,g,h);if(C()){break _;}e=$z;if(!e.gx&&BQ(a,g,h)&&BQ(a,b,h)&&BQ(a,g,c)){$p=10;continue _;}BeW=0;a.fq=b;a.fQ=c;a.fJ=a.X.data[d];return a.X.data[d];case 7:AFq(a,a,b,c);if(C()){break _;}g=b-1|0;if(BQ(a,g,c)){$p=4;continue _;}h=c-1|0;if(BQ(a,b,h)){$p=5;continue _;}if(!BQ(a,g,h)){BeW=0;a.fq=b;a.fQ=c;a.fJ=a.X.data[d];return a.X.data[d];}$p
=6;continue _;case 8:AFq(a,a,g,c);if(C()){break _;}h=c-1|0;if(BQ(a,b,h)){$p=5;continue _;}if(!BQ(a,g,h)){BeW=0;a.fq=b;a.fQ=c;a.fJ=a.X.data[d];return a.X.data[d];}$p=6;continue _;case 9:AFq(a,a,b,h);if(C()){break _;}if(!BQ(a,g,h)){BeW=0;a.fq=b;a.fQ=c;a.fJ=a.X.data[d];return a.X.data[d];}$p=6;continue _;case 10:AFq(a,a,g,h);if(C()){break _;}BeW=0;a.fq=b;a.fQ=c;a.fJ=a.X.data[d];return a.X.data[d];default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function J5(a,b){var c,$$je;a:{if(a.g1!==null){try{AHp(a.g1,a.lw,b);break a;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){c=$$je;}else{throw $$e;}}c.ty();}}}
function AB2(a,b){var c,d,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.g1!==null){try{b.s0=a.lw.ea;c=a.g1;d=a.lw;$p=1;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof B1){c=$$je;}else{throw $$e;}}Cc(c);}return;case 1:a:{try{YQ(c,d,b);if(C()){break _;}break a;}catch($$e){$$je=Bi($$e);if($$je instanceof B1){c=$$je;}else{throw $$e;}}Cc(c);}return;default:E$();}}C3().s(a,b,c,d,$p);}
function AFq(a,b,c,d){var e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AOd(a,c,d);if(C()){break _;}e=$z;if(!e.gx){e.gx=1;if(a.iO!==null){f=a.iO;$p=2;continue _;}}return;case 2:AHV(f,b,c,d);if(C()){break _;}SE(e);return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ANX(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0;e=0;if(c!==null){f=0;while(f<a.X.data.length){if(a.X.data[f]!==null&&Kl(a.X.data[f],b))e=e+1|0;f=f+1|0;}}g=0;h=0;while(h<a.X.data.length){if(a.X.data[h]!==null){if(b&&!a.X.data[h].p8)J5(a,a.X.data[h]);if(Kl(a.X.data[h],b)){i=a.X.data[h];$p=1;continue _;}}h=h+1|0;}if(b&&a.g1===null)return 1;return 1;case 1:AB2(a,i);if
(C()){break _;}a.X.data[h].dT=0;d=d+1|0;if(d==2&&!b)return 0;if(c!==null){g=g+1|0;if(!(g%10|0)){f=(g*100|0)/e|0;$p=2;continue _;}}while(true){h=h+1|0;if(h>=a.X.data.length)break;if(a.X.data[h]===null)continue;if(b&&!a.X.data[h].p8)J5(a,a.X.data[h]);if(Kl(a.X.data[h],b)){i=a.X.data[h];continue _;}}if(b&&a.g1===null)return 1;return 1;case 2:XE(c,f);if(C()){break _;}while(true){h=h+1|0;if(h>=a.X.data.length)break;if(a.X.data[h]===null)continue;if(b&&!a.X.data[h].p8)J5(a,a.X.data[h]);if(Kl(a.X.data[h],b)){i=a.X.data[h];$p
=1;continue _;}}if(b&&a.g1===null)return 1;return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function To(a){return 0;}
function A_t(a){return 1;}
function P_(){}
function Xi(){D.call(this);this.rY=null;}
function N8(a,b,c){var d,e,f,g,h;d=b+30233088|0;e=c+30233088|0;f=Bh(B(862));g=new U;Gy(g,10);h=0;while(h<5){Dx(g,Y(B(862),d%f|0));d=d/f|0;Dx(g,Y(B(862),e%f|0));e=e/f|0;h=h+1|0;}return V(g);}
function AGW(a,b,c,d){var e,f,g,h,i,j,k,l,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=N8(a,c,d);f=new U;X(f);g=V(I(I(I(f,a.rY),B(23)),e));$p=1;case 1:$z=ALD(g);if(C()){break _;}h=$z;if(h===null)return null;try{f=MR(OT(Uf(h)));i=FR(f,B(863));j=FR(f,B(864));if(c==i&&d==j){$p=4;continue _;}k=N8(a,i,j);Cg(C1(),BL(I(Be(I(Be(I(I(I(I(I(Be(I(Be(I(Be(I(Be(I(I(I(BX(),B(865)),
e),B(866)),c),B(625)),d),B(867)),i),B(625)),j),B(868)),k),B(869)),e),B(870)),c),B(625)),d),B(245))));b=BL(I(I(I(BX(),a.rY),B(23)),k));$p=3;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof B1){l=$$je;}else{throw $$e;}}b=C1();f=new U;X(f);Cg(b,V(I(Be(I(Be(I(I(I(f,B(871)),e),B(872)),c),B(625)),d),B(245))));Cg(C1(),B(873));$p=2;case 2:AL0(g);if(C()){break _;}Cc(l);return null;case 3:a:{try{ANk(g,b);if(C()){break _;}b=null;}catch($$e){$$je=Bi($$e);if($$je instanceof B1){l=$$je;break a;}else{throw $$e;}}return b;}b
=C1();f=new U;X(f);Cg(b,V(I(Be(I(Be(I(I(I(f,B(871)),e),B(872)),c),B(625)),d),B(245))));Cg(C1(),B(873));$p=2;continue _;case 4:a:{try{$z=A2Y(b,f);if(C()){break _;}b=$z;}catch($$e){$$je=Bi($$e);if($$je instanceof B1){l=$$je;break a;}else{throw $$e;}}return b;}b=C1();f=new U;X(f);Cg(b,V(I(Be(I(Be(I(I(I(f,B(871)),e),B(872)),c),B(625)),d),B(245))));Cg(C1(),B(873));$p=2;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function YQ(a,b,c){var d,e,f,g,h,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=G7();AF1(a,c,b,d);e=A$g(131072);try{f=AWg(BbL(e));try{RT(d,f);AHH(f);g=Ia(e);b=BL(I(I(I(BX(),a.rY),B(23)),N8(a,c.fY,c.fT)));$p=1;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof D7){b=$$je;}else{throw $$e;}}a:{try{KN(f);break a;}catch($$e){$$je=Bi($$e);if($$je instanceof D7){d=$$je;}else{throw $$e;}}WH(b,d);}M(b);}catch
($$e){$$je=Bi($$e);if($$je instanceof B1){h=$$je;}else{throw $$e;}}b=C1();d=new U;X(d);Cg(b,V(I(Be(I(Be(I(d,B(874)),c.fY),B(625)),c.fT),B(875))));Cc(h);return;case 1:b:{a:{try{try{ACx(b,g);if(C()){break _;}}catch($$e){$$je=Bi($$e);if($$je instanceof D7){b=$$je;break a;}else{throw $$e;}}KN(f);}catch($$e){$$je=Bi($$e);if($$je instanceof B1){h=$$je;break b;}else{throw $$e;}}return;}try{c:{try{KN(f);break c;}catch($$e){$$je=Bi($$e);if($$je instanceof D7){d=$$je;}else{throw $$e;}}WH(b,d);}M(b);}catch($$e){$$je=Bi($$e);if
($$je instanceof B1){h=$$je;}else{throw $$e;}}}b=C1();d=new U;X(d);Cg(b,V(I(Be(I(Be(I(d,B(874)),c.fY),B(625)),c.fT),B(875))));Cc(h);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AF1(a,b,c,d){Gu(d,B(863),b.fY);Gu(d,B(864),b.fT);H9(d,B(876),c.ea);IL(d,B(877),b.gY);IL(d,B(354),b.hJ.gz);IL(d,B(878),b.gU.gz);IL(d,B(879),b.hY.gz);IL(d,B(880),b.ee);ST(d,B(881),b.gx);b.r5=0;AG5(new QN);}
function A2Y(b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:d=BaL(b,FR(c,B(863)),FR(c,B(864)));d.gY=IE(c,B(877));d.hJ=AII(IE(c,B(354)));d.gU=AII(IE(c,B(878)));d.hY=AII(IE(c,B(879)));d.ee=IE(c,B(880));d.gx=Ul(c,B(881));if(!JH(d.hJ))d.hJ=Je(d.gY.data.length);if(d.ee!==null&&JH(d.gU)){if(!JH(d.hY))d.hY=Je(d.gY.data.length);return d;}d.ee=$rt_createByteArray(256);d.gU=Je(d.gY.data.length);$p=1;case 1:AFL(d);if(C()){break _;}if(!JH(d.hY))d.hY=Je(d.gY.data.length);return d;default:
E$();}}C3().s(b,c,d,$p);}
function A4E(a){return;}
function A4V(a){return;}
function AHp(a,b,c){return;}
function Sn(){var a=this;D.call(a);a.a=null;a.yN=null;a.yO=null;a.yM=null;a.tJ=null;a.yQ=null;a.yR=null;a.yP=null;a.iP=null;a.s=null;a.h0=null;a.vN=null;a.vL=null;a.vM=null;a.vO=null;a.vP=null;a.F_=null;}
function Zs(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb;a.h0=Zh(a,a.h0,b*4|0,0,c*4|0,5,17,5);e=0;while(e<4){f=0;while(f<4){g=0;while(g<16){h=a.h0.data;c=((e+0|0)*5|0)+f|0;i=((c+0|0)*17|0)+g|0;j=h[i+0|0];h=a.h0.data;b=((c+1|0)*17|0)+g|0;k=h[b+0|0];h=a.h0.data;l=((e+1|0)*5|0)+f|0;m=((l+0|0)*17|0)+g|0;n=h[m+0|0];h=a.h0.data;c=((l+1|0)*17|0)+g|0;o=h[c+0|0];p=(a.h0.data[i+1|0]-j)*0.125;q=(a.h0.data[b+1|0]-k)*0.125;r=(a.h0.data[m+1|0]-n)*0.125;s=(a.h0.data[c+1|0]-o)*0.125;t=0;while(t<8){u=(n-j)
*0.25;v=(o-k)*0.25;w=0;x=j;y=k;while(w<4){b=(w+(e*4|0)|0)<<11|(0+(f*4|0)|0)<<7;c=(g*8|0)+t|0;m=b|c;z=(y-x)*0.25;ba=0;c=R(c,64);bb=x;while(ba<4){i=0;if(c<0){L();i=BgE.b;}if(bb>0.0){L();i=BeV.b;}d.data[m]=i<<24>>24;m=m+128|0;bb=bb+z;ba=ba+1|0;}x=x+u;y=y+v;w=w+1|0;}j=j+p;k=k+q;n=n+r;o=o+s;t=t+1|0;}g=g+1|0;}f=f+1|0;}e=e+1|0;}}
function ACs(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;e=0;f=b*16|0;c=c*16|0;while(e<16){g=0;while(g<16){h=f+e|0;i=c+g|0;j=a.tJ;k=h*0.03125;l=i*0.03125;m=U0(j,k,l,0.0)+Cl(a.a)*0.2<=0.0?0:1;n=U0(a.tJ,l,109.0134,k)+Cl(a.a)*0.2<=3.0?0:1;o=EZ(a.yQ,k*2.0,l*2.0)/3.0+3.0+Cl(a.a)*0.25|0;p=(-1);L();q=BeR.b;r=BeS.b;s=(((e*16|0)+g|0)*128|0)+128|0;t=127;while(t>=0){s=s+(-1)|0;if(t<=((0+E(a.a,6)|0)-1|0))d.data[s]=BeQ.b<<24>>24;else{u=d.data;if(!u[s])p=(-1);else if(u[s]==BeV.b){if(p==(-1)){if(o<=0){q=0;r=BeV.b<<24>>
24;}else if(t>=60&&t<=65){q=BeR.b;r=BeS.b;if(n)q=0;if(n)r=Bfb.b;if(m)q=Bfa.b;if(m)r=Bfa.b;}if(t<64&&!q)q=BgE.b;if(t<63){u[s]=r<<24>>24;p=o;}else{u[s]=q<<24>>24;p=o;}}else if(p>0){p=p+(-1)|0;u[s]=r<<24>>24;}}}t=t+(-1)|0;}g=g+1|0;}e=e+1|0;}}
function AJK(a,b,c){var d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=$rt_createByteArray(32768);e=A9s(a.s,d,b,c);Zs(a,b,c,d);ACs(a,b,c,d);ART(a,b,c,d);$p=1;case 1:AFL(e);if(C()){break _;}return e;default:E$();}}C3().s(a,b,c,d,e,$p);}
function APS(a,b,c,d,e,f,g){Jb(a,b,c,d,e,f,g,1.0+N(a.a)*6.0,0.0,0.0,(-1),(-1),0.5);}
function Jb(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,bD;n=b*16|0;o=n+8|0;p=c*16|0;q=p+8|0;r=0.0;s=0.0;t=BbA(Gv(a.a));if(l<=0)l=112-E(t,28)|0;u=0;if(k==(-1)){k=l/2|0;u=1;}v=E(t,l/2|0)+(l/4|0)|0;w=E(t,6)?0:1;x=R(h,1.0);y=h+2.0+16.0;y=y*y;z=o-16.0;ba=q-16.0;bb=o+16.0;bc=q+16.0;a:{while(true){if(k>=l)break a;bd=1.5+Bq(k*3.1415927410125732/l)*h*1.0;be=bd*m;bf=BC(j);bg=Bq(j);e=e+BC(i)*bf;f=f+bg;g=g+Bq(i)*bf;j=(!w
?j*0.699999988079071:j*0.9200000166893005)+s*0.10000000149011612;i=i+r*0.10000000149011612;bh=s*0.8999999761581421;bf=r*0.75;s=bh+(N(t)-N(t))*N(t)*2.0;r=bf+(N(t)-N(t))*N(t)*4.0;if(!u&&k==v&&x>0){h=N(t)*0.5+0.5;bh=i-1.5707963705062866;j=j/3.0;Jb(a,b,c,d,e,f,g,h,bh,j,k,l,1.0);Jb(a,b,c,d,e,f,g,N(t)*0.5+0.5,i+1.5707963705062866,j,k,l,1.0);return;}if(!(!u&&!E(t,4))){bi=e-o;bj=g-q;bk=l-k|0;if(bi*bi+bj*bj-bk*bk>y)break;bl=bd*2.0;if(e>=z-bl&&g>=ba-bl&&e<=bb+bl&&g<=bc+bl){bm=(K(e-bd)-n|0)-1|0;bn=(K(e+bd)-n|0)+1|0;bo
=K(f-be)-1|0;bp=K(f+be)+1|0;bq=(K(g-bd)-p|0)-1|0;br=(K(g+bd)-p|0)+1|0;if(bm<0)bm=0;if(bn>16)bn=16;if(bo<1)bo=1;if(bp>120)bp=120;if(bq<0)bq=0;if(br>16)br=16;bs=0;bt=bm;while(!bs&&bt<bn){bu=bq;while(!bs&&bu<br){bv=bp+1|0;while(!bs){bw=R(bv,bo-1|0);if(bw<0)break;bx=(((bt*16|0)+bu|0)*128|0)+bv|0;if(bv>=0&&bv<128){by=d.data;bz=by[bx];L();if(!(bz!=BfY.b&&by[bx]!=BgE.b))bs=1;if(bw&&bt!=bm&&bt!=(bn-1|0)&&bu!=bq&&bu!=(br-1|0))bv=bo;}bv=bv+(-1)|0;}bu=bu+1|0;}bt=bt+1|0;}if(!bs){while(bm<bn){bA=((bm+n|0)+0.5-e)/bd;bi=bA
*bA;bx=bq;while(bx<br){bB=((bx+p|0)+0.5-g)/bd;bC=(((bm*16|0)+bx|0)*128|0)+bp|0;bw=0;bD=bp-1|0;bB=bB*bB;while(bD>=bo){bl=(bD+0.5-f)/be;if(bl>(-0.7)&&bi+bl*bl+bB<1.0){by=d.data;bz=by[bC];L();if(bz==BeR.b)bw=1;if(!(bz!=BeV.b&&bz!=BeS.b&&bz!=BeR.b)){if(bD<10)by[bC]=BfZ.b<<24>>24;else{by[bC]=0;if(bw){bz=bC-1|0;if(by[bz]==BeS.b)by[bz]=BeR.b<<24>>24;}}}}bC=bC+(-1)|0;bD=bD+(-1)|0;}bx=bx+1|0;}bm=bm+1|0;}if(u)break a;}}}k=k+1|0;}return;}}
function ART(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r;Gv(a.a);Gv(a.a);e=b-8|0;f=b+8|0;g=c-8|0;h=c+8|0;while(e<=f){i=g;while(i<=h){j=E(a.a,E(a.a,E(a.a,40)+1|0)+1|0);if(E(a.a,15))j=0;k=0;while(k<j){l=(e*16|0)+E(a.a,16)|0;m=E(a.a,E(a.a,120)+8|0);n=(i*16|0)+E(a.a,16)|0;o=1;if(!E(a.a,4)){APS(a,b,c,d,l,m,n);o=o+E(a.a,4)|0;}p=0;while(p<o){q=N(a.a)*3.1415927410125732*2.0;r=(N(a.a)-0.5)*2.0/8.0;Jb(a,b,c,d,l,m,n,N(a.a)*2.0+N(a.a),q,r,0,0,1.0);p=p+1|0;}k=k+1|0;}i=i+1|0;}e=e+1|0;}}
function Zh(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;if(b===null)b=$rt_createDoubleArray(Bj(Bj(f,g),h));a.vO=H0(a.yR,a.vO,c,d,e,f,1,h,1.0,0.0,1.0);a.vP=H0(a.yP,a.vP,c,d,e,f,1,h,100.0,0.0,100.0);a.vN=H0(a.yM,a.vN,c,d,e,f,g,h,8.555150000000001,4.277575000000001,8.555150000000001);a.vL=H0(a.yN,a.vL,c,d,e,f,g,h,684.412,684.412,684.412);a.vM=H0(a.yO,a.vM,c,d,e,f,g,h,684.412,684.412,684.412);i=0;j=0;k=0;l=g;d=g-4|0;m=l/2.0;while(k<f){n=0;while(n<h){o=(a.vO.data[j]+256.0)/512.0;if(o>1.0)o=1.0;p=a.vP.data[j]
/8000.0;if(p<0.0)p= -p;q=p*3.0-3.0;if(q>=0.0){if(q>1.0)q=1.0;q=q/6.0;}else{o=q/2.0;if(o<(-1.0))o=(-1.0);q=o/1.4/2.0;o=0.0;}r=o+0.5;s=m+q*l/16.0*4.0;j=j+1|0;t=0;while(t<g){p=t;u=(p-s)*12.0/r;if(u<0.0)u=u*4.0;v=a.vL.data[i]/512.0;q=a.vM.data[i]/512.0;w=(a.vN.data[i]/10.0+1.0)/2.0;if(w>=0.0)v=w>1.0?q:v+(q-v)*w;o=v-u;if(t>d){x=(t-d|0)/3.0;o=o*(1.0-x)+(-10.0)*x;}if(p<0.0){x=(0.0-p)/4.0;if(x<0.0)x=0.0;if(x>1.0)x=1.0;o=o*(1.0-x)+(-10.0)*x;}b.data[i]=o;i=i+1|0;t=t+1|0;}n=n+1|0;}k=k+1|0;}return b;}
function AHV(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=c*16|0;f=d*16|0;NF(a.a,a.s.lr);g=Long_add(Long_mul(Long_div(Gv(a.a),Long_fromInt(2)),Long_fromInt(2)),Long_fromInt(1));h=Long_add(Long_mul(Long_div(Gv(a.a),Long_fromInt(2)),Long_fromInt(2)),Long_fromInt(1));NF(a.a,Long_xor(Long_add(Long_mul(Long_fromInt(c),
g),Long_mul(Long_fromInt(d),h)),a.s.lr));i=0;if(i<4){j=(e+E(a.a,16)|0)+8|0;k=E(a.a,128);l=(f+E(a.a,16)|0)+8|0;b=AYl();m=a.s;n=a.a;$p=1;continue _;}o=0;if(o<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BeS.b,32);m=a.s;n=a.a;$p=2;continue _;}j=0;if(j<10){o=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfb.b,32);m=a.s;n=a.a;$p=3;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfe.b,16);m=a.s;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+E(a.a,
16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bff.b,8);m=a.s;n=a.a;$p=5;continue _;}if(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfg.b,8);m=a.s;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BgZ.b,8);m=a.s;n=a.a;$p=7;continue _;}c=(EZ(a.iP,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GW();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E5(m,1.0,1.0,1.0);b=a.s;n=a.a;q=a.s;$p=8;continue _;}c
=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.s;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be9.b);m=a.s;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be$.b);m=a.s;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be_.b);m=a.s;n=a.a;$p=13;continue _;}c=0;if(c<50)
{l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=a.s;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfZ.b);m=a.s;n=a.a;$p=15;continue _;case 1:XK(b,m,n,j,k,l);if(C()){break _;}i=i+1|0;if(i<4){j=(e+E(a.a,16)|0)+8|0;k=E(a.a,128);l=(f+E(a.a,16)|0)+8|0;b=AYl();m=a.s;n=a.a;continue _;}o=0;if(o<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BeS.b,32);m=a.s;n
=a.a;$p=2;continue _;}j=0;if(j<10){o=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfb.b,32);m=a.s;n=a.a;$p=3;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfe.b,16);m=a.s;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bff.b,8);m=a.s;n=a.a;$p=5;continue _;}if(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfg.b,8);m=a.s;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,
16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BgZ.b,8);m=a.s;n=a.a;$p=7;continue _;}c=(EZ(a.iP,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GW();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E5(m,1.0,1.0,1.0);b=a.s;n=a.a;q=a.s;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.s;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be9.b);m=a.s;n=a.a;$p=11;continue _;}if
(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be$.b);m=a.s;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be_.b);m=a.s;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=a.s;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfZ.b);m=
a.s;n=a.a;$p=15;continue _;case 2:ABO(b,m,n,j,k,l);if(C()){break _;}o=o+1|0;if(o<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BeS.b,32);m=a.s;n=a.a;continue _;}j=0;if(j<10){o=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfb.b,32);m=a.s;n=a.a;$p=3;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfe.b,16);m=a.s;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bff.b,8);m=a.s;n=a.a;$p=5;continue _;}if
(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfg.b,8);m=a.s;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BgZ.b,8);m=a.s;n=a.a;$p=7;continue _;}c=(EZ(a.iP,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GW();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E5(m,1.0,1.0,1.0);b=a.s;n=a.a;q=a.s;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,
Be8.b);m=a.s;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be9.b);m=a.s;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be$.b);m=a.s;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be_.b);m=a.s;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,
BfY.b);m=a.s;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfZ.b);m=a.s;n=a.a;$p=15;continue _;case 3:ABO(b,m,n,o,k,l);if(C()){break _;}j=j+1|0;if(j<10){o=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfb.b,32);m=a.s;n=a.a;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfe.b,16);m=a.s;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)
|0;b=new Ch;L();Cm(b,Bff.b,8);m=a.s;n=a.a;$p=5;continue _;}if(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfg.b,8);m=a.s;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BgZ.b,8);m=a.s;n=a.a;$p=7;continue _;}c=(EZ(a.iP,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GW();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E5(m,1.0,1.0,1.0);b=a.s;n=a.a;q=a.s;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)
|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.s;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be9.b);m=a.s;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be$.b);m=a.s;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be_.b);m=a.s;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p
=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=a.s;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfZ.b);m=a.s;n=a.a;$p=15;continue _;case 4:ABO(b,m,n,j,k,l);if(C()){break _;}c=c+1|0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfe.b,16);m=a.s;n=a.a;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bff.b,8);m=a.s;n=a.a;$p=5;continue _;}if
(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfg.b,8);m=a.s;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BgZ.b,8);m=a.s;n=a.a;$p=7;continue _;}c=(EZ(a.iP,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GW();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E5(m,1.0,1.0,1.0);b=a.s;n=a.a;q=a.s;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,
Be8.b);m=a.s;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be9.b);m=a.s;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be$.b);m=a.s;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be_.b);m=a.s;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,
BfY.b);m=a.s;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfZ.b);m=a.s;n=a.a;$p=15;continue _;case 5:ABO(b,m,n,j,k,l);if(C()){break _;}c=c+1|0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bff.b,8);m=a.s;n=a.a;continue _;}if(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfg.b,8);m=a.s;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)
|0;b=new Ch;L();Cm(b,BgZ.b,8);m=a.s;n=a.a;$p=7;continue _;}c=(EZ(a.iP,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GW();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E5(m,1.0,1.0,1.0);b=a.s;n=a.a;q=a.s;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.s;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be9.b);m=a.s;n=a.a;$p=11;continue _;}if(!E(a.a,
4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be$.b);m=a.s;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be_.b);m=a.s;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=a.s;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfZ.b);m=a.s;n=a.a;$p
=15;continue _;case 6:ABO(b,m,n,c,j,k);if(C()){break _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BgZ.b,8);m=a.s;n=a.a;$p=7;continue _;}c=(EZ(a.iP,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GW();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E5(m,1.0,1.0,1.0);b=a.s;n=a.a;q=a.s;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.s;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e
+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be9.b);m=a.s;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be$.b);m=a.s;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be_.b);m=a.s;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=a.s;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l
=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfZ.b);m=a.s;n=a.a;$p=15;continue _;case 7:ABO(b,m,n,c,j,k);if(C()){break _;}c=(EZ(a.iP,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GW();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E5(m,1.0,1.0,1.0);b=a.s;n=a.a;q=a.s;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.s;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c
=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be9.b);m=a.s;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be$.b);m=a.s;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be_.b);m=a.s;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=a.s;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l
=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfZ.b);m=a.s;n=a.a;$p=15;continue _;case 8:$z=ALE(q,l,p);if(C()){break _;}d=$z;$p=9;case 9:AEK(m,b,n,l,d,p);if(C()){break _;}k=k+1|0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E5(m,1.0,1.0,1.0);b=a.s;n=a.a;q=a.s;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.s;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+
E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be9.b);m=a.s;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be$.b);m=a.s;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be_.b);m=a.s;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=a.s;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,
E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfZ.b);m=a.s;n=a.a;$p=15;continue _;case 10:ACL(b,m,n,l,p,r);if(C()){break _;}c=c+1|0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.s;n=a.a;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be9.b);m=a.s;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be$.b);m=a.s;n=a.a;$p=12;continue _;}if
(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be_.b);m=a.s;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=a.s;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfZ.b);m=a.s;n=a.a;$p=15;continue _;case 11:ACL(b,m,n,c,l,p);if(C()){break _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,
16)|0)+8|0;b=new BS;L();BT(b,Be$.b);m=a.s;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be_.b);m=a.s;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=a.s;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfZ.b);m=a.s;n=a.a;$p=15;continue _;case 12:ACL(b,m,n,c,l,p);if(C())
{break _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be_.b);m=a.s;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=a.s;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfZ.b);m=a.s;n=a.a;$p=15;continue _;case 13:ACL(b,m,n,c,l,p);if(C()){break _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,
120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=a.s;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfZ.b);m=a.s;n=a.a;$p=15;continue _;case 14:ALY(b,m,n,l,p,r);if(C()){break _;}c=c+1|0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=a.s;n=a.a;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8
|0;b=new Cn;L();Cs(b,BfZ.b);m=a.s;n=a.a;$p=15;case 15:ALY(b,m,n,l,p,r);if(C()){break _;}c=c+1|0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfZ.b);m=a.s;n=a.a;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function A0f(a){return 0;}
function Wq(){var a=this;D.call(a);a.gD=null;a.oP=null;a.xm=null;a.uO=null;a.zr=0;a.n$=0;a.fe=0;a.by=0;a.hs=0;a.ob=0;a.lg=0;a.hl=0;a.Jd=0;a.kW=0;a.nn=0;}
function Cv(a,b,c){a.oP.data[b]=c;}
function Eo(a,b){return a.oP.data[b];}
function MF(a){return QG(a,0);}
function QG(a,b){Vf(a,b);return a.gD.data[(b*2|0)+1|0];}
function EL(a,b,c){a.gD.data[b*2|0]=c;}
function MV(a,b,c){a.gD.data[(b*2|0)+1|0]=c;}
function Hk(a,b){return a.gD.data[b*2|0];}
function JD(a,b){return a.gD.data[(b*2|0)+1|0];}
function AM3(a,b){var c,d;c=Hk(a,b);d=JD(a,b);if((d|c|(d-c|0))>=0&&d<=Bh(a.uO))return Eu(a.uO,c,d);return null;}
function AEJ(a){return Pz(a,0);}
function Pz(a,b){Vf(a,b);return a.gD.data[b*2|0];}
function AC2(a){if(a.gD.data[0]==(-1)){a.gD.data[0]=a.hs;a.gD.data[1]=a.hs;}a.kW=MF(a);}
function Tb(a,b){return a.xm.data[b];}
function FE(a,b,c){a.xm.data[b]=c;}
function Vf(a,b){var c;if(!a.n$){c=new D1;O(c);M(c);}if(b>=0&&b<a.zr)return;c=new BO;Bl(c,VO(b));M(c);}
function ARx(a){a.n$=1;}
function A$T(a){return a.n$;}
function Xe(a,b,c,d){a.n$=0;a.nn=2;MW(a.gD,(-1));MW(a.oP,(-1));if(b!==null)a.uO=b;if(c>=0){a.fe=c;a.by=d;}a.hs=a.fe;}
function Z4(a){Xe(a,null,(-1),(-1));}
function APW(a,b){a.hs=b;if(a.kW>=0)b=a.kW;a.kW=b;}
function A4m(a){return a.fe;}
function A7q(a){return a.by;}
function A5e(a,b){a.nn=b;}
function AWf(a){return a.nn;}
function A6i(a){return a.lg;}
function A3i(a){return a.ob;}
function A3M(a){return a.kW;}
function VH(){var a=this;D.call(a);a.cq=null;a.lX=0;a.fU=0;a.fV=0;a.fv=0;a.fa=0;a.eJ=0;}
function AOl(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.lX;while(c<=a.fv){d=a.fV;while(d<=a.eJ){a:{if(EH(b,c,0,d)){e=a.fU;while(true){if(e>a.fa)break a;if(e>=0&&e<128){f=a.cq;$p=1;continue _;}e=e+1|0;}}}d=d+1|0;}c=c+1|0;}return;case 1:$z=ALh(b,f,c,e,d);if(C()){break _;}g=$z;$p=2;case 2:$z=ACt(b,
c,e,d);if(C()){break _;}h=$z;L();i=BgB.data[h];if(!i)i=1;j=0;if(a.cq===Bkw){$p=3;continue _;}if(a.cq===Bkx)j=BgD.data[h];if(i>=15&&!j){j=0;if(g!=j){f=a.cq;$p=10;continue _;}b:while(true){e=e+1|0;while(e>a.fa){while(true){d=d+1|0;while(d>a.eJ){c=c+1|0;if(c>a.fv)break b;d=a.fV;}if(!EH(b,c,0,d))continue;else break;}e=a.fU;}if(e<0)continue;if(e>=128)continue;else{f=a.cq;$p=1;continue _;}}return;}f=a.cq;h=c-1|0;$p=4;continue _;case 3:$z=Zu(b,c,e,d);if(C()){break _;}h=$z;if(h)j=15;if(i>=15&&!j){j=0;if(g!=j){f=a.cq;$p
=10;continue _;}c:while(true){e=e+1|0;while(e>a.fa){while(true){d=d+1|0;while(d>a.eJ){c=c+1|0;if(c>a.fv)break c;d=a.fV;}if(!EH(b,c,0,d))continue;else break;}e=a.fU;}if(e<0)continue;if(e>=128)continue;else{f=a.cq;$p=1;continue _;}}return;}f=a.cq;h=c-1|0;$p=4;case 4:$z=ALh(b,f,h,e,d);if(C()){break _;}k=$z;f=a.cq;h=c+1|0;$p=5;case 5:$z=ALh(b,f,h,e,d);if(C()){break _;}l=$z;f=a.cq;h=e-1|0;$p=6;case 6:$z=ALh(b,f,c,h,d);if(C()){break _;}m=$z;f=a.cq;h=e+1|0;$p=7;case 7:$z=ALh(b,f,c,h,d);if(C()){break _;}n=$z;f=a.cq;h
=d-1|0;$p=8;case 8:$z=ALh(b,f,c,e,h);if(C()){break _;}o=$z;f=a.cq;h=d+1|0;$p=9;case 9:$z=ALh(b,f,c,e,h);if(C()){break _;}p=$z;if(l<=k)l=k;if(m<=l)m=l;if(n<=m)n=m;if(o<=n)o=n;if(p<=o)p=o;h=p-i|0;if(h<0)h=0;if(j<=h)j=h;if(g!=j){f=a.cq;$p=10;continue _;}d:while(true){e=e+1|0;while(e>a.fa){while(true){d=d+1|0;while(d>a.eJ){c=c+1|0;if(c>a.fv)break d;d=a.fV;}if(!EH(b,c,0,d))continue;else break;}e=a.fU;}if(e<0)continue;if(e>=128)continue;else{f=a.cq;$p=1;continue _;}}return;case 10:AMr(b,f,c,e,d,j);if(C()){break _;}k
=j-1|0;if(k<0)k=0;f=a.cq;h=c-1|0;$p=11;case 11:AP8(b,f,h,e,d,k);if(C()){break _;}f=a.cq;h=e-1|0;$p=12;case 12:AP8(b,f,c,h,d,k);if(C()){break _;}f=a.cq;h=d-1|0;$p=13;case 13:AP8(b,f,c,e,h,k);if(C()){break _;}h=c+1|0;if(h>=a.fv){f=a.cq;$p=14;continue _;}h=e+1|0;if(h>=a.fa){f=a.cq;$p=15;continue _;}h=d+1|0;if(h>=a.eJ){f=a.cq;$p=16;continue _;}e:while(true){e=e+1|0;while(e>a.fa){while(true){d=d+1|0;while(d>a.eJ){c=c+1|0;if(c>a.fv)break e;d=a.fV;}if(!EH(b,c,0,d))continue;else break;}e=a.fU;}if(e<0)continue;if(e>=
128)continue;else{f=a.cq;$p=1;continue _;}}return;case 14:AP8(b,f,h,e,d,k);if(C()){break _;}h=e+1|0;if(h>=a.fa){f=a.cq;$p=15;continue _;}h=d+1|0;if(h>=a.eJ){f=a.cq;$p=16;continue _;}a:while(true){e=e+1|0;while(e>a.fa){while(true){d=d+1|0;while(d>a.eJ){c=c+1|0;if(c>a.fv)break a;d=a.fV;}if(!EH(b,c,0,d))continue;else break;}e=a.fU;}if(e<0)continue;if(e>=128)continue;else{f=a.cq;$p=1;continue _;}}return;case 15:AP8(b,f,c,h,d,k);if(C()){break _;}h=d+1|0;if(h>=a.eJ){f=a.cq;$p=16;continue _;}f:while(true){e=e+1|0;while
(e>a.fa){while(true){d=d+1|0;while(d>a.eJ){c=c+1|0;if(c>a.fv)break f;d=a.fV;}if(!EH(b,c,0,d))continue;else break;}e=a.fU;}if(e<0)continue;if(e>=128)continue;else{f=a.cq;$p=1;continue _;}}return;case 16:AP8(b,f,c,e,h,k);if(C()){break _;}g:while(true){e=e+1|0;while(e>a.fa){while(true){d=d+1|0;while(d>a.eJ){c=c+1|0;if(c>a.fv)break g;d=a.fV;}if(!EH(b,c,0,d))continue;else break;}e=a.fU;}if(e<0)continue;if(e>=128)continue;else{f=a.cq;$p=1;continue _;}}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function ALz(a,b,c,d,e,f,g){if(b>=a.lX&&c>=a.fU&&d>=a.fV&&e<=a.fv&&f<=a.fa&&g<=a.eJ)return 1;if(b>=(a.lX-1|0)&&c>=(a.fU-1|0)&&d>=(a.fV-1|0)&&e<=(a.fv+1|0)&&f<=(a.fa+1|0)&&g<=(a.eJ+1|0)){if(b<a.lX)a.lX=b;if(c<a.fU)a.fU=c;if(d<a.fV)a.fV=d;if(e>a.fv)a.fv=e;if(f>a.fa)a.fa=f;if(g>a.eJ)a.eJ=g;return 1;}return 0;}
function R2(){}
function AF5(){var a=this;F$.call(a);a.ij=0;a.d$=null;}
function AWg(a){var b=new AF5();A66(b,a);return b;}
function A66(a,b){K8(a,b);a.d$=$rt_createByteArray(8);}
function AHH(a){a.fl.lq();}
function Q3(a,b,c,d){var e;if(b!==null){a.fl.gt(b,c,d);a.ij=a.ij+d|0;return;}e=new ED;O(e);M(e);}
function KI(a,b){a.fl.nI(b);a.ij=a.ij+1|0;}
function APk(a,b){Uz(a,$rt_doubleToLongBits(b));}
function APf(a,b){JJ(a,$rt_floatToIntBits(b));}
function JJ(a,b){a.d$.data[0]=b>>24<<24>>24;a.d$.data[1]=b>>16<<24>>24;a.d$.data[2]=b>>8<<24>>24;a.d$.data[3]=b<<24>>24;a.fl.gt(a.d$,0,4);a.ij=a.ij+4|0;}
function Uz(a,b){a.d$.data[0]=Long_shr(b,56).lo<<24>>24;a.d$.data[1]=Long_shr(b,48).lo<<24>>24;a.d$.data[2]=Long_shr(b,40).lo<<24>>24;a.d$.data[3]=b.hi<<24>>24;a.d$.data[4]=Long_shr(b,24).lo<<24>>24;a.d$.data[5]=Long_shr(b,16).lo<<24>>24;a.d$.data[6]=Long_shr(b,8).lo<<24>>24;a.d$.data[7]=b.lo<<24>>24;a.fl.gt(a.d$,0,8);a.ij=a.ij+8|0;}
function Z7(a,b){a.d$.data[0]=b>>8<<24>>24;a.d$.data[1]=b<<24>>24;a.fl.gt(a.d$,0,2);a.ij=a.ij+2|0;}
function AN_(a,b,c,d){var e;c=c.data;e=d+1|0;c[d]=b>>8<<24>>24;d=e+1|0;c[e]=b<<24>>24;return d;}
function Xm(a,b){var c,d,e;c=AGc(a,b);if(Long_gt(c,Long_fromInt(65535))){b=new B1;Bl(b,B(882));M(b);}d=c.lo;e=$rt_createByteArray(d+2|0);Q3(a,e,0,AO5(a,b,e,AN_(a,d,e,0)));}
function AGc(a,b){var c,d,e,f;c=0;d=Bh(b);e=0;while(e<d){f=Y(b,e);c=f>0&&f<=127?c+1|0:f>2047?c+3|0:c+2|0;e=e+1|0;}return Long_fromInt(c);}
function AO5(a,b,c,d){var e,f,g,h,i,j,k;e=Bh(b);f=0;while(f<e){g=Y(b,f);if(g>0&&g<=127){h=c.data;i=d+1|0;h[d]=g<<24>>24;}else if(g<=2047){h=c.data;j=d+1|0;h[d]=(192|31&g>>6)<<24>>24;i=j+1|0;h[j]=(128|63&g)<<24>>24;}else{h=c.data;i=d+1|0;h[d]=(224|15&g>>12)<<24>>24;k=i+1|0;h[i]=(128|63&g>>6)<<24>>24;i=k+1|0;h[k]=(128|63&g)<<24>>24;}f=f+1|0;d=i;}return d;}
function AFZ(){D.call(this);}
function BmV(){var a=new AFZ();A0h(a);return a;}
function A0h(a){return;}
function NS(){D.call(this);}
var BmW=null;var BmX=null;function BmY(){var a=new NS();ABk(a);return a;}
function ABk(a){return;}
function ABU(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=$rt_doubleToLongBits(b);c.y3=Long_eq(Long_and(d,new Long(0, 2147483648)),Long_ZERO)?0:1;e=Long_and(d,new Long(4294967295, 1048575));f=Long_shr(d,52).lo&2047;if(Long_eq(e,Long_ZERO)&&!f){c.uV=Long_ZERO;c.tZ=0;return;}g=0;if(f)e=Long_or(e,new Long(0, 1048576));else{e=Long_shl(e,1);while(Long_eq(Long_and(e,new Long(0, 1048576)),Long_ZERO)){e=Long_shl(e,1);f=f+(-1)|0;g=g+1|0;}}h=AOq(BmX,f);if(h<0)h= -h-2|0;i=12+(f-BmX.data[h]|0)|0;j=Qo(e,BmW.data[h],i);if(Long_ge(j,
new Long(2808348672, 232830643))){h=h+1|0;i=12+(f-BmX.data[h]|0)|0;j=Qo(e,BmW.data[h],i);}k=Long_shru(BmW.data[h],(63-i|0)-g|0);l=Long_shr(Long_add(k,Long_fromInt(1)),1);m=Long_shr(k,1);if(Long_eq(e,new Long(0, 1048576)))m=Long_shr(m,2);n=Long_fromInt(10);while(Long_le(n,m)){n=Long_mul(n,Long_fromInt(10));}if(Long_ge(Long_rem(j,n),Long_div(m,Long_fromInt(2))))n=Long_div(n,Long_fromInt(10));o=Long_fromInt(1);while(Long_le(o,l)){o=Long_mul(o,Long_fromInt(10));}if(Long_gt(Long_sub(o,Long_rem(j,o)),Long_div(l,Long_fromInt(2))))o
=Long_div(o,Long_fromInt(10));f=Long_compare(n,o);e=f>0?Long_mul(Long_div(j,n),n):f<0?Long_add(Long_mul(Long_div(j,o),o),o):Long_mul(Long_div(Long_add(j,Long_div(o,Long_fromInt(2))),o),o);if(Long_ge(e,new Long(2808348672, 232830643))){h=h+1|0;e=Long_div(e,Long_fromInt(10));}else if(Long_lt(e,new Long(1569325056, 23283064))){h=h+(-1)|0;e=Long_mul(e,Long_fromInt(10));}c.uV=e;c.tZ=h-330|0;}
function Qo(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=Long_and(b,Long_fromInt(65535));f=Long_and(Long_shru(b,16),Long_fromInt(65535));g=Long_and(Long_shru(b,32),Long_fromInt(65535));h=Long_and(Long_shru(b,48),Long_fromInt(65535));i=Long_and(c,Long_fromInt(65535));j=Long_and(Long_shru(c,16),Long_fromInt(65535));k=Long_and(Long_shru(c,32),Long_fromInt(65535));l=Long_and(Long_shru(c,48),Long_fromInt(65535));m=Long_add(Long_add(Long_mul(k,e),Long_mul(j,f)),Long_mul(i,g));n=Long_add(Long_add(Long_add(Long_mul(l,e),Long_mul(k,
f)),Long_mul(j,g)),Long_mul(i,h));o=Long_add(Long_add(Long_shl(Long_mul(l,h),32+d|0),Long_shl(Long_add(Long_mul(l,g),Long_mul(k,h)),16+d|0)),Long_shl(Long_add(Long_add(Long_mul(l,f),Long_mul(k,g)),Long_mul(j,h)),d));return Long_add(d>16?Long_add(o,Long_shl(n,d-16|0)):Long_add(o,Long_shru(n,16-d|0)),Long_shru(m,32-d|0));}
function ABi(){var b,c,d,e,f,g,h,i,j,k;BmW=$rt_createLongArray(660);BmX=$rt_createIntArray(660);b=new Long(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=BmW.data;g=d+330|0;f[g]=Ml(e,Long_fromInt(80));BmX.data[g]=c;e=Ml(e,Long_fromInt(10));h=AIU(e,Long_fromInt(10));while(Long_le(e,b)&&Long_eq(Long_and(e,new Long(0, 2147483648)),Long_ZERO)){e=Long_shl(e,1);c=c+1|0;h=Long_shl(h,1);}e=Long_add(e,Long_div(h,Long_fromInt(10)));d=d+1|0;}d=1023;i=0;while(i<330){j=0;e=b;while(Long_gt(e,new Long(3435973836, 214748364)))
{e=Long_shr(e,1);j=j+1|0;d=d+(-1)|0;}k=Long_mul(e,Long_fromInt(10));b=j<=0?k:Long_add(k,Long_shr(Long_mul(Long_and(b,Long_fromInt((1<<j)-1|0)),Long_fromInt(10)),j));f=BmW.data;g=(330-i|0)-1|0;f[g]=Ml(b,Long_fromInt(80));BmX.data[g]=d;i=i+1|0;}}
function HL(){D.call(this);}
function AMO(){var a=this;HL.call(a);a.nF=null;a.rF=0;}
function G8(a,b){var c=new AMO();AT$(c,a,b);return c;}
function AT$(a,b,c){var d;a.rF=c;a.nF=J(Pt,c);d=0;while(d<c){a.nF.data[d]=BbK(b);d=d+1|0;}}
function EZ(a,b,c){var d,e,f;d=0.0;e=1.0;f=0;while(f<a.rF){d=d+AGX(a.nF.data[f],b*e,c*e)/e;e=e/2.0;f=f+1|0;}return d;}
function U0(a,b,c,d){var e,f,g;e=0.0;f=1.0;g=0;while(g<a.rF){e=e+Ld(a.nF.data[g],b*f,c*f,d*f)/f;f=f/2.0;g=g+1|0;}return e;}
function H0(a,b,c,d,e,f,g,h,i,j,k){var l,m,n,o;if(b===null)b=$rt_createDoubleArray(Bj(Bj(f,g),h));else{l=0;while(true){m=b.data;if(l>=m.length)break;m[l]=0.0;l=l+1|0;}}n=1.0;o=0;while(o<a.rF){AQr(a.nF.data[o],b,c,d,e,f,g,h,i*n,j*n,k*n,n);n=n/2.0;o=o+1|0;}return b;}
function ACN(){var a=this;D.call(a);a.l$=null;a.mZ=0;a.FB=Long_ZERO;}
function ATn(a,b,c){var d=new ACN();A1s(d,a,b,c);return d;}
function A1s(a,b,c,d){a.l$=b;a.mZ=c;a.FB=d;}
function Pt(){var a=this;HL.call(a);a.b3=null;a.u9=0.0;a.x5=0.0;a.wn=0.0;}
function BmZ(){var a=new Pt();A_F(a);return a;}
function BbK(a){var b=new Pt();Zi(b,a);return b;}
function A_F(a){Zi(a,new Dz);}
function Zi(a,b){var c,d,e,f,g;a.b3=$rt_createIntArray(512);a.u9=Cl(b)*256.0;a.x5=Cl(b)*256.0;a.wn=Cl(b)*256.0;c=0;while(c<256){d=a.b3.data;e=c+1|0;d[c]=c;c=e;}c=0;while(c<256){f=E(b,256-c|0)+c|0;g=a.b3.data[c];a.b3.data[c]=a.b3.data[f];a.b3.data[f]=g;a.b3.data[c+256|0]=a.b3.data[c];c=c+1|0;}}
function Ld(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;e=b+a.u9;f=c+a.x5;g=d+a.wn;h=e|0;i=f|0;j=g|0;if(e<h)h=h+(-1)|0;if(f<i)i=i+(-1)|0;if(g<j)j=j+(-1)|0;k=h&255;l=i&255;m=j&255;c=e-h;d=f-i;n=g-j;o=c*c*c*(c*(c*6.0-15.0)+10.0);p=d*d*d*(d*(d*6.0-15.0)+10.0);q=n*n*n*(n*(n*6.0-15.0)+10.0);r=a.b3.data[k]+l|0;s=a.b3.data[r]+m|0;t=a.b3.data[r+1|0]+m|0;u=a.b3.data[k+1|0]+l|0;v=a.b3.data[u]+m|0;w=a.b3.data[u+1|0]+m|0;e=Dr(a,a.b3.data[s],c,d,n);k=a.b3.data[v];x=c-1.0;b=DM(a,o,e,Dr(a,k,x,d,n));k=a.b3.data[t];e
=d-1.0;b=DM(a,p,b,DM(a,o,Dr(a,k,c,e,n),Dr(a,a.b3.data[w],x,e,n)));k=a.b3.data[s+1|0];f=n-1.0;return DM(a,q,b,DM(a,p,DM(a,o,Dr(a,k,c,d,f),Dr(a,a.b3.data[v+1|0],x,d,f)),DM(a,o,Dr(a,a.b3.data[t+1|0],c,e,f),Dr(a,a.b3.data[w+1|0],x,e,f))));}
function DM(a,b,c,d){return c+b*(d-c);}
function Dr(a,b,c,d,e){var f,g;f=b&15;g=f>=8?d:c;if(f>=4)d=f!=12&&f!=14?e:c;if(f&1)g= -g;if(f&2)d= -d;return g+d;}
function AGX(a,b,c){return Ld(a,b,c,0.0);}
function A4K(a,b,c,d){return Ld(a,b,c,d);}
function AQr(a,b,c,d,e,f,g,h,i,j,k,l){var m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs;m=0;n=1.0/l;o=(-1);p=0.0;q=0.0;r=0.0;s=0.0;t=0;while(t<f){u=(c+t|0)*i+a.u9;v=u|0;if(u<v)v=v+(-1)|0;w=v&255;u=u-v;x=u*u*u*(u*(u*6.0-15.0)+10.0);y=0;v=w+1|0;z=u-1.0;while(y<h){ba=(e+y|0)*k+a.wn;bb=ba|0;if(ba<bb)bb=bb+(-1)|0;bc=bb&255;bd=ba-bb;be=bd*bd*bd*(bd*(bd*6.0-15.0)+10.0);bf=0;ba=bd-1.0;while(bf<g){bg=(d+bf|0)*j+a.x5;bh=bg|0;if(bg<bh)bh=bh+(-1)|0;bi=bh&255;l=bg-bh;bj=l*l*l*(l*(l
*6.0-15.0)+10.0);if(bf&&bi==o)bi=o;else{bk=a.b3.data[w]+bi|0;bl=a.b3.data[bk]+bc|0;bm=a.b3.data[bk+1|0]+bc|0;bn=a.b3.data[v]+bi|0;bo=a.b3.data[bn]+bc|0;bp=a.b3.data[bn+1|0]+bc|0;p=DM(a,x,Dr(a,a.b3.data[bl],u,l,bd),Dr(a,a.b3.data[bo],z,l,bd));bn=a.b3.data[bm];bq=l-1.0;q=DM(a,x,Dr(a,bn,u,bq,bd),Dr(a,a.b3.data[bp],z,bq,bd));r=DM(a,x,Dr(a,a.b3.data[bl+1|0],u,l,ba),Dr(a,a.b3.data[bo+1|0],z,l,ba));s=DM(a,x,Dr(a,a.b3.data[bm+1|0],u,bq,ba),Dr(a,a.b3.data[bp+1|0],z,bq,ba));}br=b.data;bs=DM(a,be,DM(a,bj,p,q),DM(a,bj,
r,s));bn=m+1|0;br[m]=br[m]+bs*n;bf=bf+1|0;m=bn;o=bi;}y=y+1|0;}t=t+1|0;}}
function T3(){D.call(this);this.gz=null;}
function Je(a){var b=new T3();AJz(b,a);return b;}
function AII(a){var b=new T3();A0D(b,a);return b;}
function AJz(a,b){a.gz=$rt_createByteArray(b>>1);}
function A0D(a,b){a.gz=b;}
function Ij(a,b,c,d){var e,f;e=b<<11|d<<7|c;f=e>>1;return !(e&1)?a.gz.data[f]&15:a.gz.data[f]>>4&15;}
function Ej(a,b,c,d,e){var f,g;f=b<<11|d<<7|c;g=f>>1;if(!(f&1))a.gz.data[g]=(a.gz.data[g]&240|e&15)<<24>>24;else a.gz.data[g]=(a.gz.data[g]&15|(e&15)<<4)<<24>>24;}
function JH(a){return a.gz===null?0:1;}
function E2(){EX.call(this);}
var Bm0=null;var BfF=null;var Bm1=null;var Bm2=null;function AM$(){var b,c,d;b=new E2;FO(b,B(883),0);Bm0=b;b=new E2;FO(b,B(884),1);BfF=b;b=new E2;FO(b,B(885),2);Bm1=b;c=J(E2,3);d=c.data;d[0]=Bm0;d[1]=BfF;d[2]=Bm1;Bm2=c;}
function Vl(){Fa.call(this);}
var Bm3=null;function Ml(b,c){return Long_udiv(b, c);}
function AIU(b,c){return Long_urem(b, c);}
function ALX(){Bm3=F($rt_longcls());}
function Ty(){D.call(this);this.CE=null;}
function ASm(a){CM(a.CE,K0(1));}
function A4r(a){ASm(a);}
function Tv(){D.call(this);this.C_=null;}
function ASt(a){CM(a.C_,K0(0));}
function AYi(a){ASt(a);}
function Rg(){D.call(this);this.Bq=null;}
function XM(a){CM(a.Bq,K0(1));}
function A8Q(a){XM(a);}
function Rj(){D.call(this);this.BJ=null;}
function ASd(a){CM(a.BJ,K0(0));}
function A7d(a){ASd(a);}
function Re(){var a=this;D.call(a);a.CM=null;a.u3=null;}
function ACq(a){CM(a.CM,a.u3.result===null?Bm1:!(Ur(a.u3.result)?1:0)?Bm0:BfF);}
function A5T(a){ACq(a);}
function Rf(){D.call(this);this.Eb=null;}
function AB5(a){CM(a.Eb,Bm1);}
function A3e(a){AB5(a);}
function Rh(){var a=this;D.call(a);a.EJ=null;a.Ej=null;a.yT=null;a.vz=null;a.Be=0;a.C3=0;a.xa=null;}
function AMF(a){var b,c;b=a.EJ.result;if(b!==null&&b.key!==null&&b.value!==null){c=$rt_str(AZR(b.key));if(c!==null&&Iw(c,a.vz)&&!(!a.Be&&Hg(c,47,Bh(a.vz)+1|0)!=(-1))){if(!(Ur(b.value)?1:0))Ft(a.xa,ATn(c,0,Long_add(new Long(596067632, 383),Long_fromInt(A0H(b.value)))));else if(a.C3)Ft(a.xa,ATn(c,1,Long_fromInt(-1)));}b.continue();return;}CM(a.Ej,CX(a.yT.data[0]));}
function A7k(a){AMF(a);}
function Ri(){var a=this;D.call(a);a.DJ=null;a.wE=null;}
function AK7(a){CM(a.DJ,CX(a.wE.data[0]<=0?(-1):a.wE.data[0]));}
function A1G(a){AK7(a);}
function Eq(){D.call(this);}
function E5(a,b,c,d){return;}
function Q_(){Eq.call(this);}
function GW(){var a=new Q_();A60(a);return a;}
function A60(a){return;}
function AEK(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=E(c,3)+4|0;h=1;if(e>=1){i=e+g|0;if((i+1|0)<=128){j=(e+1|0)+g|0;k=j-2|0;l=e;a:while(true){if(l>j){if(!h)return 0;m=e-1|0;$p=1;continue _;}n=1;if(l==e)n=0;if(l>=k)n=2;o=d-n|0;while(o<=(d+n
|0)&&h){p=f-n|0;while(p<=(f+n|0)&&h){if(l>=0&&l<128)break a;h=0;p=p+1|0;}o=o+1|0;}l=l+1|0;}$p=7;continue _;}}return 0;case 1:$z=ACt(b,d,m,f);if(C()){break _;}k=$z;L();if(!(k!=BeR.b&&k!=BeS.b)&&e<((128-g|0)-1|0)){k=BeS.b;$p=2;continue _;}return 0;case 2:ALq(b,d,m,f,k);if(C()){break _;}k=(e-3|0)+g|0;b:while(true){if(k>i){k=0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;}o=k-i|0;q=1-(o/2|0)|0;r=d-q|0;l=d+q|0;m=f-q|0;h=f+q|0;while(r<=l){j=r-d|0;s=m;while(s<=h){t=s-f|0;if(H_(j)!=q)break b;if(H_(t)!=q)break b;if(E(c,
2)&&o)break b;s=s+1|0;}r=r+1|0;}k=k+1|0;}u=BgA.data;$p=5;continue _;case 3:$z=ACt(b,d,o,f);if(C()){break _;}m=$z;if(m&&m!=Be3.b){k=k+1|0;if(k>=g)return 1;o=e+k|0;continue _;}m=Be2.b;$p=4;case 4:ALq(b,d,o,f,m);if(C()){break _;}k=k+1|0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;case 5:$z=ACt(b,r,k,s);if(C()){break _;}t=$z;if(!u[t]){t=Be3.b;$p=6;continue _;}while(true){s=s+1|0;while(s>h){r=r+1|0;while(r>l){k=k+1|0;if(k>i){k=0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;}o=k-i|0;q=1-(o/2|0)|0;r=d-q|0;l=d+q|0;m=f-q|0;h
=f+q|0;}j=r-d|0;s=m;}t=s-f|0;if(H_(j)!=q)break;if(H_(t)!=q)break;if(!E(c,2))continue;if(!o)continue;else break;}u=BgA.data;continue _;case 6:ALq(b,r,k,s,t);if(C()){break _;}while(true){s=s+1|0;while(s>h){r=r+1|0;while(r>l){k=k+1|0;if(k>i){k=0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;}o=k-i|0;q=1-(o/2|0)|0;r=d-q|0;l=d+q|0;m=f-q|0;h=f+q|0;}j=r-d|0;s=m;}t=s-f|0;if(H_(j)!=q)break;if(H_(t)!=q)break;if(!E(c,2))continue;if(!o)continue;else break;}u=BgA.data;$p=5;continue _;case 7:$z=ACt(b,o,l,p);if(C()){break _;}r
=$z;if(r){L();if(r!=Be3.b)h=0;}while(true){p=p+1|0;while(!(p<=(f+n|0)&&h)){o=o+1|0;while(!(o<=(d+n|0)&&h)){l=l+1|0;if(l>j){if(!h)return 0;m=e-1|0;$p=1;continue _;}n=1;if(l==e)n=0;if(l>=k)n=2;o=d-n|0;}p=f-n|0;}if(l>=0&&l<128)break;h=0;}continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function Op(){D.call(this);this.Ju=0;}
var Bm4=null;var Bm5=null;function AX0(a){var b=new Op();AN$(b,a);return b;}
function AN$(a,b){a.Ju=b;}
function K0(b){return !b?Bm5:Bm4;}
function AHN(){Bm4=AX0(1);Bm5=AX0(0);}
function SG(){var a=this;CS.call(a);a.z7=null;a.fR=null;a.xs=0;a.f3=0;}
function AD3(a){DF(a.bG);APT(1);S(a.bG,Dj(0,(a.bm/2|0)-100|0,(a.bC/4|0)+120|0,B(594)));}
function ANF(a){APT(0);}
function AYr(a){a.xs=a.xs+1|0;}
function AHg(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.hh&&!b.cC){b=a.fR;$p=1;continue _;}return;case 1:ACc(b);if(C()){break _;}c=a.K;b=null;$p=2;case 2:ADT(c,b);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,$p);}
function ACV(a,b,c){var d,e;if(c==200)a.f3=(a.f3-1|0)&3;if(!(c!=208&&c!=28))a.f3=(a.f3+1|0)&3;if(c==14&&Bh(a.fR.gq.data[a.f3])>0)a.fR.gq.data[a.f3]=Eu(a.fR.gq.data[a.f3],0,Bh(a.fR.gq.data[a.f3])-1|0);if(Ux(B(886),b)>=0&&Bh(a.fR.gq.data[a.f3])<15){d=a.fR.gq.data;c=a.f3;e=new U;X(e);e=I(e,a.fR.gq.data[a.f3]);Dx(e,b);d[c]=V(e);}}
function ABo(a,b,c,d){var e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABd(a);if(C()){break _;}DD(a,a.bY,a.z7,a.bm/2|0,40,16777215);B3();Bw(a.bm/2|0,a.bC/2|0,50.0);CC((-60.0),(-60.0),(-60.0));Bv(180.0,0.0,1.0,0.0);if(!((a.xs/6|0)%2|0))a.fR.rw=a.f3;e=a.fR;$p=2;case 2:$z=AMd(e);if(C()){break _;}f=$z;Bv((f*360|0)/16.0,0.0,1.0,0.0);e=Bkr;g=a.fR;h=(-0.5);i=(-0.75);j
=(-0.5);k=0.0;$p=3;case 3:AFn(e,g,h,i,j,k);if(C()){break _;}a.fR.rw=(-1);BD();$p=4;case 4:AFC(a,b,c,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function IG(){EX.call(this);this.z4=0;}
var Bkw=null;var Bkx=null;var Bm6=null;function A_M(a,b,c){var d=new IG();AG2(d,a,b,c);return d;}
function AG2(a,b,c,d){FO(a,b,c);a.z4=d;}
function AFu(){var b,c;Bkw=A_M(B(887),0,15);Bkx=A_M(B(888),1,0);b=J(IG,2);c=b.data;c[0]=Bkw;c[1]=Bkx;Bm6=b;}
function MC(){var a=this;D.call(a);a.ne=null;a.nS=null;}
function AZ3(a){return a.nS;}
function S2(a,b){var c;c=a.nS;a.nS=b;return c;}
function AXB(a){return a.ne;}
function La(){var a=this;MC.call(a);a.c_=null;a.di=null;a.lA=0;a.jk=0;}
function MZ(a){var b;b=LQ(a);if(b==2){if(LQ(a.di)<0)a.di=OQ(a.di);return Pv(a);}if(b!=(-2))return a;if(LQ(a.c_)>0)a.c_=Pv(a.c_);return OQ(a);}
function LQ(a){return (a.di===null?0:a.di.lA)-(a.c_===null?0:a.c_.lA)|0;}
function OQ(a){var b;b=a.c_;a.c_=b.di;b.di=a;FL(a);FL(b);return b;}
function Pv(a){var b;b=a.di;a.di=b.c_;b.c_=a;FL(a);FL(b);return b;}
function FL(a){var b,c;b=a.di===null?0:a.di.lA;c=a.c_===null?0:a.c_.lA;a.lA=DB(b,c)+1|0;a.jk=1;if(a.c_!==null)a.jk=a.jk+a.c_.jk|0;if(a.di!==null)a.jk=a.jk+a.di.jk|0;}
function AOj(a,b){return b?a.di:a.c_;}
function AMW(){var a=this;F$.call(a);a.ko=null;a.g0=0;}
function BbL(a){var b=new AMW();A6n(b,a);return b;}
function A6n(a,b){K8(a,b);a.ko=$rt_createByteArray(8192);}
function AYs(a){MG(a);a.fl.lq();}
function AXZ(a,b,c,d){var e,f,g;e=a.ko;if(e!==null&&d>=e.data.length){MG(a);a.fl.gt(b,c,d);return;}if(b===null){f=new ED;Bl(f,B(889));M(f);}if(c>=0&&c<=(b.data.length-d|0)){if(d<0){g=new N9;f=new U;X(f);Bl(g,V(Be(I(f,B(890)),d)));M(g);}if(e===null){f=new B1;O(f);M(f);}if(d>=(e.data.length-a.g0|0))MG(a);Di(b,c,e,a.g0,d);a.g0=a.g0+d|0;return;}g=new N9;f=new U;X(f);Bl(g,V(Be(I(f,B(891)),c)));M(g);}
function A37(a){var b,$$je;if(a.ko===null)return;a:{try{KN(a);}catch($$e){$$je=Bi($$e);b=$$je;break a;}a.ko=null;return;}a.ko=null;M(b);}
function AXj(a,b){var c,d,e,f;c=a.ko;if(c===null){d=new B1;O(d);M(d);}e=c.data;if(a.g0==e.length){a.fl.gt(c,0,a.g0);a.g0=0;}f=a.g0;a.g0=f+1|0;e[f]=b<<24>>24;}
function MG(a){if(a.g0>0){a.fl.gt(a.ko,0,a.g0);a.g0=0;}}
function WO(){D.call(this);}
function Bm7(){var a=new WO();AXX(a);return a;}
function AXX(a){return;}
function AI2(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();bx=$T.l();bw=$T.l();bv=$T.l();bu=$T.l();bt=$T.l();bs=$T.l();br=$T.l();bq=$T.l();bp=$T.l();bo=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p
=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Ew(b,d,e,f,B(892),4.0,(1.0+(N(b.q)-N(b.q))*0.20000000298023224)*0.699999988079071);h=F6();i=16;j=0;k=15.0;a:while(true){if(j>=i){l=g*2.0;m=K(d-l-1.0);n=K(d+l+1.0);o=K(e-l-1.0);p=K(e+l+1.0);q=D2(m,o,K(f-l-1.0),n,p,K(f+l+1.0));$p=1;continue _;}n=0;while(n<i){o=0;while(o<i){if(!(j&&j!=15&&n&&n!=15&&o&&o!=15)){r=j/k*2.0-1.0;s=n/k*2.0-1.0;t
=o/k*2.0-1.0;u=Ec(r*r+s*s+t*t);l=r/u;v=s/u;w=t/u;x=g*(0.699999988079071+N(b.q)*0.6000000238418579);y=0.30000001192092896;z=l*0.30000001192092896;ba=v*0.30000001192092896;bb=w*0.30000001192092896;l=d;v=e;w=f;if(x>0.0)break a;}o=o+1|0;}n=n+1|0;}j=j+1|0;}bc=K(l);bd=K(v);be=K(w);$p=9;continue _;case 1:$z=ADJ(b,c,q);if(C()){break _;}q=$z;bf=BY(d,e,f);bg=0;while(true){if(bg>=De(q)){bh=Ci();DC(bh,h);bi=De(bh)-1|0;r=g;s=d*1.0;u=e*1.0;bj=f*1.0;if(bi<0)return;bk=Z(bh,bi);m=bk.eC;bl=bk.eX;bm=bk.eD;$p=4;continue _;}bn=
Z(q,bg);bj=Se(bn,d,e,f)/l;if(bj<=1.0)break;bg=bg+1|0;}bo=bn.d-d;bp=bn.j-e;bq=bn.e-f;br=Ce(bo*bo+bp*bp+bq*bq);v=bo/br;w=bp/br;z=bq/br;bh=bn.L;$p=2;case 2:$z=ADy(b,bf,bh);if(C()){break _;}x=$z;bs=x;bt=(1.0-bj)*bs;m=(bt*bt+bt)/2.0*8.0*l+1.0|0;$p=3;case 3:bn.fp(c,m);if(C()){break _;}bn.g=bn.g+v*bt;bn.i=bn.i+w*bt;bn.h=bn.h+z*bt;while(true){bg=bg+1|0;if(bg>=De(q)){bh=Ci();DC(bh,h);bi=De(bh)-1|0;r=g;s=d*1.0;u=e*1.0;bj=f*1.0;if(bi<0)return;bk=Z(bh,bi);m=bk.eC;bl=bk.eX;bm=bk.eD;$p=4;continue _;}bn=Z(q,bg);bj=Se(bn,d,
e,f)/l;if(bj>1.0)continue;else break;}bo=bn.d-d;bp=bn.j-e;bq=bn.e-f;br=Ce(bo*bo+bp*bp+bq*bq);v=bo/br;w=bp/br;z=bq/br;bh=bn.L;$p=2;continue _;case 4:$z=ACt(b,m,bl,bm);if(C()){break _;}bu=$z;bv=0;y=m;bw=bl;x=bm;while(bv<1){bq=y+N(b.q);l=bw+N(b.q);v=x+N(b.q);w=bq-d;z=l-e;ba=v-f;bb=Ce(w*w+z*z+ba*ba);w=w/bb;z=z/bb;ba=ba/bb;bb=0.5/(bb/r+0.1)*(N(b.q)*N(b.q)+0.30000001192092896);w=w*bb;z=z*bb;ba=ba*bb;BW(b,B(223),(bq+s)/2.0,(l+u)/2.0,(v+bj)/2.0,w,z,ba);BW(b,B(256),bq,l,v,w,z,ba);bv=bv+1|0;}if(bu>0){L();c=BeP.data[bu];$p
=5;continue _;}bi=bi+(-1)|0;if(bi<0)return;bk=Z(bh,bi);m=bk.eC;bl=bk.eX;bm=bk.eD;continue _;case 5:$z=AEI(b,m,bl,bm);if(C()){break _;}bv=$z;g=0.30000001192092896;$p=6;case 6:c.HM(b,m,bl,bm,bv,g);if(C()){break _;}bv=0;$p=7;case 7:APu(b,m,bl,bm,bv);if(C()){break _;}c=BeP.data[bu];$p=8;case 8:c.sF(b,m,bl,bm);if(C()){break _;}bi=bi+(-1)|0;if(bi<0)return;bk=Z(bh,bi);m=bk.eC;bl=bk.eX;bm=bk.eD;$p=4;continue _;case 9:$z=ACt(b,bc,bd,be);if(C()){break _;}bx=$z;if(bx>0){L();x=x-(BeP.data[bx].yg(c)+0.30000001192092896)
*y;}if(x>0.0)Xd(h,CO(bc,bd,be));l=l+z;v=v+ba;w=w+bb;x=x-0.22500000894069672;while(x<=0.0){while(true){o=o+1|0;while(o>=i){n=n+1|0;while(n>=i){j=j+1|0;if(j>=i){l=g*2.0;m=K(d-l-1.0);n=K(d+l+1.0);o=K(e-l-1.0);p=K(e+l+1.0);q=D2(m,o,K(f-l-1.0),n,p,K(f+l+1.0));$p=1;continue _;}n=0;}o=0;}if(!j)break;if(j==15)break;if(!n)break;if(n==15)break;if(!o)break;if(o!=15)continue;else break;}r=j/k*2.0-1.0;s=n/k*2.0-1.0;t=o/k*2.0-1.0;u=Ec(r*r+s*s+t*t);l=r/u;v=s/u;w=t/u;x=g*(0.699999988079071+N(b.q)*0.6000000238418579);y=0.30000001192092896;z
=l*0.30000001192092896;ba=v*0.30000001192092896;bb=w*0.30000001192092896;l=d;v=e;w=f;}bc=K(l);bd=K(v);be=K(w);continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,$p);}
function N9(){BO.call(this);}
function Bm8(){var a=new N9();AVT(a);return a;}
function AVT(a){O(a);}
function ARi(){Eq.call(this);}
function AYl(){var a=new ARi();A0T(a);return a;}
function A0T(a){return;}
function XK(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=E(c,2)+2|0;h=E(c,2)+2|0;i=0;j=(d-g|0)-1|0;k=(d+g|0)+1|0;l=e-1|0;m=e+3|0;n=m+1|0;o=(f-h|0)-1|0;p=(f+h|0)+1|0;q=j;a:while(true){r=R(q,
k);if(r>0){if(i>=1&&i<=5){r=j;b:while(true){s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgV.b;$p=2;continue _;}t=m;while(true){u=R(t,l);if(u<0)break;v=o;i=R(v,p);if(i<=0)break b;t=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;}return 0;}s=l;while(true){t=R(s,n);if(t>0)break;v=o;w=R(v,p);if(w<=0)break a;s=s+1|0;}q=q+1|0;}$p=1;case 1:$z
=ABX(b,q,s,v);if(C()){break _;}x=$z;if(s==l&&!x.dt())return 0;if(!t&&!x.dt())return 0;if(!(q!=j&&r&&v!=o&&w)&&s==e){$p=5;continue _;}v=v+1|0;while(true){w=R(v,p);if(w<=0)break;s=s+1|0;while(true){t=R(s,n);if(t<=0)break;q=q+1|0;r=R(q,k);if(r>0){if(i>=1&&i<=5){r=j;c:while(true){s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgV.b;$p=2;continue _;}t=m;while(true){u=R(t,l);if(u<0)break;v=o;i=R(v,p);if(i<=0)break c;t
=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;}return 0;}s=l;}v=o;}continue _;case 2:APu(b,d,e,f,k);if(C()){break _;}$p=3;case 3:$z=ANv(b,d,e,f);if(C()){break _;}b=$z;b.jH=ADD(a,c);return 1;case 4:$z=ACt(b,o,e,j);if(C()){break _;}r=$z;if(!r){u=0;r=o-1|0;$p=6;continue _;}l=l+1|0;while(true){if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;continue _;}q=q+1|0;if(q>=2)break;l=0;}L();k=BgV.b;$p=2;continue _;case 5:$z=ACt(b,q,s,v);if(C()){break _;}u
=$z;if(!u){u=s+1|0;$p=7;continue _;}v=v+1|0;while(true){w=R(v,p);if(w<=0)break;s=s+1|0;while(true){t=R(s,n);if(t<=0)break;q=q+1|0;r=R(q,k);if(r>0){if(i>=1&&i<=5){r=j;b:while(true){s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgV.b;$p=2;continue _;}t=m;while(true){u=R(t,l);if(u<0)break;v=o;i=R(v,p);if(i<=0)break b;t=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q
=t-1|0;$p=9;continue _;}return 0;}s=l;}v=o;}$p=1;continue _;case 6:$z=ABX(b,r,e,j);if(C()){break _;}x=$z;if(x.dt())u=1;r=o+1|0;$p=10;continue _;case 7:$z=ACt(b,q,u,v);if(C()){break _;}u=$z;if(!u)i=i+1|0;v=v+1|0;while(true){w=R(v,p);if(w<=0)break;s=s+1|0;while(true){t=R(s,n);if(t<=0)break;q=q+1|0;r=R(q,k);if(r>0){if(i>=1&&i<=5){r=j;d:while(true){s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgV.b;$p=2;continue _;}t
=m;while(true){u=R(t,l);if(u<0)break;v=o;i=R(v,p);if(i<=0)break d;t=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;}return 0;}s=l;}v=o;}$p=1;continue _;case 8:$z=ABX(b,r,t,v);if(C()){break _;}x=$z;if(x.dt()){if(!u&&E(c,4)){L();q=Be6.b;$p=14;continue _;}L();q=BeZ.b;$p=12;continue _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while
(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgV.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){continue _;}q=t-1|0;$p=9;case 9:$z=ABX(b,r,q,v);if(C()){break _;}x=$z;if(x.dt()){$p=8;continue _;}q=0;$p=11;continue _;case 10:$z=ABX(b,r,e,j);if(C()){break _;}x=$z;if(x.dt())u=u+1|0;r=j-1|0;$p=13;continue _;case 11:APu(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r
=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgV.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 12:APu(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)
|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgV.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 13:$z=ABX(b,o,e,r);if(C()){break _;}x=$z;if(x.dt())u=u+1|0;r=j+1|0;$p=16;continue _;case 14:APu(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g
|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgV.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 15:APu(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgV.b;$p=2;continue _;}t=m;}v=o;}if(r!=j
&&u&&v!=o&&s&&t!=n&&i){q=0;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 16:$z=ABX(b,o,e,r);if(C()){break _;}x=$z;if(x.dt())u=u+1|0;if(u==1){L();r=BgX.b;$p=17;continue _;}l=l+1|0;while(true){if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;if(q>=2)break;l=0;}L();k=BgV.b;$p=2;continue _;case 17:APu(b,o,e,j,r);if(C()){break _;}$p=18;case 18:$z=ANv(b,o,e,j);if(C()){break _;}x=$z;y=x;n=0;while(n<8){z=AHm(a,c);if(z!==null)AHz(y,E(c,k),z);n=n+1|0;}while(true){q=q+1|0;if(q
>=2)break;l=0;if(l>=3)continue;else{o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}}L();k=BgV.b;$p=2;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function AHm(a,b){var c,d;a:{c=E(b,10);if(!c){d=new Cd;BB();DA(d,BiI);break a;}if(c==1){d=new Cd;BB();Gl(d,BhQ,E(b,4)+1|0);break a;}if(c==2){d=new Cd;BB();DA(d,Bif);break a;}if(c==3){d=new Cd;BB();Gl(d,BhD,E(b,4)+1|0);break a;}if(c==4){d=new Cd;BB();Gl(d,Bge,E(b,4)+1|0);break a;}if(c==5){d=new Cd;BB();Gl(d,Bgf,E(b,4)+1|0);break a;}if(c==6){d=new Cd;BB();DA(d,BiE);break a;}if(c==7&&!E(b,100)){d=new Cd;BB();DA(d,BiC);break a;}d=null;}return d;}
function ADD(a,b){var c;c=E(b,4);return !c?B(854):c==1?B(857):c==2?B(857):c!=3?B(3):B(855);}
function Ch(){var a=this;Eq.call(a);a.zN=0;a.c1=0;}
function Bm9(a,b){var c=new Ch();Cm(c,a,b);return c;}
function Cm(a,b,c){a.zN=b;a.c1=c;}
function ABO(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=N(c)*3.1415927410125732;h=d+8|0;i=h+Bq(g)*a.c1/8.0;j=
h-Bq(g)*a.c1/8.0;h=f+8|0;k=h+BC(g)*a.c1/8.0;l=h-BC(g)*a.c1/8.0;m=(e+E(c,3)|0)+2|0;n=(e+E(c,3)|0)+2|0;o=0;j=j-i;n=n-m;p=l-k;while(o<=a.c1){q=o;r=i+j*q/a.c1;s=m+n*q/a.c1;t=k+p*q/a.c1;q=Cl(c)*a.c1/16.0;h=o*3.1415927410125732;u=(Bq(h/a.c1)+1.0)*q+1.0;v=(Bq(h/a.c1)+1.0)*q+1.0;q=u/2.0;w=r-q|0;e=r+q|0;l=v/2.0;f=s-l|0;x=s+l|0;y=t-q|0;z=t+q|0;while(w<=e){ba=f;while(ba<=x){bb=y;while(bb<=z){bc=(w+0.5-r)/q;bd=(ba+0.5-s)/l;be=(bb+0.5-t)/q;if(bc*bc+bd*bd+be*be<1.0){$p=1;continue _;}bb=bb+1|0;}ba=ba+1|0;}w=w+1|0;}o=o+1|0;}return 1;case 1:$z
=ACt(b,w,ba,bb);if(C()){break _;}bf=$z;L();if(bf==BeV.b){d=a.zN;$p=2;continue _;}a:while(true){bb=bb+1|0;while(bb>z){ba=ba+1|0;while(ba>x){w=w+1|0;while(w>e){o=o+1|0;if(o>a.c1)break a;q=o;r=i+j*q/a.c1;s=m+n*q/a.c1;t=k+p*q/a.c1;q=Cl(c)*a.c1/16.0;h=o*3.1415927410125732;u=(Bq(h/a.c1)+1.0)*q+1.0;v=(Bq(h/a.c1)+1.0)*q+1.0;q=u/2.0;w=r-q|0;e=r+q|0;l=v/2.0;f=s-l|0;x=s+l|0;y=t-q|0;z=t+q|0;}ba=f;}bb=y;}bc=(w+0.5-r)/q;bd=(ba+0.5-s)/l;be=(bb+0.5-t)/q;if(bc*bc+bd*bd+be*be>=1.0)continue;else{continue _;}}return 1;case 2:ALq(b,
w,ba,bb,d);if(C()){break _;}b:while(true){bb=bb+1|0;while(bb>z){ba=ba+1|0;while(ba>x){w=w+1|0;while(w>e){o=o+1|0;if(o>a.c1)break b;q=o;r=i+j*q/a.c1;s=m+n*q/a.c1;t=k+p*q/a.c1;q=Cl(c)*a.c1/16.0;h=o*3.1415927410125732;u=(Bq(h/a.c1)+1.0)*q+1.0;v=(Bq(h/a.c1)+1.0)*q+1.0;q=u/2.0;w=r-q|0;e=r+q|0;l=v/2.0;f=s-l|0;x=s+l|0;y=t-q|0;z=t+q|0;}ba=f;}bb=y;}bc=(w+0.5-r)/q;bd=(ba+0.5-s)/l;be=(bb+0.5-t)/q;if(bc*bc+bd*bd+be*be>=1.0)continue;else{$p=1;continue _;}}return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,
r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,$p);}
function BS(){Eq.call(this);this.t$=0;}
function Bm$(a){var b=new BS();BT(b,a);return b;}
function BT(a,b){a.t$=b;}
function ACL(a,b,c,d,e,f){var g,h,i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=0;if(g>=64)return 1;h=(d+E(c,8)|0)-E(c,8)|0;i=(e+E(c,4)|0)-E(c,4)|0;j=(f+E(c,8)|0)-E(c,8)|0;$p=1;case 1:$z=ACt(b,h,i,j);if(C()){break _;}k=$z;if(!k){L();l=BeP.data[a.t$];$p=2;continue _;}g=g+1|0;if(g>=64)return 1;h=(d+E(c,8)|0)-E(c,8)|0;i=(e+E(c,4)|0)-E(c,4)|0;j=(f+E(c,8)|0)-E(c,8)|0;continue _;case 2:$z
=l.G6(b,h,i,j);if(C()){break _;}k=$z;if(k){k=a.t$;$p=3;continue _;}g=g+1|0;if(g>=64)return 1;h=(d+E(c,8)|0)-E(c,8)|0;i=(e+E(c,4)|0)-E(c,4)|0;j=(f+E(c,8)|0)-E(c,8)|0;$p=1;continue _;case 3:ALq(b,h,i,j,k);if(C()){break _;}g=g+1|0;if(g>=64)return 1;h=(d+E(c,8)|0)-E(c,8)|0;i=(e+E(c,4)|0)-E(c,4)|0;j=(f+E(c,8)|0)-E(c,8)|0;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Cn(){Eq.call(this);this.EN=0;}
function Bm_(a){var b=new Cn();Cs(b,a);return b;}
function Cs(a,b){a.EN=b;}
function ALY(a,b,c,d,e,f){var g,h,i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=e+1|0;$p=1;case 1:$z=ACt(b,d,g,f);if(C()){break _;}g=$z;L();if(g!=BeV.b)return 0;g=e-1|0;$p=2;case 2:$z=ACt(b,d,g,f);if(C()){break _;}h=$z;if(h!=BeV.b)return 0;$p=3;case 3:$z=ACt(b,d,e,f);if(C()){break _;}g=$z;if(g){$p=5;continue _;}g=0;h=d-1|0;$p=4;case 4:$z=ACt(b,h,e,f);if(C()){break _;}i
=$z;if(i==BeV.b)g=1;i=d+1|0;$p=6;continue _;case 5:$z=ACt(b,d,e,f);if(C()){break _;}g=$z;if(g!=BeV.b)return 0;g=0;h=d-1|0;$p=4;continue _;case 6:$z=ACt(b,i,e,f);if(C()){break _;}j=$z;if(j==BeV.b)g=g+1|0;k=f-1|0;$p=7;case 7:$z=ACt(b,d,e,k);if(C()){break _;}j=$z;if(j==BeV.b)g=g+1|0;j=f+1|0;$p=8;case 8:$z=ACt(b,d,e,j);if(C()){break _;}l=$z;if(l==BeV.b)g=g+1|0;l=0;$p=9;case 9:$z=ACt(b,h,e,f);if(C()){break _;}h=$z;if(!h)l=1;$p=10;case 10:$z=ACt(b,i,e,f);if(C()){break _;}h=$z;if(!h)l=l+1|0;$p=11;case 11:$z=ACt(b,
d,e,k);if(C()){break _;}h=$z;if(!h)l=l+1|0;$p=12;case 12:$z=ACt(b,d,e,j);if(C()){break _;}h=$z;if(!h)l=l+1|0;if(g==3&&l==1){g=a.EN;$p=13;continue _;}return 1;case 13:APu(b,d,e,f,g);if(C()){break _;}return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Sv(){C0.call(this);}
function Y7(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bR=a.d;a.cQ=a.j;a.bQ=a.e;a.i=a.i+0.002;b=a.g;c=a.i;d=a.h;$p=1;case 1:ARD(a,b,c,d);if(C()){break _;}a.g=a.g*0.8500000238418579;a.i=a.i*0.8500000238418579;a.h=a.h*0.8500000238418579;e=a.l;f=K(a.d);g=K(a.j);h=K(a.e);$p=2;case 2:$z=ABX(e,f,g,h);if(C()){break _;}e=$z;if(e!==BfQ){$p=3;continue _;}f=a.ct;a.ct=f-1|0;if(f>0)return;$p=4;continue _;case 3:Ca(a);if
(C()){break _;}f=a.ct;a.ct=f-1|0;if(f>0)return;$p=4;case 4:Ca(a);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AFo(){C0.call(this);this.Cm=0.0;}
function A7$(a,b,c,d,e){var f=new AFo();AV1(f,a,b,c,d,e);return f;}
function AV1(a,b,c,d,e,f){var g;Fz(a,b,c,d,e,0.0,0.0,0.0);a.g=a.g*0.10000000149011612;a.i=a.i*0.10000000149011612;a.h=a.h*0.10000000149011612;g=BP()*0.30000001192092896;a.im=g;a.ib=g;a.hW=g;a.dp=a.dp*0.75;a.dp=a.dp*f;a.Cm=a.dp;a.ct=8.0/(BP()*0.8+0.2)|0;a.ct=a.ct*f|0;a.o2=0;}
function AJ5(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.dn+c)/a.ct*32.0;if(i<0.0)i=0.0;if(i>1.0)i=1.0;a.dp=a.Cm*i;$p=1;case 1:ANr(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ALQ(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bR=a.d;a.cQ=a.j;a.bQ=a.e;b=a.dn;a.dn=b+1|0;if(b>=a.ct){$p=2;continue _;}a.e4=7-((a.dn*8|0)/a.ct|0)|0;a.i=a.i+0.004;c=a.g;d=a.i;e=a.h;$p=1;case 1:ARD(a,c,d,e);if(C()){break _;}if(a.j===a.cQ){a.g=a.g*1.1;a.h=a.h*1.1;}a.g=a.g*0.9599999785423279;a.i=a.i*0.9599999785423279;a.h=a.h*0.9599999785423279;if(a.cu){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;case 2:Ca(a);if
(C()){break _;}a.e4=7-((a.dn*8|0)/a.ct|0)|0;a.i=a.i+0.004;c=a.g;d=a.i;e=a.h;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,$p);}
function QX(){C0.call(this);}
function AR6(a,b,c,d,e,f,g,h){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ANr(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AER(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bR=a.d;a.cQ=a.j;a.bQ=a.e;b=a.dn;a.dn=b+1|0;if(b>=a.ct){$p=2;continue _;}a.e4=7-((a.dn*8|0)/a.ct|0)|0;a.i=a.i+0.004;c=a.g;d=a.i;e=a.h;$p=1;case 1:ARD(a,c,d,e);if(C()){break _;}a.g=a.g*0.8999999761581421;a.i=a.i*0.8999999761581421;a.h=a.h*0.8999999761581421;if(a.cu){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;case 2:Ca(a);if(C()){break _;}a.e4=7-
((a.dn*8|0)/a.ct|0)|0;a.i=a.i+0.004;c=a.g;d=a.i;e=a.h;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,$p);}
function OY(){C0.call(this);this.DK=0.0;}
function AQG(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.dn+c)/a.ct;a.dp=a.DK*(1.0-i*i*0.5);$p=1;case 1:ANr(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ASr(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=(a.dn+b)/a.ct;if(c<0.0)c=0.0;if(c>1.0)c=1.0;$p=1;case 1:$z=ADF(a,b);if(C()){break _;}d=$z;return d*c+1.0-c;default:E$();}}C3().s(a,b,c,d,$p);}
function AAO(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bR=a.d;a.cQ=a.j;a.bQ=a.e;b=a.dn;a.dn=b+1|0;if(b>=a.ct){$p=2;continue _;}c=a.g;d=a.i;e=a.h;$p=1;case 1:ARD(a,c,d,e);if(C()){break _;}a.g=a.g*0.9599999785423279;a.i=a.i*0.9599999785423279;a.h=a.h*0.9599999785423279;if(a.cu){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;case 2:Ca(a);if(C()){break _;}c=a.g;d=a.i;e=a.h;$p=1;continue _;default:E$();}}C3().s(a,
b,c,d,e,$p);}
function AAZ(){C0.call(this);this.yJ=0.0;}
function BcI(a,b,c,d){var e=new AAZ();A1J(e,a,b,c,d);return e;}
function A1J(a,b,c,d,e){Fz(a,b,c,d,e,0.0,0.0,0.0);a.g=a.g*0.800000011920929;a.i=a.i*0.800000011920929;a.h=a.h*0.800000011920929;a.i=N(a.m)*0.4000000059604645+0.05000000074505806;a.im=1.0;a.ib=1.0;a.hW=1.0;a.dp=a.dp*(N(a.m)*2.0+0.20000000298023224);a.yJ=a.dp;a.ct=16.0/(BP()*0.8+0.2)|0;a.o2=0;a.e4=49;}
function AJ6(a,b){return 1.0;}
function AGS(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.dn+c)/a.ct;a.dp=a.yJ*(1.0-i*i);$p=1;case 1:ANr(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ALg(a){var b,c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bR=a.d;a.cQ=a.j;a.bQ=a.e;b=a.dn;a.dn=b+1|0;if(b>=a.ct){$p=1;continue _;}c=a.dn/a.ct;if(N(a.m)>c)BW(a.l,B(256),a.d,a.j,a.e,a.g,a.i,a.h);a.i=a.i-0.03;d=a.g;e=a.i;f=a.h;$p=2;continue _;case 1:Ca(a);if(C()){break _;}c=a.dn/a.ct;if(N(a.m)>c)BW(a.l,B(256),a.d,a.j,a.e,a.g,a.i,a.h);a.i=a.i-0.03;d=a.g;e=a.i;f=a.h;$p=2;case 2:ARD(a,d,e,f);if(C()){break _;}a.g
=a.g*0.9990000128746033;a.i=a.i*0.9990000128746033;a.h=a.h*0.9990000128746033;if(a.cu){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ARA(){JK.call(this);}
function Bcv(a,b,c,d,e,f,g){var h=new ARA();AVN(h,a,b,c,d,e,f,g);return h;}
function AVN(a,b,c,d,e,f,g,h){TH(a,b,c,d,e);a.m2=0.03999999910593033;a.e4=a.e4+1|0;if(g===0.0&&!(f===0.0&&h===0.0)){a.g=f;a.i=g+0.1;a.h=h;}}
function AIp(){D.call(this);}
function Bna(){var a=new AIp();AWP(a);return a;}
function AWP(a){return;}
function H4(){var a=this;D.call(a);a.dh=null;a.bu=0;a.bq=0;a.bt=0;a.fP=0;a.bD=null;a.e2=null;}
function Bnb(a,b,c,d,e){var f=new H4();YN(f,a,b,c,d,e);return f;}
function YN(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.e2=b;a.bD=Ci();a.dh=c;a.bu=d;a.bq=e;a.bt=f;$p=1;case 1:$z=AEI(c,d,e,f);if(C()){break _;}d=$z;a.fP=d;KX(a);return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function KX(a){a:{DF(a.bD);if(!a.fP){S(a.bD,CO(a.bu,a.bq,a.bt-1|0));S(a.bD,CO(a.bu,a.bq,a.bt+1|0));break a;}if(a.fP==1){S(a.bD,CO(a.bu-1|0,a.bq,a.bt));S(a.bD,CO(a.bu+1|0,a.bq,a.bt));break a;}if(a.fP==2){S(a.bD,CO(a.bu-1|0,a.bq,a.bt));S(a.bD,CO(a.bu+1|0,a.bq+1|0,a.bt));break a;}if(a.fP==3){S(a.bD,CO(a.bu-1|0,a.bq+1|0,a.bt));S(a.bD,CO(a.bu+1|0,a.bq,a.bt));break a;}if(a.fP==4){S(a.bD,CO(a.bu,a.bq+1|0,a.bt-1|0));S(a.bD,CO(a.bu,a.bq,a.bt+1|0));break a;}if(a.fP==5){S(a.bD,CO(a.bu,a.bq,a.bt-1|0));S(a.bD,CO(a.bu,a.bq
+1|0,a.bt+1|0));break a;}if(a.fP==6){S(a.bD,CO(a.bu+1|0,a.bq,a.bt));S(a.bD,CO(a.bu,a.bq,a.bt+1|0));break a;}if(a.fP==7){S(a.bD,CO(a.bu-1|0,a.bq,a.bt));S(a.bD,CO(a.bu,a.bq,a.bt+1|0));break a;}if(a.fP==8){S(a.bD,CO(a.bu-1|0,a.bq,a.bt));S(a.bD,CO(a.bu,a.bq,a.bt-1|0));break a;}if(a.fP!=9)break a;S(a.bD,CO(a.bu+1|0,a.bq,a.bt));S(a.bD,CO(a.bu,a.bq,a.bt-1|0));}}
function AFE(a){var b,c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;if(b>=a.bD.o)return;c=Z(a.bD,b);$p=1;case 1:$z=AQ6(a,c);if(C()){break _;}c=$z;if(c!==null&&SM(c,a)){Q7(a.bD,b,CO(c.bu,c.bq,c.bt));d=b;}else{c=a.bD;d=b+(-1)|0;Em(c,b);}b=d+1|0;if(b>=a.bD.o)return;c=Z(a.bD,b);continue _;default:E$();}}C3().s(a,b,c,d,$p);}
function AQ6(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.dh;d=b.eC;e=b.eX;f=b.eD;$p=1;case 1:$z=ACt(c,d,e,f);if(C()){break _;}d=$z;if(d!=a.e2.b){c=a.dh;d=b.eC;e=b.eX+1|0;f=b.eD;$p=2;continue _;}c=new H4;g=a.e2;h=a.dh;d=b.eC;e=b.eX;f=b.eD;$p=3;continue _;case 2:$z=ACt(c,d,e,f);if(C()){break _;}d=$z;if(d!=a.e2.b){c=a.dh;d=b.eC;e=b.eX-1|0;f=b.eD;$p=4;continue _;}c=new H4;g=a.e2;h=a.dh;d
=b.eC;e=b.eX+1|0;f=b.eD;$p=5;continue _;case 3:YN(c,g,h,d,e,f);if(C()){break _;}return c;case 4:$z=ACt(c,d,e,f);if(C()){break _;}d=$z;if(d!=a.e2.b){c=null;return c;}c=new H4;g=a.e2;h=a.dh;e=b.eC;d=b.eX-1|0;f=b.eD;$p=6;continue _;case 5:YN(c,g,h,d,e,f);if(C()){break _;}return c;case 6:YN(c,g,h,e,d,f);if(C()){break _;}return c;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function SM(a,b){var c,d;c=0;while(c<a.bD.o){d=Z(a.bD,c);if(d.eC==b.bu&&d.eD==b.bt)return 1;c=c+1|0;}return 0;}
function KL(a,b,c,d){var e,f;e=0;while(e<a.bD.o){f=Z(a.bD,e);if(f.eC==b&&f.eD==d)return 1;e=e+1|0;}return 0;}
function O2(a,b){var c;if(SM(a,b))return 1;if(a.bD.o==2)return 0;if(!a.bD.o)return 1;c=Z(a.bD,0);return b.bq==a.bq&&c.eX==a.bq?1:1;}
function ARK(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:S(a.bD,CO(b.bu,b.bq,b.bt));c=KL(a,a.bu,a.bq,a.bt-1|0);d=KL(a,a.bu,a.bq,a.bt+1|0);e=KL(a,a.bu-1|0,a.bq,a.bt);f=KL(a,a.bu+1|0,a.bq,a.bt);g=(-1);if(!(!c&&!d))g=0;if(!(!e&&!f))g=1;if(d&&f&&!c&&!e)g=6;if(d&&e&&!c&&!f)g=7;if(c&&e&&!d&&!f)g=8;if(c&&f&&!d&&!e)g=9;if(!g){b=a.dh;c=a.bu;d=a.bq+1|0;e=a.bt-1|0;$p=1;continue _;}if(g==1){b=a.dh;c=a.bu+1|0;d
=a.bq+1|0;e=a.bt;$p=2;continue _;}if(g<0)g=0;b=a.dh;c=a.bu;d=a.bq;e=a.bt;$p=5;continue _;case 1:$z=ACt(b,c,d,e);if(C()){break _;}c=$z;if(c==a.e2.b)g=4;b=a.dh;c=a.bu;d=a.bq+1|0;e=a.bt+1|0;$p=3;continue _;case 2:$z=ACt(b,c,d,e);if(C()){break _;}c=$z;if(c==a.e2.b)g=2;b=a.dh;c=a.bu-1|0;d=a.bq+1|0;e=a.bt;$p=4;continue _;case 3:$z=ACt(b,c,d,e);if(C()){break _;}c=$z;if(c==a.e2.b)g=5;if(g==1){b=a.dh;c=a.bu+1|0;d=a.bq+1|0;e=a.bt;$p=2;continue _;}if(g<0)g=0;b=a.dh;c=a.bu;d=a.bq;e=a.bt;$p=5;continue _;case 4:$z=ACt(b,
c,d,e);if(C()){break _;}c=$z;if(c==a.e2.b)g=3;if(g<0)g=0;b=a.dh;c=a.bu;d=a.bq;e=a.bt;$p=5;case 5:AKu(b,c,d,e,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AIZ(a,b,c,d){var e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=CO(b,c,d);$p=1;case 1:$z=AQ6(a,e);if(C()){break _;}e=$z;if(e===null)return 0;$p=2;case 2:AFE(e);if(C()){break _;}return O2(e,a);default:E$();}}C3().s(a,b,c,d,e,$p);}
function YM(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.bu;c=a.bq;d=a.bt-1|0;$p=1;case 1:$z=AIZ(a,b,c,d);if(C()){break _;}d=$z;b=a.bu;c=a.bq;e=a.bt+1|0;$p=2;case 2:$z=AIZ(a,b,c,e);if(C()){break _;}b=$z;c=a.bu-1|0;e=a.bq;f=a.bt;$p=3;case 3:$z=AIZ(a,c,e,f);if(C()){break _;}c=$z;e=a.bu+1|0;f=a.bq;g=a.bt;$p=4;case 4:$z=AIZ(a,e,f,g);if(C()){break _;}e=$z;f=(-1);if(!(!d&&!b))f=0;if(!(!c&&
!e))f=1;if(b&&e&&!d&&!c)f=6;if(b&&c&&!d&&!e)f=7;if(d&&c&&!b&&!e)f=8;if(d&&e&&!b&&!c)f=9;if(!f){h=a.dh;d=a.bu;b=a.bq+1|0;c=a.bt-1|0;$p=5;continue _;}if(f==1){h=a.dh;d=a.bu+1|0;b=a.bq+1|0;c=a.bt;$p=6;continue _;}if(f<0)f=0;a.fP=f;KX(a);h=a.dh;d=a.bu;b=a.bq;c=a.bt;$p=9;continue _;case 5:$z=ACt(h,d,b,c);if(C()){break _;}d=$z;if(d==a.e2.b)f=4;h=a.dh;d=a.bu;b=a.bq+1|0;c=a.bt+1|0;$p=7;continue _;case 6:$z=ACt(h,d,b,c);if(C()){break _;}d=$z;if(d==a.e2.b)f=2;h=a.dh;d=a.bu-1|0;b=a.bq+1|0;c=a.bt;$p=8;continue _;case 7:$z
=ACt(h,d,b,c);if(C()){break _;}b=$z;if(b==a.e2.b)f=5;if(f==1){h=a.dh;d=a.bu+1|0;b=a.bq+1|0;c=a.bt;$p=6;continue _;}if(f<0)f=0;a.fP=f;KX(a);h=a.dh;d=a.bu;b=a.bq;c=a.bt;$p=9;continue _;case 8:$z=ACt(h,d,b,c);if(C()){break _;}d=$z;if(d==a.e2.b)f=3;if(f<0)f=0;a.fP=f;KX(a);h=a.dh;d=a.bu;b=a.bq;c=a.bt;$p=9;case 9:AKu(h,d,b,c,f);if(C()){break _;}g=0;if(g>=a.bD.o)return;h=Z(a.bD,g);$p=10;case 10:$z=AQ6(a,h);if(C()){break _;}h=$z;if(h!==null){$p=11;continue _;}g=g+1|0;if(g>=a.bD.o)return;h=Z(a.bD,g);continue _;case 11:AFE(h);if
(C()){break _;}if(O2(h,a)){$p=12;continue _;}g=g+1|0;if(g>=a.bD.o)return;h=Z(a.bD,g);$p=10;continue _;case 12:ARK(h,a);if(C()){break _;}g=g+1|0;if(g>=a.bD.o)return;h=Z(a.bD,g);$p=10;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function Vc(){var a=this;D.call(a);a.o$=null;a.FW=0;a.l_=0;}
function AP2(a){a.l_=a.l_+1|0;}
function ANl(a){return a.l_<a.o$.data.length?0:1;}
function Sm(a,b){return BY(a.o$.data[a.l_].h_+(b.cZ+1.0|0)*0.5,a.o$.data[a.l_].hT,a.o$.data[a.l_].ik+(b.cZ+1.0|0)*0.5);}
function AB$(){var a=this;D.call(a);a.xZ=null;a.j3=null;a.qZ=null;a.l8=null;}
function A2F(a){var b=new AB$();A6q(b,a);return b;}
function A6q(a,b){a.j3=Bb$();a.qZ=Dd();a.l8=J(HP,32);a.xZ=b;}
function APo(a,b,c,d){return O4(a,b,c.d,c.L.M,c.e,d);}
function AF_(a,b,c,d,e,f){return O4(a,b,c+0.5,d+0.5,e+0.5,f);}
function O4(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;Uw(a.j3);U4(a.qZ);g=IS(a,K(b.L.R),K(b.L.M),K(b.L.S));h=IS(a,K(c-b.cZ/2.0),K(d),K(e-b.cZ/2.0));i=A0x(K2(b.cZ+1.0),K2(b.eL+1.0),K2(b.cZ+1.0));g.mv=0.0;g.pe=E0(g,h);g.iZ=g.pe;Uw(a.j3);WM(a.j3,g);j=g;a:{while(true){if(AB9(a.j3)){if(j!==g){k=UI(a,g,j);break a;}k=null;break a;}l=ARz(a.j3);if(l.mT==h.mT)break;if(E0(l,h)<E0(j,h))j=l;l.ns=1;m=AJL(a,b,l,i,h,f);n=0;while(n<m){k=a.l8.data[n];o=l.mv+E0(l,k);if(!(Pr(k)&&o>=k.mv)){k.o0=l;k.mv=o;k.pe=E0(k,h);if(Pr(k))ABl(a.j3,
k,k.mv+k.pe);else{k.iZ=k.mv+k.pe;WM(a.j3,k);}}n=n+1|0;}}k=UI(a,g,h);}return k;}
function AJL(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;g=0;if(J2(a,b,c.h_,c.hT+1|0,c.ik,d)>0)g=1;h=Ky(a,b,c.h_,c.hT,c.ik+1|0,d,g);i=Ky(a,b,c.h_-1|0,c.hT,c.ik,d,g);j=Ky(a,b,c.h_+1|0,c.hT,c.ik,d,g);k=Ky(a,b,c.h_,c.hT,c.ik-1|0,d,g);if(h===null)l=0;else if(h.ns)l=0;else if(E0(h,e)>=f)l=0;else{m=a.l8.data;l=1;m[0]=h;}if(i===null)n=l;else if(i.ns)n=l;else if(E0(i,e)>=f)n=l;else{m=a.l8.data;n=l+1|0;m[l]=i;}if(j===null)o=n;else if(j.ns)o=n;else if(E0(j,e)>=f)o=n;else{m=a.l8.data;o=n+1|0;m[n]=j;}if(k===null)n=o;else if(k.ns)n
=o;else if(E0(k,e)>=f)n=o;else{m=a.l8.data;n=o+1|0;m[o]=k;}return n;}
function Ky(a,b,c,d,e,f,g){var h,i,j,k;h=null;if(J2(a,b,c,d,e,f)>0)h=IS(a,c,d,e);if(h===null){g=d+g|0;if(J2(a,b,c,g,e,f)>0)h=IS(a,c,g,e);}if(h!==null){i=0;a:{while(true){if(d<=0)break a;j=J2(a,b,c,d-1|0,e,f);if(j<=0)break a;if(j<0)return null;i=i+1|0;if(i>=4)break;d=d+(-1)|0;}return null;}if(d>0)h=IS(a,c,d,e);k=N0(a.xZ,c,d-1|0,e);if(!(k!==BfQ&&k!==BfR))return null;}return h;}
function IS(a,b,c,d){var e,f;e=b|c<<10|d<<20;f=CP(a.qZ,CX(e));if(f===null){f=A0x(b,c,d);BR(a.qZ,CX(e),f);}return f;}
function J2(a,b,c,d,e,f){var g,h,i,j;g=c;a:{while(g<(c+f.h_|0)){h=d;while(h<(d+f.hT|0)){i=e;while(i<(e+f.ik|0)){j=N0(a.xZ,c,d,e);if(j.ua())return 0;if(j===BfQ)break a;if(j===BfR)break a;i=i+1|0;}h=h+1|0;}g=g+1|0;}return 1;}return (-1);}
function UI(a,b,c){var d,e,f,g;d=1;e=c;while(e.o0!==null){d=d+1|0;e=e.o0;}f=J(HP,d);g=f.data;d=d+(-1)|0;g[d]=c;while(c.o0!==null){c=c.o0;d=d+(-1)|0;g[d]=c;}b=new Vc;b.o$=f;b.FW=g.length;return b;}
function UX(){var a=this;C0.call(a);a.ms=null;a.hN=null;a.p4=0;a.q9=0;a.AM=0.0;}
function AMf(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.p4+c)/a.q9;d=i*i;j=a.ms.d;k=a.ms.j;l=a.ms.e;m=a.hN.co;n=a.hN.d-a.hN.co;o=c;n=m+n*o;m=a.hN.b5+(a.hN.j-a.hN.b5)*o+a.AM;o=a.hN.cp+(a.hN.e-a.hN.cp)*o;n=n-j;p=d;q=j+n
*p;r=k+(m-k)*p;p=l+(o-l)*p;s=K(q);t=K(r+a.c2/2.0);u=K(p);b=a.l;$p=1;case 1:$z=ANf(b,s,t,u);if(C()){break _;}v=$z;o=q-BkM;n=r-BkN;m=p-BkO;BU(v,v,v,1.0);b=Bgo;w=a.ms;o=o;n=n;m=m;d=a.ms.t;$p=2;case 2:AQC(b,w,o,n,m,d,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p);}
function AAH(a){a.p4=a.p4+1|0;if(a.p4==a.q9)Ca(a);}
function AUt(a){return 2;}
function Y2(){var a=this;D.call(a);a.dY=null;a.eU=0;}
function Bb$(){var a=new Y2();AZ$(a);return a;}
function AZ$(a){a.dY=J(HP,1024);a.eU=0;}
function WM(a,b){var c,d;if(b.gy>=0){b=new D1;Bl(b,B(893));M(b);}if(a.eU==a.dY.data.length){c=J(HP,a.eU<<1);Di(a.dY,0,c,0,a.eU);a.dY=c;}a.dY.data[a.eU]=b;b.gy=a.eU;d=a.eU;a.eU=d+1|0;UV(a,d);return b;}
function Uw(a){a.eU=0;}
function ARz(a){var b,c,d,e;b=a.dY.data[0];c=a.dY.data;d=a.dY.data;e=a.eU-1|0;a.eU=e;c[0]=d[e];a.dY.data[a.eU]=null;if(a.eU>0)OJ(a,0);b.gy=(-1);return b;}
function ABl(a,b,c){var d;d=b.iZ;b.iZ=c;if(c>=d)OJ(a,b.gy);else UV(a,b.gy);}
function UV(a,b){var c,d,e,f;c=a.dY.data[b];d=c.iZ;a:{while(true){if(b<=0)break a;e=(b-1|0)>>1;f=a.dY.data[e];if(d>=f.iZ)break;a.dY.data[b]=f;f.gy=b;b=e;}}a.dY.data[b]=c;c.gy=b;}
function OJ(a,b){var c,d,e,f,g,h,i,j;c=a.dY.data[b];d=c.iZ;a:{while(true){e=1+(b<<1)|0;f=e+1|0;if(e>=a.eU)break;g=a.dY.data[e];h=g.iZ;if(f>=a.eU){i=null;j=Infinity;}else{i=a.dY.data[f];j=i.iZ;}if(h<j){if(h>=d)break a;a.dY.data[b]=g;g.gy=b;}else{if(j>=d)break a;a.dY.data[b]=i;i.gy=b;e=f;}b=e;}}a.dY.data[b]=c;c.gy=b;}
function AB9(a){return a.eU?0:1;}
function HP(){var a=this;D.call(a);a.h_=0;a.hT=0;a.ik=0;a.mT=0;a.gy=0;a.mv=0.0;a.pe=0.0;a.iZ=0.0;a.o0=null;a.ns=0;}
function A0x(a,b,c){var d=new HP();A8J(d,a,b,c);return d;}
function A8J(a,b,c,d){a.gy=(-1);a.ns=0;a.h_=b;a.hT=c;a.ik=d;a.mT=b|c<<10|d<<20;}
function E0(a,b){var c,d,e;c=b.h_-a.h_|0;d=b.hT-a.hT|0;e=b.ik-a.ik|0;return D$(c*c+d*d+e*e);}
function A3Q(a,b){return b.mT!=a.mT?0:1;}
function AVj(a){return a.mT;}
function Pr(a){return a.gy<0?0:1;}
function AJg(){D.call(this);}
$rt_packages([-1,"com",0,"jcraft",1,"jzlib",-1,"java",3,"util",4,"regex",3,"nio",6,"charset",3,"io",3,"lang",-1,"net",10,"minecraft",11,"src"]);
$rt_metadata([D,"Object",9,0,[],0,3,0,["fi",function(){return A4Y(this);},"ek",function(b){return QY(this,b);},"gj",function(){return AUk(this);}],Ju,0,D,[],0,3,0,0,MO,0,D,[],3,3,0,0,FN,0,D,[MO],0,3,0,0,AJ4,0,D,[],4,0,0,0,TZ,0,D,[],4,3,0,0,Db,0,D,[],3,3,0,0,DL,0,D,[],3,3,0,0,KW,0,D,[],3,3,0,0,B4,"String",9,D,[Db,DL,KW],0,3,0,["gj",function(){return AUg(this);},"ek",function(b){return DJ(this,b);},"fi",function(){return A8l(this);},"lJ",function(b){return AVZ(this,b);}],D7,0,D,[],0,3,0,["lK",function(){return A0i(this);
}],Fg,0,D7,[],0,3,0,0,IZ,0,Fg,[],0,3,0,0,AMa,0,IZ,[],0,3,0,0,HJ,0,D,[Db,KW],0,0,0,["nu",function(b){MU(this,b);},"gj",function(){return V(this);}],Ir,0,D,[],3,3,0,0,U,0,HJ,[Ir],0,3,0,["xK",function(b,c,d,e){return A6X(this,b,c,d,e);},"xc",function(b,c,d){return AVm(this,b,c,d);},"gj",function(){return BL(this);},"nu",function(b){AXJ(this,b);},"ya",function(b,c){return A7m(this,b,c);}],Fa,0,D,[Db],1,3,0,0,Ge,0,Fa,[DL],0,3,0,["fi",function(){return A26(this);},"ek",function(b){return A_o(this,b);},"lJ",function(b)
{return A61(this,b);}],IM,0,IZ,[],0,3,0,0,AOQ,0,IM,[],0,3,0,0,ALC,0,IM,[],0,3,0,0,BE,0,D7,[],0,3,0,0,B6,"RuntimeException",9,BE,[],0,3,0,0,C_,0,D,[],3,3,0,0,Hd,0,D,[C_],3,3,0,0,Uj,0,D,[Hd],3,3,0,0,Ql,0,D,[Hd],3,3,0,0,U8,0,D,[Hd],3,3,0,0,Rd,0,D,[Hd],3,3,0,0,Wf,0,D,[Hd,Uj,Ql,U8,Rd],3,3,0,0,Ps,0,D,[],3,3,0,0,Lk,0,D,[C_],3,3,0,0,YG,0,D,[C_,Wf,Ps,Lk],1,3,0,["Ya",function(b,c){return AX4(this,b,c);},"a0c",function(b,c){return AYg(this,b,c);},"Se",function(b){return ATE(this,b);},"Od",function(b,c,d){return AY9(this,
b,c,d);},"Mr",function(b){return A1C(this,b);},"U7",function(){return AUC(this);},"Tu",function(b,c,d){return ASX(this,b,c,d);}],Bs,0,D,[],0,3,Bd,0,SO,0,D,[],3,3,0,0,Jx,0,D,[SO],3,3,0,0,NR,0,D,[],3,3,0,0,Hy,0,D,[Ir,Jx,NR],1,3,0,0,ABe,0,Hy,[],0,3,0,0,Lt,0,Hy,[],0,3,0,0,AFb,0,D,[],4,3,0,0,AFQ,0,D,[C_],1,3,0,0,LY,0,D,[],3,3,0,0,Il,0,D,[LY],0,3,0,0,ZC,0,D,[],0,3,0,0,Mi,0,D,[],0,3,Bbi,0,Gj,0,D,[LY],0,3,0,["km",function(){ARl(this);}],DN,0,D,[C_],3,3,0,0,W3,0,D,[DN],0,0,0,["gM",function(b){return A$W(this,b);}]]);
$rt_metadata([W9,0,D,[DN],0,0,0,["gM",function(b){return AXE(this,b);}],W$,0,D,[DN],0,0,0,["gM",function(b){return A3A(this,b);}],W7,0,D,[DN],0,0,0,["gM",function(b){return ASJ(this,b);}],W8,0,D,[DN],0,0,0,["gM",function(b){return A3L(this,b);}],W5,0,D,[DN],0,0,0,["gM",function(b){return A2h(this,b);}],W6,0,D,[DN],0,0,0,["gM",function(b){return A6x(this,b);}],W4,0,D,[DN],0,0,0,["gM",function(b){return AUe(this,b);}],Qt,0,D,[DN],0,0,0,["gM",function(b){return A69(this,b);}],Qs,0,D,[DN],0,0,0,["gM",function(b)
{return AYH(this,b);}],NN,0,D,[],0,3,0,0,AAS,0,D,[C_],1,3,0,0,UP,0,D,[],0,3,0,0,B1,"IOException",8,BE,[],0,3,0,0,Lf,0,HJ,[Ir],0,3,0,["xK",function(b,c,d,e){return AVW(this,b,c,d,e);},"xc",function(b,c,d){return A4c(this,b,c,d);},"nu",function(b){A4t(this,b);},"ya",function(b,c){return A99(this,b,c);}],Fx,0,D,[],3,3,0,0,VX,0,D,[Fx],0,3,0,0,Fi,0,D,[DL],0,3,0,["ek",function(b){return A$0(this,b);},"fi",function(){return A$I(this);},"lJ",function(b){return A2$(this,b);}],IV,0,D,[],0,3,0,0,UL,0,IV,[],0,3,0,0,Sw,
0,D,[],0,3,0,0,VB,0,D,[],3,3,0,0,RX,0,D,[VB],0,3,0,0,AFO,0,D,[],0,3,0,0,Eg,0,D,[],1,3,0,0,Mw,0,Eg,[],0,3,0,["hF",function(b,c,d,e,f,g){A$k(this,b,c,d,e,f,g);},"of",function(b,c,d,e,f,g){AIQ(this,b,c,d,e,f,g);}],Et,0,D,[],0,3,0,0,AAQ,0,Et,[],0,3,0,["o7",function(){AYA(this);}],AKA,0,Et,[],0,3,0,["o7",function(){AYQ(this);}],L3,0,D,[],4,3,0,0,VS,0,Gj,[],0,0,0,["km",function(){AJY(this);}],Sg,0,D,[],3,3,0,0,Ih,0,D,[Sg],3,3,0,0,Gi,0,D,[Ih],1,3,0,["rt",function(b){return Q1(this,b);}],J1,0,D,[Ih],3,3,0,0,Ga,0,Gi,
[J1],1,3,0,["kR",function(){return Jf(this);}],Mq,0,Ga,[],1,3,0,0,Oy,0,D,[Ih],3,3,0,0,Xf,0,D,[Oy],3,3,0,0,AED,0,Mq,[Xf],0,3,0,0,AN9,0,D,[C_],1,3,0,0,F4,0,D,[C_],1,3,0,0,ABC,0,F4,[],1,3,0,0,AKE,0,F4,[],1,3,0,0,I9,0,D,[Ih],3,3,0,0,Fb,0,Gi,[I9],1,3,0,["ek",function(b){return A5X(this,b);},"fi",function(){return AS0(this);}],ET,0,D,[],3,3,0,0,AQi,0,Fb,[ET,Db],0,3,0,["sL",function(b){return Xd(this,b);},"rt",function(b){return Ww(this,b);},"kR",function(){return Or(this);},"lP",function(){return IJ(this);}],LS,0,
D,[],3,3,0,0,FT,0,D,[LS],1,3,0,0,AB_,0,FT,[ET,Db],0,3,0,0]);
$rt_metadata([AKb,0,F4,[],1,3,0,0,YR,0,D,[],0,3,0,0,AE1,0,D,[],0,3,0,0,EX,"Enum",9,D,[DL,Db],1,3,0,["ek",function(b){return ATr(this,b);},"fi",function(){return AX1(this);},"lJ",function(b){return AXy(this,b);}],E8,0,EX,[],12,3,0,0,Qm,0,D,[],3,3,0,0,U3,0,D,[Qm],0,0,0,["Gk",function(b){CM(this,b);},"IS",function(b){A16(this,b);}],AQE,0,D,[C_],1,3,0,0,Xl,0,D,[C_],3,3,0,0,W2,0,D,[Xl],0,0,0,["a0T",function(){return A1Y(this);}],HX,0,D,[Jx],1,3,0,0,AQd,0,HX,[],0,3,0,["Co",function(){return A4G(this);},"n9",function(b,
c,d){return A_k(this,b,c,d);},"wO",function(){return A5s(this);}],IP,0,HX,[],0,3,0,0,Pg,0,D,[],3,3,0,0,PV,0,IP,[Pg],0,3,0,0,MQ,0,D,[DL],1,3,0,["lJ",function(b){return A6w(this,b);}],WL,0,IP,[],0,3,0,["Co",function(){return ASY(this);},"n9",function(b,c,d){return ALV(this,b,c,d);},"wO",function(){return A0k(this);}],M5,0,D,[],1,3,0,0,ADq,0,M5,[],0,3,0,0,AI_,0,D,[],0,3,0,0,I7,0,D,[],0,3,0,["Ah",function(b,c,d){return A5c(this,b,c,d);}],US,0,I7,[],0,0,0,["Ah",function(b,c,d){return A1W(this,b,c,d);}],C5,"Entity",
12,D,[],1,3,0,["C0",function(){Ca(this);},"I$",function(){AET(this);},"DL",function(){XX(this);},"Bn",function(){return A1K(this);},"FQ",function(b){AJ3(this,b);},"Dz",function(b){Zg(this,b);},"HE",function(){return AE6(this);},"va",function(b){return ADF(this,b);},"xy",function(b){A6T(this,b);},"uR",function(b){A5D(this,b);},"fp",function(b,c){return AJF(this,b,c);},"lo",function(){return A9L(this);},"rL",function(){return A7W(this);},"Bu",function(b,c){A_j(this,b,c);},"uB",function(b){return AWH(this,b);},
"AQ",function(b){return AWY(this,b);},"BD",function(){AFc(this);},"z8",function(){return A9P(this);}],EP,"EntityLiving",12,C5,[],0,3,0,["lo",function(){return AXr(this);},"rL",function(){return A1O(this);},"rD",function(){return AQo(this);},"I$",function(){ANn(this);},"BD",function(){AKR(this);},"el",function(){AMq(this);},"fp",function(b,c){return ABZ(this,b,c);},"wr",function(){return A8s(this);},"u5",function(){return AUx(this);},"uE",function(){return AVs(this);},"Ft",function(b){AN2(this,b);},"mc",function()
{return ATB(this);},"Dz",function(b){AP6(this,b);},"oo",function(){ACm(this);},"wC",function(){AQN(this);},"uK",function(b,c,d){return Zq(this,b,c,d);},"DL",function(){ABF(this);}],IR,"EntityCreature",12,EP,[],0,3,0,["wC",function(){APL(this);},"nL",function(b,c){AMz(this,b,c);},"xT",function(){return AKX(this);}],DO,"EntityMonster",12,IR,[],0,3,0,["oo",function(){AC7(this);},"el",function(){AK6(this);},"xT",function(){return AKn(this);},"fp",function(b,c){return AAG(this,b,c);},"nL",function(b,c){AQV(this,
b,c);},"sw",function(b,c,d){return ABu(this,b,c,d);},"uK",function(b,c,d){return Yv(this,b,c,d);}],I3,"EntityZombie",12,DO,[],0,3,0,["oo",function(){AH1(this);},"mc",function(){return AWJ(this);}],Ji,"EntitySkeleton",12,DO,[],0,3,0,["oo",function(){AIC(this);},"nL",function(b,c){AHU(this,b,c);},"mc",function(){return AYM(this);}],JU,"EntityCreeper",12,DO,[],0,3,0,["wC",function(){ZM(this);},"nL",function(b,c){AAI(this,b,c);},"mc",function(){return ASS(this);}],Kk,"EntitySpider",12,DO,[],0,3,0,["xT",function()
{return ARp(this);},"nL",function(b,c){Zj(this,b,c);},"mc",function(){return AZL(this);}],Gw,"EntityAnimal",12,IR,[],1,3,0,["sw",function(b,c,d){return AOx(this,b,c,d);},"uK",function(b,c,d){return AK3(this,b,c,d);}],KE,"EntitySheep",12,Gw,[],0,3,0,["fp",function(b,c){return AGU(this,b,c);},"wr",function(){return A63(this);},"u5",function(){return A4g(this);},"uE",function(){return AYk(this);}],Iz,"EntityPig",12,Gw,[],0,3,0,["wr",function(){return ATx(this);},"u5",function(){return A9u(this);},"uE",function()
{return AV4(this);},"uB",function(b){return AXR(this,b);},"mc",function(){return AWc(this);}],Dz,0,D,[Db],0,3,0,0,Nx,0,D,[],0,3,0,0,O7,0,D,[],0,3,0,0,P,"Block",12,D,[],0,3,L,["gh",function(){return A82(this);},"ei",function(){return AWC(this);},"Cs",function(b,c,d,e){return AE_(this,b,c,d,e);},"pD",function(b,c,d,e,f){return AGu(this,b,c,d,e,f);},"ud",function(b,c,d,e,f){return ABW(this,b,c,d,e,f);},"eV",function(b,c){return A7g(this,b,c);},"cf",function(b){return AVC(this,b);},"oQ",function(b,c,d,e){return K5(this,
b,c,d,e);},"Fw",function(b,c,d,e,f,g){ALv(this,b,c,d,e,f,g);},"hq",function(b,c,d,e){return Nh(this,b,c,d,e);},"d1",function(){return A5k(this);},"o4",function(b,c){return A6t(this,b,c);},"pc",function(){return A3N(this);},"e5",function(b,c,d,e,f){AHQ(this,b,c,d,e,f);},"kL",function(b,c,d,e,f){APa(this,b,c,d,e,f);},"nl",function(b,c,d,e,f){Z5(this,b,c,d,e,f);},"eY",function(b,c,d,e,f){YL(this,b,c,d,e,f);},"mo",function(){return A3X(this);},"fB",function(b,c,d,e){AA5(this,b,c,d,e);},"lt",function(b,c,d,e){Z0(this,
b,c,d,e);},"eE",function(b){return AYn(this,b);},"dS",function(b,c){return ATO(this,b,c);},"IJ",function(b,c,d,e,f){Yd(this,b,c,d,e,f);},"HM",function(b,c,d,e,f,g){AEY(this,b,c,d,e,f,g);},"yg",function(b){return AZ0(this,b);},"nD",function(b,c,d,e,f,g){return J_(this,b,c,d,e,f,g);},"sF",function(b,c,d,e){AQZ(this,b,c,d,e);},"pM",function(){return AVi(this);},"fS",function(b,c,d,e){return AEE(this,b,c,d,e);},"lz",function(b,c,d,e,f){return AGI(this,b,c,d,e,f);},"oF",function(b,c,d,e,f){AJI(this,b,c,d,e,f);},
"u6",function(b,c,d,e,f){YD(this,b,c,d,e,f);},"q4",function(b,c,d,e,f){AAa(this,b,c,d,e,f);},"qz",function(b,c,d,e,f,g){AF6(this,b,c,d,e,f,g);},"xD",function(b,c,d,e){APV(this,b,c,d,e);}],Rw,0,D,[],3,3,0,0,AJd,0,Ga,[ET,Db,Rw],0,3,0,["lP",function(){return De(this);},"sL",function(b){return S(this,b);}],DE,0,D,[C_],3,3,0,0,TC,0,D,[DE],0,0,0,["gu",function(){return AWl(this);}],TB,0,D,[DE],0,0,0,["gu",function(){return AS3(this);}],TA,0,D,[DE],0,0,0,["gu",function(){return AZk(this);}],Tz,0,D,[DN],0,0,0,["gM",
function(b){return A6J(this,b);}],Su,0,D,[],0,0,0,0,Cb,"IllegalArgumentException",9,B6,[],0,3,0,0,U$,"UnsupportedCharsetException",7,Cb,[],0,3,0,0,ED,"NullPointerException",9,B6,[],0,3,0,0,AA6,0,D,[C_],4,3,0,0,Fj,0,D,[],1,3,0,0]);
$rt_metadata([L7,0,Fj,[DL],1,3,0,0,AE4,0,D,[],0,3,0,0,QC,0,D,[],0,3,0,0,E3,0,D,[Jx,NR],1,3,0,["gt",function(b,c,d){ATe(this,b,c,d);},"tK",function(){A8W(this);},"lq",function(){A9K(this);}],F$,0,E3,[],0,3,0,0,AA2,0,F$,[],0,3,0,0,W_,0,E3,[],0,0,0,["nI",function(b){AYf(this,b);}],AFa,"IllegalCharsetNameException",7,Cb,[],0,3,0,0,MP,0,D,[],128,3,0,0,Ud,0,MP,[],4,3,0,0,In,0,D,[],0,3,0,0,AHn,0,In,[],4,0,0,0,ACo,0,In,[],4,0,0,0,LO,"BlockStone",12,P,[],0,3,0,["dS",function(b,c){return A8I(this,b,c);}],Z2,"BlockGrass",
12,P,[],0,3,0,["cf",function(b){return A7r(this,b);},"e5",function(b,c,d,e,f){ADn(this,b,c,d,e,f);},"dS",function(b,c){return AZ7(this,b,c);}],AHT,"BlockDirt",12,P,[],0,3,0,0,B8,0,D,[],0,3,0,["nz",function(){return A8m(this);},"dt",function(){return A0X(this);},"sd",function(){return A7R(this);},"ua",function(){return A5t(this);}],FY,"BlockFlower",12,P,[],0,3,0,["fS",function(b,c,d,e){return ALS(this,b,c,d,e);},"rj",function(b){return AYj(this,b);},"eY",function(b,c,d,e,f){AIF(this,b,c,d,e,f);},"e5",function(b,
c,d,e,f){AD9(this,b,c,d,e,f);},"G6",function(b,c,d,e){return AN5(this,b,c,d,e);},"hq",function(b,c,d,e){return AGk(this,b,c,d,e);},"d1",function(){return A6m(this);},"gh",function(){return ATY(this);},"ei",function(){return A7w(this);}],AMV,"BlockSapling",12,FY,[],0,3,0,["e5",function(b,c,d,e,f){AEg(this,b,c,d,e,f);}],HO,0,P,[],1,3,0,["cf",function(b){return AS$(this,b);},"gh",function(){return A$_(this);},"d1",function(){return A$t(this);},"o4",function(b,c){return A8F(this,b,c);},"pD",function(b,c,d,e,f){
return ARv(this,b,c,d,e,f);},"hq",function(b,c,d,e){return Yb(this,b,c,d,e);},"ei",function(){return A7Z(this);},"dS",function(b,c){return A3d(this,b,c);},"eE",function(b){return A6a(this,b);},"qz",function(b,c,d,e,f,g){ANa(this,b,c,d,e,f,g);},"mo",function(){return AU2(this);},"Cs",function(b,c,d,e){return AEu(this,b,c,d,e);},"e5",function(b,c,d,e,f){AQ9(this,b,c,d,e,f);},"pM",function(){return A$q(this);},"kL",function(b,c,d,e,f){YB(this,b,c,d,e,f);},"fB",function(b,c,d,e){ARP(this,b,c,d,e);},"eY",function(b,
c,d,e,f){ALd(this,b,c,d,e,f);}],AEf,"BlockFlowing",12,HO,[],0,3,0,["e5",function(b,c,d,e,f){AON(this,b,c,d,e,f);},"fB",function(b,c,d,e){AB0(this,b,c,d,e);}],AIJ,"BlockStationary",12,HO,[],0,3,0,["eY",function(b,c,d,e,f){AGx(this,b,c,d,e,f);}],I4,"BlockSand",12,P,[],0,3,0,["fB",function(b,c,d,e){ARN(this,b,c,d,e);},"eY",function(b,c,d,e,f){ASb(this,b,c,d,e,f);},"e5",function(b,c,d,e,f){APy(this,b,c,d,e,f);},"mo",function(){return A3W(this);}],AG4,"BlockGravel",12,I4,[],0,3,0,["dS",function(b,c){return A_m(this,
b,c);}],YT,"BlockOre",12,P,[],0,3,0,["dS",function(b,c){return A4n(this,b,c);},"eE",function(b){return AZ6(this,b);}],AFg,"BlockLog",12,P,[],0,3,0,["eE",function(b){return A8X(this,b);},"dS",function(b,c){return ATc(this,b,c);},"cf",function(b){return AVw(this,b);}],LV,0,P,[],0,3,0,["pD",function(b,c,d,e,f){return AQu(this,b,c,d,e,f);}],ACC,"BlockLeaves",12,LV,[],0,3,0,["e5",function(b,c,d,e,f){AIy(this,b,c,d,e,f);},"eE",function(b){return AW3(this,b);},"dS",function(b,c){return A5d(this,b,c);},"d1",function()
{return A2P(this);},"oF",function(b,c,d,e,f){ASp(this,b,c,d,e,f);}],ALc,"BlockSponge",12,P,[],0,3,0,["fB",function(b,c,d,e){AKI(this,b,c,d,e);},"lt",function(b,c,d,e){ANs(this,b,c,d,e);}],M9,0,P,[],0,3,0,["d1",function(){return A$c(this);},"pD",function(b,c,d,e,f){return Yt(this,b,c,d,e,f);}],AQl,"BlockGlass",12,M9,[],0,3,0,["eE",function(b){return AV5(this,b);}],AHc,"BlockMushroom",12,FY,[],0,3,0,["rj",function(b){return AI4(this,b);},"G6",function(b,c,d,e){return ADh(this,b,c,d,e);}],ABr,"BlockOreBlock",12,
P,[],0,3,0,["cf",function(b){return A4A(this,b);}],Zd,"BlockStep",12,P,[],0,3,0,["cf",function(b){return A$L(this,b);},"d1",function(){return A5S(this);},"eY",function(b,c,d,e,f){ABA(this,b,c,d,e,f);},"fB",function(b,c,d,e){ABg(this,b,c,d,e);},"dS",function(b,c){return AZl(this,b,c);},"gh",function(){return AW5(this);},"pD",function(b,c,d,e,f){return ASB(this,b,c,d,e,f);}],AOe,"BlockTNT",12,P,[],0,3,0,["cf",function(b){return A43(this,b);},"eE",function(b){return AU$(this,b);},"sF",function(b,c,d,e){AGD(this,
b,c,d,e);},"nl",function(b,c,d,e,f){ASj(this,b,c,d,e,f);}],AC9,"BlockBookshelf",12,P,[],0,3,0,["cf",function(b){return A_a(this,b);},"eE",function(b){return A4C(this,b);}],XJ,"BlockObsidian",12,LO,[],0,3,0,["eE",function(b){return A28(this,b);},"dS",function(b,c){return AUU(this,b,c);}],AOA,"BlockTorch",12,P,[],0,3,0,["hq",function(b,c,d,e){return ANi(this,b,c,d,e);},"d1",function(){return A2a(this);},"gh",function(){return AV$(this);},"ei",function(){return A0V(this);},"fS",function(b,c,d,e){return AL5(this,
b,c,d,e);},"u6",function(b,c,d,e,f){ANM(this,b,c,d,e,f);},"e5",function(b,c,d,e,f){AR_(this,b,c,d,e,f);},"fB",function(b,c,d,e){ABq(this,b,c,d,e);},"eY",function(b,c,d,e,f){AJ_(this,b,c,d,e,f);},"nD",function(b,c,d,e,f,g){return AKg(this,b,c,d,e,f,g);},"kL",function(b,c,d,e,f){AQn(this,b,c,d,e,f);}],AOZ,"BlockFire",12,P,[],0,3,0,["hq",function(b,c,d,e){return ARB(this,b,c,d,e);},"d1",function(){return A5Z(this);},"gh",function(){return A8w(this);},"ei",function(){return AXu(this);},"eE",function(b){return AWD(this,
b);},"mo",function(){return AZ2(this);},"e5",function(b,c,d,e,f){XI(this,b,c,d,e,f);},"pc",function(){return A3k(this);},"fS",function(b,c,d,e){return ANp(this,b,c,d,e);},"eY",function(b,c,d,e,f){ABw(this,b,c,d,e,f);},"fB",function(b,c,d,e){ACp(this,b,c,d,e);},"kL",function(b,c,d,e,f){ASq(this,b,c,d,e,f);}],Ef,0,P,[],1,3,0,["fB",function(b,c,d,e){AOD(this,b,c,d,e);},"lt",function(b,c,d,e){ALW(this,b,c,d,e);}],Z$,"BlockMobSpawner",12,Ef,[],0,3,0,["s7",function(){return AXg(this);},"d1",function(){return A54(this);
}],Zv,"BlockStairs",12,P,[],0,3,0,["d1",function(){return A5H(this);},"gh",function(){return AV3(this);},"ei",function(){return AYV(this);},"pD",function(b,c,d,e,f){return APz(this,b,c,d,e,f);},"Fw",function(b,c,d,e,f,g){AJy(this,b,c,d,e,f,g);},"eY",function(b,c,d,e,f){AHC(this,b,c,d,e,f);},"kL",function(b,c,d,e,f){APb(this,b,c,d,e,f);},"q4",function(b,c,d,e,f){ABa(this,b,c,d,e,f);},"nl",function(b,c,d,e,f){ADm(this,b,c,d,e,f);},"Cs",function(b,c,d,e){return AMU(this,b,c,d,e);},"yg",function(b){return A8Y(this,
b);},"pM",function(){return A8a(this);},"dS",function(b,c){return A4e(this,b,c);},"eE",function(b){return A0u(this,b);},"eV",function(b,c){return AXv(this,b,c);},"cf",function(b){return A76(this,b);},"ud",function(b,c,d,e,f){return AM5(this,b,c,d,e,f);},"mo",function(){return AVG(this);},"oQ",function(b,c,d,e){return AMe(this,b,c,d,e);},"qz",function(b,c,d,e,f,g){ACG(this,b,c,d,e,f,g);},"pc",function(){return AYB(this);},"o4",function(b,c){return AYO(this,b,c);},"fS",function(b,c,d,e){return AMm(this,b,c,d,
e);},"fB",function(b,c,d,e){ACB(this,b,c,d,e);},"lt",function(b,c,d,e){Yx(this,b,c,d,e);},"HM",function(b,c,d,e,f,g){AHP(this,b,c,d,e,f,g);},"IJ",function(b,c,d,e,f){AMX(this,b,c,d,e,f);},"oF",function(b,c,d,e,f){AQR(this,b,c,d,e,f);},"e5",function(b,c,d,e,f){AQW(this,b,c,d,e,f);},"lz",function(b,c,d,e,f){return AGJ(this,b,c,d,e,f);},"sF",function(b,c,d,e){Y8(this,b,c,d,e);}],AFR,"BlockChest",12,Ef,[],0,3,0,["ud",function(b,c,d,e,f){return AEx(this,b,c,d,e,f);},"cf",function(b){return A89(this,b);},"fS",function(b,
c,d,e){return AJ1(this,b,c,d,e);},"lt",function(b,c,d,e){ASD(this,b,c,d,e);},"lz",function(b,c,d,e,f){return AFX(this,b,c,d,e,f);},"s7",function(){return AZC(this);}],AKH,"BlockGears",12,P,[],0,3,0,["hq",function(b,c,d,e){return AEU(this,b,c,d,e);},"d1",function(){return ATV(this);},"gh",function(){return A5f(this);},"ei",function(){return A7u(this);},"eE",function(b){return A9R(this,b);},"pc",function(){return AUA(this);}],AHv,"BlockWorkbench",12,P,[],0,3,0,["cf",function(b){return AWt(this,b);},"lz",function(b,
c,d,e,f){return AGQ(this,b,c,d,e,f);}],AKG,"BlockCrops",12,FY,[],0,3,0,["rj",function(b){return AYF(this,b);},"e5",function(b,c,d,e,f){AJl(this,b,c,d,e,f);},"eV",function(b,c){return A8u(this,b,c);},"ei",function(){return A4F(this);},"nl",function(b,c,d,e,f){ANx(this,b,c,d,e,f);},"dS",function(b,c){return A0Y(this,b,c);},"eE",function(b){return A4W(this,b);}],AQO,"BlockFarmland",12,P,[],0,3,0,["hq",function(b,c,d,e){return AA1(this,b,c,d,e);},"d1",function(){return AU1(this);},"gh",function(){return A1A(this);
},"eV",function(b,c){return A_l(this,b,c);},"e5",function(b,c,d,e,f){ANb(this,b,c,d,e,f);},"oF",function(b,c,d,e,f){AKN(this,b,c,d,e,f);},"eY",function(b,c,d,e,f){X6(this,b,c,d,e,f);},"dS",function(b,c){return AW0(this,b,c);}],AF2,"BlockFurnace",12,Ef,[],0,3,0,["fB",function(b,c,d,e){ACr(this,b,c,d,e);},"ud",function(b,c,d,e,f){return AKd(this,b,c,d,e,f);},"kL",function(b,c,d,e,f){AEl(this,b,c,d,e,f);},"cf",function(b){return AUW(this,b);},"lz",function(b,c,d,e,f){return AGT(this,b,c,d,e,f);},"s7",function()
{return A77(this);}],Vn,"BlockSign",12,Ef,[],0,3,0,["ei",function(){return AYK(this);},"gh",function(){return A5_(this);},"d1",function(){return A55(this);},"s7",function(){return A1L(this);},"fS",function(b,c,d,e){return AGM(this,b,c,d,e);},"dS",function(b,c){return A8D(this,b,c);},"eY",function(b,c,d,e,f){ZQ(this,b,c,d,e,f);}],D9,"TileEntity",12,D,[],0,3,0,["tH",function(){AFJ(this);},"kd",function(){ACc(this);}]]);
$rt_metadata([Jc,0,D9,[],0,3,0,0,Bb,0,D,[],0,3,BB,["iI",function(b,c,d,e,f,g,h){return AGs(this,b,c,d,e,f,g,h);},"xW",function(b,c){return A$M(this,b,c);},"n5",function(b,c,d){return ASh(this,b,c,d);},"r_",function(b,c){AV9(this,b,c);},"xQ",function(b,c,d,e,f){A49(this,b,c,d,e,f);},"nW",function(b){return A_s(this,b);},"o5",function(b){return AV0(this,b);},"yy",function(b,c){A3I(this,b,c);}],AIx,"BlockDoor",12,P,[],0,3,0,["eV",function(b,c){return A$s(this,b,c);},"d1",function(){return A0R(this);},"gh",function()
{return AXp(this);},"ei",function(){return ATL(this);},"oQ",function(b,c,d,e){return AGq(this,b,c,d,e);},"hq",function(b,c,d,e){return Zx(this,b,c,d,e);},"xD",function(b,c,d,e){AHE(this,b,c,d,e);},"q4",function(b,c,d,e,f){AJV(this,b,c,d,e,f);},"lz",function(b,c,d,e,f){return ADS(this,b,c,d,e,f);},"eY",function(b,c,d,e,f){ACv(this,b,c,d,e,f);},"dS",function(b,c){return A8C(this,b,c);},"nD",function(b,c,d,e,f,g){return XB(this,b,c,d,e,f,g);},"fS",function(b,c,d,e){return AJ0(this,b,c,d,e);}],AC0,"BlockLadder",
12,P,[],0,3,0,["hq",function(b,c,d,e){return ADd(this,b,c,d,e);},"oQ",function(b,c,d,e){return AD5(this,b,c,d,e);},"d1",function(){return AWU(this);},"gh",function(){return A5W(this);},"ei",function(){return A9A(this);},"fS",function(b,c,d,e){return ANS(this,b,c,d,e);},"u6",function(b,c,d,e,f){Yk(this,b,c,d,e,f);},"eY",function(b,c,d,e,f){AKK(this,b,c,d,e,f);},"eE",function(b){return A5u(this,b);}],ANV,"BlockMinecartTrack",12,P,[],0,3,0,["hq",function(b,c,d,e){return ACA(this,b,c,d,e);},"d1",function(){return AWv(this);
},"nD",function(b,c,d,e,f,g){return ALA(this,b,c,d,e,f,g);},"xD",function(b,c,d,e){AMj(this,b,c,d,e);},"eV",function(b,c){return A2A(this,b,c);},"gh",function(){return A3B(this);},"ei",function(){return A0w(this);},"eE",function(b){return A2H(this,b);},"fS",function(b,c,d,e){return ANU(this,b,c,d,e);},"fB",function(b,c,d,e){AND(this,b,c,d,e);},"eY",function(b,c,d,e,f){AJN(this,b,c,d,e,f);}],ASz,0,Bb,[],0,3,0,["iI",function(b,c,d,e,f,g,h){return AQm(this,b,c,d,e,f,g,h);}],AHG,0,MQ,[],0,3,0,0,M2,0,Fj,[DL],1,3,
0,0,Nd,0,L7,[],1,0,0,0,WJ,0,Nd,[],0,0,0,0,ARk,0,M2,[],0,0,0,0,Vm,0,D,[],3,3,0,0,LT,0,Fj,[DL,Ir,KW,Vm],1,3,0,0,PZ,"GZIPException",2,B1,[],0,3,0,0,Of,0,B8,[],0,3,0,["dt",function(){return A4U(this);},"sd",function(){return A5z(this);},"ua",function(){return ATk(this);}],LZ,0,B8,[],0,3,0,["nz",function(){return A_G(this);},"dt",function(){return AY7(this);}],N2,0,B8,[],0,3,0,["dt",function(){return A6Y(this);},"sd",function(){return A97(this);},"ua",function(){return AU3(this);}],F8,0,Bb,[],0,3,0,["xW",function(b,
c){return A8V(this,b,c);},"r_",function(b,c){A67(this,b,c);},"xQ",function(b,c,d,e,f){AWo(this,b,c,d,e,f);},"nW",function(b){return AW8(this,b);}],OR,0,F8,[],0,3,Bb6,0,Vq,0,F8,[],0,3,Bb9,["o5",function(b){return A5m(this,b);}],Wn,0,F8,[],0,3,BbJ,0,AE0,0,Bb,[],0,3,0,["iI",function(b,c,d,e,f,g,h){return AJH(this,b,c,d,e,f,g,h);}],LM,0,Bb,[],0,3,0,["n5",function(b,c,d){return P3(this,b,c,d);}],AOS,0,Bb,[],0,3,0,["n5",function(b,c,d){return AGA(this,b,c,d);}],AK$,0,Bb,[],0,3,0,["xW",function(b,c){return A0v(this,
b,c);},"r_",function(b,c){A7U(this,b,c);},"xQ",function(b,c,d,e,f){AX3(this,b,c,d,e,f);},"nW",function(b){return A2z(this,b);}],AOa,0,LM,[],0,3,0,["n5",function(b,c,d){return APt(this,b,c,d);}],ANw,0,Bb,[],0,3,0,["iI",function(b,c,d,e,f,g,h){return AQS(this,b,c,d,e,f,g,h);}],VQ,0,Bb,[],0,3,0,["iI",function(b,c,d,e,f,g,h){return AFl(this,b,c,d,e,f,g,h);}],FZ,0,Bb,[],0,3,0,0,XR,0,Bb,[],0,3,0,["iI",function(b,c,d,e,f,g,h){return ACa(this,b,c,d,e,f,g,h);}],AHq,0,Bb,[],0,3,0,["iI",function(b,c,d,e,f,g,h){return Ya(this,
b,c,d,e,f,g,h);}],AJa,0,Bb,[],0,3,0,["iI",function(b,c,d,e,f,g,h){return AD$(this,b,c,d,e,f,g,h);}],ARL,0,Bb,[],0,3,0,["n5",function(b,c,d){return AHY(this,b,c,d);}],AO7,0,Bb,[],0,3,0,["iI",function(b,c,d,e,f,g,h){return AC6(this,b,c,d,e,f,g,h);}],ARd,0,Bb,[],0,3,0,["yy",function(b,c){AGy(this,b,c);},"r_",function(b,c){AWk(this,b,c);}],NW,0,D,[],3,0,0,0,AGi,0,D,[NW],4,3,0,["EV",function(b){ASV(this,b);},"lT",function(){AZu(this);},"ys",function(){return AT1(this);},"kF",function(b,c,d){A8h(this,b,c,d);}],R9,
"CloneNotSupportedException",9,BE,[],0,3,0,0,Nl,0,D,[],4,3,0,0,JZ,0,D,[],3,3,0,0,LJ,0,D,[JZ,ET],0,0,0,["ek",function(b){return A41(this,b);},"fi",function(){return A1V(this);}],IC,0,LJ,[],0,0,0,0,BO,"IndexOutOfBoundsException",9,B6,[],0,3,0,0,IU,"StringIndexOutOfBoundsException",9,BO,[],0,3,0,0,GC,0,D,[],3,3,0,0,Wu,0,D,[GC],0,3,0,["km",function(){AI1(this);}],FD,"EOFException",8,B1,[],0,3,0,0,EQ,0,D,[],0,3,0,0,Fu,0,D,[],0,3,0,0,LH,0,D,[],4,0,0,0]);
$rt_metadata([PJ,0,E3,[],0,0,0,["nI",function(b){A59(this,b);}],Kh,0,D,[],0,3,0,0,AMl,0,D,[],4,3,0,0,Ja,0,D,[],0,3,0,0,Lr,0,LT,[],1,0,0,0,ABK,0,Lr,[],0,0,0,0,LP,0,D,[],1,3,0,0,N5,0,D,[],0,3,0,0,Z6,0,D,[C_],1,3,0,0,PK,0,D,[C_],3,3,0,0,Yz,0,D,[C_,PK],1,3,0,0,KB,0,D,[],4,0,0,0,Nz,0,LP,[],1,3,0,0,PL,0,Nz,[],0,3,0,0,AOn,0,D,[],4,3,0,0,F9,0,D,[],4,0,0,0,Lz,0,D,[],4,0,0,0,Hs,"UTFDataFormatException",8,B1,[],0,3,0,0,Xq,"NegativeArraySizeException",9,B6,[],0,3,0,0,AAV,0,D,[Lk],1,3,0,["QU",function(b){return A_A(this,
b);},"Zs",function(){return AUy(this);}],Ki,"IllegalMonitorStateException",9,B6,[],0,3,0,0,ZS,0,D,[],0,0,0,0,D1,"IllegalStateException",9,BE,[],0,3,0,0,AIz,0,D,[C_],1,3,0,0,SK,0,D,[GC],0,3,0,["km",function(){AQ7(this);}],Q6,0,D,[GC],0,3,0,0,GX,0,B1,[],0,3,0,0,WX,"AssertionError",9,Fg,[],0,3,0,0,E1,0,BE,[],0,3,0,0,Od,0,D,[],1,3,0,0,Sa,0,D,[],3,3,0,0,Sk,0,D,[],3,3,0,0,Pb,0,D,[GC,Sa,Sk],0,0,0,["km",function(){APj(this);}],LE,0,Od,[],1,3,0,0,Rb,0,LE,[],0,3,0,0,DW,"Inflate$Return",2,BE,[],0,0,0,0,ANu,0,D,[ET],0,
3,0,0,OO,0,D,[NW],4,3,0,["kF",function(b,c,d){A2y(this,b,c,d);},"lT",function(){A6s(this);},"EV",function(b){A9U(this,b);},"ys",function(){return A7y(this);}],I5,0,D,[],0,3,0,0,Qc,0,D,[],3,3,0,0,Bu,0,Bs,[Qc],0,3,BV,0,ACz,0,D,[],0,3,0,0,Ny,0,D,[],0,3,0,0,Ik,0,D,[],0,3,Tj,0,AR$,0,E3,[],0,3,0,["nI",function(b){A7P(this,b);},"gt",function(b,c,d){Rn(this,b,c,d);}],JP,"ArrayStoreException",9,B6,[],0,3,0,0,N_,0,D,[],3,3,0,0,GF,0,D,[N_],0,3,0,["ef",function(b,c,d){return ACt(this,b,c,d);},"oI",function(b,c,d){return ABX(this,
b,c,d);},"eF",function(b,c,d){return AEI(this,b,c,d);},"sH",function(b,c,d){return ANf(this,b,c,d);},"k_",function(b,c,d){return AAz(this,b,c,d);}],L0,0,D,[],0,3,BA,0,ANd,0,D,[],0,3,0,0]);
$rt_metadata([Gb,0,D,[],0,3,0,0,CS,0,Gb,[],0,3,0,["o8",function(b,c){YK(this,b,c);},"IY",function(b,c,d){Zk(this,b,c,d);},"B_",function(b,c,d){A2w(this,b,c,d);},"iz",function(b){AMQ(this,b);},"hR",function(){AP5(this);},"rv",function(){A3f(this);},"pq",function(){AH8(this);},"n8",function(){return AVp(this);}],AFd,0,D,[],0,3,0,0,Mj,0,D,[Db],1,3,0,0,Er,0,Mj,[Db],0,3,0,0,N6,0,D,[],3,3,0,0,I0,0,D,[Db,N6],1,3,0,0,Wd,0,D,[N6],3,3,0,0,NT,0,D,[Wd],3,3,0,0,RV,0,D,[],3,3,0,0,Mc,0,D,[RV],3,3,0,0,UW,0,I0,[Db,NT,Mc],0,
3,0,0,Wb,0,D,[NT],3,3,0,0,RP,0,D,[Mc],3,3,0,0,G6,0,I0,[Db,Wb,RP],0,3,0,0,SS,0,D,[GC],0,3,0,["km",function(){AIB(this);}],AOW,"CoderMalfunctionError",7,Fg,[],0,3,0,0,H1,0,D,[],3,3,0,0,Um,0,D,[H1],3,3,0,0,ACW,0,D,[Um],0,0,0,0,Ry,0,D,[],0,0,0,0,KG,0,D,[],0,3,0,0,Wc,0,D,[],0,3,0,0,Qf,0,D,[],0,3,0,0,AKU,0,Et,[],0,3,0,["o7",function(){AZ9(this);}],ACh,0,Et,[],0,3,0,["o7",function(){A8S(this);}],AR4,0,Et,[],0,3,0,["o7",function(){A3t(this);}],Xn,0,D,[],3,3,0,0,AAr,0,D,[Xn],0,3,0,0,AHa,0,CS,[],0,3,0,["rv",function()
{A5q(this);},"o8",function(b,c){ANJ(this,b,c);},"hR",function(){AIs(this);},"iz",function(b){ACn(this,b);},"hL",function(b,c,d){Zz(this,b,c,d);}],OU,0,D,[],0,3,0,0,Nn,0,Gb,[],0,3,0,0,Jq,"EntityPlayer",12,EP,[],0,3,0,["BD",function(){AFW(this);},"Ft",function(b){ALb(this,b);},"Bu",function(b,c){AZs(this,b,c);},"rD",function(){return A5h(this);},"fp",function(b,c){return Ym(this,b,c);}],AGB,"EntityPlayerSP",12,Jq,[],0,3,0,["wC",function(){AAM(this);},"oo",function(){ALk(this);}],AJE,0,D,[],0,3,0,0,Qi,0,D,[],0,
3,0,0,Vi,0,D,[],0,3,0,0,FA,0,D,[],3,3,0,0,Vw,0,D,[FA],0,3,0,["j0",function(b,c){return El(this,b,c);},"jw",function(b,c){AFB(this,b,c);},"gv",function(b){return RJ(this,b);},"f4",function(){return AZp(this);},"kd",function(){AAl(this);}],Du,0,IV,[],0,3,0,0,Ev,0,CS,[],1,3,0,["hL",function(b,c,d){ACe(this,b,c,d);},"IY",function(b,c,d){AN3(this,b,c,d);},"B_",function(b,c,d){A9J(this,b,c,d);},"o8",function(b,c){AAt(this,b,c);},"pq",function(){AAW(this);},"n8",function(){return A$3(this);}],APM,0,Ev,[],0,3,0,["pq",
function(){ALG(this);},"tj",function(b){ATQ(this,b);},"lm",function(){AZ4(this);},"hL",function(b,c,d){ADX(this,b,c,d);},"sX",function(b){X5(this,b);}],I2,0,D,[],0,3,0,0,Rm,0,D,[],0,0,0,0,Ta,0,D,[],0,3,0,0,AHo,0,D,[],0,3,0,0,Cd,0,D,[],4,3,0,0,ZH,0,D,[FA],0,3,0,["gv",function(b){return Gd(this,b);},"j0",function(b,c){return AEW(this,b,c);},"jw",function(b,c){A3C(this,b,c);},"f4",function(){return A80(this);},"kd",function(){ADO(this);}],AAB,0,D,[FA],0,3,0,["gv",function(b){return A46(this,b);},"j0",function(b,
c){return AWA(this,b,c);},"jw",function(b,c){Pe(this,b,c);},"f4",function(){return AYT(this);},"kd",function(){ANg(this);}],HH,0,D,[],0,3,0,["Jh",function(){AK8(this);},"s1",function(b){return AXe(this,b);},"rQ",function(){return A9S(this);}]]);
$rt_metadata([ADc,0,HH,[],0,0,0,["s1",function(b){return A0j(this,b);},"Jh",function(){AN6(this);}],QD,0,HH,[],0,0,0,["s1",function(b){return A2R(this,b);},"rQ",function(){return AWu(this);}],V7,0,D,[],4,3,0,0,St,0,D,[],4,3,0,0,M0,0,Fj,[DL],1,3,0,0,Dg,0,D,[],1,3,0,0,AIG,0,Dg,[],0,3,0,["iK",function(b,c,d,e,f,g){AC4(this,b,c,d,e,f,g);}],O8,0,D,[],4,3,0,0,Qw,0,D,[DN],0,0,0,["gM",function(b){return A7s(this,b);}],Qv,0,D,[DN],0,0,0,["gM",function(b){return A7E(this,b);}],It,0,M0,[],1,0,0,0,UN,0,It,[],0,0,0,["yk",
function(b){return AOI(this,b);},"u0",function(b,c){ANG(this,b,c);},"mV",function(){return ASO(this);}],V0,0,D,[],4,3,0,0,VW,0,D,[],4,3,0,0,Xc,0,D,[],4,3,0,0,Jj,"UnsupportedOperationException",9,B6,[],0,3,0,0,UB,0,CS,[],0,3,0,["hR",function(){ADe(this);},"iz",function(b){AOB(this,b);},"hL",function(b,c,d){AMy(this,b,c,d);}],FQ,"ReadOnlyBufferException",6,Jj,[],0,3,0,0,G9,"BufferOverflowException",6,B6,[],0,3,0,0,Go,"BufferUnderflowException",6,B6,[],0,3,0,0,Tr,0,D,[],0,3,0,0,ACj,0,D,[],0,3,0,0,Rs,0,CS,[],0,
3,0,0,Mk,0,CS,[],0,3,0,["hR",function(){AOk(this);},"o8",function(b,c){AMi(this,b,c);},"iz",function(b){AOu(this,b);},"hL",function(b,c,d){APl(this,b,c,d);},"n8",function(){return A6Q(this);}],C0,"EntityFX",12,C5,[],0,3,0,["el",function(){ALl(this);},"kM",function(b,c,d,e,f,g,h){ANr(this,b,c,d,e,f,g,h);},"xp",function(){return A71(this);}],AAX,0,CS,[],0,3,0,["hR",function(){ARb(this);},"iz",function(b){ADk(this,b);},"rv",function(){A2e(this);},"hL",function(b,c,d){ADK(this,b,c,d);}],Lx,0,D,[],0,3,0,0,Wy,0,Lx,
[],0,3,0,0,QZ,0,D,[],3,3,0,0,AFS,0,D,[QZ],0,3,0,0,OZ,0,D,[],0,3,0,0,Id,0,D,[FA],0,3,0,["gl",function(){return A6u(this);},"w0",function(){return A6h(this);},"gv",function(b){return AS7(this,b);},"j0",function(b,c){return A3g(this,b,c);},"jw",function(b,c){AWQ(this,b,c);},"f4",function(){return A9$(this);},"kd",function(){Yu(this);}],ZD,"EntityDiggingFX",12,C0,[],0,3,0,["xp",function(){return ATD(this);},"kM",function(b,c,d,e,f,g,h){YH(this,b,c,d,e,f,g,h);}],KQ,"ConcurrentModificationException",4,B6,[],0,3,0,
0,JK,"EntityRainFX",12,C0,[],0,3,0,["kM",function(b,c,d,e,f,g,h){AKL(this,b,c,d,e,f,g,h);},"el",function(){AOw(this);}],IK,0,It,[],1,0,0,["mV",function(){return AXL(this);}],O$,0,IK,[],0,0,0,["yk",function(b){return AV_(this,b);},"u0",function(b,c){ASN(this,b,c);}],VG,0,IK,[],0,0,0,["yk",function(b){return A0P(this,b);},"u0",function(b,c){ATG(this,b,c);}],AKT,0,D,[Fx],0,3,0,["qa",function(b,c){return A08(this,b,c);}],V5,0,D,[Fx],0,3,0,["qa",function(b,c){return A9G(this,b,c);}],Ho,0,D,[],0,3,0,0,HT,0,D,[],0,
3,0,0,HV,0,D,[],0,3,0,0,Na,0,D,[],0,3,0,0,JX,"NoSuchElementException",4,B6,[],0,3,0,0,VP,0,D,[],0,3,0,["ek",function(b){return A6p(this,b);},"fi",function(){return A1q(this);}],Oo,0,Fa,[DL],0,3,0,0,Hi,0,D,[],0,0,0,0,Nb,0,D,[],4,3,0,0,R3,0,D,[],0,3,0,0]);
$rt_metadata([DH,0,Dg,[],0,3,0,["H0",function(b,c,d,e,f,g){Z9(this,b,c,d,e,f,g);},"k2",function(b,c){return APR(this,b,c);},"CA",function(b){return A5j(this,b);},"CD",function(b,c,d){return A6y(this,b,c,d);},"w$",function(b,c){A9b(this,b,c);},"iK",function(b,c,d,e,f,g){AOV(this,b,c,d,e,f,g);}],OH,0,DH,[],0,3,0,["k2",function(b,c){return Y6(this,b,c);},"H0",function(b,c,d,e,f,g){AL1(this,b,c,d,e,f,g);},"iK",function(b,c,d,e,f,g){ACI(this,b,c,d,e,f,g);}],Ly,0,Gb,[],0,3,0,0,L9,0,D,[MO],0,3,0,0,Qn,0,D,[],3,3,0,
0,Kp,0,L9,[Qn],0,3,0,0,On,0,D,[C_],3,3,0,0,Qu,0,D,[On],0,0,0,["Ga",function(){return A1B(this);}],WE,0,D,[Fx],0,3,0,["qa",function(b,c){return A4R(this,b,c);}],WC,0,D,[Fx],0,3,0,0,R5,0,Fb,[],4,0,0,0,R4,0,FT,[],4,0,0,0,R6,0,Ga,[],4,0,0,0,Iy,0,D,[],1,3,0,0,AA0,0,Iy,[],0,3,0,["CO",function(b,c,d,e,f){Xz(this,b,c,d,e,f);}],Nt,0,D9,[],0,3,0,["tH",function(){AC1(this);}],ARY,0,Iy,[],0,3,0,["CO",function(b,c,d,e,f){ARc(this,b,c,d,e,f);}],AQh,0,DH,[],0,3,0,["CA",function(b){return A6k(this,b);},"k2",function(b,c){return X$(this,
b,c);}],T1,0,DH,[],0,3,0,["k2",function(b,c){return AL_(this,b,c);}],FX,0,Eg,[],0,3,0,["hF",function(b,c,d,e,f,g){A90(this,b,c,d,e,f,g);}],PQ,0,FX,[],0,3,0,0,Tx,0,DH,[],0,3,0,["k2",function(b,c){return ARq(this,b,c);}],ACE,0,FX,[],0,3,0,0,ARf,0,FX,[],0,3,0,0,AB6,0,DH,[],0,3,0,["w$",function(b,c){A7X(this,b,c);},"CD",function(b,c,d){return AZV(this,b,c,d);}],HN,0,Mw,[],0,3,0,["of",function(b,c,d,e,f,g){A2I(this,b,c,d,e,f,g);}],AIn,0,HN,[],0,3,0,0,K9,"EntityGiant",12,DO,[],0,3,0,["sw",function(b,c,d){return AO6(this,
b,c,d);}],T5,0,DH,[],0,3,0,["w$",function(b,c){A$1(this,b,c);}],TE,0,Dg,[],0,3,0,["iK",function(b,c,d,e,f,g){AJq(this,b,c,d,e,f,g);}],ID,"EntityPainting",12,C5,[],0,3,0,["el",function(){ADi(this);},"lo",function(){return AXN(this);},"fp",function(b,c){return AEp(this,b,c);}],AAp,0,Dg,[],0,3,0,["iK",function(b,c,d,e,f,g){AOP(this,b,c,d,e,f,g);}],Jo,"EntityArrow",12,C5,[],0,3,0,["el",function(){APr(this);},"xy",function(b){A7C(this,b);}],Rr,0,Dg,[],0,3,0,["iK",function(b,c,d,e,f,g){ADg(this,b,c,d,e,f,g);}],E9,
"EntityItem",12,C5,[],0,3,0,["el",function(){AJC(this);},"HE",function(){return AEd(this);},"FQ",function(b){AMs(this,b);},"fp",function(b,c){return Vb(this,b,c);},"xy",function(b){A_e(this,b);}],Mo,"EntityTNTPrimed",12,C5,[],0,3,0,["lo",function(){return A$e(this);},"el",function(){XF(this);}],AOT,0,Dg,[],0,3,0,["iK",function(b,c,d,e,f,g){AL4(this,b,c,d,e,f,g);}],JI,"EntityFallingSand",12,C5,[],0,3,0,["lo",function(){return AYh(this);},"el",function(){AML(this);}],AQM,0,Dg,[],0,3,0,["iK",function(b,c,d,e,f,
g){ARj(this,b,c,d,e,f,g);}],Gc,"EntityMinecart",12,C5,[FA],0,3,0,["AQ",function(b){return ASP(this,b);},"Bn",function(){return AZ1(this);},"rL",function(){return A7F(this);},"z8",function(){return AVM(this);},"fp",function(b,c){return ALe(this,b,c);},"lo",function(){return A9M(this);},"C0",function(){APd(this);},"el",function(){ASE(this);},"uR",function(b){A3P(this,b);},"uB",function(b){return A8P(this,b);}],ARy,0,Dg,[],0,3,0,["iK",function(b,c,d,e,f,g){AQe(this,b,c,d,e,f,g);}],V3,0,D,[],0,3,0,0,ABz,0,D,[],
0,3,0,0,AH6,0,Eg,[],0,3,0,["hF",function(b,c,d,e,f,g){AX$(this,b,c,d,e,f,g);}],AIA,0,Eg,[],0,3,0,["hF",function(b,c,d,e,f,g){A22(this,b,c,d,e,f,g);}],AEV,0,Eg,[],0,3,0,0,Tq,0,D,[H1],0,0,0,["qf",function(){return KA(this);},"mL",function(){return KR(this);}],I1,0,D,[],0,3,0,0,Iq,0,D,[N_],0,3,0,["ef",function(b,c,d){return Hw(this,b,c,d);},"sH",function(b,c,d){return AAL(this,b,c,d);},"eF",function(b,c,d){return AC3(this,b,c,d);},"oI",function(b,c,d){return N0(this,b,c,d);},"k_",function(b,c,d){return AB3(this,
b,c,d);}],Gf,0,BE,[],0,3,0,0]);
$rt_metadata([UO,"NoSuchMethodException",9,Gf,[],0,3,0,0,U9,0,D,[],0,3,0,0,PG,0,Gi,[],0,0,0,["rt",function(b){return A0o(this,b);},"kR",function(){return Nc(this);}],Tm,0,D,[On],0,0,0,["Ga",function(){return A_x(this);}],AQF,0,D,[],4,3,0,0,WS,0,D9,[FA],0,3,0,["gv",function(b){return A9p(this,b);},"j0",function(b,c){return A8i(this,b,c);},"jw",function(b,c){AVq(this,b,c);},"f4",function(){return AT4(this);},"tH",function(){AGE(this);},"kd",function(){Z1(this);}],S$,0,D9,[FA],0,3,0,["gl",function(){return AVK(this);
},"gv",function(b){return Q8(this,b);},"j0",function(b,c){return A1R(this,b,c);},"jw",function(b,c){AHz(this,b,c);},"w0",function(){return A8B(this);},"f4",function(){return A7l(this);}],CQ,0,D,[],1,3,0,0,APN,0,CQ,[],0,3,0,["gJ",function(b){A7c(this,b);},"gC",function(b){A9j(this,b);},"e_",function(){return A7a(this);}],PY,"BufferUnderflowException",7,B6,[],0,3,0,0,SC,"BufferOverflowException",7,B6,[],0,3,0,0,RS,"MalformedInputException",7,GX,[],0,3,0,["lK",function(){return AVO(this);}],PU,"UnmappableCharacterException",
7,GX,[],0,3,0,["lK",function(){return AVh(this);}],II,0,D,[],0,0,0,["qf",function(){return F7(this);}],U6,0,II,[H1],0,0,0,["mL",function(){return Md(this);}],Wp,0,D,[],0,3,0,0,AEy,0,CS,[],0,3,0,["hR",function(){ARZ(this);},"iz",function(b){ADV(this,b);},"hL",function(b,c,d){AGb(this,b,c,d);}],Ot,0,CS,[],0,3,0,["hR",function(){APs(this);},"s3",function(){AXz(this);},"iz",function(b){ASv(this,b);},"IM",function(b){AKM(this,b);},"hL",function(b,c,d){AEB(this,b,c,d);}],LX,"InstantiationException",9,Gf,[],0,3,0,
0,S5,"IllegalAccessException",9,Gf,[],0,3,0,0,ALt,0,D,[],4,3,0,0,Z_,0,D,[],4,3,0,0,AMg,0,D,[Db],4,3,0,0,ABV,0,Ly,[],0,3,0,0,VJ,0,CS,[],0,3,0,["hR",function(){AJr(this);},"iz",function(b){AIf(this,b);},"o8",function(b,c){ALM(this,b,c);},"hL",function(b,c,d){AGw(this,b,c,d);}],UT,0,Ot,[],0,3,0,["s3",function(){A1P(this);},"IM",function(b){AL8(this,b);}],NM,0,D,[],0,3,0,0,Yj,0,NM,[],0,3,0,0,QR,0,D,[],0,3,AYX,0,Co,0,D,[],1,0,0,["eG",function(b,c,d){return I$(this,b,c,d);},"eT",function(b,c,d,e){return Jk(this,b,
c,d,e);},"oD",function(){return A4o(this);},"b$",function(b){A1k(this,b);},"d0",function(b){return A$x(this,b);},"ls",function(){return A_f(this);},"iS",function(){K6(this);}],NV,0,CQ,[],0,3,0,["gC",function(b){A9g(this,b);},"gJ",function(b){A0m(this,b);},"e_",function(){return AUF(this);}],DT,0,Co,[],0,0,0,["k",function(b,c,d){return ATH(this,b,c,d);},"b2",function(b){return AT3(this,b);}],HS,0,D,[],0,0,0,0,ARa,"PatternSyntaxException",5,Cb,[],0,3,0,["lK",function(){return A_b(this);}],Mt,0,CQ,[],0,3,0,["gJ",
function(b){A8E(this,b);},"gC",function(b){A78(this,b);},"e_",function(){return A6K(this);}],MT,0,CQ,[],0,3,0,["gJ",function(b){AWi(this,b);},"gC",function(b){AZy(this,b);},"e_",function(){return A5M(this);}],Lh,0,CQ,[],0,3,0,["gJ",function(b){A15(this,b);},"gC",function(b){AY5(this,b);},"e_",function(){return AVl(this);}],N7,0,CQ,[],0,3,0,["gJ",function(b){ATd(this,b);},"gC",function(b){A_q(this,b);},"e_",function(){return A2G(this);}],Pc,0,CQ,[],0,3,0,["gJ",function(b){AS6(this,b);},"gC",function(b){A70(this,
b);},"e_",function(){return ASK(this);}],Mm,0,CQ,[],0,3,0,["gJ",function(b){A62(this,b);},"gC",function(b){AU5(this,b);},"e_",function(){return A0U(this);}],MD,0,CQ,[],0,3,0,["gJ",function(b){A4_(this,b);},"gC",function(b){A7j(this,b);},"e_",function(){return A9D(this);}],OA,0,CQ,[],0,3,0,["gJ",function(b){A$U(this,b);},"gC",function(b){AY6(this,b);},"e_",function(){return ATo(this);}],QN,0,CQ,[],0,3,0,["gJ",function(b){A9y(this,b);},"gC",function(b){AYZ(this,b);},"e_",function(){return AYz(this);}],Tu,0,D,
[DE],0,0,0,["gu",function(){return AUo(this);}],Tt,0,D,[DE],0,0,0,["gu",function(){return AXo(this);}],ARR,0,D,[],0,3,0,0,XU,0,D,[],0,3,0,0,XN,0,D,[],0,3,0,0,AEa,0,D,[],0,3,0,0,ARQ,0,D,[],0,3,0,0]);
$rt_metadata([AE$,0,D,[],0,3,0,0,Yg,0,D,[Fx],0,0,0,["qa",function(b,c){return AZv(this,b,c);}],QA,0,DT,[],0,0,0,["k",function(b,c,d){return A3w(this,b,c,d);},"b2",function(b){return A9z(this,b);}],AR8,0,DT,[],0,0,0,["k",function(b,c,d){return A4N(this,b,c,d);}],PP,0,DT,[],0,0,0,["k",function(b,c,d){return AT9(this,b,c,d);}],Q0,0,DT,[],0,0,0,["k",function(b,c,d){return A3y(this,b,c,d);},"b2",function(b){return A8O(this,b);}],HQ,0,DT,[],0,0,0,["k",function(b,c,d){return A1v(this,b,c,d);}],CI,0,Co,[],1,0,0,["k",
function(b,c,d){return A_z(this,b,c,d);},"d9",function(){return A9_(this);},"b2",function(b){return AW6(this,b);}],AFV,0,CI,[],0,0,0,["dl",function(b,c){return A9N(this,b,c);},"eG",function(b,c,d){return A5C(this,b,c,d);},"eT",function(b,c,d,e){return A4D(this,b,c,d,e);},"b2",function(b){return A3x(this,b);}],CE,0,Co,[],0,0,0,["k",function(b,c,d){return AWp(this,b,c,d);},"b$",function(b){AZj(this,b);},"d0",function(b){return A7f(this,b);},"b2",function(b){return AZQ(this,b);},"iS",function(){AUG(this);}],KZ,
0,CE,[],0,0,0,["k",function(b,c,d){return AZb(this,b,c,d);},"b2",function(b){return A9l(this,b);}],EW,0,KZ,[],0,0,0,["k",function(b,c,d){return A45(this,b,c,d);},"b$",function(b){A86(this,b);}],S7,0,EW,[],0,0,0,["k",function(b,c,d){return AZf(this,b,c,d);},"b2",function(b){return A1m(this,b);}],WG,0,EW,[],0,0,0,["k",function(b,c,d){return ATW(this,b,c,d);},"b2",function(b){return A$d(this,b);}],U7,0,EW,[],0,0,0,["k",function(b,c,d){return AUD(this,b,c,d);},"b2",function(b){return A_N(this,b);}],Rc,0,EW,[],0,
0,0,["k",function(b,c,d){return A2_(this,b,c,d);},"b2",function(b){return A9r(this,b);}],Ix,0,CE,[],0,0,0,["k",function(b,c,d){return ATb(this,b,c,d);},"eG",function(b,c,d){return AX8(this,b,c,d);},"eT",function(b,c,d,e){return A9C(this,b,c,d,e);},"d0",function(b){return A7b(this,b);},"ls",function(){return A8M(this);},"iS",function(){A11(this);}],HW,0,D,[],1,0,0,0,Bm,0,HW,[],1,0,0,["hA",function(){return A4b(this);},"ki",function(){return A3J(this);},"sI",function(){return A95(this);},"nN",function(){return A_c(this);
}],ZJ,"CharClass",5,Bm,[],0,0,0,["Y",function(b){return D4(this,b);},"hA",function(){return DV(this);},"ki",function(){return A5v(this);},"sI",function(){return A1c(this);},"gj",function(){return A72(this);},"nN",function(){return AVV(this);}],MN,"MissingResourceException",4,B6,[],0,3,0,0,E4,0,Co,[],1,0,0,["d0",function(b){return A0p(this,b);},"b2",function(b){return A$J(this,b);},"iS",function(){AYt(this);}],D6,0,E4,[],0,0,0,["k",function(b,c,d){return A3a(this,b,c,d);}],Gz,0,D6,[],0,0,0,["k",function(b,c,
d){return A30(this,b,c,d);}],DU,0,E4,[],0,0,0,["k",function(b,c,d){return A3p(this,b,c,d);}],FS,0,D6,[],0,0,0,["k",function(b,c,d){return A7p(this,b,c,d);},"b$",function(b){A2L(this,b);}],Sl,0,D6,[],0,0,0,["k",function(b,c,d){return A_u(this,b,c,d);},"eG",function(b,c,d){return AYJ(this,b,c,d);}],Ey,"NumberFormatException",9,Cb,[],0,3,0,0,Tg,"Quantifier",5,HW,[ET],0,0,0,["gj",function(){return A7_(this);}],TJ,0,Co,[],0,0,0,["k",function(b,c,d){return AXt(this,b,c,d);},"b2",function(b){return A8L(this,b);}],WU,
0,D,[ET,Db],0,3,0,0,OD,0,CE,[],0,0,0,0,P2,0,CE,[],0,0,0,["k",function(b,c,d){return ATF(this,b,c,d);},"b$",function(b){A8y(this,b);},"b2",function(b){return AUd(this,b);},"d0",function(b){return ATZ(this,b);}],EO,0,CE,[],0,0,0,["k",function(b,c,d){return A5o(this,b,c,d);},"Y",function(b){return AV8(this,b);},"d0",function(b){return ATA(this,b);},"b$",function(b){A91(this,b);},"b2",function(b){return AVP(this,b);}],MM,0,EO,[],0,0,0,["Y",function(b){return AW7(this,b);}],Zt,0,CI,[],0,0,0,["dl",function(b,c){return A6W(this,
b,c);}],Fm,0,CI,[],0,0,0,["dl",function(b,c){return S1(this,b,c);},"d0",function(b){return AZm(this,b);}],T0,0,CE,[],0,0,0,["b$",function(b){AYa(this,b);},"k",function(b,c,d){return ASR(this,b,c,d);},"d0",function(b){return A4h(this,b);},"b2",function(b){return A1f(this,b);}],Fs,0,CI,[],0,0,0,["d9",function(){return A6O(this);},"dl",function(b,c){return AWB(this,b,c);},"eG",function(b,c,d){return AVD(this,b,c,d);},"eT",function(b,c,d,e){return AXi(this,b,c,d,e);},"d0",function(b){return A0_(this,b);}],AGR,0,
CI,[],0,0,0,["dl",function(b,c){return A2U(this,b,c);}],XL,0,CI,[],0,0,0,["dl",function(b,c){return AS8(this,b,c);}],GG,0,CE,[],0,0,0,["b$",function(b){A_h(this,b);},"k",function(b,c,d){return AZa(this,b,c,d);},"d0",function(b){return AXw(this,b);},"b2",function(b){return A88(this,b);}],SD,0,GG,[],0,0,0,0,VZ,0,GG,[],0,0,0,0,SY,0,DU,[],0,0,0,["k",function(b,c,d){return A4P(this,b,c,d);}],Ut,0,DU,[],0,0,0,["k",function(b,c,d){return A7O(this,b,c,d);}],Ht,0,DU,[],0,0,0,["k",function(b,c,d){return A9Y(this,b,c,
d);},"b$",function(b){A$R(this,b);}],PI,0,Ht,[],0,0,0,["k",function(b,c,d){return AXf(this,b,c,d);},"b$",function(b){A8b(this,b);}],G5,0,DU,[],0,0,0,["k",function(b,c,d){return A_J(this,b,c,d);}],OP,0,G5,[],0,0,0,["k",function(b,c,d){return AWS(this,b,c,d);}]]);
$rt_metadata([Qq,0,DU,[],0,0,0,["k",function(b,c,d){return A1$(this,b,c,d);}],UM,0,Ht,[],0,0,0,["k",function(b,c,d){return AUf(this,b,c,d);}],RK,0,G5,[],0,0,0,["k",function(b,c,d){return A3D(this,b,c,d);}],Qr,0,E4,[],0,0,0,["k",function(b,c,d){return A_B(this,b,c,d);},"eG",function(b,c,d){return A0L(this,b,c,d);}],TO,0,E4,[],0,0,0,["k",function(b,c,d){return AZn(this,b,c,d);},"eG",function(b,c,d){return ASU(this,b,c,d);}],Gh,0,D,[],1,0,0,0,Xr,0,D6,[],0,0,0,["k",function(b,c,d){return ATs(this,b,c,d);}],Sh,0,
FS,[],0,0,0,["k",function(b,c,d){return AYy(this,b,c,d);}],T_,0,Gz,[],0,0,0,["k",function(b,c,d){return A9F(this,b,c,d);}],UK,0,D6,[],0,0,0,["k",function(b,c,d){return AZg(this,b,c,d);}],V1,0,FS,[],0,0,0,["k",function(b,c,d){return ATw(this,b,c,d);}],Qb,0,Gz,[],0,0,0,["k",function(b,c,d){return A9O(this,b,c,d);}],ABI,0,Co,[],4,0,0,["k",function(b,c,d){return A7e(this,b,c,d);},"b2",function(b){return A6H(this,b);}],AAk,0,Co,[],0,0,0,["k",function(b,c,d){return A3_(this,b,c,d);},"b2",function(b){return A4f(this,
b);}],AJo,0,Co,[],0,0,0,["k",function(b,c,d){return AW_(this,b,c,d);},"b2",function(b){return A2v(this,b);}],SA,0,Co,[],4,0,0,["k",function(b,c,d){return A8Z(this,b,c,d);},"b2",function(b){return A4H(this,b);}],AQ5,0,Co,[],0,0,0,["k",function(b,c,d){return A8t(this,b,c,d);},"b2",function(b){return A2T(this,b);}],AIN,0,Co,[],0,0,0,["k",function(b,c,d){return A4B(this,b,c,d);},"b2",function(b){return AWj(this,b);}],AGh,0,CE,[],0,0,0,["k",function(b,c,d){return A2d(this,b,c,d);},"b$",function(b){A4k(this,b);},
"oD",function(){return A8g(this);},"b2",function(b){return A4i(this,b);}],ZF,0,CE,[],4,0,0,["k",function(b,c,d){return A8o(this,b,c,d);},"b$",function(b){A9v(this,b);},"oD",function(){return ASF(this);},"b2",function(b){return A2k(this,b);}],AQI,0,Co,[],4,0,0,["k",function(b,c,d){return AXD(this,b,c,d);},"b2",function(b){return A5R(this,b);}],AN4,0,Co,[],0,0,0,["k",function(b,c,d){return AY4(this,b,c,d);},"b2",function(b){return A5N(this,b);}],AIb,0,Co,[],0,0,0,["k",function(b,c,d){return A6C(this,b,c,d);},
"b2",function(b){return AUR(this,b);}],IN,0,CE,[],0,0,0,["k",function(b,c,d){return ATt(this,b,c,d);},"b$",function(b){A84(this,b);},"b2",function(b){return AZ_(this,b);}],AQT,0,IN,[],0,0,0,["k",function(b,c,d){return AUY(this,b,c,d);},"eG",function(b,c,d){return A1l(this,b,c,d);},"eT",function(b,c,d,e){return ATl(this,b,c,d,e);},"d0",function(b){return A7I(this,b);}],AMb,0,IN,[],0,0,0,["k",function(b,c,d){return AX6(this,b,c,d);}],AMP,0,CI,[],0,0,0,["dl",function(b,c){return AVc(this,b,c);},"eG",function(b,
c,d){return A3$(this,b,c,d);},"eT",function(b,c,d,e){return A5Y(this,b,c,d,e);},"d0",function(b){return AWL(this,b);}],XC,0,CI,[],0,0,0,["dl",function(b,c){return AX9(this,b,c);}],OS,0,CI,[],0,0,0,["dl",function(b,c){return A9H(this,b,c);}],H6,0,D,[],4,0,0,0,By,0,D,[],1,0,0,0,S4,0,CI,[],0,0,0,["dl",function(b,c){return A0t(this,b,c);}],NG,0,CE,[],0,0,0,["b$",function(b){A8G(this,b);},"k",function(b,c,d){return A4I(this,b,c,d);},"eG",function(b,c,d){return AWK(this,b,c,d);},"eT",function(b,c,d,e){return A48(this,
b,c,d,e);},"d0",function(b){return ATg(this,b);},"b2",function(b){return A02(this,b);}],NL,0,CE,[],0,0,0,["b$",function(b){A4s(this,b);},"k",function(b,c,d){return ASW(this,b,c,d);},"eG",function(b,c,d){return A8R(this,b,c,d);},"eT",function(b,c,d,e){return A0r(this,b,c,d,e);},"d0",function(b){return AVd(this,b);},"b2",function(b){return A8T(this,b);}],EY,0,CI,[],0,0,0,["dl",function(b,c){return A9m(this,b,c);},"eG",function(b,c,d){return A74(this,b,c,d);},"eT",function(b,c,d,e){return AUn(this,b,c,d,e);},"d0",
function(b){return A9d(this,b);}],Ws,0,Gh,[],4,0,0,["os",function(b){return AUw(this,b);},"D7",function(b,c){return AZ8(this,b,c);}],Wt,0,Gh,[],4,0,0,["os",function(b){return A9Q(this,b);},"D7",function(b,c){return A1Z(this,b,c);}],AEN,0,D,[],0,0,0,0,Ys,0,D,[],0,0,0,0,NE,0,By,[],0,0,0,["bV",function(){return AMk(this);}],M8,0,By,[],0,0,0,["bV",function(){return ANL(this);}],AEF,0,By,[],0,0,0,["bV",function(){return A9x(this);}],AFj,0,By,[],0,0,0,["bV",function(){return A04(this);}],AFs,0,By,[],0,0,0,["bV",function()
{return AVF(this);}],NA,0,By,[],0,0,0,["bV",function(){return ZL(this);}],L$,0,NA,[],0,0,0,["bV",function(){return AAT(this);}],AHR,0,By,[],0,0,0,["bV",function(){return A6f(this);}],Ow,0,L$,[],0,0,0,["bV",function(){return AH7(this);}],AMM,0,Ow,[],0,0,0,["bV",function(){return AYv(this);}],ACH,0,By,[],0,0,0,["bV",function(){return A4Z(this);}]]);
$rt_metadata([AAf,0,By,[],0,0,0,["bV",function(){return AYm(this);}],AJ9,0,By,[],0,0,0,["bV",function(){return A10(this);}],AQa,0,By,[],0,0,0,["bV",function(){return A8e(this);}],AHZ,0,By,[],0,0,0,["bV",function(){return A20(this);}],APm,0,By,[],0,0,0,["bV",function(){return AWV(this);}],AEn,0,By,[],0,0,0,["bV",function(){return A0b(this);}],AFY,0,By,[],0,0,0,["bV",function(){return A4X(this);}],YV,0,By,[],0,0,0,["bV",function(){return AVn(this);}],AIw,0,By,[],0,0,0,["bV",function(){return A$6(this);}],APC,
0,By,[],0,0,0,["bV",function(){return A2V(this);}],AE8,0,By,[],0,0,0,["bV",function(){return AXG(this);}],ALa,0,By,[],0,0,0,["bV",function(){return AVt(this);}],ACT,0,By,[],0,0,0,["bV",function(){return A50(this);}],AG$,0,By,[],0,0,0,["bV",function(){return A64(this);}],APQ,0,By,[],0,0,0,["bV",function(){return A1g(this);}],ABs,0,By,[],0,0,0,["bV",function(){return AZH(this);}],AAF,0,By,[],0,0,0,["bV",function(){return AYN(this);}],AHX,0,By,[],0,0,0,["bV",function(){return A9t(this);}],K_,0,By,[],0,0,0,["bV",
function(){return ACJ(this);}],AQD,0,K_,[],0,0,0,["bV",function(){return AYE(this);}],AMS,0,NE,[],0,0,0,["bV",function(){return A34(this);}],AAy,0,M8,[],0,0,0,["bV",function(){return AWx(this);}],AKj,0,By,[],0,0,0,["bV",function(){return AXT(this);}],AKO,0,By,[],0,0,0,["bV",function(){return A1N(this);}],AMw,0,By,[],0,0,0,["bV",function(){return A5K(this);}],AMN,0,By,[],0,0,0,["bV",function(){return ASM(this);}],AKs,0,D,[],4,0,0,0,Zp,0,D,[],4,3,0,0,Tl,0,D,[],0,3,0,0,RQ,0,D,[],0,3,0,0,AL6,0,D,[],4,3,0,0,Wg,0,
Ev,[],0,3,0,["lm",function(){A3E(this);},"sX",function(b){AOh(this,b);}],Xg,0,Ev,[],0,3,0,["pq",function(){Y4(this);},"tj",function(b){A6E(this,b);},"lm",function(){A1X(this);},"sX",function(b){AKm(this,b);}],AMB,0,Ev,[],0,3,0,["lm",function(){A92(this);},"sX",function(b){ANP(this,b);}],CW,"EnumArt",12,EX,[],12,3,0,0,PF,0,Fb,[],0,0,0,0,UZ,0,CS,[],0,3,0,["hR",function(){AGm(this);},"iz",function(b){AQq(this,b);},"hL",function(b,c,d){YO(this,b,c,d);}],KH,"MinecraftError",12,Fg,[],0,3,0,0,UH,0,D,[],0,3,0,0,Sj,
"AbstractCharClass$1",5,Bm,[],0,0,0,["Y",function(b){return AVJ(this,b);}],Si,"AbstractCharClass$2",5,Bm,[],0,0,0,["Y",function(b){return A3l(this,b);}],Pn,"CharClass$18",5,Bm,[],0,0,0,["Y",function(b){return AXQ(this,b);},"gj",function(){return A53(this);}],TR,0,Bm,[],0,0,0,["Y",function(b){return A9o(this,b);}],TP,0,Bm,[],0,0,0,["Y",function(b){return A0s(this,b);}],TQ,0,Bm,[],0,0,0,["Y",function(b){return A7n(this,b);}],TU,0,Bm,[],0,0,0,["Y",function(b){return A5b(this,b);}],TV,0,Bm,[],0,0,0,["Y",function(b)
{return ASG(this,b);}],TS,0,Bm,[],0,0,0,["Y",function(b){return AWr(this,b);}],TT,0,Bm,[],0,0,0,["Y",function(b){return AX_(this,b);}],TX,0,Bm,[],0,0,0,["Y",function(b){return A1n(this,b);}]]);
$rt_metadata([TY,0,Bm,[],0,0,0,["Y",function(b){return A4S(this,b);}],Pm,0,Bm,[],0,0,0,["Y",function(b){return A_S(this,b);}],PA,0,Bm,[],0,0,0,["Y",function(b){return AWw(this,b);}],Pk,0,Bm,[],0,0,0,["Y",function(b){return AU0(this,b);}],Pl,0,Bm,[],0,0,0,["Y",function(b){return A5Q(this,b);}],Pq,0,Bm,[],0,0,0,["Y",function(b){return AXb(this,b);}],Pj,0,Bm,[],0,0,0,["Y",function(b){return A$l(this,b);}],Po,0,Bm,[],0,0,0,["Y",function(b){return A4d(this,b);}],Pp,0,Bm,[],0,0,0,["Y",function(b){return AZD(this,
b);}],OL,0,Ix,[],0,0,0,["eG",function(b,c,d){return AV2(this,b,c,d);},"eT",function(b,c,d,e){return A_H(this,b,c,d,e);},"ls",function(){return AUO(this);}],VA,0,II,[H1],0,0,0,["mL",function(){return Ll(this);}],M$,0,Fa,[DL],0,3,0,0,Mn,0,D,[],3,3,0,0,Vs,0,D,[Mn],4,3,0,0,Ue,0,D,[I9],3,3,0,0,R_,0,D,[Ue],3,3,0,0,SW,0,Fb,[R_],0,3,0,0,SI,0,D,[LS],3,3,0,0,ON,0,D,[SI],3,3,0,0,AJX,0,FT,[ET,Db,ON],0,3,0,0,QO,0,D,[Fx],0,0,0,0,VC,"AbstractCharClass$LazyJavaLowerCase$1",5,Bm,[],0,0,0,["Y",function(b){return A1u(this,b);
}],S9,"AbstractCharClass$LazyJavaUpperCase$1",5,Bm,[],0,0,0,["Y",function(b){return A32(this,b);}],QF,"AbstractCharClass$LazyJavaWhitespace$1",5,Bm,[],0,0,0,["Y",function(b){return ATv(this,b);}],QE,"AbstractCharClass$LazyJavaMirrored$1",5,Bm,[],0,0,0,["Y",function(b){return A5J(this,b);}],Sr,"AbstractCharClass$LazyJavaDefined$1",5,Bm,[],0,0,0,["Y",function(b){return AW2(this,b);}],T6,"AbstractCharClass$LazyJavaDigit$1",5,Bm,[],0,0,0,["Y",function(b){return A$P(this,b);}],Pa,"AbstractCharClass$LazyJavaIdentifierIgnorable$1",
5,Bm,[],0,0,0,["Y",function(b){return AZc(this,b);}],UY,"AbstractCharClass$LazyJavaISOControl$1",5,Bm,[],0,0,0,["Y",function(b){return A0g(this,b);}],S6,"AbstractCharClass$LazyJavaJavaIdentifierPart$1",5,Bm,[],0,0,0,["Y",function(b){return A_w(this,b);}],S8,"AbstractCharClass$LazyJavaJavaIdentifierStart$1",5,Bm,[],0,0,0,["Y",function(b){return AVf(this,b);}],O3,"AbstractCharClass$LazyJavaLetter$1",5,Bm,[],0,0,0,["Y",function(b){return A1H(this,b);}],Uk,"AbstractCharClass$LazyJavaLetterOrDigit$1",5,Bm,[],0,0,
0,["Y",function(b){return A7A(this,b);}],Uo,"AbstractCharClass$LazyJavaSpaceChar$1",5,Bm,[],0,0,0,["Y",function(b){return A83(this,b);}],VV,"AbstractCharClass$LazyJavaTitleCase$1",5,Bm,[],0,0,0,["Y",function(b){return A$E(this,b);}],Vt,"AbstractCharClass$LazyJavaUnicodeIdentifierPart$1",5,Bm,[],0,0,0,["Y",function(b){return A13(this,b);}],OF,"AbstractCharClass$LazyJavaUnicodeIdentifierStart$1",5,Bm,[],0,0,0,["Y",function(b){return AU8(this,b);}],My,"UnicodeCategory",5,Bm,[],0,0,0,["Y",function(b){return AZd(this,
b);}],Vg,"UnicodeCategoryScope",5,My,[],0,0,0,["Y",function(b){return A93(this,b);}],Nf,0,D,[],0,3,0,0,JT,0,D,[DL],0,3,0,["ek",function(b){return A$y(this,b);},"fi",function(){return A7L(this);},"lJ",function(b){return TD(this,b);}],K$,0,D,[],3,3,0,0,VT,0,D,[K$],0,3,0,0,P_,0,D,[],3,3,0,0,Xi,0,D,[P_],0,3,0,0,Sn,0,D,[K$],0,3,0,0,Wq,0,D,[Mn],0,0,0,0,VH,0,D,[],0,3,0,0,R2,0,D,[],3,3,0,0,AF5,0,F$,[R2],0,3,0,0]);
$rt_metadata([AFZ,0,D,[],0,3,0,0,NS,0,D,[],4,3,0,0,HL,0,D,[],1,3,0,0,AMO,0,HL,[],0,3,0,0,ACN,0,D,[],0,3,0,0,Pt,0,HL,[],0,3,0,0,T3,0,D,[],0,3,0,0,E2,0,EX,[],12,3,0,0,Vl,0,Fa,[DL],0,3,0,0,Ty,0,D,[DE],0,0,0,["gu",function(){return A4r(this);}],Tv,0,D,[DE],0,0,0,["gu",function(){return AYi(this);}],Rg,0,D,[DE],0,0,0,["gu",function(){return A8Q(this);}],Rj,0,D,[DE],0,0,0,["gu",function(){return A7d(this);}],Re,0,D,[DE],0,0,0,["gu",function(){return A5T(this);}],Rf,0,D,[DE],0,0,0,["gu",function(){return A3e(this);
}],Rh,0,D,[DE],0,0,0,["gu",function(){return A7k(this);}],Ri,0,D,[DE],0,0,0,["gu",function(){return A1G(this);}],Eq,0,D,[],1,3,0,0,Q_,0,Eq,[],0,3,0,0,Op,0,D,[],0,3,0,0,SG,0,CS,[],0,3,0,["hR",function(){AD3(this);},"pq",function(){ANF(this);},"rv",function(){AYr(this);},"iz",function(b){AHg(this,b);},"o8",function(b,c){ACV(this,b,c);},"hL",function(b,c,d){ABo(this,b,c,d);}],IG,0,EX,[],12,3,0,0,MC,0,D,[JZ,Db],0,3,0,0,La,0,MC,[],0,0,0,0,AMW,0,F$,[],0,3,0,["lq",function(){AYs(this);},"gt",function(b,c,d){AXZ(this,
b,c,d);},"tK",function(){A37(this);},"nI",function(b){AXj(this,b);}],WO,0,D,[],0,3,0,0,N9,"ArrayIndexOutOfBoundsException",9,BO,[],0,3,0,0,ARi,0,Eq,[],0,3,0,0,Ch,0,Eq,[],0,3,0,0,BS,0,Eq,[],0,3,0,0,Cn,0,Eq,[],0,3,0,0,Sv,"EntityBubbleFX",12,C0,[],0,3,0,["el",function(){Y7(this);}],AFo,"EntitySmokeFX",12,C0,[],0,3,0,["kM",function(b,c,d,e,f,g,h){AJ5(this,b,c,d,e,f,g,h);},"el",function(){ALQ(this);}],QX,"EntityExplodeFX",12,C0,[],0,3,0,["kM",function(b,c,d,e,f,g,h){AR6(this,b,c,d,e,f,g,h);},"el",function(){AER(this);
}],OY,"EntityFlameFX",12,C0,[],0,3,0,["kM",function(b,c,d,e,f,g,h){AQG(this,b,c,d,e,f,g,h);},"va",function(b){return ASr(this,b);},"el",function(){AAO(this);}],AAZ,"EntityLavaFX",12,C0,[],0,3,0,["va",function(b){return AJ6(this,b);},"kM",function(b,c,d,e,f,g,h){AGS(this,b,c,d,e,f,g,h);},"el",function(){ALg(this);}],ARA,"EntitySplashFX",12,JK,[],0,3,0,0,AIp,0,D,[],4,3,0,0,H4,0,D,[],0,0,0,0,Vc,0,D,[],0,3,0,0,AB$,0,D,[],0,3,0,0,UX,"EntityPickupFX",12,C0,[],0,3,0,["kM",function(b,c,d,e,f,g,h){AMf(this,b,c,d,e,f,
g,h);},"el",function(){AAH(this);},"xp",function(){return AUt(this);}],Y2,0,D,[],0,3,0,0,HP,0,D,[],0,3,0,["ek",function(b){return A3Q(this,b);},"fi",function(){return AVj(this);}],AJg,0,D,[],0,0,0,0]);
function $rt_array(cls,data){this.ck=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["Can\'t enter monitor from another thread synchronously","@","0","","Timer hack thread","Player","fuckmojang123","randpasslol","Minecraft main thread","<init>","null","Patter is null",": ","    at ","Caused by: ","  at ","Index out of bounds","String contains invalid digits: ","String contains digits out of radix ","The value is too big for int type: ","String is null or empty","Illegal radix: ",
"#version 300 es","/","UTF-8","overflow-x:hidden;overflow-y:hidden;","WebGL 2.0 is not supported in your browser (",")","NONE","ESCAPE","1","2","3","4","5","6","7","8","9","MINUS","EQUALS","BACK","TAB","Q","W","E","R","T","Y","U","I","O","P","LBRACKET","RBRACKET","RETURN","LCONTROL","A","S","D","F","G","H","J","K","L","SEMICOLON","APOSTROPHE","GRAVE","LSHIFT","BACKSLASH","Z","X","C","V","B","N","M","COMMA","PERIOD","SLASH","RSHIFT","MULTIPLY","LMENU","SPACE","CAPITAL","F1","F2","F3","F4","F5","F6","F7","F8",
"F9","F10","NUMLOCK","SCROLL","NUMPAD7","NUMPAD8","NUMPAD9","SUBTRACT","NUMPAD4","NUMPAD5","NUMPAD6","ADD","NUMPAD1","NUMPAD2","NUMPAD3","NUMPAD0","DECIMAL","F11","F12","F13","F14","F15","F16","F17","F18","KANA","F19","CONVERT","NOCONVERT","YEN","NUMPADEQUALS","CIRCUMFLEX","AT","COLON","UNDERLINE","KANJI","STOP","AX","UNLABELED","NUMPADENTER","RCONTROL","SECTION","NUMPADCOMMA","DIVIDE","SYSRQ","RMENU","FUNCTION","PAUSE","HOME","UP","PRIOR","LEFT","RIGHT","END","DOWN","NEXT","INSERT","DELETE","CLEAR","LMETA",
"RMETA","APPS","POWER","SLEEP","\n","/default.png","Pre startup","Startup","EARLY BETA TESTING!","THIS PROJECT IS STILL IN TESTING!\nTHERE WILL BE BUGS!","Post startup","/dirt.png","Loading...","GL_INVALID_ENUM","GL_INVALID_VALUE","GL_INVALID_OPERATION","GL_OUT_OF_MEMORY","Unknown Error","CONTEXT_LOST_WEBGL","########## GL ERROR ##########","@ ","Pre render","Post render"," fps, "," chunk updates","/terrain.png","Loading level","Generating level","Building terrain","Simulating world for a bit","P: ",". T: ",
"Respawning","main","_net_peytonplayz585_minecraft_infdev_IndexedDBFilesystem","Initialization Failed","EAGPKG!!","invalid epk file","<file>"," end","invalid file hash for ","</file>","/rain.png","Either src or dest is null","window.indexedDB was null or undefined","Can\'t compare "," to ","OPENED","LOCKED","ERROR","yee","End of stream reached","Malformed UTF-8 sequence","charsetName is null","Should never been thrown","Stream closed","footer is not found","Unexpected end of ZLIB input stream","random.splash",
"bubble","splash","random.fizz","Pos","Motion","Rotation","FallDistance","Fire","Air","OnGround","explode","random.hurt","random.bow","random.fuse","mob.sheep","mob.pig","mob.pigdeath","/gui/items.png","/water.png","Slot "," is already occupied by "," when adding ","stone","wood","gravel","grass","cloth","sand","open error","path","New position "," is outside of range [0;","]","New limit ","The last float in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","step.","liquid.water",
"lava","largesmoke","smoke","flame","fire.fire","Large chest","Get resource: ","Duplicate id: ","Furnace","Chest","Sign","MobSpawner","CONFLICT @ ","random.door_close","random.door_open","�","Replacement preconditions do not hold","The last byte in dst ","The last byte in src ","Index ","Capacity is negative: ","The last char in dst ","The last char in src "," is outside of string of size ","Start "," must be before end ","fire.ignite","BIG_ENDIAN","LITTLE_ENDIAN","need dictionary","unknown compression method",
"unknown header flags set","incorrect data check","incorrect length check","incorrect header check","invalid window size","bad extra field length","header crc mismatch","IGNORE","REPLACE","REPORT","Action must be non-null","invalid stored block lengths","invalid block type","too many length or distance symbols","invalid bit length repeat","oversubscribed dynamic bit lengths tree","incomplete dynamic bit lengths tree","oversubscribed distance tree","incomplete distance tree","empty distance tree with lengths",
"oversubscribed literal/length tree","incomplete literal/length tree","invalid distance code","invalid literal/length code","newAction must be non-null","matrix is not supported while recording display list use tessellator class instead","projection matrix stack overflow","texture matrix stack overflow","modelview matrix stack overflow","projection matrix stack underflow","texture matrix stack underflow","modelview matrix stack underflow","only GL_QUADS supported in a display list","vertex format inconsistent in display list",
"keyup","Forward","Left","Back","Right","Jump","Inventory","Drop","Chat","Toggle fog","Save location","Load location","Music: ","OFF","ON","Sound: ","Invert mouse: ","Show FPS: ","Render distance: ","View bobbing: ","3d anaglyph: ","Limit framerate: ","Difficulty: ","Graphics: ","FAST","FANCY","FAR","NORMAL","SHORT","TINY","Peaceful","Easy","Normal","Hard","/level.dat","Data","RandomSeed","SpawnX","SpawnY","SpawnZ","Time","SizeOnDisk","Saving level","Saving chunks","LastPlayed","/level.dat_new","/level.dat_old",
"Failed to add entity ","All: ","DOHASDOSHIH!","TickNextTick list out of synch","%%","!!","/char.png","0123456789abcdef","C: ",". F: ",", O: ",", E: ","E: ",". B: ",", I: ","/terrain/sun.png","/terrain/moon.png","/clouds.png","Pre-beta!","As seen on TV!","Awesome!","100% pure!","May contain nuts!","Better than Prey!","More polygons!","Sexy!","Limited edition!","Flashing letters!","Made by Notch!","Coming soon!","Best in class!","When it\'s finished!","Absolutely dragon free!","Excitement!","More than 5000 sold!",
"One of a kind!","700+ hits on YouTube!","Indev!","Spiders everywhere!","Check it out!","Holy cow, man!","It\'s a game!","Made in Sweden!","Uses LWJGL!","Reticulating splines!","Minecraft!","Yaaay!","Alpha version!","Singleplayer!","Keyboard compatible!","Undocumented!","Ingots!","Exploding creepers!","That\'s not a moon!","l33t!","Create!","Survive!","Dungeon!","Exclusive!","The bee\'s knees!","Down with O.P.P.!","Closed source!","Classy!","Wow!","Not on steam!","9.95 euro!","Half price!","Oh man!","Awesome community!",
"Pixels!","Teetsuuuuoooo!","Kaaneeeedaaaa!","Now with difficulty!","Enhanced!","90% bug free!","Pretty!","12 herbs and spices!","Fat free!","Absolutely no memes!","Free dental!","Ask your doctor!","Minors welcome!","Cloud computing!","Legal in Finland!","Hard to label!","Technically good!","Bringing home the bacon!","Indie!","GOTY!","Ceci n\'est pas une title screen!","Euclidian!","Now in 3D!","Inspirational!","Herregud!","Complex cellular automata!","Yes, sir!","Played by cowboys!","OpenGL 1.1!","Thousands of colors!",
"Try it!","Age of Wonders is better!","Try the mushroom stew!","Sensational!","Hot tamale, hot hot tamale!","Play him off, keyboard cat!","Guaranteed!","Macroscopic!","Bring it on!","Random splash!","Call your mother!","Monster infighting!","Loved by millions!","Ultimate edition!","Freaky!","You\'ve got a brand new key!","Water proof!","Uninflammable!","Whoa, dude!","All inclusive!","Tell your friends!","NP is not in P!","Notch <3 Ez!","Music by C418!","Single player","Multi player","Play tutorial level","Options...",
"/gui/logo.png","Copyright Mojang Specifications. Do not distribute.","Free memory: ","% of ","MB","Allocated memory: ","% (","MB)","/particles.png","/gui/gui.png","/gui/icons.png","Minecraft Infdev","Minecraft Infdev (","Used memory: ","MB) of ","Notch","humanoid","http://www.minecraft.net/skin/",".png","Health","HurtTime","DeathTime","AttackTime","Score","Edit sign message:","mousedown","wheel","Slot","Crafting","/gui/inventory.png","/glsl/core.glsl","\n#define CC_a_color\n","#define CC_a_texture0\n","#define CC_lighting\n",
"#define CC_fog\n","#define CC_alphatest\n","#define CC_unit0\n","\n#define CC_VERT\n","\n\n","\n[/glsl/core.glsl][CC_VERT] ","broken shader file","\n#define CC_FRAG\n","\n[/glsl/core.glsl][CC_FRAG] ","a_position","a_texture0","a_color","\n[LINKER] ","matrix_m","matrix_p","matrix_t","colorUniform","normalUniform","light0Pos","light1Pos","fogColor","fogMode","fogStart","fogEnd","fogDensity","fogPremultiply","alphaTestF","tex0","texCoordV0","id","Count","Damage","array size does not equal image size","I Understand!",
"Respawn","Title menu","Game over!","Score: &e","Save and quit to title..","Back to game","Saving level..","Game menu","/armor/","_","chain","iron","diamond","gold","/item/sign.png","> "," <","Pig","/mob/spider_eyes.png","/mob/saddle.png","/mob/sheep_fur.png","/art/kz.png","random.drr","random.pop","/item/arrows.png","/item/cart.png","Wrong location! ","There\'s no such entity to remove: ","Attempted to place a tile entity where there was no entity tile!","Malformed input of length ","Unmappable characters of length ",
"Options","Controls...","Done","Controls","Select world","World","World ","- empty -"," ("," MB)","Delete world...","Cancel","Delete world","\'","\' will be lost forever!","Are you sure you want to delete this world?","saves/","###","X#X","#X#","# #","##"," X ","#"," # ","X X","A "," B","#  ","## "," recipes","Is","In",", ","XXX","XX","X#"," #"," #X","# X","{",",","}","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace",
"javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","s","d","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement",
"Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation",
"SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows",
"Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri",
"HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS",
"Sm","Sc","Sk","So","Pi","Pf","/gui/furnace.png","/gui/crafting.png","/gui/container.png","Kebab","Aztec","Alban","Aztec2","Bomb","Plant","Wasteland","Pool","Courbet","Sea","Sunset","Wanderer","Match","Bust","Stage","Void","SkullAndRoses","Fighters","Pointer","Yes","Arrow","Item","Painting","Mob","Monster","Creeper","Skeleton","Spider","Giant","Zombie","Sheep","PrimedTnt","FallingSand","Minecart","0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ","xPos","zPos","The chunk file \'","\' was supposed to be at [","], but the file contained a chunk from [",
"]. It\'s data will be moved to file \'","\', and a new empty chunk will be created for file \'","\' for [","Corrupt chunk \'","\' was found at: [","The file will be deleted","Failed to serialize chunk at [","] to byte array","LastUpdate","Blocks","SkyLight","BlockLight","HeightMap","TerrainPopulated","UTF Error","FILE","DIRECTORY","FALSE","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ,.:-_\'*!\"#%/()=+?[]{}<>","Sky","Block","buffer is null","Length out of bounds: ","Offset out of bounds: ",
"random.explode","OW KNOWS!"]);
B4.prototype.toString=function(){return $rt_ustr(this);};
B4.prototype.valueOf=B4.prototype.toString;D.prototype.toString=function(){return $rt_ustr(AUk(this));};
D.prototype.__teavm_class__=function(){return $dbg_class(this);};
function Long_eq(a,b){return a.hi===b.hi&&a.lo===b.lo;}function Long_ne(a,b){return a.hi!==b.hi||a.lo!==b.lo;}function Long_gt(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);}function Long_ge(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);}function Long_lt(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>
1;var y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);}function Long_le(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x<=y;}return (a.lo&1)<=(b.lo&1);}function Long_add(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo+b.lo);}else if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)+Long_toNumber(b));}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi
=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo+b_lolo|0;var lohi=a_lohi+b_lohi+(lolo>>16)|0;var hilo=a_hilo+b_hilo+(lohi>>16)|0;var hihi=a_hihi+b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);}function Long_inc(a){var lo=a.lo+1|0;var hi=a.hi;if(lo===0){hi=hi+1|0;}return new Long(lo,hi);}function Long_dec(a){var lo=a.lo -1|0;var hi=a.hi;if(lo=== -1){hi=hi -1|0;}return new Long(lo,hi);}function Long_neg(a)
{return Long_inc(new Long(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));}function Long_sub(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo -b.lo);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo -b_lolo|0;var lohi=a_lohi -b_lohi+(lolo>>16)|0;var hilo=a_hilo -b_hilo+(lohi>>16)|0;var hihi=a_hihi -b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<
16,hilo&0xFFFF|(hihi&0xFFFF)<<16);}function Long_compare(a,b){var r=a.hi -b.hi;if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);}function Long_isPositive(a){return (a.hi&0x80000000)===0;}function Long_isNegative(a){return (a.hi&0x80000000)!==0;}function Long_mul(a,b){var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if(Long_isNegative(b)){b=Long_neg(b);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi
=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=0;var lohi=0;var hilo=0;var hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi>>>16)|0;lohi=(lohi&0xFFFF)+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo
+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;var result=new Long(lolo&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:Long_neg(result);}function Long_div(a,b){if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_divRem(a,b))[0];}function Long_udiv(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[0];}function Long_rem(a,
b){if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)%Long_toNumber(b));}return (Long_divRem(a,b))[1];}function Long_urem(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[1];}function Long_divRem(a,b){if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if
(Long_isNegative(b)){b=Long_neg(b);}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return positive?[q,a]:[Long_neg(q),Long_neg(a)];}function Long_udivRem(a,b){if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return [q,a];}function Long_shiftLeft16(a){return new Long(a.lo<<16,a.lo>>>16|a.hi<<16);}function Long_shiftRight16(a)
{return new Long(a.lo>>>16|a.hi<<16,a.hi>>>16);}function Long_and(a,b){return new Long(a.lo&b.lo,a.hi&b.hi);}function Long_or(a,b){return new Long(a.lo|b.lo,a.hi|b.hi);}function Long_xor(a,b){return new Long(a.lo^b.lo,a.hi^b.hi);}function Long_shl(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new Long(0,a.lo);}else {return new Long(0,a.lo<<b -32);}}function Long_shr(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi
<<32 -b,a.hi>>b);}else if(b===32){return new Long(a.hi,a.hi>>31);}else {return new Long(a.hi>>b -32,a.hi>>31);}}function Long_shru(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new Long(a.hi,0);}else {return new Long(a.hi>>>b -32,0);}}function LongInt(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}function LongInt_mul(a,b){var a_lolo=(a.lo&0xFFFF)*b|0;var a_lohi=(a.lo>>>16)*b|0;var a_hilo=(a.hi&0xFFFF)*b|0;var a_hihi=(a.hi>>>16)*b|0;var sup
=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;}function LongInt_sub(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -
b_hihi+(a_hilo>>16)|0;var sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_add(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo>>16)|0;var sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF
|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_inc(a){a.lo=a.lo+1|0;if(a.lo===0){a.hi=a.hi+1|0;if(a.hi===0){a.sup=a.sup+1&0xFFFF;}}}function LongInt_dec(a){a.lo=a.lo -1|0;if(a.lo=== -1){a.hi=a.hi -1|0;if(a.hi=== -1){a.sup=a.sup -1&0xFFFF;}}}function LongInt_ucompare(a,b){var r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);}function LongInt_numOfLeadingZeroBits(a)
{var n=0;var d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -n;}function LongInt_shl(a,b){if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}}function LongInt_shr(a,b){if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup
=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup=0;}}function LongInt_copy(a){return new LongInt(a.lo,a.hi,a.sup);}function LongInt_div(a,b){var bits=b.hi!==0?LongInt_numOfLeadingZeroBits(b.hi):LongInt_numOfLeadingZeroBits(b.lo)+32;var sz=1+(bits/16|0);var dividentBits=bits%16;LongInt_shl(b,bits);LongInt_shl(a,dividentBits);var q
=new LongInt(0,0,0);while(sz-->0){LongInt_shl(q,16);var digitA=(a.hi>>>16)+0x10000*a.sup;var digitB=b.hi>>>16;var digit=digitA/digitB|0;var t=LongInt_copy(b);LongInt_mul(t,digit);if(LongInt_ucompare(t,a)>=0){while(LongInt_ucompare(t,a)>0){LongInt_sub(t,b); --digit;}}else {while(true){var nextT=LongInt_copy(t);LongInt_add(nextT,b);if(LongInt_ucompare(nextT,a)>0){break;}t=nextT;++digit;}}LongInt_sub(a,t);q.lo|=digit;LongInt_shl(a,16);}LongInt_shr(a,bits+16);return q;}function TeaVMThread(runner){this.status=3;this.stack
=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}TeaVMThread.prototype.push=function(){for(var i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};TeaVMThread.prototype.s=TeaVMThread.prototype.push;TeaVMThread.prototype.pop=function(){return this.stack.pop();};TeaVMThread.prototype.l=TeaVMThread.prototype.pop;TeaVMThread.prototype.isResuming=function(){return this.status===2;};TeaVMThread.prototype.isSuspending=function(){return this.status
===1;};TeaVMThread.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};TeaVMThread.prototype.start=function(callback){if(this.status!==3){throw new Error("Thread already started");}if($rt_currentNativeThread!==null){throw new Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:function(result){if(result instanceof Error){throw result;}};this.run();};TeaVMThread.prototype.resume=function(){if($rt_currentNativeThread!==null){throw new Error("Another thread is running");}this.status
=2;this.run();};TeaVMThread.prototype.run=function(){$rt_currentNativeThread=this;var result;try {result=this.runner();}catch(e){result=e;}finally {$rt_currentNativeThread=null;}if(this.suspendCallback!==null){var self=this;var callback=this.suspendCallback;this.suspendCallback=null;callback(function(){self.resume();});}else if(this.status===0){this.completeCallback(result);}};function $rt_suspending(){var thread=$rt_nativeThread();return thread!=null&&thread.isSuspending();}function $rt_resuming(){var thread
=$rt_nativeThread();return thread!=null&&thread.isResuming();}function $rt_suspend(callback){var nativeThread=$rt_nativeThread();if(nativeThread===null){throw new Error("Suspension point reached from non-threading context (perhaps, from native JS method).");}return nativeThread.suspend(callback);}function $rt_startThread(runner,callback){(new TeaVMThread(runner)).start(callback);}var $rt_currentNativeThread=null;function $rt_nativeThread(){return $rt_currentNativeThread;}function $rt_invalidPointer(){throw new Error("Invalid recorded state");}main
=$rt_mainStarter(AQ3);
(function(){var c;c=YG.prototype;c.dispatchEvent=c.Mr;c.addEventListener=c.Ya;c.removeEventListener=c.a0c;c.getLength=c.U7;c.get=c.Se;c.addEventListener=c.Tu;c.removeEventListener=c.Od;c=W3.prototype;c.handleEvent=c.gM;c=W9.prototype;c.handleEvent=c.gM;c=W$.prototype;c.handleEvent=c.gM;c=W7.prototype;c.handleEvent=c.gM;c=W8.prototype;c.handleEvent=c.gM;c=W5.prototype;c.handleEvent=c.gM;c=W6.prototype;c.handleEvent=c.gM;c=W4.prototype;c.handleEvent=c.gM;c=Qt.prototype;c.handleEvent=c.gM;c=Qs.prototype;c.handleEvent
=c.gM;c=W2.prototype;c.stateChanged=c.a0T;c=TC.prototype;c.handleEvent=c.gu;c=TB.prototype;c.handleEvent=c.gu;c=TA.prototype;c.handleEvent=c.gu;c=Tz.prototype;c.handleEvent=c.gM;c=AAV.prototype;c.getLength=c.Zs;c.get=c.QU;c=Qw.prototype;c.handleEvent=c.gM;c=Qv.prototype;c.handleEvent=c.gM;c=Qu.prototype;c.onTimer=c.Ga;c=Tm.prototype;c.onTimer=c.Ga;c=Tu.prototype;c.handleEvent=c.gu;c=Tt.prototype;c.handleEvent=c.gu;c=Ty.prototype;c.handleEvent=c.gu;c=Tv.prototype;c.handleEvent=c.gu;c=Rg.prototype;c.handleEvent
=c.gu;c=Rj.prototype;c.handleEvent=c.gu;c=Re.prototype;c.handleEvent=c.gu;c=Rf.prototype;c.handleEvent=c.gu;c=Rh.prototype;c.handleEvent=c.gu;c=Ri.prototype;c.handleEvent=c.gu;})();
})();

//# sourceMappingURL=app.js.map
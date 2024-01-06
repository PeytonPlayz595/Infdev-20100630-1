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
(b<0){b+=0x100000000;}return a%b|0;};function $rt_setCloneMethod(target, f){target.oZ=f;}
function $rt_cls(cls){return LX(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return AIb(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.bw.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return D; }
function $rt_nullCheck(val) {if (val === null) {$rt_throw(Bc2());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return ASK();}
function $rt_setThread(t){return Fv(t);}
function $rt_createException(message){return Z2(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
var A=Object.create(null);
var M=$rt_throw;var R=$rt_compare;var Bc3=$rt_nullCheck;var F=$rt_cls;var J=$rt_createArray;var So=$rt_isInstance;var C3=$rt_nativeThread;var C=$rt_suspending;var Fd=$rt_resuming;var E$=$rt_invalidPointer;var B=$rt_s;var Bt=$rt_eraseClinit;var Bj=$rt_imul;var Bg=$rt_wrapException;
function D(){this.co=null;this.$id$=0;}
function Bc4(){var a=new D();WI(a);return a;}
function Ba2(b){var c;if(b.co===null)Vz(b);if(b.co.ei===null)b.co.ei=Bc5;else if(b.co.ei!==Bc5){c=new D2;Bl(c,B(0));M(c);}b=b.co;b.fi=b.fi+1|0;}
function BcT(b){var c,d;if(!HK(b)&&b.co.ei===Bc5){c=b.co;d=c.fi-1|0;c.fi=d;if(!d)b.co.ei=null;HK(b);return;}b=new Kk;O(b);M(b);}
function AD3(b){if(b.co===null)Vz(b);if(b.co.ei===null)b.co.ei=Bc5;if(b.co.ei!==Bc5)AXo(b,1);else{b=b.co;b.fi=b.fi+1|0;}}
function Vz(b){b.co=Baw();}
function AXo(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gr=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IZ=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaG(callback);return thread.suspend(function(){try{Bcd(b,c,callback);}catch($e){callback.IZ($rt_exception($e));}});}
function Bcd(b,c,d){var e,f,g;e=Bc5;if(b.co===null){Vz(b);Fv(e);b=b.co;b.fi=b.fi+c|0;CM(d,null);return;}if(b.co.ei===null){b.co.ei=e;Fv(e);b=b.co;b.fi=b.fi+c|0;CM(d,null);return;}f=b.co;if(f.hl===null)f.hl=AXq();f=f.hl;g=new Rb;g.zH=e;g.zI=b;g.zF=c;g.zG=d;d=g;f.push(d);}
function NW(b){var c;if(!HK(b)&&b.co.ei===Bc5){c=b.co;c.fi=c.fi-1|0;if(c.fi<=0){c.ei=null;if(c.hl!==null&&!JK(c.hl)){c=new ST;c.Di=b;Q1(c);}else HK(b);}return;}b=new Kk;O(b);M(b);}
function HK(a){var b;b=a.co;if(b===null)return 1;a:{if(b.ei===null&&!(b.hl!==null&&!JK(b.hl))){if(b.rl===null)break a;if(JK(b.rl))break a;}return 0;}a.co=null;return 1;}
function WI(a){return;}
function Dl(a){return LX(a.constructor);}
function A4Y(a){return MN(a);}
function Q5(a,b){return a!==b?0:1;}
function AUn(a){var b,c,d,e,f,g,h,i;b=new S;V(b);b=H(H(b,IE(Dl(a))),B(1));c=MN(a);if(!c)d=B(2);else{e=(((32-TA(c)|0)+4|0)-1|0)/4|0;f=$rt_createCharArray(e);g=f.data;e=(e-1|0)*4|0;h=0;while(e>=0){i=h+1|0;g[h]=I4(c>>>e&15,16);e=e-4|0;h=i;}d=AIb(f);}return T(H(b,d));}
function MN(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AXN(a){var b,c,d;if(!So(a,ES)&&a.constructor.$meta.item===null){b=new Sf;O(b);M(b);}b=AS4(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function Xg(a){var b,c;if(!(a.co!==null&&a.co.ei===Bc5?1:0)){b=new Kk;O(b);M(b);}b=a.co.rl;if(b===null)return;while(!JK(b)){c=AOV(b);if(!c.a0q())Q1(c);}a.co.rl=null;}
function JA(){D.call(this);}
var Bc6=null;var Bc7=null;var Bc8=null;function Bc9(){var a=new JA();AQ0(a);return a;}
function AQ0(a){return;}
function AQ5(b){var c,d,e,f,g,h,i,j,k,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:AKe();AGm();AQl();Z0();AP5();AIU();ACO();ASo();AC8();AKR();ARL();Y8();AHE();Ze();AHj();ALX();AFq();AFs();AOK();AQd();AH4();AOs();ABI();AFB();AEt();AHT();XI();ADE();AAa();AL6();AKa();AOS();AG9();ASi();AOf();ALM();AAf();AKv();APc();AEm();AMM();ALc();AMK();AIJ();AF_();AHy();AK5();AAq();Z3();AP_();AJV();AAT();AIl();AL1();ABm();ANc();AHO();AFv();c
=window.minecraftOpts;if(c===null)d=null;else{d=J(B4,c.length);b=d.data;e=0;f=b.length;while(e<f){b[e]=$rt_str(c[e]);e=e+1|0;}}a:{try{b=d.data;c=window.document;g=b[0];c=c.getElementById($rt_ustr(g));Bc6=c;g=b[1];$p=1;continue _;}catch($$e){$$je=Bg($$e);if($$je instanceof BD){}else if($$je instanceof D8){c=$$je;break a;}else{throw $$e;}}return;}g=A8_();h=new Lt;Wf(h,g);h.yi=0;h.mC=g;OE(c,h);return;case 1:b:{c:{d:{try{AAr(c,g);if(C()){break _;}break d;}catch($$e){$$je=Bg($$e);if($$je instanceof BD){}else if($$je instanceof D8)
{c=$$je;break c;}else{throw $$e;}}return;}try{break b;}catch($$e){$$je=Bg($$e);if($$je instanceof D8){c=$$je;}else{throw $$e;}}}g=A8_();h=new Lt;Wf(h,g);h.yi=0;h.mC=g;OE(c,h);return;}c=new Ip;i=Lq();j=MD();g=new UT;g.DW=0;g.cX=c;g.v1=(-1);g.v3=(-1);g.v2=(-1);g.hr=0.0;g.mP=0.0;g.on=0.0;g.ne=0;k=new U0;b=J(FS,4);d=b.data;d[0]=F(I9);d[1]=F(Jo);d[2]=F(JY);d[3]=F(Km);RK(k,100,F(DP),b);k.Gz=g;g.Bg=k;h=new Jb;b=J(FS,2);d=b.data;d[0]=F(KG);d[1]=F(ID);RK(h,20,F(GC),b);g.BC=h;c.cB=g;g=new SF;g.CY=1.0;g.lL=0.0;g.nG=1.0;g.c8
=20.0;g.sT=B_();g.rW=Long_div(EG(),Long_fromInt(1000000));c.bf=g;c.k3=null;c.bs=0;c.D=null;g=new R5;g.n4=B(3);g.l$=B(3);g.kP=B_();g.lO=0;g.fH=c;c.it=g;c.eV=BbQ(c);c.bN=0;c.c$=0;c.Hj=null;c.F1=0;c.h9=0;c.Gw=Xu(0.0);c.ce=null;c.Da=Bap();c.BI=BaY();c.gS=1;c.lD=B(3);c.gT=Long_fromInt(-1);c.bp=0;c.cn=0;c.cU=0;c.dB=B_();g=new VZ;TT(g,B(4));g.yo=c;g.Eh=1;Tn(g);c.cq=i;c.bF=j;Bc$=c;Bc7=c;c=Bc7;g=new Mk;Bbi();g.om=B(5);g.F5=B(6);c.k3=g;Bc7.k3.GB=B(7);Bc8=A_6(Bc7,B(8));Tn(Bc8);return;default:E$();}}C3().s(b,c,d,e,f,g,
h,i,j,k,$p);}
function AKe(){Bc6=null;Bc7=null;Bc8=null;}
function MT(){}
function FS(){var a=this;D.call(a);a.un=null;a.fX=null;a.ml=null;}
var Bc_=0;function LX(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new FS;c.fX=b;d=c;b.classObject=d;}return c;}
function A36(a){return a.fX;}
function UA(a,b){var c;b=b;c=a.fX;return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&VY(b.constructor,c)?1:0;}
function P8(a,b){return VY(b.fX,a.fX);}
function IE(a){if(a.un===null)a.un=$rt_str(a.fX.$meta.name);return a.un;}
function F1(a){return a.fX.$meta.primitive?1:0;}
function AG1(a){return AR3(a.fX)===null?0:1;}
function Kx(a){return LX(AR3(a.fX));}
function A6Z(){I9.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];Jo.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel
:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"attackEntity",modifiers:0,accessLevel:2,parameterTypes:[C5,$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];JY.$meta.methods
=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"updatePlayerActionState",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"attackEntity",modifiers:0,accessLevel:2,parameterTypes:[C5,$rt_floatcls()],returnType
:$rt_voidcls(),callable:null},{name:"setCreeperFlashTime",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls()],returnType:$rt_floatcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];Km.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"findPlayerToAttack",modifiers:0,accessLevel:2,parameterTypes:[],returnType:C5,callable:null},{name:"attackEntity",modifiers
:0,accessLevel:2,parameterTypes:[C5,$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];KG.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType
:$rt_voidcls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"getLivingSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getHurtSound",modifiers:0,accessLevel
:2,parameterTypes:[],returnType:B4,callable:null},{name:"getDeathSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null}];ID.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"getLivingSound",modifiers
:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getHurtSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getDeathSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"interact",modifiers:0,accessLevel:3,parameterTypes:[Jw],returnType:$rt_booleancls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];Jj.$meta.methods=[{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeToNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"readFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null}];Th.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getSizeInventory",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getStackInSlot",modifiers
:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:Cd,callable:null},{name:"decrStackSize",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls()],returnType:Cd,callable:null},{name:"setInventorySlotContents",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),Cd],returnType:$rt_voidcls(),callable:null},{name:"getInvName",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B4,callable:null},{name:"readFromNBT",modifiers:4,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable
:null},{name:"writeToNBT",modifiers:4,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"getInventoryStackLimit",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null}];WX.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getSizeInventory",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getStackInSlot",modifiers:0,accessLevel:3,parameterTypes
:[$rt_intcls()],returnType:Cd,callable:null},{name:"decrStackSize",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls()],returnType:Cd,callable:null},{name:"setInventorySlotContents",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),Cd],returnType:$rt_voidcls(),callable:null},{name:"getInvName",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B4,callable:null},{name:"readFromNBT",modifiers:4,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"writeToNBT",modifiers
:4,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"getInventoryStackLimit",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getCookProgressScaled",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_intcls(),callable:null},{name:"getBurnTimeRemainingScaled",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_intcls(),callable:null},{name:"isBurning",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:$rt_booleancls(),callable:null},{name:"updateEntity",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"canSmelt",modifiers:0,accessLevel:1,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"smeltItem",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getSmeltingResult",modifiers:0,accessLevel:1,parameterTypes:[$rt_intcls()],returnType:$rt_intcls(),callable:null},{name:"getItemBurnTime",modifiers:0,accessLevel
:1,parameterTypes:[Cd],returnType:$rt_intcls(),callable:null},{name:"onInventoryChanged",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null}];NA.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"anyPlayerInRange",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"updateEntity",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name
:"updateDelay",modifiers:0,accessLevel:1,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"readFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"writeToNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null}];DP.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable
:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"findPlayerToAttack",modifiers:0,accessLevel:2,parameterTypes:[],returnType:C5,callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"attackEntity",modifiers:0,accessLevel:2,parameterTypes:[C5,$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"getBlockPathWeight",modifiers:0,accessLevel:2,parameterTypes
:[$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_floatcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"getCanSpawnHere",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_booleancls(),callable:null}];EP.$meta.methods=[{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"getTexture",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B4,callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"canBePushed",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"getEyeHeight",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_floatcls(),callable:null},{name:"onEntityUpdate",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"spawnExplosionParticle",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"updateRidden",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"setSize",modifiers:0,accessLevel:2,parameterTypes:[$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable
:null},{name:"heal",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"getLivingSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getHurtSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getDeathSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable
:null},{name:"knockBack",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_voidcls(),callable:null},{name:"onDeath",modifiers:0,accessLevel:3,parameterTypes:[C5],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"fall",modifiers:0,accessLevel:2,parameterTypes:[$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"moveEntityWithHeading",modifiers
:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"isOnLadder",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"isEntityAlive",modifiers:0,accessLevel:3,parameterTypes:[],returnType:
$rt_booleancls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"jump",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"updatePlayerActionState",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"onEntityDeath",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getCanSpawnHere",modifiers:0,accessLevel:3,parameterTypes
:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_booleancls(),callable:null},{name:"kill",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null}];K$.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"getBlockPathWeight",modifiers:0,accessLevel:2,parameterTypes:[$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_floatcls(),callable:null}];IH.$meta.methods=[{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0,$rt_intcls(),$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"setDirection",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"getArtSize",modifiers:0,accessLevel:1,parameterTypes:[$rt_intcls()],returnType:$rt_floatcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:$rt_voidcls(),callable:null},{name:"onValidSurface",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers
:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null}];Ju.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0,EP],returnType:$rt_voidcls(),callable:null},{name:"setArrowHeading",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"onCollideWithPlayer",modifiers:0,accessLevel:3,parameterTypes:[Jw],returnType:$rt_voidcls(),callable:null}];E9.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0,$rt_doublecls(),$rt_doublecls(),
$rt_doublecls(),Cd],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"handleWaterMovement",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"pushOutOfBlocks",modifiers:0,accessLevel:1,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_booleancls(),callable
:null},{name:"dealFireDamage",modifiers:0,accessLevel:2,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"onCollideWithPlayer",modifiers
:0,accessLevel:3,parameterTypes:[Jw],returnType:$rt_voidcls(),callable:null}];Mr.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0,$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes
:[],returnType:$rt_voidcls(),callable:null},{name:"createExplosion",modifiers:0,accessLevel:1,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:2,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:2,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null}];JM.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers
:0,accessLevel:3,parameterTypes:[F0,$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:2,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:2,parameterTypes
:[APQ],returnType:$rt_voidcls(),callable:null},{name:"getWorld",modifiers:0,accessLevel:3,parameterTypes:[],returnType:F0,callable:null}];Gi.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"getCollisionBox",modifiers:0,accessLevel:3,parameterTypes:[C5],returnType:I_,callable:null},{name:"getBoundingBox",modifiers:0,accessLevel:3,parameterTypes:[],returnType:I_,callable:null},{name:"canBePushed",modifiers:0,accessLevel:3,parameterTypes
:[],returnType:$rt_booleancls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0,$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_voidcls(),callable:null},{name:"getYOffset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_doublecls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable
:null},{name:"setEntityDead",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getPosOffset",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:Kj,callable:null},{name:"getPos",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:Kj,callable:null},{name:
"writeEntityToNBT",modifiers:0,accessLevel:2,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:2,parameterTypes:[APQ],returnType:$rt_voidcls(),callable:null},{name:"applyEntityCollision",modifiers:0,accessLevel:3,parameterTypes:[C5],returnType:$rt_voidcls(),callable:null},{name:"getSizeInventory",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getStackInSlot",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType
:Cd,callable:null},{name:"decrStackSize",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls()],returnType:Cd,callable:null},{name:"setInventorySlotContents",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),Cd],returnType:$rt_voidcls(),callable:null},{name:"getInvName",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B4,callable:null},{name:"getInventoryStackLimit",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"onInventoryChanged",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"interact",modifiers:0,accessLevel:3,parameterTypes:[Jw],returnType:$rt_booleancls(),callable:null},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:$rt_voidcls(),callable:null}];}
function ASq(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!F1(a)&&!AG1(a)){if(a.ml===null){if(!Bc_){Bc_=1;A6Z();}b=a.fX.$meta.methods;a.ml=J(Kr,b.length);c=0;d=0;while(d<b.length){e=b[d];if(DC($rt_str(e.name),B(9))){f=e.parameterTypes;g=J(FS,f.length);h=g.data;i=0;j=h.length;while(i<j){h[i]=LX(f[i]);i=i+1|0;}h=a.ml.data;j=c+1|0;k=new Kr;l=$rt_str(e.name);m=e.modifiers;i=e.accessLevel;f=JE(e.callable,"call");k.zV=a;k.H2=l;k.vf=m;k.Dn=i;k.ng=g;k.vN=f;h[c]=k;c=j;}d=d+1|0;}a.ml=Nt(a.ml,c);}return a.ml.oZ();}return J(Kr,0);}
function WC(a,b){var c,d,e,f,g,h,i,j,k,l;c=ASq(a).data;d=c.length;e=0;while(true){if(e>=d){f=new UW;O(f);M(f);}g=c[e];if(!(AEb(g)&1)?0:1){a:{h=ABl(g);if(h===b)i=1;else{if(h!==null&&b!==null){j=h.data;h=b.data;k=j.length;if(k==h.length){i=0;while(i<k){f=j[i];l=h[i];if(!(f===l?1:f!==null?Q5(f,l):l!==null?0:1)){i=0;break a;}i=i+1|0;}i=1;break a;}}i=0;}}if(i)break;}e=e+1|0;}return g;}
function JJ(a){return LX(a.fX.$meta.superclass);}
function Zq(a){var b;b=a.fX;if(!Bda){AW0();Bda=1;}b=A2s(b);if(b!==null)return b;b=new LY;O(b);M(b);}
function AJ6(){D.call(this);}
function Bdb(){var a=new AJ6();A68(a);return a;}
function A68(a){return;}
function Cu(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function JE(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
function T7(){D.call(this);}
var Bda=0;function Bdc(){var a=new T7();A_r(a);return a;}
function A_r(a){return;}
function AS4(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function VY(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(VY(d[e],c))return 1;e=e+1|0;}return 0;}
function AW0(){var c='$$constructor$$';B4[c]=X8;D[c]=WI;AMe[c]=A1t;I5[c]=AVy;Fg[c]=AUM;D8[c]=O;AOU[c]=AWP;IS[c]=AXK;ALF[c]=A3w;B6[c]=ATl;BD[c]=AZL;S[c]=A_g;HO[c]=V;JA[c]=AQ0;ABi[c]=A21;AJ6[c]=A68;T7[c]=A_r;Gp[c]=AHC;Bs[c]=VS;W8[c]=A2l;Xc[c]=AZh;Xd[c]=AXg;Xa[c]=A47;Xb[c]=A_O;W$[c]=A3$;W_[c]=AXv;W9[c]=A25;QA[c]=A2b;Qz[c]=A34;AEF[c]=A2S;BW[c]=A3T;Lg[c]=A6j;V3[c]=AZl;AFc[c]=AV9;ZG[c]=A27;Mz[c]=KF;AAU[c]=A$4;AKC[c]=A1F;AQk[c]=A08;ACd[c]=AVu;NV[c]=AD9;UX[c]=AQu;ADt[c]=A$i;DB[c]=A3e;L4[c]=AZE;AJg[c]=AV$;YW[c]=A0n;Cc[c]
=AT_;AJc[c]=A57;EE[c]=AUL;NE[c]=AIn;AE5[c]=ATc;Xe[c]=A3t;SD[c]=ZO;Um[c]=A2_;MU[c]=OR;AA$[c]=AY6;Jj[c]=AZ1;D$[c]=ANx;AHH[c]=A1U;B8[c]=AQm;P6[c]=A85;Om[c]=AZW;L0[c]=ATm;N9[c]=A7x;AGj[c]=A0f;Sf[c]=A6F;I0[c]=A0Y;BO[c]=AUx;FH[c]=AW7;PQ[c]=A6L;AMp[c]=ATB;Gd[c]=AHG;Hx[c]=A_p;AOr[c]=A2Q;Xv[c]=A8N;Kk[c]=A7i;D2[c]=A9V;ZW[c]=A2E;W2[c]=A1j;G0[c]=AVd;E1[c]=A7S;ASb[c]=AXL;OV[c]=Zd;ANy[c]=A8H;CS[c]=DQ;Gh[c]=Ng;JT[c]=A5F;Bu[c]=AO6;ACD[c]=AUm;Es[c]=A44;U4[c]=A$a;G_[c]=AZQ;Qm[c]=A$z;AKX[c]=A4v;ACl[c]=A3o;AHc[c]=A4q;RF[c]=A0M;Qp[c]
=ANO;AJH[c]=AWd;AAF[c]=AST;AII[c]=A5x;Jp[c]=AYg;FV[c]=A6N;Hc[c]=A5U;Gu[c]=A1G;Mm[c]=A94;AA1[c]=AWe;AFT[c]=A8$;Th[c]=A19;WX[c]=AVc;KS[c]=A2o;Rz[c]=A6P;WD[c]=AFu;Ly[c]=AHs;O6[c]=ALi;HY[c]=AC_;H1[c]=AGx;J1[c]=A7N;OO[c]=AIa;L$[c]=AVV;Ht[c]=AAl;Nh[c]=AR2;QB[c]=A_i;WJ[c]=AVn;WH[c]=A5L;Hn[c]=AQJ;Ni[c]=AKm;R_[c]=ASO;Sb[c]=A98;Sa[c]=A$b;Sc[c]=A3I;AA4[c]=ATx;NA[c]=A8c;AR0[c]=AXn;AQj[c]=A4r;PX[c]=AYe;ACI[c]=A96;ARh[c]=AVa;AB$[c]=AZM;AIo[c]=AWq;HS[c]=A8d;TM[c]=AZw;AAt[c]=AZC;Ry[c]=ASW;AOX[c]=A7h;AQO[c]=AXt;ARA[c]=A$h;V9[c]
=AUd;ABE[c]=AUo;AH7[c]=AUO;AIB[c]=A4$;AEX[c]=A32;UW[c]=A6M;Gl[c]=A$f;Vf[c]=AO8;AQH[c]=A4b;APQ[c]=A8K;P5[c]=A$7;SL[c]=AYO;LY[c]=A6$;Tc[c]=A$G;AMk[c]=AS8;NU[c]=ADb;QY[c]=ALB;ALw[c]=A7o;AAd[c]=A8v;N3[c]=AVO;Mw[c]=A4m;MZ[c]=A51;Li[c]=A1K;Oc[c]=AZ2;Pj[c]=AZZ;Mp[c]=AZD;MI[c]=A_I;OH[c]=A8n;QU[c]=AG7;ART[c]=AXD;XZ[c]=A$p;XS[c]=A2d;AEc[c]=A0E;ARS[c]=A6U;AE_[c]=AU$;AR_[c]=A2U;HV[c]=A$n;K1[c]=AXY;CE[c]=A4A;ZN[c]=A2w;Ia[c]=AF9;TR[c]=A_D;WZ[c]=A4w;ABN[c]=AVj;AJr[c]=A0H;AQ7[c]=AW4;AGi[c]=A8j;Ez[c]=A3P;Wx[c]=A37;Wy[c]=AWL;NL[c]
=AWW;Nc[c]=A0U;AEH[c]=AWt;AFk[c]=AXf;AFt[c]=ATU;NH[c]=AU2;L_[c]=AWZ;AHS[c]=A7T;OD[c]=AZS;AMQ[c]=A0L;ACL[c]=A9I;AAj[c]=A$2;AJ_[c]=AT8;AQc[c]=A3Z;AH0[c]=AZ8;APq[c]=ATW;AEp[c]=AYs;AFZ[c]=AU0;Y0[c]=AUv;AIx[c]=AX$;APF[c]=AYF;AE9[c]=A6r;ALd[c]=ATp;ACX[c]=AUE;AHa[c]=AXS;APT[c]=A79;ABx[c]=AUy;AAJ[c]=A9q;AHY[c]=A6l;La[c]=AVD;AQF[c]=A6v;AMW[c]=A1B;AAC[c]=A6V;AKQ[c]=A14;AKu[c]=AS7;Zt[c]=A75;AL$[c]=A$N;IM[c]=AT5;S5[c]=AAk;AJZ[c]=ATV;Nm[c]=ASn;AF0[c]=A0j;N0[c]=ABo;PA[c]=A_F;Rg[c]=A60;WT[c]=AX0;Oe[c]=AVW;ARk[c]=A0V;AIq[c]
=AWS;Y7[c]=A0b;}
function A2s(b){if($rt_resuming()){var $r = $rt_nativeThread().pop();b.$$constructor$$($r);if($rt_suspending()){return $rt_nativeThread().push($r);}return $r;}if(!b.hasOwnProperty('$$constructor$$')){return null;}var $r=new b();b.$$constructor$$($r);if($rt_suspending()){return $rt_nativeThread().push($r);}return $r;}
function AZN(b){return setTimeout(function(){$rt_threadStarter(A30)(b);},0);}
function A30(b){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:b.kt();if(C()){break _;}return;default:E$();}}C3().s(b,$p);}
function Q1(b){AFF(b,0);}
function AFF(b,c){return setTimeout(function(){A30(b);},c);}
function AP3(b){return String.fromCharCode(b);}
function AR3(b){return b.$meta.item;}
function AXq(){return [];}
function Dc(){}
function DM(){}
function KY(){}
function B4(){var a=this;D.call(a);a.bw=null;a.qr=0;}
var Bdd=null;function Bde(){var a=new B4();X8(a);return a;}
function AIb(a){var b=new B4();Tr(b,a);return b;}
function Lj(a,b,c){var d=new B4();ASD(d,a,b,c);return d;}
function A26(a,b){var c=new B4();Yw(c,a,b);return c;}
function A$A(a,b,c){var d=new B4();XB(d,a,b,c);return d;}
function X8(a){a.bw=$rt_createCharArray(0);}
function Tr(a,b){var c,d;b=b.data;c=b.length;a.bw=$rt_createCharArray(c);d=0;while(d<c){a.bw.data[d]=b[d];d=d+1|0;}}
function ASD(a,b,c,d){var e,f;a.bw=$rt_createCharArray(d);e=0;while(e<d){f=b.data;a.bw.data[e]=f[e+c|0];e=e+1|0;}}
function Yw(a,b,c){c=AN4(c,AME(b,0,b.data.length));if(AJD(c)&&!c.bk&&c.cy==c.mG)a.bw=APl(c);else{a.bw=$rt_createCharArray(Ct(c));AER(c,a.bw);}}
function XB(a,b,c,d){var e,f,g,h,i,j;a.bw=$rt_createCharArray(d*2|0);e=0;f=0;while(f<d){g=b.data;h=c+1|0;i=g[c];if(i<65536){g=a.bw.data;j=e+1|0;g[e]=i&65535;}else{g=a.bw.data;c=e+1|0;g[e]=IF(i);g=a.bw.data;j=c+1|0;g[c]=Ib(i);}f=f+1|0;c=h;e=j;}if(e<a.bw.data.length)a.bw=O8(a.bw,e);}
function Z(a,b){var c;if(b>=0&&b<a.bw.data.length)return a.bw.data[b];c=new I0;O(c);M(c);}
function Bi(a){return a.bw.data.length;}
function Iz(a){return a.bw.data.length?0:1;}
function ARq(a,b){var c,d,e;if(a===b)return 0;c=CB(Bi(a),Bi(b));d=0;while(true){if(d>=c)return Bi(a)-Bi(b)|0;e=Z(a,d)-Z(b,d)|0;if(e)break;d=d+1|0;}return e;}
function AJE(a,b){var c,d,e;if(a===b)return 0;c=CB(Bi(a),Bi(b));d=0;while(true){if(d>=c)return Bi(a)-Bi(b)|0;e=ET(Z(a,d))-ET(Z(b,d))|0;if(e)break;d=d+1|0;}return e;}
function Wd(a,b,c){var d,e,f;if((c+Bi(b)|0)>Bi(a))return 0;d=0;while(d<Bi(b)){e=Z(b,d);f=c+1|0;if(e!=Z(a,c))return 0;d=d+1|0;c=f;}return 1;}
function IA(a,b){if(a===b)return 1;return Wd(a,b,0);}
function Hl(a,b,c){var d,e,f,g;d=DE(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.bw.data.length)return (-1);if(a.bw.data[d]==e)break;d=d+1|0;}return d;}f=IF(b);g=Ib(b);while(true){if(d>=(a.bw.data.length-1|0))return (-1);if(a.bw.data[d]==f&&a.bw.data[d+1|0]==g)break;d=d+1|0;}return d;}
function UF(a,b){return Hl(a,b,0);}
function Ik(a,b,c){var d,e,f,g,h;d=CB(c,Bi(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.bw.data[d]==e)break;d=d+(-1)|0;}return d;}f=IF(b);g=Ib(b);while(true){if(d<1)return (-1);if(a.bw.data[d]==g){h=a.bw.data;b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function LG(a,b){return Ik(a,b,Bi(a)-1|0);}
function AKH(a,b,c){var d,e,f;d=DE(0,c);e=Bi(a)-Bi(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=Bi(b))break a;if(Z(a,d+f|0)!=Z(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function AAy(a,b,c){var d,e;d=CB(c,Bi(a)-Bi(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=Bi(b))break a;if(Z(a,d+e|0)!=Z(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function Ev(a,b,c){var d;if(b<=c)return Lj(a.bw,b,c-b|0);d=new BO;O(d);M(d);}
function Jv(a,b){return Ev(a,b,Bi(a));}
function AVL(a,b,c){return Ev(a,b,c);}
function KJ(a,b,c){var d,e,f,g;d=new S;V(d);e=Bi(a)-Bi(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=Bi(b)){FO(d,c);f=f+(Bi(b)-1|0)|0;break a;}if(Z(a,f+g|0)!=Z(b,g))break;g=g+1|0;}Dx(d,Z(a,f));}f=f+1|0;}FO(d,Jv(a,f));return T(d);}
function AUj(a){return a;}
function Nx(a){var b,c,d,e;b=$rt_createCharArray(a.bw.data.length);c=b.data;d=0;e=c.length;while(d<e){c[d]=a.bw.data[d];d=d+1|0;}return b;}
function Ur(b){return b===null?B(10):b.gk();}
function VV(b){var c;c=new S;V(c);return T(Be(c,b));}
function DC(a,b){var c,d;if(a===b)return 1;if(!(b instanceof B4))return 0;c=b;if(Bi(c)!=Bi(a))return 0;d=0;while(d<Bi(c)){if(Z(a,d)!=Z(c,d))return 0;d=d+1|0;}return 1;}
function A8l(a){var b,c,d,e;a:{if(!a.qr){b=a.bw.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.qr=(31*a.qr|0)+e|0;d=d+1|0;}}}return a.qr;}
function AKk(a){var b,c,d,e,f,g,h;if(Iz(a))return a;b=$rt_createIntArray(a.bw.data.length);c=b.data;d=0;e=0;while(e<a.bw.data.length){a:{if(e!=(a.bw.data.length-1|0)&&Dt(a.bw.data[e])){f=a.bw.data;g=e+1|0;if(DR(f[g])){h=d+1|0;c[d]=GQ(EI(a.bw.data[e],a.bw.data[g]));e=g;break a;}}h=d+1|0;c[d]=ET(a.bw.data[e]);}e=e+1|0;d=h;}return A$A(b,0,d);}
function AOk(a){var b,c,d,e,f,g,h;if(Iz(a))return a;b=$rt_createIntArray(a.bw.data.length);c=b.data;d=0;e=0;while(e<a.bw.data.length){a:{if(e!=(a.bw.data.length-1|0)&&Dt(a.bw.data[e])){f=a.bw.data;g=e+1|0;if(DR(f[g])){h=d+1|0;c[d]=GP(EI(a.bw.data[e],a.bw.data[g]));e=g;break a;}}h=d+1|0;c[d]=FF(a.bw.data[e]);}e=e+1|0;d=h;}return A$A(b,0,d);}
function ANn(a,b){var c,d;if(b===null){b=new EE;Bl(b,B(11));M(b);}Bdf=1;c=Bbv();d=new HX;d.h6=1;d.eP=b;d.bE=$rt_createCharArray(Bi(b)+2|0);Di(Nx(b),0,d.bE,0,Bi(b));d.bE.data[d.bE.data.length-1|0]=0;d.bE.data[d.bE.data.length-2|0]=0;d.DX=d.bE.data.length;d.l_=0;GD(d);GD(d);c.n=d;c.fP=0;c.u3=SZ(c,(-1),c.fP,null);if(!Eo(c.n))M(CN(B(3),c.n.eP,c.n.ii));if(c.ze)c.u3.iY();return AIR(c,a);}
function AV2(a,b){return ARq(a,b);}
function AGm(){Bdd=new V3;}
function D8(){var a=this;D.call(a);a.vA=null;a.jG=null;a.os=0;a.rS=0;a.pe=null;a.qQ=null;}
function Bdg(){var a=new D8();O(a);return a;}
function Bdh(a){var b=new D8();Bl(b,a);return b;}
function Bdi(a){var b=new D8();WU(b,a);return b;}
function O(a){a.os=1;a.rS=1;}
function Bl(a,b){a.os=1;a.rS=1;a.vA=b;}
function WU(a,b){a.os=1;a.rS=1;a.jG=b;}
function A5G(a){return a;}
function A0k(a){return a.vA;}
function AWp(a){return a.lT();}
function B9(a){S0(a,C$());}
function S0(a,b){var c,d,e,f,g;Kp(b,IE(Dl(a)));c=a.lT();if(c!==null){d=new S;V(d);Kp(b,T(H(H(d,B(12)),c)));}a:{APD(b);if(a.qQ!==null){e=a.qQ.data;f=e.length;g=0;while(true){if(g>=f)break a;d=e[g];Kp(b,B(13));ACk(b,d);g=g+1|0;}}}if(a.jG!==null&&a.jG!==a){Kp(b,B(14));S0(a.jG,b);}}
function OE(a,b){var c,d,e,f,g;Hq(b,IE(Dl(a)));c=a.lT();if(c!==null){d=new S;V(d);Hq(b,T(H(H(d,B(12)),c)));}a:{SQ(b);if(a.qQ!==null){e=a.qQ.data;f=e.length;g=0;while(true){if(g>=f)break a;d=e[g];Hq(b,B(15));AAE(b,d);g=g+1|0;}}}if(a.jG!==null&&a.jG!==a){Hq(b,B(14));OE(a.jG,b);}}
function WM(a,b){if(!a.os)return;a.pe=Nt(a.pe,a.pe.data.length+1|0);a.pe.data[a.pe.data.length-1|0]=b;}
function Fg(){D8.call(this);}
function Bdj(){var a=new Fg();AUM(a);return a;}
function AUM(a){O(a);}
function I5(){Fg.call(this);}
function Bdk(){var a=new I5();AVy(a);return a;}
function AVy(a){O(a);}
function AMe(){I5.call(this);}
function Bdl(){var a=new AMe();A1t(a);return a;}
function A1t(a){O(a);}
function HO(){var a=this;D.call(a);a.O=null;a.bY=0;}
function Bdm(){var a=new HO();V(a);return a;}
function BcR(a){var b=new HO();GE(b,a);return b;}
function V(a){GE(a,16);}
function GE(a,b){a.O=$rt_createCharArray(b);}
function Tx(a,b,c){return AMx(a,a.bY,b,c);}
function AMx(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c;}a:{if(c<d){if(e)C2(a,b,b+1|0);else{C2(a,b,b+2|0);f=a.O.data;g=b+1|0;f[b]=45;b=g;}a.O.data[b]=I4(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=Bj(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;C2(a,b,b+i|0);if(e)e=b;else{f=a.O.data;e=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.O.data;b=e+1|0;f[e]=I4(c/k|0,d);c=c%k|0;k=k/d|0;e=b;}}}return a;}
function ADd(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(Long_lt(c,Long_ZERO)){e=0;c=Long_neg(c);}a:{f=Long_fromInt(d);if(Long_lt(c,f)){if(e)C2(a,b,b+1|0);else{C2(a,b,b+2|0);g=a.O.data;h=b+1|0;g[b]=45;b=h;}a.O.data[b]=I4(c.lo,d);}else{i=1;j=Long_fromInt(1);while(true){k=Long_mul(j,f);if(Long_le(k,j))break;if(Long_gt(k,c))break;i=i+1|0;j=k;}if(!e)i=i+1|0;C2(a,b,b+i|0);if(e)i=b;else{g=a.O.data;i=b+1|0;g[b]=45;}while(true){if(Long_le(j,Long_ZERO))break a;g=a.O.data;b=i+1|0;g[i]=I4(Long_div(c,j).lo,d);c=Long_rem(c,j);j=Long_div(j,
f);i=b;}}}return a;}
function AOt(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=R(c,0.0);if(!d){C2(a,b,b+3|0);e=a.O.data;d=b+1|0;e[b]=48;e=a.O.data;b=d+1|0;e[d]=46;a.O.data[b]=48;return a;}if(!d){C2(a,b,b+4|0);e=a.O.data;d=b+1|0;e[b]=45;e=a.O.data;b=d+1|0;e[d]=48;e=a.O.data;d=b+1|0;e[b]=46;a.O.data[d]=48;return a;}if(isNaN(c)?1:0){C2(a,b,b+3|0);e=a.O.data;d=b+1|0;e[b]=78;e=a.O.data;b=d+1|0;e[d]=97;a.O.data[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){C2(a,b,b+8|0);d=b;}else{C2(a,b,b+9|0);e=a.O.data;d=b+1|0;e[b]=45;}e=a.O.data;b=d+1|0;e[d]
=73;e=a.O.data;d=b+1|0;e[b]=110;e=a.O.data;b=d+1|0;e[d]=102;e=a.O.data;d=b+1|0;e[b]=105;e=a.O.data;b=d+1|0;e[d]=110;e=a.O.data;d=b+1|0;e[b]=105;e=a.O.data;b=d+1|0;e[d]=116;a.O.data[b]=121;return a;}f=Bdn;AOg(c,f);d=f.uz;g=f.ug;h=f.zl;i=1;j=1;if(h){h=1;j=2;}k=9;l=A0S(d);if(l>0)k=k-l|0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=DE(k,i+1|0);g=0;}else if(g<0){d=d/Bdo.data[ -g]|0;k=k-g|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;C2(a,b,b+(j+k|0)|0);if(!h)h=b;else{e=a.O.data;h=b+
1|0;e[b]=45;}m=100000000;n=0;while(n<k){if(m<=0)o=0;else{o=d/m|0;d=d%m|0;}e=a.O.data;b=h+1|0;e[h]=(48+o|0)&65535;i=i+(-1)|0;if(i)h=b;else{e=a.O.data;h=b+1|0;e[b]=46;}m=m/10|0;n=n+1|0;}if(g){e=a.O.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g;e=a.O.data;d=b+1|0;e[b]=45;}if(g<10)l=d;else{e=a.O.data;l=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}a.O.data[l]=(48+(g%10|0)|0)&65535;}return a;}
function AKx(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=R(c,0.0);if(!d){C2(a,b,b+3|0);e=a.O.data;d=b+1|0;e[b]=48;e=a.O.data;b=d+1|0;e[d]=46;a.O.data[b]=48;return a;}if(!d){C2(a,b,b+4|0);e=a.O.data;d=b+1|0;e[b]=45;e=a.O.data;b=d+1|0;e[d]=48;e=a.O.data;d=b+1|0;e[b]=46;a.O.data[d]=48;return a;}if(isNaN(c)?1:0){C2(a,b,b+3|0);e=a.O.data;d=b+1|0;e[b]=78;e=a.O.data;b=d+1|0;e[d]=97;a.O.data[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){C2(a,b,b+8|0);d=b;}else{C2(a,b,b+9|0);e=a.O.data;d=b+1|0;e[b]=45;}e=a.O.data;b=d+1|0;e[d]
=73;e=a.O.data;d=b+1|0;e[b]=110;e=a.O.data;b=d+1|0;e[d]=102;e=a.O.data;d=b+1|0;e[b]=105;e=a.O.data;b=d+1|0;e[d]=110;e=a.O.data;d=b+1|0;e[b]=105;e=a.O.data;b=d+1|0;e[d]=116;a.O.data[b]=121;return a;}f=Bdp;ABZ(c,f);g=f.u4;h=f.t5;i=f.zc;j=1;k=1;if(i)k=2;l=18;d=AZA(g);if(d>0)l=l-d|0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=DE(l,j+1|0);h=0;}else if(h<0){g=Long_div(g,Bdq.data[ -h]);l=l-h|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;C2(a,b,b+(k+l|0)|
0);if(!i)i=b;else{e=a.O.data;i=b+1|0;e[b]=45;}m=new Long(1569325056, 23283064);n=0;while(n<l){if(Long_le(m,Long_ZERO))o=0;else{o=Long_div(g,m).lo;g=Long_rem(g,m);}e=a.O.data;b=i+1|0;e[i]=(48+o|0)&65535;j=j+(-1)|0;if(j)i=b;else{e=a.O.data;i=b+1|0;e[b]=46;}m=Long_div(m,Long_fromInt(10));n=n+1|0;}if(h){e=a.O.data;b=i+1|0;e[i]=69;if(h>=0)d=b;else{h= -h;e=a.O.data;d=b+1|0;e[b]=45;}if(h>=100){e=a.O.data;b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;e=a.O.data;j=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)j=d;else
{e=a.O.data;j=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}a.O.data[j]=(48+(h%10|0)|0)&65535;}return a;}
function A0S(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AZA(b){var c,d,e,f;c=Long_fromInt(1);d=0;e=16;f=Bdr.data.length-1|0;while(f>=0){if(Long_eq(Long_rem(b,Long_mul(c,Bdr.data[f])),Long_ZERO)){d=d|e;c=Long_mul(c,Bdr.data[f]);}e=e>>>1;f=f+(-1)|0;}return d;}
function Dx(a,b){return a.yl(a.bY,b);}
function K0(a,b,c){C2(a,b,b+1|0);a.O.data[b]=c;return a;}
function M0(a,b){var c;if(a.O.data.length>=b)return;c=a.O.data.length>=1073741823?2147483647:DE(b,DE(a.O.data.length*2|0,5));a.O=O8(a.O,c);}
function T(a){return Lj(a.O,0,a.bY);}
function IZ(a,b,c,d){return a.xV(a.bY,b,c,d);}
function J7(a,b,c,d,e){var f,g,h,i;C2(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.O.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function Hm(a,b){return a.xn(b,0,b.data.length);}
function C2(a,b,c){var d,e;d=a.bY-b|0;a.nB((a.bY+c|0)-b|0);e=d-1|0;while(e>=0){a.O.data[c+e|0]=a.O.data[b+e|0];e=e+(-1)|0;}a.bY=a.bY+(c-b|0)|0;}
function Iv(){}
function S(){HO.call(this);}
function BX(){var a=new S();A_g(a);return a;}
function A_g(a){V(a);}
function H(a,b){NB(a,a.bY,b);return a;}
function Be(a,b){Tx(a,b,10);return a;}
function C6(a,b){UL(a,a.bY,b);return a;}
function AWC(a,b){WK(a,a.bY,b);return a;}
function AKq(a,b){Qr(a,a.bY,b);return a;}
function AS2(a,b){Dx(a,b);return a;}
function AU9(a,b,c,d){IZ(a,b,c,d);return a;}
function A9W(a,b){Hm(a,b);return a;}
function FO(a,b){Xo(a,a.bY,b);return a;}
function UL(a,b,c){ADd(a,b,c,10);return a;}
function WK(a,b,c){AOt(a,b,c);return a;}
function Qr(a,b,c){AKx(a,b,c);return a;}
function A9e(a,b,c,d,e){J7(a,b,c,d,e);return a;}
function Xo(a,b,c){NB(a,b,c===null?B(10):c.gk());return a;}
function AYX(a,b,c){K0(a,b,c);return a;}
function AGJ(a,b,c){var d,e,f,g,h,i,j;d=R(b,c);if(d<=0&&b<=a.bY){if(d){e=a.bY-c|0;a.bY=a.bY-(c-b|0)|0;d=0;while(d<e){f=a.O.data;g=b+1|0;h=a.O.data;i=c+1|0;f[b]=h[c];d=d+1|0;b=g;c=i;}}return a;}j=new I0;O(j);M(j);}
function Sm(a,b){var c,d,e,f;if(b>=0&&b<a.bY){a.bY=a.bY-1|0;while(b<a.bY){c=a.O.data;d=a.O.data;e=b+1|0;c[b]=d[e];b=e;}return a;}f=new I0;O(f);M(f);}
function NB(a,b,c){var d,e,f;if(b>=0&&b<=a.bY){a:{if(c===null)c=B(10);else if(Iz(c))break a;M0(a,a.bY+Bi(c)|0);d=a.bY-1|0;while(d>=b){a.O.data[d+Bi(c)|0]=a.O.data[d];d=d+(-1)|0;}a.bY=a.bY+Bi(c)|0;d=0;while(d<Bi(c)){e=a.O.data;f=b+1|0;e[b]=Z(c,d);d=d+1|0;b=f;}}return a;}c=new I0;O(c);M(c);}
function ANi(a,b){a.bY=b;}
function AAA(a,b,c,d,e){var f,g,h,i,j;if(b>c){f=new BO;Bl(f,B(16));M(f);}while(b<c){g=d.data;h=e+1|0;i=a.O.data;j=b+1|0;g[e]=i[b];e=h;b=j;}}
function A6X(a,b,c,d,e){J7(a,b,c,d,e);return a;}
function AVp(a,b,c,d){IZ(a,b,c,d);return a;}
function J_(a){return a.bY;}
function BL(a){return T(a);}
function AXM(a,b){M0(a,b);}
function A7J(a,b,c){return Xo(a,b,c);}
function A7m(a,b,c){K0(a,b,c);return a;}
function A0A(a,b,c){return Qr(a,b,c);}
function A5$(a,b,c){return WK(a,b,c);}
function AUK(a,b,c){return UL(a,b,c);}
function A2G(a,b,c){return NB(a,b,c);}
function Fa(){D.call(this);}
function Gk(){Fa.call(this);this.f5=0;}
var Bds=null;var Bdt=null;function AQR(a){var b=new Gk();Lp(b,a);return b;}
function Lp(a,b){a.f5=b;}
function Ld(b,c){var d,e,f,g,h,i,j;if(c>=2&&c<=36){if(b!==null&&!Iz(b)){a:{d=0;e=0;switch(Z(b,0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==Bi(b)){b=new Ez;O(b);M(b);}while(e<Bi(b)){g=e+1|0;h=Ug(Z(b,e));if(h<0){i=new Ez;j=new S;V(j);Bl(i,T(H(H(j,B(17)),b)));M(i);}if(h>=c){i=new Ez;j=new S;V(j);Bl(i,T(H(H(Be(H(j,B(18)),c),B(12)),b)));M(i);}f=Bj(c,f)+h|0;if(f<0){if(g==Bi(b)&&f==(-2147483648)&&d)return (-2147483648);i=new Ez;j=new S;V(j);Bl(i,T(H(H(j,B(19)),b)));M(i);}e=g;}if(d)f= -f;return f;}b
=new Ez;Bl(b,B(20));M(b);}i=new Ez;b=new S;V(b);Bl(i,T(Be(H(b,B(21)),c)));M(i);}
function CY(b){var c;if(b>=(-128)&&b<=127){a:{if(Bdt===null){Bdt=J(Gk,256);c=0;while(true){if(c>=Bdt.data.length)break a;Bdt.data[c]=AQR(c-128|0);c=c+1|0;}}}return Bdt.data[b+128|0];}return AQR(b);}
function A3S(a){return a.f5;}
function Mx(a){var b;b=a.f5;return Tx(BcR(20),b,10).gk();}
function A28(a){return a.f5>>>4^a.f5<<28^a.f5<<8^a.f5>>>24;}
function A_o(a,b){if(a===b)return 1;return b instanceof Gk&&b.f5==a.f5?1:0;}
function AAB(a,b){return R(a.f5,b.f5);}
function TA(b){var c,d;if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;b=d>>>8;if(!b)b=d;else c=c|8;d=b>>>4;if(!d)d=b;else c=c|4;b=d>>>2;if(!b)b=d;else c=c|2;if(b>>>1)c=c|1;return (32-c|0)-1|0;}
function JF(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function Np(b,c){var d;d=c&31;return b<<d|b>>>(32-d|0);}
function A61(a,b){return AAB(a,b);}
function AQl(){Bds=F($rt_intcls());}
function IS(){I5.call(this);}
function Bdu(){var a=new IS();AXK(a);return a;}
function Bdv(a){var b=new IS();Qd(b,a);return b;}
function AXK(a){O(a);}
function Qd(a,b){Bl(a,b);}
function AOU(){IS.call(this);}
function Bdw(){var a=new AOU();AWP(a);return a;}
function Bdx(a){var b=new AOU();AUs(b,a);return b;}
function AWP(a){O(a);}
function AUs(a,b){Qd(a,b);}
function ALF(){IS.call(this);}
function Bdy(){var a=new ALF();A3w(a);return a;}
function Bdz(a){var b=new ALF();AUN(b,a);return b;}
function A3w(a){O(a);}
function AUN(a,b){Qd(a,b);}
function BD(){D8.call(this);}
function BdA(){var a=new BD();AZL(a);return a;}
function AZL(a){O(a);}
function B6(){BD.call(this);}
function BdB(){var a=new B6();ATl(a);return a;}
function Z2(a){var b=new B6();A$V(b,a);return b;}
function ATl(a){O(a);}
function A$V(a,b){Bl(a,b);}
function Da(){}
function Hi(){}
function Us(){}
function Qs(){}
function Ve(){}
function Rk(){}
function Wk(){}
function Pz(){}
function Lk(){}
function YL(){D.call(this);}
function AX7(a,b,c){a.Xo($rt_str(b),JE(c,"handleEvent"));}
function AYj(a,b,c){a.UN($rt_str(b),JE(c,"handleEvent"));}
function ATH(a,b){return a.HK(b);}
function AZa(a,b,c,d){a.KO($rt_str(b),JE(c,"handleEvent"),d?1:0);}
function A1E(a,b){return !!a.Xv(b);}
function AUF(a){return a.Jb();}
function AS0(a,b,c,d){a.NJ($rt_str(b),JE(c,"handleEvent"),d?1:0);}
function Bs(){D.call(this);}
var BdC=0;var BdD=null;var BdE=null;var BdF=null;var BdG=null;var BdH=null;var BdI=null;var BdJ=null;var BdK=null;var BdL=null;var BdM=null;var BdN=null;var BdO=null;var BdP=null;var BdQ=null;var BdR=null;var BdS=null;var BdT=null;var BdU=null;var BdV=null;var BdW=0;var BdX=0;var BdY=0.0;var BdZ=0.0;var Bd0=0;var Bd1=0;var Bd2=0;var Bd3=0;var Bd4=0;var Bd5=null;var Bd6=null;var Bd7=null;var Bd8=null;var Bd9=null;var Bd$=0;var Bd_=null;var Bea=null;var Beb=null;var Bec=null;var Bed=null;var Bee=null;var Bef=
Long_ZERO;var Beg=0;var Beh=0;var Bei=0;var Bej=null;var Bek=null;var Bel=null;var Bem=0;var Ben=0;var Beo=0;var Bep=null;var Beq=null;var Ber=null;var Bes=0;var Bet=null;var Beu=null;var Bev=0.0;var Bew=null;var Bex=0;var Bey=null;var Bez=null;var BeA=0;var BeB=null;var BeC=0;function Bd(){Bd=Bt(Bs);ATL();}
function BeD(){var a=new Bs();VS(a);return a;}
function VS(a){Bd();}
function PI(){Bd();return B(22);}
function Kf(b){Bd();if(IA(b,B(23)))b=Jv(b,1);return CP(BeE,b);}
function ACa(b){var c;Bd();c=Kf(b);if(c===null)return null;return A26(c,X7(B(24)));}
function ALm(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gr=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IZ=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaG(callback);return thread.suspend(function(){try{A3p(b,callback);}catch($e){callback.IZ($rt_exception($e));}});}
function A3p(b,c){var d,e;Bd();d=new XMLHttpRequest();e="arraybuffer";d.responseType=e;d.open("GET",$rt_ustr(b),!!1);b=new W7;b.vq=d;b.Ac=c;b=Cu(b,"stateChanged");d.onreadystatechange=b;d.send();}
function AAr(b,c){var d,e,f,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bd();BdE=b;d=$rt_str(BdE.getAttribute("style"));e=BdE;f=new S;V(f);if(d===null)d=B(3);d=T(H(H(f,d),B(25)));e.setAttribute("style",$rt_ustr(d));BdJ=window;BdD=BdJ.document;BdF=BdD.createElement("canvas");Bd0=b.clientWidth;Bd1=b.clientHeight;f=BdF;e=Bd0;f.width=e;f=BdF;e=Bd1;f.height=e;BdG=BdF.getContext("2d");BdF.setAttribute("id","deevis589723589");f=BdF;b.appendChild(f);BdH
=BdD.createElement("canvas");b=BdH;f=Bd0;b.width=f;b=BdH;f=Bd1;b.height=f;b=BdH;e=AEN();BdI=b.getContext("webgl2",e);if(BdI===null){b=new B6;c=new S;V(c);Bl(b,T(H(H(H(c,B(26)),$rt_str(window.navigator.userAgent)),B(27))));M(b);}X9(BdI);BdI.getExtension("EXT_texture_filter_anisotropic");b=BdJ;e=new W8;BdL=e;b.addEventListener("contextmenu",Cu(e,"handleEvent"));b=BdF;e=new Xc;BdM=e;b.addEventListener("mousedown",Cu(e,"handleEvent"));b=BdF;e=new Xd;BdN=e;b.addEventListener("mouseup",Cu(e,"handleEvent"));b=BdF;e
=new Xa;BdO=e;b.addEventListener("mousemove",Cu(e,"handleEvent"));b=BdJ;e=new Xb;BdP=e;b.addEventListener("keydown",Cu(e,"handleEvent"));b=BdJ;e=new W$;BdQ=e;b.addEventListener("keyup",Cu(e,"handleEvent"));b=BdJ;e=new W_;BdR=e;b.addEventListener("keypress",Cu(e,"handleEvent"));b=BdF;e=new W9;BdS=e;b.addEventListener("wheel",Cu(e,"handleEvent"));b=BdJ;e=new QA;b.addEventListener("blur",Cu(e,"handleEvent"));b=BdJ;e=new Qz;b.addEventListener("focus",Cu(e,"handleEvent"));ANX();$p=1;case 1:AJO();if(C()){break _;}$p
=2;case 2:ALm(c);if(C()){break _;}a:{try{AMb(BdK);break a;}catch($$e){$$je=Bg($$e);if($$je instanceof BW){f=$$je;}else{throw $$e;}}B9(f);}Beu=AYr();Ox(BdU);Ox(BdV);return;default:E$();}}C3().s(b,c,d,e,f,$p);}
function K3(b){Bd();BdI.enable(b);}
function J3(b){Bd();BdI.disable(b);}
function AH3(){var b,c;Bd();b=new V2;b.i0=BdI.createProgram();c=Bd4+1|0;Bd4=c;b.xp=c;return b;}
function OG(b){var c;Bd();c=new V6;c.jq=BdI.createShader(b);return c;}
function Sd(b,c){var d;Bd();d=BdI;b=b.i0;c=c.jq;d.attachShader(b,c);}
function UM(b,c){var d;Bd();d=BdI;b=b.i0;c=c.jq;d.detachShader(b,c);}
function WE(b){var c;Bd();c=BdI;b=b.jq;c.compileShader(b);}
function AAG(b){var c;Bd();c=BdI;b=b.i0;c.linkProgram(b);}
function O2(b,c){var d;Bd();d=BdI;b=b.jq;d.shaderSource(b,$rt_ustr(c));}
function Ub(b){var c;Bd();c=BdI;b=b.jq;return $rt_str(c.getShaderInfoLog(b));}
function AHv(b){var c;Bd();c=BdI;b=b.i0;return $rt_str(c.getProgramInfoLog(b));}
function Vh(b){var c;Bd();c=BdI;b=b.jq;return c.getShaderParameter(b,35713)!=1?0:1;}
function AGo(b){var c;Bd();c=BdI;b=b.i0;return c.getProgramParameter(b,35714)!=1?0:1;}
function Ti(b){var c;Bd();c=BdI;b=b.jq;c.deleteShader(b);}
function L7(){var b;Bd();b=new Wb;b.D0=BdI.createBuffer();return b;}
function Hh(b,c){var d;Bd();d=BdI;c=c!==null?c.D0:null;d.bindBuffer(b,c);}
function PD(b,c,d){var e;Bd();e=BdI;c=c;e.bufferData(b,c,d);}
function N8(b){Bd();BdI.enableVertexAttribArray(b);}
function Dq(b,c){var d;Bd();d=BdI;b=b.i0;d=d.getUniformLocation(b,$rt_ustr(c));if(d===null)b=null;else{b=new Xh;b.kA=d;}return b;}
function LV(b,c,d){var e;Bd();e=BdI;b=b.i0;e.bindAttribLocation(b,c,$rt_ustr(d));}
function Ih(b,c){var d;Bd();if(b!==null){d=BdI;b=b.kA;d.uniform1f(b,c);}}
function Ln(b,c,d,e){var f;Bd();if(b!==null){f=BdI;b=b.kA;f.uniform3f(b,c,d,e);}}
function Ul(b,c,d,e,f){var g,h;Bd();if(b!==null){g=BdI;h=b.kA;g.uniform4f(h,c,d,e,f);}}
function Ra(b,c){var d;Bd();if(b!==null){d=BdI;b=b.kA;d.uniform1i(b,c);}}
function Mg(b,c){var d,e;Bd();Bd9.set(c.data);if(b!==null){d=BdI;e=b.kA;b=Bd9;d.uniformMatrix4fv(e,!!0,b);}}
function V0(b){var c;Bd();if(b!==null&&Bd$!=b.xp){Bd$=b.xp;c=BdI;b=b.i0;c.useProgram(b);}}
function N$(b,c,d,e,f,g){Bd();BdI.vertexAttribPointer(b,c,d,!!e,f,g);}
function Pa(){var b;Bd();b=new SC;b.A3=BdI.createVertexArray();b.vS=0;return b;}
function RT(b){var c;Bd();c=BdI;b=b!==null?b.A3:null;c.bindVertexArray(b);}
function AEU(b){var c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bd();c=new ArrayBuffer(b.data.length);(new Uint8Array(c)).set(b.data);$p=1;case 1:$z=AIu(c);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(b,c,$p);}
function AIu(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gr=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IZ=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaG(callback);return thread.suspend(function(){try{AWR(b,callback);}catch($e){callback.IZ($rt_exception($e));}});}
function AWR(b,c){var d,e,f;Bd();d=BdD.createElement("img");e=new QD;e.f1=d;e.yc=c;d.addEventListener("load",Cu(e,"handleEvent"));f=new QC;f.Em=d;f.E4=c;d.addEventListener("error",Cu(f,"handleEvent"));e=$rt_str(ANI(b,"image/png"));if(e===null)CM(c,null);else{b=$rt_ustr(e);d.src=b;}}
function Lq(){var b,c,d;Bd();b=BdE.clientWidth;if(b!=Bd0){c=BdF;d=b;c.width=d;c=BdH;d=b;c.width=d;Bd0=b;}return b;}
function MD(){var b,c,d;Bd();b=BdE.clientHeight;if(b!=Bd1){c=BdF;d=b;c.height=d;c=BdH;d=b;c.height=d;Bd1=b;}return b;}
function Kv(){Bd();return Long_fromInt(1073741824);}
function JZ(){Bd();return Long_fromInt(1073741824);}
function Kc(){Bd();return Long_ZERO;}
function UI(b){Bd();return b.byteLength;}
function T4(b){Bd();return b<=Bez.data.length&&b>=0?Bez.data[b]:(-1);}
function ACB(b,c){var d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bd();d=LG(b,47);if(d>0){e=Ev(b,0,d);$p=2;continue _;}f=new Uint8Array(c.data.length);f.set(c.data);e=BeF;d=0;f=f.buffer;$p=1;case 1:AXR(e,b,d,f);if(C()){break _;}return;case 2:AJb(e);if(C()){break _;}f=new Uint8Array(c.data.length);f.set(c.data);e=BeF;d=0;f=f.buffer;$p=1;continue _;default:E$();}}C3().s(b,c,d,e,f,$p);}
function ALG(b){var c,d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bd();c=BeF;$p=1;case 1:$z=A_K(c,b);if(C()){break _;}b=$z;if(b===null)d=null;else{d=$rt_createByteArray(b.byteLength);e=d.data;b=new Uint8Array(b);f=0;g=e.length;while(f<g){e[f]=b[f]<<24>>24;f=f+1|0;}}return d;default:E$();}}C3().s(b,c,d,e,f,g,$p);}
function ANo(b,c){var d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bd();d=BeF;$p=1;case 1:$z=A_K(d,b);if(C()){break _;}d=$z;e=LG(c,47);if(e<=0){f=BeF;e=0;$p=2;continue _;}f=Ev(c,0,e);$p=4;continue _;case 2:AXR(f,c,e,d);if(C()){break _;}c=BeF;$p=3;case 3:A5w(c,b);if(C()){break _;}return;case 4:AJb(f);if(C()){break _;}f=BeF;e=0;$p=2;continue _;default:E$();}}C3().s(b,c,d,e,f,$p);}
function AL4(b){var c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bd();c=BeF;$p=1;case 1:A5w(c,b);if(C()){break _;}return;default:E$();}}C3().s(b,c,$p);}
function V8(){Bd();return BdK;}
function RO(){Bd();return Bed;}
function MP(){Bd();return BdU;}
function Ms(){Bd();if(Long_gt(Long_sub(B_(),Bef),Long_fromInt(3000))&&Beh&&!(document.pointerLockElement!=null?1:0)){BdF.requestPointerLock();if(document.pointerLockElement!=null?1:0)Beh=0;}}
function P3(){Bd();return Bee;}
function QE(b){Bd();return b.which;}
function S8(b){Bd();return T4(b);}
function NO(){Bd();return BdV;}
function SW(b){Bd();Bd3=b;return b;}
function Ho(){Bd();return Bd_;}
function JR(){Bd();return Bea;}
function WG(b){Bd();URL.revokeObjectURL($rt_ustr(b));}
function VQ(){Bd();return Beg;}
function MY(b){Bd();Beg=b;return b;}
function PZ(){Bd();return Bef;}
function ATL(){var b,c;BdC=0;BdD=null;BdE=null;BdF=null;BdG=null;BdH=null;BdI=null;BdJ=null;BdK=null;BdL=null;BdM=null;BdN=null;BdO=null;BdP=null;BdQ=null;BdR=null;BdS=null;BdT=J(B4,0);BdU=QX();BdV=QX();BdW=0;BdX=0;BdY=0.0;BdZ=0.0;Bd0=0;Bd1=0;Bd2=0;Bd3=1;Bd4=0;Bd5=$rt_createIntArray(4);Bd6=new Uint8Array(new ArrayBuffer(4194304));Bd7=new Float32Array(4);Bd8=new Float32Array(9);Bd9=new Float32Array(16);Bd$=(-1);Bd_=null;Bea=null;Beb=null;Bec=null;Bed=$rt_createBooleanArray(8);Bee=$rt_createBooleanArray(256);Bef
=Long_ZERO;Beg=0;Beh=0;Bei=0;Bej=Ga();Bek=Ga();Bel=null;Bem=0;Ben=0;Beo=0;Bep=QX();Beq=null;Ber=null;Bes=0;Bet=De();Beu=null;Bev=0.029999999329447746;Bew=De();Bex=0;b=J(B4,256);c=b.data;c[0]=B(28);c[1]=B(29);c[2]=B(30);c[3]=B(31);c[4]=B(32);c[5]=B(33);c[6]=B(34);c[7]=B(35);c[8]=B(36);c[9]=B(37);c[10]=B(38);c[11]=B(2);c[12]=B(39);c[13]=B(40);c[14]=B(41);c[15]=B(42);c[16]=B(43);c[17]=B(44);c[18]=B(45);c[19]=B(46);c[20]=B(47);c[21]=B(48);c[22]=B(49);c[23]=B(50);c[24]=B(51);c[25]=B(52);c[26]=B(53);c[27]=B(54);c[28]
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
function X9(b){window.currentContext=b;}
function ANX(){if (!ANX.$native){
ANX.$native=function(){return (function(){window.eagsFileChooser = {
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
};})();};ANX=ANX.$native;}return ANX();}
function AEN(){return {antialias:false,depth:true,powerPreference:"high-performance",desynchronized:false,preserveDrawingBuffer:false,premultipliedAlpha:false,alpha:false};}
function ANI(b,c){return URL.createObjectURL(new Blob([b],{type:c}));}
function ANC(b){if(b.commit)b.commit();}
function SX(){}
function JD(){}
function NZ(){}
function HD(){D.call(this);this.we=null;}
function BeG(a){var b=new HD();Wf(b,a);return b;}
function Wf(a,b){if(b!==null){a.we=b;return;}b=new EE;O(b);M(b);}
function ABi(){HD.call(this);this.x2=null;}
function A8_(){var a=new ABi();A21(a);return a;}
function A21(a){var b;a.we=a;b=new Lg;GE(b,16);a.x2=b;a.we=a.x2;}
function AK7(a){return;}
function AEy(a,b,c,d){var e,f;if(c>=0){e=b.data.length;if(c<=e&&d>=0&&d<=(e-c|0)){if(!d)return;IZ(a.x2,b,c,d);return;}}f=new BO;O(f);M(f);}
function Lt(){var a=this;HD.call(a);a.mC=null;a.FR=0;a.yi=0;}
function AFy(a){var $$je;a:{if(a.mC===null)Ke(a);else{try{AK7(a.mC);break a;}catch($$e){$$je=Bg($$e);if($$je instanceof BW){}else{throw $$e;}}Ke(a);}}}
function Hq(a,b){if(b===null)b=Ur(null);Yt(a,b);}
function SQ(a){Hq(a,B(158));if(a.yi)AFy(a);}
function AAE(a,b){ABR(a,Ur(b));}
function ABR(a,b){Hq(a,b);SQ(a);}
function Ke(a){a.FR=1;}
function ARZ(a,b){AAn(a,b,0,b.data.length);}
function AAn(a,b,c,d){var $$je;a:{if(a.mC===null)Ke(a);else{try{AEy(a.mC,b,c,d);break a;}catch($$e){$$je=Bg($$e);if($$je instanceof BW){}else{throw $$e;}}Ke(a);}}}
function Yt(a,b){ARZ(a,Nx(b));}
function AFc(){D.call(this);}
function BeH(){var a=new AFc();AV9(a);return a;}
function AV9(a){return;}
function AFR(){D.call(this);}
function LZ(){}
function Ip(){var a=this;D.call(a);a.cB=null;a.cq=0;a.bF=0;a.bf=null;a.A=null;a.dY=null;a.f=null;a.c6=null;a.k3=null;a.bs=0;a.bo=null;a.e_=null;a.D=null;a.it=null;a.eV=null;a.bN=0;a.c$=0;a.Hj=null;a.F1=0;a.n0=null;a.h9=0;a.Gw=null;a.ce=null;a.o=null;a.ym=null;a.Da=null;a.BI=null;a.gS=0;a.lD=null;a.gT=Long_ZERO;a.bp=0;a.cn=0;a.cU=0;a.dB=Long_ZERO;}
var BeI=null;var BeJ=0;var Bc$=null;function AIp(a){var b,c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.o=A_$(a);b=new KI;c=a.o;BeK=De();b.zm=De();b.kB=Rh(1);b.hd=WP(1048576);b.l1=WP(1048576);b.Cf=Ci();b.sW=0;b.DZ=0;b.wK=c;a.bo=b;c=new Wh;d=a.o;b=B(159);e=a.bo;$p=1;case 1:AOJ(c,d,b,e);if(C()){break _;}a.e_=c;$p=2;case 2:Yq(a);if(C()){break _;}a.ym=new Qm;Ei(a,B(160));Ba(3553);Bd();BdI.clearDepth((-1.0));Ba(2929);HL(515);Ba(3008);Sx(516,
0.10000000149011612);BdI.cullFace(1029);C_(5889);C9();C_(5888);Ei(a,B(161));G9(a.bo,a.BI);G9(a.bo,a.Da);G9(a.bo,Bau());G9(a.bo,BcC());G9(a.bo,AVH(0));G9(a.bo,AVH(1));a.dY=BaT(a,a.bo);Hk(0,0,a.cq,a.bF);e=Bc$;b=LM();c=B(162);d=B(163);$p=3;case 3:ARY(e,b,c,d);if(C()){break _;}b=new O1;c=a.A;d=a.bo;b.cD=J(J4,3);b.sw=new DB;if(c!==null)b.mW=c;b.jf=d;f=0;while(f<3){b.cD.data[f]=Ci();f=f+1|0;}a.c6=b;Ei(a,B(164));b=new Nu;Ng(b);b.g8=Ci();b.vu=new DB;b.FW=null;b.rX=0;b.IJ=1.0;b.b2=a;a.n0=b;return;default:E$();}}C3().s(a,
b,c,d,e,f,$p);}
function Yq(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=FK(a.cq,a.bF);c=b.fM;d=b.fJ;D4(16640);C_(5889);C9();Iq(0.0,c,d,0.0,1000.0,3000.0);C_(5888);C9();Bw(0.0,0.0,(-2000.0));Hk(0,0,a.cq,a.bF);HC(0.0,0.0,0.0,0.0);Bc(2896);Bc(2912);Ba(3553);BA();e=BeL;f=3553;b=a.bo;g=B(165);$p=1;case 1:$z=AHu(b,g);if(C()){break _;}d=$z;Cp(f,d);BT(1.0,1.0,1.0,1.0);Bz(e);ER(e,4210752);G(e,0.0,a.bF,0.0,0.0,a.bF/32.0
+0.0);G(e,a.cq,a.bF,0.0,a.cq/32.0,a.bF/32.0+0.0);G(e,a.cq,0.0,0.0,a.cq/32.0,0.0);G(e,0.0,0.0,0.0,0.0,0.0);Br(e);Ba(3008);Sx(516,0.10000000149011612);Cy(a.e_,B(166),8,(a.bF/2|0)-16|0,(-1));return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ADV(a,b){var c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.D instanceof Rz)return;if(a.D!==null){c=a.D;$p=1;continue _;}if(b===null&&a.A===null)b=LM();else if(b===null&&a.f.bT<=0){b=new Mm;DQ(b);}a.D=b;if(b===null){$p=2;continue _;}W3(a);c=FK(a.cq,a.bF);d=c.fM;e=c.fJ;$p=3;continue _;case 1:c.pv();if(C()){break _;}if(b===null&&a.A===null)b=LM();else if(b===null&&a.f.bT<=0){b=new Mm;DQ(b);}a.D=b;if(b===null){$p=2;continue _;}W3(a);c
=FK(a.cq,a.bF);d=c.fM;e=c.fJ;$p=3;continue _;case 2:AFj(a);if(C()){break _;}return;case 3:AP9(b,a,d,e);if(C()){break _;}a.h9=0;return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function ARY(a,b,c,d){var e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=new UJ;DQ(e);e.qx=Ci();e.Eu=b;e.Az=c;e.Ay=d;$p=1;case 1:ADV(a,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function Ei(a,b){var c,d,e,f;BV();Bd();c=BdI.getError();if(c==(-144))c=(-144);if(c){a:{switch(c){case -144:break;case 1280:d=B(167);break a;case 1281:d=B(168);break a;case 1282:d=B(169);break a;case 1285:d=B(170);break a;default:d=B(171);break a;}d=B(172);}Cg(Dz(),B(173));e=Dz();f=new S;V(f);Cg(e,T(H(H(f,B(174)),b)));b=Dz();e=new S;V(e);Cg(b,T(H(H(Be(e,c),B(12)),d)));}}
function Yk(a){var b,c,d,e,f,g,h,i,j,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.gS=1;$p=1;case 1:AIp(a);if(C()){break _;}b=B_();c=0;if(!a.gS)return;BeM=0;BeN=0;if(!a.bs)FQ(a.bf);else{d=a.bf.cY;FQ(a.bf);a.bf.cY=d;}e=0;if(e<a.bf.i7){a.bN=a.bN+1|0;$p=2;continue _;}Ei(a,B(175));if(a.bs)a.bf.cY=1.0;Ba(3553);if(a.A!==null){f=a.A;$p=3;continue _;}if(!a.h9){GS(a.cB,a.bf.cY);f=a.eV;d=a.bf.cY;$p
=4;continue _;}if(BN(33)&&BN(7))FZ(a);else a.gT=EG();$p=5;continue _;case 2:AFC(a);if(C()){break _;}e=e+1|0;if(e<a.bf.i7){a.bN=a.bN+1|0;continue _;}Ei(a,B(175));if(a.bs)a.bf.cY=1.0;Ba(3553);if(a.A!==null){f=a.A;$p=3;continue _;}if(!a.h9){GS(a.cB,a.bf.cY);f=a.eV;d=a.bf.cY;$p=4;continue _;}if(BN(33)&&BN(7))FZ(a);else a.gT=EG();$p=5;continue _;case 3:$z=AIm(f);if(C()){break _;}g=$z;if(g){f=a.A;continue _;}if(!a.h9){GS(a.cB,a.bf.cY);f=a.eV;d=a.bf.cY;$p=4;continue _;}if(BN(33)&&BN(7))FZ(a);else a.gT=EG();$p=5;continue _;case 4:AFN(f,
d);if(C()){break _;}if(BN(33)&&BN(7))FZ(a);else a.gT=EG();$p=5;case 5:XD();if(C()){break _;}$p=6;case 6:AUW();if(C()){break _;}if(!(Lq()==a.cq&&MD()==a.bF)){a.cq=BdF.width;a.bF=BdF.height;if(a.cq<=0)a.cq=1;if(a.bF<=0)a.bF=1;g=a.cq;h=a.bF;if(g<=0)g=1;if(h<=0)h=1;a.cq=g;a.bF=h;if(a.D!==null){f=FK(g,h);h=f.fM;g=f.fJ;f=a.D;$p=8;continue _;}}if(a.o.mt){try{i=Long_fromInt(5);$p=7;continue _;}catch($$e){$$je=Bg($$e);if($$je instanceof E1){f=$$je;}else{throw $$e;}}f.nC();}Ei(a,B(176));c=c+1|0;a.bs=a.D!==null&&a.D.oc()
?1:0;while(true){j=B_();i=Long_add(b,Long_fromInt(1000));if(Long_lt(j,i))break;f=new S;V(f);f=H(Be(f,c),B(177));Ts();a.lD=T(H(Be(f,BeO),B(178)));BeO=0;c=0;b=i;}if(!a.gS)return;BeM=0;BeN=0;if(!a.bs)FQ(a.bf);else{d=a.bf.cY;FQ(a.bf);a.bf.cY=d;}e=0;if(e<a.bf.i7){a.bN=a.bN+1|0;$p=2;continue _;}Ei(a,B(175));if(a.bs)a.bf.cY=1.0;Ba(3553);if(a.A!==null){f=a.A;$p=3;continue _;}if(!a.h9){GS(a.cB,a.bf.cY);f=a.eV;d=a.bf.cY;$p=4;continue _;}if(BN(33)&&BN(7))FZ(a);else a.gT=EG();$p=5;continue _;case 7:a:{try{AKE(i);if(C())
{break _;}break a;}catch($$e){$$je=Bg($$e);if($$je instanceof E1){f=$$je;}else{throw $$e;}}f.nC();}Ei(a,B(176));c=c+1|0;a.bs=a.D!==null&&a.D.oc()?1:0;while(true){j=B_();i=Long_add(b,Long_fromInt(1000));if(Long_lt(j,i))break;f=new S;V(f);f=H(Be(f,c),B(177));Ts();a.lD=T(H(Be(f,BeO),B(178)));BeO=0;c=0;b=i;}if(!a.gS)return;BeM=0;BeN=0;if(!a.bs)FQ(a.bf);else{d=a.bf.cY;FQ(a.bf);a.bf.cY=d;}e=0;if(e<a.bf.i7){a.bN=a.bN+1|0;$p=2;continue _;}Ei(a,B(175));if(a.bs)a.bf.cY=1.0;Ba(3553);if(a.A!==null){f=a.A;$p=3;continue _;}if
(!a.h9){GS(a.cB,a.bf.cY);f=a.eV;d=a.bf.cY;$p=4;continue _;}if(BN(33)&&BN(7))FZ(a);else a.gT=EG();$p=5;continue _;case 8:AP9(f,a,h,g);if(C()){break _;}if(a.o.mt){try{i=Long_fromInt(5);$p=7;continue _;}catch($$e){$$je=Bg($$e);if($$je instanceof E1){f=$$je;}else{throw $$e;}}f.nC();}Ei(a,B(176));c=c+1|0;a.bs=a.D!==null&&a.D.oc()?1:0;while(true){j=B_();i=Long_add(b,Long_fromInt(1000));if(Long_lt(j,i))break;f=new S;V(f);f=H(Be(f,c),B(177));Ts();a.lD=T(H(Be(f,BeO),B(178)));BeO=0;c=0;b=i;}if(!a.gS)return;BeM=0;BeN=
0;if(!a.bs)FQ(a.bf);else{d=a.bf.cY;FQ(a.bf);a.bf.cY=d;}e=0;if(e<a.bf.i7){a.bN=a.bN+1|0;$p=2;continue _;}Ei(a,B(175));if(a.bs)a.bf.cY=1.0;Ba(3553);if(a.A!==null){f=a.A;$p=3;continue _;}if(!a.h9){GS(a.cB,a.bf.cY);f=a.eV;d=a.bf.cY;$p=4;continue _;}if(BN(33)&&BN(7))FZ(a);else a.gT=EG();$p=5;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function FZ(a){var b,c,d,e,f,g,h,i,j,k,l;if(Long_eq(a.gT,Long_fromInt(-1)))a.gT=EG();b=EG();c=BeI.data;d=BeJ;BeJ=d+1|0;c[d&(BeI.data.length-1|0)]=Long_sub(b,a.gT);a.gT=b;D4(256);C_(5889);C9();Iq(0.0,a.cq,a.bF,0.0,1000.0,3000.0);C_(5888);C9();Bw(0.0,0.0,(-2000.0));Bc(3553);BA();e=BeL;Gm(e,7);ER(e,538968064);Bf(e,0.0,a.bF-100|0,0.0);Bf(e,0.0,a.bF,0.0);Bf(e,BeI.data.length,a.bF,0.0);Bf(e,BeI.data.length,a.bF-100|0,0.0);Br(e);f=Long_ZERO;d=0;while(d<BeI.data.length){f=Long_add(f,BeI.data[d]);d=d+1|0;}d=Long_div(Long_div(f,
Long_fromInt(200000)),Long_fromInt(BeI.data.length)).lo;Gm(e,7);ER(e,541065216);Bf(e,0.0,a.bF-d|0,0.0);Bf(e,0.0,a.bF,0.0);Bf(e,BeI.data.length,a.bF,0.0);Bf(e,BeI.data.length,a.bF-d|0,0.0);Br(e);Gm(e,1);g=0;while(g<BeI.data.length){h=(((g-BeJ|0)&(BeI.data.length-1|0))*255|0)/BeI.data.length|0;i=Bj(h,h)/255|0;d=Bj(i,i)/255|0;j=Bj(d,d)/255|0;ER(e,(((-16777216)+(Bj(j,j)/255|0)|0)+(d*256|0)|0)+(h*4096|0)|0);k=Long_div(BeI.data[g],Long_fromInt(200000));l=g+0.5;Bf(e,l,Long_toNumber(Long_sub(Long_fromInt(a.bF),k))+
0.5,0.0);Bf(e,l,a.bF+0.5,0.0);g=g+1|0;}Br(e);Ba(3553);}
function AFj(a){var b,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(Oj()&&!a.bp){a.bp=1;YB(a.ym);b=null;$p=1;continue _;}return;case 1:ADV(a,b);if(C()){break _;}a.cn=a.bN+10000|0;return;default:E$();}}C3().s(a,b,$p);}
function W3(a){if(a.bp){if(a.f!==null)ARI(a.f);a.bp=0;AFA(a.ym);}}
function ALa(a){var b,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.D!==null)return;b=Bcq();$p=1;case 1:ADV(a,b);if(C()){break _;}return;default:E$();}}C3().s(a,b,$p);}
function AAH(a,b,c){var d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.cB.DW&&!(!b&&a.c$>0)){if(c&&a.ce!==null&&!a.ce.k_&&!b){d=a.ce.h_;e=a.ce.ia;f=a.ce.ib;g=a.cB;b=a.ce.hM;$p=1;continue _;}ALR(a.cB);}return;case 1:YO(g,d,e,f,b);if(C()){break _;}g=a.c6;b=a.ce.hM;$p=2;case 2:Y3(g,d,e,f,b);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AB3(a,b){var c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(!b&&a.c$>0)){if(!b)Pm(a.eV.iL);a:{if(a.ce!==null){if(a.ce.k_!=1){if(a.ce.k_)break a;c=a.ce.h_;d=a.ce.ia;e=a.ce.ib;f=a.ce.hM;L();g=BeP.data;h=a.A;$p=1;continue _;}if(!b){h=a.f;i=a.ce.nD;$p=2;continue _;}if(b==1)Vr(a.f,a.ce.nD);}else if(!b&&!(a.cB instanceof Du))a.c$=10;}if
(b==1){h=D9(a.f.K);if(h!==null){d=h.p;i=a.A;j=a.f;$p=5;continue _;}}}return;case 1:$z=ACx(h,c,d,e);if(C()){break _;}k=$z;j=g[k];if(!b){h=a.A;k=a.ce.hM;$p=4;continue _;}l=D9(a.f.K);h=a.A;$p=3;continue _;case 2:ADw(h,i);if(C()){break _;}if(b==1)Vr(a.f,a.ce.nD);if(b==1){h=D9(a.f.K);if(h!==null){d=h.p;i=a.A;j=a.f;$p=5;continue _;}}return;case 3:$z=ACx(h,c,d,e);if(C()){break _;}k=$z;if(k>0){h=BeP.data[k];i=a.A;j=a.f;$p=6;continue _;}if(l===null)return;m=l.p;h=a.f;i=a.A;$p=8;continue _;case 4:ABL(h,c,d,e,k);if(C())
{break _;}if(j===BeQ&&a.f.AL<100){if(b==1){h=D9(a.f.K);if(h!==null){d=h.p;i=a.A;j=a.f;$p=5;continue _;}}return;}h=a.cB;$p=7;continue _;case 5:b:{$z=ABg(h,i,j);if(C()){break _;}i=$z;if(i===h){if(i===null)break b;if(i.p==d)break b;}a.f.K.bh.data[a.f.K.bL]=i;AM$(a.eV.iL);if(!i.p)a.f.K.bh.data[a.f.K.bL]=null;}return;case 6:$z=h.lG(i,c,d,e,j);if(C()){break _;}k=$z;if(k)return;if(l===null)return;m=l.p;h=a.f;i=a.A;$p=8;continue _;case 7:AE4(h,c,d,e);if(C()){break _;}if(b==1){h=D9(a.f.K);if(h!==null){d=h.p;i=a.A;j=
a.f;$p=5;continue _;}}return;case 8:$z=AJh(l,h,i,c,d,e,f);if(C()){break _;}c=$z;if(c)Pm(a.eV.iL);if(!l.p)a.f.K.bh.data[a.f.K.bL]=null;else if(l.p!=m)AGM(a.eV.iL);if(b==1){h=D9(a.f.K);if(h!==null){d=h.p;i=a.A;j=a.f;$p=5;continue _;}}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AHM(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.ce===null)return;b=a.A;c=a.ce.h_;d=a.ce.ia;e=a.ce.ib;$p=1;case 1:$z=ACx(b,c,d,e);if(C()){break _;}c=$z;L();if(c==BeR.b)c=BeS.b;if(c==BeT.b)c=BeU.b;if(c==BeQ.b)c=BeV.b;ARj(a.f.K,c,a.cB instanceof Du);return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AFC(a){var b,c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AKy(a.n0);if(a.f!==null){b=ABr(a.A);if(b instanceof II)MW(b,EX(a.f.d|0)>>4,EX(a.f.e|0)>>4);}if(!a.bs&&a.A!==null){b=a.cB;$p=2;continue _;}c=3553;d=a.bo;b=B(179);$p=1;case 1:$z=AHu(d,b);if(C()){break _;}e=$z;Cp(c,e);if(a.D===null&&a.f!==null&&a.f.bT<=0){b=null;$p=3;continue _;}if(a.D!==null&&!a.D.pT){if(a.D!==null)a.cn=a.bN+10000|0;if(a.D!==null){b=a.D;$p
=4;continue _;}if(a.A!==null){a.A.i3=a.o.jY;if(!a.bs){b=a.eV;$p=7;continue _;}if(!a.bs)HW(a.dY);if(!a.bs){b=a.A;$p=13;continue _;}if(!a.bs&&!GI(a)){b=a.A;$p=19;continue _;}if(!a.bs){b=a.A;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;}if(!a.bs){b=a.c6;$p=21;continue _;}}a.dB=B_();return;}a:while(true){if(!FA()){if(a.c$>0)a.c$=a.c$-1|0;while(true){if(!DU()){if(a.D===null){if(B$(0)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B$(1)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c
=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bh(),CU());if(!CU())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bh()==1)break;if(a.cB instanceof Du){Bh();Bh();}if(Bh()==33&&BN(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bh()==a.o.ft.bI){b=E6(a.f.K);$p=17;continue _;}if(Bh()==a.o.gj.bI){b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bh()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bh()!=a.o.f$.bI)continue;Ea(a.o,4,!BN(42)&&!BN(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B_(),a.dB),
Long_fromInt(200)))continue;c=G3();if(c)F7(a.f.K,c);b:{if(a.D!==null){if(a.D===null)break b;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx()){$p=8;continue _;}if(!CV()&&Cx()){c=0;$p=11;continue _;}if(CV()==1&&Cx()){c=1;$p=14;continue _;}if(CV()==2&&Cx())break a;}}$p=16;continue _;case 2:AI3(b);if(C()){break _;}c=3553;d=a.bo;b=B(179);$p=1;continue _;case 3:ADV(a,b);if(C()){break _;}if(a.D!==null&&!a.D.pT){if(a.D!==null)a.cn=a.bN+10000|0;if(a.D!==null){b=a.D;$p=4;continue _;}if(a.A!==null){a.A.i3=a.o.jY;if(!a.bs){b
=a.eV;$p=7;continue _;}if(!a.bs)HW(a.dY);if(!a.bs){b=a.A;$p=13;continue _;}if(!a.bs&&!GI(a)){b=a.A;$p=19;continue _;}if(!a.bs){b=a.A;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;}if(!a.bs){b=a.c6;$p=21;continue _;}}a.dB=B_();return;}c:while(true){if(!FA()){if(a.c$>0)a.c$=a.c$-1|0;while(true){if(!DU()){if(a.D===null){if(B$(0)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B$(1)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,
Bh(),CU());if(!CU())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bh()==1)break;if(a.cB instanceof Du){Bh();Bh();}if(Bh()==33&&BN(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bh()==a.o.ft.bI){b=E6(a.f.K);$p=17;continue _;}if(Bh()==a.o.gj.bI){b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bh()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bh()!=a.o.f$.bI)continue;Ea(a.o,4,!BN(42)&&!BN(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B_(),a.dB),Long_fromInt(200)))continue;c=G3();if(c)F7(a.f.K,c);d:{if
(a.D!==null){if(a.D===null)break d;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx()){$p=8;continue _;}if(!CV()&&Cx()){c=0;$p=11;continue _;}if(CV()==1&&Cx()){c=1;$p=14;continue _;}if(CV()==2&&Cx())break c;}}$p=16;continue _;case 4:AG8(b);if(C()){break _;}if(a.D!==null)a.D.rD();if(a.A!==null){a.A.i3=a.o.jY;if(!a.bs){b=a.eV;$p=7;continue _;}if(!a.bs)HW(a.dY);if(!a.bs){b=a.A;$p=13;continue _;}if(!a.bs&&!GI(a)){b=a.A;$p=19;continue _;}if(!a.bs){b=a.A;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;}if(!a.bs){b=a.c6;$p
=21;continue _;}}a.dB=B_();return;case 5:ZA(b);if(C()){break _;}while(true){while(true){if(!FA()){if(a.c$>0)a.c$=a.c$-1|0;while(true){if(!DU()){if(a.D===null){if(B$(0)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B$(1)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bh(),CU());if(!CU())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bh()==1)break;if(a.cB instanceof Du){Bh();Bh();}if(Bh()==33&&BN(6)){a.o.cC=a.o.cC?0:1;a.cU=
a.cU?0:1;}if(Bh()==a.o.ft.bI){b=E6(a.f.K);$p=17;continue _;}if(Bh()==a.o.gj.bI){b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bh()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bh()!=a.o.f$.bI)continue;Ea(a.o,4,!BN(42)&&!BN(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B_(),a.dB),Long_fromInt(200)))continue;else break;}c=G3();if(c)F7(a.f.K,c);if(a.D!==null){if(a.D===null)continue;else{b=a.D;continue _;}}if(!a.bp&&Cx()){$p=8;continue _;}if(!CV()&&Cx()){c=0;$p=11;continue _;}if(CV()==1&&Cx()){c=1;$p
=14;continue _;}if(CV()!=2)continue;if(!Cx())continue;else break;}$p=16;continue _;case 6:ASA(b);if(C()){break _;}while(true){e=0;while(e<9){if(Bh()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bh()==a.o.f$.bI)Ea(a.o,4,!BN(42)&&!BN(54)?1:(-1));while(true){if(!DU()){if(a.D===null){if(B$(0)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B$(1)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bh(),CU());if(!CU())continue;else break;}if(a.D!==null)
{b=a.D;continue _;}if(Bh()==1)break;if(a.cB instanceof Du){Bh();Bh();}if(Bh()==33&&BN(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bh()==a.o.ft.bI){b=E6(a.f.K);$p=17;continue _;}if(Bh()!=a.o.gj.bI)continue;else{b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}}$p=9;continue _;case 7:AIP(b);if(C()){break _;}if(!a.bs)HW(a.dY);if(!a.bs){b=a.A;$p=13;continue _;}if(!a.bs&&!GI(a)){b=a.A;$p=19;continue _;}if(a.bs){if(a.bs){a.dB=B_();return;}b=a.c6;$p=21;continue _;}b=a.A;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;case 8:AFj(a);if
(C()){break _;}while(true){while(true){if(!FA()){if(a.c$>0)a.c$=a.c$-1|0;while(true){if(!DU()){if(a.D===null){if(B$(0)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B$(1)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bh(),CU());if(!CU())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bh()==1)break;if(a.cB instanceof Du){Bh();Bh();}if(Bh()==33&&BN(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bh()==a.o.ft.bI){b=E6(a.f.K);$p=17;continue _;}if
(Bh()==a.o.gj.bI){b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bh()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bh()!=a.o.f$.bI)continue;Ea(a.o,4,!BN(42)&&!BN(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B_(),a.dB),Long_fromInt(200)))continue;else break;}c=G3();if(c)F7(a.f.K,c);if(a.D!==null){if(a.D===null)continue;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx()){continue _;}if(!CV()&&Cx()){c=0;$p=11;continue _;}if(CV()==1&&Cx()){c=1;$p=14;continue _;}if(CV()!=2)continue;if(!Cx())continue;else break;}$p
=16;continue _;case 9:ALa(a);if(C()){break _;}while(true){if(a.cB instanceof Du){Bh();Bh();}if(Bh()==33&&BN(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bh()==a.o.ft.bI){b=E6(a.f.K);$p=17;continue _;}if(Bh()==a.o.gj.bI){b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bh()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bh()==a.o.f$.bI)Ea(a.o,4,!BN(42)&&!BN(54)?1:(-1));while(true){if(!DU()){if(a.D===null){if(B$(0)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B$(1)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&
a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bh(),CU());if(!CU())continue;else break;}if(a.D!==null){b=a.D;$p=6;continue _;}if(Bh()!=1)continue;else break;}continue _;case 10:AAH(a,c,e);if(C()){break _;}if(a.D!==null)a.cn=a.bN+10000|0;if(a.D!==null){b=a.D;$p=4;continue _;}if(a.A!==null){a.A.i3=a.o.jY;if(!a.bs){b=a.eV;$p=7;continue _;}if(!a.bs)HW(a.dY);if(!a.bs){b=a.A;$p=13;continue _;}if(!a.bs&&!GI(a)){b=a.A;$p=19;continue _;}if(!a.bs){b=a.A;c=K(a.f.d);e=K(a.f.j);f
=K(a.f.e);$p=18;continue _;}if(!a.bs){b=a.c6;$p=21;continue _;}}a.dB=B_();return;case 11:AB3(a,c);if(C()){break _;}a.cn=a.bN;while(true){if(CV()==1&&Cx()){c=1;$p=14;continue _;}if(CV()==2&&Cx()){$p=16;continue _;}while(true){while(true){if(!FA()){if(a.c$>0)a.c$=a.c$-1|0;while(true){if(!DU()){if(a.D===null){if(B$(0)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B$(1)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bh(),CU());if
(!CU())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bh()==1)break;if(a.cB instanceof Du){Bh();Bh();}if(Bh()==33&&BN(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bh()==a.o.ft.bI){b=E6(a.f.K);$p=17;continue _;}if(Bh()==a.o.gj.bI){b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bh()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bh()!=a.o.f$.bI)continue;Ea(a.o,4,!BN(42)&&!BN(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B_(),a.dB),Long_fromInt(200)))continue;else break;}c=G3();if(c)F7(a.f.K,c);if(a.D
===null)break;if(a.D===null)continue;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx())break;if(CV())continue;if(!Cx())continue;else{c=0;continue _;}}$p=8;continue _;case 12:AB3(a,c);if(C()){break _;}a.cn=a.bN;if(B$(1)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}c=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;case 13:APg(b);if(C()){break _;}if(!a.bs&&!GI(a)){b=a.A;$p=19;continue _;}if(a.bs){if(a.bs){a.dB=B_();return;}b=a.c6;$p=21;continue _;}b=a.A;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;case 14:AB3(a,
c);if(C()){break _;}a.cn=a.bN;while(true){if(CV()==2&&Cx()){$p=16;continue _;}while(true){while(true){if(!FA()){if(a.c$>0)a.c$=a.c$-1|0;while(true){if(!DU()){if(a.D===null){if(B$(0)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B$(1)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bh(),CU());if(!CU())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bh()==1)break;if(a.cB instanceof Du){Bh();Bh();}if(Bh()==33&&BN(6)){a.o.cC=a.o.cC
?0:1;a.cU=a.cU?0:1;}if(Bh()==a.o.ft.bI){b=E6(a.f.K);$p=17;continue _;}if(Bh()==a.o.gj.bI){b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bh()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bh()!=a.o.f$.bI)continue;Ea(a.o,4,!BN(42)&&!BN(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B_(),a.dB),Long_fromInt(200)))continue;else break;}c=G3();if(c)F7(a.f.K,c);if(a.D===null)break;if(a.D===null)continue;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx())break;if(!CV()&&Cx()){c=0;$p=11;continue _;}if(CV()!=1)continue;if
(!Cx())continue;else{c=1;continue _;}}$p=8;continue _;case 15:AB3(a,c);if(C()){break _;}a.cn=a.bN;c=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;case 16:AHM(a);if(C()){break _;}while(true){while(true){if(!FA()){if(a.c$>0)a.c$=a.c$-1|0;while(true){if(!DU()){if(a.D===null){if(B$(0)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B$(1)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bh(),CU());if(!CU())continue;if(a.D!==null){b
=a.D;$p=6;continue _;}if(Bh()==1)break;if(a.cB instanceof Du){Bh();Bh();}if(Bh()==33&&BN(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bh()==a.o.ft.bI){b=E6(a.f.K);$p=17;continue _;}if(Bh()==a.o.gj.bI){b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bh()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bh()!=a.o.f$.bI)continue;Ea(a.o,4,!BN(42)&&!BN(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B_(),a.dB),Long_fromInt(200)))continue;else break;}c=G3();if(c)F7(a.f.K,c);if(a.D!==null){if(a.D===null)continue;else
{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx()){$p=8;continue _;}if(!CV()&&Cx()){c=0;$p=11;continue _;}if(CV()==1&&Cx()){c=1;$p=14;continue _;}if(CV()!=2)continue;if(!Cx())continue;else break;}continue _;case 17:ADV(a,b);if(C()){break _;}while(true){if(Bh()==a.o.gj.bI){b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bh()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bh()==a.o.f$.bI)Ea(a.o,4,!BN(42)&&!BN(54)?1:(-1));while(true){if(!DU()){if(a.D===null){if(B$(0)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if
(B$(1)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bh(),CU());if(!CU())continue;else break;}if(a.D!==null){b=a.D;$p=6;continue _;}if(Bh()==1)break;if(a.cB instanceof Du){Bh();Bh();}if(Bh()==33&&BN(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bh()!=a.o.ft.bI)continue;else{b=E6(a.f.K);continue _;}}$p=9;continue _;case 18:AE$(b,c,e,f);if(C()){break _;}if(a.bs){a.dB=B_();return;}b=a.c6;$p=21;continue _;case 19:X6(b);if(C()){break _;}if(a.bs){if
(a.bs){a.dB=B_();return;}b=a.c6;$p=21;continue _;}b=a.A;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;case 20:AQv(b,d,c);if(C()){break _;}while(true){e=0;while(e<9){if(Bh()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bh()==a.o.f$.bI)Ea(a.o,4,!BN(42)&&!BN(54)?1:(-1));while(true){if(!DU()){if(a.D===null){if(B$(0)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B$(1)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bh(),CU());if(!CU())continue;else break;}if
(a.D!==null){b=a.D;$p=6;continue _;}if(Bh()==1)break;if(a.cB instanceof Du){Bh();Bh();}if(Bh()==33&&BN(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bh()==a.o.ft.bI){b=E6(a.f.K);$p=17;continue _;}if(Bh()!=a.o.gj.bI)continue;else{b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;continue _;}}$p=9;continue _;case 21:AAY(b);if(C()){break _;}a.dB=B_();return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function GI(a){return 0;}
function AHX(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=null;$p=1;case 1:ABM(a,c);if(C()){break _;}c=new F0;d=GB(new DB);$p=2;case 2:Q0(c,b,d);if(C()){break _;}if(!c.tF){b=B(180);$p=3;continue _;}b=B(181);$p=4;continue _;case 3:AF4(a,c,b);if(C()){break _;}return;case 4:AF4(a,c,b);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function ABM(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=B(3);$p=1;case 1:AF4(a,b,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,$p);}
function AF4(a,b,c){var d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.A!==null){d=a.A;e=a.it;$p=1;continue _;}a.A=b;if(b===null){a.dB=Long_ZERO;return;}b.C9=a.e_;a.f=null;b.bg=a.f;$p=2;continue _;case 1:AJi(d,e);if(C()){break _;}a.A=b;if(b===null){a.dB=Long_ZERO;return;}b.C9=a.e_;a.f=null;b.bg=a.f;$p=2;case 2:AN2(a,c);if(C()){break _;}if(a.f===null){a.f=A6I(a,b,a.k3);c=a.f;$p=3;continue _;}a.f.hZ=V4(a.o);if(a.dY!==null)Q3(a.dY,
b);if(a.c6!==null)O3(a.c6,b);b.bg=a.f;$p=4;continue _;case 3:AK8(c);if(C()){break _;}Rf(a.cB,a.f);a.f.hZ=V4(a.o);if(a.dY!==null)Q3(a.dY,b);if(a.c6!==null)O3(a.c6,b);b.bg=a.f;$p=4;case 4:AGq(b);if(C()){break _;}if(!b.tF){a.dB=Long_ZERO;return;}c=a.it;$p=5;case 5:AJi(b,c);if(C()){break _;}a.dB=Long_ZERO;return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AN2(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AO2(a.it,b);b=a.it;c=B(182);$p=1;case 1:AR6(b,c);if(C()){break _;}d=128;e=289;f=(-128);g=f;while(g<=d){h=a.A.fk;i=a.A.fj;if(a.A.bg!==null){h=a.A.bg.d|0;i=a.A.bg.e|0;}j=f;if(j<=d){b=a.it;k=0+1|0;l=(0*100|0)/e|0;$p=4;continue _;}g=g+16|0;}b=a.it;c=B(183);$p=2;case 2:AR6(b,
c);if(C()){break _;}l=2000;BeW=1;d=0;if(d>=l){BeW=0;return;}b=a.A;m=1;$p=3;case 3:ABs(b,m);if(C()){break _;}d=d+1|0;if(d>=l){BeW=0;return;}b=a.A;m=1;continue _;case 4:XJ(b,l);if(C()){break _;}b=a.A;l=h+g|0;m=64;n=i+j|0;$p=5;case 5:ACx(b,l,m,n);if(C()){break _;}b=a.A;$p=6;case 6:$z=AIm(b);if(C()){break _;}l=$z;if(l){b=a.A;continue _;}j=j+16|0;m=k;while(true){if(j<=d){b=a.it;k=m+1|0;l=(m*100|0)/e|0;$p=4;continue _;}g=g+16|0;if(g>d)break;h=a.A.fk;i=a.A.fj;if(a.A.bg!==null){h=a.A.bg.d|0;i=a.A.bg.e|0;}j=f;}b=a.it;c
=B(183);$p=2;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Mh(a){return ALl(a.dY);}
function Oo(a){return X4(a.dY);}
function MM(a){var b;b=new S;V(b);return T(H(H(H(H(b,B(184)),Xz(a.c6)),B(185)),AN_(a.A)));}
function ASx(a){var b,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.f!==null&&a.A!==null){b=a.f;$p=5;continue _;}b=a.A;$p=1;case 1:AP6(b);if(C()){break _;}a.f=A6I(a,a.A,a.k3);b=a.f;$p=2;case 2:AK8(b);if(C()){break _;}Rf(a.cB,a.f);if(a.A!==null){a.A.bg=a.f;b=a.A;$p=4;continue _;}a.f.hZ=V4(a.o);b=B(186);$p=3;case 3:AN2(a,b);if(C()){break _;}return;case 4:AGq(b);if(C()){break _;}a.f.hZ=V4(a.o);b=B(186);$p=3;continue _;case 5:Cb(b);if(C()){break _;}b=a.A;$p=1;continue _;default:
E$();}}C3().s(a,b,$p);}
function AIH(){return Bc$;}
function Z0(){BeI=$rt_createLongArray(512);BeJ=0;}
function ZG(){D.call(this);}
function BeX(){var a=new ZG();A27(a);return a;}
function A27(a){return;}
function Oj(){var b,c;Bd();b=document.pointerLockElement!=null?1:0;c=Bei;Bei=b;if(!c&&b){BdY=0.0;BdZ=0.0;}a:{b:{if(Bd3){if(!c)break b;if(b)break b;}c=0;break a;}c=1;}return c;}
function AUW(){var b,c,d,e,f,g,h,i,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bd();ANC(BdI);b=BdG;c=BdH;d=BdF.width;e=BdF.height;b.drawImage(c,0.0,0.0,d,e);f=BdF.clientWidth;g=BdF.clientHeight;if(!(f==Bd0&&g==Bd1)){Bd0=f;Bd1=g;c=BdH;h=f;c.width=h;c=BdH;h=g;c.height=h;}try{i=Long_fromInt(1);$p=1;continue _;}catch($$e){$$je=Bg($$e);if($$je instanceof E1){}else{throw $$e;}}return;case 1:a:{try{AKE(i);if
(C()){break _;}break a;}catch($$e){$$je=Bg($$e);if($$je instanceof E1){}else{throw $$e;}}}return;default:E$();}}C3().s(b,c,d,e,f,g,h,i,$p);}
function Mk(){var a=this;D.call(a);a.om=null;a.F5=null;a.GB=null;}
var BeY=null;function Bbi(){Bbi=Bt(Mk);A_C();}
function A_C(){var b;BeY=Ci();b=BeY;L();U(b,BeV);U(BeY,BeZ);U(BeY,Be0);U(BeY,BeS);U(BeY,Be1);U(BeY,Be2);U(BeY,Be3);U(BeY,Be4);U(BeY,BeU);U(BeY,Be5);U(BeY,Be6);U(BeY,Be7);U(BeY,Be8);U(BeY,Be9);U(BeY,Be$);U(BeY,Be_);U(BeY,Bfa);U(BeY,Bfb);U(BeY,Bfc);U(BeY,Bfd);U(BeY,Bfe);U(BeY,Bff);U(BeY,Bfg);U(BeY,Bfh);U(BeY,Bfi);U(BeY,Bfj);U(BeY,Bfk);U(BeY,Bfl);ABO(Dz(),BeY.s);}
function Gp(){var a=this;D.call(a);a.JI=Long_ZERO;a.Eh=0;a.DP=Long_ZERO;a.w3=0;a.mS=null;a.CU=null;a.FQ=null;a.wE=0;a.yE=null;}
var Bfm=null;var Bc5=null;var Bfn=Long_ZERO;var Bfo=0;function Bfp(){var a=new Gp();AHC(a);return a;}
function Bcf(a){var b=new Gp();TT(b,a);return b;}
function A_6(a,b){var c=new Gp();N6(c,a,b);return c;}
function AHC(a){N6(a,null,null);}
function TT(a,b){N6(a,null,b);}
function N6(a,b,c){var d;a.mS=new D;a.wE=1;a.FQ=c;a.yE=b;d=Bfn;Bfn=Long_add(d,Long_fromInt(1));a.JI=d;}
function Tn(a){var b;b=new Wz;b.zT=a;AZN(b);}
function Fv(b){if(Bc5!==b)Bc5=b;Bc5.DP=B_();}
function ARn(a){var b,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.yE===null)return;b=a.yE;$p=1;case 1:Yk(b);if(C()){break _;}return;default:E$();}}C3().s(a,b,$p);}
function ASK(){return Bc5;}
function A1l(a,b){a.Eh=b;}
function XD(){var b,c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:b=Bc5;c=b.w3+1|0;b.w3=c;if(c<30)return;Bc5.w3=0;if(Long_ge(Long_add(b.DP,Long_fromInt(100)),B_()))return;$p=1;case 1:ALP(b);if(C()){break _;}return;default:E$();}}C3().s(b,c,$p);}
function ALP(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gr=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IZ=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaG(callback);return thread.suspend(function(){try{A3W(b,callback);}catch($e){callback.IZ($rt_exception($e));}});}
function A3W(b,c){var d;d=new S1;d.B_=b;d.B$=c;Q1(d);}
function AKE(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gr=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IZ=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaG(callback);return thread.suspend(function(){try{AVr(b,callback);}catch($e){callback.IZ($rt_exception($e));}});}
function AVr(b,c){var d,e;d=Bc5;e=new Pi;e.wq=d;e.A9=c;e.Js=AFF(e,Long_ge(b,Long_fromInt(2147483647))?2147483647:b.lo);d.CU=e;}
function Y8(){Bfm=Bcf(B(187));Bc5=Bfm;Bfn=Long_fromInt(1);Bfo=1;}
function DO(){}
function W8(){D.call(this);}
function Bfq(){var a=new W8();A2l(a);return a;}
function A2l(a){return;}
function ASB(a,b){b.preventDefault();b.stopPropagation();}
function ACj(a,b){ASB(a,b);}
function A$W(a,b){ACj(a,b);}
function Xc(){D.call(this);}
function Bfr(){var a=new Xc();AZh(a);return a;}
function AZh(a){return;}
function ARE(a,b){var c,d;c=b.button;d=RO();if(c==1)c=2;else if(c==2)c=1;d.data[c]=1;Fx(MP(),b);b.preventDefault();b.stopPropagation();Ms();}
function AIW(a,b){ARE(a,b);}
function AXH(a,b){AIW(a,b);}
function Xd(){D.call(this);}
function Bfs(){var a=new Xd();AXg(a);return a;}
function AXg(a){return;}
function AQr(a,b){var c,d;c=b.button;d=RO();if(c==1)c=2;else if(c==2)c=1;d.data[c]=0;Fx(MP(),b);b.preventDefault();b.stopPropagation();}
function ZR(a,b){AQr(a,b);}
function A3B(a,b){ZR(a,b);}
function Xa(){D.call(this);}
function Bft(){var a=new Xa();A47(a);return a;}
function A47(a){return;}
function AOG(a,b){var c;Bd();BdW=b.offsetX;BdX=BdF.clientHeight-b.offsetY|0;c=b.movementX;BdY=BdY+c;c= -b.movementY;BdZ=BdZ+c;b.preventDefault();b.stopPropagation();}
function ADm(a,b){AOG(a,b);}
function ASM(a,b){ADm(a,b);}
function Xb(){D.call(this);}
function Bfu(){var a=new Xb();A_O(a);return a;}
function A_O(a){return;}
function AEJ(a,b){P3().data[S8(QE(b))]=1;Fx(NO(),b);b.preventDefault();b.stopPropagation();Ms();}
function AQB(a,b){AEJ(a,b);}
function A3M(a,b){AQB(a,b);}
function W$(){D.call(this);}
function Bfv(){var a=new W$();A3$(a);return a;}
function A3$(a){return;}
function ZC(a,b){P3().data[S8(QE(b))]=0;Fx(NO(),b);b.preventDefault();b.stopPropagation();}
function XY(a,b){ZC(a,b);}
function A2j(a,b){XY(a,b);}
function W_(){D.call(this);}
function Bfw(){var a=new W_();AXv(a);return a;}
function AXv(a){return;}
function AR$(a,b){Bd();if(Bd2&&(b.repeat?1:0))Fx(NO(),b);b.preventDefault();b.stopPropagation();}
function AK2(a,b){AR$(a,b);}
function A6x(a,b){AK2(a,b);}
function W9(){D.call(this);}
function Bfx(){var a=new W9();A25(a);return a;}
function A25(a){return;}
function AFl(a,b){Fx(MP(),b);b.preventDefault();b.stopPropagation();}
function ACy(a,b){AFl(a,b);}
function AUh(a,b){ACy(a,b);}
function QA(){D.call(this);}
function Bfy(){var a=new QA();A2b(a);return a;}
function A2b(a){return;}
function AFn(a,b){SW(0);}
function AMs(a,b){AFn(a,b);}
function A69(a,b){AMs(a,b);}
function Qz(){D.call(this);}
function Bfz(){var a=new Qz();A34(a);return a;}
function A34(a){return;}
function AGP(a,b){SW(1);Ms();}
function AMr(a,b){AGP(a,b);}
function AYK(a,b){AMr(a,b);}
function NV(){D.call(this);}
var BfA=null;var BeF=null;function BfB(){var a=new NV();AD9(a);return a;}
function AD9(a){return;}
function AJO(){var b,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:b=B(188);$p=1;case 1:$z=A3H(b);if(C()){break _;}b=$z;if(b===null){BfA=B(171);return BfC;}if(b.E5)return BfD;if(!b.Fg&&b.xW!==null){BeF=b.xW;return BfE;}BfA=b.uC!==null?b.uC:B(189);return BfC;default:E$();}}C3().s(b,$p);}
function AJb(b){var c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:c=BeF;$p=1;case 1:$z=AUt(c,b);if(C()){break _;}c=$z;if(c!==BfF?0:1)return;d=LG(b,47);if(d>0){c=Ev(b,0,d);$p=3;continue _;}c=BeF;d=1;e=new ArrayBuffer(0);$p=2;case 2:AXR(c,b,d,e);if(C()){break _;}return;case 3:AJb(c);if(C()){break _;}c=BeF;d=1;e=new ArrayBuffer(0);$p=2;continue _;default:E$();}}C3().s(b,c,d,e,$p);}
function AHE(){BfA=B(3);BeF=null;}
function AAW(){D.call(this);}
function AYr(){var Context=window.AudioContext||window.webkitAudioContext;return new Context();}
function UX(){D.call(this);}
var BeE=null;function BfG(){var a=new UX();AQu(a);return a;}
function AQu(a){return;}
function AMb(b){var c,d,e,f,g,h,i,j,k,l,m;c=Uo(b);d=O0(c);e=$rt_createByteArray(8);NS(d,e);if(!DC(B(190),A26(e,X7(B(24))))){c=new BW;Bl(c,B(191));M(c);}GW(d);f=new P2;d=new WQ;g=new Um;OR(g);g.rV=0;h=R7(g,15,0);if(h){c=new P6;f=new S;V(f);Bl(c,T(H(H(Be(f,h),B(12)),g.b9)));M(c);}R8(d,c);d.qk=0;d.oK=0;d.ED=1;d.Eg=0;d.wH=$rt_createByteArray(1);d.G0=$rt_createByteArray(512);d.g5=g;d.ol=$rt_createByteArray(512);d.ED=1;d.Eg=1;AIv(f,d);g=BaX();while(true){d=GW(f);if(!DC(B(192),d)){if(AKB(f)<=0&&DC(B(193),d))return;c
=new BW;Bl(c,B(191));M(c);}i=GW(f);j=$rt_createByteArray(20);k=$rt_createByteArray(20);NS(f,j);l=H9(f);m=$rt_createByteArray(l);NS(f,m);if(DZ(BeE,i))continue;a:{ADT(g,m,0,l);AL_(g,k,0);if(j===k)h=1;else{if(j!==null&&k!==null){b=j.data;e=k.data;h=b.length;if(h==e.length){l=0;while(l<h){if(b[l]!=e[l]){h=0;break a;}l=l+1|0;}h=1;break a;}}h=0;}}if(!h){c=new BW;f=new S;V(f);Bl(c,T(H(H(f,B(194)),i)));M(c);}BQ(BeE,i,m);if(!DC(B(195),GW(f)))break;}c=new BW;Bl(c,B(191));M(c);}
function Ze(){BeE=De();}
function BW(){BD.call(this);}
function BfH(){var a=new BW();A3T(a);return a;}
function A3T(a){O(a);}
function Lg(){HO.call(this);}
function BfI(){var a=new Lg();A6j(a);return a;}
function A6j(a){V(a);}
function A0O(a,b){Dx(a,b);return a;}
function A1_(a,b,c,d){IZ(a,b,c,d);return a;}
function AVE(a,b){Hm(a,b);return a;}
function A7D(a,b,c,d,e){J7(a,b,c,d,e);return a;}
function A$S(a,b,c){K0(a,b,c);return a;}
function AVZ(a,b,c,d,e){J7(a,b,c,d,e);return a;}
function A4d(a,b,c,d){IZ(a,b,c,d);return a;}
function AIe(a,b){var c;if(b>=0&&b<a.bY)return a.O.data[b];c=new BO;O(c);M(c);}
function Oz(a){return a.bY;}
function A4k(a){return T(a);}
function A4u(a,b){M0(a,b);}
function A99(a,b,c){K0(a,b,c);return a;}
function FB(){}
function V3(){D.call(this);}
function BfJ(){var a=new V3();AZl(a);return a;}
function AZl(a){return;}
function Fi(){D.call(this);this.l5=0;}
var BfK=null;var BfL=null;var BfM=null;var BfN=null;var BfO=null;var BfP=null;function A2i(a){var b=new Fi();AAR(b,a);return b;}
function AAR(a,b){a.l5=b;}
function BI(b){var c;if(b>=BfN.data.length)return A2i(b);c=BfN.data[b];if(c===null){c=A2i(b);BfN.data[b]=c;}return c;}
function A$0(a,b){if(a===b)return 1;return b instanceof Fi&&b.l5==a.l5?1:0;}
function A$I(a){return a.l5;}
function SG(b){var c,d;c=new B4;d=$rt_createCharArray(1);d.data[0]=b;Tr(c,d);return c;}
function Mv(b){return b>=65536&&b<=1114111?1:0;}
function Dt(b){return (b&64512)!=55296?0:1;}
function DR(b){return (b&64512)!=56320?0:1;}
function Ot(b){return !Dt(b)&&!DR(b)?0:1;}
function J6(b,c){return Dt(b)&&DR(c)?1:0;}
function EI(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function IF(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Ib(b){return (56320|b&1023)&65535;}
function ET(b){return GQ(b)&65535;}
function GQ(b){return AP3(b).toLowerCase().charCodeAt(0);}
function FF(b){return GP(b)&65535;}
function GP(b){return AP3(b).toUpperCase().charCodeAt(0);}
function Wj(b,c){if(c>=2&&c<=36){b=Ug(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function Ug(b){var c,d,e,f,g,h,i,j,k;if(BfL===null){if(BfO===null)BfO=AMg();c=(BfO.value!==null?$rt_str(BfO.value):null);d=new RY;d.CE=Nx(c);e=Yn(d);f=$rt_createIntArray(e);g=f.data;h=0;while(h<e){g[h]=Yn(d);h=h+1|0;}BfL=f;}f=BfL.data;h=0;i=(f.length/2|0)-1|0;while(i>=h){j=(h+i|0)/2|0;e=j*2|0;k=R(b,f[e]);if(k>0)h=j+1|0;else{if(k>=0)return f[e+1|0];i=j-1|0;}}return (-1);}
function I4(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Iy(b){var c,d;if(b<65536){c=$rt_createCharArray(1);c.data[0]=b&65535;return c;}c=$rt_createCharArray(2);d=c.data;d[0]=IF(b);d[1]=Ib(b);return c;}
function Do(b){var c,d,e,f,g;c=b>0&&b<=65535?1:0;if(c&&Ot(b&65535))return 19;if(BfM===null){if(BfP===null)BfP=AHL();BfM=A2L((BfP.value!==null?$rt_str(BfP.value):null));}d=BfM.data;e=0;c=d.length-1|0;while(e<=c){f=(e+c|0)/2|0;g=d[f];if(b>=g.Ap)e=f+1|0;else{if(b>=g.xg)return g.C5.data[b-g.xg|0];c=f-1|0;}}return 0;}
function Lc(b){a:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Iw(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Do(b)!=16?0:1;}
function Ux(b){switch(Do(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Qh(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Ux(b);}return 1;}
function ADe(a,b){return a.l5-b.l5|0;}
function A3a(a,b){return ADe(a,b);}
function AIU(){BfK=F($rt_charcls());BfN=J(Fi,128);}
function AMg(){return {"value":"oD#*% .%%2%)6%-:%1>%5B%9F%=J%AN%Eo%Is%Mw%Q{%U!\'Y&\'^*\'b.\'f2\'j6\'n:\'r>\'vB\'zF\'!#J\'&#N\'*#R\'.#V\'2#Z\'6#_\':#c\'>#g\'B#k\'F#o\'J#s\'N#w\'R#6)I:)M>)QB)UF)YJ)^N)bR)fV)jZ)n_)rc)vg)zk)!#o)&#s)*#w).#{)2#!+6#&+:#*+>#.+B#2+F#6+J#:+N#>+R#{R# !T#%&T#)*T#-.T#12T#56T#9:T#=>T#ABT#E6a# :a#%>a#)Ba#-Fa#1Ja#5Na#9Ra#=Va#AZa#E:s# >s#%Bs#)Fs#-Js#1Ns#5Rs#9Vs#=Zs#A_s#EZ:% _:%%c:%)g:%-k:%1o:%5s:%9w:%={:%A!<%E2F% 6F%%:F%)>F%-BF%1FF%5JF%9NF%=RF%AVF%EgP% kP%%oP%)sP%-wP%1{P%5!R%9&R%=*R%A.R%E>]% B]%%F]%)J]%-N]%1R]%5V]%9Z]%=_]%Ac]%Esg% wg%%{g%)!i%-&"
+"i%1*i%5.i%92i%=6i%A:i%EJs% Ns%%Rs%)Vs%-Zs%1_s%5cs%9gs%=ks%Aos%E!!\' &!\'%*!\').!\'-2!\'16!\'5:!\'9>!\'=B!\'AF!\'EV,\' Z,\'%_,\')c,\'-g,\'1k,\'5o,\'9s,\'=w,\'A{,\'E.8\' 28\'%68\'):8\'->8\'1B8\'5F8\'9J8\'=N8\'AR8\'EcB\' gB\'%kB\')oB\'-sB\'1wB\'5{B\'9!D\'=&D\'A*D\'E>L\' BL\'%FL\')JL\'-NL\'1RL\'5VL\'9ZL\'=_L\'AcL\'EsV\' wV\'%{V\')!X\'-&X\'1*X\'5.X\'92X\'=6X\'A:X\'EB_\' F_\'%J_\')N_\'-R_\'1V_\'5Z_\'9__\'=c_\'Ag_\'Esw\' ww\'%{w\')!y\'-&y\'1*y\'5.y\'92y\'=6y\'A:y\'EB!) F!)%J!))N!)-R!)1V!)5Z!)9_!)=c!)Ag!)Egi+ ki+%oi+)si+-wi+1{i+5!k+9&k+=*k+A.k+Eom+ sm+%wm+){m+-!o+1&o+5*o+9.o+=2o+A6o+E>,- B,-%F"
+",-)J,--N,-1R,-5V,-9Z,-=_,-Ac,-E>8- B8-%F8-)J8--N8-1R8-5V8-9Z8-=_8-Ac8-E{F- !H-%&H-)*H--.H-12H-56H-9:H-=>H-ABH-E_H- cH-%gH-)kH--oH-1sH-5wH-9{H-=!J-A&J-E!Z- &Z-%*Z-).Z--2Z-16Z-5:Z-9>Z-=BZ-AFZ-E2c- 6c-%:c-)>c--Bc-1Fc-5Jc-9Nc-=Rc-AVc-EJo- No-%Ro-)Vo--Zo-1_o-5co-9go-=ko-Aoo-E.q- 2q-%6q-):q-->q-1Bq-5Fq-9Jq-=Nq-ARq-E&4r *4r%.4r)24r-64r1:4r5>4r9B4r=F4rAJ4rE{or !qr%&qr)*qr-.qr12qr56qr9:qr=>qrABqrE&ur *ur%.ur)2ur-6ur1:ur5>ur9Bur=FurAJurE**t .*t%2*t)6*t-:*t1>*t5B*t9F*t=J*tAN*tEN,t R,t%V,t)Z,t-_,t1c,t5g,t9k,t=o,tAs,tE_"
+"4t c4t%g4t)k4t-o4t1s4t5w4t9{4t=!6tA&6tEgXt kXt%oXt)sXt-wXt1{Xt5!Zt9&Zt=*ZtA.ZtE{c@# !e@#%&e@#)*e@#-.e@#12e@#56e@#9:e@#=>e@#ABe@#Ece@#Ige@#Mke@#Qoe@#Use@#Ywe@#^{e@#b!g@#f&g@#j*g@#n.g@#r2g@#v6g@#z:g@#!#>g@#&#Bg@#*#Fg@#.#Jg@#2#Ng@#6#Rg@#:#Vg@#>#Zg@#B#_g@#F#cg@#J#gg@#N#kg@#R#*i@#I.i@#M2i@#Q6i@#U:i@#Y>i@#^Bi@#bFi@#fJi@#jNi@#nRi@#rVi@#vZi@#z_i@#!#ci@#&#gi@#*#ki@#.#oi@#2#si@#6#wi@#:#{i@#>#!k@#B#&k@#F#*k@#J#.k@#N#2k@#R#s&D# w&D#%{&D#)!(D#-&(D#1*(D#5.(D#92(D#=6(D#A:(D#E2.H# 6.H#%:.H#)>.H#-B.H#1F.H#5J.H#9N.H#=R.H#AV."
+"H#EwuH# {uH#%!wH#)&wH#-*wH#1.wH#52wH#96wH#=:wH#A>wH#Ew$J# {$J#%!&J#)&&J#-*&J#1.&J#52&J#96&J#=:&J#A>&J#E{*J# !,J#%&,J#)*,J#-.,J#12,J#56,J#9:,J#=>,J#AB,J#E_8J# c8J#%g8J#)k8J#-o8J#1s8J#5w8J#9{8J#=!:J#A&:J#E2RJ# 6RJ#%:RJ#)>RJ#-BRJ#1FRJ#5JRJ#9NRJ#=RRJ#AVRJ#ENqJ# RqJ#%VqJ#)ZqJ#-_qJ#1cqJ#5gqJ#9kqJ#=oqJ#AsqJ#E&}J# *}J#%.}J#)2}J#-6}J#1:}J#5>}J#9B}J#=F}J#AJ}J#Eg@L# k@L#%o@L#)s@L#-w@L#1{@L#5!BL#9&BL#=*BL#A.BL#EZJL# _JL#%cJL#)gJL#-kJL#1oJL#5sJL#9wJL#={JL#A!LL#ENTL# RTL#%VTL#)ZTL#-_TL#1cTL#5gTL#9kTL#=oTL#AsTL#E:{L# >{L#"
+"%B{L#)F{L#-J{L#1N{L#5R{L#9V{L#=Z{L#A_{L#ERkN# VkN#%ZkN#)_kN#-ckN#1gkN#5kkN#9okN#=skN#AwkN#E_$P# c$P#%g$P#)k$P#-o$P#1s$P#5w$P#9{$P#=!&P#A&&P#E.,P# 2,P#%6,P#):,P#->,P#1B,P#5F,P#9J,P#=N,P#AR,P#EFau# Jau#%Nau#)Rau#-Vau#1Zau#5_au#9cau#=gau#Akau#Eouu# suu#%wuu#){uu#-!wu#1&wu#5*wu#9.wu#=2wu#A6wu#EF0N% J0N%%N0N%)R0N%-V0N%1Z0N%5_0N%9c0N%=g0N%Ak0N%Eo0N% s0N%%w0N%){0N%-!2N%1&2N%5*2N%9.2N%=22N%A62N%E:2N% >2N%%B2N%)F2N%-J2N%1N2N%5R2N%9V2N%=Z2N%A_2N%Ec2N% g2N%%k2N%)o2N%-s2N%1w2N%5{2N%9!4N%=&4N%A*4N%E.4N% 24N%%64N%):4N%->"
+"4N%1B4N%5F4N%9J4N%=N4N%AR4N%ERJR% VJR%%ZJR%)_JR%-cJR%1gJR%5kJR%9oJR%=sJR%AwJR%E>qR% BqR%%FqR%)JqR%-NqR%1RqR%5VqR%9ZqR%=_qR%AcqR%E:FV% >FV%%BFV%)FFV%-JFV%1NFV%5RFV%9VFV%=ZFV%A_FV%E"};}
function AHL(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
function I1(){var a=this;D.call(a);a.cX=null;a.DW=0;}
function AJ4(a){return 1;}
function A87(a,b){return;}
function UT(){var a=this;I1.call(a);a.v1=0;a.v3=0;a.v2=0;a.hr=0.0;a.mP=0.0;a.on=0.0;a.ne=0;a.Bg=null;a.BC=null;}
function Rf(a,b){b.u=(-180.0);}
function A$o(a){return;}
function AFz(a,b,c,d){var e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.cX.A;$p=1;case 1:$z=ACx(e,b,c,d);if(C()){break _;}f=$z;e=a.cX.A;$p=2;case 2:$z=AEK(e,b,c,d);if(C()){break _;}g=$z;e=a.cX.c6;$p=3;case 3:AEE(e,b,c,d);if(C()){break _;}e=a.cX.A;L();h=BeP.data;$p=4;case 4:$z=ACx(e,b,c,d);if(C()){break _;}i=$z;j=h[i];$p=5;case 5:$z=AEK(e,b,c,d);if(C()){break _;}i=
$z;k=0;$p=6;case 6:$z=APy(e,b,c,d,k);if(C()){break _;}k=$z;if(j!==null&&k){$p=7;continue _;}e=Kq(a.cX.f);if(e!==null){QI(e,f,b,c,d);if(!e.p)JB(a.cX.f);}if(k&&M$(a.cX.f,BeP.data[f])){e=BeP.data[f];j=a.cX.A;$p=8;continue _;}return k;case 7:j.ns(e,b,c,d,i);if(C()){break _;}e=Kq(a.cX.f);if(e!==null){QI(e,f,b,c,d);if(!e.p)JB(a.cX.f);}if(k&&M$(a.cX.f,BeP.data[f])){e=BeP.data[f];j=a.cX.A;$p=8;continue _;}return k;case 8:e.IQ(j,b,c,d,g);if(C()){break _;}return k;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AE4(a,b,c,d){var e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.cX.A;$p=1;case 1:$z=ACx(e,b,c,d);if(C()){break _;}f=$z;if(f>0&&a.hr===0.0){L();e=BeP.data[f];g=a.cX.A;h=a.cX.f;$p=3;continue _;}if(f<=0)return;L();e=BeP.data[f];g=a.cX.f;$p=2;case 2:$z=ABf(e,g);if(C()){break _;}i=$z;if(i<1.0)return;$p=4;continue _;case 3:e.q_(g,b,c,d,h);if(C()){break _;}if(f<=0)return;L();e=BeP.data[f];g
=a.cX.f;$p=2;continue _;case 4:AFz(a,b,c,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ALR(a){a.hr=0.0;a.ne=0;}
function YO(a,b,c,d,e){var f,g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.ne>0)a.ne=a.ne-1|0;else{if(b==a.v1&&c==a.v3&&d==a.v2){f=a.cX.A;$p=1;continue _;}a.hr=0.0;a.mP=0.0;a.on=0.0;a.v1=b;a.v3=c;a.v2=d;}return;case 1:$z=ACx(f,b,c,d);if(C()){break _;}g=$z;if(!g)return;L();f=BeP.data[g];h=a.hr;i=a.cX.f;$p=2;case 2:$z=ABf(f,i);if(C()){break _;}j=$z;a.hr=h+j;a.on=a.on+1.0;if(a.hr<
1.0)return;$p=3;case 3:AFz(a,b,c,d);if(C()){break _;}a.hr=0.0;a.mP=0.0;a.on=0.0;a.ne=5;return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function GS(a,b){var c;if(a.hr<=0.0){a.cX.n0.Eo=0.0;a.cX.dY.tJ=0.0;}else{c=a.mP+(a.hr-a.mP)*b;a.cX.n0.Eo=c;a.cX.dY.tJ=c;}}
function A1k(a){return 4.0;}
function A5a(a,b){return;}
function AI3(a){var b,c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.mP=a.hr;b=a.Bg;c=a.cX.A;$p=1;case 1:ABC(b,c);if(C()){break _;}b=a.BC;c=a.cX.A;$p=2;case 2:ABC(b,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,$p);}
function SF(){var a=this;D.call(a);a.c8=0.0;a.CN=0.0;a.i7=0;a.cY=0.0;a.CY=0.0;a.lL=0.0;a.sT=Long_ZERO;a.rW=Long_ZERO;a.nG=0.0;}
function FQ(a){var b,c,d,e,f;b=B_();c=Long_sub(b,a.sT);d=Long_div(EG(),Long_fromInt(1000000));if(Long_gt(c,Long_fromInt(1000))){e=Long_toNumber(c)/Long_toNumber(Long_sub(d,a.rW));a.nG=a.nG+(e-a.nG)*0.20000000298023224;a.sT=b;a.rW=d;}if(Long_lt(c,Long_ZERO)){a.sT=b;a.rW=d;}f=Long_toNumber(d)/1000.0;e=(f-a.CN)*a.nG;a.CN=f;if(e<0.0)e=0.0;if(e>1.0)e=1.0;a.lL=a.lL+e*a.CY*a.c8;a.i7=a.lL|0;a.lL=a.lL-a.i7;if(a.i7>10)a.i7=10;a.cY=a.lL;}
function VJ(){}
function R5(){var a=this;D.call(a);a.n4=null;a.fH=null;a.l$=null;a.kP=Long_ZERO;a.lO=0;}
function AO2(a,b){a.lO=0;RU(a,b);}
function YK(a,b){a.lO=1;RU(a,a.l$);}
function RU(a,b){var c,d,e;a:{if(!a.fH.gS){if(a.lO)break a;b=new IM;O(b);M(b);}a.l$=b;c=FK(a.fH.cq,a.fH.bF);d=c.fM;e=c.fJ;D4(256);C_(5889);C9();Iq(0.0,d,e,0.0,100.0,300.0);C_(5888);C9();Bw(0.0,0.0,(-200.0));}}
function AR6(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.fH.gS){if(a.lO)return;b=new IM;O(b);M(b);}a.kP=Long_ZERO;a.n4=b;c=(-1);$p=1;case 1:XJ(a,c);if(C()){break _;}a.kP=Long_ZERO;return;default:E$();}}C3().s(a,b,c,$p);}
function AR4(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.fH.gS){if(a.lO)return;b=new IM;O(b);M(b);}a.kP=Long_ZERO;a.n4=c;a.l$=b;d=(-1);$p=1;case 1:XJ(a,d);if(C()){break _;}a.kP=Long_ZERO;return;default:E$();}}C3().s(a,b,c,d,$p);}
function XJ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!a.fH.gS){if(a.lO)break a;c=new IM;O(c);M(c);}d=B_();if(Long_ge(Long_sub(d,a.kP),Long_fromInt(20))){a.kP=d;c=FK(a.fH.cq,a.fH.bF);e=c.fM;f=c.fJ;D4(256);C_(5889);C9();g=e;h=f;Iq(0.0,g,h,0.0,100.0,300.0);C_(5888);C9();Bw(0.0,
0.0,(-200.0));D4(16640);BA();i=BeL;c=a.fH.bo;j=B(165);$p=1;continue _;}}return;case 1:$z=AHu(c,j);if(C()){break _;}k=$z;Cp(3553,k);Bz(i);ER(i,4210752);l=f/32.0;G(i,0.0,h,0.0,0.0,l);m=e/32.0;G(i,g,h,0.0,m,l);G(i,g,0.0,0.0,m,0.0);G(i,0.0,0.0,0.0,0.0,0.0);Br(i);if(b>=0){n=(e/2|0)-50|0;o=(f/2|0)+16|0;Bc(3553);Bz(i);ER(i,8421504);g=n;p=o;Bf(i,g,p,0.0);m=o+2|0;Bf(i,g,m,0.0);q=n+100|0;Bf(i,q,m,0.0);Bf(i,q,p,0.0);ER(i,8454016);Bf(i,g,p,0.0);Bf(i,g,m,0.0);q=n+b|0;Bf(i,q,m,0.0);Bf(i,q,p,0.0);Br(i);Ba(3553);}c=a.fH.e_;i
=a.l$;b=(e-Dw(a.fH.e_,a.l$)|0)/2|0;r=(f/2|0)-4|0;Cy(c,i,b,r-16|0,16777215);Cy(a.fH.e_,a.n4,(e-Dw(a.fH.e_,a.n4)|0)/2|0,r+8|0,16777215);$p=2;case 2:AUW();if(C()){break _;}try{$p=3;continue _;}catch($$e){$$je=Bg($$e);if($$je instanceof BD){}else{throw $$e;}}return;case 3:b:{try{XD();if(C()){break _;}break b;}catch($$e){$$je=Bg($$e);if($$je instanceof BD){}else{throw $$e;}}}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function AFP(){var a=this;D.call(a);a.v=null;a.qy=0;a.lX=0.0;a.iL=null;a.tL=0;a.p9=null;a.lq=null;a.Ib=0;a.Ia=0;a.p2=null;a.dH=0.0;a.d6=0.0;a.dW=0.0;a.of=0.0;a.mb=0.0;}
function BbQ(a){var b=new AFP();AT9(b,a);return b;}
function AT9(a,b){var c;a.qy=0;a.lX=0.0;a.p9=null;a.lq=new DB;a.Ib=0;a.Ia=0;a.p2=H4(16);a.v=b;c=new Pc;c.eT=null;c.jb=0.0;c.rb=0.0;c.iA=0;c.jQ=0;c.Ad=Ki();c.cP=b;a.iL=c;}
function AIP(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.of=a.mb;b=a.v.A;c=K(a.v.f.d);d=K(a.v.f.j);e=K(a.v.f.e);$p=1;case 1:$z=ANj(b,c,d,e);if(C()){break _;}f=$z;g=(3-a.v.o.hi|0)/3.0;h=f*(1.0-g)+g;a.mb=a.mb+(h-a.mb)*0.10000000149011612;a.tL=a.tL+1|0;AJa(a.iL);if(a.v.cU)
{b=a.v.f;i=a.v.A;d=K(b.d);j=K(b.j);k=K(b.e);l=4;m=0;n=63;e=R(64,j+4|0);j=R(64,j-4|0);o=64.0999984741211;if(m<50){p=(d+E(a.lq,9)|0)-l|0;q=(k+E(a.lq,9)|0)-l|0;$p=2;continue _;}}return;case 2:$z=ACx(i,p,n,q);if(C()){break _;}c=$z;if(e<=0&&j>=0){f=N(a.lq);g=N(a.lq);if(c>0){b=a.v.c6;r=new JO;s=p+f;L();TP(r,i,s,o-BeP.data[c].cM,q+g);El(b,r);}}m=m+1|0;if(m>=50)return;p=(d+E(a.lq,9)|0)-l|0;q=(k+E(a.lq,9)|0)-l|0;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function NI(a,b){var c,d,e,f;c=a.v.f;d=c.bS;e=c.d-c.bS;f=b;return BY(d+e*f,c.cS+(c.j-c.cS)*f,c.bR+(c.e-c.bR)*f);}
function ALV(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.v.f;d=c.T+(c.I-c.T)*b;e=c.P+(c.u-c.P)*b;f=NI(a,b);g= -e*0.01745329238474369-3.1415927410125732;h=BC(g);i=Bq(g);g= -d*0.01745329238474369;j= -BC(g);g=Bq(g);k=i*j;l
=h*j;m=4.0;n=k;o=n*m;p=g;q=p*m;r=l;s=Dk(f,o,q,r*m);t=a.v;u=a.v.A;$p=1;case 1:$z=AJm(u,f,s);if(C()){break _;}u=$z;t.ce=u;f=NI(a,b);if(a.v.ce!==null)m=DI(a.v.ce.gz,f);if(a.v.cB instanceof Du)m=32.0;else if(m>3.0)m=3.0;n=n*m;p=p*m;r=r*m;s=Dk(f,n,p,r);a.p9=null;t=a.v.A;u=Jg(c.L,n,p,r);$p=2;case 2:$z=ADL(t,c,u);if(C()){break _;}t=$z;n=0.0;v=0;while(v<t.s){u=Y(t,v);if(u.lw()){w=QT(Dv(u.L,0.10000000149011612,0.10000000149011612,0.10000000149011612),f,s);if(w!==null){p=DI(f,w.gz);if(!(p>=n&&n!==0.0)){a.p9=u;n=p;}}}v
=v+1|0;}if(a.p9!==null&&!(a.v.cB instanceof Du))a.v.ce=A1c(a.p9);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p);}
function L5(a,b){var c,d,e;c=a.v.f;d=c.dE-b;if(c.bT<=0)Bv(40.0-8000.0/(c.c2+b+200.0),0.0,0.0,1.0);if(d>=0.0){b=d/c.EP;b=Bq(b*b*b*b*3.1415927410125732);e=c.kI;Bv( -e,0.0,1.0,0.0);Bv( -b*14.0,0.0,0.0,1.0);Bv(e,0.0,1.0,0.0);}}
function IN(a,b){var c,d,e,f,g;if(!a.v.o.cC){c=a.v.f;d=c.hc-c.tY;e=c.hc+d*b;f=c.qB+(c.kY-c.qB)*b;g=c.k1+(c.jn-c.k1)*b;d=e*3.1415927410125732;Bw(Bq(d)*f*0.5, -HZ(BC(d)*f),0.0);Bv(Bq(d)*f*3.0,0.0,0.0,1.0);Bv(HZ(BC(d+0.20000000298023224)*f)*5.0,1.0,0.0,0.0);Bv(g,1.0,0.0,0.0);}}
function AH$(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.v.f;d=c.bS;e=c.d-c.bS;f=b;g=d+e*f;h=c.cS+(c.j-c.cS)*f;i=c.bR+(c.e-c.bR)*f;if(!a.v.o.cC)Bw(0.0,0.0,(-0.10000000149011612));else{j=4.0;d= -Bq(c.u/180.0*3.1415927410125732)*BC(c.I
/180.0*3.1415927410125732)*j;e=BC(c.u/180.0*3.1415927410125732)*BC(c.I/180.0*3.1415927410125732)*j;f= -Bq(c.I/180.0*3.1415927410125732)*j;k=0;l=g-d;d=h-f;f=i-e;if(k<8){m=((k&1)*2|0)-1|0;n=((k>>1&1)*2|0)-1|0;o=((k>>2&1)*2|0)-1|0;m=m*0.10000000149011612;n=n*0.10000000149011612;o=o*0.10000000149011612;p=a.v.A;e=m;q=g+e;r=n;s=h+r;t=o;u=BY(q,s,i+t);v=BY(l+e+t,d+r,f+t);$p=1;continue _;}Bw(0.0,0.0, -j);}Bv(c.T+(c.I-c.T)*b,1.0,0.0,0.0);Bv(c.P+(c.u-c.P)*b+180.0,0.0,1.0,0.0);return;case 1:$z=AJm(p,u,v);if(C()){break _;}u
=$z;if(u!==null){q=DI(u.gz,BY(g,h,i));if(q<j)j=q;}k=k+1|0;if(k>=8){Bw(0.0,0.0, -j);Bv(c.T+(c.I-c.T)*b,1.0,0.0,0.0);Bv(c.P+(c.u-c.P)*b+180.0,0.0,1.0,0.0);return;}m=((k&1)*2|0)-1|0;n=((k>>1&1)*2|0)-1|0;o=((k>>2&1)*2|0)-1|0;m=m*0.10000000149011612;n=n*0.10000000149011612;o=o*0.10000000149011612;p=a.v.A;e=m;q=g+e;r=n;s=h+r;t=o;u=BY(q,s,i+t);v=BY(l+e+t,d+r,f+t);continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function AFx(a,b,c){var d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.lX=256>>a.v.o.hi;C_(5889);C9();if(a.v.o.ee)Bw( -((c*2|0)-1|0)*0.07000000029802322,0.0,0.0);d=a.v.f;e=70.0;f=BfQ;$p=1;case 1:$z=AGI(d,f);if(C()){break _;}g=$z;if(g)e=60.0;if(d.bT<=0)e=e/((1.0-500.0/(d.c2+b+500.0))*2.0+1.0);h=a.v.cq/a.v.bF;i=a.lX;f=GO();j=e*0.01745329238474369*0.5;k=GG(j)/Gt(j);f.eu
=k/h;f.es=0.0;f.et=0.0;f.er=0.0;f.ex=0.0;f.ey=k;f.ev=0.0;f.ew=0.0;f.eC=0.0;f.eA=0.0;h=i+0.05000000074505806;k=i-0.05000000074505806;f.eB=h/k;f.ez=(-1.0);f.gW=0.0;f.gX=0.0;f.gU=2.0*i*0.05000000074505806/k;f.gV=0.0;C_(5888);C9();if(a.v.o.ee)Bw(((c*2|0)-1|0)*0.10000000149011612,0.0,0.0);L5(a,b);if(a.v.o.iw)IN(a,b);$p=2;case 2:AH$(a,b);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AFI(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:C9();if(a.v.o.ee)Bw(((c*2|0)-1|0)*0.10000000149011612,0.0,0.0);B3();L5(a,b);if(a.v.o.iw)IN(a,b);if(!a.v.o.cC){d=a.iL;$p=1;continue _;}BE();if(a.v.o.cC){if(a.v.o.iw)IN(a,b);return;}d=a.iL;$p=2;continue _;case 1:ACY(d,b);if(C()){break _;}BE();if(a.v.o.cC){if(a.v.o.iw)IN(a,b);return;}d=a.iL;$p=2;case 2:AB_(d,b);if(C()){break _;}L5(a,b);if(a.v.o.iw)IN(a,b);return;default:E$();}}C3().s(a,
b,c,d,$p);}
function AFN(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.qy&&!Oj()){c=a.v;$p=1;continue _;}a.qy=Oj();Bd();d=BdY;BdY=0.0;e=d|0;d=BdZ;BdZ=0.0;f=d|0;g=1;if(a.v.o.m6)g=(-1);if(a.v.bp&&a.v.A!==null)Xm(a.v.f,e,Bj(f,g));if(!a.v.h9){c=FK(a.v.cq,a.v.bF);f=c.fM;e=c.fJ;h=Bj(BdW,f)/a.v.cq|0;i=(e-(Bj(BdX,e)/a.v.bF|0)|0)-1|0;if(a.v.A!==null){$p=2;continue _;}Hk(0,0,a.v.cq,a.v.bF);HC(0.0,
0.0,0.0,0.0);D4(16640);C_(5889);C9();C_(5888);C9();LC(a);if(a.v.D!==null){D4(256);c=a.v.D;$p=3;continue _;}}return;case 1:ALa(c);if(C()){break _;}a.qy=Oj();Bd();d=BdY;BdY=0.0;e=d|0;d=BdZ;BdZ=0.0;f=d|0;g=1;if(a.v.o.m6)g=(-1);if(a.v.bp&&a.v.A!==null)Xm(a.v.f,e,Bj(f,g));if(!a.v.h9){c=FK(a.v.cq,a.v.bF);f=c.fM;e=c.fJ;h=Bj(BdW,f)/a.v.cq|0;i=(e-(Bj(BdX,e)/a.v.bF|0)|0)-1|0;if(a.v.A!==null){$p=2;continue _;}Hk(0,0,a.v.cq,a.v.bF);HC(0.0,0.0,0.0,0.0);D4(16640);C_(5889);C9();C_(5888);C9();LC(a);if(a.v.D!==null){D4(256);c
=a.v.D;$p=3;continue _;}}return;case 2:AAg(a,b);if(C()){break _;}c=a.v.n0;g=a.v.D===null?0:1;$p=4;continue _;case 3:c.hQ(h,i,b);if(C()){break _;}return;case 4:APL(c,b,g,h,i);if(C()){break _;}if(a.v.D===null)return;D4(256);c=a.v.D;$p=3;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AAg(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ALV(a,b);if(C()){break _;}c=a.v.f;d=a.v.dY;e=a.v.c6;f=c.cs;g=c.d-c.cs;h=b;i=f+g*h;f=c.b7+(c.j-c.b7)*h;g=c.ct+(c.e-c.ct)*h;j=a.v.A.ho;if(j instanceof II)MW(j,EX(i|0)>>4,EX(f|0)>>4);k=0;if(k>=2){FG(1,1,1,0);return;}if(a.v.o.ee){if(k)FG(1,0,0,0);else FG(0,
1,1,0);}Hk(0,0,a.v.cq,a.v.bF);$p=2;case 2:AD2(a,b);if(C()){break _;}D4(16640);Ba(2884);$p=3;case 3:AFx(a,b,k);if(C()){break _;}RW();if(a.v.o.hi<2){l=(-1);$p=4;continue _;}if(!a.v.o.du)Ba(2912);l=1;$p=6;continue _;case 4:ASh(a,l);if(C()){break _;}$p=5;case 5:ADc(d,b);if(C()){break _;}if(!a.v.o.du)Ba(2912);l=1;$p=6;case 6:ASh(a,l);if(C()){break _;}m=Bby();AOm(m,i,f,g);ARK(a.v.dY,m,b);n=a.v.dY;l=0;$p=7;case 7:AIk(n,c,l);if(C()){break _;}l=0;$p=8;case 8:ASh(a,l);if(C()){break _;}if(!a.v.o.du)Ba(2912);l=3553;n=a.v.bo;j
=B(179);$p=9;case 9:$z=AHu(n,j);if(C()){break _;}o=$z;Cp(l,o);DS();Vs(d,c,0,h);Hz();n=NI(a,b);$p=10;case 10:ACC(d,n,m,b);if(C()){break _;}$p=11;case 11:ABX(e,c,b);if(C()){break _;}DS();l=0;$p=12;case 12:ASh(a,l);if(C()){break _;}$p=13;case 13:ABd(e,c,b);if(C()){break _;}if(a.v.ce!==null){m=BfQ;$p=16;continue _;}Df(770,771);l=0;$p=14;case 14:ASh(a,l);if(C()){break _;}Ba(3042);Bc(2884);l=3553;m=a.v.bo;n=B(179);$p=15;case 15:$z=AHu(m,n);if(C()){break _;}o=$z;Cp(l,o);Vs(d,c,1,h);Gw(1);Ba(2884);Bc(3042);if(a.v.ce
!==null){m=BfQ;$p=17;continue _;}Bc(2912);if(a.v.cU){$p=20;continue _;}l=0;$p=23;continue _;case 16:$z=AGI(c,m);if(C()){break _;}l=$z;if(!l){Df(770,771);l=0;$p=14;continue _;}Bc(3008);m=a.v.ce;l=0;n=D9(c.K);$p=18;continue _;case 17:$z=AGI(c,m);if(C()){break _;}l=$z;if(!l){Bc(3008);n=a.v.ce;l=0;m=D9(c.K);$p=21;continue _;}Bc(2912);if(a.v.cU){$p=20;continue _;}l=0;$p=23;continue _;case 18:AFH(d,c,m,l,n,b);if(C()){break _;}m=a.v.ce;l=0;n=D9(c.K);$p=19;case 19:AGg(d,c,m,l,n,b);if(C()){break _;}Ba(3008);Df(770,771);l
=0;$p=14;continue _;case 20:XU(a,b);if(C()){break _;}l=0;$p=23;continue _;case 21:AFH(d,c,n,l,m,b);if(C()){break _;}m=a.v.ce;l=0;n=D9(c.K);$p=22;case 22:AGg(d,c,m,l,n,b);if(C()){break _;}Ba(3008);Bc(2912);if(a.v.cU){$p=20;continue _;}l=0;$p=23;case 23:ASh(a,l);if(C()){break _;}if(!a.v.o.du)Ba(2912);$p=24;case 24:YN(d,b);if(C()){break _;}Bc(2912);l=1;$p=25;case 25:ASh(a,l);if(C()){break _;}D4(256);$p=26;case 26:AFI(a,b,k);if(C()){break _;}if(!a.v.o.ee)return;k=k+1|0;if(k>=2){FG(1,1,1,0);return;}if(a.v.o.ee){if
(k)FG(1,0,0,0);else FG(0,1,1,0);}Hk(0,0,a.v.cq,a.v.bF);$p=2;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function XU(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.v.f;d=K(c.d);e=K(c.j);f=K(c.e);BA();g=BeL;Bc(2884);Cj(0.0,1.0,0.0);Ba(3042);Df(770,
771);h=3553;i=a.v.bo;j=B(196);$p=1;case 1:$z=AHu(i,j);if(C()){break _;}k=$z;Cp(h,k);k=d-5|0;d=d+5|0;h=f-5|0;l=f+5|0;m=e-5|0;n=e+5|0;e=R(m,64);o=R(n,64);while(k<=d){p=h;while(p<=l){q=e<0?64:m;r=o<0?64:n;if(q!=r){s=((((a.tL+(k*3121|0)|0)+Bj(p,418711)|0)%32|0)+b)/32.0;t=k+0.5-c.d;u=p+0.5-c.e;v=Ce(t*t+u*u)/5.0;BT(1.0,1.0,1.0,(1.0-v*v)*0.699999988079071);Bz(g);u=k+0|0;w=q;x=p+0|0;v=q*2.0/8.0;y=s*2.0;z=v+y;G(g,u,w,x,0.0,z);ba=k+1|0;bb=p+1|0;G(g,ba,w,bb,2.0,z);bc=r;bd=r*2.0/8.0+y;G(g,ba,bc,bb,2.0,bd);G(g,u,bc,x,0.0,
bd);G(g,u,w,bb,0.0,z);G(g,ba,w,x,2.0,z);G(g,ba,bc,x,2.0,bd);G(g,u,bc,bb,0.0,bd);Br(g);}p=p+1|0;}k=k+1|0;}Ba(2884);Bc(3042);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function LC(a){var b,c,d;b=FK(a.v.cq,a.v.bF);c=b.fM;d=b.fJ;D4(256);C_(5889);C9();Iq(0.0,c,d,0.0,1000.0,3000.0);C_(5888);C9();Bw(0.0,0.0,(-2000.0));}
function AD2(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.v.A;d=a.v.f;e=1.0-A2P(1.0/(4-a.v.o.hi|0),0.25);f=OT(c,b);g=f.x;h=f.z;i=f.w;j=ADs(c,b);a.dH=j.x;a.d6=j.z;a.dW=j.w;a.dH=a.dH+(g-a.dH)*e;a.d6=a.d6+(h-a.d6)*e;a.dW=a.dW+(i-a.dW)*e;c=BfQ;$p=1;case 1:$z=AGI(d,c);if(C()){break _;}k=$z;if(k){a.dH=0.019999999552965164;a.d6
=0.019999999552965164;a.dW=0.20000000298023224;e=a.of+(a.mb-a.of)*b;a.dH=a.dH*e;a.d6=a.d6*e;a.dW=a.dW*e;if(a.v.o.ee){l=(a.dH*30.0+a.d6*59.0+a.dW*11.0)/100.0;m=(a.dH*30.0+a.d6*70.0)/100.0;n=(a.dH*30.0+a.dW*70.0)/100.0;a.dH=l;a.d6=m;a.dW=n;}HC(a.dH,a.d6,a.dW,0.0);return;}c=BfR;$p=2;case 2:$z=AGI(d,c);if(C()){break _;}k=$z;if(k){a.dH=0.6000000238418579;a.d6=0.10000000149011612;a.dW=0.0;}e=a.of+(a.mb-a.of)*b;a.dH=a.dH*e;a.d6=a.d6*e;a.dW=a.dW*e;if(a.v.o.ee){l=(a.dH*30.0+a.d6*59.0+a.dW*11.0)/100.0;m=(a.dH*30.0+a.d6
*70.0)/100.0;n=(a.dH*30.0+a.dW*70.0)/100.0;a.dH=l;a.d6=m;a.dW=n;}HC(a.dH,a.d6,a.dW,0.0);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ASh(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.v.f;d=a.dH;e=a.d6;f=a.dW;EA(a.p2);CJ(CJ(CJ(CJ(a.p2,d),e),f),1.0);Gx(a.p2);g=a.p2;BV();BfS=Jt(g);BfT=Jt(g);BfU=Jt(g);BfV=Jt(g);Cj(0.0,(-1.0),0.0);BT(1.0,1.0,1.0,1.0);g=BfQ;$p=1;case 1:$z=AGI(c,g);if(C()){break _;}h=$z;if(h){Ma(2917,2048);GN(2914,0.10000000149011612);Ba(2903);return;}g=BfR;$p=2;case 2:$z=AGI(c,g);if(C()){break _;}h
=$z;if(h){Ma(2917,2048);GN(2914,2.0);}else{Ma(2917,9729);GN(2915,a.lX*0.25);GN(2916,a.lX);if(b<0){GN(2915,0.0);GN(2916,a.lX*0.800000011920929);}}Ba(2903);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function Eh(){D.call(this);this.xZ=0.0;}
function Mz(){var a=this;Eh.call(a);a.iZ=null;a.lc=null;a.pi=null;a.d1=null;a.dO=null;a.i_=null;a.hg=null;}
function A$Y(){var a=new Mz();KF(a);return a;}
function Xu(a){var b=new Mz();AIM(b,a);return b;}
function BfW(a,b){var c=new Mz();ARv(c,a,b);return c;}
function KF(a){AIM(a,0.0);}
function AIM(a,b){ARv(a,b,0.0);}
function ARv(a,b,c){var d,e;a.iZ=BK(0,0);BG(a.iZ,(-4.0),(-8.0),(-4.0),8,8,8,b);d=a.iZ;e=0.0+c;BJ(d,0.0,e,0.0);a.lc=BK(32,0);BG(a.lc,(-4.0),(-8.0),(-4.0),8,8,8,b+0.5);BJ(a.lc,0.0,e,0.0);a.pi=BK(16,16);BG(a.pi,(-4.0),0.0,(-2.0),8,12,4,b);BJ(a.pi,0.0,e,0.0);a.d1=BK(40,16);BG(a.d1,(-3.0),(-2.0),(-2.0),4,12,4,b);d=a.d1;e=2.0+c;BJ(d,(-5.0),e,0.0);a.dO=BK(40,16);a.dO.lE=1;BG(a.dO,(-1.0),(-2.0),(-2.0),4,12,4,b);BJ(a.dO,5.0,e,0.0);a.i_=BK(0,16);BG(a.i_,(-2.0),0.0,(-2.0),4,12,4,b);d=a.i_;c=12.0+c;BJ(d,(-2.0),c,0.0);a.hg
=BK(0,16);a.hg.lE=1;BG(a.hg,(-2.0),0.0,(-2.0),4,12,4,b);BJ(a.hg,2.0,c,0.0);}
function A$k(a,b,c,d,e,f,g){a.ok(b,c,d,e,f,g);Ca(a.iZ,g);Ca(a.pi,g);Ca(a.d1,g);Ca(a.dO,g);Ca(a.i_,g);Ca(a.hg,g);Ca(a.lc,g);}
function AIT(a,b,c,d,e,f,g){var h;a.iZ.bX=e/57.2957763671875;a.iZ.b1=f/57.2957763671875;a.lc.bX=a.iZ.bX;a.lc.b1=a.iZ.b1;h=a.d1;e=b*0.6661999821662903;f=e+3.1415927410125732;h.b1=BC(f)*2.0*c;a.d1.bU=(BC(b*0.23119999468326569)+1.0)*1.0*c;a.dO.b1=BC(e)*2.0*c;a.dO.bU=(BC(b*0.28119999170303345)-1.0)*1.0*c;a.i_.b1=BC(e)*1.399999976158142*c;a.hg.b1=BC(f)*1.399999976158142*c;h=a.d1;c=h.bU;b=d*0.09000000357627869;h.bU=c+BC(b)*0.05000000074505806+0.05000000074505806;h=a.dO;h.bU=h.bU-(BC(b)*0.05000000074505806+0.05000000074505806);h
=a.d1;b=h.b1;c=d*0.06700000166893005;h.b1=b+Bq(c)*0.05000000074505806;h=a.dO;h.b1=h.b1-Bq(c)*0.05000000074505806;}
function Eu(){var a=this;D.call(a);a.dD=null;a.IY=0;a.mF=0;a.HV=0;a.w1=0;}
function BfX(a){var b=new Eu();HE(b,a);return b;}
function HE(a,b){a.dD=$rt_createByteArray(1024);a.mF=0;a.HV=0;a.w1=1;a.IY=b;}
function AAU(){var a=this;Eu.call(a);a.py=null;a.ts=null;a.nZ=null;a.rQ=null;a.xC=0;}
function Bap(){var a=new AAU();A$4(a);return a;}
function A$4(a){L();HE(a,BfY.ba);a.py=$rt_createFloatArray(256);a.ts=$rt_createFloatArray(256);a.nZ=$rt_createFloatArray(256);a.rQ=$rt_createFloatArray(256);a.xC=0;}
function AYD(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;a.xC=a.xC+1|0;b=0;while(b<16){c=0;while(c<16){d=0.0;e=b-1|0;while(e<=(b+1|0)){f=e&15;g=c&15;d=d+a.py.data[f+(g*16|0)|0];e=e+1|0;}h=a.ts.data;i=b+(c*16|0)|0;h[i]=d/3.299999952316284+a.nZ.data[i]*0.800000011920929;c=c+1|0;}b=b+1|0;}c=0;while(c<16){j=0;while(j<16){k=a.nZ.data;b=c+(j*16|0)|0;k[b]=k[b]+a.rQ.data[b]*0.05000000074505806;if(a.nZ.data[b]<0.0)a.nZ.data[b]=0.0;k=a.rQ.data;k[b]=k[b]-0.10000000149011612;if(BP()<0.05)a.rQ.data[b]=0.5;j=j+1|0;}c=c+1|0;}k=a.ts;a.ts
=a.py;a.py=k;c=0;while(c<256){d=a.py.data[c];if(d>1.0)d=1.0;if(d<0.0)d=0.0;l=d*d;i=32.0+l*32.0|0;m=50.0+l*64.0|0;n=255;o=146.0+l*50.0|0;if(a.mF){b=i*30|0;i=((b+(m*59|0)|0)+2805|0)/100|0;m=(b+(m*70|0)|0)/100|0;n=(b+17850|0)/100|0;}k=a.dD.data;j=c*4|0;k[j+0|0]=i<<24>>24;a.dD.data[j+1|0]=m<<24>>24;a.dD.data[j+2|0]=n<<24>>24;a.dD.data[j+3|0]=o<<24>>24;c=c+1|0;}}
function AKC(){var a=this;Eu.call(a);a.pU=null;a.qT=null;a.jx=null;a.sB=null;}
function BaY(){var a=new AKC();A1F(a);return a;}
function A1F(a){L();HE(a,BfZ.ba);a.pU=$rt_createFloatArray(256);a.qT=$rt_createFloatArray(256);a.jx=$rt_createFloatArray(256);a.sB=$rt_createFloatArray(256);}
function AYT(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=0;while(b<16){c=0;while(c<16){d=0.0;e=Bq(c*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;f=Bq(b*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;g=b-1|0;while(true){h=b+1|0;if(g>h)break;i=c-1|0;while(i<=(c+1|0)){h=(g+e|0)&15;j=(i+f|0)&15;d=d+a.pU.data[h+(j*16|0)|0];i=i+1|0;}g=g+1|0;}k=a.qT.data;l=b+(c*16|0)|0;d=d/10.0;m=a.jx.data;e=(b+0|0)&15;n=((c+0|0)&15)*16|0;o=m[e+n|0];m=a.jx.data;h=h&15;o=o+m[h+n|0];m=a.jx.data;c=c+1|0;n=(c&15)*16|0;k[l]=d+(o+m[h+n
|0]+a.jx.data[e+n|0])/4.0*0.800000011920929;m=a.jx.data;m[l]=m[l]+a.sB.data[l]*0.009999999776482582;if(a.jx.data[l]<0.0)a.jx.data[l]=0.0;m=a.sB.data;m[l]=m[l]-0.05999999865889549;if(BP()<0.005)a.sB.data[l]=1.5;}b=b+1|0;}m=a.qT;a.qT=a.pU;a.pU=m;n=0;while(n<256){d=a.pU.data[n]*2.0;if(d>1.0)d=1.0;if(d<0.0)d=0.0;h=d*100.0+155.0|0;o=d*d;j=o*255.0|0;l=o*d*d*128.0|0;if(a.mF){e=h*30|0;h=((e+(j*59|0)|0)+(l*11|0)|0)/100|0;j=(e+(j*70|0)|0)/100|0;l=(e+(l*70|0)|0)/100|0;}m=a.dD.data;b=n*4|0;m[b+0|0]=h<<24>>24;a.dD.data[b
+1|0]=j<<24>>24;a.dD.data[b+2|0]=l<<24>>24;a.dD.data[b+3|0]=(-1);n=n+1|0;}}
function L4(){D.call(this);}
var Bf0=null;var Bf1=null;function Bf2(){var a=new L4();AZE(a);return a;}
function AZE(a){return;}
function Dz(){if(Bf0===null)Bf0=AYL(new Xe,0);return Bf0;}
function C$(){if(Bf1===null)Bf1=AYL(new PQ,0);return Bf1;}
function Di(b,c,d,e,f){var g,h,i,j,k,l,m;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=APi(b)&&(e+f|0)<=APi(d)){a:{b:{if(b!==d){g=Kx(Dl(b));h=Kx(Dl(d));if(g!==null&&h!==null){if(g===h)break b;if(!F1(g)&&!F1(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;if(!UA(h,l[k])){Vm(b,c,d,e,j);b=new JT;O(b);M(b);}j=j+1|0;k=m;}Vm(b,c,d,e,f);return;}if(!F1(g))break a;if(F1(h))break b;else break a;}b=new JT;O(b);M(b);}}Vm(b,c,d,e,f);return;}b=new JT;O(b);M(b);}b=new BO;O(b);M(b);}d=new EE;Bl(d,B(197));M(d);}
function Vm(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function B_(){return Long_fromNumber(new Date().getTime());}
function EG(){return Long_fromNumber(performance.now()*1000000.0);}
function VZ(){Gp.call(this);this.yo=null;}
function AJ0(a){var b,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:while(a.yo.gS){try{b=Long_fromInt(2147483647);$p=1;continue _;}catch($$e){$$je=Bg($$e);if($$je instanceof E1){}else{throw $$e;}}}return;case 1:a:{try{AKE(b);if(C()){break _;}break a;}catch($$e){$$je=Bg($$e);if($$je instanceof E1){}else{throw $$e;}}}while(a.yo.gS){try{b=Long_fromInt(2147483647);continue _;}catch($$e){$$je=Bg($$e);if($$je instanceof E1){}else{throw $$e;}}}return;default:E$();}}C3().s(a,
b,$p);}
function Sp(){}
function Im(){}
function Go(){D.call(this);}
function PY(a){return a.gQ?0:1;}
function Q8(a,b){var c,d;c=a.kZ();a:{while(c.qm()){b:{d=c.mT();if(d!==null){if(!d.eo(b))break b;else break a;}if(b===null)break a;}}return 0;}return 1;}
function AA8(a){var b,c,d,e,f;b=J(D,IP(a));c=b.data;d=0;e=Oy(a);while(Gb(e)){f=d+1|0;c[d]=Ll(e);d=f;}return b;}
function UG(a,b){var c,d,e,f,g;c=b.data;d=a.s;e=c.length;if(e<d)b=AEI(Kx(Dl(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=Jl(a);while(KC(f)){c=b.data;g=e+1|0;c[e]=KT(f);e=g;}return b;}
function DF(a,b){var c,d;c=0;d=b.kZ();while(d.qm()){if(!a.sU(d.mT()))continue;c=1;}return c;}
function Gf(a,b){var c,d;c=0;d=Jl(a);while(KC(d)){if(b.rB(KT(d))){AMc(d);c=1;}}return c;}
function J4(){}
function Gg(){Go.call(this);this.d7=0;}
function Fx(a,b){AEQ(a,a.gQ,b);return 1;}
function Jl(a){var b;b=new Ty;b.ld=a;b.yp=b.ld.d7;b.su=b.ld.s;b.nj=(-1);return b;}
function ABb(a,b){var c,d,e;c=a.s;d=0;a:{while(d<c){b:{e=Y(a,d);if(b!==null){if(!b.eo(e))break b;else break a;}if(e===null)break a;}d=d+1|0;}return (-1);}return d;}
function Mt(){Gg.call(this);}
function AEQ(a,b,c){if(b>=0){ABu(Wm(a,b),c);return;}c=new BO;O(c);M(c);}
function Tm(a,b){var c,d;if(b>=0){c=Wm(a,b);d=Fm(c);AHh(c);return d;}c=new BO;O(c);M(c);}
function AUu(a){return H0(a);}
function OF(){}
function Xk(){}
function AEF(){var a=this;Mt.call(a);a.pE=null;a.qn=null;a.gQ=0;}
function QX(){var a=new AEF();A2S(a);return a;}
function A2S(a){return;}
function A9f(a){return a.gQ;}
function Ox(a){a.pE=null;a.qn=null;a.gQ=0;a.d7=a.d7+1|0;}
function H0(a){return AJA(a,a.pE,null,0);}
function Wm(a,b){var c,d,e;if(b<0){c=new BO;O(c);M(c);}if(b<=(a.gQ/2|0)){d=a.pE;e=0;while(e<b){d=d.hv;e=e+1|0;}return AJA(a,d,d===null?null:d.iz,b);}if(b>a.gQ){c=new BO;O(c);M(c);}c=a.qn;e=b;while(e<a.gQ){c=c.iz;e=e+1|0;}return AJA(a,c===null?null:c.hv,c,b);}
function AOb(){D.call(this);}
function F$(){D.call(this);}
function ABH(){F$.call(this);}
function AKG(){F$.call(this);}
function Je(){}
function Fb(){Go.call(this);}
function Fu(a,b){var c,d;c=0;if(IP(a)>=b.lY()){d=b.kZ();while(d.qm()){if(!KW(a,d.mT()))continue;c=1;}}else{d=Oy(a);while(Gb(d)){if(b.rB(Ll(d))){c=1;ADR(d);}}}return c;}
function A5X(a,b){var c,d;if(a===b)return 1;if(!So(b,Je))return 0;c=b;if(IP(a)!=IP(c))return 0;d=Oy(c);while(Gb(d)){if(WB(a,Ll(d)))continue;else return 0;}return 1;}
function AS3(a){var b,c,d,e,f,g;b=AA8(a);if(b===null)c=0;else{c=(-1515898884);d=0;while(true){e=b.data;if(d>=e.length)break;f=e[d];g=(f!==null?f.fl():0)^528111840;c=Np(g,4)^(g>>>7|g<<25)^Np(c,13);d=d+1|0;}}return c;}
function ES(){}
function AQk(){Fb.call(this);this.l9=null;}
function Ga(){var a=new AQk();A08(a);return a;}
function A08(a){a.l9=De();}
function Xi(a,b){return BQ(a.l9,b,a)!==null?0:1;}
function WB(a,b){return DZ(a.l9,b);}
function Oy(a){return ACT(AKc(a.l9));}
function KW(a,b){return Q9(a.l9,b)===null?0:1;}
function IP(a){return a.l9.f8;}
function LT(){}
function FY(){var a=this;D.call(a);a.w0=null;a.w$=null;}
function ACd(){var a=this;FY.call(a);a.f8=0;a.cO=null;a.g$=0;a.Fb=0.0;a.uJ=0;}
function De(){var a=new ACd();AVu(a);return a;}
function A56(a,b){return J(IG,b);}
function AVu(a){var b;b=AG0(16);a.f8=0;a.cO=J(IG,b);a.Fb=0.75;RP(a);}
function AG0(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Va(a){var b;if(a.f8>0){a.f8=0;b=a.cO;ZF(b,0,b.data.length,null);a.g$=a.g$+1|0;}}
function RP(a){a.uJ=a.cO.data.length*a.Fb|0;}
function DZ(a,b){return VN(a,b)===null?0:1;}
function AEd(a,b){var c,d,e;a:{if(b===null){c=0;b:while(true){if(c>=a.cO.data.length)break a;d=a.cO.data[c];while(d!==null){if(d.e6===null)break b;d=d.eE;}c=c+1|0;}return 1;}c=0;c:while(true){if(c>=a.cO.data.length)break a;d=a.cO.data[c];while(d!==null){e=d.e6;if(b!==e&&!b.eo(e)?0:1)break c;d=d.eE;}c=c+1|0;}return 1;}return 0;}
function CP(a,b){var c;c=VN(a,b);if(c===null)return null;return c.e6;}
function VN(a,b){var c,d;if(b===null)c=QS(a);else{d=b.fl();c=P7(a,b,d&(a.cO.data.length-1|0),d);}return c;}
function P7(a,b,c,d){var e;e=a.cO.data[c];while(e!==null&&!(e.pW==d&&AI6(b,e.gc))){e=e.eE;}return e;}
function QS(a){var b;b=a.cO.data[0];while(b!==null&&b.gc!==null){b=b.eE;}return b;}
function AKc(a){var b;if(a.w0===null){b=new PM;b.Cw=a;a.w0=b;}return a.w0;}
function Re(a,b,c){return BQ(a,b,c);}
function BQ(a,b,c){var d,e,f,g;if(b===null){d=QS(a);if(d===null){a.g$=a.g$+1|0;d=RM(a,null,0,0);e=a.f8+1|0;a.f8=e;if(e>a.uJ)Wr(a);}}else{e=b.fl();f=e&(a.cO.data.length-1|0);d=P7(a,b,f,e);if(d===null){a.g$=a.g$+1|0;d=RM(a,b,f,e);e=a.f8+1|0;a.f8=e;if(e>a.uJ)Wr(a);}}g=d.e6;d.e6=c;return g;}
function RM(a,b,c,d){var e,f;e=new IG;f=null;e.gc=b;e.e6=f;e.pW=d;e.eE=a.cO.data[c];a.cO.data[c]=e;return e;}
function ALE(a,b){var c,d,e,f,g,h,i;c=AG0(!b?1:b<<1);d=J(IG,c);e=d.data;f=0;c=c-1|0;while(f<a.cO.data.length){g=a.cO.data[f];a.cO.data[f]=null;while(g!==null){h=g.pW&c;i=g.eE;g.eE=e[h];e[h]=g;g=i;}f=f+1|0;}a.cO=d;RP(a);}
function Wr(a){ALE(a,a.cO.data.length);}
function Q9(a,b){var c;c=AEl(a,b);if(c===null)return null;return c.e6;}
function AEl(a,b){var c,d,e,f,g;a:{c=0;d=null;if(b===null){e=a.cO.data[0];while(e!==null){if(e.gc===null)break a;f=e.eE;d=e;e=f;}}else{g=b.fl();c=g&(a.cO.data.length-1|0);e=a.cO.data[c];while(e!==null&&!(e.pW==g&&AI6(b,e.gc))){f=e.eE;d=e;e=f;}}}if(e===null)return null;if(d!==null)d.eE=e.eE;else a.cO.data[c]=e.eE;a.g$=a.g$+1|0;a.f8=a.f8-1|0;return e;}
function A4J(a){return a.f8;}
function It(a){var b;if(a.w$===null){b=new PN;b.wg=a;a.w$=b;}return a.w$;}
function AI6(b,c){return b!==c&&!b.eo(c)?0:1;}
function AKd(){F$.call(this);}
function YW(){D.call(this);}
function Bf3(){var a=new YW();A0n(a);return a;}
function A0n(a){return;}
function A3H(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gr=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IZ=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaG(callback);return thread.suspend(function(){try{Bcs(b,callback);}catch($e){callback.IZ($rt_exception($e));}});}
function Bcs(b,c){var d,e;d=typeof indexedDB!=='undefined'?indexedDB:null;if(d===null){CM(c,SU(0,0,B(198),null));return;}e=d.open($rt_ustr(b),1);b=new TK;b.AP=c;b=Cu(b,"handleEvent");e.onBlocked=b;b=new TJ;b.Et=c;b.EN=e;b=Cu(b,"handleEvent");e.onsuccess=b;b=new TI;b.Dz=c;b=Cu(b,"handleEvent");e.onerror=b;b=new TH;b.Br=e;b=Cu(b,"handleEvent");e.onupgradeneeded=b;}
function A5w(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gr=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IZ=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaG(callback);return thread.suspend(function(){try{A_0(b,c,callback);}catch($e){callback.IZ($rt_exception($e));}});}
function A_0(b,c,d){var e;b=b.transaction("filesystem","readwrite").objectStore("filesystem");c=PV($rt_ustr(c));e=b.delete(c);b=new TG;b.CL=d;b=Cu(b,"handleEvent");e.onsuccess=b;b=new TD;b.Dg=d;b=Cu(b,"handleEvent");e.onerror=b;}
function A_K(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gr=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IZ=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaG(callback);return thread.suspend(function(){try{Ba9(b,c,callback);}catch($e){callback.IZ($rt_exception($e));}});}
function Ba9(b,c,d){var e;b=b.transaction("filesystem","readonly").objectStore("filesystem");c=PV($rt_ustr(c));e=b.get(c);b=new TC;b.Au=d;b.xf=e;b=Cu(b,"handleEvent");e.onsuccess=b;b=new TB;b.Ej=d;b=Cu(b,"handleEvent");e.onerror=b;}
function A5r(b,c,d,e,f){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gr=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IZ=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaG(callback);return thread.suspend(function(){try{Bb3(b,c,d,e,f,callback);}
catch($e){callback.IZ($rt_exception($e));}});}
function Bb3(b,c,d,e,f,g){var h,i;h=(b.transaction("filesystem","readonly").objectStore("filesystem")).openCursor();i=$rt_createIntArray(1);b=new Ro;b.EQ=h;b.Eq=g;b.y4=i;b.vI=c;b.Bn=e;b.C$=d;b.xl=f;b=Cu(b,"handleEvent");h.onsuccess=b;b=new Rp;b.DQ=g;b.wO=i;b=Cu(b,"handleEvent");h.onerror=b;}
function AUt(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gr=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IZ=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaG(callback);return thread.suspend(function(){try{BcZ(b,c,callback);}catch($e){callback.IZ($rt_exception($e));}});}
function BcZ(b,c,d){var e;b=b.transaction("filesystem","readonly").objectStore("filesystem");c=PV($rt_ustr(c));e=b.get(c);b=new Rl;b.CT=d;b.va=e;b=Cu(b,"handleEvent");e.onsuccess=b;b=new Rm;b.Ei=d;b=Cu(b,"handleEvent");e.onerror=b;}
function AXR(b,c,d,e){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gr=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IZ=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaG(callback);return thread.suspend(function(){try{Bbe(b,c,d,e,callback);}catch($e)
{callback.IZ($rt_exception($e));}});}
function Bbe(b,c,d,e,f){var g,h;b=b.transaction("filesystem","readwrite").objectStore("filesystem");g=Long_sub(B_(),new Long(596067632, 383)).lo;c=A5O($rt_ustr(c),!!d,g,e);h=b.put(c);c=new Rn;c.Bz=f;b=Cu(c,"handleEvent");h.onsuccess=b;b=new Rq;b.BS=f;b=Cu(b,"handleEvent");h.onerror=b;}
function A8x(b){return typeof b==='undefined'?null:typeof b.data==='undefined'?null:b.data;}
function Uz(b){return typeof b==='undefined'?false:typeof b.directory==='undefined'?false:b.directory;}
function A0J(b){return typeof b==='undefined'? -1:typeof b.lastModified==='undefined'? -1:b.lastModified;}
function PV(b){return [b];}
function AZU(b){return typeof b==="string"?b:typeof b==="undefined"?null:typeof b[0]==="string"?b[0]:null;}
function A5O(b,c,d,e){return {path:b,directory:c,lastModified:d,data:e};}
function AE2(){var a=this;D.call(a);a.Fg=0;a.E5=0;a.uC=null;a.xW=null;}
function SU(a,b,c,d){var e=new AE2();AXp(e,a,b,c,d);return e;}
function AXp(a,b,c,d,e){a.Fg=b;a.E5=c;a.uC=d;a.xW=e;}
function EW(){var a=this;D.call(a);a.HD=null;a.td=0;}
function Bf4(a,b){var c=new EW();FT(c,a,b);return c;}
function FT(a,b,c){a.HD=b;a.td=c;}
function A0K(a){return a.td;}
function ATu(a,b){return a!==b?0:1;}
function AX4(a){return MN(a);}
function JU(a){var b;b=Dl(a);if(!Q5(JJ(b),F(EW)))b=JJ(b);return b;}
function XM(a,b){var c,d;if(JU(b)===JU(a))return R(a.td,b.td);c=new Cc;d=new S;V(d);Bl(c,T(H(H(H(H(d,B(199)),IE(JU(a))),B(200)),IE(JU(b)))));M(c);}
function AXB(a,b){return XM(a,b);}
function E8(){EW.call(this);}
var BfE=null;var BfD=null;var BfC=null;var Bf5=null;function AHj(){var b,c,d;b=new E8;FT(b,B(201),0);BfE=b;b=new E8;FT(b,B(202),1);BfD=b;b=new E8;FT(b,B(203),2);BfC=b;c=J(E8,3);d=c.data;d[0]=BfE;d[1]=BfD;d[2]=BfC;Bf5=c;}
function Qt(){}
function U_(){D.call(this);this.yF=null;}
function BaG(b){var c;c=new U_;c.yF=b;return c;}
function CM(a,b){a.yF.Gr(b);}
function A18(a,b){a.yF.IZ(b);}
function AQG(){D.call(this);}
function Xq(){}
function W7(){var a=this;D.call(a);a.vq=null;a.Ac=null;}
function ARg(a){var b,c,d;if(a.vq.readyState==4){b=new Uint8Array(a.vq.response);c=$rt_createByteArray(b.byteLength);Bd();BdK=c;d=0;while(d<V8().data.length){V8().data[d]=b[d]<<24>>24;d=d+1|0;}CM(a.Ac,B(204));}}
function A10(a){ARg(a);}
function H3(){D.call(this);}
function AQf(){var a=this;H3.call(a);a.w8=null;a.ko=0;a.F$=0;a.qO=0;}
function Uo(a){var b=new AQf();AT3(b,a);return b;}
function AT3(a,b){var c;c=b.data.length;a.w8=b;a.ko=0;a.F$=0;a.qO=0+c|0;}
function A4G(a){var b,c,d;if(a.ko>=a.qO)b=(-1);else{c=a.w8.data;d=a.ko;a.ko=d+1|0;b=c[d]&255;}return b;}
function A_k(a,b,c,d){var e,f,g,h,i;e=CB(d,a.qO-a.ko|0);f=0;while(f<e){g=b.data;d=c+1|0;h=a.w8.data;i=a.ko;a.ko=i+1|0;g[c]=h[i];f=f+1|0;c=d;}if(e<=0)e=(-1);return e;}
function A5s(a){return a.qO-a.ko|0;}
function IV(){H3.call(this);this.kr=null;}
function Bf6(a){var b=new IV();R8(b,a);return b;}
function R8(a,b){a.kr=b;}
function AKB(a){return a.kr.wZ();}
function Pn(){}
function P2(){IV.call(this);this.ea=null;}
function O0(a){var b=new P2();AIv(b,a);return b;}
function AIv(a,b){R8(a,b);a.ea=$rt_createByteArray(8);}
function NS(a,b){var c;c=b.data;return a.kr.od(b,0,c.length);}
function N2(a){var b,c;b=a.kr.Cv();if(b>=0)return b<<24>>24;c=new FH;O(c);M(c);}
function J8(a,b){var c,d;c=0;while(c<b){d=a.kr.od(a.ea,c,b-c|0);if(d==(-1))return d;c=c+d|0;}return c;}
function APm(a){return $rt_longBitsToDouble(Tl(a));}
function AA2(a){return $rt_intBitsToFloat(H9(a));}
function AMV(a,b){QR(a,b,0,b.data.length);}
function QR(a,b,c,d){var e,f;if(d<0){e=new BO;O(e);M(e);}if(!d)return;if(a.kr===null){e=new EE;O(e);M(e);}if(b===null){e=new EE;O(e);M(e);}if(c>=0&&c<=(b.data.length-d|0)){while(d>0){f=a.kr.od(b,c,d);if(f<0){e=new FH;O(e);M(e);}c=c+f|0;d=d-f|0;}return;}e=new BO;O(e);M(e);}
function H9(a){var b;if(J8(a,4)<0){b=new FH;O(b);M(b);}return (a.ea.data[0]&255)<<24|(a.ea.data[1]&255)<<16|(a.ea.data[2]&255)<<8|a.ea.data[3]&255;}
function Tl(a){var b;if(J8(a,8)<0){b=new FH;O(b);M(b);}return Long_or(Long_shl(Long_and(Long_fromInt((a.ea.data[0]&255)<<24|(a.ea.data[1]&255)<<16|(a.ea.data[2]&255)<<8|a.ea.data[3]&255),new Long(4294967295, 0)),32),Long_and(Long_fromInt((a.ea.data[4]&255)<<24|(a.ea.data[5]&255)<<16|(a.ea.data[6]&255)<<8|a.ea.data[7]&255),new Long(4294967295, 0)));}
function XL(a){var b;if(J8(a,2)<0){b=new FH;O(b);M(b);}return ((a.ea.data[0]&255)<<24>>16|a.ea.data[1]&255)<<16>>16;}
function APG(a){var b;if(J8(a,2)<0){b=new FH;O(b);M(b);}return ((a.ea.data[0]&255)<<8|a.ea.data[1]&255)&65535;}
function GW(a){return ALA(a,APG(a));}
function ALA(a,b){var c,d;c=$rt_createByteArray(b);d=$rt_createCharArray(b);QR(a,c,0,b);return AW2(c,d,0,b);}
function AW2(b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=0;g=0;a:{while(f<e){h=b.data;i=c.data;j=f+1|0;k=h[d+f|0]&65535;i[g]=k;l=i[g];if(k<128)g=g+1|0;else if((l&224)==192){if(j>=e){m=new Hx;Bl(m,B(205));M(m);}k=j+1|0;j=h[d+j|0];if((j&192)!=128){m=new Hx;Bl(m,B(206));M(m);}n=g+1|0;i[g]=((l&31)<<6|j&63)&65535;g=n;j=k;}else{if((l&240)!=224){m=new Hx;Bl(m,B(206));M(m);}f=j+1|0;if(f>=e){m=new Hx;Bl(m,B(206));M(m);}n=h[d+j|0];j=f+1|0;o=h[d+f|0];if((n&192)!=128)break a;if((o&192)!=128)break a;f=g+1|0;i[g]=((l&15)<<12|(n&63)
<<6|o&63)&65535;g=f;}f=j;}return Lj(c,0,g);}m=new Hx;Bl(m,B(206));M(m);}
function MV(){var a=this;D.call(a);a.wv=null;a.H6=null;}
function R2(b){var c,d;if(Iz(b))M(ALq(b));if(!APS(Z(b,0)))M(ALq(b));c=1;while(c<Bi(b)){a:{d=Z(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(APS(d))break a;else M(ALq(b));}}c=c+1|0;}}
function APS(b){return !(b>=48&&b<=57)&&!(b>=97&&b<=122)&&b<65&&b>90?0:1;}
function X7(b){var c;if(b===null){b=new Cc;Bl(b,B(207));M(b);}R2(b);c=CP(Bf7,AOk(b));if(c!==null)return c;c=new Vg;O(c);c.Iw=b;M(c);}
function AN4(a,b){var c,d,$$je;a:{try{b=AJM(ADJ(AQ3(AFw(a),Bf8),Bf8),b);}catch($$e){$$je=Bg($$e);if($$je instanceof G0){c=$$je;break a;}else{throw $$e;}}return b;}d=new W2;d.os=1;d.rS=1;d.vA=B(208);d.jG=c;M(d);}
function ABy(a,b){return AJE(a.wv,b.wv);}
function A6w(a,b){return ABy(a,b);}
function WQ(){var a=this;IV.call(a);a.g5=null;a.ol=null;a.qk=0;a.oK=0;a.ED=0;a.Eg=0;a.wH=null;a.G0=null;}
function AS1(a){var b;if(a.qk){b=new BW;Bl(b,B(209));M(b);}return ALZ(a,a.wH,0,1)==(-1)?(-1):a.wH.data[0]&255;}
function ALZ(a,b,c,d){var e,f,g;if(a.qk){e=new BW;Bl(e,B(209));M(e);}if(b===null){e=new EE;O(e);M(e);}if(c>=0&&d>=0&&d<=(b.data.length-c|0)){if(!d)return 0;if(a.oK)return (-1);f=0;AAI(a.g5,b,c,d);a:{while(!a.oK){if(!a.g5.N)ABj(a);b:{g=AF5(a.g5,0);f=f+(a.g5.pP-c|0)|0;c=a.g5.pP;switch(g){case -3:e=new BW;Bl(e,a.g5.b9);M(e);case 1:case 2:break;default:break b;}a.oK=1;if(g==2)return (-1);}if(!a.g5.id)break a;}}return f;}e=new BO;O(e);M(e);}
function A0m(a){var b;if(!a.qk){if(!a.oK)return 1;return 0;}b=new BW;Bl(b,B(209));M(b);}
function ABj(a){var b,c;if(a.qk){b=new BW;Bl(b,B(209));M(b);}a:{c=a.kr.od(a.ol,0,a.ol.data.length);if(c==(-1)){if(a.g5.jy.d0)break a;if(Yj(a.g5))break a;a.ol.data[0]=0;c=1;}AJ9(a.g5,a.ol,0,c,1);return;}if(Long_ne(a.g5.jy.rU,Long_fromInt(-1))){b=new BW;Bl(b,B(210));M(b);}b=new FH;Bl(b,B(211));M(b);}
function M_(){var a=this;D.call(a);a.h$=null;a.ju=0;a.nn=Long_ZERO;}
function Jc(a,b){var c,d;c=a.h$.data;d=a.ju;a.ju=d+1|0;c[d]=b;if(a.ju==a.h$.data.length){S9(a,a.h$,0);a.ju=0;}a.nn=Long_add(a.nn,Long_fromInt(1));}
function ADT(a,b,c,d){a:{while(a.ju){if(d<=0)break a;Jc(a,b.data[c]);c=c+1|0;d=d+(-1)|0;}}while(d>a.h$.data.length){S9(a,b,c);c=c+a.h$.data.length|0;d=d-a.h$.data.length|0;a.nn=Long_add(a.nn,Long_fromInt(a.h$.data.length));}while(d>0){Jc(a,b.data[c]);c=c+1|0;d=d+(-1)|0;}}
function APk(a){var b;b=Long_shl(a.nn,3);Jc(a,(-128));while(a.ju){Jc(a,0);}AK1(a,b);ME(a);}
function ADt(){var a=this;M_.call(a);a.pz=0;a.pA=0;a.pB=0;a.pC=0;a.pD=0;a.ek=null;a.mV=0;}
function BaX(){var a=new ADt();A$i(a);return a;}
function A$i(a){a.h$=$rt_createByteArray(4);a.ju=0;a.ek=$rt_createIntArray(80);OL(a);}
function S9(a,b,c){var d,e;d=b.data;b=a.ek.data;e=a.mV;a.mV=e+1|0;b[e]=(d[c]&255)<<24|(d[c+1|0]&255)<<16|(d[c+2|0]&255)<<8|d[c+3|0]&255;if(a.mV==16)ME(a);}
function HN(a,b,c,d){c=c.data;c[d]=b>>>24<<24>>24;c[d+1|0]=b>>>16<<24>>24;c[d+2|0]=b>>>8<<24>>24;c[d+3|0]=b<<24>>24;}
function AK1(a,b){if(a.mV>14)ME(a);a.ek.data[14]=b.hi;a.ek.data[15]=Long_and(b,Long_fromInt(-1)).lo;}
function AL_(a,b,c){APk(a);HN(a,a.pz,b,c);HN(a,a.pA,b,c+4|0);HN(a,a.pB,b,c+8|0);HN(a,a.pC,b,c+12|0);HN(a,a.pD,b,c+16|0);OL(a);return 20;}
function OL(a){var b;a.nn=Long_ZERO;a.ju=0;b=0;while(b<a.h$.data.length){a.h$.data[b]=0;b=b+1|0;}a.pz=1732584193;a.pA=(-271733879);a.pB=(-1732584194);a.pC=271733878;a.pD=(-1009589776);a.mV=0;b=0;while(b!=a.ek.data.length){a.ek.data[b]=0;b=b+1|0;}}
function Vi(a,b,c,d){return b^c^d;}
function Ff(a,b,c){return b<<c|b>>>(32-c|0);}
function ME(a){var b,c,d,e,f,g,h,i,j;b=16;while(b<=79){a.ek.data[b]=Ff(a,a.ek.data[b-3|0]^a.ek.data[b-8|0]^a.ek.data[b-14|0]^a.ek.data[b-16|0],1);b=b+1|0;}c=a.pz;d=a.pA;e=a.pB;f=a.pC;g=a.pD;h=0;while(h<=19){i=(((Ff(a,c,5)+(d&e|(d^(-1))&f)|0)+g|0)+a.ek.data[h]|0)+1518500249|0;b=Ff(a,d,30);h=h+1|0;g=f;f=e;e=b;d=c;c=i;}j=20;while(j<=39){i=(((Ff(a,c,5)+Vi(a,d,e,f)|0)+g|0)+a.ek.data[j]|0)+1859775393|0;b=Ff(a,d,30);j=j+1|0;g=f;f=e;e=b;d=c;c=i;}h=40;while(h<=59){i=(((Ff(a,c,5)+(d&e|d&f|e&f)|0)+g|0)+a.ek.data[h]|0)
+(-1894007588)|0;b=Ff(a,d,30);h=h+1|0;g=f;f=e;e=b;d=c;c=i;}j=60;while(j<=79){i=(((Ff(a,c,5)+Vi(a,d,e,f)|0)+g|0)+a.ek.data[j]|0)+(-899497514)|0;b=Ff(a,d,30);j=j+1|0;g=f;f=e;e=b;d=c;c=i;}a.pz=a.pz+c|0;a.pA=a.pA+d|0;a.pB=a.pB+e|0;a.pC=a.pC+f|0;a.pD=a.pD+g|0;a.mV=0;b=0;while(b!=a.ek.data.length){a.ek.data[b]=0;b=b+1|0;}}
function AJc(){D.call(this);}
function Bf9(){var a=new AJc();A57(a);return a;}
function A57(a){return;}
function O8(b,c){var d,e,f,g;b=b.data;d=$rt_createCharArray(c);e=d.data;f=CB(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Oi(b,c){var d,e,f,g;b=b.data;d=$rt_createByteArray(c);e=d.data;f=CB(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Nt(b,c){var d,e,f,g;d=b.data;e=AEI(Kx(Dl(b)),c);f=CB(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function M2(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new Cc;O(f);M(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function ZF(b,c,d,e){var f,g;if(c>d){e=new Cc;O(e);M(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function P0(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;e=J(D,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=CB(j,h+f|0);l=h+(2*f|0)|0;m=CB(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.qh(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f=f*2|0;i=g;g=e;e
=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AOu(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length;if(d>e){f=new Cc;O(f);M(f);}g=e-1|0;a:{while(true){e=(d+g|0)/2|0;h=b[e];if(h==c)break;if(c>=h){d=e+1|0;if(d>g){e= -e-2|0;break a;}}else{g=e-1|0;if(g<d){e= -e-1|0;break a;}}}}return e;}
function Jb(){var a=this;D.call(a);a.Dd=0;a.B7=null;a.xk=null;}
function Bf$(a,b,c){var d=new Jb();RK(d,a,b,c);return d;}
function RK(a,b,c,d){a.Dd=b;a.B7=c;a.xk=d;}
function ABC(a,b){var c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(Yu(b,a.B7)<a.Dd){c=0;d=null;if(c<10){e=1;f=b.bg;$p=1;continue _;}}return;case 1:AOz(a,b,e,f,d);if(C()){break _;}c=c+1|0;if(c>=10)return;e=1;f=b.bg;continue _;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function A5c(a,b,c,d){return CO((c+E(b.q,256)|0)-128|0,E(b.q,128),(d+E(b.q,256)|0)-128|0);}
function AOz(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=K(d.d);h=K(d.e);i=E(b.q,a.xk.data.length);j=a.Aq(b,g,h);k=j.eF;l=j.e0;m=j.eG;$p=1;case 1:$z
=AAD(b,k,l,m);if(C()){break _;}c=$z;if(c)return 0;$p=2;case 2:$z=AB2(b,k,l,m);if(C()){break _;}e=$z;if(e!==Bf_)return 0;n=0;while(n<3){o=6;p=0;h=k;q=l;r=m;if(p<3){h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;}return f;case 3:$z=AAD(b,h,c,r);if(C()){break _;}c=$z;if(c){$p=4;continue _;}p=p+1|0;while(true){if(p<3){h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;continue _;}n=n+1|0;if(n>=3)break;o
=6;p=0;h=k;q=l;r=m;}return f;case 4:$z=AAD(b,h,q,r);if(C()){break _;}c=$z;if(!c){$p=5;continue _;}p=p+1|0;while(true){if(p<3){h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 5:$z=AB2(b,h,q,r);if(C()){break _;}e=$z;if(!e.nF()){c=q+1|0;$p=6;continue _;}p=p+1|0;while(true){if(p<3){h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|
0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 6:a:{$z=AAD(b,h,c,r);if(C()){break _;}c=$z;if(!c){b:{s=h+0.5;t=q+1.0;u=r+0.5;if(d===null){v=s-b.fk;w=t-b.p1;x=u-b.fj;if(v*v+w*w+x*x>=1024.0)break b;break a;}y=s-d.d;z=t-d.j;ba=u-d.e;if(y*y+z*z+ba*ba<1024.0)break a;}c:{try{e=a.xk.data[i];bb=J(FS,1);bb.data[0]=F(F0);e=WC(e,bb);bb=J(D,1);bb.data[0]=b;bc=WF(e,bb);break c;}catch($$e){$$je=Bg($$e);if($$je instanceof BD){}else{throw $$e;}}return f;}y=s;z=t;ba=u;Kt(bc,y,z,ba,N(b.q)*360.0,0.0);$p=7;continue _;}}p=p+
1|0;while(true){if(p<3){h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 7:$z=bc.uT(y,z,ba);if(C()){break _;}c=$z;if(c){f=f+1|0;$p=8;continue _;}p=p+1|0;while(true){if(p<3){h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 8:AOj(b,bc);if(C()){break _;}p=p+1|0;while(true){if(p<3)
{h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,$p);}
function U0(){Jb.call(this);this.Gz=null;}
function A1Y(a,b,c,d){return CO((c+E(b.q,256)|0)-128|0,E(b.q,E(b.q,E(b.q,112)+8|0)+8|0),(d+E(b.q,256)|0)-128|0);}
function C5(){var a=this;D.call(a);a.mE=0;a.bH=null;a.bB=null;a.l=null;a.bS=0.0;a.cS=0.0;a.bR=0.0;a.d=0.0;a.j=0.0;a.e=0.0;a.g=0.0;a.i=0.0;a.h=0.0;a.u=0.0;a.I=0.0;a.P=0.0;a.T=0.0;a.L=null;a.cx=0;a.jZ=0;a.x9=0;a.lm=0;a.cR=0;a.c4=0.0;a.c1=0.0;a.eO=0.0;a.tY=0.0;a.hc=0.0;a.i$=0;a.fI=0.0;a.rh=0;a.cs=0.0;a.b7=0.0;a.ct=0.0;a.el=0.0;a.rs=0.0;a.o6=0;a.n7=0.0;a.I6=0;a.m=null;a.oS=0;a.nK=0;a.cV=0;a.n8=0;a.tp=0;a.dy=0;a.ga=0;a.oB=0;a.tK=null;a.g7=0.0;a.g0=0.0;}
function Bga(a){var b=new C5();FC(b,a);return b;}
function FC(a,b){a.mE=0;a.L=Nv(0.0,0.0,0.0,0.0,0.0,0.0);a.cx=0;a.jZ=0;a.x9=0;a.lm=1;a.cR=0;a.c4=0.0;a.c1=0.6000000238418579;a.eO=1.7999999523162842;a.tY=0.0;a.hc=0.0;a.i$=1;a.fI=0.0;a.rh=1;a.el=0.0;a.rs=0.0;a.o6=0;a.n7=0.0;a.I6=0;a.m=new DB;a.oS=0;a.nK=1;a.cV=0;a.n8=300;a.tp=0;a.dy=0;a.ga=300;a.oB=1;a.l=b;CT(a,0.0,0.0,0.0);}
function Cb(a){a.cR=1;}
function D1(a,b,c){a.c1=b;a.eO=c;}
function WS(a,b,c){a.u=b;a.I=c;}
function CT(a,b,c,d){var e,f,g,h,i,j;a.d=b;a.j=c;a.e=d;e=a.c1/2.0;f=a.eO/2.0;g=a.L;h=e;i=b-h;j=f;M7(g,i,c-j,d-h,b+h,c+j,d+h);}
function AI$(a){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.Jf();if(C()){break _;}return;default:E$();}}C3().s(a,$p);}
function AEV(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bB!==null&&a.bB.cR)a.bB=null;a.oS=a.oS+1|0;a.tY=a.hc;a.bS=a.d;a.cS=a.j;a.bR=a.e;a.T=a.I;a.P=a.u;$p=1;case 1:$z=a.HL();if(C()){break _;}b=$z;if(!b)a.tp=0;else{a:{if(!a.tp&&!a.oB){c=Ce(a.g*a.g*0.20000000298023224+a.i*a.i+a.h*a.h*0.20000000298023224)*0.20000000298023224;if(c>1.0)c=1.0;Dh(a.l,a,B(212),c,1.0+(N(a.m)-N(a.m))*0.4000000059604645);d
=K(a.L.M);b=0;e=d+1.0;while(b<1.0+a.c1*20.0){f=(N(a.m)*2.0-1.0)*a.c1;g=(N(a.m)*2.0-1.0)*a.c1;BU(a.l,B(213),a.d+f,e,a.e+g,a.g,a.i-N(a.m)*0.20000000298023224,a.h);b=b+1|0;}b=0;while(true){if(b>=1.0+a.c1*20.0)break a;f=(N(a.m)*2.0-1.0)*a.c1;g=(N(a.m)*2.0-1.0)*a.c1;BU(a.l,B(214),a.d+f,e,a.e+g,a.g,a.i,a.h);b=b+1|0;}}}a.fI=0.0;a.tp=1;a.cV=0;}if(a.cV>0){if(!(a.cV%20|0)){h=null;b=1;$p=4;continue _;}a.cV=a.cV-1|0;}$p=2;case 2:$z=ACo(a);if(C()){break _;}b=$z;if(b){h=null;b=10;$p=3;continue _;}if(a.j>=(-64.0)){a.oB=0;return;}$p
=5;continue _;case 3:a.fs(h,b);if(C()){break _;}a.cV=600;if(a.j>=(-64.0)){a.oB=0;return;}$p=5;continue _;case 4:a.fs(h,b);if(C()){break _;}a.cV=a.cV-1|0;$p=2;continue _;case 5:a.DS();if(C()){break _;}a.oB=0;return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function X2(a){Cb(a);}
function AHg(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=Ue(a.L,b,c,d);f=a.l;$p=1;case 1:$z=XV(f,a,e);if(C()){break _;}f=$z;if(f.s>0)return 0;f=a.l;$p=2;case 2:$z=AJk(f,e);if(C()){break _;}g=$z;return g?0:1;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ARF(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.o6){F2(a.L,b,c,d);a.d=(a.L.R+a.L.V)/2.0;a.j=a.L.M+a.c4-a.el;a.e=(a.L.S+a.L.W)/2.0;return;}e=a.d;f=a.e;g=Qf(a.L);h=a.l;i=Jg(a.L,b,c,d);$p=1;case 1:$z
=XV(h,a,i);if(C()){break _;}j=$z;k=0;l=c;while(k<CX(j)){l=Wa(Y(j,k),a.L,l);k=k+1|0;}F2(a.L,0.0,l,0.0);if(a.lm){m=d;n=b;}else if(c===l){m=d;n=b;}else{n=0.0;m=n;l=n;}a:{b:{if(!a.cx){if(c===l)break b;if(c>=0.0)break b;}o=1;break a;}o=0;}p=0;while(p<CX(j)){n=Qw(Y(j,p),a.L,n);p=p+1|0;}F2(a.L,n,0.0,0.0);if(!a.lm&&b!==n){n=0.0;m=n;l=n;}k=0;while(k<CX(j)){m=Uh(Y(j,k),a.L,m);k=k+1|0;}F2(a.L,0.0,0.0,m);if(!a.lm&&d!==m){n=0.0;m=n;l=n;}c:{if(a.rs<=0.0){q=n;r=l;s=m;}else if(!o){q=n;r=l;s=m;}else if(a.el>=0.05000000074505806)
{q=n;r=l;s=m;}else{if(b!==n)break c;if(d!==m)break c;q=n;r=l;s=m;}a.d=(a.L.R+a.L.V)/2.0;a.j=a.L.M+a.c4-a.el;a.e=(a.L.S+a.L.W)/2.0;t=R(b,q);a.jZ=!t&&d===s?0:1;k=R(c,r);a.cx=k&&c<0.0?1:0;a.x9=!a.jZ&&!k?0:1;if(!a.cx){if(r<0.0)a.fI=a.fI-r;}else if(a.fI>0.0){u=a.fI;$p=3;continue _;}if(t)a.g=0.0;if(k)a.i=0.0;if(d!==s)a.h=0.0;l=a.d-e;m=a.e-f;a.hc=a.hc+Ce(l*l+m*m)*0.6;if(!a.i$){a.el=a.el*0.4000000059604645;$p=4;continue _;}v=K(a.d);w=K(a.j-0.20000000298023224-a.c4);x=K(a.e);i=a.l;$p=6;continue _;}r=a.rs;i=Qf(a.L);Xf(a.L,
g);h=a.l;g=Jg(a.L,b,r,d);$p=2;case 2:$z=XV(h,a,g);if(C()){break _;}h=$z;y=0;while(y<CX(h)){r=Wa(Y(h,y),a.L,r);y=y+1|0;}F2(a.L,0.0,r,0.0);if(a.lm){s=d;q=b;}else if(c===r){s=d;q=b;}else{q=0.0;s=q;r=q;}k=0;while(k<CX(h)){q=Qw(Y(h,k),a.L,q);k=k+1|0;}F2(a.L,q,0.0,0.0);if(!a.lm&&b!==q){q=0.0;s=q;r=q;}t=0;while(t<CX(h)){s=Uh(Y(h,t),a.L,s);t=t+1|0;}F2(a.L,0.0,0.0,s);if(!a.lm&&d!==s){q=0.0;s=q;r=q;}if(n*n+m*m>=q*q+s*s){Xf(a.L,i);q=n;r=l;s=m;}else a.el=a.el+0.5;a.d=(a.L.R+a.L.V)/2.0;a.j=a.L.M+a.c4-a.el;a.e=(a.L.S+a.L.W)
/2.0;t=R(b,q);a.jZ=!t&&d===s?0:1;k=R(c,r);a.cx=k&&c<0.0?1:0;a.x9=!a.jZ&&!k?0:1;if(!a.cx){if(r<0.0)a.fI=a.fI-r;}else if(a.fI>0.0){u=a.fI;$p=3;continue _;}if(t)a.g=0.0;if(k)a.i=0.0;if(d!==s)a.h=0.0;l=a.d-e;m=a.e-f;a.hc=a.hc+Ce(l*l+m*m)*0.6;if(!a.i$){a.el=a.el*0.4000000059604645;$p=4;continue _;}v=K(a.d);w=K(a.j-0.20000000298023224-a.c4);x=K(a.e);i=a.l;$p=6;continue _;case 3:a.DG(u);if(C()){break _;}a.fI=0.0;if(t)a.g=0.0;if(k)a.i=0.0;if(d!==s)a.h=0.0;l=a.d-e;m=a.e-f;a.hc=a.hc+Ce(l*l+m*m)*0.6;if(!a.i$){a.el=a.el
*0.4000000059604645;$p=4;continue _;}v=K(a.d);w=K(a.j-0.20000000298023224-a.c4);x=K(a.e);i=a.l;$p=6;continue _;case 4:$z=a.HL();if(C()){break _;}t=$z;i=a.l;h=a.L;$p=5;case 5:$z=ARa(i,h);if(C()){break _;}k=$z;if(!k){if(a.cV<=0)a.cV= -a.nK;if(t&&a.cV>0){Dh(a.l,a,B(215),0.699999988079071,1.600000023841858+(N(a.m)-N(a.m))*0.4000000059604645);a.cV= -a.nK;}return;}k=1;$p=7;continue _;case 6:$z=ACx(i,v,w,x);if(C()){break _;}y=$z;if(a.hc>a.rh&&y>0){a.rh=a.rh+1|0;L();h=BeP.data[y].gK;if(!BeP.data[y].b_.nF())Dh(a.l,a,
Kg(h),AMO(h)*0.15000000596046448,Yh(h));i=BeP.data[y];h=a.l;$p=8;continue _;}a.el=a.el*0.4000000059604645;$p=4;continue _;case 7:a.FX(k);if(C()){break _;}if(!t){a.cV=a.cV+1|0;if(!a.cV)a.cV=300;}if(t&&a.cV>0){Dh(a.l,a,B(215),0.699999988079071,1.600000023841858+(N(a.m)-N(a.m))*0.4000000059604645);a.cV= -a.nK;}return;case 8:i.oJ(h,v,w,x,a);if(C()){break _;}a.el=a.el*0.4000000059604645;$p=4;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$p);}
function A1M(a){return null;}
function AJ5(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=null;$p=1;case 1:a.fs(c,b);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,$p);}
function Zk(a,b){return;}
function AE7(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.l;c=Dv(a.L,0.0,(-0.4000000059604645),0.0);d=BfQ;$p=1;case 1:$z=AAu(b,c,d,a);if(C()){break _;}e=$z;return e;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AGI(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.j+a.rL();d=K(a.d);e=EX(K(c));f=K(a.e);g=a.l;$p=1;case 1:$z=ACx(g,d,e,f);if(C()){break _;}h=$z;if(h){L();if(BeP.data[h].b_===b){b=a.l;$p=2;continue _;}}return 0;case 2:$z=AEK(b,d,e,f);if(C()){break _;}d=$z;return c>=(e+1|0)-(Jx(d)-0.1111111119389534)?0:1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ACo(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.l;c=Dv(a.L,0.0,(-0.4000000059604645),0.0);d=BfR;$p=1;case 1:$z=AOv(b,c,d);if(C()){break _;}e=$z;return e;default:E$();}}C3().s(a,b,c,d,e,$p);}
function L3(a,b,c,d){var e,f,g;e=D_(b*b+c*c);if(e>=0.009999999776482582){if(e<1.0)e=1.0;d=d/e;b=b*d;c=c*d;f=Bq(a.u*3.1415927410125732/180.0);g=BC(a.u*3.1415927410125732/180.0);a.g=a.g+b*g-c*f;a.h=a.h+c*g+b*f;}}
function ADI(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(a.d);d=(a.L.U-a.L.M)*0.66;e=K(a.j-a.c4+d);f=K(a.e);g=a.l;$p=1;case 1:$z=ANj(g,c,e,f);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AUC(a,b){a.l=b;}
function Kt(a,b,c,d,e,f){a.d=b;a.bS=b;b=c+a.c4;a.j=b;a.cS=b;a.e=d;a.bR=d;a.u=e;a.I=f;CT(a,a.d,a.j,a.e);}
function AR5(a,b){var c,d,e;c=a.d-b.d;d=a.j-b.j;e=a.e-b.e;return D_(c*c+d*d+e*e);}
function AGN(a,b,c,d){var e,f,g;e=a.d-b;f=a.j-c;g=a.e-d;return e*e+f*f+g*g;}
function Sn(a,b,c,d){var e,f,g;e=a.d-b;f=a.j-c;g=a.e-d;return Ce(e*e+f*f+g*g);}
function LD(a,b){var c,d,e;c=a.d-b.d;d=a.j-b.j;e=a.e-b.e;return c*c+d*d+e*e;}
function A6T(a,b){return;}
function A5D(a,b){var c,d,e,f,g;c=b.d-a.d;d=b.e-a.e;e=c<0.0? -c:c;f=d<0.0? -d:d;if(e>f)f=e;if(f>=0.009999999776482582){e=Ce(f);c=c/e;f=d/e;g=1.0/e;if(g>1.0)g=1.0;c=c*g;e=f*g;c=c*0.05000000074505806;e=e*0.05000000074505806;c=c*(1.0-a.n7);e=e*(1.0-a.n7);Hs(a, -c,0.0, -e);Hs(b,c,0.0,e);}}
function Hs(a,b,c,d){a.g=a.g+b;a.i=a.i+c;a.h=a.h+d;}
function AJI(a,b,c){return 0;}
function A9L(a){return 0;}
function A7W(a){return 0;}
function A_j(a,b,c){return;}
function Sg(a,b){var c,d,e;c=a.d-b.x;d=a.j-b.z;e=a.e-b.w;return AHf(a,c*c+d*d+e*e);}
function AHf(a,b){var c;c=APX(a.L)*64.0;return b>=c*c?0:1;}
function ALv(a,b){var c,d;c=$rt_createDoubleArray(3);d=c.data;d[0]=a.d;d[1]=a.j;d[2]=a.e;HH(b,B(216),V$(a,c));c=$rt_createDoubleArray(3);d=c.data;d[0]=a.g;d[1]=a.i;d[2]=a.h;HH(b,B(217),V$(a,c));c=$rt_createFloatArray(2);d=c.data;d[0]=a.u;d[1]=a.I;HH(b,B(218),AMB(a,c));AR8(b,B(219),a.fI);Ft(b,B(220),a.cV<<16>>16);Ft(b,B(221),a.ga<<16>>16);S2(b,B(222),a.cx);ABQ(a,b);}
function YU(a,b){var c,d,e,f,g;c=Kh(b,B(216));d=Kh(b,B(217));e=Kh(b,B(218));CT(a,0.0,0.0,0.0);a.g=Fc(d,0).iM;a.i=Fc(d,1).iM;a.h=Fc(d,2).iM;f=Fc(c,0).iM;a.d=f;a.cs=f;a.bS=f;f=Fc(c,1).iM;a.j=f;a.b7=f;a.cS=f;f=Fc(c,2).iM;a.e=f;a.ct=f;a.bR=f;g=Fc(e,0).nm;a.u=g;a.P=g;g=Fc(e,1).nm;a.I=g;a.T=g;a.fI=AMH(b,B(219));a.cV=FL(b,B(220));a.ga=FL(b,B(221));a.cx=Uu(b,B(222));CT(a,a.d,a.j,a.e);AOY(a,b);}
function V$(a,b){var c,d,e,f,g;b=b.data;c=L9();d=b.length;e=0;while(e<d){f=b[e];g=new Mp;Cw(g);g.iM=f;Js(c,g);e=e+1|0;}return c;}
function AMB(a,b){var c,d,e;b=b.data;c=L9();d=b.length;e=0;while(e<d){Js(c,A6R(b[e]));e=e+1|0;}return c;}
function ABV(a,b,c){var d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0.0;$p=1;case 1:$z=AGH(a,b,c,d);if(C()){break _;}e=$z;return e;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AGH(a,b,c,d){var e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=Hf(a.l,a.d,a.j+d,a.e,Kz(b,c));e.hb=10;f=a.l;$p=1;case 1:AOj(f,e);if(C()){break _;}return e;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AHz(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=K(a.d);c=K(a.j+a.rL());d=K(a.e);e=a.l;$p=1;case 1:$z=AAD(e,b,c,d);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AWK(a,b){return 0;}
function AW1(a,b){return null;}
function AFd(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bB.cR){a.bB=null;return;}a.g=0.0;a.i=0.0;a.h=0.0;$p=1;case 1:a.ep();if(C()){break _;}CT(a,a.bB.d,a.bB.j+a.c4+a.bB.Af(),a.bB.e);a.g0=a.g0+a.bB.u-a.bB.P;a.g7=a.g7+a.bB.I-a.bB.T;while(a.g0>=180.0){a.g0=a.g0-360.0;}while(a.g0<(-180.0)){a.g0=a.g0+360.0;}while(a.g7>=180.0){a.g7=a.g7-360.0;}while(a.g7<(-180.0)){a.g7=a.g7+360.0;}b=a.g0*0.5;c=a.g7*0.5;d=10.0;if(b>d)b
=d;e=(-10.0);if(b<e)b=e;if(c<=d)d=c;if(d>=e)e=d;a.g0=a.g0-b;a.g7=a.g7-e;a.u=a.u+b;a.I=a.I+e;return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function A9P(a){return a.eO*0.75;}
function Pk(a,b){a.g7=0.0;a.g0=0.0;if(a.bB===b){a.bB.bH=null;a.bB=null;}else{if(a.bB!==null)a.bB.bH=null;if(b.bH!==null)b.bH.bB=null;a.bB=b;b.bH=a;}}
function Xm(a,b,c){var d,e;d=a.I;e=a.u;a.u=a.u+b*0.15;a.I=a.I-c*0.15;if(a.I<(-90.0))a.I=(-90.0);if(a.I>90.0)a.I=90.0;a.T=a.T+a.I-d;a.P=a.P+a.u-e;}
function EP(){var a=this;C5.call(a);a.o1=0;a.JK=0.0;a.G6=0.0;a.Ir=0.0;a.dG=0.0;a.e$=0.0;a.z3=0.0;a.ni=0.0;a.j4=0.0;a.mg=0.0;a.G8=0;a.yu=null;a.G7=0;a.D6=0.0;a.E3=null;a.Jx=0.0;a.u1=0;a.Jy=0.0;a.bT=0;a.tG=0;a.uZ=0;a.dE=0;a.EP=0;a.kI=0.0;a.c2=0;a.dz=0;a.k1=0.0;a.jn=0.0;a.Cn=0;a.Fi=0;a.JD=0.0;a.jV=0.0;a.cg=0.0;a.gn=0.0;a.hn=0;a.iO=0.0;a.gD=0.0;a.kJ=0.0;a.hJ=0;a.zU=0.0;a.s2=0.0;}
function PO(a){return a.yu;}
function AXu(a){return a.cR?0:1;}
function A1Q(a){return a.cR?0:1;}
function AQq(a){return a.eO*0.8500000238418579;}
function ANr(a){var b,c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AEV(a);if(C()){break _;}b=E(a.m,1000);c=a.uZ;a.uZ=c+1|0;if(b<c){a.uZ=(-80);d=a.wC();if(d!==null)Dh(a.l,a,d,1.0,(N(a.m)-N(a.m))*0.20000000298023224+1.0);}if(H8(a)){$p=2;continue _;}if(H8(a)){d=BfQ;$p=3;continue _;}a.ga=a.n8;a.k1=a.jn;if(a.dz>0)a.dz=a.dz-1|0;if(a.dE>0)a.dE=a.dE-1|0;if(a.dy
>0)a.dy=a.dy-1|0;if(a.bT<=0){a.c2=a.c2+1|0;if(a.c2>20){$p=6;continue _;}}a.mg=a.j4;a.e$=a.dG;a.P=a.u;a.T=a.I;return;case 2:$z=AHz(a);if(C()){break _;}e=$z;if(e){d=null;e=1;$p=4;continue _;}if(H8(a)){d=BfQ;$p=3;continue _;}a.ga=a.n8;a.k1=a.jn;if(a.dz>0)a.dz=a.dz-1|0;if(a.dE>0)a.dE=a.dE-1|0;if(a.dy>0)a.dy=a.dy-1|0;if(a.bT<=0){a.c2=a.c2+1|0;if(a.c2>20){$p=6;continue _;}}a.mg=a.j4;a.e$=a.dG;a.P=a.u;a.T=a.I;return;case 3:$z=AGI(a,d);if(C()){break _;}e=$z;if(!e)a.ga=a.n8;else{a.ga=a.ga-1|0;if(a.ga==(-20)){a.ga=0;e
=0;while(e<8){f=N(a.m)-N(a.m);g=N(a.m)-N(a.m);h=N(a.m)-N(a.m);BU(a.l,B(213),a.d+f,a.j+g,a.e+h,a.g,a.i,a.h);e=e+1|0;}d=null;e=2;$p=5;continue _;}a.cV=0;}a.k1=a.jn;if(a.dz>0)a.dz=a.dz-1|0;if(a.dE>0)a.dE=a.dE-1|0;if(a.dy>0)a.dy=a.dy-1|0;if(a.bT<=0){a.c2=a.c2+1|0;if(a.c2>20){$p=6;continue _;}}a.mg=a.j4;a.e$=a.dG;a.P=a.u;a.T=a.I;return;case 4:a.fs(d,e);if(C()){break _;}if(H8(a)){d=BfQ;$p=3;continue _;}a.ga=a.n8;a.k1=a.jn;if(a.dz>0)a.dz=a.dz-1|0;if(a.dE>0)a.dE=a.dE-1|0;if(a.dy>0)a.dy=a.dy-1|0;if(a.bT<=0){a.c2=a.c2
+1|0;if(a.c2>20){$p=6;continue _;}}a.mg=a.j4;a.e$=a.dG;a.P=a.u;a.T=a.I;return;case 5:a.fs(d,e);if(C()){break _;}a.cV=0;a.k1=a.jn;if(a.dz>0)a.dz=a.dz-1|0;if(a.dE>0)a.dE=a.dE-1|0;if(a.dy>0)a.dy=a.dy-1|0;if(a.bT<=0){a.c2=a.c2+1|0;if(a.c2>20){$p=6;continue _;}}a.mg=a.j4;a.e$=a.dG;a.P=a.u;a.T=a.I;return;case 6:Cb(a);if(C()){break _;}e=0;while(e<20){i=CZ(a.m)*0.02;j=CZ(a.m)*0.02;k=CZ(a.m)*0.02;BU(a.l,B(223),a.d+N(a.m)*a.c1*2.0-a.c1,a.j+N(a.m)*a.eO,a.e+N(a.m)*a.c1*2.0-a.c1,i,j,k);e=e+1|0;}a.mg=a.j4;a.e$=a.dG;a.P=a.u;a.T
=a.I;return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AES(a){var b,c,d,e;b=0;while(b<20){c=CZ(a.m)*0.02;d=CZ(a.m)*0.02;e=CZ(a.m)*0.02;BU(a.l,B(223),a.d+N(a.m)*a.c1*2.0-a.c1-c*10.0,a.j+N(a.m)*a.eO-d*10.0,a.e+N(a.m)*a.c1*2.0-a.c1-e*10.0,c,d,e);b=b+1|0;}}
function AKT(a){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AFd(a);if(C()){break _;}a.z3=a.ni;a.ni=0.0;return;default:E$();}}C3().s(a,$p);}
function AMu(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.Jf();if(C()){break _;}$p=2;case 2:a.ot();if(C()){break _;}b=a.d-a.bS;c=a.e-a.bR;d=Ce(b*b+c*c);e=a.dG;f=0.0;a.z3=a.ni;g=0.0;if(d>0.05000000074505806){g=1.0;f=d*3.0;e=CR(c,b)*180.0/3.1415927410125732-90.0;}if(!a.cx)g=0.0;a.ni=a.ni+(g-a.ni)*0.30000001192092896;h=e-a.dG;while(h<(-180.0)){h=h+360.0;}while
(h>=180.0){h=h-360.0;}a.dG=a.dG+h*0.10000000149011612;i=a.u-a.dG;while(i<(-180.0)){i=i+360.0;}while(i>=180.0){i=i-360.0;}j=i>=(-90.0)&&i<90.0?0:1;if(i<(-75.0))i=(-75.0);if(i>=75.0)i=75.0;a.dG=a.u-i;a.dG=a.dG+i*0.10000000149011612;if(j)f=f*(-1.0);while(a.u-a.P<(-180.0)){a.P=a.P-360.0;}while(a.u-a.P>=180.0){a.P=a.P+360.0;}while(a.dG-a.e$<(-180.0)){a.e$=a.e$-360.0;}while(a.dG-a.e$>=180.0){a.e$=a.e$+360.0;}while(a.I-a.T<(-180.0)){a.T=a.T-360.0;}while(a.I-a.T>=180.0){a.T=a.T+360.0;}a.j4=a.j4+f;return;default:E$();}}C3().s(a,
b,c,d,e,f,g,h,i,j,$p);}
function A1g(a,b,c){D1(a,b,c);}
function UR(a,b){if(a.bT>0){a.bT=a.bT+b|0;if(a.bT>20)a.bT=20;a.dy=a.o1/2|0;}}
function AB4(a,b,c){var d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hn=0;if(a.bT<=0)return 0;a.cg=1.5;if(a.dy<=a.o1/2.0){a.tG=a.bT;a.dy=a.o1;a.bT=a.bT-c|0;a.EP=10;a.dE=10;}else{if((a.tG-c|0)>=a.bT)return 0;a.bT=a.tG-c|0;}a.kI=0.0;if(b===null)a.kI=(BP()*2.0|0)*180|0;else{d=b.d-a.d;e=b.e-a.e;while(d*d+e*e<1.0E-4){d=(BP()-BP())*0.01;e=(BP()-BP())*0.01;}a.kI=CR(e,d)*180.0/3.1415927410125732-a.u;ABA(a,b,c,d,e);}if(a.bT>0){Dh(a.l,a,
a.vc(),1.0,(N(a.m)-N(a.m))*0.20000000298023224+1.0);return 1;}Dh(a.l,a,a.uN(),1.0,(N(a.m)-N(a.m))*0.20000000298023224+1.0);$p=1;case 1:a.FA(b);if(C()){break _;}return 1;default:E$();}}C3().s(a,b,c,d,e,$p);}
function A8s(a){return null;}
function AUA(a){return B(224);}
function AVv(a){return B(224);}
function ABA(a,b,c,d,e){var f,g,h;f=Ce(d*d+e*e);a.g=a.g/2.0;a.i=a.i/2.0;a.h=a.h/2.0;g=a.g;h=f;a.g=g-d/h*0.4000000059604645;a.i=a.i+0.4000000059604645;a.h=a.h-e/h*0.4000000059604645;if(a.i>0.4000000059604645)a.i=0.4000000059604645;}
function AN6(a,b){var c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.u1>0&&b!==null)b.BD(a,a.u1);a.Cn=1;c=a.mk();if(c>0){d=E(a.m,3);e=0;if(e<d){f=1;$p=1;continue _;}}return;case 1:ABV(a,c,f);if(C()){break _;}e=e+1|0;if(e>=d)return;f=1;continue _;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ATE(a){return 0;}
function AP8(a,b){var c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=Ne(b-3.0)|0;if(c<=0)return;d=null;$p=1;case 1:a.fs(d,c);if(C()){break _;}d=a.l;c=K(a.d);e=K(a.j-0.20000000298023224-a.c4);f=K(a.e);$p=2;case 2:$z=ACx(d,c,e,f);if(C()){break _;}e=$z;if(e>0){L();d=BeP.data[e].gK;Dh(a.l,a,Kg(d),d.oR*0.5,d.pO*0.75);}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ADv(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AE7(a);if(C()){break _;}d=$z;if(!d){$p=2;continue _;}e=a.j;L3(a,b,c,0.019999999552965164);f=a.g;g=a.i;h=a.h;$p=3;continue _;case 2:$z=ACo(a);if(C()){break _;}d=$z;if(d){e=a.j;L3(a,b,c,0.019999999552965164);f=a.g;g=a.i;h=a.h;$p=4;continue _;}L3(a,b,c,!a.cx?0.019999999552965164:0.10000000149011612);$p=7;continue _;case 3:ARF(a,
f,g,h);if(C()){break _;}a.g=a.g*0.800000011920929;a.i=a.i*0.800000011920929;a.h=a.h*0.800000011920929;a.i=a.i-0.02;if(!a.jZ){a.jV=a.cg;e=a.d-a.bS;f=a.e-a.bR;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.cg=a.cg+(i-a.cg)*0.4000000059604645;a.gn=a.gn+a.cg;return;}f=a.g;e=a.i+0.6000000238418579-a.j+e;g=a.h;$p=5;continue _;case 4:ARF(a,f,g,h);if(C()){break _;}a.g=a.g*0.5;a.i=a.i*0.5;a.h=a.h*0.5;a.i=a.i-0.02;if(!a.jZ){a.jV=a.cg;e=a.d-a.bS;f=a.e-a.bR;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.cg=a.cg+(i-a.cg)*0.4000000059604645;a.gn
=a.gn+a.cg;return;}f=a.g;e=a.i+0.6000000238418579-a.j+e;g=a.h;$p=6;continue _;case 5:$z=AHg(a,f,e,g);if(C()){break _;}d=$z;if(d)a.i=0.30000001192092896;a.jV=a.cg;e=a.d-a.bS;f=a.e-a.bR;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.cg=a.cg+(i-a.cg)*0.4000000059604645;a.gn=a.gn+a.cg;return;case 6:$z=AHg(a,f,e,g);if(C()){break _;}d=$z;if(d)a.i=0.30000001192092896;a.jV=a.cg;e=a.d-a.bS;f=a.e-a.bR;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.cg=a.cg+(i-a.cg)*0.4000000059604645;a.gn=a.gn+a.cg;return;case 7:$z=AIh(a);if(C()){break _;}d=
$z;if(d){a.fI=0.0;if(a.i<(-0.15))a.i=(-0.15);}e=a.g;f=a.i;g=a.h;$p=8;case 8:ARF(a,e,f,g);if(C()){break _;}if(!a.jZ){a.g=a.g*0.9100000262260437;a.i=a.i*0.9800000190734863;a.h=a.h*0.9100000262260437;a.i=a.i-0.08;if(a.cx){a.g=a.g*0.6000000238418579;a.h=a.h*0.6000000238418579;}a.jV=a.cg;e=a.d-a.bS;f=a.e-a.bR;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.cg=a.cg+(i-a.cg)*0.4000000059604645;a.gn=a.gn+a.cg;return;}$p=9;case 9:$z=AIh(a);if(C()){break _;}d=$z;if(d)a.i=0.2;a.g=a.g*0.9100000262260437;a.i=a.i*0.9800000190734863;a.h
=a.h*0.9100000262260437;a.i=a.i-0.08;if(a.cx){a.g=a.g*0.6000000238418579;a.h=a.h*0.6000000238418579;}a.jV=a.cg;e=a.d-a.bS;f=a.e-a.bR;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.cg=a.cg+(i-a.cg)*0.4000000059604645;a.gn=a.gn+a.cg;return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AIh(a){var b,c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=K(a.d);c=K(a.L.M);d=K(a.e);e=a.l;$p=1;case 1:$z=ACx(e,b,c,d);if(C()){break _;}f=$z;L();if(f==Bgb.b)return 1;e=a.l;c=c+1|0;$p=2;case 2:$z=ACx(e,b,c,d);if(C()){break _;}b=$z;return b==Bgb.b?1:0;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function H8(a){return !a.cR&&a.bT>0?1:0;}
function ACq(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hn=a.hn+1|0;b=a.l.bg;if(b!==null){c=b.d-a.d;d=b.j-a.j;e=b.e-a.e;f=c*c+d*d+e*e;if(f>16384.0){$p=2;continue _;}if(a.hn>600&&!E(a.m,800)){if(f>=1024.0){$p=7;continue _;}a.hn=0;}}if(a.bT>0){$p=1;continue _;}a.hJ=0;a.iO=0.0;a.gD=0.0;a.kJ=0.0;$p=3;continue _;case 1:a.wM();if(C())
{break _;}$p=3;continue _;case 2:Cb(a);if(C()){break _;}if(a.hn>600&&!E(a.m,800)){if(f>=1024.0){$p=7;continue _;}a.hn=0;}if(a.bT>0){$p=1;continue _;}a.hJ=0;a.iO=0.0;a.gD=0.0;a.kJ=0.0;$p=3;case 3:$z=AE7(a);if(C()){break _;}g=$z;$p=4;case 4:$z=ACo(a);if(C()){break _;}h=$z;if(a.hJ){if(g)a.i=a.i+0.03999999910593033;else if(h)a.i=a.i+0.03999999910593033;else if(a.cx)AF8(a);}a.iO=a.iO*0.9800000190734863;a.gD=a.gD*0.9800000190734863;a.kJ=a.kJ*0.8999999761581421;i=a.iO;j=a.gD;$p=5;case 5:ADv(a,i,j);if(C()){break _;}k
=a.l;l=Dv(a.L,0.20000000298023224,0.0,0.20000000298023224);$p=6;case 6:a:{$z=ADL(k,a,l);if(C()){break _;}k=$z;if(k!==null&&k.s>0){m=0;while(true){if(m>=k.s)break a;l=Y(k,m);if(l.rT())l.u0(a);m=m+1|0;}}}return;case 7:Cb(a);if(C()){break _;}if(a.bT>0){$p=1;continue _;}a.hJ=0;a.iO=0.0;a.gD=0.0;a.kJ=0.0;$p=3;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AF8(a){a.i=0.41999998688697815;}
function AQP(a){var b,c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(N(a.m)<0.07000000029802322){a.iO=(N(a.m)-0.5)*a.s2;a.gD=N(a.m)*a.s2;}a.hJ=N(a.m)>=0.009999999776482582?0:1;if(N(a.m)<0.03999999910593033)a.kJ=(N(a.m)-0.5)*60.0;a.u=a.u+a.kJ;a.I=a.zU;$p=1;case 1:$z=AE7(a);if(C()){break _;}b=$z;$p=2;case 2:$z=ACo(a);if(C()){break _;}c=$z;if(!(!b&&!c))a.hJ=N(a.m)>=0.800000011920929?0:1;return;default:E$();}}C3().s(a,b,c,$p);}
function A4L(a){return;}
function Zu(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:CT(a,b,c+a.eO/2.0,d);e=a.l;f=a.L;$p=1;case 1:$z=AM8(e,f);if(C()){break _;}g=$z;if(!g)return 0;e=a.l;f=a.L;$p=2;case 2:$z=XV(e,a,f);if(C()){break _;}e=$z;if(e.s)return 0;e=a.l;f=a.L;$p=3;case 3:$z=AJk(e,f);if(C()){break _;}g=$z;return g?0:1;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ABK(a){var b,c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=null;c=4;$p=1;case 1:a.fs(b,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,$p);}
function IX(){var a=this;EP.call(a);a.dS=null;a.de=null;a.hp=0;}
function AKg(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.l;d=BY(a.d,a.j+AQq(a),a.e);b=BY(b.d,b.j+b.rL(),b.e);$p=1;case 1:$z=AJm(c,d,b);if(C()){break _;}b=$z;return b!==null?0:1;default:E$();}}C3().s(a,b,c,d,$p);}
function APO(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hp=0;b=16.0;if(a.de===null){$p=1;continue _;}if(H8(a.de)){c=AR5(a.de,a);d=a.de;$p=2;continue _;}a.de=null;a:{if(!a.hp&&a.de!==null){if(a.dS===null)break a;if
(!E(a.m,20))break a;}if(!(a.dS!==null&&E(a.m,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=K(a.d+E(a.m,11)-5.0);k=K(a.j+E(a.m,7)-3.0);l=K(a.e+E(a.m,11)-5.0);$p=8;continue _;}if(e>0){d=a.l;$p=10;continue _;}}e=K(a.L.M);$p=5;continue _;}d=a.l;m=a.de;$p=7;continue _;case 1:$z=a.x4();if(C()){break _;}d=$z;a.de=d;if(a.de!==null){d=a.l;m=a.de;$p=3;continue _;}b:{if(!a.hp&&a.de!==null){if(a.dS===null)break b;if(!E(a.m,20))break b;}if(!(a.dS!==null&&E(a.m,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<
50){j=K(a.d+E(a.m,11)-5.0);k=K(a.j+E(a.m,7)-3.0);l=K(a.e+E(a.m,11)-5.0);$p=8;continue _;}if(e>0){d=a.l;$p=10;continue _;}}e=K(a.L.M);$p=5;continue _;}d=a.l;m=a.de;$p=7;continue _;case 2:$z=AKg(a,d);if(C()){break _;}e=$z;if(e){d=a.de;$p=4;continue _;}b:{if(!a.hp&&a.de!==null){if(a.dS===null)break b;if(!E(a.m,20))break b;}if(!(a.dS!==null&&E(a.m,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=K(a.d+E(a.m,11)-5.0);k=K(a.j+E(a.m,7)-3.0);l=K(a.e+E(a.m,11)-5.0);$p=8;continue _;}if(e>0){d=a.l;$p=10;continue _;}}e
=K(a.L.M);$p=5;continue _;}d=a.l;m=a.de;$p=7;continue _;case 3:$z=ARW(d,a,m,b);if(C()){break _;}d=$z;a.dS=d;c:{if(!a.hp&&a.de!==null){if(a.dS===null)break c;if(!E(a.m,20))break c;}if(!(a.dS!==null&&E(a.m,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=K(a.d+E(a.m,11)-5.0);k=K(a.j+E(a.m,7)-3.0);l=K(a.e+E(a.m,11)-5.0);$p=8;continue _;}if(e>0){d=a.l;$p=10;continue _;}}e=K(a.L.M);$p=5;continue _;}d=a.l;m=a.de;$p=7;continue _;case 4:a.nR(d,c);if(C()){break _;}c:{if(!a.hp&&a.de!==null){if(a.dS===null)break c;if
(!E(a.m,20))break c;}if(!(a.dS!==null&&E(a.m,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=K(a.d+E(a.m,11)-5.0);k=K(a.j+E(a.m,7)-3.0);l=K(a.e+E(a.m,11)-5.0);$p=8;continue _;}if(e>0){d=a.l;$p=10;continue _;}}e=K(a.L.M);$p=5;continue _;}d=a.l;m=a.de;$p=7;continue _;case 5:$z=AE7(a);if(C()){break _;}n=$z;$p=6;case 6:$z=ACo(a);if(C()){break _;}o=$z;if(a.dS!==null&&E(a.m,100)){d=Sv(a.dS,a);p=a.c1*2.0;q=p*p;r=e;while(d!==null&&ABY(d,a.d,a.j,a.e)<q&&d.z<=r){AP4(a.dS);if(!ANp(a.dS)){d=Sv(a.dS,a);continue;}d
=null;a.dS=null;}a.hJ=0;if(d!==null){q=d.x-a.d;s=d.w-a.e;t=d.z-r;a.u=CR(s,q)*180.0/3.1415927410125732-90.0;a.gD=a.s2;if(a.hp&&a.de!==null){u=a.de.d-a.d;r=a.de.e-a.e;v=a.u;a.u=CR(r,u)*180.0/3.1415927410125732-90.0;w=(v-a.u+90.0)*3.1415927410125732/180.0;a.iO= -Bq(w)*a.gD*1.0;a.gD=BC(w)*a.gD*1.0;}if(t!==0.0)a.hJ=1;}if(N(a.m)<0.800000011920929&&!(!n&&!o))a.hJ=1;return;}$p=9;continue _;case 7:$z=ARW(d,a,m,b);if(C()){break _;}d=$z;a.dS=d;e=K(a.L.M);$p=5;continue _;case 8:$z=a.sF(j,k,l);if(C()){break _;}x=$z;if(x
>h){h=x;e=j;f=k;g=l;}i=i+1|0;if(i>=50){if(e>0){d=a.l;$p=10;continue _;}e=K(a.L.M);$p=5;continue _;}j=K(a.d+E(a.m,11)-5.0);k=K(a.j+E(a.m,7)-3.0);l=K(a.e+E(a.m,11)-5.0);continue _;case 9:AQP(a);if(C()){break _;}a.dS=null;return;case 10:$z=AJw(d,a,e,f,g,b);if(C()){break _;}d=$z;a.dS=d;e=K(a.L.M);$p=5;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function AMD(a,b,c){return;}
function AK0(a){return null;}
function ACQ(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Zu(a,b,c,d);if(C()){break _;}e=$z;if(!e)return 0;e=b|0;f=c|0;g=d|0;$p=2;case 2:$z=a.sF(e,f,g);if(C()){break _;}h=$z;return h<0.0?0:1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function DP(){IX.call(this);this.Fr=0;}
function AC$(a){var b,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=1.0;$p=1;case 1:$z=ADI(a,b);if(C()){break _;}b=$z;if(b>0.5)a.hn=a.hn+2|0;$p=2;case 2:ACq(a);if(C()){break _;}return;default:E$();}}C3().s(a,b,$p);}
function AK9(a){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AMu(a);if(C()){break _;}if(a.l.i3)return;$p=2;case 2:Cb(a);if(C()){break _;}return;default:E$();}}C3().s(a,$p);}
function AKp(a){var b,c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(LD(a.l.bg,a)>=256.0)return null;b=a.l.bg;$p=1;case 1:$z=AKg(a,b);if(C()){break _;}c=$z;return !c?null:a.l.bg;default:E$();}}C3().s(a,b,c,$p);}
function AAK(a,b,c){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AB4(a,b,c);if(C()){break _;}c=$z;if(!c)return 0;if(b!==a)a.de=b;return 1;default:E$();}}C3().s(a,b,c,$p);}
function AQX(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c<2.5&&b.L.U>a.L.M&&b.L.M<a.L.U){a.dz=20;d=a.Fr;$p=1;continue _;}return;case 1:b.fs(a,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function ABz(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=0.5;f=a.l;$p=1;case 1:$z=ANj(f,b,c,d);if(C()){break _;}g=$z;return e-g;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function YA(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.l;f=K(b);g=K(c);h=K(d);$p=1;case 1:$z=XA(e,f,g,h);if(C()){break _;}f=$z;if(f>E(a.m,8))return 0;$p=2;case 2:$z=ACQ(a,b,c,d);if(C()){break _;}f=$z;return !f?0:1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function I9(){DP.call(this);}
function AH2(a){var b,c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!RA(a.l)){$p=1;continue _;}b=1.0;$p=2;continue _;case 1:AC$(a);if(C()){break _;}return;case 2:$z=ADI(a,b);if(C()){break _;}b=$z;if(b<=0.5){$p=1;continue _;}c=a.l;d=K(a.d);e=K(a.j);f=K(a.e);$p=3;case 3:$z=AGf(c,d,e,f);if(C()){break _;}d=$z;if(d&&N(a.m)*30.0<(b-0.4000000059604645)*2.0)a.cV=300;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AWM(a){BB();return Bgc.cW;}
function Jo(){DP.call(this);}
function AID(a){var b,c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!RA(a.l)){$p=1;continue _;}b=1.0;$p=2;continue _;case 1:AC$(a);if(C()){break _;}return;case 2:$z=ADI(a,b);if(C()){break _;}b=$z;if(b<=0.5){$p=1;continue _;}c=a.l;d=K(a.d);e=K(a.j);f=K(a.e);$p=3;case 3:$z=AGf(c,d,e,f);if(C()){break _;}d=$z;if(d&&N(a.m)*30.0<(b-0.4000000059604645)*2.0)a.cV=300;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AHV(a,b,c){var d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c<10.0){d=b.d-a.d;e=b.e-a.e;if(!a.dz){f=ATa(a.l,a);f.j=f.j+1.399999976158142;g=b.j-0.20000000298023224-f.j;h=Ce(d*d+e*e)*0.20000000298023224;Dh(a.l,a,B(225),1.0,1.0/(N(a.m)*0.4000000059604645+0.800000011920929));b=a.l;$p=1;continue _;}a.u=CR(e,d)*180.0/3.1415927410125732-90.0;a.hp=1;}return;case 1:AOj(b,f);if(C()){break _;}QF(f,
d,g+h,e,0.6000000238418579,12.0);a.dz=30;a.u=CR(e,d)*180.0/3.1415927410125732-90.0;a.hp=1;return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AYP(a){BB();return Bgd.cW;}
function JY(){var a=this;DP.call(a);a.je=0;a.uu=0;a.Bj=0;a.jW=0;}
function ZQ(a){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.uu=a.je;if(a.je>0&&a.jW<0)a.je=a.je-1|0;if(a.jW>=0)a.jW=2;$p=1;case 1:APO(a);if(C()){break _;}if(a.jW!=1)a.jW=(-1);return;default:E$();}}C3().s(a,$p);}
function AAM(a,b,c){var d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!(a.jW<=0&&c<3.0)){if(a.jW<=0)break a;if(c>=7.0)break a;}if(!a.je)Dh(a.l,a,B(226),1.0,0.5);a.jW=1;a.je=a.je+1|0;if(a.je==a.Bj){b=a.l;d=a.d;e=a.j;f=a.e;c=3.0;$p=1;continue _;}a.hp=1;}return;case 1:Ya(b,a,d,e,f,c);if(C()){break _;}$p=2;case 2:Cb(a);if(C()){break _;}a.hp=1;return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function Qo(a,b){return (a.uu+(a.je-a.uu|0)*b)/(a.Bj-2|0);}
function ASV(a){BB();return Bge.cW;}
function Km(){DP.call(this);}
function ARr(a){var b,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=1.0;$p=1;case 1:$z=ADI(a,b);if(C()){break _;}b=$z;if(b<0.5&&LD(a.l.bg,a)<256.0)return a.l.bg;return null;default:E$();}}C3().s(a,b,$p);}
function Zn(a,b,c){var d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=1.0;$p=1;case 1:a:{$z=ADI(a,d);if(C()){break _;}d=$z;if(d>0.5&&!E(a.m,100))a.de=null;else{if(c<=2.0)break a;if(c>=6.0)break a;if(E(a.m,10))break a;if(a.cx){e=b.d-a.d;f=b.e-a.e;g=Ce(e*e+f*f);a.g=e/g*0.5*0.800000011920929+a.g*0.20000000298023224;a.h=f/g*0.5*0.800000011920929+a.h*0.20000000298023224;a.i=0.4000000059604645;}}return;}$p=2;case 2:AQX(a,
b,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AZO(a){BB();return Bgf.cW;}
function GC(){IX.call(this);}
function AOB(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.l;f=c-1|0;$p=1;case 1:$z=ACx(e,b,f,d);if(C()){break _;}g=$z;L();if(g==BeR.b)return 10.0;e=a.l;$p=2;case 2:$z=ANj(e,b,c,d);if(C()){break _;}h=$z;return h-0.5;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AK6(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.l;f=K(b);g=K(c);h=K(d);$p=1;case 1:$z=XA(e,f,g,h);if(C()){break _;}g=$z;if(g<=8)return 0;$p=2;case 2:$z=ACQ(a,b,c,d);if(C()){break _;}g=$z;return !g?0:1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function KG(){GC.call(this);this.x8=0;}
function AGW(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.x8&&b instanceof EP){a.x8=1;d=1+E(a.m,3)|0;e=0;if(e<d){L();f=Bfd.b;g=1;h=1.0;$p=2;continue _;}}$p=1;case 1:$z=AB4(a,b,c);if(C()){break _;}c=$z;return c;case 2:$z=AGH(a,f,g,h);if(C()){break _;}i=$z;i.i=i.i+N(a.m)*0.05000000074505806;i.g=i.g+(N(a.m)-N(a.m))*0.10000000149011612;i.h=i.h+(N(a.m)-N(a.m))*0.10000000149011612;e
=e+1|0;if(e>=d){$p=1;continue _;}L();f=Bfd.b;g=1;h=1.0;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function A63(a){return B(227);}
function A4h(a){return B(227);}
function AYn(a){return B(227);}
function ID(){GC.call(this);this.qA=0;}
function ATA(a){return B(228);}
function A9u(a){return B(228);}
function AV7(a){return B(229);}
function AXU(a,b){if(!a.qA)return 0;Pk(b,a);return 1;}
function AWf(a){BB();return Bgg.cW;}
function DB(){var a=this;D.call(a);a.AF=0.0;a.w6=0;}
function Bbl(){var a=new DB();A3e(a);return a;}
function BbA(a){var b=new DB();AVK(b,a);return b;}
function A3e(a){return;}
function AVK(a,b){return;}
function NM(a,b){return;}
function AF$(a,b){if(b==32)return Cl(a)*4.294967295E9+(-2.147483648E9)|0;return Cl(a)*Long_toNumber(Long_shl(Long_fromInt(1),CB(32,b)))|0;}
function Lo(a){return AF$(a,32);}
function E(a,b){return Cl(a)*b|0;}
function GB(a){return Long_or(Long_shl(Long_fromInt(Lo(a)),32),Long_fromInt(Lo(a)));}
function N(a){return Cl(a);}
function Cl(a){return Math.random();}
function CZ(a){var b,c,d,e;if(a.w6){a.w6=0;return a.AF;}while(true){while(true){b=2.0*Cl(a)-1.0;c=2.0*Cl(a)-1.0;d=b*b+c*c;if(d>=1.0)continue;else break;}if(d===0.0)continue;else break;}e=Ed((-2.0)*A3U(d)/d);a.AF=c*e;a.w6=1;return b*e;}
function NE(){D.call(this);}
var Bgh=null;var Bgi=null;function Bgj(){var a=new NE();AIn(a);return a;}
function AIn(a){return;}
function I2(b){var c,d,e,f,g,h;Ba2(F(NE));try{BV();c=Bgk+1|0;d=0;while(d<b){e=Bgk+1|0;Bgk=e;f=Bgl;g=CY(e);h=new Rt;h.By=e;h.rk=null;h.o2=null;h.lP=(-1);h.jM=0;BQ(f,g,h);d=d+1|0;}U(Bgh,CY(c));U(Bgh,CY(b));return c;}finally{BcT(F(NE));}}
function WV(b){var c,d,e,f,g;Ba2(F(NE));try{c=b.bk;while(c<b.cy){BV();d=Bgm;Bd();e=new Pd;f=BdI.createTexture();e.In=(-1);e.Ik=(-1);e.Gm=1;e.Hf=0;e.BQ=f;g=S6(d,e);AQ2(b,c,g);U(Bgi,CY(g));c=c+1|0;}}finally{BcT(F(NE));}}
function WP(b){var c;c=AAs($rt_createByteArray(b));c.kN=Bgn;return c;}
function Rh(b){return ALS($rt_createIntArray(b));}
function H4(b){var c,d,e,f;c=$rt_createFloatArray(b);d=c.data.length;e=new WO;f=0+d|0;KO(e,d);e.bk=0;e.cy=f;e.yq=0;e.xz=0;e.xs=c;return e;}
function ALX(){Bgh=Ci();Bgi=Ci();}
function Pc(){var a=this;D.call(a);a.cP=null;a.eT=null;a.jb=0.0;a.rb=0.0;a.iA=0;a.jQ=0;a.Ad=null;}
function ACY(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.rb+(a.jb-a.rb)*b;d=a.cP.f;B3();Bv(d.T+(d.I-d.T)*b,1.0,0.0,0.0);Bv(d.P+(d.u-d.P)*b,0.0,1.0,0.0);Hz();BE();e=a.cP.A;f=
K(d.d);g=K(d.j);h=K(d.e);$p=1;case 1:$z=ANj(e,f,g,h);if(C()){break _;}i=$z;BT(i,i,i,1.0);if(a.eT===null){B3();if(a.jQ){j=(a.iA+b)/8.0;k=Bq(j*3.1415927410125732);Bw( -Bq(D_(j)*3.1415927410125732)*0.30000001192092896,Bq(D_(j)*3.1415927410125732*2.0)*0.4000000059604645, -k*0.4000000059604645);}Bw(0.64000004529953,(-0.6000000238418579)-(1.0-c)*0.6000000238418579,(-0.7199999690055847));Bv(45.0,0.0,1.0,0.0);Ba(32826);if(a.jQ){j=(a.iA+b)/8.0;k=Bq(j*j*3.1415927410125732);Bv(Bq(D_(j)*3.1415927410125732)*70.0,0.0,1.0,
0.0);Bv( -k*20.0,0.0,0.0,1.0);}f=3553;d=a.cP.bo;e=a.cP.f.tK;l=PO(a.cP.f);$p=2;continue _;}B3();if(a.jQ){j=(a.iA+b)/8.0;k=Bq(j*3.1415927410125732);Bw( -Bq(D_(j)*3.1415927410125732)*0.4000000059604645,Bq(D_(j)*3.1415927410125732*2.0)*0.20000000298023224, -k*0.20000000298023224);}Bw(0.5600000023841858,(-0.5199999809265137)-(1.0-c)*0.6000000238418579,(-0.7199999690055847));Bv(45.0,0.0,1.0,0.0);Ba(32826);if(a.jQ){j=(a.iA+b)/8.0;k=Bq(j*j*3.1415927410125732);m=Bq(D_(j)*3.1415927410125732);Bv( -k*20.0,0.0,1.0,0.0);b
= -m;Bv(b*20.0,0.0,0.0,1.0);Bv(b*80.0,1.0,0.0,0.0);}CC(0.4000000059604645,0.4000000059604645,0.4000000059604645);if(a.eT.bA<256){L();if(!BeP.data[a.eT.bA].em()){f=3553;d=a.cP.bo;e=B(179);$p=5;continue _;}}if(a.eT.bA>=256){f=3553;d=a.cP.bo;e=B(230);$p=3;continue _;}f=3553;d=a.cP.bo;e=B(179);$p=4;continue _;case 2:$z=AD4(d,e,l);if(C()){break _;}g=$z;Cp(f,g);Bw((-1.0),3.5999999046325684,3.5);Bv(120.0,0.0,0.0,1.0);Bv(200.0,1.0,0.0,0.0);Bv((-135.0),0.0,1.0,0.0);CC(1.0,1.0,1.0);Bw(5.599999904632568,0.0,0.0);n=Se(Bgo,
a.cP.f);CC(1.0,1.0,1.0);ALz(n);BE();Bc(32826);DS();return;case 3:$z=AHu(d,e);if(C()){break _;}g=$z;Cp(f,g);BA();e=BeL;m=(((DK(a.eT)%16|0)*16|0)+0|0)/256.0;o=(((DK(a.eT)%16|0)*16|0)+16|0)/256.0;p=(((DK(a.eT)/16|0)*16|0)+0|0)/256.0;q=(((DK(a.eT)/16|0)*16|0)+16|0)/256.0;Ba(32826);Bw(-0.0,(-0.30000001192092896),0.0);CC(1.5,1.5,1.5);Bv(50.0,0.0,1.0,0.0);Bv(335.0,0.0,0.0,1.0);Bw((-0.9375),(-0.0625),0.0);Bz(e);Dd(e,0.0,0.0,1.0);r=o;s=q;G(e,0.0,0.0,0.0,r,s);t=m;G(e,1.0,0.0,0.0,t,s);u=p;G(e,1.0,1.0,0.0,t,u);G(e,0.0,
1.0,0.0,r,u);Br(e);Bz(e);Dd(e,0.0,0.0,(-1.0));G(e,0.0,1.0,(-0.0625),r,u);G(e,1.0,1.0,(-0.0625),t,u);G(e,1.0,0.0,(-0.0625),t,s);G(e,0.0,0.0,(-0.0625),r,s);Br(e);Bz(e);Dd(e,(-1.0),0.0,0.0);f=0;j=m-o;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v;y=w;G(e,x,0.0,(-0.0625),y,s);G(e,x,0.0,0.0,y,s);G(e,x,1.0,0.0,y,u);G(e,x,1.0,(-0.0625),y,u);f=f+1|0;}Br(e);Bz(e);Dd(e,1.0,0.0,0.0);f=0;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v+0.0625;y=w;G(e,x,1.0,(-0.0625),y,u);G(e,x,1.0,0.0,y,u);G(e,x,0.0,0.0,y,s);G(e,x,0.0,
(-0.0625),y,s);f=f+1|0;}Br(e);Bz(e);Dd(e,0.0,1.0,0.0);g=0;j=p-q;while(g<16){v=g/16.0;w=q+j*v-0.001953125;z=1.0*v+0.0625;ba=w;G(e,0.0,z,0.0,r,ba);G(e,1.0,z,0.0,t,ba);G(e,1.0,z,(-0.0625),t,ba);G(e,0.0,z,(-0.0625),r,ba);g=g+1|0;}Br(e);Bz(e);Dd(e,0.0,(-1.0),0.0);f=0;while(f<16){v=f/16.0;w=q+j*v-0.001953125;x=1.0*v;y=w;G(e,1.0,x,0.0,t,y);G(e,0.0,x,0.0,r,y);G(e,0.0,x,(-0.0625),r,y);G(e,1.0,x,(-0.0625),t,y);f=f+1|0;}Br(e);Bc(32826);BE();Bc(32826);DS();return;case 4:$z=AHu(d,e);if(C()){break _;}g=$z;Cp(f,g);BA();e=
BeL;m=(((DK(a.eT)%16|0)*16|0)+0|0)/256.0;o=(((DK(a.eT)%16|0)*16|0)+16|0)/256.0;p=(((DK(a.eT)/16|0)*16|0)+0|0)/256.0;q=(((DK(a.eT)/16|0)*16|0)+16|0)/256.0;Ba(32826);Bw(-0.0,(-0.30000001192092896),0.0);CC(1.5,1.5,1.5);Bv(50.0,0.0,1.0,0.0);Bv(335.0,0.0,0.0,1.0);Bw((-0.9375),(-0.0625),0.0);Bz(e);Dd(e,0.0,0.0,1.0);r=o;s=q;G(e,0.0,0.0,0.0,r,s);t=m;G(e,1.0,0.0,0.0,t,s);u=p;G(e,1.0,1.0,0.0,t,u);G(e,0.0,1.0,0.0,r,u);Br(e);Bz(e);Dd(e,0.0,0.0,(-1.0));G(e,0.0,1.0,(-0.0625),r,u);G(e,1.0,1.0,(-0.0625),t,u);G(e,1.0,0.0,(-0.0625),
t,s);G(e,0.0,0.0,(-0.0625),r,s);Br(e);Bz(e);Dd(e,(-1.0),0.0,0.0);f=0;j=m-o;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v;y=w;G(e,x,0.0,(-0.0625),y,s);G(e,x,0.0,0.0,y,s);G(e,x,1.0,0.0,y,u);G(e,x,1.0,(-0.0625),y,u);f=f+1|0;}Br(e);Bz(e);Dd(e,1.0,0.0,0.0);f=0;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v+0.0625;y=w;G(e,x,1.0,(-0.0625),y,u);G(e,x,1.0,0.0,y,u);G(e,x,0.0,0.0,y,s);G(e,x,0.0,(-0.0625),y,s);f=f+1|0;}Br(e);Bz(e);Dd(e,0.0,1.0,0.0);g=0;j=p-q;while(g<16){v=g/16.0;w=q+j*v-0.001953125;z=1.0*v+0.0625;ba
=w;G(e,0.0,z,0.0,r,ba);G(e,1.0,z,0.0,t,ba);G(e,1.0,z,(-0.0625),t,ba);G(e,0.0,z,(-0.0625),r,ba);g=g+1|0;}Br(e);Bz(e);Dd(e,0.0,(-1.0),0.0);f=0;while(f<16){v=f/16.0;w=q+j*v-0.001953125;x=1.0*v;y=w;G(e,1.0,x,0.0,t,y);G(e,0.0,x,0.0,r,y);G(e,0.0,x,(-0.0625),r,y);G(e,1.0,x,(-0.0625),t,y);f=f+1|0;}Br(e);Bc(32826);BE();Bc(32826);DS();return;case 5:$z=AHu(d,e);if(C()){break _;}g=$z;Cp(f,g);GY(a.Ad,BeP.data[a.eT.bA]);BE();Bc(32826);DS();return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,
$p);}
function AB_(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bc(3008);if(a.cP.f.cV<=0){c=a.cP.A.bg;$p=1;continue _;}c=a.cP.bo;d=B(179);$p=2;continue _;case 1:$z=AHz(c);if(C()){break _;}e=$z;if(!e){d=a.cP.f;c=BfQ;$p=3;continue _;}e=K(a.cP.f.d);f=K(a.cP.f.j);g=K(a.cP.f.e);c
=a.cP.bo;d=B(179);$p=4;continue _;case 2:$z=AHu(c,d);if(C()){break _;}e=$z;Cp(3553,e);BA();c=BeL;BT(1.0,1.0,1.0,0.8999999761581421);Ba(3042);Df(770,771);e=0;while(e<2){B3();L();f=Bgp.ba+(e*16|0)|0;g=(f&15)<<4;f=f&240;h=g;i=h/256.0;h=(h+15.989999771118164)/256.0;j=f;k=j/256.0;j=(j+15.989999771118164)/256.0;f=(e*2|0)-1|0;Bw( -f*0.23999999463558197,(-0.30000001192092896),0.0);Bv(f*10.0,0.0,1.0,0.0);Bz(c);l=h;m=j;G(c,(-0.5),(-0.5),(-0.5),l,m);n=i;G(c,0.5,(-0.5),(-0.5),n,m);m=k;G(c,0.5,0.5,(-0.5),n,m);G(c,(-0.5),
0.5,(-0.5),l,m);Br(c);BE();e=e+1|0;}BT(1.0,1.0,1.0,1.0);Bc(3042);c=a.cP.A.bg;$p=1;continue _;case 3:$z=AGI(d,c);if(C()){break _;}e=$z;if(!e){Ba(3008);return;}c=a.cP.bo;d=B(231);$p=6;continue _;case 4:$z=AHu(c,d);if(C()){break _;}o=$z;Cp(3553,o);c=a.cP.A;$p=5;case 5:$z=ACx(c,e,f,g);if(C()){break _;}p=$z;L();if(BeP.data[p]===null){d=a.cP.f;c=BfQ;$p=3;continue _;}e=BeP.data[p].ci(2);BA();c=BeL;d=a.cP.f;$p=8;continue _;case 6:$z=AHu(c,d);if(C()){break _;}e=$z;Cp(3553,e);BA();c=BeL;d=a.cP.f;$p=7;case 7:$z=ADI(d,
b);if(C()){break _;}h=$z;BT(h,h,h,0.5);Ba(3042);Df(770,771);B3();h= -a.cP.f.u/64.0;i=a.cP.f.I/64.0;Bz(c);q=4.0+h;l=4.0+i;G(c,(-1.0),(-1.0),(-0.5),q,l);r=0.0+h;G(c,1.0,(-1.0),(-0.5),r,l);l=0.0+i;G(c,1.0,1.0,(-0.5),r,l);G(c,(-1.0),1.0,(-0.5),q,l);Br(c);BE();BT(1.0,1.0,1.0,1.0);Bc(3042);Ba(3008);return;case 8:ADI(d,b);if(C()){break _;}BT(0.10000000149011612,0.10000000149011612,0.10000000149011612,0.5);B3();i=e%16|0;j=i/256.0-0.0078125;i=(i+15.989999771118164)/256.0+0.0078125;k=e/16|0;s=k/256.0-0.0078125;h=(k+15.989999771118164)
/256.0+0.0078125;Bz(c);q=i;l=h;G(c,(-1.0),(-1.0),(-0.5),q,l);r=j;G(c,1.0,(-1.0),(-0.5),r,l);l=s;G(c,1.0,1.0,(-0.5),r,l);G(c,(-1.0),1.0,(-0.5),q,l);Br(c);BE();BT(1.0,1.0,1.0,1.0);d=a.cP.f;c=BfQ;$p=3;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function AJa(a){var b,c,d,e;a.rb=a.jb;if(a.jQ){a.iA=a.iA+1|0;if(a.iA==8){a.iA=0;a.jQ=0;}}b=D9(a.cP.f.K);c=0.4000000059604645;d=(b!==a.eT?0.0:1.0)-a.jb;e=(-0.4000000059604645);if(d>=e)e=d;if(e<=c)c=e;a.jb=a.jb+c;if(a.jb<0.10000000149011612)a.eT=b;}
function AGM(a){a.jb=0.0;}
function Pm(a){a.iA=(-1);a.jQ=1;}
function AM$(a){a.jb=0.0;}
function P(){var a=this;D.call(a);a.ba=0;a.b=0;a.qg=0.0;a.nS=0.0;a.da=0.0;a.cM=0.0;a.c_=0.0;a.dc=0.0;a.cF=0.0;a.dd=0.0;a.gK=null;a.Ez=0.0;a.b_=null;}
var Bgq=null;var Bgr=null;var Bgs=null;var Bgt=null;var Bgu=null;var Bgv=null;var Bgw=null;var Bgx=null;var Bgy=null;var BeP=null;var Bgz=null;var BgA=null;var BgB=null;var BgC=null;var BgD=null;var BeV=null;var BeR=null;var BeS=null;var BeZ=null;var Be1=null;var Be7=null;var BeQ=null;var BfY=null;var BgE=null;var BfZ=null;var BgF=null;var Bfa=null;var Bfb=null;var Bfg=null;var Bff=null;var Bfe=null;var Be2=null;var Be3=null;var Bfc=null;var Be5=null;var BgG=null;var BgH=null;var BgI=null;var BgJ=null;var BgK
=null;var BgL=null;var BgM=null;var BgN=null;var BgO=null;var BgP=null;var BgQ=null;var BgR=null;var BgS=null;var BgT=null;var Bfd=null;var BgU=null;var Be8=null;var Be9=null;var Be$=null;var Be_=null;var Bfi=null;var Bfh=null;var BeT=null;var BeU=null;var Be0=null;var Bfk=null;var Bfj=null;var Be6=null;var Bfl=null;var Be4=null;var Bgp=null;var BgV=null;var BgW=null;var BgX=null;var BgY=null;var BgZ=null;var Bg0=null;var Bg1=null;var Bg2=null;var Bg3=null;var Bg4=null;var Bg5=null;var Bg6=null;var Bg7=null;var Bgb
=null;var Bg8=null;var Bg9=null;function L(){L=Bt(P);AVh();}
function Bg$(a,b){var c=new P();D0(c,a,b);return c;}
function Ky(a,b,c){var d=new P();C8(d,a,b,c);return d;}
function D0(a,b,c){var d,e,f;L();a.gK=Bgq;a.Ez=1.0;if(BeP.data[b]!==null){c=new Cc;d=new S;V(d);Bl(c,T(FO(H(FO(H(Be(H(d,B(232)),b),B(233)),BeP.data[b]),B(234)),a)));M(c);}a.b_=c;BeP.data[b]=a;a.b=b;Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);BgA.data[b]=a.d5();e=BgB;f=!a.d5()?0:255;e.data[b]=f;BgC.data[b]=0;}
function C8(a,b,c,d){L();D0(a,b,d);a.ba=c;}
function BM(a,b){a.gK=b;return a;}
function Gy(a,b){BgB.data[a.b]=b;return a;}
function GL(a,b){BgD.data[a.b]=15.0*b|0;return a;}
function Dn(a,b){a.nS=b*3.0;return a;}
function A82(a){return 1;}
function AWF(a){return 0;}
function BH(a,b){var c;a.qg=b;c=a.nS;b=b*5.0;if(c<b)a.nS=b;return a;}
function Fe(a,b){Bgz.data[a.b]=b;}
function Bo(a,b,c,d,e,f,g){a.da=b;a.cM=c;a.c_=d;a.dc=e;a.cF=f;a.dd=g;}
function AFa(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.sQ(c,d,e);if(C()){break _;}f=$z;return f;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AGv(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!f&&a.cM>0.0)c=1;else if(f==1&&a.cF<1.0)c=1;else if(f==2&&a.c_>0.0)c=1;else if(f==3&&a.dd<1.0)c=1;else if(f==4&&a.da>0.0)c=1;else{if(f!=5)break a;if(a.dc>=1.0)break a;c=1;}return c;}$p=1;case 1:$z=b.lh(c,d,e);if(C()){break _;}c=$z;return c?0:1;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AB1(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.eI(c,d,e);if(C()){break _;}c=$z;return a.eY(f,c);default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function A7g(a,b,c){return a.ci(b);}
function AVF(a,b){return a.ba;}
function K6(a,b,c,d,e){var f,g,h,i,j;f=c;g=f+a.da;h=d;i=h+a.cM;j=e;return D3(g,i,j+a.c_,f+a.dc,h+a.cF,j+a.dd);}
function ALy(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=a.hx(b,c,d,e);if(C()){break _;}h=$z;if(h!==null&&L6(f,h))U(g,h);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function No(a,b,c,d,e){var f,g,h,i,j;f=c;g=f+a.da;h=d;i=h+a.cM;j=e;return D3(g,i,j+a.c_,f+a.dc,h+a.cF,j+a.dd);}
function A5k(a){return 1;}
function A6t(a,b,c){return a.ph();}
function A3O(a){return 1;}
function AHR(a,b,c,d,e,f){return;}
function APe(a,b,c,d,e,f){return;}
function Z9(a,b,c,d,e,f){return;}
function YQ(a,b,c,d,e,f){return;}
function A3Y(a){return 10;}
function AA9(a,b,c,d,e){return;}
function Z4(a,b,c,d,e){return;}
function AYq(a,b){return 1;}
function ATR(a,b,c){return a.b;}
function ABf(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.qg<0.0)c=0.0;else{if(M$(b,a)){$p=1;continue _;}c=1.0/a.qg/100.0;}return c;case 1:$z=AKS(b,a);if(C()){break _;}c=$z;return c/a.qg/30.0;default:E$();}}C3().s(a,b,c,$p);}
function Yi(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=1.0;$p=1;case 1:a.HT(b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AEZ(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.eH(b.q);i=0;j=0.15000000596046448;k=c;l=d;m=e;while(i<h){if(N(b.q)<=g){n=a.dX(f,b.q);if(n>0){o=Hf(b,k+N(b.q)*0.699999988079071+j,l+N(b.q)*0.699999988079071+j,m+N(b.q)*0.699999988079071+j,Kz(n,1));o.hb=10;$p=1;continue _;}}i=i+1|0;}return;case 1:AOj(b,
o);if(C()){break _;}while(true){i=i+1|0;if(i>=h)break;if(N(b.q)>g)continue;n=a.dX(f,b.q);if(n<=0)continue;else{o=Hf(b,k+N(b.q)*0.699999988079071+j,l+N(b.q)*0.699999988079071+j,m+N(b.q)*0.699999988079071+j,Kz(n,1));o.hb=10;continue _;}}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AZ3(a,b){return a.nS/5.0;}
function Kb(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r;h= -c;i= -d;j= -e;b=Dk(f,h,i,j);f=Dk(g,h,i,j);k=KM(b,f,a.da);l=KM(b,f,a.dc);m=JV(b,f,a.cM);n=JV(b,f,a.cF);o=Kw(b,f,a.c_);p=Kw(b,f,a.dd);if(!Rx(a,k))k=null;if(!Rx(a,l))l=null;if(!Xt(a,m))m=null;if(!Xt(a,n))n=null;if(!RQ(a,o))o=null;if(!RQ(a,p))p=null;q=null;if(k!==null)q=k;if(l!==null&&!(q!==null&&DI(b,l)>=DI(b,q)))q=l;if(m!==null&&!(q!==null&&DI(b,m)>=DI(b,q)))q=m;if(n!==null&&!(q!==null&&DI(b,n)>=DI(b,q)))q=n;if(o!==null&&!(q!==null&&DI(b,o)>=DI(b,q)))q=
o;if(p!==null&&!(q!==null&&DI(b,p)>=DI(b,q)))q=p;if(q===null)return null;r=(-1);if(q===k)r=4;if(q===l)r=5;if(q===m)r=0;if(q===n)r=1;if(q===o)r=2;if(q===p)r=3;return A0C(c,d,e,r,Dk(q,c,d,e));}
function Rx(a,b){return b===null?0:b.z>=a.cM&&b.z<=a.cF&&b.w>=a.c_&&b.w<=a.dd?1:0;}
function Xt(a,b){return b===null?0:b.x>=a.da&&b.x<=a.dc&&b.w>=a.c_&&b.w<=a.dd?1:0;}
function RQ(a,b){return b===null?0:b.x>=a.da&&b.x<=a.dc&&b.z>=a.cM&&b.z<=a.cF?1:0;}
function AQ1(a,b,c,d,e){return;}
function AVl(a){return 0;}
function AEG(a,b,c,d,e){return 1;}
function AGK(a,b,c,d,e,f){return 0;}
function AJL(a,b,c,d,e,f){return;}
function YI(a,b,c,d,e,f){return;}
function AAe(a,b,c,d,e,f){return;}
function AF7(a,b,c,d,e,f,g){return;}
function APY(a,b,c,d,e){return;}
function A9k(a,b,c,d,e){return 16777215;}
function AVh(){var b,c;Bgq=Ij(B(235),1.0,1.0);Bgr=Ij(B(236),1.0,1.0);Bgs=Ij(B(237),1.0,1.0);Bgt=Ij(B(238),1.0,1.0);Bgu=Ij(B(235),1.0,1.0);Bgv=Ij(B(235),1.0,1.5);Bgw=A_2(B(235),1.0,1.0);Bgx=Ij(B(239),1.0,1.0);Bgy=Bca(B(240),1.0,1.0);BeP=J(P,256);Bgz=$rt_createBooleanArray(256);BgA=$rt_createBooleanArray(256);BgB=$rt_createIntArray(256);BgC=$rt_createBooleanArray(256);BgD=$rt_createIntArray(256);BeV=BM(Dn(BH(Bbf(1,1),1.5),10.0),Bgu);BeR=BM(BH(BbI(2),0.6000000238418579),Bgt);BeS=BM(BH(A_7(3,2),0.5),Bgs);BeZ=BM(Dn(BH(Ky(4,
16,Bg_),2.0),10.0),Bgu);Be1=BM(Dn(BH(Ky(5,4,Bha),2.0),5.0),Bgr);Be7=BM(BH(Bcu(6,15),0.0),Bgt);BeQ=BM(Dn(BH(Ky(7,17,Bg_),(-1.0)),6000000.0),Bgu);BfY=Gy(BH(AUk(8,BfQ),100.0),3);BgE=Gy(BH(AXI(9,BfQ),100.0),3);BfZ=Gy(GL(BH(AUk(10,BfR),0.0),1.0),255);BgF=Gy(GL(BH(AXI(11,BfR),100.0),1.0),255);Bfa=BM(BH(BbD(12,18),0.5),Bgy);Bfb=BM(BH(BbM(13,19),0.6000000238418579),Bgs);Bfg=BM(Dn(BH(SO(14,32),3.0),5.0),Bgu);Bff=BM(Dn(BH(SO(15,33),3.0),5.0),Bgu);Bfe=BM(Dn(BH(SO(16,34),3.0),5.0),Bgu);Be2=BM(BH(BcO(17),2.0),Bgr);Be3=BM(Gy(BH(BaI(18,
52),0.20000000298023224),1),Bgt);Bfc=BM(BH(Ba$(19),0.6000000238418579),Bgt);Be5=BM(BH(Ba6(20,49,Bhb,0),0.30000001192092896),Bgw);BgG=null;BgH=null;BgI=null;BgJ=null;BgK=null;BgL=null;BgM=null;BgN=null;BgO=null;BgP=null;BgQ=null;BgR=null;BgS=null;BgT=null;Bfd=BM(BH(Ky(35,64,Bhc),0.800000011920929),Bgx);BgU=null;Be8=BM(BH(A3l(37,13),0.0),Bgt);Be9=BM(BH(A3l(38,12),0.0),Bgt);Be$=GL(BM(BH(ATP(39,29),0.0),Bgt),0.125);Be_=BM(BH(ATP(40,28),0.0),Bgt);Bfi=BM(Dn(BH(AEC(41,39),3.0),10.0),Bgv);Bfh=BM(Dn(BH(AEC(42,38),5.0),
10.0),Bgv);BeT=BM(Dn(BH(A9n(43,1),2.0),10.0),Bgu);BeU=BM(Dn(BH(A9n(44,0),2.0),10.0),Bgu);Be0=BM(Dn(BH(Ky(45,7,Bg_),2.0),10.0),Bgu);Bfk=BM(BH(BaJ(46,8),0.0),Bgt);Bfj=BM(BH(Bak(47,35),1.5),Bgr);Be6=BM(Dn(BH(Ky(48,36,Bg_),2.0),10.0),Bgu);Bfl=BM(Dn(BH(Bbp(49,37),10.0),20.0),Bgu);Be4=BM(GL(BH(Bbb(50,80),0.0),0.9375),Bgr);Bgp=BM(GL(BH(BcU(51,31),0.0),1.0),Bgr);BgV=BM(BH(BcK(52,65),5.0),Bgv);BgW=A$O(53,Be1);BgX=BM(BH(A_9(54),2.5),Bgr);BgY=BM(BH(BbO(55,62),0.5),Bgv);BgZ=BM(Dn(BH(SO(56,50),3.0),5.0),Bgu);Bg0=BM(Dn(BH(AEC(57,
40),5.0),10.0),Bgv);Bg1=BM(BH(Bbs(58),2.5),Bgr);Bg2=BM(BH(Bcx(59,88),0.0),Bgt);Bg3=BM(BH(Bb0(60),0.6000000238418579),Bgs);Bg4=BM(BH(A4M(61,0),3.5),Bgu);Bg5=GL(BM(BH(A4M(62,1),3.5),Bgu),0.875);b=new Vv;BB();AHt(b,63,F(Jj),Bhd.cW);Bg6=BM(BH(b,1.0),Bgr);Bg7=BM(BH(Bae(64),3.0),Bgr);Bgb=BM(BH(Bcm(65,83),0.4000000059604645),Bgr);Bg8=BM(BH(Ba0(66,128),1.0),Bgv);Bg9=A$O(67,BeZ);c=0;while(c<256){if(BeP.data[c]!==null)Bhe.data[c]=A_8(c-256|0);c=c+1|0;}}
function RD(){}
function AJg(){var a=this;Gg.call(a);a.d$=null;a.s=0;}
function Ci(){var a=new AJg();AV$(a);return a;}
function AV$(a){a.d$=J(D,10);}
function Tw(a,b){var c;if(a.d$.data.length<b){c=a.d$.data.length>=1073741823?2147483647:DE(b,DE(a.d$.data.length*2|0,5));a.d$=Nt(a.d$,c);}}
function Y(a,b){K8(a,b);return a.d$.data[b];}
function CX(a){return a.s;}
function Rc(a,b,c){var d;K8(a,b);d=a.d$.data[b];a.d$.data[b]=c;return d;}
function U(a,b){var c,d;Tw(a,a.s+1|0);c=a.d$.data;d=a.s;a.s=d+1|0;c[d]=b;a.d7=a.d7+1|0;return 1;}
function AML(a,b,c){var d;if(b>=0&&b<=a.s){Tw(a,a.s+1|0);d=a.s;while(d>b){a.d$.data[d]=a.d$.data[d-1|0];d=d+(-1)|0;}a.d$.data[b]=c;a.s=a.s+1|0;a.d7=a.d7+1|0;return;}c=new BO;O(c);M(c);}
function En(a,b){var c,d,e,f;K8(a,b);c=a.d$.data[b];a.s=a.s-1|0;while(b<a.s){d=a.d$.data;e=a.d$.data;f=b+1|0;d[b]=e[f];b=f;}a.d$.data[a.s]=null;a.d7=a.d7+1|0;return c;}
function H_(a,b){var c;c=ABb(a,b);if(c<0)return 0;En(a,c);return 1;}
function Dy(a){ZF(a.d$,0,a.s,null);a.s=0;}
function K8(a,b){var c;if(b>=0&&b<a.s)return;c=new BO;O(c);M(c);}
function DH(){}
function TK(){D.call(this);this.AP=null;}
function AQD(a){CM(a.AP,SU(0,1,null,null));}
function AWo(a){AQD(a);}
function TJ(){var a=this;D.call(a);a.Et=null;a.EN=null;}
function AQA(a){CM(a.Et,SU(0,0,null,a.EN.result));}
function AS6(a){AQA(a);}
function TI(){D.call(this);this.Dz=null;}
function ASf(a){CM(a.Dz,SU(1,0,B(241),null));}
function AZn(a){ASf(a);}
function TH(){D.call(this);this.Br=null;}
function AJ$(a,b){var c,d,e,f,g,h,i;c=a.Br.result;d=A9Z();e=J(B4,1).data;e[0]=B(242);f=e.length;g=new Array(f);h=0;while(h<f){i=$rt_ustr(e[h]);g[h]=i;h=h+1|0;}d.keyPath=g;c.createObjectStore("filesystem",d);}
function ANL(a,b){AJ$(a,b);}
function A6J(a,b){ANL(a,b);}
function SD(){D.call(this);}
var Bf7=null;function Bhf(){var a=new SD();ZO(a);return a;}
function ZO(a){return;}
function AFq(){Bf7=De();BQ(Bf7,B(24),A1H());}
function Cc(){B6.call(this);}
function Bhg(){var a=new Cc();AT_(a);return a;}
function AT_(a){O(a);}
function Vg(){Cc.call(this);this.Iw=null;}
function EE(){B6.call(this);}
function Bc2(){var a=new EE();AUL(a);return a;}
function AUL(a){O(a);}
function AA$(){D.call(this);}
function Bhh(){var a=new AA$();AY6(a);return a;}
function AY6(a){return;}
function Fk(){var a=this;D.call(a);a.mG=0;a.bk=0;a.cy=0;a.lv=0;}
function Bhi(a){var b=new Fk();KO(b,a);return b;}
function KO(a,b){a.lv=(-1);a.mG=b;a.cy=b;}
function AVB(a){return a.mG;}
function A8r(a){return a.bk;}
function EN(a,b){var c,d;if(b>=0&&b<=a.cy){a.bk=b;if(b<a.lv)a.lv=0;return a;}c=new Cc;d=new S;V(d);Bl(c,T(H(Be(H(Be(H(d,B(243)),b),B(244)),a.cy),B(245))));M(c);}
function A07(a){return a.cy;}
function Nq(a,b){var c,d;if(b>=0&&b<=a.mG){if(a.lv>b)a.lv=(-1);a.cy=b;if(a.bk>a.cy)a.bk=a.cy;return a;}c=new Cc;d=new S;V(d);Bl(c,T(H(Be(H(Be(H(d,B(246)),b),B(244)),a.mG),B(245))));M(c);}
function EA(a){a.bk=0;a.cy=a.mG;a.lv=(-1);return a;}
function Gx(a){a.cy=a.bk;a.bk=0;a.lv=(-1);return a;}
function Ct(a){return a.cy-a.bk|0;}
function Fl(a){return a.bk>=a.cy?0:1;}
function L8(){Fk.call(this);}
function ADr(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BO;i=new S;V(i);Bl(h,T(Be(H(Be(H(i,B(247)),g),B(248)),f)));M(h);}if(Ct(a)<d){h=new Gu;O(h);M(h);}if(d<0){h=new BO;i=new S;V(i);Bl(h,T(H(Be(H(i,B(249)),d),B(250))));M(h);}g=a.bk;j=0;while(j<d){k=c+1|0;f=g+1|0;e[c]=RH(a,g);j=j+1|0;c=k;g=f;}a.bk=a.bk+d|0;return a;}}b=b.data;i=new BO;h=new S;V(h);Bl(i,T(H(Be(H(Be(H(h,B(251)),c),B(244)),b.length),B(27))));M(i);}
function VM(a,b){return ADr(a,b,0,b.data.length);}
function LS(a){EA(a);return a;}
function TO(a){Gx(a);return a;}
function Qc(a,b){Nq(a,b);return a;}
function AE5(){var a=this;D.call(a);a.F=null;a.cz=0;a.fr=0;a.dQ=0;}
function A8k(a){var b=new AE5();ATF(b,a);return b;}
function Ki(){var a=new AE5();ATc(a);return a;}
function ATF(a,b){a.cz=(-1);a.fr=0;a.dQ=0;a.F=b;}
function ATc(a){a.cz=(-1);a.fr=0;a.dQ=0;}
function AMz(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.cz=f;$p=1;case 1:AN3(a,b,c,d,e);if(C()){break _;}a.cz=(-1);return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AN3(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=b.em();g=a.F;$p=1;case 1:b.xO(g,c,d,e);if(C()){break _;}if(!f){$p=2;continue _;}if(f==4){$p=3;continue _;}if(f==1){$p=4;continue _;}if(f==6){$p=5;continue _;}if(f==2){$p=6;continue _;}if(f==3){$p=7;continue _;}if(f==5){$p=8;continue _;}if(f==8){$p=9;continue _;}if(f==7){$p=10;continue _;}if(f==9){$p=11;continue _;}if(f==10){$p=12;continue _;}if
(f!=11)return 0;$p=13;continue _;case 2:$z=ABW(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 3:$z=AB6(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 4:$z=AA_(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 5:$z=ALL(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 6:$z=AN5(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 7:$z=ZT(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 8:$z=ADu(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 9:$z=AJz(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 10:$z=AKD(a,b,c,d,e);if(C())
{break _;}c=$z;return c;case 11:$z=AM_(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 12:$z=AIw(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 13:$z=AFJ(a,b,c,d,e);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AN5(a,b,c,d,e){var f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.F;$p=1;case 1:$z=f.eI(c,d,e);if(C()){break _;}g=$z;BA();f=BeL;h=a.F;$p=2;case 2:$z=b.Cz(h,c,d,e);if(C()){break _;}i=$z;if(BgD.data[b.b]>0)i=1.0;Cq(f,i,i,i);if(g==1)GJ(a,b,c-0.09999999403953552,d+0.20000000298023224,e,(-0.4000000059604645),0.0);else if(g==2)GJ(a,b,c+0.09999999403953552,d+0.20000000298023224,e,0.4000000059604645,
0.0);else if(g==3)GJ(a,b,c,d+0.20000000298023224,e-0.09999999403953552,0.0,(-0.4000000059604645));else if(g!=4)GJ(a,b,c,d,e,0.0,0.0);else GJ(a,b,c,d+0.20000000298023224,e+0.09999999403953552,0.0,0.4000000059604645);return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ZT(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p)
{case 0:BA();f=BeL;g=b.ci(0);if(a.cz>=0)g=a.cz;h=a.F;$p=1;case 1:$z=b.Cz(h,c,d,e);if(C()){break _;}i=$z;Cq(f,i,i,i);j=(g&15)<<4;k=g&240;i=j;l=i/256.0;m=(i+15.989999771118164)/256.0;i=k;n=i/256.0;o=i+15.989999771118164;p=o/256.0;q=1.399999976158142;b=a.F;g=d-1|0;$p=2;case 2:$z=b.lh(c,g,e);if(C()){break _;}j=$z;if(j){r=c+0.5;s=r+0.2;t=r-0.2;u=e+0.5;v=u+0.2;w=u-0.2;x=r-0.3;y=r+0.3;z=u-0.3;ba=u+0.3;bb=d+q;bc=e+1|0;G(f,x,bb,bc,m,n);bd=d+0|0;G(f,s,bd,bc,m,p);be=e+0|0;G(f,s,bd,be,l,p);G(f,x,bb,be,l,n);G(f,y,bb,be,
m,n);G(f,t,bd,be,m,p);G(f,t,bd,bc,l,p);G(f,y,bb,bc,l,n);y=(k+16|0)/256.0;s=(o+16.0)/256.0;t=c+1|0;G(f,t,bb,ba,m,y);G(f,t,bd,w,m,s);x=c+0|0;G(f,x,bd,w,l,s);G(f,x,bb,ba,l,y);G(f,x,bb,z,m,y);G(f,x,bd,v,m,s);G(f,t,bd,v,l,s);G(f,t,bb,z,l,y);v=r-0.5;z=r+0.5;ba=u-0.5;bf=u+0.5;bg=r-0.4;bh=r+0.4;r=u-0.4;w=u+0.4;G(f,bg,bb,be,l,y);G(f,v,bd,be,l,s);G(f,v,bd,bc,m,s);G(f,bg,bb,bc,m,y);G(f,bh,bb,bc,l,y);G(f,z,bd,bc,l,s);G(f,z,bd,be,m,s);G(f,bh,bb,be,m,y);G(f,x,bb,w,l,n);G(f,x,bd,bf,l,p);G(f,t,bd,bf,m,p);G(f,t,bb,w,m,n);G(f,
t,bb,r,l,n);G(f,t,bd,ba,l,p);G(f,x,bd,ba,m,p);G(f,x,bb,r,m,n);return 1;}b=Bgp;h=a.F;$p=3;case 3:$z=AF1(b,h,c,g,e);if(C()){break _;}g=$z;if(g){r=c+0.5;s=r+0.2;t=r-0.2;u=e+0.5;v=u+0.2;w=u-0.2;x=r-0.3;y=r+0.3;z=u-0.3;ba=u+0.3;bb=d+q;bc=e+1|0;G(f,x,bb,bc,m,n);bd=d+0|0;G(f,s,bd,bc,m,p);be=e+0|0;G(f,s,bd,be,l,p);G(f,x,bb,be,l,n);G(f,y,bb,be,m,n);G(f,t,bd,be,m,p);G(f,t,bd,bc,l,p);G(f,y,bb,bc,l,n);y=(k+16|0)/256.0;s=(o+16.0)/256.0;t=c+1|0;G(f,t,bb,ba,m,y);G(f,t,bd,w,m,s);x=c+0|0;G(f,x,bd,w,l,s);G(f,x,bb,ba,l,y);G(f,
x,bb,z,m,y);G(f,x,bd,v,m,s);G(f,t,bd,v,l,s);G(f,t,bb,z,l,y);v=r-0.5;z=r+0.5;ba=u-0.5;bf=u+0.5;bg=r-0.4;bh=r+0.4;r=u-0.4;w=u+0.4;G(f,bg,bb,be,l,y);G(f,v,bd,be,l,s);G(f,v,bd,bc,m,s);G(f,bg,bb,bc,m,y);G(f,bh,bb,bc,l,y);G(f,z,bd,bc,l,s);G(f,z,bd,be,m,s);G(f,bh,bb,be,m,y);G(f,x,bb,w,l,n);G(f,x,bd,bf,l,p);G(f,t,bd,bf,m,p);G(f,t,bb,w,m,n);G(f,t,bb,r,l,n);G(f,t,bd,ba,l,p);G(f,x,bd,ba,m,p);G(f,x,bb,r,m,n);return 1;}bi=0.20000000298023224;bj=0.0625;if((((c+d|0)+e|0)&1)!=1){ba=l;bb=m;x=n;z=p;}else{x=(k+16|0)/256.0;z=(o
+16.0)/256.0;ba=l;bb=m;}if(((((c/2|0)+(d/2|0)|0)+(e/2|0)|0)&1)!=1){r=ba;ba=bb;bb=r;}b=Bgp;h=a.F;g=c-1|0;$p=4;case 4:$z=AF1(b,h,g,d,e);if(C()){break _;}g=$z;if(g){w=c+bi;s=d+q+bj;t=e+1|0;G(f,w,s,t,ba,x);u=c+0|0;v=(d+0|0)+bj;G(f,u,v,t,ba,z);r=e+0|0;G(f,u,v,r,bb,z);G(f,w,s,r,bb,x);G(f,w,s,r,bb,x);G(f,u,v,r,bb,z);G(f,u,v,t,ba,z);G(f,w,s,t,ba,x);}b=Bgp;h=a.F;j=c+1|0;$p=5;case 5:$z=AF1(b,h,j,d,e);if(C()){break _;}g=$z;if(g){r=j-bi;w=d+q+bj;s=e+0|0;G(f,r,w,s,bb,x);t=j-0|0;u=(d+0|0)+bj;G(f,t,u,s,bb,z);v=e+1|0;G(f,t,
u,v,ba,z);G(f,r,w,v,ba,x);G(f,r,w,v,ba,x);G(f,t,u,v,ba,z);G(f,t,u,s,bb,z);G(f,r,w,s,bb,x);}b=Bgp;h=a.F;g=e-1|0;$p=6;case 6:$z=AF1(b,h,c,d,g);if(C()){break _;}g=$z;if(g){r=c+0|0;w=d+q+bj;s=e+bi;G(f,r,w,s,ba,x);t=(d+0|0)+bj;u=e+0|0;G(f,r,t,u,ba,z);v=j;G(f,v,t,u,bb,z);G(f,v,w,s,bb,x);G(f,v,w,s,bb,x);G(f,v,t,u,bb,z);G(f,r,t,u,ba,z);G(f,r,w,s,ba,x);}b=Bgp;h=a.F;bk=e+1|0;$p=7;case 7:$z=AF1(b,h,c,d,bk);if(C()){break _;}g=$z;if(g){t=j;u=d+q+bj;v=bk-bi;G(f,t,u,v,bb,x);r=(d+0|0)+bj;w=bk-0|0;G(f,t,r,w,bb,z);s=c+0|0;G(f,
s,r,w,ba,z);G(f,s,u,v,ba,x);G(f,s,u,v,ba,x);G(f,s,r,w,ba,z);G(f,t,r,w,bb,z);G(f,t,u,v,bb,x);}b=Bgp;h=a.F;d=d+1|0;$p=8;case 8:$z=AF1(b,h,c,d,e);if(C()){break _;}g=$z;if(g){r=c+0.5;t=r+0.5;u=r-0.5;r=e+0.5;w=r+0.5;r=r-0.5;if(((c+d|0)+e|0)&1){s=c+0|0;t=d+(-0.20000000298023224);G(f,s,t,w,m,n);u=d+0|0;G(f,s,u,r,m,p);v=j;G(f,v,u,r,l,p);G(f,v,t,w,l,n);x=(k+16|0)/256.0;z=(o+16.0)/256.0;G(f,v,t,r,m,x);G(f,v,u,w,m,z);G(f,s,u,w,l,z);G(f,s,t,r,l,x);}else{v=d+(-0.20000000298023224);x=e+0|0;G(f,u,v,x,m,n);z=d+0|0;G(f,t,z,
x,m,p);r=bk;G(f,t,z,r,l,p);G(f,u,v,r,l,n);w=(k+16|0)/256.0;s=(o+16.0)/256.0;G(f,t,v,r,m,w);G(f,u,z,r,m,s);G(f,u,z,x,l,s);G(f,t,v,x,l,w);}}return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p);}
function ADu(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeL;g=b.ci(0);if(a.cz>=0)g=a.cz;h=a.F;$p=1;case 1:$z=b.Cz(h,c,d,e);if(C()){break _;}i=$z;Cq(f,i,i,i);j=(g&15)<<4;k=j+16|0;l=g&240;if((((c+d|0)+e|0)&
1)!=1){g=j;j=k;k=g;}i=j;m=i/256.0;n=(i+15.989999771118164)/256.0;i=l;o=i/256.0;p=(i+15.989999771118164)/256.0;q=k;r=q/256.0;s=(q+15.989999771118164)/256.0;t=0.125;q=0.05000000074505806;b=a.F;k=c-1|0;$p=2;case 2:$z=b.lh(k,d,e);if(C()){break _;}k=$z;if(k){u=c+q;v=(d+1|0)+t;w=(e+1|0)+t;G(f,u,v,w,m,o);x=(d+0|0)-t;G(f,u,x,w,m,p);w=(e+0|0)-t;G(f,u,x,w,n,p);G(f,u,v,w,n,o);}b=a.F;l=c+1|0;$p=3;case 3:$z=b.lh(l,d,e);if(C()){break _;}k=$z;if(k){u=l-q;x=(d+0|0)-t;w=(e+1|0)+t;G(f,u,x,w,n,p);v=(d+1|0)+t;G(f,u,v,w,n,o);w=
(e+0|0)-t;G(f,u,v,w,m,o);G(f,u,x,w,m,p);}b=a.F;k=e-1|0;$p=4;case 4:$z=b.lh(c,d,k);if(C()){break _;}k=$z;if(k){u=l+t;m=(d+0|0)-t;x=e+q;G(f,u,m,x,s,p);w=(d+1|0)+t;G(f,u,w,x,s,o);u=(c+0|0)-t;G(f,u,w,x,r,o);G(f,u,m,x,r,p);}b=a.F;e=e+1|0;$p=5;case 5:$z=b.lh(c,d,e);if(C()){break _;}k=$z;if(k){u=l+t;m=(d+1|0)+t;x=e-q;G(f,u,m,x,r,o);w=(d+0|0)-t;G(f,u,w,x,r,p);u=(c+0|0)-t;G(f,u,w,x,s,p);G(f,u,m,x,s,o);}return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function AM_(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=
$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeL;g=a.F;$p=1;case 1:$z=g.eI(c,d,e);if(C()){break _;}h=$z;i=b.eY(0,h);if(a.cz>=0)i=a.cz;g=a.F;$p=2;case 2:$z=b.Cz(g,c,d,e);if(C()){break _;}j=$z;Cq(f,j,j,j);k=(i&15)<<4;l=i&240;m=k;n=m/256.0;o=(m+15.989999771118164)/256.0;m=l;p=m/256.0;q=(m+15.989999771118164)/256.0;r=c+1|0;s=c+0|0;t=e+0|0;u=e+1|0;v=d+0.0625;if(h!=1&&h!=2&&h!=3&&h!=7){if(h==8){w=s;x=r;y=r;z=u;m=t;j=t;ba=s;r=x;s=y;bb=u;t=m;u=j;}else if(h!=9){w=r;j=s;z=t;m=u;ba=r;r=j;bb=t;t=m;}else{w=r;ba
=s;j=r;z=u;bb=t;m=t;r=s;s=j;t=u;u=m;}}else{w=s;ba=r;z=t;bb=u;}if(h!=2&&h!=4){if(h!=3&&h!=5){x=v;j=v;y=v;m=v;v=j;}else{j=v+1.0;x=j;y=v;m=v;v=j;}}else{m=v+1.0;x=v;y=m;}bc=ba;bd=y;be=bb;G(f,bc,bd,be,o,p);bf=w;bg=x;bh=u;G(f,bf,bg,bh,o,q);bi=s;bj=v;bk=t;G(f,bi,bj,bk,n,q);bl=r;bm=m;bn=z;G(f,bl,bm,bn,n,p);G(f,bl,bm,bn,n,p);G(f,bi,bj,bk,n,q);G(f,bf,bg,bh,o,q);G(f,bc,bd,be,o,p);return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,$p);}
function AJz(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeL;g=b.ci(0);if(a.cz>=0)g=a.cz;h=a.F;$p=1;case 1:$z=b.Cz(h,c,d,e);if(C()){break _;}i=$z;Cq(f,i,i,i);j=(g&15)<<4;k=g&240;i=j;l=i/256.0;m=(i+15.989999771118164)/256.0;i=k;n=i/256.0;o=(i+15.989999771118164)
/256.0;b=a.F;$p=2;case 2:$z=b.eI(c,d,e);if(C()){break _;}p=$z;if(p==5){q=c+0.05000000074505806;r=(d+1|0)+0.0;s=(e+1|0)+0.0;G(f,q,r,s,l,n);t=(d+0|0)-0.0;G(f,q,t,s,l,o);s=(e+0|0)-0.0;G(f,q,t,s,m,o);G(f,q,r,s,m,n);}if(p==4){t=(c+1|0)-0.05000000074505806;q=(d+0|0)-0.0;s=(e+1|0)+0.0;G(f,t,q,s,m,o);r=(d+1|0)+0.0;G(f,t,r,s,m,n);s=(e+0|0)-0.0;G(f,t,r,s,l,n);G(f,t,q,s,l,o);}if(p==3){q=(c+1|0)+0.0;r=(d+0|0)-0.0;s=e+0.05000000074505806;G(f,q,r,s,m,o);t=(d+1|0)+0.0;G(f,q,t,s,m,n);q=(c+0|0)-0.0;G(f,q,t,s,l,n);G(f,q,r,s,
l,o);}if(p==2){r=(c+1|0)+0.0;s=(d+1|0)+0.0;t=(e+1|0)-0.05000000074505806;G(f,r,s,t,l,n);q=(d+0|0)-0.0;G(f,r,q,t,l,o);r=(c+0|0)-0.0;G(f,r,q,t,m,o);G(f,r,s,t,m,n);}return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p);}
function AA_(a,b,c,d,e){var f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeL;g=a.F;$p=1;case 1:$z=b.Cz(g,c,d,e);if(C()){break _;}h=$z;Cq(f,h,h,h);f=a.F;$p=2;case 2:$z=f.eI(c,d,e);if(C()){break _;}i=$z;Uq(a,b,i,c,d,e);return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ALL(a,b,c,d,e){var f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeL;g=a.F;$p=1;case 1:$z=b.Cz(g,c,d,e);if(C()){break _;}h=$z;Cq(f,h,h,h);f=a.F;$p=2;case 2:$z=f.eI(c,d,e);if(C()){break _;}i=$z;OP(a,b,i,c,d-0.0625,e);return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function GJ(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd;BA();h=BeL;i=b.ci(0);if(a.cz>=0)i=a.cz;j=(i&15)<<4;k=i&240;l=j;m=l/256.0;l=(l+15.989999771118164)/256.0;n=k;o=n/256.0;n=(n+15.989999771118164)/256.0;p=m;q=p+0.02734375;r=o;s=r+0.0234375;t=p+0.03515625;u=r+0.03125;c=c+0.5;e=e+0.5;v=c-0.5;w=c+0.5;x=e-0.5;y=e+0.5;z=c+f*0.375;ba=z-0.0625;bb=d+0.625;bc=e+g*0.375;bd=bc-0.0625;G(h,ba,bb,bd,q,s);bc=bc+0.0625;G(h,ba,bb,bc,q,u);q=z+0.0625;G(h,q,bb,bc,t,u);G(h,q,bb,bd,t,s);u=c-0.0625;bc=d
+1.0;G(h,u,bc,x,p,r);q=u+f;d=d+0.0;t=x+g;bd=n;G(h,q,d,t,p,bd);s=y+g;z=l;G(h,q,d,s,z,bd);G(h,u,bc,y,z,r);u=c+0.0625;G(h,u,bc,y,p,r);c=c+f+0.0625;G(h,c,d,s,p,bd);G(h,c,d,t,z,bd);G(h,u,bc,x,z,r);c=e+0.0625;G(h,v,bc,c,p,r);u=v+f;q=c+g;G(h,u,d,q,p,bd);f=w+f;G(h,f,d,q,z,bd);G(h,w,bc,c,z,r);c=e-0.0625;G(h,w,bc,c,p,r);e=c+g;G(h,f,d,e,p,bd);G(h,u,d,e,z,bd);G(h,v,bc,c,z,r);}
function Uq(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s;BA();g=BeL;h=b.eY(0,c);if(a.cz>=0)h=a.cz;i=(h&15)<<4;j=h&240;k=i;l=k/256.0;m=(k+15.989999771118164)/256.0;k=j;n=k/256.0;o=(k+15.989999771118164)/256.0;d=d+0.5;p=d-0.44999998807907104;q=d+0.44999998807907104;d=f+0.5;r=d-0.44999998807907104;s=d+0.44999998807907104;d=e+1.0;G(g,p,d,r,l,n);e=e+0.0;G(g,p,e,r,l,o);G(g,q,e,s,m,o);G(g,q,d,s,m,n);G(g,q,d,s,l,n);G(g,q,e,s,l,o);G(g,p,e,r,m,o);G(g,p,d,r,m,n);G(g,p,d,s,l,n);G(g,p,e,s,l,o);G(g,q,e,r,m,o);G(g,q,d,r,m,n);G(g,
q,d,r,l,n);G(g,q,e,r,l,o);G(g,p,e,s,m,o);G(g,p,d,s,m,n);}
function OP(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeL;h=b.eY(0,c);if(a.cz>=0)h=a.cz;i=(h&15)<<4;j=h&240;k=i;l=k/256.0;m=(k+15.989999771118164)/256.0;k=j;n=k/256.0;o=(k+15.989999771118164)/256.0;d=d+0.5;p=d-0.25;q=d+0.25;f=f+0.5;r=f-0.5;s=f+0.5;t=e+1.0;G(g,p,t,r,l,n);e=e+0.0;G(g,p,e,r,l,o);G(g,p,e,s,m,o);G(g,p,t,s,m,n);G(g,p,t,s,l,n);G(g,p,e,s,l,o);G(g,p,e,r,m,o);G(g,p,t,r,m,n);G(g,q,t,s,l,n);G(g,q,e,s,l,o);G(g,q,e,r,m,o);G(g,q,t,r,m,n);G(g,q,t,r,l,n);G(g,q,e,r,l,o);G(g,q,e,s,m,o);G(g,q,t,s,m,n);p
=d-0.5;d=d+0.5;q=f-0.25;f=f+0.25;G(g,p,t,q,l,n);G(g,p,e,q,l,o);G(g,d,e,q,m,o);G(g,d,t,q,m,n);G(g,d,t,q,l,n);G(g,d,e,q,l,o);G(g,p,e,q,m,o);G(g,p,t,q,m,n);G(g,d,t,f,l,n);G(g,d,e,f,l,o);G(g,p,e,f,m,o);G(g,p,t,f,m,n);G(g,p,t,f,l,n);G(g,p,e,f,l,o);G(g,d,e,f,m,o);G(g,d,t,f,m,n);}
function AB6(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();bC=$T.l();bB=$T.l();bA=$T.l();bz=$T.l();by=$T.l();bx=$T.l();bw=$T.l();bv=$T.l();bu=$T.l();bt=$T.l();bs=$T.l();br=$T.l();bq=$T.l();bp=$T.l();bo=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w
=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeL;g=a.F;h=d+1|0;i=1;$p=1;case 1:$z=b.pI(g,c,h,e,i);if(C()){break _;}h=$z;g=a.F;i=d-1|0;j=0;$p=2;case 2:$z=b.pI(g,c,i,e,j);if(C()){break _;}j=$z;k=$rt_createBooleanArray(4).data;l=0;g=a.F;m=e-1|0;n=2;$p=3;case 3:$z=b.pI(g,c,d,m,n);if(C()){break _;}n=$z;k[l]=n;n=1;g
=a.F;o=e+1|0;l=3;$p=4;case 4:$z=b.pI(g,c,d,o,l);if(C()){break _;}l=$z;k[n]=l;n=2;g=a.F;p=c-1|0;l=4;$p=5;case 5:$z=b.pI(g,p,d,e,l);if(C()){break _;}l=$z;k[n]=l;n=3;g=a.F;q=c+1|0;l=5;$p=6;case 6:$z=b.pI(g,q,d,e,l);if(C()){break _;}l=$z;k[n]=l;if(!h&&!j&&!k[0]&&!k[1]&&!k[2]&&!k[3])return 0;r=0;s=0.5;t=1.0;u=0.800000011920929;v=0.6000000238418579;w=0.0;x=1.0;y=b.b_;g=a.F;$p=7;case 7:$z=g.eI(c,d,e);if(C()){break _;}z=$z;$p=8;case 8:$z=APA(a,c,d,e,y);if(C()){break _;}ba=$z;$p=9;case 9:$z=APA(a,c,d,o,y);if(C()){break _;}bb
=$z;$p=10;case 10:$z=APA(a,q,d,o,y);if(C()){break _;}bc=$z;$p=11;case 11:$z=APA(a,q,d,e,y);if(C()){break _;}bd=$z;if(!a.dQ&&!h){if(!a.dQ&&!j){i=0;be=d;bf=d+0|0;bg=c;bh=q;bi=e;bj=o;a:{while(i<4){h=!i?m:e;n=R(i,1);if(!n)h=h+1|0;l=R(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.eY(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.dQ)break a;if(k[i])break a;i=i+1|0;}b.cM=w;b.cF=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp=bh;s=bi;bq=bj;}else{bm=bb;bn
=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.F;$p=15;continue _;}g=a.F;$p=13;continue _;}r=1;bx=b.eY(1,z);g=a.F;$p=12;case 12:$z=A6g(g,c,d,e,y);if(C()){break _;}by=$z;bm=by;h=R(bm,(-999.0));if(h>0)bx=b.eY(2,z);n=(bx&15)<<4;l=bx&240;by=(n+8.0)/256.0;bz=(l+8.0)/256.0;if(h<0)bm=0.0;else{by=(n+16|0)/256.0;bz=(l+16|0)/256.0;}bn=Bq(bm)*8.0/256.0;bo=BC(bm)*8.0/256.0;g=a.F;$p=14;continue _;case 13:$z
=b.Cz(g,c,i,e);if(C()){break _;}bp=$z;bm=s*bp;Cq(f,bm,bm,bm);HI(a,b,c,d,e,b.ci(0));r=1;i=0;be=d;bf=d+0|0;bg=c;bh=q;bi=e;bj=o;b:{while(i<4){h=!i?m:e;n=R(i,1);if(!n)h=h+1|0;l=R(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.eY(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.dQ)break b;if(k[i])break b;i=i+1|0;}b.cM=w;b.cF=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp=bh;s=bi;bq=bj;}else{bm=bb;bn=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=
((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.F;$p=15;continue _;case 14:$z=b.Cz(g,c,d,e);if(C()){break _;}bi=$z;bm=t*bi;Cq(f,bm,bm,bm);bA=c+0|0;bm=d;br=bm+ba;bu=e+0|0;bB=bo;bf=by-bB;bw=bn;bC=bf-bw;bs=bz-bB;G(f,bA,br,bu,bC,bs+bw);bC=bm+bb;bv=o;bf=bf+bw;br=bz+bB;G(f,bA,bC,bv,bf,br+bw);bA=q;bf=bm+bc;by=by+bB;G(f,bA,bf,bv,by+bw,br-bw);G(f,bA,bm+bd,bu,by-bw,bs-bw);if(!a.dQ&&!j){i=0;be=d;bf=d+0|0;bg=c;bh=q;bi=e;bj=o;c:{while(i<4){h=!i?m:e;n=R(i,
1);if(!n)h=h+1|0;l=R(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.eY(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.dQ)break c;if(k[i])break c;i=i+1|0;}b.cM=w;b.cF=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp=bh;s=bi;bq=bj;}else{bm=bb;bn=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.F;$p=15;continue _;}g=a.F;$p=13;continue _;case 15:$z
=b.Cz(g,o,d,h);if(C()){break _;}bt=$z;bt=t*(l>=0?bt*v:bt*u);Cq(f,bt,bt,bt);bC=bo;by=be+bm;bA=s;G(f,bC,by,bA,br,bu);by=bp;bu=be+bn;bB=bq;G(f,by,bu,bB,bs,bv);G(f,by,bf,bB,bs,bw);G(f,bC,bf,bA,br,bw);c:{while(true){i=i+1|0;if(i>=4)break;h=!i?m:e;n=R(i,1);if(!n)h=h+1|0;l=R(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.eY(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.dQ)break c;if(k[i])break c;}b.cM=w;b.cF=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp
=bh;s=bi;bq=bj;}else{bm=bb;bn=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.F;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,$p);}
function APA(a,b,c,d,e){var f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=0.0;h=0;i=c+1|0;if(h>=4)return 1.0-g/f;j=b-(h&1)|0;k=d-(h>>1&1)|0;l=a.F;$p=1;case 1:$z=l.oM(j,i,k);if(C()){break _;}l=$z;if(l===e)return 1.0;l=a.F;$p=2;case 2:$z=l.oM(j,c,k);if(C()){break _;}l=$z;if(l===e){l=a.F;$p=3;continue _;}if(!l.dw()){g=g+1.0;f=f+1|0;}h=h+1|0;if(h
>=4)return 1.0-g/f;j=b-(h&1)|0;k=d-(h>>1&1)|0;l=a.F;$p=1;continue _;case 3:$z=l.eI(j,c,k);if(C()){break _;}m=$z;if(!(m<8&&m)){g=g+Jx(m)*10.0;f=f+10|0;}g=g+Jx(m);f=f+1|0;h=h+1|0;if(h>=4)return 1.0-g/f;j=b-(h&1)|0;k=d-(h>>1&1)|0;l=a.F;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AI1(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=0.5;h=1.0;i=0.800000011920929;j=0.6000000238418579;BA();k=BeL;Bz(k);$p=1;case 1:$z=b.Cz(c,d,e,f);if(C()){break _;}l=$z;m=e-1|0;$p=2;case 2:$z=b.Cz(c,d,m,f);if(C()){break _;}n=$z;if(n<l)n=l;n=g*n;Cq(k,n,n,n);HI(a,b,(-0.5),(-0.5),(-0.5),b.ci(0));m=e+1|0;$p=3;case 3:$z
=b.Cz(c,d,m,f);if(C()){break _;}n=$z;if(n<l)n=l;h=h*n;Cq(k,h,h,h);JH(a,b,(-0.5),(-0.5),(-0.5),b.ci(1));m=f-1|0;$p=4;case 4:$z=b.Cz(c,d,e,m);if(C()){break _;}h=$z;if(h<l)h=l;h=i*h;Cq(k,h,h,h);JW(a,b,(-0.5),(-0.5),(-0.5),b.ci(2));m=f+1|0;$p=5;case 5:$z=b.Cz(c,d,e,m);if(C()){break _;}h=$z;if(h<l)h=l;h=i*h;Cq(k,h,h,h);J$(a,b,(-0.5),(-0.5),(-0.5),b.ci(3));m=d-1|0;$p=6;case 6:$z=b.Cz(c,m,e,f);if(C()){break _;}h=$z;if(h<l)h=l;h=j*h;Cq(k,h,h,h);JQ(a,b,(-0.5),(-0.5),(-0.5),b.ci(4));d=d+1|0;$p=7;case 7:$z=b.Cz(c,d,e,
f);if(C()){break _;}h=$z;if(h>=l)l=h;h=j*l;Cq(k,h,h,h);KR(a,b,(-0.5),(-0.5),(-0.5),b.ci(5));Br(k);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ABW(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=1.0;$p=1;case 1:$z=ALu(a,b,c,d,e,f,f,f);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ALu(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();i=BeL;j=0;k=0.5*f;l=1.0*f;m=0.800000011920929*f;n=0.6000000238418579*f;o=0.5
*g;p=1.0*g;q=0.800000011920929*g;r=0.6000000238418579*g;s=0.5*h;t=1.0*h;u=0.800000011920929*h;v=0.6000000238418579*h;w=a.F;$p=1;case 1:$z=b.Cz(w,c,d,e);if(C()){break _;}x=$z;if(a.dQ){w=a.F;y=d-1|0;$p=2;continue _;}w=a.F;z=d-1|0;y=0;$p=3;continue _;case 2:$z=b.Cz(w,c,y,e);if(C()){break _;}ba=$z;if(BgD.data[b.b]>0)ba=1.0;Cq(i,k*ba,o*ba,s*ba);bb=c;bc=d;bd=e;w=a.F;y=0;$p=4;continue _;case 3:$z=b.pI(w,c,z,e,y);if(C()){break _;}y=$z;if(y){w=a.F;y=d-1|0;$p=2;continue _;}if(a.dQ){w=a.F;y=d+1|0;$p=5;continue _;}w=a.F;y
=d+1|0;z=1;$p=6;continue _;case 4:$z=b.ul(w,c,d,e,y);if(C()){break _;}y=$z;HI(a,b,bb,bc,bd,y);j=1;if(a.dQ){w=a.F;y=d+1|0;$p=5;continue _;}w=a.F;y=d+1|0;z=1;$p=6;continue _;case 5:$z=b.Cz(w,c,y,e);if(C()){break _;}ba=$z;if(b.cF!==1.0&&!b.b_.nF())ba=x;if(BgD.data[b.b]>0)ba=1.0;Cq(i,l*ba,p*ba,t*ba);bb=c;bc=d;bd=e;w=a.F;y=1;$p=9;continue _;case 6:$z=b.pI(w,c,y,e,z);if(C()){break _;}y=$z;if(y){w=a.F;y=d+1|0;$p=5;continue _;}if(a.dQ){w=a.F;y=e-1|0;$p=7;continue _;}w=a.F;y=e-1|0;z=2;$p=8;continue _;case 7:$z=b.Cz(w,
c,d,y);if(C()){break _;}ba=$z;if(b.c_>0.0)ba=x;if(BgD.data[b.b]>0)ba=1.0;Cq(i,m*ba,q*ba,u*ba);bb=c;bc=d;bd=e;w=a.F;y=2;$p=12;continue _;case 8:$z=b.pI(w,c,d,y,z);if(C()){break _;}y=$z;if(y){w=a.F;y=e-1|0;$p=7;continue _;}if(a.dQ){w=a.F;y=e+1|0;$p=10;continue _;}w=a.F;y=e+1|0;z=3;$p=11;continue _;case 9:$z=b.ul(w,c,d,e,y);if(C()){break _;}y=$z;JH(a,b,bb,bc,bd,y);j=1;if(a.dQ){w=a.F;y=e-1|0;$p=7;continue _;}w=a.F;y=e-1|0;z=2;$p=8;continue _;case 10:$z=b.Cz(w,c,d,y);if(C()){break _;}ba=$z;if(b.dd<1.0)ba=x;if(BgD.data[b.b]
>0)ba=1.0;Cq(i,m*ba,q*ba,u*ba);bb=c;bc=d;bd=e;w=a.F;y=3;$p=15;continue _;case 11:$z=b.pI(w,c,d,y,z);if(C()){break _;}y=$z;if(y){w=a.F;y=e+1|0;$p=10;continue _;}if(a.dQ){w=a.F;y=c-1|0;$p=13;continue _;}w=a.F;y=c-1|0;z=4;$p=14;continue _;case 12:$z=b.ul(w,c,d,e,y);if(C()){break _;}y=$z;JW(a,b,bb,bc,bd,y);j=1;if(a.dQ){w=a.F;y=e+1|0;$p=10;continue _;}w=a.F;y=e+1|0;z=3;$p=11;continue _;case 13:$z=b.Cz(w,y,d,e);if(C()){break _;}ba=$z;if(b.da>0.0)ba=x;if(BgD.data[b.b]>0)ba=1.0;Cq(i,n*ba,r*ba,v*ba);bb=c;bc=d;bd=e;w
=a.F;y=4;$p=18;continue _;case 14:$z=b.pI(w,y,d,e,z);if(C()){break _;}y=$z;if(y){w=a.F;y=c-1|0;$p=13;continue _;}if(a.dQ){w=a.F;y=c+1|0;$p=16;continue _;}w=a.F;y=c+1|0;z=5;$p=17;continue _;case 15:$z=b.ul(w,c,d,e,y);if(C()){break _;}y=$z;J$(a,b,bb,bc,bd,y);j=1;if(a.dQ){w=a.F;y=c-1|0;$p=13;continue _;}w=a.F;y=c-1|0;z=4;$p=14;continue _;case 16:$z=b.Cz(w,y,d,e);if(C()){break _;}ba=$z;if(b.dc>=1.0)x=ba;if(BgD.data[b.b]>0)x=1.0;Cq(i,n*x,r*x,v*x);bb=c;bc=d;bd=e;i=a.F;y=5;$p=19;continue _;case 17:$z=b.pI(w,y,d,e,
z);if(C()){break _;}y=$z;if(!y)return j;w=a.F;y=c+1|0;$p=16;continue _;case 18:$z=b.ul(w,c,d,e,y);if(C()){break _;}y=$z;JQ(a,b,bb,bc,bd,y);j=1;if(a.dQ){w=a.F;y=c+1|0;$p=16;continue _;}w=a.F;y=c+1|0;z=5;$p=17;continue _;case 19:$z=b.ul(i,c,d,e,y);if(C()){break _;}c=$z;KR(a,b,bb,bc,bd,c);j=1;return j;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function AFJ(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;Bo(b,0.375,0.0,0.375,0.625,1.0,0.625);$p=1;case 1:ABW(a,b,c,d,e);if(C()){break _;}g=0;h=0;i=a.F;j=c-1|0;$p=2;case 2:$z=i.ej(j,d,e);if(C()){break _;}j=$z;if(j!=b.b){i=a.F;j=c+1|0;$p=3;continue _;}g=1;i=a.F;j=e-1|0;$p=4;continue _;case 3:$z=i.ej(j,d,e);if(C()){break _;}j
=$z;if(j==b.b)g=1;i=a.F;j=e-1|0;$p=4;case 4:$z=i.ej(c,d,j);if(C()){break _;}j=$z;if(j!=b.b){i=a.F;j=e+1|0;$p=5;continue _;}h=1;if(!g&&!h)g=1;k=0.4375;l=0.5625;m=0.75;n=0.9375;if(g){Bo(b,0.0,m,k,1.0,n,l);$p=6;continue _;}if(h){Bo(b,k,m,0.0,l,n,1.0);$p=7;continue _;}m=0.375;n=0.5625;if(g){Bo(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bo(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 5:$z=i.ej(c,d,j);if(C()){break _;}j=$z;if(j==b.b)h=1;if(!g&&!h)g=1;k=0.4375;l=0.5625;m=0.75;n=0.9375;if
(g){Bo(b,0.0,m,k,1.0,n,l);$p=6;continue _;}if(h){Bo(b,k,m,0.0,l,n,1.0);$p=7;continue _;}m=0.375;n=0.5625;if(g){Bo(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bo(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 6:ABW(a,b,c,d,e);if(C()){break _;}if(h){Bo(b,k,m,0.0,l,n,1.0);$p=7;continue _;}m=0.375;n=0.5625;if(g){Bo(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bo(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 7:ABW(a,b,c,d,e);if(C()){break _;}m=0.375;n
=0.5625;if(g){Bo(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bo(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 8:ABW(a,b,c,d,e);if(C()){break _;}if(!h){Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bo(b,k,m,0.0,l,n,1.0);$p=9;case 9:ABW(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function AIw(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=a.F;$p=1;case 1:$z=g.eI(c,d,e);if(C()){break _;}h=$z;if(!h){Bo(b,0.0,0.0,0.0,0.5,0.5,1.0);$p=2;continue _;}if(h==1){Bo(b,0.0,0.0,0.0,0.5,1.0,1.0);$p=4;continue _;}if(h==2){Bo(b,0.0,0.0,0.0,1.0,0.5,0.5);$p=6;continue _;}if(h!=3){Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bo(b,0.0,0.0,0.0,1.0,1.0,0.5);$p=8;continue _;case 2:ABW(a,
b,c,d,e);if(C()){break _;}Bo(b,0.5,0.0,0.0,1.0,1.0,1.0);$p=3;case 3:ABW(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;case 4:ABW(a,b,c,d,e);if(C()){break _;}Bo(b,0.5,0.0,0.0,1.0,0.5,1.0);$p=5;case 5:ABW(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;case 6:ABW(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.5,1.0,1.0,1.0);$p=7;case 7:ABW(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;case 8:ABW(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.5,1.0,0.5,1.0);$p
=9;case 9:ABW(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AKD(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeL;g=b;h=0.5;i=1.0;j=0.800000011920929;k=0.6000000238418579;l=a.F;$p=1;case 1:$z=b.Cz(l,c,d,e);if(C()){break _;}m=$z;l=a.F;n=d-1|0;$p=2;case 2:$z=b.Cz(l,c,n,e);if(C()){break _;}o=$z;if(g.cM>0.0)o=m;if(BgD.data[b.b]
>0)o=1.0;h=h*o;Cq(f,h,h,h);p=c;q=d;r=e;l=a.F;n=0;$p=3;case 3:$z=b.ul(l,c,d,e,n);if(C()){break _;}n=$z;HI(a,b,p,q,r,n);l=a.F;n=d+1|0;$p=4;case 4:$z=b.Cz(l,c,n,e);if(C()){break _;}h=$z;if(g.cF<1.0)h=m;if(BgD.data[b.b]>0)h=1.0;i=i*h;Cq(f,i,i,i);l=a.F;n=1;$p=5;case 5:$z=b.ul(l,c,d,e,n);if(C()){break _;}n=$z;JH(a,b,p,q,r,n);l=a.F;n=e-1|0;$p=6;case 6:$z=b.Cz(l,c,d,n);if(C()){break _;}i=$z;if(g.c_>0.0)i=m;if(BgD.data[b.b]>0)i=1.0;i=j*i;Cq(f,i,i,i);l=a.F;n=2;$p=7;case 7:$z=b.ul(l,c,d,e,n);if(C()){break _;}s=$z;if(s
<0){a.fr=1;s= -s;}JW(a,b,p,q,r,s);a.fr=0;l=a.F;n=e+1|0;$p=8;case 8:$z=b.Cz(l,c,d,n);if(C()){break _;}i=$z;if(g.dd<1.0)i=m;if(BgD.data[b.b]>0)i=1.0;i=j*i;Cq(f,i,i,i);l=a.F;n=3;$p=9;case 9:$z=b.ul(l,c,d,e,n);if(C()){break _;}s=$z;if(s<0){a.fr=1;s= -s;}J$(a,b,p,q,r,s);a.fr=0;l=a.F;n=c-1|0;$p=10;case 10:$z=b.Cz(l,n,d,e);if(C()){break _;}i=$z;if(g.da>0.0)i=m;if(BgD.data[b.b]>0)i=1.0;i=k*i;Cq(f,i,i,i);l=a.F;n=4;$p=11;case 11:$z=b.ul(l,c,d,e,n);if(C()){break _;}s=$z;if(s<0){a.fr=1;s= -s;}JQ(a,b,p,q,r,s);a.fr=0;l=a.F;n
=c+1|0;$p=12;case 12:$z=b.Cz(l,n,d,e);if(C()){break _;}i=$z;if(g.dc>=1.0)m=i;if(BgD.data[b.b]>0)m=1.0;i=k*m;Cq(f,i,i,i);l=a.F;n=5;$p=13;case 13:$z=b.ul(l,c,d,e,n);if(C()){break _;}c=$z;if(c<0){a.fr=1;c= -c;}KR(a,b,p,q,r,c);a.fr=0;return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function HI(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeL;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.da*16.0)/256.0;l=(j+b.dc*16.0-0.01)/256.0;j=i;m=(j+b.c_*16.0)/256.0;n=(j+b.dd*16.0-0.01)/256.0;if(!(b.da>=0.0&&b.dc<=1.0)){o=h;k=(o+0.0)/256.0;l=(o+15.989999771118164)/256.0;}if(!(b.c_>=0.0&&b.dd<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.da;q=c+b.dc;r=d+b.cM;s=e+b.c_;t=e+b.dd;G(g,j,r,t,k,n);G(g,j,r,s,k,m);G(g,q,r,s,l,m);G(g,q,r,t,l,n);}
function JH(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeL;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.da*16.0)/256.0;l=(j+b.dc*16.0-0.01)/256.0;j=i;m=(j+b.c_*16.0)/256.0;n=(j+b.dd*16.0-0.01)/256.0;if(!(b.da>=0.0&&b.dc<=1.0)){o=h;k=(o+0.0)/256.0;l=(o+15.989999771118164)/256.0;}if(!(b.c_>=0.0&&b.dd<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.da;q=c+b.dc;r=d+b.cF;s=e+b.c_;t=e+b.dd;G(g,q,r,t,l,n);G(g,q,r,s,l,m);G(g,j,r,s,k,m);G(g,j,r,t,k,n);}
function JW(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeL;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.da*16.0)/256.0;j=(j+b.dc*16.0-0.01)/256.0;l=i;m=(l+b.cM*16.0)/256.0;n=(l+b.cF*16.0-0.01)/256.0;if(!a.fr){l=j;j=k;k=l;}if(!(b.da>=0.0&&b.dc<=1.0)){o=h;j=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cM>=0.0&&b.cF<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}l=c+b.da;q=c+b.dc;r=d+b.cM;s=d+b.cF;t=e+b.c_;G(g,l,s,t,k,m);G(g,q,s,t,j,m);G(g,q,r,t,j,n);G(g,l,r,t,k,n);}
function J$(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeL;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.da*16.0)/256.0;j=(j+b.dc*16.0-0.01)/256.0;l=i;m=(l+b.cM*16.0)/256.0;n=(l+b.cF*16.0-0.01)/256.0;if(!a.fr){l=j;j=k;k=l;}if(!(b.da>=0.0&&b.dc<=1.0)){o=h;j=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cM>=0.0&&b.cF<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}l=c+b.da;q=c+b.dc;r=d+b.cM;s=d+b.cF;t=e+b.dd;G(g,l,s,t,j,m);G(g,l,r,t,j,n);G(g,q,r,t,k,n);G(g,q,s,t,k,m);}
function JQ(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeL;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.c_*16.0)/256.0;l=(j+b.dd*16.0-0.01)/256.0;j=i;m=(j+b.cM*16.0)/256.0;n=(j+b.cF*16.0-0.01)/256.0;if(!a.fr){j=l;l=k;k=j;}if(!(b.c_>=0.0&&b.dd<=1.0)){o=h;l=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cM>=0.0&&b.cF<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.da;q=d+b.cM;r=d+b.cF;s=e+b.c_;t=e+b.dd;G(g,j,r,t,k,m);G(g,j,r,s,l,m);G(g,j,q,s,l,n);G(g,j,q,t,k,n);}
function KR(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeL;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.c_*16.0)/256.0;l=(j+b.dd*16.0-0.01)/256.0;j=i;m=(j+b.cM*16.0)/256.0;n=(j+b.cF*16.0-0.01)/256.0;if(!a.fr){j=l;l=k;k=j;}if(!(b.c_>=0.0&&b.dd<=1.0)){o=h;l=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cM>=0.0&&b.cF<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.dc;q=d+b.cM;r=d+b.cF;s=e+b.c_;t=e+b.dd;G(g,j,q,t,l,n);G(g,j,q,s,k,n);G(g,j,r,s,k,m);G(g,j,r,t,l,m);}
function GY(a,b){var c,d;a:{BA();c=BeL;d=b.em();if(d){if(d==1){Bz(c);Cj(0.0,(-1.0),0.0);Uq(a,b,(-1),(-0.5),(-0.5),(-0.5));Br(c);}else if(d==6){Bz(c);Cj(0.0,(-1.0),0.0);OP(a,b,(-1),(-0.5),(-0.5),(-0.5));Br(c);}else{if(d!=2){if(d==3)break a;if(d!=5)break a;else break a;}Bz(c);Cj(0.0,(-1.0),0.0);GJ(a,b,(-0.5),(-0.5),(-0.5),0.0,0.0);Br(c);}}else{Bw((-0.5),(-0.5),(-0.5));Bz(c);Cj(0.0,(-1.0),0.0);HI(a,b,0.0,0.0,0.0,b.ci(0));Br(c);Bz(c);Cj(0.0,1.0,0.0);JH(a,b,0.0,0.0,0.0,b.ci(1));Br(c);Bz(c);Cj(0.0,0.0,(-1.0));JW(a,
b,0.0,0.0,0.0,b.ci(2));Br(c);Bz(c);Cj(0.0,0.0,1.0);J$(a,b,0.0,0.0,0.0,b.ci(3));Br(c);Bz(c);Cj((-1.0),0.0,0.0);JQ(a,b,0.0,0.0,0.0,b.ci(4));Br(c);Bz(c);Cj(1.0,0.0,0.0);KR(a,b,0.0,0.0,0.0,b.ci(5));Br(c);Bw(0.5,0.5,0.5);}}}
function QJ(){var a=this;D.call(a);a.jk=null;a.hq=null;a.f0=0;a.fZ=0;a.pG=0.0;a.m5=0.0;a.pF=0.0;a.b1=0.0;a.bX=0.0;a.bU=0.0;a.ws=0;a.lW=0;a.lE=0;a.iT=0;a.BZ=0;}
function BK(a,b){var c=new QJ();A9i(c,a,b);return c;}
function A9i(a,b,c){a.ws=0;a.lW=0;a.lE=0;a.iT=1;a.BZ=0;a.f0=b;a.fZ=c;}
function BG(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba;a.jk=J(EQ,8);a.hq=J(Fy,6);i=b+e;j=c+f;k=d+g;l=b-h;m=c-h;n=d-h;d=i+h;j=j+h;h=k+h;if(!a.lE){b=l;l=d;d=b;}a:{o=G5(d,m,n,0.0,0.0);p=G5(l,m,n,0.0,8.0);q=G5(l,j,n,8.0,8.0);r=G5(d,j,n,8.0,0.0);s=G5(d,m,h,0.0,0.0);t=G5(l,m,h,0.0,8.0);u=G5(l,j,h,8.0,8.0);v=G5(d,j,h,8.0,0.0);a.jk.data[0]=o;a.jk.data[1]=p;a.jk.data[2]=q;a.jk.data[3]=r;a.jk.data[4]=s;a.jk.data[5]=t;a.jk.data[6]=u;a.jk.data[7]=v;w=a.hq.data;x=new Fy;y=J(EQ,4);z=y.data;z[0]=t;z[1]=p;z[2]
=q;z[3]=u;Hj(x,y,(a.f0+g|0)+e|0,a.fZ+g|0,((a.f0+g|0)+e|0)+g|0,(a.fZ+g|0)+f|0);w[0]=x;z=a.hq.data;x=new Fy;w=J(EQ,4);y=w.data;y[0]=o;y[1]=s;y[2]=v;y[3]=r;Hj(x,w,a.f0+0|0,a.fZ+g|0,a.f0+g|0,(a.fZ+g|0)+f|0);z[1]=x;z=a.hq.data;x=new Fy;w=J(EQ,4);y=w.data;y[0]=t;y[1]=s;y[2]=o;y[3]=p;Hj(x,w,a.f0+g|0,a.fZ+0|0,(a.f0+g|0)+e|0,a.fZ+g|0);z[2]=x;z=a.hq.data;x=new Fy;w=J(EQ,4);y=w.data;y[0]=q;y[1]=r;y[2]=v;y[3]=u;Hj(x,w,(a.f0+g|0)+e|0,a.fZ+0|0,((a.f0+g|0)+e|0)+e|0,a.fZ+g|0);z[3]=x;w=a.hq.data;x=new Fy;y=J(EQ,4);z=y.data;z[0]
=p;z[1]=o;z[2]=r;z[3]=q;Hj(x,y,a.f0+g|0,a.fZ+g|0,(a.f0+g|0)+e|0,(a.fZ+g|0)+f|0);w[4]=x;z=a.hq.data;r=new Fy;w=J(EQ,4);y=w.data;y[0]=s;y[1]=t;y[2]=u;y[3]=v;Hj(r,w,((a.f0+g|0)+e|0)+g|0,a.fZ+g|0,(((a.f0+g|0)+e|0)+g|0)+e|0,(a.fZ+g|0)+f|0);z[5]=r;if(a.lE){ba=0;while(true){if(ba>=a.hq.data.length)break a;ACW(a.hq.data[ba]);ba=ba+1|0;}}}}
function BJ(a,b,c,d){a.pG=b;a.m5=c;a.pF=d;}
function Ca(a,b){var c,d;if(!a.BZ&&a.iT){if(!a.ws){a.lW=I2(1);FJ(a.lW,4864);BA();c=BeL;d=0;while(d<a.hq.data.length){APE(a.hq.data[d],c,b);d=d+1|0;}Ee();a.ws=1;}if(a.b1===0.0&&a.bX===0.0&&a.bU===0.0){if(a.pG===0.0&&a.m5===0.0&&a.pF===0.0)FU(a.lW);else{Bw(a.pG*b,a.m5*b,a.pF*b);FU(a.lW);Bw( -a.pG*b, -a.m5*b, -a.pF*b);}}else{B3();Bw(a.pG*b,a.m5*b,a.pF*b);if(a.bU!==0.0)Bv(a.bU*57.2957763671875,0.0,0.0,1.0);if(a.bX!==0.0)Bv(a.bX*57.2957763671875,0.0,1.0,0.0);if(a.b1!==0.0)Bv(a.b1*57.2957763671875,1.0,0.0,0.0);FU(a.lW);BE();}}}
function E3(){D.call(this);}
function AOC(a,b){Q$(a,b,0,b.data.length);}
function ATh(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;a.nO(f[c]);e=e+1|0;c=g;}}
function A8W(a){return;}
function A9K(a){return;}
function Ge(){E3.call(this);this.fo=null;}
function Bhj(a){var b=new Ge();K9(b,a);return b;}
function K9(a,b){a.fo=b;}
function KP(a){var $$je;a:{try{a.fo.ly();break a;}catch($$e){$$je=Bg($$e);if($$je instanceof BW){}else{throw $$e;}}}a.fo.tQ();}
function AA6(){var a=this;Ge.call(a);a.GK=0;a.uM=0;a.hI=null;a.nU=null;a.AW=null;}
function AYL(a,b){var c=new AA6();A$B(c,a,b);return c;}
function A$B(a,b,c){K9(a,b);b=new S;V(b);a.hI=b;a.nU=$rt_createCharArray(32);a.GK=c;a.AW=A1H();}
function VT(a,b,c,d){var $$je;if(a.fo===null)a.uM=1;if(!(a.uM?0:1))return;a:{try{a.fo.gw(b,c,d);break a;}catch($$e){$$je=Bg($$e);if($$je instanceof BW){}else{throw $$e;}}a.uM=1;}}
function TN(a,b,c,d){var e,f,g,h,i;e=b.data;f=AM6(b,c,d-c|0);e=$rt_createByteArray(DE(16,CB(e.length,1024)));g=AAs(e);h=AGX(ACS(AG5(a.AW),Bf8),Bf8);while(true){i=IU(AJe(h,f,g,1));VT(a,e,0,g.bk);EA(g);if(!i)break;}while(true){i=IU(X1(h,g));VT(a,e,0,g.bk);EA(g);if(!i)break;}}
function AKF(a,b){a.nU.data[0]=b;TN(a,a.nU,0,1);}
function Kp(a,b){H(a.hI,b);J9(a);}
function ABO(a,b){Dx(Be(a.hI,b),10);J9(a);}
function Cg(a,b){Dx(H(a.hI,b),10);J9(a);}
function ACk(a,b){Dx(FO(a.hI,b),10);J9(a);}
function APD(a){AKF(a,10);}
function J9(a){var b;b=a.hI.bY<=a.nU.data.length?a.nU:$rt_createCharArray(a.hI.bY);AAA(a.hI,0,a.hI.bY,b,0);TN(a,b,0,a.hI.bY);ANi(a.hI,0);}
function Xe(){E3.call(this);}
function Bhk(){var a=new Xe();A3t(a);return a;}
function A3t(a){return;}
function AYi(a,b){$rt_putStdout(b);}
function AFb(){Cc.call(this);this.Fv=null;}
function ALq(a){var b=new AFb();A05(b,a);return b;}
function A05(a,b){O(a);a.Fv=b;}
function MU(){var a=this;D.call(a);a.cf=null;a.B=0;a.N=0;a.G=Long_ZERO;a.uY=null;a.pP=0;a.id=0;a.nt=Long_ZERO;a.b9=null;a.jy=null;a.f9=null;}
function Bhl(){var a=new MU();OR(a);return a;}
function OR(a){a.f9=A9T();}
function AAI(a,b,c,d){a.uY=b;a.pP=c;a.id=d;}
function AJ9(a,b,c,d,e){var f;if(d<=0&&e&&a.cf!==null)return;if(a.N>0&&e){f=$rt_createByteArray(a.N+d|0);Di(a.cf,a.B,f,0,a.N);Di(b,c,f,a.N,d);a.cf=f;a.B=0;a.N=a.N+d|0;}else{a.cf=b;a.B=c;a.N=d;}}
function Um(){MU.call(this);this.rV=0;}
function Bhm(){var a=new Um();A2_(a);return a;}
function A2_(a){OR(a);a.rV=0;AAV(a);}
function AAV(a){return ACJ(a,15);}
function ACJ(a,b){return R7(a,b,0);}
function R7(a,b,c){var d;a.rV=0;d=new LI;d.rU=Long_fromInt(-1);d.iJ=(-1);d.xM=$rt_createByteArray(4);d.cJ=null;d.fW=null;d.E=a;a.jy=d;d=a.jy;if(c)b= -b;return XC(d,b);}
function AF5(a,b){var c;if(a.jy===null)return (-2);c=AGE(a.jy,b);if(c==1)a.rV=1;return c;}
function Yj(a){return a.jy.bP!=12?0:1;}
function Ir(){var a=this;D.call(a);a.Cq=null;a.oR=0.0;a.pO=0.0;}
function Ij(a,b,c){var d=new Ir();O7(d,a,b,c);return d;}
function O7(a,b,c,d){a.Cq=b;a.oR=c;a.pO=d;}
function AMO(a){return a.oR;}
function Yh(a){return a.pO;}
function Kg(a){var b;b=new S;V(b);return T(H(H(b,B(252)),a.Cq));}
function AHp(){Ir.call(this);}
function A_2(a,b,c){var d=new AHp();AZt(d,a,b,c);return d;}
function AZt(a,b,c,d){O7(a,b,c,d);}
function ACs(){Ir.call(this);}
function Bca(a,b,c){var d=new ACs();A7M(d,a,b,c);return d;}
function A7M(a,b,c,d){O7(a,b,c,d);}
function LP(){P.call(this);}
function Bbf(a,b){var c=new LP();AI8(c,a,b);return c;}
function AI8(a,b,c){C8(a,b,c,Bg_);}
function A8I(a,b,c){L();return BeZ.b;}
function Z6(){P.call(this);}
function BbI(a){var b=new Z6();AY4(b,a);return b;}
function AY4(a,b){D0(a,b,Bhn);a.ba=3;Fe(a,1);}
function A7r(a,b){return b==1?0:b?3:2;}
function ADq(a,b,c,d,e,f){var g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d+1|0;$p=1;case 1:$z=XA(b,c,g,e);if(C()){break _;}h=$z;if(h>=4){$p=2;continue _;}$p=3;continue _;case 2:$z=XA(b,c,g,e);if(C()){break _;}g=$z;if(g<9)return;h=(c+E(f,3)|0)-1|0;g=(d+E(f,5)|0)-3|0;i=(e+E(f,3)|0)-1|0;$p=4;continue _;case 3:$z=AB2(b,c,g,e);if(C()){break _;}j=$z;if(!j.sm()){$p=2;continue _;}if(E(f,
4))return;L();h=BeS.b;$p=6;continue _;case 4:$z=ACx(b,h,g,i);if(C()){break _;}c=$z;L();if(c!=BeS.b)return;c=g+1|0;$p=5;case 5:$z=XA(b,h,c,i);if(C()){break _;}d=$z;if(d<4)return;$p=7;continue _;case 6:APy(b,c,d,e,h);if(C()){break _;}return;case 7:$z=AB2(b,h,c,i);if(C()){break _;}f=$z;if(f.sm())return;c=BeR.b;$p=8;case 8:APy(b,h,g,i,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AZ$(a,b,c){L();return BeS.dX(0,c);}
function AHU(){P.call(this);}
function A_7(a,b){var c=new AHU();AXA(c,a,b);return c;}
function AXA(a,b,c){C8(a,b,c,Bhn);}
function B8(){D.call(this);}
var Bf_=null;var Bhn=null;var Bha=null;var Bg_=null;var Bho=null;var BfQ=null;var BfR=null;var Bhp=null;var Bhq=null;var Bhr=null;var Bhc=null;var Bhs=null;var Bht=null;var Bhu=null;var Bhb=null;var Bhv=null;var Bhw=null;function Bhx(){var a=new B8();AQm(a);return a;}
function AQm(a){return;}
function A8m(a){return 0;}
function A0Z(a){return 1;}
function A7R(a){return 1;}
function A5t(a){return 1;}
function AP5(){Bf_=new Om;Bhn=new B8;Bha=new B8;Bg_=new B8;Bho=new B8;BfQ=new L0;BfR=new L0;Bhp=new B8;Bhq=new N9;Bhr=new B8;Bhc=new B8;Bhs=new Om;Bht=new B8;Bhu=new N9;Bhb=new B8;Bhv=new B8;Bhw=new B8;}
function F4(){P.call(this);}
function A3l(a,b){var c=new F4();Lw(c,a,b);return c;}
function Lw(a,b,c){D0(a,b,Bhq);a.ba=c;Fe(a,1);Bo(a,0.30000001192092896,0.0,0.30000001192092896,0.699999988079071,0.6000000238418579,0.699999988079071);}
function ALW(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=d-1|0;$p=1;case 1:$z=ACx(b,c,d,e);if(C()){break _;}c=$z;return a.rq(c);default:E$();}}C3().s(a,b,c,d,e,$p);}
function AYm(a,b){L();return b!=BeR.b&&b!=BeS.b&&b!=Bg3.b?0:1;}
function AIG(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJq(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AD_(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJq(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AJq(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=a.Hc(b,c,d,e);if(C()){break _;}f=$z;if(f)return;$p=2;case 2:$z=AEK(b,c,d,e);if(C()){break _;}f=$z;$p=3;case 3:Yi(a,b,c,d,e,f);if(C()){break _;}f=0;$p=4;case 4:APy(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AN9(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=XA(b,c,d,e);if(C()){break _;}f=$z;if(f<8){$p=3;continue _;}d=d-1|0;$p=2;case 2:$z=ACx(b,c,d,e);if(C()){break _;}c=$z;return !a.rq(c)?0:1;case 3:$z=AGf(b,c,d,e);if(C()){break _;}g=$z;if(!g)return 0;d=d-1|0;$p=2;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AGl(a,b,c,d,e){return null;}
function A6m(a){return 0;}
function AT1(a){return 0;}
function A7w(a){return 1;}
function AMZ(){F4.call(this);}
function Bcu(a,b){var c=new AMZ();A9E(c,a,b);return c;}
function A9E(a,b,c){Lw(a,b,c);Bo(a,0.09999999403953552,0.0,0.09999999403953552,0.8999999761581421,0.800000011920929,0.8999999761581421);}
function AEi(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJq(a,b,c,d,e);if(C()){break _;}g=d+1|0;$p=2;case 2:$z=XA(b,c,g,e);if(C()){break _;}g=$z;if(g>=9&&!E(f,5)){$p=3;continue _;}return;case 3:$z=AEK(b,c,d,e);if(C()){break _;}g=$z;if(g>=15){g=0;$p=4;continue _;}g=g+1|0;$p=6;continue _;case 4:ALt(b,c,d,e,g);if(C()){break _;}h=new Rg;$p=5;case 5:$z=AEM(h,b,f,c,d,e);if(C()){break _;}g
=$z;if(g)return;g=a.b;$p=7;continue _;case 6:AKw(b,c,d,e,g);if(C()){break _;}return;case 7:ALt(b,c,d,e,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function HT(){P.call(this);this.qR=0;}
function Bhy(a,b){var c=new HT();P4(c,a,b);return c;}
function P4(a,b,c){C8(a,b,((c!==BfR?12:14)*16|0)+13|0,c);a.qR=1;if(c===BfR)a.qR=2;Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);Fe(a,1);}
function Jx(b){if(b>=8)b=0;return (b+1|0)/9.0;}
function ATb(a,b){return b&&b!=1?a.ba+1|0:a.ba;}
function AFg(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AB2(b,c,d,e);if(C()){break _;}f=$z;if(f!==a.b_)return (-1);$p=2;case 2:$z=AEK(b,c,d,e);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AEe(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.oM(c,d,e);if(C()){break _;}f=$z;if(f!==a.b_)return (-1);$p=2;case 2:$z=b.eI(c,d,e);if(C()){break _;}g=$z;if(g>=8)g=0;return g;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function A$_(a){return 0;}
function A$t(a){return 0;}
function A8F(a,b,c){return c&&!b?1:0;}
function ARx(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.oM(c,d,e);if(C()){break _;}g=$z;if(g===a.b_)c=0;else{if(f!=1){$p=2;continue _;}c=1;}return c;case 2:$z=AGv(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function Yg(a,b,c,d,e){return null;}
function A7Z(a){return 4;}
function A3f(a,b,c){return 0;}
function A6a(a,b){return 0;}
function AIN(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=BY(0.0,0.0,0.0);$p=1;case 1:$z=AEe(a,b,c,d,e);if(C()){break _;}g=$z;h=0;i=c-1|0;j=e-1|0;k=d-1|0;l=g-8|0;m=d-d|0;if(h>=4){$p=2;continue _;}n=!h?i:c;o=h==1?j:e;if(h==2)n=n+1|0;if(h==3)o=o+1|0;$p=7;continue _;case 2:$z=b.eI(c,d,e);if
(C()){break _;}n=$z;if(n<8)return CD(f);k=0;n=2;$p=3;case 3:$z=ARx(a,b,c,d,j,n);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=e+1|0;p=3;$p=4;continue _;}k=1;if(!k){n=4;$p=5;continue _;}k=1;if(!k){n=c+1|0;p=5;$p=6;continue _;}k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 4:$z=ARx(a,b,c,d,n,p);if(C()){break _;}n=$z;if(n)k=1;if(!k){n
=4;$p=5;continue _;}k=1;if(!k){n=c+1|0;p=5;$p=6;continue _;}k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 5:$z=ARx(a,b,i,d,e,n);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=c+1|0;p=5;$p=6;continue _;}k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k
=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 6:$z=ARx(a,b,n,d,e,p);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 7:$z=AEe(a,b,n,d,o);if(C()){break _;}p=$z;if(p<0){$p=8;continue _;}if(p>=0){q=p-g|0;f=Dk(f,Bj(n-c|0,q),Bj(m,q),Bj(o-e|0,q));}h=h+1
|0;if(h>=4){$p=2;continue _;}n=!h?i:c;o=h==1?j:e;if(h==2)n=n+1|0;if(h==3)o=o+1|0;continue _;case 8:$z=AEe(a,b,n,k,o);if(C()){break _;}p=$z;if(p>=0){q=p-l|0;f=Dk(f,Bj(n-c|0,q),Bj(m,q),Bj(o-e|0,q));}h=h+1|0;if(h>=4){$p=2;continue _;}n=!h?i:c;o=h==1?j:e;if(h==2)n=n+1|0;if(h==3)o=o+1|0;$p=7;continue _;case 9:$z=ARx(a,b,c,n,j,p);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d
=d+1|0;n=5;$p=12;continue _;case 10:$z=ARx(a,b,c,n,p,q);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 11:$z=ARx(a,b,i,n,e,p);if(C()){break _;}n=$z;if(n)k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;case 12:$z=ARx(a,b,c,d,e,n);if(C()){break _;}c=$z;if(c)k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,
m,n,o,p,q,$p);}
function ANe(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AIN(a,b,c,d,e);if(C()){break _;}h=$z;g.x=g.x+h.x;g.z=g.z+h.z;g.w=g.w+h.w;return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AU5(a){return a.b_===BfQ?5:a.b_!==BfR?0:30;}
function AEw(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.sQ(c,d,e);if(C()){break _;}f=$z;d=d+1|0;$p=2;case 2:$z=b.sQ(c,d,e);if(C()){break _;}g=$z;if(f>g)g=f;return g;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AQ_(a,b,c,d,e,f){return;}
function A$q(a){return 0;}
function YG(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.b_===BfQ&&!E(f,64)){$p=2;continue _;}if(a.b_!==BfR)return;g=d+1|0;$p=1;case 1:$z=AB2(b,c,g,e);if(C()){break _;}h=$z;if(h!==Bf_)return;$p=3;continue _;case 2:$z=AEK(b,c,d,e);if(C()){break _;}g=$z;if(g>0&&g<8)Ex(b,c+0.5,d+0.5,e+0.5,B(253),N(f)*0.25+0.75,N(f)*1.0+0.5);if(a.b_!==BfR)return;g=d+1|0;$p=1;continue _;case 3:$z=AAD(b,
c,g,e);if(C()){break _;}g=$z;if(!g&&!E(f,100))BU(b,B(254),c+N(f),d+a.cF,e+N(f),0.0,0.0,0.0);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function A6g(b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:g=null;if(f===BfQ){L();g=BfY;$p=1;continue _;}if(f!==BfR)return g.x===0.0&&g.w===0.0?(-1000.0):CR(g.w,g.x)-1.5707963267948966;L();f=BfZ;$p=2;continue _;case 1:$z=AIN(g,b,c,d,e);if(C()){break _;}g=$z;if(f!==BfR)return g.x===0.0&&g.w===0.0?(-1000.0):CR(g.w,g.x)-1.5707963267948966;L();f=BfZ;$p=2;case 2:$z=AIN(f,b,c,d,e);if(C()){break _;}g=$z;return g.x===
0.0&&g.w===0.0?(-1000.0):CR(g.w,g.x)-1.5707963267948966;default:E$();}}C3().s(b,c,d,e,f,g,$p);}
function ARR(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:APa(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function ALg(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:APa(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function APa(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACx(b,c,d,e);if(C()){break _;}f=$z;if(f==a.b&&a.b_===BfR){f=0;g=e-1|0;$p=2;continue _;}return;case 2:$z=AB2(b,c,d,g);if(C()){break _;}h=$z;if(h===BfQ)f=1;if(!f){g=e+1|0;$p=3;continue _;}f=1;if(!f){g=c-1|0;$p=4;continue _;}f=1;if(!f){g=c+1|0;$p=5;continue _;}f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 3:$z
=AB2(b,c,d,g);if(C()){break _;}h=$z;if(h===BfQ)f=1;if(!f){g=c-1|0;$p=4;continue _;}f=1;if(!f){g=c+1|0;$p=5;continue _;}f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 4:$z=AB2(b,g,d,e);if(C()){break _;}h=$z;if(h===BfQ)f=1;if(!f){g=c+1|0;$p=5;continue _;}f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 5:$z=AB2(b,g,d,e);if(C()){break _;}h=$z;if(h===BfQ)f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 6:$z=AB2(b,c,g,e);if(C()){break _;}h
=$z;if(h===BfQ)f=1;if(!f)return;$p=7;case 7:$z=AEK(b,c,d,e);if(C()){break _;}g=$z;if(!g){L();f=Bfl.b;$p=8;continue _;}if(g>4){JS(a,b,c,d,e);return;}L();f=BeZ.b;$p=9;continue _;case 8:APy(b,c,d,e,f);if(C()){break _;}JS(a,b,c,d,e);return;case 9:APy(b,c,d,e,f);if(C()){break _;}JS(a,b,c,d,e);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function JS(a,b,c,d,e){var f,g,h,i;Ex(b,c+0.5,d+0.5,e+0.5,B(215),0.5,2.5999999046325684+(N(b.q)-N(b.q))*0.800000011920929);f=0;g=c;h=d+1.2;i=e;while(f<8){BU(b,B(255),g+BP(),h,i+BP(),0.0,0.0,0.0);f=f+1|0;}}
function AEh(){var a=this;HT.call(a);a.mm=0;a.hj=null;a.cT=null;}
function AUk(a,b){var c=new AEh();AY_(c,a,b);return c;}
function AY_(a,b,c){P4(a,b,c);a.mm=0;a.hj=$rt_createBooleanArray(4);a.cT=$rt_createIntArray(4);}
function AHb(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEK(b,c,d,e);if(C()){break _;}f=$z;g=a.b+1|0;$p=2;case 2:AJn(b,c,d,e,g,f);if(C()){break _;}Jm(b,c,d,e,c,d,e);return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AOR(a,b,c,d,e,f){var g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AFg(a,b,c,d,e);if(C()){break _;}g=$z;h=1;if(g<=0){$p=2;continue _;}i=(-100);a.mm=0;j=c-1|0;$p=3;continue _;case 2:AHb(a,b,c,d,e);if(C()){break _;}j=d-1|0;$p=7;continue _;case 3:$z=AOO(a,b,j,d,e,i);if(C()){break _;}j=$z;k=c+1|0;$p=4;case 4:$z=AOO(a,b,k,d,e,j);if
(C()){break _;}j=$z;k=e-1|0;$p=5;case 5:$z=AOO(a,b,c,d,k,j);if(C()){break _;}j=$z;k=e+1|0;$p=6;case 6:$z=AOO(a,b,c,d,k,j);if(C()){break _;}j=$z;k=j+a.qR|0;if(!(k<8&&j>=0))k=(-1);j=d+1|0;$p=8;continue _;case 7:$z=ALY(a,b,c,j,e);if(C()){break _;}k=$z;if(!k){if(g<0)return;if(!g){$p=12;continue _;}$p=13;continue _;}if(g>=8){d=a.b;$p=10;continue _;}d=a.b;k=g+8|0;$p=9;continue _;case 8:$z=AFg(a,b,c,j,e);if(C()){break _;}l=$z;if(l>=0){$p=11;continue _;}if(a.mm>=2&&a.b_===BfQ)k=0;if(a.b_===BfR&&g<8&&k<8&&k>g&&E(f,4))
{h=0;k=g;}if(k!=g){if(k>=0){$p=18;continue _;}j=0;$p=20;continue _;}if(h){$p=17;continue _;}k=g;g=k;j=d-1|0;$p=7;continue _;case 9:AIZ(b,c,j,e,d,k);if(C()){break _;}return;case 10:AIZ(b,c,j,e,d,g);if(C()){break _;}return;case 11:$z=AFg(a,b,c,j,e);if(C()){break _;}k=$z;if(k<8)k=k+8|0;if(a.mm>=2&&a.b_===BfQ)k=0;if(a.b_===BfR&&g<8&&k<8&&k>g&&E(f,4)){h=0;k=g;}if(k!=g){if(k>=0){$p=18;continue _;}j=0;$p=20;continue _;}if(h){$p=17;continue _;}k=g;g=k;j=d-1|0;$p=7;continue _;case 12:$z=AK4(a,b,c,d,e);if(C()){break _;}m
=$z;l=g+a.qR|0;if(g>=8)l=1;if(l>=8)return;m=m.data;if(m[0]){j=c-1|0;$p=14;continue _;}if(m[1]){j=c+1|0;$p=15;continue _;}if(m[2]){j=e-1|0;$p=16;continue _;}if(!m[3])return;e=e+1|0;$p=21;continue _;case 13:$z=ACp(a,b,c,j,e);if(C()){break _;}j=$z;if(!j)return;$p=12;continue _;case 14:APb(a,b,j,d,e,l);if(C()){break _;}if(m[1]){j=c+1|0;$p=15;continue _;}if(m[2]){j=e-1|0;$p=16;continue _;}if(!m[3])return;e=e+1|0;$p=21;continue _;case 15:APb(a,b,j,d,e,l);if(C()){break _;}if(m[2]){j=e-1|0;$p=16;continue _;}if(!m[3])return;e
=e+1|0;$p=21;continue _;case 16:APb(a,b,c,d,j,l);if(C()){break _;}if(!m[3])return;e=e+1|0;$p=21;continue _;case 17:AHb(a,b,c,d,e);if(C()){break _;}k=g;g=k;j=d-1|0;$p=7;continue _;case 18:AKw(b,c,d,e,k);if(C()){break _;}Fn(b,c,d,e,a.b);j=a.b;$p=19;case 19:AHN(b,c,d,e,j);if(C()){break _;}g=k;j=d-1|0;$p=7;continue _;case 20:APy(b,c,d,e,j);if(C()){break _;}g=k;j=d-1|0;$p=7;continue _;case 21:APb(a,b,c,d,e,l);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function APb(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ALY(a,b,c,d,e);if(C()){break _;}g=$z;if(!g)return;$p=2;case 2:$z=ACx(b,c,d,e);if(C()){break _;}g=$z;if(g>0){if(a.b_!==BfR){L();h=BeP.data[g];$p=4;continue _;}JS(a,b,c,d,e);}g=a.b;$p=3;case 3:AIZ(b,c,d,e,g,f);if(C()){break _;}return;case 4:$z=AEK(b,c,d,e);if(C()){break _;}g=$z;$p=5;case 5:h.IQ(b,c,d,e,g);if(C()){break _;}g
=a.b;$p=3;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ANU(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=1000;i=0;j=R(g,1);k=R(g,3);l=R(g,2);m=c-1|0;n=e-1|0;o=d-1|0;p=R(f,4);q=f+1|0;a:{while(i<4){if(!(!i&&!j)){r=R(i,1);if(!(!r&&!g)){s=R(i,2);if(!(!s&&!k)){t=R(i,3);if(t)break a;if
(l)break a;}}}i=i+1|0;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;$p=1;case 1:$z=ACp(a,b,u,d,r);if(C()){break _;}t=$z;if(!t){$p=2;continue _;}b:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=R(i,1);if(!r&&!g)continue;s=R(i,2);if(!s&&!k)continue;t=R(i,3);if(t)break b;if(l)break b;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;continue _;case 2:$z=AB2(b,u,d,r);if(C()){break _;}v=$z;if(v!==a.b_){$p=3;continue _;}$p=4;continue _;case 3:$z=ACp(a,b,u,o,r);if(C()){break _;}t=$z;if(!t)return f;if
(p<0){$p=5;continue _;}c:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=R(i,1);if(!r&&!g)continue;s=R(i,2);if(!s&&!k)continue;t=R(i,3);if(t)break c;if(l)break c;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;$p=1;continue _;case 4:$z=AEK(b,u,d,r);if(C()){break _;}t=$z;if(t){$p=3;continue _;}b:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=R(i,1);if(!r&&!g)continue;s=R(i,2);if(!s&&!k)continue;t=R(i,3);if(t)break b;if(l)break b;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1
|0;$p=1;continue _;case 5:$z=ANU(a,b,u,d,r,q,i);if(C()){break _;}t=$z;if(t<h)h=t;c:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=R(i,1);if(!r&&!g)continue;s=R(i,2);if(!s&&!k)continue;t=R(i,3);if(t)break c;if(l)break c;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function AK4(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=c-1|0;h=e-1|0;i=d-1|0;if(f>=4){c=a.cT.data[0];j=1;while(j<4){if(a.cT.data[j]<c)c=a.cT.data[j];j=j+1|0;}d=0;while(d<4){k=a.hj;k.data[d]=a.cT.data[d]!=c?0:1;d=d+1|0;}return a.hj;}a.cT.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;$p=1;case 1:$z
=ACp(a,b,l,d,m);if(C()){break _;}j=$z;if(!j){$p=2;continue _;}f=f+1|0;if(f>=4){c=a.cT.data[0];j=1;while(j<4){if(a.cT.data[j]<c)c=a.cT.data[j];j=j+1|0;}d=0;while(d<4){k=a.hj;k.data[d]=a.cT.data[d]!=c?0:1;d=d+1|0;}return a.hj;}a.cT.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;continue _;case 2:$z=AB2(b,l,d,m);if(C()){break _;}n=$z;if(n!==a.b_){$p=3;continue _;}$p=4;continue _;case 3:$z=ACp(a,b,l,i,m);if(C()){break _;}j=$z;if(j){k=a.cT.data;j=1;$p=5;continue _;}a.cT.data[f]=0;f=f+1|0;if(f>=
4){c=a.cT.data[0];j=1;while(j<4){if(a.cT.data[j]<c)c=a.cT.data[j];j=j+1|0;}d=0;while(d<4){k=a.hj;k.data[d]=a.cT.data[d]!=c?0:1;d=d+1|0;}return a.hj;}a.cT.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;$p=1;continue _;case 4:$z=AEK(b,l,d,m);if(C()){break _;}j=$z;if(j){$p=3;continue _;}f=f+1|0;if(f>=4){c=a.cT.data[0];j=1;while(j<4){if(a.cT.data[j]<c)c=a.cT.data[j];j=j+1|0;}d=0;while(d<4){k=a.hj;k.data[d]=a.cT.data[d]!=c?0:1;d=d+1|0;}return a.hj;}a.cT.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f
==2?h:e;if(f==3)m=m+1|0;$p=1;continue _;case 5:$z=ANU(a,b,l,d,m,j,f);if(C()){break _;}j=$z;k[f]=j;f=f+1|0;if(f>=4){c=a.cT.data[0];j=1;while(j<4){if(a.cT.data[j]<c)c=a.cT.data[j];j=j+1|0;}d=0;while(d<4){k=a.hj;k.data[d]=a.cT.data[d]!=c?0:1;d=d+1|0;}return a.hj;}a.cT.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ACp(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACx(b,c,d,e);if(C()){break _;}f=$z;L();if(f!=Bg7.b&&f!=Bg6.b&&f!=Bgb.b){if(!f)return 0;return BeP.data[f].b_.dw();}return 1;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AOO(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AFg(a,b,c,d,e);if(C()){break _;}g=$z;if(g<0)return f;if(!g)a.mm=a.mm+1|0;if(g>=8)g=0;if(f>=0&&g>=f)g=f;return g;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ALY(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AB2(b,c,d,e);if(C()){break _;}f=$z;if(f===a.b_)c=0;else{if(f!==BfR){$p=2;continue _;}c=0;}return c;case 2:$z=ACp(a,b,c,d,e);if(C()){break _;}c=$z;return c?0:1;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AB5(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:APa(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=ACx(b,c,d,e);if(C()){break _;}f=$z;if(f==a.b)Fn(b,c,d,e,a.b);return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AIL(){HT.call(this);}
function AXI(a,b){var c=new AIL();A2t(c,a,b);return c;}
function A2t(a,b,c){P4(a,b,c);Fe(a,0);}
function AGz(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:APa(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=ACx(b,c,d,e);if(C()){break _;}f=$z;if(f!=a.b)return;$p=3;case 3:$z=AEK(b,c,d,e);if(C()){break _;}g=$z;b.sq=1;f=a.b-1|0;$p=4;case 4:AJn(b,c,d,e,f,g);if(C()){break _;}Jm(b,c,d,e,c,d,e);Fn(b,c,d,e,a.b-1|0);b.sq=0;return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function I$(){P.call(this);}
var BeW=0;function BbD(a,b){var c=new I$();RE(c,a,b);return c;}
function RE(a,b,c){C8(a,b,c,Bht);}
function ARP(a,b,c,d,e){Fn(b,c,d,e,a.b);}
function ASe(a,b,c,d,e,f){Fn(b,c,d,e,a.b);}
function APB(a,b,c,d,e,f){var g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d-1|0;$p=1;case 1:$z=ACx(b,c,g,e);if(C()){break _;}g=$z;if(!g)g=1;else{L();if(g==Bgp.b)g=1;else{f=BeP.data[g].b_;g=f===BfQ?1:f!==BfR?0:1;}}if(g&&d>=0){f=new JM;h=c+0.5;i=d+0.5;j=e+0.5;c=a.b;FC(f,b);f.oQ=0;f.hV=c;f.mE=1;D1(f,0.9800000190734863,0.9800000190734863);f.c4=f.eO/2.0;k
=h;l=i;m=j;CT(f,k,l,m);f.g=0.0;f.i=0.0;f.h=0.0;f.i$=0;f.bS=k;f.cS=l;f.bR=m;if(!BeW){$p=2;continue _;}if(!f.cR){$p=3;continue _;}}return;case 2:AOj(b,f);if(C()){break _;}return;case 3:AMP(f);if(C()){break _;}if(f.cR)return;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function A3X(a){return 3;}
function ACO(){BeW=0;}
function AG6(){I$.call(this);}
function BbM(a,b){var c=new AG6();AV0(c,a,b);return c;}
function AV0(a,b,c){RE(a,b,c);}
function A_m(a,b,c){if(E(c,10))b=a.b;else{BB();b=Bhz.cW;}return b;}
function YY(){P.call(this);}
function SO(a,b){var c=new YY();AZz(c,a,b);return c;}
function AZz(a,b,c){C8(a,b,c,Bg_);}
function A4o(a,b,c){b=a.b;L();if(b==Bfe.b){BB();b=BhA.cW;}else if(a.b!=BgZ.b)b=a.b;else{BB();b=BhB.cW;}return b;}
function AZ9(a,b){return 1;}
function AFh(){P.call(this);}
function BcO(a){var b=new AFh();A_d(b,a);return b;}
function A_d(a,b){D0(a,b,Bha);a.ba=20;}
function A8X(a,b){return 1;}
function ATf(a,b,c){L();return Be2.b;}
function AVz(a,b){return b==1?21:b?20:21;}
function LW(){P.call(this);this.r6=0;}
function AQw(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.ej(c,d,e);if(C()){break _;}g=$z;if(!a.r6&&g==a.b)return 0;$p=2;case 2:$z=AGv(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ACG(){LW.call(this);this.Cs=0;}
function BaI(a,b){var c=new ACG();A01(c,a,b);return c;}
function A01(a,b,c){C8(a,b,c,Bhp);a.r6=0;a.Cs=c;Fe(a,1);}
function AIz(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d-1|0;$p=1;case 1:$z=AB2(b,c,g,e);if(C()){break _;}f=$z;if(f.dw())return;h=c-2|0;i=c+2|0;j=d+1|0;k=e-2|0;l=e+2|0;while(h<=i){m=g;while(m<=j){n=k;if(n<=l){$p=5;continue _;}m=m+1|0;}h=h+1|0;}$p=2;case 2:$z=AEK(b,c,d,e);if(C()){break _;}i=$z;$p=3;case 3:Yi(a,
b,c,d,e,i);if(C()){break _;}i=0;$p=4;case 4:APy(b,c,d,e,i);if(C()){break _;}return;case 5:$z=ACx(b,h,m,n);if(C()){break _;}o=$z;L();if(o==Be2.b)return;n=n+1|0;while(n>l){m=m+1|0;while(m>j){h=h+1|0;if(h>i){$p=2;continue _;}m=g;}n=k;}continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AW6(a,b){return E(b,10)?0:1;}
function A5d(a,b,c){L();return Be7.b;}
function A2R(a){return a.r6?0:1;}
function AKn(a,b){a.r6=b;a.ba=a.Cs+(!b?1:0)|0;}
function ASs(a,b,c,d,e,f){return;}
function ALf(){P.call(this);}
function Ba$(a){var b=new ALf();A8U(b,a);return b;}
function A8U(a,b){D0(a,b,Bhr);a.ba=48;}
function AKK(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-2|0;g=c+2|0;h=d-2|0;d=d+2|0;i=e-2|0;e=e+2|0;while(f<=g){j=h;while(j<=d){k=i;if(k<=e){$p=1;continue _;}j=j+1|0;}f=f+1|0;}return;case 1:$z=AB2(b,f,j,k);if(C()){break _;}l=$z;k=k+1|0;a:while(true){if(k<=e){continue _;}j=j+1|0;while(j>d){f=f+1|0;if(f>g)break a;j=h;}k=i;}return;default:E$();}}C3().s(a,
b,c,d,e,f,g,h,i,j,k,l,$p);}
function ANw(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-2|0;g=c+2|0;h=d-2|0;i=d+2|0;j=e-2|0;c=e+2|0;while(f<=g){k=h;while(k<=i){l=j;if(l<=c){$p=1;continue _;}k=k+1|0;}f=f+1|0;}return;case 1:$z=ACx(b,f,k,l);if(C()){break _;}d=$z;$p=2;case 2:AHN(b,f,k,l,d);if(C()){break _;}l=l+1|0;a:while(true){if(l<=c){$p=1;continue _;}k=k+1|0;while(k>i){f
=f+1|0;if(f>g)break a;k=h;}l=j;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Nd(){P.call(this);this.CD=0;}
function A$c(a){return 0;}
function Yy(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.ej(c,d,e);if(C()){break _;}g=$z;if(!a.CD&&g==a.b)return 0;$p=2;case 2:$z=AGv(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AQn(){Nd.call(this);}
function Ba6(a,b,c,d){var e=new AQn();A5g(e,a,b,c,d);return e;}
function A5g(a,b,c,d,e){C8(a,b,c,d);a.CD=e;}
function AV8(a,b){return 0;}
function AHe(){F4.call(this);}
function ATP(a,b){var c=new AHe();A$8(c,a,b);return c;}
function A$8(a,b,c){Lw(a,b,c);Bo(a,0.30000001192092896,0.0,0.30000001192092896,0.699999988079071,0.4000000059604645,0.699999988079071);}
function AI7(a,b){L();return BgA.data[b];}
function ADk(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=XA(b,c,d,e);if(C()){break _;}f=$z;if(f>13)return 0;d=d-1|0;$p=2;case 2:$z=ACx(b,c,d,e);if(C()){break _;}c=$z;return !AI7(a,c)?0:1;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ABw(){P.call(this);}
function AEC(a,b){var c=new ABw();AXX(c,a,b);return c;}
function AXX(a,b,c){D0(a,b,Bho);a.ba=c;}
function A4B(a,b){return b==1?a.ba-16|0:b?a.ba:a.ba+16|0;}
function Zh(){P.call(this);this.wD=0;}
function A9n(a,b){var c=new Zh();A6c(c,a,b);return c;}
function A6c(a,b,c){C8(a,b,6,Bg_);a.wD=c;if(!c)Bo(a,0.0,0.0,0.0,1.0,0.5,1.0);Gy(a,255);}
function A$L(a,b){return b>1?5:6;}
function A5S(a){return a.wD;}
function ABF(a,b,c,d,e,f){L();}
function ABk(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:L();f=d-1|0;$p=1;case 1:$z=ACx(b,c,f,e);if(C()){break _;}g=$z;if(g!=BeU.b)return;g=0;$p=2;case 2:APy(b,c,d,e,g);if(C()){break _;}d=BeT.b;$p=3;case 3:APy(b,c,f,e,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AZo(a,b,c){L();return BeU.b;}
function AW8(a){return a.wD;}
function ASE(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:L();if(a!==BeU){$p=1;continue _;}if(f==1)return 1;$p=2;continue _;case 1:AGv(a,b,c,d,e,f);if(C()){break _;}if(f==1)return 1;$p=2;case 2:$z=AGv(a,b,c,d,e,f);if(C()){break _;}g=$z;if(!g)c=0;else{if(f){$p=3;continue _;}c=1;}return c;case 3:$z=b.ej(c,d,e);if(C()){break _;}c=$z;return c==a.b?0:1;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AOi(){P.call(this);}
function BaJ(a,b){var c=new AOi();A0s(c,a,b);return c;}
function A0s(a,b,c){C8(a,b,c,Bhv);}
function A43(a,b){return !b?a.ba+2|0:b!=1?a.ba:a.ba+1|0;}
function AVb(a,b){return 0;}
function AGF(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=AWQ(b,c+0.5,d+0.5,e+0.5);f.ht=E(b.q,f.ht/4|0)+(f.ht/8|0)|0;$p=1;case 1:AOj(b,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ASm(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=AWQ(b,c+0.5,d+0.5,e+0.5);$p=1;case 1:AOj(b,g);if(C()){break _;}Dh(b,g,B(226),1.0,1.0);return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ADa(){P.call(this);}
function Bak(a,b){var c=new ADa();AUe(c,a,b);return c;}
function AUe(a,b,c){C8(a,b,c,Bha);}
function A_a(a,b){return b>1?a.ba:4;}
function A4D(a,b){return 0;}
function XO(){LP.call(this);}
function Bbp(a,b){var c=new XO();AZu(c,a,b);return c;}
function AZu(a,b,c){AI8(a,b,c);}
function A2$(a,b){return 1;}
function AUX(a,b,c){L();return Bfl.b;}
function AOE(){P.call(this);}
function Bbb(a,b){var c=new AOE();A$Z(c,a,b);return c;}
function A$Z(a,b,c){C8(a,b,c,Bhu);Fe(a,1);}
function ANm(a,b,c,d,e){return null;}
function A2c(a){return 0;}
function AWb(a){return 0;}
function A0X(a){return 2;}
function AL9(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-1|0;$p=1;case 1:$z=AAD(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=c+1|0;$p=2;case 2:$z=AAD(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=e-1|0;$p=3;case 3:$z=AAD(b,c,d,f);if(C()){break _;}f=$z;if(f)return 1;f=e+1|0;$p=4;case 4:$z=AAD(b,c,d,f);if(C()){break _;}f=$z;if(f)return 1;d=d-1|0;$p=5;case 5:$z=AAD(b,c,d,e);if(C()){break _;}c=$z;return c;default:
E$();}}C3().s(a,b,c,d,e,f,$p);}
function ANQ(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEK(b,c,d,e);if(C()){break _;}g=$z;if(f==1){h=d-1|0;$p=2;continue _;}if(f==2){h=e+1|0;$p=3;continue _;}if(f==3){h=e-1|0;$p=4;continue _;}if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 2:$z=AAD(b,c,h,e);if(C()){break _;}h=$z;if(h)g=5;if(f==2){h=e+1|0;$p=3;continue _;}if(f==3)
{h=e-1|0;$p=4;continue _;}if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 3:$z=AAD(b,c,d,h);if(C()){break _;}h=$z;if(h)g=4;if(f==3){h=e-1|0;$p=4;continue _;}if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 4:$z=AAD(b,c,d,h);if(C()){break _;}h=$z;if(h)g=3;if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 5:$z=AAD(b,h,d,e);if(C()){break _;}h=$z;if(h)g=2;if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 6:$z
=AAD(b,f,d,e);if(C()){break _;}f=$z;if(f)g=1;$p=7;case 7:AKw(b,c,d,e,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ASc(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEK(b,c,d,e);if(C()){break _;}g=$z;if(g)return;$p=2;case 2:ABv(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ABv(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-1|0;$p=1;case 1:$z=AAD(b,f,d,e);if(C()){break _;}f=$z;if(!f){f=c+1|0;$p=2;continue _;}f=1;$p=3;continue _;case 2:$z=AAD(b,f,d,e);if(C()){break _;}f=$z;if(!f){f=e-1|0;$p=4;continue _;}f=2;$p=5;continue _;case 3:AKw(b,c,d,e,f);if(C()){break _;}$p=6;continue _;case 4:$z=AAD(b,c,d,f);if(C()){break _;}f=$z;if(!f){f=e+1|0;$p=7;continue _;}f=3;$p=8;continue _;case 5:AKw(b,
c,d,e,f);if(C()){break _;}$p=6;case 6:AE8(a,b,c,d,e);if(C()){break _;}return;case 7:$z=AAD(b,c,d,f);if(C()){break _;}f=$z;if(!f){f=d-1|0;$p=9;continue _;}f=4;$p=10;continue _;case 8:AKw(b,c,d,e,f);if(C()){break _;}$p=6;continue _;case 9:$z=AAD(b,c,f,e);if(C()){break _;}f=$z;if(!f){$p=6;continue _;}f=5;$p=11;continue _;case 10:AKw(b,c,d,e,f);if(C()){break _;}$p=6;continue _;case 11:AKw(b,c,d,e,f);if(C()){break _;}$p=6;continue _;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AKb(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AE8(a,b,c,d,e);if(C()){break _;}f=$z;if(!f)return;$p=2;case 2:$z=AEK(b,c,d,e);if(C()){break _;}g=$z;h=0;f=c-1|0;$p=3;case 3:$z=AAD(b,f,d,e);if(C()){break _;}f=$z;if(!f&&g==1)h=1;f=c+1|0;$p=4;case 4:$z=AAD(b,f,d,e);if(C()){break _;}f=$z;if(!f&&g==2)h=1;f=e-1|0;$p=5;case 5:$z=AAD(b,c,d,f);if(C()){break _;}f=$z;if(!f&&
g==3)h=1;f=e+1|0;$p=6;case 6:$z=AAD(b,c,d,f);if(C()){break _;}f=$z;if(!f&&g==4)h=1;f=d-1|0;$p=7;case 7:$z=AAD(b,c,f,e);if(C()){break _;}f=$z;if(!f&&g==5)h=1;if(!h)return;$p=8;case 8:$z=AEK(b,c,d,e);if(C()){break _;}f=$z;$p=9;case 9:Yi(a,b,c,d,e,f);if(C()){break _;}f=0;$p=10;case 10:APy(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AE8(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AL9(a,b,c,d,e);if(C()){break _;}f=$z;if(f)return 1;$p=2;case 2:$z=AEK(b,c,d,e);if(C()){break _;}f=$z;$p=3;case 3:Yi(a,b,c,d,e,f);if(C()){break _;}f=0;$p=4;case 4:APy(b,c,d,e,f);if(C()){break _;}return 0;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AKi(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEK(b,c,d,e);if(C()){break _;}h=$z;if(h==1)Bo(a,0.0,0.20000000298023224,0.3499999940395355,0.30000001192092896,0.800000011920929,0.6499999761581421);else if(h==2)Bo(a,0.699999988079071,0.20000000298023224,0.3499999940395355,1.0,0.800000011920929,0.6499999761581421);else if(h==3)Bo(a,0.3499999940395355,0.20000000298023224,
0.0,0.6499999761581421,0.800000011920929,0.30000001192092896);else if(h!=4)Bo(a,0.4000000059604645,0.0,0.4000000059604645,0.6000000238418579,0.6000000238418579,0.6000000238418579);else Bo(a,0.3499999940395355,0.20000000298023224,0.699999988079071,0.6499999761581421,0.800000011920929,1.0);$p=2;case 2:$z=Kb(a,b,c,d,e,f,g);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AQp(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEK(b,c,d,e);if(C()){break _;}g=$z;h=c+0.5;i=d+0.699999988079071;j=e+0.5;if(g==1){k=h-0.27000001072883606;l=i+0.2199999988079071;m=j;BU(b,B(256),k,l,m,0.0,0.0,0.0);BU(b,B(257),k,l,m,0.0,0.0,0.0);}else if(g==2){k=h+0.27000001072883606;l
=i+0.2199999988079071;m=j;BU(b,B(256),k,l,m,0.0,0.0,0.0);BU(b,B(257),k,l,m,0.0,0.0,0.0);}else if(g==3){k=h;l=i+0.2199999988079071;m=j-0.27000001072883606;BU(b,B(256),k,l,m,0.0,0.0,0.0);BU(b,B(257),k,l,m,0.0,0.0,0.0);}else if(g!=4){n=h;o=i;p=j;BU(b,B(256),n,o,p,0.0,0.0,0.0);BU(b,B(257),n,o,p,0.0,0.0,0.0);}else{k=h;l=i+0.2199999988079071;m=j+0.27000001072883606;BU(b,B(256),k,l,m,0.0,0.0,0.0);BU(b,B(257),k,l,m,0.0,0.0,0.0);}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AO3(){var a=this;P.call(a);a.sD=null;a.t8=null;}
function BcU(a,b){var c=new AO3();A3L(c,a,b);return c;}
function A3L(a,b,c){C8(a,b,c,Bhs);a.sD=$rt_createIntArray(256);a.t8=$rt_createIntArray(256);Hw(a,Be1.b,5,20);Hw(a,Be2.b,5,5);Hw(a,Be3.b,30,60);Hw(a,Bfj.b,30,20);Hw(a,Bfk.b,15,100);Hw(a,Bfd.b,30,60);Fe(a,1);}
function Hw(a,b,c,d){a.sD.data[b]=c;a.t8.data[b]=d;}
function ARD(a,b,c,d,e){return null;}
function A5Z(a){return 0;}
function A8w(a){return 0;}
function AXx(a){return 3;}
function AWG(a,b){return 0;}
function AZ5(a){return 20;}
function XN(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEK(b,c,d,e);if(C()){break _;}g=$z;h=R(g,15);if(h>=0){$p=2;continue _;}i=g+1|0;$p=3;continue _;case 2:$z=AMX(a,b,c,d,e);if(C()){break _;}i=$z;if(i){j=d-1|0;$p=4;continue _;}h=d-1|0;$p=5;continue _;case 3:AKw(b,
c,d,e,i);if(C()){break _;}Fn(b,c,d,e,a.b);$p=2;continue _;case 4:$z=AF1(a,b,c,j,e);if(C()){break _;}i=$z;if(!i&&!h&&!E(f,4)){h=0;$p=13;continue _;}if(!(g%5|0)&&g>5){h=c+1|0;i=300;$p=7;continue _;}return;case 5:$z=AAD(b,c,h,e);if(C()){break _;}h=$z;if(h&&g<=3)return;h=0;$p=6;case 6:APy(b,c,d,e,h);if(C()){break _;}return;case 7:YF(a,b,h,d,e,i,f);if(C()){break _;}i=c-1|0;g=300;$p=8;case 8:YF(a,b,i,d,e,g,f);if(C()){break _;}g=100;$p=9;case 9:YF(a,b,c,j,e,g,f);if(C()){break _;}k=d+1|0;g=200;$p=10;case 10:YF(a,b,
c,k,e,g,f);if(C()){break _;}l=e-1|0;g=300;$p=11;case 11:YF(a,b,c,d,l,g,f);if(C()){break _;}m=e+1|0;g=300;$p=12;case 12:YF(a,b,c,d,m,g,f);if(C()){break _;}n=d+4|0;a:{while(i<=h){o=l;while(o<=m){p=j;while(p<=n){if(i!=c)break a;if(p!=d)break a;if(o!=e)break a;p=p+1|0;}o=o+1|0;}i=i+1|0;}return;}q=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;$p=14;continue _;case 13:APy(b,c,d,e,h);if(C()){break _;}return;case 14:$z=ACx(b,i,p,o);if(C()){break _;}r=$z;if(!r){r=i+1|0;$p=15;continue _;}if(0>0&&E(f,q)<=0){g=a.b;$p=21;continue _;}b:
{c:while(true){p=p+1|0;while(p>n){o=o+1|0;while(o>m){i=i+1|0;if(i>h)break c;o=l;}p=j;}if(i!=c)break b;if(p!=d)break b;if(o==e)continue;else break b;}return;}q=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;continue _;case 15:$z=AGB(a,b,r,p,o,g);if(C()){break _;}g=$z;r=i-1|0;$p=16;case 16:$z=AGB(a,b,r,p,o,g);if(C()){break _;}g=$z;r=p-1|0;$p=17;case 17:$z=AGB(a,b,i,r,o,g);if(C()){break _;}g=$z;r=p+1|0;$p=18;case 18:$z=AGB(a,b,i,r,o,g);if(C()){break _;}g=$z;r=o-1|0;$p=19;case 19:$z=AGB(a,b,i,p,r,g);if(C()){break _;}r=$z;g
=o+1|0;$p=20;case 20:$z=AGB(a,b,i,p,g,r);if(C()){break _;}r=$z;if(r>0&&E(f,q)<=r){g=a.b;$p=21;continue _;}d:{b:while(true){p=p+1|0;while(p>n){o=o+1|0;while(o>m){i=i+1|0;if(i>h)break b;o=l;}p=j;}if(i!=c)break d;if(p!=d)break d;if(o==e)continue;else break d;}return;}q=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;$p=14;continue _;case 21:APy(b,i,p,o,g);if(C()){break _;}a:{d:while(true){p=p+1|0;while(p>n){o=o+1|0;while(o>m){i=i+1|0;if(i>h)break d;o=l;}p=j;}if(i!=c)break a;if(p!=d)break a;if(o==e)continue;else break a;}return;}q
=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;$p=14;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function YF(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.t8.data;$p=1;case 1:$z=ACx(b,c,d,e);if(C()){break _;}i=$z;j=h[i];if(E(g,f)>=j)return;$p=2;case 2:$z=ACx(b,c,d,e);if(C()){break _;}f=$z;L();i=f!=Bfk.b?0:1;if(E(g,2)){f=0;$p=3;continue _;}f=a.b;$p=4;continue _;case 3:APy(b,c,d,e,f);if(C()){break _;}if(!i)return;g=Bfk;f=0;$p=5;continue _;case 4:APy(b,c,d,e,f);if
(C()){break _;}if(!i)return;g=Bfk;f=0;$p=5;case 5:g.ns(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AMX(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c+1|0;$p=1;case 1:$z=AF1(a,b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=c-1|0;$p=2;case 2:$z=AF1(a,b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=d-1|0;$p=3;case 3:$z=AF1(a,b,c,f,e);if(C()){break _;}f=$z;if(f)return 1;f=d+1|0;$p=4;case 4:$z=AF1(a,b,c,f,e);if(C()){break _;}f=$z;if(f)return 1;f=e-1|0;$p=5;case 5:$z=AF1(a,b,c,d,f);if(C()){break _;}f=
$z;if(f)return 1;e=e+1|0;$p=6;case 6:$z=AF1(a,b,c,d,e);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function A3m(a){return 0;}
function AF1(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.sD.data;$p=1;case 1:$z=b.ej(c,d,e);if(C()){break _;}c=$z;return f[c]<=0?0:1;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AGB(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.sD.data;$p=1;case 1:$z=ACx(b,c,d,e);if(C()){break _;}c=$z;h=g[c];if(h>f)f=h;return f;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ANt(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=AAD(b,c,f,e);if(C()){break _;}f=$z;if(f)return 1;$p=2;case 2:$z=AMX(a,b,c,d,e);if(C()){break _;}c=$z;return c?1:0;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ABB(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=AAD(b,c,f,e);if(C()){break _;}f=$z;if(f)return;$p=2;case 2:$z=AMX(a,b,c,d,e);if(C()){break _;}f=$z;if(f)return;f=0;$p=3;case 3:APy(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ACt(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=AAD(b,c,f,e);if(C()){break _;}f=$z;if(f){Fn(b,c,d,e,a.b);return;}$p=2;case 2:$z=AMX(a,b,c,d,e);if(C()){break _;}f=$z;if(f){Fn(b,c,d,e,a.b);return;}f=0;$p=3;case 3:APy(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ASt(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!E(f,24))Ex(b,c+0.5,d+0.5,e+0.5,B(258),1.0+N(f),N(f)*0.699999988079071+0.30000001192092896);g=d-1|0;$p=1;case 1:$z=AAD(b,c,g,e);if(C()){break _;}h=$z;if(h){g=0;i=c;j=d;k=e;while(g<3){BU(b,B(255),i+N(f),j+N(f)*0.5+0.5,k+N(f),0.0,0.0,
0.0);g=g+1|0;}return;}L();l=Bgp;$p=2;case 2:$z=AF1(l,b,c,g,e);if(C()){break _;}g=$z;if(g){g=0;i=c;j=d;k=e;while(g<3){BU(b,B(255),i+N(f),j+N(f)*0.5+0.5,k+N(f),0.0,0.0,0.0);g=g+1|0;}return;}l=Bgp;g=c-1|0;$p=3;case 3:a:{$z=AF1(l,b,g,d,e);if(C()){break _;}g=$z;if(g){g=0;i=c;m=d;n=e;while(true){if(g>=2)break a;j=i+N(f)*0.10000000149011612;k=m+N(f);o=n+N(f);BU(b,B(255),j,k,o,0.0,0.0,0.0);g=g+1|0;}}}l=Bgp;h=c+1|0;$p=4;case 4:a:{$z=AF1(l,b,h,d,e);if(C()){break _;}g=$z;if(g){g=0;i=h;m=d;n=e;while(true){if(g>=2)break a;j
=i-N(f)*0.10000000149011612;k=m+N(f);o=n+N(f);BU(b,B(255),j,k,o,0.0,0.0,0.0);g=g+1|0;}}}l=Bgp;g=e-1|0;$p=5;case 5:a:{$z=AF1(l,b,c,d,g);if(C()){break _;}g=$z;if(g){g=0;i=c;k=d;n=e;while(true){if(g>=2)break a;j=i+N(f);m=k+N(f);o=n+N(f)*0.10000000149011612;BU(b,B(255),j,m,o,0.0,0.0,0.0);g=g+1|0;}}}l=Bgp;g=e+1|0;$p=6;case 6:a:{$z=AF1(l,b,c,d,g);if(C()){break _;}h=$z;if(h){h=0;o=c;p=d;j=g;while(true){if(h>=2)break a;q=o+N(f);i=p+N(f);n=j-N(f)*0.10000000149011612;BU(b,B(255),q,i,n,0.0,0.0,0.0);h=h+1|0;}}}l=Bgp;d=
d+1|0;$p=7;case 7:a:{$z=AF1(l,b,c,d,e);if(C()){break _;}g=$z;if(g){g=0;i=c;j=d;n=e;while(true){if(g>=2)break a;q=i+N(f);k=j-N(f)*0.10000000149011612;o=n+N(f);BU(b,B(255),q,k,o,0.0,0.0,0.0);g=g+1|0;}}}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function Eg(){P.call(this);}
function AOH(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.tc();$p=1;case 1:AFU(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AL0(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AFM(b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AAc(){Eg.call(this);}
function BcK(a,b){var c=new AAc();AUS(c,a,b);return c;}
function AUS(a,b,c){C8(a,b,c,Bg_);}
function AXj(a){return Bct();}
function A54(a){return 0;}
function Zz(){P.call(this);this.cG=null;}
function A$O(a,b){var c=new Zz();A6_(c,a,b);return c;}
function A6_(a,b,c){C8(a,b,c.ba,c.b_);a.cG=c;BH(a,c.qg);Dn(a,c.nS/3.0);a.gK=c.gK;}
function A5H(a){return 0;}
function AV6(a){return 0;}
function AYY(a){return 10;}
function APC(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AGv(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AJB(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEK(b,c,d,e);if(C()){break _;}h=$z;if(!h){Bo(a,0.0,0.0,0.0,0.5,0.5,1.0);$p=2;continue _;}if(h==1){Bo(a,0.0,0.0,0.0,0.5,1.0,1.0);$p=4;continue _;}if(h==2){Bo(a,0.0,0.0,0.0,1.0,0.5,0.5);$p=6;continue _;}if(h!=3){Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);return;}Bo(a,0.0,0.0,0.0,1.0,1.0,0.5);$p=8;continue _;case 2:ALy(a,b,c,d,e,f,
g);if(C()){break _;}Bo(a,0.5,0.0,0.0,1.0,1.0,1.0);$p=3;case 3:ALy(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);return;case 4:ALy(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.5,0.0,0.0,1.0,0.5,1.0);$p=5;case 5:ALy(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);return;case 6:ALy(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.0,0.0,0.5,1.0,1.0,1.0);$p=7;case 7:ALy(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);return;case 8:ALy(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.0,0.0,0.5,1.0,
0.5,1.0);$p=9;case 9:ALy(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AHD(a,b,c,d,e,f){var g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d+1|0;$p=1;case 1:$z=AB2(b,c,g,e);if(C()){break _;}h=$z;if(!h.dw()){$p=2;continue _;}i=a.cG.b;$p=11;continue _;case 2:AIs(a,b,c,d,e);if(C()){break _;}i=c+1|0;j=d-1|0;$p=3;case 3:AIs(a,b,i,j,e);if(C()){break _;}k=c-1|0;$p=4;case 4:AIs(a,b,k,j,e);if(C()){break _;}l=e-1|0;$p=5;case 5:AIs(a,
b,c,j,l);if(C()){break _;}m=e+1|0;$p=6;case 6:AIs(a,b,c,j,m);if(C()){break _;}$p=7;case 7:AIs(a,b,i,g,e);if(C()){break _;}$p=8;case 8:AIs(a,b,k,g,e);if(C()){break _;}$p=9;case 9:AIs(a,b,c,g,l);if(C()){break _;}$p=10;case 10:AIs(a,b,c,g,m);if(C()){break _;}h=a.cG;$p=12;continue _;case 11:APy(b,c,d,e,i);if(C()){break _;}h=a.cG;$p=12;case 12:h.e1(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AIs(a,b,c,d,e){var f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=APN(a,b,c,d,e);if(C()){break _;}f=$z;if(!f)return;g=(-1);f=c+1|0;h=d+1|0;$p=2;case 2:$z=APN(a,b,f,h,e);if(C()){break _;}i=$z;if(i)g=0;i=c-1|0;$p=3;case 3:$z=APN(a,b,i,h,e);if(C()){break _;}j=$z;if(j)g=1;j=e+1|0;$p=4;case 4:$z=APN(a,b,c,h,j);if(C()){break _;}k=$z;if(k)g=2;k=e-1|0;$p=
5;case 5:$z=APN(a,b,c,h,k);if(C()){break _;}h=$z;if(h)g=3;if(g<0){$p=6;continue _;}if(g<0){h=d-1|0;$p=8;continue _;}if(g<0)return;$p=11;continue _;case 6:$z=ADA(a,b,f,d,e);if(C()){break _;}h=$z;if(h){$p=7;continue _;}$p=9;continue _;case 7:$z=ADA(a,b,i,d,e);if(C()){break _;}h=$z;if(!h)g=0;$p=9;continue _;case 8:$z=APN(a,b,i,h,e);if(C()){break _;}i=$z;if(i)g=0;$p=12;continue _;case 9:$z=ADA(a,b,i,d,e);if(C()){break _;}h=$z;if(h){$p=10;continue _;}$p=13;continue _;case 10:$z=ADA(a,b,f,d,e);if(C()){break _;}h=
$z;if(!h)g=1;$p=13;continue _;case 11:AKw(b,c,d,e,g);if(C()){break _;}return;case 12:$z=APN(a,b,f,h,e);if(C()){break _;}f=$z;if(f)g=1;$p=15;continue _;case 13:$z=ADA(a,b,c,d,j);if(C()){break _;}h=$z;if(h){$p=14;continue _;}$p=16;continue _;case 14:$z=ADA(a,b,c,d,k);if(C()){break _;}h=$z;if(!h)g=2;$p=16;continue _;case 15:$z=APN(a,b,c,h,k);if(C()){break _;}f=$z;if(f)g=2;$p=18;continue _;case 16:$z=ADA(a,b,c,d,k);if(C()){break _;}h=$z;if(h){$p=17;continue _;}if(g<0){h=d-1|0;$p=8;continue _;}if(g<0)return;$p=11;continue _;case 17:$z
=ADA(a,b,c,d,j);if(C()){break _;}h=$z;if(!h)g=3;if(g<0){h=d-1|0;$p=8;continue _;}if(g<0)return;$p=11;continue _;case 18:$z=APN(a,b,c,h,j);if(C()){break _;}f=$z;if(f)g=3;if(g<0)return;$p=11;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function ADA(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AB2(b,c,d,e);if(C()){break _;}b=$z;return b.dw();default:E$();}}C3().s(a,b,c,d,e,$p);}
function APN(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACx(b,c,d,e);if(C()){break _;}f=$z;if(!f)c=0;else{L();c=BeP.data[f].em()!=10?0:1;}return c;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function APf(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:g.kS(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ABe(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:g.q_(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ADp(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:g.ns(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AMY(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cG;$p=1;case 1:$z=f.Cz(b,c,d,e);if(C()){break _;}g=$z;return g;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function A8Y(a,b){return a.cG.yr(b);}
function A8a(a){return a.cG.pS();}
function A4f(a,b,c){return a.cG.dX(b,c);}
function A0w(a,b){return a.cG.eH(b);}
function AXy(a,b,c){return a.cG.eY(b,c);}
function A76(a,b){return a.cG.ci(b);}
function AM9(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:$z=g.ul(b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AVJ(a){return a.cG.mw();}
function AMi(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cG;$p=1;case 1:$z=f.oU(b,c,d,e);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ACK(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.cG;$p=1;case 1:h.qG(b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AYE(a){return a.cG.ph();}
function AYR(a,b,c){return a.cG.o8(b,c);}
function AMq(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cG;$p=1;case 1:$z=f.fT(b,c,d,e);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ACF(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;$p=1;case 1:AHD(a,b,c,d,e,f);if(C()){break _;}g=a.cG;$p=2;case 2:g.fE(b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function YC(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cG;$p=1;case 1:f.lB(b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AHQ(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.cG;$p=1;case 1:h.HT(b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AM1(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:g.IQ(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AQT(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:g.oJ(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AQY(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:g.e8(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AGL(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:$z=g.lG(b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function Za(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cG;$p=1;case 1:f.sO(b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AFS(){Eg.call(this);this.fn=null;}
function A_9(a){var b=new AFS();A65(b,a);return b;}
function A65(a,b){D0(a,b,Bha);a.fn=new DB;a.ba=26;}
function AEz(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(f==1)return a.ba-1|0;if(!f)return a.ba-1|0;g=e-1|0;$p=1;case 1:$z=b.ej(c,d,g);if(C()){break _;}h=$z;i=e+1|0;$p=2;case 2:$z=b.ej(c,d,i);if(C()){break _;}j=$z;k=c-1|0;$p=3;case 3:$z=b.ej(k,d,e);if(C()){break _;}l=$z;m=c+1|0;$p=4;case 4:$z=b.ej(m,
d,e);if(C()){break _;}n=$z;if(h!=a.b&&j!=a.b){if(l!=a.b&&n!=a.b){k=3;L();if(BgA.data[h]&&!BgA.data[j])k=3;if(BgA.data[j]&&!BgA.data[h])k=2;if(BgA.data[l]&&!BgA.data[n])k=5;if(BgA.data[n]&&!BgA.data[l])k=4;return f!=k?a.ba:a.ba+1|0;}if(f!=4&&f!=5){o=0;if(l==a.b)o=(-1);c=l!=a.b?m:k;$p=7;continue _;}return a.ba;}if(f!=2&&f!=3){o=0;if(h==a.b)o=(-1);c=h!=a.b?i:g;$p=5;continue _;}return a.ba;case 5:$z=b.ej(k,d,c);if(C()){break _;}p=$z;if(h==a.b)i=g;$p=6;case 6:$z=b.ej(m,d,i);if(C()){break _;}m=$z;if(f==4)o=(-1)-o
|0;i=5;L();if(!(!BgA.data[l]&&!BgA.data[p])&&!BgA.data[n]&&!BgA.data[m])i=5;if(!(!BgA.data[n]&&!BgA.data[m])&&!BgA.data[l]&&!BgA.data[p])i=4;return (f!=i?a.ba+32|0:a.ba+16|0)+o|0;case 7:$z=b.ej(c,d,g);if(C()){break _;}g=$z;if(l==a.b)m=k;$p=8;case 8:$z=b.ej(m,d,i);if(C()){break _;}m=$z;if(f==3)o=(-1)-o|0;i=3;L();if(!(!BgA.data[h]&&!BgA.data[g])&&!BgA.data[j]&&!BgA.data[m])i=3;if(!(!BgA.data[j]&&!BgA.data[m])&&!BgA.data[h]&&!BgA.data[g])i=2;return (f!=i?a.ba+32|0:a.ba+16|0)+o|0;default:E$();}}C3().s(a,b,c,d,e,
f,g,h,i,j,k,l,m,n,o,p,$p);}
function A89(a,b){return b==1?a.ba-1|0:!b?a.ba-1|0:b!=3?a.ba:a.ba+1|0;}
function AJ3(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=c-1|0;$p=1;case 1:$z=ACx(b,g,d,e);if(C()){break _;}h=$z;if(h==a.b)f=1;h=c+1|0;$p=2;case 2:$z=ACx(b,h,d,e);if(C()){break _;}i=$z;if(i==a.b)f=f+1|0;i=e-1|0;$p=3;case 3:$z=ACx(b,c,d,i);if(C()){break _;}j=$z;if(j==a.b)f=f+1|0;k=e+1|0;$p=4;case 4:$z=ACx(b,c,d,k);if(C()){break _;}l=$z;if
(l==a.b)f=f+1|0;if(f>1)return 0;$p=5;case 5:$z=AIY(a,b,g,d,e);if(C()){break _;}j=$z;if(j)return 0;$p=6;case 6:$z=AIY(a,b,h,d,e);if(C()){break _;}e=$z;if(e)return 0;$p=7;case 7:$z=AIY(a,b,c,d,i);if(C()){break _;}e=$z;if(e)return 0;$p=8;case 8:$z=AIY(a,b,c,d,k);if(C()){break _;}c=$z;return c?0:1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function AIY(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACx(b,c,d,e);if(C()){break _;}f=$z;if(f!=a.b)return 0;f=c-1|0;$p=2;case 2:$z=ACx(b,f,d,e);if(C()){break _;}f=$z;if(f==a.b)return 1;f=c+1|0;$p=3;case 3:$z=ACx(b,f,d,e);if(C()){break _;}f=$z;if(f==a.b)return 1;f=e-1|0;$p=4;case 4:$z=ACx(b,c,d,f);if(C()){break _;}f=$z;if(f==a.b)return 1;e=e+1|0;$p=5;case 5:$z=ACx(b,c,d,e);if(C()){break _;}c
=$z;return c!=a.b?0:1;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ASG(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ANz(b,c,d,e);if(C()){break _;}f=$z;g=f;h=0;i=27;j=c;k=d;l=e;while(h<i){f=Rd(g,h);if(f!==null){m=N(a.fn)*0.800000011920929+0.10000000149011612;n=N(a.fn)*0.800000011920929+0.10000000149011612;o
=N(a.fn)*0.800000011920929+0.10000000149011612;p=j+m;q=k+n;r=l+o;if(f.p>0){s=E(a.fn,21)+10|0;if(s>f.p)s=f.p;f.p=f.p-s|0;t=Hf(b,p,q,r,Or(f.bA,s,f.en));t.g=CZ(a.fn)*0.05000000074505806;t.i=CZ(a.fn)*0.05000000074505806+0.20000000298023224;t.h=CZ(a.fn)*0.05000000074505806;$p=3;continue _;}}h=h+1|0;}$p=2;case 2:AL0(a,b,c,d,e);if(C()){break _;}return;case 3:AOj(b,t);if(C()){break _;}a:while(true){if(f.p>0){s=E(a.fn,21)+10|0;if(s>f.p)s=f.p;f.p=f.p-s|0;t=Hf(b,p,q,r,Or(f.bA,s,f.en));t.g=CZ(a.fn)*0.05000000074505806;t.i
=CZ(a.fn)*0.05000000074505806+0.20000000298023224;t.h=CZ(a.fn)*0.05000000074505806;continue _;}while(true){h=h+1|0;if(h>=i)break a;f=Rd(g,h);if(f===null)continue;else break;}m=N(a.fn)*0.800000011920929+0.10000000149011612;n=N(a.fn)*0.800000011920929+0.10000000149011612;o=N(a.fn)*0.800000011920929+0.10000000149011612;p=j+m;q=k+n;r=l+o;}$p=2;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p);}
function AFY(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ANz(b,c,d,e);if(C()){break _;}g=$z;h=g;i=d+1|0;$p=2;case 2:$z=AAD(b,c,i,e);if(C()){break _;}j=$z;if(j)return 1;k=c-1|0;$p=3;case 3:$z=ACx(b,k,d,e);if(C()){break _;}j=$z;if(j==a.b){$p=5;continue _;}l=c+1|0;$p=4;case 4:$z=ACx(b,l,
d,e);if(C()){break _;}j=$z;if(j==a.b){$p=7;continue _;}m=e-1|0;$p=6;continue _;case 5:$z=AAD(b,k,i,e);if(C()){break _;}j=$z;if(j)return 1;l=c+1|0;$p=4;continue _;case 6:$z=ACx(b,c,d,m);if(C()){break _;}j=$z;if(j==a.b){$p=9;continue _;}n=e+1|0;$p=8;continue _;case 7:$z=AAD(b,l,i,e);if(C()){break _;}j=$z;if(j)return 1;m=e-1|0;$p=6;continue _;case 8:$z=ACx(b,c,d,n);if(C()){break _;}j=$z;if(j!=a.b){$p=10;continue _;}$p=11;continue _;case 9:$z=AAD(b,c,i,m);if(C()){break _;}j=$z;if(j)return 1;n=e+1|0;$p=8;continue _;case 10:$z
=ACx(b,k,d,e);if(C()){break _;}j=$z;if(j==a.b){g=new Ii;o=B(259);$p=12;continue _;}g=h;$p=13;continue _;case 11:$z=AAD(b,c,i,n);if(C()){break _;}j=$z;if(j)return 1;$p=10;continue _;case 12:$z=ANz(b,k,d,e);if(C()){break _;}p=$z;K5(g,o,p,h);$p=13;case 13:$z=ACx(b,l,d,e);if(C()){break _;}j=$z;if(j!=a.b){o=g;$p=15;continue _;}o=new Ii;p=B(259);g=g;$p=14;case 14:$z=ANz(b,l,d,e);if(C()){break _;}h=$z;K5(o,p,g,h);$p=15;case 15:$z=ACx(b,c,d,m);if(C()){break _;}e=$z;if(e==a.b){g=new Ii;p=B(259);$p=16;continue _;}g=o;$p
=17;continue _;case 16:$z=ANz(b,c,d,m);if(C()){break _;}h=$z;K5(g,p,h,o);$p=17;case 17:$z=ACx(b,c,d,n);if(C()){break _;}e=$z;if(e==a.b){o=new Ii;p=B(259);g=g;$p=18;continue _;}o=g;b=o;$p=19;continue _;case 18:$z=ANz(b,c,d,n);if(C()){break _;}b=$z;K5(o,p,g,b);b=o;$p=19;case 19:Y2(f,b);if(C()){break _;}return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AZF(a){return Bbg();}
function AKJ(){P.call(this);}
function BbO(a,b){var c=new AKJ();AUV(c,a,b);return c;}
function AUV(a,b,c){C8(a,b,c,Bhu);}
function AEW(a,b,c,d,e){return null;}
function ATY(a){return 0;}
function A5f(a){return 0;}
function A7u(a){return 5;}
function A9R(a,b){return 1;}
function AUD(a){return 0;}
function AHw(){P.call(this);}
function Bbs(a){var b=new AHw();AZk(b,a);return b;}
function AZk(a,b){D0(a,b,Bha);a.ba=59;}
function AWw(a,b){if(b==1)b=a.ba-16|0;else if(!b){L();b=Be1.ci(0);}else b=b!=2&&b!=4?a.ba:a.ba+1|0;return b;}
function AGS(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ANs(f);if(C()){break _;}return 1;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AKI(){F4.call(this);}
function Bcx(a,b){var c=new AKI();AZR(c,a,b);return c;}
function AZR(a,b,c){Lw(a,b,c);a.ba=c;Fe(a,1);Bo(a,0.0,0.0,0.0,1.0,0.25,1.0);}
function AYI(a,b){L();return b!=Bg3.b?0:1;}
function AJo(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJq(a,b,c,d,e);if(C()){break _;}g=d+1|0;$p=2;case 2:$z=XA(b,c,g,e);if(C()){break _;}h=$z;if(h<9)return;$p=3;case 3:$z=AEK(b,c,d,e);if(C()){break _;}h=$z;if(h>=7)return;$p=4;case 4:$z=Zc(a,b,c,d,e);if(C()){break _;}i=$z;if(E(f,100.0/i|0))return;g=h+1|0;$p=5;case 5:AKw(b,c,d,e,g);if(C()){break _;}return;default:
E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function Zc(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=1.0;g=e-1|0;$p=1;case 1:$z=ACx(b,c,d,g);if(C()){break _;}h=$z;i=e+1|0;$p=2;case 2:$z=ACx(b,c,d,i);if(C()){break _;}j=$z;k=c-1|0;$p=3;case 3:$z=ACx(b,k,d,e);if
(C()){break _;}l=$z;m=c+1|0;$p=4;case 4:$z=ACx(b,m,d,e);if(C()){break _;}n=$z;$p=5;case 5:$z=ACx(b,k,d,g);if(C()){break _;}o=$z;$p=6;case 6:$z=ACx(b,m,d,g);if(C()){break _;}p=$z;$p=7;case 7:$z=ACx(b,m,d,i);if(C()){break _;}q=$z;$p=8;case 8:$z=ACx(b,k,d,i);if(C()){break _;}r=$z;s=l!=a.b&&n!=a.b?0:1;t=h!=a.b&&j!=a.b?0:1;u=o!=a.b&&p!=a.b&&q!=a.b&&r!=a.b?0:1;o=d-1|0;while(k<=m){v=g;if(v<=i){$p=9;continue _;}k=k+1|0;}a:{if(!u){if(!s)break a;if(!t)break a;}f=f/2.0;}return f;case 9:$z=ACx(b,k,o,v);if(C()){break _;}w
=$z;x=0.0;L();if(w==Bg3.b){x=1.0;$p=10;continue _;}if(!(k==c&&v==e))x=x/4.0;f=f+x;v=v+1|0;while(true){if(v<=i){continue _;}k=k+1|0;if(k>m)break;v=g;}b:{if(!u){if(!s)break b;if(!t)break b;}f=f/2.0;}return f;case 10:$z=AEK(b,k,o,v);if(C()){break _;}d=$z;if(d>0)x=3.0;if(!(k==c&&v==e))x=x/4.0;f=f+x;v=v+1|0;while(true){if(v<=i){$p=9;continue _;}k=k+1|0;if(k>m)break;v=g;}c:{if(!u){if(!s)break c;if(!t)break c;}f=f/2.0;}return f;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function A8u(a,b,c){if(c<0)c=7;return a.ba+c|0;}
function A4F(a){return 6;}
function ANB(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=0;h=c;i=d;j=e;while(g<3){if(E(b.q,15)<=f){k=N(b.q)*0.699999988079071+0.15000000596046448;l=N(b.q)*0.699999988079071+0.15000000596046448;m=N(b.q)*0.699999988079071+0.15000000596046448;n=new E9;o=h+k;p=i+l;q=j+m;r=new Cd;BB();DD(r,
BhC);He(n,b,o,p,q,r);n.hb=10;$p=1;continue _;}g=g+1|0;}return;case 1:AOj(b,n);if(C()){break _;}while(true){g=g+1|0;if(g>=3)break;if(E(b.q,15)>f)continue;else{k=N(b.q)*0.699999988079071+0.15000000596046448;l=N(b.q)*0.699999988079071+0.15000000596046448;m=N(b.q)*0.699999988079071+0.15000000596046448;n=new E9;o=h+k;p=i+l;q=j+m;r=new Cd;BB();DD(r,BhC);He(n,b,o,p,q,r);n.hb=10;continue _;}}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function A00(a,b,c){var d;c=Dz();d=new S;V(d);Cg(c,T(Be(H(d,B(260)),b)));if(b!=7)b=(-1);else{BB();b=BhD.cW;}return b;}
function A4W(a,b){return 1;}
function AQQ(){P.call(this);}
function Bb0(a){var b=new AQQ();A2M(b,a);return b;}
function A2M(a,b){D0(a,b,Bhn);a.ba=87;Fe(a,1);Bo(a,0.0,0.0,0.0,1.0,0.9375,1.0);Gy(a,255);}
function AA5(a,b,c,d,e){return D3(c+0|0,d+0|0,e+0|0,c+1|0,d+1|0,e+1|0);}
function AU4(a){return 0;}
function A1C(a){return 0;}
function A_l(a,b,c){b=R(b,1);return !b&&c>0?a.ba-1|0:b?2:a.ba;}
function ANf(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(E(f,5))return;g=c-4|0;h=c+4|0;i=d+1|0;j=e-4|0;k=e+4|0;a:while(true){if(g>h){if(!0){$p=1;continue _;}g=7;$p=2;continue _;}l=d;while(l<=i){m=j;if(m<=k)break a;l=l+1|0;}g=g+1|0;}$p=4;continue _;case 1:$z=AEK(b,c,d,e);if(C()){break _;}h=$z;if(h>0){g=h-1|0;$p=3;continue _;}g
=c-0|0;h=c+0|0;m=e-0|0;j=e+0|0;while(true){if(g>h){if(0)return;L();g=BeS.b;$p=5;continue _;}l=m;if(l<=j)break;g=g+1|0;}$p=6;continue _;case 2:AKw(b,c,d,e,g);if(C()){break _;}return;case 3:AKw(b,c,d,e,g);if(C()){break _;}return;case 4:$z=AB2(b,g,l,m);if(C()){break _;}f=$z;if(f===BfQ)g=1;else{m=m+1|0;b:while(true){if(m<=k){continue _;}l=l+1|0;while(l>i){g=g+1|0;if(g>h)break b;l=d;}m=j;}g=0;}if(!g){$p=1;continue _;}g=7;$p=2;continue _;case 5:APy(b,c,d,e,g);if(C()){break _;}return;case 6:$z=ACx(b,g,i,l);if(C())
{break _;}n=$z;L();if(n==Bg2.b)g=1;else{l=l+1|0;while(true){if(l<=j){continue _;}g=g+1|0;if(g>h)break;l=m;}g=0;}if(g)return;L();g=BeS.b;$p=5;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function AKP(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(E(b.q,4))return;L();g=BeS.b;$p=1;case 1:APy(b,c,d,e,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function X_(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d+1|0;$p=1;case 1:$z=AB2(b,c,f,e);if(C()){break _;}g=$z;if(!g.dw())return;L();f=BeS.b;$p=2;case 2:APy(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AW3(a,b,c){L();return BeS.dX(0,c);}
function AF3(){Eg.call(this);this.wB=0;}
function A4M(a,b){var c=new AF3();ATS(c,a,b);return c;}
function ATS(a,b,c){D0(a,b,Bg_);a.wB=c;a.ba=45;}
function ACv(a,b,c,d,e){var f,g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AOH(a,b,c,d,e);if(C()){break _;}f=e-1|0;$p=2;case 2:$z=ACx(b,c,d,f);if(C()){break _;}g=$z;f=e+1|0;$p=3;case 3:$z=ACx(b,c,d,f);if(C()){break _;}f=$z;h=c-1|0;$p=4;case 4:$z=ACx(b,h,d,e);if(C()){break _;}h=$z;i=c+1|0;$p=5;case 5:$z=ACx(b,i,d,e);if(C()){break _;}i=$z;j=3;L();if(BgA.data[g]&&!BgA.data[f])j
=3;if(BgA.data[f]&&!BgA.data[g])j=2;if(BgA.data[h]&&!BgA.data[i])j=5;if(BgA.data[i]&&!BgA.data[h])j=4;$p=6;case 6:AKw(b,c,d,e,j);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AKf(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(f==1){L();return BeV.ba;}if(!f){L();return BeV.ba;}$p=1;case 1:$z=b.eI(c,d,e);if(C()){break _;}g=$z;return f!=g?a.ba:!a.wB?a.ba-1|0:a.ba+16|0;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AEn(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.wB)return;$p=1;case 1:$z=AEK(b,c,d,e);if(C()){break _;}g=$z;h=c+0.5;i=d+0.0+N(f)*6.0/16.0;j=e+0.5;k=N(f)*0.6000000238418579-0.30000001192092896;if(g==4){l=h-0.5199999809265137;m=i;n=j+k;BU(b,B(256),l,m,n,0.0,0.0,0.0);BU(b,B(257),
l,m,n,0.0,0.0,0.0);}else if(g==5){l=h+0.5199999809265137;m=i;n=j+k;BU(b,B(256),l,m,n,0.0,0.0,0.0);BU(b,B(257),l,m,n,0.0,0.0,0.0);}else if(g==2){l=h+k;m=i;n=j-0.5199999809265137;BU(b,B(256),l,m,n,0.0,0.0,0.0);BU(b,B(257),l,m,n,0.0,0.0,0.0);}else if(g==3){o=h+k;p=i;q=j+0.5199999809265137;BU(b,B(256),o,p,q,0.0,0.0,0.0);BU(b,B(257),o,p,q,0.0,0.0,0.0);}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function AUZ(a,b){if(b==1){L();b=BeV.b;}else if(!b){L();b=BeV.b;}else b=b!=3?a.ba:a.ba-1|0;return b;}
function AGV(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ANz(b,c,d,e);if(C()){break _;}b=$z;g=b;$p=2;case 2:AO5(f,g);if(C()){break _;}return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function A77(a){return BaC();}
function Vv(){var a=this;Eg.call(a);a.Db=null;a.Du=0;}
function BhE(a,b,c){var d=new Vv();AHt(d,a,b,c);return d;}
function AHt(a,b,c,d){D0(a,b,Bha);a.ba=4;a.Db=c;Bo(a,0.25,0.0,0.25,0.75,1.625,0.75);a.Du=d;}
function AYN(a){return (-1);}
function A5_(a){return 0;}
function A55(a){return 0;}
function A1N(a){var b,c,$$je;a:{try{b=Zq(a.Db);}catch($$e){$$je=Bg($$e);if($$je instanceof BD){b=$$je;break a;}else{throw $$e;}}return b;}c=new B6;WU(c,b);M(c);}
function AGO(a,b,c,d,e){return 1;}
function A8D(a,b,c){return a.Du;}
function ZU(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=AAD(b,c,f,e);if(C()){break _;}f=$z;if(f)return;$p=2;case 2:$z=AEK(b,c,d,e);if(C()){break _;}f=$z;$p=3;case 3:Yi(a,b,c,d,e,f);if(C()){break _;}f=0;$p=4;case 4:APy(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function D$(){var a=this;D.call(a);a.ch=null;a.dK=0;a.dI=0;a.dR=0;}
var BhF=null;var BhG=null;function BhH(){var a=new D$();ANx(a);return a;}
function ANx(a){return;}
function J0(b,c){var d;if(!DZ(BhG,c)){BQ(BhF,c,b);BQ(BhG,b,c);return;}b=new Cc;d=new S;V(d);Bl(b,T(H(H(d,B(261)),c)));M(b);}
function AFL(a){return;}
function AMh(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.ch;c=a.dK;d=a.dI;e=a.dR;$p=1;case 1:$z=AEK(b,c,d,e);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,$p);}
function ACg(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.ch;c=a.dK;d=a.dI;e=a.dR;$p=1;case 1:AGu(b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AK3(a,b,c,d){var e,f,g;e=a.dK+0.5-b;f=a.dI+0.5-c;g=a.dR+0.5-d;return e*e+f*f+g*g;}
function AFs(){BhF=De();BhG=De();J0(F(WX),B(262));J0(F(Th),B(263));J0(F(Jj),B(264));J0(F(NA),B(265));}
function Jj(){var a=this;D$.call(a);a.gt=null;a.rE=0;}
function BhI(){var a=new Jj();AZ1(a);return a;}
function AZ1(a){var b,c;b=J(B4,4);c=b.data;c[0]=B(3);c[1]=B(3);c[2]=B(3);c[3]=B(3);a.gt=b;a.rE=(-1);}
function Bb(){var a=this;D.call(a);a.cW=0;a.eZ=0;a.fg=0;a.te=0;}
var BhJ=null;var Bhe=null;var BhK=null;var BhL=null;var BhM=null;var BhN=null;var BhO=null;var BhP=null;var Bgd=null;var BhA=null;var BhB=null;var BhQ=null;var BhR=null;var BhS=null;var BhT=null;var BhU=null;var BhV=null;var BhW=null;var BhX=null;var BhY=null;var BhZ=null;var Bh0=null;var Bh1=null;var Bh2=null;var Bh3=null;var Bh4=null;var Bh5=null;var Bh6=null;var Bh7=null;var Bh8=null;var Bh9=null;var Bh$=null;var Bh_=null;var Bgf=null;var Bgc=null;var Bge=null;var Bia=null;var Bib=null;var Bic=null;var Bid
=null;var Bie=null;var BhC=null;var BhD=null;var Bif=null;var Big=null;var Bih=null;var Bii=null;var Bij=null;var Bik=null;var Bil=null;var Bim=null;var Bin=null;var Bio=null;var Bip=null;var Biq=null;var Bir=null;var Bis=null;var Bit=null;var Biu=null;var Biv=null;var Biw=null;var Bix=null;var Biy=null;var Biz=null;var Bhz=null;var Bgg=null;var BiA=null;var BiB=null;var BiC=null;var Bhd=null;var BiD=null;var BiE=null;var BiF=null;var BiG=null;var BiH=null;var BiI=null;function BB(){BB=Bt(Bb);A7K();}
function EU(a){var b=new Bb();Ds(b,a);return b;}
function Ds(a,b){var c,d,e;BB();a.eZ=64;a.fg=32;c=256+b|0;a.cW=c;if(Bhe.data[c]!==null){d=Dz();e=new S;V(e);Cg(d,T(Be(H(e,B(266)),b)));}Bhe.data[c]=a;}
function Bp(a,b){a.te=b;return a;}
function A5A(a,b){return a.te;}
function AGt(a,b,c,d,e,f,g,h){return 0;}
function A$M(a,b,c){return 1.0;}
function ASk(a,b,c,d){return b;}
function A2z(a){return a.eZ;}
function A7Q(a){return a.fg;}
function AWa(a,b,c){return;}
function A49(a,b,c,d,e,f){return;}
function A_s(a,b){return 1;}
function AV3(a,b){return 0;}
function A3J(a,b,c){return;}
function A7K(){var b;BhJ=Bbl();Bhe=J(Bb,1024);BhK=Bp(LJ(0,2),82);BhL=Bp(Of(1,2),98);BhM=Bp(NK(2,2),114);BhN=Bp(Bbc(3),5);BhO=Bp(OB(4,4),10);BhP=Bp(Baj(5),21);Bgd=Bp(EU(6),37);BhA=Bp(EU(7),7);BhB=Bp(EU(8),55);BhQ=Bp(EU(9),23);BhR=Bp(EU(10),39);BhS=Bp(Nz(11,2),66);BhT=Bp(Nz(12,0),64);BhU=Bp(LJ(13,0),80);BhV=Bp(Of(14,0),96);BhW=Bp(NK(15,0),112);BhX=Bp(Nz(16,1),65);BhY=Bp(LJ(17,1),81);BhZ=Bp(Of(18,1),97);Bh0=Bp(NK(19,1),113);Bh1=Bp(Nz(20,3),67);Bh2=Bp(LJ(21,3),83);Bh3=Bp(Of(22,3),99);Bh4=Bp(NK(23,3),115);Bh5=Bp(EU(24),
53);Bh6=Bp(EU(25),71);Bh7=Bp(BcE(26,10),72);Bh8=Bp(Nz(27,0),68);Bh9=Bp(LJ(28,0),84);Bh$=Bp(Of(29,0),100);Bh_=Bp(NK(30,0),116);Bgf=Bp(EU(31),8);Bgc=Bp(EU(32),24);Bge=Bp(EU(33),40);Bia=Bp(Nw(34,0),128);Bib=Bp(Nw(35,1),129);Bic=Bp(Nw(36,2),130);Bid=Bp(Nw(37,3),131);Bie=Bp(Nw(38,4),132);b=new VX;L();AHJ(b,39,Bg2.b);BhC=Bp(b,9);BhD=Bp(EU(40),25);Bif=Bp(OB(41,5),41);Big=Bp(Db(42,0,0,0),0);Bih=Bp(Db(43,0,0,1),16);Bii=Bp(Db(44,0,0,2),32);Bij=Bp(Db(45,0,0,3),48);Bik=Bp(Db(46,1,1,0),1);Bil=Bp(Db(47,1,1,1),17);Bim=Bp(Db(48,
1,1,2),33);Bin=Bp(Db(49,1,1,3),49);Bio=Bp(Db(50,2,2,0),2);Bip=Bp(Db(51,2,2,1),18);Biq=Bp(Db(52,2,2,2),34);Bir=Bp(Db(53,2,2,3),50);Bis=Bp(Db(54,3,3,0),3);Bit=Bp(Db(55,3,3,1),19);Biu=Bp(Db(56,3,3,2),35);Biv=Bp(Db(57,3,3,3),51);Biw=Bp(Db(58,1,4,0),4);Bix=Bp(Db(59,1,4,1),20);Biy=Bp(Db(60,1,4,2),36);Biz=Bp(Db(61,1,4,3),52);Bhz=Bp(EU(62),6);Bgg=Bp(OB(63,3),87);BiA=Bp(OB(64,8),88);BiB=Bp(Bah(65),26);BiC=Bp(OB(66,42),11);Bhd=Bp(Bcj(67),42);BiD=Bp(A_T(68),43);BiE=Bp(AP0(69,0),74);BiF=Bp(AP0(70,BfY.b),75);BiG=Bp(AP0(71,
BfZ.b),76);BiH=Bp(BbN(72),135);BiI=Bp(BcY(73),104);}
function AIy(){P.call(this);}
function Bae(a){var b=new AIy();A2e(b,a);return b;}
function A2e(a,b){D0(a,b,Bha);a.ba=97;Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);}
function A$s(a,b,c){var d,e;if(b&&b!=1){d=Pp(a,c);if((d&&d!=2?0:1)^(b>3?0:1))return a.ba;b=((d/2|0)+(b&1^d)|0)+((c&4)/4|0)|0;e=a.ba-((c&8)*2|0)|0;if(b&1)e= -e;return e;}return a.ba;}
function A0T(a){return 0;}
function AXs(a){return 0;}
function ATO(a){return 7;}
function AGr(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AHF(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=K6(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,$p);}
function ZB(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AHF(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=No(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AHF(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.eI(c,d,e);if(C()){break _;}c=$z;AO4(a,Pp(a,c));return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AO4(a,b){Bo(a,0.0,0.0,0.0,1.0,2.0,1.0);if(!b)Bo(a,0.0,0.0,0.0,1.0,1.0,0.1875);if(b==1)Bo(a,0.8125,0.0,0.0,1.0,1.0,1.0);if(b==2)Bo(a,0.0,0.0,0.8125,1.0,1.0,1.0);if(b==3)Bo(a,0.0,0.0,0.0,0.1875,1.0,1.0);}
function AJX(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ADU(a,b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ADU(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEK(b,c,d,e);if(C()){break _;}g=$z;if(!(g&8)){h=d+1|0;$p=2;continue _;}d=d-1|0;$p=3;continue _;case 2:$z=ACx(b,c,h,e);if(C()){break _;}i=$z;if(i!=a.b){h=g^4;$p=4;continue _;}i=(g^4)+8|0;$p=5;continue _;case 3:$z=ACx(b,c,d,e);if(C()){break _;}h=$z;if(h!=a.b)return 1;$p=6;continue _;case 4:AKw(b,c,d,e,h);if
(C()){break _;}Jm(b,c,d-1|0,e,c,d,e);if(BP()>=0.5)Ex(b,c+0.5,d+0.5,e+0.5,B(267),1.0,N(b.q)*0.10000000149011612+0.8999999761581421);else Ex(b,c+0.5,d+0.5,e+0.5,B(268),1.0,N(b.q)*0.10000000149011612+0.8999999761581421);return 1;case 5:AKw(b,c,h,e,i);if(C()){break _;}h=g^4;$p=4;continue _;case 6:ADU(a,b,c,d,e,f);if(C()){break _;}return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ACz(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEK(b,c,d,e);if(C()){break _;}g=$z;if(g&8){f=d-1|0;$p=3;continue _;}h=0;f=d+1|0;$p=2;case 2:$z=ACx(b,c,f,e);if(C()){break _;}i=$z;if(i!=a.b){i=0;$p=4;continue _;}i=d-1|0;$p=6;continue _;case 3:$z=ACx(b,c,f,e);if(C()){break _;}f=$z;if(f==a.b)return;f=0;$p=5;continue _;case 4:APy(b,c,d,e,i);if(C()){break _;}h
=1;i=d-1|0;$p=6;continue _;case 5:APy(b,c,d,e,f);if(C()){break _;}return;case 6:$z=AAD(b,c,i,e);if(C()){break _;}i=$z;if(!i){i=0;$p=7;continue _;}if(!h)return;$p=10;continue _;case 7:APy(b,c,d,e,i);if(C()){break _;}h=1;$p=8;case 8:$z=ACx(b,c,f,e);if(C()){break _;}i=$z;if(i==a.b){i=0;$p=9;continue _;}if(!h)return;$p=10;continue _;case 9:APy(b,c,f,e,i);if(C()){break _;}if(!h)return;$p=10;case 10:Yi(a,b,c,d,e,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function A8C(a,b,c){if(b&8)b=0;else{BB();b=BiD.cW;}return b;}
function XG(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AHF(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=Kb(a,b,c,d,e,f,g);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function Pp(a,b){return b&4?b&3:(b-1|0)&3;}
function AJ2(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(d>=127)return 0;d=d-1|0;$p=1;case 1:$z=AAD(b,c,d,e);if(C()){break _;}c=$z;return !c?0:1;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AC3(){P.call(this);}
function Bcm(a,b){var c=new AC3();AUP(c,a,b);return c;}
function AUP(a,b,c){C8(a,b,c,Bhu);}
function ADg(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEK(b,c,d,e);if(C()){break _;}f=$z;if(f==2)Bo(a,0.0,0.0,0.875,1.0,1.0,1.0);if(f==3)Bo(a,0.0,0.0,0.0,1.0,1.0,0.125);if(f==4)Bo(a,0.875,0.0,0.0,1.0,1.0,1.0);if(f==5)Bo(a,0.0,0.0,0.0,0.125,1.0,1.0);$p=2;case 2:$z=No(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AD7(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEK(b,c,d,e);if(C()){break _;}f=$z;if(f==2)Bo(a,0.0,0.0,0.875,1.0,1.0,1.0);if(f==3)Bo(a,0.0,0.0,0.0,1.0,1.0,0.125);if(f==4)Bo(a,0.875,0.0,0.0,1.0,1.0,1.0);if(f==5)Bo(a,0.0,0.0,0.0,0.125,1.0,1.0);$p=2;case 2:$z=K6(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AWX(a){return 0;}
function A5W(a){return 0;}
function A9A(a){return 8;}
function ANW(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-1|0;$p=1;case 1:$z=AAD(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=c+1|0;$p=2;case 2:$z=AAD(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=e-1|0;$p=3;case 3:$z=AAD(b,c,d,f);if(C()){break _;}f=$z;if(f)return 1;e=e+1|0;$p=4;case 4:$z=AAD(b,c,d,e);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function Yp(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEK(b,c,d,e);if(C()){break _;}g=$z;if(g&&f!=2){if(g&&f!=3){if(g&&f!=4){if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;continue _;}h=c+1|0;$p=4;continue _;}h=e-1|0;$p=3;continue _;}h=e+1|0;$p=2;case 2:$z=AAD(b,c,d,h);if(C()){break _;}h=$z;if(h)g=2;if(g&&f!=3){if(g&&f!=4){if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;continue _;}h
=c+1|0;$p=4;continue _;}h=e-1|0;$p=3;case 3:$z=AAD(b,c,d,h);if(C()){break _;}h=$z;if(h)g=3;if(g&&f!=4){if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;continue _;}h=c+1|0;$p=4;case 4:$z=AAD(b,h,d,e);if(C()){break _;}h=$z;if(h)g=4;if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;case 5:$z=AAD(b,f,d,e);if(C()){break _;}f=$z;if(f)g=5;$p=6;case 6:AKw(b,c,d,e,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AKM(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEK(b,c,d,e);if(C()){break _;}g=$z;h=0;if(g==2){f=e+1|0;$p=2;continue _;}if(g==3){f=e-1|0;$p=3;continue _;}if(g==4){f=c+1|0;$p=4;continue _;}if(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 2:$z=AAD(b,c,d,f);if(C()){break _;}f=$z;if(f)h=1;if(g==3){f=e-1|0;$p=3;continue _;}if(g==4){f=c+1|0;$p=4;continue _;}if
(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 3:$z=AAD(b,c,d,f);if(C()){break _;}f=$z;if(f)h=1;if(g==4){f=c+1|0;$p=4;continue _;}if(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 4:$z=AAD(b,f,d,e);if(C()){break _;}f=$z;if(f)h=1;if(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 5:$z=AAD(b,f,d,e);if(C()){break _;}f=$z;if(f)h=1;if(h)return;$p=6;case 6:Yi(a,b,c,d,e,g);if(C()){break _;}f=0;$p=7;case 7:APy(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,
b,c,d,e,f,g,h,$p);}
function A5u(a,b){return 1;}
function ANZ(){P.call(this);}
function Ba0(a,b){var c=new ANZ();A$9(c,a,b);return c;}
function A$9(a,b,c){C8(a,b,c,Bhu);Bo(a,0.0,0.0,0.0,1.0,0.125,1.0);}
function ACE(a,b,c,d,e){return null;}
function AWy(a){return 0;}
function ALD(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AMn(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=Kb(a,b,c,d,e,f,g);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AMn(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.eI(c,d,e);if(C()){break _;}f=$z;if(f>=2&&f<=5)Bo(a,0.0,0.0,0.0,1.0,0.625,1.0);else Bo(a,0.0,0.0,0.0,1.0,0.125,1.0);return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function A2C(a,b,c){return c<6?a.ba:a.ba-16|0;}
function A3C(a){return 0;}
function A0y(a){return 9;}
function A2J(a,b){return 1;}
function ANY(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=d-1|0;$p=1;case 1:$z=AAD(b,c,d,e);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,$p);}
function ANH(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=15;$p=1;case 1:AKw(b,c,d,e,f);if(C()){break _;}g=new H$;$p=2;case 2:YS(g,a,b,c,d,e);if(C()){break _;}$p=3;case 3:YR(g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AJP(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEK(b,c,d,e);if(C()){break _;}g=$z;h=0;f=d-1|0;$p=2;case 2:$z=AAD(b,c,f,e);if(C()){break _;}f=$z;if(!f)h=1;if(g==2){f=c+1|0;$p=3;continue _;}if(g==3){f=c-1|0;$p=4;continue _;}if(g==4){f=e-1|0;$p=5;continue _;}if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 3:$z=AAD(b,f,d,e);if(C()){break _;}f=$z;if
(!f)h=1;if(g==3){f=c-1|0;$p=4;continue _;}if(g==4){f=e-1|0;$p=5;continue _;}if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 4:$z=AAD(b,f,d,e);if(C()){break _;}f=$z;if(!f)h=1;if(g==4){f=e-1|0;$p=5;continue _;}if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 5:$z=AAD(b,c,d,f);if(C()){break _;}f=$z;if(!f)h=1;if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 6:$z=AAD(b,c,d,f);if(C()){break _;}f=$z;if(!f)h=1;if(!h)return;$p=7;case 7:$z=AEK(b,c,d,e);if(C())
{break _;}f=$z;$p=8;case 8:Yi(a,b,c,d,e,f);if(C()){break _;}f=0;$p=9;case 9:APy(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ASC(){Bb.call(this);this.nV=0;}
function A_8(a){var b=new ASC();A2O(b,a);return b;}
function A2O(a,b){Ds(a,b);b=b+256|0;a.nV=b;L();a.te=BeP.data[b].ci(2);}
function AQo(a,b,c,d,e,f,g,h){var i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!h)f=f+(-1)|0;if(h==1)f=f+1|0;if(h==2)g=g+(-1)|0;if(h==3)g=g+1|0;if(h==4)e=e+(-1)|0;if(h==5)e=e+1|0;if(!b.p)return 0;i=a.nV;j=0;$p=1;case 1:$z=AH_(d,i,e,f,g,j);if(C()){break _;}j=$z;if(!j)return 1;L();k=BeP.data[a.nV];j=a.nV;$p=2;case 2:$z=APy(d,e,f,g,j);if(C()){break _;}j=$z;if(!j)return 1;c=BeP.data[a.nV];$p
=3;case 3:c.vd(d,e,f,g,h);if(C()){break _;}Ex(d,e+0.5,f+0.5,g+0.5,Kg(k.gK),(k.gK.oR+1.0)/2.0,k.gK.pO*0.800000011920929);b.p=b.p-1|0;return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AHH(){MV.call(this);}
function A1H(){var a=new AHH();A1U(a);return a;}
function A1U(a){var b,c,d,e;b=J(B4,0);c=b.data;R2(B(24));d=c.length;e=0;while(e<d){R2(c[e]);e=e+1|0;}a.wv=B(24);a.H6=b.oZ();}
function AFw(a){var b;b=new Ri;b.lj=B(269);b.mX=BiJ;b.rC=BiJ;b.HZ=a;b.BW=0.3333333432674408;b.F9=0.5;return b;}
function AG5(a){var b,c,d,e,f;b=new PS;c=$rt_createByteArray(1);d=c.data;d[0]=63;b.vw=BiJ;b.uQ=BiJ;e=d.length;if(e&&e>=b.BP){b.HA=a;b.uD=c.oZ();b.GC=2.0;b.BP=4.0;return b;}f=new Cc;Bl(f,B(270));M(f);}
function M8(){var a=this;Fk.call(a);a.d9=0;a.cp=null;a.kN=null;}
function AME(b,c,d){return A5B(0,b.data.length,b,c,c+d|0,0,0);}
function AAs(b){return AME(b,0,b.data.length);}
function AKh(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BO;i=new S;V(i);Bl(h,T(Be(H(Be(H(i,B(271)),g),B(248)),f)));M(h);}if(Ct(a)<d){i=new Gu;O(i);M(i);}if(d<0){i=new BO;h=new S;V(h);Bl(i,T(H(Be(H(h,B(249)),d),B(250))));M(i);}g=a.bk+a.d9|0;j=0;while(j<d){k=c+1|0;b=a.cp.data;f=g+1|0;e[c]=b[g];j=j+1|0;c=k;g=f;}a.bk=a.bk+d|0;return a;}}b=b.data;h=new BO;i=new S;V(i);Bl(h,T(H(Be(H(Be(H(i,B(251)),c),B(244)),b.length),B(27))));M(h);}
function WY(a,b,c,d){var e,f,g,h,i,j,k;if(!d)return a;if(a.mQ){e=new FV;O(e);M(e);}if(Ct(a)<d){e=new Hc;O(e);M(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){e=new BO;i=new S;V(i);Bl(e,T(Be(H(Be(H(i,B(272)),h),B(248)),g)));M(e);}if(d<0){e=new BO;i=new S;V(i);Bl(e,T(H(Be(H(i,B(249)),d),B(250))));M(e);}h=a.bk+a.d9|0;j=0;while(j<d){b=a.cp.data;k=h+1|0;g=c+1|0;b[h]=f[c];j=j+1|0;h=k;c=g;}a.bk=a.bk+d|0;return a;}}b=b.data;i=new BO;e=new S;V(e);Bl(i,T(H(Be(H(Be(H(e,B(251)),c),B(244)),b.length),B(27))));M(i);}
function UO(a,b){return WY(a,b,0,b.data.length);}
function A9w(a,b){a.kN=b;return a;}
function ATX(a){EA(a);return a;}
function A5p(a,b){Nq(a,b);return a;}
function A0P(a,b){EN(a,b);return a;}
function Nk(){L8.call(this);}
function Jt(a){var b,c;if(a.bk<a.cy){b=a.bk;a.bk=b+1|0;return RH(a,b);}c=new Gu;O(c);M(c);}
function CJ(a,b){var c,d;if(AKr(a)){c=new FV;O(c);M(c);}if(a.bk<a.cy){d=a.bk;a.bk=d+1|0;ADS(a,d,b);return a;}c=new Hc;O(c);M(c);}
function AKr(a){return a.xz;}
function WO(){var a=this;Nk.call(a);a.xz=0;a.yq=0;a.xs=null;}
function RH(a,b){return a.xs.data[b+a.yq|0];}
function ADS(a,b,c){a.xs.data[b+a.yq|0]=c;}
function A8z(a){return a.xz;}
function ARm(){var a=this;M8.call(a);a.Gn=0;a.mQ=0;}
function A5B(a,b,c,d,e,f,g){var h=new ARm();ATi(h,a,b,c,d,e,f,g);return h;}
function ATi(a,b,c,d,e,f,g,h){KO(a,c);a.kN=Bgn;a.d9=b;a.cp=d;a.bk=e;a.cy=f;a.Gn=g;a.mQ=h;}
function ALO(a){var b,c,d,e;if(a.bk>=a.cy){b=new Gu;O(b);M(b);}c=a.cp.data;d=a.d9;e=a.bk;a.bk=e+1|0;return c[d+e|0];}
function A1q(a){return a.mQ;}
function KQ(a,b){var c,d,e,f,g,h;if(b>=0&&(b+3|0)<a.cy){c=a.cp.data[a.d9+b|0]&255;d=a.cp.data[(a.d9+b|0)+1|0]&255;e=a.cp.data[(a.d9+b|0)+2|0]&255;f=a.cp.data[(a.d9+b|0)+3|0]&255;if(a.kN!==Bgn)return f<<24|e<<16|d<<8|c;return c<<24|d<<16|e<<8|f;}g=new BO;h=new S;V(h);Bl(g,T(H(Be(H(Be(H(h,B(273)),b),B(244)),a.cy-3|0),B(27))));M(g);}
function AA7(a,b,c){var d,e;if(a.mQ){d=new FV;O(d);M(d);}if(b>=0&&(b+3|0)<a.cy){if(a.kN!==Bgn){a.cp.data[a.d9+b|0]=c<<24>>24;a.cp.data[(a.d9+b|0)+1|0]=c>>8<<24>>24;a.cp.data[(a.d9+b|0)+2|0]=c>>16<<24>>24;a.cp.data[(a.d9+b|0)+3|0]=c>>24<<24>>24;}else{a.cp.data[a.d9+b|0]=c>>24<<24>>24;a.cp.data[(a.d9+b|0)+1|0]=c>>16<<24>>24;a.cp.data[(a.d9+b|0)+2|0]=c>>8<<24>>24;a.cp.data[(a.d9+b|0)+3|0]=c<<24>>24;}return a;}e=new BO;d=new S;V(d);Bl(e,T(H(Be(H(Be(H(d,B(273)),b),B(244)),a.cy-3|0),B(27))));M(e);}
function AHK(a){var b,c;b=Ct(a)/4|0;if(a.kN!==Bgn){c=new Pf;ON(c,a.d9+a.bk|0,b,a,0,b,a.mQ);return c;}c=new VO;ON(c,a.d9+a.bk|0,b,a,0,b,a.mQ);return c;}
function Vu(){}
function LU(){Fk.call(this);}
function AHn(b){var c,d;if(b>=0)return AZI(0,b,$rt_createCharArray(b),0,b,0);c=new Cc;d=new S;V(d);Bl(c,T(Be(H(d,B(274)),b)));M(c);}
function AM6(b,c,d){return AZI(0,b.data.length,b,c,c+d|0,0);}
function O4(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BO;i=new S;V(i);Bl(h,T(Be(H(Be(H(i,B(275)),g),B(248)),f)));M(h);}if(Ct(a)<d){h=new Gu;O(h);M(h);}if(d<0){h=new BO;i=new S;V(i);Bl(h,T(H(Be(H(i,B(249)),d),B(250))));M(h);}g=a.bk;j=0;while(j<d){k=c+1|0;f=g+1|0;e[c]=AOQ(a,g);j=j+1|0;c=k;g=f;}a.bk=a.bk+d|0;return a;}}b=b.data;i=new BO;h=new S;V(h);Bl(i,T(H(Be(H(Be(H(h,B(251)),c),B(244)),b.length),B(27))));M(i);}
function AER(a,b){return O4(a,b,0,b.data.length);}
function ASr(a,b,c,d){var e,f,g,h,i,j,k;if(Xp(a)){e=new FV;O(e);M(e);}if(Ct(a)<d){e=new Hc;O(e);M(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){e=new BO;i=new S;V(i);Bl(e,T(Be(H(Be(H(i,B(276)),h),B(248)),g)));M(e);}if(d<0){e=new BO;i=new S;V(i);Bl(e,T(H(Be(H(i,B(249)),d),B(250))));M(e);}h=a.bk;j=0;while(j<d){k=h+1|0;g=c+1|0;Vx(a,h,f[c]);j=j+1|0;h=k;c=g;}a.bk=a.bk+d|0;return a;}}b=b.data;i=new BO;e=new S;V(e);Bl(i,T(H(Be(H(Be(H(e,B(251)),c),B(244)),b.length),B(27))));M(i);}
function AJf(a,b,c,d){var e,f,g,h,i,j;if(Xp(a)){b=new FV;O(b);M(b);}e=d-c|0;if(Ct(a)<e){b=new Hc;O(b);M(b);}if(c>=0&&c<Bi(b)){if(d>Bi(b)){f=new BO;g=new S;V(g);Bl(f,T(Be(H(Be(H(g,B(276)),d),B(277)),Bi(b))));M(f);}if(c>d){b=new BO;f=new S;V(f);Bl(b,T(Be(H(Be(H(f,B(278)),c),B(279)),d)));M(b);}h=a.bk;while(c<d){i=h+1|0;j=c+1|0;Vx(a,h,Z(b,c));h=i;c=j;}a.bk=a.bk+e|0;return a;}g=new BO;f=new S;V(f);Bl(g,T(H(Be(H(Be(H(f,B(278)),c),B(244)),Bi(b)),B(27))));M(g);}
function Nn(a,b){return AJf(a,b,0,Bi(b));}
function AJD(a){return 1;}
function APl(a){return a.mi;}
function AYA(a){Gx(a);return a;}
function AX5(a,b){EN(a,b);return a;}
function P6(){BW.call(this);}
function BiK(){var a=new P6();A85(a);return a;}
function A85(a){O(a);}
function Om(){B8.call(this);}
function BiL(){var a=new Om();AZW(a);return a;}
function AZW(a){return;}
function A4U(a){return 0;}
function A5z(a){return 0;}
function ATn(a){return 0;}
function L0(){B8.call(this);}
function BiM(){var a=new L0();ATm(a);return a;}
function ATm(a){return;}
function A_G(a){return 1;}
function AY$(a){return 0;}
function N9(){B8.call(this);}
function BiN(){var a=new N9();A7x(a);return a;}
function A7x(a){return;}
function A6Y(a){return 0;}
function A97(a){return 0;}
function AU6(a){return 0;}
function Gc(){var a=this;Bb.call(a);a.uW=null;a.yG=0.0;a.AK=0;a.JA=0;}
function BiO(a,b,c,d){var e=new Gc();Mi(e,a,b,c,d);return e;}
function Mi(a,b,c,d,e){Ds(a,b);a.yG=4.0;a.JA=d;a.uW=e;a.eZ=1;a.fg=32<<d;if(d==3)a.fg=a.fg*2|0;a.yG=(d+1|0)*2|0;a.AK=c+d|0;}
function A8V(a,b,c){var d;d=0;while(d<a.uW.data.length){if(a.uW.data[d]===c)return a.yG;d=d+1|0;}return 1.0;}
function A67(a,b,c){FM(b,2);}
function AWr(a,b,c,d,e,f){FM(b,1);}
function AW_(a,b){return a.AK;}
function OY(){Gc.call(this);}
var BiP=null;function Bb6(){Bb6=Bt(OY);A9c();}
function LJ(a,b){var c=new OY();AFO(c,a,b);return c;}
function AFO(a,b,c){Bb6();Mi(a,b,1,c,BiP);}
function A9c(){var b,c;b=J(P,4);c=b.data;L();c[0]=BeR;c[1]=BeS;c[2]=Bfa;c[3]=Bfb;BiP=b;}
function Vy(){Gc.call(this);this.nH=0;}
var BiQ=null;function Bb9(){Bb9=Bt(Vy);A1O();}
function Of(a,b){var c=new Vy();ANS(c,a,b);return c;}
function ANS(a,b,c){Bb9();Mi(a,b,2,c,BiQ);a.nH=c;}
function A5m(a,b){L();return b===Bfl?(a.nH!=3?0:1):b!==Bg0&&b!==BgZ?(b!==Bfi&&b!==Bfg?(b!==Bfh&&b!==Bff?(b.b_===Bg_?1:b.b_!==Bho?0:1):a.nH<1?0:1):a.nH<2?0:1):a.nH<2?0:1;}
function A1O(){var b,c;b=J(P,12);c=b.data;L();c[0]=BeZ;c[1]=BeT;c[2]=BeU;c[3]=BeV;c[4]=Be6;c[5]=Bff;c[6]=Bfh;c[7]=Bfe;c[8]=Bfi;c[9]=Bfg;c[10]=BgZ;c[11]=Bg0;BiQ=b;}
function Ws(){Gc.call(this);}
var BiR=null;function BbJ(){BbJ=Bt(Ws);AT$();}
function NK(a,b){var c=new Ws();ANG(c,a,b);return c;}
function ANG(a,b,c){BbJ();Mi(a,b,3,c,BiR);}
function AT$(){var b,c;b=J(P,4);c=b.data;L();c[0]=Be1;c[1]=Bfj;c[2]=Be2;c[3]=BgX;BiR=b;}
function AE1(){Bb.call(this);}
function Bbc(a){var b=new AE1();AYt(b,a);return b;}
function AYt(a,b){Ds(a,b);a.eZ=1;a.fg=64;}
function AJK(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!h)f=f+(-1)|0;if(h==1)f=f+1|0;if(h==2)g=g+(-1)|0;if(h==3)g=g+1|0;if(h==4)e=e+(-1)|0;if(h==5)e=e+1|0;$p=1;case 1:$z=ACx(d,e,f,g);if(C()){break _;}i=$z;if(i){FM(b,1);return 1;}j=e+0.5;k=f+0.5;l=g+0.5;BB();Ex(d,j,k,l,B(280),1.0,N(BhJ)*0.4000000059604645+0.800000011920929);L();h=Bgp.b;$p
=2;case 2:APy(d,e,f,g,h);if(C()){break _;}FM(b,1);return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function LN(){Bb.call(this);this.zZ=0;}
function OB(a,b){var c=new LN();ZY(c,a,b);return c;}
function ZY(a,b,c){Ds(a,b);a.zZ=c;a.eZ=1;}
function P$(a,b,c,d){b.p=b.p-1|0;UR(d,a.zZ);return b;}
function AOW(){Bb.call(this);}
function Baj(a){var b=new AOW();A2q(b,a);return b;}
function A2q(a,b){Ds(a,b);a.eZ=1;}
function AGC(a,b,c,d){var e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=d.K;BB();if(!AGQ(e,Bgd.cW))return b;Dh(c,d,B(225),1.0,1.0/(N(BhJ)*0.4000000059604645+0.800000011920929));e=ATa(c,d);$p=1;case 1:AOj(c,e);if(C()){break _;}return b;default:E$();}}C3().s(a,b,c,d,e,$p);}
function ALb(){Bb.call(this);this.z4=0;}
function Nz(a,b){var c=new ALb();A$Q(c,a,b);return c;}
function A$Q(a,b,c){Ds(a,b);a.eZ=1;a.fg=32<<c;a.z4=4+(c*2|0)|0;}
function A0x(a,b,c){return 1.5;}
function A7U(a,b,c){FM(b,1);}
function AX6(a,b,c,d,e,f){FM(b,2);}
function A2B(a,b){return a.z4;}
function AOe(){LN.call(this);}
function BcE(a,b){var c=new AOe();A23(c,a,b);return c;}
function A23(a,b,c){ZY(a,b,c);}
function APx(a,b,c,d){P$(a,b,c,d);b=new Cd;BB();DD(b,Bh6);return b;}
function ANA(){Bb.call(this);}
function Nw(a,b){var c=new ANA();ATN(c,a,b);return c;}
function ATN(a,b,c){Ds(a,b);a.eZ=1;a.fg=32<<c;}
function AQU(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACx(d,e,f,g);if(C()){break _;}i=$z;h=f+1|0;$p=2;case 2:a:{$z=AB2(d,e,h,g);if(C()){break _;}j=$z;if(!j.dw()){L();if(i==BeR.b)break a;}L();if(i!=BeS.b)return 0;}L();k=Bg3;l=e;m
=l+0.5;n=f;o=n+0.5;p=g;Ex(d,m,o,p+0.5,Kg(k.gK),(k.gK.oR+1.0)/2.0,k.gK.pO*0.800000011920929);h=k.b;$p=3;case 3:APy(d,e,f,g,h);if(C()){break _;}FM(b,1);if(!E(d.q,8)&&i==BeR.b){q=1;r=0;m=n+1.2000000476837158;if(r<q){s=N(d.q)*0.699999988079071+0.15000000596046448;n=N(d.q)*0.699999988079071+0.15000000596046448;t=new E9;o=l+s;u=p+n;c=new Cd;BB();DD(c,BhC);He(t,d,o,m,u,c);t.hb=10;$p=4;continue _;}}return 1;case 4:AOj(d,t);if(C()){break _;}r=r+1|0;if(r>=q)return 1;s=N(d.q)*0.699999988079071+0.15000000596046448;n=N(d.q)
*0.699999988079071+0.15000000596046448;t=new E9;o=l+s;u=p+n;c=new Cd;BB();DD(c,BhC);He(t,d,o,m,u,c);t.hb=10;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function VX(){Bb.call(this);this.zN=0;}
function BiS(a,b){var c=new VX();AHJ(c,a,b);return c;}
function AHJ(a,b,c){Ds(a,b);a.zN=c;}
function AFm(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(h!=1)return 0;$p=1;case 1:$z=ACx(d,e,f,g);if(C()){break _;}i=$z;L();if(i!=Bg3.b)return 0;f=f+1|0;h=a.zN;$p=2;case 2:APy(d,e,f,g,h);if(C()){break _;}b.p=b.p-1|0;return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function F5(){var a=this;Bb.call(a);a.H9=0;a.zY=0;a.zd=0;a.BF=0;}
var BiT=null;var BiU=null;function Db(a,b,c,d){var e=new F5();ABq(e,a,b,c,d);return e;}
function ABq(a,b,c,d,e){Ds(a,b);a.H9=c;a.zY=e;a.BF=d;a.zd=BiT.data[e];a.fg=(BiU.data[e]*3|0)<<c;a.eZ=1;}
function ARL(){var b,c;b=$rt_createIntArray(4);c=b.data;c[0]=3;c[1]=8;c[2]=6;c[3]=3;BiT=b;b=$rt_createIntArray(4);c=b.data;c[0]=11;c[1]=16;c[2]=15;c[3]=13;BiU=b;}
function XW(){Bb.call(this);}
function Bah(a){var b=new XW();AZb(b,a);return b;}
function AZb(a,b){Ds(a,b);a.fg=64;}
function ACe(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!h)return 0;if(h==1)return 0;i=0;if(h==4)i=1;if(h==3)i=2;if(h==5)i=3;j=new IH;FC(j,d);j.rx=0;j.dJ=0;j.c4=0.0;D1(j,0.5,0.5);j.nr=e;j.EC=f;j.ny=g;c=Ci();k=BiV.oZ().data;e=k.length;f=0;if(f<e){l=k[f];j.dT=l;JP(j,i);$p=1;continue _;}if(c.s>0)j.dT=Y(c,E(j.m,c.s));JP(j,i);$p=2;continue _;case 1:$z
=ZK(j);if(C()){break _;}g=$z;if(g)U(c,l);f=f+1|0;if(f<e){l=k[f];j.dT=l;JP(j,i);continue _;}if(c.s>0)j.dT=Y(c,E(j.m,c.s));JP(j,i);$p=2;case 2:$z=ZK(j);if(C()){break _;}e=$z;if(!e)return 1;$p=3;case 3:AOj(d,j);if(C()){break _;}b.p=b.p-1|0;return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function AHr(){Bb.call(this);}
function Bcj(a){var b=new AHr();A7H(b,a);return b;}
function A7H(a,b){Ds(a,b);a.fg=64;a.eZ=1;}
function Yf(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(h!=1)return 0;f=f+1|0;L();i=Bg6;$p=1;case 1:$z=i.fT(d,e,f,g);if(C()){break _;}h=$z;if(!h)return 0;h=Bg6.b;$p=2;case 2:APy(d,e,f,g,h);if(C()){break _;}h=K((c.u+180.0)*16.0/360.0-0.5)&15;$p=3;case 3:AKw(d,e,f,g,h);if(C()){break _;}b.p=b.p-1|0;$p=4;case 4:$z=ANz(d,e,f,g);if(C()){break _;}b=$z;b=b;$p=5;case 5:AI_(c,b);if
(C()){break _;}return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AJd(){Bb.call(this);}
function A_T(a){var b=new AJd();A29(b,a);return b;}
function A29(a,b){Ds(a,b);a.fg=64;a.eZ=1;}
function AEa(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(h!=1)return 0;f=f+1|0;L();i=Bg7;$p=1;case 1:$z=i.fT(d,e,f,g);if(C()){break _;}h=$z;if(!h)return 0;j=K((c.u+180.0)*4.0/360.0-0.5)&3;k=0;l=0;if(!j)l=1;if(j==1)k=(-1);if(j==2)l=(-1);if(j==3)k=1;m=e-k|0;n=g-l|0;$p=2;case 2:$z
=AAD(d,m,f,n);if(C()){break _;}h=$z;h=!h?0:1;o=f+1|0;$p=3;case 3:$z=AAD(d,m,o,n);if(C()){break _;}p=$z;p=h+(!p?0:1)|0;h=e+k|0;k=g+l|0;$p=4;case 4:$z=AAD(d,h,f,k);if(C()){break _;}l=$z;l=!l?0:1;$p=5;case 5:$z=AAD(d,h,o,k);if(C()){break _;}q=$z;q=l+(!q?0:1)|0;$p=6;case 6:$z=ACx(d,m,f,n);if(C()){break _;}l=$z;if(l!=Bg7.b){$p=7;continue _;}n=1;$p=8;continue _;case 7:$z=ACx(d,m,o,n);if(C()){break _;}m=$z;n=m==Bg7.b?1:0;$p=8;case 8:$z=ACx(d,h,f,k);if(C()){break _;}l=$z;if(l!=Bg7.b){$p=9;continue _;}r=0;if(n&&!1)r
=1;else if(q>p)r=1;if(r)j=((j-1|0)&3)+4|0;h=Bg7.b;$p=10;continue _;case 9:$z=ACx(d,h,o,k);if(C()){break _;}h=$z;m=h==Bg7.b?1:0;r=0;if(n&&!m)r=1;else if(q>p)r=1;if(r)j=((j-1|0)&3)+4|0;h=Bg7.b;$p=10;case 10:APy(d,e,f,g,h);if(C()){break _;}$p=11;case 11:AKw(d,e,f,g,j);if(C()){break _;}f=Bg7.b;$p=12;case 12:APy(d,e,o,g,f);if(C()){break _;}f=j+8|0;$p=13;case 13:AKw(d,e,o,g,f);if(C()){break _;}b.p=b.p-1|0;return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function ARN(){Bb.call(this);this.pr=0;}
function AP0(a,b){var c=new ARN();A0h(c,a,b);return c;}
function A0h(a,b,c){Ds(a,b);a.eZ=1;a.fg=64;a.pr=c;}
function AHZ(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=d.T+(d.I-d.T)*1.0;f=d.P+(d.u-d.P)*1.0;g=BY(d.bS+(d.d-d.bS)*1.0,d.cS+(d.j-d.cS)*1.0,d.bR+(d.e-d.bR)*1.0);h= -f*0.01745329238474369-3.1415927410125732;i=BC(h);h=Bq(h);j= -e*0.01745329238474369;k= -BC(j);l=Dk(g,h*k*5.0,Bq(j)
*5.0,i*k*5.0);m=a.pr?0:1;$p=1;case 1:$z=AE3(c,g,l,m);if(C()){break _;}n=$z;if(n===null)return b;if(n.k_)return b;m=n.h_;o=n.ia;p=n.ib;if(!a.pr){$p=2;continue _;}if(!n.hM)o=o+(-1)|0;if(n.hM==1)o=o+1|0;if(n.hM==2)p=p+(-1)|0;if(n.hM==3)p=p+1|0;if(n.hM==4)m=m+(-1)|0;if(n.hM==5)m=m+1|0;$p=8;continue _;case 2:$z=AB2(c,m,o,p);if(C()){break _;}g=$z;if(g!==BfQ){$p=3;continue _;}$p=4;continue _;case 3:$z=AB2(c,m,o,p);if(C()){break _;}d=$z;if(d!==BfR)return b;$p=5;continue _;case 4:$z=AEK(c,m,o,p);if(C()){break _;}q=$z;if
(q){$p=3;continue _;}q=0;$p=6;continue _;case 5:$z=AEK(c,m,o,p);if(C()){break _;}q=$z;if(q)return b;q=0;$p=7;continue _;case 6:APy(c,m,o,p,q);if(C()){break _;}b=new Cd;BB();DD(b,BiF);return b;case 7:APy(c,m,o,p,q);if(C()){break _;}b=new Cd;BB();DD(b,BiG);return b;case 8:$z=ACx(c,m,o,p);if(C()){break _;}q=$z;if(q){$p=10;continue _;}q=a.pr;r=0;$p=9;case 9:AIZ(c,m,o,p,q,r);if(C()){break _;}b=new Cd;BB();DD(b,BiE);return b;case 10:$z=AB2(c,m,o,p);if(C()){break _;}d=$z;if(d.dw())return b;q=a.pr;r=0;$p=9;continue _;default:
E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function AO_(){Bb.call(this);}
function BbN(a){var b=new AO_();AXa(b,a);return b;}
function AXa(a,b){Ds(a,b);a.eZ=1;}
function AC9(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACx(d,e,f,g);if(C()){break _;}i=$z;L();if(i!=Bg8.b)return 0;c=new Gi;j=e+0.5;k=f+0.5;l=g+0.5;FC(c,d);c.Bs=J(Cd,36);c.iU=0;c.kD=0;c.oP=1;c.kO=0;c.mE=1;D1(c,0.9800000190734863,0.699999988079071);c.c4=c.eO/2.0;c.i$=0;CT(c,j,k+c.c4,l);c.g=0.0;c.i=0.0;c.h=0.0;c.bS=j;c.cS=k;c.bR
=l;$p=2;case 2:AOj(d,c);if(C()){break _;}b.p=b.p-1|0;return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ARf(){Bb.call(this);}
function BcY(a){var b=new ARf();AWB(b,a);return b;}
function AWB(a,b){Ds(a,b);a.eZ=1;a.fg=64;}
function AGA(a,b,c){var d;if(c instanceof ID){d=c;if(!d.qA){d.qA=1;b.p=b.p-1|0;}}}
function AWn(a,b,c){AGA(a,b,c);}
function N4(){}
function AGj(){var a=this;D.call(a);a.d3=Long_ZERO;a.eU=Long_ZERO;}
function A9T(){var a=new AGj();A0f(a);return a;}
function A0f(a){a.d3=Long_fromInt(1);a.eU=Long_ZERO;}
function ASY(a,b){a.d3=Long_and(b,Long_fromInt(65535));a.eU=Long_and(Long_shr(b,16),Long_fromInt(65535));}
function AZx(a){a.d3=Long_fromInt(1);a.eU=Long_ZERO;}
function AT4(a){return Long_or(Long_shl(a.eU,16),a.d3);}
function A8h(a,b,c,d){var e,f,g,h,i,j;if(d==1){b=b.data;a.d3=Long_add(a.d3,Long_fromInt(b[c]&255));a.eU=Long_add(a.eU,a.d3);a.d3=Long_rem(a.d3,Long_fromInt(65521));a.eU=Long_rem(a.eU,Long_fromInt(65521));return;}e=d/5552|0;f=d%5552|0;while(true){g=e+(-1)|0;if(e<=0)break;h=5552;while(true){e=h+(-1)|0;if(h<=0)break;i=b.data;j=a.d3;d=c+1|0;a.d3=Long_add(j,Long_fromInt(i[c]&255));a.eU=Long_add(a.eU,a.d3);h=e;c=d;}a.d3=Long_rem(a.d3,Long_fromInt(65521));a.eU=Long_rem(a.eU,Long_fromInt(65521));e=g;}while(true){d=
f+(-1)|0;if(f<=0)break;i=b.data;j=a.d3;e=c+1|0;a.d3=Long_add(j,Long_fromInt(i[c]&255));a.eU=Long_add(a.eU,a.d3);f=d;c=e;}a.d3=Long_rem(a.d3,Long_fromInt(65521));a.eU=Long_rem(a.eU,Long_fromInt(65521));}
function Sf(){BD.call(this);}
function BiW(){var a=new Sf();A6F(a);return a;}
function A6F(a){O(a);}
function Ns(){D.call(this);this.GG=null;}
var Bgn=null;var BiX=null;function AVC(a){var b=new Ns();AH6(b,a);return b;}
function AH6(a,b){a.GG=b;}
function ASo(){Bgn=AVC(B(281));BiX=AVC(B(282));}
function J2(){}
function LK(){var a=this;D.call(a);a.gc=null;a.e6=null;}
function A41(a,b){var c,d;if(a===b)return 1;if(!So(b,J2))return 0;a:{b:{c:{c=b;if(a.gc===null){if(c.gc!==null)break c;}else if(!a.gc.eo(c.gc))break c;if(a.e6===null){if(c.e6!==null)break c;break b;}if(a.e6.eo(c.e6))break b;}d=0;break a;}d=1;}return d;}
function AWU(a){return a.gc;}
function A2h(a){return a.e6;}
function A1X(a){return (a.gc===null?0:a.gc.fl())^(a.e6===null?0:a.e6.fl());}
function IG(){var a=this;LK.call(a);a.pW=0;a.eE=null;}
function BO(){B6.call(this);}
function BiY(){var a=new BO();AUx(a);return a;}
function AUx(a){O(a);}
function I0(){BO.call(this);}
function BiZ(){var a=new I0();A0Y(a);return a;}
function A0Y(a){O(a);}
function GH(){}
function Wz(){D.call(this);this.zT=null;}
function AI4(a){var b,c,d,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.zT;try{Bfo=Bfo+1|0;Fv(b);$p=1;continue _;}catch($$e){$$je=Bg($$e);c=$$je;}d=b.mS;$p=2;continue _;case 1:a:{try{b.kt();if(C()){break _;}}catch($$e){$$je=Bg($$e);c=$$je;break a;}c=b.mS;$p=3;continue _;}d=b.mS;$p=2;case 2:AD3(d);if(C()){break _;}a:{try{Xg(b.mS);NW(d);break a;}catch($$e){$$je=Bg($$e);b=$$je;}NW(d);M(b);}b.wE=0;Bfo=Bfo-1|0;Fv(Bfm);M(c);case 3:AD3(c);if
(C()){break _;}a:{try{Xg(b.mS);NW(c);break a;}catch($$e){$$je=Bg($$e);b=$$je;}NW(c);M(b);}b.wE=0;Bfo=Bfo-1|0;Fv(Bfm);return;default:E$();}}C3().s(a,b,c,d,$p);}
function FH(){BW.call(this);}
function Bi0(){var a=new FH();AW7(a);return a;}
function AW7(a){O(a);}
function EQ(){var a=this;D.call(a);a.hT=null;a.vx=0.0;a.vy=0.0;}
function G5(a,b,c,d,e){var f=new EQ();ASL(f,a,b,c,d,e);return f;}
function ASL(a,b,c,d,e,f){a.hT=Wt(b,c,d);a.vx=e;a.vy=f;}
function Ja(a,b,c){var d;d=new EQ;d.hT=a.hT;d.vx=b;d.vy=c;return d;}
function Fy(){var a=this;D.call(a);a.hB=null;a.E1=0;}
function Bi1(a,b,c,d,e){var f=new Fy();Hj(f,a,b,c,d,e);return f;}
function Hj(a,b,c,d,e,f){var g,h,i,j,k,l;g=b.data;a.E1=0;a.hB=b;a.E1=g.length;h=g[0];i=e/64.0-0.0015625000232830644;j=d/32.0+0.0031250000465661287;g[0]=Ja(h,i,j);h=g[1];k=c/64.0+0.0015625000232830644;g[1]=Ja(h,k,j);h=g[2];l=f/32.0-0.0031250000465661287;g[2]=Ja(h,k,l);g[3]=Ja(g[3],i,l);}
function ACW(a){var b,c,d;b=J(EQ,a.hB.data.length);c=b.data;d=0;while(d<a.hB.data.length){c[d]=a.hB.data[(a.hB.data.length-d|0)-1|0];d=d+1|0;}a.hB=b;}
function APE(a,b,c){var d,e,f,g;d=Qb(a.hB.data[1].hT,a.hB.data[0].hT);e=CD(ABU(Qb(a.hB.data[1].hT,a.hB.data[2].hT),d));Bz(b);Cj(e.x,e.z,e.w);f=0;while(f<4){g=a.hB.data[f];G(b,g.hT.x*c,g.hT.z*c,g.hT.w*c,g.vx,g.vy);f=f+1|0;}Br(b);}
function LI(){var a=this;D.call(a);a.bP=0;a.ow=0;a.rU=Long_ZERO;a.bv=Long_ZERO;a.oG=0;a.d0=0;a.x0=0;a.iD=null;a.E=null;a.eM=0;a.iJ=0;a.xM=null;a.cJ=null;a.fW=null;}
var Bi2=null;function AFK(a){var b;if(a.E===null)return (-2);b=a.E;a.E.nt=Long_ZERO;b.G=Long_ZERO;a.E.b9=null;a.bP=14;a.iJ=(-1);JG(a.iD);return 0;}
function AFQ(a){if(a.iD!==null)SY(a.iD);return 0;}
function XC(a,b){var c,d,e,f;a.E.b9=null;a.iD=null;a.d0=0;if(b<0)b= -b;else if(b&1073741824){a.d0=4;b=b&(-1073741825);if(b<48)b=b&15;}else if(b&(-32)){a.d0=4;b=b&15;}else{a.d0=(b>>4)+1|0;if(b<48)b=b&15;}if(b>=8&&b<=15){if(a.iD!==null&&a.x0!=b){SY(a.iD);a.iD=null;}a.x0=b;c=new KD;d=a.E;b=1<<b;c.sg=$rt_createIntArray(1);c.oF=$rt_createIntArray(1);c.m1=$rt_createIntArray(1);c.mZ=$rt_createIntArray(1);c.vO=J($rt_arraycls($rt_intcls()),1);c.vP=J($rt_arraycls($rt_intcls()),1);c.vb=$rt_createIntArray(1);c.vi=$rt_createIntArray(1);c.w9
=Baz();c.y=d;e=new LA;f=c.y;e.k6=0;e.bc=f;e.C=c;c.pH=e;c.kn=$rt_createIntArray(4320);c.c0=$rt_createByteArray(b);c.cQ=b;c.rm=d.jy.d0?1:0;c.dL=0;JG(c);a.iD=c;AFK(a);return 0;}AFQ(a);return (-2);}
function AGE(a,b){var c,d,e,f,g,h,i,$$je;if(a.E!==null&&a.E.cf!==null){c=b!=4?0:(-5);d=(-5);a:{b:{c:{d:{e:{f:{g:{h:{i:while(true){j:{k:{l:{m:{n:{o:{p:{q:{r:{s:{t:{u:{v:{w:{switch(a.bP){case 6:a.bP=13;a.E.b9=B(283);a.oG=0;return (-2);case 7:d=Zp(a.iD,d);if(d==(-3)){a.bP=13;a.oG=0;continue i;}if(!d)d=c;if(d!=1)break i;a.rU=a.E.f9.yD();JG(a.iD);if(!a.d0){a.bP=12;d=c;continue i;}a.bP=8;d=c;break w;case 12:break e;case 13:return (-3);case 14:break r;case 23:try{d=F9(a,2,d,c);}catch($$e){$$je=Bg($$e);if($$je instanceof DY)
{e=$$je;return e.hK;}else{throw $$e;}}a.eM=a.bv.lo&65535;if((a.eM&255)!=8){a.E.b9=B(284);a.bP=13;continue i;}if(a.eM&57344){a.E.b9=B(285);a.bP=13;continue i;}if(a.eM&512)In(a,2,a.bv);a.bP=16;break p;case 2:break d;case 3:break c;case 4:break b;case 5:c=d;break a;case 8:break w;case 9:break v;case 10:break u;case 11:break t;case 15:break s;case 16:break p;case 17:break o;case 18:break n;case 19:break q;case 20:break l;case 21:break k;case 22:break;default:return (-2);}break j;}if(!a.E.N)return d;e=a.E;e.N=e.N
-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));f=a.E.cf.data;e=a.E;b=e.B;e.B=b+1|0;a.bv=Long_and(Long_fromInt((f[b]&255)<<24),new Long(4278190080, 0));a.bP=9;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cf.data;e=a.E;b=e.B;e.B=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt((f[b]&255)<<16),Long_fromInt(16711680)));a.bP=10;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cf.data;e=a.E;b=e.B;e.B=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt((f[b]
&255)<<8),Long_fromInt(65280)));a.bP=11;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cf.data;e=a.E;b=e.B;e.B=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt(f[b]),Long_fromInt(255)));if(a.eM)a.bv=Long_and(Long_or(Long_or(Long_or(Long_shr(Long_and(a.bv,Long_fromInt(-16777216)),24),Long_shr(Long_and(a.bv,Long_fromInt(16711680)),8)),Long_shl(Long_and(a.bv,Long_fromInt(65280)),8)),Long_shl(Long_and(a.bv,Long_fromInt(65535)),24)),new Long(4294967295, 0));if(a.rU.lo!=
a.bv.lo)a.E.b9=B(286);else if(a.eM&&a.cJ!==null)a.cJ.HB=a.bv;a.bP=15;d=c;}if(!(a.d0&&a.eM)){if(a.E.b9===null)break f;if(!DC(a.E.b9,B(286)))break f;a.bP=13;a.oG=5;continue i;}try{d=F9(a,4,d,c);}catch($$e){$$je=Bg($$e);if($$je instanceof DY){e=$$je;return e.hK;}else{throw $$e;}}if(a.E.b9!==null&&DC(a.E.b9,B(286))){a.bP=13;a.oG=5;continue i;}if(Long_eq(a.bv,Long_and(a.E.nt,new Long(4294967295, 0)))){a.E.b9=null;break f;}a.E.b9=B(287);a.bP=13;continue i;}if(!a.d0){a.bP=7;continue i;}try{d=F9(a,2,d,c);}catch($$e)
{$$je=Bg($$e);if($$je instanceof DY){e=$$je;return e.hK;}else{throw $$e;}}if(!(a.d0!=4&&!(a.d0&2))&&Long_eq(a.bv,Long_fromInt(35615))){if(a.d0==4)a.d0=2;a.E.f9=AWk();In(a,2,a.bv);if(a.cJ===null)a.cJ=Bcp();a.bP=23;continue i;}if(a.d0&2){a.bP=13;a.E.b9=B(288);continue i;}a.eM=0;a.ow=a.bv.lo&255;h=Long_shr(a.bv,8).lo&255;if(!(a.d0&1&&!(((a.ow<<8)+h|0)%31|0))&&(a.ow&15)!=8){if(a.d0!=4){a.bP=13;a.E.b9=B(288);continue i;}e=a.E;e.B=e.B-2|0;e=a.E;e.N=e.N+2|0;e=a.E;e.G=Long_sub(e.G,Long_fromInt(2));a.d0=0;a.bP=7;continue i;}if
((a.ow&15)!=8){a.bP=13;a.E.b9=B(284);continue i;}if(a.d0==4)a.d0=1;if(((a.ow>>4)+8|0)>a.x0){a.bP=13;a.E.b9=B(289);continue i;}a.E.f9=A9T();if(h&32){a.bP=2;break d;}a.bP=7;continue i;}break m;}try{d=F9(a,4,d,c);}catch($$e){$$je=Bg($$e);if($$je instanceof DY){e=$$je;return e.hK;}else{throw $$e;}}if(a.cJ!==null)a.cJ.HU=a.bv;if(a.eM&512)In(a,4,a.bv);a.bP=17;}try{d=F9(a,2,d,c);}catch($$e){$$je=Bg($$e);if($$je instanceof DY){e=$$je;return e.hK;}else{throw $$e;}}if(a.cJ!==null){a.cJ.I7=a.bv.lo&255;a.cJ.A_=a.bv.lo>>
8&255;}if(a.eM&512)In(a,2,a.bv);a.bP=18;}if(a.eM&1024){try{d=F9(a,2,d,c);}catch($$e){$$je=Bg($$e);if($$je instanceof DY){e=$$je;return e.hK;}else{throw $$e;}}if(a.cJ!==null)a.cJ.ps=$rt_createByteArray(a.bv.lo&65535);if(a.eM&512)In(a,2,a.bv);}else if(a.cJ!==null)a.cJ.ps=null;a.bP=19;}if(a.eM&1024)x:{try{d=ANR(a,d,c);if(a.cJ===null)break x;f=Ig(a.fW);i=f.data;a.fW=null;b=i.length;if(b!=a.cJ.ps.data.length){a.E.b9=B(290);a.bP=13;continue i;}Di(f,0,a.cJ.ps,0,b);break x;}catch($$e){$$je=Bg($$e);if($$je instanceof DY)
{e=$$je;return e.hK;}else{throw $$e;}}}else if(a.cJ!==null)a.cJ.ps=null;a.bP=20;}y:{if(a.eM&2048){z:{try{d=PL(a,d,c);if(a.cJ===null)break z;a.cJ.yR=Ig(a.fW);break z;}catch($$e){$$je=Bg($$e);if($$je instanceof DY){e=$$je;break h;}else{throw $$e;}}}try{a.fW=null;break y;}catch($$e){$$je=Bg($$e);if($$je instanceof DY){e=$$je;break h;}else{throw $$e;}}}else if(a.cJ!==null)a.cJ.yR=null;}a.bP=21;}ba:{if(a.eM&4096){bb:{try{d=PL(a,d,c);if(a.cJ===null)break bb;a.cJ.AB=Ig(a.fW);break bb;}catch($$e){$$je=Bg($$e);if($$je instanceof DY)
{e=$$je;break g;}else{throw $$e;}}}try{a.fW=null;break ba;}catch($$e){$$je=Bg($$e);if($$je instanceof DY){e=$$je;break g;}else{throw $$e;}}}else if(a.cJ!==null)a.cJ.AB=null;}a.bP=22;}if(a.eM&512){try{d=F9(a,2,d,c);}catch($$e){$$je=Bg($$e);if($$je instanceof DY){e=$$je;return e.hK;}else{throw $$e;}}if(a.cJ!==null)a.cJ.JU=Long_and(a.bv,Long_fromInt(65535)).lo;if(Long_ne(a.bv,Long_and(a.E.f9.yD(),Long_fromInt(65535)))){a.bP=13;a.E.b9=B(291);a.oG=5;continue;}}a.E.f9=AWk();a.bP=7;}return d;}return e.hK;}return e.hK;}a.bP
=12;}return 1;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));f=a.E.cf.data;e=a.E;d=e.B;e.B=d+1|0;a.bv=Long_and(Long_fromInt((f[d]&255)<<24),new Long(4278190080, 0));a.bP=3;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cf.data;e=a.E;d=e.B;e.B=d+1|0;a.bv=Long_add(g,Long_and(Long_fromInt((f[d]&255)<<16),Long_fromInt(16711680)));a.bP=4;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cf.data;e
=a.E;b=e.B;e.B=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt((f[b]&255)<<8),Long_fromInt(65280)));a.bP=5;}if(!a.E.N)return c;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cf.data;e=a.E;b=e.B;e.B=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt(f[b]),Long_fromInt(255)));a.E.f9.E2(a.bv);a.bP=6;return 2;}if(b==4&&a.bP==14)return 0;return (-2);}
function F9(a,b,c,d){var e,f,g,h;if(a.iJ==(-1)){a.iJ=b;a.bv=Long_ZERO;}while(true){if(a.iJ<=0){if(b==2)a.bv=Long_and(a.bv,Long_fromInt(65535));else if(b==4)a.bv=Long_and(a.bv,new Long(4294967295, 0));a.iJ=(-1);return c;}if(!a.E.N)break;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));f=a.bv;g=a.E.cf.data;e=a.E;h=e.B;e.B=h+1|0;a.bv=Long_or(f,Long_fromInt((g[h]&255)<<((b-a.iJ|0)*8|0)));a.iJ=a.iJ-1|0;c=d;}M(AG$(a,c));}
function PL(a,b,c){var d,e;if(a.fW===null)a.fW=A7B();while(true){if(!a.E.N)M(AG$(a,b));d=a.E;d.N=d.N-1|0;d=a.E;d.G=Long_add(d.G,Long_fromInt(1));e=a.E.cf.data[a.E.B];if(e)Ru(a.fW,a.E.cf,a.E.B,1);a.E.f9.kL(a.E.cf,a.E.B,1);d=a.E;d.B=d.B+1|0;if(!e)break;b=c;}return c;}
function ANR(a,b,c){var d;if(a.fW===null)a.fW=A7B();while(Long_gt(a.bv,Long_ZERO)){if(!a.E.N)M(AG$(a,b));d=a.E;d.N=d.N-1|0;d=a.E;d.G=Long_add(d.G,Long_fromInt(1));Ru(a.fW,a.E.cf,a.E.B,1);a.E.f9.kL(a.E.cf,a.E.B,1);d=a.E;d.B=d.B+1|0;a.bv=Long_sub(a.bv,Long_fromInt(1));b=c;}return b;}
function In(a,b,c){var d;d=0;while(d<b){a.xM.data[d]=Long_and(c,Long_fromInt(255)).lo<<24>>24;c=Long_shr(c,8);d=d+1|0;}a.E.f9.kL(a.xM,0,b);}
function AOK(){var b,c;b=$rt_createByteArray(4);c=b.data;c[0]=0;c[1]=0;c[2]=(-1);c[3]=(-1);Bi2=b;}
function PQ(){E3.call(this);}
function Bi3(){var a=new PQ();A6L(a);return a;}
function A6L(a){return;}
function A59(a,b){$rt_putStderr(b);}
function Kj(){var a=this;D.call(a);a.x=0.0;a.z=0.0;a.w=0.0;}
var Bi4=null;var BeN=0;function Wt(b,c,d){var e;e=new Kj;if(b===-0.0)b=0.0;if(c===-0.0)c=0.0;if(d===-0.0)d=0.0;e.x=b;e.z=c;e.w=d;return e;}
function BY(b,c,d){var e,f;if(BeN>=Bi4.s)U(Bi4,Wt(0.0,0.0,0.0));e=Bi4;f=BeN;BeN=f+1|0;e=Y(e,f);e.x=b;e.z=c;e.w=d;return e;}
function Qb(a,b){return BY(b.x-a.x,b.z-a.z,b.w-a.w);}
function CD(a){var b;b=Ce(a.x*a.x+a.z*a.z+a.w*a.w);return b<1.0E-4?BY(0.0,0.0,0.0):BY(a.x/b,a.z/b,a.w/b);}
function ABU(a,b){return BY(a.z*b.w-a.w*b.z,a.w*b.x-a.x*b.w,a.x*b.z-a.z*b.x);}
function Dk(a,b,c,d){return BY(a.x+b,a.z+c,a.w+d);}
function DI(a,b){var c,d,e;c=b.x-a.x;d=b.z-a.z;e=b.w-a.w;return Ce(c*c+d*d+e*e);}
function Ey(a,b){var c,d,e;c=b.x-a.x;d=b.z-a.z;e=b.w-a.w;return c*c+d*d+e*e;}
function ABY(a,b,c,d){var e,f,g;e=b-a.x;f=c-a.z;g=d-a.w;return e*e+f*f+g*g;}
function HR(a){return Ce(a.x*a.x+a.z*a.z+a.w*a.w);}
function KM(a,b,c){var d,e,f,g;d=b.x-a.x;e=b.z-a.z;f=b.w-a.w;if(d*d<1.0000000116860974E-7)return null;g=(c-a.x)/d;return g>=0.0&&g<=1.0?BY(a.x+d*g,a.z+e*g,a.w+f*g):null;}
function JV(a,b,c){var d,e,f,g;d=b.x-a.x;e=b.z-a.z;f=b.w-a.w;if(e*e<1.0000000116860974E-7)return null;g=(c-a.z)/e;return g>=0.0&&g<=1.0?BY(a.x+d*g,a.z+e*g,a.w+f*g):null;}
function Kw(a,b,c){var d,e,f,g;d=b.x-a.x;e=b.z-a.z;f=b.w-a.w;if(f*f<1.0000000116860974E-7)return null;g=(c-a.w)/f;return g>=0.0&&g<=1.0?BY(a.x+d*g,a.z+e*g,a.w+f*g):null;}
function AQd(){Bi4=Ci();BeN=0;}
function AMp(){D.call(this);}
function Bi5(){var a=new AMp();ATB(a);return a;}
function ATB(a){return;}
function Gt(b){return Math.sin(b);}
function GG(b){return Math.cos(b);}
function Is(b){return Math.atan(b);}
function A3U(b){return Math.log(b);}
function Ed(b){return Math.sqrt(b);}
function Ne(b){return Math.ceil(b);}
function A2P(b,c){return Math.pow(b,c);}
function CR(b,c){return Math.atan2(b,c);}
function BP(){return A2r();}
function A2r(){return Math.random();}
function CB(b,c){if(b<c)c=b;return c;}
function DE(b,c){if(b>c)c=b;return c;}
function If(b){if(b<=0)b= -b;return b;}
function HZ(b){if(b<=0.0)b= -b;return b;}
function Jh(){D.call(this);this.GY=null;}
var Bi6=null;var Bf8=null;var BiJ=null;function AGR(a){var b=new Jh();API(b,a);return b;}
function API(a,b){a.GY=b;}
function AC8(){Bi6=AGR(B(292));Bf8=AGR(B(293));BiJ=AGR(B(294));}
function Lr(){LU.call(this);}
function Xp(a){return a.yB;}
function ABP(){var a=this;Lr.call(a);a.yB=0;a.yg=0;a.mi=null;}
function AZI(a,b,c,d,e,f){var g=new ABP();A2F(g,a,b,c,d,e,f);return g;}
function A2F(a,b,c,d,e,f,g){KO(a,c);a.bk=e;a.cy=f;a.yg=b;a.yB=g;a.mi=d;}
function AOQ(a,b){return a.mi.data[b+a.yg|0];}
function Vx(a,b,c){a.mi.data[b+a.yg|0]=c;}
function AY1(a){return 1;}
function AWh(a){return a.mi;}
function A16(a){return a.yB;}
function LQ(){var a=this;D.call(a);a.HA=null;a.uD=null;a.GC=0.0;a.BP=0.0;a.vw=null;a.uQ=null;a.m4=0;}
function ACS(a,b){var c;if(b!==null){a.vw=b;return a;}c=new Cc;Bl(c,B(295));M(c);}
function A1$(a,b){return;}
function AGX(a,b){var c;if(b!==null){a.uQ=b;return a;}c=new Cc;Bl(c,B(295));M(c);}
function A6B(a,b){return;}
function AJe(a,b,c,d){var e,f,g,h,$$je;a:{if(a.m4!=3){if(d)break a;if(a.m4!=2)break a;}b=new D2;O(b);M(b);}a.m4=!d?1:2;while(true){try{e=Y5(a,b,c);}catch($$e){$$je=Bg($$e);if($$je instanceof B6){f=$$je;M(A42(f));}else{throw $$e;}}if(JC(e)){if(!d)return e;g=Ct(b);if(g<=0)return e;e=Fh(g);}else if(IU(e))break;h=!Mu(e)?a.vw:a.uQ;b:{if(h!==Bf8){if(h===Bi6)break b;else return e;}if(Ct(c)<a.uD.data.length)return Bi7;UO(c,a.uD);}EN(b,b.bk+Lx(e)|0);}return e;}
function X1(a,b){var c;if(a.m4!=2&&a.m4!=4){b=new D2;O(b);M(b);}c=Bi8;if(c===Bi8)a.m4=3;return c;}
function A7t(a,b){return Bi8;}
function Oa(){var a=this;D.call(a);a.nw=0;a.qJ=0;}
var Bi8=null;var Bi7=null;function Zi(a,b){var c=new Oa();AKj(c,a,b);return c;}
function AKj(a,b,c){a.nw=b;a.qJ=c;}
function JC(a){return a.nw?0:1;}
function IU(a){return a.nw!=1?0:1;}
function NC(a){return !Qe(a)&&!Mu(a)?0:1;}
function Qe(a){return a.nw!=2?0:1;}
function Mu(a){return a.nw!=3?0:1;}
function Lx(a){var b;if(NC(a))return a.qJ;b=new Jp;O(b);M(b);}
function Fh(b){return Zi(2,b);}
function R9(a){var b,c;switch(a.nw){case 0:b=new P5;O(b);M(b);case 1:b=new SL;O(b);M(b);case 2:b=new R0;c=a.qJ;O(b);b.Bx=c;M(b);case 3:b=new P1;c=a.qJ;O(b);b.EO=c;M(b);default:}}
function AKR(){Bi8=Zi(0,0);Bi7=Zi(1,0);}
function Z$(){D.call(this);}
function A9Z(){return {};}
function PR(){}
function YE(){D.call(this);}
function KD(){var a=this;D.call(a);a.dL=0;a.pM=0;a.qa=0;a.f2=0;a.fB=null;a.sg=null;a.oF=null;a.m1=null;a.mZ=null;a.vO=null;a.vP=null;a.vb=null;a.vi=null;a.pH=null;a.tr=0;a.bK=0;a.bJ=0;a.kn=null;a.c0=null;a.cQ=0;a.bV=0;a.bl=0;a.rm=0;a.w9=null;a.y=null;}
var Bi9=null;var Bi$=null;function JG(a){a.dL=0;a.bK=0;a.bJ=0;a.bl=0;a.bV=0;if(a.rm)a.y.f9.l2();}
function Zp(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;c=a.y.B;d=a.y.N;e=a.bJ;f=a.bK;g=a.bl;h=g>=a.bV?a.cQ-g|0:(a.bV-g|0)-1|0;a:{b:{c:{d:{e:while(true){f:{g:{h:{i:{j:{switch(a.dL){case 2:break f;case 9:a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,(-3));case 0:break j;case 1:break;case 3:while(f<14){if(!d){a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cf.data;k=c+1|0;e=e|(j[c]&255)<<f;f
=f+8|0;c=k;}k=e&16383;a.qa=k;l=k&31;if(l>29)break d;k=k>>5&31;if(k>29)break d;k:{k=(258+l|0)+k|0;if(!(a.fB!==null&&a.fB.data.length>=k))a.fB=$rt_createIntArray(k);else{l=0;while(true){if(l>=k)break k;a.fB.data[l]=0;l=l+1|0;}}}e=e>>>14;f=f+(-14)|0;a.f2=0;a.dL=4;break i;case 4:break i;case 5:break h;case 6:break g;case 7:break b;case 8:break a;default:a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,(-2));}while(f<32){if(!d){a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,
Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cf.data;k=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=k;}k=(e^(-1))>>>16&65535;l=e&65535;if(k!=l){a.dL=9;a.y.b9=B(296);a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,(-3));}a.pM=l;f=0;a.dL=a.pM?2:!a.tr?0:7;e=f;continue e;}while(f<3){if(!d){a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cf.data;k=c+1|0;e=e|(j[c]&255)<<f;f
=f+8|0;c=k;}l:{m=e&7;a.tr=m&1;switch(m>>>1){case 0:k=e>>>3;l=f+(-3)|0;n=l&7;e=k>>>n;f=l-n|0;a.dL=1;break l;case 1:AEk(a.m1,a.mZ,a.vO,a.vP,a.y);W6(a.pH,a.m1.data[0],a.mZ.data[0],a.vO.data[0],0,a.vP.data[0],0);e=e>>>3;f=f+(-3)|0;a.dL=6;break l;case 2:e=e>>>3;f=f+(-3)|0;a.dL=3;break l;case 3:b=e>>>3;k=f+(-3)|0;a.dL=9;a.y.b9=B(297);a.bJ=b;a.bK=k;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,(-3));default:}}continue e;}while(a.f2<(4+(a.qa>>>10)|0)){while(f<3){if(!d){a.bJ=e;a.bK
=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cf.data;k=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=k;}o=a.fB.data;j=Bi$.data;k=a.f2;a.f2=k+1|0;o[j[k]]=e&7;e=e>>>3;f=f+(-3)|0;}while(a.f2<19){o=a.fB.data;j=Bi$.data;k=a.f2;a.f2=k+1|0;o[j[k]]=0;}a.sg.data[0]=7;k=AP2(a.w9,a.fB,a.sg,a.oF,a.kn,a.y);if(k){if(k==(-3)){a.fB=null;a.dL=9;}a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,k);}a.f2=0;a.dL=5;}while(true)
{k=a.qa;if(a.f2>=((258+(k&31)|0)+(k>>5&31)|0))break;k=a.sg.data[0];while(f<k){if(!d){a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cf.data;l=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=l;}k=a.kn.data[((a.oF.data[0]+(e&Bi9.data[k])|0)*3|0)+1|0];n=a.kn.data[((a.oF.data[0]+(e&Bi9.data[k])|0)*3|0)+2|0];l=R(n,16);if(l<0){e=e>>>k;f=f-k|0;j=a.fB.data;k=a.f2;a.f2=k+1|0;j[k]=n;}else{p=R(n,18);q=!p?7:n-14|0;p=p?3:11;while(f<(k+q|0)){if(!d){a.bJ=e;a.bK=
f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cf.data;n=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=n;}n=e>>>k;k=f-k|0;p=p+(n&Bi9.data[q])|0;e=n>>>q;f=k-q|0;h=a.f2;q=a.qa;if((h+p|0)>((258+(q&31)|0)+(q>>5&31)|0))break c;if(!l&&h<1)break c;k=l?0:a.fB.data[h-1|0];while(true){j=a.fB.data;l=h+1|0;j[h]=k;p=p+(-1)|0;if(!p)break;h=l;}a.f2=l;}}a.oF.data[0]=(-1);a.m1.data[0]=9;a.mZ.data[0]=6;k=a.qa;k=YH(a.w9,257+(k&31)|0,1+(k>>5&31)|0,a.fB,a.m1,a.mZ,a.vb,a.vi,a.kn,
a.y);if(k){if(k==(-3)){a.fB=null;a.dL=9;}a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,k);}W6(a.pH,a.m1.data[0],a.mZ.data[0],a.kn,a.vb.data[0],a.kn,a.vi.data[0]);a.dL=6;}a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;b=ABD(a.pH,b);if(b!=1)break e;b=0;AAO(a.pH,a.y);c=a.y.B;d=a.y.N;e=a.bJ;f=a.bK;g=a.bl;h=g>=a.bV?a.cQ-g|0:(a.bV-g|0)-1|0;if(a.tr){a.dL=7;break b;}a.dL=0;continue e;}if(!d){a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,
Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}if(!h){if(g==a.cQ&&a.bV){g=0;h=g>=a.bV?a.cQ-g|0:(a.bV-g|0)-1|0;}if(!h){a.bl=g;b=B5(a,b);g=a.bl;h=g>=a.bV?a.cQ-g|0:(a.bV-g|0)-1|0;if(g==a.cQ&&a.bV){g=0;h=g>=a.bV?a.cQ-g|0:(a.bV-g|0)-1|0;}if(!h){a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}}}b=0;k=a.pM;if(k>d)k=d;if(k>h)k=h;Di(a.y.cf,c,a.c0,g,k);c=c+k|0;d=d-k|0;g=g+k|0;h=h-k|0;k=a.pM-k|0;a.pM=k;if(k)continue;a.dL=!a.tr?0:7;}return B5(a,b);}a.dL=9;a.y.b9
=B(298);a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,(-3));}a.fB=null;a.dL=9;a.y.b9=B(299);a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,(-3));}a.bl=g;b=B5(a,b);g=a.bl;if(a.bV!=a.bl){a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}a.dL=8;}a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,1);}
function SY(a){JG(a);a.c0=null;a.kn=null;}
function B5(a,b){var c,d,e,f,g;c=a.y.pP;d=a.bV;e=(d>a.bl?a.cQ:a.bl)-d|0;if(e>a.y.id)e=a.y.id;if(e&&b==(-5))b=0;f=a.y;f.id=f.id-e|0;f=a.y;f.nt=Long_add(f.nt,Long_fromInt(e));if(a.rm&&e>0)a.y.f9.kL(a.c0,d,e);Di(a.c0,d,a.y.uY,c,e);c=c+e|0;g=d+e|0;if(g==a.cQ){if(a.bl==a.cQ)a.bl=0;d=a.bl-0|0;if(d>a.y.id)d=a.y.id;if(d&&b==(-5))b=0;f=a.y;f.id=f.id-d|0;f=a.y;f.nt=Long_add(f.nt,Long_fromInt(d));if(a.rm&&d>0)a.y.f9.kL(a.c0,0,d);Di(a.c0,0,a.y.uY,c,d);c=c+d|0;g=0+d|0;}a.y.pP=c;a.bV=g;return b;}
function AH4(){var b,c;b=$rt_createIntArray(17);c=b.data;c[0]=0;c[1]=1;c[2]=3;c[3]=7;c[4]=15;c[5]=31;c[6]=63;c[7]=127;c[8]=255;c[9]=511;c[10]=1023;c[11]=2047;c[12]=4095;c[13]=8191;c[14]=16383;c[15]=32767;c[16]=65535;Bi9=b;b=$rt_createIntArray(19);c=b.data;c[0]=16;c[1]=17;c[2]=18;c[3]=0;c[4]=8;c[5]=7;c[6]=9;c[7]=6;c[8]=10;c[9]=5;c[10]=11;c[11]=4;c[12]=12;c[13]=3;c[14]=13;c[15]=2;c[16]=14;c[17]=1;c[18]=15;Bi$=b;}
function NG(){LQ.call(this);}
function Y5(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createCharArray(CB(Ct(b),512));e=d.data;f=0;g=0;h=$rt_createByteArray(CB(Ct(c),512));i=h.data;a:{while(true){if((f+32|0)>g&&Fl(b)){j=f;while(j<g){e[j-f|0]=e[j];j=j+1|0;}k=g-f|0;g=CB(Ct(b)+k|0,e.length);O4(b,d,k,g-k|0);f=0;}if(!Fl(c)){l=!Fl(b)&&f>=g?Bi8:Bi7;break a;}k=CB(Ct(c),i.length);m=new Tz;m.yW=b;m.Dj=c;l=ACA(a,d,f,g,h,0,k,m);f=m.vL;if(l===null&&0==m.rO)l=Bi8;WY(c,h,0,m.rO);if(l!==null)break;}}EN(b,b.bk-(g-f|0)|0);return l;}
function PS(){NG.call(this);}
function ACA(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(N_(h,2))break a;i=Bi7;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Ot(l)){if((f+3|0)>g){j=j+(-1)|0;if(N_(h,3))break a;i=Bi7;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!Dt(l)){i=Fh(1);break a;}if
(j>=d){if(AAz(h))break a;i=Bi8;break a;}c=j+1|0;j=k[j];if(!DR(j)){j=c+(-2)|0;i=Fh(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(N_(h,4))break a;i=Bi7;break a;}k=e.data;n=EI(l,j);j=f+1|0;k[f]=(240|n>>18)<<24>>24;f=j+1|0;k[j]=(128|n>>12&63)<<24>>24;j=f+1|0;k[f]=(128|n>>6&63)<<24>>24;m=j+1|0;k[j]=(128|n&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.vL=j;h.rO=f;return i;}
function AOr(){D.call(this);}
function Bi_(){var a=new AOr();A2Q(a);return a;}
function A2Q(a){return;}
function APi(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(Bhg());}return b.data.length;}
function AEI(b,c){if(b===null){b=new EE;O(b);M(b);}if(b===F($rt_voidcls())){b=new Cc;O(b);M(b);}if(c>=0)return A1S(b.fX,c);b=new Xv;O(b);M(b);}
function A1S(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
function Gd(){var a=this;D.call(a);a.j1=null;a.j9=null;a.eR=null;a.fK=null;a.ln=null;a.ip=null;}
var Bja=null;var Bjb=null;var Bjc=null;var Bjd=null;var Bje=null;var Bjf=null;function Baz(){var a=new Gd();AHG(a);return a;}
function AHG(a){a.j1=null;a.j9=null;a.eR=null;a.fK=null;a.ln=null;a.ip=null;}
function NJ(a,b,c,d,e,f,g,h,i,j,k,l){var m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;m=0;n=d;while(true){o=b.data;p=a.eR.data;q=o[c+m|0];p[q]=p[q]+1|0;m=m+1|0;n=n+(-1)|0;if(!n)break;}if(a.eR.data[0]==d){b=h.data;f=i.data;b[0]=(-1);f[0]=0;return 0;}i=i.data;r=i[0];s=1;a:{while(true){if(s>15)break a;if(a.eR.data[s])break;s=s+1|0;}}if(r<s)r=s;t=15;b:{while(true){if(!t)break b;if(a.eR.data[t])break;t=t+(-1)|0;}}if(r>t)r=t;i[0]=r;u=1<<s;m=s;while(true){if(m>=t){v=u-a.eR.data[t]|0;if(v<0)return (-3);b=a.eR.data;b[t]
=b[t]+v|0;b=a.ip.data;u=0;b[1]=u;m=1;w=2;x=t;while(true){x=x+(-1)|0;if(!x)break;i=a.ip.data;u=u+a.eR.data[m]|0;i[w]=u;w=w+1|0;m=m+1|0;}m=0;w=0;while(true){x=o[c+w|0];if(x){i=l.data;b=a.ip.data;q=b[x];b[x]=q+1|0;i[q]=m;}w=w+1|0;m=m+1|0;if(m>=d)break;}u=a.ip.data[t];b=a.ip.data;m=0;b[0]=m;w=0;y=(-1);z= -r;a.ln.data[0]=0;ba=0;bb=0;c:while(true){if(s>t)return v&&t!=1?(-5):0;bc=a.eR.data[s];while(true){bd=bc+(-1)|0;if(!bc)break;n=bd+1|0;while(true){be=z+r|0;if(s<=be)break;y=y+1|0;x=t-be|0;if(x>r)x=r;d:{bc=s-be|0;c
=1<<bc;if(c>n){q=c-n|0;if(bc<x){c=s;while(true){bc=bc+1|0;if(bc>=x)break;d=q<<1;b=a.eR.data;c=c+1|0;if(d<=b[c])break d;q=d-a.eR.data[c]|0;}}}}b=k.data;bb=1<<bc;if((b[0]+bb|0)>1440)break c;i=a.ln.data;ba=b[0];i[y]=ba;b[0]=b[0]+bb|0;if(!y){h.data[0]=ba;z=be;continue;}a.ip.data[y]=m;a.fK.data[0]=bc<<24>>24;a.fK.data[1]=r<<24>>24;c=m>>>(be-r|0);i=a.fK.data;b=a.ln.data;q=y-1|0;i[2]=(ba-b[q]|0)-c|0;Di(a.fK,0,j,(a.ln.data[q]+c|0)*3|0,3);z=be;}b=a.fK.data;x=s-z|0;b[1]=x<<24>>24;if(w>=u)a.fK.data[0]=192;else{p=l.data;if
(p[w]>=e){i=g.data;o=f.data;a.fK.data[0]=((i[p[w]-e|0]+16|0)+64|0)<<24>>24;b=a.fK.data;d=w+1|0;b[2]=o[p[w]-e|0];w=d;}else{b=a.fK;b.data[0]=(p[w]>=256?96:0)<<24>>24;b=a.fK.data;d=w+1|0;b[2]=p[w];w=d;}}q=1<<x;c=m>>>z;while(c<bb){Di(a.fK,0,j,(ba+c|0)*3|0,3);c=c+q|0;}c=1<<(s-1|0);while(m&c){m=m^c;c=c>>>1;}m=m^c;x=(1<<z)-1|0;while((m&x)!=a.ip.data[y]){y=y+(-1)|0;z=z-r|0;x=(1<<z)-1|0;}bc=bd;}s=s+1|0;}return (-3);}q=u-a.eR.data[m]|0;if(q<0)break;m=m+1|0;u=q<<1;}return (-3);}
function AP2(a,b,c,d,e,f){var g;M3(a,19);a.j1.data[0]=0;g=NJ(a,b,0,19,19,null,null,d,c,e,a.j1,a.j9);if(g==(-3))f.b9=B(300);else if(!(g!=(-5)&&c.data[0])){f.b9=B(301);g=(-3);}return g;}
function YH(a,b,c,d,e,f,g,h,i,j){var k;M3(a,288);a.j1.data[0]=0;k=NJ(a,d,0,b,257,Bjc,Bjd,g,e,i,a.j1,a.j9);if(!k&&e.data[0]){M3(a,288);c=NJ(a,d,b,c,0,Bje,Bjf,h,f,i,a.j1,a.j9);if(!c&&!(!f.data[0]&&b>257))return 0;if(c==(-3))j.b9=B(302);else if(c==(-5)){j.b9=B(303);c=(-3);}else if(c!=(-4)){j.b9=B(304);c=(-3);}return c;}if(k==(-3))j.b9=B(305);else if(k!=(-4)){j.b9=B(306);k=(-3);}return k;}
function AEk(b,c,d,e,f){e=e.data;d=d.data;c=c.data;b.data[0]=9;c[0]=5;d[0]=Bja;e[0]=Bjb;return 0;}
function M3(a,b){var c;if(a.j1===null){a.j1=$rt_createIntArray(1);a.j9=$rt_createIntArray(b);a.eR=$rt_createIntArray(16);a.fK=$rt_createIntArray(3);a.ln=$rt_createIntArray(15);a.ip=$rt_createIntArray(16);}if(a.j9.data.length<b)a.j9=$rt_createIntArray(b);c=0;while(c<b){a.j9.data[c]=0;c=c+1|0;}c=0;while(c<16){a.eR.data[c]=0;c=c+1|0;}c=0;while(c<3){a.fK.data[c]=0;c=c+1|0;}Di(a.eR,0,a.ln,0,15);Di(a.eR,0,a.ip,0,16);}
function AOs(){var b,c;b=$rt_createIntArray(1536);c=b.data;c[0]=96;c[1]=7;c[2]=256;c[3]=0;c[4]=8;c[5]=80;c[6]=0;c[7]=8;c[8]=16;c[9]=84;c[10]=8;c[11]=115;c[12]=82;c[13]=7;c[14]=31;c[15]=0;c[16]=8;c[17]=112;c[18]=0;c[19]=8;c[20]=48;c[21]=0;c[22]=9;c[23]=192;c[24]=80;c[25]=7;c[26]=10;c[27]=0;c[28]=8;c[29]=96;c[30]=0;c[31]=8;c[32]=32;c[33]=0;c[34]=9;c[35]=160;c[36]=0;c[37]=8;c[38]=0;c[39]=0;c[40]=8;c[41]=128;c[42]=0;c[43]=8;c[44]=64;c[45]=0;c[46]=9;c[47]=224;c[48]=80;c[49]=7;c[50]=6;c[51]=0;c[52]=8;c[53]=88;c[54]
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
function LA(){var a=this;D.call(a);a.ff=0;a.lV=0;a.fF=null;a.k6=0;a.me=0;a.zb=0;a.sG=0;a.q4=0;a.uR=0;a.uA=0;a.yI=null;a.v4=0;a.yj=null;a.v_=0;a.bc=null;a.C=null;}
var Bjg=null;function W6(a,b,c,d,e,f,g){a.ff=0;a.uR=b<<24>>24;a.uA=c<<24>>24;a.yI=d;a.v4=e;a.yj=f;a.v_=g;a.fF=null;}
function ABD(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.bc.B;d=a.bc.N;e=a.C.bJ;f=a.C.bK;g=a.C.bl;h=g>=a.C.bV?a.C.cQ-g|0:(a.C.bV-g|0)-1|0;a:{b:while(true){c:{d:{e:{f:{g:{switch(a.ff){case 0:break f;case 2:i=a.sG;while(f<i){if(!d){a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=g;return B5(a.C,b);}b=0;d=d+(-1)|0;k=a.bc.cf.data;l=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=l;}a.lV=a.lV+(e&Bjg.data[i])|0;e=e>>i;f=f-i|0;a.me=a.uA;a.fF=a.yj;a.k6=a.v_;a.ff=3;break g;case 4:i=a.sG;while
(f<i){if(!d){a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=g;return B5(a.C,b);}b=0;d=d+(-1)|0;k=a.bc.cf.data;l=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=l;}a.q4=a.q4+(e&Bjg.data[i])|0;e=e>>i;f=f-i|0;a.ff=5;break c;case 6:break d;case 7:if(f>7){f=f+(-8)|0;d=d+1|0;c=c+(-1)|0;}a.C.bl=g;b=B5(a.C,b);g=a.C.bl;if(a.C.bV!=a.C.bl){a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=g;return B5(a.C,b);}a.ff=8;break a;case 9:a.C.bJ=e;a.C.bK
=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=g;return B5(a.C,(-3));case 1:break e;case 3:break;case 5:break c;case 8:break a;default:a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=g;return B5(a.C,(-2));}}l=a.me;while(f<l){if(!d){a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=g;return B5(a.C,b);}b=0;d=d+(-1)|0;k=a.bc.cf.data;i=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=i;}m=(a.k6+(e&Bjg.data[l])
|0)*3|0;k=a.fF.data;i=m+1|0;e=e>>k[i];f=f-a.fF.data[i]|0;l=a.fF.data[m];if(l&16){a.sG=l&15;a.q4=a.fF.data[m+2|0];a.ff=4;continue b;}if(l&64){a.ff=9;a.bc.b9=B(307);a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=g;return B5(a.C,(-3));}a.me=l;a.k6=(m/3|0)+a.fF.data[m+2|0]|0;continue b;}if(h>=258&&d>=10){a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=g;b=AM4(a,a.uR,a.uA,a.yI,a.v4,a.yj,a.v_,a.C,a.bc);c=a.bc.B;d=a.bc.N;e=a.C.bJ;f
=a.C.bK;g=a.C.bl;h=g>=a.C.bV?a.C.cQ-g|0:(a.C.bV-g|0)-1|0;if(b){a.ff=b!=1?9:7;continue b;}}a.me=a.uR;a.fF=a.yI;a.k6=a.v4;a.ff=1;}l=a.me;while(f<l){if(!d)break b;b=0;d=d+(-1)|0;k=a.bc.cf.data;i=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=i;}m=(a.k6+(e&Bjg.data[l])|0)*3|0;k=a.fF.data;i=m+1|0;e=e>>>k[i];f=f-a.fF.data[i]|0;n=a.fF.data[m];if(!n){a.zb=a.fF.data[m+2|0];a.ff=6;continue b;}if(n&16){a.sG=n&15;a.lV=a.fF.data[m+2|0];a.ff=2;continue b;}if(!(n&64)){a.me=n;a.k6=(m/3|0)+a.fF.data[m+2|0]|0;continue b;}if(!(n&32)){a.ff
=9;a.bc.b9=B(308);a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=g;return B5(a.C,(-3));}a.ff=7;continue b;}if(h)i=g;else{if(g!=a.C.cQ)i=g;else if(!a.C.bV)i=g;else{i=0;h=i>=a.C.bV?a.C.cQ-i|0:(a.C.bV-i|0)-1|0;}if(!h){a.C.bl=i;b=B5(a.C,b);i=a.C.bl;h=i>=a.C.bV?a.C.cQ-i|0:(a.C.bV-i|0)-1|0;if(i==a.C.cQ&&a.C.bV){i=0;h=i>=a.C.bV?a.C.cQ-i|0:(a.C.bV-i|0)-1|0;}if(!h){a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=i;return B5(a.C,
b);}}}b=0;k=a.C.c0.data;g=i+1|0;k[i]=a.zb<<24>>24;h=h+(-1)|0;a.ff=0;continue b;}i=g-a.q4|0;while(i<0){i=i+a.C.cQ|0;}while(a.lV){if(h)l=g;else{if(g!=a.C.cQ)l=g;else if(!a.C.bV)l=g;else{l=0;h=l>=a.C.bV?a.C.cQ-l|0:(a.C.bV-l|0)-1|0;}if(!h){a.C.bl=l;b=B5(a.C,b);l=a.C.bl;h=l>=a.C.bV?a.C.cQ-l|0:(a.C.bV-l|0)-1|0;if(l==a.C.cQ&&a.C.bV){l=0;h=l>=a.C.bV?a.C.cQ-l|0:(a.C.bV-l|0)-1|0;}if(!h){a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=l;return B5(a.C,b);}}}o=a.C.c0.data;g=l
+1|0;k=a.C.c0.data;m=i+1|0;o[l]=k[i];h=h+(-1)|0;i=m==a.C.cQ?0:m;a.lV=a.lV-1|0;}a.ff=0;}a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=g;return B5(a.C,b);}a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=g;return B5(a.C,1);}
function AAO(a,b){return;}
function AM4(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;j=i.B;k=i.N;l=h.bJ;m=h.bK;n=h.bl;o=n>=h.bV?h.cQ-n|0:(h.bV-n|0)-1|0;p=Bjg.data[b];q=Bjg.data[c];while(true){if(m<20){k=k+(-1)|0;r=i.cf.data;b=j+1|0;l=l|(r[j]&255)<<m;m=m+8|0;j=b;continue;}a:{s=d.data;t=l&p;u=(e+t|0)*3|0;c=s[u];if(!c){b=u+1|0;l=l>>s[b];m=m-s[b]|0;r=h.c0.data;c=n+1|0;r[n]=s[u+2|0]<<24>>24;o=o+(-1)|0;}else{while(true){b=u+1|0;l=l>>s[b];m=m-s[b]|0;if(c&16){b=c&15;v=s[u+2|0]+(l&Bjg.data[b])|0;w=l>>b;m=m-b|0;while(m<15){k=k+(-1)|0;r
=i.cf.data;b=j+1|0;w=w|(r[j]&255)<<m;m=m+8|0;j=b;}r=f.data;b=w&q;x=(g+b|0)*3|0;c=r[x];while(true){l=x+1|0;w=w>>r[l];m=m-r[l]|0;if(c&16)break;if(c&64){i.b9=B(307);b=i.N-k|0;c=m>>3;if(c<b)b=c;c=k+b|0;e=j-b|0;b=m-(b<<3)|0;h.bJ=w;h.bK=b;i.N=c;i.G=Long_add(i.G,Long_fromInt(e-i.B|0));i.B=e;h.bl=n;return (-3);}b=(b+r[x+2|0]|0)+(w&Bjg.data[c])|0;x=(g+b|0)*3|0;c=r[x];}b=c&15;while(m<b){k=k+(-1)|0;s=i.cf.data;c=j+1|0;w=w|(s[j]&255)<<m;m=m+8|0;j=c;}x=r[x+2|0]+(w&Bjg.data[b])|0;l=w>>b;m=m-b|0;o=o-v|0;if(n>=x){w=n-x|0;b
=n-w|0;if(b>0&&2>b){s=h.c0.data;b=n+1|0;r=h.c0.data;c=w+1|0;s[n]=r[w];s=h.c0.data;n=b+1|0;r=h.c0.data;w=c+1|0;s[b]=r[c];v=v+(-2)|0;}else{Di(h.c0,w,h.c0,n,2);n=n+2|0;w=w+2|0;v=v+(-2)|0;}}else{w=n-x|0;while(true){w=w+h.cQ|0;if(w>=0)break;}b=h.cQ-w|0;if(v>b){v=v-b|0;c=n-w|0;if(c>0&&b>c){c=n;while(true){s=h.c0.data;n=c+1|0;r=h.c0.data;x=w+1|0;s[c]=r[w];b=b+(-1)|0;if(!b)break;c=n;w=x;}}else{Di(h.c0,w,h.c0,n,b);n=n+b|0;}w=0;}}b=n-w|0;if(b>0&&v>b){while(true){s=h.c0.data;c=n+1|0;r=h.c0.data;b=w+1|0;s[n]=r[w];v=v+(-1)
|0;if(!v)break;n=c;w=b;}break a;}Di(h.c0,w,h.c0,n,v);c=n+v|0;break a;}if(c&64){if(c&32){v=i.N-k|0;b=m>>3;if(b<v)v=b;b=k+v|0;c=j-v|0;e=m-(v<<3)|0;h.bJ=l;h.bK=e;i.N=b;i.G=Long_add(i.G,Long_fromInt(c-i.B|0));i.B=c;h.bl=n;return 1;}i.b9=B(308);v=i.N-k|0;b=m>>3;if(b<v)v=b;e=k+v|0;b=j-v|0;c=m-(v<<3)|0;h.bJ=l;h.bK=c;i.N=e;i.G=Long_add(i.G,Long_fromInt(b-i.B|0));i.B=b;h.bl=n;return (-3);}t=(t+s[u+2|0]|0)+(l&Bjg.data[c])|0;u=(e+t|0)*3|0;c=s[u];if(!c)break;}b=u+1|0;l=l>>s[b];m=m-s[b]|0;r=h.c0.data;c=n+1|0;r[n]=s[u+2|
0]<<24>>24;o=o+(-1)|0;}}if(o<258)break;if(k<10)break;n=c;}v=i.N-k|0;b=m>>3;if(b<v)v=b;b=k+v|0;e=j-v|0;g=m-(v<<3)|0;h.bJ=l;h.bK=g;i.N=b;i.G=Long_add(i.G,Long_fromInt(e-i.B|0));i.B=e;h.bl=c;return 0;}
function ABI(){var b,c;b=$rt_createIntArray(17);c=b.data;c[0]=0;c[1]=1;c[2]=3;c[3]=7;c[4]=15;c[5]=31;c[6]=63;c[7]=127;c[8]=255;c[9]=511;c[10]=1023;c[11]=2047;c[12]=4095;c[13]=8191;c[14]=16383;c[15]=32767;c[16]=65535;Bjg=b;}
function Hx(){BW.call(this);}
function Bjh(){var a=new Hx();A_p(a);return a;}
function A_p(a){O(a);}
function Xv(){B6.call(this);}
function Bji(){var a=new Xv();A8N(a);return a;}
function A8N(a){O(a);}
function AAZ(){D.call(this);}
function A_A(a,b){return a.HK(b);}
function AUB(a){return a.Jb();}
function Kk(){B6.call(this);}
function Bjj(){var a=new Kk();A7i(a);return a;}
function A7i(a){O(a);}
function ZW(){var a=this;D.call(a);a.hl=null;a.rl=null;a.ei=null;a.fi=0;}
function Baw(){var a=new ZW();A2E(a);return a;}
function A2E(a){a.ei=Bc5;}
function D2(){BD.call(this);}
function Bjk(){var a=new D2();A9V(a);return a;}
function A9V(a){O(a);}
function AIA(){D.call(this);}
function JK(b){return b.length?0:1;}
function AOV(b){return b.shift();}
function ST(){D.call(this);this.Di=null;}
function AQ9(a){var b,c,d;b=a.Di;if(!HK(b)&&b.co.ei===null){c=b.co;if(c.hl!==null&&!JK(c.hl)){b=c.hl;d=AOV(b);if(b===null)c.hl=null;Qq(d);}}}
function Rb(){var a=this;D.call(a);a.zH=null;a.zI=null;a.zF=0;a.zG=null;}
function Qq(a){var b,c,d,e;b=a.zH;c=a.zI;d=a.zF;e=a.zG;Fv(b);c.co.ei=b;b=c.co;b.fi=b.fi+d|0;CM(e,null);}
function G0(){BW.call(this);}
function Bjl(){var a=new G0();AVd(a);return a;}
function AVd(a){O(a);}
function W2(){Fg.call(this);}
function Bjm(){var a=new W2();A1j(a);return a;}
function A1j(a){O(a);}
function E1(){BD.call(this);}
function Bjn(){var a=new E1();A7S(a);return a;}
function A7S(a){O(a);}
function Ok(){var a=this;D.call(a);a.HZ=null;a.BW=0.0;a.F9=0.0;a.lj=null;a.mX=null;a.rC=null;a.h4=0;}
function AQ3(a,b){var c;if(b!==null){a.mX=b;return a;}c=new Cc;Bl(c,B(309));M(c);}
function A$F(a,b){return;}
function ADJ(a,b){var c;if(b!==null){a.rC=b;return a;}c=new Cc;Bl(c,B(309));M(c);}
function A6e(a,b){return;}
function UK(a,b,c,d){var e,f,$$je;if(!(a.h4==2&&!d)&&a.h4!=3){a.h4=d?2:1;while(true){try{e=AGk(a,b,c);}catch($$e){$$je=Bg($$e);if($$je instanceof B6){f=$$je;M(A42(f));}else{throw $$e;}}if(IU(e))return e;if(JC(e)){if(d&&Fl(b)){if(a.mX===BiJ)return Fh(Ct(b));if(Ct(c)<=Bi(a.lj))return Bi7;EN(b,b.bk+Ct(b)|0);if(a.mX===Bf8)Nn(c,a.lj);}return e;}if(Qe(e)){if(a.mX===BiJ)return e;if(a.mX===Bf8){if(Ct(c)<Bi(a.lj))return Bi7;Nn(c,a.lj);}EN(b,b.bk+Lx(e)|0);}else if(Mu(e)){if(a.rC===BiJ)break;if(a.rC===Bf8){if(Ct(c)<Bi(a.lj))return Bi7;Nn(c,
a.lj);}EN(b,b.bk+Lx(e)|0);}}return e;}b=new D2;O(b);M(b);}
function ACf(a,b){if(a.h4!=3&&a.h4!=2){b=new D2;O(b);M(b);}a.h4=3;return Bi8;}
function ARu(a){a.h4=0;return a;}
function AJM(a,b){var c,d;if(a.h4&&a.h4!=3){b=new D2;O(b);M(b);}if(!Ct(b))return AHn(0);if(a.h4)ARu(a);c=AHn(DE(8,Ct(b)*a.BW|0));while(true){d=UK(a,b,c,0);if(JC(d))break;if(IU(d))c=VD(a,c);if(!NC(d))continue;R9(d);}b=UK(a,b,c,1);if(NC(b))R9(b);while(!JC(ACf(a,c))){c=VD(a,c);}Gx(c);return c;}
function VD(a,b){var c,d,e;c=b.mi;d=O8(c,DE(8,c.data.length*2|0));e=AM6(d,0,d.data.length);EN(e,b.bk);return e;}
function AYG(a,b){return Bi8;}
function A5l(a){return;}
function Sj(){}
function St(){}
function Pi(){var a=this;D.call(a);a.wq=null;a.A9=null;a.Iu=0;a.Js=0;}
function APn(a){if(!a.Iu){a.wq.CU=null;Fv(a.wq);CM(a.A9,null);}}
function LF(){Ok.call(this);}
function AGk(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createByteArray(CB(Ct(b),512));e=d.data;f=0;g=0;h=$rt_createCharArray(CB(Ct(c),512));i=h.data;a:{while(true){if((f+32|0)>g&&Fl(b)){j=f;while(j<g){e[j-f|0]=e[j];j=j+1|0;}k=g-f|0;g=CB(Ct(b)+k|0,e.length);AKh(b,d,k,g-k|0);f=0;}if(!Fl(c)){l=!Fl(b)&&f>=g?Bi8:Bi7;break a;}k=CB(Ct(c),i.length);m=new Wu;m.Ao=b;m.Ey=c;l=ARQ(a,d,f,g,h,0,k,m);f=m.wd;if(l===null&&0==m.qK)l=Bi8;ASr(c,h,0,m.qK);if(l!==null)break;}}EN(b,b.bk-(g-f|0)|0);return l;}
function Ri(){LF.call(this);}
function ARQ(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(NQ(h))break a;i=Bi8;break a;}n=k+1|0;k=j[k];if(!Hr(a,k)){c=n+(-2)|0;i=Fh(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|k&63)&65535;k=n;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(NQ(h))break a;i=Bi8;break a;}c=k+1|0;m=j[k];k=c+1|0;o=j[c];if(!Hr(a,m))break b;if(!Hr(a,o))break b;p=((l&15)<<12|(m
&63)<<6|o&63)&65535;if(Ot(p)){c=k+(-3)|0;i=Fh(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=Fh(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(NQ(h))break a;i=Bi8;break a;}if((f+2|0)>g){c=k+(-1)|0;if(AJp(h,2))break a;i=Bi7;break a;}c=k+1|0;m=j[k];n=c+1|0;o=j[c];k=n+1|0;n=j[n];if(!Hr(a,m))break c;if(!Hr(a,o))break c;if(!Hr(a,n))break c;j=e.data;q=(l&7)<<18|(m&63)<<12|(o&63)<<6|n&63;c=f+1|0;j[f]=IF(q);m=c+1|0;j[c]=Ib(q);}c=k;f=m;}break a;}c=k+(-3)|0;i=Fh(1);break a;}c=k+(-3)|0;i=Fh(1);}h.wd=
c;h.qK=f;return i;}
function Hr(a,b){return (b&192)!=128?0:1;}
function DY(){var a=this;BD.call(a);a.hK=0;a.IR=null;}
function AG$(a,b){var c=new DY();AVe(c,a,b);return c;}
function AVe(a,b,c){a.IR=b;O(a);a.hK=c;}
function ANy(){var a=this;D.call(a);a.Jw=0;a.GP=0;a.HU=Long_ZERO;a.I7=0;a.A_=0;a.ps=null;a.yR=null;a.AB=null;a.JU=0;a.HB=Long_ZERO;a.GR=0;a.Id=Long_ZERO;}
function Bcp(){var a=new ANy();A8H(a);return a;}
function A8H(a){a.Jw=0;a.GP=0;a.A_=255;a.GR=0;a.Id=Long_ZERO;}
function OV(){D.call(this);this.mj=0;}
var Bjo=null;function AWk(){var a=new OV();Zd(a);return a;}
function Zd(a){a.mj=0;}
function A2A(a,b,c,d){var e,f,g,h;e=a.mj^(-1);while(true){d=d+(-1)|0;if(d<0)break;f=b.data;g=Bjo.data;h=c+1|0;e=g[(e^f[c])&255]^e>>>8;c=h;}a.mj=e^(-1);}
function A6s(a){a.mj=0;}
function A9U(a,b){a.mj=Long_and(b,new Long(4294967295, 0)).lo;}
function A7y(a){return Long_and(Long_fromInt(a.mj),new Long(4294967295, 0));}
function AFB(){var b,c,d;Bjo=null;Bjo=$rt_createIntArray(256);b=0;while(b<256){c=8;d=b;while(true){c=c+(-1)|0;if(c<0)break;if(!(d&1)){d=d>>>1;continue;}d=(-306674912)^d>>>1;}Bjo.data[b]=d;b=b+1|0;}}
function I_(){var a=this;D.call(a);a.R=0.0;a.M=0.0;a.S=0.0;a.V=0.0;a.U=0.0;a.W=0.0;}
var Bjp=null;var BeM=0;function Nv(b,c,d,e,f,g){var h;h=new I_;h.R=b;h.M=c;h.S=d;h.V=e;h.U=f;h.W=g;return h;}
function D3(b,c,d,e,f,g){var h,i;if(BeM>=Bjp.s)U(Bjp,Nv(0.0,0.0,0.0,0.0,0.0,0.0));h=Bjp;i=BeM;BeM=i+1|0;return M7(Y(h,i),b,c,d,e,f,g);}
function M7(a,b,c,d,e,f,g){a.R=b;a.M=c;a.S=d;a.V=e;a.U=f;a.W=g;return a;}
function Jg(a,b,c,d){var e,f,g,h,i,j,k;e=a.R;f=a.M;g=a.S;h=a.V;i=a.U;j=a.W;k=R(b,0.0);if(k<0)e=e+b;if(k>0)h=h+b;k=R(c,0.0);if(k<0)f=f+c;if(k>0)i=i+c;k=R(d,0.0);if(k<0)g=g+d;if(k>0)j=j+d;return D3(e,f,g,h,i,j);}
function Dv(a,b,c,d){return D3(a.R-b,a.M-c,a.S-d,a.V+b,a.U+c,a.W+d);}
function Ue(a,b,c,d){return D3(a.R+b,a.M+c,a.S+d,a.V+b,a.U+c,a.W+d);}
function Qw(a,b,c){var d,e;if(b.U>a.M&&b.M<a.U){if(b.W>a.S&&b.S<a.W){if(c<=0.0)d=c;else if(b.V>a.R)d=c;else{d=a.R-b.V;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.R<a.V)e=d;else{e=a.V-b.R;if(e<=d)e=d;}return e;}return c;}return c;}
function Wa(a,b,c){var d,e;if(b.V>a.R&&b.R<a.V){if(b.W>a.S&&b.S<a.W){if(c<=0.0)d=c;else if(b.U>a.M)d=c;else{d=a.M-b.U;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.M<a.U)e=d;else{e=a.U-b.M;if(e<=d)e=d;}return e;}return c;}return c;}
function Uh(a,b,c){var d,e;if(b.V>a.R&&b.R<a.V){if(b.U>a.M&&b.M<a.U){if(c<=0.0)d=c;else if(b.W>a.S)d=c;else{d=a.S-b.W;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.S<a.W)e=d;else{e=a.W-b.S;if(e<=d)e=d;}return e;}return c;}return c;}
function L6(a,b){return b.V>a.R&&b.R<a.V?(b.U>a.M&&b.M<a.U?(b.W>a.S&&b.S<a.W?1:0):0):0;}
function F2(a,b,c,d){a.R=a.R+b;a.M=a.M+c;a.S=a.S+d;a.V=a.V+b;a.U=a.U+c;a.W=a.W+d;return a;}
function APX(a){return (a.V-a.R+a.U-a.M+a.W-a.S)/3.0;}
function Qf(a){return D3(a.R,a.M,a.S,a.V,a.U,a.W);}
function QT(a,b,c){var d,e,f,g,h,i,j,k;d=KM(b,c,a.R);e=KM(b,c,a.V);f=JV(b,c,a.M);g=JV(b,c,a.U);h=Kw(b,c,a.S);i=Kw(b,c,a.W);if(!RG(a,d))d=null;if(!RG(a,e))e=null;if(!Uj(a,f))f=null;if(!Uj(a,g))g=null;if(!U2(a,h))h=null;if(!U2(a,i))i=null;j=null;if(d!==null)j=d;if(e!==null&&!(j!==null&&Ey(b,e)>=Ey(b,j)))j=e;if(f!==null&&!(j!==null&&Ey(b,f)>=Ey(b,j)))j=f;if(g!==null&&!(j!==null&&Ey(b,g)>=Ey(b,j)))j=g;if(h!==null&&!(j!==null&&Ey(b,h)>=Ey(b,j)))j=h;if(i!==null&&!(j!==null&&Ey(b,i)>=Ey(b,j)))j=i;if(j===null)return null;k
=(-1);if(j===d)k=4;if(j===e)k=5;if(j===f)k=0;if(j===g)k=1;if(j===h)k=2;if(j===i)k=3;return A0C(0,0,0,k,j);}
function RG(a,b){return b===null?0:b.z>=a.M&&b.z<=a.U&&b.w>=a.S&&b.w<=a.W?1:0;}
function Uj(a,b){return b===null?0:b.x>=a.R&&b.x<=a.V&&b.w>=a.S&&b.w<=a.W?1:0;}
function U2(a,b){return b===null?0:b.x>=a.R&&b.x<=a.V&&b.z>=a.M&&b.z<=a.U?1:0;}
function Xf(a,b){a.R=b.R;a.M=b.M;a.S=b.S;a.V=b.V;a.U=b.U;a.W=b.W;}
function AEt(){Bjp=Ci();BeM=0;}
function Qj(){}
function Bu(){Bs.call(this);}
var Bjq=0;var Bgm=null;var Bjr=0;var Bjs=0;var Bjt=0;var Bju=0.0;var Bjv=0;var Bjw=null;var Bjx=0;var Bjy=0;var Bjz=0.0;var BjA=0.0;var BjB=0.0;var BjC=0.0;var BjD=0.0;var BjE=0.0;var BjF=0.0;var BjG=0.0;var BjH=0.0;var BjI=0;var BfS=0.0;var BfT=0.0;var BfU=0.0;var BfV=0.0;var BjJ=0;var BjK=0;var BjL=0;var BjM=0.0;var BjN=0.0;var BjO=0.0;var BjP=0;var BjQ=0;var BjR=0;var BjS=0;var BjT=null;var BjU=0;var BjV=null;var BjW=0;var BjX=null;var BjY=0;var BjZ=null;var Bj0=null;var Bgl=null;var Bj1=null;var Bj2=null;var Bj3
=null;var Bj4=null;var Bj5=null;var Bj6=null;var Bgk=0;var Bj7=null;var Bj8=null;var Bj9=null;var Bj$=null;var Bj_=null;var Bka=null;var Bkb=null;var Bkc=null;var Bkd=null;var Bke=null;var Bkf=null;var Bkg=null;var Bkh=null;var Bki=null;var Bkj=Long_ZERO;var Bkk=0;function BV(){BV=Bt(Bu);A1z();}
function Bkl(){var a=new Bu();AO6(a);return a;}
function AO6(a){BV();VS(a);}
function Ba(b){BV();a:{switch(b){case 2884:K3(2884);break a;case 2896:Bjs=1;break a;case 2903:BjI=1;break a;case 2912:BjK=1;break a;case 2929:K3(2929);break a;case 3008:Bjt=1;break a;case 3042:K3(3042);break a;case 3553:Bjr=1;break a;case 32823:K3(32823);break a;case 32826:break;default:break a;}}}
function HL(b){var c;BV();a:{c=518;switch(b){case 514:c=514;break a;case 515:c=518;break a;case 516:c=513;break a;default:}}Bd();BdI.depthFunc(c);}
function Sx(b,c){BV();Bju=c;}
function C_(b){BV();BjS=b;}
function GO(){BV();switch(BjS){case 5888:break;case 5889:return BjV.data[BjW];case 5890:return BjX.data[BjY];default:}return BjT.data[BjU];}
function C9(){BV();Fp(GO());}
function Hk(b,c,d,e){BV();Bd();Bd5.data[0]=b;Bd5.data[1]=c;Bd5.data[2]=d;Bd5.data[3]=e;BdI.viewport(b,c,d,e);}
function D4(b){BV();Bd();BdI.clear(b);}
function Iq(b,c,d,e,f,g){var h,i,j,k;BV();h=GO();i=c-b;h.eu=2.0/i;h.es=0.0;h.et=0.0;h.er=0.0;h.ex=0.0;j=e-d;h.ey=2.0/j;h.ev=0.0;h.ew=0.0;h.eC=0.0;h.eA=0.0;k=g-f;h.eB=2.0/k;h.ez=0.0;h.gW= -(c+b)/i;h.gX= -(e+d)/j;h.gU=(g+f)/k;h.gV=1.0;}
function Bw(b,c,d){var e;BV();L2(Bj2,b,c,d);e=GO();U$(e,Bj2,e);if(!Bjv)return;e=new Cc;Bl(e,B(310));M(e);}
function HC(b,c,d,e){BV();Bd();BdI.clearColor(b,c,d,e);}
function Bc(b){BV();a:{switch(b){case 2884:J3(2884);break a;case 2896:Bjs=0;break a;case 2903:BjI=0;break a;case 2912:BjK=0;break a;case 2929:J3(2929);break a;case 3008:Bjt=0;break a;case 3042:J3(3042);break a;case 3553:Bjr=0;break a;case 32823:J3(32823);break a;case 32826:break;default:break a;}}}
function BT(b,c,d,e){BV();Bjz=b;BjA=c;BjB=d;BjC=e;}
function SB(b,c,d,e,f,g,h,i,j){var k,l,m,n;BV();Bd();if(j===null){k=BdI;l=null;k.texImage2D(3553,c,32856,e,f,g,6408,5121,l);}else{m=Ct(j);k=Bd6;n=0;while(n<m){h=(ALO(j)&255)<<16>>16;k[n]=h;n=n+1|0;}j=new Uint8Array(Bd6.buffer,0,m);BdI.texImage2D(3553,c,32856,e,f,g,6408,5121,j);}}
function B3(){BV();a:{switch(BjS){case 5888:break;case 5889:if(BjW>=(BjV.data.length-1|0)){Cg(C$(),B(311));break a;}BjW=BjW+1|0;GR(BjV.data[BjW],BjV.data[BjW-1|0]);break a;case 5890:if(BjY>=(BjX.data.length-1|0)){Cg(C$(),B(312));break a;}BjY=BjY+1|0;GR(BjX.data[BjY],BjX.data[BjY-1|0]);break a;default:}if(BjU>=(BjT.data.length-1|0))Cg(C$(),B(313));else{BjU=BjU+1|0;GR(BjT.data[BjU],BjT.data[BjU-1|0]);}}}
function Bv(b,c,d,e){var f;BV();L2(Bj2,c,d,e);f=GO();W0(f,b*0.01745329238474369,Bj2,f);if(!Bjv)return;f=new Cc;Bl(f,B(310));M(f);}
function BE(){BV();a:{switch(BjS){case 5888:break;case 5889:if(BjW<=0){Cg(C$(),B(314));break a;}BjW=BjW-1|0;break a;case 5890:if(BjY<=0){Cg(C$(),B(315));break a;}BjY=BjY-1|0;break a;default:}if(BjU<=0)Cg(C$(),B(316));else BjU=BjU-1|0;}}
function TS(b,c){BV();a:{switch(b){case 2982:break;case 2983:TU(BjV.data[BjW],c);break a;default:}TU(BjT.data[BjU],c);}}
function CC(b,c,d){var e;BV();L2(Bj2,b,c,d);ZE(GO(),Bj2);if(!Bjv)return;e=new Cc;Bl(e,B(310));M(e);}
function Df(b,c){BV();BjL=b==1&&c==771?1:0;Bd();BdI.blendFunc(b,c);}
function Gw(b){BV();Bd();BdI.depthMask(!!b);}
function FG(b,c,d,e){BV();Bd();BdI.colorMask(!!b,!!c,!!d,!!e);}
function Cp(b,c){var d,e;BV();d=ANM(Bgm,c);Bd();e=BdI;d=d!==null?d.BQ:null;e.bindTexture(3553,d);}
function Ej(b,c,d){BV();if(!(d!=33071&&d!=10496))d=33071;Bd();BdI.texParameteri(b,c,d);}
function Cj(b,c,d){var e;BV();e=Ed(b*b+c*c+d*d);BjD=b/e;BjE=c/e;BjF=d/e;}
function Oh(b){BV();Bj0=b;RT(b);}
function FU(b){var c;BV();if(!Bjv){c=CP(Bj1,CY(b));if(c!==null&&c.jM>0){Rs(c.lP|0|(BjI&&Bjs?8:0)|(!BjK?0:16)|(!Bjt?0:32)|(!Bjr?0:64));Oh(c.rk);PB(0,c.jM);BjQ=BjQ+((c.jM*6|0)/4|0)|0;BjR=BjR+(c.jM/2|0)|0;}}}
function FJ(b,c){BV();if(!Bjv){Bjw=CP(Bgl,CY(b));if(Bjw!==null){Bjw.lP=(-1);Bjw.jM=0;Bjv=1;}}}
function Ee(){var b,c,d,e;BV();if(Bjv){Bjv=0;Bd();b=BeB.buffer;c=BeA;d=new Int32Array(b,0,c);BeA=0;e=UI(d);if(e>0){if(Bjw.o2===null){BQ(Bj1,CY(Bjw.By),Bjw);Bjw.rk=Pa();Bjw.o2=L7();b=Pb(Bjw.lP);Oh(Bjw.rk);Hh(34962,Bjw.o2);RB(b);}Hh(34962,Bjw.o2);PD(34962,d,35044);BjP=BjP+e|0;}}}
function F8(b,c,d){BV();Bjz=b;BjA=c;BjB=d;BjC=1.0;}
function OJ(b,c){BV();Bd();BdI.polygonOffset(b,c);}
function WW(b){BV();a:{switch(b){case 32886:break;case 32888:Bjy=1;break a;default:break a;}Bjx=1;}}
function Tq(b){BV();a:{switch(b){case 32886:break;case 32888:Bjy=0;break a;default:break a;}Bjx=0;}}
function P_(){BV();return 0|(!Bjx?0:1)|(!Bjy?0:4);}
function Rs(b){var c;BV();c=Pb(b);Bj7=c;AQZ(c);if(Bjt)AIV(c,Bju);ALN(c,Bjz,BjA,BjB,BjC);if(BjK){ALp(c,(!BjL?0:2)+BjJ|0);AQa(c,BfS,BfT,BfU,BfV);AKL(c,BjO);APM(c,BjM,BjN);}AMt(c,BjT.data[BjU]);AM3(c,BjV.data[BjW]);ZX(c,BjX.data[BjY]);if(BjI&&Bjs){AB8(c,BjD,BjE,BjF);ANd(c,Bj5,Bj6);}AOL(c,BjG,BjH);}
function ALs(b,c,d,e){var f;BV();if(Bjv){if(b!=7)Cg(C$(),B(317));else{if(Bjw.lP==(-1))Bjw.lP=P_();else if(Bjw.lP!=P_())Cg(C$(),B(318));f=Bjw;f.jM=f.jM+d|0;Bd();e=e;if((BeA+e.length|0)<BeB.length){f=BeB;b=BeA;f.set(e,b);BeA=BeA+e.length|0;}}}else{BjP=BjP+UI(e)|0;BjQ=BjQ+d|0;Rs(0|(!Bjx?0:1)|(!Bjy?0:4)|(BjI&&Bjs?8:0)|(!BjK?0:16)|(!Bjt?0:32)|(!Bjr?0:64));Oh(Bj7.ub);Hh(34962,Bj7.uP);if(!Bj7.xh){Bj7.xh=1;PD(34962,Bj8,35048);}f=BdI;e=e;f.bufferSubData(34962,0,e);if(b==7){PB(c,d);BjR=BjR+(d/2|0)|0;}else{a:{b:{switch
(b){case 1:break;case 2:case 4:break b;case 3:b=3;BjR=BjR+(d-1|0)|0;break a;case 5:b=5;BjR=BjR+(d-2|0)|0;break a;case 6:b=6;BjR=BjR+(d-2|0)|0;break a;default:break b;}b=1;BjR=BjR+(d/2|0)|0;break a;}b=4;BjR=BjR+(d/3|0)|0;}BdI.drawArrays(b,c,d);}}}
function PB(b,c){var d,e,f,g,h,i,j;BV();if(BjZ===null){if(Bjq)d=ALS($rt_createIntArray(49200));else{e=A5B(0,196800,$rt_createByteArray(196800),0,196800,1,0);e.kN=Bgn;d=AHK(e);}f=0;while(f<16384){g=f*4|0;h=g+1|0;i=g+2|0;j=g+3|0;h=h<<16;NP(d,g|h);NP(d,j|h);NP(d,i|j<<16);f=f+1|0;}Gx(d);BjZ=L7();Hh(34963,BjZ);g=Ct(d);e=new Int32Array(Bd6.buffer);h=0;while(h<g){i=AGb(d);e[h]=i;h=h+1|0;}d=Bd6.buffer;g=g*4|0;e=new Uint8Array(d,0,g);BdI.bufferData(34963,e,35044);}if(!Bj0.vS){Bj0.vS=1;Hh(34963,BjZ);}g=(c*6|0)/4|0;b=
(b*6|0)/4|0;Bd();BdI.drawElements(4,g,5123,b);}
function Ma(b,c){BV();a:{if(b==2917){b:{switch(c){case 2048:break;case 9729:break b;default:break b;}BjJ=2;break a;}BjJ=1;}}}
function GN(b,c){BV();a:{switch(b){case 2914:break;case 2915:BjM=c;break a;case 2916:BjN=c;break a;default:break a;}BjO=c;}}
function A1z(){var b,c,d;Bd();Bjq=1;Bgm=A_y(256);Bjr=0;Bjs=0;Bjt=0;Bju=0.10000000149011612;Bjv=0;Bjw=null;Bjx=0;Bjy=0;Bjz=1.0;BjA=1.0;BjB=1.0;BjC=1.0;BjD=1.0;BjE=0.0;BjF=0.0;BjG=0.0;BjH=0.0;BjI=0;BfS=1.0;BfT=1.0;BfU=1.0;BfV=1.0;BjJ=1;BjK=0;BjL=0;BjM=1.0;BjN=1.0;BjO=1.0;BjP=0;BjQ=0;BjR=0;BjS=5888;BjT=J(Es,32);BjU=0;BjV=J(Es,6);BjW=0;BjX=J(Es,16);BjY=0;b=0;while(b<BjT.data.length){c=BjT.data;d=new Es;Fp(d);c[b]=d;b=b+1|0;}b=0;while(b<BjV.data.length){c=BjV.data;d=new Es;Fp(d);c[b]=d;b=b+1|0;}b=0;while(b<BjX.data.length)
{c=BjX.data;d=new Es;Fp(d);c[b]=d;b=b+1|0;}BjZ=null;Bj0=null;Bgl=De();Bj1=De();Bj2=new U4;Bj3=new G_;Bj4=new G_;Bj5=new G_;Bj6=new G_;Bgk=0;Bj7=null;Bj8=new Int32Array(525000);Bj9=null;Bj$=null;Bj_=null;Bka=null;Bkb=null;Bkc=A_y(256);d=new Es;Fp(d);Bkd=Ku(d);Bke=$rt_createFloatArray(16);Bkf=$rt_createFloatArray(16);d=new Es;Fp(d);Bkg=d;d=new Es;Fp(d);Bkh=d;Bki=new G_;Bkj=Long_ZERO;Bkk=0;}
function ACD(){D.call(this);}
function Bkm(){var a=new ACD();AUm(a);return a;}
function AUm(a){return;}
function DU(){var b,c;Bd();if(!BeC)a:{Bec=null;if(!PY(BdV)){b=Tm(BdV,0);Bec=b;if(b!==null){c=1;break a;}}c=0;}else{Ox(BdV);Bec=null;Bee.data[29]=0;Bee.data[157]=0;Bee.data[28]=0;Bee.data[219]=0;Bee.data[220]=0;BeC=0;c=0;}return c;}
function CU(){Bd();return Bec===null?0:DC($rt_str(Bec.type),B(319))?0:1;}
function Bh(){Bd();return Bec===null?(-1):T4(Bec.which);}
function APW(b){Bd();Bd2=b;}
function BN(b){Bd();if(BeC){Bee.data[28]=0;Bee.data[29]=0;Bee.data[157]=0;Bee.data[219]=0;Bee.data[220]=0;}return Bee.data[b];}
function NF(){var a=this;D.call(a);a.rv=0;a.tm=0;a.m6=0;a.lt=0;a.hi=0;a.iw=0;a.ee=0;a.mt=0;a.li=0;a.t3=null;a.tV=null;a.xo=null;a.ux=null;a.yH=null;a.ft=null;a.gj=null;a.BO=null;a.f$=null;a.Ca=null;a.Dh=null;a.nf=null;a.wy=null;a.zR=0;a.jY=0;a.cC=0;a.du=0;a.pQ=0;}
var Bkn=null;var Bko=null;function A_$(a){var b=new NF();APd(b,a);return b;}
function APd(a,b){var c,d;a.rv=1;a.tm=1;a.m6=0;a.lt=0;a.hi=0;a.iw=1;a.ee=0;a.mt=0;a.li=1;a.t3=E7(B(320),17);a.tV=E7(B(321),30);a.xo=E7(B(322),31);a.ux=E7(B(323),32);a.yH=E7(B(324),57);a.ft=E7(B(325),23);a.gj=E7(B(326),16);a.BO=E7(B(327),20);a.f$=E7(B(328),33);a.Ca=E7(B(329),28);a.Dh=E7(B(330),19);c=J(Vq,11);d=c.data;d[0]=a.t3;d[1]=a.tV;d[2]=a.xo;d[3]=a.ux;d[4]=a.yH;d[5]=a.gj;d[6]=a.ft;d[7]=a.BO;d[8]=a.f$;d[9]=a.Ca;d[10]=a.Dh;a.nf=c;a.zR=12;a.jY=2;a.cC=0;a.du=0;a.pQ=0;a.wy=b;}
function K4(a,b){var c;c=new S;V(c);c=H(H(c,a.nf.data[b].EA),B(12));b=a.nf.data[b].bI;Bd();return T(H(c,b>=0&&b<256?Bey.data[b]:B(10)));}
function X5(a,b,c){a.nf.data[b].bI=c;}
function Ea(a,b,c){if(!b)a.rv=a.rv?0:1;if(b==1)a.tm=a.tm?0:1;if(b==2)a.m6=a.m6?0:1;if(b==3)a.lt=a.lt?0:1;if(b==4)a.hi=(a.hi+c|0)&3;if(b==5)a.iw=a.iw?0:1;if(b==6)a.ee=a.ee?0:1;if(b==7)a.mt=a.mt?0:1;if(b==8)a.jY=(a.jY+c|0)&3;if(b==9){a.li=a.li?0:1;Jd(a.wy.dY);}if(b==10){a.du=a.du?0:1;if(a.du){a.hi=2;a.iw=0;a.li=0;a.ee=0;}Jd(a.wy.dY);}if(b==11)a.pQ=a.pQ?0:1;}
function QZ(a,b){var c;a:{if(!b){c=new S;V(c);c=T(H(H(c,B(331)),!a.rv?B(332):B(333)));break a;}if(b==1){c=new S;V(c);c=T(H(H(c,B(334)),!a.tm?B(332):B(333)));break a;}if(b==2){c=new S;V(c);c=T(H(H(c,B(335)),!a.m6?B(332):B(333)));break a;}if(b==3){c=new S;V(c);c=T(H(H(c,B(336)),!a.lt?B(332):B(333)));break a;}if(b==4){c=new S;V(c);c=T(H(H(c,B(337)),Bkn.data[a.hi]));break a;}if(b==5){c=new S;V(c);c=T(H(H(c,B(338)),!a.iw?B(332):B(333)));break a;}if(b==6){c=new S;V(c);c=T(H(H(c,B(339)),!a.ee?B(332):B(333)));break a;}if
(b==7){c=new S;V(c);c=T(H(H(c,B(340)),!a.mt?B(332):B(333)));break a;}if(b==8){c=new S;V(c);c=T(H(H(c,B(341)),Bko.data[a.jY]));break a;}if(b==9){c=new S;V(c);c=T(H(H(c,B(342)),!a.li?B(343):B(344)));break a;}if(b==10){c=new S;V(c);c=T(H(H(c,B(345)),!a.du?B(332):B(333)));break a;}if(b!=11){c=B(3);break a;}c=new S;V(c);c=T(H(H(c,B(346)),!a.pQ?B(332):B(333)));}return c;}
function A2u(a){return;}
function A02(a){return;}
function AHT(){var b,c;b=J(B4,4);c=b.data;c[0]=B(347);c[1]=B(348);c[2]=B(349);c[3]=B(350);Bkn=b;b=J(B4,4);c=b.data;c[0]=B(351);c[1]=B(352);c[2]=B(353);c[3]=B(354);Bko=b;}
function Io(){var a=this;D.call(a);a.t4=null;a.p0=0;a.mB=0;a.oN=0;a.oO=0;a.k0=0;a.k9=0;a.ll=0;a.BB=0;a.Ep=0;a.Dq=0;a.nX=0;a.o5=0;a.p8=0;a.fw=0;a.g2=null;a.EX=0;a.A2=0;a.DL=0;a.Hv=0.0;a.i4=0;a.E7=null;a.Io=0;a.xL=0;a.JP=0;a.op=0;a.kK=0;a.gl=null;a.ji=null;}
var Bkp=null;var BeO=0;function Ts(){Ts=Bt(Io);A_n();}
function Bbw(a,b,c,d,e,f,g){var h=new Io();AI9(h,a,b,c,d,e,f,g);return h;}
function AI9(a,b,c,d,e,f,g,h){Ts();a.p0=(-1);a.fw=0;a.g2=$rt_createBooleanArray(2);a.xL=1;a.kK=0;a.gl=Ci();a.t4=b;a.ji=c;a.ll=g;a.k9=g;a.k0=g;a.Hv=D_((Bj(a.k0,a.k0)+Bj(a.k9,a.k9)|0)+Bj(a.ll,a.ll)|0)/2.0;a.p0=h;a.mB=(-999);Sl(a,d,e,f);a.i4=0;}
function Sl(a,b,c,d){var e,f;if(!(b==a.mB&&c==a.oN&&d==a.oO)){PU(a);a.mB=b;a.oN=c;a.oO=d;a.EX=b+(a.k0/2|0)|0;a.A2=c+(a.k9/2|0)|0;a.DL=d+(a.ll/2|0)|0;a.nX=b&1023;a.o5=c;a.p8=d&1023;a.BB=b-a.nX|0;a.Ep=c-a.o5|0;a.Dq=d-a.p8|0;a.E7=Nv(b-2.0,c-2.0,d-2.0,(b+a.k0|0)+2.0,(c+a.k9|0)+2.0,(d+a.ll|0)+2.0);FJ(a.p0+2|0,4864);e=D3(a.nX-2.0,a.o5-2.0,a.p8-2.0,(a.nX+a.k0|0)+2.0,(a.o5+a.k9|0)+2.0,(a.p8+a.ll|0)+2.0);BA();f=BeL;Bz(f);Bf(f,e.R,e.U,e.S);Bf(f,e.V,e.U,e.S);Bf(f,e.V,e.M,e.S);Bf(f,e.R,e.M,e.S);Bf(f,e.R,e.M,e.W);Bf(f,e.V,
e.M,e.W);Bf(f,e.V,e.U,e.W);Bf(f,e.R,e.U,e.W);Bf(f,e.R,e.M,e.S);Bf(f,e.V,e.M,e.S);Bf(f,e.V,e.M,e.W);Bf(f,e.R,e.M,e.W);Bf(f,e.R,e.U,e.W);Bf(f,e.V,e.U,e.W);Bf(f,e.V,e.U,e.S);Bf(f,e.R,e.U,e.S);Bf(f,e.R,e.M,e.W);Bf(f,e.R,e.U,e.W);Bf(f,e.R,e.U,e.S);Bf(f,e.R,e.M,e.S);Bf(f,e.V,e.M,e.S);Bf(f,e.V,e.U,e.S);Bf(f,e.V,e.U,e.W);Bf(f,e.V,e.M,e.W);Br(f);Ee();KV(a);}}
function ADi(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.i4)return;BeO=BeO+1|0;b=a.mB;c=a.oN;d=a.oO;e=a.mB+a.k0|0;f=a.oN+a.k9|0;g=a.oO+a.ll|0;h=0;while(h<2){a.g2.data[h]=1;h=h+1|0;}Bkq=0;i=Ga();DF(i,a.gl);Dy(a.gl);j=new Iu;k
=a.t4;l=b-1|0;m=c-1|0;n=d-1|0;o=e+1|0;h=f+1|0;p=g+1|0;$p=1;case 1:AEv(j,k,l,m,n,o,h,p);if(C()){break _;}k=A8k(j);l=0;a:{while(true){if(l>=2)break a;q=0;r=0;s=0;t=c;while(t<f){m=d;while(m<g){n=b;if(n<e){$p=2;continue _;}m=m+1|0;}t=t+1|0;}if(!s)r=0;else{Br(Bkp);Ee();E_(Bkp,0.0,0.0,0.0);}if(r)a.g2.data[l]=0;if(!q)break;l=l+1|0;}}u=Ga();DF(u,a.gl);Fu(u,i);DF(a.ji,u);Fu(i,a.gl);Gf(a.ji,i);a.op=Bkq;a.kK=1;return;case 2:$z=HB(j,n,t,m);if(C()){break _;}p=$z;if(p>0){if(!s){s=1;FJ(a.p0+l|0,4864);Bz(Bkp);E_(Bkp,a.nX-a.mB
|0,a.o5-a.oN|0,a.p8-a.oO|0);}if(!l){L();if(BeP.data[p] instanceof Eg){$p=3;continue _;}}L();v=BeP.data[p];o=R(v.pS(),l);if(o)q=1;else if(!o){$p=4;continue _;}}n=n+1|0;b:{c:while(true){if(n<e){continue _;}m=m+1|0;while(m>=g){t=t+1|0;while(t>=f){if(!s)r=0;else{Br(Bkp);Ee();E_(Bkp,0.0,0.0,0.0);}if(r)a.g2.data[l]=0;if(!q)break c;l=l+1|0;if(l>=2)break b;q=0;r=0;s=0;t=c;}m=d;}n=b;}}u=Ga();DF(u,a.gl);Fu(u,i);DF(a.ji,u);Fu(i,a.gl);Gf(a.ji,i);a.op=Bkq;a.kK=1;return;case 3:$z=AFV(j,n,t,m);if(C()){break _;}w=$z;if(AIi(Bkr,
w))U(a.gl,w);L();v=BeP.data[p];o=R(v.pS(),l);if(o)q=1;else if(!o){$p=4;continue _;}n=n+1|0;d:{e:while(true){if(n<e){$p=2;continue _;}m=m+1|0;while(m>=g){t=t+1|0;while(t>=f){if(!s)r=0;else{Br(Bkp);Ee();E_(Bkp,0.0,0.0,0.0);}if(r)a.g2.data[l]=0;if(!q)break e;l=l+1|0;if(l>=2)break d;q=0;r=0;s=0;t=c;}m=d;}n=b;}}u=Ga();DF(u,a.gl);Fu(u,i);DF(a.ji,u);Fu(i,a.gl);Gf(a.ji,i);a.op=Bkq;a.kK=1;return;case 4:$z=AN3(k,v,n,t,m);if(C()){break _;}o=$z;r=r|o;n=n+1|0;a:{f:while(true){if(n<e){$p=2;continue _;}m=m+1|0;while(m>=g)
{t=t+1|0;while(t>=f){if(!s)r=0;else{Br(Bkp);Ee();E_(Bkp,0.0,0.0,0.0);}if(r)a.g2.data[l]=0;if(!q)break f;l=l+1|0;if(l>=2)break a;q=0;r=0;s=0;t=c;}m=d;}n=b;}}u=Ga();DF(u,a.gl);Fu(u,i);DF(a.ji,u);Fu(i,a.gl);Gf(a.ji,i);a.op=Bkq;a.kK=1;return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p);}
function G6(a,b){var c,d,e;c=b.d-a.EX;d=b.j-a.A2;e=b.e-a.DL;return c*c+d*d+e*e;}
function PU(a){var b;b=0;while(b<2){a.g2.data[b]=1;b=b+1|0;}a.fw=0;a.kK=0;}
function ARG(a){PU(a);a.t4=null;}
function PK(a,b){return !a.fw?(-1):a.g2.data[b]?(-1):a.p0+b|0;}
function ASa(a,b){a.fw=MJ(b,a.E7);}
function AHx(a){return !a.kK?0:a.g2.data[0]&&a.g2.data[1]?1:0;}
function KV(a){a.i4=1;}
function A_n(){BA();Bkp=BeL;BeO=0;}
function ASb(){var a=this;E3.call(a);a.js=null;a.lM=0;}
function A7B(){var a=new ASb();AXL(a);return a;}
function A$g(a){var b=new ASb();Y4(b,a);return b;}
function AXL(a){Y4(a,32);}
function Y4(a,b){a.js=$rt_createByteArray(b);}
function A7P(a,b){var c,d;Rw(a,a.lM+1|0);c=a.js.data;d=a.lM;a.lM=d+1|0;c[d]=b<<24>>24;}
function Ru(a,b,c,d){var e,f,g,h,i;Rw(a,a.lM+d|0);e=0;while(e<d){f=b.data;g=a.js.data;h=a.lM;a.lM=h+1|0;i=c+1|0;g[h]=f[c];e=e+1|0;c=i;}}
function Rw(a,b){if(a.js.data.length<b){b=DE(b,(a.js.data.length*3|0)/2|0);a.js=Oi(a.js,b);}}
function Ig(a){return Oi(a.js,a.lM);}
function JT(){B6.call(this);}
function Bks(){var a=new JT();A5F(a);return a;}
function A5F(a){O(a);}
function Og(){}
function F0(){var a=this;D.call(a);a.f7=null;a.dZ=null;a.l7=null;a.gL=null;a.kV=null;a.fD=null;a.dU=Long_ZERO;a.sr=Long_ZERO;a.sV=Long_ZERO;a.rt=Long_ZERO;a.gf=0;a.hX=0;a.sf=0;a.sq=0;a.bg=null;a.i3=0;a.C9=null;a.q=null;a.fk=0;a.p1=0;a.fj=0;a.tF=0;a.cv=null;a.ho=null;a.lz=Long_ZERO;a.tk=null;a.wN=Long_ZERO;a.I0=null;a.nd=null;a.ql=null;a.eL=0;a.uc=0;}
var Bkt=null;var Bku=null;var Bkv=0;function Bkw(a,b){var c=new F0();Q0(c,a,b);return c;}
function ASd(b){var c,d,e,f,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:c=new S;V(c);c=T(H(H(c,b),B(355)));$p=1;case 1:$z=ALG(c);if(C()){break _;}d=$z;c=Dz();e=new S;V(e);Cg(c,T(H(H(e,b),B(355))));if(d===null)return null;a:{try{e=My(MX(O0(Uo(d))),B(356));}catch($$e){$$je=Bg($$e);if($$je instanceof BW){f=$$je;break a;}else{throw $$e;}}return e;}B9(f);return null;default:E$();}}C3().s(b,c,d,e,f,$p);}
function Q0(a,b,c){var d,e,f,g,h,i,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.eL=0;a.f7=Ci();a.dZ=Ci();a.l7=Ci();a.gL=Bb1();a.kV=Ga();a.fD=Ci();a.dU=Long_ZERO;a.sr=Long_fromInt(8961023);a.sV=Long_fromInt(12638463);a.rt=Long_fromInt(16777215);a.gf=0;a.hX=Lo(new DB);a.sf=1013904223;a.sq=0;a.q=new DB;a.tF=0;a.cv=Ci();a.lz=Long_ZERO;a.wN=Long_ZERO;a.nd=Ci();a.ql=Ci();a.I0=b;Bku=b;b=new S;V(b);b
=T(H(H(b,Bku),B(355)));$p=1;case 1:$z=ALG(b);if(C()){break _;}d=$z;b=Dz();e=new S;V(e);Cg(b,T(H(H(e,Bku),B(355))));f=d!==null?1:0;a:{a.tF=f;if(d!==null){try{g=My(MX(O0(Uo(d))),B(356));a.lz=Mc(g,B(357));a.fk=FW(g,B(358));a.p1=FW(g,B(359));a.fj=FW(g,B(360));a.dU=Mc(g,B(361));a.wN=Mc(g,B(362));a.tk=My(g,B(5));break a;}catch($$e){$$je=Bg($$e);if($$je instanceof BD){h=$$je;}else{throw $$e;}}B9(h);}}f=0;if(Long_eq(a.lz,Long_ZERO)){a.lz=c;f=1;}a.ho=ABn(a,Bku);if(!f){Q_(a);return;}a.uc=1;a.fk=0;a.p1=64;a.fj=0;f=a.fk;i
=a.fj;$p=2;case 2:$z=AJQ(a,f,i);if(C()){break _;}f=$z;L();if(f!=Bfa.b?0:1){a.uc=0;Q_(a);return;}a.fk=a.fk+(E(a.q,64)-E(a.q,64)|0)|0;a.fj=a.fj+(E(a.q,64)-E(a.q,64)|0)|0;f=a.fk;i=a.fj;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ABr(a){return a.ho;}
function ABn(a,b){var c,d,e;c=new II;d=new Xn;d.r7=b;e=new Sw;e.Gg=$rt_createIntMultiArray([32,32]);e.t=a;e.a=new DB;e.yY=Hb(e.a,16);e.yZ=Hb(e.a,16);e.yX=Hb(e.a,8);e.tP=Hb(e.a,4);e.y1=Hb(e.a,4);e.y2=Hb(e.a,10);e.y0=Hb(e.a,16);e.iV=Hb(e.a,8);c.be=J(I7,1024);c.fU=(-999999999);c.gr=(-999999999);c.jj=A9s(a,$rt_createByteArray(32768),0,0);c.jj.En=1;c.jj.qd=1;c.gp=a;c.ef=d;c.kU=e;return c;}
function AP6(a){var b,c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.fk;c=a.fj;$p=1;case 1:$z=AJQ(a,b,c);if(C()){break _;}b=$z;if(b)return;a.fk=a.fk+(E(a.q,8)-E(a.q,8)|0)|0;a.fj=a.fj+(E(a.q,8)-E(a.q,8)|0)|0;b=a.fk;c=a.fj;continue _;default:E$();}}C3().s(a,b,c,$p);}
function AJQ(a,b,c){var d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=63;e=d+1|0;$p=1;case 1:$z=ACx(a,b,e,c);if(C()){break _;}f=$z;if(!f){$p=2;continue _;}d=e;e=d+1|0;continue _;case 2:$z=ACx(a,b,d,c);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AGq(a){var b,c,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:try{if(a.tk!==null){YU(a.bg,a.tk);a.tk=null;}if(a.ho instanceof II)MW(a.ho,EX(a.bg.d|0)>>4,EX(a.bg.e|0)>>4);b=a.bg;$p=1;continue _;}catch($$e){$$je=Bg($$e);if($$je instanceof BD){c=$$je;}else{throw $$e;}}B9(c);return;case 1:a:{try{AOj(a,b);if(C()){break _;}break a;}catch($$e){$$je=Bg($$e);if($$je instanceof BD){c=$$je;}else{throw $$e;}}B9(c);}return;default:E$();}}C3().s(a,b,c,$p);}
function ABG(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!==null)YK(c,B(363));$p=1;case 1:AMN(a);if(C()){break _;}if(c===null){d=a.ho;$p=2;continue _;}d=B(364);$p=3;continue _;case 2:AN1(d,b,c);if(C()){break _;}return;case 3:AR6(c,d);if(C()){break _;}d=a.ho;$p=2;continue _;default:E$();}}C3().s(a,b,c,d,$p);}
function AMN(a){var b,c,d,e,f,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=Ha();Id(b,B(357),a.lz);GA(b,B(358),a.fk);GA(b,B(359),a.p1);GA(b,B(360),a.fj);Id(b,B(361),a.dU);Id(b,B(362),a.wN);Id(b,B(365),B_());if(a.bg!==null){c=Ha();ALv(a.bg,c);ANV(b,B(5),c);}c=Ha();HH(c,B(356),b);try{b=BL(H(H(BX(),Bku),B(366)));$p=1;continue _;}catch($$e){$$je=Bg($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}B9(d);return;case 1:try
{ALG(b);if(C()){break _;}b=BL(H(H(BX(),Bku),B(367)));$p=2;continue _;}catch($$e){$$je=Bg($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}B9(d);return;case 2:try{ALG(b);if(C()){break _;}b=BL(H(H(BX(),Bku),B(355)));$p=3;continue _;}catch($$e){$$je=Bg($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}B9(d);return;case 3:try{ALG(b);if(C()){break _;}e=A$g(131072);R1(c,AWj(e));b=BL(H(H(BX(),Bku),B(366)));f=Ig(e);$p=4;continue _;}catch($$e){$$je=Bg($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}B9(d);return;case 4:try
{ACB(b,f);if(C()){break _;}b=BL(H(H(BX(),Bku),B(367)));$p=5;continue _;}catch($$e){$$je=Bg($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}B9(d);return;case 5:try{$z=ALG(b);if(C()){break _;}f=$z;if(f!==null){b=BL(H(H(BX(),Bku),B(367)));$p=8;continue _;}b=BL(H(H(BX(),Bku),B(355)));c=BL(H(H(BX(),Bku),B(367)));$p=6;continue _;}catch($$e){$$je=Bg($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}B9(d);return;case 6:try{ANo(b,c);if(C()){break _;}b=BL(H(H(BX(),Bku),B(355)));$p=7;continue _;}catch($$e){$$je
=Bg($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}B9(d);return;case 7:try{$z=ALG(b);if(C()){break _;}f=$z;if(f!==null){b=BL(H(H(BX(),Bku),B(355)));$p=11;continue _;}b=BL(H(H(BX(),Bku),B(366)));c=BL(H(H(BX(),Bku),B(355)));$p=9;continue _;}catch($$e){$$je=Bg($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}B9(d);return;case 8:try{AL4(b);if(C()){break _;}b=BL(H(H(BX(),Bku),B(355)));c=BL(H(H(BX(),Bku),B(367)));$p=6;continue _;}catch($$e){$$je=Bg($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}B9(d);return;case 9:try
{ANo(b,c);if(C()){break _;}b=BL(H(H(BX(),Bku),B(366)));$p=10;continue _;}catch($$e){$$je=Bg($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}B9(d);return;case 10:a:{try{$z=ALG(b);if(C()){break _;}f=$z;if(f===null)break a;b=BL(H(H(BX(),Bku),B(366)));$p=12;continue _;}catch($$e){$$je=Bg($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}B9(d);}return;case 11:try{AL4(b);if(C()){break _;}b=BL(H(H(BX(),Bku),B(366)));c=BL(H(H(BX(),Bku),B(355)));$p=9;continue _;}catch($$e){$$je=Bg($$e);if($$je instanceof BD)
{d=$$je;}else{throw $$e;}}B9(d);return;case 12:a:{try{AL4(b);if(C()){break _;}break a;}catch($$e){$$je=Bg($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}B9(d);}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AAN(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b){$p=2;continue _;}c=a.ho;b=0;d=null;$p=1;case 1:$z=AN1(c,b,d);if(C()){break _;}b=$z;return b;case 2:AMN(a);if(C()){break _;}c=a.ho;b=0;d=null;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,$p);}
function ACx(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)b=0;else{if(c<128){e=b>>4;f=d>>4;$p=1;continue _;}b=0;}}else b=0;return b;case 1:$z=ZV(a,e,f);if(C()){break _;}g=$z;return FR(g,b&15,c,d&15);default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function Mo(a,b,c,d){return c>=0&&c<128?C4(a,b>>4,d>>4):0;}
function G4(a,b,c,d,e,f,g){var h,i;if(f>=0&&c<128){h=b>>4;b=d>>4;c=e>>4;d=g>>4;while(h<=c){i=b;while(i<=d){if(!C4(a,h,i))return 0;i=i+1|0;}h=h+1|0;}return 1;}return 0;}
function C4(a,b,c){return B2(a.ho,b,c);}
function XX(a,b,c){var d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=b>>4;b=c>>4;$p=1;case 1:$z=ZV(a,d,b);if(C()){break _;}e=$z;return e;default:E$();}}C3().s(a,b,c,d,e,$p);}
function ZV(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=a.ho;$p=1;case 1:$z=AOh(d,b,c);if(C()){break _;}d=$z;return d;default:E$();}}C3().s(a,b,c,d,$p);}
function AJn(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;g=b>>4;h=d>>4;$p=1;continue _;}return 0;case 1:$z=ZV(a,g,h);if(C()){break _;}i=$z;b=b&15;d=d&15;$p=2;case 2:$z=ADF(i,b,c,d,e,f);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ALt(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;f=b>>4;g=d>>4;$p=1;continue _;}return 0;case 1:$z=ZV(a,f,g);if(C()){break _;}h=$z;g=b&15;b=d&15;$p=2;case 2:$z=ADC(h,g,c,b,e);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AB2(a,b,c,d){var e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACx(a,b,c,d);if(C()){break _;}e=$z;if(!e)f=Bf_;else{L();f=BeP.data[e].b_;}return f;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AEK(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;e=b>>4;f=d>>4;$p=1;continue _;}return 0;case 1:$z=ZV(a,e,f);if(C()){break _;}g=$z;return RV(g,b&15,c,d&15);default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ACh(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AKw(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AKw(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;f=b>>4;g=d>>4;$p=1;continue _;}return 0;case 1:$z=ZV(a,f,g);if(C()){break _;}h=$z;AAw(h,b&15,c,d&15,e);return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function APy(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ALt(a,b,c,d,e);if(C()){break _;}f=$z;if(!f)return 0;$p=2;case 2:AEO(a,b,c,d,e);if(C()){break _;}return 1;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AIZ(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AJn(a,b,c,d,e,f);if(C()){break _;}f=$z;if(!f)return 0;$p=2;case 2:AEO(a,b,c,d,e);if(C()){break _;}return 1;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AEO(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;while(f<a.cv.s){Rr(Y(a.cv,f),b,c,d);f=f+1|0;}$p=1;case 1:AHN(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function APK(a,b,c,d,e){var f;if(d<=e){f=d;d=e;e=f;}Jm(a,b,e,c,b,d,c);}
function Jm(a,b,c,d,e,f,g){var h;h=0;while(h<a.cv.s){AOI(Y(a.cv,h),b,c,d,e,f,g);h=h+1|0;}}
function AHN(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=b-1|0;$p=1;case 1:AO7(a,f,c,d,e);if(C()){break _;}f=b+1|0;$p=2;case 2:AO7(a,f,c,d,e);if(C()){break _;}f=c-1|0;$p=3;case 3:AO7(a,b,f,d,e);if(C()){break _;}f=c+1|0;$p=4;case 4:AO7(a,b,f,d,e);if(C()){break _;}f=d-1|0;$p=5;case 5:AO7(a,b,c,f,e);if(C()){break _;}d=d+1|0;$p=6;case 6:AO7(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,
$p);}
function AO7(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.sq)return;L();f=BeP.data;$p=1;case 1:$z=ACx(a,b,c,d);if(C()){break _;}g=$z;h=f[g];if(h===null)return;$p=2;case 2:h.e1(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AGf(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=b>>4;f=d>>4;$p=1;case 1:$z=ZV(a,e,f);if(C()){break _;}g=$z;return Po(g,b&15,c,d&15);default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function XA(a,b,c,d){var e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=1;$p=1;case 1:$z=AQM(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AQM(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(e){$p=1;continue _;}if(c<0)return 0;if(c>=128){f=15-a.gf|0;if(f<0)f=0;return f;}g=b>>4;e=d>>4;$p=7;continue _;}return 15;case 1:$z=ACx(a,b,c,d);if(C()){break _;}f=$z;L();if(f!=BeU.b&&f!=Bg3.b){if(c<0)return 0;if(c>=128){f=15
-a.gf|0;if(f<0)f=0;return f;}g=b>>4;e=d>>4;$p=7;continue _;}e=c+1|0;g=0;$p=2;case 2:$z=AQM(a,b,e,d,g);if(C()){break _;}h=$z;e=b+1|0;g=0;$p=3;case 3:$z=AQM(a,e,c,d,g);if(C()){break _;}g=$z;e=b-1|0;i=0;$p=4;case 4:$z=AQM(a,e,c,d,i);if(C()){break _;}i=$z;e=d+1|0;j=0;$p=5;case 5:$z=AQM(a,b,c,e,j);if(C()){break _;}j=$z;d=d-1|0;e=0;$p=6;case 6:$z=AQM(a,b,c,d,e);if(C()){break _;}k=$z;if(g<=h)g=h;if(i<=g)i=g;if(j<=i)j=i;if(k<=j)k=j;return k;case 7:$z=ZV(a,g,e);if(C()){break _;}l=$z;return VR(l,b&15,c,d&15,a.gf);default:
E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Zy(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 1;e=b>>4;f=d>>4;if(!C4(a,e,f))return 0;$p=1;continue _;}return 0;case 1:$z=ZV(a,e,f);if(C()){break _;}g=$z;return Po(g,b&15,c,d&15);default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ALI(a,b,c){var d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&c>=(-32000000)&&b<32000000&&c<=32000000){d=b>>4;e=c>>4;if(!C4(a,d,e))return 0;$p=1;continue _;}return 0;case 1:$z=ZV(a,d,e);if(C()){break _;}f=$z;return UN(f,b&15,c&15);default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AP$(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!Mo(a,c,d,e))return;if(b===Bkx){$p=1;continue _;}if(b===Bky){$p=2;continue _;}$p=3;continue _;case 1:$z=Zy(a,c,d,e);if(C()){break _;}g=$z;if(g)f=15;$p=3;continue _;case 2:$z=ACx(a,c,d,e);if(C()){break _;}g=$z;L();if(BgD.data[g]>f)f=BgD.data[g];$p=3;case 3:$z=ALk(a,b,c,d,e);if(C()){break _;}g=$z;if(g!=f)DT(a,b,c,d,e,c,d,e);return;default:
E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ALk(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(d>=0&&d<128&&c>=(-32000000)&&e>=(-32000000)&&c<32000000&&e<=32000000){f=c>>4;g=e>>4;if(!C4(a,f,g))return 0;$p=1;continue _;}return b.Ab;case 1:$z=ZV(a,f,g);if(C()){break _;}h=$z;return ACm(h,b,c&15,d,e&15);default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AMv(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c>=(-32000000)&&e>=(-32000000)&&c<32000000&&e<=32000000&&d>=0&&d<128){g=c>>4;h=e>>4;if(C4(a,g,h)){$p=1;continue _;}}return;case 1:$z=ZV(a,g,h);if(C()){break _;}i=$z;AQN(i,b,c&15,d,e&15,f);g=0;while(g<a.cv.s){Rr(Y(a.cv,g),c,d,e);g=g+1|0;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ANj(a,b,c,d){var e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=Bkt.data;$p=1;case 1:$z=XA(a,b,c,d);if(C()){break _;}b=$z;return e[b];default:E$();}}C3().s(a,b,c,d,e,$p);}
function RA(a){return a.gf>=4?0:1;}
function AJm(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0;$p=1;case 1:$z=AE3(a,b,c,d);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,$p);}
function AE3(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(isNaN(b.x)?1:0)&&!(isNaN(b.z)?1:0)&&!(isNaN(b.w)?1:0)){if(!(isNaN(c.x)?1:0)&&!(isNaN(c.z)?1:0)&&!(isNaN(c.w)?1:0)){e
=K(c.x);f=K(c.z);g=K(c.w);h=K(b.x);i=K(b.z);j=K(b.w);k=20+(-1)|0;if(20<0)return null;if(!(isNaN(b.x)?1:0)&&!(isNaN(b.z)?1:0)&&!(isNaN(b.w)?1:0)){if(h==e&&i==f&&j==g)return null;l=999.0;m=999.0;n=999.0;o=R(e,h);if(o>0)l=h+1.0;if(o<0)l=h+0.0;p=R(f,i);if(p>0)m=i+1.0;if(p<0)m=i+0.0;i=R(g,j);if(i>0)n=j+1.0;if(i<0)n=j+0.0;q=999.0;r=999.0;s=999.0;t=c.x-b.x;u=c.z-b.z;v=c.w-b.w;if(l!==999.0)q=(l-b.x)/t;if(m!==999.0)r=(m-b.z)/u;if(n!==999.0)s=(n-b.w)/v;if(q<r&&q<s){o=o<=0?5:4;b.x=l;b.z=b.z+u*q;b.w=b.w+v*q;}else if(r>=
s){o=i<=0?3:2;b.x=b.x+t*s;b.z=b.z+u*s;b.w=n;}else{o=p<=0?1:0;b.x=b.x+t*r;b.z=m;b.w=b.w+v*r;}w=BY(b.x,b.z,b.w);v=K(b.x);w.x=v;h=v|0;if(o==5){h=h+(-1)|0;w.x=w.x+1.0;}v=K(b.z);w.z=v;i=v|0;if(o==1){i=i+(-1)|0;w.z=w.z+1.0;}v=K(b.w);w.w=v;j=v|0;if(o==3){j=j+(-1)|0;w.w=w.w+1.0;}$p=1;continue _;}return null;}return null;}return null;case 1:$z=ACx(a,h,i,j);if(C()){break _;}x=$z;$p=2;case 2:$z=AEK(a,h,i,j);if(C()){break _;}y=$z;L();z=BeP.data[x];if(x>0&&z.o8(y,d)){$p=5;continue _;}o=i-1|0;$p=3;case 3:$z=ACx(a,h,o,j);if
(C()){break _;}p=$z;$p=4;case 4:$z=AEK(a,h,o,j);if(C()){break _;}x=$z;w=BeP.data[p];if(p>0&&w.o8(x,d)){$p=6;continue _;}p=k;k=p+(-1)|0;if(p<0)return null;if(!(isNaN(b.x)?1:0)&&!(isNaN(b.z)?1:0)&&!(isNaN(b.w)?1:0)){if(h==e&&i==f&&j==g)return null;l=999.0;m=999.0;n=999.0;o=R(e,h);if(o>0)l=h+1.0;if(o<0)l=h+0.0;p=R(f,i);if(p>0)m=i+1.0;if(p<0)m=i+0.0;i=R(g,j);if(i>0)n=j+1.0;if(i<0)n=j+0.0;q=999.0;r=999.0;s=999.0;t=c.x-b.x;u=c.z-b.z;v=c.w-b.w;if(l!==999.0)q=(l-b.x)/t;if(m!==999.0)r=(m-b.z)/u;if(n!==999.0)s=(n-b.w)
/v;if(q<r&&q<s){o=o<=0?5:4;b.x=l;b.z=b.z+u*q;b.w=b.w+v*q;}else if(r>=s){o=i<=0?3:2;b.x=b.x+t*s;b.z=b.z+u*s;b.w=n;}else{o=p<=0?1:0;b.x=b.x+t*r;b.z=m;b.w=b.w+v*r;}w=BY(b.x,b.z,b.w);v=K(b.x);w.x=v;h=v|0;if(o==5){h=h+(-1)|0;w.x=w.x+1.0;}v=K(b.z);w.z=v;i=v|0;if(o==1){i=i+(-1)|0;w.z=w.z+1.0;}v=K(b.w);w.w=v;j=v|0;if(o==3){j=j+(-1)|0;w.w=w.w+1.0;}$p=1;continue _;}return null;case 5:$z=z.nJ(a,h,i,j,b,c);if(C()){break _;}ba=$z;if(ba!==null)return ba;o=i-1|0;$p=3;continue _;case 6:$z=w.nJ(a,h,o,j,b,c);if(C()){break _;}ba
=$z;if(ba!==null)return ba;p=k;k=p+(-1)|0;if(p<0)return null;if(!(isNaN(b.x)?1:0)&&!(isNaN(b.z)?1:0)&&!(isNaN(b.w)?1:0)){if(h==e&&i==f&&j==g)return null;l=999.0;m=999.0;n=999.0;o=R(e,h);if(o>0)l=h+1.0;if(o<0)l=h+0.0;p=R(f,i);if(p>0)m=i+1.0;if(p<0)m=i+0.0;i=R(g,j);if(i>0)n=j+1.0;if(i<0)n=j+0.0;q=999.0;r=999.0;s=999.0;t=c.x-b.x;u=c.z-b.z;v=c.w-b.w;if(l!==999.0)q=(l-b.x)/t;if(m!==999.0)r=(m-b.z)/u;if(n!==999.0)s=(n-b.w)/v;if(q<r&&q<s){o=o<=0?5:4;b.x=l;b.z=b.z+u*q;b.w=b.w+v*q;}else if(r>=s){o=i<=0?3:2;b.x=b.x+t
*s;b.z=b.z+u*s;b.w=n;}else{o=p<=0?1:0;b.x=b.x+t*r;b.z=m;b.w=b.w+v*r;}w=BY(b.x,b.z,b.w);v=K(b.x);w.x=v;h=v|0;if(o==5){h=h+(-1)|0;w.x=w.x+1.0;}v=K(b.z);w.z=v;i=v|0;if(o==1){i=i+(-1)|0;w.z=w.z+1.0;}v=K(b.w);w.w=v;j=v|0;if(o==3){j=j+(-1)|0;w.w=w.w+1.0;}$p=1;continue _;}return null;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p);}
function Dh(a,b,c,d,e){var f,g,h;f=0;g=R(d,1.0);e=16.0*d;while(f<a.cv.s){h=16.0;if(g>0)h=e;if(LD(a.bg,b)<h*h)Y(a.cv,f);f=f+1|0;}}
function Ex(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,$$je;a:{b:{try{h=0;}catch($$e){$$je=Bg($$e);if($$je instanceof BD){i=$$je;break b;}else{throw $$e;}}j=R(f,1.0);k=16.0*f;while(true){try{if(h>=CX(a.cv))break;l=16.0;if(j>0)l=k;m=b-a.bg.d;n=c-a.bg.j;o=d-a.bg.e;if(m*m+n*n+o*o<l*l)AC2(Y(a.cv,h),e,b,c,d,f,g);h=h+1|0;continue;}catch($$e){$$je=Bg($$e);if($$je instanceof BD){i=$$je;break b;}else{throw $$e;}}}break a;}B9(i);}}
function ATd(a,b,c,d,e,f){return;}
function BU(a,b,c,d,e,f,g,h){var i;i=0;while(i<a.cv.s){AH5(Y(a.cv,i),b,c,d,e,f,g,h);i=i+1|0;}}
function AOj(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(b.d/16.0);d=K(b.e/16.0);if(!C4(a,c,d)){e=Dz();f=new S;V(f);Cg(e,T(FO(H(f,B(368)),b)));return;}$p=1;case 1:$z=ZV(a,c,d);if(C()){break _;}e=$z;VU(e,b);U(a.dZ,b);g=0;while(g<a.cv.s){Y(a.cv,g);g=g+1|0;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AU7(a,b){Cb(b);}
function ANF(a,b){U(a.cv,b);}
function AKU(a,b){H_(a.cv,b);}
function XV(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Dy(a.nd);d=K(c.R);e=K(c.V+1.0);f=K(c.M);g=K(c.U+1.0);h=K(c.S);i=K(c.W+1.0);f=f-1|0;while(d<e){j=f;while(j<g){k=h;if(k<i){L();l=BeP.data;$p=2;continue _;}j=j+1|0;}d=d+1|0;}c=Dv(c,0.25,0.25,0.25);$p=1;case 1:$z=ADL(a,b,c);if(C()){break _;}m=$z;n=
0;while(n<m.s){o=Y(m,n).Bw();if(o!==null)U(a.nd,o);c=b.AZ(Y(m,n));if(c!==null)U(a.nd,c);n=n+1|0;}return a.nd;case 2:$z=ACx(a,d,j,k);if(C()){break _;}n=$z;p=l[n];if(p!==null){m=a.nd;$p=3;continue _;}k=k+1|0;while(k>=i){j=j+1|0;while(j>=g){d=d+1|0;if(d>=e){c=Dv(c,0.25,0.25,0.25);$p=1;continue _;}j=f;}k=h;}L();l=BeP.data;continue _;case 3:p.FD(a,d,j,k,c,m);if(C()){break _;}k=k+1|0;while(k>=i){j=j+1|0;while(j>=g){d=d+1|0;if(d>=e){c=Dv(c,0.25,0.25,0.25);$p=1;continue _;}j=f;}k=h;}L();l=BeP.data;$p=2;continue _;default:
E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function Oq(a,b){var c;c=1.0-(BC(HA(a,b)*3.1415927410125732*2.0)*2.0+0.5);if(c<0.0)c=0.0;if(c>1.0)c=1.0;return c*11.0|0;}
function OT(a,b){var c,d,e,f;c=BC(HA(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(c<0.0)c=0.0;if(c>1.0)c=1.0;d=Long_toNumber(Long_and(Long_shr(a.sr,16),Long_fromInt(255)))/255.0;e=Long_toNumber(Long_and(Long_shr(a.sr,8),Long_fromInt(255)))/255.0;f=Long_toNumber(Long_and(a.sr,Long_fromInt(255)))/255.0;return BY(d*c,e*c,f*c);}
function HA(a,b){var c;c=(Long_rem(a.dU,Long_fromInt(24000)).lo+b)/24000.0-0.25;if(c<0.0)c=c+1.0;if(c>1.0)c=c-1.0;return c+(1.0-(GG(c*3.141592653589793)+1.0)/2.0-c)/3.0;}
function S4(a,b){var c,d,e,f;c=BC(HA(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(c<0.0)c=0.0;if(c>1.0)c=1.0;d=Long_toNumber(Long_and(Long_shr(a.rt,16),Long_fromInt(255)))/255.0;e=Long_toNumber(Long_and(Long_shr(a.rt,8),Long_fromInt(255)))/255.0;f=Long_toNumber(Long_and(a.rt,Long_fromInt(255)))/255.0;b=c*0.8999999761581421+0.10000000149011612;return BY(d*b,e*b,f*(c*0.8500000238418579+0.15000000596046448));}
function ADs(a,b){var c,d,e,f;c=BC(HA(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(c<0.0)c=0.0;if(c>1.0)c=1.0;d=Long_toNumber(Long_and(Long_shr(a.sV,16),Long_fromInt(255)))/255.0;e=Long_toNumber(Long_and(Long_shr(a.sV,8),Long_fromInt(255)))/255.0;f=Long_toNumber(Long_and(a.sV,Long_fromInt(255)))/255.0;b=c*0.9399999976158142+0.05999999865889549;return BY(d*b,e*b,f*(c*0.9100000262260437+0.09000000357627869));}
function A8p(a,b,c){return 64;}
function AJs(a,b){var c;c=1.0-(BC(HA(a,b)*3.1415927410125732*2.0)*2.0+0.75);if(c<0.0)c=0.0;if(c>1.0)c=1.0;return c*c*0.5;}
function Fn(a,b,c,d,e){var f,g;f=new JX;g=Bkz;Bkz=Long_add(g,Long_fromInt(1));f.oV=g;f.fG=b;f.fq=c;f.fL=d;f.qb=e;if(G4(a,b-8|0,c-8|0,d-8|0,b+8|0,c+8|0,d+8|0)){if(e>0){L();f.jl=Long_add(Long_fromInt(BeP.data[e].mw()),a.dU);}if(!WB(a.kV,f)){Xi(a.kV,f);Zj(a.gL,f);}}}
function APg(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Gf(a.dZ,a.l7);b=0;while(b<a.cv.s){Y(a.cv,b);c=0;while(c<a.l7.s){Y(a.l7,c);c=c+1|0;}b=b+1|0;}Dy(a.l7);b=0;a:while(true){if(b>=a.dZ.s){b=0;if(b>=a.fD.s)return;d=Y(a.fD,b);$p=1;continue _;}b:{e=Y(a.dZ,b);if(e.bB!==null){if(!e.bB.cR&&e.bB.bH===e)break b;e.bB.bH=null;e.bB=null;}if(!e.cR){$p=2;continue _;}if(e.cR){c=K(e.d/16.0);f=K(e.e/16.0);if(C4(a,
c,f))break a;d=a.dZ;c=b+(-1)|0;En(d,b);g=0;while(g<a.cv.s){Y(a.cv,g);g=g+1|0;}b=c;}}b=b+1|0;}$p=3;continue _;case 1:d.tN();if(C()){break _;}b=b+1|0;if(b>=a.fD.s)return;d=Y(a.fD,b);continue _;case 2:Xx(a,e);if(C()){break _;}while(true){if(e.cR){c=K(e.d/16.0);f=K(e.e/16.0);if(C4(a,c,f)){$p=3;continue _;}d=a.dZ;c=b+(-1)|0;En(d,b);g=0;while(g<a.cv.s){Y(a.cv,g);g=g+1|0;}b=c;}b:{while(true){b=b+1|0;if(b>=a.dZ.s){b=0;if(b>=a.fD.s)return;d=Y(a.fD,b);$p=1;continue _;}e=Y(a.dZ,b);if(e.bB===null)break b;if(e.bB.cR)break;if
(e.bB.bH!==e)break;}e.bB.bH=null;e.bB=null;}if(e.cR)continue;else break;}continue _;case 3:$z=ZV(a,c,f);if(C()){break _;}d=$z;AM2(d,e);while(true){d=a.dZ;c=b+(-1)|0;En(d,b);g=0;while(g<a.cv.s){Y(a.cv,g);g=g+1|0;}b=c;while(true){b=b+1|0;if(b>=a.dZ.s){b=0;if(b>=a.fD.s)return;d=Y(a.fD,b);$p=1;continue _;}e=Y(a.dZ,b);if(e.bB!==null){if(!e.bB.cR&&e.bB.bH===e)continue;e.bB.bH=null;e.bB=null;}if(!e.cR){$p=2;continue _;}if(e.cR)break;}c=K(e.d/16.0);f=K(e.e/16.0);if(!C4(a,c,f))continue;else break;}continue _;default:
E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function Xx(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(b.d);K(b.j);d=K(b.e);if(!G4(a,c-16|0,0,d-16|0,c+16|0,128,d+16|0))return;b.cs=b.d;b.b7=b.j;b.ct=b.e;b.P=b.u;b.T=b.I;e=K(b.d/16.0);f=K(b.j/16.0);g=K(b.e/16.0);if(b.bB===null){$p=1;continue _;}$p=2;continue _;case 1:b.ep();if(C()){break _;}h=K(b.d/16.0);i=K(b.j/16.0);j=K(b.e/16.0);if(e==h&&f==i&&g
==j){if(b.bH!==null){if(!b.bH.cR&&b.bH.bB===b){k=b.bH;$p=6;continue _;}b.bH.bB=null;b.bH=null;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cs;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.b7;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.ct;if(!(!(isNaN(b.I)?1:0)&&!(!isFinite(b.I)?1:0)))b.I=b.T;if(!(!(isNaN(b.u)?1:0)&&!(!isFinite(b.u)?1:0)))b.u=b.P;return;}if(C4(a,e,g)){$p=3;continue _;}if(!C4(a,h,j)){$p=4;continue _;}$p=5;continue _;case 2:b.BM();if(C()){break _;}h=K(b.d/16.0);i=K(b.j
/16.0);j=K(b.e/16.0);if(e==h&&f==i&&g==j){if(b.bH!==null){if(!b.bH.cR&&b.bH.bB===b){k=b.bH;$p=6;continue _;}b.bH.bB=null;b.bH=null;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cs;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.b7;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.ct;if(!(!(isNaN(b.I)?1:0)&&!(!isFinite(b.I)?1:0)))b.I=b.T;if(!(!(isNaN(b.u)?1:0)&&!(!isFinite(b.u)?1:0)))b.u=b.P;return;}if(C4(a,e,g)){$p=3;continue _;}if(!C4(a,h,j)){$p=4;continue _;}$p=5;continue _;case 3:$z=ZV(a,
e,g);if(C()){break _;}k=$z;R4(k,b,f);if(!C4(a,h,j)){$p=4;continue _;}$p=5;continue _;case 4:b.C7();if(C()){break _;}if(b.bH!==null){if(!b.bH.cR&&b.bH.bB===b){k=b.bH;$p=6;continue _;}b.bH.bB=null;b.bH=null;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cs;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.b7;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.ct;if(!(!(isNaN(b.I)?1:0)&&!(!isFinite(b.I)?1:0)))b.I=b.T;if(!(!(isNaN(b.u)?1:0)&&!(!isFinite(b.u)?1:0)))b.u=b.P;return;case 5:$z=ZV(a,h,j);if
(C()){break _;}k=$z;VU(k,b);if(b.bH!==null){if(!b.bH.cR&&b.bH.bB===b){k=b.bH;$p=6;continue _;}b.bH.bB=null;b.bH=null;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cs;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.b7;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.ct;if(!(!(isNaN(b.I)?1:0)&&!(!isFinite(b.I)?1:0)))b.I=b.T;if(!(!(isNaN(b.u)?1:0)&&!(!isFinite(b.u)?1:0)))b.u=b.P;return;case 6:Xx(a,k);if(C()){break _;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cs;if(!(!(isNaN(b.j)?1:0)
&&!(!isFinite(b.j)?1:0)))b.j=b.b7;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.ct;if(!(!(isNaN(b.I)?1:0)&&!(!isFinite(b.I)?1:0)))b.I=b.T;if(!(!(isNaN(b.u)?1:0)&&!(!isFinite(b.u)?1:0)))b.u=b.P;return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AM8(a,b){var c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=null;$p=1;case 1:$z=ADL(a,c,b);if(C()){break _;}c=$z;d=0;while(d<c.s){e=Y(c,d);if(!e.cR&&e.mE)return 0;d=d+1|0;}return 1;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AJk(a,b){var c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(b.R);d=K(b.V+1.0);e=K(b.M);f=K(b.U+1.0);g=K(b.S);h=K(b.W+1.0);if(b.R<0.0)c=c+(-1)|0;if(b.M<0.0)e=e+(-1)|0;if(b.S<0.0)g=g+(-1)|0;while(c<d){i=e;while(i<f){j=g;if(j<h){L();k=BeP.data;$p=1;continue _;}i=i+1|0;}c=c+1|0;}return 0;case 1:$z=ACx(a,c,i,j);if(C()){break _;}l=$z;m=
k[l];if(m!==null&&m.b_.nF())return 1;j=j+1|0;a:while(true){if(j<h){L();k=BeP.data;continue _;}i=i+1|0;while(i>=f){c=c+1|0;if(c>=d)break a;i=e;}j=g;}return 0;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ARa(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(b.R);d=K(b.V+1.0);e=K(b.M);f=K(b.U+1.0);g=K(b.S);h=K(b.W+1.0);while(c<d){i=e;while(i<f){j=g;if(j<h){$p=1;continue _;}i=i+1|0;}c=c+1|0;}return 0;case 1:$z=ACx(a,c,i,j);if(C()){break _;}k=$z;L();if(k!=Bgp.b&&k!=BfZ.b&&k!=BgF.b){j=j+1|0;a:while(true){if(j<h){continue _;}i=i+1|0;while(i>=f){c=c+1|
0;if(c>=d)break a;i=e;}j=g;}return 0;}return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AAu(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=K(b.R);f=K(b.V+1.0);g=K(b.M);h=K(b.U+1.0);i=K(b.S);j=K(b.W+1.0);k=0;l=BY(0.0,0.0,0.0);m=h;while(e<f){n=g;while(n<h){o=i;if(o<j){L();p=BeP.data;$p=1;continue _;}n=n+1|0;}e=e+1|0;}if(HR(l)>0.0){b=CD(l);d.g=d.g+
b.x*0.004;d.i=d.i+b.z*0.004;d.h=d.h+b.w*0.004;}return k;case 1:$z=ACx(a,e,n,o);if(C()){break _;}q=$z;r=p[q];if(r!==null&&r.b_===c){s=n+1|0;$p=2;continue _;}o=o+1|0;a:while(true){if(o<j){L();p=BeP.data;continue _;}n=n+1|0;while(n>=h){e=e+1|0;if(e>=f)break a;n=g;}o=i;}if(HR(l)>0.0){b=CD(l);d.g=d.g+b.x*0.004;d.i=d.i+b.z*0.004;d.h=d.h+b.w*0.004;}return k;case 2:$z=AEK(a,e,n,o);if(C()){break _;}q=$z;if(m>=s-Jx(q)){k=1;$p=3;continue _;}o=o+1|0;b:while(true){if(o<j){L();p=BeP.data;$p=1;continue _;}n=n+1|0;while(n>=
h){e=e+1|0;if(e>=f)break b;n=g;}o=i;}if(HR(l)>0.0){b=CD(l);d.g=d.g+b.x*0.004;d.i=d.i+b.z*0.004;d.h=d.h+b.w*0.004;}return k;case 3:r.qG(a,e,n,o,d,l);if(C()){break _;}o=o+1|0;c:while(true){if(o<j){L();p=BeP.data;$p=1;continue _;}n=n+1|0;while(n>=h){e=e+1|0;if(e>=f)break c;n=g;}o=i;}if(HR(l)>0.0){b=CD(l);d.g=d.g+b.x*0.004;d.i=d.i+b.z*0.004;d.h=d.h+b.w*0.004;}return k;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function AOv(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=K(b.R);e=K(b.V+1.0);f=K(b.M);g=K(b.U+1.0);h=K(b.S);i=K(b.W+1.0);while(d<e){j=f;while(j<g){k=h;if(k<i){L();l=BeP.data;$p=1;continue _;}j=j+1|0;}d=d+1|0;}return 0;case 1:$z=ACx(a,d,j,k);if(C()){break _;}m=$z;n=l[m];if(n!==null&&n.b_===c)return 1;k=k+1|0;a:while(true)
{if(k<i){L();l=BeP.data;continue _;}j=j+1|0;while(j>=g){d=d+1|0;if(d>=e)break a;j=f;}k=h;}return 0;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Ya(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=new WT;$p=1;case 1:AI5(g,a,b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ADB(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=1.0/((c.V-c.R)*2.0+1.0);e=1.0/((c.U-c.M)*2.0+1.0);f=1.0/((c.W-c.S)*2.0+1.0);g=0;h=0;i=0.0;while(i<=1.0){j=0.0;while(j<=1.0){if(0.0<=1.0){k=c.R+(c.V-c.R)*i;l=c.M+(c.U-c.M)*j;m=c.S;n=c.W-c.S;o=0.0;p=BY(k,l,m+n*o);$p=1;continue _;}j=
j+e;}i=i+d;}return g/h;case 1:$z=AJm(a,p,b);if(C()){break _;}p=$z;if(p===null)g=g+1|0;h=h+1|0;q=o+f;a:while(true){if(q<=1.0){k=c.R+(c.V-c.R)*i;l=c.M+(c.U-c.M)*j;m=c.S;n=c.W-c.S;o=q;p=BY(k,l,m+n*o);continue _;}j=j+e;while(j>1.0){i=i+d;if(i>1.0)break a;j=0.0;}q=0.0;}return g/h;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function ABL(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!e)c=c+(-1)|0;if(e==1)c=c+1|0;if(e==2)d=d+(-1)|0;if(e==3)d=d+1|0;if(e==4)b=b+(-1)|0;if(e==5)b=b+1|0;$p=1;case 1:$z=ACx(a,b,c,d);if(C()){break _;}e=$z;L();if(e!=Bgp.b)return;Ex(a,b+0.5,c+0.5,d+0.5,B(215),0.5,2.5999999046325684+(N(a.q)-N(a.q))*0.800000011920929);e=0;$p=2;case 2:APy(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AXP(a,b){return null;}
function AN_(a){var b;b=new S;V(b);return T(Be(H(b,B(369)),a.dZ.s));}
function AXZ(a){return a.bg;}
function ANz(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=b>>4;f=d>>4;$p=1;case 1:$z=ZV(a,e,f);if(C()){break _;}g=$z;if(g===null)return null;b=b&15;d=d&15;$p=2;case 2:$z=ANq(g,b,c,d);if(C()){break _;}g=$z;return g;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AFU(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=b>>4;g=d>>4;$p=1;case 1:$z=ZV(a,f,g);if(C()){break _;}h=$z;if(h!==null)AJl(h,b&15,c,d&15,e);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AFM(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=b>>4;f=d>>4;$p=1;case 1:$z=ZV(a,e,f);if(C()){break _;}g=$z;if(g!==null)AD0(g,b&15,c,d&15);return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AAD(a,b,c,d){var e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:L();e=BeP.data;$p=1;case 1:$z=ACx(a,b,c,d);if(C()){break _;}b=$z;f=e[b];return f!==null?f.d5():0;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AJi(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=1;$p=1;case 1:ABG(a,c,b);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,$p);}
function AIm(a){var b,c,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.eL>=50)return 0;a.eL=a.eL+1|0;a:{try{b=500;}catch($$e){$$je=Bg($$e);c=$$je;break a;}b:{try{if(CX(a.f7)>0)break b;}catch($$e){$$je=Bg($$e);c=$$je;break a;}a.eL=a.eL-1|0;return 0;}c:{try{b=b+(-1)|0;if(b>0)break c;}catch($$e){$$je=Bg($$e);c=$$je;break a;}a.eL=a.eL-1|0;return 1;}try{c=En(a.f7,CX(a.f7)-1|0);$p=1;continue _;}catch($$e){$$je=Bg($$e);c=$$je;}}a.eL=a.eL-1|0;M(c);case 1:d:
{try{AOp(c,a);if(C()){break _;}}catch($$e){$$je=Bg($$e);c=$$je;break d;}a:{try{if(CX(a.f7)>0)break a;}catch($$e){$$je=Bg($$e);c=$$je;break d;}a.eL=a.eL-1|0;return 0;}b:{try{b=b+(-1)|0;if(b>0)break b;}catch($$e){$$je=Bg($$e);c=$$je;break d;}a.eL=a.eL-1|0;return 1;}try{c=En(a.f7,CX(a.f7)-1|0);continue _;}catch($$e){$$je=Bg($$e);c=$$je;}}a.eL=a.eL-1|0;M(c);default:E$();}}C3().s(a,b,c,$p);}
function DT(a,b,c,d,e,f,g,h){AKW(a,b,c,d,e,f,g,h,1);}
function AKW(a,b,c,d,e,f,g,h,i){var j,k,l,m;Bkv=Bkv+1|0;if(Bkv==50){Bkv=Bkv-1|0;return;}if(!Mo(a,(f+c|0)/2|0,64,(h+e|0)/2|0)){Bkv=Bkv-1|0;return;}a:{j=a.f7.s;if(i){if(5<=j)j=5;k=0;while(true){if(k>=j)break a;l=Y(a.f7,(a.f7.s-k|0)-1|0);if(l.ck===b&&ALC(l,c,d,e,f,g,h))break;k=k+1|0;}Bkv=Bkv-1|0;return;}}l=a.f7;m=new VP;m.ck=b;m.iK=c;m.b8=d;m.eh=e;m.d_=f;m.b0=g;m.dM=h;U(l,m);if(a.f7.s>1000000){b=Dz();l=new S;V(l);Cg(b,T(H(Be(H(l,B(370)),1000000),B(371))));Dy(a.f7);}Bkv=Bkv-1|0;}
function Q_(a){var b;b=Oq(a,1.0);if(b!=a.gf)a.gf=b;}
function X6(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!Q8(a.dZ,a.bg)&&a.bg!==null){Cg(Dz(),B(372));b=a.bg;$p=1;continue _;}a:{c=Oq(a,1.0);if(c!=a.gf){a.gf=c;d=0;while(true){if(d>=a.cv.s)break a;VF(Y(a.cv,d));d=d+1|0;}}}a.dU=Long_add(a.dU,Long_fromInt(1));if(Long_ne(Long_rem(a.dU,Long_fromInt(20)),Long_ZERO)){c=0;$p=
2;continue _;}c=0;b=null;$p=4;continue _;case 1:AOj(a,b);if(C()){break _;}b:{c=Oq(a,1.0);if(c!=a.gf){a.gf=c;d=0;while(true){if(d>=a.cv.s)break b;VF(Y(a.cv,d));d=d+1|0;}}}a.dU=Long_add(a.dU,Long_fromInt(1));if(Long_ne(Long_rem(a.dU,Long_fromInt(20)),Long_ZERO)){c=0;$p=2;continue _;}c=0;b=null;$p=4;continue _;case 2:ABs(a,c);if(C()){break _;}d=K(a.bg.d);e=K(a.bg.e);b=new Iu;f=d-64|0;g=0;h=e-64|0;c=d+64|0;i=128;j=e+64|0;$p=3;case 3:AEv(b,a,f,g,h,c,i,j);if(C()){break _;}i=0;if(i>=8000)return;a.hX=(a.hX*3|0)+a.sf
|0;f=a.hX>>2;g=((f&127)-64|0)+d|0;h=((f>>8&127)-64|0)+e|0;k=f>>16&127;$p=5;continue _;case 4:ABG(a,c,b);if(C()){break _;}c=0;$p=2;continue _;case 5:$z=HB(b,g,k,h);if(C()){break _;}l=$z;L();if(Bgz.data[l]){m=BeP.data[l];n=a.q;$p=6;continue _;}i=i+1|0;if(i>=8000)return;a.hX=(a.hX*3|0)+a.sf|0;f=a.hX>>2;g=((f&127)-64|0)+d|0;h=((f>>8&127)-64|0)+e|0;k=f>>16&127;continue _;case 6:m.e8(a,g,k,h,n);if(C()){break _;}i=i+1|0;if(i>=8000)return;a.hX=(a.hX*3|0)+a.sf|0;f=a.hX>>2;g=((f&127)-64|0)+d|0;h=((f>>8&127)-64|0)+e|0;k
=f>>16&127;$p=5;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ABs(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=Jz(a.gL);if(c!=IP(a.kV)){d=new D2;Bl(d,B(373));M(d);}if(c>500)c=500;e=0;a:{while(true){if(e>=c)break a;f=M4(a.gL);if(!b&&Long_gt(f.jl,a.dU))break;MG(a.gL,f);KW(a.kV,f);if(G4(a,f.fG-8|0,f.fq-8|0,f.fL-8|0,f.fG+8|0,f.fq+8|0,f.fL+8|0)){g=f.fG;h=f.fq;i=f.fL;$p=1;continue _;}e=e+1|0;}}return !Jz(a.gL)?0:1;case 1:$z=ACx(a,g,
h,i);if(C()){break _;}g=$z;if(g==f.qb&&g>0){L();d=BeP.data[g];g=f.fG;h=f.fq;i=f.fL;f=a.q;$p=2;continue _;}b:{while(true){e=e+1|0;if(e>=c)break b;f=M4(a.gL);if(!b&&Long_gt(f.jl,a.dU))break;MG(a.gL,f);KW(a.kV,f);if(!G4(a,f.fG-8|0,f.fq-8|0,f.fL-8|0,f.fG+8|0,f.fq+8|0,f.fL+8|0))continue;else{g=f.fG;h=f.fq;i=f.fL;continue _;}}}return !Jz(a.gL)?0:1;case 2:d.e8(a,g,h,i,f);if(C()){break _;}c:{while(true){e=e+1|0;if(e>=c)break c;f=M4(a.gL);if(!b&&Long_gt(f.jl,a.dU))break;MG(a.gL,f);KW(a.kV,f);if(!G4(a,f.fG-8|0,f.fq-8
|0,f.fL-8|0,f.fG+8|0,f.fq+8|0,f.fL+8|0))continue;else{g=f.fG;h=f.fq;i=f.fL;$p=1;continue _;}}}return !Jz(a.gL)?0:1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AE$(a,b,c,d){var e,f,g,h,i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=16;f=new DB;g=0;if(g>=1000)return;h=(b+E(a.q,e)|0)-E(a.q,e)|0;i=(c+E(a.q,e)|0)-E(a.q,e)|0;j=(d+E(a.q,e)|0)-E(a.q,e)|0;$p=1;case 1:$z=ACx(a,h,i,j);if(C()){break _;}k=$z;if(k>0){L();l=BeP.data[k];$p=2;continue _;}g=g+1|0;if(g>=1000)return;h=(b+E(a.q,e)|0)-E(a.q,e)|0;i=(c+E(a.q,e)|0)-E(a.q,
e)|0;j=(d+E(a.q,e)|0)-E(a.q,e)|0;continue _;case 2:l.kS(a,h,i,j,f);if(C()){break _;}g=g+1|0;if(g>=1000)return;h=(b+E(a.q,e)|0)-E(a.q,e)|0;i=(c+E(a.q,e)|0)-E(a.q,e)|0;j=(d+E(a.q,e)|0)-E(a.q,e)|0;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ADL(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Dy(a.ql);d=K((c.R-2.0)/16.0);e=K((c.V+2.0)/16.0);f=K((c.S-2.0)/16.0);g=K((c.W+2.0)/16.0);while(d<=e){h=f;while(h<=g){if(C4(a,d,h)){$p=1;continue _;}h=h+1|0;}d=d+1|0;}return a.ql;case 1:$z=ZV(a,d,h);if(C()){break _;}i=$z;AJ1(i,b,c,a.ql);a:while(true){h=h+1|0;while(h>g){d=d+1|0;if(d>e)break a;h=f;}if(!C4(a,d,h))continue;else
{continue _;}}return a.ql;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ANg(a,b,c){var d,e,f,g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=K((c.R-2.0)/16.0);e=K((c.V+2.0)/16.0);f=K((c.S-2.0)/16.0);g=K((c.W+2.0)/16.0);h=Ci();while(d<=e){i=f;while(i<=g){if(C4(a,d,i)){$p=1;continue _;}i=i+1|0;}d=d+1|0;}return h;case 1:$z=ZV(a,d,i);if(C()){break _;}j=$z;AMl(j,b,c,h);a:while(true){i=i+1|0;while(i>g){d=d+1|0;if(d>e)break a;i=f;}if(!C4(a,d,i))continue;else
{continue _;}}return h;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AWJ(a){return a.dZ;}
function AGu(a,b,c,d){var e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!Mo(a,b,c,d))return;$p=1;case 1:$z=XX(a,b,d);if(C()){break _;}e=$z;SN(e);return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function Yu(a,b){var c,d;c=0;d=0;while(d<a.dZ.s){if(P8(b,Dl(Y(a.dZ,d))))c=c+1|0;d=d+1|0;}return c;}
function AQe(a,b){var c,d;DF(a.dZ,b);c=0;while(c<a.cv.s){Y(a.cv,c);d=0;while(d<b.s){Y(b,d);d=d+1|0;}c=c+1|0;}}
function AQ4(a,b){DF(a.l7,b);}
function AH_(a,b,c,d,e,f){var g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACx(a,c,d,e);if(C()){break _;}g=$z;L();h=BeP.data[g];i=BeP.data[b];$p=2;case 2:$z=i.hx(a,c,d,e);if(C()){break _;}j=$z;if(f)j=null;if(!(b>0&&h===null)&&h!==BfY&&h!==BgE&&h!==BfZ&&h!==BgF&&h!==Bgp)return 0;if(j===null){$p=3;continue _;}$p=4;continue _;case 3:$z=i.fT(a,c,d,e);if(C()){break _;}b=$z;return !b
?0:1;case 4:$z=AM8(a,j);if(C()){break _;}b=$z;if(!b)return 0;$p=3;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function ARW(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=K(b.d);f=K(b.j);g=K(b.e);h=d+32.0|0;i=e-h|0;j=f-h|0;k=g-h|0;l=e+h|0;m=f+h|0;n=g+h|0;o=new Iu;$p=1;case 1:AEv(o,a,i,j,k,l,m,n);if(C()){break _;}return APs(A2H(o),b,c,d);default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AJw(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=K(b.d);h=K(b.j);i=K(b.e);j=f+32.0|0;k=g-j|0;l=h-j|0;m=i-j|0;n=g+j|0;o=h+j|0;p=i+j|0;q=new Iu;$p=1;case 1:AEv(q,a,k,l,m,n,o,p);if(C()){break _;}return AGa(A2H(q),b,c,d,e,f);default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function Fj(a,b,c,d,e){return G4(a,b-e|0,c-e|0,d-e|0,b+e|0,c+e|0,d+e|0);}
function XI(){var b,c;Bkt=$rt_createFloatArray(16);Bkv=0;b=0;while(b<=15){c=1.0-b/15.0;Bkt.data[b]=(1.0-c)/(c*3.0+1.0)*0.949999988079071+0.05000000074505806;b=b+1|0;}}
function L1(){var a=this;D.call(a);a.up=null;a.zq=null;a.ls=0;a.Ew=0.0;a.Ev=0.0;a.EW=0;a.ma=0;a.my=0;a.nv=0;a.qf=0;a.rR=0;a.zO=0;a.Ak=0.0;a.zQ=0.0;a.zn=0.0;a.oy=0;}
var BeL=null;function BA(){BA=Bt(L1);A2p();}
function Br(a){var b,c,d,e,f;if(!a.oy)return 0;a.oy=0;if(a.ls>0){if(a.my)WW(32888);if(a.ma)WW(32886);b=a.zO;c=a.ls;d=a.up.buffer;e=a.ls*7|0;ALs(b,0,c,new Int32Array(d,0,e));if(a.my)Tq(32888);if(a.ma)Tq(32886);}f=a.nv*4|0;WA(a);return f;}
function WA(a){a.ls=0;a.nv=0;a.qf=0;}
function Bz(a){Gm(a,7);}
function Gm(a,b){if(a.oy)Br(a);a.oy=1;WA(a);a.zO=b;a.ma=0;a.my=0;a.rR=0;}
function AJy(a,b,c){a.my=1;a.Ew=b;a.Ev=c;}
function Cq(a,b,c,d){Pe(a,b*255.0|0,c*255.0|0,d*255.0|0);}
function Gz(a,b,c,d,e){Qn(a,b*255.0|0,c*255.0|0,d*255.0|0,e*255.0|0);}
function Pe(a,b,c,d){Qn(a,b,c,d,255);}
function Qn(a,b,c,d,e){if(!a.rR){if(b>255)b=255;if(c>255)c=255;if(d>255)d=255;if(e>255)e=255;if(b<0)b=0;if(c<0)c=0;if(d<0)d=0;if(e<0)e=0;a.ma=1;a.EW=e<<24|d<<16|c<<8|b;}}
function G(a,b,c,d,e,f){AJy(a,e,f);Bf(a,b,c,d);}
function Bf(a,b,c,d){var e,f,g,h,i;if(a.qf>65534)return;a.qf=a.qf+1|0;a.ls=a.ls+1|0;e=a.nv;f=a.up;g=a.zq;h=e+0|0;i=b+a.Ak;g[h]=i;h=e+1|0;i=c+a.zQ;g[h]=i;h=e+2|0;i=d+a.zn;g[h]=i;if(a.my){h=e+3|0;i=a.Ew;g[h]=i;h=e+4|0;i=a.Ev;g[h]=i;}if(a.ma){h=e+5|0;e=a.EW;f[h]=e;}a.nv=a.nv+7|0;}
function ER(a,b){Pe(a,b>>16&255,b>>8&255,b&255);}
function ADo(a){a.rR=1;}
function Dd(a,b,c,d){Cj(b,c,d);}
function E_(a,b,c,d){a.Ak=b;a.zQ=c;a.zn=d;}
function A2p(){var b,c;b=new L1;BA();b.ls=0;b.ma=0;b.my=0;b.nv=0;b.qf=0;b.rR=0;b.oy=0;c=new ArrayBuffer(2097152);b.up=new Int32Array(c);b.zq=new Float32Array(c);BeL=b;}
function ANh(){var a=this;D.call(a);a.fM=0;a.fJ=0;}
function FK(a,b){var c=new ANh();A0d(c,a,b);return c;}
function A0d(a,b,c){var d,e;a.fM=b;a.fJ=c;d=1;while(true){c=a.fM;e=d+1|0;if((c/e|0)<320)break;if((a.fJ/e|0)<240)break;d=e;}a.fM=a.fM/d|0;a.fJ=a.fJ/d|0;}
function AEq(a){return a.fM;}
function Zf(a){return a.fJ;}
function Gh(){D.call(this);this.mU=0.0;}
function BkA(){var a=new Gh();Ng(a);return a;}
function Ng(a){a.mU=0.0;}
function KL(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s;h=(f>>24&255)/255.0;i=(f>>16&255)/255.0;j=(f>>8&255)/255.0;k=(f&255)/255.0;l=(g>>24&255)/255.0;m=(g>>16&255)/255.0;n=(g>>8&255)/255.0;o=(g&255)/255.0;Bc(3553);Ba(3042);Bc(3008);Df(770,771);BA();p=BeL;Bz(p);Gz(p,i,j,k,h);q=d;r=c;Bf(p,q,r,0.0);s=b;Bf(p,s,r,0.0);Gz(p,m,n,o,l);r=e;Bf(p,s,r,0.0);Bf(p,q,r,0.0);Br(p);Bc(3042);Ba(3008);Ba(3553);}
function DG(a,b,c,d,e,f){Cy(b,c,d-(Dw(b,c)/2|0)|0,e,f);}
function Hv(a,b,c,d,e,f){Cy(b,c,d,e,f);}
function CH(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o;BA();h=BeL;Bz(h);i=b+0|0;j=c+g|0;k=a.mU;l=(d+0|0)*0.00390625;m=(e+g|0)*0.00390625;G(h,i,j,k,l,m);n=b+f|0;o=a.mU;k=(d+f|0)*0.00390625;G(h,n,j,o,k,m);m=c+0|0;o=a.mU;j=(e+0|0)*0.00390625;G(h,n,m,o,k,j);G(h,i,m,a.mU,l,j);Br(h);}
function CS(){var a=this;Gh.call(a);a.J=null;a.bm=0;a.bC=0;a.bG=null;a.pT=0;a.bZ=null;}
function BkB(){var a=new CS();DQ(a);return a;}
function DQ(a){Ng(a);a.bG=Ci();a.pT=0;}
function AFE(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=0;if(e>=a.bG.s)return;f=Y(a.bG,e);g=a.J;$p=1;case 1:ACU(f,g,b,c);if(C()){break _;}e=e+1|0;if(e>=a.bG.s)return;f=Y(a.bG,e);g=a.J;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function YP(a,b,c){var d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!=1)return;d=a.J;e=null;$p=1;case 1:ADV(d,e);if(C()){break _;}d=a.J;$p=2;case 2:AFj(d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function Zo(a,b,c,d){var e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!d){e=0;while(true){if(e>=a.bG.s)break a;f=Y(a.bG,e);if(R6(f,b,c)){$p=1;continue _;}e=e+1|0;}}}return;case 1:a.iF(f);if(C()){break _;}while(true){e=e+1|0;if(e>=a.bG.s)break;f=Y(a.bG,e);if(!R6(f,b,c))continue;else{continue _;}}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function A2y(a,b,c,d){return;}
function AMU(a,b){return;}
function AP9(a,b,c,d){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.J=b;a.bZ=b.e_;a.bm=c;a.bC=d;$p=1;case 1:a.hW();if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function AP7(a){return;}
function AG8(a){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(FA()){$p=1;continue _;}if(!DU())return;$p=2;continue _;case 1:ZA(a);if(C()){break _;}if(FA()){continue _;}if(!DU())return;$p=2;case 2:ASA(a);if(C()){break _;}if(!DU())return;continue _;default:E$();}}C3().s(a,$p);}
function ZA(a){var b,c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!Cx()){a.Cg(Bj(ARX(),a.bm)/a.J.cq|0,(a.bC-(Bj(XT(),a.bC)/a.J.bF|0)|0)-1|0,CV());return;}b=Bj(ARX(),a.bm)/a.J.cq|0;c=(a.bC-(Bj(XT(),a.bC)/a.J.bF|0)|0)-1|0;d=CV();$p=1;case 1:a.I5(b,c,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function ASA(a){var b,c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!CU())return;Bd();if(Bec===null)b=0;else{c=$rt_str(Bec.key);b=Bec===null?32:Bi(c)>1?0:Z(c,0);}d=Bh();$p=1;case 1:a.pb(b,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function A3h(a){return;}
function AH9(a){return;}
function ABh(a){var b,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;$p=1;case 1:AIF(a,b);if(C()){break _;}return;default:E$();}}C3().s(a,b,$p);}
function AIF(a,b){var c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.J.A!==null){KL(a,0,0,a.bm,a.bC,1610941696,(-1607454656));return;}Bc(2896);Bc(2912);BA();c=BeL;d=3553;e=a.J.bo;f=B(165);$p=1;case 1:$z=AHu(e,f);if(C()){break _;}g=$z;Cp(d,g);BT(1.0,1.0,1.0,1.0);Bz(c);ER(c,4210752);h=a.bC;i=a.bC/32.0;j=b;G(c,0.0,h,0.0,0.0,i+j);G(c,a.bm,a.bC,
0.0,a.bm/32.0,a.bC/32.0+j);k=a.bm;l=a.bm/32.0;m=0+b|0;G(c,k,0.0,0.0,l,m);G(c,0.0,0.0,0.0,0.0,m);Br(c);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AVs(a){return 1;}
function AFe(){var a=this;D.call(a);a.lb=null;a.jA=0;a.ih=0;a.vH=0;}
function A_y(a){var b=new AFe();A4Q(b,a);return b;}
function A4Q(a,b){a.lb=J(D,b);a.jA=b;a.ih=0;a.vH=0;}
function S6(a,b){var c,d;c=a.ih;while(true){a.ih=a.ih+1|0;if(a.ih>=a.jA)a.ih=0;if(a.ih==c){c=a.jA;a.jA=a.jA+(a.jA/2|0)|0;d=a.lb;a.lb=J(D,a.jA);Di(d,0,a.lb,0,c);return S6(a,b);}if(a.lb.data[a.ih]!==null)continue;else break;}a.lb.data[a.ih]=b;a.vH=a.vH+1|0;return a.ih;}
function ANM(a,b){if(b<a.jA&&b>=0)return a.lb.data[b];return null;}
function Ml(){D.call(this);}
function Es(){var a=this;Ml.call(a);a.eu=0.0;a.es=0.0;a.et=0.0;a.er=0.0;a.ex=0.0;a.ey=0.0;a.ev=0.0;a.ew=0.0;a.eC=0.0;a.eA=0.0;a.eB=0.0;a.ez=0.0;a.gW=0.0;a.gX=0.0;a.gU=0.0;a.gV=0.0;}
function M9(){var a=new Es();A44(a);return a;}
function A44(a){Fp(a);}
function Fp(a){a.eu=1.0;a.es=0.0;a.et=0.0;a.er=0.0;a.ex=0.0;a.ey=1.0;a.ev=0.0;a.ew=0.0;a.eC=0.0;a.eA=0.0;a.eB=1.0;a.ez=0.0;a.gW=0.0;a.gX=0.0;a.gU=0.0;a.gV=1.0;return a;}
function Ku(a){a.eu=0.0;a.es=0.0;a.et=0.0;a.er=0.0;a.ex=0.0;a.ey=0.0;a.ev=0.0;a.ew=0.0;a.eC=0.0;a.eA=0.0;a.eB=0.0;a.ez=0.0;a.gW=0.0;a.gX=0.0;a.gU=0.0;a.gV=0.0;return a;}
function GR(a,b){a.eu=b.eu;a.es=b.es;a.et=b.et;a.er=b.er;a.ex=b.ex;a.ey=b.ey;a.ev=b.ev;a.ew=b.ew;a.eC=b.eC;a.eA=b.eA;a.eB=b.eB;a.ez=b.ez;a.gW=b.gW;a.gX=b.gX;a.gU=b.gU;a.gV=b.gV;return a;}
function TU(a,b){CJ(b,a.eu);CJ(b,a.es);CJ(b,a.et);CJ(b,a.er);CJ(b,a.ex);CJ(b,a.ey);CJ(b,a.ev);CJ(b,a.ew);CJ(b,a.eC);CJ(b,a.eA);CJ(b,a.eB);CJ(b,a.ez);CJ(b,a.gW);CJ(b,a.gX);CJ(b,a.gU);CJ(b,a.gV);return a;}
function NX(a,b){b=b.data;b[0]=a.eu;b[1]=a.es;b[2]=a.et;b[3]=a.er;b[4]=a.ex;b[5]=a.ey;b[6]=a.ev;b[7]=a.ew;b[8]=a.eC;b[9]=a.eA;b[10]=a.eB;b[11]=a.ez;b[12]=a.gW;b[13]=a.gX;b[14]=a.gU;b[15]=a.gV;return a;}
function A$u(a,b){return U$(a,b,a);}
function ZE(a,b){a.eu=a.eu*b.fy;a.es=a.es*b.fy;a.et=a.et*b.fy;a.er=a.er*b.fy;a.ex=a.ex*b.fA;a.ey=a.ey*b.fA;a.ev=a.ev*b.fA;a.ew=a.ew*b.fA;a.eC=a.eC*b.fz;a.eA=a.eA*b.fz;a.eB=a.eB*b.fz;a.ez=a.ez*b.fz;return a;}
function ATQ(a,b,c){return W0(a,b,c,a);}
function W0(a,b,c,d){return A6A(b,c,a,d);}
function A6A(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;if(e===null)e=M9();f=b;g=GG(f);h=Gt(f);i=1.0-g;j=c.fy*c.fA;k=c.fA*c.fz;l=c.fy*c.fz;m=c.fy*h;n=c.fA*h;o=c.fz*h;p=c.fy*c.fy*i+g;b=j*i;q=b+o;r=l*i;s=r-n;t=b-o;u=c.fA*c.fA*i+g;b=k*i;v=b+m;w=r+n;x=b-m;y=c.fz*c.fz*i+g;z=d.eu*p+d.ex*q+d.eC*s;ba=d.es*p+d.ey*q+d.eA*s;bb=d.et*p+d.ev*q+d.eB*s;bc=d.er*p+d.ew*q+d.ez*s;bd=d.eu*t+d.ex*u+d.eC*v;be=d.es*t+d.ey*u+d.eA*v;bf=d.et*t+d.ev*u+d.eB*v;r=d.er*t+d.ew*u+d.ez*v;e.eC=d.eu*w+d.ex*x+d.eC*
y;e.eA=d.es*w+d.ey*x+d.eA*y;e.eB=d.et*w+d.ev*x+d.eB*y;e.ez=d.er*w+d.ew*x+d.ez*y;e.eu=z;e.es=ba;e.et=bb;e.er=bc;e.ex=bd;e.ey=be;e.ev=bf;e.ew=r;return e;}
function U$(a,b,c){if(c===null)c=M9();c.gW=c.gW+a.eu*b.fy+a.ex*b.fA+a.eC*b.fz;c.gX=c.gX+a.es*b.fy+a.ey*b.fA+a.eA*b.fz;c.gU=c.gU+a.et*b.fy+a.ev*b.fA+a.eB*b.fz;c.gV=c.gV+a.er*b.fy+a.ew*b.fA+a.ez*b.fz;return c;}
function Ls(a,b){var c;a:{if(b instanceof Es){b:{c:{b=b;if(a.eu!==b.eu)break c;if(a.es!==b.es)break c;if(a.et!==b.et)break c;if(a.er!==b.er)break c;if(a.ex!==b.ex)break c;if(a.ey!==b.ey)break c;if(a.ev!==b.ev)break c;if(a.ew!==b.ew)break c;if(a.eC!==b.eC)break c;if(a.eA!==b.eA)break c;if(a.eB!==b.eB)break c;if(a.ez!==b.ez)break c;if(a.gW!==b.gW)break c;if(a.gX!==b.gX)break c;if(a.gU!==b.gU)break c;if(a.gV===b.gV){c=1;break b;}}c=0;}if(c){c=1;break a;}}c=0;}return c;}
function Ob(){}
function I6(){D.call(this);}
function Wi(){}
function N1(){}
function R3(){}
function Md(){}
function U4(){var a=this;I6.call(a);a.fy=0.0;a.fA=0.0;a.fz=0.0;}
function BkC(){var a=new U4();A$a(a);return a;}
function A$a(a){return;}
function L2(a,b,c,d){a.fy=b;a.fA=c;a.fz=d;}
function Wg(){}
function RX(){}
function G_(){var a=this;I6.call(a);a.lf=0.0;a.lg=0.0;a.le=0.0;a.pf=0.0;}
function A2Z(){var a=new G_();AZQ(a);return a;}
function AZQ(a){return;}
function VH(a,b){a.lf=b.lf;a.lg=b.lg;a.le=b.le;a.pf=b.pf;return a;}
function A_v(a){return a.lf;}
function ATk(a){return a.lg;}
function AZ0(a){return a.le;}
function A5y(a){return a.pf;}
function Ta(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(Dl(a)!==Dl(b))return 0;c=b;if(a.lf===c.lf&&a.lg===c.lg&&a.le===c.le&&a.pf===c.pf)return 1;return 0;}
function S1(){var a=this;D.call(a);a.B_=null;a.B$=null;}
function AIC(a){var b,c;b=a.B_;c=a.B$;Fv(b);CM(c,null);}
function AO0(){Fg.call(this);}
function A42(a){var b=new AO0();AYz(b,a);return b;}
function AYz(a,b){WU(a,b);}
function H7(){}
function Uv(){}
function AC0(){var a=this;D.call(a);a.fO=null;a.iC=null;a.kE=null;a.p7=0;a.rg=0;a.ik=null;}
function AJA(a,b,c,d){var e=new AC0();AUl(e,a,b,c,d);return e;}
function AUl(a,b,c,d,e){a.ik=b;a.rg=a.ik.d7;a.fO=c;a.iC=d;a.p7=e;}
function Fq(a){return a.fO===null?0:1;}
function Fm(a){var b;Rv(a);if(a.fO===null){b=new J1;O(b);M(b);}b=a.fO.zp;a.kE=a.fO;a.iC=a.fO;a.fO=a.fO.hv;a.p7=a.p7+1|0;return b;}
function AHh(a){var b,c;if(a.kE===null){b=new D2;O(b);M(b);}b=a.ik;c=a.kE;if(c.iz===null)b.pE=c.hv;else c.iz.hv=c.hv;if(c.hv===null)b.qn=c.iz;else c.hv.iz=c.iz;b.gQ=b.gQ-1|0;b.d7=b.d7+1|0;if(a.kE===a.iC){a.iC=!Fq(a)?null:a.fO.iz;a.p7=a.p7-1|0;}else if(a.kE===a.fO)a.fO=!ZS(a)?null:a.iC.hv;a.rg=a.ik.d7;a.kE=null;}
function ZS(a){return a.iC===null?0:1;}
function ABu(a,b){var c;Rv(a);c=new RF;c.zp=b;c.iz=a.iC;c.hv=a.fO;if(a.iC!==null)a.iC.hv=c;else a.ik.pE=c;if(a.fO!==null)a.fO.iz=c;else a.ik.qn=c;a.iC=c;b=a.ik;b.gQ=b.gQ+1|0;b=a.ik;b.d7=b.d7+1|0;a.rg=a.ik.d7;a.kE=null;}
function Rv(a){var b;if(a.rg>=a.ik.d7)return;b=new KS;O(b);M(b);}
function RF(){var a=this;D.call(a);a.zp=null;a.hv=null;a.iz=null;}
function BkD(){var a=new RF();A0M(a);return a;}
function A0M(a){return;}
function KI(){var a=this;D.call(a);a.zm=null;a.kB=null;a.hd=null;a.l1=null;a.Cf=null;a.wK=null;a.sW=0;a.DZ=0;}
var BkE=0;var BeK=null;function AHu(a,b){var c,d,e,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=CP(BeK,b);if(c!==null)return c.f5;try{AFf(a.kB);WV(a.kB);d=Q2(a.kB,0);if(IA(b,B(374))){a.sW=1;e=Kf(Jv(b,7));$p=1;continue _;}if(DC(b,B(179))&&AIH().o.pQ)BkE=1;e=Kf(b);$p=2;continue _;}catch($$e){$$je=Bg($$e);if($$je instanceof BW){}else{throw $$e;}}b=new B6;Bl(b,B(375));M(b);case 1:a:{try{$z=Zb(a,e);if(C()){break _;}c=$z;LL(a,c,d);a.sW
=0;Re(BeK,b,CY(d));}catch($$e){$$je=Bg($$e);if($$je instanceof BW){break a;}else{throw $$e;}}return d;}b=new B6;Bl(b,B(375));M(b);case 2:a:{try{$z=Zb(a,e);if(C()){break _;}c=$z;LL(a,c,d);BkE=0;Re(BeK,b,CY(d));}catch($$e){$$je=Bg($$e);if($$je instanceof BW){break a;}else{throw $$e;}}return d;}b=new B6;Bl(b,B(375));M(b);default:E$();}}C3().s(a,b,c,d,e,$p);}
function AHB(a,b){var c;EA(a.kB);WV(a.kB);c=Q2(a.kB,0);LL(a,b,c);BQ(a.zm,CY(c),b);return c;}
function LL(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;Eb(a,c);if(!BkE){Ej(3553,10241,9728);Ej(3553,10240,9728);}else{Ej(3553,10241,9986);Ej(3553,10240,9728);Ej(3553,33085,4);}if(a.DZ){Ej(3553,10241,9729);Ej(3553,10240,9729);}if(!a.sW){Ej(3553,10242,10497);Ej(3553,10243,10497);}else{Ej(3553,10242,10496);Ej(3553,10243,10496);}d=b.xv;e=b.Ds;f=b.t1;g=$rt_createByteArray(Bj(d,e)*4|0);h=g.data;i=0;while(true){j=f.data;if(i>=j.length)break;k=j[i]>>24&255;l=j[i]>>16&255;m=j[i]>>8&255;n=j[i]>>0&255;if
(a.wK!==null&&a.wK.ee){o=l*30|0;l=((o+(m*59|0)|0)+(n*11|0)|0)/100|0;m=(o+(m*70|0)|0)/100|0;n=(o+(n*70|0)|0)/100|0;}c=i*4|0;h[c+0|0]=l<<24>>24;h[c+1|0]=m<<24>>24;h[c+2|0]=n<<24>>24;h[c+3|0]=k<<24>>24;i=i+1|0;}a:{EA(a.hd);UO(a.hd,g);b=a.hd;EN(b,0);Nq(b,h.length);SB(3553,0,6408,d,e,0,6408,5121,a.hd);if(BkE){p=1;while(true){if(p>4)break a;o=d>>(p-1|0);q=d>>p;r=e>>p;EA(a.l1);s=0;while(s<q){t=0;while(t<r){b=a.hd;c=s*2|0;i=c+0|0;k=t*2|0;n=Bj(k+0|0,o);u=KQ(b,(i+n|0)*4|0);b=a.hd;c=c+1|0;v=KQ(b,(c+n|0)*4|0);b=a.hd;k=
Bj(k+1|0,o);w=KQ(b,(c+k|0)*4|0);x=KQ(a.hd,(i+k|0)*4|0);y=Lf(a,Lf(a,u,v),Lf(a,w,x));AA7(a.l1,(s+Bj(t,q)|0)*4|0,y);t=t+1|0;}s=s+1|0;}SB(3553,p,6408,q,r,0,6408,5121,a.l1);z=a.hd;a.hd=a.l1;a.l1=z;p=p+1|0;}}}}
function AD4(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=B(376);$p=1;case 1:$z=AHu(a,b);if(C()){break _;}d=$z;return d;default:E$();}}C3().s(a,b,c,d,$p);}
function G9(a,b){U(a.Cf,b);b.pa();}
function Lf(a,b,c){return ((((b&(-16777216))>>24&255)+((c&(-16777216))>>24&255)|0)>>1<<24)+(((b&16711422)+(c&16711422)|0)>>1)|0;}
function Zb(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEU(b);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,$p);}
function Eb(a,b){if(b<0)return;Cp(3553,b);}
function ADE(){BkE=0;}
function Wh(){var a=this;D.call(a);a.sd=null;a.xu=0;a.tl=0;}
function BkF(a,b,c){var d=new Wh();AOJ(d,a,b,c);return d;}
function AOJ(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.sd=$rt_createIntArray(256);a.xu=0;e=Kf(c);$p=1;case 1:$z=AEU(e);if(C()){break _;}f
=$z;g=f.xv;e=f.t1;h=0;while(h<256){i=h%16|0;j=h/16|0;k=7;i=i*8|0;l=j*8|0;a:{while(k>=0){m=i+k|0;n=1;o=0;while(o<8&&n){if((e.data[m+Bj(l+o|0,g)|0]&255)>0)n=0;o=o+1|0;}if(!n)break a;k=k+(-1)|0;}}if(h==32)k=2;a.sd.data[h]=k+2|0;h=h+1|0;}a.xu=AHB(d,f);a.tl=I2(288);BA();p=BeL;q=0;while(q<256){FJ(a.tl+q|0,4864);Bz(p);r=(q%16|0)*8|0;s=(q/16|0)*8|0;t=r;u=t/128.0+0.0;v=s;w=(v+7.989999771118164)/128.0+0.0;G(p,0.0,7.989999771118164,0.0,u,w);x=(t+7.989999771118164)/128.0+0.0;G(p,7.989999771118164,7.989999771118164,0.0,
x,w);y=v/128.0+0.0;G(p,7.989999771118164,0.0,0.0,x,y);G(p,0.0,0.0,0.0,u,y);Br(p);Ee();q=q+1|0;}l=0;while(l<32){z=(l>>3&1)*85|0;ba=((l>>2&1)*170|0)+z|0;bb=((l>>1&1)*170|0)+z|0;bc=((l>>0&1)*170|0)+z|0;if(l==6)ba=ba+85|0;bd=l<16?0:1;if(b.ee){g=ba*30|0;ba=((g+(bb*59|0)|0)+(bc*11|0)|0)/100|0;bb=(g+(bb*70|0)|0)/100|0;bc=(g+(bc*70|0)|0)/100|0;}if(bd){ba=ba/4|0;bb=bb/4|0;bc=bc/4|0;}FJ((a.tl+256|0)+l|0,4864);F8(ba/255.0,bb/255.0,bc/255.0);Ee();l=l+1|0;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,
s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function Cy(a,b,c,d,e){SK(a,b,c+1|0,d+1|0,e,1);ED(a,b,c,d,e);}
function ED(a,b,c,d,e){SK(a,b,c,d,e,0);}
function SK(a,b,c,d,e,f){var g,h,i,j,k,l,m;if(b===null)return;if(f)e=((e&16579836)>>2)+(e&(-16777216))|0;Cp(3553,a.xu);g=(e>>16&255)/255.0;h=(e>>8&255)/255.0;i=(e&255)/255.0;j=(e>>24&255)/255.0;if(j===0.0)j=1.0;BT(g,h,i,j);B3();Bw(c,d,0.0);k=0;while(k<Bi(b)){c=k;while(true){d=Bi(b);k=c+1|0;if(d<=k)break;if(Z(b,c)!=167)break;l=UF(B(377),Z(AKk(b),k));c=c+2|0;}if(c<Bi(b)){m=Vl(Z(b,c));if(m>=0){FU((a.tl+m|0)+32|0);Bw(a.sd.data[m+32|0],0.0,0.0);}}}BE();}
function Dw(a,b){var c,d,e;if(b===null)return 0;c=0;d=0;while(d<Bi(b)){if(Z(b,d)==167)d=d+1|0;else{e=Vl(Z(b,d));if(e>=0)c=c+a.sd.data[e+32|0]|0;}d=d+1|0;}return c;}
function AQC(a,b){var c,d,e,f;c=Ci();d=ANn(b,B(158)).data;e=d.length;f=0;while(f<e){U(c,d[f]);f=f+1|0;}return c;}
function Qm(){var a=this;D.call(a);a.FV=0;a.FU=0;}
function BkG(){var a=new Qm();A$z(a);return a;}
function A$z(a){return;}
function YB(a){AMI(1);a.FV=0;a.FU=0;}
function AFA(a){Lq();MD();AMI(0);}
function AKX(){var a=this;Eu.call(a);a.o7=null;a.rj=null;a.oC=null;a.s1=null;a.tf=0;}
function Bau(){var a=new AKX();A4v(a);return a;}
function A4v(a){L();HE(a,BfY.ba+1|0);a.o7=$rt_createFloatArray(256);a.rj=$rt_createFloatArray(256);a.oC=$rt_createFloatArray(256);a.s1=$rt_createFloatArray(256);a.tf=0;a.w1=2;}
function A0a(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;a.tf=a.tf+1|0;b=0;while(b<16){c=0;while(c<16){d=0.0;e=c-2|0;while(e<=c){f=b&15;g=e&15;d=d+a.o7.data[f+(g*16|0)|0];e=e+1|0;}h=a.rj.data;i=b+(c*16|0)|0;h[i]=d/3.200000047683716+a.oC.data[i]*0.800000011920929;c=c+1|0;}b=b+1|0;}b=0;while(b<16){c=0;while(c<16){j=a.oC.data;i=b+(c*16|0)|0;j[i]=j[i]+a.s1.data[i]*0.05000000074505806;if(a.oC.data[i]<0.0)a.oC.data[i]=0.0;j=a.s1.data;j[i]=j[i]-0.30000001192092896;if(BP()<0.2)a.s1.data[i]=0.5;c=c+1|0;}b=b+1|0;}j=a.rj;a.rj=a.o7;a.o7
=j;c=0;while(c<256){d=a.o7.data[(c-(a.tf*16|0)|0)&255];if(d>1.0)d=1.0;if(d<0.0)d=0.0;k=d*d;i=32.0+k*32.0|0;l=50.0+k*64.0|0;m=255;n=146.0+k*50.0|0;if(a.mF){b=i*30|0;i=((b+(l*59|0)|0)+2805|0)/100|0;l=(b+(l*70|0)|0)/100|0;m=(b+17850|0)/100|0;}j=a.dD.data;b=c*4|0;j[b+0|0]=i<<24>>24;a.dD.data[b+1|0]=l<<24>>24;a.dD.data[b+2|0]=m<<24>>24;a.dD.data[b+3|0]=n<<24>>24;c=c+1|0;}}
function ACl(){var a=this;Eu.call(a);a.oz=null;a.ru=null;a.jT=null;a.sS=null;a.tv=0;}
function BcC(){var a=new ACl();A3o(a);return a;}
function A3o(a){L();HE(a,BfZ.ba+1|0);a.oz=$rt_createFloatArray(256);a.ru=$rt_createFloatArray(256);a.jT=$rt_createFloatArray(256);a.sS=$rt_createFloatArray(256);a.tv=0;a.w1=2;}
function A8S(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;a.tv=a.tv+1|0;b=0;while(b<16){c=0;while(c<16){d=0.0;e=Bq(c*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;f=Bq(b*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;g=b-1|0;while(true){h=b+1|0;if(g>h)break;i=c-1|0;while(i<=(c+1|0)){j=(g+e|0)&15;h=(i+f|0)&15;d=d+a.oz.data[j+(h*16|0)|0];i=i+1|0;}g=g+1|0;}k=a.ru.data;l=b+(c*16|0)|0;d=d/10.0;m=a.jT.data;e=(b+0|0)&15;j=((c+0|0)&15)*16|0;n=m[e+j|0];m=a.jT.data;h=h&15;n=n+m[h+j|0];m=a.jT.data;c=c+1|0;j=(c&15)*16|0;k[l]
=d+(n+m[h+j|0]+a.jT.data[e+j|0])/4.0*0.800000011920929;m=a.jT.data;m[l]=m[l]+a.sS.data[l]*0.009999999776482582;if(a.jT.data[l]<0.0)a.jT.data[l]=0.0;m=a.sS.data;m[l]=m[l]-0.05999999865889549;if(BP()<0.005)a.sS.data[l]=1.5;}b=b+1|0;}m=a.ru;a.ru=a.oz;a.oz=m;c=0;while(c<256){d=a.oz.data[(c-((a.tv/3|0)*16|0)|0)&255]*2.0;if(d>1.0)d=1.0;if(d<0.0)d=0.0;j=d*100.0+155.0|0;n=d*d;h=n*255.0|0;l=n*d*d*128.0|0;if(a.mF){b=j*30|0;j=((b+(h*59|0)|0)+(l*11|0)|0)/100|0;h=(b+(h*70|0)|0)/100|0;l=(b+(l*70|0)|0)/100|0;}m=a.dD.data;b
=c*4|0;m[b+0|0]=j<<24>>24;a.dD.data[b+1|0]=h<<24>>24;a.dD.data[b+2|0]=l<<24>>24;a.dD.data[b+3|0]=(-1);c=c+1|0;}}
function AR7(){var a=this;Eu.call(a);a.ms=null;a.oL=null;}
function AVH(a){var b=new AR7();AZr(b,a);return b;}
function AZr(a,b){L();HE(a,Bgp.ba+(b*16|0)|0);a.ms=$rt_createFloatArray(320);a.oL=$rt_createFloatArray(320);}
function A3v(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=0;while(b<16){c=0;while(c<20){d=18;e=a.ms.data;f=c+1|0;g=e[b+((f%20|0)*16|0)|0]*18.0;h=b-1|0;while(h<=(b+1|0)){i=c;while(i<=f){if(h>=0&&i>=0&&h<16&&i<20)g=g+a.ms.data[h+(i*16|0)|0];d=d+1|0;i=i+1|0;}h=h+1|0;}e=a.oL.data;j=b+(c*16|0)|0;e[j]=g/(d*1.059999942779541);if(c>=19)a.oL.data[j]=BP()*BP()*BP()*4.0+BP()*0.10000000149011612+0.20000000298023224;c=f;}b=b+1|0;}e=a.oL;a.oL=a.ms;a.ms=e;f=0;while(f<256){k=a.ms.data[f]*1.7999999523162842;if(k>1.0)k=1.0;if(k<0.0)k=
0.0;l=k*155.0+100.0|0;g=k*k;m=g*255.0|0;j=g*k*k*k*k*k*k*k*k*255.0|0;n=255;if(k<0.5)n=0;if(a.mF){c=l*30|0;l=((c+(m*59|0)|0)+(j*11|0)|0)/100|0;m=(c+(m*70|0)|0)/100|0;j=(c+(j*70|0)|0)/100|0;}e=a.dD.data;b=f*4|0;e[b+0|0]=l<<24>>24;a.dD.data[b+1|0]=m<<24>>24;a.dD.data[b+2|0]=j<<24>>24;a.dD.data[b+3|0]=n<<24>>24;f=f+1|0;}}
function Xs(){}
function AAv(){var a=this;D.call(a);a.iI=null;a.bM=null;a.iH=null;a.eK=null;a.gO=null;a.c9=null;a.ds=0;a.dF=0;a.ka=0;a.y3=0;a.bO=null;a.D$=null;a.px=0;a.or=0;a.xN=0;a.xm=0;a.qs=0;a.qt=0;a.qu=0;a.ta=0;a.s_=0;a.tb=0;a.sa=0;a.s9=0;a.lk=0;a.xt=0;a.Hn=null;a.HW=null;a.se=0;a.r0=0;a.DT=0;a.sx=0;a.qC=0;a.o0=null;a.Hh=0;a.GO=0;a.rI=0.0;a.rH=0.0;a.rG=0.0;a.tJ=0.0;a.q$=0;}
function BaT(a,b){var c=new AAv();A2k(c,a,b);return c;}
function A2k(a,b,c){var d,e,f,g,h,i,j;a.iI=Ci();a.eK=Ci();a.px=0;a.sa=(-1);a.Hn=$rt_createIntArray(50000);a.HW=Rh(64);a.o0=Ci();a.Hh=0;a.GO=I2(1);a.rI=(-9999.0);a.rH=(-9999.0);a.rG=(-9999.0);a.q$=0;a.bO=b;a.iH=c;a.y3=I2(786432);a.or=I2(3);B3();FJ(a.or,4864);Zg(a);Ee();BE();BA();d=BeL;a.xN=a.or+1|0;FJ(a.xN,4864);e=(-384);while(e<=384){f=(-384);while(f<=384){Bz(d);g=e+0|0;h=f+0|0;Bf(d,g,16.0,h);i=e+64|0;Bf(d,i,16.0,h);f=f+64|0;h=f;Bf(d,i,16.0,h);Bf(d,g,16.0,h);Br(d);}e=e+64|0;}Ee();a.xm=a.or+2|0;FJ(a.xm,4864);Bz(d);f
=(-384);while(f<=384){j=(-384);while(j<=384){g=f+64|0;h=j+0|0;Bf(d,g,(-16.0),h);i=f+0|0;Bf(d,i,(-16.0),h);j=j+64|0;h=j;Bf(d,i,(-16.0),h);Bf(d,g,(-16.0),h);}f=f+64|0;}Br(d);Ee();}
function Zg(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd;if(a.bO.o.du)return;b=new DB;BA();c=BeL;Bz(c);d=0;while(d<1500){a:{e=N(b)*2.0-1.0;f=N(b)*2.0-1.0;g=N(b)*2.0-1.0;h=0.25+N(b)*0.25;i=e*e+f*f+g*g;if(i<1.0&&i>0.01){i=1.0/Ed(i);j=e*i;f=f*i;g=g*i;k=j*100.0;l=f*100.0;m=g*100.0;n=CR(j,g);o=Gt(n);p=GG(n);q=CR(Ed(j*j+g*g),f);r=Gt(q);s=GG(q);t=Cl(b)*3.141592653589793*2.0;u=Gt(t);v=GG(t);w=0;i=0.0*s;e=0.0*r;while(true){if(w>=4)break a;j=((w&2)-1|0)*h;w=w+1|0;x=((w&2)-1|0)*h;y=j*v-x*u;z=x*
v+j*u;ba=y*r+i;bb=e-y*s;bc=bb*o-z*p;bd=z*o+bb*p;Bf(c,k+bc,l+ba,m+bd);}}}d=d+1|0;}Br(c);}
function Q3(a,b){if(a.bM!==null)AKU(a.bM,a);a.rI=(-9999.0);a.rH=(-9999.0);a.rG=(-9999.0);Bgo.n3=b;a.bM=b;a.D$=A8k(b);if(b!==null){ANF(b,a);Jd(a);}}
function Jd(a){var b,c,d,e,f,g,h,i;a:{L();AKn(Be3,a.bO.o.li);a.sa=a.bO.o.hi;if(a.c9!==null){b=0;while(true){if(b>=a.c9.data.length)break a;ARG(a.c9.data[b]);b=b+1|0;}}}b=64<<(3-a.sa|0);if(b>400)b=400;b=(b/16|0)+1|0;a.ds=b;a.dF=8;a.ka=b;a.c9=J(Io,Bj(Bj(a.ds,a.dF),a.ka));a.gO=J(Io,Bj(Bj(a.ds,a.dF),a.ka));c=0;d=0;a.qs=0;a.qt=0;a.qu=0;a.ta=a.ds;a.s_=a.dF;a.tb=a.ka;e=0;while(e<a.eK.s){Y(a.eK,e).i4=0;e=e+1|0;}Dy(a.eK);f=0;while(f<a.ds){g=0;while(g<a.dF){h=0;while(h<a.ka){if(a.c9.data[Bj(Bj(h,a.dF)+g|0,a.ds)+f|0]!==
null)Gf(a.iI,a.c9.data[Bj(Bj(h,a.dF)+g|0,a.ds)+f|0].gl);a.c9.data[Bj(Bj(h,a.dF)+g|0,a.ds)+f|0]=Bbw(a.bM,a.iI,f*16|0,g*16|0,h*16|0,16,a.y3+c|0);a.c9.data[Bj(Bj(h,a.dF)+g|0,a.ds)+f|0].JP=0;a.c9.data[Bj(Bj(h,a.dF)+g|0,a.ds)+f|0].xL=1;a.c9.data[Bj(Bj(h,a.dF)+g|0,a.ds)+f|0].fw=1;i=a.c9.data[Bj(Bj(h,a.dF)+g|0,a.ds)+f|0];b=d+1|0;i.Io=d;KV(a.c9.data[Bj(Bj(h,a.dF)+g|0,a.ds)+f|0]);a.gO.data[Bj(Bj(h,a.dF)+g|0,a.ds)+f|0]=a.c9.data[Bj(Bj(h,a.dF)+g|0,a.ds)+f|0];U(a.eK,a.c9.data[Bj(Bj(h,a.dF)+g|0,a.ds)+f|0]);c=c+3|0;h=h+1
|0;d=b;}g=g+1|0;}f=f+1|0;}if(a.bM!==null){i=a.bM.bg;To(a,K(i.d),K(i.j),K(i.e));P0(a.gO,AYJ(i));}}
function ACC(a,b,c,d){var e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:ARi(Bkr,a.bM,a.iH,a.bO.e_,a.bO.f,d);AHd(Bgo,a.bM,a.iH,a.bO.e_,a.bO.f,a.bO.o,d);a.s9=0;a.lk=0;a.xt=0;e=a.bM.bg;f=e.cs;g=e.d-e.cs;h=d;BkH=f+g*h;BkI=e.b7+(e.j-e.b7)*h;BkJ=e.ct+(e.e-e.ct)*h;BkK=e.cs+(e.d-e.cs)*h;BkL=e.b7+(e.j-e.b7)*h;BkM=e.ct+(e.e-e.ct)*h;i=a.bM.dZ;a.s9=i.s;if(a.bO.o.du)Bc(2912);j=0;while
(true){if(j>=i.s){j=0;if(j>=a.iI.s)return;b=Bkr;c=Y(a.iI,j);$p=1;continue _;}k=Y(i,j);if(Sg(k,b)&&MJ(c,k.L)){if(k!==a.bM.bg)break;if(a.bO.o.cC)break;}j=j+1|0;}a.lk=a.lk+1|0;e=Bgo;$p=2;continue _;case 1:YZ(b,c,d);if(C()){break _;}j=j+1|0;if(j>=a.iI.s)return;b=Bkr;c=Y(a.iI,j);continue _;case 2:ANa(e,k,d);if(C()){break _;}while(true){j=j+1|0;if(j>=i.s){j=0;if(j>=a.iI.s)return;b=Bkr;c=Y(a.iI,j);$p=1;continue _;}k=Y(i,j);if(!Sg(k,b))continue;if(!MJ(c,k.L))continue;if(k!==a.bM.bg)break;if(!a.bO.o.cC)continue;else break;}a.lk
=a.lk+1|0;e=Bgo;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function ALl(a){var b;b=new S;V(b);return T(Be(H(Be(H(Be(H(Be(H(Be(H(b,B(378)),a.sx),B(23)),a.se),B(379)),a.r0),B(380)),a.DT),B(381)),a.qC));}
function X4(a){var b;b=new S;V(b);return T(Be(H(Be(H(Be(H(Be(H(b,B(382)),a.lk),B(23)),a.s9),B(383)),a.xt),B(384)),(a.s9-a.xt|0)-a.lk|0));}
function To(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q;c=b+(-8)|0;d=d+(-8)|0;a.qs=2147483647;a.qt=2147483647;a.qu=2147483647;a.ta=(-2147483648);a.s_=(-2147483648);a.tb=(-2147483648);e=a.ds*16|0;f=e/2|0;g=0;h=e-1|0;while(g<a.ds){i=g*16|0;j=(i+f|0)-c|0;if(j<0)j=j-h|0;i=i-Bj(j/e|0,e)|0;if(i<a.qs)a.qs=i;if(i>a.ta)a.ta=i;k=0;while(k<a.ka){l=k*16|0;m=(l+f|0)-d|0;if(m<0)m=m-h|0;j=l-Bj(m/e|0,e)|0;if(j<a.qu)a.qu=j;if(j>a.tb)a.tb=j;n=0;while(n<a.dF){o=n*16|0;if(o<a.qt)a.qt=o;if(o>a.s_)a.s_=o;p=a.c9.data[Bj(Bj(k,a.dF)+n|0,
a.ds)+g|0];q=p.i4;Sl(p,i,o,j);if(!q&&p.i4)U(a.eK,p);n=n+1|0;}k=k+1|0;}g=g+1|0;}}
function Vs(a,b,c,d){var e,f,g;if(a.bO.o.hi!=a.sa)Jd(a);if(!c){a.se=0;a.r0=0;a.DT=0;a.sx=0;a.qC=0;}e=b.d-a.rI;f=b.j-a.rH;g=b.e-a.rG;if(e*e+f*f+g*g>16.0){a.rI=b.d;a.rH=b.j;a.rG=b.e;To(a,K(b.d),K(b.j),K(b.e));P0(a.gO,AYJ(b));}return 0+YD(a,0,a.gO.data.length,c,d)|0;}
function YD(a,b,c,d,e){var f,g,h,i,j,k,l;Dy(a.o0);f=0;while(b<c){if(!d){a.se=a.se+1|0;if(a.gO.data[b].g2.data[d])a.qC=a.qC+1|0;else if(a.gO.data[b].fw)a.sx=a.sx+1|0;else a.r0=a.r0+1|0;}if(!a.gO.data[b].g2.data[d]&&a.gO.data[b].fw&&a.gO.data[b].xL&&PK(a.gO.data[b],d)>=0){U(a.o0,a.gO.data[b]);f=f+1|0;}b=b+1|0;}g=a.bO.f;h=g.cs+(g.d-g.cs)*e;i=g.b7+(g.j-g.b7)*e;j=g.ct+(g.e-g.ct)*e;k=0;while(k<a.o0.s){l=Y(a.o0,k);B3();Bw(l.BB-h,l.Ep-i,l.Dq-j);FU(PK(l,d));BE();k=k+1|0;}return f;}
function HW(a){if(a.bO.o.du)return;a.px=a.px+1|0;}
function ADc(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bO.o.du)return;Bc(3553);c=OT(a.bM,b);d=c.x;e=c.z;f=c.w;if(a.bO.o.ee){g=d*30.0;d=(g+e*59.0+f*11.0)/100.0;e=(g+e*70.0)/100.0;f=(g+f*70.0)/100.0;}F8(d,e,f);BA();h=BeL;Gw(0);if(!a.bO.o.du)Ba(2912);F8(d,e,f);FU(a.xN);Ba(3553);Bc(2912);Bc(3008);Ba(3042);Df(1,1);B3();BT(1.0,1.0,1.0,1.0);Bw(0.0,0.0,0.0);Bv(0.0,
0.0,0.0,1.0);Bv(HA(a.bM,b)*360.0,1.0,0.0,0.0);i=3553;c=a.iH;j=B(385);$p=1;case 1:$z=AHu(c,j);if(C()){break _;}k=$z;Cp(i,k);Bz(h);G(h,(-30.0),100.0,(-30.0),0.0,0.0);G(h,30.0,100.0,(-30.0),1.0,0.0);G(h,30.0,100.0,30.0,1.0,1.0);G(h,(-30.0),100.0,30.0,0.0,1.0);Br(h);i=3553;c=a.iH;j=B(386);$p=2;case 2:$z=AHu(c,j);if(C()){break _;}k=$z;Cp(i,k);Bz(h);G(h,(-20.0),(-100.0),20.0,1.0,1.0);G(h,20.0,(-100.0),20.0,0.0,1.0);G(h,20.0,(-100.0),(-20.0),0.0,0.0);G(h,(-20.0),(-100.0),(-20.0),1.0,0.0);Br(h);Bc(3553);g=AJs(a.bM,
b);if(g>0.0){BT(g,g,g,g);FU(a.or);}BT(1.0,1.0,1.0,1.0);Bc(3042);Ba(3008);if(!a.bO.o.du)Ba(2912);BE();F8(d*0.20000000298023224+0.03999999910593033,e*0.20000000298023224+0.03999999910593033,f*0.6000000238418579+0.10000000149011612);Bc(3553);FU(a.xm);Ba(3553);Gw(1);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function YN(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bO.o.du)return;if(a.bO.o.li){$p=2;continue _;}Bc(2884);c=a.bO.f.b7;d=a.bO.f.j-a.bO.f.b7;e=b;f=c+d*e;g=32;BA();h=BeL;i=3553;j=a.iH;k
=B(387);$p=1;case 1:$z=AHu(j,k);if(C()){break _;}l=$z;Cp(i,l);Ba(3042);Df(770,771);j=S4(a.bM,b);m=j.x;n=j.z;o=j.w;if(a.bO.o.ee){p=m*30.0;m=(p+n*59.0+o*11.0)/100.0;n=(p+n*70.0)/100.0;o=(p+o*70.0)/100.0;}d=a.bM.bg.bS+(a.bM.bg.d-a.bM.bg.bS)*e+(a.px+b)*0.029999999329447746;e=a.bM.bg.bR+(a.bM.bg.e-a.bM.bg.bR)*e;l=K(d/2048.0);q=K(e/2048.0);c=d-(l*2048|0);d=e-(q*2048|0);p=120.0-f+0.33000001311302185;r=c*4.8828125E-4;s=d*4.8828125E-4;Bz(h);Gz(h,m,n,o,0.800000011920929);t=p;u=(-256);while(u<256){v=(-256);while(v<256)
{i=u+0|0;w=i;x=v+g|0;y=x;c=i*4.8828125E-4+r;d=x*4.8828125E-4+s;G(h,w,t,y,c,d);i=u+g|0;e=i;z=i*4.8828125E-4+r;G(h,e,t,y,z,d);i=v+0|0;d=i;y=i*4.8828125E-4+s;G(h,e,t,d,z,y);G(h,w,t,d,c,y);v=x;}u=u+g|0;}Br(h);BT(1.0,1.0,1.0,1.0);Bc(3042);Ba(2884);return;case 2:ABc(a,b);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function ABc(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p)
{case 0:if(a.bO.o.du)return;Bc(2884);c=a.bO.f.b7;d=a.bO.f.j-a.bO.f.b7;e=b;f=c+d*e;BA();g=BeL;h=12.0;c=(a.bM.bg.bS+(a.bM.bg.d-a.bM.bg.bS)*e+(a.px+b)*0.029999999329447746)/12.0;d=(a.bM.bg.bR+(a.bM.bg.e-a.bM.bg.bR)*e)/12.0+0.33000001311302185;i=108.0-f+0.33000001311302185;j=K(c/2048.0);k=K(d/2048.0);e=c-(j*2048|0);d=d-(k*2048|0);l=3553;m=a.iH;n=B(387);$p=1;case 1:$z=AHu(m,n);if(C()){break _;}o=$z;Cp(l,o);Ba(3042);Df(770,771);m=S4(a.bM,b);p=m.x;q=m.z;r=m.w;if(a.bO.o.ee){b=p*30.0;p=(b+q*59.0+r*11.0)/100.0;q=(b+q
*70.0)/100.0;r=(b+r*70.0)/100.0;}s=K(e)*0.00390625;t=K(d)*0.00390625;u=e-K(e);v=d-K(d);CC(h,1.0,h);o=0;k=R(i,(-5.0));w=i+0.0;x=R(i,5.0);b=i+4.0;d=b-9.765625E-4;y=b;while(o<2){if(o)FG(1,1,1,1);else FG(0,0,0,0);z=(-2);while(z<=3){ba=(-2);while(ba<=3){Bz(g);bb=z*8|0;bc=ba*8|0;bd=bb-u;be=bc-v;if(k>0){Gz(g,p*0.699999988079071,q*0.699999988079071,r*0.699999988079071,0.800000011920929);Dd(g,0.0,(-1.0),0.0);c=bd+0.0;e=be+8.0;bf=(bb+0.0)*0.00390625+s;bg=(bc+8.0)*0.00390625+t;G(g,c,w,e,bf,bg);bh=bd+8.0;bi=(bb+8.0)*0.00390625
+s;G(g,bh,w,e,bi,bg);e=be+0.0;bg=(bc+0.0)*0.00390625+t;G(g,bh,w,e,bi,bg);G(g,c,w,e,bf,bg);}if(x<=0){Gz(g,p,q,r,0.800000011920929);Dd(g,0.0,1.0,0.0);c=bd+0.0;e=be+8.0;bf=(bb+0.0)*0.00390625+s;bg=(bc+8.0)*0.00390625+t;G(g,c,d,e,bf,bg);bh=bd+8.0;bi=(bb+8.0)*0.00390625+s;G(g,bh,d,e,bi,bg);e=be+0.0;bg=(bc+0.0)*0.00390625+t;G(g,bh,d,e,bi,bg);G(g,c,d,e,bf,bg);}a:{Gz(g,p*0.8999999761581421,q*0.8999999761581421,r*0.8999999761581421,0.800000011920929);if(z>(-1)){Dd(g,(-1.0),0.0,0.0);bj=0;e=be+8.0;bg=(bc+8.0)*0.00390625
+t;bh=be+0.0;bi=(bc+0.0)*0.00390625+t;while(true){if(bj>=8)break a;b=bj;c=bd+b+0.0;bf=(bb+b+0.5)*0.00390625+s;G(g,c,w,e,bf,bg);G(g,c,y,e,bf,bg);G(g,c,y,bh,bf,bi);G(g,c,w,bh,bf,bi);bj=bj+1|0;}}}b:{if(z<=1){Dd(g,1.0,0.0,0.0);bk=0;bf=be+8.0;bh=(bc+8.0)*0.00390625+t;bi=be+0.0;c=(bc+0.0)*0.00390625+t;while(true){if(bk>=8)break b;b=bk;e=bd+b+1.0-9.765625E-4;bg=(bb+b+0.5)*0.00390625+s;G(g,e,w,bf,bg,bh);G(g,e,y,bf,bg,bh);G(g,e,y,bi,bg,c);G(g,e,w,bi,bg,c);bk=bk+1|0;}}}c:{Gz(g,p*0.800000011920929,q*0.800000011920929,
r*0.800000011920929,0.800000011920929);if(ba>(-1)){Dd(g,0.0,0.0,(-1.0));bj=0;c=bd+0.0;bf=(bb+0.0)*0.00390625+s;bh=bd+8.0;bi=(bb+8.0)*0.00390625+s;while(true){if(bj>=8)break c;b=bj;e=be+b+0.0;bg=(bc+b+0.5)*0.00390625+t;G(g,c,y,e,bf,bg);G(g,bh,y,e,bi,bg);G(g,bh,w,e,bi,bg);G(g,c,w,e,bf,bg);bj=bj+1|0;}}}d:{if(ba<=1){Dd(g,0.0,0.0,1.0);bk=0;bi=bd+0.0;e=(bb+0.0)*0.00390625+s;bg=bd+8.0;bh=(bb+8.0)*0.00390625+s;while(true){if(bk>=8)break d;b=bk;c=be+b+1.0-9.765625E-4;bf=(bc+b+0.5)*0.00390625+t;G(g,bi,y,c,e,bf);G(g,bg,
y,c,bh,bf);G(g,bg,w,c,bh,bf);G(g,bi,w,c,e,bf);bk=bk+1|0;}}}Br(g);ba=ba+1|0;}z=z+1|0;}o=o+1|0;}BT(1.0,1.0,1.0,1.0);Bc(3042);Ba(2884);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p);}
function AIk(a,b,c){var d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=a.eK;e=new V_;e.yh=b;RC(d,e);f=a.eK.s-1|0;g=a.eK.s;h=0;a:{while(h<g){d=Y(a.eK,f-h|0);if(!c){if(G6(d,b)<=1024.0)break a;if(!d.fw){if(h<1)break a;return 0;}if(h<3)break a;return 0;}if(d.fw)break a;h=h+1|0;}return a.eK.s?0:1;}$p=1;case 1:ADi(d);if(C()){break _;}H_(a.eK,d);d.i4=0;a:{while(true){h=h+1|0;if(h>=g)break;d=Y(a.eK,f-h|0);if
(!c){if(G6(d,b)<=1024.0)break a;if(!d.fw){if(h<1)break a;return 0;}if(h<3)break a;return 0;}if(d.fw)break a;}return a.eK.s?0:1;}continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AFH(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bO.o.du)return;a:{BA();g=BeL;Ba(3042);Ba(3008);Df(770,1);BT(1.0,1.0,1.0,(Bq(Long_toNumber(B_())/100.0)*0.20000000298023224+0.4000000059604645)*0.5);if(!d){if(a.tJ<=0.0)break a;Df(774,768);e=a.iH;h=B(179);$p=2;continue _;}if(e!==null){Df(770,771);i=Bq(Long_toNumber(B_())
/100.0)*0.20000000298023224+0.800000011920929;BT(i,i,i,Bq(Long_toNumber(B_())/200.0)*0.20000000298023224+0.5);b=a.iH;e=B(179);$p=1;continue _;}}Bc(3042);Bc(3008);return;case 1:$z=AHu(b,e);if(C()){break _;}j=$z;Cp(3553,j);Bc(3042);Bc(3008);return;case 2:$z=AHu(e,h);if(C()){break _;}k=$z;Cp(3553,k);BT(1.0,1.0,1.0,0.5);B3();e=a.bM;d=c.h_;k=c.ia;j=c.ib;$p=3;case 3:$z=ACx(e,d,k,j);if(C()){break _;}j=$z;if(j<=0)h=null;else{L();h=BeP.data[j];}Bc(3008);OJ((-3.0),(-3.0));Ba(32823);Bz(g);l=b.cs;m=b.d-b.cs;n=f;E_(g, -(l
+m*n), -(b.b7+(b.j-b.b7)*n), -(b.ct+(b.e-b.ct)*n));ADo(g);if(h===null){L();h=BeV;}b=a.D$;d=c.h_;k=c.ia;j=c.ib;o=240+(a.tJ*10.0|0)|0;$p=4;case 4:AMz(b,h,d,k,j,o);if(C()){break _;}Br(g);E_(g,0.0,0.0,0.0);OJ(0.0,0.0);Bc(32823);Ba(3008);Gw(1);BE();Bc(3042);Bc(3008);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AGg(a,b,c,d,e,f){var g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bO.o.du)return;if(!d&&!c.k_){Ba(3042);Df(770,771);BT(0.0,0.0,0.0,0.4000000059604645);Bc(3553);Gw(0);e=a.bM;d=c.h_;g=c.ia;h=c.ib;$p=1;continue _;}return;case 1:$z=ACx(e,d,g,h);if(C()){break _;}g=$z;if(g<=0){Gw(1);Ba(3553);Bc(3042);return;}i=b.cs;j=b.d-b.cs;k=f;i=i+j*k;j=b.b7+(b.j-b.b7)*k;k=b.ct
+(b.e-b.ct)*k;L();b=BeP.data[g];e=a.bM;d=c.h_;g=c.ia;h=c.ib;$p=2;case 2:$z=b.oU(e,d,g,h);if(C()){break _;}b=$z;b=Ue(Dv(b,0.0020000000949949026,0.0020000000949949026,0.0020000000949949026), -i, -j, -k);if(!a.bO.o.du){BA();c=BeL;Gm(c,3);Bf(c,b.R,b.M,b.S);Bf(c,b.V,b.M,b.S);Bf(c,b.V,b.M,b.W);Bf(c,b.R,b.M,b.W);Bf(c,b.R,b.M,b.S);Br(c);Gm(c,3);Bf(c,b.R,b.U,b.S);Bf(c,b.V,b.U,b.S);Bf(c,b.V,b.U,b.W);Bf(c,b.R,b.U,b.W);Bf(c,b.R,b.U,b.S);Br(c);Gm(c,1);Bf(c,b.R,b.M,b.S);Bf(c,b.R,b.U,b.S);Bf(c,b.V,b.M,b.S);Bf(c,b.V,b.U,b.S);Bf(c,
b.V,b.M,b.W);Bf(c,b.V,b.U,b.W);Bf(c,b.R,b.M,b.W);Bf(c,b.R,b.U,b.W);Br(c);}Gw(1);Ba(3553);Bc(3042);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function Tt(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;h=GM(b,16);i=GM(c,16);j=GM(d,16);k=GM(e,16);l=GM(f,16);m=GM(g,16);while(h<=k){n=h%a.ds|0;if(n<0)n=n+a.ds|0;o=i;while(o<=l){p=o%a.dF|0;if(p<0)p=p+a.dF|0;q=j;while(q<=m){r=q%a.ka|0;if(r<0)r=r+a.ka|0;s=Bj(Bj(r,a.dF)+p|0,a.ds)+n|0;t=a.c9.data[s];if(!t.i4)U(a.eK,t);KV(t);q=q+1|0;}o=o+1|0;}h=h+1|0;}}
function Rr(a,b,c,d){Tt(a,b-1|0,c-1|0,d-1|0,b+1|0,c+1|0,d+1|0);}
function AOI(a,b,c,d,e,f,g){Tt(a,b-1|0,c-1|0,d-1|0,e+1|0,f+1|0,g+1|0);}
function ARK(a,b,c){var d;d=0;while(d<a.c9.data.length){if(!AHx(a.c9.data[d])&&!(a.c9.data[d].fw&&(d+a.q$|0)&15))ASa(a.c9.data[d],b);d=d+1|0;}a.q$=a.q$+1|0;}
function AC2(a,b,c,d,e,f,g){return;}
function AH5(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;if(a.bO.o.du)return;i=a.bM.bg.d-c;j=a.bM.bg.j-d;k=a.bM.bg.e-e;if(i*i+j*j+k*k<=256.0){if(b===B(213)){l=a.bO.c6;m=new SE;FD(m,a.bM,c,d,e,f,g,h);m.h1=1.0;m.ie=1.0;m.iq=1.0;m.e7=32;D1(m,0.019999999552965164,0.019999999552965164);m.dr=m.dr*(N(m.m)*0.6000000238418579+0.20000000298023224);m.g=f*0.20000000298023224+(BP()*2.0-1.0)*0.019999999552965164;m.i=g*0.20000000298023224+(BP()*2.0-1.0)*0.019999999552965164;m.h=h*0.20000000298023224+(BP()*2.0-1.0)*0.019999999552965164;m.cw
=8.0/(BP()*0.8+0.2)|0;El(l,m);}else if(b===B(256))El(a.bO.c6,A7$(a.bM,c,d,e,1.0));else if(b===B(223)){b=a.bO.c6;l=new Q4;FD(l,a.bM,c,d,e,f,g,h);l.g=f+(BP()*2.0-1.0)*0.05000000074505806;l.i=g+(BP()*2.0-1.0)*0.05000000074505806;l.h=h+(BP()*2.0-1.0)*0.05000000074505806;n=N(l.m)*0.30000001192092896+0.699999988079071;l.iq=n;l.ie=n;l.h1=n;l.dr=N(l.m)*N(l.m)*6.0+1.0;l.cw=(16.0/(N(l.m)*0.8+0.2)|0)+2|0;El(b,l);}else if(b!==B(257)){if(b===B(254))El(a.bO.c6,BcI(a.bM,c,d,e));else if(b===B(214))El(a.bO.c6,Bcv(a.bM,c,d,e,
f,g,h));else if(b===B(255))El(a.bO.c6,A7$(a.bM,c,d,e,2.5));}else{b=a.bO.c6;l=new O5;FD(l,a.bM,c,d,e,f,g,h);l.g=l.g*0.009999999776482582+f;l.i=l.i*0.009999999776482582+g;l.h=l.h*0.009999999776482582+h;N(l.m);N(l.m);N(l.m);N(l.m);N(l.m);N(l.m);l.DR=l.dr;l.iq=1.0;l.ie=1.0;l.h1=1.0;l.cw=(8.0/(BP()*0.8+0.2)|0)+4|0;l.o6=1;l.e7=48;El(b,l);}}}
function A$r(a,b){return;}
function ATs(a,b){return;}
function VF(a){var b;b=0;while(b<a.c9.data.length){if(a.c9.data[b].op){if(!a.c9.data[b].i4)U(a.eK,a.c9.data[b]);KV(a.c9.data[b]);}b=b+1|0;}}
function AHc(){var a=this;CS.call(a);a.ve=0.0;a.yw=null;a.t6=null;}
function LM(){var a=new AHc();A4q(a);return a;}
function A4q(a){var b,c;DQ(a);a.ve=0.0;b=J(B4,106);c=b.data;c[0]=B(388);c[1]=B(389);c[2]=B(390);c[3]=B(391);c[4]=B(392);c[5]=B(393);c[6]=B(394);c[7]=B(395);c[8]=B(396);c[9]=B(397);c[10]=B(398);c[11]=B(399);c[12]=B(400);c[13]=B(401);c[14]=B(402);c[15]=B(403);c[16]=B(404);c[17]=B(405);c[18]=B(406);c[19]=B(407);c[20]=B(408);c[21]=B(409);c[22]=B(410);c[23]=B(411);c[24]=B(412);c[25]=B(413);c[26]=B(414);c[27]=B(415);c[28]=B(416);c[29]=B(417);c[30]=B(418);c[31]=B(419);c[32]=B(420);c[33]=B(421);c[34]=B(422);c[35]=B(423);c[36]
=B(424);c[37]=B(425);c[38]=B(426);c[39]=B(427);c[40]=B(428);c[41]=B(429);c[42]=B(430);c[43]=B(431);c[44]=B(432);c[45]=B(433);c[46]=B(434);c[47]=B(435);c[48]=B(436);c[49]=B(437);c[50]=B(409);c[51]=B(438);c[52]=B(439);c[53]=B(440);c[54]=B(441);c[55]=B(442);c[56]=B(443);c[57]=B(444);c[58]=B(445);c[59]=B(446);c[60]=B(447);c[61]=B(448);c[62]=B(449);c[63]=B(450);c[64]=B(451);c[65]=B(452);c[66]=B(453);c[67]=B(454);c[68]=B(455);c[69]=B(456);c[70]=B(457);c[71]=B(458);c[72]=B(459);c[73]=B(460);c[74]=B(461);c[75]=B(462);c[76]
=B(463);c[77]=B(464);c[78]=B(465);c[79]=B(466);c[80]=B(467);c[81]=B(468);c[82]=B(469);c[83]=B(470);c[84]=B(471);c[85]=B(472);c[86]=B(473);c[87]=B(474);c[88]=B(475);c[89]=B(476);c[90]=B(477);c[91]=B(478);c[92]=B(479);c[93]=B(480);c[94]=B(481);c[95]=B(482);c[96]=B(483);c[97]=B(484);c[98]=B(485);c[99]=B(486);c[100]=B(487);c[101]=B(488);c[102]=B(489);c[103]=B(490);c[104]=B(491);c[105]=B(492);a.yw=b;a.t6=a.yw.data[BP()*a.yw.data.length|0];}
function A5q(a){a.ve=a.ve+0.009999999776482582;}
function ANN(a,b,c){return;}
function AIt(a){Dy(a.bG);U(a.bG,Dj(1,(a.bm/2|0)-100|0,(a.bC/4|0)+48|0,B(493)));U(a.bG,Dj(2,(a.bm/2|0)-100|0,(a.bC/4|0)+72|0,B(494)));U(a.bG,Dj(3,(a.bm/2|0)-100|0,(a.bC/4|0)+96|0,B(495)));U(a.bG,Dj(0,(a.bm/2|0)-100|0,((a.bC/4|0)+120|0)+12|0,B(496)));Y(a.bG,1).gC=0;Y(a.bG,2).gC=0;if(a.J.k3===null)Y(a.bG,1).gC=0;}
function ACr(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b.cl){c=a.J;d=AIO(a,a.J.o);$p=1;continue _;}if(b.cl!=1)return;b=a.J;c=A$X(a);$p=2;continue _;case 1:ADV(c,d);if(C()){break _;}if(b.cl!=1)return;b=a.J;c=A$X(a);$p=2;case 2:ADV(b,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function ZD(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABh(a);if(C()){break _;}BA();e=BeL;f=3553;g=a.J.bo;h=B(497);$p=2;case 2:$z=AHu(g,h);if(C()){break _;}i=$z;Cp(f,i);BT(1.0,1.0,1.0,1.0);ER(e,16777215);CH(a,(a.bm-256|0)/2|0,30,0,0,256,49);B3();Bw((a.bm/2|0)+90|0,70.0,0.0);Bv((-20.0),0.0,0.0,1.0);j=Bq(Long_toNumber(Long_rem(B_(),
Long_fromInt(1000)))/1000.0*3.1415927410125732*2.0)*0.10000000149011612;if(j<0.0)j= -j;k=(1.7999999523162842-j)*100.0/(Dw(a.bZ,a.t6)+32|0);CC(k,k,k);DG(a,a.bZ,a.t6,0,(-8),16776960);BE();Cy(a.bZ,B(498),(a.bm-Dw(a.bZ,B(498))|0)-2|0,a.bC-10|0,16777215);l=Kv();m=JZ();n=Long_sub(l,Kc());g=new S;V(g);e=T(H(C6(H(C6(H(g,B(499)),Long_div(Long_mul(n,Long_fromInt(100)),l)),B(500)),Long_div(Long_div(l,Long_fromInt(1024)),Long_fromInt(1024))),B(501)));Cy(a.bZ,e,(a.bm-Dw(a.bZ,e)|0)-2|0,2,8421504);g=new S;V(g);e=T(H(C6(H(C6(H(g,
B(502)),Long_div(Long_mul(m,Long_fromInt(100)),l)),B(503)),Long_div(Long_div(m,Long_fromInt(1024)),Long_fromInt(1024))),B(504)));Cy(a.bZ,e,(a.bm-Dw(a.bZ,e)|0)-2|0,12,8421504);$p=3;case 3:AFE(a,b,c,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function O1(){var a=this;D.call(a);a.mW=null;a.cD=null;a.jf=null;a.sw=null;}
function El(a,b){var c;c=b.xA();U(a.cD.data[c],b);}
function AAY(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;while(b<3){c=0;if(c<a.cD.data[b].s){d=Y(a.cD.data[b],c);$p=1;continue _;}b=b+1|0;}return;case 1:d.ep();if(C()){break _;}if(!d.cR)e=c;else{d=a.cD.data[b];e=c+(-1)|0;En(d,c);}c=e+1|0;while(true){if(c<a.cD.data[b].s){d=Y(a.cD.data[b],c);continue _;}b=b+1|0;if(b>=3)break;c=0;}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function ABd(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=BC(b.u*3.1415927410125732/180.0);e=Bq(b.u*3.1415927410125732/180.0);f= -e*Bq(b.I*3.1415927410125732/180.0);g=d*Bq(b.I*3.1415927410125732/180.0);h=BC(b.I*3.1415927410125732/180.0);i=b.cs;j=b.d-b.cs;k=c;BkN=i+j*k;BkO=b.b7+(b.j-b.b7)*k;BkP=b.ct
+(b.e-b.ct)*k;l=0;while(l<2){if(a.cD.data[l].s){if(!l){b=a.jf;m=B(505);$p=1;continue _;}if(l==1){b=a.jf;m=B(179);$p=2;continue _;}Cp(3553,0);BA();m=BeL;Bz(m);n=0;if(n<a.cD.data[l].s){o=Y(a.cD.data[l],n);$p=3;continue _;}Br(m);}l=l+1|0;}return;case 1:$z=AHu(b,m);if(C()){break _;}p=$z;a:while(true){if(l==1){b=a.jf;m=B(179);$p=2;continue _;}Cp(3553,p);BA();m=BeL;Bz(m);n=0;if(n<a.cD.data[l].s){o=Y(a.cD.data[l],n);$p=3;continue _;}Br(m);while(true){l=l+1|0;if(l>=2)break a;if(!a.cD.data[l].s)continue;else break;}p
=0;if(!l){b=a.jf;m=B(505);continue _;}}return;case 2:$z=AHu(b,m);if(C()){break _;}p=$z;a:while(true){Cp(3553,p);BA();m=BeL;Bz(m);n=0;if(n<a.cD.data[l].s){o=Y(a.cD.data[l],n);$p=3;continue _;}Br(m);while(true){l=l+1|0;if(l>=2)break a;if(!a.cD.data[l].s)continue;else break;}p=0;if(!l){b=a.jf;m=B(505);$p=1;continue _;}if(l==1){b=a.jf;m=B(179);continue _;}}return;case 3:o.kT(m,c,d,h,e,f,g);if(C()){break _;}n=n+1|0;a:while(true){if(n<a.cD.data[l].s){o=Y(a.cD.data[l],n);continue _;}Br(m);while(true){l=l+1|0;if(l>=
2)break a;if(!a.cD.data[l].s)continue;else break;}if(!l){b=a.jf;m=B(505);$p=1;continue _;}if(l==1){b=a.jf;m=B(179);$p=2;continue _;}Cp(3553,0);BA();m=BeL;Bz(m);n=0;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function ABX(a,b,c){var d,e,f,g,h,i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=2;if(a.cD.data[d].s){BA();e=BeL;f=0;if(f<a.cD.data[d].s){g=Y(a.cD.data[d],f);h=0.0;i=0.0;j=0.0;k=0.0;l=0.0;$p=1;continue _;}}return;case 1:g.kT(e,c,h,i,j,k,l);if(C()){break _;}f=f+1|0;if(f>=a.cD.data[d].s)return;g=Y(a.cD.data[d],f);h=0.0;i=0.0;j=0.0;k=0.0;l=0.0;continue _;default:E$();}}C3().s(a,
b,c,d,e,f,g,h,i,j,k,l,$p);}
function O3(a,b){var c;a.mW=b;c=0;while(c<3){Dy(a.cD.data[c]);c=c+1|0;}}
function AEE(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.mW;$p=1;case 1:a:{$z=ACx(e,b,c,d);if(C()){break _;}f=$z;if(f){L();e=BeP.data[f];g=0;h=b;i=c;j=d;while(true){if(g>=4)break a;k=0;while(k<4){l=0;while(l<4){m=h+(g+0.5)/4.0;n=i+(k+0.5)/4.0;o=j+(l+0.5)/4.0;El(a,AY5(a.mW,m,n,o,m-h-0.5,n-i-0.5,o-j-0.5,e));l
=l+1|0;}k=k+1|0;}g=g+1|0;}}}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function Y3(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.mW;$p=1;case 1:$z=ACx(f,b,c,d);if(C()){break _;}g=$z;if(g){L();h=BeP.data[g];i=b;j=i+Cl(a.sw)*(h.dc-h.da-0.20000000298023224)+0.10000000149011612+h.da;k=c;l=k+Cl(a.sw)*(h.cF-h.cM-0.20000000298023224)+0.10000000149011612+h.cM;m=d;n=m+Cl(a.sw)*(h.dd-h.c_-0.20000000298023224)
+0.10000000149011612+h.c_;if(!e)l=k+h.cM-0.10000000149011612;if(e==1)l=k+h.cF+0.10000000149011612;if(e==2)n=m+h.c_-0.10000000149011612;if(e==3)n=m+h.dd+0.10000000149011612;if(e==4)j=i+h.da-0.10000000149011612;if(e==5)j=i+h.dc+0.10000000149011612;El(a,Yb(APt(AY5(a.mW,j,l,n,0.0,0.0,0.0,h),0.20000000298023224),0.6000000238418579));}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Xz(a){var b;b=new S;V(b);return T(Be(H(b,B(3)),(a.cD.data[0].s+a.cD.data[1].s|0)+a.cD.data[2].s|0));}
function Nu(){var a=this;Gh.call(a);a.g8=null;a.vu=null;a.b2=null;a.FW=null;a.rX=0;a.Eo=0.0;a.IJ=0.0;}
var BkQ=null;function APL(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=FK(a.b2.cq,a.b2.bF);g=AEq(f);h=Zf(f);i=a.b2.e_;LC(a.b2.eV);Ba(3042);BT(1.0,1.0,1.0,1.0);c=3553;f=a.b2.bo;j
=B(506);$p=1;case 1:$z=AHu(f,j);if(C()){break _;}d=$z;Cp(c,d);k=a.b2.f.K;a.mU=(-90.0);l=g/2|0;m=l-91|0;n=h-22|0;CH(a,m,n,0,0,182,22);CH(a,(m-1|0)+(k.bL*20|0)|0,n-1|0,0,22,24,22);c=3553;f=a.b2.bo;j=B(507);$p=2;case 2:$z=AHu(f,j);if(C()){break _;}d=$z;Cp(c,d);Ba(3042);Df(775,769);CH(a,l-7|0,(h/2|0)-7|0,0,0,16,16);Bc(3042);o=((a.b2.f.dy/3|0)%2|0)!=1?0:1;if(a.b2.f.dy<10)o=0;p=a.b2.f.bT;q=a.b2.f.tG;NM(a.vu,Long_fromInt(Bj(a.rX,312871)));if(!AJ4(a.b2.cB)){Bc(3042);Ba(32826);B3();Bv(180.0,1.0,0.0,0.0);Hz();BE();r=
0;c=l-90|0;m=(h-16|0)-3|0;if(r>=9){DS();Bc(32826);if(!a.b2.o.lt)Cy(i,B(508),2,2,16777215);else{Cy(i,BL(H(H(H(BX(),B(509)),a.b2.lD),B(27))),2,2,16777215);Cy(i,Mh(a.b2),2,12,16777215);Cy(i,Oo(a.b2),2,22,16777215);Cy(i,MM(a.b2),2,32,16777215);s=Kv();t=JZ();u=Long_sub(t,Kc());j=BL(H(C6(H(C6(H(C6(H(BX(),B(510)),Long_div(Long_mul(u,Long_fromInt(100)),s)),B(503)),Long_div(Long_div(u,Long_fromInt(1024)),Long_fromInt(1024))),B(511)),Long_div(Long_div(s,Long_fromInt(1024)),Long_fromInt(1024))),B(501)));Hv(a,i,j,(g-Dw(i,
j)|0)-2|0,2,14737632);f=BL(H(C6(H(C6(H(BX(),B(502)),Long_div(Long_mul(t,Long_fromInt(100)),s)),B(503)),Long_div(Long_div(t,Long_fromInt(1024)),Long_fromInt(1024))),B(504)));Hv(a,i,f,(g-Dw(i,f)|0)-2|0,12,14737632);}m=0;e=h-8|0;while(m<CX(a.g8)&&m<10){if(Y(a.g8,m).oD<200)Cy(i,Y(a.g8,m).yC,2,(e-(m*9|0)|0)-20|0,16777215);m=m+1|0;}return;}n=(c+(r*20|0)|0)+2|0;$p=3;continue _;}r=AC1(a.b2.f);n=0;v=h-32|0;w=l+91|0;d=R(p,4);while(n<10){if(r>0){x=(w-(n*8|0)|0)-9|0;c=R((n*2|0)+1|0,r);if(c<0)CH(a,x,v,34,9,9,9);if(!c)CH(a,
x,v,25,9,9,9);if(c>0)CH(a,x,v,16,9,9,9);}y=0;if(o)y=1;z=m+(n*8|0)|0;c=d>0?v:v+E(a.vu,2)|0;CH(a,z,c,16+(y*9|0)|0,0,9,9);if(o){e=R((n*2|0)+1|0,q);if(e<0)CH(a,z,c,70,0,9,9);if(!e)CH(a,z,c,79,0,9,9);}e=R((n*2|0)+1|0,p);if(e<0)CH(a,z,c,52,0,9,9);if(!e)CH(a,z,c,61,0,9,9);n=n+1|0;}f=a.b2.f;j=BfQ;$p=4;continue _;case 3:AEx(a,r,n,m,b);if(C()){break _;}r=r+1|0;if(r>=9){DS();Bc(32826);if(!a.b2.o.lt)Cy(i,B(508),2,2,16777215);else{Cy(i,BL(H(H(H(BX(),B(509)),a.b2.lD),B(27))),2,2,16777215);Cy(i,Mh(a.b2),2,12,16777215);Cy(i,
Oo(a.b2),2,22,16777215);Cy(i,MM(a.b2),2,32,16777215);s=Kv();t=JZ();u=Long_sub(t,Kc());j=BL(H(C6(H(C6(H(C6(H(BX(),B(510)),Long_div(Long_mul(u,Long_fromInt(100)),s)),B(503)),Long_div(Long_div(u,Long_fromInt(1024)),Long_fromInt(1024))),B(511)),Long_div(Long_div(s,Long_fromInt(1024)),Long_fromInt(1024))),B(501)));Hv(a,i,j,(g-Dw(i,j)|0)-2|0,2,14737632);f=BL(H(C6(H(C6(H(BX(),B(502)),Long_div(Long_mul(t,Long_fromInt(100)),s)),B(503)),Long_div(Long_div(t,Long_fromInt(1024)),Long_fromInt(1024))),B(504)));Hv(a,i,f,(g
-Dw(i,f)|0)-2|0,12,14737632);}m=0;e=h-8|0;while(m<CX(a.g8)&&m<10){if(Y(a.g8,m).oD<200)Cy(i,Y(a.g8,m).yC,2,(e-(m*9|0)|0)-20|0,16777215);m=m+1|0;}return;}n=(c+(r*20|0)|0)+2|0;continue _;case 4:a:{$z=AGI(f,j);if(C()){break _;}c=$z;if(c){c=Ne((a.b2.f.ga-2|0)*10.0/300.0)|0;ba=(Ne(a.b2.f.ga*10.0/300.0)|0)-c|0;x=0;d=c+ba|0;p=v-9|0;while(true){if(x>=d)break a;if(x>=c)CH(a,m+(x*8|0)|0,p,25,18,9,9);else CH(a,m+(x*8|0)|0,p,16,18,9,9);x=x+1|0;}}}Bc(3042);Ba(32826);B3();Bv(180.0,1.0,0.0,0.0);Hz();BE();r=0;c=l-90|0;m=(h-
16|0)-3|0;if(r>=9){DS();Bc(32826);if(!a.b2.o.lt)Cy(i,B(508),2,2,16777215);else{Cy(i,BL(H(H(H(BX(),B(509)),a.b2.lD),B(27))),2,2,16777215);Cy(i,Mh(a.b2),2,12,16777215);Cy(i,Oo(a.b2),2,22,16777215);Cy(i,MM(a.b2),2,32,16777215);s=Kv();t=JZ();u=Long_sub(t,Kc());j=BL(H(C6(H(C6(H(C6(H(BX(),B(510)),Long_div(Long_mul(u,Long_fromInt(100)),s)),B(503)),Long_div(Long_div(u,Long_fromInt(1024)),Long_fromInt(1024))),B(511)),Long_div(Long_div(s,Long_fromInt(1024)),Long_fromInt(1024))),B(501)));Hv(a,i,j,(g-Dw(i,j)|0)-2|0,2,14737632);f
=BL(H(C6(H(C6(H(BX(),B(502)),Long_div(Long_mul(t,Long_fromInt(100)),s)),B(503)),Long_div(Long_div(t,Long_fromInt(1024)),Long_fromInt(1024))),B(504)));Hv(a,i,f,(g-Dw(i,f)|0)-2|0,12,14737632);}m=0;e=h-8|0;while(m<CX(a.g8)&&m<10){if(Y(a.g8,m).oD<200)Cy(i,Y(a.g8,m).yC,2,(e-(m*9|0)|0)-20|0,16777215);m=m+1|0;}return;}n=(c+(r*20|0)|0)+2|0;$p=3;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p);}
function AEx(a,b,c,d,e){var f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.b2.f.K.bh.data[b];if(f===null)return;g=f.mL-e;b=R(g,0.0);if(b>0){B3();h=1.0+g/5.0;i=c+8|0;g=i;j=d+12|0;Bw(g,j,0.0);CC(1.0/h,(h+1.0)/2.0,1.0);Bw( -i, -j,0.0);}k=BkQ;l=a.b2.e_;m=a.b2.bo;$p=1;case 1:AGh(k,l,m,f,c,d);if(C()){break _;}if(b>0)BE();Lm(BkQ,a.b2.e_,a.b2.bo,f,c,d);return;default:
E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AKy(a){var b,c;a.rX=a.rX+1|0;b=0;while(b<a.g8.s){c=Y(a.g8,b);c.oD=c.oD+1|0;b=b+1|0;}}
function AAa(){BkQ=X3();}
function K_(){}
function II(){var a=this;D.call(a);a.jj=null;a.kU=null;a.ef=null;a.be=null;a.gp=null;a.fU=0;a.gr=0;a.gh=null;a.vJ=0;a.wS=0;}
function B2(a,b,c){var d;if(b==a.fU&&c==a.gr&&a.gh!==null)return 1;a:{b:{d=(b&31)+((c&31)*32|0)|0;if(a.be.data[d]!==null){if(a.be.data[d]===a.jj)break b;if(ARH(a.be.data[d],b,c))break b;}b=0;break a;}b=1;}return b;}
function AOh(a,b,c){var d,e,f,g,h,i,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b==a.fU&&c==a.gr&&a.gh!==null)return a.gh;if(!a.gp.uc&&!AGw(a,b,c))return a.jj;d=(b&31)+((c&31)*32|0)|0;if(!B2(a,b,c)){if(a.be.data[d]!==null)AOP(a.be.data[d]);if(a.ef===null)e=null;else{try{f=a.ef;e=a.gp;$p=1;continue _;}catch($$e){$$je=Bg($$e);if($$je instanceof BD){f=$$je;}else{throw $$e;}}B9(f);e=a.jj;}if(e
===null){if(a.kU!==null){f=a.kU;$p=2;continue _;}e=a.jj;}a.be.data[d]=e;if(a.be.data[d]!==null)MF(a.be.data[d]);if(!a.be.data[d].hh){g=b+1|0;h=c+1|0;if(B2(a,g,h)&&B2(a,b,h)&&B2(a,g,c)){$p=6;continue _;}}g=b-1|0;if(B2(a,g,c)){$p=3;continue _;}h=c-1|0;if(B2(a,b,h)){$p=4;continue _;}if(B2(a,g,h)){$p=5;continue _;}}a.fU=b;a.gr=c;a.gh=a.be.data[d];return a.be.data[d];case 1:a:{try{$z=AGY(f,e,b,c);if(C()){break _;}e=$z;if(e!==null)e.nq=a.gp.dU;break a;}catch($$e){$$je=Bg($$e);if($$je instanceof BD){f=$$je;}else{throw $$e;}}B9(f);e
=a.jj;}if(e===null){if(a.kU!==null){f=a.kU;$p=2;continue _;}e=a.jj;}a.be.data[d]=e;if(a.be.data[d]!==null)MF(a.be.data[d]);if(!a.be.data[d].hh){g=b+1|0;h=c+1|0;if(B2(a,g,h)&&B2(a,b,h)&&B2(a,g,c)){$p=6;continue _;}}g=b-1|0;if(B2(a,g,c)){$p=3;continue _;}h=c-1|0;if(B2(a,b,h)){$p=4;continue _;}if(!B2(a,g,h)){a.fU=b;a.gr=c;a.gh=a.be.data[d];return a.be.data[d];}$p=5;continue _;case 2:$z=Ua(f,b,c);if(C()){break _;}e=$z;a.be.data[d]=e;if(a.be.data[d]!==null)MF(a.be.data[d]);if(!a.be.data[d].hh){g=b+1|0;h=c+1|0;if
(B2(a,g,h)&&B2(a,b,h)&&B2(a,g,c)){$p=6;continue _;}}g=b-1|0;if(B2(a,g,c)){$p=3;continue _;}h=c-1|0;if(B2(a,b,h)){$p=4;continue _;}if(!B2(a,g,h)){a.fU=b;a.gr=c;a.gh=a.be.data[d];return a.be.data[d];}$p=5;continue _;case 3:$z=AOh(a,g,c);if(C()){break _;}f=$z;if(!f.hh){h=c+1|0;if(B2(a,g,h)&&B2(a,b,h)&&B2(a,g,c)){$p=7;continue _;}}h=c-1|0;if(B2(a,b,h)){$p=4;continue _;}if(!B2(a,g,h)){a.fU=b;a.gr=c;a.gh=a.be.data[d];return a.be.data[d];}$p=5;continue _;case 4:$z=AOh(a,b,h);if(C()){break _;}f=$z;if(!f.hh){i=b+1|0;if
(B2(a,i,h)&&B2(a,b,h)&&B2(a,i,c)){$p=8;continue _;}}if(!B2(a,g,h)){a.fU=b;a.gr=c;a.gh=a.be.data[d];return a.be.data[d];}$p=5;case 5:$z=AOh(a,g,h);if(C()){break _;}f=$z;if(!f.hh&&B2(a,g,h)&&B2(a,b,h)&&B2(a,g,c)){$p=9;continue _;}a.fU=b;a.gr=c;a.gh=a.be.data[d];return a.be.data[d];case 6:AFr(a,a,b,c);if(C()){break _;}g=b-1|0;if(B2(a,g,c)){$p=3;continue _;}h=c-1|0;if(B2(a,b,h)){$p=4;continue _;}if(!B2(a,g,h)){a.fU=b;a.gr=c;a.gh=a.be.data[d];return a.be.data[d];}$p=5;continue _;case 7:AFr(a,a,g,c);if(C()){break _;}h
=c-1|0;if(B2(a,b,h)){$p=4;continue _;}if(!B2(a,g,h)){a.fU=b;a.gr=c;a.gh=a.be.data[d];return a.be.data[d];}$p=5;continue _;case 8:AFr(a,a,b,h);if(C()){break _;}if(!B2(a,g,h)){a.fU=b;a.gr=c;a.gh=a.be.data[d];return a.be.data[d];}$p=5;continue _;case 9:AFr(a,a,g,h);if(C()){break _;}a.fU=b;a.gr=c;a.gh=a.be.data[d];return a.be.data[d];default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AFr(a,b,c,d){var e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AOh(a,c,d);if(C()){break _;}e=$z;if(!e.hh){e.hh=1;if(a.kU!==null){f=a.kU;$p=2;continue _;}}return;case 2:AHW(f,b,c,d);if(C()){break _;}SN(e);return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AN1(a,b,c){var d,e,f,g,h,i,j,k,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0;e=0;if(c!==null){f=0;while(f<a.be.data.length){if(a.be.data[f]!==null&&Kn(a.be.data[f],b))e=e+1|0;f=f+1|0;}}g=0;h=0;while(true){if(h>=a.be.data.length){if(b&&a.ef===null)return 1;return 1;}if(a.be.data[h]!==null){if(b&&!a.be.data[h].qd)a:{i=a.be.data[h];if(a.ef!==null){try{MC(a.ef,a.gp,i);break a;}
catch($$e){$$je=Bg($$e);if($$je instanceof BD){i=$$je;}else{throw $$e;}}i.nC();}}if(Kn(a.be.data[h],b)){i=a.be.data[h];if(a.ef!==null){try{i.nq=a.gp.dU;j=a.ef;k=a.gp;$p=1;continue _;}catch($$e){$$je=Bg($$e);if($$je instanceof BW){i=$$je;}else{throw $$e;}}B9(i);}a.be.data[h].e9=0;d=d+1|0;if(d==2&&!b)break;if(c!==null){g=g+1|0;if(!(g%10|0)){f=(g*100|0)/e|0;$p=2;continue _;}}}}h=h+1|0;}return 0;case 1:b:{try{YV(j,k,i);if(C()){break _;}break b;}catch($$e){$$je=Bg($$e);if($$je instanceof BW){i=$$je;}else{throw $$e;}}B9(i);}while
(true){a.be.data[h].e9=0;d=d+1|0;if(d==2&&!b)break;if(c!==null){g=g+1|0;if(!(g%10|0)){f=(g*100|0)/e|0;$p=2;continue _;}}while(true){h=h+1|0;if(h>=a.be.data.length){if(b&&a.ef===null)return 1;return 1;}if(a.be.data[h]===null)continue;if(b&&!a.be.data[h].qd)c:{i=a.be.data[h];if(a.ef!==null){try{MC(a.ef,a.gp,i);break c;}catch($$e){$$je=Bg($$e);if($$je instanceof BD){i=$$je;}else{throw $$e;}}i.nC();}}if(Kn(a.be.data[h],b))break;}i=a.be.data[h];if(a.ef===null)continue;try{i.nq=a.gp.dU;j=a.ef;k=a.gp;continue _;}catch
($$e){$$je=Bg($$e);if($$je instanceof BW){i=$$je;}else{throw $$e;}}B9(i);}return 0;case 2:XJ(c,f);if(C()){break _;}while(true){h=h+1|0;if(h>=a.be.data.length){if(b&&a.ef===null)return 1;return 1;}if(a.be.data[h]===null)continue;if(b&&!a.be.data[h].qd)d:{i=a.be.data[h];if(a.ef!==null){try{MC(a.ef,a.gp,i);break d;}catch($$e){$$je=Bg($$e);if($$je instanceof BD){i=$$je;}else{throw $$e;}}i.nC();}}if(!Kn(a.be.data[h],b))continue;i=a.be.data[h];if(a.ef!==null){try{i.nq=a.gp.dU;j=a.ef;k=a.gp;$p=1;continue _;}catch($$e)
{$$je=Bg($$e);if($$je instanceof BW){i=$$je;}else{throw $$e;}}B9(i);}a.be.data[h].e9=0;d=d+1|0;if(d==2&&!b)break;if(c===null)continue;g=g+1|0;if(!(g%10|0)){f=(g*100|0)/e|0;continue _;}}return 0;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function MW(a,b,c){a.vJ=b;a.wS=c;}
function AGw(a,b,c){return b>=(a.vJ-15|0)&&c>=(a.wS-15|0)&&b<=(a.vJ+15|0)&&c<=(a.wS+15|0)?1:0;}
function A_t(a){return 1;}
function Jw(){var a=this;EP.call(a);a.K=null;a.AL=0;a.k7=0;a.qB=0.0;a.kY=0.0;a.CO=null;a.ya=0;}
function AFX(a){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AKT(a);if(C()){break _;}a.qB=a.kY;a.kY=0.0;return;default:E$();}}C3().s(a,$p);}
function AK8(a){var b,c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.c4=1.6200000047683716;D1(a,0.6000000238418579,1.7999999523162842);if(a.l!==null){if(a.j>0.0){CT(a,a.d,a.j,a.e);b=a.l;c=a.L;$p=1;continue _;}a.h=0.0;a.i=0.0;a.g=0.0;a.I=0.0;}if(a.l!==null)a.l.bg=a;a.bT=20;a.c2=0;return;case 1:$z=XV(b,a,c);if(C()){break _;}b=$z;if(b.s){a.j=a.j+1.0;if(a.j>0.0){CT(a,a.d,a.j,a.e);b=a.l;c=a.L;continue _;}}a.h=0.0;a.i=0.0;a.g=0.0;a.I=0.0;if(a.l!==null)a.l.bg
=a;a.bT=20;a.c2=0;return;default:E$();}}C3().s(a,b,c,$p);}
function Y6(a){var b,c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.l.i3&&a.bT<20&&!((a.oS%20|0)*4|0))UR(a,1);AEj(a.K);a.qB=a.kY;$p=1;case 1:ACq(a);if(C()){break _;}b=Ce(a.g*a.g+a.h*a.h);c=Is( -a.i*0.20000000298023224)*15.0;if(b>0.10000000149011612)b=0.10000000149011612;if(!(a.cx&&a.bT>0))b=0.0;if(!(!a.cx&&a.bT>0))c=0.0;a.kY=a.kY+(b-a.kY)*0.4000000059604645;a.jn=a.jn+(c-a.jn)*0.800000011920929;if(a.bT<=0)return;d
=a.l;e=Dv(a.L,1.0,0.0,1.0);$p=2;case 2:a:{$z=ADL(d,a,e);if(C()){break _;}d=$z;if(d!==null){f=0;while(true){if(f>=d.s)break a;Y(d,f).xJ(a);f=f+1|0;}}}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function A4y(a){return a.k7;}
function ALe(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:D1(a,0.20000000298023224,0.20000000298023224);CT(a,a.d,a.j,a.e);a.i=0.10000000149011612;if(!DC(a.CO,B(512))){c=a.K;$p=1;continue _;}c=new Cd;BB();Gr(c,BhO,1);d=1;$p=2;continue _;case 1:AI0(c);if(C()){break _;}if(b===null){a.h=0.0;a.g=0.0;}else{a.g= -BC((a.kI+a.u)*3.1415927410125732/180.0)*0.10000000149011612;a.h= -Bq((a.kI+a.u)*3.1415927410125732/180.0)*0.10000000149011612;}a.c4
=0.10000000149011612;return;case 2:AQv(a,c,d);if(C()){break _;}c=a.K;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,$p);}
function AZv(a,b,c){a.k7=a.k7+c|0;}
function ALT(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=0;$p=1;case 1:AQv(a,b,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,$p);}
function AQv(a,b,c){var d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b===null)return;d=Hf(a.l,a.d,a.j-0.30000001192092896,a.e,b);d.hb=40;if(c){e=N(a.m)*0.5;f=N(a.m)*3.1415927410125732*2.0;d.g= -Bq(f)*e;d.h=BC(f)*e;d.i=0.20000000298023224;}else{d.g= -Bq(a.u/180.0*3.1415927410125732)*BC(a.I/180.0*3.1415927410125732)*0.30000001192092896;d.h=BC(a.u/180.0*3.1415927410125732)
*BC(a.I/180.0*3.1415927410125732)*0.30000001192092896;d.i= -Bq(a.I/180.0*3.1415927410125732)*0.30000001192092896+0.10000000149011612;e=N(a.m)*3.1415927410125732*2.0;g=0.019999999552965164*N(a.m);h=d.g;i=e;j=GG(i);k=g;d.g=h+j*k;d.i=d.i+(N(a.m)-N(a.m))*0.10000000149011612;d.h=d.h+Gt(i)*k;}b=a.l;$p=1;case 1:AOj(b,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AKS(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=ADx(a.K,b);b=BfQ;$p=1;case 1:$z=AGI(a,b);if(C()){break _;}d=$z;if(d)c=c/5.0;if(!a.cx)c=c/5.0;return c;default:E$();}}C3().s(a,b,c,d,$p);}
function M$(a,b){return ADW(a.K,b);}
function A5h(a){return 0.11999999731779099;}
function Yr(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hn=0;if(a.bT<=0)return 0;if(a.dy>a.o1/2.0)return 0;if(!(!(b instanceof DP)&&!(b instanceof Ju))){if(!a.l.i3)c=0;if(a.l.i3==1)c=(c/3|0)+1|0;if(a.l.i3==3)c=(c*3|0)/2|0;}d=Bj(c,25-TE(a.K)|0)+a.ya|0;AD1(a.K,c);c=d/25|0;a.ya=d%25|0;if(!c)return 0;$p=1;case 1:$z=AB4(a,b,c);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,$p);}
function AGD(){var a=this;Jw.call(a);a.hZ=null;a.k8=null;}
function A6I(a,b,c){var d=new AGD();AYZ(d,a,b,c);return d;}
function AYZ(a,b,c,d){var e;FC(a,c);a.o1=20;a.dG=0.0;a.e$=0.0;a.G8=1;a.yu=B(376);a.G7=1;a.D6=0.0;a.E3=null;a.Jx=1.0;a.u1=0;a.Jy=0.0;a.bT=10;a.kI=0.0;a.c2=0;a.dz=0;a.Cn=0;a.Fi=(-1);a.JD=BP()*0.8999999761581421+0.10000000149011612;a.hn=0;a.hJ=0;a.zU=0.0;a.s2=0.699999988079071;a.mE=1;a.Ir=(BP()+1.0)*0.009999999776482582;CT(a,a.d,a.j,a.e);a.JK=BP()*12398.0;a.u=BP()*3.1415927410125732*2.0;a.G6=1.0;a.rs=0.5;e=new VE;e.bh=J(Cd,36);e.cd=J(Cd,4);e.bL=0;e.nE=a;a.K=e;a.AL=0;a.k7=0;a.ya=0;Kt(a,c.fk+0.5,c.p1,c.fj+0.5,0.0,
0.0);a.c4=1.6200000047683716;a.bT=20;a.E3=B(513);a.D6=180.0;a.nK=20;a.yu=B(376);a.k8=b;if(c.bg!==null)Cb(c.bg);c.bg=a;if(d!==null&&d.om!==null&&Bi(d.om)>0){b=new S;V(b);a.tK=T(H(H(H(b,B(514)),d.om),B(515)));}a.CO=d.om;}
function AAQ(a){a.iO=a.hZ.kF;a.gD=a.hZ.ku;a.hJ=a.hZ.uo;}
function ALn(a){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AOD(a.hZ,a);$p=1;case 1:Y6(a);if(C()){break _;}return;default:E$();}}C3().s(a,$p);}
function ARI(a){AO1(a.hZ);}
function Et(a,b,c){APu(a.hZ,b,c);}
function ABQ(a,b){Ft(b,B(516),a.bT<<16>>16);Ft(b,B(517),a.dE<<16>>16);Ft(b,B(518),a.c2<<16>>16);Ft(b,B(519),a.dz<<16>>16);GA(b,B(520),a.k7);HH(b,B(325),AL7(a.K,L9()));}
function AOY(a,b){var c;a.bT=FL(b,B(516));if(!Y1(b,B(516)))a.bT=10;a.dE=FL(b,B(517));a.c2=FL(b,B(518));a.dz=FL(b,B(519));a.k7=FW(b,B(520));c=Kh(b,B(325));ARo(a.K,c);}
function Y2(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.k8;d=Bb2(a.K,b);$p=1;case 1:ADV(c,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function AI_(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.k8;d=new SP;DQ(d);d.Ae=B(521);d.f3=0;d.fS=b;$p=1;case 1:ADV(c,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function ANs(a){var b,c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.k8;c=new Xl;d=a.K;Ie(c);c.mr=A0D(c,3,3);c.ur=A5i();U(c.c7,A3s(c,c.mr,c.ur,0,124,35));e=0;while(e<3){f=0;while(f<3){U(c.c7,D6(c,c.mr,f+(e*3|0)|0,30+(f*18|0)|0,17+(e*18|0)|0));f=f+1|0;}e=e+1|0;}e=0;while(e<3){f=0;while(f<9){U(c.c7,D6(c,d,f+((e+1|0)*9|0)|0,8+(f*18|0)|0,84+(e*18|0)|0));f=f+1|0;}e=e+1|0;}e=0;while(e<9){U(c.c7,D6(c,d,e,8+(e*18|0)|0,142));e
=e+1|0;}$p=1;case 1:ADV(b,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AO5(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.k8;d=new Wl;e=a.K;Ie(d);d.sM=b;U(d.c7,D6(d,b,0,56,17));U(d.c7,D6(d,b,1,56,53));U(d.c7,D6(d,b,2,116,35));f=0;while(f<3){g=0;while(g<9){U(d.c7,D6(d,e,g+((f+1|0)*9|0)|0,8+(g*18|0)|0,84+(f*18|0)|0));g=g+1|0;}f=f+1|0;}h=0;while(h<9){U(d.c7,D6(d,e,h,8+(h*18|0)|0,142));h=h+1|0;}$p=1;case 1:ADV(c,d);if(C()){break _;}return;default:E$();}}C3().s(a,
b,c,d,e,f,g,h,$p);}
function Kq(a){return D9(a.K);}
function JB(a){AFD(a.K,a.K.bL,null);}
function ADw(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=ARU(a.K,b);if(c<=0)return;$p=1;case 1:b.fs(a,c);if(C()){break _;}d=Kq(a);if(d!==null&&b instanceof EP){AE0(d,b);if(d.p<=0)JB(a);}return;default:E$();}}C3().s(a,b,c,d,$p);}
function RZ(a,b){var c,d;c=a.k8.c6;d=new U5;FD(d,a.k8.A,b.d,b.j,b.e,b.g,b.i,b.h);d.p_=0;d.re=0;d.mA=b;d.hS=a;d.re=3;d.AV=(-0.5);El(c,d);}
function AC1(a){return TE(a.K);}
function Vr(a,b){var c;if(!b.uK(a)){c=Kq(a);if(c!==null&&b instanceof EP){AEB(c,b);if(c.p<=0)JB(a);}}}
function Qp(){D.call(this);}
var BkR=null;function BkS(){var a=new Qp();ANO(a);return a;}
function ANO(a){return;}
function Bq(b){return BkR.data[(b*651.8986206054688|0)&4095];}
function BC(b){return BkR.data[((b+1.5707963705062866)*651.8986206054688|0)&4095];}
function D_(b){return Ed(b);}
function Ce(b){return Ed(b);}
function EX(b){var c;c=b|0;if(b<c)c=c-1|0;return c;}
function K(b){var c;c=b|0;if(b<c)c=c-1|0;return c;}
function GM(b,c){return b>=0?b/c|0: -(( -b-1|0)/c|0)-1|0;}
function AL6(){var b,c,d,e;BkR=$rt_createFloatArray(4096);b=0;while(b<4096){BkR.data[b]=Gt((b+0.5)/4096.0*6.2831854820251465);b=b+1|0;}c=0;while(c<360){d=BkR.data;e=c;d[(e*11.377778053283691|0)&4095]=Gt(e*0.01745329238474369);c=c+90|0;}}
function AJH(){D.call(this);}
function BkT(){var a=new AJH();AWd(a);return a;}
function AWd(a){return;}
function AMI(b){Bd();Beh=b;if(b){BdY=0.0;BdZ=0.0;setTimeout(Cu(new QB,"onTimer"),200);}else{Bef=B_();if(Beg)clearTimeout(Beg);Beg=0;BdD.exitPointerLock();}}
function FA(){var b,c;a:{Bd();Beb=null;if(!PY(BdU)){b=Tm(BdU,0);Beb=b;if(b!==null){c=1;break a;}}c=0;}return c;}
function Cx(){Bd();return Beb===null?0:DC($rt_str(Beb.type),B(522));}
function ARX(){Bd();return Beb===null?(-1):Beb.clientX;}
function XT(){Bd();return Beb===null?(-1):BdF.clientHeight-Beb.clientY|0;}
function CV(){var b;Bd();if(Beb===null)b=(-1);else{b=Beb.button;if(b==1)b=2;else if(b==2)b=1;}return b;}
function B$(b){Bd();return Bed.data[b];}
function G3(){Bd();return !DC(B(523),$rt_str(Beb.type))?0:Beb.deltaY===0.0?0:Beb.deltaY<=0.0?1:(-1);}
function Vq(){var a=this;D.call(a);a.EA=null;a.bI=0;}
function E7(a,b){var c=new Vq();A1V(c,a,b);return c;}
function A1V(a,b,c){a.EA=b;a.bI=c;}
function FE(){}
function VE(){var a=this;D.call(a);a.bh=null;a.cd=null;a.bL=0;a.nE=null;}
function D9(a){return a.bh.data[a.bL];}
function S3(a,b){var c;c=0;while(true){if(c>=a.bh.data.length)return (-1);if(a.bh.data[c]!==null&&a.bh.data[c].bA==b)break;c=c+1|0;}return c;}
function RJ(a){var b;b=0;while(true){if(b>=a.bh.data.length)return (-1);if(a.bh.data[b]===null)break;b=b+1|0;}return b;}
function ARj(a,b,c){var d;d=S3(a,b);if(d>=0&&d<9)a.bL=d;}
function F7(a,b){if(b>0)b=1;if(b<0)b=(-1);a.bL=a.bL-b|0;while(a.bL<0){a.bL=a.bL+9|0;}while(a.bL>=9){a.bL=a.bL-9|0;}}
function AEj(a){var b,c;b=0;while(b<a.bh.data.length){if(a.bh.data[b]!==null&&a.bh.data[b].mL>0){c=a.bh.data[b];c.mL=c.mL-1|0;}b=b+1|0;}}
function AGQ(a,b){var c,d;c=S3(a,b);if(c<0)return 0;d=a.bh.data[c];b=d.p-1|0;d.p=b;if(b<=0)a.bh.data[c]=null;return 1;}
function Vb(a,b){var c,d,e,f;if(!b.en){c=b.bA;d=b.p;e=0;a:{while(true){if(e>=a.bh.data.length){e=(-1);break a;}if(a.bh.data[e]!==null&&a.bh.data[e].bA==c&&a.bh.data[e].p<EB(a.bh.data[e])&&a.bh.data[e].p<64)break;e=e+1|0;}}if(e<0)e=RJ(a);if(e>=0){if(a.bh.data[e]===null)a.bh.data[e]=Kz(c,0);c=d<=(EB(a.bh.data[e])-a.bh.data[e].p|0)?d:EB(a.bh.data[e])-a.bh.data[e].p|0;if(c>(64-a.bh.data[e].p|0))c=64-a.bh.data[e].p|0;if(c){d=d-c|0;f=a.bh.data[e];f.p=f.p+c|0;a.bh.data[e].mL=5;}}b.p=d;if(!b.p)return 1;}c=RJ(a);if(c
<0)return 0;a.bh.data[c]=b;a.bh.data[c].mL=5;return 1;}
function Em(a,b,c){var d,e,f;d=a.bh;if(b>=a.bh.data.length){d=a.cd;b=b-a.bh.data.length|0;}d=d.data;if(d[b]===null)return null;if(d[b].p<=c){e=d[b];d[b]=null;return e;}f=EF(d[b],c);if(!d[b].p)d[b]=null;return f;}
function AFD(a,b,c){var d;d=a.bh;if(b>=a.bh.data.length){d=a.cd;b=b-a.bh.data.length|0;}d.data[b]=c;}
function ADx(a,b){var c;c=1.0;if(a.bh.data[a.bL]!==null)c=c*AFi(a.bh.data[a.bL],b);return c;}
function AL7(a,b){var c,d,e;c=0;while(c<a.bh.data.length){if(a.bh.data[c]!==null){d=Ha();JL(d,B(524),c<<24>>24);QP(a.bh.data[c],d);Js(b,d);}c=c+1|0;}e=0;while(e<a.cd.data.length){if(a.cd.data[e]!==null){d=Ha();JL(d,B(524),(e+100|0)<<24>>24);QP(a.cd.data[e],d);Js(b,d);}e=e+1|0;}return b;}
function ARo(a,b){var c,d,e;a.bh=J(Cd,36);a.cd=J(Cd,4);c=0;while(c<AOw(b)){d=Fc(b,c);e=LB(d,B(524))&255;if(e>=0&&e<a.bh.data.length)a.bh.data[e]=A$$(d);if(e>=100&&e<(a.cd.data.length+100|0))a.cd.data[e-100|0]=A$$(d);c=c+1|0;}}
function Ys(a){return a.bh.data.length+4|0;}
function RR(a,b){var c;c=a.bh;if(b>=a.bh.data.length){c=a.cd;b=b-a.bh.data.length|0;}return c.data[b];}
function ATt(a){return B(325);}
function AZs(a){return 64;}
function ARU(a,b){var c;c=RR(a,a.bL);return c===null?1:AAm(c,b);}
function ADW(a,b){var c;if(b.b_!==Bg_&&b.b_!==Bho)return 1;c=RR(a,a.bL);return c===null?0:AOa(c,b);}
function AIj(a,b){return a.cd.data[b];}
function TE(a){var b,c,d,e,f;b=0;c=0;d=0;e=0;while(e<a.cd.data.length){if(a.cd.data[e]!==null&&DL(a.cd.data[e]) instanceof F5){f=Kl(a.cd.data[e]);c=c+(f-a.cd.data[e].en|0)|0;d=d+f|0;b=b+DL(a.cd.data[e]).zd|0;}e=e+1|0;}if(!d)return 0;return (Bj(b-1|0,c)/d|0)+1|0;}
function AD1(a,b){var c;c=0;while(c<a.cd.data.length){if(a.cd.data[c]!==null&&DL(a.cd.data[c]) instanceof F5){FM(a.cd.data[c],b);if(!a.cd.data[c].p)a.cd.data[c]=null;}c=c+1|0;}}
function AI0(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;while(true){if(b>=a.bh.data.length){b=0;while(b<a.cd.data.length){if(a.cd.data[b]!==null){c=a.nE;d=a.cd.data[b];e=1;$p=2;continue _;}b=b+1|0;}return;}if(a.bh.data[b]!==null)break;b=b+1|0;}c=a.nE;d=a.bh.data[b];e=1;$p=1;case 1:AQv(c,d,e);if(C()){break _;}a.bh.data[b]=null;while(true){b=b+1|0;if(b>=a.bh.data.length){b=0;while(b<a.cd.data.length){if(a.cd.data[b]
!==null){c=a.nE;d=a.cd.data[b];e=1;$p=2;continue _;}b=b+1|0;}return;}if(a.bh.data[b]===null)continue;else break;}c=a.nE;d=a.bh.data[b];e=1;continue _;case 2:AQv(c,d,e);if(C()){break _;}a.cd.data[b]=null;while(true){b=b+1|0;if(b>=a.cd.data.length)break;if(a.cd.data[b]===null)continue;else{c=a.nE;d=a.cd.data[b];e=1;continue _;}}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AAp(a){return;}
function Du(){I1.call(this);}
function Ew(){var a=this;CS.call(a);a.br=null;a.fa=0;a.fm=0;a.c7=null;}
var BkU=null;function BkV(){var a=new Ew();Ie(a);return a;}
function Ie(a){DQ(a);a.br=null;a.fa=176;a.fm=166;a.c7=Ci();}
function ACi(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABh(a);if(C()){break _;}e=(a.bm-a.fa|0)/2|0;f=(a.bC-a.fm|0)/2|0;$p=2;case 2:a.s5(d);if(C()){break _;}B3();Bv(180.0,1.0,0.0,0.0);Hz();BE();B3();Bw(e,f,0.0);BT(1.0,1.0,1.0,1.0);Ba(32826);g=0;if(g>=a.c7.s){if(a.br===null){Bc(32826);DS();Bc(2896);Bc(2929);a.lu();Ba(2896);Ba(2929);BE();return;}Bw(0.0,
0.0,32.0);h=BkU;i=a.bZ;j=a.J.bo;k=a.br;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;}h=Y(a.c7,g);i=h.e3;l=h.lR;m=h.jP;n=h.jR;i=i.gy(l);if(i===null){l=h.rY();if(l>=0){Bc(2896);i=a.J.bo;j=a.J.bo;k=B(230);$p=5;continue _;}}j=BkU;k=a.bZ;o=a.J.bo;$p=4;continue _;case 3:AGh(h,i,j,k,b,c);if(C()){break _;}Lm(BkU,a.bZ,a.J.bo,a.br,b,c);Bc(32826);DS();Bc(2896);Bc(2929);a.lu();Ba(2896);Ba(2929);BE();return;case 4:AGh(j,k,o,i,m,n);if(C()){break _;}Lm(BkU,a.bZ,a.J.bo,i,m,n);if(Na(h,b,c)){Bc(2896);Bc(2929);l=h.jP;p=h.jR;KL(a,
l,p,l+16|0,p+16|0,(-2130706433),(-2130706433));Ba(2896);Ba(2929);}g=g+1|0;if(g>=a.c7.s){if(a.br===null){Bc(32826);DS();Bc(2896);Bc(2929);a.lu();Ba(2896);Ba(2929);BE();return;}Bw(0.0,0.0,32.0);h=BkU;i=a.bZ;j=a.J.bo;k=a.br;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;}h=Y(a.c7,g);i=h.e3;l=h.lR;m=h.jP;n=h.jR;i=i.gy(l);if(i===null){l=h.rY();if(l>=0){Bc(2896);i=a.J.bo;j=a.J.bo;k=B(230);$p=5;continue _;}}j=BkU;k=a.bZ;o=a.J.bo;continue _;case 5:$z=AHu(j,k);if(C()){break _;}p=$z;Eb(i,p);CH(a,m,n,(l%16|0)*16|0,(l/16|
0)*16|0,16,16);Ba(2896);if(Na(h,b,c)){Bc(2896);Bc(2929);l=h.jP;p=h.jR;KL(a,l,p,l+16|0,p+16|0,(-2130706433),(-2130706433));Ba(2896);Ba(2929);}g=g+1|0;if(g>=a.c7.s){if(a.br===null){Bc(32826);DS();Bc(2896);Bc(2929);a.lu();Ba(2896);Ba(2929);BE();return;}Bw(0.0,0.0,32.0);h=BkU;i=a.bZ;j=a.J.bo;k=a.br;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;}h=Y(a.c7,g);i=h.e3;l=h.lR;m=h.jP;n=h.jR;i=i.gy(l);if(i===null){l=h.rY();if(l>=0){Bc(2896);i=a.J.bo;j=a.J.bo;k=B(230);continue _;}}j=BkU;k=a.bZ;o=a.J.bo;$p=4;continue _;default:
E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AQy(a,b,c){var d,e;d=0;while(true){if(d>=a.c7.s)return null;e=Y(a.c7,d);if(Na(e,b,c))break;d=d+1|0;}return e;}
function AN7(a,b,c,d){var e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(d&&d!=1)){e=AQy(a,b,c);if(e!==null){$p=1;continue _;}if(a.br!==null){f=(a.bm-a.fa|0)/2|0;g=(a.bC-a.fm|0)/2|0;if(!(b>=f&&c>=g&&b<(f+a.fa|0)&&c<(g+a.fa|0))){h=a.J.f;if(!d){e=a.br;$p=2;continue _;}if(d==1){e=EF(a.br,1);$p=3;continue _;}}}}return;case 1:a:{AKA(e);if(C()){break _;}i=ARw(e);if(!(i===null&&a.br===null)){if
(i!==null&&a.br===null){g=!d?i.p:(i.p+1|0)/2|0;a.br=e.e3.j7(e.lR,g);if(i.p){$p=4;continue _;}h=null;$p=5;continue _;}if(i===null&&a.br!==null&&e.s8(a.br)){g=d?1:a.br.p;if(g>e.e3.f4())g=e.e3.f4();h=EF(a.br,g);$p=7;continue _;}if(i!==null&&a.br!==null){if(!e.s8(a.br)){if(i.bA!=a.br.bA)break a;if(EB(a.br)<=1)break a;g=i.p;if(g<=0)break a;if((g+a.br.p|0)>EB(a.br))break a;h=a.br;h.p=h.p+g|0;EF(i,g);if(i.p){$p=8;continue _;}h=null;$p=9;continue _;}if(i.bA==a.br.bA){if(i.bA==a.br.bA){if(!d){g=a.br.p;if(g>(e.e3.f4()
-i.p|0))g=e.e3.f4()-i.p|0;if(g>(EB(a.br)-i.p|0))g=EB(a.br)-i.p|0;EF(a.br,g);if(!a.br.p)a.br=null;i.p=i.p+g|0;}else if(d==1){g=1;if(g>(e.e3.f4()-i.p|0))g=e.e3.f4()-i.p|0;if(g>(EB(a.br)-i.p|0))g=EB(a.br)-i.p|0;EF(a.br,g);if(!a.br.p)a.br=null;i.p=i.p+g|0;}}}else if(a.br.p<=e.e3.f4()){h=a.br;$p=6;continue _;}}}}return;case 2:ALT(h,e);if(C()){break _;}a.br=null;if(d!=1)return;e=EF(a.br,1);$p=3;case 3:ALT(h,e);if(C()){break _;}if(!a.br.p)a.br=null;return;case 4:e.Jo();if(C()){break _;}return;case 5:ALx(e,h);if(C())
{break _;}$p=4;continue _;case 6:ALx(e,h);if(C()){break _;}a.br=i;return;case 7:ALx(e,h);if(C()){break _;}if(!a.br.p)a.br=null;return;case 8:e.Jo();if(C()){break _;}return;case 9:ALx(e,h);if(C()){break _;}$p=8;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function A9J(a,b,c,d){return;}
function AAx(a,b,c){var d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!=1&&c!=a.J.o.ft.bI)return;d=a.J;e=null;$p=1;case 1:ADV(d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AA0(a){var b,c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.br===null)return;b=a.J.f;c=a.br;$p=1;case 1:ALT(b,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,$p);}
function A$3(a){return 0;}
function AKa(){BkU=X3();}
function APP(){var a=this;Ew.call(a);a.j3=null;a.xF=null;a.AE=0.0;a.Es=0.0;}
function E6(a){var b=new APP();AZP(b,a);return b;}
function AZP(a,b){var c,d,e,f,g;Ie(a);a.j3=A0D(a,2,2);a.xF=A5i();a.pT=1;U(a.c7,A3s(a,a.j3,a.xF,0,144,36));c=0;while(c<2){d=0;while(d<2){U(a.c7,D6(a,a.j3,d+(c*2|0)|0,88+(d*18|0)|0,26+(c*18|0)|0));d=d+1|0;}c=c+1|0;}d=0;while(d<4){e=a.c7;f=new QK;UD(f,a,b,(Ys(b)-1|0)-d|0,8,8+(d*18|0)|0);f.HX=a;f.wn=d;U(e,f);d=d+1|0;}d=0;while(d<3){g=0;while(g<9){U(a.c7,D6(a,b,g+((d+1|0)*9|0)|0,8+(g*18|0)|0,84+(d*18|0)|0));g=g+1|0;}d=d+1|0;}c=0;while(c<9){U(a.c7,D6(a,b,c,8+(c*18|0)|0,142));c=c+1|0;}}
function ALK(a){var b,c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AA0(a);if(C()){break _;}b=0;while(b<a.j3.lZ){c=Gj(a.j3,b);if(c!==null){d=a.J.f;$p=2;continue _;}b=b+1|0;}return;case 2:ALT(d,c);if(C()){break _;}while(true){b=b+1|0;if(b>=a.j3.lZ)break;c=Gj(a.j3,b);if(c===null)continue;else{d=a.J.f;continue _;}}return;default:E$();}}C3().s(a,b,c,d,$p);}
function ATT(a,b){var c,d,e,f,g,h;c=$rt_createIntArray(9);d=c.data;e=0;while(e<3){f=0;while(f<3){g=(-1);if(e<2&&f<2){h=Gj(a.j3,e+(f*2|0)|0);if(h!==null)g=h.bA;}d[e+(f*3|0)|0]=g;f=f+1|0;}e=e+1|0;}Pl(a.xF,0,RN(Wq(),c));}
function AZ7(a){ED(a.bZ,B(525),86,16,4210752);}
function ADZ(a,b,c,d){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ACi(a,b,c,d);if(C()){break _;}a.AE=b;a.Es=c;return;default:E$();}}C3().s(a,b,c,d,$p);}
function X$(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.J.bo;d=B(526);$p=1;case 1:$z=AHu(c,d);if(C()){break _;}e=$z;BT(1.0,1.0,1.0,1.0);Eb(a.J.bo,e);f=(a.bm-a.fa|0)/2|0;g=(a.bC-a.fm|0)/2|0;CH(a,f,g,0,0,a.fa,a.fm);Ba(32826);Ba(2903);B3();b=f+51|0;e=g+75|0;Bw(b,e,50.0);CC((-30.0),30.0,30.0);Bv(180.0,
0.0,0.0,1.0);h=a.J.f.dG;i=a.J.f.u;j=a.J.f.I;k=b-a.AE;l=(e-50|0)-a.Es;Bv(135.0,0.0,1.0,0.0);Hz();Bv((-135.0),0.0,1.0,0.0);m=l/40.0;Bv( -Is(m)*20.0,1.0,0.0,0.0);d=a.J.f;n=k/40.0;d.dG=Is(n)*20.0;a.J.f.u=Is(n)*40.0;a.J.f.I= -Is(m)*20.0;Bw(0.0,a.J.f.c4,0.0);d=Bgo;c=a.J.f;m=0.0;n=0.0;o=0.0;b=0.0;p=1.0;$p=2;case 2:AQE(d,c,m,n,o,b,p);if(C()){break _;}a.J.f.dG=h;a.J.f.u=i;a.J.f.I=j;BE();DS();Bc(32826);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function I8(){var a=this;D.call(a);a.qY=0;a.sC=0;a.vE=0;a.vK=0;a.xE=0;a.DM=0;a.cI=null;a.wk=null;a.wl=null;a.wm=null;a.t$=null;a.uj=null;a.vh=null;a.xb=null;a.vF=null;a.uS=null;a.tU=null;a.uw=null;a.uF=null;a.wu=null;a.t7=null;a.yf=null;a.ra=0;a.pY=0;a.oE=0;a.Gu=0;a.G9=0;a.ub=null;a.uP=null;a.xh=0;a.w2=null;a.vC=null;a.wb=null;a.yn=null;a.yt=null;a.x6=null;a.mq=null;a.mI=null;a.vz=0;a.r5=0.0;a.r4=0.0;a.r3=0.0;a.r2=0.0;a.sH=0.0;a.tt=0.0;a.rM=0.0;a.st=0.0;a.qW=0.0;a.qX=0.0;a.tj=0.0;a.ti=0.0;a.th=0.0;a.tg=0.0;a.s0
=0.0;a.sY=0.0;a.sZ=0.0;}
var BkW=null;var BkX=null;function Baf(a,b,c,d,e,f,g){var h=new I8();AIf(h,a,b,c,d,e,f,g);return h;}
function Pb(b){var c,d,e,f,g,h,i;c=BkW.data[b];if(c===null){d=0;e=0;f=0;g=0;h=0;i=0;if((b&1)==1)d=1;if((b&4)==4)e=1;if((b&8)==8)f=1;if((b&16)==16)g=1;if((b&32)==32)h=1;if((b&64)==64)i=1;c=Baf(b,d,e,f,g,h,i);BkW.data[b]=c;}return c;}
function AIf(a,b,c,d,e,f,g,h){var i,j,k;WI(a);a.wk=null;a.wl=null;a.wm=null;a.t$=null;a.uj=null;a.vh=null;a.xb=null;a.vF=null;a.uS=null;a.tU=null;a.uw=null;a.uF=null;a.wu=null;a.t7=null;a.yf=null;a.xh=0;a.w2=$rt_createFloatArray(16);a.vC=$rt_createFloatArray(16);a.wb=$rt_createFloatArray(16);a.yn=Ku(M9());a.yt=Ku(M9());a.x6=Ku(M9());a.mq=A2Z();a.mI=A2Z();a.vz=0;a.r5=0.0;a.r4=0.0;a.r3=0.0;a.r2=0.0;a.sH=0.0;a.tt=0.0;a.rM=0.0;a.st=0.0;a.qW=0.0;a.qX=0.0;a.tj=0.0;a.ti=0.0;a.th=0.0;a.tg=0.0;a.s0=0.0;a.sY=0.0;a.sZ
=0.0;a.qY=c;a.sC=d;a.vE=e;a.vK=f;a.xE=g;a.DM=h;if(BkX===null)BkX=ACa(B(527));i=B(3);if(a.qY)i=BL(H(H(BX(),i),B(528)));if(a.sC)i=BL(H(H(BX(),i),B(529)));if(a.vE)i=BL(H(H(BX(),i),B(530)));if(a.vK)i=BL(H(H(BX(),i),B(531)));if(a.xE)i=BL(H(H(BX(),i),B(532)));if(a.DM)i=BL(H(H(BX(),i),B(533)));i=BL(H(H(BX(),i),BkX));j=OG(35633);O2(j,BL(H(H(H(BX(),PI()),B(534)),i)));WE(j);if(!Vh(j)){Cg(C$(),KJ(BL(H(H(BX(),B(535)),Ub(j))),B(158),B(536)));M(Z2(B(537)));}k=OG(35632);O2(k,BL(H(H(H(BX(),PI()),B(538)),i)));WE(k);if(!Vh(k))
{Cg(C$(),KJ(BL(H(H(BX(),B(535)),Ub(k))),B(158),B(539)));M(Z2(B(537)));}a.cI=AH3();Sd(a.cI,j);Sd(a.cI,k);b=1;a.ra=0;LV(a.cI,a.ra,B(540));if(!a.sC)a.pY=(-1);else{a.pY=b;LV(a.cI,a.pY,B(541));b=2;}if(!a.qY)a.oE=(-1);else{c=b+1|0;a.oE=b;LV(a.cI,a.oE,B(542));b=c;}a.Gu=(-1);a.G9=b;AAG(a.cI);UM(a.cI,j);UM(a.cI,k);Ti(j);Ti(k);if(!AGo(a.cI)){Cg(C$(),KJ(BL(H(H(BX(),B(535)),AHv(a.cI))),B(158),B(543)));M(Z2(B(537)));}V0(a.cI);a.wk=Dq(a.cI,B(544));a.wl=Dq(a.cI,B(545));a.wm=Dq(a.cI,B(546));a.tU=Dq(a.cI,B(547));if(a.vE){a.uw
=Dq(a.cI,B(548));a.t7=Dq(a.cI,B(549));a.yf=Dq(a.cI,B(550));}if(a.vK){a.t$=Dq(a.cI,B(551));a.uj=Dq(a.cI,B(552));a.vh=Dq(a.cI,B(553));a.xb=Dq(a.cI,B(554));a.vF=Dq(a.cI,B(555));a.uS=Dq(a.cI,B(556));}if(a.xE)a.uF=Dq(a.cI,B(557));Ra(Dq(a.cI,B(558)),0);a.wu=Dq(a.cI,B(559));a.ub=Pa();a.uP=L7();RT(a.ub);Hh(34962,a.uP);RB(a);}
function RB(a){N8(a.ra);N$(a.ra,3,5126,0,28,0);if(a.sC){N8(a.pY);N$(a.pY,2,5126,0,28,12);}if(a.qY){N8(a.oE);N$(a.oE,4,5121,1,28,20);}}
function AQZ(a){V0(a.cI);}
function AUc(a){return;}
function AMt(a,b){if(!Ls(b,a.yn)){NX(GR(a.yn,b),a.w2);Mg(a.wk,a.w2);}}
function AM3(a,b){if(!Ls(b,a.yt)){NX(GR(a.yt,b),a.vC);Mg(a.wl,a.vC);}}
function ZX(a,b){if(!Ls(b,a.x6)){NX(GR(a.x6,b),a.wb);Mg(a.wm,a.wb);}}
function ANd(a,b,c){if(!(Ta(b,a.mq)&&Ta(c,a.mI))){VH(a.mq,b);VH(a.mI,c);Ln(a.t7,a.mq.lf,a.mq.lg,a.mq.le);Ln(a.yf,a.mI.lf,a.mI.lg,a.mI.le);}}
function ALp(a,b){if(a.vz!=b){a.vz=b;Ra(a.uj,b%2|0);Ih(a.uS,b/2|0);}}
function AQa(a,b,c,d,e){if(!(a.r5===b&&a.r4===c&&a.r3===d&&a.r2===e)){a.r5=b;a.r4=c;a.r3=d;a.r2=e;Ul(a.t$,a.r5,a.r4,a.r3,a.r2);}}
function APM(a,b,c){if(!(a.sH===b&&a.tt===c)){a.sH=b;a.tt=c;Ih(a.vh,a.sH);Ih(a.xb,a.tt);}}
function AKL(a,b){if(a.rM!==b){a.rM=b;Ih(a.vF,a.rM);}}
function AIV(a,b){if(a.st!==b){a.st=b;Ih(a.uF,a.st);}}
function AOL(a,b,c){var d,e;if(!(a.qW===b&&a.qX===c)){a.qW=b;a.qX=c;d=a.wu;b=a.qW;c=a.qX;Bd();if(d!==null){e=BdI;d=d.kA;e.uniform2f(d,b,c);}}}
function ALN(a,b,c,d,e){if(!(a.tj===b&&a.ti===c&&a.th===d&&a.tg===e)){a.tj=b;a.ti=c;a.th=d;a.tg=e;Ul(a.tU,a.tj,a.ti,a.th,a.tg);}}
function AB8(a,b,c,d){if(!(a.s0===b&&a.sY===c&&a.sZ===d)){a.s0=b;a.sY=c;a.sZ=d;Ln(a.uw,a.s0,a.sY,a.sZ);}}
function AOS(){BkW=J(I8,128);BkX=null;}
function Rt(){var a=this;D.call(a);a.By=0;a.rk=null;a.o2=null;a.lP=0;a.jM=0;}
function Tj(){var a=this;D.call(a);a.t1=null;a.xv=0;a.Ds=0;a.Fh=0;}
function AHq(){var a=this;D.call(a);a.k_=0;a.h_=0;a.ia=0;a.ib=0;a.hM=0;a.gz=null;a.nD=null;}
function A0C(a,b,c,d,e){var f=new AHq();A58(f,a,b,c,d,e);return f;}
function A1c(a){var b=new AHq();A9B(b,a);return b;}
function A58(a,b,c,d,e,f){a.k_=0;a.h_=b;a.ia=c;a.ib=d;a.hM=e;a.gz=BY(f.x,f.z,f.w);}
function A9B(a,b){a.k_=1;a.nD=b;a.gz=BY(b.d,b.j,b.e);}
function Cd(){var a=this;D.call(a);a.p=0;a.mL=0;a.bA=0;a.en=0;}
function AL3(a){var b=new Cd();AH1(b,a);return b;}
function G2(a,b){var c=new Cd();U9(c,a,b);return c;}
function Ql(a){var b=new Cd();DD(b,a);return b;}
function EK(a,b){var c=new Cd();Gr(c,a,b);return c;}
function Kz(a,b){var c=new Cd();MO(c,a,b);return c;}
function Or(a,b,c){var d=new Cd();A0G(d,a,b,c);return d;}
function A$$(a){var b=new Cd();A1v(b,a);return b;}
function AH1(a,b){U9(a,b,1);}
function U9(a,b,c){MO(a,b.b,c);}
function DD(a,b){Gr(a,b,1);}
function Gr(a,b,c){MO(a,b.cW,c);}
function MO(a,b,c){a.p=0;a.bA=b;a.p=c;}
function A0G(a,b,c,d){a.p=0;a.bA=b;a.p=c;a.en=d;}
function A1v(a,b){a.p=0;AD$(a,b);}
function EF(a,b){a.p=a.p-b|0;return Or(a.bA,b,a.en);}
function DL(a){BB();return Bhe.data[a.bA];}
function DK(a){return DL(a).te;}
function AJh(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=DL(a);$p=1;case 1:$z=h.iP(a,b,c,d,e,f,g);if(C()){break _;}d=$z;return d;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AFi(a,b){return DL(a).x7(a,b);}
function ABg(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=DL(a);$p=1;case 1:$z=d.n_(a,b,c);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,$p);}
function QP(a,b){Ft(b,B(560),a.bA<<16>>16);JL(b,B(561),a.p<<24>>24);Ft(b,B(562),a.en<<16>>16);return b;}
function AD$(a,b){a.bA=FL(b,B(560));a.p=LB(b,B(561));a.en=FL(b,B(562));}
function EB(a){return DL(a).eZ;}
function Kl(a){BB();return Bhe.data[a.bA].fg;}
function FM(a,b){a.en=a.en+b|0;if(a.en>Kl(a)){a.p=a.p-1|0;if(a.p<0)a.p=0;a.en=0;}}
function AE0(a,b){BB();Bhe.data[a.bA].si(a,b);}
function QI(a,b,c,d,e){BB();Bhe.data[a.bA].x1(a,b,c,d,e);}
function AAm(a,b){BB();return Bhe.data[a.bA].n2(b);}
function AOa(a,b){BB();return Bhe.data[a.bA].o9(b);}
function A0_(a,b){return;}
function AEB(a,b){BB();Bhe.data[a.bA].yJ(a,b);}
function ZL(){var a=this;D.call(a);a.h5=null;a.lZ=0;a.sn=null;}
function A0D(a,b,c){var d=new ZL();AWv(d,a,b,c);return d;}
function AWv(a,b,c,d){a.lZ=Bj(c,d);a.h5=J(Cd,a.lZ);a.sn=b;}
function A3q(a){return a.lZ;}
function Gj(a,b){return a.h5.data[b];}
function AEY(a,b,c){var d,e;if(a.h5.data[b]===null)return null;if(a.h5.data[b].p<=c){d=a.h5.data[b];a.h5.data[b]=null;a.sn.tq(a);return d;}e=EF(a.h5.data[b],c);if(!a.h5.data[b].p)a.h5.data[b]=null;a.sn.tq(a);return e;}
function A3D(a,b,c){a.h5.data[b]=c;a.sn.tq(a);}
function A80(a){return 64;}
function ADQ(a){return;}
function AAF(){D.call(this);this.m9=null;}
function A5i(){var a=new AAF();AST(a);return a;}
function AST(a){a.m9=J(Cd,1);}
function A46(a,b){return a.m9.data[b];}
function AWD(a,b,c){var d;if(a.m9.data[b]===null)return null;d=a.m9.data[b];a.m9.data[b]=null;return d;}
function Pl(a,b,c){a.m9.data[b]=c;}
function AYW(a){return 64;}
function ANk(a){return;}
function HM(){var a=this;D.call(a);a.lR=0;a.jP=0;a.jR=0;a.e3=null;a.p4=null;}
function D6(a,b,c,d,e){var f=new HM();UD(f,a,b,c,d,e);return f;}
function UD(a,b,c,d,e,f){a.p4=b;a.e3=c;a.lR=d;a.jP=e;a.jR=f;}
function Na(a,b,c){var d,e;d=(a.p4.bm-a.p4.fa|0)/2|0;e=(a.p4.bC-a.p4.fm|0)/2|0;d=b-d|0;c=c-e|0;return d>=(a.jP-1|0)&&d<((a.jP+16|0)+1|0)&&c>=(a.jR-1|0)&&c<((a.jR+16|0)+1|0)?1:0;}
function AK_(a){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AKA(a);if(C()){break _;}return;default:E$();}}C3().s(a,$p);}
function AXh(a,b){return 1;}
function ARw(a){return a.e3.gy(a.lR);}
function ALx(a,b){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.e3.jE(a.lR,b);$p=1;case 1:AKA(a);if(C()){break _;}return;default:E$();}}C3().s(a,b,$p);}
function A9S(a){return (-1);}
function AKA(a){var b,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.e3;$p=1;case 1:b.kl();if(C()){break _;}return;default:E$();}}C3().s(a,b,$p);}
function ADf(){HM.call(this);this.qP=null;}
function A3s(a,b,c,d,e,f){var g=new ADf();A4T(g,a,b,c,d,e,f);return g;}
function A4T(a,b,c,d,e,f,g){UD(a,b,d,e,f,g);a.qP=c;}
function A0l(a,b){return 0;}
function AN$(a){var b;b=0;while(b<a.qP.lZ){if(Gj(a.qP,b)!==null)AEY(a.qP,b,1);b=b+1|0;}}
function QK(){var a=this;HM.call(a);a.wn=0;a.HX=null;}
function A2T(a,b){return !(DL(b) instanceof F5)?0:DL(b).zY!=a.wn?0:1;}
function AWx(a){return 15+(a.wn*16|0)|0;}
function Wb(){D.call(this);this.D0=null;}
function SC(){var a=this;D.call(a);a.A3=null;a.vS=0;}
function M6(){Fk.call(this);}
function ALS(b){var c,d;c=b.data.length;d=new UV;Uf(d,c,0,0+c|0);d.xY=0;d.Bv=0;d.wT=b;return d;}
function AFf(a){EA(a);return a;}
function A2D(a){Gx(a);return a;}
function Dg(){var a=this;D.call(a);a.iE=null;a.HC=null;a.H5=null;a.mc=0.0;a.B1=0.0;}
function BkY(){var a=new Dg();EH(a);return a;}
function EH(a){a.HC=A$Y();a.H5=Ki();a.mc=0.0;a.B1=1.0;}
function AKs(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.iE.t0;$p=1;case 1:$z=AHu(c,b);if(C()){break _;}d=$z;Eb(c,d);return;default:E$();}}C3().s(a,b,c,d,$p);}
function APr(a,b,c){var d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=a.iE.t0;$p=1;case 1:$z=AD4(d,b,c);if(C()){break _;}e=$z;Eb(d,e);return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AG2(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bc(2896);L();g=Bgp.ba;h=(g&15)<<4;i=g&240;f=h;j=f/256.0;k=(f+15.989999771118164)/256.0;f=i;l=f/256.0;m=(f+15.989999771118164)/256.0;B3();Bw(c,d,e);n=b.c1*1.399999976158142;CC(n,n,n);o=B(179);$p
=1;case 1:AKs(a,o);if(C()){break _;}BA();o=BeL;p=1.0;q=0.0;r=b.eO/b.c1;Bv( -a.iE.rr,0.0,1.0,0.0);Bw(0.0,0.0,0.4000000059604645+(r|0)*0.019999999552965164);BT(1.0,1.0,1.0,1.0);Bz(o);e=k;s=m;t=j;u=l;while(r>0.0){c=p-0.5;d=0.0-q;G(o,c,d,0.0,e,s);G(o,(-0.5),d,0.0,t,s);d=1.399999976158142-q;G(o,(-0.5),d,0.0,t,u);G(o,c,d,0.0,e,u);r=r-1.0;q=q-1.0;p=p*0.8999999761581421;Bw(0.0,0.0,(-0.03999999910593033));}Br(o);BE();Ba(2896);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function A8q(b,c,d,e){var f;Bc(3553);BA();f=BeL;BT(1.0,1.0,1.0,1.0);Bz(f);E_(f,c,d,e);Cj(0.0,0.0,(-1.0));Bf(f,b.R,b.U,b.S);Bf(f,b.V,b.U,b.S);Bf(f,b.V,b.M,b.S);Bf(f,b.R,b.M,b.S);Cj(0.0,0.0,1.0);Bf(f,b.R,b.M,b.W);Bf(f,b.V,b.M,b.W);Bf(f,b.V,b.U,b.W);Bf(f,b.R,b.U,b.W);Cj(0.0,(-1.0),0.0);Bf(f,b.R,b.M,b.S);Bf(f,b.V,b.M,b.S);Bf(f,b.V,b.M,b.W);Bf(f,b.R,b.M,b.W);Cj(0.0,1.0,0.0);Bf(f,b.R,b.U,b.W);Bf(f,b.V,b.U,b.W);Bf(f,b.V,b.U,b.S);Bf(f,b.R,b.U,b.S);Cj((-1.0),0.0,0.0);Bf(f,b.R,b.M,b.W);Bf(f,b.R,b.U,b.W);Bf(f,b.R,b.U,
b.S);Bf(f,b.R,b.M,b.S);Cj(1.0,0.0,0.0);Bf(f,b.V,b.M,b.S);Bf(f,b.V,b.U,b.S);Bf(f,b.V,b.U,b.W);Bf(f,b.V,b.M,b.W);E_(f,0.0,0.0,0.0);Br(f);Ba(3553);}
function AUH(a,b){a.iE=b;}
function ANl(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AJU(a.iE,b.d,b.j,b.e);if(b.cV<=0)return;$p=1;case 1:AG2(a,b,c,d,e,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AII(){var a=this;Dg.call(a);a.wJ=null;a.ig=null;}
function X3(){var a=new AII();A5x(a);return a;}
function A5x(a){EH(a);a.wJ=Ki();a.ig=new DB;a.mc=0.15000000596046448;a.B1=0.75;}
function APH(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=b.nh;B3();i=Bq((b.mM+g)/10.0+b.yx)*0.10000000149011612+0.10000000149011612;j=((b.mM+g)/20.0+b.yx)*57.2957763671875;k=1;if(b.nh.p>1)k=2;if(b.nh.p>5)k=3;if(b.nh.p>20)k=4;Bw(c,d+
i,e);Ba(32826);if(h.bA<256){L();if(!BeP.data[h.bA].em()){Bv(j,0.0,1.0,0.0);b=B(179);$p=3;continue _;}}CC(0.5,0.5,0.5);l=DK(h);if(h.bA>=256){b=B(230);$p=1;continue _;}b=B(179);$p=2;continue _;case 1:AKs(a,b);if(C()){break _;}BA();m=BeL;n=(l%16|0)*16|0;o=(n+0|0)/256.0;p=(n+16|0)/256.0;l=(l/16|0)*16|0;q=(l+0|0)/256.0;r=(l+16|0)/256.0;s=0;d=o;e=r;t=p;u=q;while(s<k){B3();if(s>0)Bw((N(a.ig)*2.0-1.0)*0.30000001192092896,(N(a.ig)*2.0-1.0)*0.30000001192092896,(N(a.ig)*2.0-1.0)*0.30000001192092896);Bv(180.0-a.iE.rr,0.0,
1.0,0.0);Bz(m);Cj(0.0,1.0,0.0);G(m,(-0.5),(-0.25),0.0,d,e);G(m,0.5,(-0.25),0.0,t,e);G(m,0.5,0.75,0.0,t,u);G(m,(-0.5),0.75,0.0,d,u);Br(m);BE();s=s+1|0;}Bc(32826);BE();return;case 2:AKs(a,b);if(C()){break _;}BA();m=BeL;n=(l%16|0)*16|0;o=(n+0|0)/256.0;p=(n+16|0)/256.0;l=(l/16|0)*16|0;q=(l+0|0)/256.0;r=(l+16|0)/256.0;s=0;d=o;e=r;t=p;u=q;while(s<k){B3();if(s>0)Bw((N(a.ig)*2.0-1.0)*0.30000001192092896,(N(a.ig)*2.0-1.0)*0.30000001192092896,(N(a.ig)*2.0-1.0)*0.30000001192092896);Bv(180.0-a.iE.rr,0.0,1.0,0.0);Bz(m);Cj(0.0,
1.0,0.0);G(m,(-0.5),(-0.25),0.0,d,e);G(m,0.5,(-0.25),0.0,t,e);G(m,0.5,0.75,0.0,t,u);G(m,(-0.5),0.75,0.0,d,u);Br(m);BE();s=s+1|0;}Bc(32826);BE();return;case 3:AKs(a,b);if(C()){break _;}v=0.25;if(!BeP.data[h.bA].gg()&&h.bA!=BeU.b)v=0.5;CC(v,v,v);n=0;while(n<k){B3();if(n>0)Bw((N(a.ig)*2.0-1.0)*0.20000000298023224/v,(N(a.ig)*2.0-1.0)*0.20000000298023224/v,(N(a.ig)*2.0-1.0)*0.20000000298023224/v);GY(a.wJ,BeP.data[h.bA]);BE();n=n+1|0;}Bc(32826);BE();return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,
s,t,u,v,$p);}
function AGh(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(d!==null){if(d.bA<256){L();if(!BeP.data[d.bA].em()){g=d.bA;b=B(179);$p=1;continue _;}}if(DK(d)>=0){Bc(2896);if(d.bA>=256){b=B(230);$p=2;continue _;}b=B(179);$p=3;continue _;}}return;case 1:$z=AHu(c,b);if(C()){break _;}h=$z;Eb(c,h);i=BeP.data[g];B3();Bw(e-2|0,f+3|0,0.0);CC(10.0,10.0,10.0);Bw(1.0,0.5,8.0);Bv(210.0,1.0,
0.0,0.0);Bv(45.0,0.0,1.0,0.0);BT(1.0,1.0,1.0,1.0);GY(a.wJ,i);BE();return;case 2:$z=AHu(c,b);if(C()){break _;}g=$z;Eb(c,g);W1(a,e,f,(DK(d)%16|0)*16|0,(DK(d)/16|0)*16|0,16,16);Ba(2896);return;case 3:$z=AHu(c,b);if(C()){break _;}g=$z;Eb(c,g);W1(a,e,f,(DK(d)%16|0)*16|0,(DK(d)/16|0)*16|0,16,16);Ba(2896);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function Lm(a,b,c,d,e,f){var g,h,i,j,k,l;if(d!==null){if(d.p>1){c=new S;V(c);g=T(Be(H(c,B(3)),d.p));Bc(2896);Bc(2929);Cy(b,g,((e+19|0)-2|0)-Dw(b,g)|0,(f+6|0)+3|0,16777215);Ba(2896);Ba(2929);}if(d.en>0){h=13-((d.en*13|0)/Kl(d)|0)|0;i=255-((d.en*255|0)/Kl(d)|0)|0;Bc(2896);Bc(2929);Bc(3553);BA();j=BeL;k=255-i|0;l=k<<16|i<<8;k=(k/4|0)<<16|16128;e=e+2|0;f=f+13|0;N5(a,j,e,f,13,2,0);N5(a,j,e,f,12,1,k);N5(a,j,e,f,h,1,l);Ba(3553);Ba(2896);Ba(2929);BT(1.0,1.0,1.0,1.0);}}}
function N5(a,b,c,d,e,f,g){var h,i,j;Bz(b);ER(b,g);h=c+0|0;i=d+0|0;Bf(b,h,i,0.0);j=d+f|0;Bf(b,h,j,0.0);h=c+e|0;Bf(b,h,j,0.0);Bf(b,h,i,0.0);Br(b);}
function W1(a,b,c,d,e,f,g){var h,i,j,k,l,m,n;BA();h=BeL;Bz(h);i=b+0|0;j=c+g|0;k=(d+0|0)*0.00390625;l=(e+g|0)*0.00390625;G(h,i,j,0.0,k,l);m=b+f|0;n=(d+f|0)*0.00390625;G(h,m,j,0.0,n,l);l=c+0|0;j=(e+0|0)*0.00390625;G(h,m,l,0.0,n,j);G(h,i,l,0.0,k,j);Br(h);}
function AC7(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:APH(a,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function Pd(){var a=this;D.call(a);a.BQ=null;a.In=0;a.Ik=0;a.Gm=0;a.Hf=0;}
function QD(){var a=this;D.call(a);a.f1=null;a.yc=null;}
function Zr(a,b){var c,d,e,f,g,h,i,j,k,l;if(Ho()===null)Bd_=BdD.createElement("canvas");if(Ho().width<a.f1.width){b=Ho();c=a.f1.width;b.width=c;}if(Ho().height<a.f1.height){b=Ho();c=a.f1.height;b.height=c;}if(JR()===null)Bea=Ho().getContext("2d");b=JR();d=a.f1.width;e=a.f1.height;b.clearRect(0.0,0.0,d,e);b=JR();c=a.f1;d=a.f1.width;e=a.f1.height;b.drawImage(c,0.0,0.0,d,e);b=JR();d=a.f1.width;e=a.f1.height;f=b.getImageData(0.0,0.0,d,e);c=f.data;g=Bj(f.width,f.height);WG($rt_str(a.f1.src));if(c.byteLength<(g*4
|0)){CM(a.yc,null);return;}h=$rt_createIntArray(g);i=h.data;j=0;g=i.length;while(j<g){k=j*4|0;i[j]=c[k]<<16|c[k+1|0]<<8|c[k+2|0]|c[k+3|0]<<24;j=j+1|0;}b=a.yc;c=new Tj;k=f.width;l=f.height;if(g==Bj(k,l)){c.xv=k;c.Ds=l;c.Fh=1;c.t1=h;CM(b,c);return;}b=new Cc;Bl(b,B(563));M(b);}
function A7s(a,b){Zr(a,b);}
function QC(){var a=this;D.call(a);a.Em=null;a.E4=null;}
function AJG(a,b){WG($rt_str(a.Em.src));CM(a.E4,null);}
function A7E(a,b){AJG(a,b);}
function Ix(){M6.call(this);}
function BkZ(a,b,c){var d=new Ix();Uf(d,a,b,c);return d;}
function Uf(a,b,c,d){KO(a,b);a.bk=c;a.cy=d;}
function AGb(a){var b,c;if(a.bk<a.cy){b=a.bk;a.bk=b+1|0;return a.yv(b);}c=new Gu;O(c);M(c);}
function NP(a,b){var c,d;if(a.m2()){c=new FV;O(c);M(c);}if(a.bk<a.cy){d=a.bk;a.bk=d+1|0;a.u9(d,b);return a;}c=new Hc;O(c);M(c);}
function Q2(a,b){var c,d;if(b>=0&&b<a.cy)return AOM(a,b);c=new BO;d=new S;V(d);Bl(c,T(H(Be(H(Be(H(d,B(273)),b),B(244)),a.cy),B(27))));M(c);}
function AQ2(a,b,c){var d,e;if(a.m2()){d=new FV;O(d);M(d);}if(b>=0&&b<a.cy){ANK(a,b,c);return a;}e=new BO;d=new S;V(d);Bl(e,T(H(Be(H(Be(H(d,B(273)),b),B(244)),a.cy),B(27))));M(e);}
function AXV(a){return a.m2();}
function UV(){var a=this;Ix.call(a);a.Bv=0;a.xY=0;a.wT=null;}
function AOM(a,b){return a.wT.data[b+a.xY|0];}
function ANK(a,b,c){a.wT.data[b+a.xY|0]=c;}
function ASR(a){return a.Bv;}
function V6(){D.call(this);this.jq=null;}
function V2(){var a=this;D.call(a);a.i0=null;a.xp=0;}
function Xh(){D.call(this);this.kA=null;}
function Jp(){B6.call(this);}
function Bk0(){var a=new Jp();AYg(a);return a;}
function AYg(a){O(a);}
function UJ(){var a=this;CS.call(a);a.Az=null;a.Ay=null;a.qx=null;a.Eu=null;}
function ADh(a){Dy(a.bG);U(a.bG,Dj(0,(a.bm/2|0)-100|0,(a.bC/4|0)+72|0,B(564)));Dy(a.qx);DF(a.qx,AQC(a.bZ,a.Ay));}
function AOF(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.cl)return;b=a.J;c=a.Eu;$p=1;case 1:ADV(b,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,$p);}
function AMC(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABh(a);if(C()){break _;}DG(a,a.bZ,a.Az,a.bm/2|0,70,16777215);e=90;f=Jl(a.qx);while(KC(f)){g=KT(f);DG(a,a.bZ,g,a.bm/2|0,e,16777215);e=e+9|0;}$p=2;case 2:AFE(a,b,c,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function FV(){Jp.call(this);}
function Bk1(){var a=new FV();A6N(a);return a;}
function A6N(a){O(a);}
function Hc(){B6.call(this);}
function Bk2(){var a=new Hc();A5U(a);return a;}
function A5U(a){O(a);}
function Gu(){B6.call(this);}
function Bk3(){var a=new Gu();A1G(a);return a;}
function A1G(a){O(a);}
function Tz(){var a=this;D.call(a);a.yW=null;a.Dj=null;a.vL=0;a.rO=0;}
function AAz(a){return Fl(a.yW);}
function N_(a,b){return Ct(a.Dj)<b?0:1;}
function A5P(a,b){a.vL=b;}
function A_Q(a,b){a.rO=b;}
function ACn(){var a=this;D.call(a);a.yC=null;a.oD=0;}
function Rz(){CS.call(this);}
function Bk4(){var a=new Rz();A6P(a);return a;}
function A6P(a){DQ(a);}
function Mm(){CS.call(this);}
function Bk5(){var a=new Mm();A94(a);return a;}
function A94(a){DQ(a);}
function AOo(a){Dy(a.bG);U(a.bG,Dj(1,(a.bm/2|0)-100|0,(a.bC/4|0)+72|0,B(565)));U(a.bG,Dj(2,(a.bm/2|0)-100|0,(a.bC/4|0)+96|0,B(566)));if(a.J.k3===null)Y(a.bG,1).gC=0;}
function AMm(a,b,c){return;}
function AOy(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.cl==1){c=a.J;$p=1;continue _;}if(b.cl!=2)return;b=a.J;c=null;$p=3;continue _;case 1:ASx(c);if(C()){break _;}c=a.J;d=null;$p=2;case 2:ADV(c,d);if(C()){break _;}if(b.cl!=2)return;b=a.J;c=null;$p=3;case 3:ABM(b,c);if(C()){break _;}b=a.J;c=LM();$p=4;case 4:ADV(b,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function APp(a,b,c,d){var e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:KL(a,0,0,a.bm,a.bC,1615855616,(-1602211792));B3();CC(2.0,2.0,2.0);DG(a,a.bZ,B(567),(a.bm/2|0)/2|0,30,16777215);BE();e=a.bZ;f=new S;V(f);DG(a,e,T(Be(H(f,B(568)),a.J.f.k7)),a.bm/2|0,100,16777215);$p=1;case 1:AFE(a,b,c,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function A6Q(a){return 0;}
function C1(){var a=this;C5.call(a);a.e7=0;a.Bo=0.0;a.Bp=0.0;a.dq=0;a.cw=0;a.dr=0.0;a.m8=0.0;a.h1=0.0;a.ie=0.0;a.iq=0.0;}
var BkN=0.0;var BkO=0.0;var BkP=0.0;function Bk6(a,b,c,d,e,f,g){var h=new C1();FD(h,a,b,c,d,e,f,g);return h;}
function FD(a,b,c,d,e,f,g,h){var i,j;FC(a,b);a.dq=0;a.cw=0;D1(a,0.20000000298023224,0.20000000298023224);a.c4=a.eO/2.0;CT(a,c,d,e);a.iq=1.0;a.ie=1.0;a.h1=1.0;a.g=f+(BP()*2.0-1.0)*0.4000000059604645;a.i=g+(BP()*2.0-1.0)*0.4000000059604645;a.h=h+(BP()*2.0-1.0)*0.4000000059604645;i=(BP()+BP()+1.0)*0.15000000596046448;j=Ce(a.g*a.g+a.i*a.i+a.h*a.h);c=a.g;d=j;c=c/d;e=i;a.g=c*e*0.4000000059604645;a.i=a.i/d*e*0.4000000059604645+0.10000000149011612;a.h=a.h/d*e*0.4000000059604645;a.Bo=N(a.m)*3.0;a.Bp=N(a.m)*3.0;a.dr=
(N(a.m)*0.5+0.5)*2.0;a.cw=4.0/(N(a.m)*0.8999999761581421+0.10000000149011612)|0;a.dq=0;a.i$=0;}
function APt(a,b){var c,d;c=a.g;d=b;a.g=c*d;a.i=(a.i-0.10000000149011612)*d+0.10000000149011612;a.h=a.h*d;return a;}
function Yb(a,b){var c;c=0.20000000298023224*b;D1(a,c,c);a.dr=a.dr*b;return a;}
function ALo(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;b=a.dq;a.dq=b+1|0;if(b>=a.cw){$p=2;continue _;}a.i=a.i-0.04*a.m8;c=a.g;d=a.i;e=a.h;$p=1;case 1:ARF(a,c,d,e);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;case 2:Cb(a);if(C()){break _;}a.i=a.i-0.04*a.m8;c=a.g;d=a.i;e=
a.h;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,$p);}
function ANv(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.e7%16|0)/16.0;j=i+0.062437500804662704;k=(a.e7/16|0)/16.0;l=k+0.062437500804662704;m=0.10000000149011612*a.dr;n=a.bS;o=a.d-a.bS;p
=c;q=n+o*p-BkN;r=a.cS+(a.j-a.cS)*p-BkO;s=a.bR+(a.e-a.bR)*p-BkP;$p=1;case 1:$z=a.vj(c);if(C()){break _;}t=$z;Cq(b,a.h1*t,a.ie*t,a.iq*t);u=d*m;t=q-u;v=g*m;n=t-v;c=e*m;o=r-c;d=f*m;e=s-d;f=h*m;w=e-f;p=i;x=l;G(b,n,o,w,p,x);n=t+v;w=r+c;y=e+f;z=k;G(b,n,w,y,p,z);c=q+u;n=c+v;d=s+d;p=d+f;y=j;G(b,n,w,p,y,z);G(b,c-v,o,d-f,y,x);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function A71(a){return 0;}
function AA1(){var a=this;CS.call(a);a.ty=0;a.oi=0;}
function Bcq(){var a=new AA1();AWe(a);return a;}
function AWe(a){DQ(a);a.ty=0;a.oi=0;}
function ARd(a){a.ty=0;Dy(a.bG);U(a.bG,Dj(1,(a.bm/2|0)-100|0,(a.bC/4|0)+48|0,B(569)));U(a.bG,Dj(4,(a.bm/2|0)-100|0,(a.bC/4|0)+24|0,B(570)));U(a.bG,Dj(0,(a.bm/2|0)-100|0,(a.bC/4|0)+96|0,B(496)));}
function ADn(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b.cl){c=a.J;d=AIO(a,a.J.o);$p=1;continue _;}if(b.cl==1){c=a.J;d=null;$p=2;continue _;}if(b.cl!=4)return;b=a.J;c=null;$p=4;continue _;case 1:ADV(c,d);if(C()){break _;}if(b.cl==1){c=a.J;d=null;$p=2;continue _;}if(b.cl!=4)return;b=a.J;c=null;$p=4;continue _;case 2:ABM(c,d);if(C()){break _;}c=a.J;d=LM();$p=3;case 3:ADV(c,d);if(C()){break _;}if(b.cl!=4)return;b=a.J;c=null;$p
=4;case 4:ADV(b,c);if(C()){break _;}b=a.J;$p=5;case 5:AFj(b);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function A2g(a){a.oi=a.oi+1|0;}
function ADM(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABh(a);if(C()){break _;}e=a.J.A;f=a.ty;a.ty=f+1|0;$p=2;case 2:$z=AAN(e,f);if(C()){break _;}f=$z;f=f?0:1;if(!(!f&&a.oi>=20)){g=255.0*(Bq(((a.oi%10|0)+d)/10.0*3.1415927410125732*2.0)*0.20000000298023224+0.800000011920929)|0;Cy(a.bZ,B(571),8,a.bC-16|0,g<<16|g<<8|g);}DG(a,a.bZ,B(572),a.bm/2|0,40,16777215);$p=3;case 3:AFE(a,b,c,d);if
(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function Ly(){var a=this;D.call(a);a.bd=null;a.Z=null;a.Y=null;a.bb=null;}
function Bk7(){var a=new Ly();AHs(a);return a;}
function AHs(a){a.bd=$rt_createFloatMultiArray([16,16]);a.Z=$rt_createFloatArray(16);a.Y=$rt_createFloatArray(16);a.bb=$rt_createFloatArray(16);}
function ARO(a,b,c,d,e,f,g){var h;h=0;while(h<6){if(a.bd.data[h].data[0]*b+a.bd.data[h].data[1]*c+a.bd.data[h].data[2]*d+a.bd.data[h].data[3]<=0.0&&a.bd.data[h].data[0]*e+a.bd.data[h].data[1]*c+a.bd.data[h].data[2]*d+a.bd.data[h].data[3]<=0.0&&a.bd.data[h].data[0]*b+a.bd.data[h].data[1]*f+a.bd.data[h].data[2]*d+a.bd.data[h].data[3]<=0.0&&a.bd.data[h].data[0]*e+a.bd.data[h].data[1]*f+a.bd.data[h].data[2]*d+a.bd.data[h].data[3]<=0.0&&a.bd.data[h].data[0]*b+a.bd.data[h].data[1]*c+a.bd.data[h].data[2]*g+a.bd.data[h].data[3]
<=0.0&&a.bd.data[h].data[0]*e+a.bd.data[h].data[1]*c+a.bd.data[h].data[2]*g+a.bd.data[h].data[3]<=0.0&&a.bd.data[h].data[0]*b+a.bd.data[h].data[1]*f+a.bd.data[h].data[2]*g+a.bd.data[h].data[3]<=0.0&&a.bd.data[h].data[0]*e+a.bd.data[h].data[1]*f+a.bd.data[h].data[2]*g+a.bd.data[h].data[3]<=0.0)return 0;h=h+1|0;}return 1;}
function WD(){var a=this;Ly.call(a);a.oW=null;a.n5=null;a.zA=null;}
var Bk8=null;function BaR(){var a=new WD();AFu(a);return a;}
function AFu(a){AHs(a);a.oW=H4(16);a.n5=H4(16);a.zA=H4(16);}
function RW(){AJR(Bk8);return Bk8;}
function GX(a,b,c){var d,e;b=b.data;d=D_(b[c].data[0]*b[c].data[0]+b[c].data[1]*b[c].data[1]+b[c].data[2]*b[c].data[2]);e=b[c].data;e[0]=e[0]/d;e=b[c].data;e[1]=e[1]/d;e=b[c].data;e[2]=e[2]/d;b=b[c].data;b[3]=b[3]/d;}
function AJR(a){LS(a.oW);LS(a.n5);LS(a.zA);TS(2983,a.oW);TS(2982,a.n5);Qc(TO(a.oW),16);VM(a.oW,a.Z);Qc(TO(a.n5),16);VM(a.n5,a.Y);a.bb.data[0]=a.Y.data[0]*a.Z.data[0]+a.Y.data[1]*a.Z.data[4]+a.Y.data[2]*a.Z.data[8]+a.Y.data[3]*a.Z.data[12];a.bb.data[1]=a.Y.data[0]*a.Z.data[1]+a.Y.data[1]*a.Z.data[5]+a.Y.data[2]*a.Z.data[9]+a.Y.data[3]*a.Z.data[13];a.bb.data[2]=a.Y.data[0]*a.Z.data[2]+a.Y.data[1]*a.Z.data[6]+a.Y.data[2]*a.Z.data[10]+a.Y.data[3]*a.Z.data[14];a.bb.data[3]=a.Y.data[0]*a.Z.data[3]+a.Y.data[1]*a.Z.data[7]
+a.Y.data[2]*a.Z.data[11]+a.Y.data[3]*a.Z.data[15];a.bb.data[4]=a.Y.data[4]*a.Z.data[0]+a.Y.data[5]*a.Z.data[4]+a.Y.data[6]*a.Z.data[8]+a.Y.data[7]*a.Z.data[12];a.bb.data[5]=a.Y.data[4]*a.Z.data[1]+a.Y.data[5]*a.Z.data[5]+a.Y.data[6]*a.Z.data[9]+a.Y.data[7]*a.Z.data[13];a.bb.data[6]=a.Y.data[4]*a.Z.data[2]+a.Y.data[5]*a.Z.data[6]+a.Y.data[6]*a.Z.data[10]+a.Y.data[7]*a.Z.data[14];a.bb.data[7]=a.Y.data[4]*a.Z.data[3]+a.Y.data[5]*a.Z.data[7]+a.Y.data[6]*a.Z.data[11]+a.Y.data[7]*a.Z.data[15];a.bb.data[8]=a.Y.data[8]
*a.Z.data[0]+a.Y.data[9]*a.Z.data[4]+a.Y.data[10]*a.Z.data[8]+a.Y.data[11]*a.Z.data[12];a.bb.data[9]=a.Y.data[8]*a.Z.data[1]+a.Y.data[9]*a.Z.data[5]+a.Y.data[10]*a.Z.data[9]+a.Y.data[11]*a.Z.data[13];a.bb.data[10]=a.Y.data[8]*a.Z.data[2]+a.Y.data[9]*a.Z.data[6]+a.Y.data[10]*a.Z.data[10]+a.Y.data[11]*a.Z.data[14];a.bb.data[11]=a.Y.data[8]*a.Z.data[3]+a.Y.data[9]*a.Z.data[7]+a.Y.data[10]*a.Z.data[11]+a.Y.data[11]*a.Z.data[15];a.bb.data[12]=a.Y.data[12]*a.Z.data[0]+a.Y.data[13]*a.Z.data[4]+a.Y.data[14]*a.Z.data[8]
+a.Y.data[15]*a.Z.data[12];a.bb.data[13]=a.Y.data[12]*a.Z.data[1]+a.Y.data[13]*a.Z.data[5]+a.Y.data[14]*a.Z.data[9]+a.Y.data[15]*a.Z.data[13];a.bb.data[14]=a.Y.data[12]*a.Z.data[2]+a.Y.data[13]*a.Z.data[6]+a.Y.data[14]*a.Z.data[10]+a.Y.data[15]*a.Z.data[14];a.bb.data[15]=a.Y.data[12]*a.Z.data[3]+a.Y.data[13]*a.Z.data[7]+a.Y.data[14]*a.Z.data[11]+a.Y.data[15]*a.Z.data[15];a.bd.data[0].data[0]=a.bb.data[3]-a.bb.data[0];a.bd.data[0].data[1]=a.bb.data[7]-a.bb.data[4];a.bd.data[0].data[2]=a.bb.data[11]-a.bb.data[8];a.bd.data[0].data[3]
=a.bb.data[15]-a.bb.data[12];GX(a,a.bd,0);a.bd.data[1].data[0]=a.bb.data[3]+a.bb.data[0];a.bd.data[1].data[1]=a.bb.data[7]+a.bb.data[4];a.bd.data[1].data[2]=a.bb.data[11]+a.bb.data[8];a.bd.data[1].data[3]=a.bb.data[15]+a.bb.data[12];GX(a,a.bd,1);a.bd.data[2].data[0]=a.bb.data[3]+a.bb.data[1];a.bd.data[2].data[1]=a.bb.data[7]+a.bb.data[5];a.bd.data[2].data[2]=a.bb.data[11]+a.bb.data[9];a.bd.data[2].data[3]=a.bb.data[15]+a.bb.data[13];GX(a,a.bd,2);a.bd.data[3].data[0]=a.bb.data[3]-a.bb.data[1];a.bd.data[3].data[1]
=a.bb.data[7]-a.bb.data[5];a.bd.data[3].data[2]=a.bb.data[11]-a.bb.data[9];a.bd.data[3].data[3]=a.bb.data[15]-a.bb.data[13];GX(a,a.bd,3);a.bd.data[4].data[0]=a.bb.data[3]-a.bb.data[2];a.bd.data[4].data[1]=a.bb.data[7]-a.bb.data[6];a.bd.data[4].data[2]=a.bb.data[11]-a.bb.data[10];a.bd.data[4].data[3]=a.bb.data[15]-a.bb.data[14];GX(a,a.bd,4);a.bd.data[5].data[0]=a.bb.data[3]+a.bb.data[2];a.bd.data[5].data[1]=a.bb.data[7]+a.bb.data[6];a.bd.data[5].data[2]=a.bb.data[11]+a.bb.data[10];a.bd.data[5].data[3]=a.bb.data[15]
+a.bb.data[14];GX(a,a.bd,5);}
function AG9(){Bk8=BaR();}
function Q6(){}
function AFT(){var a=this;D.call(a);a.C8=null;a.vB=0.0;a.v5=0.0;a.wj=0.0;}
function Bby(){var a=new AFT();A8$(a);return a;}
function A8$(a){a.C8=RW();}
function AOm(a,b,c,d){a.vB=b;a.v5=c;a.wj=d;}
function AAi(a,b,c,d,e,f,g){var h,i;h=b-a.vB;i=c-a.v5;b=d-a.wj;d=e-a.vB;e=f-a.v5;c=g-a.wj;return ARO(a.C8,h,i,b,d,e,c);}
function MJ(a,b){return AAi(a,b.R,b.M,b.S,b.V,b.U,b.W);}
function O6(){D.call(this);}
var Bk9=null;function Bk$(){var a=new O6();ALi(a);return a;}
function ALi(a){return;}
function DS(){Bc(2896);Bc(16384);Bc(16385);Bc(2903);}
function Hz(){var b;Ba(2896);Ba(16384);Ba(16385);Ba(2903);b=CD(BY(0.699999988079071,1.0,(-0.20000000298023224)));RL(b.x,b.z,b.w,0.0);Fr(0.6000000238418579,0.6000000238418579,0.6000000238418579,1.0);Fr(0.0,0.0,0.0,1.0);Fr(0.0,0.0,0.0,1.0);b=CD(BY((-0.699999988079071),1.0,0.20000000298023224));RL(b.x,b.z,b.w,0.0);Fr(0.6000000238418579,0.6000000238418579,0.6000000238418579,1.0);Fr(0.0,0.0,0.0,1.0);Fr(0.0,0.0,0.0,1.0);Fr(0.4000000059604645,0.4000000059604645,0.4000000059604645,1.0);}
function RL(b,c,d,e){return Fr(b,c,d,e);}
function Fr(b,c,d,e){EA(Bk9);CJ(CJ(CJ(CJ(Bk9,b),c),d),e);Gx(Bk9);return Bk9;}
function ASi(){Bk9=H4(16);}
function Ii(){var a=this;D.call(a);a.z6=null;a.go=null;a.nA=null;}
function Bk_(a,b,c){var d=new Ii();K5(d,a,b,c);return d;}
function K5(a,b,c,d){a.z6=b;a.go=c;a.nA=d;}
function A6u(a){return a.go.gm()+a.nA.gm()|0;}
function A6h(a){return a.z6;}
function AS$(a,b){return b<a.go.gm()?a.go.gy(b):a.nA.gy(b-a.go.gm()|0);}
function A3i(a,b,c){return b<a.go.gm()?a.go.j7(b,c):a.nA.j7(b-a.go.gm()|0,c);}
function AWT(a,b,c){if(b<a.go.gm())a.go.jE(b,c);else a.nA.jE(b-a.go.gm()|0,c);}
function A9$(a){return a.go.f4();}
function Yz(a){var b,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.go;$p=1;case 1:b.kl();if(C()){break _;}b=a.nA;$p=2;case 2:b.kl();if(C()){break _;}return;default:E$();}}C3().s(a,b,$p);}
function ZH(){C1.call(this);}
function AY5(a,b,c,d,e,f,g,h){var i=new ZH();A1d(i,a,b,c,d,e,f,g,h);return i;}
function A1d(a,b,c,d,e,f,g,h,i){FD(a,b,c,d,e,f,g,h);a.e7=i.ba;a.m8=i.Ez;a.iq=0.6000000238418579;a.ie=0.6000000238418579;a.h1=0.6000000238418579;a.dr=a.dr/2.0;}
function ATG(a){return 1;}
function YM(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=((a.e7%16|0)+a.Bo/4.0)/16.0;j=i+0.015609375201165676;k=((a.e7/16|0)+a.Bp/4.0)/16.0;l=k+0.015609375201165676;m=0.10000000149011612*a.dr;n
=a.bS;o=a.d-a.bS;p=c;q=n+o*p-BkN;r=a.cS+(a.j-a.cS)*p-BkO;s=a.bR+(a.e-a.bR)*p-BkP;$p=1;case 1:$z=ADI(a,c);if(C()){break _;}t=$z;Cq(b,t*a.h1,t*a.ie,t*a.iq);t=d*m;u=q-t;g=g*m;v=u-g;w=e*m;o=r-w;c=f*m;d=s-c;e=h*m;n=d-e;x=i;p=l;G(b,v,o,n,x,p);n=u+g;v=r+w;y=d+e;z=k;G(b,n,v,y,x,z);d=q+t;n=d+g;c=s+c;x=c+e;y=j;G(b,n,v,x,y,z);G(b,d-g,o,c-e,y,p);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function KS(){B6.call(this);}
function Bla(){var a=new KS();A2o(a);return a;}
function A2o(a){O(a);}
function JO(){C1.call(this);}
function Blb(a,b,c,d){var e=new JO();TP(e,a,b,c,d);return e;}
function TP(a,b,c,d,e){FD(a,b,c,d,e,0.0,0.0,0.0);a.g=a.g*0.30000001192092896;a.i=BP()*0.20000000298023224+0.10000000149011612;a.h=a.h*0.30000001192092896;a.h1=1.0;a.ie=1.0;a.iq=1.0;a.e7=16;D1(a,0.009999999776482582,0.009999999776482582);a.m8=0.05999999865889549;a.cw=8.0/(BP()*0.8+0.2)|0;}
function AKN(a,b,c,d,e,f,g,h){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ANv(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AOA(a){var b,c,d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;a.i=a.i-a.m8;b=a.g;c=a.i;d=a.h;$p=1;case 1:ARF(a,b,c,d);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;e=a.cw;a.cw=e-1|0;if(e<=0){$p=2;continue _;}if(a.cx){if(BP()<0.5){$p=5;continue _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}f=a.l;e
=K(a.d);g=K(a.j);h=K(a.e);$p=3;continue _;case 2:Cb(a);if(C()){break _;}if(a.cx){if(BP()<0.5){$p=5;continue _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}f=a.l;e=K(a.d);g=K(a.j);h=K(a.e);$p=3;case 3:$z=AB2(f,e,g,h);if(C()){break _;}f=$z;if(!f.nF()&&!f.dw())return;i=K(a.j)+1|0;f=a.l;e=K(a.d);g=K(a.j);h=K(a.e);$p=4;case 4:$z=AEK(f,e,g,h);if(C()){break _;}e=$z;b=i-Jx(e);if(a.j>=b)return;$p=6;continue _;case 5:Cb(a);if(C()){break _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;f=a.l;e=K(a.d);g=
K(a.j);h=K(a.e);$p=3;continue _;case 6:Cb(a);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function IQ(){var a=this;Ix.call(a);a.eq=null;a.Aj=0;a.eg=0;}
function Blc(a,b,c,d,e,f){var g=new IQ();ON(g,a,b,c,d,e,f);return g;}
function ON(a,b,c,d,e,f,g){Uf(a,c,e,f);a.eg=b;a.eq=d;a.Aj=g;}
function AXO(a){return a.Aj;}
function Pf(){IQ.call(this);}
function AWc(a,b){var c,d;c=a.eq.cp.data;d=a.eg;b=b*4|0;return c[d+b|0]&255|(a.eq.cp.data[(a.eg+b|0)+1|0]&255)<<8|(a.eq.cp.data[(a.eg+b|0)+2|0]&255)<<16|(a.eq.cp.data[(a.eg+b|0)+3|0]&255)<<24;}
function ASQ(a,b,c){var d,e;d=a.eq.cp.data;e=a.eg;b=b*4|0;d[e+b|0]=c<<24>>24;a.eq.cp.data[(a.eg+b|0)+1|0]=c>>8<<24>>24;a.eq.cp.data[(a.eg+b|0)+2|0]=c>>16<<24>>24;a.eq.cp.data[(a.eg+b|0)+3|0]=c>>24<<24>>24;}
function VO(){IQ.call(this);}
function A0R(a,b){var c,d;c=a.eq.cp.data;d=a.eg;b=b*4|0;return (c[d+b|0]&255)<<24|(a.eq.cp.data[(a.eg+b|0)+1|0]&255)<<16|(a.eq.cp.data[(a.eg+b|0)+2|0]&255)<<8|a.eq.cp.data[(a.eg+b|0)+3|0]&255;}
function ATJ(a,b,c){var d,e;d=a.eq.cp.data;e=a.eg;b=b*4|0;d[e+b|0]=c>>24<<24>>24;a.eq.cp.data[(a.eg+b|0)+1|0]=c>>16<<24>>24;a.eq.cp.data[(a.eg+b|0)+2|0]=c>>8<<24>>24;a.eq.cp.data[(a.eg+b|0)+3|0]=c<<24>>24;}
function AKV(){D.call(this);this.wc=null;}
function AYJ(a){var b=new AKV();A7Y(b,a);return b;}
function A7Y(a,b){a.wc=b;}
function ZM(a,b,c){return G6(b,a.wc)>=G6(c,a.wc)?1:(-1);}
function A0$(a,b,c){return ZM(a,b,c);}
function V_(){D.call(this);this.yh=null;}
function APJ(a,b,c){var d,e;d=b.fw;e=c.fw;return d&&!e?1:e&&!d?(-1):G6(b,a.yh)>=G6(c,a.yh)?(-1):1;}
function A9G(a,b,c){return APJ(a,b,c);}
function Ht(){D.call(this);}
var Bld=null;var Ble=null;var Blf=null;var Blg=null;var Blh=null;function Bli(){var a=new Ht();AAl(a);return a;}
function AAl(a){return;}
function RC(b,c){var d,e,f;if(c===null)c=Blg;d=J(D,b.s);UG(b,d);P0(d,c);e=0;while(true){f=d.data;if(e>=f.length)break;Rc(b,e,f[e]);e=e+1|0;}}
function AOf(){Bld=new Sb;Ble=new Sa;Blf=new Sc;Blg=new WJ;Blh=new WH;}
function HY(){var a=this;D.call(a);a.mO=null;a.yk=null;a.Dk=null;a.Cy=null;a.HN=null;a.Gy=0.0;a.FS=0.0;a.Fa=0.0;a.E_=0.0;a.E$=0.0;}
var Bkr=null;var BkK=0.0;var BkL=0.0;var BkM=0.0;function BbZ(){var a=new HY();AC_(a);return a;}
function AC_(a){var b;a.mO=De();BQ(a.mO,F(Jj),Bcl());BQ(a.mO,F(NA),Bbz());b=Nj(It(a.mO));while(Gb(b)){Me(b).rd=a;}}
function Vw(a,b){var c;c=CP(a.mO,b);if(c===null&&b!==F(D$)){c=Vw(a,JJ(b));BQ(a.mO,b,c);}return c;}
function AIi(a,b){return Wp(a,b)===null?0:1;}
function Wp(a,b){return Vw(a,Dl(b));}
function ARi(a,b,c,d,e,f){var g,h,i;a.Cy=b;a.Dk=c;a.HN=e;a.yk=d;a.Gy=e.P+(e.u-e.P)*f;a.FS=e.T+(e.I-e.T)*f;g=e.cs;h=e.d-e.cs;i=f;a.Fa=g+h*i;a.E_=e.b7+(e.j-e.b7)*i;a.E$=e.ct+(e.e-e.ct)*i;}
function YZ(a,b,c){var d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(AK3(b,a.Fa,a.E_,a.E$)>=4096.0)return;d=a.Cy;e=b.dK;f=b.dI;g=b.dR;$p=1;case 1:$z=ANj(d,e,f,g);if(C()){break _;}h=$z;F8(h,h,h);i=b.dK-BkK;j=b.dI-BkL;k=b.dR-BkM;$p=2;case 2:AFo(a,b,i,j,k,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AFo(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=Wp(a,b);if(g===null)return;$p=1;case 1:g.CV(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function A_R(a){return a.yk;}
function ALM(){Bkr=BbZ();}
function H1(){var a=this;D.call(a);a.dV=null;a.FF=null;a.t0=null;a.n3=null;a.H0=null;a.rr=0.0;a.GN=0.0;a.FO=null;a.D9=0.0;a.D8=0.0;a.D7=0.0;}
var Bgo=null;var BkH=0.0;var BkI=0.0;var BkJ=0.0;function Bai(){var a=new H1();AGx(a);return a;}
function AGx(a){var b,c,d,e,f;a.dV=De();BQ(a.dV,F(Km),A_Y());b=a.dV;c=new T9;d=BcN();e=new PX;KX(e,6,0.5);Gs(c,d,0.699999988079071);c.kk=e;BQ(b,F(ID),c);d=a.dV;f=new TF;c=Bck();e=BbV();Gs(f,c,0.699999988079071);f.kk=e;BQ(d,F(KG),f);BQ(a.dV,F(JY),Bb_());BQ(a.dV,F(Jo),AYh(Bcy(),0.5));d=a.dV;f=new DJ;c=new HS;KF(c);Gs(f,c,0.5);BQ(d,F(I9),f);BQ(a.dV,F(Jw),Bbk());d=a.dV;f=new Uc;c=new HS;KF(c);Gs(f,c,3.0);f.tx=6.0;BQ(d,F(K$),f);BQ(a.dV,F(EP),AYh(A$Y(),0.5));d=a.dV;f=new TM;EH(f);BQ(d,F(C5),f);BQ(a.dV,F(IH),BbT());d
=a.dV;f=new Ry;EH(f);BQ(d,F(Ju),f);BQ(a.dV,F(E9),X3());BQ(a.dV,F(Mr),Bao());BQ(a.dV,F(JM),Bag());BQ(a.dV,F(Gi),Bb7());d=Nj(It(a.dV));while(Gb(d)){Me(d).iE=a;}}
function W4(a,b){var c;c=CP(a.dV,b);if(c===null&&b!==F(C5)){c=W4(a,JJ(b));BQ(a.dV,b,c);}return c;}
function Se(a,b){return W4(a,Dl(b));}
function AHd(a,b,c,d,e,f,g){var h,i,j;a.n3=b;a.t0=c;a.FO=f;a.H0=e;a.FF=d;a.rr=e.P+(e.u-e.P)*g;a.GN=e.T+(e.I-e.T)*g;h=e.cs;i=e.d-e.cs;j=g;a.D9=h+i*j;a.D8=e.b7+(e.j-e.b7)*j;a.D7=e.ct+(e.e-e.ct)*j;}
function ANa(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=b.cs;e=b.d-b.cs;f=c;e=d+e*f;d=b.b7+(b.j-b.b7)*f;g=b.ct+(b.e-b.ct)*f;h=b.P+(b.u-b.P)*c;$p=1;case 1:$z=b.vj(c);if(C()){break _;}i=$z;F8(i,i,i);e=e-BkH;d=d-BkI;f=g-BkJ;$p=2;case 2:AQE(a,b,e,d,f,h,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AQE(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=Se(a,b);if(h===null)return;$p=1;case 1:h.iR(b,c,d,e,f,g);if(C()){break _;}$p=2;case 2:ANl(h,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function A73(a,b){a.n3=b;}
function AJU(a,b,c,d){var e,f,g;e=b-a.D9;f=c-a.D8;g=d-a.D7;return e*e+f*f+g*g;}
function AKv(){Bgo=Bai();}
function Nh(){D.call(this);}
var Blj=null;var Blk=null;function Bll(){var a=new Nh();AR2(a);return a;}
function AR2(a){return;}
function Vl(b){var c;c=0;while(true){if(c>=Blj.data.length)return (-1);if(b==Blj.data[c])break;c=c+1|0;}return c;}
function APc(){var b,c;b=$rt_createIntArray(144);c=b.data;c[0]=32;c[1]=33;c[2]=34;c[3]=35;c[4]=36;c[5]=37;c[6]=38;c[7]=39;c[8]=40;c[9]=41;c[10]=42;c[11]=43;c[12]=44;c[13]=45;c[14]=46;c[15]=47;c[16]=48;c[17]=49;c[18]=50;c[19]=51;c[20]=52;c[21]=53;c[22]=54;c[23]=55;c[24]=56;c[25]=57;c[26]=58;c[27]=59;c[28]=60;c[29]=61;c[30]=62;c[31]=63;c[32]=64;c[33]=65;c[34]=66;c[35]=67;c[36]=68;c[37]=69;c[38]=70;c[39]=71;c[40]=72;c[41]=73;c[42]=74;c[43]=75;c[44]=76;c[45]=77;c[46]=78;c[47]=79;c[48]=80;c[49]=81;c[50]=82;c[51]
=83;c[52]=84;c[53]=85;c[54]=86;c[55]=87;c[56]=88;c[57]=89;c[58]=90;c[59]=91;c[60]=92;c[61]=93;c[62]=94;c[63]=95;c[64]=39;c[65]=97;c[66]=98;c[67]=99;c[68]=100;c[69]=101;c[70]=102;c[71]=103;c[72]=104;c[73]=105;c[74]=106;c[75]=107;c[76]=108;c[77]=109;c[78]=110;c[79]=111;c[80]=112;c[81]=113;c[82]=114;c[83]=115;c[84]=116;c[85]=117;c[86]=118;c[87]=119;c[88]=120;c[89]=121;c[90]=122;c[91]=123;c[92]=124;c[93]=125;c[94]=126;c[95]=8962;c[96]=199;c[97]=252;c[98]=233;c[99]=226;c[100]=228;c[101]=224;c[102]=229;c[103]=231;c[104]
=234;c[105]=235;c[106]=232;c[107]=239;c[108]=238;c[109]=236;c[110]=196;c[111]=197;c[112]=201;c[113]=230;c[114]=198;c[115]=244;c[116]=246;c[117]=242;c[118]=251;c[119]=249;c[120]=255;c[121]=214;c[122]=220;c[123]=248;c[124]=163;c[125]=216;c[126]=215;c[127]=402;c[128]=225;c[129]=237;c[130]=243;c[131]=250;c[132]=241;c[133]=209;c[134]=170;c[135]=186;c[136]=191;c[137]=174;c[138]=172;c[139]=189;c[140]=188;c[141]=161;c[142]=171;c[143]=187;Blj=b;b=$rt_createCharArray(15);c=b.data;c[0]=47;c[1]=10;c[2]=13;c[3]=9;c[4]=0;c[5]
=12;c[6]=96;c[7]=63;c[8]=42;c[9]=92;c[10]=60;c[11]=62;c[12]=124;c[13]=34;c[14]=58;Blk=b;}
function J1(){B6.call(this);}
function Blm(){var a=new J1();A7N(a);return a;}
function A7N(a){O(a);}
function VW(){var a=this;D.call(a);a.eF=0;a.e0=0;a.eG=0;}
function CO(a,b,c){var d=new VW();AWH(d,a,b,c);return d;}
function AWH(a,b,c,d){a.eF=b;a.e0=c;a.eG=d;}
function A6p(a,b){var c;if(!(b instanceof VW))return 0;c=b;return c.eF==a.eF&&c.e0==a.e0&&c.eG==a.eG?1:0;}
function A1s(a){return (Bj(a.eF,8976890)+Bj(a.e0,981131)|0)+a.eG|0;}
function Ov(){Fa.call(this);}
var Bln=0.0;var Blo=null;function AEm(){Bln=NaN;Blo=F($rt_floatcls());}
function Hn(){D.call(this);}
var Bdo=null;var Bdq=null;var Bdr=null;var Bdp=null;var Bdn=null;function Blp(){var a=new Hn();AQJ(a);return a;}
function AQJ(a){return;}
function AMM(){var b,c;b=$rt_createIntArray(10);c=b.data;c[0]=1;c[1]=10;c[2]=100;c[3]=1000;c[4]=10000;c[5]=100000;c[6]=1000000;c[7]=10000000;c[8]=100000000;c[9]=1000000000;Bdo=b;b=$rt_createLongArray(19);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(1000);c[4]=Long_fromInt(10000);c[5]=Long_fromInt(100000);c[6]=Long_fromInt(1000000);c[7]=Long_fromInt(10000000);c[8]=Long_fromInt(100000000);c[9]=Long_fromInt(1000000000);c[10]=new Long(1410065408, 2);c[11]=new Long(1215752192, 23);c[12]
=new Long(3567587328, 232);c[13]=new Long(1316134912, 2328);c[14]=new Long(276447232, 23283);c[15]=new Long(2764472320, 232830);c[16]=new Long(1874919424, 2328306);c[17]=new Long(1569325056, 23283064);c[18]=new Long(2808348672, 232830643);Bdq=b;b=$rt_createLongArray(6);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(10000);c[4]=Long_fromInt(100000000);c[5]=new Long(1874919424, 2328306);Bdr=b;Bdp=new V9;Bdn=new R_;}
function Ni(){D.call(this);}
var Blq=null;var Blr=null;function Bls(){var a=new Ni();AKm(a);return a;}
function AKm(a){return;}
function AOg(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=$rt_floatToIntBits(b);c.zl=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.uz=0;c.ug=0;return;}g=0;if(f)e=e|8388608;else{e=e<<1;while(Long_eq(Long_and(Long_fromInt(e),Long_fromInt(8388608)),Long_ZERO)){e=e<<1;f=f+(-1)|0;g=g+1|0;}}h=AOu(Blr,f);if(h<0)h= -h-2|0;i=9+(f-Blr.data[h]|0)|0;j=Long_fromInt(e);k=Long_shru(Long_mul(j,Long_fromInt(Blq.data[h])),32-i|0).lo;if(k>=1000000000){h=h+1|0;i=9+(f-Blr.data[h]|0)|0;k=Long_shru(Long_mul(j,Long_fromInt(Blq.data[h])),
32-i|0).lo;}g=(31-i|0)-g|0;l=g>=0?Blq.data[h]>>>g:Blq.data[h]<< -g;m=(l+1|0)>>1;n=l>>1;if(e==4194304)n=n>>2;o=10;while(o<=n){o=o*10|0;}if((k%o|0)>=(n/2|0))o=o/10|0;p=10;while(p<=m){p=p*10|0;}if((p-(k%p|0)|0)>(m/2|0))p=p/10|0;e=R(o,p);e=e>0?Bj(k/o|0,o):e<0?Bj(k/p|0,p)+p|0:Bj((k+(p/2|0)|0)/p|0,p);if(e>=1000000000){h=h+1|0;e=e/10|0;}else if(e<100000000){h=h+(-1)|0;e=e*10|0;}c.uz=e;c.ug=h-50|0;}
function ALc(){var b,c,d,e,f,g,h,i;Blq=$rt_createIntArray(100);Blr=$rt_createIntArray(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=Blq.data;g=d+50|0;f[g]=$rt_udiv(e,20);Blr.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}c=127;d=0;while(d<50){i=0;h=b;while(h>214748364){h=h>>1;i=i+1|0;c=c+(-1)|0;}h=h*10|0;b=i<=0?h:Long_add(Long_fromInt(h),Long_shr(Long_mul(Long_fromInt(b&((1<<i)-1|0)),Long_fromInt(10)),i)).lo;f=Blq.data;i=(50-d|0)-1|
0;f[i]=$rt_udiv(b,20);Blr.data[i]=c;d=d+1|0;}}
function R_(){var a=this;D.call(a);a.uz=0;a.ug=0;a.zl=0;}
function Blt(){var a=new R_();ASO(a);return a;}
function ASO(a){return;}
function DJ(){var a=this;Dg.call(a);a.mH=null;a.kk=null;}
function AYh(a,b){var c=new DJ();Gs(c,a,b);return c;}
function Gs(a,b,c){EH(a);a.mH=b;a.mc=c;}
function A$v(a,b){a.kk=b;}
function AAb(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bc(2884);try{h=b.e$+(b.dG-b.e$)*g;i=b.P+(b.u-b.P)*g;j=b.T+(b.I-b.T)*g;Bw(c,d,e);k=b.oS+g;Bv(180.0-h,0.0,1.0,0.0);if(b.c2>0){f=D_((b.c2
+g-1.0)/20.0*1.600000023841858);if(f>1.0)f=1.0;Bv(f*a.CH(b),0.0,0.0,1.0);}l=0.0625;Ba(32826);CC((-1.0),(-1.0),1.0);a.xj(b,g);Bw(0.0,(-1.5078125),0.0);m=b.jV+(b.cg-b.jV)*g;n=b.gn-b.cg*(1.0-g);if(m>1.0)m=1.0;o=b.tK;p=PO(b);$p=1;continue _;}catch($$e){$$je=Bg($$e);if($$je instanceof BD){o=$$je;}else{throw $$e;}}B9(o);Ba(2884);BE();return;case 1:try{APr(a,o,p);if(C()){break _;}Ba(3008);o=a.mH;f=i-h;o.hL(n,m,k,f,j,l);q=0;if(q>=4){$p=2;continue _;}$p=3;continue _;}catch($$e){$$je=Bg($$e);if($$je instanceof BD){o=
$$je;}else{throw $$e;}}B9(o);Ba(2884);BE();return;case 2:a:{try{$z=ADI(b,g);if(C()){break _;}r=$z;s=a.CK(b,r,g);q=s>>24&255;if(!(q<=0&&b.dE<=0&&b.c2<=0)){Bc(3553);Bc(3008);Ba(3042);Df(770,771);HL(514);if(!(b.dE<=0&&b.c2<=0)){BT(r,0.0,0.0,0.4000000059604645);a.mH.hL(n,m,k,f,j,l);t=0;if(t<4){$p=4;continue _;}}if(q>0){u=(s>>16&255)/255.0;v=(s>>8&255)/255.0;w=(s&255)/255.0;x=q/255.0;BT(u,v,w,x);a.mH.hL(n,m,k,f,j,l);y=0;if(y<4){$p=5;continue _;}}HL(515);Bc(3042);Ba(3008);Ba(3553);}Bc(32826);break a;}catch($$e){$$je
=Bg($$e);if($$je instanceof BD){o=$$je;}else{throw $$e;}}B9(o);}Ba(2884);BE();return;case 3:try{$z=a.k$(b,q);if(C()){break _;}s=$z;if(s){a.kk.hL(n,m,k,f,j,l);Bc(3042);Ba(3008);}q=q+1|0;if(q>=4){$p=2;continue _;}continue _;}catch($$e){$$je=Bg($$e);if($$je instanceof BD){o=$$je;}else{throw $$e;}}B9(o);Ba(2884);BE();return;case 4:a:{try{$z=a.k$(b,t);if(C()){break _;}y=$z;if(y){BT(r,0.0,0.0,0.4000000059604645);a.kk.hL(n,m,k,f,j,l);}t=t+1|0;if(t<4){continue _;}if(q>0){u=(s>>16&255)/255.0;v=(s>>8&255)/255.0;w=(s&
255)/255.0;x=q/255.0;BT(u,v,w,x);a.mH.hL(n,m,k,f,j,l);y=0;if(y<4){$p=5;continue _;}}HL(515);Bc(3042);Ba(3008);Ba(3553);Bc(32826);break a;}catch($$e){$$je=Bg($$e);if($$je instanceof BD){o=$$je;}else{throw $$e;}}B9(o);}Ba(2884);BE();return;case 5:a:{try{$z=a.k$(b,y);if(C()){break _;}s=$z;if(s){BT(u,v,w,x);a.kk.hL(n,m,k,f,j,l);}y=y+1|0;if(y>=4){HL(515);Bc(3042);Ba(3008);Ba(3553);Bc(32826);break a;}continue _;}catch($$e){$$je=Bg($$e);if($$je instanceof BD){o=$$je;}else{throw $$e;}}B9(o);}Ba(2884);BE();return;default:
E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$p);}
function APU(a,b,c){return 0;}
function A5j(a,b){return 90.0;}
function A6y(a,b,c,d){return 0;}
function A9b(a,b,c){return;}
function AOZ(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:a.H7(b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function OO(){var a=this;DJ.call(a);a.A1=null;a.Aa=null;a.Cu=null;}
var Blu=null;function Bbk(){var a=new OO();AIa(a);return a;}
function AIa(a){Gs(a,Xu(0.0),0.5);a.A1=a.mH;a.Aa=Xu(1.0);a.Cu=Xu(0.5);}
function ARy(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=AIj(b.K,3-c|0);if(d!==null){e=DL(d);if(e instanceof F5){f=e;b=new S;V(b);b=H(H(H(b,B(573)),Blu.data[f.BF]),B(574));g=R(c,2);b=T(H(Be(b,g?1:2),B(515)));$p=1;continue _;}}return 0;case 1:AKs(a,b);if(C()){break _;}h=g?a.Aa:a.Cu;h.iZ.iT=c?0:1;h.lc.iT=c?0:1;b=h.pi;i=R(c,1);b.iT=i&&g?0:1;h.d1.iT=i?0:1;h.dO.iT=i?0:1;h.i_.iT
=g&&c!=3?0:1;h.hg.iT=g&&c!=3?0:1;a.kk=h;return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ADN(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=d-b.c4;$p=1;case 1:AAb(a,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ALz(a){Ca(a.A1.d1,0.0625);}
function Y$(a,b,c){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=ARy(a,b,c);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,$p);}
function AL5(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:ADN(a,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ACM(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:ADN(a,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AAf(){var b,c;b=J(B4,5);c=b.data;c[0]=B(239);c[1]=B(575);c[2]=B(576);c[3]=B(577);c[4]=B(578);Blu=b;}
function Lz(){var a=this;Gh.call(a);a.hD=0;a.i6=0;a.hU=0;a.h8=0;a.kp=null;a.cl=0;a.gC=0;a.yV=0;}
function Dj(a,b,c,d){var e=new Lz();A3j(e,a,b,c,d);return e;}
function Blv(a,b,c,d,e,f){var g=new Lz();SI(g,a,b,c,d,e,f);return g;}
function A3j(a,b,c,d,e){SI(a,b,c,d,200,20,e);}
function SI(a,b,c,d,e,f,g){Ng(a);a.hD=200;a.i6=20;a.gC=1;a.yV=1;a.cl=b;a.hU=c;a.h8=d;a.hD=e;a.i6=f;a.kp=g;}
function ACU(a,b,c,d){var e,f,g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.yV)return;e=b.e_;f=3553;g=b.bo;b=B(506);$p=1;case 1:$z=AHu(g,b);if(C()){break _;}h=$z;Cp(f,h);BT(1.0,1.0,1.0,1.0);h=1;f=c>=a.hU&&d>=a.h8&&c<(a.hU+a.hD|0)&&d<(a.h8+a.i6|0)?1:0;if(!a.gC)h=0;else if(f)h=2;i=a.hU;j=a.h8;h=46+(h*20|0)|0;CH(a,i,j,0,h,a.hD/2|0,a.i6);CH(a,a.hU+(a.hD/2|0)|0,a.h8,200-(a.hD/2|0)|
0,h,a.hD/2|0,a.i6);if(!a.gC)DG(a,e,a.kp,a.hU+(a.hD/2|0)|0,a.h8+((a.i6-8|0)/2|0)|0,(-6250336));else if(!f)DG(a,e,a.kp,a.hU+(a.hD/2|0)|0,a.h8+((a.i6-8|0)/2|0)|0,14737632);else DG(a,e,a.kp,a.hU+(a.hD/2|0)|0,a.h8+((a.i6-8|0)/2|0)|0,16777120);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function R6(a,b,c){return a.gC&&b>=a.hU&&c>=a.h8&&b<(a.hU+a.hD|0)&&c<(a.h8+a.i6|0)?1:0;}
function L$(){D.call(this);}
function Blw(){var a=new L$();AVV(a);return a;}
function AVV(a){return;}
function Qu(){}
function Kr(){var a=this;L$.call(a);a.zV=null;a.H2=null;a.vf=0;a.Dn=0;a.ng=null;a.vN=null;}
function AEb(a){var b,c,d;a:{b=a.vf;c=a.Dn;d=0;switch(c){case 1:d=2;break a;case 2:d=4;break a;case 3:d=1;break a;default:}}c=b>>>6;return d|c&8|b<<2&16|c&32|b>>>8&64|b>>>5&128|b&256|b<<8&512|b<<10&1024|b<<1&2048;}
function ABl(a){return a.ng.oZ();}
function WF(a,b){var c,d,e,f,g;if(a.vf&1){c=new LY;O(c);M(c);}if(a.vN===null){c=new Tc;O(c);M(c);}d=b.data;e=d.length;if(e!=a.ng.data.length){c=new Cc;O(c);M(c);}f=0;while(true){if(f>=e){c=b.data;g=new a.zV.fX();a.vN.call(g,c);return g;}if(!F1(a.ng.data[f])&&d[f]!==null&&!UA(a.ng.data[f],d[f])){c=new Cc;O(c);M(c);}if(F1(a.ng.data[f])&&d[f]===null)break;f=f+1|0;}c=new Cc;O(c);M(c);}
function Ou(){}
function QB(){D.call(this);}
function Blx(){var a=new QB();A_i(a);return a;}
function A_i(a){return;}
function AJv(a){var b,c,d;Bd();BdF.requestPointerLock();b=B_();if(VQ())clearTimeout(VQ());MY(0);if(Long_lt(Long_sub(b,PZ()),Long_fromInt(3000))){c=new Tv;c.Jm=a;d=3000-Long_sub(b,PZ()).lo|0;MY(setTimeout(Cu(c,"onTimer"),d));}}
function A1D(a){AJv(a);}
function WJ(){D.call(this);}
function Bly(){var a=new WJ();AVn(a);return a;}
function AVn(a){return;}
function A4R(a,b,c){return b!==null?b.lS(c): -c.lS(b);}
function WH(){D.call(this);}
function Blz(){var a=new WH();A5L(a);return a;}
function A5L(a){return;}
function Sb(){Fb.call(this);}
function BlA(){var a=new Sb();A98(a);return a;}
function A98(a){return;}
function Sa(){FY.call(this);}
function BlB(){var a=new Sa();A$b(a);return a;}
function A$b(a){return;}
function Sc(){Gg.call(this);}
function BlC(){var a=new Sc();A3I(a);return a;}
function A3I(a){return;}
function IC(){D.call(this);this.rd=null;}
function AKz(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.rd.Dk;$p=1;case 1:$z=AHu(c,b);if(C()){break _;}d=$z;Eb(c,d);return;default:E$();}}C3().s(a,b,c,d,$p);}
function A0Q(a,b){a.rd=b;}
function AND(a){return a.rd.yk;}
function AA4(){IC.call(this);this.EG=null;}
function Bcl(){var a=new AA4();ATx(a);return a;}
function ATx(a){a.EG=BbR();}
function ARp(a,b,c,d,e,f){var g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bw(c+0.5,d+0.75,e+0.5);$p=1;case 1:$z=AMh(b);if(C()){break _;}g=$z;Bv( -((g*360|0)/16.0),0.0,1.0,0.0);h=B(579);$p=2;case 2:AKz(a,h);if(C()){break _;}B3();CC(1.0,(-1.0),(-1.0));ANb(a.EG);BE();Bw(0.0,0.5,0.09000000357627869);CC(0.01666666753590107,(-0.01666666753590107),0.01666666753590107);Cj(0.0,
0.0,(-0.01666666753590107));h=AND(a);i=0;while(i<b.gt.data.length){j=b.gt.data[i];if(i!=b.rE)ED(h,j, -Dw(h,j)/2|0,(i*10|0)-(b.gt.data.length*5|0)|0,0);else{k=new S;V(k);j=T(H(H(H(k,B(580)),j),B(581)));ED(h,j, -Dw(h,j)/2|0,(i*10|0)-(b.gt.data.length*5|0)|0,0);}i=i+1|0;}BT(1.0,1.0,1.0,1.0);BE();return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function XE(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:ARp(a,b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function NA(){var a=this;D$.call(a);a.j0=0;a.jO=null;a.lN=0.0;a.mv=0.0;}
function Bct(){var a=new NA();A8c(a);return a;}
function A8c(a){a.j0=(-1);a.jO=B(582);a.mv=0.0;a.j0=20;}
function ZI(a){return AGN(a.ch.bg,a.dK,a.dI,a.dR)>256.0?0:1;}
function AC4(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.mv=a.lN;if(ZI(a)){b=a.dK+N(a.ch.q);c=a.dI+N(a.ch.q);d=a.dR+N(a.ch.q);BU(a.ch,B(256),b,c,d,0.0,0.0,0.0);BU(a.ch,B(257),b,c,d,0.0,0.0,0.0);a.lN=a.lN+1000.0/(a.j0+200.0);while(a.lN>360.0){a.lN=a.lN-360.0;a.mv=a.mv-360.0;}if(a.j0==(-1))NY(a);if(a.j0>0)a.j0
=a.j0-1|0;else{e=4;f=0;if(f<e){g=Jn(a.jO,a.ch);if(g===null)return;h=a.ch;i=Dl(g);j=Dv(D3(a.dK,a.dI,a.dR,a.dK+1|0,a.dI+1|0,a.dR+1|0),8.0,4.0,8.0);$p=1;continue _;}}}return;case 1:$z=ANg(h,i,j);if(C()){break _;}h=$z;if(h.s>=6){NY(a);return;}k=a.dK+(Cl(a.ch.q)-Cl(a.ch.q))*4.0;l=(a.dI+E(a.ch.q,3)|0)-1|0;m=a.dR+(Cl(a.ch.q)-Cl(a.ch.q))*4.0;Kt(g,k,l,m,N(a.ch.q)*360.0,0.0);$p=2;case 2:$z=g.uT(k,l,m);if(C()){break _;}n=$z;if(n){h=a.ch;$p=3;continue _;}f=f+1|0;if(f>=e)return;g=Jn(a.jO,a.ch);if(g===null)return;h=a.ch;i
=Dl(g);j=Dv(D3(a.dK,a.dI,a.dR,a.dK+1|0,a.dI+1|0,a.dR+1|0),8.0,4.0,8.0);$p=1;continue _;case 3:AOj(h,g);if(C()){break _;}o=0;while(o<20){c=a.dK+0.5+(N(a.ch.q)-0.5)*2.0;d=a.dI+0.5+(N(a.ch.q)-0.5)*2.0;k=a.dR+0.5+(N(a.ch.q)-0.5)*2.0;BU(a.ch,B(256),c,d,k,0.0,0.0,0.0);BU(a.ch,B(257),c,d,k,0.0,0.0,0.0);o=o+1|0;}AES(g);NY(a);f=f+1|0;if(f>=e)return;g=Jn(a.jO,a.ch);if(g===null)return;h=a.ch;i=Dl(g);j=Dv(D3(a.dK,a.dI,a.dR,a.dK+1|0,a.dI+1|0,a.dR+1|0),8.0,4.0,8.0);$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,
j,k,l,m,n,o,$p);}
function NY(a){a.j0=200+E(a.ch.q,600)|0;}
function AR0(){IC.call(this);this.wL=null;}
function Bbz(){var a=new AR0();AXn(a);return a;}
function AXn(a){a.wL=De();}
function Z1(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bw(c+0.5,d,e+0.5);g=CP(a.wL,b.jO);if(g===null){g=Jn(b.jO,null);BQ(a.wL,b.jO,g);}if(g===null){BE();return;}g.l=b.ch;Bw(0.0,0.4000000059604645,0.0);Bv((b.mv+(b.lN-b.mv)*f)*10.0,0.0,1.0,0.0);Bv((-30.0),1.0,0.0,0.0);Bw(0.0,(-0.4000000059604645),0.0);CC(0.4375,0.4375,0.4375);b=Bgo;c=0.0;d=0.0;e=0.0;h=0.0;$p=1;case 1:AQE(b,g,c,d,e,
h,f);if(C()){break _;}BE();return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ARe(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:Z1(a,b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AQj(){DJ.call(this);}
function A_Y(){var a=new AQj();A4r(a);return a;}
function A4r(a){Gs(a,A5n(),1.0);a.kk=A5n();}
function A6o(a,b){return 180.0;}
function X0(a,b,c){var d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c)return 0;if(c)return 0;d=B(583);$p=1;case 1:AKs(a,d);if(C()){break _;}e=1.0;f=1.0;$p=2;case 2:$z=ADI(b,f);if(C()){break _;}f=$z;f=(e-f)*0.5;Ba(3042);Bc(3008);Df(770,771);BT(1.0,1.0,1.0,f);return 1;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function A6k(a,b){return 180.0;}
function Yd(a,b,c){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=X0(a,b,c);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,$p);}
function T9(){DJ.call(this);}
function AGe(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=B(584);$p=1;case 1:AKs(a,d);if(C()){break _;}return !c&&b.qA?1:0;default:E$();}}C3().s(a,b,c,d,$p);}
function AMd(a,b,c){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=AGe(a,b,c);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,$p);}
function F3(){var a=this;Eh.call(a);a.hf=null;a.hE=null;a.jK=null;a.jJ=null;a.jI=null;a.jL=null;}
function BlD(a,b){var c=new F3();KX(c,a,b);return c;}
function KX(a,b,c){var d,e;a.hf=BK(0,0);BG(a.hf,(-4.0),(-4.0),(-8.0),8,8,8,c);BJ(a.hf,0.0,18-b|0,(-6.0));a.hE=BK(28,8);BG(a.hE,(-5.0),(-10.0),(-7.0),10,16,8,c);BJ(a.hE,0.0,17-b|0,2.0);a.jK=BK(0,16);BG(a.jK,(-2.0),0.0,(-2.0),4,b,4,c);d=a.jK;e=24-b|0;BJ(d,(-3.0),e,7.0);a.jJ=BK(0,16);BG(a.jJ,(-2.0),0.0,(-2.0),4,b,4,c);BJ(a.jJ,3.0,e,7.0);a.jI=BK(0,16);BG(a.jI,(-2.0),0.0,(-2.0),4,b,4,c);BJ(a.jI,(-3.0),e,(-5.0));a.jL=BK(0,16);BG(a.jL,(-2.0),0.0,(-2.0),4,b,4,c);BJ(a.jL,3.0,e,(-5.0));}
function A90(a,b,c,d,e,f,g){AJT(a,b,c,d,e,f,g);Ca(a.hf,g);Ca(a.hE,g);Ca(a.jK,g);Ca(a.jJ,g);Ca(a.jI,g);Ca(a.jL,g);}
function AJT(a,b,c,d,e,f,g){var h;a.hf.bX=e/57.2957763671875;a.hE.b1=1.5707963705062866;h=a.jK;b=b*0.6661999821662903;h.b1=BC(b)*1.399999976158142*c;h=a.jJ;d=b+3.1415927410125732;h.b1=BC(d)*1.399999976158142*c;a.jI.b1=BC(d)*1.399999976158142*c;a.jL.b1=BC(b)*1.399999976158142*c;}
function PX(){F3.call(this);}
function BcN(){var a=new PX();AYe(a);return a;}
function AYe(a){KX(a,6,0.0);}
function TF(){DJ.call(this);}
function AM5(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=B(585);$p=1;case 1:AKs(a,d);if(C()){break _;}return !c&&!b.x8?1:0;default:E$();}}C3().s(a,b,c,d,$p);}
function ARs(a,b,c){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=AM5(a,b,c);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,$p);}
function ACI(){F3.call(this);}
function Bck(){var a=new ACI();A96(a);return a;}
function A96(a){KX(a,12,0.0);a.hf=BK(0,0);BG(a.hf,(-3.0),(-4.0),(-6.0),6,6,8,0.0);BJ(a.hf,0.0,6.0,(-8.0));a.hE=BK(28,8);BG(a.hE,(-4.0),(-10.0),(-7.0),8,16,6,0.0);BJ(a.hE,0.0,5.0,2.0);}
function ARh(){F3.call(this);}
function BbV(){var a=new ARh();AVa(a);return a;}
function AVa(a){KX(a,12,0.0);a.hf=BK(0,0);BG(a.hf,(-3.0),(-4.0),(-4.0),6,6,6,0.6000000238418579);BJ(a.hf,0.0,6.0,(-8.0));a.hE=BK(28,8);BG(a.hE,(-4.0),(-10.0),(-7.0),8,16,6,1.75);BJ(a.hE,0.0,5.0,2.0);a.jK=BK(0,16);BG(a.jK,(-2.0),0.0,(-2.0),4,6,4,0.5);BJ(a.jK,(-3.0),12.0,7.0);a.jJ=BK(0,16);BG(a.jJ,(-2.0),0.0,(-2.0),4,6,4,0.5);BJ(a.jJ,3.0,12.0,7.0);a.jI=BK(0,16);BG(a.jI,(-2.0),0.0,(-2.0),4,6,4,0.5);BJ(a.jI,(-3.0),12.0,(-5.0));a.jL=BK(0,16);BG(a.jL,(-2.0),0.0,(-2.0),4,6,4,0.5);BJ(a.jL,3.0,12.0,(-5.0));}
function AB$(){DJ.call(this);}
function Bb_(){var a=new AB$();AZM(a);return a;}
function AZM(a){Gs(a,BaV(),0.5);}
function ADD(a,b,c){var d,e,f;d=Qo(b,c);e=1.0+Bq(d*100.0)*d*0.009999999776482582;if(d<0.0)d=0.0;if(d>1.0)d=1.0;c=d*d;c=c*c;f=(1.0+c*0.4000000059604645)*e;CC(f,(1.0+c*0.10000000149011612)/e,f);}
function Yc(a,b,c,d){var e,f;e=Qo(b,d);if(!((e*10.0|0)%2|0))return 0;f=e*0.20000000298023224*255.0|0;if(f<0)f=0;if(f>255)f=255;return f<<24|16711680|65280|255;}
function A7X(a,b,c){ADD(a,b,c);}
function AZY(a,b,c,d){return Yc(a,b,c,d);}
function HS(){Mz.call(this);}
function BlE(){var a=new HS();A8d(a);return a;}
function A8d(a){KF(a);}
function A2K(a,b,c,d,e,f,g){var h,i,j;AIT(a,b,c,d,e,f,g);h=Bq(a.xZ*3.1415927410125732);i=Bq((1.0-(1.0-a.xZ)*(1.0-a.xZ))*3.1415927410125732);a.d1.bU=0.0;a.dO.bU=0.0;j=a.d1;b=0.10000000149011612-h*0.6000000238418579;j.bX= -b;a.dO.bX=b;a.d1.b1=(-1.5707963705062866);a.dO.b1=(-1.5707963705062866);j=a.d1;b=j.b1;c=h*1.2000000476837158-i*0.4000000059604645;j.b1=b-c;j=a.dO;j.b1=j.b1-c;j=a.d1;b=j.bU;c=d*0.09000000357627869;j.bU=b+BC(c)*0.05000000074505806+0.05000000074505806;j=a.dO;j.bU=j.bU-(BC(c)*0.05000000074505806
+0.05000000074505806);j=a.d1;b=j.b1;c=d*0.06700000166893005;j.b1=b+Bq(c)*0.05000000074505806;j=a.dO;j.b1=j.b1-Bq(c)*0.05000000074505806;}
function AIo(){HS.call(this);}
function Bcy(){var a=new AIo();AWq(a);return a;}
function AWq(a){KF(a);a.d1=BK(40,16);BG(a.d1,(-1.0),(-2.0),(-1.0),2,12,2,0.0);BJ(a.d1,(-5.0),2.0,0.0);a.dO=BK(40,16);a.dO.lE=1;BG(a.dO,(-1.0),(-2.0),(-1.0),2,12,2,0.0);BJ(a.dO,5.0,2.0,0.0);a.i_=BK(0,16);BG(a.i_,(-1.0),0.0,(-1.0),2,12,2,0.0);BJ(a.i_,(-2.0),12.0,0.0);a.hg=BK(0,16);a.hg.lE=1;BG(a.hg,(-1.0),0.0,(-1.0),2,12,2,0.0);BJ(a.hg,2.0,12.0,0.0);}
function K$(){DP.call(this);}
function AO$(a,b,c,d){var e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.l;$p=1;case 1:$z=ANj(e,b,c,d);if(C()){break _;}f=$z;return f-0.5;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function Uc(){DJ.call(this);this.tx=0.0;}
function Zv(a,b,c){CC(a.tx,a.tx,a.tx);}
function A$1(a,b,c){Zv(a,b,c);}
function TM(){Dg.call(this);}
function BlF(){var a=new TM();AZw(a);return a;}
function AZw(a){EH(a);}
function AJt(a,b,c,d,e,f,g){B3();A8q(b.L,c-b.cs,d-b.b7,e-b.ct);BE();}
function IH(){var a=this;C5.call(a);a.rx=0;a.dJ=0;a.nr=0;a.EC=0;a.ny=0;a.dT=null;}
function JP(a,b){var c,d,e,f,g,h,i,j,k,l;a.dJ=b;c=b*90|0;a.u=c;a.P=c;c=a.dT.ge;d=a.dT.m7;e=a.dT.ge;if(b&&b!=2)c=0.5;else e=0.5;c=c/32.0;d=d/32.0;f=e/32.0;g=a.nr+0.5;h=a.EC+0.5;i=a.ny+0.5;if(!b)i=i-0.5625;j=R(b,1);if(!j)g=g-0.5625;k=R(b,2);if(!k)i=i+0.5625;l=R(b,3);if(!l)g=g+0.5625;if(!b)g=g-HP(a,a.dT.ge);if(!j)i=i+HP(a,a.dT.ge);if(!k)g=g+HP(a,a.dT.ge);if(!l)i=i-HP(a,a.dT.ge);e=h+HP(a,a.dT.m7);CT(a,g,e,i);M7(a.L,g-c+0.0062500000931322575,e-d+0.0062500000931322575,i-f+0.0062500000931322575,g+c+(-0.0062500000931322575),
e+d+(-0.0062500000931322575),i+f+(-0.0062500000931322575));}
function HP(a,b){return b==32?0.5:b!=64?0.0:0.5;}
function ADl(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.rx;a.rx=b+1|0;if(b!=100)return;$p=1;case 1:$z=ZK(a);if(C()){break _;}c=$z;if(c)return;a.rx=0;$p=2;case 2:Cb(a);if(C()){break _;}d=a.l;e=new E9;f=a.l;g=a.d;h=a.j;i=a.e;j=new Cd;BB();DD(j,BiB);He(e,f,g,h,i,j);$p=3;case 3:AOj(d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function ZK(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.l;c=a.L;$p=1;case 1:$z=XV(b,a,c);if(C()){break _;}b=$z;if(b.s>0)return 0;d=a.dT.ge/16|0;e=a.dT.m7/16|0;f=a.nr;g=a.ny;if(!a.dJ)f=K(a.d-a.dT.ge/32.0);if(a.dJ==1)g=K(a.e-a.dT.ge/32.0);if(a.dJ==2)f=K(a.d-a.dT.ge/32.0);if(a.dJ==3)g=K(a.e-a.dT.ge/32.0);h=K(a.j-a.dT.m7/32.0);i=0;while
(i<d){j=0;if(j<e){if(a.dJ&&a.dJ!=2){b=a.l;k=a.nr;l=h+j|0;m=g+i|0;$p=4;continue _;}b=a.l;k=f+i|0;l=h+j|0;m=a.ny;$p=3;continue _;}i=i+1|0;}b=a.l;c=a.L;$p=2;case 2:$z=ADL(b,a,c);if(C()){break _;}c=$z;k=0;while(k<c.s){if(Y(c,k) instanceof IH)return 0;k=k+1|0;}return 1;case 3:$z=AB2(b,k,l,m);if(C()){break _;}b=$z;if(!b.dw())return 0;j=j+1|0;while(true){if(j<e){if(a.dJ&&a.dJ!=2){b=a.l;k=a.nr;l=h+j|0;m=g+i|0;$p=4;continue _;}b=a.l;k=f+i|0;l=h+j|0;m=a.ny;continue _;}i=i+1|0;if(i>=d)break;j=0;}b=a.l;c=a.L;$p=2;continue _;case 4:$z
=AB2(b,k,l,m);if(C()){break _;}b=$z;if(!b.dw())return 0;j=j+1|0;while(true){if(j<e){if(a.dJ&&a.dJ!=2){b=a.l;k=a.nr;l=h+j|0;m=g+i|0;continue _;}b=a.l;k=f+i|0;l=h+j|0;m=a.ny;$p=3;continue _;}i=i+1|0;if(i>=d)break;j=0;}b=a.l;c=a.L;$p=2;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AXQ(a){return 1;}
function AEr(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:Cb(a);if(C()){break _;}d=a.l;b=new E9;e=a.l;f=a.d;g=a.j;h=a.e;i=new Cd;BB();DD(i,BiB);He(b,e,f,g,h,i);$p=2;case 2:AOj(d,b);if(C()){break _;}return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AAt(){Dg.call(this);this.Ic=null;}
function BbT(){var a=new AAt();AZC(a);return a;}
function AZC(a){EH(a);a.Ic=new DB;}
function AQb(a,b,c,d,e,f,g){var h,i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bw(c,d,e);Bv(f,0.0,1.0,0.0);Ba(32826);h=B(586);$p=1;case 1:AKs(a,h);if(C()){break _;}h=b.dT;CC(0.0625,0.0625,0.0625);i=h.ge;j=h.m7;k=h.zL;l=h.zK;$p=2;case 2:ACV(a,b,i,j,k,l);if(C()){break _;}Bc(32826);BE();return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ACV(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g= -c/2.0;h= -d/
2.0;i=0;j=c/16|0;k=d/16|0;l=e+c|0;m=f+d|0;while(i<j){if(0<k){c=(i+1|0)*16|0;n=g+c;o=i*16|0;p=g+o;q=0+1|0;f=q*16|0;r=h+f;s=0*16|0;t=h+s;u=(n+p)/2.0;v=(r+t)/2.0;w=K(b.d);x=K(b.j+v/16.0);y=K(b.e);if(!b.dJ)w=K(b.d+u/16.0);if(b.dJ==1)y=K(b.e-u/16.0);if(b.dJ==2)w=K(b.d-u/16.0);if(b.dJ==3)y=K(b.e+u/16.0);z=a.iE.n3;$p=1;continue _;}i=i+1|0;}return;case 1:$z=ANj(z,w,x,y);if(C()){break _;}ba=$z;F8(ba,ba,ba);ba=(l-o|0)/256.0;u=(l-c|0)/256.0;v=(m-s|0)/256.0;bb=(m-f|0)/256.0;BA();z=BeL;Bz(z);Cj(0.0,0.0,(-1.0));bc=n;bd=t;be
=u;bf=v;G(z,bc,bd,(-0.5),be,bf);bg=p;bh=ba;G(z,bg,bd,(-0.5),bh,bf);bf=r;bi=bb;G(z,bg,bf,(-0.5),bh,bi);G(z,bc,bf,(-0.5),be,bi);Cj(0.0,0.0,1.0);G(z,bc,bf,0.5,0.75,0.0);G(z,bg,bf,0.5,0.8125,0.0);G(z,bg,bd,0.5,0.8125,0.0625);G(z,bc,bd,0.5,0.75,0.0625);Cj(0.0,(-1.0),0.0);G(z,bc,bf,(-0.5),0.75,0.001953125);G(z,bg,bf,(-0.5),0.8125,0.001953125);G(z,bg,bf,0.5,0.8125,0.001953125);G(z,bc,bf,0.5,0.75,0.001953125);Cj(0.0,1.0,0.0);G(z,bc,bd,0.5,0.75,0.001953125);G(z,bg,bd,0.5,0.8125,0.001953125);G(z,bg,bd,(-0.5),0.8125,0.001953125);G(z,
bc,bd,(-0.5),0.75,0.001953125);Cj((-1.0),0.0,0.0);G(z,bc,bf,0.5,0.751953125,0.0);G(z,bc,bd,0.5,0.751953125,0.0625);G(z,bc,bd,(-0.5),0.751953125,0.0625);G(z,bc,bf,(-0.5),0.751953125,0.0);Cj(1.0,0.0,0.0);G(z,bg,bf,(-0.5),0.751953125,0.0);G(z,bg,bd,(-0.5),0.751953125,0.0625);G(z,bg,bd,0.5,0.751953125,0.0625);G(z,bg,bf,0.5,0.751953125,0.0);Br(z);s=q;while(true){if(s<k){c=(i+1|0)*16|0;n=g+c;o=i*16|0;p=g+o;q=s+1|0;f=q*16|0;r=h+f;s=s*16|0;t=h+s;u=(n+p)/2.0;v=(r+t)/2.0;w=K(b.d);x=K(b.j+v/16.0);y=K(b.e);if(!b.dJ)w=K(b.d
+u/16.0);if(b.dJ==1)y=K(b.e-u/16.0);if(b.dJ==2)w=K(b.d-u/16.0);if(b.dJ==3)y=K(b.e+u/16.0);z=a.iE.n3;continue _;}i=i+1|0;if(i>=j)break;s=0;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$p);}
function AOT(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AQb(a,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function Ju(){var a=this;C5.call(a);a.sA=0;a.s6=0;a.rJ=0;a.vU=0;a.pk=0;a.lr=0;a.sp=null;a.p3=0;a.m$=0;}
function ATa(a,b){var c=new Ju();AZc(c,a,b);return c;}
function AZc(a,b,c){FC(a,b);a.sA=(-1);a.s6=(-1);a.rJ=(-1);a.vU=0;a.pk=0;a.lr=0;a.m$=0;a.sp=c;D1(a,0.5,0.5);Kt(a,c.d,c.j,c.e,c.u,c.I);a.d=a.d-BC(a.u/180.0*3.1415927410125732)*0.1599999964237213;a.j=a.j-0.10000000149011612;a.e=a.e-Bq(a.u/180.0*3.1415927410125732)*0.1599999964237213;CT(a,a.d,a.j,a.e);a.c4=0.0;a.g= -Bq(a.u/180.0*3.1415927410125732)*BC(a.I/180.0*3.1415927410125732);a.h=BC(a.u/180.0*3.1415927410125732)*BC(a.I/180.0*3.1415927410125732);a.i= -Bq(a.I/180.0*3.1415927410125732);QF(a,a.g,a.i,a.h,1.5,1.0);}
function QF(a,b,c,d,e,f){var g,h,i;g=Ce(b*b+c*c+d*d);b=b/g;c=c/g;d=d/g;g=CZ(a.m)*0.007499999832361937;h=f;b=b+g*h;c=c+CZ(a.m)*0.007499999832361937*h;d=d+CZ(a.m)*0.007499999832361937*h;g=e;b=b*g;c=c*g;d=d*g;a.g=b;a.i=c;a.h=d;i=Ce(b*b+d*d);e=CR(b,d)*180.0/3.1415927410125732;a.u=e;a.P=e;e=CR(c,i)*180.0/3.1415927410125732;a.I=e;a.T=e;a.p3=0;}
function APv(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AI$(a);if(C()){break _;}if(a.lr>0)a.lr=a.lr-1|0;if(a.pk){b=a.l;c=a.sA;d=a.s6;e=a.rJ;$p=2;continue _;}a.m$=a.m$+1|0;b=BY(a.d,a.j,a.e);f=BY(a.d+a.g,a.j+a.i,a.e+a.h);g=a.l;$p=3;continue _;case 2:$z=ACx(b,c,d,e);if(C()){break _;}c=$z;if
(c==a.vU){a.p3=a.p3+1|0;if(a.p3!=1200)return;$p=4;continue _;}a.pk=0;a.g=a.g*N(a.m)*0.20000000298023224;a.i=a.i*N(a.m)*0.20000000298023224;a.h=a.h*N(a.m)*0.20000000298023224;a.p3=0;a.m$=0;b=BY(a.d,a.j,a.e);f=BY(a.d+a.g,a.j+a.i,a.e+a.h);g=a.l;$p=3;case 3:$z=AJm(g,b,f);if(C()){break _;}g=$z;b=BY(a.d,a.j,a.e);f=BY(a.d+a.g,a.j+a.i,a.e+a.h);if(g!==null)f=BY(g.gz.x,g.gz.z,g.gz.w);h=null;i=a.l;j=Dv(Jg(a.L,a.g,a.i,a.h),1.0,1.0,1.0);$p=5;continue _;case 4:Cb(a);if(C()){break _;}return;case 5:$z=ADL(i,a,j);if(C()){break _;}i
=$z;k=0.0;d=0;while(d<CX(i)){j=Y(i,d);if(j.lw()&&!(j===a.sp&&a.m$<5)){l=QT(Dv(j.L,0.30000001192092896,0.30000001192092896,0.30000001192092896),b,f);if(l!==null){m=DI(b,l.gz);if(!(m>=k&&k!==0.0)){h=j;k=m;}}}d=d+1|0;}if(h!==null)g=A1c(h);if(g!==null){if(g.nD!==null){b=g.nD;f=a.sp;c=4;$p=7;continue _;}a.sA=g.h_;a.s6=g.ia;a.rJ=g.ib;b=a.l;c=a.sA;d=a.s6;e=a.rJ;$p=6;continue _;}a.d=a.d+a.g;a.j=a.j+a.i;a.e=a.e+a.h;n=Ce(a.g*a.g+a.h*a.h);a.u=CR(a.g,a.h)*180.0/3.1415927410125732;a.I=CR(a.i,n)*180.0/3.1415927410125732;while
(a.I-a.T<(-180.0)){a.T=a.T-360.0;}while(a.I-a.T>=180.0){a.T=a.T+360.0;}while(a.u-a.P<(-180.0)){a.P=a.P-360.0;}while(a.u-a.P>=180.0){a.P=a.P+360.0;}a.I=a.T+(a.I-a.T)*0.20000000298023224;a.u=a.P+(a.u-a.P)*0.20000000298023224;o=0.9900000095367432;$p=9;continue _;case 6:$z=ACx(b,c,d,e);if(C()){break _;}c=$z;a.vU=c;a.g=g.gz.x-a.d;a.i=g.gz.z-a.j;a.h=g.gz.w-a.e;n=Ce(a.g*a.g+a.i*a.i+a.h*a.h);k=a.d;m=a.g;p=n;a.d=k-m/p*0.05000000074505806;a.j=a.j-a.i/p*0.05000000074505806;a.e=a.e-a.h/p*0.05000000074505806;Dh(a.l,a,B(587),
1.0,1.2000000476837158/(N(a.m)*0.20000000298023224+0.8999999761581421));a.pk=1;a.lr=7;a.d=a.d+a.g;a.j=a.j+a.i;a.e=a.e+a.h;n=Ce(a.g*a.g+a.h*a.h);a.u=CR(a.g,a.h)*180.0/3.1415927410125732;a.I=CR(a.i,n)*180.0/3.1415927410125732;while(a.I-a.T<(-180.0)){a.T=a.T-360.0;}while(a.I-a.T>=180.0){a.T=a.T+360.0;}while(a.u-a.P<(-180.0)){a.P=a.P-360.0;}while(a.u-a.P>=180.0){a.P=a.P+360.0;}a.I=a.T+(a.I-a.T)*0.20000000298023224;a.u=a.P+(a.u-a.P)*0.20000000298023224;o=0.9900000095367432;$p=9;continue _;case 7:$z=b.fs(f,c);if(C())
{break _;}c=$z;if(c){Dh(a.l,a,B(587),1.0,1.2000000476837158/(N(a.m)*0.20000000298023224+0.8999999761581421));$p=8;continue _;}a.g=a.g*(-0.10000000149011612);a.i=a.i*(-0.10000000149011612);a.h=a.h*(-0.10000000149011612);a.u=a.u+180.0;a.P=a.P+180.0;a.m$=0;a.d=a.d+a.g;a.j=a.j+a.i;a.e=a.e+a.h;n=Ce(a.g*a.g+a.h*a.h);a.u=CR(a.g,a.h)*180.0/3.1415927410125732;a.I=CR(a.i,n)*180.0/3.1415927410125732;while(a.I-a.T<(-180.0)){a.T=a.T-360.0;}while(a.I-a.T>=180.0){a.T=a.T+360.0;}while(a.u-a.P<(-180.0)){a.P=a.P-360.0;}while
(a.u-a.P>=180.0){a.P=a.P+360.0;}a.I=a.T+(a.I-a.T)*0.20000000298023224;a.u=a.P+(a.u-a.P)*0.20000000298023224;o=0.9900000095367432;$p=9;continue _;case 8:Cb(a);if(C()){break _;}a.d=a.d+a.g;a.j=a.j+a.i;a.e=a.e+a.h;n=Ce(a.g*a.g+a.h*a.h);a.u=CR(a.g,a.h)*180.0/3.1415927410125732;a.I=CR(a.i,n)*180.0/3.1415927410125732;while(a.I-a.T<(-180.0)){a.T=a.T-360.0;}while(a.I-a.T>=180.0){a.T=a.T+360.0;}while(a.u-a.P<(-180.0)){a.P=a.P-360.0;}while(a.u-a.P>=180.0){a.P=a.P+360.0;}a.I=a.T+(a.I-a.T)*0.20000000298023224;a.u=a.P+(a.u
-a.P)*0.20000000298023224;o=0.9900000095367432;$p=9;case 9:$z=AE7(a);if(C()){break _;}c=$z;if(c){e=0;while(e<4){BU(a.l,B(213),a.d-a.g*0.25,a.j-a.i*0.25,a.e-a.h*0.25,a.g,a.i,a.h);e=e+1|0;}o=0.800000011920929;}k=a.g;m=o;a.g=k*m;a.i=a.i*m;a.h=a.h*m;a.i=a.i-0.029999999329447746;CT(a,a.d,a.j,a.e);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function A7C(a,b){var c,d;if(a.pk&&a.sp===b&&a.lr<=0){c=b.K;d=new Cd;BB();MO(d,Bgd.cW,1);if(Vb(c,d)){Dh(a.l,a,B(588),0.20000000298023224,((N(a.m)-N(a.m))*0.699999988079071+1.0)*2.0);RZ(b,a);Cb(a);}}}
function Ry(){Dg.call(this);}
function BlG(){var a=new Ry();ASW(a);return a;}
function ASW(a){EH(a);}
function AJW(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=B(589);$p=1;case 1:AKs(a,h);if(C()){break _;}B3();Bw(c,d,e);Bv(b.P+(b.u-b.P)*g-90.0,0.0,1.0,0.0);Bv(b.T+(b.I-b.T)*g,0.0,0.0,1.0);BA();h=BeL;Ba(32826);i=b.lr-g;if(i>0.0)Bv( -Bq(i*3.0)*i,0.0,0.0,1.0);Bv(45.0,1.0,0.0,0.0);CC(0.05624999850988388,0.05624999850988388,0.05624999850988388);Bw((-4.0),0.0,0.0);Cj(0.05624999850988388,
0.0,0.0);Bz(h);G(h,(-7.0),(-2.0),(-2.0),0.0,0.15625);G(h,(-7.0),(-2.0),2.0,0.15625,0.15625);G(h,(-7.0),2.0,2.0,0.15625,0.3125);G(h,(-7.0),2.0,(-2.0),0.0,0.3125);Br(h);Cj((-0.05624999850988388),0.0,0.0);Bz(h);G(h,(-7.0),2.0,(-2.0),0.0,0.15625);G(h,(-7.0),2.0,2.0,0.15625,0.15625);G(h,(-7.0),(-2.0),2.0,0.15625,0.3125);G(h,(-7.0),(-2.0),(-2.0),0.0,0.3125);Br(h);j=0;while(j<4){Bv(90.0,1.0,0.0,0.0);Cj(0.0,0.0,0.05624999850988388);Bz(h);G(h,(-8.0),(-2.0),0.0,0.0,0.0);G(h,8.0,(-2.0),0.0,0.5,0.0);G(h,8.0,2.0,0.0,0.5,
0.15625);G(h,(-8.0),2.0,0.0,0.0,0.15625);Br(h);j=j+1|0;}Bc(32826);BE();return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function ADj(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AJW(a,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function E9(){var a=this;C5.call(a);a.nh=null;a.zr=0;a.mM=0;a.hb=0;a.q5=0;a.yx=0.0;}
function Hf(a,b,c,d,e){var f=new E9();He(f,a,b,c,d,e);return f;}
function He(a,b,c,d,e,f){FC(a,b);a.mM=0;a.q5=5;a.yx=BP()*3.141592653589793*2.0;D1(a,0.25,0.25);a.c4=a.eO/2.0;CT(a,c,d,e);a.nh=f;a.u=BP()*360.0;a.g=BP()*0.20000000298023224-0.10000000149011612;a.i=0.20000000298023224;a.h=BP()*0.20000000298023224-0.10000000149011612;a.i$=0;}
function AJF(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.Jf();if(C()){break _;}if(a.hb>0)a.hb=a.hb-1|0;a.bS=a.d;a.cS=a.j;a.bR=a.e;a.i=a.i-0.03999999910593033;b=a.l;c=K(a.d);d=K(a.j);e=K(a.e);$p=2;case 2:$z=AB2(b,c,d,e);if(C()){break _;}b=$z;if(b===BfR){a.i=0.20000000298023224;a.g=(N(a.m)-N(a.m))*0.20000000298023224;a.h=(N(a.m)-N(a.m))*0.20000000298023224;Dh(a.l,a,B(215),0.4000000059604645,
2.0+N(a.m)*0.4000000059604645);}f=a.d;g=a.j;h=a.e;$p=3;case 3:ACH(a,f,g,h);if(C()){break _;}$p=4;case 4:AEf(a);if(C()){break _;}f=a.g;g=a.i;h=a.h;$p=5;case 5:ARF(a,f,g,h);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;a.i=a.i*(-0.5);}a.zr=a.zr+1|0;a.mM=a.mM+1|0;if(a.mM<6000)return;$p=6;case 6:Cb(a);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AEf(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.l;c=a.L;d=BfQ;$p=1;case 1:$z=AAu(b,c,d,a);if(C()){break _;}e=$z;return e;default:E$();}}C3().s(a,b,c,d,e,$p);}
function ACH(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=K(b);f=K(c);g=K(d);h=b-e;i=c-f;j=d-g;L();k=BgA.data;l=a.l;$p=1;case 1:$z=ACx(l,e,f,g);if(C()){break _;}m=$z;if(!k[m])return 0;k=BgA.data;l=a.l;m=e-1|0;$p=2;case 2:$z=ACx(l,m,f,g);if(C())
{break _;}m=$z;n=k[m]?0:1;k=BgA.data;l=a.l;m=e+1|0;$p=3;case 3:$z=ACx(l,m,f,g);if(C()){break _;}m=$z;o=k[m]?0:1;k=BgA.data;l=a.l;m=f-1|0;$p=4;case 4:$z=ACx(l,e,m,g);if(C()){break _;}m=$z;p=k[m]?0:1;k=BgA.data;l=a.l;m=f+1|0;$p=5;case 5:$z=ACx(l,e,m,g);if(C()){break _;}m=$z;q=k[m]?0:1;k=BgA.data;l=a.l;m=g-1|0;$p=6;case 6:$z=ACx(l,e,f,m);if(C()){break _;}m=$z;m=k[m]?0:1;k=BgA.data;l=a.l;r=g+1|0;$p=7;case 7:$z=ACx(l,e,f,r);if(C()){break _;}e=$z;r=k[e]?0:1;s=(-1);t=9999.0;if(n&&h<t){s=0;t=h;}if(!o)b=t;else{b=1.0
-h;if(b<t)s=1;else b=t;}if(p&&i<b){s=2;b=i;}if(!q)c=b;else{c=1.0-i;if(c<b)s=3;else c=b;}if(m&&j<c){s=4;c=j;}if(r&&1.0-j<c)s=5;u=N(a.m)*0.20000000298023224+0.10000000149011612;if(!s)a.g= -u;if(s==1)a.g=u;if(s==2)a.i= -u;if(s==3)a.i=u;if(s==4)a.h= -u;if(s==5)a.h=u;return 0;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function AMw(a,b){Vj(a,null,b);}
function Vj(a,b,c){a.q5=a.q5-c|0;if(a.q5<=0)Cb(a);return 0;}
function A_e(a,b){if(!a.hb&&Vb(b.K,a.nh)){Dh(a.l,a,B(588),0.20000000298023224,((N(a.m)-N(a.m))*0.699999988079071+1.0)*2.0);RZ(b,a);Cb(a);}}
function Mr(){C5.call(this);this.ht=0;}
function AWQ(a,b,c,d){var e=new Mr();A6z(e,a,b,c,d);return e;}
function A6z(a,b,c,d,e){var f,g,h;FC(a,b);a.ht=0;a.mE=1;D1(a,0.9800000190734863,0.9800000190734863);a.c4=a.eO/2.0;f=c;g=d;h=e;CT(a,f,g,h);e=BP()*3.1415927410125732*2.0*3.1415927410125732/180.0;a.g= -Bq(e)*0.019999999552965164;a.i=0.20000000298023224;a.h= -BC(e)*0.019999999552965164;a.i$=0;a.ht=80;a.bS=f;a.cS=g;a.bR=h;}
function A$e(a){return a.cR?0:1;}
function XK(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;a.i=a.i-0.03999999910593033;b=a.g;c=a.i;d=a.h;$p=1;case 1:ARF(a,b,c,d);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;a.i=a.i*(-0.5);}e=a.ht;a.ht=e-1|0;if(e>0){BU(a.l,B(256),a.d,a.j+0.5,a.e,0.0,
0.0,0.0);return;}$p=2;case 2:Cb(a);if(C()){break _;}f=4.0;g=a.l;h=null;b=a.d;c=a.j;d=a.e;$p=3;case 3:Ya(g,h,b,c,d,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AOX(){Dg.call(this);this.wh=null;}
function Bao(){var a=new AOX();A7h(a);return a;}
function A7h(a){EH(a);a.wh=Ki();a.mc=0.5;}
function APz(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bw(c,d,e);if(b.ht-g+1.0<10.0){h=1.0-(b.ht-g+1.0)/10.0;if(h<0.0)h=0.0;if(h>1.0)h=1.0;f=h*h;i=1.0+f*f*0.30000001192092896;CC(i,i,i);}h=(1.0-(b.ht-g+1.0)/100.0)*0.800000011920929;j=B(179);$p=1;case 1:AKs(a,j);if(C()){break _;}j=a.wh;L();GY(j,Bfk);if(!((b.ht/5|0)%2|0)){Bc(3553);Bc(2896);Ba(3042);Df(770,772);BT(1.0,
1.0,1.0,h);GY(a.wh,Bfk);BT(1.0,1.0,1.0,1.0);Bc(3042);Ba(2896);Ba(3553);}BE();return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AL8(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:APz(a,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function JM(){var a=this;C5.call(a);a.hV=0;a.oQ=0;}
function AYk(a){return a.cR?0:1;}
function AMP(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.hV){$p=3;continue _;}a.bS=a.d;a.cS=a.j;a.bR=a.e;a.oQ=a.oQ+1|0;a.i=a.i-0.03999999910593033;b=a.g;c=a.i;d=a.h;$p=1;case 1:ARF(a,b,c,d);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;e=K(a.d);f=K(a.j);g=K(a.e);h=a.l;$p=2;case 2:$z=ACx(h,e,f,g);if(C()){break _;}i
=$z;if(i==a.hV){h=a.l;i=0;$p=4;continue _;}if(!a.cx){if(a.oQ<=100)return;e=a.hV;f=1;$p=7;continue _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;a.i=a.i*(-0.5);$p=5;continue _;case 3:Cb(a);if(C()){break _;}return;case 4:APy(h,e,f,g,i);if(C()){break _;}if(!a.cx){if(a.oQ<=100)return;e=a.hV;f=1;$p=7;continue _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;a.i=a.i*(-0.5);$p=5;case 5:Cb(a);if(C()){break _;}h=a.l;i=a.hV;j=1;$p=6;case 6:$z=AH_(h,i,e,f,g,j);if(C()){break _;}i=$z;if(!i){e=a.hV;f=1;$p=
9;continue _;}h=a.l;i=a.hV;$p=10;continue _;case 7:ABV(a,e,f);if(C()){break _;}$p=8;case 8:Cb(a);if(C()){break _;}return;case 9:ABV(a,e,f);if(C()){break _;}return;case 10:$z=APy(h,e,f,g,i);if(C()){break _;}e=$z;if(e)return;e=a.hV;f=1;$p=9;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AX1(a){return a.l;}
function AQO(){Dg.call(this);this.DB=null;}
function Bag(){var a=new AQO();AXt(a);return a;}
function AXt(a){EH(a);a.DB=Ki();a.mc=0.5;}
function AQi(a,b,c,d,e,f,g){var h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bw(c,d,e);h=B(179);$p=1;case 1:AKs(a,h);if(C()){break _;}L();h=BeP.data[b.hV];i=b.l;Bc(2896);j=a.DB;k=K(b.d);l=K(b.j);m=K(b.e);$p=2;case 2:AI1(j,h,i,k,l,m);if(C()){break _;}Ba(2896);BE();return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ARl(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AQi(a,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function Gi(){var a=this;C5.call(a);a.Bs=null;a.iU=0;a.kD=0;a.oP=0;a.kO=0;}
var BlH=null;function ASS(a,b){return b.L;}
function AZ4(a){return a.L;}
function A7F(a){return 1;}
function AVP(a){return a.eO*0.2;}
function ALh(a,b,c){var d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.oP= -a.oP;a.kD=10;a.iU=a.iU+(c*10|0)|0;if(a.iU<=40)return 1;BB();c=BiH.cW;d=1;e=0.0;$p=1;case 1:AGH(a,c,d,e);if(C()){break _;}$p=2;case 2:APh(a);if(C()){break _;}return 1;default:E$();}}C3().s(a,b,c,d,e,$p);}
function A9M(a){return a.cR?0:1;}
function APh(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;c=27;while(b<c){d=TV(a,b);if(d!==null){e=N(a.m)*0.800000011920929+0.10000000149011612;f=N(a.m)*0.800000011920929+0.10000000149011612;g=N(a.m)*0.800000011920929+0.10000000149011612;h=e;i=f;j=g;if(d.p>0){k=E(a.m,21)+10|0;if(k>d.p)k=d.p;d.p=d.p-k|0;l=Hf(a.l,a.d+h,a.j+i,a.e+j,
Or(d.bA,k,d.en));l.g=CZ(a.m)*0.05000000074505806;l.i=CZ(a.m)*0.05000000074505806+0.20000000298023224;l.h=CZ(a.m)*0.05000000074505806;m=a.l;$p=2;continue _;}}b=b+1|0;}$p=1;case 1:Cb(a);if(C()){break _;}return;case 2:AOj(m,l);if(C()){break _;}a:while(true){if(d.p>0){k=E(a.m,21)+10|0;if(k>d.p)k=d.p;d.p=d.p-k|0;l=Hf(a.l,a.d+h,a.j+i,a.e+j,Or(d.bA,k,d.en));l.g=CZ(a.m)*0.05000000074505806;l.i=CZ(a.m)*0.05000000074505806+0.20000000298023224;l.h=CZ(a.m)*0.05000000074505806;m=a.l;continue _;}while(true){b=b+1|0;if(b>=
c)break a;d=TV(a,b);if(d===null)continue;else break;}e=N(a.m)*0.800000011920929+0.10000000149011612;f=N(a.m)*0.800000011920929+0.10000000149011612;g=N(a.m)*0.800000011920929+0.10000000149011612;h=e;i=f;j=g;}$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ASH(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.kD>0)a.kD=a.kD-1|0;if(a.iU>0)a.iU=a.iU-1|0;a.bS=a.d;a.cS=a.j;a.bR=a.e;a.i=a.i
-0.03999999910593033;b=K(a.d);c=K(a.j);d=K(a.e);e=a.l;f=c-1|0;$p=1;case 1:$z=ACx(e,b,f,d);if(C()){break _;}f=$z;L();if(f==Bg8.b)c=c+(-1)|0;g=0.4;h=0.0078125;e=a.l;$p=2;case 2:$z=ACx(e,b,c,d);if(C()){break _;}f=$z;if(f==Bg8.b){i=a.d;j=a.j;k=a.e;$p=3;continue _;}if(a.g<(-0.4))a.g=(-0.4);if(a.g>g)a.g=g;if(a.h<(-0.4))a.h=(-0.4);if(a.h>g)a.h=g;if(a.cx){a.g=a.g*0.5;a.i=a.i*0.5;a.h=a.h*0.5;}i=a.g;j=a.i;k=a.h;$p=5;continue _;case 3:$z=ASl(a,i,j,k);if(C()){break _;}l=$z;e=a.l;$p=4;case 4:$z=AEK(e,b,c,d);if(C()){break _;}m
=$z;a.j=c;n=R(m,2);if(n>=0&&m<=5)a.j=c+1|0;if(!n)a.g=a.g-h;if(m==3)a.g=a.g+h;if(m==4)a.h=a.h+h;if(m==5)a.h=a.h-h;o=BlH.data[m].data;p=o[1].data[0]-o[0].data[0]|0;q=o[1].data[2]-o[0].data[2]|0;r=Ed(p*p+q*q);if(a.g*p+a.h*q<0.0){p= -p;q= -q;}s=Ed(a.g*a.g+a.h*a.h);a.g=s*p/r;a.h=s*q/r;t=b;u=t+0.5;v=u+o[0].data[0]*0.5;w=d;p=w+0.5;i=p+o[0].data[2]*0.5;j=u+o[1].data[0]*0.5;k=p+o[1].data[2]*0.5;j=j-v;k=k-i;if(j===0.0){a.d=u;u=a.e-w;}else if(k===0.0){a.e=p;u=a.d-t;}else u=((a.d-v)*j+(a.e-i)*k)*2.0;a.d=v+j*u;a.e=i+k*u;CT(a,
a.d,a.j+a.c4,a.e);x=a.g;t=a.h;if(a.bH!==null){x=x*0.75;t=t*0.75;}i=(-0.4);if(x<i)x=i;if(x>g)x=g;if(t>=i)i=t;if(i<=g)g=i;i=0.0;$p=7;continue _;case 5:ARF(a,i,j,k);if(C()){break _;}if(!a.cx){a.g=a.g*0.949999988079071;a.i=a.i*0.949999988079071;a.h=a.h*0.949999988079071;}a.I=0.0;y=a.bS-a.d;z=a.bR-a.e;if(y*y+z*z>0.001){a.u=CR(z,y)*180.0/3.141592653589793;if(a.kO)a.u=a.u+180.0;}ba=a.u-a.P;while(ba>=180.0){ba=ba-360.0;}while(ba<(-180.0)){ba=ba+360.0;}if(!(ba>=(-170.0)&&ba<170.0)){a.u=a.u+180.0;a.kO=a.kO?0:1;}WS(a,
a.u,a.I);e=a.l;l=Dv(a.L,0.20000000298023224,0.0,0.20000000298023224);$p=6;case 6:a:{$z=ADL(e,a,l);if(C()){break _;}bb=$z;if(bb!==null&&CX(bb)>0){bc=0;while(true){if(bc>=CX(bb))break a;bd=Y(bb,bc);if(bd!==a.bH&&bd.rT()&&bd instanceof Gi)bd.u0(a);bc=bc+1|0;}}}if(a.bH!==null&&a.bH.cR)a.bH=null;return;case 7:ARF(a,x,i,g);if(C()){break _;}if(o[0].data[1]&&(K(a.d)-b|0)==o[0].data[0]&&(K(a.e)-d|0)==o[0].data[2])CT(a,a.d,a.j+o[0].data[1],a.e);else if(o[1].data[1]&&(K(a.d)-b|0)==o[1].data[0]&&(K(a.e)-d|0)==o[1].data[2])CT(a,
a.d,a.j+o[1].data[1],a.e);if(a.bH===null){a.g=a.g*0.9599999785423279;a.i=a.i*0.0;a.h=a.h*0.9599999785423279;}else{a.g=a.g*0.996999979019165;a.i=a.i*0.0;a.h=a.h*0.996999979019165;}i=a.d;j=a.j;k=a.e;$p=8;case 8:$z=ASl(a,i,j,k);if(C()){break _;}e=$z;if(e!==null&&l!==null){w=(l.z-e.z)*0.05;i=Ed(a.g*a.g+a.h*a.h);if(i>0.0){j=a.g/i;k=i+w;a.g=j*k;a.h=a.h/i*k;}CT(a,a.d,e.z,a.e);}f=K(a.d);n=K(a.e);if(!(f==b&&n==d)){i=Ed(a.g*a.g+a.h*a.h);a.g=i*(f-b|0);a.h=i*(n-d|0);}a.I=0.0;y=a.bS-a.d;z=a.bR-a.e;if(y*y+z*z>0.001){a.u=
CR(z,y)*180.0/3.141592653589793;if(a.kO)a.u=a.u+180.0;}ba=a.u-a.P;while(ba>=180.0){ba=ba-360.0;}while(ba<(-180.0)){ba=ba+360.0;}if(!(ba>=(-170.0)&&ba<170.0)){a.u=a.u+180.0;a.kO=a.kO?0:1;}WS(a,a.u,a.I);e=a.l;l=Dv(a.L,0.20000000298023224,0.0,0.20000000298023224);$p=6;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function AJY(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=K(b);g=K(c);h=K(d);i=a.l;j=g-1|0;$p=1;case 1:$z=ACx(i,f,j,h);if(C()){break _;}j=$z;L();if(j==Bg8.b)g=g+(-1)|0;i=a.l;$p=2;case 2:$z=ACx(i,f,g,h);if(C()){break _;}j=$z;if(j!=Bg8.b)return null;i=a.l;$p=3;case 3:$z=AEK(i,f,g,h);if(C()){break _;}j=$z;c=g;if(j>=2&&j<=5)c
=g+1|0;k=BlH.data[j].data;l=k[1].data[0]-k[0].data[0]|0;m=k[1].data[2]-k[0].data[2]|0;n=Ed(l*l+m*m);l=l/n;m=m/n;l=b+l*e;d=d+m*e;if(k[0].data[1]&&(K(l)-f|0)==k[0].data[0]&&(K(d)-h|0)==k[0].data[2])c=c+k[0].data[1];else if(k[1].data[1]&&(K(l)-f|0)==k[1].data[0]&&(K(d)-h|0)==k[1].data[2])c=c+k[1].data[1];$p=4;case 4:$z=ASl(a,l,c,d);if(C()){break _;}i=$z;return i;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ASl(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=K(b);f=K(c);g=K(d);h=a.l;i=f-1|0;$p=1;case 1:$z=ACx(h,e,i,g);if(C()){break _;}i=$z;L();if(i==Bg8.b)f=f+(-1)|0;h=a.l;$p=2;case 2:$z=ACx(h,e,f,g);if(C()){break _;}i=$z;if(i!=Bg8.b)return null;h
=a.l;$p=3;case 3:$z=AEK(h,e,f,g);if(C()){break _;}j=$z;c=f;k=BlH.data[j].data;l=e;m=l+0.5;n=m+k[0].data[0]*0.5;o=c+0.5;p=o+k[0].data[1]*0.5;q=g;r=q+0.5;s=r+k[0].data[2]*0.5;m=m+k[1].data[0]*0.5;t=o+k[1].data[1]*0.5;o=r+k[1].data[2]*0.5;r=m-n;u=(t-p)*2.0;v=o-s;l=r===0.0?d-q:v===0.0?b-l:((b-n)*r+(d-s)*v)*2.0;b=n+r*l;c=p+u*l;d=s+v*l;i=R(u,0.0);if(i<0)c=c+1.0;if(i>0)c=c+0.5;return BY(b,c,d);default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function A3Q(a,b){var c,d,e,f,g,h;if(b!==a.bH){c=b.d-a.d;d=b.e-a.e;e=c*c+d*d;if(e>=9.999999747378752E-5){e=Ce(e);c=c/e;f=d/e;g=1.0/e;if(g>1.0)g=1.0;c=c*g;d=f*g;c=c*0.10000000149011612;d=d*0.10000000149011612;c=c*(1.0-a.n7);d=d*(1.0-a.n7);c=c*0.5;d=d*0.5;if(!(b instanceof Gi)){Hs(a, -c,0.0, -d);Hs(b,c/4.0,0.0,d/4.0);}else{f=(b.g+a.g)/2.0;h=(b.h+a.h)/2.0;a.h=0.0;a.g=0.0;Hs(a,f-c,0.0,h-d);b.h=0.0;b.g=0.0;Hs(b,f+c,0.0,h+d);}}}}
function A09(a){return 27;}
function TV(a,b){return a.Bs.data[b];}
function A8P(a,b){Pk(b,a);return 1;}
function AMK(){var b,c,d,e,f,g;b=J($rt_arraycls($rt_arraycls($rt_intcls())),10);c=b.data;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=1;e[1]=f;c[0]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=0;g[2]=0;e[1]=f;c[1]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]
=(-1);g[1]=(-1);g[2]=0;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=0;g[2]=0;e[1]=f;c[2]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=(-1);g[2]=0;e[1]=f;c[3]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=(-1);g[2]=1;e[1]=f;c[4]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g
=f.data;g[0]=0;g[1]=(-1);g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=1;e[1]=f;c[5]=d;g=J($rt_arraycls($rt_intcls()),2);e=g.data;d=$rt_createIntArray(3);f=d.data;f[0]=0;f[1]=0;f[2]=1;e[0]=d;d=$rt_createIntArray(3);f=d.data;f[0]=1;f[1]=0;f[2]=0;e[1]=d;c[6]=g;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=1;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[1]=f;c[7]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g
=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[1]=f;c[8]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=0;g[2]=0;e[1]=f;c[9]=d;BlH=b;}
function ARA(){Dg.call(this);this.C3=null;}
function Bb7(){var a=new ARA();A$h(a);return a;}
function A$h(a){EH(a);a.mc=0.5;a.C3=Bc1();}
function AQh(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();h=b.cs;i=b.d-b.cs;j=g;k=h+i*j;l=b.b7+(b.j-b.b7)*j;i=b.ct+(b.e-b.ct)*j;h=0.30000001192092896;$p=1;case 1:$z=ASl(b,k,l,i);if(C()){break _;}m=$z;n=b.T+(b.I-b.T)*g;if(m!==null){$p=2;continue _;}Bw(c,d,e);Bv(180.0
-f,0.0,1.0,0.0);Bv( -n,0.0,0.0,1.0);o=b.kD-g;p=b.iU-g;if(p<0.0)p=0.0;if(o>0.0)Bv(Bq(o)*o*p/10.0*b.oP,1.0,0.0,0.0);b=B(179);$p=4;continue _;case 2:$z=AJY(b,k,l,i,h);if(C()){break _;}q=$z;h=(-0.30000001192092896);$p=3;case 3:$z=AJY(b,k,l,i,h);if(C()){break _;}r=$z;if(q===null)q=m;if(r===null)r=m;c=c+m.x-k;d=d+(q.z+r.z)/2.0-l;e=e+m.w-i;s=Dk(r, -q.x, -q.z, -q.w);if(HR(s)!==0.0){s=CD(s);f=CR(s.w,s.x)*180.0/3.141592653589793;n=Is(s.z)*73.0;}Bw(c,d,e);Bv(180.0-f,0.0,1.0,0.0);Bv( -n,0.0,0.0,1.0);o=b.kD-g;p=b.iU-g;if
(p<0.0)p=0.0;if(o>0.0)Bv(Bq(o)*o*p/10.0*b.oP,1.0,0.0,0.0);b=B(179);$p=4;case 4:AKs(a,b);if(C()){break _;}CC(0.75,0.75,0.75);b=Ki();L();GY(b,BgX);CC(1.3333333730697632,1.3333333730697632,1.3333333730697632);b=B(590);$p=5;case 5:AKs(a,b);if(C()){break _;}CC((-1.0),(-1.0),1.0);AKt(a.C3,0.0,0.0,(-0.10000000149011612),0.0,0.0,0.0625);BE();return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function AQg(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AQh(a,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function V9(){var a=this;D.call(a);a.u4=Long_ZERO;a.t5=0;a.zc=0;}
function BlI(){var a=new V9();AUd(a);return a;}
function AUd(a){return;}
function ABE(){var a=this;D.call(a);a.wo=null;a.wG=null;}
function BbR(){var a=new ABE();AUo(a);return a;}
function AUo(a){a.wo=BK(0,0);BG(a.wo,(-12.0),(-14.0),(-1.0),24,12,2,0.0);a.wG=BK(0,14);BG(a.wG,(-1.0),(-2.0),(-1.0),2,14,2,0.0);}
function ANb(a){Ca(a.wo,0.0625);Ca(a.wG,0.0625);}
function AH7(){var a=this;Eh.call(a);a.l0=null;a.qU=null;a.rF=null;a.kc=null;a.kb=null;a.ke=null;a.kd=null;a.kg=null;a.kf=null;a.ki=null;a.kh=null;}
function A5n(){var a=new AH7();AUO(a);return a;}
function AUO(a){a.l0=BK(32,4);BG(a.l0,(-4.0),(-4.0),(-8.0),8,8,8,0.0);BJ(a.l0,0.0,15.0,(-3.0));a.qU=BK(0,0);BG(a.qU,(-3.0),(-3.0),(-3.0),6,6,6,0.0);BJ(a.qU,0.0,15.0,0.0);a.rF=BK(0,12);BG(a.rF,(-5.0),(-4.0),(-6.0),10,8,12,0.0);BJ(a.rF,0.0,15.0,9.0);a.kc=BK(18,0);BG(a.kc,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.kc,(-4.0),15.0,2.0);a.kb=BK(18,0);BG(a.kb,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.kb,4.0,15.0,2.0);a.ke=BK(18,0);BG(a.ke,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.ke,(-4.0),15.0,1.0);a.kd=BK(18,0);BG(a.kd,(-1.0),
(-1.0),(-1.0),16,2,2,0.0);BJ(a.kd,4.0,15.0,1.0);a.kg=BK(18,0);BG(a.kg,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.kg,(-4.0),15.0,0.0);a.kf=BK(18,0);BG(a.kf,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.kf,4.0,15.0,0.0);a.ki=BK(18,0);BG(a.ki,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.ki,(-4.0),15.0,(-1.0));a.kh=BK(18,0);BG(a.kh,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.kh,4.0,15.0,(-1.0));}
function AYb(a,b,c,d,e,f,g){Yv(a,b,c,d,e,f,g);Ca(a.l0,g);Ca(a.qU,g);Ca(a.rF,g);Ca(a.kc,g);Ca(a.kb,g);Ca(a.ke,g);Ca(a.kd,g);Ca(a.kg,g);Ca(a.kf,g);Ca(a.ki,g);Ca(a.kh,g);}
function Yv(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;a.l0.bX=e/57.2957763671875;a.l0.b1=f/57.2957763671875;a.kc.bU=(-0.7853981852531433);a.kb.bU=0.7853981852531433;a.ke.bU=(-0.5811946392059326);a.kd.bU=0.5811946392059326;a.kg.bU=(-0.5811946392059326);a.kf.bU=0.5811946392059326;a.ki.bU=(-0.7853981852531433);a.kh.bU=0.7853981852531433;a.kc.bX=0.7853981852531433;a.kb.bX=(-0.7853981852531433);a.ke.bX=0.39269909262657166;a.kd.bX=(-0.39269909262657166);a.kg.bX=(-0.39269909262657166);a.kf.bX=0.39269909262657166;a.ki.bX
=(-0.7853981852531433);a.kh.bX=0.7853981852531433;b=b*0.6661999821662903;f=b*2.0;h= -(BC(f+0.0)*0.4000000059604645)*c;i= -(BC(f+3.1415927410125732)*0.4000000059604645)*c;j= -(BC(f+1.5707963705062866)*0.4000000059604645)*c;k= -(BC(f+4.71238899230957)*0.4000000059604645)*c;l=HZ(Bq(b+0.0)*0.4000000059604645)*c;m=HZ(Bq(b+3.1415927410125732)*0.4000000059604645)*c;n=HZ(Bq(b+1.5707963705062866)*0.4000000059604645)*c;o=HZ(Bq(b+4.71238899230957)*0.4000000059604645)*c;p=a.kc;p.bX=p.bX+h;p=a.kb;p.bX=p.bX+ -h;p=a.ke;p.bX
=p.bX+i;p=a.kd;p.bX=p.bX+ -i;p=a.kg;p.bX=p.bX+j;p=a.kf;p.bX=p.bX+ -j;p=a.ki;p.bX=p.bX+k;p=a.kh;p.bX=p.bX+ -k;p=a.kc;p.bU=p.bU+l;p=a.kb;p.bU=p.bU+ -l;p=a.ke;p.bU=p.bU+m;p=a.kd;p.bU=p.bU+ -m;p=a.kg;p.bU=p.bU+n;p=a.kf;p.bU=p.bU+ -n;p=a.ki;p.bU=p.bU+o;p=a.kh;p.bU=p.bU+ -o;}
function AIB(){var a=this;Eh.call(a);a.l6=null;a.vv=null;a.sX=null;a.pq=null;a.pp=null;a.po=null;a.pn=null;}
function BaV(){var a=new AIB();A4$(a);return a;}
function A4$(a){a.l6=BK(0,0);BG(a.l6,(-4.0),(-8.0),(-4.0),8,8,8,0.0);BJ(a.l6,0.0,4.0,0.0);a.vv=BK(32,0);BG(a.vv,(-4.0),(-8.0),(-4.0),8,8,8,0.5);BJ(a.vv,0.0,4.0,0.0);a.sX=BK(16,16);BG(a.sX,(-4.0),0.0,(-2.0),8,12,4,0.0);BJ(a.sX,0.0,4.0,0.0);a.pq=BK(0,16);BG(a.pq,(-2.0),0.0,(-2.0),4,6,4,0.0);BJ(a.pq,(-2.0),16.0,4.0);a.pp=BK(0,16);BG(a.pp,(-2.0),0.0,(-2.0),4,6,4,0.0);BJ(a.pp,2.0,16.0,4.0);a.po=BK(0,16);BG(a.po,(-2.0),0.0,(-2.0),4,6,4,0.0);BJ(a.po,(-2.0),16.0,(-4.0));a.pn=BK(0,16);BG(a.pn,(-2.0),0.0,(-2.0),4,6,4,
0.0);BJ(a.pn,2.0,16.0,(-4.0));}
function A24(a,b,c,d,e,f,g){Zs(a,b,c,d,e,f,g);Ca(a.l6,g);Ca(a.sX,g);Ca(a.pq,g);Ca(a.pp,g);Ca(a.po,g);Ca(a.pn,g);}
function Zs(a,b,c,d,e,f,g){var h;a.l6.bX=e/57.2957763671875;a.l6.b1=f/57.2957763671875;h=a.pq;b=b*0.6661999821662903;h.b1=BC(b)*1.399999976158142*c;h=a.pp;d=b+3.1415927410125732;h.b1=BC(d)*1.399999976158142*c;a.po.b1=BC(d)*1.399999976158142*c;a.pn.b1=BC(b)*1.399999976158142*c;}
function AEX(){Eh.call(this);this.cZ=null;}
function Bc1(){var a=new AEX();A32(a);return a;}
function A32(a){a.cZ=J(QJ,7);a.cZ.data[0]=BK(0,10);a.cZ.data[1]=BK(0,0);a.cZ.data[2]=BK(0,0);a.cZ.data[3]=BK(0,0);a.cZ.data[4]=BK(0,0);a.cZ.data[5]=BK(44,10);BG(a.cZ.data[0],(-10.0),(-8.0),(-1.0),20,16,2,0.0);BJ(a.cZ.data[0],0.0,4.0,0.0);BG(a.cZ.data[5],(-9.0),(-7.0),(-1.0),18,14,1,0.0);BJ(a.cZ.data[5],0.0,4.0,0.0);BG(a.cZ.data[1],(-8.0),(-9.0),(-1.0),16,8,2,0.0);BJ(a.cZ.data[1],(-9.0),4.0,0.0);BG(a.cZ.data[2],(-8.0),(-9.0),(-1.0),16,8,2,0.0);BJ(a.cZ.data[2],9.0,4.0,0.0);BG(a.cZ.data[3],(-8.0),(-9.0),(-1.0),
16,8,2,0.0);BJ(a.cZ.data[3],0.0,4.0,(-7.0));BG(a.cZ.data[4],(-8.0),(-9.0),(-1.0),16,8,2,0.0);BJ(a.cZ.data[4],0.0,4.0,7.0);a.cZ.data[0].b1=1.5707963705062866;a.cZ.data[1].bX=4.71238899230957;a.cZ.data[2].bX=1.5707963705062866;a.cZ.data[3].bX=3.1415927410125732;a.cZ.data[5].b1=(-1.5707963705062866);}
function AKt(a,b,c,d,e,f,g){var h;a.cZ.data[5].m5=4.0-d;h=0;while(h<6){Ca(a.cZ.data[h],g);h=h+1|0;}}
function Ty(){var a=this;D.call(a);a.lK=0;a.yp=0;a.su=0;a.nj=0;a.ld=null;}
function KC(a){return a.lK>=a.su?0:1;}
function KT(a){var b,c;PJ(a);a.nj=a.lK;b=a.ld;c=a.lK;a.lK=c+1|0;return Y(b,c);}
function AMc(a){var b;if(a.nj<0){b=new D2;O(b);M(b);}PJ(a);En(a.ld,a.nj);a.yp=a.ld.d7;if(a.nj<a.lK)a.lK=a.lK-1|0;a.su=a.su-1|0;a.nj=(-1);}
function PJ(a){var b;if(a.yp>=a.ld.d7)return;b=new KS;O(b);M(b);}
function I7(){var a=this;D.call(a);a.g4=null;a.tw=0;a.cE=null;a.gi=null;a.hG=null;a.jz=null;a.fv=null;a.q3=0;a.fY=0;a.fV=0;a.iX=null;a.dN=null;a.hh=0;a.e9=0;a.qd=0;a.En=0;a.sc=0;a.nq=Long_ZERO;}
var Bkq=0;function BaL(a,b,c){var d=new I7();ARb(d,a,b,c);return d;}
function A9s(a,b,c,d){var e=new I7();A1y(e,a,b,c,d);return e;}
function ARb(a,b,c,d){var e;a.iX=De();a.dN=J(J4,8);a.hh=0;a.e9=0;a.En=0;a.sc=0;a.nq=Long_ZERO;a.cE=b;a.fY=c;a.fV=d;a.fv=$rt_createByteArray(256);e=0;while(e<a.dN.data.length){a.dN.data[e]=Ci();e=e+1|0;}}
function A1y(a,b,c,d,e){var f;f=c.data;ARb(a,b,d,e);a.g4=c;b=new T_;d=f.length;AJC(b,d);a.gi=b;a.hG=Lu(d);a.jz=Lu(d);}
function ARH(a,b,c){return b==a.fY&&c==a.fV?1:0;}
function UN(a,b,c){return a.fv.data[c<<4|b]&255;}
function A5I(a){return;}
function ALH(a,b,c){var d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=UN(a,b,c);e=(a.fY*16|0)+b|0;f=(a.fV*16|0)+c|0;b=e-1|0;$p=1;case 1:AJJ(a,b,f,d);if(C()){break _;}b=e+1|0;$p=2;case 2:AJJ(a,b,f,d);if(C()){break _;}b=f-1|0;$p=3;case 3:AJJ(a,e,b,d);if(C()){break _;}b=f+1|0;$p=4;case 4:AJJ(a,e,b,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function Si(a){var b,c,d,e,f;b=127;c=0;while(c<16){d=0;while(d<16){e=127;f=c<<11|d<<7;while(e>0){L();if(BgB.data[a.g4.data[(f+e|0)-1|0]])break;e=e+(-1)|0;}a.fv.data[d<<4|c]=e<<24>>24;if(e<b)b=e;d=d+1|0;}c=c+1|0;}a.q3=b;a.e9=1;}
function AJJ(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.cE;$p=1;case 1:$z=ALI(e,b,c);if(C()){break _;}f=$z;g=R(f,d);if(g>0)DT(a.cE,Bkx,b,d,c,b,f,c);else if(g<0)DT(a.cE,Bkx,b,f,c,b,d,c);a.e9=1;return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function Fs(a,b,c,d){var e,f,g,h,i,j,k,l;e=a.fv.data;f=d<<4|b;g=e[f]&255;if(c<=g)c=g;while(c>0){L();if(BgB.data[FR(a,b,c-1|0,d)])break;c=c+(-1)|0;}h=R(c,g);if(h){APK(a.cE,b,d,c,g);a.fv.data[f]=c<<24>>24;if(c<a.q3)a.q3=c;else{f=127;i=0;while(i<16){j=0;while(j<16){e=a.fv.data;k=j<<4|i;if((e[k]&255)<f)f=a.fv.data[k]&255;j=j+1|0;}i=i+1|0;}a.q3=f;}a:{f=(a.fY*16|0)+b|0;i=(a.fV*16|0)+d|0;if(h<0){j=c;while(true){if(j>=g)break a;Ek(a.hG,b,j,d,15);j=j+1|0;}}DT(a.cE,Bkx,f,g,i,f,c,i);while(true){if(g>=c)break a;Ek(a.hG,
b,g,d,0);g=g+1|0;}}j=15;k=c;b:{while(k>0){if(j<=0)break b;k=k+(-1)|0;L();l=BgB.data[FR(a,b,k,d)];if(!l)l=1;j=j-l|0;if(j<0)j=0;Ek(a.hG,b,k,d,j);}}while(k>0){L();if(BgB.data[FR(a,b,k-1|0,d)])break;k=k+(-1)|0;}if(k!=c)DT(a.cE,Bkx,f-1|0,k,i-1|0,f+1|0,c,i+1|0);a.e9=1;}}
function FR(a,b,c,d){return a.g4.data[b<<11|d<<7|c];}
function ADF(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=e<<24>>24;h=a.fv.data[d<<4|b]&255;i=a.g4.data;j=b<<11|d<<7|c;k=i[j]&255;if(k==e&&G7(a.gi,b,c,d)==f)return 0;l=(a.fY*16|0)+b|0;m=(a.fV*16|0)+d|0;a.g4.data[j]=g;if(k){L();n=BeP.data[k];o=a.cE;$p=1;continue _;}Ek(a.gi,b,c,d,f);L();if(!BgB.data[g]){if(c==(h
-1|0))Fs(a,b,c,d);}else if(c>=h)Fs(a,b,c+1|0,d);DT(a.cE,Bkx,l,c,m,l,c,m);DT(a.cE,Bky,l,c,m,l,c,m);$p=2;continue _;case 1:n.lB(o,l,c,m);if(C()){break _;}Ek(a.gi,b,c,d,f);L();if(!BgB.data[g]){if(c==(h-1|0))Fs(a,b,c,d);}else if(c>=h)Fs(a,b,c+1|0,d);DT(a.cE,Bkx,l,c,m,l,c,m);DT(a.cE,Bky,l,c,m,l,c,m);$p=2;case 2:ALH(a,b,d);if(C()){break _;}Ek(a.gi,b,c,d,f);if(!e){a.e9=1;return 1;}n=BeP.data[e];o=a.cE;$p=3;case 3:n.fE(o,l,c,m);if(C()){break _;}a.e9=1;return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function ADC(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=e<<24>>24;g=a.fv.data[d<<4|b]&255;h=a.g4.data;i=b<<11|d<<7|c;j=h[i]&255;if(j==e)return 0;k=(a.fY*16|0)+b|0;l=(a.fV*16|0)+d|0;a.g4.data[i]=f;if(j){L();m=BeP.data[j];n=a.cE;$p=1;continue _;}Ek(a.gi,b,c,d,0);L();if(!BgB.data[f]){if(c==(g-1|0))Fs(a,b,c,d);}else if(c>=
g)Fs(a,b,c+1|0,d);DT(a.cE,Bkx,k,c,l,k,c,l);DT(a.cE,Bky,k,c,l,k,c,l);$p=2;continue _;case 1:m.lB(n,k,c,l);if(C()){break _;}Ek(a.gi,b,c,d,0);L();if(!BgB.data[f]){if(c==(g-1|0))Fs(a,b,c,d);}else if(c>=g)Fs(a,b,c+1|0,d);DT(a.cE,Bkx,k,c,l,k,c,l);DT(a.cE,Bky,k,c,l,k,c,l);$p=2;case 2:ALH(a,b,d);if(C()){break _;}if(!e){a.e9=1;return 1;}m=BeP.data[e];n=a.cE;$p=3;case 3:m.fE(n,k,c,l);if(C()){break _;}a.e9=1;return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function RV(a,b,c,d){return G7(a.gi,b,c,d);}
function AAw(a,b,c,d,e){a.e9=1;Ek(a.gi,b,c,d,e);}
function ACm(a,b,c,d,e){return b===Bkx?G7(a.hG,c,d,e):b!==Bky?0:G7(a.jz,c,d,e);}
function AQN(a,b,c,d,e,f){a.e9=1;if(b===Bkx)Ek(a.hG,c,d,e,f);else{if(b!==Bky)return;Ek(a.jz,c,d,e,f);}}
function VR(a,b,c,d,e){var f,g;f=G7(a.hG,b,c,d);if(f>0)Bkq=1;e=f-e|0;g=G7(a.jz,b,c,d);if(g<=e)g=e;return g;}
function VU(a,b){var c,d,e,f,g;a.sc=1;c=K(b.d/16.0);d=K(b.e/16.0);if(!(c==a.fY&&d==a.fV)){e=Dz();f=new S;V(f);Cg(e,T(FO(H(f,B(591)),b)));}g=K(b.j/16.0);if(g<0)g=0;if(g>=a.dN.data.length)g=a.dN.data.length-1|0;U(a.dN.data[g],b);}
function AM2(a,b){R4(a,b,K(b.j/16.0));}
function R4(a,b,c){var d,e;if(c<0)c=0;if(c>=a.dN.data.length)c=a.dN.data.length-1|0;if(!Q8(a.dN.data[c],b)){d=Dz();e=new S;V(e);Cg(d,T(FO(H(e,B(592)),b)));}H_(a.dN.data[c],b);}
function Po(a,b,c,d){return c<(a.fv.data[d<<4|b]&255)?0:1;}
function ANq(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=(b+(c*1024|0)|0)+((d*1024|0)*1024|0)|0;f=CP(a.iX,CY(e));if(f!==null)return f;g=FR(a,b,c,d);L();h=BeP.data[g];f=a.cE;b=(a.fY*16|0)+b|0;d=(a.fV*16|0)+d|0;$p=1;case 1:h.fE(f,b,c,d);if(C()){break _;}return CP(a.iX,CY(e));default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AJl(a,b,c,d,e){var f;a:{f=(b+(c*1024|0)|0)+((d*1024|0)*1024|0)|0;e.ch=a.cE;e.dK=(a.fY*16|0)+b|0;e.dI=c;e.dR=(a.fV*16|0)+d|0;if(FR(a,b,c,d)){L();if(BeP.data[FR(a,b,c,d)] instanceof Eg){if(a.tw){if(CP(a.iX,CY(f))!==null)H_(a.cE.fD,CP(a.iX,CY(f)));U(a.cE.fD,e);}BQ(a.iX,CY(f),e);break a;}}Cg(Dz(),B(593));}}
function AD0(a,b,c,d){var e;e=(b+(c*1024|0)|0)+((d*1024|0)*1024|0)|0;if(a.tw)H_(a.cE.fD,Q9(a.iX,CY(e)));}
function MF(a){var b;a.tw=1;DF(a.cE.fD,It(a.iX));b=0;while(b<a.dN.data.length){AQe(a.cE,a.dN.data[b]);b=b+1|0;}}
function AOP(a){var b;a.tw=0;Gf(a.cE.fD,It(a.iX));b=0;while(b<a.dN.data.length){AQ4(a.cE,a.dN.data[b]);b=b+1|0;}}
function SN(a){a.e9=1;}
function AJ1(a,b,c,d){var e,f,g,h,i;e=K((c.M-2.0)/16.0);f=K((c.U+2.0)/16.0);if(e<0)e=0;if(f>=a.dN.data.length)f=a.dN.data.length-1|0;while(e<=f){g=a.dN.data[e];h=0;while(h<g.s){i=Y(g,h);if(i!==b&&L6(i.L,c))U(d,i);h=h+1|0;}e=e+1|0;}}
function AMl(a,b,c,d){var e,f,g,h,i;e=K((c.M-2.0)/16.0);f=K((c.U+2.0)/16.0);if(e<0)e=0;if(f>=a.dN.data.length)f=a.dN.data.length-1|0;while(e<=f){g=a.dN.data[e];h=0;while(h<g.s){i=Y(g,h);if(P8(b,Dl(i))&&L6(i.L,c))U(d,i);h=h+1|0;}e=e+1|0;}}
function Kn(a,b){return a.qd?0:a.sc&&Long_ne(a.cE.dU,a.nq)?1:a.e9;}
function Iu(){var a=this;D.call(a);a.jo=0;a.ix=0;a.kz=null;a.x3=null;}
function BlJ(a,b,c,d,e,f,g){var h=new Iu();AEv(h,a,b,c,d,e,f,g);return h;}
function AEv(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.x3=b;a.jo=c>>4;a.ix=e>>4;i=f>>4;j=h>>4;a.kz=$rt_createMultiArray($rt_arraycls($rt_arraycls(I7)),[(j-a.ix|0)+1|0,(i-a.jo|0)+1|0]);k=a.jo;while(k<=i){l=a.ix;if(l<=j){m=a.kz.data[k-a.jo|0].data;c=l-a.ix|0;$p=1;continue _;}k=k+1|0;}return;case 1:$z=ZV(b,k,l);if(C()){break _;}n
=$z;m[c]=n;l=l+1|0;while(true){if(l<=j){m=a.kz.data[k-a.jo|0].data;c=l-a.ix|0;continue _;}k=k+1|0;if(k>i)break;l=a.ix;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function HB(a,b,c,d){var e,f;if(c<0)return 0;if(c>=128)return 0;e=(b>>4)-a.jo|0;f=(d>>4)-a.ix|0;return FR(a.kz.data[e].data[f],b&15,c,d&15);}
function AFV(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=(b>>4)-a.jo|0;f=(d>>4)-a.ix|0;g=a.kz.data[e].data[f];e=b&15;b=d&15;$p=1;case 1:$z=ANq(g,e,c,b);if(C()){break _;}g=$z;return g;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AAP(a,b,c,d){return Bkt.data[Z7(a,b,c,d)];}
function Z7(a,b,c,d){return GU(a,b,c,d,1);}
function GU(a,b,c,d,e){var f,g,h,i,j,k,l,m,n;if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){a:{if(e){f=HB(a,b,c,d);L();if(f==BeU.b)break a;if(f==Bg3.b)break a;}if(c<0)return 0;if(c>=128){g=15-a.x3.gf|0;if(g<0)g=0;return g;}h=(b>>4)-a.jo|0;i=(d>>4)-a.ix|0;return VR(a.kz.data[h].data[i],b&15,c,d&15,a.x3.gf);}j=GU(a,b,c+1|0,d,0);k=GU(a,b+1|0,c,d,0);l=GU(a,b-1|0,c,d,0);m=GU(a,b,c,d+1|0,0);n=GU(a,b,c,d-1|0,0);if(k<=j)k=j;if(l<=k)l=k;if(m<=l)m=l;if(n<=m)n=m;return n;}return 15;}
function AC6(a,b,c,d){var e,f;if(c<0)return 0;if(c>=128)return 0;e=(b>>4)-a.jo|0;f=(d>>4)-a.ix|0;return RV(a.kz.data[e].data[f],b&15,c,d&15);}
function N7(a,b,c,d){var e,f;e=HB(a,b,c,d);if(!e)f=Bf_;else{L();f=BeP.data[e].b_;}return f;}
function AB7(a,b,c,d){var e;L();e=BeP.data[HB(a,b,c,d)];return e!==null?e.d5():0;}
function Gl(){BD.call(this);}
function BlK(){var a=new Gl();A$f(a);return a;}
function A$f(a){O(a);}
function UW(){Gl.call(this);}
function BlL(){var a=new UW();A6M(a);return a;}
function A6M(a){O(a);}
function Vf(){D.call(this);}
var BlM=null;function BlN(){var a=new Vf();AO8(a);return a;}
function AO8(a){return;}
function AIJ(){var b,c;b=$rt_createIntArray(12);c=b.data;c[0]=1;c[1]=4;c[2]=2;c[3]=1024;c[4]=8;c[5]=16;c[6]=128;c[7]=64;c[8]=32;c[9]=256;c[10]=2048;c[11]=512;BlM=b;}
function PN(){Go.call(this);this.wg=null;}
function A0q(a,b){return AEd(a.wg,b);}
function Nj(a){var b;b=new Vc;VC(b,a.wg);return b;}
function Tv(){D.call(this);this.Jm=null;}
function AOx(a){Bd();BdF.requestPointerLock();MY(0);}
function A_x(a){AOx(a);}
function AQH(){D.call(this);}
function BlO(){var a=new AQH();A4b(a);return a;}
function A4b(a){return;}
function WX(){var a=this;D$.call(a);a.cu=null;a.gZ=0;a.pV=0;a.kX=0;}
function BaC(){var a=new WX();AVc(a);return a;}
function AVc(a){a.cu=J(Cd,3);a.gZ=0;a.pV=0;a.kX=0;}
function A9p(a,b){return a.cu.data[b];}
function A8i(a,b,c){var d;if(a.cu.data[b]===null)return null;if(a.cu.data[b].p<=c){d=a.cu.data[b];a.cu.data[b]=null;return d;}d=EF(a.cu.data[b],c);if(!a.cu.data[b].p)a.cu.data[b]=null;return d;}
function AVt(a,b,c){a.cu.data[b]=c;if(c!==null&&c.p>64)c.p=64;}
function AT7(a){return 64;}
function AON(a,b){return Bj(a.kX,b)/200|0;}
function ADK(a,b){if(!a.pV)a.pV=200;return Bj(a.gZ,b)/a.pV|0;}
function WN(a){return a.gZ<=0?0:1;}
function AGG(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.gZ<=0?0:1;c=0;if(a.gZ>0){a.gZ=a.gZ-1|0;c=1;}if(!a.gZ&&Ol(a)){d=a.cu.data[1];if(d===null)e=0;else a:{f=DL(d).cW;if(f<256){L();if(BeP.data[f].b_===Bha){e=300;break a;}}BB();e=f==Bh5.cW?100:f!=BhA.cW?0:1600;}a.gZ=e;a.pV=e;if(a.gZ>0){c=1;if(a.cu.data[1]!==null){d=a.cu.data[1];d.p=d.p-1|0;if(!a.cu.data[1].p)a.cu.data[1]
=null;}}}if(WN(a)&&Ol(a)){a.kX=a.kX+1|0;if(a.kX==200){a.kX=0;ADy(a);c=1;}}else a.kX=0;if(b==(a.gZ<=0?0:1)){if(!c)return;d=a.ch;e=a.dK;b=a.dI;c=a.dR;$p=1;continue _;}c=1;b=a.gZ<=0?0:1;g=a.ch;f=a.dK;h=a.dI;i=a.dR;$p=2;continue _;case 1:AGu(d,e,b,c);if(C()){break _;}return;case 2:$z=AEK(g,f,h,i);if(C()){break _;}e=$z;$p=3;case 3:$z=ANz(g,f,h,i);if(C()){break _;}j=$z;if(!b){L();b=Bg4.b;$p=4;continue _;}L();b=Bg5.b;$p=5;continue _;case 4:APy(g,f,h,i,b);if(C()){break _;}$p=6;continue _;case 5:APy(g,f,h,i,b);if(C())
{break _;}$p=6;case 6:AKw(g,f,h,i,e);if(C()){break _;}$p=7;case 7:AFU(g,f,h,i,j);if(C()){break _;}if(!c)return;d=a.ch;e=a.dK;b=a.dI;c=a.dR;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function Ol(a){var b,c;if(a.cu.data[0]===null)return 0;b=UZ(a,DL(a.cu.data[0]).cW);if(b<0)b=0;else if(a.cu.data[2]===null)b=1;else if(a.cu.data[2].bA!=b)b=0;else if(a.cu.data[2].p<64&&a.cu.data[2].p<EB(a.cu.data[2]))b=1;else{c=a.cu.data[2].p;BB();b=c>=Bhe.data[b].eZ?0:1;}return b;}
function ADy(a){var b,c;if(Ol(a)){b=UZ(a,DL(a.cu.data[0]).cW);if(a.cu.data[2]===null)a.cu.data[2]=Kz(b,1);else if(a.cu.data[2].bA==b){c=a.cu.data[2];c.p=c.p+1|0;}c=a.cu.data[0];c.p=c.p-1|0;if(a.cu.data[0].p<=0)a.cu.data[0]=null;}}
function UZ(a,b){L();if(b==Bff.b){BB();b=BhQ.cW;}else if(b==Bfg.b){BB();b=BhR.cW;}else if(b==BgZ.b){BB();b=BhB.cW;}else if(b==Bfa.b)b=Be5.b;else{BB();b=b==Bgg.cW?BiA.cW:b!=BeZ.b?(-1):BeV.b;}return b;}
function Z5(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.ch;c=a.dK;d=a.dI;e=a.dR;$p=1;case 1:AGu(b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function Th(){D$.call(this);this.h0=null;}
function Bbg(){var a=new Th();A19(a);return a;}
function A19(a){a.h0=J(Cd,36);}
function AVN(a){return 27;}
function Rd(a,b){return a.h0.data[b];}
function A1T(a,b,c){var d;if(a.h0.data[b]===null)return null;if(a.h0.data[b].p<=c){d=a.h0.data[b];a.h0.data[b]=null;return d;}d=EF(a.h0.data[b],c);if(!a.h0.data[b].p)a.h0.data[b]=null;return d;}
function AHA(a,b,c){a.h0.data[b]=c;if(c!==null&&c.p>64)c.p=64;}
function A8B(a){return B(263);}
function A7l(a){return 64;}
function CQ(){D.call(this);this.gq=null;}
function BlP(){var a=new CQ();Cw(a);return a;}
function Cw(a){a.gq=null;}
function VL(a){return a.gq!==null?a.gq:B(3);}
function AXF(a,b){a.gq=b;return a;}
function MX(b){var c,d;c=N2(b);if(!c){b=new N3;Cw(b);return b;}d=AE6(c);d.gq=GW(b);d.gF(b);return d;}
function R1(b,c){KK(c,b.fd());if(b.fd()){Xr(c,VL(b));b.gN(c);}}
function AE6(b){var c;switch(b){case 0:c=new N3;Cw(c);return c;case 1:c=new Mw;Cw(c);return c;case 2:c=new MZ;Cw(c);return c;case 3:c=new Li;Cw(c);return c;case 4:c=new Oc;Cw(c);return c;case 5:c=new Pj;Cw(c);return c;case 6:c=new Mp;Cw(c);return c;case 7:c=new MI;Cw(c);return c;case 8:c=new OH;Cw(c);return c;case 9:return L9();case 10:return Ha();default:}return null;}
function APQ(){CQ.call(this);this.cL=null;}
function Ha(){var a=new APQ();A8K(a);return a;}
function A8K(a){Cw(a);a.cL=De();}
function A7c(a,b){var c;c=Nj(It(a.cL));while(Gb(c)){R1(Me(c),b);}KK(b,0);}
function A9j(a,b){var c;Va(a.cL);while(true){c=MX(b);if(!c.fd())break;BQ(a.cL,VL(c),c);}}
function A7a(a){return 10;}
function HH(a,b,c){var d;d=a.cL;c.gq=b;BQ(d,b,c);}
function JL(a,b,c){var d,e;d=a.cL;e=new Mw;Cw(e);e.tu=c;e.gq=b;BQ(d,b,e);}
function Ft(a,b,c){var d,e;d=a.cL;e=new MZ;Cw(e);e.to=c;e.gq=b;BQ(d,b,e);}
function GA(a,b,c){var d,e;d=a.cL;e=new Li;Cw(e);e.r9=c;e.gq=b;BQ(d,b,e);}
function Id(a,b,c){var d,e;d=a.cL;e=new Oc;Cw(e);e.s3=c;e.gq=b;BQ(d,b,e);}
function AR8(a,b,c){var d,e;d=a.cL;e=A6R(c);e.gq=b;BQ(d,b,e);}
function IR(a,b,c){var d,e;d=a.cL;e=new MI;Cw(e);e.mo=c;e.gq=b;BQ(d,b,e);}
function ANV(a,b,c){var d;d=a.cL;c.gq=b;BQ(d,b,c);}
function S2(a,b,c){JL(a,b,(!c?0:1)<<24>>24);}
function Y1(a,b){return DZ(a.cL,b);}
function LB(a,b){return !DZ(a.cL,b)?0:CP(a.cL,b).tu;}
function FL(a,b){return !DZ(a.cL,b)?0:CP(a.cL,b).to;}
function FW(a,b){return !DZ(a.cL,b)?0:CP(a.cL,b).r9;}
function Mc(a,b){return !DZ(a.cL,b)?Long_ZERO:CP(a.cL,b).s3;}
function AMH(a,b){return !DZ(a.cL,b)?0.0:CP(a.cL,b).nm;}
function IJ(a,b){return !DZ(a.cL,b)?$rt_createByteArray(0):CP(a.cL,b).mo;}
function My(a,b){return !DZ(a.cL,b)?Ha():CP(a.cL,b);}
function Kh(a,b){return !DZ(a.cL,b)?L9():CP(a.cL,b);}
function Uu(a,b){return !LB(a,b)?0:1;}
function P5(){B6.call(this);}
function BlQ(){var a=new P5();A$7(a);return a;}
function A$7(a){O(a);}
function SL(){B6.call(this);}
function BlR(){var a=new SL();AYO(a);return a;}
function AYO(a){O(a);}
function R0(){G0.call(this);this.Bx=0;}
function AVR(a){var b;b=new S;V(b);return T(Be(H(b,B(594)),a.Bx));}
function P1(){G0.call(this);this.EO=0;}
function AVk(a){var b;b=new S;V(b);return T(Be(H(b,B(595)),a.EO));}
function IO(){var a=this;D.call(a);a.l8=0;a.rn=0;a.lF=null;a.hm=null;a.ss=null;a.iv=null;}
function BlS(a){var b=new IO();VC(b,a);return b;}
function VC(a,b){a.iv=b;a.rn=b.g$;a.lF=null;}
function Gb(a){if(a.lF!==null)return 1;while(a.l8<a.iv.cO.data.length){if(a.iv.cO.data[a.l8]!==null)return 1;a.l8=a.l8+1|0;}return 0;}
function Uy(a){var b;if(a.rn==a.iv.g$)return;b=new KS;O(b);M(b);}
function Wc(a){var b,c,d;Uy(a);if(!Gb(a)){b=new J1;O(b);M(b);}if(a.lF===null){c=a.iv.cO.data;d=a.l8;a.l8=d+1|0;a.hm=c[d];a.lF=a.hm.eE;a.ss=null;}else{if(a.hm!==null)a.ss=a.hm;a.hm=a.lF;a.lF=a.lF.eE;}}
function ADR(a){var b,c;Uy(a);if(a.hm===null){b=new D2;O(b);M(b);}if(a.ss!==null)a.ss.eE=a.hm.eE;else{c=a.hm.pW&(a.iv.cO.data.length-1|0);a.iv.cO.data[c]=a.iv.cO.data[c].eE;}a.hm=null;a.rn=a.rn+1|0;b=a.iv;b.g$=b.g$+1|0;b=a.iv;b.f8=b.f8-1|0;}
function Vc(){IO.call(this);}
function Me(a){Wc(a);return a.hm.e6;}
function Wu(){var a=this;D.call(a);a.Ao=null;a.Ey=null;a.wd=0;a.qK=0;}
function NQ(a){return Fl(a.Ao);}
function AJp(a,b){return Ct(a.Ey)<b?0:1;}
function A$C(a,b){a.wd=b;}
function A9h(a,b){a.qK=b;}
function AEA(){var a=this;CS.call(a);a.o_=null;a.yK=null;a.lQ=null;}
function AIO(a,b){var c=new AEA();A1A(c,a,b);return c;}
function A1A(a,b,c){DQ(a);a.yK=B(596);a.o_=b;a.lQ=c;}
function AR1(a){var b,c,d;b=0;while(b<a.lQ.zR){c=a.bG;d=Sk(b,((a.bm/2|0)-155|0)+((b%2|0)*160|0)|0,(a.bC/6|0)+(24*(b>>1)|0)|0,QZ(a.lQ,b));U(c,d);if(a.J.o.du&&!(b!=5&&b!=6&&b!=9))d.gC=0;b=b+1|0;}U(a.bG,Dj(100,(a.bm/2|0)-100|0,((a.bC/6|0)+120|0)+22|0,B(597)));U(a.bG,Dj(200,(a.bm/2|0)-100|0,(a.bC/6|0)+168|0,B(598)));}
function ADX(a,b){var c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.gC){if(b.cl<100){Ea(a.lQ,b.cl,1);b.kp=QZ(a.lQ,b.cl);if(b.cl==10){c=a.J;d=AIO(a.o_,a.J.o);$p=2;continue _;}}if(b.cl==100){c=a.J;d=new NR;e=a.lQ;DQ(d);d.uh=B(599);d.jw=(-1);d.uE=a;d.iQ=e;$p=1;continue _;}if(b.cl==200){b=a.J;c=a.o_;$p=3;continue _;}}return;case 1:ADV(c,d);if(C()){break _;}if(b.cl!=200)return;b=a.J;c=a.o_;$p=3;continue _;case 2:ADV(c,d);if(C())
{break _;}if(b.cl!=100){if(b.cl!=200)return;b=a.J;c=a.o_;$p=3;continue _;}c=a.J;d=new NR;e=a.lQ;DQ(d);d.uh=B(599);d.jw=(-1);d.uE=a;d.iQ=e;$p=1;continue _;case 3:ADV(b,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AGc(a,b,c,d){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABh(a);if(C()){break _;}DG(a,a.bZ,a.yK,a.bm/2|0,20,16777215);$p=2;case 2:AFE(a,b,c,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function OA(){var a=this;CS.call(a);a.rA=null;a.yy=null;a.xH=0;}
function A$X(a){var b=new OA();AEg(b,a);return b;}
function AEg(a,b){DQ(a);a.yy=B(600);a.xH=0;a.rA=b;}
function APw(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;if(b>=5){a.s$();return;}c=new S;V(c);c=H(c,B(601));d=b+1|0;c=T(Be(c,d));$p=1;case 1:$z=ASd(c);if(C()){break _;}c=$z;if(c!==null){c=new S;V(c);e=T(Be(H(c,B(602)),d));c=new S;V(c);f=T(H(Be(H(c,B(601)),d),B(355)));Bd();c=BeF;$p=2;continue _;}U(a.bG,Dj(b,(a.bm/2|0)-100|0,(a.bC/6|0)+(24*b|0)|0,B(603)));b=d;if(b>=5){a.s$();return;}c=new S;V(c);c
=H(c,B(601));d=b+1|0;c=T(Be(c,d));continue _;case 2:$z=A_K(c,f);if(C()){break _;}c=$z;g=c===null?(-1):c.byteLength;c=new S;V(c);f=T(H(AKq(H(H(c,e),B(604)),g/100.0),B(605)));U(a.bG,Dj(b,(a.bm/2|0)-100|0,(a.bC/6|0)+(24*b|0)|0,f));b=d;if(b>=5){a.s$();return;}c=new S;V(c);c=H(c,B(601));d=b+1|0;c=T(Be(c,d));$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ANu(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=new S;V(c);c=T(Be(H(c,B(601)),b));$p=1;case 1:$z=ASd(c);if(C()){break _;}c=$z;if(c===null)c=null;else{c=new S;V(c);c=T(Be(H(c,B(601)),b));}return c;default:E$();}}C3().s(a,b,c,$p);}
function AXC(a){U(a.bG,Dj(5,(a.bm/2|0)-100|0,((a.bC/6|0)+120|0)+12|0,B(606)));U(a.bG,Dj(6,(a.bm/2|0)-100|0,(a.bC/6|0)+168|0,B(607)));}
function ASy(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.gC){if(b.cl<5){c=b.cl+1|0;$p=1;continue _;}if(b.cl==5){b=a.J;d=new U1;AEg(d,a);d.yy=B(608);$p=2;continue _;}if(b.cl==6){b=a.J;d=a.rA;$p=3;continue _;}}return;case 1:a.IT(c);if(C()){break _;}return;case 2:ADV(b,d);if(C()){break _;}return;case 3:ADV(b,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function AKO(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.J;d=null;$p=1;case 1:ADV(c,d);if(C()){break _;}if(a.xH)return;a.xH=1;d=a.J;c=new S;V(c);c=T(Be(H(c,B(601)),b));$p=2;case 2:AHX(d,c);if(C()){break _;}d=a.J;c=null;$p=3;case 3:ADV(d,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function AED(a,b,c,d){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABh(a);if(C()){break _;}DG(a,a.bZ,a.yy,a.bm/2|0,20,16777215);$p=2;case 2:AFE(a,b,c,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function LY(){Gl.call(this);}
function BlT(){var a=new LY();A6$(a);return a;}
function A6$(a){O(a);}
function Tc(){Gl.call(this);}
function BlU(){var a=new Tc();A$G(a);return a;}
function A$G(a){O(a);}
function ALw(){D.call(this);}
function BlV(){var a=new ALw();A7o(a);return a;}
function A7o(a){return;}
function AAd(){D.call(this);}
function BlW(){var a=new AAd();A8v(a);return a;}
function A8v(a){return;}
function AMk(){var a=this;D.call(a);a.n=null;a.fP=0;a.ua=null;a.ze=0;a.iu=0;a.km=0;a.dp=0;a.u3=null;}
function Bbv(){var a=new AMk();AS8(a);return a;}
function ALJ(a,b){var c,d,e,f,g,h,i,j;c=new VA;c.qV=(-1);c.sl=(-1);c.FC=a;c.EF=a.u3;c.pK=b;c.qV=0;c.sl=Bi(c.pK);d=new Wv;e=c.qV;f=c.sl;g=a.iu;h=AQW(a);i=AD6(a);d.k4=(-1);j=g+1|0;d.zC=j;d.gG=$rt_createIntArray(j*2|0);d.oT=$rt_createIntArray(i);M2(d.oT,(-1));if(h>0)d.xx=$rt_createIntArray(h);M2(d.gG,(-1));Xj(d,b,e,f);c.dC=d;return c;}
function AIS(a,b,c){var d,e,f,g,h,i;d=Ci();e=ALJ(a,b);f=0;g=0;if(!Bi(b)){h=J(B4,1);h.data[0]=B(3);return h;}while(ABa(e)){i=f+1|0;if(i>=c&&c>0)break;U(d,Ev(b,g,AG_(e)));g=AKY(e);f=i;}a:{U(d,Ev(b,g,Bi(b)));f=f+1|0;if(!c)while(true){f=f+(-1)|0;if(f<0)break;if(Bi(Y(d,f)))break a;En(d,f);}}if(f<0)f=0;return UG(d,J(B4,f));}
function AIR(a,b){return AIS(a,b,0);}
function Nb(a){return a.n.eP;}
function SZ(a,b,c,d){var e,f,g,h,i;e=Ci();f=a.fP;g=0;if(c!=a.fP)a.fP=c;a:{switch(b){case -1073741784:h=new QH;c=a.dp+1|0;a.dp=c;Hd(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new PW;c=a.dp+1|0;a.dp=c;Hd(h,c);break a;case -33554392:h=new Q7;c=a.dp+1|0;a.dp=c;Hd(h,c);break a;default:a.iu=a.iu+1|0;if(d!==null)h=Bcz(a.iu);else{h=Bb5();g=1;}if(a.iu<=(-1))break a;if(a.iu>=10)break a;a.ua.data[a.iu]=h;break a;}h=Bbu();}while(true){if(F_(a.n)&&a.n.H==(-536870788)){d=A$H(C0(a,
2),C0(a,64));while(!Eo(a.n)&&F_(a.n)&&!(a.n.H&&a.n.H!=(-536870788)&&a.n.H!=(-536870871))){Dp(d,BF(a.n));if(a.n.cH!=(-536870788))continue;BF(a.n);}i=LO(a,d);i.cb(h);}else if(a.n.cH==(-536870788)){i=IK(h);BF(a.n);}else{i=Uk(a,h);if(a.n.cH==(-536870788))BF(a.n);}if(i!==null)U(e,i);if(Eo(a.n))break;if(a.n.cH==(-536870871))break;}if(a.n.qZ==(-536870788))U(e,IK(h));if(a.fP!=f&&!g){a.fP=f;AJx(a.n,a.fP);}switch(b){case -1073741784:break;case -536870872:d=new Te;GT(d,e,h);return d;case -268435416:d=new WL;GT(d,e,h);return d;case -134217688:d
=new Vd;GT(d,e,h);return d;case -67108824:d=new Rj;GT(d,e,h);return d;case -33554392:d=new EV;GT(d,e,h);return d;default:switch(e.s){case 0:break;case 1:return Bcr(Y(e,0),h);default:return BaF(e,h);}return IK(h);}d=new K1;GT(d,e,h);return d;}
function AP1(a){var b,c,d,e,f,g;b=$rt_createIntArray(4);c=(-1);d=(-1);if(!Eo(a.n)&&F_(a.n)){e=b.data;c=BF(a.n);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=$rt_createCharArray(3);b=e.data;b[0]=c&65535;f=a.n.cH;c=f-4449|0;if(c>=0&&c<21){b[1]=f&65535;BF(a.n);f=a.n.cH;d=f-4519|0;if(d>=0&&d<28){b[2]=f&65535;BF(a.n);return A$w(e,3);}return A$w(e,2);}if(!C0(a,2))return AAh(b[0]);if(C0(a,64))return A9a(b[0]);return A4z(b[0]);}e=b.data;c=1;while(c<4&&!Eo(a.n)&&F_(a.n)){f=c+1|0;e[c]=BF(a.n);c=f;}if(c==1){f=e[0];if(!(BlX.A8(f)
==BlY?0:1))return SS(a,e[0]);}if(!C0(a,2))return Bc0(b,c);if(C0(a,64)){g=new SM;Pg(g,b,c);return g;}g=new V5;Pg(g,b,c);return g;}
function Uk(a,b){var c,d,e,f;if(F_(a.n)&&!Lh(a.n)&&Nr(a.n.H)){if(C0(a,128)){c=AP1(a);if(!Eo(a.n)&&!(a.n.cH==(-536870871)&&!(b instanceof HV))&&a.n.cH!=(-536870788)&&!F_(a.n))c=MA(a,b,c);}else if(!TQ(a.n)&&!Ww(a.n)){d=new Lg;V(d);while(!Eo(a.n)&&F_(a.n)&&!TQ(a.n)&&!Ww(a.n)&&!(!(!Lh(a.n)&&!a.n.H)&&!(!Lh(a.n)&&Nr(a.n.H))&&a.n.H!=(-536870871)&&(a.n.H&(-2147418113))!=(-2147483608)&&a.n.H!=(-536870788)&&a.n.H!=(-536870876))){e=BF(a.n);if(!Mv(e))Dx(d,e&65535);else Hm(d,Iy(e));}if(!C0(a,2))c=Bav(d);else if(C0(a,64))c
=BcX(d);else{c=new OZ;EM(c);c.pL=T(d);c.dl=Oz(d);}}else c=MA(a,b,W5(a,b));}else if(a.n.cH!=(-536870871))c=MA(a,b,W5(a,b));else{if(b instanceof HV)M(CN(B(3),a.n.eP,a.n.ii));c=IK(b);}if(!Eo(a.n)&&!(a.n.cH==(-536870871)&&!(b instanceof HV))&&a.n.cH!=(-536870788)){f=Uk(a,b);if(c instanceof D7&&!(c instanceof GF)&&!(c instanceof DW)&&!(c instanceof FX)){b=c;if(!f.d4(b.bQ)){c=new Su;F6(c,b.bQ,b.r,b.p5);c.bQ.cb(c);}}if((f.oH()&65535)!=43)c.cb(f);else c.cb(f.bQ);}else{if(c===null)return null;c.cb(b);}if((c.oH()&65535)
!=43)return c;return c.bQ;}
function MA(a,b,c){var d,e,f,g;d=a.n.cH;if(c!==null&&!(c instanceof CI)){switch(d){case -2147483606:BF(a.n);e=new S7;Ef(e,c,b,d);c.cb(BlZ);return e;case -2147483605:BF(a.n);e=new UB;Ef(e,c,b,(-2147483606));c.cb(BlZ);return e;case -2147483585:BF(a.n);e=new PP;Ef(e,c,b,(-536870849));c.cb(BlZ);return e;case -2147483525:e=new OW;f=G8(a.n);d=a.km+1|0;a.km=d;MQ(e,f,c,b,(-536870849),d);c.cb(BlZ);return e;case -1073741782:case -1073741781:BF(a.n);f=new Qx;Ef(f,c,b,d);c.cb(f);return f;case -1073741761:BF(a.n);f=new UU;Ef(f,
c,b,(-536870849));c.cb(b);return f;case -1073741701:f=new RS;e=G8(a.n);g=a.km+1|0;a.km=g;MQ(f,e,c,b,(-536870849),g);c.cb(f);return f;case -536870870:case -536870869:BF(a.n);if(c.oH()!=(-2147483602)){f=new DW;Ef(f,c,b,d);}else if(C0(a,32)){f=new Qy;Ef(f,c,b,d);}else{f=new TW;e=Up(a.fP);Ef(f,c,b,d);f.uv=e;}c.cb(f);return f;case -536870849:BF(a.n);f=new Hy;Ef(f,c,b,(-536870849));c.cb(b);return f;case -536870789:f=new G$;e=G8(a.n);g=a.km+1|0;a.km=g;MQ(f,e,c,b,(-536870849),g);c.cb(f);return f;default:}return c;}e
=null;if(c!==null)e=c;switch(d){case -2147483606:case -2147483605:BF(a.n);f=new Xw;F6(f,e,b,d);e.r=f;return f;case -2147483585:BF(a.n);c=new Sq;F6(c,e,b,(-2147483585));return c;case -2147483525:c=new Ui;QQ(c,G8(a.n),e,b,(-2147483525));return c;case -1073741782:case -1073741781:BF(a.n);f=new US;F6(f,e,b,d);e.r=f;return f;case -1073741761:BF(a.n);c=new V7;F6(c,e,b,(-1073741761));return c;case -1073741701:c=new Qi;QQ(c,G8(a.n),e,b,(-1073741701));return c;case -536870870:case -536870869:BF(a.n);f=BaW(e,b,d);e.r
=f;return f;case -536870849:BF(a.n);c=new FX;F6(c,e,b,(-536870849));return c;case -536870789:return BbX(G8(a.n),e,b,(-536870789));default:}return c;}
function W5(a,b){var c,d,e,f,g,h,i;c=null;d=b instanceof HV;while(true){a:{e=Ks(a.n);if((e&(-2147418113))==(-2147483608)){BF(a.n);f=(e&16711680)>>16;e=e&(-16711681);if(e==(-16777176))a.fP=f;else{if(e!=(-1073741784))f=a.fP;c=SZ(a,e,f,b);if(Ks(a.n)!=(-536870871))M(CN(B(3),EC(a.n),HF(a.n)));BF(a.n);}}else{b:{c:{switch(e){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:g=(e&2147483647)-48|0;if(a.iu<g)M(CN(B(3),
EC(a.n),HF(a.n)));BF(a.n);a.dp=a.dp+1|0;c=!C0(a,2)?BbC(g,a.dp):C0(a,64)?Bas(g,a.dp):BcW(g,a.dp);a.ua.data[g].wV=1;a.ze=1;break a;case -2147483583:break;case -2147483582:BF(a.n);c=A$j(0);break a;case -2147483577:BF(a.n);c=Bal();break a;case -2147483558:BF(a.n);c=new SJ;g=a.dp+1|0;a.dp=g;AQz(c,g);break a;case -2147483550:BF(a.n);c=A$j(1);break a;case -2147483526:BF(a.n);c=Bbd();break a;case -536870876:break c;case -536870866:BF(a.n);if(C0(a,32)){c=Bbn();break a;}c=BaZ(Up(a.fP));break a;case -536870821:BF(a.n);h
=0;if(Ks(a.n)==(-536870818)){h=1;BF(a.n);}c=ADH(a,h,b);if(Ks(a.n)!=(-536870819))M(CN(B(3),EC(a.n),HF(a.n)));T$(a.n,1);BF(a.n);break a;case -536870818:BF(a.n);a.dp=a.dp+1|0;if(!C0(a,8)){c=A1f();break a;}c=BcJ(Up(a.fP));break a;case 0:i=PT(a.n);if(i!==null)c=LO(a,i);else{if(Eo(a.n)){c=IK(b);break a;}c=AAh(e&65535);}BF(a.n);break a;default:break b;}BF(a.n);c=A1f();break a;}BF(a.n);a.dp=a.dp+1|0;if(C0(a,8)){if(C0(a,1)){c=Bat(a.dp);break a;}c=A_1(a.dp);break a;}if(C0(a,1)){c=BaK(a.dp);break a;}c=Ba7(a.dp);break a;}if
(e>=0&&!H5(a.n)){c=SS(a,e);BF(a.n);}else if(e==(-536870788))c=IK(b);else{if(e!=(-536870871))M(CN(!H5(a.n)?SG(e&65535):PT(a.n).gk(),EC(a.n),HF(a.n)));if(d)M(CN(B(3),EC(a.n),HF(a.n)));c=IK(b);}}}if(e!=(-16777176))break;}return c;}
function ADH(a,b,c){var d;d=LO(a,Il(a,b));d.cb(c);return d;}
function Il(a,b){var c,d,e,f,g,h,i,j,$$je;c=A$H(C0(a,2),C0(a,64));Fz(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(Eo(a.n))break a;f=a.n.cH==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(a.n.cH){case -536870874:if(d>=0)Dp(c,d);d=BF(a.n);if(a.n.cH!=(-536870874)){d=38;break d;}if(a.n.H==(-536870821)){BF(a.n);e=1;d=(-1);break d;}BF(a.n);if(g){c=Il(a,0);break d;}if(a.n.cH==(-536870819))break d;Sz(c,Il(a,0));break d;case -536870867:if(!g&&a.n.H!=(-536870819)&&a.n.H!=(-536870821)&&d>=0){BF(a.n);h=a.n.cH;if(H5(a.n))break c;if
(h<0&&a.n.H!=(-536870819)&&a.n.H!=(-536870821)&&d>=0)break c;e:{try{if(Nr(h))break e;h=h&65535;break e;}catch($$e){$$je=Bg($$e);if($$je instanceof BD){break b;}else{throw $$e;}}}try{CG(c,d,h);}catch($$e){$$je=Bg($$e);if($$je instanceof BD){break b;}else{throw $$e;}}BF(a.n);d=(-1);break d;}if(d>=0)Dp(c,d);d=45;BF(a.n);break d;case -536870821:if(d>=0){Dp(c,d);d=(-1);}BF(a.n);i=0;if(a.n.cH==(-536870818)){BF(a.n);i=1;}if(!e)AId(c,Il(a,i));else Sz(c,Il(a,i));e=0;BF(a.n);break d;case -536870819:if(d>=0)Dp(c,d);d=
93;BF(a.n);break d;case -536870818:if(d>=0)Dp(c,d);d=94;BF(a.n);break d;case 0:if(d>=0)Dp(c,d);j=a.n.k5;if(j===null)d=0;else{ASv(c,j);d=(-1);}BF(a.n);break d;default:}if(d>=0)Dp(c,d);d=BF(a.n);}g=0;}M(CN(B(3),Nb(a),a.n.ii));}M(CN(B(3),Nb(a),a.n.ii));}if(!f){if(d>=0)Dp(c,d);return c;}M(CN(B(3),Nb(a),a.n.ii-1|0));}
function SS(a,b){var c,d,e;c=Mv(b);if(C0(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return A4z(b&65535);}if(C0(a,64)&&b>128){if(c){d=new Tb;EM(d);d.dl=2;d.z_=GQ(GP(b));return d;}if(PF(b))return AYV(b&65535);if(!QW(b))return A9a(b&65535);return A6D(b&65535);}}if(!c){if(PF(b))return AYV(b&65535);if(!QW(b))return AAh(b&65535);return A6D(b&65535);}d=new EY;EM(d);d.dl=2;d.kC=b;e=Iy(b).data;d.tC=e[0];d.sh=e[1];return d;}
function LO(a,b){var c,d,e;if(!AN0(b)){if(!b.ca){if(b.nT())return AWI(b);return A1a(b);}if(!b.nT())return A6S(b);c=new MR;We(c,b);return c;}c=YX(b);d=new OK;Cz(d);d.zS=c;d.Hr=c.cj;if(!b.ca){if(b.nT())return AEo(AWI(Ka(b)),d);return AEo(A1a(Ka(b)),d);}if(!b.nT())return AEo(A6S(Ka(b)),d);c=new P9;e=new MR;We(e,Ka(b));AHk(c,e,d);return c;}
function A3x(a){return a.iu;}
function AQW(a){return a.km+1|0;}
function AD6(a){return a.dp+1|0;}
function Kd(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function C0(a,b){return (a.fP&b)!=b?0:1;}
function AS8(a){a.ua=J(DV,10);a.iu=(-1);a.km=(-1);a.dp=(-1);}
function AB0(){Lz.call(this);}
function Sk(a,b,c,d){var e=new AB0();A6G(e,a,b,c,d);return e;}
function A6G(a,b,c,d,e){SI(a,b,c,d,150,20,e);}
function NR(){var a=this;CS.call(a);a.uE=null;a.uh=null;a.iQ=null;a.jw=0;}
function AJu(a){var b;b=0;while(b<a.iQ.nf.data.length){U(a.bG,Sk(b,((a.bm/2|0)-155|0)+((b%2|0)*160|0)|0,(a.bC/6|0)+(24*(b>>1)|0)|0,K4(a.iQ,b)));b=b+1|0;}U(a.bG,Dj(200,(a.bm/2|0)-100|0,(a.bC/6|0)+168|0,B(598)));}
function AIg(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=0;while(c<a.iQ.nf.data.length){Y(a.bG,c).kp=K4(a.iQ,c);c=c+1|0;}if(b.cl!=200){a.jw=b.cl;d=new S;V(d);b.kp=T(H(H(H(d,B(580)),K4(a.iQ,b.cl)),B(581)));return;}b=a.J;d=a.uE;$p=1;case 1:ADV(b,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function ALQ(a,b,c){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.jw>=0){X5(a.iQ,a.jw,c);Y(a.bG,a.jw).kp=K4(a.iQ,a.jw);a.jw=(-1);return;}$p=1;case 1:YP(a,b,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,$p);}
function AGy(a,b,c,d){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABh(a);if(C()){break _;}DG(a,a.bZ,a.uh,a.bm/2|0,20,16777215);$p=2;case 2:AFE(a,b,c,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function U1(){OA.call(this);}
function A1R(a){U(a.bG,Dj(6,(a.bm/2|0)-100|0,(a.bC/6|0)+168|0,B(607)));}
function AMa(a,b){var c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ANu(a,b);if(C()){break _;}c=$z;if(c===null)return;d=a.J;e=new U7;f=new S;V(f);f=T(H(H(H(f,B(609)),c),B(610)));DQ(e);e.B6=a;e.BV=B(611);e.BX=f;e.yS=b;$p=2;case 2:ADV(d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AQ6(a,b,c){var d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b){$p=2;continue _;}d=a.J;e=a.rA;$p=1;case 1:ADV(d,e);if(C()){break _;}return;case 2:$z=ANu(a,c);if(C()){break _;}d=$z;e=new S;V(e);f=T(H(H(e,d),B(23)));e=B(612);d=B(613);g=Bc$.it;h=B(614);$p=3;case 3:AR4(g,e,h);if(C()){break _;}b=1;c=1;Bd();i=QX();h=BeF;$p=4;case 4:A5r(h,
f,b,c,i);if(C()){break _;}j=0;k=0;l=H0(i);while(true){if(!Fq(l)){e=H0(i);while(Fq(e)){d=Fm(e);if(d.j$){d=d.jC;$p=9;continue _;}}$p=6;continue _;}h=Fm(l);if(!h.j$)break;}h=h.jC;$p=5;case 5:AL4(h);if(C()){break _;}c=j+1|0;if((c-k|0)>=10){b=Ne(c/i.gQ*100.0)|0;m=new S;V(m);h=KJ(d,B(615),T(Be(H(m,B(3)),c)));$p=7;continue _;}j=c;while(true){if(!Fq(l)){e=H0(i);while(Fq(e)){d=Fm(e);if(d.j$){d=d.jC;$p=9;continue _;}}$p=6;continue _;}h=Fm(l);if(!h.j$)break;}h=h.jC;continue _;case 6:AL4(f);if(C()){break _;}d=a.J;e=a.rA;$p
=1;continue _;case 7:AR4(g,e,h);if(C()){break _;}$p=8;case 8:XJ(g,b);if(C()){break _;}j=c;k=c;while(true){if(!Fq(l)){e=H0(i);while(Fq(e)){d=Fm(e);if(d.j$){d=d.jC;$p=9;continue _;}}$p=6;continue _;}h=Fm(l);if(!h.j$)break;}h=h.jC;$p=5;continue _;case 9:AL4(d);if(C()){break _;}while(Fq(e)){d=Fm(e);if(!d.j$)continue;else{d=d.jC;continue _;}}$p=6;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function NU(){var a=this;D.call(a);a.kF=0.0;a.ku=0.0;a.HP=0;a.uo=0;}
function Bl0(){var a=new NU();ADb(a);return a;}
function ADb(a){a.kF=0.0;a.ku=0.0;a.HP=0;a.uo=0;}
function Yo(){var a=this;NU.call(a);a.j6=null;a.np=null;}
function V4(a){var b=new Yo();AZX(b,a);return b;}
function AZX(a,b){ADb(a);a.j6=$rt_createBooleanArray(10);a.np=b;}
function APu(a,b,c){var d;d=(-1);if(b==a.np.t3.bI)d=0;if(b==a.np.xo.bI)d=1;if(b==a.np.tV.bI)d=2;if(b==a.np.ux.bI)d=3;if(b==a.np.yH.bI)d=4;if(d>=0)a.j6.data[d]=c;}
function AO1(a){var b;b=0;while(b<10){a.j6.data[b]=0;b=b+1|0;}}
function AOD(a,b){a.kF=0.0;a.ku=0.0;if(a.j6.data[0])a.ku=a.ku+1.0;if(a.j6.data[1])a.ku=a.ku-1.0;if(a.j6.data[2])a.kF=a.kF+1.0;if(a.j6.data[3])a.kF=a.kF-1.0;a.uo=a.j6.data[4];}
function QY(){D.call(this);this.m_=null;}
var Bl1=null;function AY0(){AY0=Bt(QY);A39();}
function A_3(){var a=new QY();ALB(a);return a;}
function Wq(){AY0();return Bl1;}
function ALB(a){var b,c,d,e;AY0();WI(a);a.m_=Ci();AHm(Bbx(),a);Xy(Baa(),a);ADY(Bbt(),a);AJS(Ba_(),a);Ye(Baq(),a);ASF(Ba1(),a);b=new Cd;L();U9(b,Bfd,1);c=J(D,5);d=c.data;d[0]=B(616);d[1]=B(616);d[2]=B(616);d[3]=BI(35);BB();d[4]=Bgf;Ck(a,b,c);e=G2(Bfk,1);c=J(D,7);d=c.data;d[0]=B(617);d[1]=B(618);d[2]=B(617);d[3]=BI(88);d[4]=Bge;d[5]=BI(35);d[6]=Bfa;Ck(a,e,c);e=G2(BeU,3);c=J(D,3);d=c.data;d[0]=B(616);d[1]=BI(35);d[2]=BeZ;Ck(a,e,c);e=G2(Bgb,1);c=J(D,5);d=c.data;d[0]=B(619);d[1]=B(616);d[2]=B(619);d[3]=BI(35);d[4]
=Bh5;Ck(a,e,c);e=EK(BiD,1);c=J(D,5);d=c.data;d[0]=B(620);d[1]=B(620);d[2]=B(620);d[3]=BI(35);d[4]=Be1;Ck(a,e,c);e=EK(Bhd,1);c=J(D,7);d=c.data;d[0]=B(616);d[1]=B(616);d[2]=B(621);d[3]=BI(35);d[4]=Be1;d[5]=BI(88);d[6]=Bh5;Ck(a,e,c);e=G2(Be1,4);c=J(D,3);d=c.data;d[0]=B(622);d[1]=BI(35);d[2]=Be2;Ck(a,e,c);e=EK(Bh5,4);c=J(D,4);d=c.data;d[0]=B(622);d[1]=B(622);d[2]=BI(35);d[3]=Be1;Ck(a,e,c);e=G2(Be4,4);c=J(D,6);d=c.data;d[0]=B(72);d[1]=B(622);d[2]=BI(88);d[3]=BhA;d[4]=BI(35);d[5]=Bh5;Ck(a,e,c);e=EK(Bh6,4);c=J(D,4);d
=c.data;d[0]=B(619);d[1]=B(623);d[2]=BI(35);d[3]=Be1;Ck(a,e,c);e=G2(Bg8,16);c=J(D,7);d=c.data;d[0]=B(624);d[1]=B(617);d[2]=B(624);d[3]=BI(88);d[4]=BhQ;d[5]=BI(35);d[6]=Bh5;Ck(a,e,c);e=EK(BiH,1);c=J(D,4);d=c.data;d[0]=B(619);d[1]=B(616);d[2]=BI(35);d[3]=BhQ;Ck(a,e,c);e=EK(BiE,1);c=J(D,4);d=c.data;d[0]=B(619);d[1]=B(623);d[2]=BI(35);d[3]=BhQ;Ck(a,e,c);e=EK(BhN,1);c=J(D,6);d=c.data;d[0]=B(625);d[1]=B(626);d[2]=BI(65);d[3]=BhQ;d[4]=BI(66);d[5]=Bhz;Ck(a,e,c);e=EK(Bif,1);c=J(D,3);d=c.data;d[0]=B(616);d[1]=BI(35);d[2]
=BhD;Ck(a,e,c);e=G2(BgW,4);c=J(D,5);d=c.data;d[0]=B(627);d[1]=B(628);d[2]=B(616);d[3]=BI(35);d[4]=Be1;Ck(a,e,c);e=G2(Bg9,4);c=J(D,5);d=c.data;d[0]=B(627);d[1]=B(628);d[2]=B(616);d[3]=BI(35);d[4]=BeZ;Ck(a,e,c);e=EK(BiB,1);c=J(D,7);d=c.data;d[0]=B(616);d[1]=B(618);d[2]=B(616);d[3]=BI(35);d[4]=Bh5;d[5]=BI(88);d[6]=Bfd;Ck(a,e,c);e=EK(BiC,1);c=J(D,7);d=c.data;d[0]=B(616);d[1]=B(618);d[2]=B(616);d[3]=BI(35);d[4]=Bfi;d[5]=BI(88);d[6]=BhO;Ck(a,e,c);RC(a.m_,BaE(a));Cg(Dz(),BL(H(Be(BX(),CX(a.m_)),B(629))));}
function Ck(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=c.data;e=B(3);f=0;g=0;h=0;if(!So(d[f],$rt_arraycls(B4))){while(d[f] instanceof B4){i=f+1|0;j=d[f];h=h+1|0;g=Bi(j);k=new S;V(k);e=T(H(H(k,e),j));f=i;}i=f;}else{i=1;l=d[f];m=0;while(true){c=l.data;if(m>=c.length)break;k=c[m];h=h+1|0;g=Bi(k);j=new S;V(j);e=T(H(H(j,e),k));m=m+1|0;}}n=De();while(i<d.length){o=d[i];p=0;m=i+1|0;if(d[m] instanceof Bb)p=d[m].cW;else if(d[m] instanceof P)p=d[m].b;BQ(n,o,CY(p));i=i+2|0;}i=Bj(g,h);d=$rt_createIntArray(i);c=d.data;p=0;while
(p<i){q=Z(e,p);if(!DZ(n,BI(q)))c[p]=(-1);else c[p]=CP(n,BI(q)).f5;p=p+1|0;}e=a.m_;j=new UP;j.H1=b.bA;j.kR=g;j.q2=h;j.xR=d;j.xX=b;U(e,j);}
function RN(a,b){var c,d;c=0;while(c<a.m_.s){d=Y(a.m_,c);if(ALr(d,b))return AHl(d,b);c=c+1|0;}return null;}
function A39(){Bl1=A_3();}
function Co(){var a=this;D.call(a);a.r=null;a.eQ=0;a.CR=null;a.p5=0;}
var Bdf=0;function Bl2(){var a=new Co();Cz(a);return a;}
function Bl3(a){var b=new Co();ND(b,a);return b;}
function Cz(a){var b,c;b=new Gk;c=Bdf;Bdf=c+1|0;Lp(b,c);a.CR=Mx(b);}
function ND(a,b){var c,d;c=new Gk;d=Bdf;Bdf=d+1|0;Lp(c,d);a.CR=Mx(c);a.r=b;}
function Jf(a,b,c,d){var e;e=d.by;while(true){if(b>e)return (-1);if(a.k(b,c,d)>=0)break;b=b+1|0;}return b;}
function Jq(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.k(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function A4O(a,b){a.p5=b;}
function A4p(a){return a.p5;}
function A0B(a){return a.r;}
function A1m(a,b){a.r=b;}
function A$x(a,b){return 1;}
function A_f(a){return null;}
function K7(a){var b;a.eQ=1;if(a.r!==null){if(!a.r.eQ){b=a.r.lA();if(b!==null){a.r.eQ=1;a.r=b;}a.r.iY();}else if(a.r instanceof IB&&a.r.f6.wV)a.r=a.r.r;}}
function AHy(){Bdf=1;}
function N3(){CQ.call(this);}
function Bl4(){var a=new N3();AVO(a);return a;}
function AVO(a){Cw(a);}
function A9g(a,b){return;}
function A0o(a,b){return;}
function AUI(a){return 0;}
function DV(){var a=this;Co.call(a);a.wV=0;a.ij=0;}
var BlZ=null;function Bcz(a){var b=new DV();Hd(b,a);return b;}
function Hd(a,b){Cz(a);a.ij=b;}
function ATK(a,b,c,d){var e,f;e=JI(d,a.ij);M1(d,a.ij,b);f=a.r.k(b,c,d);if(f<0)M1(d,a.ij,e);return f;}
function A7z(a){return a.ij;}
function AT6(a,b){return 0;}
function AK5(){var b;b=new TR;Cz(b);BlZ=b;}
function HX(){var a=this;D.call(a);a.bE=null;a.l_=0;a.h6=0;a.Bi=0;a.qZ=0;a.cH=0;a.H=0;a.DX=0;a.k5=null;a.jF=null;a.bi=0;a.qi=0;a.ii=0;a.pJ=0;a.eP=null;}
var Bl5=null;var BlX=null;var BlY=0;function Ks(a){return a.cH;}
function T$(a,b){if(b>0&&b<3)a.h6=b;if(b==1){a.H=a.cH;a.jF=a.k5;a.bi=a.pJ;a.pJ=a.ii;GD(a);}}
function AJx(a,b){a.l_=b;a.H=a.cH;a.jF=a.k5;a.bi=a.ii+1|0;a.pJ=a.ii;GD(a);}
function PT(a){return a.k5;}
function H5(a){return a.k5===null?0:1;}
function Lh(a){return a.jF===null?0:1;}
function BF(a){GD(a);return a.qZ;}
function G8(a){var b;b=a.k5;GD(a);return b;}
function A3V(a){return a.H;}
function AVT(a){return a.qZ;}
function GD(a){var b,c,d,e,f,$$je;a.qZ=a.cH;a.cH=a.H;a.k5=a.jF;a.ii=a.pJ;a.pJ=a.bi;while(true){b=0;a.H=a.bi>=a.bE.data.length?0:Mf(a);a.jF=null;if(a.h6==4){if(a.H!=92)return;a.H=a.bi>=a.bE.data.length?0:a.bE.data[CF(a)];switch(a.H){case 69:break;default:a.H=92;a.bi=a.qi;return;}a.h6=a.Bi;a.H=a.bi>(a.bE.data.length-2|0)?0:Mf(a);}a:{if(a.H!=92){if(a.h6==1)switch(a.H){case 36:a.H=(-536870876);break a;case 40:if(a.bE.data[a.bi]!=63){a.H=(-2147483608);break a;}CF(a);c=a.bE.data[a.bi];d=0;while(true){b:{if(d){d=0;switch
(c){case 33:break;case 61:a.H=(-134217688);CF(a);break b;default:M(CN(B(3),EC(a),a.bi));}a.H=(-67108824);CF(a);}else{switch(c){case 33:break;case 60:CF(a);c=a.bE.data[a.bi];d=1;break b;case 61:a.H=(-536870872);CF(a);break b;case 62:a.H=(-33554392);CF(a);break b;default:a.H=ASj(a);if(a.H<256){a.l_=a.H;a.H=a.H<<16;a.H=(-1073741784)|a.H;break b;}a.H=a.H&255;a.l_=a.H;a.H=a.H<<16;a.H=(-16777176)|a.H;break b;}a.H=(-268435416);CF(a);}}if(!d)break;}break a;case 41:a.H=(-536870871);break a;case 42:case 43:case 63:switch
(a.bi>=a.bE.data.length?42:a.bE.data[a.bi]){case 43:a.H=a.H|(-2147483648);CF(a);break a;case 63:a.H=a.H|(-1073741824);CF(a);break a;default:}a.H=a.H|(-536870912);break a;case 46:a.H=(-536870866);break a;case 91:a.H=(-536870821);T$(a,2);break a;case 93:if(a.h6!=2)break a;a.H=(-536870819);break a;case 94:a.H=(-536870818);break a;case 123:a.jF=AGs(a,a.H);break a;case 124:a.H=(-536870788);break a;default:}else if(a.h6==2)switch(a.H){case 38:a.H=(-536870874);break a;case 45:a.H=(-536870867);break a;case 91:a.H=(-536870821);break a;case 93:a.H
=(-536870819);break a;case 94:a.H=(-536870818);break a;default:}}else{c=a.bi>=(a.bE.data.length-2|0)?(-1):Mf(a);c:{a.H=c;switch(a.H){case -1:M(CN(B(3),EC(a),a.bi));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.H
=ADO(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.h6!=1)break a;a.H=(-2147483648)|a.H;break a;case 65:a.H=(-2147483583);break a;case 66:a.H=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:M(CN(B(3),EC(a),a.bi));case 68:case 83:case 87:case 100:case 115:case 119:a.jF=QO(Lj(a.bE,
a.qi,1),0);a.H=0;break a;case 71:a.H=(-2147483577);break a;case 80:case 112:break c;case 81:a.Bi=a.h6;a.h6=4;b=1;break a;case 90:a.H=(-2147483558);break a;case 97:a.H=7;break a;case 98:a.H=(-2147483550);break a;case 99:if(a.bi>=(a.bE.data.length-2|0))M(CN(B(3),EC(a),a.bi));a.H=a.bE.data[CF(a)]&31;break a;case 101:a.H=27;break a;case 102:a.H=12;break a;case 110:a.H=10;break a;case 114:a.H=13;break a;case 116:a.H=9;break a;case 117:a.H=UC(a,4);break a;case 120:a.H=UC(a,2);break a;case 122:a.H=(-2147483526);break a;default:}break a;}e
=AOq(a);f=0;if(a.H==80)f=1;try{a.jF=QO(e,f);}catch($$e){$$je=Bg($$e);if($$je instanceof MS){M(CN(B(3),EC(a),a.bi));}else{throw $$e;}}a.H=0;}}if(b)continue;else break;}}
function AOq(a){var b,c,d;b=new S;GE(b,10);if(a.bi<(a.bE.data.length-2|0)){if(a.bE.data[a.bi]!=123){b=new S;V(b);return T(H(H(b,B(630)),Lj(a.bE,CF(a),1)));}CF(a);c=0;a:{while(a.bi<(a.bE.data.length-2|0)){c=a.bE.data[CF(a)];if(c==125)break a;Dx(b,c);}}if(c!=125)M(CN(B(3),a.eP,a.bi));}if(!J_(b))M(CN(B(3),a.eP,a.bi));d=T(b);if(Bi(d)==1){b=new S;V(b);return T(H(H(b,B(630)),d));}b:{c:{if(Bi(d)>3){if(IA(d,B(630)))break c;if(IA(d,B(631)))break c;}break b;}d=Jv(d,2);}return d;}
function AGs(a,b){var c,d,e,f,$$je;c=new S;GE(c,4);d=(-1);e=2147483647;a:{while(true){if(a.bi>=a.bE.data.length)break a;b=a.bE.data[CF(a)];if(b==125)break a;if(b==44&&d<0)try{d=Ld(BL(c),10);AGJ(c,0,J_(c));continue;}catch($$e){$$je=Bg($$e);if($$je instanceof Ez){break;}else{throw $$e;}}Dx(c,b&65535);}M(CN(B(3),a.eP,a.bi));}if(b!=125)M(CN(B(3),a.eP,a.bi));if(J_(c)>0)b:{try{e=Ld(BL(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Bg($$e);if($$je instanceof Ez){}else{throw $$e;}}M(CN(B(3),a.eP,a.bi));}else if
(d<0)M(CN(B(3),a.eP,a.bi));if((d|e|(e-d|0))<0)M(CN(B(3),a.eP,a.bi));f=a.bi>=a.bE.data.length?42:a.bE.data[a.bi];c:{switch(f){case 43:a.H=(-2147483525);CF(a);break c;case 63:a.H=(-1073741701);CF(a);break c;default:}a.H=(-536870789);}c=new Tp;c.jg=d;c.ir=e;return c;}
function EC(a){return a.eP;}
function Eo(a){return !a.cH&&!a.H&&a.bi==a.DX&&!H5(a)?1:0;}
function Nr(b){return b<0?0:1;}
function F_(a){return !Eo(a)&&!H5(a)&&Nr(a.cH)?1:0;}
function TQ(a){return a.cH<=56319&&a.cH>=55296?1:0;}
function Ww(a){return a.cH<=57343&&a.cH>=56320?1:0;}
function QW(b){return b<=56319&&b>=55296?1:0;}
function PF(b){return b<=57343&&b>=56320?1:0;}
function UC(a,b){var c,d,e,f,$$je;c=new S;GE(c,b);d=a.bE.data.length-2|0;e=0;while(true){f=R(e,b);if(f>=0)break;if(a.bi>=d)break;Dx(c,a.bE.data[CF(a)]);e=e+1|0;}if(!f)a:{try{b=Ld(BL(c),16);}catch($$e){$$je=Bg($$e);if($$je instanceof Ez){break a;}else{throw $$e;}}return b;}M(CN(B(3),a.eP,a.bi));}
function ADO(a){var b,c,d,e,f;b=3;c=1;d=a.bE.data.length-2|0;e=Wj(a.bE.data[a.bi],8);switch(e){case -1:break;default:if(e>3)b=2;CF(a);a:{while(true){if(c>=b)break a;if(a.bi>=d)break a;f=Wj(a.bE.data[a.bi],8);if(f<0)break;e=(e*8|0)+f|0;CF(a);c=c+1|0;}}return e;}M(CN(B(3),a.eP,a.bi));}
function ASj(a){var b,c;b=1;c=a.l_;a:while(true){if(a.bi>=a.bE.data.length)M(CN(B(3),a.eP,a.bi));b:{c:{switch(a.bE.data[a.bi]){case 41:CF(a);return c|256;case 45:if(!b)M(CN(B(3),a.eP,a.bi));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}CF(a);}CF(a);return c;}
function CF(a){var b,c;a.qi=a.bi;if(!(a.l_&4))a.bi=a.bi+1|0;else{b=a.bE.data.length-2|0;a.bi=a.bi+1|0;a:while(true){if(a.bi<b&&Qh(a.bE.data[a.bi])){a.bi=a.bi+1|0;continue;}if(a.bi>=b)break;if(a.bE.data[a.bi]!=35)break;a.bi=a.bi+1|0;while(true){if(a.bi>=b)continue a;c=a.bE.data[a.bi];if(c!=10&&c!=13&&c!=133&&(c|1)!=8233?0:1)continue a;a.bi=a.bi+1|0;}}}return a.qi;}
function AQS(b){return Bl5.Nl(b);}
function Mf(a){var b,c,d;b=a.bE.data[CF(a)];if(Dt(b)){c=a.qi+1|0;if(c<a.bE.data.length){d=a.bE.data[c];if(DR(d)){CF(a);return EI(b,d);}}}return b;}
function HF(a){return a.ii;}
function ARc(){var a=this;Cc.call(a);a.AQ=null;a.rf=null;a.n9=0;}
function CN(a,b,c){var d=new ARc();A3G(d,a,b,c);return d;}
function A3G(a,b,c,d){O(a);a.n9=(-1);a.AQ=b;a.rf=c;a.n9=d;}
function A_b(a){var b,c,d,e,f,g,h,i;b=B(3);if(a.n9>=1){c=$rt_createCharArray(a.n9);d=c.data;e=0;f=d.length;if(e>f){b=new Cc;O(b);M(b);}while(e<f){g=e+1|0;d[e]=32;e=g;}b=AIb(c);}h=new S;V(h);h=H(h,a.AQ);if(a.rf!==null&&Bi(a.rf)){i=new S;V(i);b=T(H(H(H(H(Be(i,a.n9),B(632)),a.rf),B(632)),b));}else b=B(3);return T(H(h,b));}
function Mw(){CQ.call(this);this.tu=0;}
function Bl6(){var a=new Mw();A4m(a);return a;}
function A4m(a){Cw(a);}
function A8E(a,b){KK(b,a.tu);}
function A78(a,b){a.tu=N2(b);}
function A6K(a){return 1;}
function MZ(){CQ.call(this);this.to=0;}
function Bl7(){var a=new MZ();A51(a);return a;}
function A51(a){Cw(a);}
function AWl(a,b){Z_(b,a.to);}
function AZB(a,b){a.to=XL(b);}
function A5M(a){return 2;}
function Li(){CQ.call(this);this.r9=0;}
function Bl8(){var a=new Li();A1K(a);return a;}
function A1K(a){Cw(a);}
function A17(a,b){JN(b,a.r9);}
function AY8(a,b){a.r9=H9(b);}
function AVo(a){return 3;}
function Oc(){CQ.call(this);this.s3=Long_ZERO;}
function Bl9(){var a=new Oc();AZ2(a);return a;}
function AZ2(a){Cw(a);}
function ATg(a,b){UH(b,a.s3);}
function A_q(a,b){a.s3=Tl(b);}
function A2I(a){return 4;}
function Pj(){CQ.call(this);this.nm=0.0;}
function Bl$(){var a=new Pj();AZZ(a);return a;}
function A6R(a){var b=new Pj();AVU(b,a);return b;}
function AZZ(a){Cw(a);}
function AVU(a,b){Cw(a);a.nm=b;}
function AS9(a,b){APj(b,a.nm);}
function A70(a,b){a.nm=AA2(b);}
function ASN(a){return 5;}
function Mp(){CQ.call(this);this.iM=0.0;}
function Bl_(){var a=new Mp();AZD(a);return a;}
function AZD(a){Cw(a);}
function A62(a,b){APo(b,a.iM);}
function AU8(a,b){a.iM=APm(b);}
function A0W(a){return 6;}
function MI(){CQ.call(this);this.mo=null;}
function Bma(){var a=new MI();A_I(a);return a;}
function A_I(a){Cw(a);}
function A4_(a,b){JN(b,a.mo.data.length);AOC(b,a.mo);}
function A7j(a,b){a.mo=$rt_createByteArray(H9(b));AMV(b,a.mo);}
function A9D(a){return 7;}
function OH(){CQ.call(this);this.Ax=null;}
function Bmb(){var a=new OH();A8n(a);return a;}
function A8n(a){Cw(a);}
function A$U(a,b){Xr(b,a.Ax);}
function AY9(a,b){a.Ax=GW(b);}
function ATr(a){return 8;}
function QU(){var a=this;CQ.call(a);a.he=null;a.mY=0;}
function L9(){var a=new QU();AG7(a);return a;}
function AG7(a){Cw(a);a.he=Ci();}
function A9y(a,b){var c;if(a.he.s<=0)a.mY=1;else a.mY=Y(a.he,0).fd();KK(b,a.mY);JN(b,a.he.s);c=0;while(c<a.he.s){Y(a.he,c).gN(b);c=c+1|0;}}
function AY2(a,b){var c,d,e;a.mY=N2(b);c=H9(b);a.he=Ci();d=0;while(d<c){e=AE6(a.mY);e.gF(b);U(a.he,e);d=d+1|0;}}
function AYC(a){return 9;}
function Js(a,b){a.mY=b.fd();U(a.he,b);}
function Fc(a,b){return Y(a.he,b);}
function AOw(a){return a.he.s;}
function TC(){var a=this;D.call(a);a.Au=null;a.xf=null;}
function ARJ(a){CM(a.Au,(Uz(a.xf.result)?1:0)?null:A8x(a.xf.result));}
function AUr(a){ARJ(a);}
function TB(){D.call(this);this.Ej=null;}
function XF(a){CM(a.Ej,null);}
function AXr(a){XF(a);}
function ART(){var a=this;D.call(a);a.EV=null;a.qj=null;}
function Bbx(){var a=new ART();AXD(a);return a;}
function AXD(a){var b,c,d,e;b=J($rt_arraycls(B4),4);c=b.data;d=J(B4,3);e=d.data;e[0]=B(633);e[1]=B(623);e[2]=B(623);c[0]=d;d=J(B4,3);e=d.data;e[0]=B(72);e[1]=B(622);e[2]=B(622);c[1]=d;d=J(B4,3);e=d.data;e[0]=B(634);e[1]=B(635);e[2]=B(636);c[2]=d;d=J(B4,3);e=d.data;e[0]=B(634);e[1]=B(636);e[2]=B(636);c[3]=d;a.EV=b;b=J($rt_arraycls(D),5);c=b.data;d=J(D,5);e=d.data;L();e[0]=Be1;e[1]=BeZ;BB();e[2]=BhQ;e[3]=BhB;e[4]=BhR;c[0]=d;d=J(D,5);e=d.data;e[0]=BhV;e[1]=BhZ;e[2]=BhL;e[3]=Bh3;e[4]=Bh$;c[1]=d;d=J(D,5);e=d.data;e[0]
=BhU;e[1]=BhY;e[2]=BhK;e[3]=Bh2;e[4]=Bh9;c[2]=d;d=J(D,5);e=d.data;e[0]=BhW;e[1]=Bh0;e[2]=BhM;e[3]=Bh4;e[4]=Bh_;c[3]=d;d=J(D,5);e=d.data;e[0]=Bia;e[1]=Bib;e[2]=Bic;e[3]=Bid;e[4]=Bie;c[4]=d;a.qj=b;}
function AHm(a,b){var c,d,e,f,g,h,i,j;c=0;while(c<a.qj.data[0].data.length){d=a.qj.data[0].data[c];e=0;while(e<(a.qj.data.length-1|0)){f=a.qj.data;g=e+1|0;h=f[g].data[c];i=Ql(h);f=J(D,5);j=f.data;j[0]=a.EV.data[e];j[1]=BI(35);BB();j[2]=Bh5;j[3]=BI(88);j[4]=d;Ck(b,i,f);e=g;}c=c+1|0;}}
function XZ(){var a=this;D.call(a);a.Bk=null;a.pw=null;}
function Baa(){var a=new XZ();A$p(a);return a;}
function A$p(a){var b,c,d,e;b=J($rt_arraycls(B4),1);c=b.data;d=J(B4,3);e=d.data;e[0]=B(72);e[1]=B(72);e[2]=B(622);c[0]=d;a.Bk=b;b=J($rt_arraycls(D),2);c=b.data;d=J(D,5);e=d.data;L();e[0]=Be1;e[1]=BeZ;BB();e[2]=BhQ;e[3]=BhB;e[4]=BhR;c[0]=d;d=J(D,5);e=d.data;e[0]=BhT;e[1]=BhX;e[2]=BhS;e[3]=Bh1;e[4]=Bh8;c[1]=d;a.pw=b;}
function Xy(a,b){var c,d,e,f,g,h,i,j,k;c=0;while(c<a.pw.data[0].data.length){d=a.pw.data[0].data[c];e=0;while(e<(a.pw.data.length-1|0)){f=a.pw.data;g=e+1|0;h=f[g].data[c];i=Ql(h);j=J(D,5);k=j.data;k[0]=a.Bk.data[e];k[1]=BI(35);BB();k[2]=Bh5;k[3]=BI(88);k[4]=d;Ck(b,i,j);e=g;}c=c+1|0;}h=new Cd;BB();Gr(h,BhP,1);f=J(D,7);k=f.data;k[0]=B(637);k[1]=B(638);k[2]=B(637);k[3]=BI(88);k[4]=Bgf;k[5]=BI(35);k[6]=Bh5;Ck(b,h,f);d=EK(Bgd,4);f=J(D,9);k=f.data;k[0]=B(72);k[1]=B(622);k[2]=B(48);k[3]=BI(89);k[4]=Bgc;k[5]=BI(88);k[6]
=BhQ;k[7]=BI(35);k[8]=Bh5;Ck(b,d,f);}
function XS(){D.call(this);this.sv=null;}
function Bbt(){var a=new XS();A2d(a);return a;}
function A2d(a){var b,c,d,e;b=J($rt_arraycls(D),3);c=b.data;d=J(D,2);e=d.data;L();e[0]=Bfi;BB();e[1]=BhR;c[0]=d;d=J(D,2);e=d.data;e[0]=Bfh;e[1]=BhQ;c[1]=d;d=J(D,2);e=d.data;e[0]=Bg0;e[1]=BhB;c[2]=d;a.sv=b;}
function ADY(a,b){var c,d,e,f,g,h;c=0;while(c<a.sv.data.length){d=a.sv.data[c].data[0];e=a.sv.data[c].data[1];f=AL3(d);g=J(D,5);h=g.data;h[0]=B(616);h[1]=B(616);h[2]=B(616);h[3]=BI(35);h[4]=e;Ck(b,f,g);f=EK(e,9);g=J(D,3);h=g.data;h[0]=B(622);h[1]=BI(35);h[2]=d;Ck(b,f,g);c=c+1|0;}}
function AEc(){D.call(this);}
function Ba_(){var a=new AEc();A0E(a);return a;}
function A0E(a){return;}
function AJS(a,b){var c,d,e;c=new Cd;BB();DD(c,Bh7);d=J(D,9);e=d.data;e[0]=B(48);e[1]=B(72);e[2]=B(622);e[3]=BI(88);L();e[4]=Be$;e[5]=BI(89);e[6]=Be_;e[7]=BI(35);e[8]=Bh6;Ck(b,c,d);c=Ql(Bh7);d=J(D,9);e=d.data;e[0]=B(48);e[1]=B(72);e[2]=B(622);e[3]=BI(88);e[4]=Be_;e[5]=BI(89);e[6]=Be$;e[7]=BI(35);e[8]=Bh6;Ck(b,c,d);}
function ARS(){D.call(this);}
function Baq(){var a=new ARS();A6U(a);return a;}
function A6U(a){return;}
function Ye(a,b){var c,d,e;c=new Cd;L();AH1(c,BgX);d=J(D,5);e=d.data;e[0]=B(616);e[1]=B(619);e[2]=B(616);e[3]=BI(35);e[4]=Be1;Ck(b,c,d);c=AL3(Bg4);d=J(D,5);e=d.data;e[0]=B(616);e[1]=B(619);e[2]=B(616);e[3]=BI(35);e[4]=BeZ;Ck(b,c,d);c=AL3(Bg1);d=J(D,4);e=d.data;e[0]=B(620);e[1]=B(620);e[2]=BI(35);e[3]=Be1;Ck(b,c,d);}
function AE_(){var a=this;D.call(a);a.zJ=null;a.n6=null;}
function Ba1(){var a=new AE_();AU$(a);return a;}
function AU$(a){var b,c,d,e;b=J($rt_arraycls(B4),4);c=b.data;d=J(B4,2);e=d.data;e[0]=B(633);e[1]=B(624);c[0]=d;d=J(B4,3);e=d.data;e[0]=B(624);e[1]=B(633);e[2]=B(633);c[1]=d;d=J(B4,3);e=d.data;e[0]=B(633);e[1]=B(624);e[2]=B(624);c[2]=d;d=J(B4,2);e=d.data;e[0]=B(624);e[1]=B(624);c[3]=d;a.zJ=b;b=J($rt_arraycls(D),5);c=b.data;d=J(D,5);e=d.data;L();e[0]=Bfd;e[1]=Bgp;BB();e[2]=BhQ;e[3]=BhB;e[4]=BhR;c[0]=d;d=J(D,5);e=d.data;e[0]=Big;e[1]=Bik;e[2]=Bio;e[3]=Bis;e[4]=Biw;c[1]=d;d=J(D,5);e=d.data;e[0]=Bih;e[1]=Bil;e[2]
=Bip;e[3]=Bit;e[4]=Bix;c[2]=d;d=J(D,5);e=d.data;e[0]=Bii;e[1]=Bim;e[2]=Biq;e[3]=Biu;e[4]=Biy;c[3]=d;d=J(D,5);e=d.data;e[0]=Bij;e[1]=Bin;e[2]=Bir;e[3]=Biv;e[4]=Biz;c[4]=d;a.n6=b;}
function ASF(a,b){var c,d,e,f,g,h,i,j;c=0;while(c<a.n6.data[0].data.length){d=a.n6.data[0].data[c];e=0;while(e<(a.n6.data.length-1|0)){f=a.n6.data;g=e+1|0;h=f[g].data[c];i=Ql(h);f=J(D,3);j=f.data;j[0]=a.zJ.data[e];j[1]=BI(88);j[2]=d;Ck(b,i,f);e=g;}c=c+1|0;}}
function Yl(){D.call(this);this.IV=null;}
function BaE(a){var b=new Yl();AYx(b,a);return b;}
function AYx(a,b){a.IV=b;}
function AMG(a,b,c){return Ko(c)<Ko(b)?(-1):Ko(c)<=Ko(b)?0:1;}
function AZy(a,b,c){return AMG(a,b,c);}
function QH(){DV.call(this);}
function A3y(a,b,c,d){var e;e=a.ij;Cv(d,e,b-Ep(d,e)|0);return a.r.k(b,c,d);}
function A9z(a,b){return 0;}
function AR_(){DV.call(this);}
function Bbu(){var a=new AR_();A2U(a);return a;}
function A2U(a){Hd(a,(-1));}
function A4N(a,b,c,d){return b;}
function PW(){DV.call(this);}
function AUa(a,b,c,d){if(Ep(d,a.ij)!=b)b=(-1);return b;}
function Q7(){DV.call(this);this.wI=0;}
function A3A(a,b,c,d){var e;e=a.ij;Cv(d,e,b-Ep(d,e)|0);a.wI=b;return b;}
function AUf(a){return a.wI;}
function A8O(a,b){return 0;}
function HV(){DV.call(this);}
function Bb5(){var a=new HV();A$n(a);return a;}
function A$n(a){Hd(a,0);}
function A1x(a,b,c,d){if(d.nu!=1&&b!=d.by)return (-1);ARz(d);M1(d,0,b);return b;}
function CI(){Co.call(this);this.dl=0;}
function Bmc(){var a=new CI();EM(a);return a;}
function EM(a){Cz(a);a.dl=1;}
function A_z(a,b,c,d){var e;if((b+a.eb()|0)>d.by){d.hs=1;return (-1);}e=a.dn(b,c);if(e<0)return (-1);return a.r.k(b+e|0,c,d);}
function A9_(a){return a.dl;}
function AW9(a,b){return 1;}
function AFW(){CI.call(this);}
function IK(a){var b=new AFW();A7G(b,a);return b;}
function A7G(a,b){ND(a,b);a.dl=1;a.p5=1;a.dl=0;}
function A9N(a,b,c){return 0;}
function A5C(a,b,c,d){var e,f,g;e=d.by;f=d.fh;while(true){g=R(b,e);if(g>0)return (-1);if(g<0&&DR(Z(c,b))&&b>f&&Dt(Z(c,b-1|0))){b=b+1|0;continue;}if(a.r.k(b,c,d)>=0)break;b=b+1|0;}return b;}
function A4E(a,b,c,d,e){var f,g;f=e.by;g=e.fh;while(true){if(c<b)return (-1);if(c<f&&DR(Z(d,c))&&c>g&&Dt(Z(d,c-1|0))){c=c+(-1)|0;continue;}if(a.r.k(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function A3z(a,b){return 0;}
function CE(){var a=this;Co.call(a);a.dm=null;a.f6=null;a.cK=0;}
function Bmd(){var a=new CE();A4A(a);return a;}
function BaF(a,b){var c=new CE();GT(c,a,b);return c;}
function A4A(a){Cz(a);}
function GT(a,b,c){Cz(a);a.dm=b;a.f6=c;a.cK=c.ij;}
function AWs(a,b,c,d){var e,f,g,h;if(a.dm===null)return (-1);e=Hp(d,a.cK);EL(d,a.cK,b);f=a.dm.s;g=0;while(true){if(g>=f){EL(d,a.cK,e);return (-1);}h=Y(a.dm,g).k(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AZm(a,b){a.f6.r=b;}
function A7f(a,b){var c;a:{if(a.dm!==null){c=Jl(a.dm);while(true){if(!KC(c))break a;if(!KT(c).d4(b))continue;else return 1;}}}return 0;}
function AZT(a,b){return JI(b,a.cK)>=0&&Hp(b,a.cK)==JI(b,a.cK)?0:1;}
function AUJ(a){var b,c,d,e;a.eQ=1;if(a.f6!==null&&!a.f6.eQ)K7(a.f6);a:{if(a.dm!==null){b=a.dm.s;c=0;while(true){if(c>=b)break a;d=Y(a.dm,c);e=d.lA();if(e===null)e=d;else{d.eQ=1;En(a.dm,c);AML(a.dm,c,e);}if(!e.eQ)e.iY();c=c+1|0;}}}if(a.r!==null)K7(a);}
function K1(){CE.call(this);}
function Bme(){var a=new K1();AXY(a);return a;}
function AXY(a){Cz(a);}
function AZe(a,b,c,d){var e,f,g,h;e=Ep(d,a.cK);Cv(d,a.cK,b);f=a.dm.s;g=0;while(true){if(g>=f){Cv(d,a.cK,e);return (-1);}h=Y(a.dm,g).k(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function A9l(a,b){return !Ep(b,a.cK)?0:1;}
function EV(){K1.call(this);}
function A45(a,b,c,d){var e,f,g;e=Ep(d,a.cK);Cv(d,a.cK,b);f=a.dm.s;g=0;while(g<f){if(Y(a.dm,g).k(b,c,d)>=0)return a.r.k(a.f6.wI,c,d);g=g+1|0;}Cv(d,a.cK,e);return (-1);}
function A86(a,b){a.r=b;}
function Te(){EV.call(this);}
function AZi(a,b,c,d){var e,f;e=a.dm.s;f=0;while(f<e){if(Y(a.dm,f).k(b,c,d)>=0)return a.r.k(b,c,d);f=f+1|0;}return (-1);}
function A1o(a,b){return 0;}
function WL(){EV.call(this);}
function ATZ(a,b,c,d){var e,f;e=a.dm.s;f=0;while(true){if(f>=e)return a.r.k(b,c,d);if(Y(a.dm,f).k(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A$d(a,b){return 0;}
function Vd(){EV.call(this);}
function AUG(a,b,c,d){var e,f,g,h;e=a.dm.s;f=d.oh?0:d.fh;a:{g=a.r.k(b,c,d);if(g>=0){Cv(d,a.cK,b);h=0;while(true){if(h>=e)break a;if(Y(a.dm,h).eW(f,b,c,d)>=0){Cv(d,a.cK,(-1));return g;}h=h+1|0;}}}return (-1);}
function A_N(a,b){return 0;}
function Rj(){EV.call(this);}
function A3b(a,b,c,d){var e,f;e=a.dm.s;Cv(d,a.cK,b);f=0;while(true){if(f>=e)return a.r.k(b,c,d);if(Y(a.dm,f).eW(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A9r(a,b){return 0;}
function IB(){CE.call(this);this.fp=null;}
function Bcr(a,b){var c=new IB();ZZ(c,a,b);return c;}
function ZZ(a,b,c){Cz(a);a.fp=b;a.f6=c;a.cK=c.ij;}
function ATe(a,b,c,d){var e,f;e=Hp(d,a.cK);EL(d,a.cK,b);f=a.fp.k(b,c,d);if(f>=0)return f;EL(d,a.cK,e);return (-1);}
function AX_(a,b,c,d){var e;e=a.fp.eJ(b,c,d);if(e>=0)EL(d,a.cK,e);return e;}
function A9C(a,b,c,d,e){var f;f=a.fp.eW(b,c,d,e);if(f>=0)EL(e,a.cK,f);return f;}
function A7b(a,b){return a.fp.d4(b);}
function A8M(a){var b;b=new OS;ZZ(b,a.fp,a.f6);a.r=b;return b;}
function A13(a){var b;a.eQ=1;if(a.f6!==null&&!a.f6.eQ)K7(a.f6);if(a.fp!==null&&!a.fp.eQ){b=a.fp.lA();if(b!==null){a.fp.eQ=1;a.fp=b;}a.fp.iY();}}
function H2(){D.call(this);}
function Bm(){var a=this;H2.call(a);a.cj=0;a.dP=0;a.b$=null;a.qc=null;a.qH=null;a.ca=0;}
var Bmf=null;function Bmg(){var a=new Bm();B0(a);return a;}
function B0(a){var b;b=new WZ;b.bx=$rt_createIntArray(64);a.b$=b;}
function A4c(a){return null;}
function A3K(a){return a.b$;}
function AN0(a){return !a.dP?(I3(a.b$,0)>=2048?0:1):AEs(a.b$,0)>=2048?0:1;}
function A6b(a){return a.ca;}
function A95(a){return a;}
function YX(a){var b,c;if(a.qH===null){b=a.kq();c=new Ss;c.Jq=a;c.Cr=b;B0(c);a.qH=c;Fz(a.qH,a.dP);}return a.qH;}
function Ka(a){var b,c;if(a.qc===null){b=a.kq();c=new Sr;c.GL=a;c.Ex=b;c.Bl=a;B0(c);a.qc=c;Fz(a.qc,a.cj);a.qc.ca=a.ca;}return a.qc;}
function A_c(a){return 0;}
function Fz(a,b){if(a.cj^b){a.cj=a.cj?0:1;a.dP=a.dP?0:1;}if(!a.ca)a.ca=1;return a;}
function AVX(a){return a.cj;}
function KE(b,c){if(b.hF()!==null&&c.hF()!==null)return AD8(b.hF(),c.hF());return 1;}
function QO(b,c){return APR(ARt(Bmf,b),c);}
function Z3(){Bmf=new Ia;}
function ZN(){var a=this;Bm.call(a);a.xK=0;a.y9=0;a.no=0;a.uO=0;a.iy=0;a.lo=0;a.b6=null;a.c5=null;}
function Eq(){var a=new ZN();A2w(a);return a;}
function A$H(a,b){var c=new ZN();AUY(c,a,b);return c;}
function A2w(a){B0(a);a.b6=A_P();}
function AUY(a,b,c){B0(a);a.b6=A_P();a.xK=b;a.y9=c;}
function Dp(a,b){a:{if(a.xK){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.iy){OC(a.b6,Kd(b&65535));break a;}Mb(a.b6,Kd(b&65535));break a;}if(a.y9&&b>128){a.no=1;b=GQ(GP(b));}}}if(!(!QW(b)&&!PF(b))){if(a.uO)OC(a.b$,b-55296|0);else Mb(a.b$,b-55296|0);}if(a.iy)OC(a.b6,b);else Mb(a.b6,b);if(!a.ca&&Mv(b))a.ca=1;return a;}
function ASv(a,b){var c,d,e;if(!a.ca&&b.ca)a.ca=1;if(a.uO){if(!b.dP)G1(a.b$,b.kq());else Ec(a.b$,b.kq());}else if(!b.dP)Hu(a.b$,b.kq());else{Hg(a.b$,b.kq());Ec(a.b$,b.kq());a.dP=a.dP?0:1;a.uO=1;}if(!a.lo&&b.hF()!==null){if(a.iy){if(!b.cj)G1(a.b6,b.hF());else Ec(a.b6,b.hF());}else if(!b.cj)Hu(a.b6,b.hF());else{Hg(a.b6,b.hF());Ec(a.b6,b.hF());a.cj=a.cj?0:1;a.iy=1;}}else{c=a.cj;if(a.c5!==null){d=a.c5;if(!c){e=new T2;e.HI=a;e.EZ=c;e.Bf=d;e.A$=b;B0(e);a.c5=e;}else{e=new T3;e.JO=a;e.Ai=c;e.Dy=d;e.Df=b;B0(e);a.c5=
e;}}else{if(c&&!a.iy&&Os(a.b6)){d=new TZ;d.IB=a;d.DD=b;B0(d);a.c5=d;}else if(!c){d=new TX;d.xi=a;d.ww=c;d.CM=b;B0(d);a.c5=d;}else{d=new TY;d.vk=a;d.tS=c;d.Bb=b;B0(d);a.c5=d;}a.lo=1;}}return a;}
function CG(a,b,c){var d;if(b>c){d=new Cc;O(d);M(d);}a:{b:{if(!a.xK){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Dp(a,b);b=b+1|0;}}if(a.iy)AIE(a.b6,b,c+1|0);else Jr(a.b6,b,c+1|0);}return a;}
function AId(a,b){var c,d,e;if(!a.ca&&b.ca)a.ca=1;if(b.no)a.no=1;if(!(a.dP^b.dP)){if(!a.dP)Hu(a.b$,b.b$);else Ec(a.b$,b.b$);}else if(a.dP)G1(a.b$,b.b$);else{Hg(a.b$,b.b$);Ec(a.b$,b.b$);a.dP=1;}if(!a.lo&&DX(b)!==null){if(!(a.cj^b.cj)){if(!a.cj)Hu(a.b6,DX(b));else Ec(a.b6,DX(b));}else if(a.cj)G1(a.b6,DX(b));else{Hg(a.b6,DX(b));Ec(a.b6,DX(b));a.cj=1;}}else{c=a.cj;if(a.c5!==null){d=a.c5;if(!c){e=new Pt;e.Fs=a;e.AT=c;e.EE=d;e.Bt=b;B0(e);a.c5=e;}else{e=new PH;e.FH=a;e.ES=c;e.y5=d;e.y_=b;B0(e);a.c5=e;}}else{if(!a.iy
&&Os(a.b6)){if(!c){d=new T0;d.JQ=a;d.zW=b;B0(d);a.c5=d;}else{d=new T1;d.HS=a;d.EJ=b;B0(d);a.c5=d;}}else if(!c){d=new T5;d.AX=a;d.Al=b;d.DA=c;B0(d);a.c5=d;}else{d=new T6;d.Aw=a;d.AD=b;d.D3=c;B0(d);a.c5=d;}a.lo=1;}}}
function Sz(a,b){var c,d,e;if(!a.ca&&b.ca)a.ca=1;if(b.no)a.no=1;if(!(a.dP^b.dP)){if(!a.dP)Ec(a.b$,b.b$);else Hu(a.b$,b.b$);}else if(!a.dP)G1(a.b$,b.b$);else{Hg(a.b$,b.b$);Ec(a.b$,b.b$);a.dP=0;}if(!a.lo&&DX(b)!==null){if(!(a.cj^b.cj)){if(!a.cj)Ec(a.b6,DX(b));else Hu(a.b6,DX(b));}else if(!a.cj)G1(a.b6,DX(b));else{Hg(a.b6,DX(b));Ec(a.b6,DX(b));a.cj=0;}}else{c=a.cj;if(a.c5!==null){d=a.c5;if(!c){e=new Pv;e.HH=a;e.El=c;e.Cp=d;e.Ah=b;B0(e);a.c5=e;}else{e=new Pw;e.HY=a;e.Ea=c;e.B4=d;e.Ek=b;B0(e);a.c5=e;}}else{if(!a.iy
&&Os(a.b6)){if(!c){d=new Pr;d.FK=a;d.C0=b;B0(d);a.c5=d;}else{d=new Ps;d.JL=a;d.zP=b;B0(d);a.c5=d;}}else if(!c){d=new Px;d.Ff=a;d.EY=b;d.AC=c;B0(d);a.c5=d;}else{d=new Pq;d.AA=a;d.Ee=b;d.DH=c;B0(d);a.c5=d;}a.lo=1;}}}
function D5(a,b){if(a.c5!==null)return a.cj^a.c5.X(b);return a.cj^EJ(a.b6,b);}
function DX(a){if(!a.lo)return a.b6;return null;}
function A5v(a){return a.b$;}
function A1e(a){var b,c;if(a.c5!==null)return a;b=DX(a);c=new Pu;c.Hs=a;c.sj=b;B0(c);return Fz(c,a.cj);}
function A72(a){var b,c;b=new S;V(b);c=I3(a.b6,0);while(c>=0){Hm(b,Iy(c));Dx(b,124);c=I3(a.b6,c+1|0);}if(b.bY>0)Sm(b,b.bY-1|0);return T(b);}
function AVY(a){return a.no;}
function MS(){var a=this;B6.call(a);a.G_=null;a.Ju=null;}
function E4(){Co.call(this);this.bQ=null;}
function Bmh(a,b,c){var d=new E4();Ef(d,a,b,c);return d;}
function Ef(a,b,c,d){ND(a,c);a.bQ=b;a.p5=d;}
function A_E(a){return a.bQ;}
function A0r(a,b){return !a.bQ.d4(b)&&!a.r.d4(b)?0:1;}
function A$J(a,b){return 1;}
function AYw(a){var b;a.eQ=1;if(a.r!==null&&!a.r.eQ){b=a.r.lA();if(b!==null){a.r.eQ=1;a.r=b;}a.r.iY();}if(a.bQ!==null){if(!a.bQ.eQ){b=a.bQ.lA();if(b!==null){a.bQ.eQ=1;a.bQ=b;}a.bQ.iY();}else if(a.bQ instanceof IB&&a.bQ.f6.wV)a.bQ=a.bQ.r;}}
function D7(){E4.call(this);this.cN=null;}
function BaW(a,b,c){var d=new D7();F6(d,a,b,c);return d;}
function F6(a,b,c,d){Ef(a,b,c,d);a.cN=b;}
function A3c(a,b,c,d){var e,f;e=0;a:{while((b+a.cN.eb()|0)<=d.by){f=a.cN.dn(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.r.k(b,c,d);if(f>=0)break;b=b-a.cN.eb()|0;e=e+(-1)|0;}return f;}
function GF(){D7.call(this);this.k2=null;}
function BbX(a,b,c,d){var e=new GF();QQ(e,a,b,c,d);return e;}
function QQ(a,b,c,d,e){F6(a,c,d,e);a.k2=b;}
function A31(a,b,c,d){var e,f,g,h;e=a.k2.jg;f=a.k2.ir;g=0;while(true){if(g>=e){a:{while(g<f){if((b+a.cN.eb()|0)>d.by)break a;h=a.cN.dn(b,c);if(h<1)break a;b=b+h|0;g=g+1|0;}}while(true){if(g<e)return (-1);h=a.r.k(b,c,d);if(h>=0)break;b=b-a.cN.eb()|0;g=g+(-1)|0;}return h;}if((b+a.cN.eb()|0)>d.by){d.hs=1;return (-1);}h=a.cN.dn(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function DW(){E4.call(this);}
function A3r(a,b,c,d){var e;if(!a.bQ.b4(d))return a.r.k(b,c,d);e=a.bQ.k(b,c,d);if(e>=0)return e;return a.r.k(b,c,d);}
function FX(){D7.call(this);}
function A7p(a,b,c,d){var e;e=a.bQ.k(b,c,d);if(e<0)e=a.r.k(b,c,d);return e;}
function A2N(a,b){a.r=b;a.bQ.cb(b);}
function Su(){D7.call(this);}
function A_u(a,b,c,d){while((b+a.cN.eb()|0)<=d.by&&a.cN.dn(b,c)>0){b=b+a.cN.eb()|0;}return a.r.k(b,c,d);}
function AYM(a,b,c,d){var e,f,g;e=a.r.eJ(b,c,d);if(e<0)return (-1);f=e-a.cN.eb()|0;while(f>=b&&a.cN.dn(f,c)>0){g=f-a.cN.eb()|0;e=f;f=g;}return e;}
function Ez(){Cc.call(this);}
function Bmi(){var a=new Ez();A3P(a);return a;}
function A3P(a){O(a);}
function Tp(){var a=this;H2.call(a);a.jg=0;a.ir=0;}
function A52(a){return a.jg;}
function A$D(a){return a.ir;}
function A7_(a){var b;b=new S;V(b);return T(H(H(H(Be(H(b,B(639)),a.jg),B(640)),a.ir==2147483647?B(3):Mx(AQR(a.ir))),B(641)));}
function TR(){Co.call(this);}
function Bmj(){var a=new TR();A_D(a);return a;}
function A_D(a){Cz(a);}
function AXw(a,b,c,d){return b;}
function A8L(a,b){return 0;}
function WZ(){var a=this;D.call(a);a.bx=null;a.cm=0;}
function A_P(){var a=new WZ();A4w(a);return a;}
function A4w(a){a.bx=$rt_createIntArray(0);}
function Mb(a,b){var c,d;c=b/32|0;if(b>=a.cm){KH(a,c+1|0);a.cm=b+1|0;}d=a.bx.data;d[c]=d[c]|1<<(b%32|0);}
function Jr(a,b,c){var d,e,f,g,h;if(b>c){d=new BO;O(d);M(d);}e=b/32|0;f=c/32|0;if(c>a.cm){KH(a,f+1|0);a.cm=c;}if(e==f){g=a.bx.data;g[e]=g[e]|Jk(a,b)&KB(a,c);}else{g=a.bx.data;g[e]=g[e]|Jk(a,b);h=e+1|0;while(h<f){a.bx.data[h]=(-1);h=h+1|0;}g=a.bx.data;g[f]=g[f]|KB(a,c);}}
function Jk(a,b){return (-1)<<(b%32|0);}
function KB(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0);}
function OC(a,b){var c,d;c=b/32|0;if(c<a.bx.data.length){d=a.bx.data;d[c]=d[c]&Np((-2),b%32|0);if(b==(a.cm-1|0))Ic(a);}}
function AIE(a,b,c){var d,e,f,g,h;if(b>c){d=new BO;O(d);M(d);}if(b>=a.cm)return;c=CB(a.cm,c);e=b/32|0;f=c/32|0;if(e==f){g=a.bx.data;g[e]=g[e]&(KB(a,b)|Jk(a,c));}else{g=a.bx.data;g[e]=g[e]&KB(a,b);h=e+1|0;while(h<f){a.bx.data[h]=0;h=h+1|0;}g=a.bx.data;g[f]=g[f]&Jk(a,c);}Ic(a);}
function EJ(a,b){var c;c=b/32|0;return c<a.bx.data.length&&a.bx.data[c]&1<<(b%32|0)?1:0;}
function I3(a,b){var c,d,e;if(b>=a.cm)return (-1);c=b/32|0;d=a.bx.data[c]>>>(b%32|0);if(d)return JF(d)+b|0;d=(a.cm+31|0)/32|0;e=c+1|0;while(e<d){if(a.bx.data[e])return (e*32|0)+JF(a.bx.data[e])|0;e=e+1|0;}return (-1);}
function AEs(a,b){var c,d,e;if(b>=a.cm)return b;c=b/32|0;d=(a.bx.data[c]^(-1))>>>(b%32|0);if(d)return JF(d)+b|0;d=(a.cm+31|0)/32|0;e=c+1|0;while(e<d){if(a.bx.data[e]!=(-1))return (e*32|0)+JF(a.bx.data[e]^(-1))|0;e=e+1|0;}return a.cm;}
function KH(a,b){var c,d,e,f;if(a.bx.data.length>=b)return;c=DE((b*3|0)/2|0,(a.bx.data.length*2|0)+1|0);d=a.bx.data;e=$rt_createIntArray(c);f=e.data;b=CB(c,d.length);c=0;while(c<b){f[c]=d[c];c=c+1|0;}a.bx=e;}
function Ic(a){var b,c,d;b=(a.cm+31|0)/32|0;a.cm=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=TA(a.bx.data[c]);if(d<32)break;c=c+(-1)|0;a.cm=a.cm-32|0;}a.cm=a.cm-d|0;}}
function AD8(a,b){var c,d;c=CB(a.bx.data.length,b.bx.data.length);d=0;while(d<c){if(a.bx.data[d]&b.bx.data[d])return 1;d=d+1|0;}return 0;}
function Ec(a,b){var c,d,e;c=CB(a.bx.data.length,b.bx.data.length);d=0;while(d<c){e=a.bx.data;e[d]=e[d]&b.bx.data[d];d=d+1|0;}while(c<a.bx.data.length){a.bx.data[c]=0;c=c+1|0;}a.cm=CB(a.cm,b.cm);Ic(a);}
function G1(a,b){var c,d,e;c=CB(a.bx.data.length,b.bx.data.length);d=0;while(d<c){e=a.bx.data;e[d]=e[d]&(b.bx.data[d]^(-1));d=d+1|0;}Ic(a);}
function Hu(a,b){var c,d,e;a.cm=DE(a.cm,b.cm);KH(a,(a.cm+31|0)/32|0);c=CB(a.bx.data.length,b.cm);d=0;while(d<c){e=a.bx.data;e[d]=e[d]|b.bx.data[d];d=d+1|0;}}
function Hg(a,b){var c,d,e;a.cm=DE(a.cm,b.cm);KH(a,(a.cm+31|0)/32|0);c=CB(a.bx.data.length,b.cm);d=0;while(d<c){e=a.bx.data;e[d]=e[d]^b.bx.data[d];d=d+1|0;}Ic(a);}
function Os(a){return a.cm?0:1;}
function OK(){var a=this;CE.call(a);a.zS=null;a.Hr=0;}
function A5E(a,b){a.r=b;}
function ABJ(a,b,c,d){var e,f,g,h,i;e=d.fh;f=d.by;g=b+1|0;h=R(g,f);if(h>0){d.hs=1;return (-1);}i=Z(c,b);if(!a.zS.X(i))return (-1);if(Dt(i)){if(h<0&&DR(Z(c,g)))return (-1);}else if(DR(i)&&b>e&&Dt(Z(c,b-1|0)))return (-1);return a.r.k(g,c,d);}
function P9(){var a=this;CE.call(a);a.vQ=null;a.xU=null;}
function AEo(a,b){var c=new P9();AHk(c,a,b);return c;}
function AHk(a,b,c){Cz(a);a.vQ=b;a.xU=c;}
function ATI(a,b,c,d){var e;e=a.vQ.k(b,c,d);if(e<0)e=ABJ(a.xU,b,c,d);if(e>=0)return e;return (-1);}
function A8y(a,b){a.r=b;a.xU.r=b;a.vQ.cb(b);}
function AUg(a,b){return 1;}
function AT2(a,b){return 1;}
function EO(){var a=this;CE.call(a);a.h2=null;a.Ge=0;}
function A6S(a){var b=new EO();We(b,a);return b;}
function We(a,b){Cz(a);a.h2=b.sR();a.Ge=b.cj;}
function A5o(a,b,c,d){var e,f,g;e=d.by;if(b<e){f=b+1|0;g=Z(c,b);if(a.X(g)){b=a.r.k(f,c,d);if(b>0)return b;}if(f<e){b=f+1|0;f=Z(c,f);if(J6(g,f)&&a.X(EI(g,f)))return a.r.k(b,c,d);}}return (-1);}
function AV_(a,b){return a.h2.X(b);}
function ATD(a,b){if(b instanceof EY)return a.h2.X(b.kC);if(b instanceof Fw)return a.h2.X(b.gv);if(b instanceof EO)return KE(a.h2,b.h2);if(!(b instanceof Fo))return 1;return KE(a.h2,b.j5);}
function AXk(a){return a.h2;}
function A91(a,b){a.r=b;}
function AVS(a,b){return 1;}
function MR(){EO.call(this);}
function AW$(a,b){return a.h2.X(GQ(GP(b)));}
function Zx(){var a=this;CI.call(a);a.Dl=null;a.F2=0;}
function AWI(a){var b=new Zx();AYS(b,a);return b;}
function AYS(a,b){EM(a);a.Dl=b.sR();a.F2=b.cj;}
function A6W(a,b,c){return !a.Dl.X(ET(FF(Z(c,b))))?(-1):1;}
function Fo(){var a=this;CI.call(a);a.j5=null;a.Gx=0;}
function A1a(a){var b=new Fo();AZH(b,a);return b;}
function AZH(a,b){EM(a);a.j5=b.sR();a.Gx=b.cj;}
function S$(a,b,c){return !a.j5.X(Z(c,b))?(-1):1;}
function AZp(a,b){if(b instanceof Fw)return a.j5.X(b.gv);if(b instanceof Fo)return KE(a.j5,b.j5);if(!(b instanceof EO)){if(!(b instanceof EY))return 1;return 0;}return KE(a.j5,b.h2);}
function A8A(a){return a.j5;}
function T8(){var a=this;CE.call(a);a.jX=null;a.x_=null;a.oA=0;}
function A$w(a,b){var c=new T8();A3u(c,a,b);return c;}
function A3u(a,b,c){Cz(a);a.jX=b;a.oA=c;}
function AYd(a,b){a.r=b;}
function Qa(a){if(a.x_===null)a.x_=AIb(a.jX);return a.x_;}
function ASU(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=d.by;f=$rt_createIntArray(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=Z(c,b);k=j-44032|0;if(k>=0&&k<11172){b=4352+(k/588|0)|0;l=4449+((k%588|0)/28|0)|0;k=k%28|0;if(!k){m=$rt_createIntArray(2);n=m.data;n[0]=b;n[1]=l;}else{o=4519+k|0;m=$rt_createIntArray(3);n=m.data;n[0]=b;n[1]=l;n[2]=o;}}else m=null;if(m!==null){m=m.data;l=0;if(m.length!=a.oA)return (-1);while(true){if(l>=a.oA)return a.r.k(i,c,d);if(m[l]!=a.jX.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]
=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=Z(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=Z(c,k);h=j-4519|0;}if(h>=0&&h<28){b=k+1|0;f[2]=j;return a.oA==3&&f[0]==a.jX.data[0]&&f[1]==a.jX.data[1]&&f[2]==a.jX.data[2]?a.r.k(b,c,d):(-1);}return a.oA==2&&f[0]==a.jX.data[0]&&f[1]==a.jX.data[1]?a.r.k(k,c,d):(-1);}return (-1);}return (-1);}
function A4i(a,b){return b instanceof T8&&!DC(Qa(b),Qa(a))?0:1;}
function A1h(a,b){return 1;}
function Fw(){CI.call(this);this.gv=0;}
function AAh(a){var b=new Fw();AZJ(b,a);return b;}
function AZJ(a,b){EM(a);a.gv=b;}
function A6O(a){return 1;}
function AWE(a,b,c){return a.gv!=Z(c,b)?(-1):1;}
function AVG(a,b,c,d){var e,f,g,h;if(!(c instanceof B4))return Jf(a,b,c,d);e=c;f=d.by;while(true){if(b>=f)return (-1);g=Hl(e,a.gv,b);if(g<0)return (-1);h=a.r;b=g+1|0;if(h.k(b,c,d)>=0)break;}return g;}
function AXl(a,b,c,d,e){var f,g;if(!(d instanceof B4))return Jq(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=Ik(f,a.gv,c);if(g<0)break a;if(g<b)break a;if(a.r.k(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AT0(a){return a.gv;}
function A1b(a,b){if(b instanceof Fw)return b.gv!=a.gv?0:1;if(!(b instanceof Fo)){if(b instanceof EO)return b.X(a.gv);if(!(b instanceof EY))return 1;return 0;}return S$(b,0,SG(a.gv))<=0?0:1;}
function AGT(){CI.call(this);this.BU=0;}
function A9a(a){var b=new AGT();A7V(b,a);return b;}
function A7V(a,b){EM(a);a.BU=ET(FF(b));}
function A2W(a,b,c){return a.BU!=ET(FF(Z(c,b)))?(-1):1;}
function XQ(){var a=this;CI.call(a);a.Bu=0;a.Ch=0;}
function A4z(a){var b=new XQ();A0g(b,a);return b;}
function A0g(a,b){EM(a);a.Bu=b;a.Ch=Kd(b);}
function AS_(a,b,c){return a.Bu!=Z(c,b)&&a.Ch!=Z(c,b)?(-1):1;}
function GK(){var a=this;CE.call(a);a.pX=0;a.um=null;a.tO=null;a.tM=0;}
function Bc0(a,b){var c=new GK();Pg(c,a,b);return c;}
function Pg(a,b,c){Cz(a);a.pX=1;a.tO=b;a.tM=c;}
function A_h(a,b){a.r=b;}
function AZd(a,b,c,d){var e,f,g,h,i,j,k,l;e=$rt_createIntArray(4);f=d.by;if(b>=f)return (-1);g=LH(a,b,c,f);h=b+a.pX|0;i=AQS(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;Di(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=LH(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=AQS(g).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.pX|0;if(h>=f){b=k;break a;}g=LH(a,h,c,f);b=k;}}}if(b!=a.tM)return (-1);i=e.data;g=0;while
(true){if(g>=b)return a.r.k(h,c,d);if(i[g]!=a.tO.data[g])break;g=g+1|0;}return (-1);}
function Sy(a){var b,c;if(a.um===null){b=new S;V(b);c=0;while(c<a.tM){Hm(b,Iy(a.tO.data[c]));c=c+1|0;}a.um=T(b);}return a.um;}
function LH(a,b,c,d){var e,f,g;a.pX=1;if(b>=(d-1|0))e=Z(c,b);else{d=b+1|0;e=Z(c,b);f=Z(c,d);if(J6(e,f)){g=$rt_createCharArray(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&Dt(g[0])&&DR(g[1])?EI(g[0],g[1]):g[0];a.pX=2;}}return e;}
function AXz(a,b){return b instanceof GK&&!DC(Sy(b),Sy(a))?0:1;}
function A88(a,b){return 1;}
function SM(){GK.call(this);}
function V5(){GK.call(this);}
function S7(){DW.call(this);}
function A4P(a,b,c,d){var e;while(true){e=a.bQ.k(b,c,d);if(e<=0)break;b=e;}return a.r.k(b,c,d);}
function UB(){DW.call(this);}
function A7O(a,b,c,d){var e;e=a.bQ.k(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.bQ.k(e,c,d);if(b<=e)break;e=b;}b=e;}return a.r.k(b,c,d);}
function Hy(){DW.call(this);}
function A9Y(a,b,c,d){var e;if(!a.bQ.b4(d))return a.r.k(b,c,d);e=a.bQ.k(b,c,d);if(e>=0)return e;return a.r.k(b,c,d);}
function A$R(a,b){a.r=b;a.bQ.cb(b);}
function PP(){Hy.call(this);}
function AXi(a,b,c,d){var e;e=a.bQ.k(b,c,d);if(e<=0)e=b;return a.r.k(e,c,d);}
function A8b(a,b){a.r=b;}
function G$(){var a=this;DW.call(a);a.kG=null;a.hy=0;}
function Bmk(a,b,c,d,e){var f=new G$();MQ(f,a,b,c,d,e);return f;}
function MQ(a,b,c,d,e,f){Ef(a,c,d,e);a.kG=b;a.hy=f;}
function A_J(a,b,c,d){var e,f;e=Tk(d,a.hy);if(!a.bQ.b4(d))return a.r.k(b,c,d);if(e>=a.kG.ir)return a.r.k(b,c,d);f=a.hy;e=e+1|0;FI(d,f,e);f=a.bQ.k(b,c,d);if(f>=0){FI(d,a.hy,0);return f;}f=a.hy;e=e+(-1)|0;FI(d,f,e);if(e>=a.kG.jg)return a.r.k(b,c,d);FI(d,a.hy,0);return (-1);}
function OW(){G$.call(this);}
function AWV(a,b,c,d){var e,f,g;e=0;f=a.kG.ir;a:{while(true){g=a.bQ.k(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.kG.jg)return (-1);return a.r.k(b,c,d);}
function Qx(){DW.call(this);}
function A2a(a,b,c,d){var e;if(!a.bQ.b4(d))return a.r.k(b,c,d);e=a.r.k(b,c,d);if(e>=0)return e;return a.bQ.k(b,c,d);}
function UU(){Hy.call(this);}
function AUi(a,b,c,d){var e;if(!a.bQ.b4(d))return a.r.k(b,c,d);e=a.r.k(b,c,d);if(e<0)e=a.bQ.k(b,c,d);return e;}
function RS(){G$.call(this);}
function A3E(a,b,c,d){var e,f;e=Tk(d,a.hy);if(!a.bQ.b4(d))return a.r.k(b,c,d);if(e>=a.kG.ir){FI(d,a.hy,0);return a.r.k(b,c,d);}if(e<a.kG.jg){FI(d,a.hy,e+1|0);f=a.bQ.k(b,c,d);}else{f=a.r.k(b,c,d);if(f>=0){FI(d,a.hy,0);return f;}FI(d,a.hy,e+1|0);f=a.bQ.k(b,c,d);}return f;}
function Qy(){E4.call(this);}
function A_B(a,b,c,d){var e;e=d.by;if(e>b)return a.r.eW(b,e,c,d);return a.r.k(b,c,d);}
function A0N(a,b,c,d){var e;e=d.by;if(a.r.eW(b,e,c,d)>=0)return b;return (-1);}
function TW(){E4.call(this);this.uv=null;}
function AZq(a,b,c,d){var e,f;e=d.by;f=Wo(a,b,e,c);if(f>=0)e=f;if(e>b)return a.r.eW(b,e,c,d);return a.r.k(b,c,d);}
function ASX(a,b,c,d){var e,f,g,h;e=d.by;f=a.r.eJ(b,c,d);if(f<0)return (-1);g=Wo(a,f,e,c);if(g>=0)e=g;g=a.r.eW(f,e,c,d);if(f<g)f=g;if(f<=0)h=f?(-1):0;else{h=f-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.uv.ox(Z(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=f?h:h+1|0;return b;}
function Wo(a,b,c,d){while(true){if(b>=c)return (-1);if(a.uv.ox(Z(d,b)))break;b=b+1|0;}return b;}
function Gn(){D.call(this);}
var Bml=null;var Bmm=null;function Up(b){if(!(b&1)){if(Bmm!==null)return Bmm;Bmm=new Wy;return Bmm;}if(Bml!==null)return Bml;Bml=new Wx;return Bml;}
function Xw(){D7.call(this);}
function ATv(a,b,c,d){var e;a:{while(true){if((b+a.cN.eb()|0)>d.by)break a;e=a.cN.dn(b,c);if(e<1)break;b=b+e|0;}}return a.r.k(b,c,d);}
function Sq(){FX.call(this);}
function AYB(a,b,c,d){var e;if((b+a.cN.eb()|0)<=d.by){e=a.cN.dn(b,c);if(e>=1)b=b+e|0;}return a.r.k(b,c,d);}
function Ui(){GF.call(this);}
function A9F(a,b,c,d){var e,f,g,h,i;e=a.k2.jg;f=a.k2.ir;g=0;while(true){if(g>=e){a:{while(true){if(g>=f)break a;if((b+a.cN.eb()|0)>d.by)break a;h=a.cN.dn(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}}return a.r.k(b,c,d);}if((b+a.cN.eb()|0)>d.by){d.hs=1;return (-1);}i=a.cN.dn(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function US(){D7.call(this);}
function AZj(a,b,c,d){var e;while(true){e=a.r.k(b,c,d);if(e>=0)break;if((b+a.cN.eb()|0)<=d.by){e=a.cN.dn(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
function V7(){FX.call(this);}
function ATz(a,b,c,d){var e;e=a.r.k(b,c,d);if(e>=0)return e;return a.bQ.k(b,c,d);}
function Qi(){GF.call(this);}
function A9O(a,b,c,d){var e,f,g,h,i;e=a.k2.jg;f=a.k2.ir;g=0;while(true){if(g>=e){a:{while(true){h=a.r.k(b,c,d);if(h>=0)break;if((b+a.cN.eb()|0)<=d.by){h=a.cN.dn(b,c);b=b+h|0;g=g+1|0;}if(h<1)break a;if(g>f)break a;}return h;}return (-1);}if((b+a.cN.eb()|0)>d.by){d.hs=1;return (-1);}i=a.cN.dn(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function ABN(){Co.call(this);}
function A1f(){var a=new ABN();AVj(a);return a;}
function AVj(a){Cz(a);}
function A7e(a,b,c,d){if(b&&!(d.lp&&b==d.fh))return (-1);return a.r.k(b,c,d);}
function A6H(a,b){return 0;}
function AAo(){Co.call(this);this.Bh=0;}
function A$j(a){var b=new AAo();AXd(b,a);return b;}
function AXd(a,b){Cz(a);a.Bh=b;}
function A4a(a,b,c,d){var e,f,g;e=b<d.by?Z(c,b):32;f=!b?32:Z(c,b-1|0);g=d.oh?0:d.fh;return (e!=32&&!UY(a,e,b,g,c)?0:1)^(f!=32&&!UY(a,f,b-1|0,g,c)?0:1)^a.Bh?(-1):a.r.k(b,c,d);}
function A4g(a,b){return 0;}
function UY(a,b,c,d,e){var f;if(!Lc(b)&&b!=95){a:{if(Do(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=Z(e,c);if(Lc(f))return 0;if(Do(f)!=6)return 1;}}return 1;}return 0;}
function AJr(){Co.call(this);}
function Bal(){var a=new AJr();A0H(a);return a;}
function A0H(a){Cz(a);}
function AXc(a,b,c,d){if(b!=d.k4)return (-1);return a.r.k(b,c,d);}
function A2x(a,b){return 0;}
function SJ(){Co.call(this);this.md=0;}
function Ba7(a){var b=new SJ();AQz(b,a);return b;}
function AQz(a,b){Cz(a);a.md=b;}
function A8Z(a,b,c,d){var e,f,g;e=!d.lp?Bi(c):d.by;if(b>=e){Cv(d,a.md,0);return a.r.k(b,c,d);}f=e-b|0;if(f==2&&Z(c,b)==13&&Z(c,b+1|0)==10){Cv(d,a.md,0);return a.r.k(b,c,d);}a:{if(f==1){g=Z(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}Cv(d,a.md,0);return a.r.k(b,c,d);}
function A4H(a,b){var c;c=!Ep(b,a.md)?0:1;Cv(b,a.md,(-1));return c;}
function AQ7(){Co.call(this);}
function Bbd(){var a=new AQ7();AW4(a);return a;}
function AW4(a){Cz(a);}
function A8t(a,b,c,d){if(b<(d.oh?Bi(c):d.by))return (-1);d.hs=1;d.Jk=1;return a.r.k(b,c,d);}
function A2V(a,b){return 0;}
function AIQ(){Co.call(this);this.DN=null;}
function BcJ(a){var b=new AIQ();A81(b,a);return b;}
function A81(a,b){Cz(a);a.DN=b;}
function A4C(a,b,c,d){a:{if(b!=d.by){if(!b)break a;if(d.lp&&b==d.fh)break a;if(a.DN.Ec(Z(c,b-1|0),Z(c,b)))break a;}return (-1);}return a.r.k(b,c,d);}
function AWm(a,b){return 0;}
function AGi(){CE.call(this);}
function Bbn(){var a=new AGi();A8j(a);return a;}
function A8j(a){Cz(a);}
function A2f(a,b,c,d){var e,f,g,h;e=d.by;f=b+1|0;if(f>e){d.hs=1;return (-1);}g=Z(c,b);if(Dt(g)){h=b+2|0;if(h<=e&&J6(g,Z(c,f)))return a.r.k(h,c,d);}return a.r.k(f,c,d);}
function A4l(a,b){a.r=b;}
function A8g(a){return (-2147483602);}
function A4j(a,b){return 1;}
function ZJ(){CE.call(this);this.uU=null;}
function BaZ(a){var b=new ZJ();AUQ(b,a);return b;}
function AUQ(a,b){Cz(a);a.uU=b;}
function A8o(a,b,c,d){var e,f,g,h;e=d.by;f=b+1|0;if(f>e){d.hs=1;return (-1);}g=Z(c,b);if(Dt(g)){b=b+2|0;if(b<=e){h=Z(c,f);if(J6(g,h))return a.uU.ox(EI(g,h))?(-1):a.r.k(b,c,d);}}return a.uU.ox(g)?(-1):a.r.k(f,c,d);}
function A9v(a,b){a.r=b;}
function ASI(a){return (-2147483602);}
function A2m(a,b){return 1;}
function AQK(){Co.call(this);this.pN=0;}
function BaK(a){var b=new AQK();A5V(b,a);return b;}
function A5V(a,b){Cz(a);a.pN=b;}
function AXG(a,b,c,d){var e;e=!d.lp?Bi(c):d.by;if(b>=e){Cv(d,a.pN,0);return a.r.k(b,c,d);}if((e-b|0)==1&&Z(c,b)==10){Cv(d,a.pN,1);return a.r.k(b+1|0,c,d);}return (-1);}
function A5R(a,b){var c;c=!Ep(b,a.pN)?0:1;Cv(b,a.pN,(-1));return c;}
function AN8(){Co.call(this);this.oo=0;}
function Bat(a){var b=new AN8();A6d(b,a);return b;}
function A6d(a,b){Cz(a);a.oo=b;}
function AY7(a,b,c,d){if((!d.lp?Bi(c)-b|0:d.by-b|0)<=0){Cv(d,a.oo,0);return a.r.k(b,c,d);}if(Z(c,b)!=10)return (-1);Cv(d,a.oo,1);return a.r.k(b+1|0,c,d);}
function A5N(a,b){var c;c=!Ep(b,a.oo)?0:1;Cv(b,a.oo,(-1));return c;}
function AIc(){Co.call(this);this.lI=0;}
function A_1(a){var b=new AIc();A_L(b,a);return b;}
function A_L(a,b){Cz(a);a.lI=b;}
function A6C(a,b,c,d){var e,f,g;e=!d.lp?Bi(c)-b|0:d.fh-b|0;if(!e){Cv(d,a.lI,0);return a.r.k(b,c,d);}if(e<2){f=Z(c,b);g=97;}else{f=Z(c,b);g=Z(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:Cv(d,a.lI,0);return a.r.k(b,c,d);case 13:if(g!=10){Cv(d,a.lI,0);return a.r.k(b,c,d);}Cv(d,a.lI,0);return a.r.k(b,c,d);default:}return (-1);}
function AUU(a,b){var c;c=!Ep(b,a.lI)?0:1;Cv(b,a.lI,(-1));return c;}
function IT(){var a=this;CE.call(a);a.y7=0;a.mJ=0;}
function BcW(a,b){var c=new IT();PE(c,a,b);return c;}
function PE(a,b,c){Cz(a);a.y7=b;a.mJ=c;}
function ATw(a,b,c,d){var e,f,g,h;e=HJ(a,d);if(e!==null&&(b+Bi(e)|0)<=d.by){f=0;while(true){if(f>=Bi(e)){Cv(d,a.mJ,Bi(e));return a.r.k(b+Bi(e)|0,c,d);}g=Z(e,f);h=b+f|0;if(g!=Z(c,h)&&Kd(Z(e,f))!=Z(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function A84(a,b){a.r=b;}
function HJ(a,b){return AM7(b,a.y7);}
function A0c(a,b){var c;c=!Ep(b,a.mJ)?0:1;Cv(b,a.mJ,(-1));return c;}
function AQV(){IT.call(this);}
function BbC(a,b){var c=new AQV();A$K(c,a,b);return c;}
function A$K(a,b,c){PE(a,b,c);}
function AU1(a,b,c,d){var e,f;e=HJ(a,d);if(e!==null&&(b+Bi(e)|0)<=d.by){f=!Wd(c,e,b)?(-1):Bi(e);if(f<0)return (-1);Cv(d,a.mJ,f);return a.r.k(b+f|0,c,d);}return (-1);}
function A1n(a,b,c,d){var e,f,g;e=HJ(a,d);f=d.fh;if(e!==null&&(b+Bi(e)|0)<=f){g=c;while(true){if(b>f)return (-1);b=AKH(g,e,b);if(b<0)return (-1);if(a.r.k(b+Bi(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function ATo(a,b,c,d,e){var f,g,h;f=HJ(a,e);if(f===null)return (-1);g=d;a:{while(true){if(c<b)return (-1);h=AAy(g,f,c);if(h<0)break a;if(h<b)break a;if(a.r.k(h+Bi(f)|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function A7I(a,b){return 1;}
function AMf(){IT.call(this);}
function Bas(a,b){var c=new AMf();AWg(c,a,b);return c;}
function AWg(a,b,c){PE(a,b,c);}
function AX9(a,b,c,d){var e,f;e=HJ(a,d);if(e!==null&&(b+Bi(e)|0)<=d.by){f=0;while(true){if(f>=Bi(e)){Cv(d,a.mJ,Bi(e));return a.r.k(b+Bi(e)|0,c,d);}if(ET(FF(Z(e,f)))!=ET(FF(Z(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
function AMT(){var a=this;CI.call(a);a.e4=null;a.w7=null;a.u6=null;}
function Bav(a){var b=new AMT();A40(b,a);return b;}
function A40(a,b){var c;EM(a);a.e4=T(b);a.dl=Oz(b);a.w7=A8f(a.dl);a.u6=A8f(a.dl);c=0;while(c<(a.dl-1|0)){Qk(a.w7,Z(a.e4,c),(a.dl-c|0)-1|0);Qk(a.u6,Z(a.e4,(a.dl-c|0)-1|0),(a.dl-c|0)-1|0);c=c+1|0;}}
function AVf(a,b,c){return !LE(a,c,b)?(-1):a.dl;}
function A3_(a,b,c,d){var e,f;e=d.by;while(true){if(b>e)return (-1);f=AQ$(a,c,b,e);if(f<0)return (-1);if(a.r.k(f+a.dl|0,c,d)>=0)break;b=f+1|0;}return f;}
function A5Y(a,b,c,d,e){while(true){if(c<b)return (-1);c=AQx(a,d,b,c);if(c<0)return (-1);if(a.r.k(c+a.dl|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AWO(a,b){var c;if(b instanceof Fw)return b.gv!=Z(a.e4,0)?0:1;if(b instanceof Fo)return S$(b,0,Ev(a.e4,0,1))<=0?0:1;if(!(b instanceof EO)){if(!(b instanceof EY))return 1;return Bi(a.e4)>1&&b.kC==EI(Z(a.e4,0),Z(a.e4,1))?1:0;}a:{b:{b=b;if(!b.X(Z(a.e4,0))){if(Bi(a.e4)<=1)break b;if(!b.X(EI(Z(a.e4,0),Z(a.e4,1))))break b;}c=1;break a;}c=0;}return c;}
function AQ$(a,b,c,d){var e,f;e=Z(a.e4,a.dl-1|0);while(true){if(c>(d-a.dl|0))return (-1);f=Z(b,(c+a.dl|0)-1|0);if(f==e&&LE(a,b,c))break;c=c+VG(a.w7,f)|0;}return c;}
function AQx(a,b,c,d){var e,f,g;e=Z(a.e4,0);f=(Bi(b)-d|0)-a.dl|0;if(f<=0)d=d+f|0;while(true){if(d<c)return (-1);g=Z(b,d);if(g==e&&LE(a,b,d))break;d=d-VG(a.u6,g)|0;}return d;}
function LE(a,b,c){var d;d=0;while(d<a.dl){if(Z(b,d+c|0)!=Z(a.e4,d))return 0;d=d+1|0;}return 1;}
function XH(){CI.call(this);this.sN=null;}
function BcX(a){var b=new XH();A$m(b,a);return b;}
function A$m(a,b){var c,d;EM(a);c=new S;V(c);d=0;while(d<Oz(b)){Dx(c,ET(FF(AIe(b,d))));d=d+1|0;}a.sN=T(c);a.dl=J_(c);}
function AYa(a,b,c){var d;d=0;while(true){if(d>=Bi(a.sN))return Bi(a.sN);if(Z(a.sN,d)!=ET(FF(Z(c,b+d|0))))break;d=d+1|0;}return (-1);}
function OZ(){CI.call(this);this.pL=null;}
function A9H(a,b,c){var d,e,f;d=0;while(true){if(d>=Bi(a.pL))return Bi(a.pL);e=Z(a.pL,d);f=b+d|0;if(e!=Z(c,f)&&Kd(Z(a.pL,d))!=Z(c,f))break;d=d+1|0;}return (-1);}
function Ia(){D.call(this);}
var Bmn=null;var Bmo=null;var Bmp=null;function Bmq(){var a=new Ia();AF9(a);return a;}
function AF9(a){return;}
function ARt(a,b){var c,d,e;c=0;while(true){if(c>=Bmp.data.length){d=new MS;Bl(d,B(3));d.G_=B(3);d.Ju=b;M(d);}e=Bmp.data[c].data;if(DC(b,e[0]))break;c=c+1|0;}return e[1];}
function AAq(){var b,c,d,e;Bmn=Bba();Bmo=Bcc();b=J($rt_arraycls(D),194);c=b.data;d=J(D,2);e=d.data;e[0]=B(642);e[1]=Bbq();c[0]=d;d=J(D,2);e=d.data;e[0]=B(643);e[1]=A_X();c[1]=d;d=J(D,2);e=d.data;e[0]=B(644);e[1]=BcH();c[2]=d;d=J(D,2);e=d.data;e[0]=B(645);e[1]=BcP();c[3]=d;d=J(D,2);e=d.data;e[0]=B(646);e[1]=Bmo;c[4]=d;d=J(D,2);e=d.data;e[0]=B(647);e[1]=Bci();c[5]=d;d=J(D,2);e=d.data;e[0]=B(648);e[1]=Bay();c[6]=d;d=J(D,2);e=d.data;e[0]=B(649);e[1]=BbE();c[7]=d;d=J(D,2);e=d.data;e[0]=B(650);e[1]=BbB();c[8]=d;d
=J(D,2);e=d.data;e[0]=B(651);e[1]=A__();c[9]=d;d=J(D,2);e=d.data;e[0]=B(652);e[1]=Ban();c[10]=d;d=J(D,2);e=d.data;e[0]=B(653);e[1]=BbG();c[11]=d;d=J(D,2);e=d.data;e[0]=B(654);e[1]=BaU();c[12]=d;d=J(D,2);e=d.data;e[0]=B(655);e[1]=A_V();c[13]=d;d=J(D,2);e=d.data;e[0]=B(656);e[1]=BcL();c[14]=d;d=J(D,2);e=d.data;e[0]=B(657);e[1]=Bam();c[15]=d;d=J(D,2);e=d.data;e[0]=B(658);e[1]=Bcg();c[16]=d;d=J(D,2);e=d.data;e[0]=B(659);e[1]=BbW();c[17]=d;d=J(D,2);e=d.data;e[0]=B(660);e[1]=Bch();c[18]=d;d=J(D,2);e=d.data;e[0]=B(661);e[1]
=Bac();c[19]=d;d=J(D,2);e=d.data;e[0]=B(662);e[1]=BcQ();c[20]=d;d=J(D,2);e=d.data;e[0]=B(663);e[1]=BbS();c[21]=d;d=J(D,2);e=d.data;e[0]=B(664);e[1]=BaM();c[22]=d;d=J(D,2);e=d.data;e[0]=B(665);e[1]=BcG();c[23]=d;d=J(D,2);e=d.data;e[0]=B(666);e[1]=BcD();c[24]=d;d=J(D,2);e=d.data;e[0]=B(667);e[1]=Bbm();c[25]=d;d=J(D,2);e=d.data;e[0]=B(668);e[1]=Bab();c[26]=d;d=J(D,2);e=d.data;e[0]=B(669);e[1]=Bcw();c[27]=d;d=J(D,2);e=d.data;e[0]=B(670);e[1]=Bmn;c[28]=d;d=J(D,2);e=d.data;e[0]=B(671);e[1]=BaO();c[29]=d;d=J(D,2);e
=d.data;e[0]=B(44);e[1]=BbF();c[30]=d;d=J(D,2);e=d.data;e[0]=B(672);e[1]=Bmn;c[31]=d;d=J(D,2);e=d.data;e[0]=B(58);e[1]=A_U();c[32]=d;d=J(D,2);e=d.data;e[0]=B(673);e[1]=Bmo;c[33]=d;d=J(D,2);e=d.data;e[0]=B(59);e[1]=Bar();c[34]=d;d=J(D,2);e=d.data;e[0]=B(674);e[1]=W(0,127);c[35]=d;d=J(D,2);e=d.data;e[0]=B(675);e[1]=W(128,255);c[36]=d;d=J(D,2);e=d.data;e[0]=B(676);e[1]=W(256,383);c[37]=d;d=J(D,2);e=d.data;e[0]=B(677);e[1]=W(384,591);c[38]=d;d=J(D,2);e=d.data;e[0]=B(678);e[1]=W(592,687);c[39]=d;d=J(D,2);e=d.data;e[0]
=B(679);e[1]=W(688,767);c[40]=d;d=J(D,2);e=d.data;e[0]=B(680);e[1]=W(768,879);c[41]=d;d=J(D,2);e=d.data;e[0]=B(681);e[1]=W(880,1023);c[42]=d;d=J(D,2);e=d.data;e[0]=B(682);e[1]=W(1024,1279);c[43]=d;d=J(D,2);e=d.data;e[0]=B(683);e[1]=W(1280,1327);c[44]=d;d=J(D,2);e=d.data;e[0]=B(684);e[1]=W(1328,1423);c[45]=d;d=J(D,2);e=d.data;e[0]=B(685);e[1]=W(1424,1535);c[46]=d;d=J(D,2);e=d.data;e[0]=B(686);e[1]=W(1536,1791);c[47]=d;d=J(D,2);e=d.data;e[0]=B(687);e[1]=W(1792,1871);c[48]=d;d=J(D,2);e=d.data;e[0]=B(688);e[1]=
W(1872,1919);c[49]=d;d=J(D,2);e=d.data;e[0]=B(689);e[1]=W(1920,1983);c[50]=d;d=J(D,2);e=d.data;e[0]=B(690);e[1]=W(2304,2431);c[51]=d;d=J(D,2);e=d.data;e[0]=B(691);e[1]=W(2432,2559);c[52]=d;d=J(D,2);e=d.data;e[0]=B(692);e[1]=W(2560,2687);c[53]=d;d=J(D,2);e=d.data;e[0]=B(693);e[1]=W(2688,2815);c[54]=d;d=J(D,2);e=d.data;e[0]=B(694);e[1]=W(2816,2943);c[55]=d;d=J(D,2);e=d.data;e[0]=B(695);e[1]=W(2944,3071);c[56]=d;d=J(D,2);e=d.data;e[0]=B(696);e[1]=W(3072,3199);c[57]=d;d=J(D,2);e=d.data;e[0]=B(697);e[1]=W(3200,3327);c[58]
=d;d=J(D,2);e=d.data;e[0]=B(698);e[1]=W(3328,3455);c[59]=d;d=J(D,2);e=d.data;e[0]=B(699);e[1]=W(3456,3583);c[60]=d;d=J(D,2);e=d.data;e[0]=B(700);e[1]=W(3584,3711);c[61]=d;d=J(D,2);e=d.data;e[0]=B(701);e[1]=W(3712,3839);c[62]=d;d=J(D,2);e=d.data;e[0]=B(702);e[1]=W(3840,4095);c[63]=d;d=J(D,2);e=d.data;e[0]=B(703);e[1]=W(4096,4255);c[64]=d;d=J(D,2);e=d.data;e[0]=B(704);e[1]=W(4256,4351);c[65]=d;d=J(D,2);e=d.data;e[0]=B(705);e[1]=W(4352,4607);c[66]=d;d=J(D,2);e=d.data;e[0]=B(706);e[1]=W(4608,4991);c[67]=d;d=J(D,
2);e=d.data;e[0]=B(707);e[1]=W(4992,5023);c[68]=d;d=J(D,2);e=d.data;e[0]=B(708);e[1]=W(5024,5119);c[69]=d;d=J(D,2);e=d.data;e[0]=B(709);e[1]=W(5120,5759);c[70]=d;d=J(D,2);e=d.data;e[0]=B(710);e[1]=W(5760,5791);c[71]=d;d=J(D,2);e=d.data;e[0]=B(711);e[1]=W(5792,5887);c[72]=d;d=J(D,2);e=d.data;e[0]=B(712);e[1]=W(5888,5919);c[73]=d;d=J(D,2);e=d.data;e[0]=B(713);e[1]=W(5920,5951);c[74]=d;d=J(D,2);e=d.data;e[0]=B(714);e[1]=W(5952,5983);c[75]=d;d=J(D,2);e=d.data;e[0]=B(715);e[1]=W(5984,6015);c[76]=d;d=J(D,2);e=d.data;e[0]
=B(716);e[1]=W(6016,6143);c[77]=d;d=J(D,2);e=d.data;e[0]=B(717);e[1]=W(6144,6319);c[78]=d;d=J(D,2);e=d.data;e[0]=B(718);e[1]=W(6400,6479);c[79]=d;d=J(D,2);e=d.data;e[0]=B(719);e[1]=W(6480,6527);c[80]=d;d=J(D,2);e=d.data;e[0]=B(720);e[1]=W(6528,6623);c[81]=d;d=J(D,2);e=d.data;e[0]=B(721);e[1]=W(6624,6655);c[82]=d;d=J(D,2);e=d.data;e[0]=B(722);e[1]=W(6656,6687);c[83]=d;d=J(D,2);e=d.data;e[0]=B(723);e[1]=W(7424,7551);c[84]=d;d=J(D,2);e=d.data;e[0]=B(724);e[1]=W(7552,7615);c[85]=d;d=J(D,2);e=d.data;e[0]=B(725);e[1]
=W(7616,7679);c[86]=d;d=J(D,2);e=d.data;e[0]=B(726);e[1]=W(7680,7935);c[87]=d;d=J(D,2);e=d.data;e[0]=B(727);e[1]=W(7936,8191);c[88]=d;d=J(D,2);e=d.data;e[0]=B(728);e[1]=W(8192,8303);c[89]=d;d=J(D,2);e=d.data;e[0]=B(729);e[1]=W(8304,8351);c[90]=d;d=J(D,2);e=d.data;e[0]=B(730);e[1]=W(8352,8399);c[91]=d;d=J(D,2);e=d.data;e[0]=B(731);e[1]=W(8400,8447);c[92]=d;d=J(D,2);e=d.data;e[0]=B(732);e[1]=W(8448,8527);c[93]=d;d=J(D,2);e=d.data;e[0]=B(733);e[1]=W(8528,8591);c[94]=d;d=J(D,2);e=d.data;e[0]=B(734);e[1]=W(8592,
8703);c[95]=d;d=J(D,2);e=d.data;e[0]=B(735);e[1]=W(8704,8959);c[96]=d;d=J(D,2);e=d.data;e[0]=B(736);e[1]=W(8960,9215);c[97]=d;d=J(D,2);e=d.data;e[0]=B(737);e[1]=W(9216,9279);c[98]=d;d=J(D,2);e=d.data;e[0]=B(738);e[1]=W(9280,9311);c[99]=d;d=J(D,2);e=d.data;e[0]=B(739);e[1]=W(9312,9471);c[100]=d;d=J(D,2);e=d.data;e[0]=B(740);e[1]=W(9472,9599);c[101]=d;d=J(D,2);e=d.data;e[0]=B(741);e[1]=W(9600,9631);c[102]=d;d=J(D,2);e=d.data;e[0]=B(742);e[1]=W(9632,9727);c[103]=d;d=J(D,2);e=d.data;e[0]=B(743);e[1]=W(9728,9983);c[104]
=d;d=J(D,2);e=d.data;e[0]=B(744);e[1]=W(9984,10175);c[105]=d;d=J(D,2);e=d.data;e[0]=B(745);e[1]=W(10176,10223);c[106]=d;d=J(D,2);e=d.data;e[0]=B(746);e[1]=W(10224,10239);c[107]=d;d=J(D,2);e=d.data;e[0]=B(747);e[1]=W(10240,10495);c[108]=d;d=J(D,2);e=d.data;e[0]=B(748);e[1]=W(10496,10623);c[109]=d;d=J(D,2);e=d.data;e[0]=B(749);e[1]=W(10624,10751);c[110]=d;d=J(D,2);e=d.data;e[0]=B(750);e[1]=W(10752,11007);c[111]=d;d=J(D,2);e=d.data;e[0]=B(751);e[1]=W(11008,11263);c[112]=d;d=J(D,2);e=d.data;e[0]=B(752);e[1]=W(11264,
11359);c[113]=d;d=J(D,2);e=d.data;e[0]=B(753);e[1]=W(11392,11519);c[114]=d;d=J(D,2);e=d.data;e[0]=B(754);e[1]=W(11520,11567);c[115]=d;d=J(D,2);e=d.data;e[0]=B(755);e[1]=W(11568,11647);c[116]=d;d=J(D,2);e=d.data;e[0]=B(756);e[1]=W(11648,11743);c[117]=d;d=J(D,2);e=d.data;e[0]=B(757);e[1]=W(11776,11903);c[118]=d;d=J(D,2);e=d.data;e[0]=B(758);e[1]=W(11904,12031);c[119]=d;d=J(D,2);e=d.data;e[0]=B(759);e[1]=W(12032,12255);c[120]=d;d=J(D,2);e=d.data;e[0]=B(760);e[1]=W(12272,12287);c[121]=d;d=J(D,2);e=d.data;e[0]=B(761);e[1]
=W(12288,12351);c[122]=d;d=J(D,2);e=d.data;e[0]=B(762);e[1]=W(12352,12447);c[123]=d;d=J(D,2);e=d.data;e[0]=B(763);e[1]=W(12448,12543);c[124]=d;d=J(D,2);e=d.data;e[0]=B(764);e[1]=W(12544,12591);c[125]=d;d=J(D,2);e=d.data;e[0]=B(765);e[1]=W(12592,12687);c[126]=d;d=J(D,2);e=d.data;e[0]=B(766);e[1]=W(12688,12703);c[127]=d;d=J(D,2);e=d.data;e[0]=B(767);e[1]=W(12704,12735);c[128]=d;d=J(D,2);e=d.data;e[0]=B(768);e[1]=W(12736,12783);c[129]=d;d=J(D,2);e=d.data;e[0]=B(769);e[1]=W(12784,12799);c[130]=d;d=J(D,2);e=d.data;e[0]
=B(770);e[1]=W(12800,13055);c[131]=d;d=J(D,2);e=d.data;e[0]=B(771);e[1]=W(13056,13311);c[132]=d;d=J(D,2);e=d.data;e[0]=B(772);e[1]=W(13312,19893);c[133]=d;d=J(D,2);e=d.data;e[0]=B(773);e[1]=W(19904,19967);c[134]=d;d=J(D,2);e=d.data;e[0]=B(774);e[1]=W(19968,40959);c[135]=d;d=J(D,2);e=d.data;e[0]=B(775);e[1]=W(40960,42127);c[136]=d;d=J(D,2);e=d.data;e[0]=B(776);e[1]=W(42128,42191);c[137]=d;d=J(D,2);e=d.data;e[0]=B(777);e[1]=W(42752,42783);c[138]=d;d=J(D,2);e=d.data;e[0]=B(778);e[1]=W(43008,43055);c[139]=d;d=J(D,
2);e=d.data;e[0]=B(779);e[1]=W(44032,55203);c[140]=d;d=J(D,2);e=d.data;e[0]=B(780);e[1]=W(55296,56191);c[141]=d;d=J(D,2);e=d.data;e[0]=B(781);e[1]=W(56192,56319);c[142]=d;d=J(D,2);e=d.data;e[0]=B(782);e[1]=W(56320,57343);c[143]=d;d=J(D,2);e=d.data;e[0]=B(783);e[1]=W(57344,63743);c[144]=d;d=J(D,2);e=d.data;e[0]=B(784);e[1]=W(63744,64255);c[145]=d;d=J(D,2);e=d.data;e[0]=B(785);e[1]=W(64256,64335);c[146]=d;d=J(D,2);e=d.data;e[0]=B(786);e[1]=W(64336,65023);c[147]=d;d=J(D,2);e=d.data;e[0]=B(787);e[1]=W(65024,65039);c[148]
=d;d=J(D,2);e=d.data;e[0]=B(788);e[1]=W(65040,65055);c[149]=d;d=J(D,2);e=d.data;e[0]=B(789);e[1]=W(65056,65071);c[150]=d;d=J(D,2);e=d.data;e[0]=B(790);e[1]=W(65072,65103);c[151]=d;d=J(D,2);e=d.data;e[0]=B(791);e[1]=W(65104,65135);c[152]=d;d=J(D,2);e=d.data;e[0]=B(792);e[1]=W(65136,65279);c[153]=d;d=J(D,2);e=d.data;e[0]=B(793);e[1]=W(65280,65519);c[154]=d;d=J(D,2);e=d.data;e[0]=B(794);e[1]=W(0,1114111);c[155]=d;d=J(D,2);e=d.data;e[0]=B(795);e[1]=BbH();c[156]=d;d=J(D,2);e=d.data;e[0]=B(796);e[1]=CA(0,1);c[157]
=d;d=J(D,2);e=d.data;e[0]=B(797);e[1]=KU(62,1);c[158]=d;d=J(D,2);e=d.data;e[0]=B(798);e[1]=CA(1,1);c[159]=d;d=J(D,2);e=d.data;e[0]=B(799);e[1]=CA(2,1);c[160]=d;d=J(D,2);e=d.data;e[0]=B(800);e[1]=CA(3,0);c[161]=d;d=J(D,2);e=d.data;e[0]=B(801);e[1]=CA(4,0);c[162]=d;d=J(D,2);e=d.data;e[0]=B(802);e[1]=CA(5,1);c[163]=d;d=J(D,2);e=d.data;e[0]=B(803);e[1]=KU(448,1);c[164]=d;d=J(D,2);e=d.data;e[0]=B(804);e[1]=CA(6,1);c[165]=d;d=J(D,2);e=d.data;e[0]=B(805);e[1]=CA(7,0);c[166]=d;d=J(D,2);e=d.data;e[0]=B(806);e[1]=CA(8,
1);c[167]=d;d=J(D,2);e=d.data;e[0]=B(76);e[1]=KU(3584,1);c[168]=d;d=J(D,2);e=d.data;e[0]=B(807);e[1]=CA(9,1);c[169]=d;d=J(D,2);e=d.data;e[0]=B(808);e[1]=CA(10,1);c[170]=d;d=J(D,2);e=d.data;e[0]=B(809);e[1]=CA(11,1);c[171]=d;d=J(D,2);e=d.data;e[0]=B(810);e[1]=KU(28672,0);c[172]=d;d=J(D,2);e=d.data;e[0]=B(811);e[1]=CA(12,0);c[173]=d;d=J(D,2);e=d.data;e[0]=B(812);e[1]=CA(13,0);c[174]=d;d=J(D,2);e=d.data;e[0]=B(813);e[1]=CA(14,0);c[175]=d;d=J(D,2);e=d.data;e[0]=B(814);e[1]=Bb8(983040,1,1);c[176]=d;d=J(D,2);e=d.data;e[0]
=B(815);e[1]=CA(15,0);c[177]=d;d=J(D,2);e=d.data;e[0]=B(816);e[1]=CA(16,1);c[178]=d;d=J(D,2);e=d.data;e[0]=B(817);e[1]=CA(18,1);c[179]=d;d=J(D,2);e=d.data;e[0]=B(818);e[1]=BaH(19,0,1);c[180]=d;d=J(D,2);e=d.data;e[0]=B(819);e[1]=KU(1643118592,1);c[181]=d;d=J(D,2);e=d.data;e[0]=B(820);e[1]=CA(20,0);c[182]=d;d=J(D,2);e=d.data;e[0]=B(821);e[1]=CA(21,0);c[183]=d;d=J(D,2);e=d.data;e[0]=B(822);e[1]=CA(22,0);c[184]=d;d=J(D,2);e=d.data;e[0]=B(823);e[1]=CA(23,0);c[185]=d;d=J(D,2);e=d.data;e[0]=B(824);e[1]=CA(24,1);c[186]
=d;d=J(D,2);e=d.data;e[0]=B(825);e[1]=KU(2113929216,1);c[187]=d;d=J(D,2);e=d.data;e[0]=B(826);e[1]=CA(25,1);c[188]=d;d=J(D,2);e=d.data;e[0]=B(827);e[1]=CA(26,0);c[189]=d;d=J(D,2);e=d.data;e[0]=B(828);e[1]=CA(27,0);c[190]=d;d=J(D,2);e=d.data;e[0]=B(829);e[1]=CA(28,1);c[191]=d;d=J(D,2);e=d.data;e[0]=B(830);e[1]=CA(29,0);c[192]=d;d=J(D,2);e=d.data;e[0]=B(831);e[1]=CA(30,0);c[193]=d;Bmp=b;}
function By(){var a=this;D.call(a);a.vr=null;a.uy=null;}
function APR(a,b){if(!b&&a.vr===null)a.vr=a.bW();else if(b&&a.uy===null)a.uy=Fz(a.bW(),1);if(b)return a.uy;return a.vr;}
function Tb(){CI.call(this);this.z_=0;}
function A0v(a,b,c){var d,e;d=b+1|0;e=Z(c,b);d=Z(c,d);return a.z_!=GQ(GP(EI(e,d)))?(-1):2;}
function NN(){CE.call(this);this.mu=0;}
function AYV(a){var b=new NN();AUp(b,a);return b;}
function AUp(a,b){Cz(a);a.mu=b;}
function A8G(a,b){a.r=b;}
function A4I(a,b,c,d){var e,f;e=b+1|0;if(e>d.by){d.hs=1;return (-1);}f=Z(c,b);if(b>d.fh&&Dt(Z(c,b-1|0)))return (-1);if(a.mu!=f)return (-1);return a.r.k(e,c,d);}
function AWN(a,b,c,d){var e,f,g,h,i;if(!(c instanceof B4))return Jf(a,b,c,d);e=c;f=d.fh;g=d.by;while(true){if(b>=g)return (-1);h=Hl(e,a.mu,b);if(h<0)return (-1);if(h>f&&Dt(Z(e,h-1|0))){b=h+1|0;continue;}i=a.r;b=h+1|0;if(i.k(b,c,d)>=0)break;}return h;}
function A48(a,b,c,d,e){var f,g;if(!(d instanceof B4))return Jq(a,b,c,d,e);f=e.fh;g=d;a:{while(true){if(c<b)return (-1);c=Ik(g,a.mu,c);if(c<0)break a;if(c<b)break a;if(c>f&&Dt(Z(g,c-1|0))){c=c+(-2)|0;continue;}if(a.r.k(c+1|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function ATj(a,b){if(b instanceof Fw)return 0;if(b instanceof Fo)return 0;if(b instanceof EO)return 0;if(b instanceof EY)return 0;if(b instanceof NT)return 0;if(!(b instanceof NN))return 1;return b.mu!=a.mu?0:1;}
function A04(a,b){return 1;}
function NT(){CE.call(this);this.l4=0;}
function A6D(a){var b=new NT();AY3(b,a);return b;}
function AY3(a,b){Cz(a);a.l4=b;}
function A4t(a,b){a.r=b;}
function ASZ(a,b,c,d){var e,f,g,h;e=d.by;f=b+1|0;g=R(f,e);if(g>0){d.hs=1;return (-1);}h=Z(c,b);if(g<0&&DR(Z(c,f)))return (-1);if(a.l4!=h)return (-1);return a.r.k(f,c,d);}
function A8R(a,b,c,d){var e,f,g;if(!(c instanceof B4))return Jf(a,b,c,d);e=c;f=d.by;while(true){if(b>=f)return (-1);g=Hl(e,a.l4,b);if(g<0)return (-1);b=g+1|0;if(b<f&&DR(Z(e,b))){b=g+2|0;continue;}if(a.r.k(b,c,d)>=0)break;}return g;}
function A0t(a,b,c,d,e){var f,g,h;if(!(d instanceof B4))return Jq(a,b,c,d,e);f=d;g=e.by;a:{while(true){if(c<b)return (-1);c=Ik(f,a.l4,c);if(c<0)break a;if(c<b)break a;h=c+1|0;if(h<g&&DR(Z(f,h))){c=c+(-1)|0;continue;}if(a.r.k(h,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function AVg(a,b){if(b instanceof Fw)return 0;if(b instanceof Fo)return 0;if(b instanceof EO)return 0;if(b instanceof EY)return 0;if(b instanceof NN)return 0;if(!(b instanceof NT))return 1;return b.l4!=a.l4?0:1;}
function A8T(a,b){return 1;}
function EY(){var a=this;CI.call(a);a.tC=0;a.sh=0;a.kC=0;}
function A9m(a,b,c){var d,e;d=b+1|0;e=Z(c,b);d=Z(c,d);return a.tC==e&&a.sh==d?2:(-1);}
function A74(a,b,c,d){var e,f,g;if(!(c instanceof B4))return Jf(a,b,c,d);e=c;f=d.by;while(b<f){b=Hl(e,a.tC,b);if(b<0)return (-1);b=b+1|0;if(b>=f)continue;g=Z(e,b);if(a.sh==g&&a.r.k(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AUq(a,b,c,d,e){var f;if(!(d instanceof B4))return Jq(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);c=Ik(f,a.sh,c)+(-1)|0;if(c<0)break a;if(c<b)break a;if(a.tC==Z(f,c)&&a.r.k(c+2|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function A3d(a){return a.kC;}
function A9d(a,b){if(b instanceof EY)return b.kC!=a.kC?0:1;if(b instanceof EO)return b.X(a.kC);if(b instanceof Fw)return 0;if(!(b instanceof Fo))return 1;return 0;}
function Wx(){Gn.call(this);}
function Bmr(){var a=new Wx();A37(a);return a;}
function A37(a){return;}
function AUz(a,b){return b!=10?0:1;}
function AZ_(a,b,c){return b!=10?0:1;}
function Wy(){Gn.call(this);}
function Bms(){var a=new Wy();AWL(a);return a;}
function AWL(a){return;}
function A9Q(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function A11(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AEP(){var a=this;D.call(a);a.oY=null;a.tR=null;a.f_=0;a.BE=0;}
function A8f(a){var b=new AEP();AXb(b,a);return b;}
function AXb(a,b){while(b>=a.f_){a.f_=a.f_<<1|1;}a.f_=a.f_<<1|1;a.oY=$rt_createIntArray(a.f_+1|0);a.tR=$rt_createIntArray(a.f_+1|0);a.BE=b;}
function Qk(a,b,c){var d,e;d=0;e=b&a.f_;while(a.oY.data[e]&&a.oY.data[e]!=b){d=(d+1|0)&a.f_;e=(e+d|0)&a.f_;}a.oY.data[e]=b;a.tR.data[e]=c;}
function VG(a,b){var c,d,e;c=b&a.f_;d=0;while(true){e=a.oY.data[c];if(!e)break;if(e==b)return a.tR.data[c];d=(d+1|0)&a.f_;c=(c+d|0)&a.f_;}return a.BE;}
function Yx(){D.call(this);}
function NL(){By.call(this);}
function Bba(){var a=new NL();AWW(a);return a;}
function AWW(a){return;}
function AMo(a){return Dp(CG(Eq(),9,13),32);}
function Nc(){By.call(this);}
function Bcc(){var a=new Nc();A0U(a);return a;}
function A0U(a){return;}
function ANP(a){return CG(Eq(),48,57);}
function AEH(){By.call(this);}
function Bbq(){var a=new AEH();AWt(a);return a;}
function AWt(a){return;}
function A9x(a){return CG(Eq(),97,122);}
function AFk(){By.call(this);}
function A_X(){var a=new AFk();AXf(a);return a;}
function AXf(a){return;}
function A06(a){return CG(Eq(),65,90);}
function AFt(){By.call(this);}
function BcH(){var a=new AFt();ATU(a);return a;}
function ATU(a){return;}
function AVI(a){return CG(Eq(),0,127);}
function NH(){By.call(this);}
function BcP(){var a=new NH();AU2(a);return a;}
function AU2(a){return;}
function ZP(a){return CG(CG(Eq(),97,122),65,90);}
function L_(){NH.call(this);}
function Bci(){var a=new L_();AWZ(a);return a;}
function AWZ(a){return;}
function AAX(a){return CG(ZP(a),48,57);}
function AHS(){By.call(this);}
function Bay(){var a=new AHS();A7T(a);return a;}
function A7T(a){return;}
function A6f(a){return CG(CG(CG(Eq(),33,64),91,96),123,126);}
function OD(){L_.call(this);}
function BbE(){var a=new OD();AZS(a);return a;}
function AZS(a){return;}
function AH8(a){return CG(CG(CG(AAX(a),33,64),91,96),123,126);}
function AMQ(){OD.call(this);}
function BbB(){var a=new AMQ();A0L(a);return a;}
function A0L(a){return;}
function AYy(a){return Dp(AH8(a),32);}
function ACL(){By.call(this);}
function A__(){var a=new ACL();A9I(a);return a;}
function A9I(a){return;}
function A4Z(a){return Dp(Dp(Eq(),32),9);}
function AAj(){By.call(this);}
function Ban(){var a=new AAj();A$2(a);return a;}
function A$2(a){return;}
function AYp(a){return Dp(CG(Eq(),0,31),127);}
function AJ_(){By.call(this);}
function BbG(){var a=new AJ_();AT8(a);return a;}
function AT8(a){return;}
function A12(a){return CG(CG(CG(Eq(),48,57),97,102),65,70);}
function AQc(){By.call(this);}
function BaU(){var a=new AQc();A3Z(a);return a;}
function A3Z(a){return;}
function A8e(a){var b;b=new VK;b.Iv=a;B0(b);b.ca=1;return b;}
function AH0(){By.call(this);}
function A_V(){var a=new AH0();AZ8(a);return a;}
function AZ8(a){return;}
function A22(a){var b;b=new Tg;b.IE=a;B0(b);b.ca=1;return b;}
function APq(){By.call(this);}
function BcL(){var a=new APq();ATW(a);return a;}
function ATW(a){return;}
function AWY(a){var b;b=new QM;b.H8=a;B0(b);return b;}
function AEp(){By.call(this);}
function Bam(){var a=new AEp();AYs(a);return a;}
function AYs(a){return;}
function A0e(a){var b;b=new QL;b.FM=a;B0(b);return b;}
function AFZ(){By.call(this);}
function Bcg(){var a=new AFZ();AU0(a);return a;}
function AU0(a){return;}
function A4X(a){var b;b=new SA;b.GX=a;B0(b);Jr(b.b$,0,2048);b.ca=1;return b;}
function Y0(){By.call(this);}
function BbW(){var a=new Y0();AUv(a);return a;}
function AUv(a){return;}
function AVq(a){var b;b=new Ud;b.IU=a;B0(b);b.ca=1;return b;}
function AIx(){By.call(this);}
function Bch(){var a=new AIx();AX$(a);return a;}
function AX$(a){return;}
function A$6(a){var b;b=new Ph;b.Hd=a;B0(b);b.ca=1;return b;}
function APF(){By.call(this);}
function Bac(){var a=new APF();AYF(a);return a;}
function AYF(a){return;}
function A2X(a){var b;b=new U6;b.Gf=a;B0(b);return b;}
function AE9(){By.call(this);}
function BcQ(){var a=new AE9();A6r(a);return a;}
function A6r(a){return;}
function AXJ(a){var b;b=new Td;b.Fj=a;B0(b);b.ca=1;return b;}
function ALd(){By.call(this);}
function BbS(){var a=new ALd();ATp(a);return a;}
function ATp(a){return;}
function AVw(a){var b;b=new Tf;b.GD=a;B0(b);b.ca=1;return b;}
function ACX(){By.call(this);}
function BaM(){var a=new ACX();AUE(a);return a;}
function AUE(a){return;}
function A50(a){var b;b=new O$;b.GV=a;B0(b);b.ca=1;return b;}
function AHa(){By.call(this);}
function BcG(){var a=new AHa();AXS(a);return a;}
function AXS(a){return;}
function A64(a){var b;b=new Ut;b.Jz=a;B0(b);b.ca=1;return b;}
function APT(){By.call(this);}
function BcD(){var a=new APT();A79(a);return a;}
function A79(a){return;}
function A1i(a){var b;b=new Uw;b.F0=a;B0(b);return b;}
function ABx(){By.call(this);}
function Bbm(){var a=new ABx();AUy(a);return a;}
function AUy(a){return;}
function AZK(a){var b;b=new V1;b.I4=a;B0(b);return b;}
function AAJ(){By.call(this);}
function Bab(){var a=new AAJ();A9q(a);return a;}
function A9q(a){return;}
function AYQ(a){var b;b=new VB;b.Fn=a;B0(b);b.ca=1;return b;}
function AHY(){By.call(this);}
function Bcw(){var a=new AHY();A6l(a);return a;}
function A6l(a){return;}
function A9t(a){var b;b=new OM;b.JR=a;B0(b);b.ca=1;return b;}
function La(){By.call(this);}
function BaO(){var a=new La();AVD(a);return a;}
function AVD(a){return;}
function ACN(a){return Dp(CG(CG(CG(Eq(),97,122),65,90),48,57),95);}
function AQF(){La.call(this);}
function BbF(){var a=new AQF();A6v(a);return a;}
function A6v(a){return;}
function AYH(a){var b;b=Fz(ACN(a),1);b.ca=1;return b;}
function AMW(){NL.call(this);}
function A_U(){var a=new AMW();A1B(a);return a;}
function A1B(a){return;}
function A35(a){var b;b=Fz(AMo(a),1);b.ca=1;return b;}
function AAC(){Nc.call(this);}
function Bar(){var a=new AAC();A6V(a);return a;}
function A6V(a){return;}
function AWA(a){var b;b=Fz(ANP(a),1);b.ca=1;return b;}
function AKl(){var a=this;By.call(a);a.z9=0;a.DJ=0;}
function W(a,b){var c=new AKl();A$5(c,a,b);return c;}
function A$5(a,b,c){a.z9=b;a.DJ=c;}
function AXW(a){return CG(Eq(),a.z9,a.DJ);}
function AKQ(){By.call(this);}
function BbH(){var a=new AKQ();A14(a);return a;}
function A14(a){return;}
function A1P(a){return CG(CG(Eq(),65279,65279),65520,65533);}
function AMA(){var a=this;By.call(a);a.yd=0;a.wt=0;a.CS=0;}
function CA(a,b){var c=new AMA();AUT(c,a,b);return c;}
function BaH(a,b,c){var d=new AMA();A1W(d,a,b,c);return d;}
function AUT(a,b,c){a.wt=c;a.yd=b;}
function A1W(a,b,c,d){a.CS=d;a.wt=c;a.yd=b;}
function A5K(a){var b;b=Bbo(a.yd);if(a.CS)Jr(b.b$,0,2048);b.ca=a.wt;return b;}
function AMR(){var a=this;By.call(a);a.vG=0;a.tT=0;a.y$=0;}
function KU(a,b){var c=new AMR();AVx(c,a,b);return c;}
function Bb8(a,b,c){var d=new AMR();A2Y(d,a,b,c);return d;}
function AVx(a,b,c){a.tT=c;a.vG=b;}
function A2Y(a,b,c,d){a.y$=d;a.tT=c;a.vG=b;}
function ASP(a){var b;b=new Vo;ADP(b,a.vG);if(a.y$)Jr(b.b$,0,2048);b.ca=a.tT;return b;}
function AKu(){D.call(this);}
function Bmt(){var a=new AKu();AS7(a);return a;}
function AS7(a){return;}
function Zt(){D.call(this);}
function Bmu(){var a=new Zt();A75(a);return a;}
function A75(a){return;}
function Ny(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function A2L(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=J(Tu,16384);d=c.data;e=$rt_createByteArray(16384);f=e.data;g=0;h=0;i=0;j=0;while(j<Bi(b)){k=Ny(Z(b,j));if(k==64){j=j+1|0;k=Ny(Z(b,j));l=0;m=1;n=0;while(n<3){j=j+1|0;l=l|Bj(m,Ny(Z(b,j)));m=m*64|0;n=n+1|0;}}else if(k<32)l=1;else{k=(k-32|0)<<24>>24;j=j+1|0;l=Ny(Z(b,j));}if(!k&&l>=128){if(g>0){m=h+1|0;d[h]=AV1(i,i+g|0,Oi(e,g));h=m;}i=i+(g+l|0)|0;g=0;}else{o=g+l|0;if(o<f.length)n=h;else{n=h+1|0;d[h]=AV1(i,i+g|0,Oi(e,g));i=i+o|0;g=0;}while(true){m=l+(-1)|0;if(l<=0)break;o
=g+1|0;f[g]=k;g=o;l=m;}h=n;}j=j+1|0;}return Nt(c,h);}
function Tu(){var a=this;D.call(a);a.xg=0;a.Ap=0;a.C5=null;}
function AV1(a,b,c){var d=new Tu();A0I(d,a,b,c);return d;}
function A0I(a,b,c,d){a.xg=b;a.Ap=c;a.C5=d;}
function RY(){var a=this;D.call(a);a.CE=null;a.Dt=0;}
function AL$(){D.call(this);}
function Bmv(){var a=new AL$();A$N(a);return a;}
function A$N(a){return;}
function Yn(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.CE.data;f=b.Dt;b.Dt=f+1|0;f=e[f];g=f<34?f-32|0:f>=92?(f-32|0)-2|0:(f-32|0)-1|0;h=(g%2|0)!=1?0:1;c=c+Bj(d,g/2|0)|0;d=d*46|0;if(!h)break;}h=c/2|0;if(c%2|0)h= -h;return h;}
function Wl(){Ew.call(this);this.sM=null;}
function A3F(a){ED(a.bZ,B(262),60,6,4210752);ED(a.bZ,B(325),8,(a.fm-96|0)+2|0,4210752);}
function AOl(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.J.bo;d=B(832);$p=1;case 1:$z=AHu(c,d);if(C()){break _;}e=$z;BT(1.0,1.0,1.0,1.0);Eb(a.J.bo,e);f=(a.bm-a.fa|0)/2|0;g=(a.bC-a.fm|0)/2|0;CH(a,f,g,0,0,a.fa,a.fm);if(WN(a.sM)){h=ADK(a.sM,12);CH(a,f+56|0,((g+36|0)+12|0)-h|0,176,12-h|0,14,h+2|0);}i=AON(a.sM,24);CH(a,f+79|0,g+34|0,176,14,i+1|0,16);return;default:E$();}}C3().s(a,
b,c,d,e,f,g,h,i,$p);}
function Xl(){var a=this;Ew.call(a);a.mr=null;a.ur=null;}
function Y9(a){var b,c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AA0(a);if(C()){break _;}b=0;while(b<9){c=Gj(a.mr,b);if(c!==null){d=a.J.f;$p=2;continue _;}b=b+1|0;}return;case 2:ALT(d,c);if(C()){break _;}while(true){b=b+1|0;if(b>=9)break;c=Gj(a.mr,b);if(c===null)continue;else{d=a.J.f;continue _;}}return;default:E$();}}C3().s(a,b,c,d,$p);}
function A6E(a,b){var c,d,e,f,g,h;c=$rt_createIntArray(9);d=c.data;e=0;while(e<3){f=0;while(f<3){g=e+(f*3|0)|0;h=Gj(a.mr,g);if(h!==null)d[g]=h.bA;else d[g]=(-1);f=f+1|0;}e=e+1|0;}Pl(a.ur,0,RN(Wq(),c));}
function A1Z(a){ED(a.bZ,B(525),28,6,4210752);ED(a.bZ,B(325),8,(a.fm-96|0)+2|0,4210752);}
function AKo(a,b){var c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.J.bo;d=B(833);$p=1;case 1:$z=AHu(c,d);if(C()){break _;}e=$z;BT(1.0,1.0,1.0,1.0);Eb(a.J.bo,e);CH(a,(a.bm-a.fa|0)/2|0,(a.bC-a.fm|0)/2|0,0,0,a.fa,a.fm);return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AMF(){var a=this;Ew.call(a);a.Fp=null;a.AJ=null;a.ky=0;}
function Bb2(a,b){var c=new AMF();A2n(c,a,b);return c;}
function A2n(a,b,c){var d,e,f,g;Ie(a);a.ky=0;a.Fp=b;a.AJ=c;a.pT=0;a.ky=c.gm()/9|0;a.fm=114+(a.ky*18|0)|0;d=(a.ky-4|0)*18|0;e=0;while(e<a.ky){f=0;while(f<9){U(a.c7,D6(a,c,f+(e*9|0)|0,8+(f*18|0)|0,18+(e*18|0)|0));f=f+1|0;}e=e+1|0;}f=0;while(f<3){g=0;while(g<9){U(a.c7,D6(a,b,g+((f+1|0)*9|0)|0,8+(g*18|0)|0,(103+(f*18|0)|0)+d|0));g=g+1|0;}f=f+1|0;}e=0;f=161+d|0;while(e<9){U(a.c7,D6(a,b,e,8+(e*18|0)|0,f));e=e+1|0;}}
function A92(a){ED(a.bZ,a.AJ.w_(),8,6,4210752);ED(a.bZ,B(325),8,(a.fm-96|0)+2|0,4210752);}
function ANT(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.J.bo;d=B(834);$p=1;case 1:$z=AHu(c,d);if(C()){break _;}e=$z;BT(1.0,1.0,1.0,1.0);Eb(a.J.bo,e);f=(a.bm-a.fa|0)/2|0;g=(a.bC-a.fm|0)/2|0;CH(a,f,g,0,0,a.fa,(a.ky*18|0)+17|0);CH(a,f,(g+(a.ky*18|0)|0)+17|0,0,126,a.fa,96);return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function CW(){var a=this;EW.call(a);a.It=null;a.ge=0;a.m7=0;a.zL=0;a.zK=0;}
var Bmw=null;var Bmx=null;var Bmy=null;var Bmz=null;var BmA=null;var BmB=null;var BmC=null;var BmD=null;var BmE=null;var BmF=null;var BmG=null;var BmH=null;var BmI=null;var BmJ=null;var BmK=null;var BmL=null;var BmM=null;var BmN=null;var BmO=null;var BiV=null;function Dm(a,b,c,d,e,f,g){var h=new CW();AEu(h,a,b,c,d,e,f,g);return h;}
function AEu(a,b,c,d,e,f,g,h){FT(a,b,c);a.It=d;a.ge=e;a.m7=f;a.zL=g;a.zK=h;}
function AP_(){var b,c;Bmw=Dm(B(835),0,B(835),16,16,0,0);Bmx=Dm(B(836),1,B(836),16,16,16,0);Bmy=Dm(B(837),2,B(837),16,16,32,0);Bmz=Dm(B(838),3,B(838),16,16,48,0);BmA=Dm(B(839),4,B(839),16,16,64,0);BmB=Dm(B(840),5,B(840),16,16,80,0);BmC=Dm(B(841),6,B(841),16,16,96,0);BmD=Dm(B(842),7,B(842),32,16,0,32);BmE=Dm(B(843),8,B(843),32,16,32,32);BmF=Dm(B(844),9,B(844),32,16,64,32);BmG=Dm(B(845),10,B(845),32,16,96,32);BmH=Dm(B(846),11,B(846),16,32,0,64);BmI=Dm(B(847),12,B(847),32,32,0,128);BmJ=Dm(B(848),13,B(848),32,32,
32,128);BmK=Dm(B(849),14,B(849),32,32,64,128);BmL=Dm(B(850),15,B(850),32,32,96,128);BmM=Dm(B(851),16,B(851),32,32,128,128);BmN=Dm(B(852),17,B(852),64,32,0,96);BmO=Dm(B(853),18,B(853),64,64,0,192);b=J(CW,19);c=b.data;c[0]=Bmw;c[1]=Bmx;c[2]=Bmy;c[3]=Bmz;c[4]=BmA;c[5]=BmB;c[6]=BmC;c[7]=BmD;c[8]=BmE;c[9]=BmF;c[10]=BmG;c[11]=BmH;c[12]=BmI;c[13]=BmJ;c[14]=BmK;c[15]=BmL;c[16]=BmM;c[17]=BmN;c[18]=BmO;BiV=b;}
function PM(){Fb.call(this);this.Cw=null;}
function ACT(a){var b;b=new VI;VC(b,a.Cw);return b;}
function U7(){var a=this;CS.call(a);a.B6=null;a.BV=null;a.BX=null;a.yS=0;}
function AGn(a){U(a.bG,Sk(0,((a.bm/2|0)-155|0)+0|0,(a.bC/6|0)+96|0,B(854)));U(a.bG,Sk(1,((a.bm/2|0)-155|0)+160|0,(a.bC/6|0)+96|0,B(809)));}
function AQs(a,b){var c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.B6;d=b.cl?0:1;e=a.yS;$p=1;case 1:AQ6(c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function YT(a,b,c,d){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABh(a);if(C()){break _;}DG(a,a.bZ,a.BV,a.bm/2|0,70,16777215);DG(a,a.bZ,a.BX,a.bm/2|0,90,16777215);$p=2;case 2:AFE(a,b,c,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function IM(){Fg.call(this);}
function BmP(){var a=new IM();AT5(a);return a;}
function AT5(a){O(a);}
function UP(){var a=this;D.call(a);a.kR=0;a.q2=0;a.xR=null;a.xX=null;a.H1=0;}
function ALr(a,b){var c,d;c=0;while(c<=(3-a.kR|0)){d=0;while(d<=(3-a.q2|0)){if(Vp(a,b,c,d,1))return 1;if(Vp(a,b,c,d,0))return 1;d=d+1|0;}c=c+1|0;}return 0;}
function Vp(a,b,c,d,e){var f,g,h,i,j;f=0;while(f<3){g=0;while(g<3){h=f-c|0;i=g-d|0;j=(-1);if(h>=0&&i>=0&&h<a.kR&&i<a.q2)j=!e?a.xR.data[h+Bj(i,a.kR)|0]:a.xR.data[((a.kR-h|0)-1|0)+Bj(i,a.kR)|0];if(b.data[f+(g*3|0)|0]!=j)return 0;g=g+1|0;}f=f+1|0;}return 1;}
function AHl(a,b){return Kz(a.xX.bA,a.xX.p);}
function Ko(a){return Bj(a.kR,a.q2);}
function Ss(){var a=this;Bm.call(a);a.Cr=null;a.Jq=null;}
function AVM(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.dP^EJ(a.Cr,c):0;}
function Sr(){var a=this;Bm.call(a);a.Ex=null;a.Bl=null;a.GL=null;}
function A3n(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.dP^EJ(a.Ex,c):0;return a.Bl.X(b)&&!d?1:0;}
function Pu(){var a=this;Bm.call(a);a.sj=null;a.Hs=null;}
function AXT(a,b){return a.cj^EJ(a.sj,b);}
function A53(a){var b,c;b=new S;V(b);c=I3(a.sj,0);while(c>=0){Hm(b,Iy(c));Dx(b,124);c=I3(a.sj,c+1|0);}if(b.bY>0)Sm(b,b.bY-1|0);return T(b);}
function TZ(){var a=this;Bm.call(a);a.DD=null;a.IB=null;}
function A9o(a,b){return a.DD.X(b);}
function TX(){var a=this;Bm.call(a);a.ww=0;a.CM=null;a.xi=null;}
function A0u(a,b){return !(a.ww^EJ(a.xi.b6,b))&&!(a.ww^a.xi.iy^a.CM.X(b))?0:1;}
function TY(){var a=this;Bm.call(a);a.tS=0;a.Bb=null;a.vk=null;}
function A7n(a,b){return !(a.tS^EJ(a.vk.b6,b))&&!(a.tS^a.vk.iy^a.Bb.X(b))?1:0;}
function T2(){var a=this;Bm.call(a);a.EZ=0;a.Bf=null;a.A$=null;a.HI=null;}
function A5b(a,b){return a.EZ^(!a.Bf.X(b)&&!a.A$.X(b)?0:1);}
function T3(){var a=this;Bm.call(a);a.Ai=0;a.Dy=null;a.Df=null;a.JO=null;}
function ASJ(a,b){return a.Ai^(!a.Dy.X(b)&&!a.Df.X(b)?0:1)?0:1;}
function T0(){var a=this;Bm.call(a);a.zW=null;a.JQ=null;}
function AWu(a,b){return D5(a.zW,b);}
function T1(){var a=this;Bm.call(a);a.EJ=null;a.HS=null;}
function AYc(a,b){return D5(a.EJ,b)?0:1;}
function T5(){var a=this;Bm.call(a);a.Al=null;a.DA=0;a.AX=null;}
function A1p(a,b){return !D5(a.Al,b)&&!(a.DA^EJ(a.AX.b6,b))?0:1;}
function T6(){var a=this;Bm.call(a);a.AD=null;a.D3=0;a.Aw=null;}
function A4S(a,b){return !D5(a.AD,b)&&!(a.D3^EJ(a.Aw.b6,b))?1:0;}
function Pt(){var a=this;Bm.call(a);a.AT=0;a.EE=null;a.Bt=null;a.Fs=null;}
function A_S(a,b){return !(a.AT^a.EE.X(b))&&!D5(a.Bt,b)?0:1;}
function PH(){var a=this;Bm.call(a);a.ES=0;a.y5=null;a.y_=null;a.FH=null;}
function AWz(a,b){return !(a.ES^a.y5.X(b))&&!D5(a.y_,b)?1:0;}
function Pr(){var a=this;Bm.call(a);a.C0=null;a.FK=null;}
function AU3(a,b){return D5(a.C0,b);}
function Ps(){var a=this;Bm.call(a);a.zP=null;a.JL=null;}
function A5Q(a,b){return D5(a.zP,b)?0:1;}
function Px(){var a=this;Bm.call(a);a.EY=null;a.AC=0;a.Ff=null;}
function AXe(a,b){return D5(a.EY,b)&&a.AC^EJ(a.Ff.b6,b)?1:0;}
function Pq(){var a=this;Bm.call(a);a.Ee=null;a.DH=0;a.AA=null;}
function A$l(a,b){return D5(a.Ee,b)&&a.DH^EJ(a.AA.b6,b)?0:1;}
function Pv(){var a=this;Bm.call(a);a.El=0;a.Cp=null;a.Ah=null;a.HH=null;}
function A4e(a,b){return a.El^a.Cp.X(b)&&D5(a.Ah,b)?1:0;}
function Pw(){var a=this;Bm.call(a);a.Ea=0;a.B4=null;a.Ek=null;a.HY=null;}
function AZG(a,b){return a.Ea^a.B4.X(b)&&D5(a.Ek,b)?0:1;}
function OS(){IB.call(this);}
function AV5(a,b,c,d){var e,f,g;e=0;f=d.by;a:{while(true){if(b>f){b=e;break a;}g=Hp(d,a.cK);EL(d,a.cK,b);e=a.fp.k(b,c,d);if(e>=0)break;EL(d,a.cK,g);b=b+1|0;}}return b;}
function A_H(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Hp(e,a.cK);EL(e,a.cK,c);f=a.fp.k(c,d,e);if(f>=0)break;EL(e,a.cK,g);c=c+(-1)|0;}}return c;}
function AUR(a){return null;}
function VI(){IO.call(this);}
function Ll(a){Wc(a);return a.hm.gc;}
function Nf(){Fa.call(this);}
var BmQ=0.0;var BmR=null;function AJV(){BmQ=NaN;BmR=F($rt_doublecls());}
function Mq(){}
function VA(){var a=this;D.call(a);a.FC=null;a.EF=null;a.pK=null;a.dC=null;a.qV=0;a.sl=0;}
function OI(a,b){var c,d;c=Bi(a.pK);if(b>=0&&b<=c){Z8(a.dC);a.dC.nu=1;APZ(a.dC,b);b=a.EF.eJ(b,a.pK,a.dC);if(b==(-1))a.dC.hs=1;if(b>=0&&a.dC.oe){AC5(a.dC);return 1;}a.dC.hz=(-1);return 0;}d=new BO;Bl(d,VV(b));M(d);}
function ABa(a){var b,c;b=Bi(a.pK);if(!YJ(a))b=a.sl;if(a.dC.hz>=0&&a.dC.nu==1){a.dC.hz=MK(a.dC);if(MK(a.dC)==AEL(a.dC)){c=a.dC;c.hz=c.hz+1|0;}return a.dC.hz<=b&&OI(a,a.dC.hz)?1:0;}return OI(a,a.qV);}
function AHP(a,b){return PG(a.dC,b);}
function Ym(a,b){return QN(a.dC,b);}
function AG_(a){return AHP(a,0);}
function AKY(a){return Ym(a,0);}
function YJ(a){return a.dC.oh;}
function Un(){}
function Sh(){}
function S5(){Fb.call(this);this.ob=null;}
var BmS=null;function Bb1(){var a=new S5();AAk(a);return a;}
function AAk(a){a.ob=BcA();}
function Jz(a){return AIr(a.ob);}
function Zj(a,b){return ASz(a.ob,b,b)===BmS?0:1;}
function MG(a,b){return AGp(a.ob,b)!==BmS?0:1;}
function M4(a){return ADz(a.ob);}
function AAT(){BmS=new D;}
function SR(){}
function OU(){}
function AJZ(){var a=this;FY.call(a);a.ks=null;a.tB=null;a.GW=null;a.tH=0;}
function BcA(){var a=new AJZ();ATV(a);return a;}
function ATV(a){var b;b=null;a.GW=b;if(b===null){b=new QV;b.Jc=a;}a.tB=b;}
function ASz(a,b,c){var d,e;a.ks=On(a,a.ks,b);d=Wn(a,b);e=S_(d,c);S_(d,c);a.tH=a.tH+1|0;return e;}
function AGp(a,b){var c;c=Wn(a,b);if(c===null)return null;a.ks=Lv(a,a.ks,b);a.tH=a.tH+1|0;return c.nY;}
function Wn(a,b){var c,d;c=a.ks;while(true){if(c===null)return null;d=Op(a.tB,b,c.nk);if(!d)break;c=d>=0?c.dk:c.db;}return c;}
function On(a,b,c){var d,e;if(b===null){b=new Lb;d=null;b.nk=c;b.nY=d;b.lH=1;b.jp=1;return b;}e=Op(a.tB,c,b.nk);if(!e)return b;if(e>=0)b.dk=On(a,b.dk,c);else b.db=On(a,b.db,c);FP(b);return M5(b);}
function Lv(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=Op(a.tB,c,b.nk);if(d<0)b.db=Lv(a,b.db,c);else if(d>0)b.dk=Lv(a,b.dk,c);else{if(b.dk===null)return b.db;e=b.db;b=b.dk;f=J(Lb,b.lH);g=0;while(b.db!==null){h=f.data;i=g+1|0;h[g]=b;b=b.db;g=i;}c=b.dk;while(g>0){h=f.data;g=g+(-1)|0;j=h[g];j.db=c;FP(j);c=M5(j);}b.dk=c;b.db=e;FP(b);}FP(b);return M5(b);}
function ADz(a){var b,c,d;b=a.ks;c=null;while(b!==null){d=AOn(b,0);c=b;b=d;}if(c!==null)return c.nk;b=new J1;O(b);M(b);}
function AIr(a){return a.ks===null?0:a.ks.jp;}
function QV(){D.call(this);this.Jc=null;}
function Op(a,b,c){return b===null?TL(c,b):TL(b,c);}
function VK(){Bm.call(this);this.Iv=null;}
function A1w(a,b){return Do(b)!=2?0:1;}
function Tg(){Bm.call(this);this.IE=null;}
function A33(a,b){return Do(b)!=1?0:1;}
function QM(){Bm.call(this);this.H8=null;}
function ATy(a,b){return Qh(b);}
function QL(){Bm.call(this);this.FM=null;}
function A5J(a,b){return 0;}
function SA(){Bm.call(this);this.GX=null;}
function AW5(a,b){return !Do(b)?0:1;}
function Ud(){Bm.call(this);this.IU=null;}
function A$P(a,b){return Do(b)!=9?0:1;}
function Ph(){Bm.call(this);this.Hd=null;}
function AZf(a,b){return Iw(b);}
function U6(){Bm.call(this);this.Gf=null;}
function A0i(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function Td(){Bm.call(this);this.Fj=null;}
function A_w(a,b){a:{b:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Iw(b);}return b;}
function Tf(){Bm.call(this);this.GD=null;}
function AVi(a,b){a:{b:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Iw(b);}return b;}
function O$(){Bm.call(this);this.GV=null;}
function A1J(a,b){a:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Ut(){Bm.call(this);this.Jz=null;}
function A7A(a,b){return Lc(b);}
function Uw(){Bm.call(this);this.F0=null;}
function A83(a,b){return Ux(b);}
function V1(){Bm.call(this);this.I4=null;}
function A$E(a,b){return Do(b)!=3?0:1;}
function VB(){Bm.call(this);this.Fn=null;}
function A15(a,b){a:{b:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=Iw(b);}return b;}
function OM(){Bm.call(this);this.JR=null;}
function AU_(a,b){a:{b:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=Iw(b);}return b;}
function MB(){Bm.call(this);this.u$=0;}
function Bbo(a){var b=new MB();ADP(b,a);return b;}
function ADP(a,b){B0(a);a.u$=b;}
function AZg(a,b){return a.cj^(a.u$!=Do(b&65535)?0:1);}
function Vo(){MB.call(this);}
function A93(a,b){return a.cj^(!(a.u$>>Do(b&65535)&1)?0:1);}
function Nm(){D.call(this);}
var BmT=null;var BmU=null;function BmV(){var a=new Nm();ASn(a);return a;}
function ASn(a){return;}
function DA(b,c){BQ(BmT,c,b);BQ(BmU,b,c);}
function Jn(b,c){var d,e,f,g,h,$$je;d=null;a:{try{e=d;f=CP(BmT,b);if(f!==null){e=d;g=J(FS,1);g.data[0]=F(F0);b=WC(f,g);g=J(D,1);g.data[0]=c;d=WF(b,g);e=d;}break a;}catch($$e){$$je=Bg($$e);if($$je instanceof BD){h=$$je;}else{throw $$e;}}B9(h);d=e;}return d;}
function AIl(){BmT=De();BmU=De();DA(F(Ju),B(855));DA(F(E9),B(856));DA(F(IH),B(857));DA(F(EP),B(858));DA(F(DP),B(859));DA(F(JY),B(860));DA(F(Jo),B(861));DA(F(Km),B(862));DA(F(K$),B(863));DA(F(I9),B(864));DA(F(ID),B(582));DA(F(KG),B(865));DA(F(Mr),B(866));DA(F(JM),B(867));DA(F(Gi),B(868));}
function JX(){var a=this;D.call(a);a.fG=0;a.fq=0;a.fL=0;a.qb=0;a.jl=Long_ZERO;a.oV=Long_ZERO;}
var Bkz=Long_ZERO;function A$y(a,b){var c;if(!(b instanceof JX))return 0;c=b;return a.fG==c.fG&&a.fq==c.fq&&a.fL==c.fL&&a.qb==c.qb?1:0;}
function A7L(a){return (((((a.fG*128|0)*1024|0)+(a.fL*128|0)|0)+a.fq|0)*256|0)+a.qb|0;}
function A0p(a,b){a.jl=b;return a;}
function ANE(a,b){return Long_lt(a.jl,b.jl)?(-1):Long_gt(a.jl,b.jl)?1:Long_lt(a.oV,b.oV)?(-1):Long_le(a.oV,b.oV)?0:1;}
function TL(a,b){return ANE(a,b);}
function AF_(){Bkz=Long_ZERO;}
function Qg(){}
function Xn(){D.call(this);this.r7=null;}
function Od(a,b,c){var d,e,f,g,h,i;d=b+30233088|0;e=c+30233088|0;f=new S;GE(f,10);g=0;while(g<5){h=d%36|0;i=e%36|0;Dx(f,RI(a,h));Dx(f,RI(a,i));d=d/36|0;e=e/36|0;g=g+1|0;}return T(f);}
function RI(a,b){if(b<10)return (48+b|0)&65535;return ((65+b|0)-10|0)&65535;}
function AGY(a,b,c,d){var e,f,g,h,i,j,k,l,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=Od(a,c,d);f=new S;V(f);g=T(H(H(H(f,a.r7),B(23)),e));$p=1;case 1:$z=ALG(g);if(C()){break _;}h=$z;if(h===null)return null;a:{b:{try{f=MX(O0(Uo(h)));i=FW(f,B(869));j=FW(f,B(870));if(c!=i)break b;if(d!=j)break b;b=A20(b,f);}catch($$e){$$je=Bg($$e);if($$je instanceof BW){k=$$je;break a;}
else{throw $$e;}}return b;}try{l=Od(a,i,j);Cg(C$(),BL(H(Be(H(Be(H(H(H(H(H(Be(H(Be(H(Be(H(Be(H(H(H(BX(),B(871)),e),B(872)),c),B(632)),d),B(873)),i),B(632)),j),B(874)),l),B(875)),e),B(876)),c),B(632)),d),B(245))));b=BL(H(H(H(BX(),a.r7),B(23)),l));$p=3;continue _;}catch($$e){$$je=Bg($$e);if($$je instanceof BW){k=$$je;}else{throw $$e;}}}b=C$();f=new S;V(f);Cg(b,T(H(Be(H(Be(H(H(H(f,B(877)),e),B(878)),c),B(632)),d),B(245))));Cg(C$(),B(879));$p=2;case 2:AL4(g);if(C()){break _;}B9(k);return null;case 3:c:{try{ANo(g,
b);if(C()){break _;}b=null;}catch($$e){$$je=Bg($$e);if($$je instanceof BW){k=$$je;break c;}else{throw $$e;}}return b;}b=C$();f=new S;V(f);Cg(b,T(H(Be(H(Be(H(H(H(f,B(877)),e),B(878)),c),B(632)),d),B(245))));Cg(C$(),B(879));$p=2;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function YV(a,b,c){var d,e,f,g,h,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=Ha();AF2(a,c,b,d);e=A$g(98304);try{f=AWj(BbL(e));try{R1(d,f);AHI(f);g=Ig(e);b=BL(H(H(H(BX(),a.r7),B(23)),Od(a,c.fY,c.fV)));$p=1;continue _;}catch($$e){$$je=Bg($$e);if($$je instanceof D8){b=$$je;}else{throw $$e;}}a:{try{KP(f);break a;}catch($$e){$$je=Bg($$e);if($$je instanceof D8){d=$$je;}else{throw $$e;}}WM(b,d);}M(b);}catch
($$e){$$je=Bg($$e);if($$je instanceof BW){h=$$je;}else{throw $$e;}}b=C$();d=new S;V(d);Cg(b,T(H(Be(H(Be(H(d,B(880)),c.fY),B(632)),c.fV),B(881))));B9(h);return;case 1:b:{a:{try{try{ACB(b,g);if(C()){break _;}}catch($$e){$$je=Bg($$e);if($$je instanceof D8){b=$$je;break a;}else{throw $$e;}}KP(f);}catch($$e){$$je=Bg($$e);if($$je instanceof BW){h=$$je;break b;}else{throw $$e;}}return;}try{c:{try{KP(f);break c;}catch($$e){$$je=Bg($$e);if($$je instanceof D8){d=$$je;}else{throw $$e;}}WM(b,d);}M(b);}catch($$e){$$je=Bg($$e);if
($$je instanceof BW){h=$$je;}else{throw $$e;}}}b=C$();d=new S;V(d);Cg(b,T(H(Be(H(Be(H(d,B(880)),c.fY),B(632)),c.fV),B(881))));B9(h);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AF2(a,b,c,d){GA(d,B(869),b.fY);GA(d,B(870),b.fV);Id(d,B(882),c.dU);IR(d,B(883),b.g4);IR(d,B(356),b.gi.gB);IR(d,B(884),b.hG.gB);IR(d,B(885),b.jz.gB);IR(d,B(886),b.fv);S2(d,B(887),b.hh);b.sc=0;AG7(new QU);}
function A20(b,c){var d;d=BaL(b,FW(c,B(869)),FW(c,B(870)));d.g4=IJ(c,B(883));d.gi=AIK(IJ(c,B(356)));d.hG=AIK(IJ(c,B(884)));d.jz=AIK(IJ(c,B(885)));d.fv=IJ(c,B(886));d.hh=Uu(c,B(887));if(!Mj(d.gi))d.gi=Lu(d.g4.data.length);if(!(d.fv!==null&&Mj(d.hG))){d.fv=$rt_createByteArray(256);d.hG=Lu(d.g4.data.length);Si(d);}if(!Mj(d.jz))d.jz=Lu(d.g4.data.length);return d;}
function A4V(a){return;}
function MC(a,b,c){return;}
function Sw(){var a=this;D.call(a);a.a=null;a.yY=null;a.yZ=null;a.yX=null;a.tP=null;a.y1=null;a.y2=null;a.y0=null;a.iV=null;a.t=null;a.h3=null;a.vX=null;a.vV=null;a.vW=null;a.vY=null;a.vZ=null;a.Gg=null;}
function Zw(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb;a.h3=Zl(a,a.h3,b*4|0,0,c*4|0,5,17,5);e=0;while(e<4){f=0;while(f<4){g=0;while(g<16){h=a.h3.data;c=((e+0|0)*5|0)+f|0;i=((c+0|0)*17|0)+g|0;j=h[i+0|0];h=a.h3.data;b=((c+1|0)*17|0)+g|0;k=h[b+0|0];h=a.h3.data;l=((e+1|0)*5|0)+f|0;m=((l+0|0)*17|0)+g|0;n=h[m+0|0];h=a.h3.data;c=((l+1|0)*17|0)+g|0;o=h[c+0|0];p=(a.h3.data[i+1|0]-j)*0.125;q=(a.h3.data[b+1|0]-k)*0.125;r=(a.h3.data[m+1|0]-n)*0.125;s=(a.h3.data[c+1|0]-o)*0.125;t=0;while(t<8){u=(n-j)
*0.25;v=(o-k)*0.25;w=0;x=j;y=k;while(w<4){b=(w+(e*4|0)|0)<<11|(0+(f*4|0)|0)<<7;c=(g*8|0)+t|0;m=b|c;z=(y-x)*0.25;ba=0;c=R(c,64);bb=x;while(ba<4){i=0;if(c<0){L();i=BgE.b;}if(bb>0.0){L();i=BeV.b;}d.data[m]=i<<24>>24;m=m+128|0;bb=bb+z;ba=ba+1|0;}x=x+u;y=y+v;w=w+1|0;}j=j+p;k=k+q;n=n+r;o=o+s;t=t+1|0;}g=g+1|0;}f=f+1|0;}e=e+1|0;}}
function ACw(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;e=0;f=b*16|0;c=c*16|0;while(e<16){g=0;while(g<16){h=f+e|0;i=c+g|0;j=a.tP;k=h*0.03125;l=i*0.03125;m=U8(j,k,l,0.0)+Cl(a.a)*0.2<=0.0?0:1;n=U8(a.tP,l,109.0134,k)+Cl(a.a)*0.2<=3.0?0:1;o=EZ(a.y1,k*2.0,l*2.0)/3.0+3.0+Cl(a.a)*0.25|0;p=(-1);L();q=BeR.b;r=BeS.b;s=(((e*16|0)+g|0)*128|0)+128|0;t=127;while(t>=0){s=s+(-1)|0;if(t<=((0+E(a.a,6)|0)-1|0))d.data[s]=BeQ.b<<24>>24;else{u=d.data;if(!u[s])p=(-1);else if(u[s]==BeV.b){if(p==(-1)){if(o<=0){q=0;r=BeV.b<<24>>
24;}else if(t>=60&&t<=65){q=BeR.b;r=BeS.b;if(n)q=0;if(n)r=Bfb.b;if(m)q=Bfa.b;if(m)r=Bfa.b;}if(t<64&&!q)q=BgE.b;if(t<63){u[s]=r<<24>>24;p=o;}else{u[s]=q<<24>>24;p=o;}}else if(p>0){p=p+(-1)|0;u[s]=r<<24>>24;}}}t=t+(-1)|0;}g=g+1|0;}e=e+1|0;}}
function Ua(a,b,c){var d,e;d=$rt_createByteArray(32768);e=A9s(a.t,d,b,c);Zw(a,b,c,d);ACw(a,b,c,d);ARV(a,b,c,d);Si(e);return e;}
function APV(a,b,c,d,e,f,g){Ji(a,b,c,d,e,f,g,1.0+N(a.a)*6.0,0.0,0.0,(-1),(-1),0.5);}
function Ji(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,bD;n=b*16|0;o=n+8|0;p=c*16|0;q=p+8|0;r=0.0;s=0.0;t=BbA(GB(a.a));if(l<=0)l=112-E(t,28)|0;u=0;if(k==(-1)){k=l/2|0;u=1;}v=E(t,l/2|0)+(l/4|0)|0;w=E(t,6)?0:1;x=R(h,1.0);y=h+2.0+16.0;y=y*y;z=o-16.0;ba=q-16.0;bb=o+16.0;bc=q+16.0;a:{while(true){if(k>=l)break a;bd=1.5+Bq(k*3.1415927410125732/l)*h*1.0;be=bd*m;bf=BC(j);bg=Bq(j);e=e+BC(i)*bf;f=f+bg;g=g+Bq(i)*bf;j=(!w
?j*0.699999988079071:j*0.9200000166893005)+s*0.10000000149011612;i=i+r*0.10000000149011612;bh=s*0.8999999761581421;bf=r*0.75;s=bh+(N(t)-N(t))*N(t)*2.0;r=bf+(N(t)-N(t))*N(t)*4.0;if(!u&&k==v&&x>0){h=N(t)*0.5+0.5;bh=i-1.5707963705062866;j=j/3.0;Ji(a,b,c,d,e,f,g,h,bh,j,k,l,1.0);Ji(a,b,c,d,e,f,g,N(t)*0.5+0.5,i+1.5707963705062866,j,k,l,1.0);return;}if(!(!u&&!E(t,4))){bi=e-o;bj=g-q;bk=l-k|0;if(bi*bi+bj*bj-bk*bk>y)break;bl=bd*2.0;if(e>=z-bl&&g>=ba-bl&&e<=bb+bl&&g<=bc+bl){bm=(K(e-bd)-n|0)-1|0;bn=(K(e+bd)-n|0)+1|0;bo
=K(f-be)-1|0;bp=K(f+be)+1|0;bq=(K(g-bd)-p|0)-1|0;br=(K(g+bd)-p|0)+1|0;if(bm<0)bm=0;if(bn>16)bn=16;if(bo<1)bo=1;if(bp>120)bp=120;if(bq<0)bq=0;if(br>16)br=16;bs=0;bt=bm;while(!bs&&bt<bn){bu=bq;while(!bs&&bu<br){bv=bp+1|0;while(!bs){bw=R(bv,bo-1|0);if(bw<0)break;bx=(((bt*16|0)+bu|0)*128|0)+bv|0;if(bv>=0&&bv<128){by=d.data;bz=by[bx];L();if(!(bz!=BfY.b&&by[bx]!=BgE.b))bs=1;if(bw&&bt!=bm&&bt!=(bn-1|0)&&bu!=bq&&bu!=(br-1|0))bv=bo;}bv=bv+(-1)|0;}bu=bu+1|0;}bt=bt+1|0;}if(!bs){while(bm<bn){bA=((bm+n|0)+0.5-e)/bd;bi=bA
*bA;bx=bq;while(bx<br){bB=((bx+p|0)+0.5-g)/bd;bC=(((bm*16|0)+bx|0)*128|0)+bp|0;bw=0;bD=bp-1|0;bB=bB*bB;while(bD>=bo){bl=(bD+0.5-f)/be;if(bl>(-0.7)&&bi+bl*bl+bB<1.0){by=d.data;bz=by[bC];L();if(bz==BeR.b)bw=1;if(!(bz!=BeV.b&&bz!=BeS.b&&bz!=BeR.b)){if(bD<10)by[bC]=BfZ.b<<24>>24;else{by[bC]=0;if(bw){bz=bC-1|0;if(by[bz]==BeS.b)by[bz]=BeR.b<<24>>24;}}}}bC=bC+(-1)|0;bD=bD+(-1)|0;}bx=bx+1|0;}bm=bm+1|0;}if(u)break a;}}}k=k+1|0;}return;}}
function ARV(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r;GB(a.a);GB(a.a);e=b-8|0;f=b+8|0;g=c-8|0;h=c+8|0;while(e<=f){i=g;while(i<=h){j=E(a.a,E(a.a,E(a.a,40)+1|0)+1|0);if(E(a.a,15))j=0;k=0;while(k<j){l=(e*16|0)+E(a.a,16)|0;m=E(a.a,E(a.a,120)+8|0);n=(i*16|0)+E(a.a,16)|0;o=1;if(!E(a.a,4)){APV(a,b,c,d,l,m,n);o=o+E(a.a,4)|0;}p=0;while(p<o){q=N(a.a)*3.1415927410125732*2.0;r=(N(a.a)-0.5)*2.0/8.0;Ji(a,b,c,d,l,m,n,N(a.a)*2.0+N(a.a),q,r,0,0,1.0);p=p+1|0;}k=k+1|0;}i=i+1|0;}e=e+1|0;}}
function Zl(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;if(b===null)b=$rt_createDoubleArray(Bj(Bj(f,g),h));a.vY=H6(a.y2,a.vY,c,d,e,f,1,h,1.0,0.0,1.0);a.vZ=H6(a.y0,a.vZ,c,d,e,f,1,h,100.0,0.0,100.0);a.vX=H6(a.yX,a.vX,c,d,e,f,g,h,8.555150000000001,4.277575000000001,8.555150000000001);a.vV=H6(a.yY,a.vV,c,d,e,f,g,h,684.412,684.412,684.412);a.vW=H6(a.yZ,a.vW,c,d,e,f,g,h,684.412,684.412,684.412);i=0;j=0;k=0;l=g;d=g-4|0;m=l/2.0;while(k<f){n=0;while(n<h){o=(a.vY.data[j]+256.0)/512.0;if(o>1.0)o=1.0;p=a.vZ.data[j]
/8000.0;if(p<0.0)p= -p;q=p*3.0-3.0;if(q>=0.0){if(q>1.0)q=1.0;q=q/6.0;}else{o=q/2.0;if(o<(-1.0))o=(-1.0);q=o/1.4/2.0;o=0.0;}r=o+0.5;s=m+q*l/16.0*4.0;j=j+1|0;t=0;while(t<g){p=t;u=(p-s)*12.0/r;if(u<0.0)u=u*4.0;v=a.vV.data[i]/512.0;q=a.vW.data[i]/512.0;w=(a.vX.data[i]/10.0+1.0)/2.0;if(w>=0.0)v=w>1.0?q:v+(q-v)*w;o=v-u;if(t>d){x=(t-d|0)/3.0;o=o*(1.0-x)+(-10.0)*x;}if(p<0.0){x=(0.0-p)/4.0;if(x<0.0)x=0.0;if(x>1.0)x=1.0;o=o*(1.0-x)+(-10.0)*x;}b.data[i]=o;i=i+1|0;t=t+1|0;}n=n+1|0;}k=k+1|0;}return b;}
function AHW(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=c*16|0;f=d*16|0;NM(a.a,a.t.lz);g=Long_add(Long_mul(Long_div(GB(a.a),Long_fromInt(2)),Long_fromInt(2)),Long_fromInt(1));h=Long_add(Long_mul(Long_div(GB(a.a),Long_fromInt(2)),Long_fromInt(2)),Long_fromInt(1));NM(a.a,Long_xor(Long_add(Long_mul(Long_fromInt(c),
g),Long_mul(Long_fromInt(d),h)),a.t.lz));i=0;if(i<4){j=(e+E(a.a,16)|0)+8|0;k=E(a.a,128);l=(f+E(a.a,16)|0)+8|0;b=AYo();m=a.t;n=a.a;$p=1;continue _;}o=0;if(o<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BeS.b,32);m=a.t;n=a.a;$p=2;continue _;}j=0;if(j<10){o=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfb.b,32);m=a.t;n=a.a;$p=3;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfe.b,16);m=a.t;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+E(a.a,
16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bff.b,8);m=a.t;n=a.a;$p=5;continue _;}if(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfg.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BgZ.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(EZ(a.iV,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GZ();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E5(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c
=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be8.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be9.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be$.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be_.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50)
{l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfZ.b);m=a.t;n=a.a;$p=15;continue _;case 1:XP(b,m,n,j,k,l);if(C()){break _;}i=i+1|0;if(i<4){j=(e+E(a.a,16)|0)+8|0;k=E(a.a,128);l=(f+E(a.a,16)|0)+8|0;b=AYo();m=a.t;n=a.a;continue _;}o=0;if(o<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BeS.b,32);m=a.t;n
=a.a;$p=2;continue _;}j=0;if(j<10){o=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfb.b,32);m=a.t;n=a.a;$p=3;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfe.b,16);m=a.t;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bff.b,8);m=a.t;n=a.a;$p=5;continue _;}if(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfg.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,
16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BgZ.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(EZ(a.iV,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GZ();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E5(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be8.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be9.b);m=a.t;n=a.a;$p=11;continue _;}if
(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be$.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be_.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfZ.b);m=
a.t;n=a.a;$p=15;continue _;case 2:ABT(b,m,n,j,k,l);if(C()){break _;}o=o+1|0;if(o<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BeS.b,32);m=a.t;n=a.a;continue _;}j=0;if(j<10){o=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfb.b,32);m=a.t;n=a.a;$p=3;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfe.b,16);m=a.t;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bff.b,8);m=a.t;n=a.a;$p=5;continue _;}if
(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfg.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BgZ.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(EZ(a.iV,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GZ();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E5(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,
Be8.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be9.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be$.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be_.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,
BfY.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfZ.b);m=a.t;n=a.a;$p=15;continue _;case 3:ABT(b,m,n,o,k,l);if(C()){break _;}j=j+1|0;if(j<10){o=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfb.b,32);m=a.t;n=a.a;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfe.b,16);m=a.t;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)
|0;b=new Ch;L();Cm(b,Bff.b,8);m=a.t;n=a.a;$p=5;continue _;}if(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfg.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BgZ.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(EZ(a.iV,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GZ();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E5(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)
|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be8.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be9.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be$.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be_.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p
=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfZ.b);m=a.t;n=a.a;$p=15;continue _;case 4:ABT(b,m,n,j,k,l);if(C()){break _;}c=c+1|0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfe.b,16);m=a.t;n=a.a;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bff.b,8);m=a.t;n=a.a;$p=5;continue _;}if
(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfg.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BgZ.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(EZ(a.iV,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GZ();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E5(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,
Be8.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be9.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be$.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be_.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,
BfY.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfZ.b);m=a.t;n=a.a;$p=15;continue _;case 5:ABT(b,m,n,j,k,l);if(C()){break _;}c=c+1|0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bff.b,8);m=a.t;n=a.a;continue _;}if(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfg.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)
|0;b=new Ch;L();Cm(b,BgZ.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(EZ(a.iV,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GZ();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E5(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be8.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be9.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,
4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be$.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be_.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfZ.b);m=a.t;n=a.a;$p
=15;continue _;case 6:ABT(b,m,n,c,j,k);if(C()){break _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BgZ.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(EZ(a.iV,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GZ();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E5(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be8.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e
+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be9.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be$.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be_.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l
=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfZ.b);m=a.t;n=a.a;$p=15;continue _;case 7:ABT(b,m,n,c,j,k);if(C()){break _;}c=(EZ(a.iV,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GZ();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E5(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be8.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c
=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be9.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be$.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be_.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l
=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfZ.b);m=a.t;n=a.a;$p=15;continue _;case 8:$z=ALI(q,l,p);if(C()){break _;}d=$z;$p=9;case 9:AEM(m,b,n,l,d,p);if(C()){break _;}k=k+1|0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E5(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be8.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+
E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be9.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be$.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be_.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,
E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfZ.b);m=a.t;n=a.a;$p=15;continue _;case 10:ACP(b,m,n,l,p,r);if(C()){break _;}c=c+1|0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be8.b);m=a.t;n=a.a;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be9.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be$.b);m=a.t;n=a.a;$p=12;continue _;}if
(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be_.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfZ.b);m=a.t;n=a.a;$p=15;continue _;case 11:ACP(b,m,n,c,l,p);if(C()){break _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,
16)|0)+8|0;b=new BR;L();BS(b,Be$.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be_.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfZ.b);m=a.t;n=a.a;$p=15;continue _;case 12:ACP(b,m,n,c,l,p);if(C())
{break _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Be_.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfZ.b);m=a.t;n=a.a;$p=15;continue _;case 13:ACP(b,m,n,c,l,p);if(C()){break _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,
120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfZ.b);m=a.t;n=a.a;$p=15;continue _;case 14:AL2(b,m,n,l,p,r);if(C()){break _;}c=c+1|0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=a.t;n=a.a;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8
|0;b=new Cn;L();Cs(b,BfZ.b);m=a.t;n=a.a;$p=15;case 15:AL2(b,m,n,l,p,r);if(C()){break _;}c=c+1|0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfZ.b);m=a.t;n=a.a;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function Wv(){var a=this;D.call(a);a.gG=null;a.oT=null;a.xx=null;a.uX=null;a.zC=0;a.oe=0;a.fh=0;a.by=0;a.hz=0;a.oh=0;a.lp=0;a.hs=0;a.Jk=0;a.k4=0;a.nu=0;}
function Cv(a,b,c){a.oT.data[b]=c;}
function Ep(a,b){return a.oT.data[b];}
function MK(a){return QN(a,0);}
function QN(a,b){Vn(a,b);return a.gG.data[(b*2|0)+1|0];}
function EL(a,b,c){a.gG.data[b*2|0]=c;}
function M1(a,b,c){a.gG.data[(b*2|0)+1|0]=c;}
function Hp(a,b){return a.gG.data[b*2|0];}
function JI(a,b){return a.gG.data[(b*2|0)+1|0];}
function AM7(a,b){var c,d;c=Hp(a,b);d=JI(a,b);if((d|c|(d-c|0))>=0&&d<=Bi(a.uX))return Ev(a.uX,c,d);return null;}
function AEL(a){return PG(a,0);}
function PG(a,b){Vn(a,b);return a.gG.data[b*2|0];}
function AC5(a){if(a.gG.data[0]==(-1)){a.gG.data[0]=a.hz;a.gG.data[1]=a.hz;}a.k4=MK(a);}
function Tk(a,b){return a.xx.data[b];}
function FI(a,b,c){a.xx.data[b]=c;}
function Vn(a,b){var c;if(!a.oe){c=new D2;O(c);M(c);}if(b>=0&&b<a.zC)return;c=new BO;Bl(c,VV(b));M(c);}
function ARz(a){a.oe=1;}
function A$T(a){return a.oe;}
function Xj(a,b,c,d){a.oe=0;a.nu=2;M2(a.gG,(-1));M2(a.oT,(-1));if(b!==null)a.uX=b;if(c>=0){a.fh=c;a.by=d;}a.hz=a.fh;}
function Z8(a){Xj(a,null,(-1),(-1));}
function APZ(a,b){a.hz=b;if(a.k4>=0)b=a.k4;a.k4=b;}
function A4n(a){return a.fh;}
function A7q(a){return a.by;}
function A5e(a,b){a.nu=b;}
function AWi(a){return a.nu;}
function A6i(a){return a.lp;}
function A3k(a){return a.oh;}
function A3N(a){return a.k4;}
function VP(){var a=this;D.call(a);a.ck=null;a.iK=0;a.b8=0;a.eh=0;a.d_=0;a.b0=0;a.dM=0;}
function AOp(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(Bj(Bj((a.d_-a.iK|0)+1|0,(a.b0-a.b8|0)+1|0),(a.dM-a.eh|0)+1|0)>32768){Cg(Dz(),B(888));return;}c=a.iK;while(c<=a.d_){d=a.eh;while(d<=a.dM){e=c>>4;f=d>>4;g=Fj(b,c,0,d,1);if(g){$p=1;continue _;}if(g){if(a.b8<0)a.b8
=0;if(a.b0>=128)a.b0=127;h=a.b8;if(h<=a.b0){i=a.ck;$p=2;continue _;}}d=d+1|0;}c=c+1|0;}return;case 1:ZV(b,e,f);if(C()){break _;}a:while(true){if(g){if(a.b8<0)a.b8=0;if(a.b0>=128)a.b0=127;h=a.b8;if(h<=a.b0){i=a.ck;$p=2;continue _;}}d=d+1|0;while(d>a.dM){c=c+1|0;if(c>a.d_)break a;d=a.eh;}e=c>>4;f=d>>4;g=Fj(b,c,0,d,1);if(!g)continue;else{continue _;}}return;case 2:$z=ALk(b,i,c,h,d);if(C()){break _;}j=$z;$p=3;case 3:$z=ACx(b,c,h,d);if(C()){break _;}k=$z;L();l=BgB.data[k];if(!l)l=1;m=0;if(a.ck===Bkx){$p=4;continue _;}if
(a.ck===Bky)m=BgD.data[k];if(l>=15&&!m){m=0;if(j!=m){i=a.ck;$p=11;continue _;}h=h+1|0;b:while(true){if(h<=a.b0){i=a.ck;$p=2;continue _;}while(true){d=d+1|0;while(d>a.dM){c=c+1|0;if(c>a.d_)break b;d=a.eh;}e=c>>4;f=d>>4;g=Fj(b,c,0,d,1);if(g){$p=1;continue _;}if(g)break;}if(a.b8<0)a.b8=0;if(a.b0>=128)a.b0=127;h=a.b8;}return;}i=a.ck;g=c-1|0;$p=5;continue _;case 4:$z=Zy(b,c,h,d);if(C()){break _;}g=$z;if(g)m=15;if(l>=15&&!m){m=0;if(j!=m){i=a.ck;$p=11;continue _;}h=h+1|0;c:while(true){if(h<=a.b0){i=a.ck;$p=2;continue _;}while
(true){d=d+1|0;while(d>a.dM){c=c+1|0;if(c>a.d_)break c;d=a.eh;}e=c>>4;f=d>>4;g=Fj(b,c,0,d,1);if(g){$p=1;continue _;}if(g)break;}if(a.b8<0)a.b8=0;if(a.b0>=128)a.b0=127;h=a.b8;}return;}i=a.ck;g=c-1|0;$p=5;case 5:$z=ALk(b,i,g,h,d);if(C()){break _;}n=$z;i=a.ck;g=c+1|0;$p=6;case 6:$z=ALk(b,i,g,h,d);if(C()){break _;}o=$z;i=a.ck;g=h-1|0;$p=7;case 7:$z=ALk(b,i,c,g,d);if(C()){break _;}p=$z;i=a.ck;g=h+1|0;$p=8;case 8:$z=ALk(b,i,c,g,d);if(C()){break _;}q=$z;i=a.ck;g=d-1|0;$p=9;case 9:$z=ALk(b,i,c,h,g);if(C()){break _;}g
=$z;i=a.ck;r=d+1|0;$p=10;case 10:$z=ALk(b,i,c,h,r);if(C()){break _;}r=$z;if(o<=n)o=n;if(p<=o)p=o;if(q<=p)q=p;if(g<=q)g=q;if(r<=g)r=g;g=r-l|0;if(g<0)g=0;if(m<=g)m=g;if(j!=m){i=a.ck;$p=11;continue _;}h=h+1|0;d:while(true){if(h<=a.b0){i=a.ck;$p=2;continue _;}while(true){d=d+1|0;while(d>a.dM){c=c+1|0;if(c>a.d_)break d;d=a.eh;}e=c>>4;f=d>>4;g=Fj(b,c,0,d,1);if(g){$p=1;continue _;}if(g)break;}if(a.b8<0)a.b8=0;if(a.b0>=128)a.b0=127;h=a.b8;}return;case 11:AMv(b,i,c,h,d,m);if(C()){break _;}s=m-1|0;if(s<0)s=0;i=a.ck;g
=c-1|0;$p=12;case 12:AP$(b,i,g,h,d,s);if(C()){break _;}i=a.ck;g=h-1|0;$p=13;case 13:AP$(b,i,c,g,d,s);if(C()){break _;}i=a.ck;g=d-1|0;$p=14;case 14:AP$(b,i,c,h,g,s);if(C()){break _;}g=c+1|0;if(g>=a.d_){i=a.ck;$p=15;continue _;}g=h+1|0;if(g>=a.b0){i=a.ck;$p=16;continue _;}g=d+1|0;if(g>=a.dM){i=a.ck;$p=17;continue _;}h=h+1|0;e:while(true){if(h<=a.b0){i=a.ck;$p=2;continue _;}while(true){d=d+1|0;while(d>a.dM){c=c+1|0;if(c>a.d_)break e;d=a.eh;}e=c>>4;f=d>>4;g=Fj(b,c,0,d,1);if(g){$p=1;continue _;}if(g)break;}if(a.b8
<0)a.b8=0;if(a.b0>=128)a.b0=127;h=a.b8;}return;case 15:AP$(b,i,g,h,d,s);if(C()){break _;}g=h+1|0;if(g>=a.b0){i=a.ck;$p=16;continue _;}g=d+1|0;if(g>=a.dM){i=a.ck;$p=17;continue _;}h=h+1|0;f:while(true){if(h<=a.b0){i=a.ck;$p=2;continue _;}while(true){d=d+1|0;while(d>a.dM){c=c+1|0;if(c>a.d_)break f;d=a.eh;}e=c>>4;f=d>>4;g=Fj(b,c,0,d,1);if(g){$p=1;continue _;}if(g)break;}if(a.b8<0)a.b8=0;if(a.b0>=128)a.b0=127;h=a.b8;}return;case 16:AP$(b,i,c,g,d,s);if(C()){break _;}g=d+1|0;if(g>=a.dM){i=a.ck;$p=17;continue _;}h
=h+1|0;g:while(true){if(h<=a.b0){i=a.ck;$p=2;continue _;}while(true){d=d+1|0;while(d>a.dM){c=c+1|0;if(c>a.d_)break g;d=a.eh;}e=c>>4;f=d>>4;g=Fj(b,c,0,d,1);if(g){$p=1;continue _;}if(g)break;}if(a.b8<0)a.b8=0;if(a.b0>=128)a.b0=127;h=a.b8;}return;case 17:AP$(b,i,c,h,g,s);if(C()){break _;}h=h+1|0;a:while(true){if(h<=a.b0){i=a.ck;$p=2;continue _;}while(true){d=d+1|0;while(d>a.dM){c=c+1|0;if(c>a.d_)break a;d=a.eh;}e=c>>4;f=d>>4;g=Fj(b,c,0,d,1);if(g){$p=1;continue _;}if(g)break;}if(a.b8<0)a.b8=0;if(a.b0>=128)a.b0=
127;h=a.b8;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function ALC(a,b,c,d,e,f,g){var h,i,j;if(b>=a.iK&&c>=a.b8&&d>=a.eh&&e<=a.d_&&f<=a.b0&&g<=a.dM)return 1;if(b>=(a.iK-1|0)&&c>=(a.b8-1|0)&&d>=(a.eh-1|0)&&e<=(a.d_+1|0)&&f<=(a.b0+1|0)&&g<=(a.dM+1|0)){h=a.d_-a.iK|0;i=a.b0-a.b8|0;j=a.dM-a.eh|0;if(b>a.iK)b=a.iK;if(c>a.b8)c=a.b8;if(d>a.eh)d=a.eh;if(e<a.d_)e=a.d_;if(f<a.b0)f=a.b0;if(g<a.dM)g=a.dM;if((Bj(Bj(e-b|0,f-c|0),g-d|0)-Bj(Bj(h,i),j)|0)<=2){a.iK=b;a.b8=c;a.eh=d;a.d_=e;a.b0=f;a.dM=g;return 1;}}return 0;}
function R$(){}
function AF6(){var a=this;Ge.call(a);a.im=0;a.ec=null;}
function AWj(a){var b=new AF6();A66(b,a);return b;}
function A66(a,b){K9(a,b);a.ec=$rt_createByteArray(8);}
function AHI(a){a.fo.ly();}
function Q$(a,b,c,d){var e;if(b!==null){a.fo.gw(b,c,d);a.im=a.im+d|0;return;}e=new EE;O(e);M(e);}
function KK(a,b){a.fo.nO(b);a.im=a.im+1|0;}
function APo(a,b){UH(a,$rt_doubleToLongBits(b));}
function APj(a,b){JN(a,$rt_floatToIntBits(b));}
function JN(a,b){a.ec.data[0]=b>>24<<24>>24;a.ec.data[1]=b>>16<<24>>24;a.ec.data[2]=b>>8<<24>>24;a.ec.data[3]=b<<24>>24;a.fo.gw(a.ec,0,4);a.im=a.im+4|0;}
function UH(a,b){a.ec.data[0]=Long_shr(b,56).lo<<24>>24;a.ec.data[1]=Long_shr(b,48).lo<<24>>24;a.ec.data[2]=Long_shr(b,40).lo<<24>>24;a.ec.data[3]=b.hi<<24>>24;a.ec.data[4]=Long_shr(b,24).lo<<24>>24;a.ec.data[5]=Long_shr(b,16).lo<<24>>24;a.ec.data[6]=Long_shr(b,8).lo<<24>>24;a.ec.data[7]=b.lo<<24>>24;a.fo.gw(a.ec,0,8);a.im=a.im+8|0;}
function Z_(a,b){a.ec.data[0]=b>>8<<24>>24;a.ec.data[1]=b<<24>>24;a.fo.gw(a.ec,0,2);a.im=a.im+2|0;}
function AOd(a,b,c,d){var e;c=c.data;e=d+1|0;c[d]=b>>8<<24>>24;d=e+1|0;c[e]=b<<24>>24;return d;}
function Xr(a,b){var c,d,e;c=AGd(a,b);if(Long_gt(c,Long_fromInt(65535))){b=new BW;Bl(b,B(889));M(b);}d=c.lo;e=$rt_createByteArray(d+2|0);Q$(a,e,0,AO9(a,b,e,AOd(a,d,e,0)));}
function AGd(a,b){var c,d,e,f;c=0;d=Bi(b);e=0;while(e<d){f=Z(b,e);c=f>0&&f<=127?c+1|0:f>2047?c+3|0:c+2|0;e=e+1|0;}return Long_fromInt(c);}
function AO9(a,b,c,d){var e,f,g,h,i,j,k;e=Bi(b);f=0;while(f<e){g=Z(b,f);if(g>0&&g<=127){h=c.data;i=d+1|0;h[d]=g<<24>>24;}else if(g<=2047){h=c.data;j=d+1|0;h[d]=(192|31&g>>6)<<24>>24;i=j+1|0;h[j]=(128|63&g)<<24>>24;}else{h=c.data;i=d+1|0;h[d]=(224|15&g>>12)<<24>>24;k=i+1|0;h[i]=(128|63&g>>6)<<24>>24;i=k+1|0;h[k]=(128|63&g)<<24>>24;}f=f+1|0;d=i;}return d;}
function AF0(){D.call(this);}
function BmW(){var a=new AF0();A0j(a);return a;}
function A0j(a){return;}
function N0(){D.call(this);}
var BmX=null;var BmY=null;function BmZ(){var a=new N0();ABo(a);return a;}
function ABo(a){return;}
function ABZ(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=$rt_doubleToLongBits(b);c.zc=Long_eq(Long_and(d,new Long(0, 2147483648)),Long_ZERO)?0:1;e=Long_and(d,new Long(4294967295, 1048575));f=Long_shr(d,52).lo&2047;if(Long_eq(e,Long_ZERO)&&!f){c.u4=Long_ZERO;c.t5=0;return;}g=0;if(f)e=Long_or(e,new Long(0, 1048576));else{e=Long_shl(e,1);while(Long_eq(Long_and(e,new Long(0, 1048576)),Long_ZERO)){e=Long_shl(e,1);f=f+(-1)|0;g=g+1|0;}}h=AOu(BmY,f);if(h<0)h= -h-2|0;i=12+(f-BmY.data[h]|0)|0;j=Qv(e,BmX.data[h],i);if(Long_ge(j,
new Long(2808348672, 232830643))){h=h+1|0;i=12+(f-BmY.data[h]|0)|0;j=Qv(e,BmX.data[h],i);}k=Long_shru(BmX.data[h],(63-i|0)-g|0);l=Long_shr(Long_add(k,Long_fromInt(1)),1);m=Long_shr(k,1);if(Long_eq(e,new Long(0, 1048576)))m=Long_shr(m,2);n=Long_fromInt(10);while(Long_le(n,m)){n=Long_mul(n,Long_fromInt(10));}if(Long_ge(Long_rem(j,n),Long_div(m,Long_fromInt(2))))n=Long_div(n,Long_fromInt(10));o=Long_fromInt(1);while(Long_le(o,l)){o=Long_mul(o,Long_fromInt(10));}if(Long_gt(Long_sub(o,Long_rem(j,o)),Long_div(l,Long_fromInt(2))))o
=Long_div(o,Long_fromInt(10));f=Long_compare(n,o);e=f>0?Long_mul(Long_div(j,n),n):f<0?Long_add(Long_mul(Long_div(j,o),o),o):Long_mul(Long_div(Long_add(j,Long_div(o,Long_fromInt(2))),o),o);if(Long_ge(e,new Long(2808348672, 232830643))){h=h+1|0;e=Long_div(e,Long_fromInt(10));}else if(Long_lt(e,new Long(1569325056, 23283064))){h=h+(-1)|0;e=Long_mul(e,Long_fromInt(10));}c.u4=e;c.t5=h-330|0;}
function Qv(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=Long_and(b,Long_fromInt(65535));f=Long_and(Long_shru(b,16),Long_fromInt(65535));g=Long_and(Long_shru(b,32),Long_fromInt(65535));h=Long_and(Long_shru(b,48),Long_fromInt(65535));i=Long_and(c,Long_fromInt(65535));j=Long_and(Long_shru(c,16),Long_fromInt(65535));k=Long_and(Long_shru(c,32),Long_fromInt(65535));l=Long_and(Long_shru(c,48),Long_fromInt(65535));m=Long_add(Long_add(Long_mul(k,e),Long_mul(j,f)),Long_mul(i,g));n=Long_add(Long_add(Long_add(Long_mul(l,e),Long_mul(k,
f)),Long_mul(j,g)),Long_mul(i,h));o=Long_add(Long_add(Long_shl(Long_mul(l,h),32+d|0),Long_shl(Long_add(Long_mul(l,g),Long_mul(k,h)),16+d|0)),Long_shl(Long_add(Long_add(Long_mul(l,f),Long_mul(k,g)),Long_mul(j,h)),d));return Long_add(d>16?Long_add(o,Long_shl(n,d-16|0)):Long_add(o,Long_shru(n,16-d|0)),Long_shru(m,32-d|0));}
function ABm(){var b,c,d,e,f,g,h,i,j,k;BmX=$rt_createLongArray(660);BmY=$rt_createIntArray(660);b=new Long(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=BmX.data;g=d+330|0;f[g]=Mn(e,Long_fromInt(80));BmY.data[g]=c;e=Mn(e,Long_fromInt(10));h=AIX(e,Long_fromInt(10));while(Long_le(e,b)&&Long_eq(Long_and(e,new Long(0, 2147483648)),Long_ZERO)){e=Long_shl(e,1);c=c+1|0;h=Long_shl(h,1);}e=Long_add(e,Long_div(h,Long_fromInt(10)));d=d+1|0;}d=1023;i=0;while(i<330){j=0;e=b;while(Long_gt(e,new Long(3435973836, 214748364)))
{e=Long_shr(e,1);j=j+1|0;d=d+(-1)|0;}k=Long_mul(e,Long_fromInt(10));b=j<=0?k:Long_add(k,Long_shr(Long_mul(Long_and(b,Long_fromInt((1<<j)-1|0)),Long_fromInt(10)),j));f=BmX.data;g=(330-i|0)-1|0;f[g]=Mn(b,Long_fromInt(80));BmY.data[g]=d;i=i+1|0;}}
function HQ(){D.call(this);}
function AMS(){var a=this;HQ.call(a);a.nL=null;a.rN=0;}
function Hb(a,b){var c=new AMS();AUb(c,a,b);return c;}
function AUb(a,b,c){var d;a.rN=c;a.nL=J(PA,c);d=0;while(d<c){a.nL.data[d]=BbK(b);d=d+1|0;}}
function EZ(a,b,c){var d,e,f;d=0.0;e=1.0;f=0;while(f<a.rN){d=d+AGZ(a.nL.data[f],b*e,c*e)/e;e=e/2.0;f=f+1|0;}return d;}
function U8(a,b,c,d){var e,f,g;e=0.0;f=1.0;g=0;while(g<a.rN){e=e+Le(a.nL.data[g],b*f,c*f,d*f)/f;f=f/2.0;g=g+1|0;}return e;}
function H6(a,b,c,d,e,f,g,h,i,j,k){var l,m,n,o;if(b===null)b=$rt_createDoubleArray(Bj(Bj(f,g),h));else{l=0;while(true){m=b.data;if(l>=m.length)break;m[l]=0.0;l=l+1|0;}}n=1.0;o=0;while(o<a.rN){AQt(a.nL.data[o],b,c,d,e,f,g,h,i*n,j*n,k*n,n);n=n/2.0;o=o+1|0;}return b;}
function ACR(){var a=this;D.call(a);a.jC=null;a.j$=0;a.FI=Long_ZERO;}
function ATq(a,b,c){var d=new ACR();A1u(d,a,b,c);return d;}
function A1u(a,b,c,d){a.jC=b;a.j$=c;a.FI=d;}
function PA(){var a=this;HQ.call(a);a.b5=null;a.vg=0.0;a.ye=0.0;a.wx=0.0;}
function Bm0(){var a=new PA();A_F(a);return a;}
function BbK(a){var b=new PA();Zm(b,a);return b;}
function A_F(a){Zm(a,new DB);}
function Zm(a,b){var c,d,e,f,g;a.b5=$rt_createIntArray(512);a.vg=Cl(b)*256.0;a.ye=Cl(b)*256.0;a.wx=Cl(b)*256.0;c=0;while(c<256){d=a.b5.data;e=c+1|0;d[c]=c;c=e;}c=0;while(c<256){f=E(b,256-c|0)+c|0;g=a.b5.data[c];a.b5.data[c]=a.b5.data[f];a.b5.data[f]=g;a.b5.data[c+256|0]=a.b5.data[c];c=c+1|0;}}
function Le(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;e=b+a.vg;f=c+a.ye;g=d+a.wx;h=e|0;i=f|0;j=g|0;if(e<h)h=h+(-1)|0;if(f<i)i=i+(-1)|0;if(g<j)j=j+(-1)|0;k=h&255;l=i&255;m=j&255;c=e-h;d=f-i;n=g-j;o=c*c*c*(c*(c*6.0-15.0)+10.0);p=d*d*d*(d*(d*6.0-15.0)+10.0);q=n*n*n*(n*(n*6.0-15.0)+10.0);r=a.b5.data[k]+l|0;s=a.b5.data[r]+m|0;t=a.b5.data[r+1|0]+m|0;u=a.b5.data[k+1|0]+l|0;v=a.b5.data[u]+m|0;w=a.b5.data[u+1|0]+m|0;e=Dr(a,a.b5.data[s],c,d,n);k=a.b5.data[v];x=c-1.0;b=DN(a,o,e,Dr(a,k,x,d,n));k=a.b5.data[t];e
=d-1.0;b=DN(a,p,b,DN(a,o,Dr(a,k,c,e,n),Dr(a,a.b5.data[w],x,e,n)));k=a.b5.data[s+1|0];f=n-1.0;return DN(a,q,b,DN(a,p,DN(a,o,Dr(a,k,c,d,f),Dr(a,a.b5.data[v+1|0],x,d,f)),DN(a,o,Dr(a,a.b5.data[t+1|0],c,e,f),Dr(a,a.b5.data[w+1|0],x,e,f))));}
function DN(a,b,c,d){return c+b*(d-c);}
function Dr(a,b,c,d,e){var f,g;f=b&15;g=f>=8?d:c;if(f>=4)d=f!=12&&f!=14?e:c;if(f&1)g= -g;if(f&2)d= -d;return g+d;}
function AGZ(a,b,c){return Le(a,b,c,0.0);}
function A4K(a,b,c,d){return Le(a,b,c,d);}
function AQt(a,b,c,d,e,f,g,h,i,j,k,l){var m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs;m=0;n=1.0/l;o=(-1);p=0.0;q=0.0;r=0.0;s=0.0;t=0;while(t<f){u=(c+t|0)*i+a.vg;v=u|0;if(u<v)v=v+(-1)|0;w=v&255;u=u-v;x=u*u*u*(u*(u*6.0-15.0)+10.0);y=0;v=w+1|0;z=u-1.0;while(y<h){ba=(e+y|0)*k+a.wx;bb=ba|0;if(ba<bb)bb=bb+(-1)|0;bc=bb&255;bd=ba-bb;be=bd*bd*bd*(bd*(bd*6.0-15.0)+10.0);bf=0;ba=bd-1.0;while(bf<g){bg=(d+bf|0)*j+a.ye;bh=bg|0;if(bg<bh)bh=bh+(-1)|0;bi=bh&255;l=bg-bh;bj=l*l*l*(l*(l
*6.0-15.0)+10.0);if(bf&&bi==o)bi=o;else{bk=a.b5.data[w]+bi|0;bl=a.b5.data[bk]+bc|0;bm=a.b5.data[bk+1|0]+bc|0;bn=a.b5.data[v]+bi|0;bo=a.b5.data[bn]+bc|0;bp=a.b5.data[bn+1|0]+bc|0;p=DN(a,x,Dr(a,a.b5.data[bl],u,l,bd),Dr(a,a.b5.data[bo],z,l,bd));bn=a.b5.data[bm];bq=l-1.0;q=DN(a,x,Dr(a,bn,u,bq,bd),Dr(a,a.b5.data[bp],z,bq,bd));r=DN(a,x,Dr(a,a.b5.data[bl+1|0],u,l,ba),Dr(a,a.b5.data[bo+1|0],z,l,ba));s=DN(a,x,Dr(a,a.b5.data[bm+1|0],u,bq,ba),Dr(a,a.b5.data[bp+1|0],z,bq,ba));}br=b.data;bs=DN(a,be,DN(a,bj,p,q),DN(a,bj,
r,s));bn=m+1|0;br[m]=br[m]+bs*n;bf=bf+1|0;m=bn;o=bi;}y=y+1|0;}t=t+1|0;}}
function T_(){D.call(this);this.gB=null;}
function Lu(a){var b=new T_();AJC(b,a);return b;}
function AIK(a){var b=new T_();A0F(b,a);return b;}
function AJC(a,b){a.gB=$rt_createByteArray(b>>1);}
function A0F(a,b){a.gB=b;}
function G7(a,b,c,d){var e,f;e=b<<11|d<<7|c;f=e>>1;return !(e&1)?a.gB.data[f]&15:a.gB.data[f]>>4&15;}
function Ek(a,b,c,d,e){var f,g;f=b<<11|d<<7|c;g=f>>1;if(!(f&1))a.gB.data[g]=(a.gB.data[g]&240|e&15)<<24>>24;else a.gB.data[g]=(a.gB.data[g]&15|(e&15)<<4)<<24>>24;}
function Mj(a){return a.gB===null?0:1;}
function Vt(){Fa.call(this);}
var Bm1=null;function Mn(b,c){return Long_udiv(b, c);}
function AIX(b,c){return Long_urem(b, c);}
function AL1(){Bm1=F($rt_longcls());}
function TG(){D.call(this);this.CL=null;}
function ASp(a){CM(a.CL,K2(1));}
function A4s(a){ASp(a);}
function TD(){D.call(this);this.Dg=null;}
function ASw(a){CM(a.Dg,K2(0));}
function AYl(a){ASw(a);}
function Rn(){D.call(this);this.Bz=null;}
function XR(a){CM(a.Bz,K2(1));}
function A8Q(a){XR(a);}
function Rq(){D.call(this);this.BS=null;}
function ASg(a){CM(a.BS,K2(0));}
function A7d(a){ASg(a);}
function E2(){EW.call(this);}
var Bm2=null;var BfF=null;var Bm3=null;var Bm4=null;function ANc(){var b,c,d;b=new E2;FT(b,B(890),0);Bm2=b;b=new E2;FT(b,B(891),1);BfF=b;b=new E2;FT(b,B(892),2);Bm3=b;c=J(E2,3);d=c.data;d[0]=Bm2;d[1]=BfF;d[2]=Bm3;Bm4=c;}
function Ro(){var a=this;D.call(a);a.EQ=null;a.Eq=null;a.y4=null;a.vI=null;a.Bn=0;a.C$=0;a.xl=null;}
function AMJ(a){var b,c;b=a.EQ.result;if(b!==null&&b.key!==null&&b.value!==null){c=$rt_str(AZU(b.key));if(c!==null&&IA(c,a.vI)&&!(!a.Bn&&Hl(c,47,Bi(a.vI)+1|0)!=(-1))){if(!(Uz(b.value)?1:0))Fx(a.xl,ATq(c,0,Long_add(new Long(596067632, 383),Long_fromInt(A0J(b.value)))));else if(a.C$)Fx(a.xl,ATq(c,1,Long_fromInt(-1)));}b.continue();return;}CM(a.Eq,CY(a.y4.data[0]));}
function A7k(a){AMJ(a);}
function Rp(){var a=this;D.call(a);a.DQ=null;a.wO=null;}
function AK$(a){CM(a.DQ,CY(a.wO.data[0]<=0?(-1):a.wO.data[0]));}
function A1I(a){AK$(a);}
function Rl(){var a=this;D.call(a);a.CT=null;a.va=null;}
function ACu(a){CM(a.CT,a.va.result===null?Bm3:!(Uz(a.va.result)?1:0)?Bm2:BfF);}
function A5T(a){ACu(a);}
function Rm(){D.call(this);this.Ei=null;}
function AB9(a){CM(a.Ei,Bm3);}
function A3g(a){AB9(a);}
function Er(){D.call(this);}
function E5(a,b,c,d){return;}
function Rg(){Er.call(this);}
function GZ(){var a=new Rg();A60(a);return a;}
function A60(a){return;}
function AEM(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=E(c,3)+4|0;h=1;if(e>=1){i=e+g|0;if((i+1|0)<=128){j=(e+1|0)+g|0;k=j-2|0;l=e;a:while(true){if(l>j){if(!h)return 0;m=e-1|0;$p=1;continue _;}n=1;if(l==e)n=0;if(l>=k)n=2;o=d-n|0;while(o<=(d+n
|0)&&h){p=f-n|0;while(p<=(f+n|0)&&h){if(l>=0&&l<128)break a;h=0;p=p+1|0;}o=o+1|0;}l=l+1|0;}$p=7;continue _;}}return 0;case 1:$z=ACx(b,d,m,f);if(C()){break _;}k=$z;L();if(!(k!=BeR.b&&k!=BeS.b)&&e<((128-g|0)-1|0)){k=BeS.b;$p=2;continue _;}return 0;case 2:ALt(b,d,m,f,k);if(C()){break _;}k=(e-3|0)+g|0;b:while(true){if(k>i){k=0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;}o=k-i|0;q=1-(o/2|0)|0;r=d-q|0;l=d+q|0;m=f-q|0;h=f+q|0;while(r<=l){j=r-d|0;s=m;while(s<=h){t=s-f|0;if(If(j)!=q)break b;if(If(t)!=q)break b;if(E(c,
2)&&o)break b;s=s+1|0;}r=r+1|0;}k=k+1|0;}u=BgA.data;$p=5;continue _;case 3:$z=ACx(b,d,o,f);if(C()){break _;}m=$z;if(m&&m!=Be3.b){k=k+1|0;if(k>=g)return 1;o=e+k|0;continue _;}m=Be2.b;$p=4;case 4:ALt(b,d,o,f,m);if(C()){break _;}k=k+1|0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;case 5:$z=ACx(b,r,k,s);if(C()){break _;}t=$z;if(!u[t]){t=Be3.b;$p=6;continue _;}while(true){s=s+1|0;while(s>h){r=r+1|0;while(r>l){k=k+1|0;if(k>i){k=0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;}o=k-i|0;q=1-(o/2|0)|0;r=d-q|0;l=d+q|0;m=f-q|0;h
=f+q|0;}j=r-d|0;s=m;}t=s-f|0;if(If(j)!=q)break;if(If(t)!=q)break;if(!E(c,2))continue;if(!o)continue;else break;}u=BgA.data;continue _;case 6:ALt(b,r,k,s,t);if(C()){break _;}while(true){s=s+1|0;while(s>h){r=r+1|0;while(r>l){k=k+1|0;if(k>i){k=0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;}o=k-i|0;q=1-(o/2|0)|0;r=d-q|0;l=d+q|0;m=f-q|0;h=f+q|0;}j=r-d|0;s=m;}t=s-f|0;if(If(j)!=q)break;if(If(t)!=q)break;if(!E(c,2))continue;if(!o)continue;else break;}u=BgA.data;$p=5;continue _;case 7:$z=ACx(b,o,l,p);if(C()){break _;}r
=$z;if(r){L();if(r!=Be3.b)h=0;}while(true){p=p+1|0;while(!(p<=(f+n|0)&&h)){o=o+1|0;while(!(o<=(d+n|0)&&h)){l=l+1|0;if(l>j){if(!h)return 0;m=e-1|0;$p=1;continue _;}n=1;if(l==e)n=0;if(l>=k)n=2;o=d-n|0;}p=f-n|0;}if(l>=0&&l<128)break;h=0;}continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function Ow(){D.call(this);this.JB=0;}
var Bm5=null;var Bm6=null;function AX3(a){var b=new Ow();AOc(b,a);return b;}
function AOc(a,b){a.JB=b;}
function K2(b){return !b?Bm6:Bm5;}
function AHO(){Bm5=AX3(1);Bm6=AX3(0);}
function SP(){var a=this;CS.call(a);a.Ae=null;a.fS=null;a.xD=0;a.f3=0;}
function AD5(a){Dy(a.bG);APW(1);U(a.bG,Dj(0,(a.bm/2|0)-100|0,(a.bC/4|0)+120|0,B(598)));}
function ANJ(a){APW(0);}
function AYu(a){a.xD=a.xD+1|0;}
function AHi(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.gC&&!b.cl){b=a.fS;$p=1;continue _;}return;case 1:ACg(b);if(C()){break _;}c=a.J;b=null;$p=2;case 2:ADV(c,b);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,$p);}
function ACZ(a,b,c){var d,e;if(c==200)a.f3=(a.f3-1|0)&3;if(!(c!=208&&c!=28))a.f3=(a.f3+1|0)&3;if(c==14&&Bi(a.fS.gt.data[a.f3])>0)a.fS.gt.data[a.f3]=Ev(a.fS.gt.data[a.f3],0,Bi(a.fS.gt.data[a.f3])-1|0);if(UF(B(893),b)>=0&&Bi(a.fS.gt.data[a.f3])<15){d=a.fS.gt.data;c=a.f3;e=new S;V(e);e=H(e,a.fS.gt.data[a.f3]);Dx(e,b);d[c]=T(e);}}
function ABt(a,b,c,d){var e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABh(a);if(C()){break _;}DG(a,a.bZ,a.Ae,a.bm/2|0,40,16777215);B3();Bw(a.bm/2|0,a.bC/2|0,50.0);CC((-60.0),(-60.0),(-60.0));Bv(180.0,0.0,1.0,0.0);if(!((a.xD/6|0)%2|0))a.fS.rE=a.f3;e=a.fS;$p=2;case 2:$z=AMh(e);if(C()){break _;}f=$z;Bv((f*360|0)/16.0,0.0,1.0,0.0);e=Bkr;g=a.fS;h=(-0.5);i=(-0.75);j
=(-0.5);k=0.0;$p=3;case 3:AFo(e,g,h,i,j,k);if(C()){break _;}a.fS.rE=(-1);BE();$p=4;case 4:AFE(a,b,c,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function IL(){EW.call(this);this.Ab=0;}
var Bkx=null;var Bky=null;var Bm7=null;function A_M(a,b,c){var d=new IL();AG4(d,a,b,c);return d;}
function AG4(a,b,c,d){FT(a,b,c);a.Ab=d;}
function AFv(){var b,c;Bkx=A_M(B(894),0,15);Bky=A_M(B(895),1,0);b=J(IL,2);c=b.data;c[0]=Bkx;c[1]=Bky;Bm7=b;}
function MH(){var a=this;D.call(a);a.nk=null;a.nY=null;}
function AZ6(a){return a.nY;}
function S_(a,b){var c;c=a.nY;a.nY=b;return c;}
function AXE(a){return a.nk;}
function Lb(){var a=this;MH.call(a);a.db=null;a.dk=null;a.lH=0;a.jp=0;}
function M5(a){var b;b=LR(a);if(b==2){if(LR(a.dk)<0)a.dk=OX(a.dk);return PC(a);}if(b!=(-2))return a;if(LR(a.db)>0)a.db=PC(a.db);return OX(a);}
function LR(a){return (a.dk===null?0:a.dk.lH)-(a.db===null?0:a.db.lH)|0;}
function OX(a){var b;b=a.db;a.db=b.dk;b.dk=a;FP(a);FP(b);return b;}
function PC(a){var b;b=a.dk;a.dk=b.db;b.db=a;FP(a);FP(b);return b;}
function FP(a){var b,c;b=a.dk===null?0:a.dk.lH;c=a.db===null?0:a.db.lH;a.lH=DE(b,c)+1|0;a.jp=1;if(a.db!==null)a.jp=a.jp+a.db.jp|0;if(a.dk!==null)a.jp=a.jp+a.dk.jp|0;}
function AOn(a,b){return b?a.dk:a.db;}
function AM0(){var a=this;Ge.call(a);a.kv=null;a.g6=0;}
function BbL(a){var b=new AM0();A6n(b,a);return b;}
function A6n(a,b){K9(a,b);a.kv=$rt_createByteArray(8192);}
function AYv(a){ML(a);a.fo.ly();}
function AX2(a,b,c,d){var e,f,g;e=a.kv;if(e!==null&&d>=e.data.length){ML(a);a.fo.gw(b,c,d);return;}if(b===null){f=new EE;Bl(f,B(896));M(f);}if(c>=0&&c<=(b.data.length-d|0)){if(d<0){g=new Oe;f=new S;V(f);Bl(g,T(Be(H(f,B(897)),d)));M(g);}if(e===null){f=new BW;O(f);M(f);}if(d>=(e.data.length-a.g6|0))ML(a);Di(b,c,e,a.g6,d);a.g6=a.g6+d|0;return;}g=new Oe;f=new S;V(f);Bl(g,T(Be(H(f,B(898)),c)));M(g);}
function A38(a){var b,$$je;if(a.kv===null)return;a:{try{KP(a);}catch($$e){$$je=Bg($$e);b=$$je;break a;}a.kv=null;return;}a.kv=null;M(b);}
function AXm(a,b){var c,d,e,f;c=a.kv;if(c===null){d=new BW;O(d);M(d);}e=c.data;if(a.g6==e.length){a.fo.gw(c,0,a.g6);a.g6=0;}f=a.g6;a.g6=f+1|0;e[f]=b<<24>>24;}
function ML(a){if(a.g6>0){a.fo.gw(a.kv,0,a.g6);a.g6=0;}}
function WT(){D.call(this);}
function Bm8(){var a=new WT();AX0(a);return a;}
function AX0(a){return;}
function AI5(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();bx=$T.l();bw=$T.l();bv=$T.l();bu=$T.l();bt=$T.l();bs=$T.l();br=$T.l();bq=$T.l();bp=$T.l();bo=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p
=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Ex(b,d,e,f,B(899),4.0,(1.0+(N(b.q)-N(b.q))*0.20000000298023224)*0.699999988079071);h=Ga();i=16;j=0;k=15.0;a:while(true){if(j>=i){l=g*2.0;m=K(d-l-1.0);n=K(d+l+1.0);o=K(e-l-1.0);p=K(e+l+1.0);q=D3(m,o,K(f-l-1.0),n,p,K(f+l+1.0));$p=1;continue _;}n=0;while(n<i){o=0;while(o<i){if(!(j&&j!=15&&n&&n!=15&&o&&o!=15)){r=j/k*2.0-1.0;s=n/k*2.0-1.0;t
=o/k*2.0-1.0;u=Ed(r*r+s*s+t*t);l=r/u;v=s/u;w=t/u;x=g*(0.699999988079071+N(b.q)*0.6000000238418579);y=0.30000001192092896;z=l*0.30000001192092896;ba=v*0.30000001192092896;bb=w*0.30000001192092896;l=d;v=e;w=f;if(x>0.0)break a;}o=o+1|0;}n=n+1|0;}j=j+1|0;}bc=K(l);bd=K(v);be=K(w);$p=9;continue _;case 1:$z=ADL(b,c,q);if(C()){break _;}q=$z;bf=BY(d,e,f);bg=0;while(true){if(bg>=CX(q)){bh=Ci();DF(bh,h);bi=CX(bh)-1|0;r=g;s=d*1.0;u=e*1.0;bj=f*1.0;if(bi<0)return;bk=Y(bh,bi);m=bk.eF;bl=bk.e0;bm=bk.eG;$p=4;continue _;}bn=
Y(q,bg);bj=Sn(bn,d,e,f)/l;if(bj<=1.0)break;bg=bg+1|0;}bo=bn.d-d;bp=bn.j-e;bq=bn.e-f;br=Ce(bo*bo+bp*bp+bq*bq);v=bo/br;w=bp/br;z=bq/br;bh=bn.L;$p=2;case 2:$z=ADB(b,bf,bh);if(C()){break _;}x=$z;bs=x;bt=(1.0-bj)*bs;m=(bt*bt+bt)/2.0*8.0*l+1.0|0;$p=3;case 3:bn.fs(c,m);if(C()){break _;}bn.g=bn.g+v*bt;bn.i=bn.i+w*bt;bn.h=bn.h+z*bt;while(true){bg=bg+1|0;if(bg>=CX(q)){bh=Ci();DF(bh,h);bi=CX(bh)-1|0;r=g;s=d*1.0;u=e*1.0;bj=f*1.0;if(bi<0)return;bk=Y(bh,bi);m=bk.eF;bl=bk.e0;bm=bk.eG;$p=4;continue _;}bn=Y(q,bg);bj=Sn(bn,d,
e,f)/l;if(bj>1.0)continue;else break;}bo=bn.d-d;bp=bn.j-e;bq=bn.e-f;br=Ce(bo*bo+bp*bp+bq*bq);v=bo/br;w=bp/br;z=bq/br;bh=bn.L;$p=2;continue _;case 4:$z=ACx(b,m,bl,bm);if(C()){break _;}bu=$z;bv=0;y=m;bw=bl;x=bm;while(bv<1){bq=y+N(b.q);l=bw+N(b.q);v=x+N(b.q);w=bq-d;z=l-e;ba=v-f;bb=Ce(w*w+z*z+ba*ba);w=w/bb;z=z/bb;ba=ba/bb;bb=0.5/(bb/r+0.1)*(N(b.q)*N(b.q)+0.30000001192092896);w=w*bb;z=z*bb;ba=ba*bb;BU(b,B(223),(bq+s)/2.0,(l+u)/2.0,(v+bj)/2.0,w,z,ba);BU(b,B(256),bq,l,v,w,z,ba);bv=bv+1|0;}if(bu>0){L();c=BeP.data[bu];$p
=5;continue _;}bi=bi+(-1)|0;if(bi<0)return;bk=Y(bh,bi);m=bk.eF;bl=bk.e0;bm=bk.eG;continue _;case 5:$z=AEK(b,m,bl,bm);if(C()){break _;}bv=$z;g=0.30000001192092896;$p=6;case 6:c.HT(b,m,bl,bm,bv,g);if(C()){break _;}bv=0;$p=7;case 7:APy(b,m,bl,bm,bv);if(C()){break _;}c=BeP.data[bu];$p=8;case 8:c.sO(b,m,bl,bm);if(C()){break _;}bi=bi+(-1)|0;if(bi<0)return;bk=Y(bh,bi);m=bk.eF;bl=bk.e0;bm=bk.eG;$p=4;continue _;case 9:$z=ACx(b,bc,bd,be);if(C()){break _;}bx=$z;if(bx>0){L();x=x-(BeP.data[bx].yr(c)+0.30000001192092896)
*y;}if(x>0.0)Xi(h,CO(bc,bd,be));l=l+z;v=v+ba;w=w+bb;x=x-0.22500000894069672;while(x<=0.0){while(true){o=o+1|0;while(o>=i){n=n+1|0;while(n>=i){j=j+1|0;if(j>=i){l=g*2.0;m=K(d-l-1.0);n=K(d+l+1.0);o=K(e-l-1.0);p=K(e+l+1.0);q=D3(m,o,K(f-l-1.0),n,p,K(f+l+1.0));$p=1;continue _;}n=0;}o=0;}if(!j)break;if(j==15)break;if(!n)break;if(n==15)break;if(!o)break;if(o!=15)continue;else break;}r=j/k*2.0-1.0;s=n/k*2.0-1.0;t=o/k*2.0-1.0;u=Ed(r*r+s*s+t*t);l=r/u;v=s/u;w=t/u;x=g*(0.699999988079071+N(b.q)*0.6000000238418579);y=0.30000001192092896;z
=l*0.30000001192092896;ba=v*0.30000001192092896;bb=w*0.30000001192092896;l=d;v=e;w=f;}bc=K(l);bd=K(v);be=K(w);continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,$p);}
function Oe(){BO.call(this);}
function Bm9(){var a=new Oe();AVW(a);return a;}
function AVW(a){O(a);}
function ARk(){Er.call(this);}
function AYo(){var a=new ARk();A0V(a);return a;}
function A0V(a){return;}
function XP(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=E(c,2)+2|0;h=E(c,2)+2|0;i=0;j=(d-g|0)-1|0;k=(d+g|0)+1|0;l=e-1|0;m=e+3|0;n=m+1|0;o=(f-h|0)-1|0;p=(f+h|0)+1|0;q=j;a:while(true){r=R(q,
k);if(r>0){if(i>=1&&i<=5){r=j;b:while(true){s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgV.b;$p=2;continue _;}t=m;while(true){u=R(t,l);if(u<0)break;v=o;i=R(v,p);if(i<=0)break b;t=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;}return 0;}s=l;while(true){t=R(s,n);if(t>0)break;v=o;w=R(v,p);if(w<=0)break a;s=s+1|0;}q=q+1|0;}$p=1;case 1:$z
=AB2(b,q,s,v);if(C()){break _;}x=$z;if(s==l&&!x.dw())return 0;if(!t&&!x.dw())return 0;if(!(q!=j&&r&&v!=o&&w)&&s==e){$p=5;continue _;}v=v+1|0;while(true){w=R(v,p);if(w<=0)break;s=s+1|0;while(true){t=R(s,n);if(t<=0)break;q=q+1|0;r=R(q,k);if(r>0){if(i>=1&&i<=5){r=j;c:while(true){s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgV.b;$p=2;continue _;}t=m;while(true){u=R(t,l);if(u<0)break;v=o;i=R(v,p);if(i<=0)break c;t
=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;}return 0;}s=l;}v=o;}continue _;case 2:APy(b,d,e,f,k);if(C()){break _;}$p=3;case 3:$z=ANz(b,d,e,f);if(C()){break _;}b=$z;b.jO=ADG(a,c);return 1;case 4:$z=ACx(b,o,e,j);if(C()){break _;}r=$z;if(!r){u=0;r=o-1|0;$p=6;continue _;}l=l+1|0;while(true){if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;continue _;}q=q+1|0;if(q>=2)break;l=0;}L();k=BgV.b;$p=2;continue _;case 5:$z=ACx(b,q,s,v);if(C()){break _;}u
=$z;if(!u){u=s+1|0;$p=7;continue _;}v=v+1|0;while(true){w=R(v,p);if(w<=0)break;s=s+1|0;while(true){t=R(s,n);if(t<=0)break;q=q+1|0;r=R(q,k);if(r>0){if(i>=1&&i<=5){r=j;b:while(true){s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgV.b;$p=2;continue _;}t=m;while(true){u=R(t,l);if(u<0)break;v=o;i=R(v,p);if(i<=0)break b;t=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q
=t-1|0;$p=9;continue _;}return 0;}s=l;}v=o;}$p=1;continue _;case 6:$z=AB2(b,r,e,j);if(C()){break _;}x=$z;if(x.dw())u=1;r=o+1|0;$p=10;continue _;case 7:$z=ACx(b,q,u,v);if(C()){break _;}u=$z;if(!u)i=i+1|0;v=v+1|0;while(true){w=R(v,p);if(w<=0)break;s=s+1|0;while(true){t=R(s,n);if(t<=0)break;q=q+1|0;r=R(q,k);if(r>0){if(i>=1&&i<=5){r=j;d:while(true){s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgV.b;$p=2;continue _;}t
=m;while(true){u=R(t,l);if(u<0)break;v=o;i=R(v,p);if(i<=0)break d;t=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;}return 0;}s=l;}v=o;}$p=1;continue _;case 8:$z=AB2(b,r,t,v);if(C()){break _;}x=$z;if(x.dw()){if(!u&&E(c,4)){L();q=Be6.b;$p=14;continue _;}L();q=BeZ.b;$p=12;continue _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while
(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgV.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){continue _;}q=t-1|0;$p=9;case 9:$z=AB2(b,r,q,v);if(C()){break _;}x=$z;if(x.dw()){$p=8;continue _;}q=0;$p=11;continue _;case 10:$z=AB2(b,r,e,j);if(C()){break _;}x=$z;if(x.dw())u=u+1|0;r=j-1|0;$p=13;continue _;case 11:APy(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r
=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgV.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 12:APy(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)
|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgV.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 13:$z=AB2(b,o,e,r);if(C()){break _;}x=$z;if(x.dw())u=u+1|0;r=j+1|0;$p=16;continue _;case 14:APy(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g
|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgV.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 15:APy(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgV.b;$p=2;continue _;}t=m;}v=o;}if(r!=j
&&u&&v!=o&&s&&t!=n&&i){q=0;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 16:$z=AB2(b,o,e,r);if(C()){break _;}x=$z;if(x.dw())u=u+1|0;if(u==1){L();r=BgX.b;$p=17;continue _;}l=l+1|0;while(true){if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;if(q>=2)break;l=0;}L();k=BgV.b;$p=2;continue _;case 17:APy(b,o,e,j,r);if(C()){break _;}$p=18;case 18:$z=ANz(b,o,e,j);if(C()){break _;}x=$z;y=x;n=0;while(n<8){z=AHo(a,c);if(z!==null)AHA(y,E(c,k),z);n=n+1|0;}while(true){q=q+1|0;if(q
>=2)break;l=0;if(l>=3)continue;else{o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}}L();k=BgV.b;$p=2;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function AHo(a,b){var c,d;a:{c=E(b,10);if(!c){d=new Cd;BB();DD(d,BiI);break a;}if(c==1){d=new Cd;BB();Gr(d,BhQ,E(b,4)+1|0);break a;}if(c==2){d=new Cd;BB();DD(d,Bif);break a;}if(c==3){d=new Cd;BB();Gr(d,BhD,E(b,4)+1|0);break a;}if(c==4){d=new Cd;BB();Gr(d,Bge,E(b,4)+1|0);break a;}if(c==5){d=new Cd;BB();Gr(d,Bgf,E(b,4)+1|0);break a;}if(c==6){d=new Cd;BB();DD(d,BiE);break a;}if(c==7&&!E(b,100)){d=new Cd;BB();DD(d,BiC);break a;}d=null;}return d;}
function ADG(a,b){var c;c=E(b,4);return !c?B(861):c==1?B(864):c==2?B(864):c!=3?B(3):B(862);}
function Ch(){var a=this;Er.call(a);a.zX=0;a.c3=0;}
function Bm$(a,b){var c=new Ch();Cm(c,a,b);return c;}
function Cm(a,b,c){a.zX=b;a.c3=c;}
function ABT(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=N(c)*3.1415927410125732;h=d+8|0;i=h+Bq(g)*a.c3/8.0;j=
h-Bq(g)*a.c3/8.0;h=f+8|0;k=h+BC(g)*a.c3/8.0;l=h-BC(g)*a.c3/8.0;m=(e+E(c,3)|0)+2|0;n=(e+E(c,3)|0)+2|0;o=0;j=j-i;n=n-m;p=l-k;while(o<=a.c3){q=o;r=i+j*q/a.c3;s=m+n*q/a.c3;t=k+p*q/a.c3;q=Cl(c)*a.c3/16.0;h=o*3.1415927410125732;u=(Bq(h/a.c3)+1.0)*q+1.0;v=(Bq(h/a.c3)+1.0)*q+1.0;q=u/2.0;w=r-q|0;e=r+q|0;l=v/2.0;f=s-l|0;x=s+l|0;y=t-q|0;z=t+q|0;while(w<=e){ba=f;while(ba<=x){bb=y;while(bb<=z){bc=(w+0.5-r)/q;bd=(ba+0.5-s)/l;be=(bb+0.5-t)/q;if(bc*bc+bd*bd+be*be<1.0){$p=1;continue _;}bb=bb+1|0;}ba=ba+1|0;}w=w+1|0;}o=o+1|0;}return 1;case 1:$z
=ACx(b,w,ba,bb);if(C()){break _;}bf=$z;L();if(bf==BeV.b){d=a.zX;$p=2;continue _;}a:while(true){bb=bb+1|0;while(bb>z){ba=ba+1|0;while(ba>x){w=w+1|0;while(w>e){o=o+1|0;if(o>a.c3)break a;q=o;r=i+j*q/a.c3;s=m+n*q/a.c3;t=k+p*q/a.c3;q=Cl(c)*a.c3/16.0;h=o*3.1415927410125732;u=(Bq(h/a.c3)+1.0)*q+1.0;v=(Bq(h/a.c3)+1.0)*q+1.0;q=u/2.0;w=r-q|0;e=r+q|0;l=v/2.0;f=s-l|0;x=s+l|0;y=t-q|0;z=t+q|0;}ba=f;}bb=y;}bc=(w+0.5-r)/q;bd=(ba+0.5-s)/l;be=(bb+0.5-t)/q;if(bc*bc+bd*bd+be*be>=1.0)continue;else{continue _;}}return 1;case 2:ALt(b,
w,ba,bb,d);if(C()){break _;}b:while(true){bb=bb+1|0;while(bb>z){ba=ba+1|0;while(ba>x){w=w+1|0;while(w>e){o=o+1|0;if(o>a.c3)break b;q=o;r=i+j*q/a.c3;s=m+n*q/a.c3;t=k+p*q/a.c3;q=Cl(c)*a.c3/16.0;h=o*3.1415927410125732;u=(Bq(h/a.c3)+1.0)*q+1.0;v=(Bq(h/a.c3)+1.0)*q+1.0;q=u/2.0;w=r-q|0;e=r+q|0;l=v/2.0;f=s-l|0;x=s+l|0;y=t-q|0;z=t+q|0;}ba=f;}bb=y;}bc=(w+0.5-r)/q;bd=(ba+0.5-s)/l;be=(bb+0.5-t)/q;if(bc*bc+bd*bd+be*be>=1.0)continue;else{$p=1;continue _;}}return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,
r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,$p);}
function BR(){Er.call(this);this.uf=0;}
function Bm_(a){var b=new BR();BS(b,a);return b;}
function BS(a,b){a.uf=b;}
function ACP(a,b,c,d,e,f){var g,h,i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=0;if(g>=64)return 1;h=(d+E(c,8)|0)-E(c,8)|0;i=(e+E(c,4)|0)-E(c,4)|0;j=(f+E(c,8)|0)-E(c,8)|0;$p=1;case 1:$z=ACx(b,h,i,j);if(C()){break _;}k=$z;if(!k){L();l=BeP.data[a.uf];$p=2;continue _;}g=g+1|0;if(g>=64)return 1;h=(d+E(c,8)|0)-E(c,8)|0;i=(e+E(c,4)|0)-E(c,4)|0;j=(f+E(c,8)|0)-E(c,8)|0;continue _;case 2:$z
=l.Hc(b,h,i,j);if(C()){break _;}k=$z;if(k){k=a.uf;$p=3;continue _;}g=g+1|0;if(g>=64)return 1;h=(d+E(c,8)|0)-E(c,8)|0;i=(e+E(c,4)|0)-E(c,4)|0;j=(f+E(c,8)|0)-E(c,8)|0;$p=1;continue _;case 3:ALt(b,h,i,j,k);if(C()){break _;}g=g+1|0;if(g>=64)return 1;h=(d+E(c,8)|0)-E(c,8)|0;i=(e+E(c,4)|0)-E(c,4)|0;j=(f+E(c,8)|0)-E(c,8)|0;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Cn(){Er.call(this);this.EU=0;}
function Bna(a){var b=new Cn();Cs(b,a);return b;}
function Cs(a,b){a.EU=b;}
function AL2(a,b,c,d,e,f){var g,h,i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=e+1|0;$p=1;case 1:$z=ACx(b,d,g,f);if(C()){break _;}g=$z;L();if(g!=BeV.b)return 0;g=e-1|0;$p=2;case 2:$z=ACx(b,d,g,f);if(C()){break _;}h=$z;if(h!=BeV.b)return 0;$p=3;case 3:$z=ACx(b,d,e,f);if(C()){break _;}g=$z;if(g){$p=5;continue _;}g=0;h=d-1|0;$p=4;case 4:$z=ACx(b,h,e,f);if(C()){break _;}i
=$z;if(i==BeV.b)g=1;i=d+1|0;$p=6;continue _;case 5:$z=ACx(b,d,e,f);if(C()){break _;}g=$z;if(g!=BeV.b)return 0;g=0;h=d-1|0;$p=4;continue _;case 6:$z=ACx(b,i,e,f);if(C()){break _;}j=$z;if(j==BeV.b)g=g+1|0;k=f-1|0;$p=7;case 7:$z=ACx(b,d,e,k);if(C()){break _;}j=$z;if(j==BeV.b)g=g+1|0;j=f+1|0;$p=8;case 8:$z=ACx(b,d,e,j);if(C()){break _;}l=$z;if(l==BeV.b)g=g+1|0;l=0;$p=9;case 9:$z=ACx(b,h,e,f);if(C()){break _;}h=$z;if(!h)l=1;$p=10;case 10:$z=ACx(b,i,e,f);if(C()){break _;}h=$z;if(!h)l=l+1|0;$p=11;case 11:$z=ACx(b,
d,e,k);if(C()){break _;}h=$z;if(!h)l=l+1|0;$p=12;case 12:$z=ACx(b,d,e,j);if(C()){break _;}h=$z;if(!h)l=l+1|0;if(g==3&&l==1){g=a.EU;$p=13;continue _;}return 1;case 13:APy(b,d,e,f,g);if(C()){break _;}return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function SE(){C1.call(this);}
function Y_(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;a.i=a.i+0.002;b=a.g;c=a.i;d=a.h;$p=1;case 1:ARF(a,b,c,d);if(C()){break _;}a.g=a.g*0.8500000238418579;a.i=a.i*0.8500000238418579;a.h=a.h*0.8500000238418579;e=a.l;f=K(a.d);g=K(a.j);h=K(a.e);$p=2;case 2:$z=AB2(e,f,g,h);if(C()){break _;}e=$z;if(e!==BfQ){$p=3;continue _;}f=a.cw;a.cw=f-1|0;if(f>0)return;$p=4;continue _;case 3:Cb(a);if
(C()){break _;}f=a.cw;a.cw=f-1|0;if(f>0)return;$p=4;case 4:Cb(a);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AFp(){C1.call(this);this.Ct=0.0;}
function A7$(a,b,c,d,e){var f=new AFp();AV4(f,a,b,c,d,e);return f;}
function AV4(a,b,c,d,e,f){var g;FD(a,b,c,d,e,0.0,0.0,0.0);a.g=a.g*0.10000000149011612;a.i=a.i*0.10000000149011612;a.h=a.h*0.10000000149011612;g=BP()*0.30000001192092896;a.iq=g;a.ie=g;a.h1=g;a.dr=a.dr*0.75;a.dr=a.dr*f;a.Ct=a.dr;a.cw=8.0/(BP()*0.8+0.2)|0;a.cw=a.cw*f|0;a.o6=0;}
function AJ7(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.dq+c)/a.cw*32.0;if(i<0.0)i=0.0;if(i>1.0)i=1.0;a.dr=a.Ct*i;$p=1;case 1:ANv(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ALU(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;b=a.dq;a.dq=b+1|0;if(b>=a.cw){$p=2;continue _;}a.e7=7-((a.dq*8|0)/a.cw|0)|0;a.i=a.i+0.004;c=a.g;d=a.i;e=a.h;$p=1;case 1:ARF(a,c,d,e);if(C()){break _;}if(a.j===a.cS){a.g=a.g*1.1;a.h=a.h*1.1;}a.g=a.g*0.9599999785423279;a.i=a.i*0.9599999785423279;a.h=a.h*0.9599999785423279;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;case 2:Cb(a);if
(C()){break _;}a.e7=7-((a.dq*8|0)/a.cw|0)|0;a.i=a.i+0.004;c=a.g;d=a.i;e=a.h;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,$p);}
function Q4(){C1.call(this);}
function AR9(a,b,c,d,e,f,g,h){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ANv(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AET(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;b=a.dq;a.dq=b+1|0;if(b>=a.cw){$p=2;continue _;}a.e7=7-((a.dq*8|0)/a.cw|0)|0;a.i=a.i+0.004;c=a.g;d=a.i;e=a.h;$p=1;case 1:ARF(a,c,d,e);if(C()){break _;}a.g=a.g*0.8999999761581421;a.i=a.i*0.8999999761581421;a.h=a.h*0.8999999761581421;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;case 2:Cb(a);if(C()){break _;}a.e7=7-
((a.dq*8|0)/a.cw|0)|0;a.i=a.i+0.004;c=a.g;d=a.i;e=a.h;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,$p);}
function O5(){C1.call(this);this.DR=0.0;}
function AQI(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.dq+c)/a.cw;a.dr=a.DR*(1.0-i*i*0.5);$p=1;case 1:ANv(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ASu(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=(a.dq+b)/a.cw;if(c<0.0)c=0.0;if(c>1.0)c=1.0;$p=1;case 1:$z=ADI(a,b);if(C()){break _;}d=$z;return d*c+1.0-c;default:E$();}}C3().s(a,b,c,d,$p);}
function AAS(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;b=a.dq;a.dq=b+1|0;if(b>=a.cw){$p=2;continue _;}c=a.g;d=a.i;e=a.h;$p=1;case 1:ARF(a,c,d,e);if(C()){break _;}a.g=a.g*0.9599999785423279;a.i=a.i*0.9599999785423279;a.h=a.h*0.9599999785423279;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;case 2:Cb(a);if(C()){break _;}c=a.g;d=a.i;e=a.h;$p=1;continue _;default:E$();}}C3().s(a,
b,c,d,e,$p);}
function AA3(){C1.call(this);this.yU=0.0;}
function BcI(a,b,c,d){var e=new AA3();A1L(e,a,b,c,d);return e;}
function A1L(a,b,c,d,e){FD(a,b,c,d,e,0.0,0.0,0.0);a.g=a.g*0.800000011920929;a.i=a.i*0.800000011920929;a.h=a.h*0.800000011920929;a.i=N(a.m)*0.4000000059604645+0.05000000074505806;a.iq=1.0;a.ie=1.0;a.h1=1.0;a.dr=a.dr*(N(a.m)*2.0+0.20000000298023224);a.yU=a.dr;a.cw=16.0/(BP()*0.8+0.2)|0;a.o6=0;a.e7=49;}
function AJ8(a,b){return 1.0;}
function AGU(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.dq+c)/a.cw;a.dr=a.yU*(1.0-i*i);$p=1;case 1:ANv(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ALj(a){var b,c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;b=a.dq;a.dq=b+1|0;if(b>=a.cw){$p=1;continue _;}c=a.dq/a.cw;if(N(a.m)>c)BU(a.l,B(256),a.d,a.j,a.e,a.g,a.i,a.h);a.i=a.i-0.03;d=a.g;e=a.i;f=a.h;$p=2;continue _;case 1:Cb(a);if(C()){break _;}c=a.dq/a.cw;if(N(a.m)>c)BU(a.l,B(256),a.d,a.j,a.e,a.g,a.i,a.h);a.i=a.i-0.03;d=a.g;e=a.i;f=a.h;$p=2;case 2:ARF(a,d,e,f);if(C()){break _;}a.g
=a.g*0.9990000128746033;a.i=a.i*0.9990000128746033;a.h=a.h*0.9990000128746033;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ARC(){JO.call(this);}
function Bcv(a,b,c,d,e,f,g){var h=new ARC();AVQ(h,a,b,c,d,e,f,g);return h;}
function AVQ(a,b,c,d,e,f,g,h){TP(a,b,c,d,e);a.m8=0.03999999910593033;a.e7=a.e7+1|0;if(g===0.0&&!(f===0.0&&h===0.0)){a.g=f;a.i=g+0.1;a.h=h;}}
function AIq(){D.call(this);}
function Bnb(){var a=new AIq();AWS(a);return a;}
function AWS(a){return;}
function H$(){var a=this;D.call(a);a.dj=null;a.bu=0;a.bq=0;a.bt=0;a.fR=0;a.bD=null;a.e5=null;}
function Bnc(a,b,c,d,e){var f=new H$();YS(f,a,b,c,d,e);return f;}
function YS(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.e5=b;a.bD=Ci();a.dj=c;a.bu=d;a.bq=e;a.bt=f;$p=1;case 1:$z=AEK(c,d,e,f);if(C()){break _;}d=$z;a.fR=d;KZ(a);return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function KZ(a){a:{Dy(a.bD);if(!a.fR){U(a.bD,CO(a.bu,a.bq,a.bt-1|0));U(a.bD,CO(a.bu,a.bq,a.bt+1|0));break a;}if(a.fR==1){U(a.bD,CO(a.bu-1|0,a.bq,a.bt));U(a.bD,CO(a.bu+1|0,a.bq,a.bt));break a;}if(a.fR==2){U(a.bD,CO(a.bu-1|0,a.bq,a.bt));U(a.bD,CO(a.bu+1|0,a.bq+1|0,a.bt));break a;}if(a.fR==3){U(a.bD,CO(a.bu-1|0,a.bq+1|0,a.bt));U(a.bD,CO(a.bu+1|0,a.bq,a.bt));break a;}if(a.fR==4){U(a.bD,CO(a.bu,a.bq+1|0,a.bt-1|0));U(a.bD,CO(a.bu,a.bq,a.bt+1|0));break a;}if(a.fR==5){U(a.bD,CO(a.bu,a.bq,a.bt-1|0));U(a.bD,CO(a.bu,a.bq
+1|0,a.bt+1|0));break a;}if(a.fR==6){U(a.bD,CO(a.bu+1|0,a.bq,a.bt));U(a.bD,CO(a.bu,a.bq,a.bt+1|0));break a;}if(a.fR==7){U(a.bD,CO(a.bu-1|0,a.bq,a.bt));U(a.bD,CO(a.bu,a.bq,a.bt+1|0));break a;}if(a.fR==8){U(a.bD,CO(a.bu-1|0,a.bq,a.bt));U(a.bD,CO(a.bu,a.bq,a.bt-1|0));break a;}if(a.fR!=9)break a;U(a.bD,CO(a.bu+1|0,a.bq,a.bt));U(a.bD,CO(a.bu,a.bq,a.bt-1|0));}}
function AFG(a){var b,c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;if(b>=a.bD.s)return;c=Y(a.bD,b);$p=1;case 1:$z=AQ8(a,c);if(C()){break _;}c=$z;if(c!==null&&SV(c,a)){Rc(a.bD,b,CO(c.bu,c.bq,c.bt));d=b;}else{c=a.bD;d=b+(-1)|0;En(c,b);}b=d+1|0;if(b>=a.bD.s)return;c=Y(a.bD,b);continue _;default:E$();}}C3().s(a,b,c,d,$p);}
function AQ8(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.dj;d=b.eF;e=b.e0;f=b.eG;$p=1;case 1:$z=ACx(c,d,e,f);if(C()){break _;}d=$z;if(d!=a.e5.b){c=a.dj;d=b.eF;e=b.e0+1|0;f=b.eG;$p=2;continue _;}c=new H$;g=a.e5;h=a.dj;d=b.eF;e=b.e0;f=b.eG;$p=3;continue _;case 2:$z=ACx(c,d,e,f);if(C()){break _;}d=$z;if(d!=a.e5.b){c=a.dj;d=b.eF;e=b.e0-1|0;f=b.eG;$p=4;continue _;}c=new H$;g=a.e5;h=a.dj;d
=b.eF;e=b.e0+1|0;f=b.eG;$p=5;continue _;case 3:YS(c,g,h,d,e,f);if(C()){break _;}return c;case 4:$z=ACx(c,d,e,f);if(C()){break _;}d=$z;if(d!=a.e5.b){c=null;return c;}c=new H$;g=a.e5;h=a.dj;e=b.eF;d=b.e0-1|0;f=b.eG;$p=6;continue _;case 5:YS(c,g,h,d,e,f);if(C()){break _;}return c;case 6:YS(c,g,h,e,d,f);if(C()){break _;}return c;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function SV(a,b){var c,d;c=0;while(c<a.bD.s){d=Y(a.bD,c);if(d.eF==b.bu&&d.eG==b.bt)return 1;c=c+1|0;}return 0;}
function KN(a,b,c,d){var e,f;e=0;while(e<a.bD.s){f=Y(a.bD,e);if(f.eF==b&&f.eG==d)return 1;e=e+1|0;}return 0;}
function O9(a,b){var c;if(SV(a,b))return 1;if(a.bD.s==2)return 0;if(!a.bD.s)return 1;c=Y(a.bD,0);return b.bq==a.bq&&c.e0==a.bq?1:1;}
function ARM(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:U(a.bD,CO(b.bu,b.bq,b.bt));c=KN(a,a.bu,a.bq,a.bt-1|0);d=KN(a,a.bu,a.bq,a.bt+1|0);e=KN(a,a.bu-1|0,a.bq,a.bt);f=KN(a,a.bu+1|0,a.bq,a.bt);g=(-1);if(!(!c&&!d))g=0;if(!(!e&&!f))g=1;if(d&&f&&!c&&!e)g=6;if(d&&e&&!c&&!f)g=7;if(c&&e&&!d&&!f)g=8;if(c&&f&&!d&&!e)g=9;if(!g){b=a.dj;c=a.bu;d=a.bq+1|0;e=a.bt-1|0;$p=1;continue _;}if(g==1){b=a.dj;c=a.bu+1|0;d
=a.bq+1|0;e=a.bt;$p=2;continue _;}if(g<0)g=0;b=a.dj;c=a.bu;d=a.bq;e=a.bt;$p=5;continue _;case 1:$z=ACx(b,c,d,e);if(C()){break _;}c=$z;if(c==a.e5.b)g=4;b=a.dj;c=a.bu;d=a.bq+1|0;e=a.bt+1|0;$p=3;continue _;case 2:$z=ACx(b,c,d,e);if(C()){break _;}c=$z;if(c==a.e5.b)g=2;b=a.dj;c=a.bu-1|0;d=a.bq+1|0;e=a.bt;$p=4;continue _;case 3:$z=ACx(b,c,d,e);if(C()){break _;}c=$z;if(c==a.e5.b)g=5;if(g==1){b=a.dj;c=a.bu+1|0;d=a.bq+1|0;e=a.bt;$p=2;continue _;}if(g<0)g=0;b=a.dj;c=a.bu;d=a.bq;e=a.bt;$p=5;continue _;case 4:$z=ACx(b,
c,d,e);if(C()){break _;}c=$z;if(c==a.e5.b)g=3;if(g<0)g=0;b=a.dj;c=a.bu;d=a.bq;e=a.bt;$p=5;case 5:AKw(b,c,d,e,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AI2(a,b,c,d){var e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=CO(b,c,d);$p=1;case 1:$z=AQ8(a,e);if(C()){break _;}e=$z;if(e===null)return 0;$p=2;case 2:AFG(e);if(C()){break _;}return O9(e,a);default:E$();}}C3().s(a,b,c,d,e,$p);}
function YR(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.bu;c=a.bq;d=a.bt-1|0;$p=1;case 1:$z=AI2(a,b,c,d);if(C()){break _;}d=$z;b=a.bu;c=a.bq;e=a.bt+1|0;$p=2;case 2:$z=AI2(a,b,c,e);if(C()){break _;}b=$z;c=a.bu-1|0;e=a.bq;f=a.bt;$p=3;case 3:$z=AI2(a,c,e,f);if(C()){break _;}c=$z;e=a.bu+1|0;f=a.bq;g=a.bt;$p=4;case 4:$z=AI2(a,e,f,g);if(C()){break _;}e=$z;f=(-1);if(!(!d&&!b))f=0;if(!(!c&&
!e))f=1;if(b&&e&&!d&&!c)f=6;if(b&&c&&!d&&!e)f=7;if(d&&c&&!b&&!e)f=8;if(d&&e&&!b&&!c)f=9;if(!f){h=a.dj;d=a.bu;b=a.bq+1|0;c=a.bt-1|0;$p=5;continue _;}if(f==1){h=a.dj;d=a.bu+1|0;b=a.bq+1|0;c=a.bt;$p=6;continue _;}if(f<0)f=0;a.fR=f;KZ(a);h=a.dj;d=a.bu;b=a.bq;c=a.bt;$p=9;continue _;case 5:$z=ACx(h,d,b,c);if(C()){break _;}d=$z;if(d==a.e5.b)f=4;h=a.dj;d=a.bu;b=a.bq+1|0;c=a.bt+1|0;$p=7;continue _;case 6:$z=ACx(h,d,b,c);if(C()){break _;}d=$z;if(d==a.e5.b)f=2;h=a.dj;d=a.bu-1|0;b=a.bq+1|0;c=a.bt;$p=8;continue _;case 7:$z
=ACx(h,d,b,c);if(C()){break _;}b=$z;if(b==a.e5.b)f=5;if(f==1){h=a.dj;d=a.bu+1|0;b=a.bq+1|0;c=a.bt;$p=6;continue _;}if(f<0)f=0;a.fR=f;KZ(a);h=a.dj;d=a.bu;b=a.bq;c=a.bt;$p=9;continue _;case 8:$z=ACx(h,d,b,c);if(C()){break _;}d=$z;if(d==a.e5.b)f=3;if(f<0)f=0;a.fR=f;KZ(a);h=a.dj;d=a.bu;b=a.bq;c=a.bt;$p=9;case 9:AKw(h,d,b,c,f);if(C()){break _;}g=0;if(g>=a.bD.s)return;h=Y(a.bD,g);$p=10;case 10:$z=AQ8(a,h);if(C()){break _;}h=$z;if(h!==null){$p=11;continue _;}g=g+1|0;if(g>=a.bD.s)return;h=Y(a.bD,g);continue _;case 11:AFG(h);if
(C()){break _;}if(O9(h,a)){$p=12;continue _;}g=g+1|0;if(g>=a.bD.s)return;h=Y(a.bD,g);$p=10;continue _;case 12:ARM(h,a);if(C()){break _;}g=g+1|0;if(g>=a.bD.s)return;h=Y(a.bD,g);$p=10;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function Vk(){var a=this;D.call(a);a.pd=null;a.F3=0;a.mh=0;}
function AP4(a){a.mh=a.mh+1|0;}
function ANp(a){return a.mh<a.pd.data.length?0:1;}
function Sv(a,b){return BY(a.pd.data[a.mh].ic+(b.c1+1.0|0)*0.5,a.pd.data[a.mh].hY,a.pd.data[a.mh].io+(b.c1+1.0|0)*0.5);}
function ACc(){var a=this;D.call(a);a.x$=null;a.j_=null;a.q7=null;a.mf=null;}
function A2H(a){var b=new ACc();A6q(b,a);return b;}
function A6q(a,b){a.j_=Bb$();a.q7=De();a.mf=J(HU,32);a.x$=b;}
function APs(a,b,c,d){return O_(a,b,c.d,c.L.M,c.e,d);}
function AGa(a,b,c,d,e,f){return O_(a,b,c+0.5,d+0.5,e+0.5,f);}
function O_(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;UE(a.j_);Va(a.q7);g=IY(a,K(b.L.R),K(b.L.M),K(b.L.S));h=IY(a,K(c-b.c1/2.0),K(d),K(e-b.c1/2.0));i=A0z(EX(b.c1+1.0),EX(b.eO+1.0),EX(b.c1+1.0));g.mD=0.0;g.pj=E0(g,h);g.i5=g.pj;UE(a.j_);WR(a.j_,g);j=g;a:{while(true){if(ACb(a.j_)){if(j!==g){k=UQ(a,g,j);break a;}k=null;break a;}l=ARB(a.j_);if(l.m0==h.m0)break;if(E0(l,h)<E0(j,h))j=l;l.nz=1;m=AJN(a,b,l,i,h,f);n=0;while(n<m){k=a.mf.data[n];o=l.mD+E0(l,k);if(!(Py(k)&&o>=k.mD)){k.o4=l;k.mD=o;k.pj=E0(k,h);if(Py(k))ABp(a.j_,
k,k.mD+k.pj);else{k.i5=k.mD+k.pj;WR(a.j_,k);}}n=n+1|0;}}k=UQ(a,g,h);}return k;}
function AJN(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;g=0;if(J5(a,b,c.ic,c.hY+1|0,c.io,d)>0)g=1;h=KA(a,b,c.ic,c.hY,c.io+1|0,d,g);i=KA(a,b,c.ic-1|0,c.hY,c.io,d,g);j=KA(a,b,c.ic+1|0,c.hY,c.io,d,g);k=KA(a,b,c.ic,c.hY,c.io-1|0,d,g);if(h===null)l=0;else if(h.nz)l=0;else if(E0(h,e)>=f)l=0;else{m=a.mf.data;l=1;m[0]=h;}if(i===null)n=l;else if(i.nz)n=l;else if(E0(i,e)>=f)n=l;else{m=a.mf.data;n=l+1|0;m[l]=i;}if(j===null)o=n;else if(j.nz)o=n;else if(E0(j,e)>=f)o=n;else{m=a.mf.data;o=n+1|0;m[n]=j;}if(k===null)n=o;else if(k.nz)n
=o;else if(E0(k,e)>=f)n=o;else{m=a.mf.data;n=o+1|0;m[o]=k;}return n;}
function KA(a,b,c,d,e,f,g){var h,i,j,k;h=null;if(J5(a,b,c,d,e,f)>0)h=IY(a,c,d,e);if(h===null){g=d+g|0;if(J5(a,b,c,g,e,f)>0)h=IY(a,c,g,e);}if(h!==null){i=0;a:{while(true){if(d<=0)break a;j=J5(a,b,c,d-1|0,e,f);if(j<=0)break a;if(j<0)return null;i=i+1|0;if(i>=4)break;d=d+(-1)|0;}return null;}if(d>0)h=IY(a,c,d,e);k=N7(a.x$,c,d-1|0,e);if(!(k!==BfQ&&k!==BfR))return null;}return h;}
function IY(a,b,c,d){var e,f;e=b|c<<10|d<<20;f=CP(a.q7,CY(e));if(f===null){f=A0z(b,c,d);BQ(a.q7,CY(e),f);}return f;}
function J5(a,b,c,d,e,f){var g,h,i,j;g=c;a:{while(g<(c+f.ic|0)){h=d;while(h<(d+f.hY|0)){i=e;while(i<(e+f.io|0)){j=N7(a.x$,c,d,e);if(j.ui())return 0;if(j===BfQ)break a;if(j===BfR)break a;i=i+1|0;}h=h+1|0;}g=g+1|0;}return 1;}return (-1);}
function UQ(a,b,c){var d,e,f,g;d=1;e=c;while(e.o4!==null){d=d+1|0;e=e.o4;}f=J(HU,d);g=f.data;d=d+(-1)|0;g[d]=c;while(c.o4!==null){c=c.o4;d=d+(-1)|0;g[d]=c;}b=new Vk;b.pd=f;b.F3=g.length;return b;}
function U5(){var a=this;C1.call(a);a.mA=null;a.hS=null;a.p_=0;a.re=0;a.AV=0.0;}
function AMj(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.p_+c)/a.re;d=i*i;j=a.mA.d;k=a.mA.j;l=a.mA.e;m=a.hS.cs;n=a.hS.d-a.hS.cs;o=c;n=m+n*o;m=a.hS.b7+(a.hS.j-a.hS.b7)*o+a.AV;o=a.hS.ct+(a.hS.e-a.hS.ct)*o;n=n-j;p=d;q=j+n
*p;r=k+(m-k)*p;p=l+(o-l)*p;s=K(q);t=K(r+a.c4/2.0);u=K(p);b=a.l;$p=1;case 1:$z=ANj(b,s,t,u);if(C()){break _;}v=$z;o=q-BkN;n=r-BkO;m=p-BkP;BT(v,v,v,1.0);b=Bgo;w=a.mA;o=o;n=n;m=m;d=a.mA.u;$p=2;case 2:AQE(b,w,o,n,m,d,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p);}
function AAL(a){a.p_=a.p_+1|0;if(a.p_==a.re)Cb(a);}
function AUw(a){return 2;}
function Y7(){var a=this;D.call(a);a.d2=null;a.eX=0;}
function Bb$(){var a=new Y7();A0b(a);return a;}
function A0b(a){a.d2=J(HU,1024);a.eX=0;}
function WR(a,b){var c,d;if(b.gA>=0){b=new D2;Bl(b,B(900));M(b);}if(a.eX==a.d2.data.length){c=J(HU,a.eX<<1);Di(a.d2,0,c,0,a.eX);a.d2=c;}a.d2.data[a.eX]=b;b.gA=a.eX;d=a.eX;a.eX=d+1|0;U3(a,d);return b;}
function UE(a){a.eX=0;}
function ARB(a){var b,c,d,e;b=a.d2.data[0];c=a.d2.data;d=a.d2.data;e=a.eX-1|0;a.eX=e;c[0]=d[e];a.d2.data[a.eX]=null;if(a.eX>0)OQ(a,0);b.gA=(-1);return b;}
function ABp(a,b,c){var d;d=b.i5;b.i5=c;if(c>=d)OQ(a,b.gA);else U3(a,b.gA);}
function U3(a,b){var c,d,e,f;c=a.d2.data[b];d=c.i5;a:{while(true){if(b<=0)break a;e=(b-1|0)>>1;f=a.d2.data[e];if(d>=f.i5)break;a.d2.data[b]=f;f.gA=b;b=e;}}a.d2.data[b]=c;c.gA=b;}
function OQ(a,b){var c,d,e,f,g,h,i,j;c=a.d2.data[b];d=c.i5;a:{while(true){e=1+(b<<1)|0;f=e+1|0;if(e>=a.eX)break;g=a.d2.data[e];h=g.i5;if(f>=a.eX){i=null;j=Infinity;}else{i=a.d2.data[f];j=i.i5;}if(h<j){if(h>=d)break a;a.d2.data[b]=g;g.gA=b;}else{if(j>=d)break a;a.d2.data[b]=i;i.gA=b;e=f;}b=e;}}a.d2.data[b]=c;c.gA=b;}
function ACb(a){return a.eX?0:1;}
function HU(){var a=this;D.call(a);a.ic=0;a.hY=0;a.io=0;a.m0=0;a.gA=0;a.mD=0.0;a.pj=0.0;a.i5=0.0;a.o4=null;a.nz=0;}
function A0z(a,b,c){var d=new HU();A8J(d,a,b,c);return d;}
function A8J(a,b,c,d){a.gA=(-1);a.nz=0;a.ic=b;a.hY=c;a.io=d;a.m0=b|c<<10|d<<20;}
function E0(a,b){var c,d,e;c=b.ic-a.ic|0;d=b.hY-a.hY|0;e=b.io-a.io|0;return D_(c*c+d*d+e*e);}
function A3R(a,b){return b.m0!=a.m0?0:1;}
function AVm(a){return a.m0;}
function Py(a){return a.gA<0?0:1;}
function AJj(){D.call(this);}
$rt_packages([-1,"com",0,"jcraft",1,"jzlib",-1,"java",3,"util",4,"regex",3,"nio",6,"charset",3,"io",3,"lang",-1,"net",10,"minecraft",11,"src"]);
$rt_metadata([D,"Object",9,0,[],0,3,0,["fl",function(){return A4Y(this);},"eo",function(b){return Q5(this,b);},"gk",function(){return AUn(this);}],JA,0,D,[],0,3,0,0,MT,0,D,[],3,3,0,0,FS,0,D,[MT],0,3,0,0,AJ6,0,D,[],4,0,0,0,T7,0,D,[],4,3,0,0,Dc,0,D,[],3,3,0,0,DM,0,D,[],3,3,0,0,KY,0,D,[],3,3,0,0,B4,"String",9,D,[Dc,DM,KY],0,3,0,["gk",function(){return AUj(this);},"eo",function(b){return DC(this,b);},"fl",function(){return A8l(this);},"lS",function(b){return AV2(this,b);}],D8,0,D,[],0,3,0,["lT",function(){return A0k(this);
}],Fg,0,D8,[],0,3,0,0,I5,0,Fg,[],0,3,0,0,AMe,0,I5,[],0,3,0,0,HO,0,D,[Dc,KY],0,0,0,["nB",function(b){M0(this,b);},"gk",function(){return T(this);}],Iv,0,D,[],3,3,0,0,S,0,HO,[Iv],0,3,0,["xV",function(b,c,d,e){return A6X(this,b,c,d,e);},"xn",function(b,c,d){return AVp(this,b,c,d);},"gk",function(){return BL(this);},"nB",function(b){AXM(this,b);},"yl",function(b,c){return A7m(this,b,c);}],Fa,0,D,[Dc],1,3,0,0,Gk,0,Fa,[DM],0,3,0,["fl",function(){return A28(this);},"eo",function(b){return A_o(this,b);},"lS",function(b)
{return A61(this,b);}],IS,0,I5,[],0,3,0,0,AOU,0,IS,[],0,3,0,0,ALF,0,IS,[],0,3,0,0,BD,0,D8,[],0,3,0,0,B6,"RuntimeException",9,BD,[],0,3,0,0,Da,0,D,[],3,3,0,0,Hi,0,D,[Da],3,3,0,0,Us,0,D,[Hi],3,3,0,0,Qs,0,D,[Hi],3,3,0,0,Ve,0,D,[Hi],3,3,0,0,Rk,0,D,[Hi],3,3,0,0,Wk,0,D,[Hi,Us,Qs,Ve,Rk],3,3,0,0,Pz,0,D,[],3,3,0,0,Lk,0,D,[Da],3,3,0,0,YL,0,D,[Da,Wk,Pz,Lk],1,3,0,["Yh",function(b,c){return AX7(this,b,c);},"a0k",function(b,c){return AYj(this,b,c);},"Sl",function(b){return ATH(this,b);},"Om",function(b,c,d){return AZa(this,
b,c,d);},"Mx",function(b){return A1E(this,b);},"Vd",function(){return AUF(this);},"TB",function(b,c,d){return AS0(this,b,c,d);}],Bs,0,D,[],0,3,Bd,0,SX,0,D,[],3,3,0,0,JD,0,D,[SX],3,3,0,0,NZ,0,D,[],3,3,0,0,HD,0,D,[Iv,JD,NZ],1,3,0,0,ABi,0,HD,[],0,3,0,0,Lt,0,HD,[],0,3,0,0,AFc,0,D,[],4,3,0,0,AFR,0,D,[Da],1,3,0,0,LZ,0,D,[],3,3,0,0,Ip,0,D,[LZ],0,3,0,0,ZG,0,D,[],0,3,0,0,Mk,0,D,[],0,3,Bbi,0,Gp,0,D,[LZ],0,3,0,["kt",function(){ARn(this);}],DO,0,D,[Da],3,3,0,0,W8,0,D,[DO],0,0,0,["gR",function(b){return A$W(this,b);}]]);
$rt_metadata([Xc,0,D,[DO],0,0,0,["gR",function(b){return AXH(this,b);}],Xd,0,D,[DO],0,0,0,["gR",function(b){return A3B(this,b);}],Xa,0,D,[DO],0,0,0,["gR",function(b){return ASM(this,b);}],Xb,0,D,[DO],0,0,0,["gR",function(b){return A3M(this,b);}],W$,0,D,[DO],0,0,0,["gR",function(b){return A2j(this,b);}],W_,0,D,[DO],0,0,0,["gR",function(b){return A6x(this,b);}],W9,0,D,[DO],0,0,0,["gR",function(b){return AUh(this,b);}],QA,0,D,[DO],0,0,0,["gR",function(b){return A69(this,b);}],Qz,0,D,[DO],0,0,0,["gR",function(b)
{return AYK(this,b);}],NV,0,D,[],0,3,0,0,AAW,0,D,[Da],1,3,0,0,UX,0,D,[],0,3,0,0,BW,"IOException",8,BD,[],0,3,0,0,Lg,0,HO,[Iv],0,3,0,["xV",function(b,c,d,e){return AVZ(this,b,c,d,e);},"xn",function(b,c,d){return A4d(this,b,c,d);},"nB",function(b){A4u(this,b);},"yl",function(b,c){return A99(this,b,c);}],FB,0,D,[],3,3,0,0,V3,0,D,[FB],0,3,0,0,Fi,0,D,[DM],0,3,0,["eo",function(b){return A$0(this,b);},"fl",function(){return A$I(this);},"lS",function(b){return A3a(this,b);}],I1,0,D,[],0,3,0,0,UT,0,I1,[],0,3,0,0,SF,
0,D,[],0,3,0,0,VJ,0,D,[],3,3,0,0,R5,0,D,[VJ],0,3,0,0,AFP,0,D,[],0,3,0,0,Eh,0,D,[],1,3,0,0,Mz,0,Eh,[],0,3,0,["hL",function(b,c,d,e,f,g){A$k(this,b,c,d,e,f,g);},"ok",function(b,c,d,e,f,g){AIT(this,b,c,d,e,f,g);}],Eu,0,D,[],0,3,0,0,AAU,0,Eu,[],0,3,0,["pa",function(){AYD(this);}],AKC,0,Eu,[],0,3,0,["pa",function(){AYT(this);}],L4,0,D,[],4,3,0,0,VZ,0,Gp,[],0,0,0,["kt",function(){AJ0(this);}],Sp,0,D,[],3,3,0,0,Im,0,D,[Sp],3,3,0,0,Go,0,D,[Im],1,3,0,["rB",function(b){return Q8(this,b);}],J4,0,D,[Im],3,3,0,0,Gg,0,Go,
[J4],1,3,0,["kZ",function(){return Jl(this);}],Mt,0,Gg,[],1,3,0,0,OF,0,D,[Im],3,3,0,0,Xk,0,D,[OF],3,3,0,0,AEF,0,Mt,[Xk],0,3,0,0,AOb,0,D,[Da],1,3,0,0,F$,0,D,[Da],1,3,0,0,ABH,0,F$,[],1,3,0,0,AKG,0,F$,[],1,3,0,0,Je,0,D,[Im],3,3,0,0,Fb,0,Go,[Je],1,3,0,["eo",function(b){return A5X(this,b);},"fl",function(){return AS3(this);}],ES,0,D,[],3,3,0,0,AQk,0,Fb,[ES,Dc],0,3,0,["sU",function(b){return Xi(this,b);},"rB",function(b){return WB(this,b);},"kZ",function(){return Oy(this);},"lY",function(){return IP(this);}],LT,0,
D,[],3,3,0,0,FY,0,D,[LT],1,3,0,0,ACd,0,FY,[ES,Dc],0,3,0,0]);
$rt_metadata([AKd,0,F$,[],1,3,0,0,YW,0,D,[],0,3,0,0,AE2,0,D,[],0,3,0,0,EW,"Enum",9,D,[DM,Dc],1,3,0,["eo",function(b){return ATu(this,b);},"fl",function(){return AX4(this);},"lS",function(b){return AXB(this,b);}],E8,0,EW,[],12,3,0,0,Qt,0,D,[],3,3,0,0,U_,0,D,[Qt],0,0,0,["Gr",function(b){CM(this,b);},"IZ",function(b){A18(this,b);}],AQG,0,D,[Da],1,3,0,0,Xq,0,D,[Da],3,3,0,0,W7,0,D,[Xq],0,0,0,["a01",function(){return A10(this);}],H3,0,D,[JD],1,3,0,0,AQf,0,H3,[],0,3,0,["Cv",function(){return A4G(this);},"od",function(b,
c,d){return A_k(this,b,c,d);},"wZ",function(){return A5s(this);}],IV,0,H3,[],0,3,0,0,Pn,0,D,[],3,3,0,0,P2,0,IV,[Pn],0,3,0,0,MV,0,D,[DM],1,3,0,["lS",function(b){return A6w(this,b);}],WQ,0,IV,[],0,3,0,["Cv",function(){return AS1(this);},"od",function(b,c,d){return ALZ(this,b,c,d);},"wZ",function(){return A0m(this);}],M_,0,D,[],1,3,0,0,ADt,0,M_,[],0,3,0,0,AJc,0,D,[],0,3,0,0,Jb,0,D,[],0,3,0,["Aq",function(b,c,d){return A5c(this,b,c,d);}],U0,0,Jb,[],0,0,0,["Aq",function(b,c,d){return A1Y(this,b,c,d);}],C5,"Entity",
12,D,[],1,3,0,["C7",function(){Cb(this);},"Jf",function(){AEV(this);},"DS",function(){X2(this);},"Bw",function(){return A1M(this);},"FX",function(b){AJ5(this,b);},"DG",function(b){Zk(this,b);},"HL",function(){return AE7(this);},"vj",function(b){return ADI(this,b);},"xJ",function(b){A6T(this,b);},"u0",function(b){A5D(this,b);},"fs",function(b,c){return AJI(this,b,c);},"lw",function(){return A9L(this);},"rT",function(){return A7W(this);},"BD",function(b,c){A_j(this,b,c);},"uK",function(b){return AWK(this,b);},
"AZ",function(b){return AW1(this,b);},"BM",function(){AFd(this);},"Af",function(){return A9P(this);}],EP,"EntityLiving",12,C5,[],0,3,0,["lw",function(){return AXu(this);},"rT",function(){return A1Q(this);},"rL",function(){return AQq(this);},"Jf",function(){ANr(this);},"BM",function(){AKT(this);},"ep",function(){AMu(this);},"fs",function(b,c){return AB4(this,b,c);},"wC",function(){return A8s(this);},"vc",function(){return AUA(this);},"uN",function(){return AVv(this);},"FA",function(b){AN6(this,b);},"mk",function()
{return ATE(this);},"DG",function(b){AP8(this,b);},"ot",function(){ACq(this);},"wM",function(){AQP(this);},"uT",function(b,c,d){return Zu(this,b,c,d);},"DS",function(){ABK(this);}],IX,"EntityCreature",12,EP,[],0,3,0,["wM",function(){APO(this);},"nR",function(b,c){AMD(this,b,c);},"x4",function(){return AK0(this);}],DP,"EntityMonster",12,IX,[],0,3,0,["ot",function(){AC$(this);},"ep",function(){AK9(this);},"x4",function(){return AKp(this);},"fs",function(b,c){return AAK(this,b,c);},"nR",function(b,c){AQX(this,
b,c);},"sF",function(b,c,d){return ABz(this,b,c,d);},"uT",function(b,c,d){return YA(this,b,c,d);}],I9,"EntityZombie",12,DP,[],0,3,0,["ot",function(){AH2(this);},"mk",function(){return AWM(this);}],Jo,"EntitySkeleton",12,DP,[],0,3,0,["ot",function(){AID(this);},"nR",function(b,c){AHV(this,b,c);},"mk",function(){return AYP(this);}],JY,"EntityCreeper",12,DP,[],0,3,0,["wM",function(){ZQ(this);},"nR",function(b,c){AAM(this,b,c);},"mk",function(){return ASV(this);}],Km,"EntitySpider",12,DP,[],0,3,0,["x4",function()
{return ARr(this);},"nR",function(b,c){Zn(this,b,c);},"mk",function(){return AZO(this);}],GC,"EntityAnimal",12,IX,[],1,3,0,["sF",function(b,c,d){return AOB(this,b,c,d);},"uT",function(b,c,d){return AK6(this,b,c,d);}],KG,"EntitySheep",12,GC,[],0,3,0,["fs",function(b,c){return AGW(this,b,c);},"wC",function(){return A63(this);},"vc",function(){return A4h(this);},"uN",function(){return AYn(this);}],ID,"EntityPig",12,GC,[],0,3,0,["wC",function(){return ATA(this);},"vc",function(){return A9u(this);},"uN",function()
{return AV7(this);},"uK",function(b){return AXU(this,b);},"mk",function(){return AWf(this);}],DB,0,D,[Dc],0,3,0,0,NE,0,D,[],0,3,0,0,Pc,0,D,[],0,3,0,0,P,"Block",12,D,[],0,3,L,["gg",function(){return A82(this);},"em",function(){return AWF(this);},"Cz",function(b,c,d,e){return AFa(this,b,c,d,e);},"pI",function(b,c,d,e,f){return AGv(this,b,c,d,e,f);},"ul",function(b,c,d,e,f){return AB1(this,b,c,d,e,f);},"eY",function(b,c){return A7g(this,b,c);},"ci",function(b){return AVF(this,b);},"oU",function(b,c,d,e){return K6(this,
b,c,d,e);},"FD",function(b,c,d,e,f,g){ALy(this,b,c,d,e,f,g);},"hx",function(b,c,d,e){return No(this,b,c,d,e);},"d5",function(){return A5k(this);},"o8",function(b,c){return A6t(this,b,c);},"ph",function(){return A3O(this);},"e8",function(b,c,d,e,f){AHR(this,b,c,d,e,f);},"kS",function(b,c,d,e,f){APe(this,b,c,d,e,f);},"ns",function(b,c,d,e,f){Z9(this,b,c,d,e,f);},"e1",function(b,c,d,e,f){YQ(this,b,c,d,e,f);},"mw",function(){return A3Y(this);},"fE",function(b,c,d,e){AA9(this,b,c,d,e);},"lB",function(b,c,d,e){Z4(this,
b,c,d,e);},"eH",function(b){return AYq(this,b);},"dX",function(b,c){return ATR(this,b,c);},"IQ",function(b,c,d,e,f){Yi(this,b,c,d,e,f);},"HT",function(b,c,d,e,f,g){AEZ(this,b,c,d,e,f,g);},"yr",function(b){return AZ3(this,b);},"nJ",function(b,c,d,e,f,g){return Kb(this,b,c,d,e,f,g);},"sO",function(b,c,d,e){AQ1(this,b,c,d,e);},"pS",function(){return AVl(this);},"fT",function(b,c,d,e){return AEG(this,b,c,d,e);},"lG",function(b,c,d,e,f){return AGK(this,b,c,d,e,f);},"oJ",function(b,c,d,e,f){AJL(this,b,c,d,e,f);},
"vd",function(b,c,d,e,f){YI(this,b,c,d,e,f);},"q_",function(b,c,d,e,f){AAe(this,b,c,d,e,f);},"qG",function(b,c,d,e,f,g){AF7(this,b,c,d,e,f,g);},"xO",function(b,c,d,e){APY(this,b,c,d,e);}],RD,0,D,[],3,3,0,0,AJg,0,Gg,[ES,Dc,RD],0,3,0,["lY",function(){return CX(this);},"sU",function(b){return U(this,b);}],DH,0,D,[Da],3,3,0,0,TK,0,D,[DH],0,0,0,["gx",function(){return AWo(this);}],TJ,0,D,[DH],0,0,0,["gx",function(){return AS6(this);}],TI,0,D,[DH],0,0,0,["gx",function(){return AZn(this);}],TH,0,D,[DO],0,0,0,["gR",
function(b){return A6J(this,b);}],SD,0,D,[],0,0,0,0,Cc,"IllegalArgumentException",9,B6,[],0,3,0,0,Vg,"UnsupportedCharsetException",7,Cc,[],0,3,0,0,EE,"NullPointerException",9,B6,[],0,3,0,0,AA$,0,D,[Da],4,3,0,0,Fk,0,D,[],1,3,0,0]);
$rt_metadata([L8,0,Fk,[DM],1,3,0,0,AE5,0,D,[],0,3,0,0,QJ,0,D,[],0,3,0,0,E3,0,D,[JD,NZ],1,3,0,["gw",function(b,c,d){ATh(this,b,c,d);},"tQ",function(){A8W(this);},"ly",function(){A9K(this);}],Ge,0,E3,[],0,3,0,0,AA6,0,Ge,[],0,3,0,0,Xe,0,E3,[],0,0,0,["nO",function(b){AYi(this,b);}],AFb,"IllegalCharsetNameException",7,Cc,[],0,3,0,0,MU,0,D,[],128,3,0,0,Um,0,MU,[],4,3,0,0,Ir,0,D,[],0,3,0,0,AHp,0,Ir,[],4,0,0,0,ACs,0,Ir,[],4,0,0,0,LP,"BlockStone",12,P,[],0,3,0,["dX",function(b,c){return A8I(this,b,c);}],Z6,"BlockGrass",
12,P,[],0,3,0,["ci",function(b){return A7r(this,b);},"e8",function(b,c,d,e,f){ADq(this,b,c,d,e,f);},"dX",function(b,c){return AZ$(this,b,c);}],AHU,"BlockDirt",12,P,[],0,3,0,0,B8,0,D,[],0,3,0,["nF",function(){return A8m(this);},"dw",function(){return A0Z(this);},"sm",function(){return A7R(this);},"ui",function(){return A5t(this);}],F4,"BlockFlower",12,P,[],0,3,0,["fT",function(b,c,d,e){return ALW(this,b,c,d,e);},"rq",function(b){return AYm(this,b);},"e1",function(b,c,d,e,f){AIG(this,b,c,d,e,f);},"e8",function(b,
c,d,e,f){AD_(this,b,c,d,e,f);},"Hc",function(b,c,d,e){return AN9(this,b,c,d,e);},"hx",function(b,c,d,e){return AGl(this,b,c,d,e);},"d5",function(){return A6m(this);},"gg",function(){return AT1(this);},"em",function(){return A7w(this);}],AMZ,"BlockSapling",12,F4,[],0,3,0,["e8",function(b,c,d,e,f){AEi(this,b,c,d,e,f);}],HT,0,P,[],1,3,0,["ci",function(b){return ATb(this,b);},"gg",function(){return A$_(this);},"d5",function(){return A$t(this);},"o8",function(b,c){return A8F(this,b,c);},"pI",function(b,c,d,e,f){
return ARx(this,b,c,d,e,f);},"hx",function(b,c,d,e){return Yg(this,b,c,d,e);},"em",function(){return A7Z(this);},"dX",function(b,c){return A3f(this,b,c);},"eH",function(b){return A6a(this,b);},"qG",function(b,c,d,e,f,g){ANe(this,b,c,d,e,f,g);},"mw",function(){return AU5(this);},"Cz",function(b,c,d,e){return AEw(this,b,c,d,e);},"e8",function(b,c,d,e,f){AQ_(this,b,c,d,e,f);},"pS",function(){return A$q(this);},"kS",function(b,c,d,e,f){YG(this,b,c,d,e,f);},"fE",function(b,c,d,e){ARR(this,b,c,d,e);},"e1",function(b,
c,d,e,f){ALg(this,b,c,d,e,f);}],AEh,"BlockFlowing",12,HT,[],0,3,0,["e8",function(b,c,d,e,f){AOR(this,b,c,d,e,f);},"fE",function(b,c,d,e){AB5(this,b,c,d,e);}],AIL,"BlockStationary",12,HT,[],0,3,0,["e1",function(b,c,d,e,f){AGz(this,b,c,d,e,f);}],I$,"BlockSand",12,P,[],0,3,0,["fE",function(b,c,d,e){ARP(this,b,c,d,e);},"e1",function(b,c,d,e,f){ASe(this,b,c,d,e,f);},"e8",function(b,c,d,e,f){APB(this,b,c,d,e,f);},"mw",function(){return A3X(this);}],AG6,"BlockGravel",12,I$,[],0,3,0,["dX",function(b,c){return A_m(this,
b,c);}],YY,"BlockOre",12,P,[],0,3,0,["dX",function(b,c){return A4o(this,b,c);},"eH",function(b){return AZ9(this,b);}],AFh,"BlockLog",12,P,[],0,3,0,["eH",function(b){return A8X(this,b);},"dX",function(b,c){return ATf(this,b,c);},"ci",function(b){return AVz(this,b);}],LW,0,P,[],0,3,0,["pI",function(b,c,d,e,f){return AQw(this,b,c,d,e,f);}],ACG,"BlockLeaves",12,LW,[],0,3,0,["e8",function(b,c,d,e,f){AIz(this,b,c,d,e,f);},"eH",function(b){return AW6(this,b);},"dX",function(b,c){return A5d(this,b,c);},"d5",function()
{return A2R(this);},"oJ",function(b,c,d,e,f){ASs(this,b,c,d,e,f);}],ALf,"BlockSponge",12,P,[],0,3,0,["fE",function(b,c,d,e){AKK(this,b,c,d,e);},"lB",function(b,c,d,e){ANw(this,b,c,d,e);}],Nd,0,P,[],0,3,0,["d5",function(){return A$c(this);},"pI",function(b,c,d,e,f){return Yy(this,b,c,d,e,f);}],AQn,"BlockGlass",12,Nd,[],0,3,0,["eH",function(b){return AV8(this,b);}],AHe,"BlockMushroom",12,F4,[],0,3,0,["rq",function(b){return AI7(this,b);},"Hc",function(b,c,d,e){return ADk(this,b,c,d,e);}],ABw,"BlockOreBlock",12,
P,[],0,3,0,["ci",function(b){return A4B(this,b);}],Zh,"BlockStep",12,P,[],0,3,0,["ci",function(b){return A$L(this,b);},"d5",function(){return A5S(this);},"e1",function(b,c,d,e,f){ABF(this,b,c,d,e,f);},"fE",function(b,c,d,e){ABk(this,b,c,d,e);},"dX",function(b,c){return AZo(this,b,c);},"gg",function(){return AW8(this);},"pI",function(b,c,d,e,f){return ASE(this,b,c,d,e,f);}],AOi,"BlockTNT",12,P,[],0,3,0,["ci",function(b){return A43(this,b);},"eH",function(b){return AVb(this,b);},"sO",function(b,c,d,e){AGF(this,
b,c,d,e);},"ns",function(b,c,d,e,f){ASm(this,b,c,d,e,f);}],ADa,"BlockBookshelf",12,P,[],0,3,0,["ci",function(b){return A_a(this,b);},"eH",function(b){return A4D(this,b);}],XO,"BlockObsidian",12,LP,[],0,3,0,["eH",function(b){return A2$(this,b);},"dX",function(b,c){return AUX(this,b,c);}],AOE,"BlockTorch",12,P,[],0,3,0,["hx",function(b,c,d,e){return ANm(this,b,c,d,e);},"d5",function(){return A2c(this);},"gg",function(){return AWb(this);},"em",function(){return A0X(this);},"fT",function(b,c,d,e){return AL9(this,
b,c,d,e);},"vd",function(b,c,d,e,f){ANQ(this,b,c,d,e,f);},"e8",function(b,c,d,e,f){ASc(this,b,c,d,e,f);},"fE",function(b,c,d,e){ABv(this,b,c,d,e);},"e1",function(b,c,d,e,f){AKb(this,b,c,d,e,f);},"nJ",function(b,c,d,e,f,g){return AKi(this,b,c,d,e,f,g);},"kS",function(b,c,d,e,f){AQp(this,b,c,d,e,f);}],AO3,"BlockFire",12,P,[],0,3,0,["hx",function(b,c,d,e){return ARD(this,b,c,d,e);},"d5",function(){return A5Z(this);},"gg",function(){return A8w(this);},"em",function(){return AXx(this);},"eH",function(b){return AWG(this,
b);},"mw",function(){return AZ5(this);},"e8",function(b,c,d,e,f){XN(this,b,c,d,e,f);},"ph",function(){return A3m(this);},"fT",function(b,c,d,e){return ANt(this,b,c,d,e);},"e1",function(b,c,d,e,f){ABB(this,b,c,d,e,f);},"fE",function(b,c,d,e){ACt(this,b,c,d,e);},"kS",function(b,c,d,e,f){ASt(this,b,c,d,e,f);}],Eg,0,P,[],1,3,0,["fE",function(b,c,d,e){AOH(this,b,c,d,e);},"lB",function(b,c,d,e){AL0(this,b,c,d,e);}],AAc,"BlockMobSpawner",12,Eg,[],0,3,0,["tc",function(){return AXj(this);},"d5",function(){return A54(this);
}],Zz,"BlockStairs",12,P,[],0,3,0,["d5",function(){return A5H(this);},"gg",function(){return AV6(this);},"em",function(){return AYY(this);},"pI",function(b,c,d,e,f){return APC(this,b,c,d,e,f);},"FD",function(b,c,d,e,f,g){AJB(this,b,c,d,e,f,g);},"e1",function(b,c,d,e,f){AHD(this,b,c,d,e,f);},"kS",function(b,c,d,e,f){APf(this,b,c,d,e,f);},"q_",function(b,c,d,e,f){ABe(this,b,c,d,e,f);},"ns",function(b,c,d,e,f){ADp(this,b,c,d,e,f);},"Cz",function(b,c,d,e){return AMY(this,b,c,d,e);},"yr",function(b){return A8Y(this,
b);},"pS",function(){return A8a(this);},"dX",function(b,c){return A4f(this,b,c);},"eH",function(b){return A0w(this,b);},"eY",function(b,c){return AXy(this,b,c);},"ci",function(b){return A76(this,b);},"ul",function(b,c,d,e,f){return AM9(this,b,c,d,e,f);},"mw",function(){return AVJ(this);},"oU",function(b,c,d,e){return AMi(this,b,c,d,e);},"qG",function(b,c,d,e,f,g){ACK(this,b,c,d,e,f,g);},"ph",function(){return AYE(this);},"o8",function(b,c){return AYR(this,b,c);},"fT",function(b,c,d,e){return AMq(this,b,c,d,
e);},"fE",function(b,c,d,e){ACF(this,b,c,d,e);},"lB",function(b,c,d,e){YC(this,b,c,d,e);},"HT",function(b,c,d,e,f,g){AHQ(this,b,c,d,e,f,g);},"IQ",function(b,c,d,e,f){AM1(this,b,c,d,e,f);},"oJ",function(b,c,d,e,f){AQT(this,b,c,d,e,f);},"e8",function(b,c,d,e,f){AQY(this,b,c,d,e,f);},"lG",function(b,c,d,e,f){return AGL(this,b,c,d,e,f);},"sO",function(b,c,d,e){Za(this,b,c,d,e);}],AFS,"BlockChest",12,Eg,[],0,3,0,["ul",function(b,c,d,e,f){return AEz(this,b,c,d,e,f);},"ci",function(b){return A89(this,b);},"fT",function(b,
c,d,e){return AJ3(this,b,c,d,e);},"lB",function(b,c,d,e){ASG(this,b,c,d,e);},"lG",function(b,c,d,e,f){return AFY(this,b,c,d,e,f);},"tc",function(){return AZF(this);}],AKJ,"BlockGears",12,P,[],0,3,0,["hx",function(b,c,d,e){return AEW(this,b,c,d,e);},"d5",function(){return ATY(this);},"gg",function(){return A5f(this);},"em",function(){return A7u(this);},"eH",function(b){return A9R(this,b);},"ph",function(){return AUD(this);}],AHw,"BlockWorkbench",12,P,[],0,3,0,["ci",function(b){return AWw(this,b);},"lG",function(b,
c,d,e,f){return AGS(this,b,c,d,e,f);}],AKI,"BlockCrops",12,F4,[],0,3,0,["rq",function(b){return AYI(this,b);},"e8",function(b,c,d,e,f){AJo(this,b,c,d,e,f);},"eY",function(b,c){return A8u(this,b,c);},"em",function(){return A4F(this);},"ns",function(b,c,d,e,f){ANB(this,b,c,d,e,f);},"dX",function(b,c){return A00(this,b,c);},"eH",function(b){return A4W(this,b);}],AQQ,"BlockFarmland",12,P,[],0,3,0,["hx",function(b,c,d,e){return AA5(this,b,c,d,e);},"d5",function(){return AU4(this);},"gg",function(){return A1C(this);
},"eY",function(b,c){return A_l(this,b,c);},"e8",function(b,c,d,e,f){ANf(this,b,c,d,e,f);},"oJ",function(b,c,d,e,f){AKP(this,b,c,d,e,f);},"e1",function(b,c,d,e,f){X_(this,b,c,d,e,f);},"dX",function(b,c){return AW3(this,b,c);}],AF3,"BlockFurnace",12,Eg,[],0,3,0,["fE",function(b,c,d,e){ACv(this,b,c,d,e);},"ul",function(b,c,d,e,f){return AKf(this,b,c,d,e,f);},"kS",function(b,c,d,e,f){AEn(this,b,c,d,e,f);},"ci",function(b){return AUZ(this,b);},"lG",function(b,c,d,e,f){return AGV(this,b,c,d,e,f);},"tc",function()
{return A77(this);}],Vv,"BlockSign",12,Eg,[],0,3,0,["em",function(){return AYN(this);},"gg",function(){return A5_(this);},"d5",function(){return A55(this);},"tc",function(){return A1N(this);},"fT",function(b,c,d,e){return AGO(this,b,c,d,e);},"dX",function(b,c){return A8D(this,b,c);},"e1",function(b,c,d,e,f){ZU(this,b,c,d,e,f);}],D$,"TileEntity",12,D,[],0,3,0,["tN",function(){AFL(this);},"kl",function(){ACg(this);}]]);
$rt_metadata([Jj,0,D$,[],0,3,0,0,Bb,0,D,[],0,3,BB,["iP",function(b,c,d,e,f,g,h){return AGt(this,b,c,d,e,f,g,h);},"x7",function(b,c){return A$M(this,b,c);},"n_",function(b,c,d){return ASk(this,b,c,d);},"si",function(b,c){AWa(this,b,c);},"x1",function(b,c,d,e,f){A49(this,b,c,d,e,f);},"n2",function(b){return A_s(this,b);},"o9",function(b){return AV3(this,b);},"yJ",function(b,c){A3J(this,b,c);}],AIy,"BlockDoor",12,P,[],0,3,0,["eY",function(b,c){return A$s(this,b,c);},"d5",function(){return A0T(this);},"gg",function()
{return AXs(this);},"em",function(){return ATO(this);},"oU",function(b,c,d,e){return AGr(this,b,c,d,e);},"hx",function(b,c,d,e){return ZB(this,b,c,d,e);},"xO",function(b,c,d,e){AHF(this,b,c,d,e);},"q_",function(b,c,d,e,f){AJX(this,b,c,d,e,f);},"lG",function(b,c,d,e,f){return ADU(this,b,c,d,e,f);},"e1",function(b,c,d,e,f){ACz(this,b,c,d,e,f);},"dX",function(b,c){return A8C(this,b,c);},"nJ",function(b,c,d,e,f,g){return XG(this,b,c,d,e,f,g);},"fT",function(b,c,d,e){return AJ2(this,b,c,d,e);}],AC3,"BlockLadder",
12,P,[],0,3,0,["hx",function(b,c,d,e){return ADg(this,b,c,d,e);},"oU",function(b,c,d,e){return AD7(this,b,c,d,e);},"d5",function(){return AWX(this);},"gg",function(){return A5W(this);},"em",function(){return A9A(this);},"fT",function(b,c,d,e){return ANW(this,b,c,d,e);},"vd",function(b,c,d,e,f){Yp(this,b,c,d,e,f);},"e1",function(b,c,d,e,f){AKM(this,b,c,d,e,f);},"eH",function(b){return A5u(this,b);}],ANZ,"BlockMinecartTrack",12,P,[],0,3,0,["hx",function(b,c,d,e){return ACE(this,b,c,d,e);},"d5",function(){return AWy(this);
},"nJ",function(b,c,d,e,f,g){return ALD(this,b,c,d,e,f,g);},"xO",function(b,c,d,e){AMn(this,b,c,d,e);},"eY",function(b,c){return A2C(this,b,c);},"gg",function(){return A3C(this);},"em",function(){return A0y(this);},"eH",function(b){return A2J(this,b);},"fT",function(b,c,d,e){return ANY(this,b,c,d,e);},"fE",function(b,c,d,e){ANH(this,b,c,d,e);},"e1",function(b,c,d,e,f){AJP(this,b,c,d,e,f);}],ASC,0,Bb,[],0,3,0,["iP",function(b,c,d,e,f,g,h){return AQo(this,b,c,d,e,f,g,h);}],AHH,0,MV,[],0,3,0,0,M8,0,Fk,[DM],1,3,
0,0,Nk,0,L8,[],1,0,0,0,WO,0,Nk,[],0,0,0,0,ARm,0,M8,[],0,0,0,0,Vu,0,D,[],3,3,0,0,LU,0,Fk,[DM,Iv,KY,Vu],1,3,0,0,P6,"GZIPException",2,BW,[],0,3,0,0,Om,0,B8,[],0,3,0,["dw",function(){return A4U(this);},"sm",function(){return A5z(this);},"ui",function(){return ATn(this);}],L0,0,B8,[],0,3,0,["nF",function(){return A_G(this);},"dw",function(){return AY$(this);}],N9,0,B8,[],0,3,0,["dw",function(){return A6Y(this);},"sm",function(){return A97(this);},"ui",function(){return AU6(this);}],Gc,0,Bb,[],0,3,0,["x7",function(b,
c){return A8V(this,b,c);},"si",function(b,c){A67(this,b,c);},"x1",function(b,c,d,e,f){AWr(this,b,c,d,e,f);},"n2",function(b){return AW_(this,b);}],OY,0,Gc,[],0,3,Bb6,0,Vy,0,Gc,[],0,3,Bb9,["o9",function(b){return A5m(this,b);}],Ws,0,Gc,[],0,3,BbJ,0,AE1,0,Bb,[],0,3,0,["iP",function(b,c,d,e,f,g,h){return AJK(this,b,c,d,e,f,g,h);}],LN,0,Bb,[],0,3,0,["n_",function(b,c,d){return P$(this,b,c,d);}],AOW,0,Bb,[],0,3,0,["n_",function(b,c,d){return AGC(this,b,c,d);}],ALb,0,Bb,[],0,3,0,["x7",function(b,c){return A0x(this,
b,c);},"si",function(b,c){A7U(this,b,c);},"x1",function(b,c,d,e,f){AX6(this,b,c,d,e,f);},"n2",function(b){return A2B(this,b);}],AOe,0,LN,[],0,3,0,["n_",function(b,c,d){return APx(this,b,c,d);}],ANA,0,Bb,[],0,3,0,["iP",function(b,c,d,e,f,g,h){return AQU(this,b,c,d,e,f,g,h);}],VX,0,Bb,[],0,3,0,["iP",function(b,c,d,e,f,g,h){return AFm(this,b,c,d,e,f,g,h);}],F5,0,Bb,[],0,3,0,0,XW,0,Bb,[],0,3,0,["iP",function(b,c,d,e,f,g,h){return ACe(this,b,c,d,e,f,g,h);}],AHr,0,Bb,[],0,3,0,["iP",function(b,c,d,e,f,g,h){return Yf(this,
b,c,d,e,f,g,h);}],AJd,0,Bb,[],0,3,0,["iP",function(b,c,d,e,f,g,h){return AEa(this,b,c,d,e,f,g,h);}],ARN,0,Bb,[],0,3,0,["n_",function(b,c,d){return AHZ(this,b,c,d);}],AO_,0,Bb,[],0,3,0,["iP",function(b,c,d,e,f,g,h){return AC9(this,b,c,d,e,f,g,h);}],ARf,0,Bb,[],0,3,0,["yJ",function(b,c){AGA(this,b,c);},"si",function(b,c){AWn(this,b,c);}],N4,0,D,[],3,0,0,0,AGj,0,D,[N4],4,3,0,["E2",function(b){ASY(this,b);},"l2",function(){AZx(this);},"yD",function(){return AT4(this);},"kL",function(b,c,d){A8h(this,b,c,d);}],Sf,
"CloneNotSupportedException",9,BD,[],0,3,0,0,Ns,0,D,[],4,3,0,0,J2,0,D,[],3,3,0,0,LK,0,D,[J2,ES],0,0,0,["eo",function(b){return A41(this,b);},"fl",function(){return A1X(this);}],IG,0,LK,[],0,0,0,0,BO,"IndexOutOfBoundsException",9,B6,[],0,3,0,0,I0,"StringIndexOutOfBoundsException",9,BO,[],0,3,0,0,GH,0,D,[],3,3,0,0,Wz,0,D,[GH],0,3,0,["kt",function(){AI4(this);}],FH,"EOFException",8,BW,[],0,3,0,0,EQ,0,D,[],0,3,0,0,Fy,0,D,[],0,3,0,0,LI,0,D,[],4,0,0,0]);
$rt_metadata([PQ,0,E3,[],0,0,0,["nO",function(b){A59(this,b);}],Kj,0,D,[],0,3,0,0,AMp,0,D,[],4,3,0,0,Jh,0,D,[],0,3,0,0,Lr,0,LU,[],1,0,0,0,ABP,0,Lr,[],0,0,0,0,LQ,0,D,[],1,3,0,0,Oa,0,D,[],0,3,0,0,Z$,0,D,[Da],1,3,0,0,PR,0,D,[Da],3,3,0,0,YE,0,D,[Da,PR],1,3,0,0,KD,0,D,[],4,0,0,0,NG,0,LQ,[],1,3,0,0,PS,0,NG,[],0,3,0,0,AOr,0,D,[],4,3,0,0,Gd,0,D,[],4,0,0,0,LA,0,D,[],4,0,0,0,Hx,"UTFDataFormatException",8,BW,[],0,3,0,0,Xv,"NegativeArraySizeException",9,B6,[],0,3,0,0,AAZ,0,D,[Lk],1,3,0,["Q2",function(b){return A_A(this,
b);},"Zz",function(){return AUB(this);}],Kk,"IllegalMonitorStateException",9,B6,[],0,3,0,0,ZW,0,D,[],0,0,0,0,D2,"IllegalStateException",9,BD,[],0,3,0,0,AIA,0,D,[Da],1,3,0,0,ST,0,D,[GH],0,3,0,["kt",function(){AQ9(this);}],Rb,0,D,[GH],0,3,0,0,G0,0,BW,[],0,3,0,0,W2,"AssertionError",9,Fg,[],0,3,0,0,E1,0,BD,[],0,3,0,0,Ok,0,D,[],1,3,0,0,Sj,0,D,[],3,3,0,0,St,0,D,[],3,3,0,0,Pi,0,D,[GH,Sj,St],0,0,0,["kt",function(){APn(this);}],LF,0,Ok,[],1,3,0,0,Ri,0,LF,[],0,3,0,0,DY,"Inflate$Return",2,BD,[],0,0,0,0,ANy,0,D,[ES],0,
3,0,0,OV,0,D,[N4],4,3,0,["kL",function(b,c,d){A2A(this,b,c,d);},"l2",function(){A6s(this);},"E2",function(b){A9U(this,b);},"yD",function(){return A7y(this);}],I_,0,D,[],0,3,0,0,Qj,0,D,[],3,3,0,0,Bu,0,Bs,[Qj],0,3,BV,0,ACD,0,D,[],0,3,0,0,NF,0,D,[],0,3,0,0,Io,0,D,[],0,3,Ts,0,ASb,0,E3,[],0,3,0,["nO",function(b){A7P(this,b);},"gw",function(b,c,d){Ru(this,b,c,d);}],JT,"ArrayStoreException",9,B6,[],0,3,0,0,Og,0,D,[],3,3,0,0,F0,0,D,[Og],0,3,0,["ej",function(b,c,d){return ACx(this,b,c,d);},"oM",function(b,c,d){return AB2(this,
b,c,d);},"eI",function(b,c,d){return AEK(this,b,c,d);},"sQ",function(b,c,d){return ANj(this,b,c,d);},"lh",function(b,c,d){return AAD(this,b,c,d);}],L1,0,D,[],0,3,BA,0,ANh,0,D,[],0,3,0,0]);
$rt_metadata([Gh,0,D,[],0,3,0,0,CS,0,Gh,[],0,3,0,["pb",function(b,c){YP(this,b,c);},"I5",function(b,c,d){Zo(this,b,c,d);},"Cg",function(b,c,d){A2y(this,b,c,d);},"iF",function(b){AMU(this,b);},"hW",function(){AP7(this);},"rD",function(){A3h(this);},"pv",function(){AH9(this);},"oc",function(){return AVs(this);}],AFe,0,D,[],0,3,0,0,Ml,0,D,[Dc],1,3,0,0,Es,0,Ml,[Dc],0,3,0,0,Ob,0,D,[],3,3,0,0,I6,0,D,[Dc,Ob],1,3,0,0,Wi,0,D,[Ob],3,3,0,0,N1,0,D,[Wi],3,3,0,0,R3,0,D,[],3,3,0,0,Md,0,D,[R3],3,3,0,0,U4,0,I6,[Dc,N1,Md],0,
3,0,0,Wg,0,D,[N1],3,3,0,0,RX,0,D,[Md],3,3,0,0,G_,0,I6,[Dc,Wg,RX],0,3,0,0,S1,0,D,[GH],0,3,0,["kt",function(){AIC(this);}],AO0,"CoderMalfunctionError",7,Fg,[],0,3,0,0,H7,0,D,[],3,3,0,0,Uv,0,D,[H7],3,3,0,0,AC0,0,D,[Uv],0,0,0,0,RF,0,D,[],0,0,0,0,KI,0,D,[],0,3,0,0,Wh,0,D,[],0,3,0,0,Qm,0,D,[],0,3,0,0,AKX,0,Eu,[],0,3,0,["pa",function(){A0a(this);}],ACl,0,Eu,[],0,3,0,["pa",function(){A8S(this);}],AR7,0,Eu,[],0,3,0,["pa",function(){A3v(this);}],Xs,0,D,[],3,3,0,0,AAv,0,D,[Xs],0,3,0,0,AHc,0,CS,[],0,3,0,["rD",function()
{A5q(this);},"pb",function(b,c){ANN(this,b,c);},"hW",function(){AIt(this);},"iF",function(b){ACr(this,b);},"hQ",function(b,c,d){ZD(this,b,c,d);}],O1,0,D,[],0,3,0,0,Nu,0,Gh,[],0,3,0,0,K_,0,D,[],3,3,0,0,II,0,D,[K_],0,3,0,0,Jw,"EntityPlayer",12,EP,[],0,3,0,["BM",function(){AFX(this);},"FA",function(b){ALe(this,b);},"BD",function(b,c){AZv(this,b,c);},"rL",function(){return A5h(this);},"fs",function(b,c){return Yr(this,b,c);}],AGD,"EntityPlayerSP",12,Jw,[],0,3,0,["wM",function(){AAQ(this);},"ot",function(){ALn(this);
}],Qp,0,D,[],0,3,0,0,AJH,0,D,[],0,3,0,0,Vq,0,D,[],0,3,0,0,FE,0,D,[],3,3,0,0,VE,0,D,[FE],0,3,0,["j7",function(b,c){return Em(this,b,c);},"jE",function(b,c){AFD(this,b,c);},"gy",function(b){return RR(this,b);},"f4",function(){return AZs(this);},"kl",function(){AAp(this);}],Du,0,I1,[],0,3,0,0,Ew,0,CS,[],1,3,0,["hQ",function(b,c,d){ACi(this,b,c,d);},"I5",function(b,c,d){AN7(this,b,c,d);},"Cg",function(b,c,d){A9J(this,b,c,d);},"pb",function(b,c){AAx(this,b,c);},"pv",function(){AA0(this);},"oc",function(){return A$3(this);
}],APP,0,Ew,[],0,3,0,["pv",function(){ALK(this);},"tq",function(b){ATT(this,b);},"lu",function(){AZ7(this);},"hQ",function(b,c,d){ADZ(this,b,c,d);},"s5",function(b){X$(this,b);}],I8,0,D,[],0,3,0,0,Rt,0,D,[],0,0,0,0,Tj,0,D,[],0,3,0,0,AHq,0,D,[],0,3,0,0,Cd,0,D,[],4,3,0,0,ZL,0,D,[FE],0,3,0,["gy",function(b){return Gj(this,b);},"j7",function(b,c){return AEY(this,b,c);},"jE",function(b,c){A3D(this,b,c);},"f4",function(){return A80(this);},"kl",function(){ADQ(this);}]]);
$rt_metadata([AAF,0,D,[FE],0,3,0,["gy",function(b){return A46(this,b);},"j7",function(b,c){return AWD(this,b,c);},"jE",function(b,c){Pl(this,b,c);},"f4",function(){return AYW(this);},"kl",function(){ANk(this);}],HM,0,D,[],0,3,0,["Jo",function(){AK_(this);},"s8",function(b){return AXh(this,b);},"rY",function(){return A9S(this);}],ADf,0,HM,[],0,0,0,["s8",function(b){return A0l(this,b);},"Jo",function(){AN$(this);}],QK,0,HM,[],0,0,0,["s8",function(b){return A2T(this,b);},"rY",function(){return AWx(this);}],Wb,
0,D,[],4,3,0,0,SC,0,D,[],4,3,0,0,M6,0,Fk,[DM],1,3,0,0,Dg,0,D,[],1,3,0,0,AII,0,Dg,[],0,3,0,["iR",function(b,c,d,e,f,g){AC7(this,b,c,d,e,f,g);}],Pd,0,D,[],4,3,0,0,QD,0,D,[DO],0,0,0,["gR",function(b){return A7s(this,b);}],QC,0,D,[DO],0,0,0,["gR",function(b){return A7E(this,b);}],Ix,0,M6,[],1,0,0,0,UV,0,Ix,[],0,0,0,["yv",function(b){return AOM(this,b);},"u9",function(b,c){ANK(this,b,c);},"m2",function(){return ASR(this);}],V6,0,D,[],4,3,0,0,V2,0,D,[],4,3,0,0,Xh,0,D,[],4,3,0,0,Jp,"UnsupportedOperationException",
9,B6,[],0,3,0,0,UJ,0,CS,[],0,3,0,["hW",function(){ADh(this);},"iF",function(b){AOF(this,b);},"hQ",function(b,c,d){AMC(this,b,c,d);}],FV,"ReadOnlyBufferException",6,Jp,[],0,3,0,0,Hc,"BufferOverflowException",6,B6,[],0,3,0,0,Gu,"BufferUnderflowException",6,B6,[],0,3,0,0,Tz,0,D,[],0,3,0,0,ACn,0,D,[],0,3,0,0,Rz,0,CS,[],0,3,0,0,Mm,0,CS,[],0,3,0,["hW",function(){AOo(this);},"pb",function(b,c){AMm(this,b,c);},"iF",function(b){AOy(this,b);},"hQ",function(b,c,d){APp(this,b,c,d);},"oc",function(){return A6Q(this);}],C1,
"EntityFX",12,C5,[],0,3,0,["ep",function(){ALo(this);},"kT",function(b,c,d,e,f,g,h){ANv(this,b,c,d,e,f,g,h);},"xA",function(){return A71(this);}],AA1,0,CS,[],0,3,0,["hW",function(){ARd(this);},"iF",function(b){ADn(this,b);},"rD",function(){A2g(this);},"hQ",function(b,c,d){ADM(this,b,c,d);}],Ly,0,D,[],0,3,0,0,WD,0,Ly,[],0,3,0,0,Q6,0,D,[],3,3,0,0,AFT,0,D,[Q6],0,3,0,0,O6,0,D,[],0,3,0,0,Ii,0,D,[FE],0,3,0,["gm",function(){return A6u(this);},"w_",function(){return A6h(this);},"gy",function(b){return AS$(this,b);},
"j7",function(b,c){return A3i(this,b,c);},"jE",function(b,c){AWT(this,b,c);},"f4",function(){return A9$(this);},"kl",function(){Yz(this);}],ZH,"EntityDiggingFX",12,C1,[],0,3,0,["xA",function(){return ATG(this);},"kT",function(b,c,d,e,f,g,h){YM(this,b,c,d,e,f,g,h);}],KS,"ConcurrentModificationException",4,B6,[],0,3,0,0,JO,"EntityRainFX",12,C1,[],0,3,0,["kT",function(b,c,d,e,f,g,h){AKN(this,b,c,d,e,f,g,h);},"ep",function(){AOA(this);}],IQ,0,Ix,[],1,0,0,["m2",function(){return AXO(this);}],Pf,0,IQ,[],0,0,0,["yv",
function(b){return AWc(this,b);},"u9",function(b,c){ASQ(this,b,c);}],VO,0,IQ,[],0,0,0,["yv",function(b){return A0R(this,b);},"u9",function(b,c){ATJ(this,b,c);}],AKV,0,D,[FB],0,3,0,["qh",function(b,c){return A0$(this,b,c);}],V_,0,D,[FB],0,3,0,["qh",function(b,c){return A9G(this,b,c);}],Ht,0,D,[],0,3,0,0,HY,0,D,[],0,3,0,0,H1,0,D,[],0,3,0,0,Nh,0,D,[],0,3,0,0,J1,"NoSuchElementException",4,B6,[],0,3,0,0,VW,0,D,[],0,3,0,["eo",function(b){return A6p(this,b);},"fl",function(){return A1s(this);}],Ov,0,Fa,[DM],0,3,0,
0,Hn,0,D,[],0,0,0,0]);
$rt_metadata([Ni,0,D,[],4,3,0,0,R_,0,D,[],0,3,0,0,DJ,0,Dg,[],0,3,0,["H7",function(b,c,d,e,f,g){AAb(this,b,c,d,e,f,g);},"k$",function(b,c){return APU(this,b,c);},"CH",function(b){return A5j(this,b);},"CK",function(b,c,d){return A6y(this,b,c,d);},"xj",function(b,c){A9b(this,b,c);},"iR",function(b,c,d,e,f,g){AOZ(this,b,c,d,e,f,g);}],OO,0,DJ,[],0,3,0,["k$",function(b,c){return Y$(this,b,c);},"H7",function(b,c,d,e,f,g){AL5(this,b,c,d,e,f,g);},"iR",function(b,c,d,e,f,g){ACM(this,b,c,d,e,f,g);}],Lz,0,Gh,[],0,3,0,0,L$,
0,D,[MT],0,3,0,0,Qu,0,D,[],3,3,0,0,Kr,0,L$,[Qu],0,3,0,0,Ou,0,D,[Da],3,3,0,0,QB,0,D,[Ou],0,0,0,["Gh",function(){return A1D(this);}],WJ,0,D,[FB],0,3,0,["qh",function(b,c){return A4R(this,b,c);}],WH,0,D,[FB],0,3,0,0,Sb,0,Fb,[],4,0,0,0,Sa,0,FY,[],4,0,0,0,Sc,0,Gg,[],4,0,0,0,IC,0,D,[],1,3,0,0,AA4,0,IC,[],0,3,0,["CV",function(b,c,d,e,f){XE(this,b,c,d,e,f);}],NA,0,D$,[],0,3,0,["tN",function(){AC4(this);}],AR0,0,IC,[],0,3,0,["CV",function(b,c,d,e,f){ARe(this,b,c,d,e,f);}],AQj,0,DJ,[],0,3,0,["CH",function(b){return A6k(this,
b);},"k$",function(b,c){return Yd(this,b,c);}],T9,0,DJ,[],0,3,0,["k$",function(b,c){return AMd(this,b,c);}],F3,0,Eh,[],0,3,0,["hL",function(b,c,d,e,f,g){A90(this,b,c,d,e,f,g);}],PX,0,F3,[],0,3,0,0,TF,0,DJ,[],0,3,0,["k$",function(b,c){return ARs(this,b,c);}],ACI,0,F3,[],0,3,0,0,ARh,0,F3,[],0,3,0,0,AB$,0,DJ,[],0,3,0,["xj",function(b,c){A7X(this,b,c);},"CK",function(b,c,d){return AZY(this,b,c,d);}],HS,0,Mz,[],0,3,0,["ok",function(b,c,d,e,f,g){A2K(this,b,c,d,e,f,g);}],AIo,0,HS,[],0,3,0,0,K$,"EntityGiant",12,DP,
[],0,3,0,["sF",function(b,c,d){return AO$(this,b,c,d);}],Uc,0,DJ,[],0,3,0,["xj",function(b,c){A$1(this,b,c);}],TM,0,Dg,[],0,3,0,["iR",function(b,c,d,e,f,g){AJt(this,b,c,d,e,f,g);}],IH,"EntityPainting",12,C5,[],0,3,0,["ep",function(){ADl(this);},"lw",function(){return AXQ(this);},"fs",function(b,c){return AEr(this,b,c);}],AAt,0,Dg,[],0,3,0,["iR",function(b,c,d,e,f,g){AOT(this,b,c,d,e,f,g);}],Ju,"EntityArrow",12,C5,[],0,3,0,["ep",function(){APv(this);},"xJ",function(b){A7C(this,b);}],Ry,0,Dg,[],0,3,0,["iR",function(b,
c,d,e,f,g){ADj(this,b,c,d,e,f,g);}],E9,"EntityItem",12,C5,[],0,3,0,["ep",function(){AJF(this);},"HL",function(){return AEf(this);},"FX",function(b){AMw(this,b);},"fs",function(b,c){return Vj(this,b,c);},"xJ",function(b){A_e(this,b);}],Mr,"EntityTNTPrimed",12,C5,[],0,3,0,["lw",function(){return A$e(this);},"ep",function(){XK(this);}],AOX,0,Dg,[],0,3,0,["iR",function(b,c,d,e,f,g){AL8(this,b,c,d,e,f,g);}],JM,"EntityFallingSand",12,C5,[],0,3,0,["lw",function(){return AYk(this);},"ep",function(){AMP(this);}],AQO,
0,Dg,[],0,3,0,["iR",function(b,c,d,e,f,g){ARl(this,b,c,d,e,f,g);}],Gi,"EntityMinecart",12,C5,[FE],0,3,0,["AZ",function(b){return ASS(this,b);},"Bw",function(){return AZ4(this);},"rT",function(){return A7F(this);},"Af",function(){return AVP(this);},"fs",function(b,c){return ALh(this,b,c);},"lw",function(){return A9M(this);},"C7",function(){APh(this);},"ep",function(){ASH(this);},"u0",function(b){A3Q(this,b);},"uK",function(b){return A8P(this,b);}],ARA,0,Dg,[],0,3,0,["iR",function(b,c,d,e,f,g){AQg(this,b,c,d,
e,f,g);}],V9,0,D,[],0,3,0,0,ABE,0,D,[],0,3,0,0,AH7,0,Eh,[],0,3,0,["hL",function(b,c,d,e,f,g){AYb(this,b,c,d,e,f,g);}],AIB,0,Eh,[],0,3,0,["hL",function(b,c,d,e,f,g){A24(this,b,c,d,e,f,g);}],AEX,0,Eh,[],0,3,0,0,Ty,0,D,[H7],0,0,0,["qm",function(){return KC(this);},"mT",function(){return KT(this);}],I7,0,D,[],0,3,0,0]);
$rt_metadata([Iu,0,D,[Og],0,3,0,["ej",function(b,c,d){return HB(this,b,c,d);},"sQ",function(b,c,d){return AAP(this,b,c,d);},"eI",function(b,c,d){return AC6(this,b,c,d);},"oM",function(b,c,d){return N7(this,b,c,d);},"lh",function(b,c,d){return AB7(this,b,c,d);}],Gl,0,BD,[],0,3,0,0,UW,"NoSuchMethodException",9,Gl,[],0,3,0,0,Vf,0,D,[],0,3,0,0,PN,0,Go,[],0,0,0,["rB",function(b){return A0q(this,b);},"kZ",function(){return Nj(this);}],Tv,0,D,[Ou],0,0,0,["Gh",function(){return A_x(this);}],AQH,0,D,[],4,3,0,0,WX,0,
D$,[FE],0,3,0,["gy",function(b){return A9p(this,b);},"j7",function(b,c){return A8i(this,b,c);},"jE",function(b,c){AVt(this,b,c);},"f4",function(){return AT7(this);},"tN",function(){AGG(this);},"kl",function(){Z5(this);}],Th,0,D$,[FE],0,3,0,["gm",function(){return AVN(this);},"gy",function(b){return Rd(this,b);},"j7",function(b,c){return A1T(this,b,c);},"jE",function(b,c){AHA(this,b,c);},"w_",function(){return A8B(this);},"f4",function(){return A7l(this);}],CQ,0,D,[],1,3,0,0,APQ,0,CQ,[],0,3,0,["gN",function(b)
{A7c(this,b);},"gF",function(b){A9j(this,b);},"fd",function(){return A7a(this);}],P5,"BufferUnderflowException",7,B6,[],0,3,0,0,SL,"BufferOverflowException",7,B6,[],0,3,0,0,R0,"MalformedInputException",7,G0,[],0,3,0,["lT",function(){return AVR(this);}],P1,"UnmappableCharacterException",7,G0,[],0,3,0,["lT",function(){return AVk(this);}],IO,0,D,[],0,0,0,["qm",function(){return Gb(this);}],Vc,0,IO,[H7],0,0,0,["mT",function(){return Me(this);}],Wu,0,D,[],0,3,0,0,AEA,0,CS,[],0,3,0,["hW",function(){AR1(this);},"iF",
function(b){ADX(this,b);},"hQ",function(b,c,d){AGc(this,b,c,d);}],OA,0,CS,[],0,3,0,["hW",function(){APw(this);},"s$",function(){AXC(this);},"iF",function(b){ASy(this,b);},"IT",function(b){AKO(this,b);},"hQ",function(b,c,d){AED(this,b,c,d);}],LY,"InstantiationException",9,Gl,[],0,3,0,0,Tc,"IllegalAccessException",9,Gl,[],0,3,0,0,ALw,0,D,[],4,3,0,0,AAd,0,D,[],4,3,0,0,AMk,0,D,[Dc],4,3,0,0,AB0,0,Lz,[],0,3,0,0,NR,0,CS,[],0,3,0,["hW",function(){AJu(this);},"iF",function(b){AIg(this,b);},"pb",function(b,c){ALQ(this,
b,c);},"hQ",function(b,c,d){AGy(this,b,c,d);}],U1,0,OA,[],0,3,0,["s$",function(){A1R(this);},"IT",function(b){AMa(this,b);}],NU,0,D,[],0,3,0,0,Yo,0,NU,[],0,3,0,0,QY,0,D,[],0,3,AY0,0,Co,0,D,[],1,0,0,["eJ",function(b,c,d){return Jf(this,b,c,d);},"eW",function(b,c,d,e){return Jq(this,b,c,d,e);},"oH",function(){return A4p(this);},"cb",function(b){A1m(this,b);},"d4",function(b){return A$x(this,b);},"lA",function(){return A_f(this);},"iY",function(){K7(this);}],N3,0,CQ,[],0,3,0,["gF",function(b){A9g(this,b);},"gN",
function(b){A0o(this,b);},"fd",function(){return AUI(this);}],DV,0,Co,[],0,0,0,["k",function(b,c,d){return ATK(this,b,c,d);},"b4",function(b){return AT6(this,b);}],HX,0,D,[],0,0,0,0,ARc,"PatternSyntaxException",5,Cc,[],0,3,0,["lT",function(){return A_b(this);}],Mw,0,CQ,[],0,3,0,["gN",function(b){A8E(this,b);},"gF",function(b){A78(this,b);},"fd",function(){return A6K(this);}],MZ,0,CQ,[],0,3,0,["gN",function(b){AWl(this,b);},"gF",function(b){AZB(this,b);},"fd",function(){return A5M(this);}],Li,0,CQ,[],0,3,0,["gN",
function(b){A17(this,b);},"gF",function(b){AY8(this,b);},"fd",function(){return AVo(this);}],Oc,0,CQ,[],0,3,0,["gN",function(b){ATg(this,b);},"gF",function(b){A_q(this,b);},"fd",function(){return A2I(this);}],Pj,0,CQ,[],0,3,0,["gN",function(b){AS9(this,b);},"gF",function(b){A70(this,b);},"fd",function(){return ASN(this);}],Mp,0,CQ,[],0,3,0,["gN",function(b){A62(this,b);},"gF",function(b){AU8(this,b);},"fd",function(){return A0W(this);}],MI,0,CQ,[],0,3,0,["gN",function(b){A4_(this,b);},"gF",function(b){A7j(this,
b);},"fd",function(){return A9D(this);}],OH,0,CQ,[],0,3,0,["gN",function(b){A$U(this,b);},"gF",function(b){AY9(this,b);},"fd",function(){return ATr(this);}],QU,0,CQ,[],0,3,0,["gN",function(b){A9y(this,b);},"gF",function(b){AY2(this,b);},"fd",function(){return AYC(this);}],TC,0,D,[DH],0,0,0,["gx",function(){return AUr(this);}],TB,0,D,[DH],0,0,0,["gx",function(){return AXr(this);}],ART,0,D,[],0,3,0,0,XZ,0,D,[],0,3,0,0,XS,0,D,[],0,3,0,0]);
$rt_metadata([AEc,0,D,[],0,3,0,0,ARS,0,D,[],0,3,0,0,AE_,0,D,[],0,3,0,0,Yl,0,D,[FB],0,0,0,["qh",function(b,c){return AZy(this,b,c);}],QH,0,DV,[],0,0,0,["k",function(b,c,d){return A3y(this,b,c,d);},"b4",function(b){return A9z(this,b);}],AR_,0,DV,[],0,0,0,["k",function(b,c,d){return A4N(this,b,c,d);}],PW,0,DV,[],0,0,0,["k",function(b,c,d){return AUa(this,b,c,d);}],Q7,0,DV,[],0,0,0,["k",function(b,c,d){return A3A(this,b,c,d);},"b4",function(b){return A8O(this,b);}],HV,0,DV,[],0,0,0,["k",function(b,c,d){return A1x(this,
b,c,d);}],CI,0,Co,[],1,0,0,["k",function(b,c,d){return A_z(this,b,c,d);},"eb",function(){return A9_(this);},"b4",function(b){return AW9(this,b);}],AFW,0,CI,[],0,0,0,["dn",function(b,c){return A9N(this,b,c);},"eJ",function(b,c,d){return A5C(this,b,c,d);},"eW",function(b,c,d,e){return A4E(this,b,c,d,e);},"b4",function(b){return A3z(this,b);}],CE,0,Co,[],0,0,0,["k",function(b,c,d){return AWs(this,b,c,d);},"cb",function(b){AZm(this,b);},"d4",function(b){return A7f(this,b);},"b4",function(b){return AZT(this,b);},
"iY",function(){AUJ(this);}],K1,0,CE,[],0,0,0,["k",function(b,c,d){return AZe(this,b,c,d);},"b4",function(b){return A9l(this,b);}],EV,0,K1,[],0,0,0,["k",function(b,c,d){return A45(this,b,c,d);},"cb",function(b){A86(this,b);}],Te,0,EV,[],0,0,0,["k",function(b,c,d){return AZi(this,b,c,d);},"b4",function(b){return A1o(this,b);}],WL,0,EV,[],0,0,0,["k",function(b,c,d){return ATZ(this,b,c,d);},"b4",function(b){return A$d(this,b);}],Vd,0,EV,[],0,0,0,["k",function(b,c,d){return AUG(this,b,c,d);},"b4",function(b){return A_N(this,
b);}],Rj,0,EV,[],0,0,0,["k",function(b,c,d){return A3b(this,b,c,d);},"b4",function(b){return A9r(this,b);}],IB,0,CE,[],0,0,0,["k",function(b,c,d){return ATe(this,b,c,d);},"eJ",function(b,c,d){return AX_(this,b,c,d);},"eW",function(b,c,d,e){return A9C(this,b,c,d,e);},"d4",function(b){return A7b(this,b);},"lA",function(){return A8M(this);},"iY",function(){A13(this);}],H2,0,D,[],1,0,0,0,Bm,0,H2,[],1,0,0,["hF",function(){return A4c(this);},"kq",function(){return A3K(this);},"sR",function(){return A95(this);},"nT",
function(){return A_c(this);}],ZN,"CharClass",5,Bm,[],0,0,0,["X",function(b){return D5(this,b);},"hF",function(){return DX(this);},"kq",function(){return A5v(this);},"sR",function(){return A1e(this);},"gk",function(){return A72(this);},"nT",function(){return AVY(this);}],MS,"MissingResourceException",4,B6,[],0,3,0,0,E4,0,Co,[],1,0,0,["d4",function(b){return A0r(this,b);},"b4",function(b){return A$J(this,b);},"iY",function(){AYw(this);}],D7,0,E4,[],0,0,0,["k",function(b,c,d){return A3c(this,b,c,d);}],GF,0,D7,
[],0,0,0,["k",function(b,c,d){return A31(this,b,c,d);}],DW,0,E4,[],0,0,0,["k",function(b,c,d){return A3r(this,b,c,d);}],FX,0,D7,[],0,0,0,["k",function(b,c,d){return A7p(this,b,c,d);},"cb",function(b){A2N(this,b);}],Su,0,D7,[],0,0,0,["k",function(b,c,d){return A_u(this,b,c,d);},"eJ",function(b,c,d){return AYM(this,b,c,d);}],Ez,"NumberFormatException",9,Cc,[],0,3,0,0,Tp,"Quantifier",5,H2,[ES],0,0,0,["gk",function(){return A7_(this);}],TR,0,Co,[],0,0,0,["k",function(b,c,d){return AXw(this,b,c,d);},"b4",function(b)
{return A8L(this,b);}],WZ,0,D,[ES,Dc],0,3,0,0,OK,0,CE,[],0,0,0,0,P9,0,CE,[],0,0,0,["k",function(b,c,d){return ATI(this,b,c,d);},"cb",function(b){A8y(this,b);},"b4",function(b){return AUg(this,b);},"d4",function(b){return AT2(this,b);}],EO,0,CE,[],0,0,0,["k",function(b,c,d){return A5o(this,b,c,d);},"X",function(b){return AV_(this,b);},"d4",function(b){return ATD(this,b);},"cb",function(b){A91(this,b);},"b4",function(b){return AVS(this,b);}],MR,0,EO,[],0,0,0,["X",function(b){return AW$(this,b);}],Zx,0,CI,[],0,
0,0,["dn",function(b,c){return A6W(this,b,c);}],Fo,0,CI,[],0,0,0,["dn",function(b,c){return S$(this,b,c);},"d4",function(b){return AZp(this,b);}],T8,0,CE,[],0,0,0,["cb",function(b){AYd(this,b);},"k",function(b,c,d){return ASU(this,b,c,d);},"d4",function(b){return A4i(this,b);},"b4",function(b){return A1h(this,b);}],Fw,0,CI,[],0,0,0,["eb",function(){return A6O(this);},"dn",function(b,c){return AWE(this,b,c);},"eJ",function(b,c,d){return AVG(this,b,c,d);},"eW",function(b,c,d,e){return AXl(this,b,c,d,e);},"d4",
function(b){return A1b(this,b);}],AGT,0,CI,[],0,0,0,["dn",function(b,c){return A2W(this,b,c);}],XQ,0,CI,[],0,0,0,["dn",function(b,c){return AS_(this,b,c);}],GK,0,CE,[],0,0,0,["cb",function(b){A_h(this,b);},"k",function(b,c,d){return AZd(this,b,c,d);},"d4",function(b){return AXz(this,b);},"b4",function(b){return A88(this,b);}],SM,0,GK,[],0,0,0,0,V5,0,GK,[],0,0,0,0,S7,0,DW,[],0,0,0,["k",function(b,c,d){return A4P(this,b,c,d);}],UB,0,DW,[],0,0,0,["k",function(b,c,d){return A7O(this,b,c,d);}],Hy,0,DW,[],0,0,0,["k",
function(b,c,d){return A9Y(this,b,c,d);},"cb",function(b){A$R(this,b);}],PP,0,Hy,[],0,0,0,["k",function(b,c,d){return AXi(this,b,c,d);},"cb",function(b){A8b(this,b);}]]);
$rt_metadata([G$,0,DW,[],0,0,0,["k",function(b,c,d){return A_J(this,b,c,d);}],OW,0,G$,[],0,0,0,["k",function(b,c,d){return AWV(this,b,c,d);}],Qx,0,DW,[],0,0,0,["k",function(b,c,d){return A2a(this,b,c,d);}],UU,0,Hy,[],0,0,0,["k",function(b,c,d){return AUi(this,b,c,d);}],RS,0,G$,[],0,0,0,["k",function(b,c,d){return A3E(this,b,c,d);}],Qy,0,E4,[],0,0,0,["k",function(b,c,d){return A_B(this,b,c,d);},"eJ",function(b,c,d){return A0N(this,b,c,d);}],TW,0,E4,[],0,0,0,["k",function(b,c,d){return AZq(this,b,c,d);},"eJ",
function(b,c,d){return ASX(this,b,c,d);}],Gn,0,D,[],1,0,0,0,Xw,0,D7,[],0,0,0,["k",function(b,c,d){return ATv(this,b,c,d);}],Sq,0,FX,[],0,0,0,["k",function(b,c,d){return AYB(this,b,c,d);}],Ui,0,GF,[],0,0,0,["k",function(b,c,d){return A9F(this,b,c,d);}],US,0,D7,[],0,0,0,["k",function(b,c,d){return AZj(this,b,c,d);}],V7,0,FX,[],0,0,0,["k",function(b,c,d){return ATz(this,b,c,d);}],Qi,0,GF,[],0,0,0,["k",function(b,c,d){return A9O(this,b,c,d);}],ABN,0,Co,[],4,0,0,["k",function(b,c,d){return A7e(this,b,c,d);},"b4",
function(b){return A6H(this,b);}],AAo,0,Co,[],0,0,0,["k",function(b,c,d){return A4a(this,b,c,d);},"b4",function(b){return A4g(this,b);}],AJr,0,Co,[],0,0,0,["k",function(b,c,d){return AXc(this,b,c,d);},"b4",function(b){return A2x(this,b);}],SJ,0,Co,[],4,0,0,["k",function(b,c,d){return A8Z(this,b,c,d);},"b4",function(b){return A4H(this,b);}],AQ7,0,Co,[],0,0,0,["k",function(b,c,d){return A8t(this,b,c,d);},"b4",function(b){return A2V(this,b);}],AIQ,0,Co,[],0,0,0,["k",function(b,c,d){return A4C(this,b,c,d);},"b4",
function(b){return AWm(this,b);}],AGi,0,CE,[],0,0,0,["k",function(b,c,d){return A2f(this,b,c,d);},"cb",function(b){A4l(this,b);},"oH",function(){return A8g(this);},"b4",function(b){return A4j(this,b);}],ZJ,0,CE,[],4,0,0,["k",function(b,c,d){return A8o(this,b,c,d);},"cb",function(b){A9v(this,b);},"oH",function(){return ASI(this);},"b4",function(b){return A2m(this,b);}],AQK,0,Co,[],4,0,0,["k",function(b,c,d){return AXG(this,b,c,d);},"b4",function(b){return A5R(this,b);}],AN8,0,Co,[],0,0,0,["k",function(b,c,d)
{return AY7(this,b,c,d);},"b4",function(b){return A5N(this,b);}],AIc,0,Co,[],0,0,0,["k",function(b,c,d){return A6C(this,b,c,d);},"b4",function(b){return AUU(this,b);}],IT,0,CE,[],0,0,0,["k",function(b,c,d){return ATw(this,b,c,d);},"cb",function(b){A84(this,b);},"b4",function(b){return A0c(this,b);}],AQV,0,IT,[],0,0,0,["k",function(b,c,d){return AU1(this,b,c,d);},"eJ",function(b,c,d){return A1n(this,b,c,d);},"eW",function(b,c,d,e){return ATo(this,b,c,d,e);},"d4",function(b){return A7I(this,b);}],AMf,0,IT,[],
0,0,0,["k",function(b,c,d){return AX9(this,b,c,d);}],AMT,0,CI,[],0,0,0,["dn",function(b,c){return AVf(this,b,c);},"eJ",function(b,c,d){return A3_(this,b,c,d);},"eW",function(b,c,d,e){return A5Y(this,b,c,d,e);},"d4",function(b){return AWO(this,b);}],XH,0,CI,[],0,0,0,["dn",function(b,c){return AYa(this,b,c);}],OZ,0,CI,[],0,0,0,["dn",function(b,c){return A9H(this,b,c);}],Ia,0,D,[],4,0,0,0,By,0,D,[],1,0,0,0,Tb,0,CI,[],0,0,0,["dn",function(b,c){return A0v(this,b,c);}],NN,0,CE,[],0,0,0,["cb",function(b){A8G(this,
b);},"k",function(b,c,d){return A4I(this,b,c,d);},"eJ",function(b,c,d){return AWN(this,b,c,d);},"eW",function(b,c,d,e){return A48(this,b,c,d,e);},"d4",function(b){return ATj(this,b);},"b4",function(b){return A04(this,b);}],NT,0,CE,[],0,0,0,["cb",function(b){A4t(this,b);},"k",function(b,c,d){return ASZ(this,b,c,d);},"eJ",function(b,c,d){return A8R(this,b,c,d);},"eW",function(b,c,d,e){return A0t(this,b,c,d,e);},"d4",function(b){return AVg(this,b);},"b4",function(b){return A8T(this,b);}],EY,0,CI,[],0,0,0,["dn",
function(b,c){return A9m(this,b,c);},"eJ",function(b,c,d){return A74(this,b,c,d);},"eW",function(b,c,d,e){return AUq(this,b,c,d,e);},"d4",function(b){return A9d(this,b);}],Wx,0,Gn,[],4,0,0,["ox",function(b){return AUz(this,b);},"Ec",function(b,c){return AZ_(this,b,c);}],Wy,0,Gn,[],4,0,0,["ox",function(b){return A9Q(this,b);},"Ec",function(b,c){return A11(this,b,c);}],AEP,0,D,[],0,0,0,0,Yx,0,D,[],0,0,0,0,NL,0,By,[],0,0,0,["bW",function(){return AMo(this);}],Nc,0,By,[],0,0,0,["bW",function(){return ANP(this);
}],AEH,0,By,[],0,0,0,["bW",function(){return A9x(this);}],AFk,0,By,[],0,0,0,["bW",function(){return A06(this);}],AFt,0,By,[],0,0,0,["bW",function(){return AVI(this);}],NH,0,By,[],0,0,0,["bW",function(){return ZP(this);}],L_,0,NH,[],0,0,0,["bW",function(){return AAX(this);}],AHS,0,By,[],0,0,0,["bW",function(){return A6f(this);}],OD,0,L_,[],0,0,0,["bW",function(){return AH8(this);}]]);
$rt_metadata([AMQ,0,OD,[],0,0,0,["bW",function(){return AYy(this);}],ACL,0,By,[],0,0,0,["bW",function(){return A4Z(this);}],AAj,0,By,[],0,0,0,["bW",function(){return AYp(this);}],AJ_,0,By,[],0,0,0,["bW",function(){return A12(this);}],AQc,0,By,[],0,0,0,["bW",function(){return A8e(this);}],AH0,0,By,[],0,0,0,["bW",function(){return A22(this);}],APq,0,By,[],0,0,0,["bW",function(){return AWY(this);}],AEp,0,By,[],0,0,0,["bW",function(){return A0e(this);}],AFZ,0,By,[],0,0,0,["bW",function(){return A4X(this);}],Y0,
0,By,[],0,0,0,["bW",function(){return AVq(this);}],AIx,0,By,[],0,0,0,["bW",function(){return A$6(this);}],APF,0,By,[],0,0,0,["bW",function(){return A2X(this);}],AE9,0,By,[],0,0,0,["bW",function(){return AXJ(this);}],ALd,0,By,[],0,0,0,["bW",function(){return AVw(this);}],ACX,0,By,[],0,0,0,["bW",function(){return A50(this);}],AHa,0,By,[],0,0,0,["bW",function(){return A64(this);}],APT,0,By,[],0,0,0,["bW",function(){return A1i(this);}],ABx,0,By,[],0,0,0,["bW",function(){return AZK(this);}],AAJ,0,By,[],0,0,0,["bW",
function(){return AYQ(this);}],AHY,0,By,[],0,0,0,["bW",function(){return A9t(this);}],La,0,By,[],0,0,0,["bW",function(){return ACN(this);}],AQF,0,La,[],0,0,0,["bW",function(){return AYH(this);}],AMW,0,NL,[],0,0,0,["bW",function(){return A35(this);}],AAC,0,Nc,[],0,0,0,["bW",function(){return AWA(this);}],AKl,0,By,[],0,0,0,["bW",function(){return AXW(this);}],AKQ,0,By,[],0,0,0,["bW",function(){return A1P(this);}],AMA,0,By,[],0,0,0,["bW",function(){return A5K(this);}],AMR,0,By,[],0,0,0,["bW",function(){return ASP(this);
}],AKu,0,D,[],4,0,0,0,Zt,0,D,[],4,3,0,0,Tu,0,D,[],0,3,0,0,RY,0,D,[],0,3,0,0,AL$,0,D,[],4,3,0,0,Wl,0,Ew,[],0,3,0,["lu",function(){A3F(this);},"s5",function(b){AOl(this,b);}],Xl,0,Ew,[],0,3,0,["pv",function(){Y9(this);},"tq",function(b){A6E(this,b);},"lu",function(){A1Z(this);},"s5",function(b){AKo(this,b);}],AMF,0,Ew,[],0,3,0,["lu",function(){A92(this);},"s5",function(b){ANT(this,b);}],CW,"EnumArt",12,EW,[],12,3,0,0,PM,0,Fb,[],0,0,0,0,U7,0,CS,[],0,3,0,["hW",function(){AGn(this);},"iF",function(b){AQs(this,b);
},"hQ",function(b,c,d){YT(this,b,c,d);}],IM,"MinecraftError",12,Fg,[],0,3,0,0,UP,0,D,[],0,3,0,0,Ss,"AbstractCharClass$1",5,Bm,[],0,0,0,["X",function(b){return AVM(this,b);}],Sr,"AbstractCharClass$2",5,Bm,[],0,0,0,["X",function(b){return A3n(this,b);}],Pu,"CharClass$18",5,Bm,[],0,0,0,["X",function(b){return AXT(this,b);},"gk",function(){return A53(this);}],TZ,0,Bm,[],0,0,0,["X",function(b){return A9o(this,b);}],TX,0,Bm,[],0,0,0,["X",function(b){return A0u(this,b);}],TY,0,Bm,[],0,0,0,["X",function(b){return A7n(this,
b);}],T2,0,Bm,[],0,0,0,["X",function(b){return A5b(this,b);}],T3,0,Bm,[],0,0,0,["X",function(b){return ASJ(this,b);}],T0,0,Bm,[],0,0,0,["X",function(b){return AWu(this,b);}]]);
$rt_metadata([T1,0,Bm,[],0,0,0,["X",function(b){return AYc(this,b);}],T5,0,Bm,[],0,0,0,["X",function(b){return A1p(this,b);}],T6,0,Bm,[],0,0,0,["X",function(b){return A4S(this,b);}],Pt,0,Bm,[],0,0,0,["X",function(b){return A_S(this,b);}],PH,0,Bm,[],0,0,0,["X",function(b){return AWz(this,b);}],Pr,0,Bm,[],0,0,0,["X",function(b){return AU3(this,b);}],Ps,0,Bm,[],0,0,0,["X",function(b){return A5Q(this,b);}],Px,0,Bm,[],0,0,0,["X",function(b){return AXe(this,b);}],Pq,0,Bm,[],0,0,0,["X",function(b){return A$l(this,
b);}],Pv,0,Bm,[],0,0,0,["X",function(b){return A4e(this,b);}],Pw,0,Bm,[],0,0,0,["X",function(b){return AZG(this,b);}],OS,0,IB,[],0,0,0,["eJ",function(b,c,d){return AV5(this,b,c,d);},"eW",function(b,c,d,e){return A_H(this,b,c,d,e);},"lA",function(){return AUR(this);}],VI,0,IO,[H7],0,0,0,["mT",function(){return Ll(this);}],Nf,0,Fa,[DM],0,3,0,0,Mq,0,D,[],3,3,0,0,VA,0,D,[Mq],4,3,0,0,Un,0,D,[Je],3,3,0,0,Sh,0,D,[Un],3,3,0,0,S5,0,Fb,[Sh],0,3,0,0,SR,0,D,[LT],3,3,0,0,OU,0,D,[SR],3,3,0,0,AJZ,0,FY,[ES,Dc,OU],0,3,0,0,QV,
0,D,[FB],0,0,0,0,VK,"AbstractCharClass$LazyJavaLowerCase$1",5,Bm,[],0,0,0,["X",function(b){return A1w(this,b);}],Tg,"AbstractCharClass$LazyJavaUpperCase$1",5,Bm,[],0,0,0,["X",function(b){return A33(this,b);}],QM,"AbstractCharClass$LazyJavaWhitespace$1",5,Bm,[],0,0,0,["X",function(b){return ATy(this,b);}],QL,"AbstractCharClass$LazyJavaMirrored$1",5,Bm,[],0,0,0,["X",function(b){return A5J(this,b);}],SA,"AbstractCharClass$LazyJavaDefined$1",5,Bm,[],0,0,0,["X",function(b){return AW5(this,b);}],Ud,"AbstractCharClass$LazyJavaDigit$1",
5,Bm,[],0,0,0,["X",function(b){return A$P(this,b);}],Ph,"AbstractCharClass$LazyJavaIdentifierIgnorable$1",5,Bm,[],0,0,0,["X",function(b){return AZf(this,b);}],U6,"AbstractCharClass$LazyJavaISOControl$1",5,Bm,[],0,0,0,["X",function(b){return A0i(this,b);}],Td,"AbstractCharClass$LazyJavaJavaIdentifierPart$1",5,Bm,[],0,0,0,["X",function(b){return A_w(this,b);}],Tf,"AbstractCharClass$LazyJavaJavaIdentifierStart$1",5,Bm,[],0,0,0,["X",function(b){return AVi(this,b);}],O$,"AbstractCharClass$LazyJavaLetter$1",5,Bm,
[],0,0,0,["X",function(b){return A1J(this,b);}],Ut,"AbstractCharClass$LazyJavaLetterOrDigit$1",5,Bm,[],0,0,0,["X",function(b){return A7A(this,b);}],Uw,"AbstractCharClass$LazyJavaSpaceChar$1",5,Bm,[],0,0,0,["X",function(b){return A83(this,b);}],V1,"AbstractCharClass$LazyJavaTitleCase$1",5,Bm,[],0,0,0,["X",function(b){return A$E(this,b);}],VB,"AbstractCharClass$LazyJavaUnicodeIdentifierPart$1",5,Bm,[],0,0,0,["X",function(b){return A15(this,b);}],OM,"AbstractCharClass$LazyJavaUnicodeIdentifierStart$1",5,Bm,[],
0,0,0,["X",function(b){return AU_(this,b);}],MB,"UnicodeCategory",5,Bm,[],0,0,0,["X",function(b){return AZg(this,b);}],Vo,"UnicodeCategoryScope",5,MB,[],0,0,0,["X",function(b){return A93(this,b);}],Nm,0,D,[],0,3,0,0,JX,0,D,[DM],0,3,0,["eo",function(b){return A$y(this,b);},"fl",function(){return A7L(this);},"lS",function(b){return TL(this,b);}],Qg,0,D,[],3,3,0,0,Xn,0,D,[Qg],0,3,0,0,Sw,0,D,[K_],0,3,0,0,Wv,0,D,[Mq],0,0,0,0,VP,0,D,[],0,3,0,0,R$,0,D,[],3,3,0,0,AF6,0,Ge,[R$],0,3,0,0]);
$rt_metadata([AF0,0,D,[],0,3,0,0,N0,0,D,[],4,3,0,0,HQ,0,D,[],1,3,0,0,AMS,0,HQ,[],0,3,0,0,ACR,0,D,[],0,3,0,0,PA,0,HQ,[],0,3,0,0,T_,0,D,[],0,3,0,0,Vt,0,Fa,[DM],0,3,0,0,TG,0,D,[DH],0,0,0,["gx",function(){return A4s(this);}],TD,0,D,[DH],0,0,0,["gx",function(){return AYl(this);}],Rn,0,D,[DH],0,0,0,["gx",function(){return A8Q(this);}],Rq,0,D,[DH],0,0,0,["gx",function(){return A7d(this);}],E2,0,EW,[],12,3,0,0,Ro,0,D,[DH],0,0,0,["gx",function(){return A7k(this);}],Rp,0,D,[DH],0,0,0,["gx",function(){return A1I(this);
}],Rl,0,D,[DH],0,0,0,["gx",function(){return A5T(this);}],Rm,0,D,[DH],0,0,0,["gx",function(){return A3g(this);}],Er,0,D,[],1,3,0,0,Rg,0,Er,[],0,3,0,0,Ow,0,D,[],0,3,0,0,SP,0,CS,[],0,3,0,["hW",function(){AD5(this);},"pv",function(){ANJ(this);},"rD",function(){AYu(this);},"iF",function(b){AHi(this,b);},"pb",function(b,c){ACZ(this,b,c);},"hQ",function(b,c,d){ABt(this,b,c,d);}],IL,0,EW,[],12,3,0,0,MH,0,D,[J2,Dc],0,3,0,0,Lb,0,MH,[],0,0,0,0,AM0,0,Ge,[],0,3,0,["ly",function(){AYv(this);},"gw",function(b,c,d){AX2(this,
b,c,d);},"tQ",function(){A38(this);},"nO",function(b){AXm(this,b);}],WT,0,D,[],0,3,0,0,Oe,"ArrayIndexOutOfBoundsException",9,BO,[],0,3,0,0,ARk,0,Er,[],0,3,0,0,Ch,0,Er,[],0,3,0,0,BR,0,Er,[],0,3,0,0,Cn,0,Er,[],0,3,0,0,SE,"EntityBubbleFX",12,C1,[],0,3,0,["ep",function(){Y_(this);}],AFp,"EntitySmokeFX",12,C1,[],0,3,0,["kT",function(b,c,d,e,f,g,h){AJ7(this,b,c,d,e,f,g,h);},"ep",function(){ALU(this);}],Q4,"EntityExplodeFX",12,C1,[],0,3,0,["kT",function(b,c,d,e,f,g,h){AR9(this,b,c,d,e,f,g,h);},"ep",function(){AET(this);
}],O5,"EntityFlameFX",12,C1,[],0,3,0,["kT",function(b,c,d,e,f,g,h){AQI(this,b,c,d,e,f,g,h);},"vj",function(b){return ASu(this,b);},"ep",function(){AAS(this);}],AA3,"EntityLavaFX",12,C1,[],0,3,0,["vj",function(b){return AJ8(this,b);},"kT",function(b,c,d,e,f,g,h){AGU(this,b,c,d,e,f,g,h);},"ep",function(){ALj(this);}],ARC,"EntitySplashFX",12,JO,[],0,3,0,0,AIq,0,D,[],4,3,0,0,H$,0,D,[],0,0,0,0,Vk,0,D,[],0,3,0,0,ACc,0,D,[],0,3,0,0,U5,"EntityPickupFX",12,C1,[],0,3,0,["kT",function(b,c,d,e,f,g,h){AMj(this,b,c,d,e,f,
g,h);},"ep",function(){AAL(this);},"xA",function(){return AUw(this);}],Y7,0,D,[],0,3,0,0,HU,0,D,[],0,3,0,["eo",function(b){return A3R(this,b);},"fl",function(){return AVm(this);}],AJj,0,D,[],0,0,0,0]);
function $rt_array(cls,data){this.co=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["Can\'t enter monitor from another thread synchronously","@","0","","Timer hack thread","Player","fuckmojang123","randpasslol","Minecraft main thread","<init>","null","Patter is null",": ","    at ","Caused by: ","  at ","Index out of bounds","String contains invalid digits: ","String contains digits out of radix ","The value is too big for int type: ","String is null or empty","Illegal radix: ",
"#version 300 es","/","UTF-8","overflow-x:hidden;overflow-y:hidden;","WebGL 2.0 is not supported in your browser (",")","NONE","ESCAPE","1","2","3","4","5","6","7","8","9","MINUS","EQUALS","BACK","TAB","Q","W","E","R","T","Y","U","I","O","P","LBRACKET","RBRACKET","RETURN","LCONTROL","A","S","D","F","G","H","J","K","L","SEMICOLON","APOSTROPHE","GRAVE","LSHIFT","BACKSLASH","Z","X","C","V","B","N","M","COMMA","PERIOD","SLASH","RSHIFT","MULTIPLY","LMENU","SPACE","CAPITAL","F1","F2","F3","F4","F5","F6","F7","F8",
"F9","F10","NUMLOCK","SCROLL","NUMPAD7","NUMPAD8","NUMPAD9","SUBTRACT","NUMPAD4","NUMPAD5","NUMPAD6","ADD","NUMPAD1","NUMPAD2","NUMPAD3","NUMPAD0","DECIMAL","F11","F12","F13","F14","F15","F16","F17","F18","KANA","F19","CONVERT","NOCONVERT","YEN","NUMPADEQUALS","CIRCUMFLEX","AT","COLON","UNDERLINE","KANJI","STOP","AX","UNLABELED","NUMPADENTER","RCONTROL","SECTION","NUMPADCOMMA","DIVIDE","SYSRQ","RMENU","FUNCTION","PAUSE","HOME","UP","PRIOR","LEFT","RIGHT","END","DOWN","NEXT","INSERT","DELETE","CLEAR","LMETA",
"RMETA","APPS","POWER","SLEEP","\n","/default.png","Pre startup","Startup","EARLY BETA TESTING!","THIS PROJECT IS STILL IN TESTING!\nTHERE WILL BE BUGS!","Post startup","/dirt.png","Loading...","GL_INVALID_ENUM","GL_INVALID_VALUE","GL_INVALID_OPERATION","GL_OUT_OF_MEMORY","Unknown Error","CONTEXT_LOST_WEBGL","########## GL ERROR ##########","@ ","Pre render","Post render"," fps, "," chunk updates","/terrain.png","Loading level","Generating level","Building terrain","Simulating world for a bit","P: ",". T: ",
"Respawning","main","_net_peytonplayz585_minecraft_infdev_IndexedDBFilesystem","Initialization Failed","EAGPKG!!","invalid epk file","<file>"," end","invalid file hash for ","</file>","/rain.png","Either src or dest is null","window.indexedDB was null or undefined","Can\'t compare "," to ","OPENED","LOCKED","ERROR","yee","End of stream reached","Malformed UTF-8 sequence","charsetName is null","Should never been thrown","Stream closed","footer is not found","Unexpected end of ZLIB input stream","random.splash",
"bubble","splash","random.fizz","Pos","Motion","Rotation","FallDistance","Fire","Air","OnGround","explode","random.hurt","random.bow","random.fuse","mob.sheep","mob.pig","mob.pigdeath","/gui/items.png","/water.png","Slot "," is already occupied by "," when adding ","stone","wood","gravel","grass","cloth","sand","open error","path","New position "," is outside of range [0;","]","New limit ","The last float in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","step.","liquid.water",
"lava","largesmoke","smoke","flame","fire.fire","Large chest","Get resource: ","Duplicate id: ","Furnace","Chest","Sign","MobSpawner","CONFLICT @ ","random.door_close","random.door_open","�","Replacement preconditions do not hold","The last byte in dst ","The last byte in src ","Index ","Capacity is negative: ","The last char in dst ","The last char in src "," is outside of string of size ","Start "," must be before end ","fire.ignite","BIG_ENDIAN","LITTLE_ENDIAN","need dictionary","unknown compression method",
"unknown header flags set","incorrect data check","incorrect length check","incorrect header check","invalid window size","bad extra field length","header crc mismatch","IGNORE","REPLACE","REPORT","Action must be non-null","invalid stored block lengths","invalid block type","too many length or distance symbols","invalid bit length repeat","oversubscribed dynamic bit lengths tree","incomplete dynamic bit lengths tree","oversubscribed distance tree","incomplete distance tree","empty distance tree with lengths",
"oversubscribed literal/length tree","incomplete literal/length tree","invalid distance code","invalid literal/length code","newAction must be non-null","matrix is not supported while recording display list use tessellator class instead","projection matrix stack overflow","texture matrix stack overflow","modelview matrix stack overflow","projection matrix stack underflow","texture matrix stack underflow","modelview matrix stack underflow","only GL_QUADS supported in a display list","vertex format inconsistent in display list",
"keyup","Forward","Left","Back","Right","Jump","Inventory","Drop","Chat","Toggle fog","Save location","Load location","Music: ","OFF","ON","Sound: ","Invert mouse: ","Show FPS: ","Render distance: ","View bobbing: ","3d anaglyph: ","Limit framerate: ","Difficulty: ","Graphics: ","FAST","FANCY","High Performance Mode: ","MipMap: ","FAR","NORMAL","SHORT","TINY","Peaceful","Easy","Normal","Hard","/level.dat","Data","RandomSeed","SpawnX","SpawnY","SpawnZ","Time","SizeOnDisk","Saving level","Saving chunks","LastPlayed",
"/level.dat_new","/level.dat_old","Failed to add entity ","All: ","More than "," updates, aborting lighting updates","DOHASDOSHIH!","TickNextTick list out of synch","%%","!!","/char.png","0123456789abcdef","C: ",". F: ",", O: ",", E: ","E: ",". B: ",", I: ","/terrain/sun.png","/terrain/moon.png","/clouds.png","Pre-beta!","As seen on TV!","Awesome!","100% pure!","May contain nuts!","Better than Prey!","More polygons!","Sexy!","Limited edition!","Flashing letters!","Made by Notch!","Coming soon!","Best in class!",
"When it\'s finished!","Absolutely dragon free!","Excitement!","More than 5000 sold!","One of a kind!","700+ hits on YouTube!","Indev!","Spiders everywhere!","Check it out!","Holy cow, man!","It\'s a game!","Made in Sweden!","Uses LWJGL!","Reticulating splines!","Minecraft!","Yaaay!","Alpha version!","Singleplayer!","Keyboard compatible!","Undocumented!","Ingots!","Exploding creepers!","That\'s not a moon!","l33t!","Create!","Survive!","Dungeon!","Exclusive!","The bee\'s knees!","Down with O.P.P.!","Closed source!",
"Classy!","Wow!","Not on steam!","9.95 euro!","Half price!","Oh man!","Awesome community!","Pixels!","Teetsuuuuoooo!","Kaaneeeedaaaa!","Now with difficulty!","Enhanced!","90% bug free!","Pretty!","12 herbs and spices!","Fat free!","Absolutely no memes!","Free dental!","Ask your doctor!","Minors welcome!","Cloud computing!","Legal in Finland!","Hard to label!","Technically good!","Bringing home the bacon!","Indie!","GOTY!","Ceci n\'est pas une title screen!","Euclidian!","Now in 3D!","Inspirational!","Herregud!",
"Complex cellular automata!","Yes, sir!","Played by cowboys!","OpenGL 1.1!","Thousands of colors!","Try it!","Age of Wonders is better!","Try the mushroom stew!","Sensational!","Hot tamale, hot hot tamale!","Play him off, keyboard cat!","Guaranteed!","Macroscopic!","Bring it on!","Random splash!","Call your mother!","Monster infighting!","Loved by millions!","Ultimate edition!","Freaky!","You\'ve got a brand new key!","Water proof!","Uninflammable!","Whoa, dude!","All inclusive!","Tell your friends!","NP is not in P!",
"Notch <3 Ez!","Music by C418!","Single player","Multi player","Play tutorial level","Options...","/gui/logo.png","Copyright Mojang Specifications. Do not distribute.","Free memory: ","% of ","MB","Allocated memory: ","% (","MB)","/particles.png","/gui/gui.png","/gui/icons.png","Minecraft Infdev","Minecraft Infdev (","Used memory: ","MB) of ","Notch","humanoid","http://www.minecraft.net/skin/",".png","Health","HurtTime","DeathTime","AttackTime","Score","Edit sign message:","mousedown","wheel","Slot","Crafting",
"/gui/inventory.png","/glsl/core.glsl","\n#define CC_a_color\n","#define CC_a_texture0\n","#define CC_lighting\n","#define CC_fog\n","#define CC_alphatest\n","#define CC_unit0\n","\n#define CC_VERT\n","\n\n","\n[/glsl/core.glsl][CC_VERT] ","broken shader file","\n#define CC_FRAG\n","\n[/glsl/core.glsl][CC_FRAG] ","a_position","a_texture0","a_color","\n[LINKER] ","matrix_m","matrix_p","matrix_t","colorUniform","normalUniform","light0Pos","light1Pos","fogColor","fogMode","fogStart","fogEnd","fogDensity","fogPremultiply",
"alphaTestF","tex0","texCoordV0","id","Count","Damage","array size does not equal image size","I Understand!","Respawn","Title menu","Game over!","Score: &e","Save and quit to title..","Back to game","Saving level..","Game menu","/armor/","_","chain","iron","diamond","gold","/item/sign.png","> "," <","Pig","/mob/spider_eyes.png","/mob/saddle.png","/mob/sheep_fur.png","/art/kz.png","random.drr","random.pop","/item/arrows.png","/item/cart.png","Wrong location! ","There\'s no such entity to remove: ","Attempted to place a tile entity where there was no entity tile!",
"Malformed input of length ","Unmappable characters of length ","Options","Controls...","Done","Controls","Select world","World","World ","- empty -"," ("," MB)","Delete world...","Cancel","Delete world","\'","\' will be lost forever!","Are you sure you want to delete this world?","Deleting World!","Please Wait...","(please wait)","%i","###","X#X","#X#","# #","##"," X ","#"," # ","X X","A "," B","#  ","## "," recipes","Is","In",", ","XXX","XX","X#"," #"," #X","# X","{",",","}","Lower","Upper","ASCII","Alpha",
"Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","s","d","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks",
"Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement",
"CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B",
"MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA",
"YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn",
"Me","Mc","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","/gui/furnace.png","/gui/crafting.png","/gui/container.png","Kebab","Aztec","Alban","Aztec2","Bomb","Plant","Wasteland","Pool","Courbet","Sea","Sunset","Wanderer","Match","Bust","Stage","Void","SkullAndRoses","Fighters","Pointer","Yes","Arrow","Item","Painting","Mob","Monster","Creeper","Skeleton","Spider","Giant","Zombie","Sheep","PrimedTnt","FallingSand","Minecart","xPos",
"zPos","The chunk file \'","\' was supposed to be at [","], but the file contained a chunk from [","]. It\'s data will be moved to file \'","\', and a new empty chunk will be created for file \'","\' for [","Corrupt chunk \'","\' was found at: [","The file will be deleted","Failed to serialize chunk at [","] to byte array","LastUpdate","Blocks","SkyLight","BlockLight","HeightMap","TerrainPopulated","Light too large, skipping!","UTF Error","FILE","DIRECTORY","FALSE","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ,.:-_\'*!\"#%/()=+?[]{}<>",
"Sky","Block","buffer is null","Length out of bounds: ","Offset out of bounds: ","random.explode","OW KNOWS!"]);
B4.prototype.toString=function(){return $rt_ustr(this);};
B4.prototype.valueOf=B4.prototype.toString;D.prototype.toString=function(){return $rt_ustr(AUn(this));};
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
=$rt_mainStarter(AQ5);
(function(){var c;c=YL.prototype;c.dispatchEvent=c.Mx;c.addEventListener=c.Yh;c.removeEventListener=c.a0k;c.getLength=c.Vd;c.get=c.Sl;c.addEventListener=c.TB;c.removeEventListener=c.Om;c=W8.prototype;c.handleEvent=c.gR;c=Xc.prototype;c.handleEvent=c.gR;c=Xd.prototype;c.handleEvent=c.gR;c=Xa.prototype;c.handleEvent=c.gR;c=Xb.prototype;c.handleEvent=c.gR;c=W$.prototype;c.handleEvent=c.gR;c=W_.prototype;c.handleEvent=c.gR;c=W9.prototype;c.handleEvent=c.gR;c=QA.prototype;c.handleEvent=c.gR;c=Qz.prototype;c.handleEvent
=c.gR;c=W7.prototype;c.stateChanged=c.a01;c=TK.prototype;c.handleEvent=c.gx;c=TJ.prototype;c.handleEvent=c.gx;c=TI.prototype;c.handleEvent=c.gx;c=TH.prototype;c.handleEvent=c.gR;c=AAZ.prototype;c.getLength=c.Zz;c.get=c.Q2;c=QD.prototype;c.handleEvent=c.gR;c=QC.prototype;c.handleEvent=c.gR;c=QB.prototype;c.onTimer=c.Gh;c=Tv.prototype;c.onTimer=c.Gh;c=TC.prototype;c.handleEvent=c.gx;c=TB.prototype;c.handleEvent=c.gx;c=TG.prototype;c.handleEvent=c.gx;c=TD.prototype;c.handleEvent=c.gx;c=Rn.prototype;c.handleEvent
=c.gx;c=Rq.prototype;c.handleEvent=c.gx;c=Ro.prototype;c.handleEvent=c.gx;c=Rp.prototype;c.handleEvent=c.gx;c=Rl.prototype;c.handleEvent=c.gx;c=Rm.prototype;c.handleEvent=c.gx;})();
})();

//# sourceMappingURL=app.js.map
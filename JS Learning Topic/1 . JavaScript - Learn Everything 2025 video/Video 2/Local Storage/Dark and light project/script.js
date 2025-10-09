// console.log(window.matchMedia('(prefers-color-scheme: dark)').matches)
// true আসে, এর মানে হলো—তোমার অপারেটিং সিস্টেম বা ব্রাউজার বর্তমানে Dark Mode এ আছে।
// যদি false আসে, মানে OS/Browser Light Mode এ আছে।

const moad = window.matchMedia('(prefers-color-scheme:dark)').matches
if(moad){
    console.log("dark")
}else{
    console.log("light")
}
let n = "";//定义一个空字符串作为“*”之间的间隔
        for (let m = 1; m <= 4; m++) {//外层循环控制行数,先输出上半部分的4行

            for (let j = 1; j <= 4 - m; j++) {    
                n = n + " "                      
            } 
            for (let i = 1; i <= m; i++) {//星星数
                n = n + "* ";
            }
            n = n + "\n";//外层循环，每输出一行要换行
        }
        //下半部分和上半部分大致相同
        for (let m = 1; m <= 3; m++) {//外层循环控制行数,输出下半部分的3行

            for (let j = 1; j <= m; j++) {         
                n = n + " " 
            } 
            for (let i = 1; i <= 4 - m; i++) {//星星数 
                n = n + "* ";                       
            }
            n = n + "\n";//外层循环，每输出一行要换行
        }
        console.log(n);
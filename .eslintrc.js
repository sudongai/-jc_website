module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript'
  ],
  rules: {
    'no-case-declarations': 'off',
    'indent': [2, 2, { 'SwitchCase': 1 }], // 使用2个空格进行缩进
    'semi': [2, 'never'], // 不要使用分号。 (参见:1，2，3)
    'padded-blocks': [2, 'never'], // 代码块中避免多余留白
    'one-var': [2, 'never'], // 每个 var 关键字单独声明一个变量
    'quotes': [2, 'single'], // 除需要转义的情况外，字符串串统一使用单引号
    'no-unused-vars': 2, // 不要定义未使用的变量
    'keyword-spacing': 2, // 关键字后面加空格
    'space-before-function-paren': 2, // 函数声明时括号与函数名间加空格
    'eqeqeq': [2, 'always'], // 使⽤用 === 替代 ==
    'space-infix-ops': 2, // 字符串拼接操作符之间要留空格
    'comma-spacing': 2, // 逗号后面加空格
    'brace-style': 2, // else 关键字要与花括号保持在同⼀⾏
    'curly': ['error', 'multi-line'], // 多行 if 语句的括号不能省
    'handle-callback-err': 2, // 不要丢掉异常处理中 err 参数
    'no-undef': 2, // 使用浏览器全局变量时加上 window. 前缀                      1
    'no-multiple-empty-lines': 2, // 不允许有连续多⾏空⾏
    'operator-linebreak': 2, // 对于三元运算符 ? 和 : 与他们所负责的代码处于同一⾏
    'no-cond-assign': 2, // 条件语句中赋值语句使用括号包起来。这样使得代码更加清晰可读，⽽不会认为是将条件判断语句句的全 等号( === )错写成了了等号( = )
    'block-spacing': 'error', // 单⾏代码块两边加空格
    'camelcase': 0, // 对于变量和函数名统一使⽤驼峰命名法
    'comma-dangle': 'off', // 行末逗号 关闭
    'comma-style': 2, // 始终将逗号置于行末
    'dot-location': ['error', 'property'], // 点号操作符须与属性需在同⼀行
    'eol-last': 2, // ⽂件末尾留⼀空⾏
    'func-call-spacing': 2, // 函数调用时标识符与括号间不留间隔
    'key-spacing': 2, // 键值对当中冒号与值之间要留空白
    'new-cap': 2, // 构造函数要以大写字母开头
    'new-parens': 2, // ⽆参的构造函数调用时要带上括号
    'accessor-pairs': 2, // 对象中定义了存值器，一定要对应的定义取值器
    'constructor-super': 2, // ⼦类的构造器中⼀定要调⽤ super
    'no-array-constructor': 2, // 使用数组字面量而不是构造器
    'no-caller': 1, // 避免使用 arguments.callee 和 arguments.caller
    'no-class-assign': 2, // 避免对类名重新赋值
    'no-const-assign': 2, // 避免修改使⽤ const 声明的变量
    'no-constant-condition': 1, // 避免使⽤常量作为条件表达式的条件(循环语句除外)
    'no-control-regex': 2, // 正则中不要使用控制符                               1
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 不要使用 debugger
    'no-delete-var': 2, // 不要对变量使⽤用 delete 操作
    'no-dupe-args': 2, // 不要定义冗余的函数参数
    'no-dupe-class-members': 2, // 类中不要定义冗余的属性
    'no-dupe-keys': 2, // 对象字面量中不要定义重复的属性
    'no-duplicate-case': 2, // switch 语句中不要定义重复的 case 分⽀
    'no-duplicate-imports': 2, // 同⼀模块有多个导⼊时⼀次性写完
    'no-empty-character-class': 2, // 正则中不要使用空字符
    'no-empty-pattern': 2, // 不要解构空值
    'no-eval': 2, // 不要使用 eval()
    'no-ex-assign': 2, // catch 中不要对错误重新赋值
    'no-extend-native': 2, // 不要扩展原生对象
    'no-extra-bind': 2, // 避免多余的函数上下文绑定
    'no-extra-boolean-cast': 2, // 避免不必要的布尔转换
    'no-extra-parens': 2, // 不要使用多余的括号包裹函数
    'no-fallthrough': 'error', // switch ⼀定要使用 break 来将条件分⽀正常中断
    'no-floating-decimal': 2, // 不要省去小数点前面的0
    'no-func-assign': 'error', // 避免对声明过的函数重新赋值
    'no-global-assign': 2, // 不要对全局只读对象重新赋值
    'no-implied-eval': 2, // 注意隐式的 eval()
    'no-inner-declarations': 2, // 嵌套的代码块中禁止再定义函数
    'no-invalid-regexp': 2, // 不要向 RegExp 构造器传⼊非法的正则表达式
    'no-irregular-whitespace': 2, // 不要使用⾮法的空⽩符
    'no-iterator': 2, // 禁止使用 __iterator__
    'no-label-var': 2, // 外部变量不要与对象属性重名
    'no-labels': 2, // 不要使用标签语句
    'no-lone-blocks': 2, // 不要书写不必要的嵌套代码块
    'no-mixed-spaces-and-tabs': 2, // 不要混合使⽤空格与制表符作为缩进
    'no-multi-spaces': 2, // 除了缩进，不要使用多个空格
    'no-multi-str': 2, // 不要使用多⾏字符串
    'no-new': 2, // new 创建对象实例后需要赋值给变量
    'no-new-func': 2, // 禁⽌使用 Function 构造器
    'no-new-object': 2, // 禁⽌使⽤ Object 构造器
    'no-new-require': 2, // 禁⽌使用 new require
    'no-new-symbol': 2, // 禁止使用 Symbol 构造器
    'no-new-wrappers': 2, // 禁⽌使⽤原始包装器
    'no-obj-calls': 2, // 不要将全局对象的属性作为函数调用
    'no-octal': 2, // 不要使用八进制字⾯量
    'no-octal-escape': 2, // 字符串字⾯量中也不要使用⼋进制转义字符
    'no-path-concat': 2, // 使⽤ __dirname 和 __filename 时尽量避免使用字符串拼接
    'no-proto': 2, // 使⽤ getPrototypeOf 来替代 __proto__
    'no-redeclare': 2, // 不要重复声明变量
    'no-regex-spaces': 2, // 正则中避免使用多个空格
    'no-return-assign': 2, // return 语句中的赋值必需有括号包裹
    'no-self-assign': 2, // 避免将变量赋值给自己
    'no-self-compare': 2, // 避免将变量与自⼰进行⽐较操作
    'no-sequences': 2, // 避免使⽤逗号操作符
    'no-shadow-restricted-names': 2, // 不要随意更改关键字的值
    'no-sparse-arrays': 2, // 禁⽌使用稀疏数组(Sparse arrays)
    'no-tabs': 2, // 不要使用制表符
    'no-template-curly-in-string': 2, // 正确使用 ES6 中的字符串模板
    'no-this-before-super': 2, // 使⽤ this 前请确保 super() 已调用
    'no-throw-literal': 2, // ⽤ throw 抛错时，抛出 Error 对象而不是字符串
    'no-trailing-spaces': 2, // ⾏末不留空格
    'no-undef-init': 2, // 不要使用 undefined 来初始化变量
    'no-unmodified-loop-condition': 2, // 循环语句中注意更新循环变量
    'no-unneeded-ternary': ['error', {
      'defaultAssignment': false
    }], // 如果有更好的实现，尽量不要使用三元表达式
    'no-unreachable': 2, // return ， throw ， continue 和 break 后不要再跟代码
    'no-unsafe-finally': 2, // finally 代码块中不要改变程序执行流程
    'no-unsafe-negation': 2, // 关系运算符的左值不要做取反操作
    'no-useless-call': 1, // 避免不必要的 .call() 和 .apply()
    'no-useless-computed-key': 1, // 避免使⽤不必要的计算值作对象属性
    'no-useless-constructor': 2, // 禁⽌多余的构造器
    'no-useless-escape': 2, // 禁⽌不必要的转义
    'no-useless-rename': 2, // import, export 和解构操作中，禁⽌赋值到同名变量
    'no-whitespace-before-property': 2, // 属性前面不要加空格
    'no-with': 2, // 禁⽌使用 with
    'object-property-newline': 2, // 对象属性换行时注意统⼀代码⻛风格
    'rest-spread-spacing': 2, // 展开运算符与它的表达式间不要留空白
    'semi-spacing': 2, // 遇到分号时空格要后留前不留
    'space-before-blocks': 2, // 代码块⾸尾留空格
    'space-in-parens': 2, // 圆括号间不留空格
    'space-unary-ops': 2, // 一元运算符后面跟一个空格
    'spaced-comment': 2, // 注释首尾留空格
    'template-curly-spacing': 2, // 模板字符串中变量前后不不加空格
    'use-isnan': 2, // 检查 NaN 的正确姿势是使用 isNaN()
    'valid-typeof': 2, // ⽤合法的字符串跟 typeof 进⾏比较操作
    'wrap-iife': 2, // ⾃调用匿名函数 (IIFEs) 使⽤括号包裹
    'yield-star-spacing': 2, // yield * 中的 * 前后都要有空格
    'yoda': 2, // 请书写优雅的条件语句(avoid Yoda conditions)
    'no-unexpected-multiline': 2, // 不要使用 ( , [ , or ` 等作为一行的开始。在没有分号的情况下代码压缩后会导致报错，⽽坚持这一规范则可避免出错
    'no-console': 'off'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}

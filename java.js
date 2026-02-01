/*
! Task: Developing a Three-Level Nesting Function
*/

function outerFunction(arg1) {
  function innerFunction(arg2) {
    function deepInnerFunction(arg3) {
      return arg1 * arg2 * arg3
    }

    return deepInnerFunction
  }

  return innerFunction
}

// const result = outerFunction(2)(3)(4)
// console.log(result) // 24

export { outerFunction }


/*
! Task: Implement a Curried Function to Build a Full Domain Name
*/

function curriedDomain(protocol) {
  return function (domainName) {
    return function (tld) {
      return `${protocol}://${domainName}.${tld}`
    }
  }
}

// const protocolSetter = curriedDomain('https')
// const domainNameSetter = protocolSetter('example')
// const fullDomain = domainNameSetter('com')
// console.log('Full Domain:', fullDomain)

export { curriedDomain }


/*
! Task: Developing a Higher-Order Function to Modify the Behavior of Another Function
*/

function originalFunction(num) {
  return num * num
}

function modifyFunction(originalFunc, multiplier) {
  return function (num) {
    return originalFunc(num) * multiplier
  }
}

// const modifiedFunc = modifyFunction(originalFunction, 3)
// console.log('Original function output for 4:', originalFunction(4)) // 16
// console.log('Modified function output for 4:', modifiedFunc(4)) // 48

export { originalFunction, modifyFunction }


/*
! Task: Implement a Curried Function to Add Three Numbers Sequentially
*/

function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}

// const addFirst = curriedAdd(1)
// const addSecond = addFirst(2)
// const result = addSecond(3)
// console.log('Result:', result) // 6

export { curriedAdd }

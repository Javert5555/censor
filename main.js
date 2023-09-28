/**
 * Возвращает подвергнутую цензуре строку или сохраняет пару слов, подлежащих цензуре.
 * @returns {function} Фукнция, принимающая 1 или больше строк в качестве аргументов.
 */
function censor() {
  const couples = []
  return (...args) => {
    if (args.length > 1) {
      couples.push(args)
    } else {
      let answer = args[0]
      couples.forEach((val) => {
        answer = answer.replaceAll(val[0], val[1])
      })
      return answer
    }
  }
}

const changeScene = censor()

changeScene('PHP', 'JS')

changeScene('backend', 'frontend')

console.log(changeScene('PHP is the most popular programming language for backend web-development'))

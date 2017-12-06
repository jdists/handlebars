import * as handlebars from 'handlebars'
import * as jdistsUtil from 'jdists-util'
import * as jsyaml from 'js-yaml'

interface IHandlebarsAttrs extends jdistsUtil.IAttrs {
  /**
   * 数据来源
   */
  data?: string
  /**
   * 扩展函数
   */
  extend?: string
}

/**
 * handlebars 模板渲染
 *
 * @param content 文本内容
 * @param attrs 属性
 * @param attrs.data 数据项，支持 JSON 和 YAML
 * @param attrs.extend 扩展函数
 * @param scope 作用域
 * @param scope.execImport 导入数据
 * @return 返回渲染后的结果
 * @example processor():base
  ```js
  let attrs = {
    data: '#name'
  }
  let scope = {
    execImport: function (importion) {
      return {
        name: 'tom',
        age: 13
      }
    },
  }
  console.log(processor('<b>{{name}} - {{age}}</b>', attrs, scope))
  // > <b>tom - 13</b>
  ```
 * @example processor():data is undefined & extend
  ```js
  let attrs = {
    extend: `
      require('handlebars-helpers')({
        handlebars: handlebars
      })
    `
  }
  let scope = {
    execImport: function (importion) {
      return importion
    },
  }
  console.log(processor('{{ordinalize 1}}', attrs, scope))
  // > 1st
  ```
 * @example processor():content is null
  ```js
  console.log(processor(null))
  // > null
  ```
 */
export = (function (content: string, attrs: IHandlebarsAttrs, scope: jdistsUtil.IScope): string {
  if (!content) {
    return content
  }

  let render = handlebars.compile(content)
  let data = null
  if (attrs.data) {
    data = scope.execImport(attrs.data, true)
  }

  let extend = null
  if (attrs.extend) {
    extend = jdistsUtil.buildFunction(String(scope.execImport(attrs.extend)), 'handlebars')
    extend(handlebars)
  }

  return render(data)
}) as jdistsUtil.IProcessor
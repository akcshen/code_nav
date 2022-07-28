// @ts-ignore
import SvgIcon from '@/components/SvgIcon'

const svgRequired = require.context('./svg', false, /\.svg$/)
svgRequired.keys().forEach((item) => svgRequired(item))

export default (app: any) => {
  app.component('svg-icon', SvgIcon)
}

import CMS from 'netlify-cms'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import MembershipPagePreview from './preview-templates/MembershipPagePreview'
import ExecomPagePreview from './preview-templates/ExecomPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import EventCardPreview from './preview-templates/EventCardPreview'
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('membership', MembershipPagePreview)
CMS.registerPreviewTemplate('execom', ExecomPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('events', EventCardPreview)

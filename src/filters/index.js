import Vue from 'vue'
import { formatFileSize } from './format-file-size'

Vue.filter('formatFileSize', formatFileSize)

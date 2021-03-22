import React from 'react'
import s from './FormsControls.module.css'

//отдельно берём из пропсов input и meta, всё остальное оставляем в props - 77 видео, 25:30 - деструктуризация пропсов
export const ElementConstructor = (HtmlTag) => ({ input, meta, ...props }) => {

  const hasError = meta.touched && meta.error

  return (
    <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
      <div>
        <HtmlTag {...input} {...props} />
      </div>
      { hasError && <span>{meta.error}</span> } 
    </div>
  )
}
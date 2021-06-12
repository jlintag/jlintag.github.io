import React from 'react';
import { InlineForm, InlineText } from 'react-tinacms-inline';
import { useCMS, useForm, usePlugin } from 'tinacms';

const WorkSection = ({ section: initialSection, preview }) => {
  const cms = useCMS();
  const formConfig = {
    id: initialSection.id,
    label: 'Work Section',
    initialValues: initialSection,
    onSubmit: async values => {
      const saveMutation = `
      mutation UpdateWorkSection(
        $id: ID!
        $title: String
        $workplace: String
        $start: Date
        $end: Date
      ) {
        updateWorkSection(
          input: {
            where: { id: $id }
            data: { title: $title, workplace: $workplace, start: $start, end: $end}
          }
        ) {
          workSection {
            id
          }
        }
      }`;
      const response = await cms.api.strapi.fetchGraphql(saveMutation, {
        id: values.id,
        title: values.title,
        workplace: values.workplace,
        start: values.start,
        end: values.end
      });
      if (response.data) {
        cms.alerts.success('Changes Saved');
      } else {
        cms.alerts.error('Error saving changes');
      }
    },
    fields: []
  };
  const [section, form] = useForm(formConfig);
  usePlugin(form);
  return (
    <InlineForm form={form} initialStatus={'active'}>
      <section>
        <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
          <InlineText name="title" />
          <InlineText name="workplace" />
          <InlineText name="start" />
          <InlineText name="end" />
        </div>
      </section>
    </InlineForm>
  );
};

export default WorkSection;

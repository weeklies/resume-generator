import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GeneralSection from './components/result/GeneralSection';
import EducationSection from './components/result/EducationSection';
import WorkSection from './components/result/WorkSection';
import { educationExample, workExample, generalExample } from './examples';
import './App.css';
import ResumeForm from './components/form/ResumeForm';
import { EduArticle, WorkArticle } from './models/models';

function App() {
  const [state, setState] = React.useState({
    general: generalExample,
    education: educationExample,
    work: workExample,
  });

  function handleElementChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    property?: 'work' | 'education'
  ) {
    const { id, value } = e.target;

    // Input is from General section of form.
    if (property === undefined) {
      setState({
        ...state,
        general: {
          ...state.general,
          [id]: value,
        },
      });
      return;
    } else {
      // Input is from Work or Education section of form.
      const [name, article_index, responsibility_index] = id.split('-');
      if (article_index === undefined) return;

      setState({
        ...state,
        [property]: {
          ...state[property],
          articles: state[property].articles.map((article, i) => {
            if (i !== +article_index) return article;

            if (responsibility_index === undefined) {
              return { ...article, [name]: value };
            } else {
              return {
                ...article,
                responsibilities: article.responsibilities.map(
                  (resp, resp_i) => {
                    if (resp_i !== +responsibility_index) return resp;
                    return value;
                  }
                ),
              };
            }
          }),
        },
      });
    }
  }

  function handleItemAdd(property: 'work' | 'education') {
    const newArticle: WorkArticle | EduArticle =
      property === 'work'
        ? { role: '', company: '', date: '', responsibilities: [''] }
        : { course: '', school: '', date: '', responsibilities: [''] };
    setState({
      ...state,
      [property]: {
        ...state[property],
        articles: [...state[property].articles, newArticle],
      },
    });
  }

  function handleItemDelete(
    e: React.MouseEvent<HTMLButtonElement>,
    property: 'work' | 'education'
  ) {
    const rawId = e.currentTarget.id;
    const id = rawId.split('-')[1];
    setState({
      ...state,
      [property]: {
        ...state[property],
        // any is used here because of a bug causing filter() to fail
        //    see: https://github.com/microsoft/TypeScript/issues/44373
        // articles: state[property].articles.filter((_, i) => i !== +id)
        articles: (state[property].articles as any).filter(
          (_: any, i: number) => i !== +id
        ),
      },
    });
  }

  function handleResponsibilityAdd(
    e: React.MouseEvent<HTMLButtonElement>,
    property: 'work' | 'education'
  ) {
    const rawId = e.currentTarget.id;
    const id = rawId.split('-')[1];
    setState({
      ...state,
      [property]: {
        ...state[property],
        articles: state[property].articles.map((article, i) => {
          if (i !== +id) return article;

          return {
            ...article,
            responsibilities: [...article.responsibilities, ''],
          };
        }),
      },
    });
  }

  function handleResponsibilityDelete(
    e: React.MouseEvent<HTMLButtonElement>,
    property: 'work' | 'education'
  ) {
    const rawId = e.currentTarget.id;
    const id = rawId.split('-')[1];
    setState({
      ...state,
      [property]: {
        ...state[property],
        articles: state[property].articles.map((article, i) => {
          if (i !== +id) return article;

          return {
            ...article,
            responsibilities: article.responsibilities.slice(0, -1),
          };
        }),
      },
    });
  }
  return (
    <div className='App'>
      <Header />
      <main>
        <ResumeForm
          {...state}
          onElementChange={handleElementChange}
          onItemDelete={handleItemDelete}
          onItemAdd={handleItemAdd}
          onResponsbilityAdd={handleResponsibilityAdd}
          onResponsbilityDelete={handleResponsibilityDelete}
        />
        <div className='d-flex flex-column align-items-center'>
          <h1>Result</h1>
          <div className='result my-3'>
            <GeneralSection {...state.general} />
            <EducationSection {...state.education} />
            <WorkSection {...state.work} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

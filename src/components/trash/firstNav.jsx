;<Routes>
  <Route path="/" element={<SharedLayout />}>
    <Route index element={<Home />} />
    <Route>
      {' '}
      <Route path="/books" element={<Books />} />
      <Route path="books-for-patients" element={<BooksForPatients />} />
      <Route path="latest-books" element={<LatestBooks />} />
      <Route path="books-for-therapist" element={<BooksForTherapists />} />
    </Route>
    <Route path="internet-sources" element={<InternetSources />} />
    <Route>
      <Route path="knowledge-base" element={<KnowledgeBase />} />
      <Route path="authored-articles" element={<AuthoredArticles />} />
      <Route path="experts" element={<Experts />} />
      <Route path="case-study" element={<CaseStudy />} />
      <Route path="studies-and-articles" element={<StudiesAndArticles />} />
    </Route>
    <Route>
      <Route path="materials" element={<Materials />} />
      <Route path="adults" element={<Adults />} />
      <Route path="children" element={<Children />} />
      <Route path="documents" element={<Documents />} />
      <Route path="movie" element={<Movie />} />
      <Route path="network" element={<Network />} />
      <Route path="questionnaire" element={<Questionnaire />} />
    </Route>
    <Route path="news" element={<News />} />
    <Route>
      <Route path="online-tools" element={<OnlineTools />} />
      <Route path="tools" element={<Tools />} />
      <Route path="articles" element={<Articles />} />
    </Route>
    <Route>
      <Route path="webinars" element={<Webinars />} />
      <Route
        path="conversations-about-therapys"
        element={<ConversationsAboutTherapy />}
      />
      <Route
        path="we-are-learning-therapy"
        element={<WeAreLearningTherapy />}
      />
    </Route>{' '}
    <Route path="*" element={<Home />} />
  </Route>
</Routes>

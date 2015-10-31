(ns offcourse.models.fake-data)

(def checkpoint {:id :new
                 :task "Do Something Different"
                 :url "bla.com"
                 :completed false})

(def text
  "# Lorem Ipsum Dolor

  sit amet, consectetur adipiscing elit. Quisque tellus ligula, consequat ut accumsan quis, vulputate vel massa. Maecenas interdum convallis lorem a auctor. Pellentesque sagittis, odio sit amet pulvinar pretium, massa ligula dapibus orci, non laoreet leo neque dignissim libero. Vestibulum a congue metus. Cras ultrices elit quis turpis pharetra, ut dictum sem tincidunt. Quisque id lectus sed elit auctor commodo ac non nunc. Nullam ut mauris pellentesque, pellentesque lacus nec, cursus augue. Donec in viverra diam. Cras non ultrices libero. Curabitur a suscipit quam. Praesent posuere magna iaculis quam imperdiet porta. Donec tristique lacus et faucibus efficitur. Pellentesque nec nisl ultricies, malesuada metus nec, facilisis nibh.

  Donec et lobortis nulla. Donec gravida sollicitudin est at interdum. Suspendisse non placerat risus. Duis sit amet dapibus lacus, a viverra turpis. Nulla mattis diam vitae turpis pulvinar, ac convallis magna porttitor. Phasellus laoreet leo vitae faucibus convallis. Maecenas luctus leo tellus, eget mollis felis efficitur in. Donec egestas interdum lorem, a scelerisque mauris feugiat non. Pellentesque ultrices accumsan posuere. Nunc velit est, auctor id eros eu, laoreet malesuada est. Sed orci turpis, tempus vel orci sit amet, fringilla egestas augue. In egestas turpis nec metus mattis ultrices. Nullam dapibus nulla eget ante posuere, eget dignissim odio lacinia. Quisque condimentum tempus orci. Donec quam massa, sagittis sed gravida eget, ultrices id magna.

  Aliquam erat volutpat. Vestibulum ut hendrerit metus. Mauris malesuada ultricies eros, eget suscipit eros fermentum et. Vivamus condimentum dapibus lacus, eget auctor leo porttitor eu. Duis efficitur sodales purus quis faucibus. Pellentesque eu convallis eros, id auctor felis. Nam consectetur feugiat lectus, at ultrices dui lobortis eu. Sed aliquet nisi in metus viverra, quis pretium ipsum rhoncus. Suspendisse luctus lectus sapien, a iaculis tortor egestas nec. Nulla venenatis placerat euismod. Integer ornare dui non volutpat egestas. Sed faucibus sed lorem at ultrices. Donec nec pulvinar erat. Morbi imperdiet posuere nulla, nec pulvinar lectus. Phasellus posuere auctor dui, eget dignissim nisi placerat nec.

  Suspendisse erat ex, finibus sit amet tincidunt vel, vulputate at leo. Vestibulum vel euismod lacus, ornare condimentum quam. Phasellus interdum nisi lorem, sed iaculis erat luctus non. Duis augue diam, semper a fringilla vitae, lacinia quis arcu. Vestibulum varius ipsum orci, quis molestie massa viverra quis. Morbi gravida dolor vitae eros ornare, non sollicitudin leo ullamcorper. Sed vestibulum nisi sed ex tempor, nec auctor libero lobortis. Nulla facilisi. Nulla lacus mi, dictum sit amet ipsum at, ultricies euismod turpis. In eu libero urna. Praesent congue iaculis quam, eget rutrum ligula auctor quis. Praesent iaculis sapien dui, vel dapibus lectus rutrum volutpat.

  Suspendisse sit amet tellus neque. Duis et purus ac justo consequat pulvinar. Integer lobortis arcu justo, at ullamcorper sem maximus quis. Duis a augue cursus, posuere felis ac, imperdiet lectus. Vestibulum egestas, neque a consequat pellentesque, metus dui vulputate ex, eu laoreet nunc enim ut felis. Ut placerat eget orci in dictum. Mauris rutrum faucibus mauris at interdum. Morbi eget libero sit amet urna venenatis condimentum.")


(def courses [{:goal "Become a Frontend Ninja"
               :checkpoints [{:task "Install React"
                              :completed true}
                             {:task "Build a Component"
                              :completed false}
                             {:task "Create an App"
                              :completed false}]}
              {:goal "Improve your Backend Chops"
               :checkpoints [{:task "Install Node"
                              :completed true}
                             {:task "Set up a Route"
                              :completed false}
                             {:task "Add some Middleware"
                              :completed false}
                             {:task "Build an API"
                              :completed false}]}
              {:goal "Get More Street Cred"
               :checkpoints [{:task "Talk Dirty with Reika"
                              :completed false}
                             {:task "Pair with Greg"
                              :completed false}
                             {:task "Scheme with Charlotte"
                              :completed false}
                             {:task "Brawl with Yeehaa"
                              :completed false}]}
              {:goal "Make DevOps Your Thing"
               :checkpoints [{:task "Tame the Command Line"
                              :completed false}
                             {:task "Just Git It"
                              :completed false}
                             {:task "Try a PAAS"
                              :completed false}
                             {:task "Make Containers"
                              :completed false}
                             {:task "Do it All"
                              :completed false}]}])

(def urls ["facebook.com"
           "google.com"
           "yahoo.com"
           "offcourse.io"])

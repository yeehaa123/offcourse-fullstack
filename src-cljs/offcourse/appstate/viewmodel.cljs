(ns offcourse.appstate.viewmodel)

(defrecord CheckpointViewmodel [level course checkpoint-id])
(defrecord CourseViewmodel [level course])
(defrecord CollectionViewmodel [level collection collection-name collection-names])

(defn new-checkpoint-vm [course checkpoint-id]
  (map->CheckpointViewmodel {:level :checkpoint
                             :course course
                             :checkpoint-id checkpoint-id}))

(defn new-course-vm [course]
  (map->CheckpointViewmodel {:level :course
                             :course course}))

(defn new-collection-vm [collection-name collection]
  (map->CollectionViewmodel {:level :collection
                             :collection collection
                             :collection-name collection-name
                             :collection-names [:featured :new :popular]}))

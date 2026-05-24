import { useState } from "react";
import { Plus, Trash2, BarChart3, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CGPACalculator = () => {
  const styles = {
    page: 'landing-page min-h-screen bg-gradient-to-br from-[#f9fdff] to-[#eef5fa]',
    badge: 'bg-[#e8f4ff] border-[#b8d5ea] text-[#0077b6]',
    title: 'text-[#0f2a3f] font-display',
    card: 'bg-white border border-[#b8d5ea]',
  };

  const [courses, setCourses] = useState([
    { id: 1, name: "Mathematics", credits: 4, grade: "A", gradePoint: 4.0 },
    { id: 2, name: "Physics", credits: 3, grade: "A-", gradePoint: 3.7 },
  ]);

  const [newCourse, setNewCourse] = useState({
    name: "",
    credits: 3,
    grade: "A",
  });

  const gradePoints = {
    "A+": 4.0,
    "A": 4.0,
    "A-": 3.7,
    "B+": 3.3,
    "B": 3.0,
    "B-": 2.7,
    "C+": 2.3,
    "C": 2.0,
    "C-": 1.7,
    "D": 1.0,
    "F": 0.0,
  };

  const calculateCGPA = () => {
    if (courses.length === 0) return 0;
    const totalGradePoints = courses.reduce((sum, course) => sum + (course.gradePoint * course.credits), 0);
    const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);
    return (totalGradePoints / totalCredits).toFixed(2);
  };

  const addCourse = () => {
    if (newCourse.name && newCourse.credits) {
      setCourses([
        ...courses,
        {
          id: Date.now(),
          name: newCourse.name,
          credits: parseInt(newCourse.credits),
          grade: newCourse.grade,
          gradePoint: gradePoints[newCourse.grade],
        },
      ]);
      setNewCourse({ name: "", credits: 3, grade: "A" });
    }
  };

  const removeCourse = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  const updateCourseGrade = (id, newGrade) => {
    setCourses(courses.map(course => 
      course.id === id 
        ? { ...course, grade: newGrade, gradePoint: gradePoints[newGrade] }
        : course
    ));
  };

  const cgpa = calculateCGPA();

  return (
    <div className={styles.page}>
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="mb-8 text-center">
            <div className={`inline-flex items-center gap-2 rounded-full ${styles.badge} px-4 py-1.5 border mb-4`}>
              <Calculator className="h-4 w-4" />
              GPA Management
            </div>
            <h1 className={`text-3xl font-bold ${styles.title} md:text-4xl mb-2`}>
              CGPA Calculator
            </h1>
            <p className="text-[#284660]">
              Track your academic performance and calculate your cumulative GPA in real-time.
            </p>
          </div>

          {/* CGPA Display */}
          <div className={`${styles.card} rounded-xl p-8 mb-8 shadow-lg`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-[#284660] mb-2">Current CGPA</p>
                <div className="text-5xl font-bold bg-gradient-to-r from-[#0077b6] to-[#00a6fb] bg-clip-text text-transparent">
                  {cgpa}
                </div>
              </div>
              <div className="text-center border-l border-r border-[#b8d5ea]">
                <p className="text-[#284660] mb-2">Total Courses</p>
                <div className="text-5xl font-bold text-[#0f2a3f]">
                  {courses.length}
                </div>
              </div>
              <div className="text-center">
                <p className="text-[#284660] mb-2">Total Credits</p>
                <div className="text-5xl font-bold text-[#0f2a3f]">
                  {courses.reduce((sum, course) => sum + course.credits, 0)}
                </div>
              </div>
            </div>
          </div>

          {/* Add Course Form */}
          <div className={`${styles.card} rounded-xl p-6 mb-8 shadow-md`}>
            <h2 className={`text-xl font-bold ${styles.title} mb-4`}>Add New Course</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label className="text-[#0f2a3f]">Course Name</Label>
                  <Input
                    placeholder="e.g., Mathematics"
                    value={newCourse.name}
                    onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
                    className="border-[#b8d5ea] focus:ring-[#0077b6]"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[#0f2a3f]">Credits</Label>
                  <Input
                    type="number"
                    min="1"
                    max="10"
                    value={newCourse.credits}
                    onChange={(e) => setNewCourse({ ...newCourse, credits: e.target.value })}
                    className="border-[#b8d5ea] focus:ring-[#0077b6]"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[#0f2a3f]">Grade</Label>
                  <Select value={newCourse.grade} onValueChange={(value) => setNewCourse({ ...newCourse, grade: value })}>
                    <SelectTrigger className="border-[#b8d5ea] focus:ring-[#0077b6]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.keys(gradePoints).map((grade) => (
                        <SelectItem key={grade} value={grade}>{grade}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end">
                  <Button
                    onClick={addCourse}
                    className="w-full bg-gradient-to-r from-[#0077b6] to-[#00a6fb] text-white hover:shadow-lg"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Course
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Courses List */}
          <div className="space-y-4">
            <h2 className={`text-xl font-bold ${styles.title} mb-4`}>Your Courses</h2>
            {courses.length === 0 ? (
              <div className={`${styles.card} rounded-xl p-8 text-center`}>
                <BarChart3 className="h-12 w-12 text-[#b8d5ea] mx-auto mb-4" />
                <p className="text-[#284660]">No courses added yet. Add your first course to get started!</p>
              </div>
            ) : (
              courses.map((course) => (
                <div key={course.id} className={`${styles.card} rounded-xl p-4 flex items-center justify-between shadow-md hover:shadow-lg transition-shadow`}>
                  <div className="flex-1">
                    <h3 className={`font-bold ${styles.title}`}>{course.name}</h3>
                    <p className="text-[#284660] text-sm">
                      {course.credits} Credits • Grade: {course.grade} • Points: {course.gradePoint}
                    </p>
                  </div>
                  <Select
                    value={course.grade}
                    onValueChange={(newGrade) => updateCourseGrade(course.id, newGrade)}
                  >
                    <SelectTrigger className="w-24 border-[#b8d5ea]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.keys(gradePoints).map((grade) => (
                        <SelectItem key={grade} value={grade}>{grade}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeCourse(course.id)}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CGPACalculator;
